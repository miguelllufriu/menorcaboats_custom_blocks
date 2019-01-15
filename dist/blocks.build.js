/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic_block_block_js__ = __webpack_require__(/*! ./basic_block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9iYXNpY19ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************!*\
  !*** ./src/basic_block/block.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * BLOCK: menorcaboats-blocks\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    BlockControls = _wp$editor.BlockControls,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar;\n\n\n\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('cgb/block-menorcaboats-blocks', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Menorcaboats - Landing block'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Menorcaboats - Landing block'), __('Menorcaboats landing block'), __('Menorcaboats')],\n\n\t//Supports full alignment\n\tsupports: {\n\t\talign: true\n\t},\n\n\tattributes: {\n\t\ttitle: {\n\t\t\ttype: 'string',\n\t\t\tselector: 'h1',\n\t\t\tdefault: 'Introduce aquí el texto...'\n\t\t},\n\t\tsubTitle: {\n\t\t\ttype: 'string',\n\t\t\tselector: 'h3',\n\t\t\tdefault: 'Introduce el texto del subtítulo...'\n\t\t},\n\t\tbuttonText: {\n\t\t\ttype: 'string',\n\t\t\tselector: 'p',\n\t\t\tdefault: 'Introduce el texto del botón...'\n\t\t},\n\t\timageUrl: {\n\t\t\tattribute: 'src',\n\t\t\tselector: '.heroImage'\n\t\t},\n\t\timageAlt: {\n\t\t\tattribute: 'alt',\n\t\t\tselector: '.heroImage'\n\t\t},\n\t\talignment: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(_ref) {\n\t\tvar _wp$element$createEle, _wp$element$createEle2, _wp$element$createEle3;\n\n\t\tvar className = _ref.className,\n\t\t    attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\n\t\tfunction onChangeAlignment(newAlignment) {\n\t\t\tsetAttributes({ alignment: newAlignment });\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(AlignmentToolbar, {\n\t\t\t\t\tvalue: attributes.alignment,\n\t\t\t\t\tonChange: onChangeAlignment\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'landingContentContainer' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'textContainer' },\n\t\t\t\t\twp.element.createElement(RichText, (_wp$element$createEle = {\n\t\t\t\t\t\tclassName: 'landingText',\n\t\t\t\t\t\ttagName: 'h1'\n\t\t\t\t\t}, _defineProperty(_wp$element$createEle, 'className', className), _defineProperty(_wp$element$createEle, 'value', attributes.title), _defineProperty(_wp$element$createEle, 'style', { textAlign: attributes.alignment }), _defineProperty(_wp$element$createEle, 'onChange', function onChange(title) {\n\t\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t\t}), _wp$element$createEle)),\n\t\t\t\t\twp.element.createElement(RichText, (_wp$element$createEle2 = {\n\t\t\t\t\t\tclassName: 'subtitleText',\n\t\t\t\t\t\ttagName: 'h3'\n\t\t\t\t\t}, _defineProperty(_wp$element$createEle2, 'className', className), _defineProperty(_wp$element$createEle2, 'value', attributes.subTitle), _defineProperty(_wp$element$createEle2, 'style', { textAlign: attributes.alignment }), _defineProperty(_wp$element$createEle2, 'onChange', function onChange(subTitle) {\n\t\t\t\t\t\treturn setAttributes({ subTitle: subTitle });\n\t\t\t\t\t}), _wp$element$createEle2)),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"Button\"],\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\twp.element.createElement(RichText, (_wp$element$createEle3 = {\n\t\t\t\t\t\t\tclassName: 'buttonText',\n\t\t\t\t\t\t\ttagName: 'p'\n\t\t\t\t\t\t}, _defineProperty(_wp$element$createEle3, 'className', className), _defineProperty(_wp$element$createEle3, 'value', attributes.buttonText), _defineProperty(_wp$element$createEle3, 'style', { textAlign: attributes.alignment }), _defineProperty(_wp$element$createEle3, 'onChange', function onChange(buttonText) {\n\t\t\t\t\t\t\treturn setAttributes({ buttonText: buttonText });\n\t\t\t\t\t\t}), _wp$element$createEle3))\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'landingImageContainer' },\n\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\tonSelect: function onSelect(media) {\n\t\t\t\t\t\tsetAttributes({ imageAlt: media.alt, imageUrl: media.url });\n\t\t\t\t\t},\n\t\t\t\t\ttype: 'image',\n\t\t\t\t\tvalue: attributes.imageID,\n\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\tvar open = _ref2.open;\n\n\t\t\t\t\t\tif (attributes.imageUrl != undefined) {\n\t\t\t\t\t\t\treturn wp.element.createElement('img', { className: 'heroImage', src: attributes.imageUrl, alt: attributes.imageAlt, onClick: open });\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"Button\"],\n\t\t\t\t\t\t\t\t{ onClick: open },\n\t\t\t\t\t\t\t\t'Subir imagen'\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(_ref3) {\n\t\tvar attributes = _ref3.attributes;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'landingWrapper' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'landingContentContainer' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'textContainer' },\n\t\t\t\t\twp.element.createElement(RichText.Content, { className: 'landingText', tagName: 'h1', value: attributes.title }),\n\t\t\t\t\twp.element.createElement(RichText.Content, { className: 'subtitleText', tagName: 'h3', value: attributes.subTitle }),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tattributes.buttonText\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'landingImageContainer' },\n\t\t\t\twp.element.createElement('img', { className: 'heroImage', src: attributes.imageUrl, alt: attributes.imageAlt })\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYXNpY19ibG9jay9ibG9jay5qcz8xYmRkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8qKlxuICogQkxPQ0s6IG1lbm9yY2Fib2F0cy1ibG9ja3NcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBSaWNoVGV4dCA9IF93cCRlZGl0b3IuUmljaFRleHQsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkZWRpdG9yLk1lZGlhVXBsb2FkLFxuICAgIEJsb2NrQ29udHJvbHMgPSBfd3AkZWRpdG9yLkJsb2NrQ29udHJvbHMsXG4gICAgQWxpZ25tZW50VG9vbGJhciA9IF93cCRlZGl0b3IuQWxpZ25tZW50VG9vbGJhcjtcblxuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1tZW5vcmNhYm9hdHMtYmxvY2tzJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdNZW5vcmNhYm9hdHMgLSBMYW5kaW5nIGJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc2hpZWxkJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCdNZW5vcmNhYm9hdHMgLSBMYW5kaW5nIGJsb2NrJyksIF9fKCdNZW5vcmNhYm9hdHMgbGFuZGluZyBibG9jaycpLCBfXygnTWVub3JjYWJvYXRzJyldLFxuXG5cdC8vU3VwcG9ydHMgZnVsbCBhbGlnbm1lbnRcblx0c3VwcG9ydHM6IHtcblx0XHRhbGlnbjogdHJ1ZVxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzZWxlY3RvcjogJ2gxJyxcblx0XHRcdGRlZmF1bHQ6ICdJbnRyb2R1Y2UgYXF1w60gZWwgdGV4dG8uLi4nXG5cdFx0fSxcblx0XHRzdWJUaXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzZWxlY3RvcjogJ2gzJyxcblx0XHRcdGRlZmF1bHQ6ICdJbnRyb2R1Y2UgZWwgdGV4dG8gZGVsIHN1YnTDrXR1bG8uLi4nXG5cdFx0fSxcblx0XHRidXR0b25UZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNlbGVjdG9yOiAncCcsXG5cdFx0XHRkZWZhdWx0OiAnSW50cm9kdWNlIGVsIHRleHRvIGRlbCBib3TDs24uLi4nXG5cdFx0fSxcblx0XHRpbWFnZVVybDoge1xuXHRcdFx0YXR0cmlidXRlOiAnc3JjJyxcblx0XHRcdHNlbGVjdG9yOiAnLmhlcm9JbWFnZSdcblx0XHR9LFxuXHRcdGltYWdlQWx0OiB7XG5cdFx0XHRhdHRyaWJ1dGU6ICdhbHQnLFxuXHRcdFx0c2VsZWN0b3I6ICcuaGVyb0ltYWdlJ1xuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH1cblx0fSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIF93cCRlbGVtZW50JGNyZWF0ZUVsZSwgX3dwJGVsZW1lbnQkY3JlYXRlRWxlMiwgX3dwJGVsZW1lbnQkY3JlYXRlRWxlMztcblxuXHRcdHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXG5cdFx0ZnVuY3Rpb24gb25DaGFuZ2VBbGlnbm1lbnQobmV3QWxpZ25tZW50KSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBuZXdBbGlnbm1lbnQgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRCbG9ja0NvbnRyb2xzLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQWxpZ25tZW50VG9vbGJhciwge1xuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmFsaWdubWVudCxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VBbGlnbm1lbnRcblx0XHRcdFx0fSlcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2xhbmRpbmdDb250ZW50Q29udGFpbmVyJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICd0ZXh0Q29udGFpbmVyJyB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwgKF93cCRlbGVtZW50JGNyZWF0ZUVsZSA9IHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2xhbmRpbmdUZXh0Jyxcblx0XHRcdFx0XHRcdHRhZ05hbWU6ICdoMSdcblx0XHRcdFx0XHR9LCBfZGVmaW5lUHJvcGVydHkoX3dwJGVsZW1lbnQkY3JlYXRlRWxlLCAnY2xhc3NOYW1lJywgY2xhc3NOYW1lKSwgX2RlZmluZVByb3BlcnR5KF93cCRlbGVtZW50JGNyZWF0ZUVsZSwgJ3ZhbHVlJywgYXR0cmlidXRlcy50aXRsZSksIF9kZWZpbmVQcm9wZXJ0eShfd3AkZWxlbWVudCRjcmVhdGVFbGUsICdzdHlsZScsIHsgdGV4dEFsaWduOiBhdHRyaWJ1dGVzLmFsaWdubWVudCB9KSwgX2RlZmluZVByb3BlcnR5KF93cCRlbGVtZW50JGNyZWF0ZUVsZSwgJ29uQ2hhbmdlJywgZnVuY3Rpb24gb25DaGFuZ2UodGl0bGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHRpdGxlIH0pO1xuXHRcdFx0XHRcdH0pLCBfd3AkZWxlbWVudCRjcmVhdGVFbGUpKSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIChfd3AkZWxlbWVudCRjcmVhdGVFbGUyID0ge1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnc3VidGl0bGVUZXh0Jyxcblx0XHRcdFx0XHRcdHRhZ05hbWU6ICdoMydcblx0XHRcdFx0XHR9LCBfZGVmaW5lUHJvcGVydHkoX3dwJGVsZW1lbnQkY3JlYXRlRWxlMiwgJ2NsYXNzTmFtZScsIGNsYXNzTmFtZSksIF9kZWZpbmVQcm9wZXJ0eShfd3AkZWxlbWVudCRjcmVhdGVFbGUyLCAndmFsdWUnLCBhdHRyaWJ1dGVzLnN1YlRpdGxlKSwgX2RlZmluZVByb3BlcnR5KF93cCRlbGVtZW50JGNyZWF0ZUVsZTIsICdzdHlsZScsIHsgdGV4dEFsaWduOiBhdHRyaWJ1dGVzLmFsaWdubWVudCB9KSwgX2RlZmluZVByb3BlcnR5KF93cCRlbGVtZW50JGNyZWF0ZUVsZTIsICdvbkNoYW5nZScsIGZ1bmN0aW9uIG9uQ2hhbmdlKHN1YlRpdGxlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHN1YlRpdGxlOiBzdWJUaXRsZSB9KTtcblx0XHRcdFx0XHR9KSwgX3dwJGVsZW1lbnQkY3JlYXRlRWxlMikpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIChfd3AkZWxlbWVudCRjcmVhdGVFbGUzID0ge1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdidXR0b25UZXh0Jyxcblx0XHRcdFx0XHRcdFx0dGFnTmFtZTogJ3AnXG5cdFx0XHRcdFx0XHR9LCBfZGVmaW5lUHJvcGVydHkoX3dwJGVsZW1lbnQkY3JlYXRlRWxlMywgJ2NsYXNzTmFtZScsIGNsYXNzTmFtZSksIF9kZWZpbmVQcm9wZXJ0eShfd3AkZWxlbWVudCRjcmVhdGVFbGUzLCAndmFsdWUnLCBhdHRyaWJ1dGVzLmJ1dHRvblRleHQpLCBfZGVmaW5lUHJvcGVydHkoX3dwJGVsZW1lbnQkY3JlYXRlRWxlMywgJ3N0eWxlJywgeyB0ZXh0QWxpZ246IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH0pLCBfZGVmaW5lUHJvcGVydHkoX3dwJGVsZW1lbnQkY3JlYXRlRWxlMywgJ29uQ2hhbmdlJywgZnVuY3Rpb24gb25DaGFuZ2UoYnV0dG9uVGV4dCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJ1dHRvblRleHQ6IGJ1dHRvblRleHQgfSk7XG5cdFx0XHRcdFx0XHR9KSwgX3dwJGVsZW1lbnQkY3JlYXRlRWxlMykpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdsYW5kaW5nSW1hZ2VDb250YWluZXInIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRcdG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChtZWRpYSkge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGltYWdlQWx0OiBtZWRpYS5hbHQsIGltYWdlVXJsOiBtZWRpYS51cmwgfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmltYWdlSUQsXG5cdFx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZjIpIHtcblx0XHRcdFx0XHRcdHZhciBvcGVuID0gX3JlZjIub3BlbjtcblxuXHRcdFx0XHRcdFx0aWYgKGF0dHJpYnV0ZXMuaW1hZ2VVcmwgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgY2xhc3NOYW1lOiAnaGVyb0ltYWdlJywgc3JjOiBhdHRyaWJ1dGVzLmltYWdlVXJsLCBhbHQ6IGF0dHJpYnV0ZXMuaW1hZ2VBbHQsIG9uQ2xpY2s6IG9wZW4gfSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHRcdFx0XHR7IG9uQ2xpY2s6IG9wZW4gfSxcblx0XHRcdFx0XHRcdFx0XHQnU3ViaXIgaW1hZ2VuJ1xuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjMpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYzLmF0dHJpYnV0ZXM7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ2xhbmRpbmdXcmFwcGVyJyB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdsYW5kaW5nQ29udGVudENvbnRhaW5lcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAndGV4dENvbnRhaW5lcicgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwgeyBjbGFzc05hbWU6ICdsYW5kaW5nVGV4dCcsIHRhZ05hbWU6ICdoMScsIHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlIH0pLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7IGNsYXNzTmFtZTogJ3N1YnRpdGxlVGV4dCcsIHRhZ05hbWU6ICdoMycsIHZhbHVlOiBhdHRyaWJ1dGVzLnN1YlRpdGxlIH0pLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdidXR0b24nLFxuXHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXMuYnV0dG9uVGV4dFxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnbGFuZGluZ0ltYWdlQ29udGFpbmVyJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgY2xhc3NOYW1lOiAnaGVyb0ltYWdlJywgc3JjOiBhdHRyaWJ1dGVzLmltYWdlVXJsLCBhbHQ6IGF0dHJpYnV0ZXMuaW1hZ2VBbHQgfSlcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYXNpY19ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./src/basic_block/style.scss ***!
  \************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYXNpY19ibG9jay9zdHlsZS5zY3NzPzI4YWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYXNpY19ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*************************************!*\
  !*** ./src/basic_block/editor.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYXNpY19ibG9jay9lZGl0b3Iuc2Nzcz83MTU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFzaWNfYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: Button */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ })
/******/ ]);