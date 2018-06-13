# hadron.design

## TODO
### now
- webpack doesnt copy .svg to dist, silly webpack
- add site manifest, pretty select colors and stuff
- navbar disappear after click on mobile

### long-term
- testing client/server
- npm cache has it out for me, no amount of reinstalls fix EPERM error, I should find some other solution than rimrafing .cache on every start
- prevent users from losing their game and score if the first request fails (no idea how to implement it in a good and consistent manner)
- make info panels pretty, hidden, dont display raw data
- board min. size, i hate css + letters sticking out of tiles when the size is very small, I'll just rewrite all scss for .board and children