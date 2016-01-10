# SASS Height
Mixin to help calculate heights, line-heights and padding.

## Installation
Reference the path relative to your main `.scss` file

#### Bower
1. `bower install sass-height --save-dev`
2. `@import "../../bower_components/sass-height/sass-height";`

#### NPM
1. `npm install sass-height --save-dev`
2. `@import "../../node_modules/sass-height/sass-height";`

## Configuration
You can override any of the defaults by adding a `$sassheight` map object.

```sass
// Defaults:
$sassheight: (
  font-base: 16px, // must be a px value
  rem: true, // output as rem (true) or px (false)
  baseline: 4px, // any number
  debug: false // true will output variables as CSS properties
);
```

## Usage

#### Font size and line-height
Return a font-size in rems and a unitless line-height equivalent to 16px. It uses the defaults listed above.

```sass
.type {
  @include height( 12px );
}
```

#### Set an arbitrary height
Return a font-size in rems, a unitless line-height equivalent to 16px **and** top and bottom padding (in rems) equivalent to 10px each (10 + 10 + 16 = 36).

```sass
.type {
  @include height( 12px, 36px );
}
```

#### Line height smaller than the font-size
The same as the previous example but this will have a smaller line-height resulting in text very close together

```sass
.type {
  @include height( 36px, 32px);
}
```

#### New in 2.0: Modify the baseline on-the-fly
This will round up to the next multiple of 8; just for the class this is called upon.

```sass
.type {
  @include height( 32px, auto, 8 );
}
```

## Precision
You need to set the SASS decimal place precision to `7` to get the correct rounding in all browsers.

- Pass in the `--precision` flag [when compiling](http://sass-lang.com/documentation/file.SASS_CHANGELOG.html#318)
- [Increase the precision in Compass](http://stackoverflow.com/questions/7672473/sass-and-rounding-down-numbers-can-this-be-configured)
- Use [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass#precision) and specify `7` as the precision option

## Demo
http://codepen.io/craigmdennis/pen/VYqJqq
