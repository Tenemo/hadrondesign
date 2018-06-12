# hadron.design

## TODO
- webpack doesnt copy .svg to dist, silly webpack
- testing client/server
- refactor clicker code, both here and in server, there are repeating parts
- box vs container CSS, different naming patterns
- unique keys? the board array is not reordered, seems like it doesnt affect anything
- npm cache has it out for me, no amount of reinstalls fix EPERM error, I should find some other solution than rimrafing .cache on every start
- add site manifest, pretty select colors and stuff
- prevent users from losing their game and score if the first request fails (no idea how to implement it in a good and consistent manner)
- letters sticking out of tiles when the size is very small
- navbar disappear after click on mobile
- block restart after winning the game
- board min. size, i hate css
- better scores