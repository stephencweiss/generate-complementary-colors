/** 
 * 
 * @param { integer } r - The value of red is ∈ [0, 255]
 * @param { integer } g - The value of green is ∈ [0, 255]
 * @param { integer } b - The value of blue is ∈ [0, 255]
 */
function hsvFromRGB(r, g, b) {
  /**
   * I: Three arguments, red (r), green (g), blue (b), all ∈ [0, 255]
   * O: An array of three elements hue (h) ∈ [0, 360], and saturation (s) and value (v) which are both ∈ [0, 1]
   * Derived from https://en.wikipedia.org/wiki/HSL_and_HSV
   * Another great resource (and one which inspired the re-derivation): https://gist.github.com/mjackson/5311256
   */
  r /= 255, g /= 255, b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  let h, s;
  
  // Value
  const v = max;

  // Saturation
  s = (max === 0) ? 0 : (diff / max);

  // Hue
  if (diff === 0) {
    h = 0;
  } else {
    // 1/6 is equivalent to 60 degrees
    if (max === r) { h = 1/6 * (0 + ((g - b) / diff)) }; 
    if (max === g) { h = 1/6 * (2 + ((b - r) / diff)) };
    if (max === b) { h = 1/6 * (4 + ((r - g) / diff)) };
  }
  h = Math.round(h * 360)

  return [h, s, v];
}

/** 
 * 
 * @param { integer } h - The value of hue is ∈ [0, 360]
 * @param { integer } s - The value of saturation is ∈ [0, 1]
 * @param { integer } v - The value of value is ∈ [0, 1]
 */
function rgbFromHSV(h, s, v) {
  /**
   * I: Three elements hue (h) ∈ [0, 360], and saturation (s) and value (v) which are both ∈ [0, 1]
   * O: An array of red (r), green (g), blue (b), all ∈ [0, 255]
   * Derived from https://en.wikipedia.org/wiki/HSL_and_HSV
   * Another great resource (and one which inspired the rederivation): https://gist.github.com/mjackson/5311256
   * And this query on Stackexchange https://cs.stackexchange.com/questions/64549/convert-hsv-to-rgb-colors
   */

  const hPrime = h / 60;
  const c = v * s;
  const x = c * (1 - Math.abs(hPrime % 2 - 1)); 
  const m = v - c;
  let rPrime, gPrime, bPrime;
  if (!hPrime) {rPrime = 0; gPrime = 0; bPrime = 0; }
  if (hPrime >= 0 && hPrime < 1) { rPrime = c; gPrime = x; bPrime = 0}
  if (hPrime >= 1 && hPrime < 2) { rPrime = x; gPrime = c; bPrime = 0}
  if (hPrime >= 2 && hPrime < 3) { rPrime = 0; gPrime = c; bPrime = x}
  if (hPrime >= 3 && hPrime < 4) { rPrime = 0; gPrime = x; bPrime = c}
  if (hPrime >= 4 && hPrime < 5) { rPrime = x; gPrime = 0; bPrime = c}
  if (hPrime >= 5 && hPrime < 6) { rPrime = c; gPrime = 0; bPrime = x}
  
  const r = Math.round( (rPrime + m)* 255);
  const g = Math.round( (gPrime + m)* 255);
  const b = Math.round( (bPrime + m)* 255);

  return [r, g, b]
}

/** 
 * 
 * @param { integer } r - The value of red is ∈ [0, 255]
 * @param { integer } g - The value of green is ∈ [0, 255]
 * @param { integer } b - The value of blue is ∈ [0, 255]
 */
function hslFromRGB(r, g, b) {
  /**
   * I: Three arguments, red (r), green (g), blue (b), all ∈ [0, 255]
   * O: An array of three elements hue (h) ∈ [0, 360], and saturation (s) and lightness (l) which are both ∈ [0, 1]
   * Derived from https://en.wikipedia.org/wiki/HSL_and_HSV
   * Another great resource (and one which inspired the rederivation): https://gist.github.com/mjackson/5311256
   */
  r /= 255, g /= 255, b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  let h, s;
  
  //Lightness
  const l = (max + min) / 2;

  //Saturation
  s = (diff === 0) ? 0 : diff / (1 - Math.abs((2 * l) - 1));;

  //Hue
  if (diff === 0) {
    h = 0;
  } else {
    // 1/6 is equivalent to 60 degrees
    if (max === r) { h = 1/6 * (0 + ((g - b) / diff)) }; 
    if (max === g) { h = 1/6 * (2 + ((b - r) / diff)) };
    if (max === b) { h = 1/6 * (4 + ((r - g) / diff)) };
  }
  h = Math.round(h * 360)

  return [h, s, l];
}

/** 
 * 
 * @param { integer } h - The value of hue is ∈ [0, 360]
 * @param { integer } s - The value of saturation is ∈ [0, 1]
 * @param { integer } l - The value of lightness is ∈ [0, 1]
 */
