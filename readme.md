# The Responsive Calculator

### Turn your PSD pixel perfection into the start of your responsive website.

This is the Compass version of [rwdcalc.com](http://www.rwdcalc.com/) so you can do all your pixel-perfect percentage conversions directly in your code.

## Installation

1. Type `gem install rwdcalc` in the terminal.
1. Write `require 'rwdcalc'` in your config.rb.
1. Write `@import 'rwdcalc';` in your SCSS file.

## Useage

### Function

```scss
rwdcalc($target, $context);
```

This funciton can be used to quickly find the context for any value. To find the percentage of `30px` out of `90px`, just write `rwdcalc(30, 90)`. You can even pass strings of values through, like `rwdcalc(10 10px 13 1em, 960)` will result in `1.04167% 10px 1.35417% 1em`. Note that the unitless numbers were converted to percentages but if you pass a value with the `px` it will not be converted to a percentage.

```scss
.foo {
  margin: rwdcalc(10 10px 13 1em, 960);
}
```

```css
.foo {
  margin: 1.04167% 10px 1.35417% 1em;
}
```

### Mixins

#### Box Sizing

```scss
@include border-box;
```

This simply writes `box-sizing: border-box` styles so margin and border subtract from the containers width.

#### RWD Calc mixin

```scss
@include rwdcalc($target, $context, $margin, $padding, $border);
```

Plug in values just like you would on [rwdcalc.com](http://www.rwdcalc.com/). You do not have to fill in all the values, only the ones you want.

```scss
.foo {
  @include rwdcalc(200, 960, $padding: 1em 10 23px 10);
}
```

```css
.foo {
  width: 20.83333%;
  padding: 1em 5% 23px 5%;
}
```