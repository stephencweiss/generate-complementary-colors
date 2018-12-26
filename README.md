[![](https://img.shields.io/npm/v/npm.svg)]([![](https://img.shields.io/github/manifest-json/v/:user/:repo.svg)](https://github.com/stephencweiss/generate-complementary-colors))
[![](https://img.shields.io/github/manifest-json/v/:user/:repo.svg)](https://github.com/stephencweiss/generate-complementary-colors)
[![](https://img.shields.io/github/languages/code-size/badges/shields.svg)]([![](https://img.shields.io/npm/v/npm.svg)]([![](https://img.shields.io/github/manifest-json/v/:user/:repo.svg)](https://github.com/stephencweiss/generate-complementary-colors)))


# Generate Complementary Colors & Convert Color Types

This library has two aims:
1. Make it as easy as possible to generate complementary colors programatically.
2. Convert easily between color types - HSL, HSV, RGB, and Hexidecimal

# Install

`$ npm install @stephencweiss/generate-complementary-colors`

# Usage

```
const { hsvFromRGB, rgbFromHSV, hslFromRGB, rgbFromHSL, baseTenToHex, baseHexToTen, hexFromRGB, rgbFromHex, generateComplementaryColors } = require('@stephencweiss/generate-complementary-colors');

generateComplementaryColors(5)  // Array(5) [Object, Object, Object, Object, Object]
                                // 0:Object {color: "#19e680", pattern: "dash"}
                                // 1:Object {color: "#3b19e6", pattern: "cross-dash"}
                                // 2:Object {color: "#a1e619", pattern: "line-vertical"}
                                // 3:Object {color: "#19e65d", pattern: "dot-dash"}
                                // 4:Object {color: "#195ee6", pattern: "diamond-box"}

generateComplementaryColors(5, .75, .97) // Using optional parameters of saturation and lightness

hsvFromRGB(240, 200, 80) // [45, 0.66666, 0.94118]
rgbFromHSV(45, 0.66666, 0.94118) // [240, 200, 80]

hslFromRGB(240, 200, 80) // [ 45, 0.8421052631578947, 0.6274509803921569 ]
rgbFromHSL(45, 0.8421052631578947, 0.6274509803921569) // [ 240, 200, 80 ]

baseTenToHex(200) // 'c8' 
baseHexToTen('c8') // 200 

hexFromRGB(240, 200, 80) // #f0c850
rgbFromHex('f0c850') // [ 240, 200, 80 ]

```