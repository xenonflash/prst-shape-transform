# What is this
This Project is aiming at convert the preset shapes defined in ECMA-376 part2, (which were expressed in xml) to javascript function, in order to directly generate path directives with parameters passing to it.
# How is works
1. The `src/index.js` will read the xml file, and parse it to json, and then make up the javascript string, and write to `./tmp/index.js`
2. webpack will bundle the `./tmp/index.js` to *UMD* library, and output to `./dist/index.js`
3. That's all the parsing process, if you run `npm run demo`, then a webpack-dev-serve will boot up to serve a html page, which will import the generated *UMD* package, and draw all shapes on page, you may review the shapes' look.

# How to use
refer to `example/example.js`
# How to develop
TODO