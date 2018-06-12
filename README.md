# hadron.design

## TODO
### now
- webpack doesnt copy .svg to dist, silly webpack
- add site manifest, pretty select colors and stuff
- navbar disappear after click on mobile
- board min. size, i hate css + letters sticking out of tiles when the size is very small
- better scores
- clicking newgame should remove won game toast
- undefined score when server doesnt send
- add previous game info

### long-term
- testing client/server
- npm cache has it out for me, no amount of reinstalls fix EPERM error, I should find some other solution than rimrafing .cache on every start
- prevent users from losing their game and score if the first request fails (no idea how to implement it in a good and consistent manner)