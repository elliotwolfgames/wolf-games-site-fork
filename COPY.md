# wolfgames.net — Copy Deck

Every user-visible string on the site, in the order it appears on screen.
**Edit the copy in this file and hand it back — I'll map each key to the HTML.**

---

## How to use this

- Each block is `**`key`** · what it is` followed by the current copy on its own line.
- **Rewrite the copy line.** Leave the `key` alone — that's how I find it in the HTML.
- To **delete** a string, write `[CUT]` under its key.
- To **add** something, write it anywhere with a note; I'll place it.
- Where length matters for the layout, there's a `fits:` note. Going over won't
  break anything, but it may wrap in ways the design didn't intend.

**Not in this file** (tell me if you want them too): `vault.html` and
`profile.html` — the player-facing pages, which I did not rewrite.

### Constraints worth remembering

These come from the PRD's claim rules (§13) and are baked into the current copy:

- Three honesty labels are used throughout: **Proven** (a plain fact),
  **We expect** (a design target — must carry "we expect" / "our design target is"),
  **Our bet** (not measured — never phrased as a benefit).
- **No retention lift number** anywhere until a pilot measures one.
- **No market size number** anywhere.
- No internal shorthand on public pages.

If your rewrite drops these, that's your call — just flag it so I don't
re-add them on your behalf.

---

# 1. Global

These repeat on **every** page. Edit once here.

## 1.1 Menu (hamburger overlay)

**`nav.1`** · menu item → problem.html

The Problem

**`nav.2`** · menu item → how-it-works.html

How It Works

**`nav.3`** · menu item → demo.html

Play the Demo

**`nav.4`** · menu item → contact.html

Talk to Us

**`nav.5`** · menu item → about.html

About Us

**`nav.6`** · pill at the bottom, the one link to the player side · fits: ~30 chars

Players — enter the vault

## 1.2 Footer

**`foot.blurb`** · under the wordmark · fits: ~2 lines

Wolf Games builds and runs a daily game vault on a publisher's own surface, under the publisher's own brand.

**`foot.col1.head`** · column heading

The case

**`foot.col1.links`** · list

- The problem
- How it works
- Play the demo

**`foot.col2.head`** · column heading

Company

**`foot.col2.links`** · list

- About
- Talk to us
- Careers

**`foot.col3.head`** · column heading

Legal

**`foot.col3.links`** · list

- Terms, privacy & cookies
- partners@wolfgames.net

**`foot.copyright`**

© 2026 Wolf Games. All rights reserved.

**`foot.split`** · the one player-side pointer; "the vault" is the link

Partners are here. Players play at the vault.

## 1.3 Accessibility strings (screen readers only, not visible)

**`a11y.skip`** · skip link

Skip to content

**`a11y.home`** · logo link label

Wolf Games home

**`a11y.menu`** · hamburger button label

Menu

---

# 2. `index.html` — Homepage

**`index.title`** · browser tab + search result title · fits: ~60 chars

Wolf Games — Turn the click into a reader who comes back.

**`index.meta`** · search result description · fits: ~155 chars

Wolf Games builds and runs a daily game vault on your surface, with your brand. No game team required.

## 2.1 Hero

**`index.hero.h1a`** · headline line 1, white · fits: short

Clickbait buys a click.

**`index.hero.h1b`** · headline line 2, yellow shimmer · fits: short

We turn the click into a reader who comes back tomorrow.

**`index.hero.lede`** · the one supporting sentence · fits: 1–2 lines

Your reader arrives from a headline, gives you twenty seconds, and leaves — and that is the hardest session you own to sell.

**`index.hero.cta1`** · primary button · fits: 2–4 words

Play today's edition

**`index.hero.cta2`** · secondary button · fits: 2–4 words

Talk to us

**`index.hero.logolabel`** · above the partner logos · fits: ~20 chars

Live with

> ⚠️ The three logos (WOLF ENTERTAINMENT / NBCUniversal / ADVANCE) still need
> written permission before publication. See README "Known gaps".

## 2.2 The attention ladder

**`index.ladder.label`** · small caps eyebrow

The attention ladder

**`index.ladder.h2`** · headline, breaks after "more"

Every rung is worth more than the rung below it.

**`index.ladder.sub`** · supporting paragraph

A click that never returns has almost no worth. The ladder is how a reader climbs from a page view to a relationship — and what lifts them at each step.

