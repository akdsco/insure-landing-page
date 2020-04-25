
## Insure Landing Page

##### Description

Implementation of homepage design for an insurance company.

##### Stack
- HTML
- CSS ([Flexbox](https://geddski.teachable.com/p/flexbox-zombies), SCSS)
- JS

##### Built with
 - [gulp](https://www.npmjs.com/package/gulp)
 - [gulp-babel](https://www.npmjs.com/package/gulp-babel)
 - [browser-sync](https://www.npmjs.com/package/browser-sync)
 - [node-sass](https://www.npmjs.com/package/node-sass)

##### Installation
1) fork / copy project
2) open console and `cd` into root directory
3) run `npm i` and wait for the installation to finish
4) run `gulp` and after it creates `build` folder, run `gulp watch`

Gulp functions explained:

`gulp clean` - deletes production files (.build/)

`gulp` - creates production files (.build/) from source files (.src/)

`gulp watch` - serves production folder locally (default `localhost:3000`) and
watches for changes in files, if change occurs in any souce file it automatically
updates and refreshes your local server

##### Live
Check out live page [here](https://akdsco.github.io/insure-landing-page/).