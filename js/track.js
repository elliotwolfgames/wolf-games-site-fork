/* Wolf Games. Shell event instrumentation.
   Console + dataLayer stub for now, structured so it can pipe into an
   analytics vendor later without reshaping events. Load after
   vault-state.js. */
(function(global){
  'use strict';

  global.dataLayer=global.dataLayer||[];

  function emit(event,props){
    var S=global.WGVaultState;
    var e={event:event,ts:Date.now(),deviceId:S?S.deviceId:null};
    if(props){ for(var k in props){ if(Object.prototype.hasOwnProperty.call(props,k)) e[k]=props[k]; } }
    global.dataLayer.push(e);
    try{ console.debug('[wg-track]',event,e); }catch(err){}
  }
  global.WGTrack={emit:emit};

  var S=global.WGVaultState;
  if(!S) return;

  var v=S.visit();
  var qp=new URLSearchParams(global.location.search);
  var campaign=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','ref','gclid','fbclid']
    .some(function(p){ return qp.has(p); });
  var external=!!document.referrer && document.referrer.indexOf(global.location.origin)!==0;

  emit('session_start',{
    isNew:v.isNew,
    newLocalDay:v.newLocalDay,
    daysSinceLastVisit:v.daysSinceLastVisit,
    hasCampaignParams:campaign,
    externalReferrer:external,
    /* the metric: back on a new local day with nothing pulling them in */
    unpromptedReturn:!v.isNew && v.newLocalDay && !campaign && !external
  });
})(window);