**`index.ladder.axis`** · the two ends of the value bar

Lower value / Higher value

### Rung 01

**`rung1.name`** · fits: 1 word

Click

**`rung1.metric`** · chip · fits: ~28 chars

Page view

**`rung1.does`** · what the reader does

The reader arrives and leaves.

**`rung1.lift`** · after the bold "What lifts them:"

nothing. Clickbait stops here. This is the rung you are already buying.

### Rung 02

**`rung2.name`**

Play

**`rung2.metric`**

Session time · completion

**`rung2.tier`** · honesty chip

We expect

**`rung2.does`**

The reader gives two to four minutes of active attention.

**`rung2.lift`**

one short puzzle, low friction, and a fast first win. We expect an active session of this length to be worth more to your inventory than a twenty-second bounce.

### Rung 03

**`rung3.name`**

Return

**`rung3.metric`**

Next-day and 7-day return · streak length

**`rung3.tier`** · honesty chip

Our bet

**`rung3.does`**

The reader comes back the next day without a prompt.

**`rung3.lift`**

the story stops one beat too soon, and the next edition drops tomorrow. This rung is our bet, not a measured result. No pilot has produced a return number yet. The pilot is how we both find out.

### Rung 04

**`rung4.name`**

Declaration

**`rung4.metric`**

Declared profile rate

**`rung4.tier`** · honesty chip

We expect

**`rung4.does`**

The reader tells you their town and their interest with one tap.

**`rung4.lift`**

the edition changes in front of them. The change is the receipt — the reader can see what the answer bought, so the next question is cheaper to ask.

**`index.ladder.cta`** · button below the ladder

See what each rung is worth

## 2.3 Proven / We expect / Our bet

**`index.stance.label`** · eyebrow

Straight answers

**`index.stance.h2`** · headline

What is proven, and what is a bet.

**`index.stance.sub`**

A publisher's legal team will read this site. So we separate the three, and we keep the separation on every page.

**`index.stance.proven.head`** · card heading

These are plain facts.

**`index.stance.proven.list`**

- Our games ship and run on a national streaming surface today.
- A publisher needs no game team. We build the vault, run it, and fill it every day.
- The vault ships as static bundles. There are no player-facing servers for your team to operate.
- Editions can be set in your own coverage area. The capability is built and running.

**`index.stance.expect.head`** · card heading

These are design targets.

**`index.stance.expect.list`**

- We expect two to four minutes of active play to be worth more to your inventory than a twenty-second bounce.
- Our design target is that an edition set in your town pulls harder than a vendor product that is the same in every market.
- We expect the vault to keep the audience relationship on your property rather than move it to a large platform.

**`index.stance.bet.head`** · card heading

This one is not measured yet.

**`index.stance.bet.list`**

- Our bet is that a serial story with a daily drop brings a reader back the next day without a push notification.
- No pilot has produced a retention number yet. We will not publish one until a pilot measures it.
- A pilot is one embed and one page position. You see the same event log we see, per market.

## 2.4 The engine (scroll-driven animation)

**`index.engine.label`** · eyebrow

You supply no game team

**`index.engine.h2`** · two lines; "game engine." is yellow

Your archive isn't a back catalog. It's a game engine.

**`index.engine.chips.in`** · the labels flying INTO the core · fits: very short

S01 · E14 / Case 118 / Pilot · 1997 / EP 214 / The Archive

**`index.engine.chips.out`** · the labels flying OUT · fits: 1 word each

Play / Daily / Live

**`index.engine.msg1.head`** + **`index.engine.msg1.body`** · rotates in on scroll

A new edition, every day
We plan it, compile it, gate it, and drop it. Your team approves.

**`index.engine.msg2.head`** + **`index.engine.msg2.body`**

Your brand, your surface
The vault sits on your page and carries your masthead, not ours.

**`index.engine.msg3.head`** + **`index.engine.msg3.body`**

Sold by your team
Brands built into the mechanic, in inventory your team already sells.

**`index.engine.cta`** · button

See the pipeline

## 2.5 Law & Order: Clue Hunter (live proof)

> ⚠️ PRD §17 Q3 flags this reference as unresolved — confirm it's live and
> clear to name publicly before shipping.

**`index.lo.tier`** · chip

Proven · live today

**`index.lo.title`** · big display type

Law & Order / Clue Hunter

