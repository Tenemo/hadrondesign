# hadron.design

## TODO
### now
- webpack doesnt copy .svg to dist nor it embeds them, despite seemingly correct config, silly me or silly webpack
- add site manifest, theme color etc 
- fontawesome BLOAT
- hamburger after click border

### for later
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