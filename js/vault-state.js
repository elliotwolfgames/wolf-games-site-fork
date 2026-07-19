/* ============================================================
   Wolf Games. Vault state.
   Anonymous-first: no auth, no backend user store. All player
   state lives in localStorage on this device.
   ============================================================

   TODO(embed): when game clients run inside partner iframes on
   other domains, localStorage on this origin may be partitioned
   or unavailable (Safari ITP, Chrome storage partitioning).
   Deliberately not solved here. The storage backend below is a
   single get/set wrapper so a partitioned-storage bridge or a
   server-side identity layer can drop in later without touching
   the rest of this module.
============================================================ */
(function(global){
  'use strict';

  var KEY='wg.vault.v1';

  /* swappable storage backend: keep ALL reads/writes behind these two */
  var backend={
    get:function(){
      try{ return JSON.parse(global.localStorage.getItem(KEY)||'null'); }
      catch(e){ return null; }
    },
    set:function(s){
      try{ global.localStorage.setItem(KEY,JSON.stringify(s)); }catch(e){}
    }
  };

  /* ---- local-day helpers: every boundary is this device's local midnight ---- */
  function pad(n){ return (n<10?'0':'')+n; }
  function dayOf(d){ d=d||new Date(); return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }
  function dateOfDay(day){ var p=day.split('-'); return new Date(+p[0],+p[1]-1,+p[2]); }
  function prevDay(day){ var d=dateOfDay(day); d.setDate(d.getDate()-1); return dayOf(d); }
  function dayDiff(a,b){ return Math.round((dateOfDay(b)-dateOfDay(a))/86400000); }
  function msUntilNextDay(){
    var n=new Date();
    return new Date(n.getFullYear(),n.getMonth(),n.getDate()+1)-n;
  }

  function freshState(){
    return {
      v:1,
      deviceId:'wg-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10),
      firstSeenDay:dayOf(),
      lastVisitDay:null,
      plays:{},          /* slug -> [{day:'YYYY-MM-DD', ts:number, completed:bool}] */
      bestStreak:0
    };
  }

  var state=backend.get();
  if(!state || state.v!==1){ state=freshState(); backend.set(state); }
  function save(){ backend.set(state); }

  function track(ev,props){ if(global.WGTrack) global.WGTrack.emit(ev,props); }

  function daysWithPlays(){
    var set={};
    Object.keys(state.plays).forEach(function(slug){
      state.plays[slug].forEach(function(p){ set[p.day]=true; });
    });
    return set;
  }

  /* consecutive days with at least one play, ending today or yesterday */
  function getStreak(){
    var set=daysWithPlays(), today=dayOf(), y=prevDay(today);
    var d=set[today]?today:(set[y]?y:null);
    if(!d) return 0;
    var n=0;
    while(set[d]){ n++; d=prevDay(d); }
    return n;
  }

  /* fires on launch, not on completion */
  function recordPlay(slug){
    if(!slug) return getStreak();
    var before=getStreak(), today=dayOf();
    (state.plays[slug]=state.plays[slug]||[]).push({day:today,ts:Date.now(),completed:false});
    var after=getStreak();
    if(after>state.bestStreak) state.bestStreak=after;
    save();
    track('game_launch',{slug:slug,day:today,streak:after});
    if(after>before) track('streak_increment',{streak:after});
    return after;
  }

  /* TODO(games): game clients do not yet emit a confirmed completion
     postMessage. The shell listens for {type:'wg:complete', slug} and
     calls this; update the listener when the clients ship a real signal. */
  function recordComplete(slug){
    if(!slug || !state.plays[slug]) return;
    var today=dayOf(), list=state.plays[slug];
    for(var i=list.length-1;i>=0;i--){
      if(list[i].day===today){ list[i].completed=true; break; }
    }
    save();
    track('game_complete',{slug:slug,day:today});
  }

  /* today's status across a catalog of slugs */
  function getTodayStatus(slugs){
    var today=dayOf(), by={}, playedCount=0, completedCount=0;
    (slugs||Object.keys(state.plays)).forEach(function(slug){
      var played=false, completed=false;
      (state.plays[slug]||[]).forEach(function(p){
        if(p.day===today){ played=true; if(p.completed) completed=true; }
      });
      by[slug]={played:played,completed:completed};
      if(played) playedCount++;
      if(completed) completedCount++;
    });
    return {day:today,bySlug:by,playedCount:playedCount,completedCount:completedCount};
  }

  function getHistory(){
    var out={};
    Object.keys(state.plays).forEach(function(slug){
      var list=state.plays[slug];
      out[slug]={
        plays:list.length,
        lastDay:list.length?list[list.length-1].day:null,
        completed:list.filter(function(p){return p.completed;}).length
      };
    });
    return out;
  }

  /* session bookkeeping: one call per page load (track.js owns this) */
  function visit(){
    var today=dayOf(), last=state.lastVisitDay;
    var info={
      deviceId:state.deviceId,
      isNew:!last,
      newLocalDay:last!==today,
      daysSinceLastVisit:last?dayDiff(last,today):0
    };
    state.lastVisitDay=today;
    save();
    return info;
  }

  global.WGVaultState={
    deviceId:state.deviceId,
    recordPlay:recordPlay,
    recordComplete:recordComplete,
    getStreak:getStreak,
    getBestStreak:function(){ return state.bestStreak; },
    getTodayStatus:getTodayStatus,
    getHistory:getHistory,
    visit:visit,
    localDay:dayOf,
    msUntilNextDay:msUntilNextDay
  };
})(window);