**`index.lo.lead`**

A daily case on a national streaming surface. Search the scene, connect the suspects, and crack a new investigation in the Law & Order universe — every day. This is the same loading sequence and the same static bundle model your embed would use.

**`index.lo.playpill`** · the button over the image

Play on Peacock

**`index.lo.feat1.head`** + **`index.lo.feat1.body`**

A new case every day
The drop is a system on a schedule, not a content promise.

**`index.lo.feat2.head`** + **`index.lo.feat2.body`**

A hardened start sequence
If the daily compile fails, the surface shows a fallback edition. It never shows a broken frame.

**`index.lo.feat3.head`** + **`index.lo.feat3.body`**

A defect is our problem
A vendor defect on your page is your embarrassment. We build so it does not happen.

## 2.6 Closing CTA

**`index.close.label`** · eyebrow

The smallest first step

**`index.close.h2`** · headline

One embed. One page position.

**`index.close.body`**

A pilot risks one slot on one page, and it has a defined exit. Tell us how many markets you run and we will come back with the shape of it.

**`index.close.cta1`** · primary button

Talk to us

**`index.close.cta2`** · secondary button

Play the demo first

## 2.7 Press marquee

**`index.press.label`** · eyebrow

As seen in

**`index.press.logos`** · logo alt text, in order

TechCrunch / Variety / Forbes / The Hollywood Reporter / Deadline / Polygon / Business Wire

> ⚠️ These press logos are inherited from the previous site and are not
> permission-verified.

---

# 3. `problem.html` — The Problem

**`problem.title`** · browser tab

The Problem — Wolf Games

**`problem.meta`** · search description

A click that does not return has almost no worth. The attention ladder, the metric at each rung, and a model you can run with your own numbers.

## 3.1 Hero

**`problem.hero.label`** · eyebrow

The problem

**`problem.hero.h1`** · headline; "no worth." is yellow

A click that never returns has almost no worth.

**`problem.hero.lede`**

You can buy a click. You cannot buy a return. This page gives you the language and the arithmetic to put that in front of your own board.

**`problem.hero.cta`** · button (triggers print)

Download the one-page version

**`problem.hero.printline`** · only appears on the printed one-pager

Wolf Games · the attention ladder · internal summary. Prepared for a publisher audience. Claims are labelled: proven is a plain fact, we expect is a design target, our bet is not yet measured.

## 3.2 The eight pains

**`problem.pains.label`** · eyebrow

What we hear

**`problem.pains.h2`** · headline

Eight pains, and how sure we are about each one.

**`problem.pains.sub`**

We separate what we have proven from what we believe. If a line below is only a belief, we say so — including where that weakens our own pitch.

**`problem.pains.th`** · table column headings

The pain / How sure we are

**`pain.P1`** · bold lead, then body · label: We expect

Daily return visits fall each quarter. You can buy clicks. You cannot buy return.

**`pain.P2`** · label: We expect

Clickbait wins attention that is worth little. The reader arrives, reads twenty seconds, and leaves. That session is hard to sell at a good price.

**`pain.P3`** · label: Proven

You have no game team, and no realistic path to one.

**`pain.P4`** · label: We expect

Vendor products look the same in every market. No vendor product is about your town.

**`pain.P5`** · label: Proven

A vendor defect on your page is your embarrassment, not the vendor's.

**`pain.P6`** · label: We expect

The audience relationship moves to the large platforms a little more each day.

**`pain.P7`** · label: We expect

The board asks for innovation, but you cannot accept product risk to get it.

**`pain.P8`** · label: We expect

You must show a number that survives scrutiny. Soft attention metrics do not survive it.

**`problem.pains.note`** · callout, after bold "Why the labels."

Two of these eight are proven, because they are the reason our current deals exist. The other six are what we believe from the rooms we sit in. We would rather you find the label here than find it in a procurement review.

## 3.3 The ladder (second appearance — shorter)

**`problem.ladder.label`** · eyebrow

The attention ladder

**`problem.ladder.h2`** · headline

Four rungs. Each one is worth more than the one below.

**`problem.ladder.sub`**

Name the rung, name the metric, name the thing that lifts a reader to the next one. If a rung has no mechanism, a reader does not climb it.

> The four rungs here reuse `rung1`–`rung4` names, metrics and tiers from §2.2.
> Only the "what lifts them" lines are shorter:

