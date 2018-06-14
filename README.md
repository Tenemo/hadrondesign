# hadron.design

## TODO
### now
- webpack doesnt copy .svg to dist nor it embeds them, despite seemingly correct config, silly me or silly webpack
- add site manifest, pretty select colors and stuff
- navbar disappear after click on mobile
- dark theme switch

### for later
- testing client/server
- npm cache has it out for me, no amount of reinstalls fix EPERM error, I should find some other solution than rimrafing .cache on every start
- prevent users from losing their game and score if the first request fails (also: local storage?)
- make info panels pretty, hidden, dont display raw data
- board min. size, letters sticking out of tiles when the size is very small, I'll just rewrite all scss for .board and children
- clear out unused packages
- reduce bundle.js size: import only part of bootstrap? drop polyfills?
- client-side form validation instead of server errors
- option to show more high scores, show highlighted row with last game played to see where the user placed
- add htmlFor's