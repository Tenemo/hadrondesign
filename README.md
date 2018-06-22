# hadron.design

## TODO
### now
- add site manifest, theme color etc 
- hamburger mobile after click border

### i18n
- i18next-react

### for later, maybe
- fontawesome-react BLOAT :c import only used icons they said, tree-shaking they said, it'll be okay they said
- testing client/server
- add JSDoc wherever it's missing, on client maybe too
- npm cache has it out for me, no amount of reinstalls fix EPERM error, I should find some other solution than rimrafing .cache on every start
- prevent users from losing their game and score if the first request fails
- make info panels pretty, hidden, dont display raw data
- clear out unused packages
- reduce bundle.js size: import only parts of bootstrap? drop some polyfills? gzip?
- client-side pretty form validation popups, also: disable zalgo
- add htmlFor's to labels
- if the site ever grows to have more scss, they should be imported separately for each section and themes handled differently
- add FAQ? a few similar questions get asked all the time

### for much later and probably not
- how to play modal pop-up, GIF with example
- board max. height for wide display and big board sizes (not sure if a good change or having big tiles and scrolling is better)
- option to show more high scores, show highlighted row with last game played to see how far the user placed
- pro mode with no animations, timer and whatnot
- tune down score size-based scaling on bigger sizes?
- player table in DB, track individual progress tied to device + browser (instead of relying on localStorage, probably better to just implement login system at that point?), maybe achievements? unlock higher board sizes only after beating smaller ones?
- special tiles? abilities, like to flip chosen tile?