**`problem.rung1.lift`**

nothing. Clickbait stops here.

**`problem.rung2.lift`**

one short puzzle, low friction, and a fast first win.

**`problem.rung3.lift`** · the bold "This rung is a bet." sits mid-paragraph

the story stops one beat too soon, and the next edition drops tomorrow. This rung is a bet. No pilot has measured it. We will not publish a return number until one does.

**`problem.rung4.lift`**

the edition changes in front of them. The change is the receipt.

## 3.4 The model / calculator

**`problem.model.label`** · eyebrow

What a rung is worth

**`problem.model.h2`** · headline

Run the arithmetic with your own numbers.

**`problem.model.sub`**

We do not supply the inputs, because we have not measured them on your property. Put your own figures in and the model does the multiplication in front of you.

**`calc.in1.label`** + **`calc.in1.hint`**

Monthly page views
Your number, from your own analytics.

**`calc.in2.label`** + **`calc.in2.hint`**

Share of visitors who start a game (%)
Placeholder so the arithmetic runs. Replace it with a figure your team is willing to defend.

**`calc.in3.label`** + **`calc.in3.hint`**

Play sessions per player, per month
This is the rung-three assumption. It is the one we have not measured.

**`calc.in4.label`** + **`calc.in4.hint`**

Ad impressions per play session
Set by your own page template and your own policy.

**`calc.stamp`** · the amber chip over the results · fits: ~30 chars

Model, not a measurement

**`calc.out1`** / **`calc.out2`** / **`calc.out3`** / **`calc.out4`** · result row labels

Visitors who start a game
Monthly play sessions
Monthly impressions from play
Active minutes, at three minutes a session

**`calc.disclaim`** · small print under the results

Every input above is yours. Wolf Games supplies none of them, and the defaults are placeholders that let the arithmetic run — they are not our measurements and they are not our forecast. We will not publish a retention figure until a pilot produces one on a real property.

## 3.5 Closing CTA

**`problem.close.h2`**

The next rung is the one we have to prove together.

**`problem.close.body`**

Play the demo and you will feel the mechanism that is supposed to do it. Then tell us whether you would put it on one page for one quarter.

**`problem.close.cta1`** / **`problem.close.cta2`**

Play today's edition / Talk to us

---

# 4. `how-it-works.html` — How It Works

**`hiw.title`** · browser tab

How It Works — Wolf Games

**`hiw.meta`** · search description

The daily drop is a system on a schedule: the plan, the edition compile, the gates, the drop. Plus the three axes that make an edition local.

## 4.1 Hero

**`hiw.hero.label`** · eyebrow

How it works

**`hiw.hero.h1`** · headline; "system," is yellow

The daily drop is a system, not a promise.

**`hiw.hero.lede`**

Four stages run every day, on a schedule, whether or not anyone is watching. Your team sits at the gate and approves. Nothing reaches your page that you have not cleared.

## 4.2 The pipeline

**`hiw.pipe.h2`** · headline

Plan. Compile. Gate. Drop.

**`hiw.pipe.sub`**

One pipeline, run once a day, for every channel in the vault.

**`pipe1.head`** / **`pipe1.body`** / **`pipe1.who`**

The plan
The week's story is laid out in advance: what happens, in what order, and where each day's instalment has to land.
Wolf Games

**`pipe2.head`** / **`pipe2.body`** / **`pipe2.who`**

The edition compile
The plan is filled in for a real audience — the town it is set in, the interest it leans on, and the week it belongs to. This is where a generic story becomes a local one.
Wolf Games

**`pipe3.head`** / **`pipe3.body`** / **`pipe3.who`**

The gates
Every edition passes content, legal, and quality checks before it can ship. Your newsroom holds the final approval, on your own terms.
Wolf Games + your newsroom

**`pipe4.head`** / **`pipe4.body`** / **`pipe4.who`**

The drop
The finished edition goes live on your surface as a static bundle. If a compile ever fails, the surface serves the last good edition instead. It never shows a broken frame.
Automatic

**`hiw.pipe.note`** · callout, after bold "Your team's time."

The gate is the only stage that needs a person on your side, and it is built to be a short review, not a production job. If your newsroom wants a tighter hold, the gate can be set to block by default.

## 4.3 The channel set

**`hiw.chan.label`** · eyebrow

The vault, not a title

**`hiw.chan.h2`** · headline