function rgbFromHSL(h, s, l) {
  /**
   * I: Three elements hue (h) ∈ [0, 360], and saturation (s) and lightness (l) which are both ∈ [0, 1]
   * O: An array of red (r), green (g), blue (b), all ∈ [0, 255]
   * Derived from https://en.wikipedia.org/wiki/HSL_and_HSV
   * Another great resource (and one which inspired the re-derivation): https://gist.github.com/mjackson/5311256
   * And this query on Stackexchange https://cs.stackexchange.com/questions/64549/convert-hsv-to-rgb-colors
   */
  const hPrime = h / 60;
  const c = (1 - Math.abs((2 * l) - 1)) * s;
  const x = c * (1 - Math.abs((hPrime % 2) - 1)); 
  const m = l - (c / 2);
  let rPrime, gPrime, bPrime;
  if (h >= 0 && h < 60) { rPrime = c; gPrime = x; bPrime = 0}
  if (h >= 60 && h < 120) { rPrime = x; gPrime = c; bPrime = 0}
  if (h >= 120 && h < 180) { rPrime = 0; gPrime = c; bPrime = x}
  if (h >= 180 && h < 240) { rPrime = 0; gPrime = x; bPrime = c}
  if (h >= 240 && h < 300) { rPrime = x; gPrime = 0; bPrime = c}
  if (h >= 300 && h < 360) { rPrime = c; gPrime = 0; bPrime = x}
  
  const r = Math.round( (rPrime + m)* 255);
  const g = Math.round( (gPrime + m)* 255);
  const b = Math.round( (bPrime + m)* 255);

  return [r, g, b]
}

/**
 * 
 * @param { integer } c - Any number 
 */
function baseTenToHex(c) {
  /**
   * I: A number
   * O: A string representation of the number in base 16
   * More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
   */
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

/** 
 * 
 * @param { integer } r - The value of red is ∈ [0, 255]
 * @param { integer } g - The value of green is ∈ [0, 255]
 * @param { integer } b - The value of blue is ∈ [0, 255]
 */
function hexFromRGB(r, g, b) {
  /**
   * I: Three arguments, red (r), green (g), blue (b), all ∈ [0, 255]
   * O: A hexidecimal representation of the three numbers, concatenated as one string. 
   */
  return "#" + baseTenToHex(r) + baseTenToHex(g) + baseTenToHex(b);
}

/**
 * 
 * @param { string } c - A string representation of a number in base 16 
 */
function baseHexToTen(c) {
  /**
   * I: A string of a number in base 16
   * O: A number representation of the string in base 10
   * More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
   */
  return parseInt(c, 16) 
}

/**
 * 
 * @param { string } hexValue - A string of a hexidemal value without leading `#`
 */
function rgbFromHex(hexValue) {
  /**
   * I: A single hexidecimal value (without a leading `#`);
   * O: An array of red (r), green (g), blue (b), all ∈ [0, 255]
   */
  const r = baseHexToTen(hexValue.slice(0, 2))
  const g = baseHexToTen(hexValue.slice(2, 4))
  const b = baseHexToTen(hexValue.slice(4, 6))

  return [r, g, b]
}

/**
 * 
 * @param { integer } numberToGenerate - The number of complementary colors desired
 * @param { number } [saturation] - The saturation value is ∈ [0, 1]
 * @param { number } [lightness] - The lightness value is ∈ [0, 1]
 */
function generateComplementaryColors ( numberToGenerate, saturation, lightness) {
  /**
   * I: Three arguments are the number of complementary colors to generate (integer > 0), 
   * O: A set of color and pattern
   * Credit for the inspiration to use the golden ratio goes to Martin Ankerl who wrote:
   *  https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
   * NB: Definitions of helper functions `rgbFromHSL` and `hexFromRGB` can be found here:
   *  https://gist.github.com/stephencweiss/eab510dabb2ba50652434372e46b5980
   */

  const goldenRatio = 1.61803398749895;
  const hues = []
  const patterns = ['plus', 'cross', 'dash', 'cross-dash', 'dot', 'dot-dash', 'disc', 'ring', 'line', 'line-vertical', 'weave' , 'zigzag', 'zigzag-vertical', 'diagonal', 'diagonal-right-left','square', 'box', 'triangle', 'triangle-inverted', 'diamond', 'diamond-box']
  saturation = saturation || 0.8;
  lightness = lightness || 0.5;
  
  let hue = Math.random();
  for (let i = 0; i < numberToGenerate; i += 1) {
    hue = goldenRatio * hue;
    hue %= 1;
    const huePrime = Math.round(hue * 360)
    const [red, green, blue] = rgbFromHSL(huePrime, saturation, lightness)
    const color = hexFromRGB(red, green, blue);
    const pattern = patterns[Math.floor(patterns.length * Math.random())]
    hues.push({ color, pattern })
  }
  return hues;
}

module.exports = { hsvFromRGB, rgbFromHSV, hslFromRGB, rgbFromHSL, baseTenToHex, baseHexToTen, hexFromRGB, rgbFromHex, generateComplementaryColors };