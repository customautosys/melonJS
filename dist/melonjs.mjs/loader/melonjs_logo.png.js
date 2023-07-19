/*!
 * melonJS Game Engine - v15.8.0
 * http://www.melonjs.org
 * melonjs is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * @copyright (C) 2011 - 2023 Olivier Biot (AltByte Pte Ltd)
 */
var img = "data:image/png;base64,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";
  var logo_url = img;

export { logo_url as default };