You are not buying one game.

**`hiw.chan.sub`**

A channel is one game with one continuous story, and a reader subscribes to the channel. The vault holds a set of them, so a reader who bounces off one mechanic still finds one that fits. Every channel runs the same daily pipeline.

**`hiw.chan.tiles`** · the four game tiles — mechanic label above, title below

- Connection puzzle · The Stacks
- Word puzzle · On The Wire
- Merging puzzle · Piecework
- Trivia · Off the Record

## 4.4 The three axes

**`hiw.axes.label`** · eyebrow

What makes an edition yours

**`hiw.axes.h2`** · headline

Three axes, resolved fresh every day.

**`hiw.axes.sub`**

The same story skeleton is filled three ways. The result is an edition that could only have been written for your audience — and the local detail does the plot work, rather than sitting on top as decoration.

**`axis1.head`** / **`axis1.body`** / **`axis1.eg`**

The place
Where the edition is set. Real streets, institutions, landmarks, and local folklore from your own coverage area — used as evidence and motive, not as set dressing.
the location of the crime, the institution that covered it up, and the piece of local lore that gives the answer away.

**`axis2.head`** / **`axis2.body`** / **`axis2.eg`**

The interest
What the edition is about on the surface. The same story skeleton, moved into the world a given reader already cares about — sport, music, food, local politics.
the cast, the setting, and the vocabulary. The puzzle and the story stay the same underneath.

**`axis3.head`** / **`axis3.body`** / **`axis3.eg`**

The week
When it lands. An edition knows what day of the story it is on, and it knows what is happening in the world that week, so a live event can be folded in.
the instalment of the running story, and any topical element the gate has cleared.

## 4.5 The serial cadence

**`hiw.cad.label`** · eyebrow

The serial cadence

**`hiw.cad.h2`** · headline

A day, a week, a month — three loops at once.

**`hiw.cad.sub`**

A reader who plays once gets a whole, finished thing. A reader who plays all week gets a case. A reader who stays a month finds out what the case was really about.

**`cad1.when`** / **`cad1.head`** / **`cad1.body`**

Each day
A beat
One instalment of the story, playable in two to four minutes, resolved on its own terms. It ends one step short of the answer.

**`cad2.when`** / **`cad2.head`** / **`cad2.body`**

Each week
A crime
Seven beats add up to a complete case, with a culprit, a motive, and a resolution the reader helped reach.

**`cad3.when`** / **`cad3.head`** / **`cad3.body`**

Each month
A conspiracy
Four cases reveal the larger thing behind them — the pattern that was there the whole time, in a town the reader actually knows.

**`hiw.card1.head`** / **`hiw.card1.body`**

A new reader can start on any day.
There is no homework and no catch-up. Every edition is written so that someone arriving today can play it, finish it, and understand it without having read a word of what came before. What a returning reader gets is more context, not permission to play.

**`hiw.card2.head`** / **`hiw.card2.body`**

Nothing reaches your page unapproved.
Real places and real institutions appear; real private individuals do not, and living people are never accused of anything. The gate is where your newsroom sets the line, per market, and where an edition can be pulled before it ever ships.

## 4.6 Closing CTA

**`hiw.close.h2`**

Reading about it is the weakest version.

**`hiw.close.body`**

The demo is the real build — the same bundle and the same start sequence a partner embed uses. Switch the town and watch the edition change.

**`hiw.close.cta1`** / **`hiw.close.cta2`**

Play today's edition / Talk to us

---

# 5. `demo.html` — Play the Demo

**`demo.title`** · browser tab

Play the Demo — Wolf Games

**`demo.meta`** · search description

The real build, no account and no login. Switch the town and watch the edition change in front of you.

## 5.1 Hero

**`demo.hero.label`** · eyebrow

Play the demo

**`demo.hero.h1`** · headline; "No account, no login." is yellow

This is the real build. No account, no login.

**`demo.hero.lede`**

Not a video and not a demo-only path — the same bundle and the same start sequence a partner embed runs. Play it, then switch the town underneath it and watch the edition rewrite itself.

## 5.2 The playable frame

**`demo.poster.button`** · the play pill over the poster image

Play today's edition

**`demo.poster.sub`** · under the pill

Loads the live build. Nothing to install, nothing to sign into.

**`demo.side1.head`** / **`demo.side1.body`**

