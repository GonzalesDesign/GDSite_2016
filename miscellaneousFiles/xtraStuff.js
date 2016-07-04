
"<a href = 'https://github.com/GonzalesDesign/GDSite_2016'  target = '_blank'><span id='nycBikeFlashSample'>AboutOP-01 description.</span></a>"
"<a href = 'https://github.com/GonzalesDesign/GDSite_2016'  target = '_blank'><span id='akonFlashSample'>Akon Konvict</span></a>"



console.log(`

    WebPack Module Bundler

    npm install jquery
    const $ = require("jquery");

    npm install gsap
    const TweenMax = require('gsap');

    npm install youtube-iframe

    /**----------------------------------------------------------------------------------**/
    /**----------| WEBPACKING: |----------**/
    // tutorial from Kyle Robinson Young: https://www.youtube.com/watch?v=TaWKUpahFZM&list=PLnGvf7h-OwSETd2y-_2uVuNiF6kBBX5s6&index=9
    npm init // fill in the blanks. creates package.json
    npm i webpack --save-dev //creates node.modules

    open package.json
        ...
        "start": "webpack ./index.js bundle.js" //type the value, "index.js" = input, "bundle.js" = output
        ... or do the webpack-dev-server...

    create index.js //don't create bundle.js
    open index.html and add "bundle.js" in the script tag
    run npm start // this will generate the bundle.js file
    open index.html in a broswer and everything should work // not localhost:8080 yet

    /*-------| adding modules |---------*/
    create hello.js file
        type module.exports = "Hello World!"
    in index.js
        console.log(require('./hello.js'))
    npm start again to make the conversion

    /*-------| webpack dev server |---------*/
    so we don't have to keep typing npm start, let's install webpack dev server
    npm i webpack-dev-server --save-dev //for development purposes only
    after dev-server installation, go back to package.json and change
        "start": "webpack-dev-server ./index.js" // add dev-server and delete the output. the dev-server will take care of the output
    npm start
    localhost:8080 //8080 is webpack default port

    /*-------| edit package.js |---------*/


    /*-------| loading modules to webpack.config.js |---------*/
    https://github.com/jtangelder/sass-loader // for adding scss module

    /**----------------------------------------------------------------------------------**/


    /**----------| UPDATING NODE.JS |----------**/
    1) Clear NPM's cache:
    sudo npm cache clean -f

    2) Install a little helper called 'n':
    sudo npm install -g n

    3) Install latest stable NodeJS version:
    sudo n stable

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable
    node -v

    /**----------| INSTALLING/UPDATING NPM |----------**/
    npm install --save latest-version


    /**----------| ES6 TUTORIALS: |----------**/
    //babel
    https://www.youtube.com/watch?v=CozSF5abcTA&index=6&list=PLnGvf7h-OwSETd2y-_2uVuNiF6kBBX5s6

    npm i babelify --save-dev

    npm install -g gulp
    npm install --save-dev gulp

    /**----------| SASS COMPILER IN ATOM: |----------**/
    sass-autocompile
    build-sass



`);
