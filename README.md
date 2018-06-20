# hadron.design

## TODO
### now
- webpack doesnt copy .svg to dist nor it embeds them, despite seemingly correct config, silly me or silly webpack
- add site manifest, theme color etc 
- fontawesome BLOAT :c import only used icons they said, tree-shaking they said, it'll be okay they said
- hamburger after click border
- how to play modal pop-up, GIF with example

### i18n
- i18next-react

### for later, maybe
- testing client/server
- npm cache has it out for me, no amount of reinstalls fix EPERM error, I should find some other solution than rimrafing .cache on every start
- prevent users from losing their game and score if the first request fails (also: local storage?)
- make info panels pretty, hidden, dont display raw data
- board max. size, I'll just rewrite all scss for .board and children at this point, cant make the board shrink with the forced ratio thing
- clear out unused packages
- reduce bundle.js size: import only part of bootstrap? drop polyfills?
- client-side form validation instead of server errors
- option to show more high scores, show highlighted row with last game played to see where the user placed
- add htmlFor's
- Edge choppy flip animation
- player table in DB, track individual progress tied to device + browser (instead of relying on localStorage, probably better to just implement login system at that point?), maybe achievements? unlock higher board sizes only after beating smaller ones?
- special tiles? abilities, like to flip chosen tile?
- if the site ever grows to have more scss, they should be imported separately for each section and themes handled differently
- tune down score size-based scaling on bigger sizes?
- add FAQ? a lot of questions get asked all the time