What you are looking at
A live channel from the vault, running the production bundle. This is what sits in the frame on a partner page.

**`demo.side2.head`** / **`demo.side2.list`**

What your engineer gets
- A static bundle. No player-facing servers for your team to run.
- One iframe, sandboxed, with fixed frame sizes.
- A hardened start sequence. A failed compile serves the last good edition rather than a broken frame.
- No account wall between your reader and the first move.

## 5.3 The town picker

**`demo.towns.label`** · eyebrow

The town picker

**`demo.towns.h2`** · headline

The same beat, set in your town.

**`demo.towns.sub`**

Pick a market. The highlighted phrases are the parts the edition compile resolves for that place — and they are load-bearing. Take them out and the beat has no plot.

**`demo.towns.day`** · chip above the beat

Day 3 of 7 · the missing file

**`demo.towns.samplechip`** · amber chip · fits: ~20 chars

Sample content

**`demo.towns.hook`** · after bold "Where it stops."

The edition resolves — the reader closes the loop and gets a clean win. But the last card names a second file that should not exist, and that thread does not resolve today. The next instalment drops tomorrow morning.

**`demo.towns.note`** · callout, after bold "About this copy."

The four markets above are sample fill, written to show the mechanic. A live edition set is written per market with your newsroom, from a folklore and records corpus built for your coverage area. Nothing here has shipped to a real audience.

## 5.4 Side by side

**`demo.sbs.label`** · eyebrow

Side by side

**`demo.sbs.h2`** · headline

One beat. Two towns. Read them together.

**`demo.sbs.sub`**

This is the part a vendor product cannot do. Same story skeleton, same puzzle, same day of the week — and two editions that could not be swapped without breaking the plot.

**`demo.sbs.selectors`** · the three dropdown labels

Left market / Right market / Reader interest

**`demo.sbs.note`** · callout, after bold "The interest axis."

Change the reader interest above and both columns move into a different world — different cast, different vocabulary — while the puzzle and the story underneath stay identical. That is one skeleton, three surfaces.

## 5.5 "Put my market in the frame"

**`demo.market.label`** · eyebrow

Ask, not assume

**`demo.market.h2`** · headline

Want to see this set in your market?

**`demo.market.sub`**

We do not read your location and we do not guess it — a site that quietly geolocates a privacy-careful publisher reads as a warning, not a feature. So this is a request. Tell us the market and we will build the beat in it and send it back.

**`demo.market.field1`** · label + placeholder

Market or masthead / The town you want to see

**`demo.market.field2`** · label + placeholder

Work email / you@publisher.com

**`demo.market.cta`** · button

Build this beat in my market

**`demo.market.done`** · confirmation after submit, after bold "Got it."

We will write the beat in that market and send it back, usually within a few days.

## 5.6 Closing CTA

**`demo.close.h2`**

You have felt the mechanism. Now the honest part.

**`demo.close.body`**

Whether it actually brings a reader back tomorrow is the thing no pilot has measured yet. A pilot is one embed on one page position, with a defined exit, and you see the same numbers we do.

**`demo.close.cta1`** / **`demo.close.cta2`**

Talk to us / See what a rung is worth

## 5.7 Demo sample content — REPLACE WHOLESALE

> This is the fill that drives the town picker and the side-by-side. It is
> **placeholder**, labelled as such on the page. Rewrite freely, or hand me the
> real per-market corpus and I'll swap the whole block.

**The four markets.** Each supplies three phrases that get highlighted in the beat:

| key | market | `place` | `inst` | `lore` |
|---|---|---|---|---|
| `town.1` | Syracuse, NY | the old rail bridge over the canal | the county records office | the locks were rebuilt twice because the first set never held |
| `town.2` | Boise, ID | the shuttered drive-in out on the state highway | the irrigation district board | the last owner buried the season's takings somewhere under the screen |
| `town.3` | Mobile, AL | the closed textile mill down by the river | the port authority archive | the mill whistle still sounds on the anniversary of the flood |
| `town.4` | Spokane, WA | the granite quarry above the falls | the city water department | the quarry road was moved to go around something the crews dug up |

**The three interest variants.** Same skeleton, different world. `{place}`,
`{inst}` and `{lore}` get filled from the table above and highlighted in yellow.

**`interest.1`** · General news

Tonight's edition opens at {place}. A file has gone missing from {inst} — and the only person who noticed is the one who filed it. Everyone here grew up being told {lore}. Tonight you find out who needed that story to exist.

**`interest.2`** · High-school sport

The team bus is parked at {place} an hour after it should have left. A roster sheet has gone missing from {inst} — and the only person who noticed is the assistant coach who typed it. Every player on that bus grew up being told {lore}. Tonight you find out who needed a name off that list.

**`interest.3`** · Live music

The load-out finishes at {place} well past two in the morning. A permit has gone missing from {inst} — and the only person who noticed is the promoter who signed it. Everyone on that crew grew up being told {lore}. Tonight you find out why the room was never licensed at all.

---

# 6. `contact.html` — Talk to Us

**`contact.title`** · browser tab

Talk to Us — Wolf Games

**`contact.meta`** · search description

Tell us how many markets you run and we will come back with the shape of a pilot. Or book a call directly.

## 6.1 Hero

**`contact.hero.label`** · eyebrow

Talk to us

**`contact.hero.h1`** · headline; "A defined exit." is yellow

One embed. One page position. A defined exit.

**`contact.hero.lede`**

Six questions, and the market count matters most — it is what sizes the thing. We come back with the shape of a pilot, not a deck.

## 6.2 The form (6 fields — the PRD caps it at 6)

**`form.f1`** · label

Your name

**`form.f2`** · label + placeholder

Work email / you@publisher.com

**`form.f3`** · label

Publisher or group

**`form.f4`** · label + dropdown options

Your side of the house
- Choose one
- Audience or product
- Revenue or ad operations
- Editorial
- Engineering
- Executive

**`form.f5`** · label + dropdown options — this is the deal sizer

How many markets or mastheads do you run?
- Choose one
- 1
- 2 to 5
- 6 to 20
- 21 to 50
- More than 50

**`form.f6`** · label + placeholder

What would you want to put on one page first? (optional)
The surface, the slot, and anything that would have to be true for it to run.

**`form.submit`** · button

Send this

**`form.done`** · confirmation after submit, after bold "Got it."

We read every one of these ourselves. Expect a reply from a person, usually within two working days — and if the market count says a pilot does not make sense for you yet, we will say that instead of selling you something.

## 6.3 Sidebar

**`contact.cal.head`** / **`contact.cal.body`** / **`contact.cal.cta`** / **`contact.cal.direct`**

Rather just talk?
Skip the form and take a slot directly. Thirty minutes, no deck unless you ask for one.
Book a call
Or write to partners@wolfgames.net

> ⚠️ The "Book a call" link points at a placeholder Calendly URL — needs the real one.

**`contact.covers.head`** / **`contact.covers.list`**

What a first call covers
- The page position you would give it, and what it currently earns.
- What your newsroom needs to hold at the approval gate.
- What we can prove today, and what a pilot would have to settle.
- The exit — what ends the pilot, and when.

**`contact.wont.head`** / **`contact.wont.body`**

What we will not do
We will not quote you a retention lift. No pilot has measured one yet, and a number we invented would not survive your own procurement review — which would cost us the second conversation as well as the first.

---

# 7. `legal.html` — Terms, Privacy & Cookies

**`legal.title`** · browser tab

Terms, Privacy & Cookies — Wolf Games

**`legal.meta`** · search description

How the vault handles location, declared data, play telemetry, and cookies — written to be read in three minutes.

## 7.1 Hero

**`legal.hero.label`** · eyebrow

Terms, privacy & cookies

**`legal.hero.h1`** · headline; "three minutes." is yellow

Written to be read in three minutes.

**`legal.hero.lede`**

You own a sensitive audience relationship, and your legal team will read this before anything else. So here is the whole position in plain words, with the binding documents linked at the bottom.

## 7.2 The six cards

**`legal.c1.head`** / **`legal.c1.body`** · bold run is marked **like this**

Location: town grain only
An edition needs to know roughly where a reader is so it can be set somewhere real to them. **It resolves at town or metro grain, and no finer.** Precise location is never requested, never used, and never stored. There is no GPS prompt, and nothing in the vault reads a device's coordinates.
On this site we go further: we do not infer your market at all. If you want to see an edition set in your own town, you tell us on the demo page, and that is a request you make rather than a lookup we run.

**`legal.c2.head`** / **`legal.c2.body`**

Declared data: one tap, optional, and visibly spent
A reader can tell the vault a town and an interest. **It is one tap, it is always optional, and the game is fully playable without it.** Nothing is inferred from behaviour and quietly filed as if the reader had declared it.
When a reader does declare something, the edition changes in front of them. That is deliberate: the reader can see what the answer bought. Data that is collected and never visibly used is data a reader was right not to give you.

**`legal.c3.head`** / **`legal.c3.body`**

Play telemetry stays on your property
Play events exist to answer one question — is this working, per market — and they belong to the deployment they came from. **Play telemetry never enriches a third-party profile, is never sold, and is never joined to an advertising identity graph.**
The event log is the source of truth for both of us. You see the same events we see for your own markets, which is the only way a retention number survives your own scrutiny.

**`legal.c4.head`** / **`legal.c4.body`**

The vault inherits your posture
Per deployment, the vault runs under **your** privacy policy, **your** consent posture, and **your** data retention rules — not ours. If your market requires a stricter setting than another, the stricter setting is what ships there. We adapt to the property; the property does not adapt to us.

**`legal.c5.head`** / **`legal.c5.body`**

Cookies on this site
**Essential cookies only, and first-party analytics only.** There is no advertising cookie, no third-party tracker, no cross-site pixel, and no data broker in the path. That is also why you are not reading this through a consent wall — we do not set anything that would require one.
This site carries no advertising of any kind.

**`legal.c6.head`** / **`legal.c6.list`** · each bullet starts with a bold clause

Four things we do not do
- **We do not use precise location.** Town or metro grain is the finest resolution that exists anywhere in the product.
- **We do not sell or share play data.** Not to brokers, not to ad networks, not to other partners.
- **We do not accuse real private individuals.** Real places and public institutions appear in editions; living private people are never named as culprits, and your newsroom holds the approval gate.
- **We do not publish numbers we have not measured.** Including our own retention claims.

## 7.3 The binding documents

**`legal.docs.h2`** / **`legal.docs.sub`**

The binding documents
The summary above is written for speed, not for signature. Where the wording differs, these govern.

**`legal.doc1`** / **`legal.doc2`** · card title + subtitle

Terms of Service / The agreement itself
Privacy Policy / The full notice

**`legal.footnote`**

Questions from a legal or procurement team go straight to partners@wolfgames.net and reach a person, not a queue.

---

# 8. `about.html` — About Us

> Carried over from the previous site — I did **not** rewrite this page. It still
> speaks in the old player-facing voice, so it's probably the furthest from where
> you want the partner site to land.

**`about.title`** · browser tab

About Us — Wolf Games

**`about.meta`** · search description

Wolf Games creates generative entertainment that transforms viewers into daily players.

**`about.hero.h1`** · headline over the orb

We build games that move with the world.

**`about.intro.h2`** / **`about.intro.body`**

The Next Generation of Play
Wolf Games creates generative entertainment that transforms viewers into daily players. From evolving storylines to daily drops, every moment deepens the connection between fans, characters, and the worlds they love.

**`about.card1.head`** / **`about.card1.body`**

Always On
Our proprietary AI engine is designed to do what traditional entertainment can't: create gaming worlds that think. Every player becomes part of something that feels alive. We're dissolving the wall between storytelling and play, transforming passive fandom into active participation. It's the future of engagement.

**`about.card2.head`** / **`about.card2.body`**

Built by storytellers. Designed by Gamers.
We're a team of over twenty world class writers, designers, and AI engineers all driven by one mission: to create a new generation of deeply fun entertainment. We move fast, we build beautifully, and we create experiences that move people.

**`about.loc.h2`** / **`about.loc.body`**

Based in Los Angeles, California
With players around the world.

**`about.join.h2`** / **`about.join.body`** / **`about.join.cta1`** / **`about.join.cta2`**

Join Us.
We're always looking for collaborators and co-conspirators who want to push storytelling forward.
Join the Wolf Games Team
Partner With Us

**`about.foot.blurb`** · this page has its own footer, different from the rest

Wolf Games is a global team of creatives and technologists pioneering generative gaming and delivering players unprecedented control.

**`about.foot.beta`** · the beta signup block

Join The Beta For Early Access
Reserve Your Username / Your Email
Reserve Your Username Now

---

*Generated from the live HTML. If you rewrite a block, hand this file back and
I'll apply it — flag anything where you've deliberately dropped a claim label.*
