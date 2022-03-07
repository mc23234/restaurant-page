/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./home/honey.otf */ "./src/home/honey.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! roboto.ttf */ "./src/roboto.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! restaurant.jpg */ "./src/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n\t--green:#19381f;\n}\n\n@font-face{\n\tfont-family:honey;\n\tsrc:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face{\n\tfont-family:roboto;\n\tsrc:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody::before{\n\ttop:0;\n\tleft:0;\n\tcontent:'';\n\tposition:fixed;\n\theight:100%;\n\twidth:100%;\n\tz-index:-1;\n\tbackground-image:linear-gradient(45deg,rgba(34,21,12,0.75),rgba(112,153,131,0.75)),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\tbackground-size:cover;\n\tbackground-repeat:no-repeat;\n\tbackground-position:center;\n}\n\nbody{\n\tmargin:0;\n\ttext-align:center;\n\tcolor:white;\n\tfont-family:roboto;\n\tfont-weight:400;\n}\n\n#content{\n\theight:100vh;\n\tdisplay:flex;\n\tflex-direction:column;\n\tjustify-content:space-between;\n\talign-items:center;\n}\n\n.heading{\n\tfont-size:4.5rem;\n\ttext-align:center;\n\tfont-family:honey;\n\tcolor:white;\n\tfilter:drop-shadow(5px 5px 5px gray);\n\tdisplay:inline-block;\n\tmargin-right:55%;\n}\n\n.tab-items{\n\twidth:100%;\n\theight:5vh;\n\tposition:fixed;\n\tbackground:teal;\n\tz-index:1;\n\ttop:0;\n\tpadding:2rem;\n\tfilter:drop-shadow(8px 8px 8px black);\n}\n\n.tabs{\n\tfont-size:1.5rem;\n\tcolor:white;\n\tfilter:drop-shadow(3px 3px 3px grey);\n\tdisplay:inline;\n\tmargin-right:2rem;\n}\n\n.img-container{\n\tdisplay:flex;\n\tflex-wrap:wrap;\n\tmargin-top:5rem;\n\tpadding:2rem;\n}\n\n.image{\n\tflex:1;\n\twidth:25vw;\n\theight:auto;\n}\n\n.description{\n\tmargin-top:15rem;\n\tfilter:drop-shadow(5px 5px 5px black);\n}\n\n.info{\n\tmargin-top:5rem;\n\tmargin-bottom:15rem;\n}\n\n.description h2{\n\tfont-size:2.5rem;\n}\n\n.description p{\n\tfont-size:2rem;\n}\n\n.menu-heading{\n\tmargin-top:10rem;\n\tfont-size:3.5rem;\n}\n\n.menu-cards{\n\tmargin:5rem auto;\n\twidth:100%;\n}\n\n.cards{\n\twidth:75%;\n\tdisplay:flex;\n\tjustify-content:space-between;\n\talign-items:center;\n\tfont-size:1.5rem;\n\ttext-align:left;\n\tmargin:3rem auto;\n}\n\n.cards div{\n\twidth:50%;\n}\n\n.menu-image{\n\twidth:35%;\n\tborder-radius:2rem;\n\tfilter:drop-shadow(8px 8px 8px black);\n}\n\n.visit{\n\tmargin-top:10rem;\n\tmargin-bottom:5rem;\n}\n\n.visit h1{\n\tfont-size:3rem;\n}\n\n.visit p{\n\tfont-size:2rem;\n}\n\n.footer{\n\twidth:100%;\n\tposition:fixed;\n\tbottom:0;\n\tpadding:1rem;\n\theight:3.5%;\n\tfilter:drop-shadow(8px -8px 8px black);\n\tbackground-color:teal;\n\tfont-weight:600;\n\tfont-size:1rem;\n\tcolor:white;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,2CAAyB;AAC1B;;AAEA;CACC,kBAAkB;CAClB,2CAAmB;AACpB;;AAEA;CACC,KAAK;CACL,MAAM;CACN,UAAU;CACV,cAAc;CACd,WAAW;CACX,UAAU;CACV,UAAU;CACV,0HAAwG;CACxG,qBAAqB;CACrB,2BAA2B;CAC3B,0BAA0B;AAC3B;;AAEA;CACC,QAAQ;CACR,iBAAiB;CACjB,WAAW;CACX,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,qBAAqB;CACrB,6BAA6B;CAC7B,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;CACjB,iBAAiB;CACjB,WAAW;CACX,oCAAoC;CACpC,oBAAoB;CACpB,gBAAgB;AACjB;;AAEA;CACC,UAAU;CACV,UAAU;CACV,cAAc;CACd,eAAe;CACf,SAAS;CACT,KAAK;CACL,YAAY;CACZ,qCAAqC;AACtC;;AAEA;CACC,gBAAgB;CAChB,WAAW;CACX,oCAAoC;CACpC,cAAc;CACd,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,cAAc;CACd,eAAe;CACf,YAAY;AACb;;AAEA;CACC,MAAM;CACN,UAAU;CACV,WAAW;AACZ;;AAEA;CACC,gBAAgB;CAChB,qCAAqC;AACtC;;AAEA;CACC,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;CAChB,UAAU;AACX;;AAEA;CACC,SAAS;CACT,YAAY;CACZ,6BAA6B;CAC7B,kBAAkB;CAClB,gBAAgB;CAChB,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,SAAS;CACT,kBAAkB;CAClB,qCAAqC;AACtC;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,UAAU;CACV,cAAc;CACd,QAAQ;CACR,YAAY;CACZ,WAAW;CACX,sCAAsC;CACtC,qBAAqB;CACrB,eAAe;CACf,cAAc;CACd,WAAW;AACZ","sourcesContent":["*{\n\t--green:#19381f;\n}\n\n@font-face{\n\tfont-family:honey;\n\tsrc:url(./home/honey.otf);\n}\n\n@font-face{\n\tfont-family:roboto;\n\tsrc:url(roboto.ttf);\n}\n\nbody::before{\n\ttop:0;\n\tleft:0;\n\tcontent:'';\n\tposition:fixed;\n\theight:100%;\n\twidth:100%;\n\tz-index:-1;\n\tbackground-image:linear-gradient(45deg,rgba(34,21,12,0.75),rgba(112,153,131,0.75)),url('restaurant.jpg');\n\tbackground-size:cover;\n\tbackground-repeat:no-repeat;\n\tbackground-position:center;\n}\n\nbody{\n\tmargin:0;\n\ttext-align:center;\n\tcolor:white;\n\tfont-family:roboto;\n\tfont-weight:400;\n}\n\n#content{\n\theight:100vh;\n\tdisplay:flex;\n\tflex-direction:column;\n\tjustify-content:space-between;\n\talign-items:center;\n}\n\n.heading{\n\tfont-size:4.5rem;\n\ttext-align:center;\n\tfont-family:honey;\n\tcolor:white;\n\tfilter:drop-shadow(5px 5px 5px gray);\n\tdisplay:inline-block;\n\tmargin-right:55%;\n}\n\n.tab-items{\n\twidth:100%;\n\theight:5vh;\n\tposition:fixed;\n\tbackground:teal;\n\tz-index:1;\n\ttop:0;\n\tpadding:2rem;\n\tfilter:drop-shadow(8px 8px 8px black);\n}\n\n.tabs{\n\tfont-size:1.5rem;\n\tcolor:white;\n\tfilter:drop-shadow(3px 3px 3px grey);\n\tdisplay:inline;\n\tmargin-right:2rem;\n}\n\n.img-container{\n\tdisplay:flex;\n\tflex-wrap:wrap;\n\tmargin-top:5rem;\n\tpadding:2rem;\n}\n\n.image{\n\tflex:1;\n\twidth:25vw;\n\theight:auto;\n}\n\n.description{\n\tmargin-top:15rem;\n\tfilter:drop-shadow(5px 5px 5px black);\n}\n\n.info{\n\tmargin-top:5rem;\n\tmargin-bottom:15rem;\n}\n\n.description h2{\n\tfont-size:2.5rem;\n}\n\n.description p{\n\tfont-size:2rem;\n}\n\n.menu-heading{\n\tmargin-top:10rem;\n\tfont-size:3.5rem;\n}\n\n.menu-cards{\n\tmargin:5rem auto;\n\twidth:100%;\n}\n\n.cards{\n\twidth:75%;\n\tdisplay:flex;\n\tjustify-content:space-between;\n\talign-items:center;\n\tfont-size:1.5rem;\n\ttext-align:left;\n\tmargin:3rem auto;\n}\n\n.cards div{\n\twidth:50%;\n}\n\n.menu-image{\n\twidth:35%;\n\tborder-radius:2rem;\n\tfilter:drop-shadow(8px 8px 8px black);\n}\n\n.visit{\n\tmargin-top:10rem;\n\tmargin-bottom:5rem;\n}\n\n.visit h1{\n\tfont-size:3rem;\n}\n\n.visit p{\n\tfont-size:2rem;\n}\n\n.footer{\n\twidth:100%;\n\tposition:fixed;\n\tbottom:0;\n\tpadding:1rem;\n\theight:3.5%;\n\tfilter:drop-shadow(8px -8px 8px black);\n\tbackground-color:teal;\n\tfont-weight:600;\n\tfont-size:1rem;\n\tcolor:white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact(){
	const contactTab = document.createElement('div');
	
	const visitInfo = document.createElement('div');
	
	visitInfo.classList.add('visit');
	
	visitInfo.innerHTML = `<h1>Hours & Location</h1>
	<p>916 Amblin St,<br>Black forest, Borduria 034235<br>
	00-0000-0000<br><a href = '#'>info@flavours.com</a></p>
	
	<p>Monday - Thursday<br>5:00 pm - 9:00 pm</p>
	<p>Friday<br>5:00 pm - 10:00 pm</p>
	<p>Saturday<br>11:00 am - 3:00 pm, 5:00 pm - 10:00 pm
	</p>
	<p>Sunday<br>11:00 am - 3:00 pm, 5:00 pm - 9:00 pm</p>
`;
	
	contactTab.appendChild(visitInfo);
	

	
	return contactTab;
}






/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _home_noodles_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/noodles.jpg */ "./src/home/noodles.jpg");
/* harmony import */ var _home_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/burger.jpg */ "./src/home/burger.jpg");
/* harmony import */ var _home_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/pizza.jpg */ "./src/home/pizza.jpg");
/* harmony import */ var _home_veg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/veg.jpg */ "./src/home/veg.jpg");
/* harmony import */ var _home_breakfast_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/breakfast.jpg */ "./src/home/breakfast.jpg");
/* harmony import */ var _home_ice_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/ice.jpg */ "./src/home/ice.jpg");







function home(){
	const homeTab = document.createElement('div');
	
	const description1 = document.createElement('div');
	description1.classList.add('description');
	description1.innerHTML = `<h2>A modern approach to multi cuisine</h2>
	
	<p>The Flavours is a multi cuisine restaurant with an emphasis on quality ingredients and precision cooking. Treating quality ingredients with respect and allowing them to shine in their best iterations.</p>`;
	homeTab.appendChild(description1);

	const imgContainer = document.createElement('div');
	homeTab.appendChild(imgContainer);
	imgContainer.classList.add('img-container');
	

	const img1 = new Image();
	img1.classList.add('image');
	img1.src = _home_ice_jpg__WEBPACK_IMPORTED_MODULE_5__;
	imgContainer.appendChild(img1);
	
	const img2 = document.createElement('img');
	img2.classList.add('image');
	img2.src = _home_burger_jpg__WEBPACK_IMPORTED_MODULE_1__;
	imgContainer.appendChild(img2);
	
	
	const img3 = document.createElement('img');
	img3.classList.add('image');
	img3.src = _home_noodles_jpg__WEBPACK_IMPORTED_MODULE_0__;
	imgContainer.appendChild(img3);
	
	
	const img4 = document.createElement('img');
	img4.classList.add('image');
	img4.classList.add('fade');
	img4.src = _home_veg_jpg__WEBPACK_IMPORTED_MODULE_3__;
	imgContainer.appendChild(img4);
	
	const img5 = document.createElement('img');
	img5.classList.add('image');
	img5.src = _home_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__;
	imgContainer.appendChild(img5);
	
	const img6 = document.createElement('img');
	img6.classList.add('image');
	img6.src = _home_breakfast_jpg__WEBPACK_IMPORTED_MODULE_4__;
	imgContainer.appendChild(img6);
	
	const description2 = document.createElement('div');
	description2.classList.add('description');
	description2.classList.add('info');
	description2.innerHTML = ` <p>Its our skill and the reliance on hard work done by hand, that our meals are simple, prepared quickly, and always delicious.</p>`;
	homeTab.appendChild(description2);


	return homeTab;
};



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _menu_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/ramen.jpg */ "./src/menu/ramen.jpg");
/* harmony import */ var _menu_friedrice_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/friedrice.jpg */ "./src/menu/friedrice.jpg");
/* harmony import */ var _menu_taco_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/taco.jpg */ "./src/menu/taco.jpg");
/* harmony import */ var _menu_penne_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/penne.jpg */ "./src/menu/penne.jpg");
/* harmony import */ var _menu_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/pizza.jpg */ "./src/menu/pizza.jpg");
/* harmony import */ var _menu_crunchy_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/crunchy.jpg */ "./src/menu/crunchy.jpg");
/* harmony import */ var _menu_mex_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/mex.jpg */ "./src/menu/mex.jpg");
/* harmony import */ var _menu_nachos_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/nachos.jpg */ "./src/menu/nachos.jpg");
/* harmony import */ var _menu_nem_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/nem.jpg */ "./src/menu/nem.jpg");
/* harmony import */ var _menu_waffle_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/waffle.jpg */ "./src/menu/waffle.jpg");
/* harmony import */ var _menu_sandwich_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/sandwich.jpg */ "./src/menu/sandwich.jpg");












function menu(){
	const menuTab = document.createElement('div');
	const menuHeading = document.createElement('div');
	menuHeading.textContent = 'Our Menu';
	menuHeading.classList.add('menu-heading');
	menuTab.appendChild(menuHeading);
	
	const menuCards = document.createElement('div');
	menuCards.classList.add('menu-cards');
	menuTab.appendChild(menuCards);
	
	const card1 = document.createElement('div');
	menuCards.append(card1);
	card1.classList.add('cards');
	card1.innerHTML = `<div><h2>Ramen</h2> <br>A Japanese noodle soup dish<br><br>7$<br></div>`;
	
	const img1 = new Image();
	img1.src = _menu_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__;
	img1.classList.add('menu-image');
	card1.appendChild(img1);
	
	const card2 = document.createElement('div');
	menuCards.append(card2);
	card2.classList.add('cards');
	card2.innerHTML = `<div><h2>Fried Rice</h2> <br>A chinese dish<br><br>8$<br></div>`;
	
	const img2 = new Image();
	img2.src = _menu_friedrice_jpg__WEBPACK_IMPORTED_MODULE_1__;
	img2.classList.add('menu-image');
	card2.appendChild(img2);
	
	const card3 = document.createElement('div');
	menuCards.append(card3);
	card3.classList.add('cards');
	card3.innerHTML = `<div><h2>Tacos</h2> <br>A taco is a traditional Mexican dish<br><br>5$<br></div>`;
	
	const img3 = new Image();
	img3.src = _menu_taco_jpg__WEBPACK_IMPORTED_MODULE_2__;
	img3.classList.add('menu-image');
	card3.appendChild(img3);
	
	
	const card4 = document.createElement('div');
	menuCards.append(card4);
	card4.classList.add('cards');
	card4.innerHTML = `<div><h2>Pasta</h2> <br>Pasta is an Italian food<br><br>8$<br></div>`;
	
	const img4 = new Image();
	img4.src = _menu_penne_jpg__WEBPACK_IMPORTED_MODULE_3__;
	img4.classList.add('menu-image');
	card4.appendChild(img4);

	const card5 = document.createElement('div');
	menuCards.append(card5);
	card5.classList.add('cards');
	card5.innerHTML = `<div><h2>Pizza</h2> <br>A dish of Italian origin<br><br>10$<br></div>`;
	
	const img5 = new Image();
	img5.src = _menu_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__;
	img5.classList.add('menu-image');
	card5.appendChild(img5);
	
	const card6 = document.createElement('div');
	menuCards.append(card6);
	card6.classList.add('cards');
	card6.innerHTML = `<div><h2>Onion Rings</h2> <br>An onion ring, also called a French fried onion ring, is a form of appetizer or side dish in British and American cuisine<br><br>8$<br></div>`;
	
	const img6 = new Image();
	img6.src = _menu_crunchy_jpg__WEBPACK_IMPORTED_MODULE_5__;
	img6.classList.add('menu-image');
	card6.appendChild(img6);

	const card7 = document.createElement('div');
	menuCards.append(card7);
	card7.classList.add('cards');
	card7.innerHTML = `<div><h2>Mexican Avocado Salad</h2><br><br>6$<br></div>`;
	
	const img7 = new Image();
	img7.src = _menu_mex_jpg__WEBPACK_IMPORTED_MODULE_6__;
	img7.classList.add('menu-image');
	card7.appendChild(img7);

	const card8 = document.createElement('div');
	menuCards.append(card8);
	card8.classList.add('cards');
	card8.innerHTML = `<div><h2>Nachos</h2> <br>A dish from northern Mexico<br><br>12$<br></div>`;
	
	const img8 = new Image();
	img8.src = _menu_nachos_jpg__WEBPACK_IMPORTED_MODULE_7__;
	img8.classList.add('menu-image');
	card8.appendChild(img8);

	const card9 = document.createElement('div');
	menuCards.append(card9);
	card9.classList.add('cards');
	card9.innerHTML = `<div><h2>Nem Rolls</h2> <br>A Vietnamese dish<br><br>9$<br></div>`;
	
	const img9 = new Image();
	img9.src = _menu_nem_jpg__WEBPACK_IMPORTED_MODULE_8__;
	img9.classList.add('menu-image');
	card9.appendChild(img9);
	
	const card10 = document.createElement('div');
	menuCards.append(card10);
	card10.classList.add('cards');
	card10.innerHTML = `<div><h2>Sandwich</h2> <br>Good old sandwiches<br><br>5$<br></div>`;
	
	const img10 = new Image();
	img10.src = _menu_sandwich_jpg__WEBPACK_IMPORTED_MODULE_10__;
	img10.classList.add('menu-image');
	card10.appendChild(img10);
	
	const card11 = document.createElement('div');
	menuCards.append(card11);
	card11.classList.add('cards');
	card11.innerHTML = `<div><h2>Waffle</h2> <br>A French recipe<br><br>11$<br></div>`;
	
	const img11 = new Image();
	img11.src = _menu_waffle_jpg__WEBPACK_IMPORTED_MODULE_9__;
	img11.classList.add('menu-image');
	card11.appendChild(img11);
	

	return menuTab;
}






/***/ }),

/***/ "./src/home/breakfast.jpg":
/*!********************************!*\
  !*** ./src/home/breakfast.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b9a6510461ff3b78ccd.jpg";

/***/ }),

/***/ "./src/home/burger.jpg":
/*!*****************************!*\
  !*** ./src/home/burger.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6b5cd7aa350dd5a50ac.jpg";

/***/ }),

/***/ "./src/home/honey.otf":
/*!****************************!*\
  !*** ./src/home/honey.otf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9af18ba66e96aa6bc71a.otf";

/***/ }),

/***/ "./src/home/ice.jpg":
/*!**************************!*\
  !*** ./src/home/ice.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ea3b1090e13f8039b09.jpg";

/***/ }),

/***/ "./src/home/noodles.jpg":
/*!******************************!*\
  !*** ./src/home/noodles.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b043e40e411ec2c284f.jpg";

/***/ }),

/***/ "./src/home/pizza.jpg":
/*!****************************!*\
  !*** ./src/home/pizza.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b4978aeb31027dc728e.jpg";

/***/ }),

/***/ "./src/home/veg.jpg":
/*!**************************!*\
  !*** ./src/home/veg.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07ec9070f729c3d507c2.jpg";

/***/ }),

/***/ "./src/menu/crunchy.jpg":
/*!******************************!*\
  !*** ./src/menu/crunchy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f0e8fa6251a273bcc6d.jpg";

/***/ }),

/***/ "./src/menu/friedrice.jpg":
/*!********************************!*\
  !*** ./src/menu/friedrice.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c5b69ee96761e36df7f.jpg";

/***/ }),

/***/ "./src/menu/mex.jpg":
/*!**************************!*\
  !*** ./src/menu/mex.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6c43ac1e49b8bdf5b5f.jpg";

/***/ }),

/***/ "./src/menu/nachos.jpg":
/*!*****************************!*\
  !*** ./src/menu/nachos.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e15da55dd7a12596b35.jpg";

/***/ }),

/***/ "./src/menu/nem.jpg":
/*!**************************!*\
  !*** ./src/menu/nem.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28f22b4306f9946655d9.jpg";

/***/ }),

/***/ "./src/menu/penne.jpg":
/*!****************************!*\
  !*** ./src/menu/penne.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d29f223dc10f873a1c8d.jpg";

/***/ }),

/***/ "./src/menu/pizza.jpg":
/*!****************************!*\
  !*** ./src/menu/pizza.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1929e26cea1ff8718a55.jpg";

/***/ }),

/***/ "./src/menu/ramen.jpg":
/*!****************************!*\
  !*** ./src/menu/ramen.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fa7af5607c45bdea47a.jpg";

/***/ }),

/***/ "./src/menu/sandwich.jpg":
/*!*******************************!*\
  !*** ./src/menu/sandwich.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8371fc7a19d7e58a51df.jpg";

/***/ }),

/***/ "./src/menu/taco.jpg":
/*!***************************!*\
  !*** ./src/menu/taco.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dd35635d8d95c0122fa.jpg";

/***/ }),

/***/ "./src/menu/waffle.jpg":
/*!*****************************!*\
  !*** ./src/menu/waffle.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4358bfa8a8c51affdab0.jpg";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcfed8a14beb163d04ae.jpg";

/***/ }),

/***/ "./src/roboto.ttf":
/*!************************!*\
  !*** ./src/roboto.ttf ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f25bd05915c1a3468d3d.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const content = document.getElementById('content');

const heading = document.createElement('div');
heading.innerHTML = "Flavours";
heading.classList.add('heading');

const tabItems = document.createElement('div');
tabItems.classList.add('tab-items');

const subContent = document.createElement('div');

content.appendChild(tabItems);
content.appendChild(subContent);
subContent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

const homeTabBtn = document.createElement('div');
const menuTabBtn = document.createElement('div');
const contactTabBtn = document.createElement('div');


homeTabBtn.classList.add('tabs');
menuTabBtn.classList.add('tabs');
contactTabBtn.classList.add('tabs');

homeTabBtn.textContent = 'home';
menuTabBtn.textContent = 'menu';
contactTabBtn.textContent = 'contact';

tabItems.appendChild(heading);
tabItems.appendChild(homeTabBtn);
tabItems.appendChild(menuTabBtn);
tabItems.appendChild(contactTabBtn);

homeTabBtn.addEventListener('click',() => {showContent(_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])});
menuTabBtn.addEventListener('click',() => {showContent(_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])});
contactTabBtn.addEventListener('click',() => {showContent(_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])});

function showContent(tab){
	subContent.innerHTML = '';
	subContent.appendChild(tab());
}

const footer = document.createElement('div');
footer.classList.add('footer');
footer.innerHTML = '&copy Copyright osSidd github 2022';
content.appendChild(footer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtBQUNqQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixvREFBTzs7QUFFOUI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxZQUFZLGdEQUFPLEVBQUU7QUFDaEUsMkNBQTJDLFlBQVksZ0RBQU8sRUFBRTtBQUNoRSw4Q0FBOEMsWUFBWSxtREFBVSxFQUFFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9ob21lL2hvbmV5Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcInJvYm90by50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJyZXN0YXVyYW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG5cXHQtLWdyZWVuOiMxOTM4MWY7XFxufVxcblxcbkBmb250LWZhY2V7XFxuXFx0Zm9udC1mYW1pbHk6aG9uZXk7XFxuXFx0c3JjOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2V7XFxuXFx0Zm9udC1mYW1pbHk6cm9ib3RvO1xcblxcdHNyYzp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5OjpiZWZvcmV7XFxuXFx0dG9wOjA7XFxuXFx0bGVmdDowO1xcblxcdGNvbnRlbnQ6Jyc7XFxuXFx0cG9zaXRpb246Zml4ZWQ7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHR6LWluZGV4Oi0xO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMzQsMjEsMTIsMC43NSkscmdiYSgxMTIsMTUzLDEzMSwwLjc1KSksdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xcbn1cXG5cXG5ib2R5e1xcblxcdG1hcmdpbjowO1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdGNvbG9yOndoaXRlO1xcblxcdGZvbnQtZmFtaWx5OnJvYm90bztcXG5cXHRmb250LXdlaWdodDo0MDA7XFxufVxcblxcbiNjb250ZW50e1xcblxcdGhlaWdodDoxMDB2aDtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuXFxuLmhlYWRpbmd7XFxuXFx0Zm9udC1zaXplOjQuNXJlbTtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRmb250LWZhbWlseTpob25leTtcXG5cXHRjb2xvcjp3aGl0ZTtcXG5cXHRmaWx0ZXI6ZHJvcC1zaGFkb3coNXB4IDVweCA1cHggZ3JheSk7XFxuXFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLXJpZ2h0OjU1JTtcXG59XFxuXFxuLnRhYi1pdGVtc3tcXG5cXHR3aWR0aDoxMDAlO1xcblxcdGhlaWdodDo1dmg7XFxuXFx0cG9zaXRpb246Zml4ZWQ7XFxuXFx0YmFja2dyb3VuZDp0ZWFsO1xcblxcdHotaW5kZXg6MTtcXG5cXHR0b3A6MDtcXG5cXHRwYWRkaW5nOjJyZW07XFxuXFx0ZmlsdGVyOmRyb3Atc2hhZG93KDhweCA4cHggOHB4IGJsYWNrKTtcXG59XFxuXFxuLnRhYnN7XFxuXFx0Zm9udC1zaXplOjEuNXJlbTtcXG5cXHRjb2xvcjp3aGl0ZTtcXG5cXHRmaWx0ZXI6ZHJvcC1zaGFkb3coM3B4IDNweCAzcHggZ3JleSk7XFxuXFx0ZGlzcGxheTppbmxpbmU7XFxuXFx0bWFyZ2luLXJpZ2h0OjJyZW07XFxufVxcblxcbi5pbWctY29udGFpbmVye1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRmbGV4LXdyYXA6d3JhcDtcXG5cXHRtYXJnaW4tdG9wOjVyZW07XFxuXFx0cGFkZGluZzoycmVtO1xcbn1cXG5cXG4uaW1hZ2V7XFxuXFx0ZmxleDoxO1xcblxcdHdpZHRoOjI1dnc7XFxuXFx0aGVpZ2h0OmF1dG87XFxufVxcblxcbi5kZXNjcmlwdGlvbntcXG5cXHRtYXJnaW4tdG9wOjE1cmVtO1xcblxcdGZpbHRlcjpkcm9wLXNoYWRvdyg1cHggNXB4IDVweCBibGFjayk7XFxufVxcblxcbi5pbmZve1xcblxcdG1hcmdpbi10b3A6NXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOjE1cmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gaDJ7XFxuXFx0Zm9udC1zaXplOjIuNXJlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHB7XFxuXFx0Zm9udC1zaXplOjJyZW07XFxufVxcblxcbi5tZW51LWhlYWRpbmd7XFxuXFx0bWFyZ2luLXRvcDoxMHJlbTtcXG5cXHRmb250LXNpemU6My41cmVtO1xcbn1cXG5cXG4ubWVudS1jYXJkc3tcXG5cXHRtYXJnaW46NXJlbSBhdXRvO1xcblxcdHdpZHRoOjEwMCU7XFxufVxcblxcbi5jYXJkc3tcXG5cXHR3aWR0aDo3NSU7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOmNlbnRlcjtcXG5cXHRmb250LXNpemU6MS41cmVtO1xcblxcdHRleHQtYWxpZ246bGVmdDtcXG5cXHRtYXJnaW46M3JlbSBhdXRvO1xcbn1cXG5cXG4uY2FyZHMgZGl2e1xcblxcdHdpZHRoOjUwJTtcXG59XFxuXFxuLm1lbnUtaW1hZ2V7XFxuXFx0d2lkdGg6MzUlO1xcblxcdGJvcmRlci1yYWRpdXM6MnJlbTtcXG5cXHRmaWx0ZXI6ZHJvcC1zaGFkb3coOHB4IDhweCA4cHggYmxhY2spO1xcbn1cXG5cXG4udmlzaXR7XFxuXFx0bWFyZ2luLXRvcDoxMHJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOjVyZW07XFxufVxcblxcbi52aXNpdCBoMXtcXG5cXHRmb250LXNpemU6M3JlbTtcXG59XFxuXFxuLnZpc2l0IHB7XFxuXFx0Zm9udC1zaXplOjJyZW07XFxufVxcblxcbi5mb290ZXJ7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRwb3NpdGlvbjpmaXhlZDtcXG5cXHRib3R0b206MDtcXG5cXHRwYWRkaW5nOjFyZW07XFxuXFx0aGVpZ2h0OjMuNSU7XFxuXFx0ZmlsdGVyOmRyb3Atc2hhZG93KDhweCAtOHB4IDhweCBibGFjayk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjp0ZWFsO1xcblxcdGZvbnQtd2VpZ2h0OjYwMDtcXG5cXHRmb250LXNpemU6MXJlbTtcXG5cXHRjb2xvcjp3aGl0ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsMkNBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDJDQUFtQjtBQUNwQjs7QUFFQTtDQUNDLEtBQUs7Q0FDTCxNQUFNO0NBQ04sVUFBVTtDQUNWLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsVUFBVTtDQUNWLFVBQVU7Q0FDViwwSEFBd0c7Q0FDeEcscUJBQXFCO0NBQ3JCLDJCQUEyQjtDQUMzQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxRQUFRO0NBQ1IsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsb0NBQW9DO0NBQ3BDLG9CQUFvQjtDQUNwQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsVUFBVTtDQUNWLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsU0FBUztDQUNULEtBQUs7Q0FDTCxZQUFZO0NBQ1oscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxvQ0FBb0M7Q0FDcEMsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFFQTtDQUNDLE1BQU07Q0FDTixVQUFVO0NBQ1YsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxZQUFZO0NBQ1osNkJBQTZCO0NBQzdCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0NBQ2QsUUFBUTtDQUNSLFlBQVk7Q0FDWixXQUFXO0NBQ1gsc0NBQXNDO0NBQ3RDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsY0FBYztDQUNkLFdBQVc7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcblxcdC0tZ3JlZW46IzE5MzgxZjtcXG59XFxuXFxuQGZvbnQtZmFjZXtcXG5cXHRmb250LWZhbWlseTpob25leTtcXG5cXHRzcmM6dXJsKC4vaG9tZS9ob25leS5vdGYpO1xcbn1cXG5cXG5AZm9udC1mYWNle1xcblxcdGZvbnQtZmFtaWx5OnJvYm90bztcXG5cXHRzcmM6dXJsKHJvYm90by50dGYpO1xcbn1cXG5cXG5ib2R5OjpiZWZvcmV7XFxuXFx0dG9wOjA7XFxuXFx0bGVmdDowO1xcblxcdGNvbnRlbnQ6Jyc7XFxuXFx0cG9zaXRpb246Zml4ZWQ7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHR6LWluZGV4Oi0xO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMzQsMjEsMTIsMC43NSkscmdiYSgxMTIsMTUzLDEzMSwwLjc1KSksdXJsKCdyZXN0YXVyYW50LmpwZycpO1xcblxcdGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XFxufVxcblxcbmJvZHl7XFxuXFx0bWFyZ2luOjA7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0Y29sb3I6d2hpdGU7XFxuXFx0Zm9udC1mYW1pbHk6cm9ib3RvO1xcblxcdGZvbnQtd2VpZ2h0OjQwMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuXFx0aGVpZ2h0OjEwMHZoO1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG5cXG4uaGVhZGluZ3tcXG5cXHRmb250LXNpemU6NC41cmVtO1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OmhvbmV5O1xcblxcdGNvbG9yOndoaXRlO1xcblxcdGZpbHRlcjpkcm9wLXNoYWRvdyg1cHggNXB4IDVweCBncmF5KTtcXG5cXHRkaXNwbGF5OmlubGluZS1ibG9jaztcXG5cXHRtYXJnaW4tcmlnaHQ6NTUlO1xcbn1cXG5cXG4udGFiLWl0ZW1ze1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0aGVpZ2h0OjV2aDtcXG5cXHRwb3NpdGlvbjpmaXhlZDtcXG5cXHRiYWNrZ3JvdW5kOnRlYWw7XFxuXFx0ei1pbmRleDoxO1xcblxcdHRvcDowO1xcblxcdHBhZGRpbmc6MnJlbTtcXG5cXHRmaWx0ZXI6ZHJvcC1zaGFkb3coOHB4IDhweCA4cHggYmxhY2spO1xcbn1cXG5cXG4udGFic3tcXG5cXHRmb250LXNpemU6MS41cmVtO1xcblxcdGNvbG9yOndoaXRlO1xcblxcdGZpbHRlcjpkcm9wLXNoYWRvdygzcHggM3B4IDNweCBncmV5KTtcXG5cXHRkaXNwbGF5OmlubGluZTtcXG5cXHRtYXJnaW4tcmlnaHQ6MnJlbTtcXG59XFxuXFxuLmltZy1jb250YWluZXJ7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGZsZXgtd3JhcDp3cmFwO1xcblxcdG1hcmdpbi10b3A6NXJlbTtcXG5cXHRwYWRkaW5nOjJyZW07XFxufVxcblxcbi5pbWFnZXtcXG5cXHRmbGV4OjE7XFxuXFx0d2lkdGg6MjV2dztcXG5cXHRoZWlnaHQ6YXV0bztcXG59XFxuXFxuLmRlc2NyaXB0aW9ue1xcblxcdG1hcmdpbi10b3A6MTVyZW07XFxuXFx0ZmlsdGVyOmRyb3Atc2hhZG93KDVweCA1cHggNXB4IGJsYWNrKTtcXG59XFxuXFxuLmluZm97XFxuXFx0bWFyZ2luLXRvcDo1cmVtO1xcblxcdG1hcmdpbi1ib3R0b206MTVyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvbiBoMntcXG5cXHRmb250LXNpemU6Mi41cmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gcHtcXG5cXHRmb250LXNpemU6MnJlbTtcXG59XFxuXFxuLm1lbnUtaGVhZGluZ3tcXG5cXHRtYXJnaW4tdG9wOjEwcmVtO1xcblxcdGZvbnQtc2l6ZTozLjVyZW07XFxufVxcblxcbi5tZW51LWNhcmRze1xcblxcdG1hcmdpbjo1cmVtIGF1dG87XFxuXFx0d2lkdGg6MTAwJTtcXG59XFxuXFxuLmNhcmRze1xcblxcdHdpZHRoOjc1JTtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6Y2VudGVyO1xcblxcdGZvbnQtc2l6ZToxLjVyZW07XFxuXFx0dGV4dC1hbGlnbjpsZWZ0O1xcblxcdG1hcmdpbjozcmVtIGF1dG87XFxufVxcblxcbi5jYXJkcyBkaXZ7XFxuXFx0d2lkdGg6NTAlO1xcbn1cXG5cXG4ubWVudS1pbWFnZXtcXG5cXHR3aWR0aDozNSU7XFxuXFx0Ym9yZGVyLXJhZGl1czoycmVtO1xcblxcdGZpbHRlcjpkcm9wLXNoYWRvdyg4cHggOHB4IDhweCBibGFjayk7XFxufVxcblxcbi52aXNpdHtcXG5cXHRtYXJnaW4tdG9wOjEwcmVtO1xcblxcdG1hcmdpbi1ib3R0b206NXJlbTtcXG59XFxuXFxuLnZpc2l0IGgxe1xcblxcdGZvbnQtc2l6ZTozcmVtO1xcbn1cXG5cXG4udmlzaXQgcHtcXG5cXHRmb250LXNpemU6MnJlbTtcXG59XFxuXFxuLmZvb3RlcntcXG5cXHR3aWR0aDoxMDAlO1xcblxcdHBvc2l0aW9uOmZpeGVkO1xcblxcdGJvdHRvbTowO1xcblxcdHBhZGRpbmc6MXJlbTtcXG5cXHRoZWlnaHQ6My41JTtcXG5cXHRmaWx0ZXI6ZHJvcC1zaGFkb3coOHB4IC04cHggOHB4IGJsYWNrKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOnRlYWw7XFxuXFx0Zm9udC13ZWlnaHQ6NjAwO1xcblxcdGZvbnQtc2l6ZToxcmVtO1xcblxcdGNvbG9yOndoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpe1xuXHRjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFxuXHRjb25zdCB2aXNpdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XG5cdHZpc2l0SW5mby5jbGFzc0xpc3QuYWRkKCd2aXNpdCcpO1xuXHRcblx0dmlzaXRJbmZvLmlubmVySFRNTCA9IGA8aDE+SG91cnMgJiBMb2NhdGlvbjwvaDE+XG5cdDxwPjkxNiBBbWJsaW4gU3QsPGJyPkJsYWNrIGZvcmVzdCwgQm9yZHVyaWEgMDM0MjM1PGJyPlxuXHQwMC0wMDAwLTAwMDA8YnI+PGEgaHJlZiA9ICcjJz5pbmZvQGZsYXZvdXJzLmNvbTwvYT48L3A+XG5cdFxuXHQ8cD5Nb25kYXkgLSBUaHVyc2RheTxicj41OjAwIHBtIC0gOTowMCBwbTwvcD5cblx0PHA+RnJpZGF5PGJyPjU6MDAgcG0gLSAxMDowMCBwbTwvcD5cblx0PHA+U2F0dXJkYXk8YnI+MTE6MDAgYW0gLSAzOjAwIHBtLCA1OjAwIHBtIC0gMTA6MDAgcG1cblx0PC9wPlxuXHQ8cD5TdW5kYXk8YnI+MTE6MDAgYW0gLSAzOjAwIHBtLCA1OjAwIHBtIC0gOTowMCBwbTwvcD5cbmA7XG5cdFxuXHRjb250YWN0VGFiLmFwcGVuZENoaWxkKHZpc2l0SW5mbyk7XG5cdFxuXG5cdFxuXHRyZXR1cm4gY29udGFjdFRhYjtcbn1cblxuXG5cblxuIiwiaW1wb3J0IG5vb2RsZSBmcm9tICcuL2hvbWUvbm9vZGxlcy5qcGcnO1xuaW1wb3J0IGJ1cmdlciBmcm9tICcuL2hvbWUvYnVyZ2VyLmpwZyc7XG5pbXBvcnQgcGl6emEgZnJvbSAnLi9ob21lL3BpenphLmpwZyc7XG5pbXBvcnQgdmVnIGZyb20gJy4vaG9tZS92ZWcuanBnJztcbmltcG9ydCBicmVha2Zhc3QgZnJvbSAnLi9ob21lL2JyZWFrZmFzdC5qcGcnO1xuaW1wb3J0IGljZSBmcm9tICcuL2hvbWUvaWNlLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKXtcblx0Y29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcblx0Y29uc3QgZGVzY3JpcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRlc2NyaXB0aW9uMS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuXHRkZXNjcmlwdGlvbjEuaW5uZXJIVE1MID0gYDxoMj5BIG1vZGVybiBhcHByb2FjaCB0byBtdWx0aSBjdWlzaW5lPC9oMj5cblx0XG5cdDxwPlRoZSBGbGF2b3VycyBpcyBhIG11bHRpIGN1aXNpbmUgcmVzdGF1cmFudCB3aXRoIGFuIGVtcGhhc2lzIG9uIHF1YWxpdHkgaW5ncmVkaWVudHMgYW5kIHByZWNpc2lvbiBjb29raW5nLiBUcmVhdGluZyBxdWFsaXR5IGluZ3JlZGllbnRzIHdpdGggcmVzcGVjdCBhbmQgYWxsb3dpbmcgdGhlbSB0byBzaGluZSBpbiB0aGVpciBiZXN0IGl0ZXJhdGlvbnMuPC9wPmA7XG5cdGhvbWVUYWIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24xKTtcblxuXHRjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0aG9tZVRhYi5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xuXHRpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1nLWNvbnRhaW5lcicpO1xuXHRcblxuXHRjb25zdCBpbWcxID0gbmV3IEltYWdlKCk7XG5cdGltZzEuY2xhc3NMaXN0LmFkZCgnaW1hZ2UnKTtcblx0aW1nMS5zcmMgPSBpY2U7XG5cdGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcxKTtcblx0XG5cdGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0aW1nMi5jbGFzc0xpc3QuYWRkKCdpbWFnZScpO1xuXHRpbWcyLnNyYyA9IGJ1cmdlcjtcblx0aW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZzIpO1xuXHRcblx0XG5cdGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0aW1nMy5jbGFzc0xpc3QuYWRkKCdpbWFnZScpO1xuXHRpbWczLnNyYyA9IG5vb2RsZTtcblx0aW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZzMpO1xuXHRcblx0XG5cdGNvbnN0IGltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0aW1nNC5jbGFzc0xpc3QuYWRkKCdpbWFnZScpO1xuXHRpbWc0LmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcblx0aW1nNC5zcmMgPSB2ZWc7XG5cdGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWc0KTtcblx0XG5cdGNvbnN0IGltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0aW1nNS5jbGFzc0xpc3QuYWRkKCdpbWFnZScpO1xuXHRpbWc1LnNyYyA9IHBpenphO1xuXHRpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nNSk7XG5cdFxuXHRjb25zdCBpbWc2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGltZzYuY2xhc3NMaXN0LmFkZCgnaW1hZ2UnKTtcblx0aW1nNi5zcmMgPSBicmVha2Zhc3Q7XG5cdGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWc2KTtcblx0XG5cdGNvbnN0IGRlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkZXNjcmlwdGlvbjIuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcblx0ZGVzY3JpcHRpb24yLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblx0ZGVzY3JpcHRpb24yLmlubmVySFRNTCA9IGAgPHA+SXRzIG91ciBza2lsbCBhbmQgdGhlIHJlbGlhbmNlIG9uIGhhcmQgd29yayBkb25lIGJ5IGhhbmQsIHRoYXQgb3VyIG1lYWxzIGFyZSBzaW1wbGUsIHByZXBhcmVkIHF1aWNrbHksIGFuZCBhbHdheXMgZGVsaWNpb3VzLjwvcD5gO1xuXHRob21lVGFiLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uMik7XG5cblxuXHRyZXR1cm4gaG9tZVRhYjtcbn07XG5cbiIsImltcG9ydCByYW1lbiBmcm9tICcuL21lbnUvcmFtZW4uanBnJztcbmltcG9ydCBmcmllZHJpY2UgZnJvbSAnLi9tZW51L2ZyaWVkcmljZS5qcGcnO1xuaW1wb3J0IHRhY28gZnJvbSAnLi9tZW51L3RhY28uanBnJztcbmltcG9ydCBwYXN0YSBmcm9tICcuL21lbnUvcGVubmUuanBnJztcbmltcG9ydCBwaXp6YSBmcm9tICcuL21lbnUvcGl6emEuanBnJztcbmltcG9ydCBvbmlvbiBmcm9tICcuL21lbnUvY3J1bmNoeS5qcGcnO1xuaW1wb3J0IG1leCBmcm9tICcuL21lbnUvbWV4LmpwZyc7XG5pbXBvcnQgbmFjaG9zIGZyb20gJy4vbWVudS9uYWNob3MuanBnJztcbmltcG9ydCBuZW0gZnJvbSAnLi9tZW51L25lbS5qcGcnO1xuaW1wb3J0IHdhZmZsZSBmcm9tICcuL21lbnUvd2FmZmxlLmpwZyc7XG5pbXBvcnQgc2FuZHdpY2ggZnJvbSAnLi9tZW51L3NhbmR3aWNoLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKXtcblx0Y29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtZW51SGVhZGluZy50ZXh0Q29udGVudCA9ICdPdXIgTWVudSc7XG5cdG1lbnVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuXHRtZW51VGFiLmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nKTtcblx0XG5cdGNvbnN0IG1lbnVDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtZW51Q2FyZHMuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkcycpO1xuXHRtZW51VGFiLmFwcGVuZENoaWxkKG1lbnVDYXJkcyk7XG5cdFxuXHRjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtZW51Q2FyZHMuYXBwZW5kKGNhcmQxKTtcblx0Y2FyZDEuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcblx0Y2FyZDEuaW5uZXJIVE1MID0gYDxkaXY+PGgyPlJhbWVuPC9oMj4gPGJyPkEgSmFwYW5lc2Ugbm9vZGxlIHNvdXAgZGlzaDxicj48YnI+NyQ8YnI+PC9kaXY+YDtcblx0XG5cdGNvbnN0IGltZzEgPSBuZXcgSW1hZ2UoKTtcblx0aW1nMS5zcmMgPSByYW1lbjtcblx0aW1nMS5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cdGNhcmQxLmFwcGVuZENoaWxkKGltZzEpO1xuXHRcblx0Y29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWVudUNhcmRzLmFwcGVuZChjYXJkMik7XG5cdGNhcmQyLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cdGNhcmQyLmlubmVySFRNTCA9IGA8ZGl2PjxoMj5GcmllZCBSaWNlPC9oMj4gPGJyPkEgY2hpbmVzZSBkaXNoPGJyPjxicj44JDxicj48L2Rpdj5gO1xuXHRcblx0Y29uc3QgaW1nMiA9IG5ldyBJbWFnZSgpO1xuXHRpbWcyLnNyYyA9IGZyaWVkcmljZTtcblx0aW1nMi5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cdGNhcmQyLmFwcGVuZENoaWxkKGltZzIpO1xuXHRcblx0Y29uc3QgY2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWVudUNhcmRzLmFwcGVuZChjYXJkMyk7XG5cdGNhcmQzLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cdGNhcmQzLmlubmVySFRNTCA9IGA8ZGl2PjxoMj5UYWNvczwvaDI+IDxicj5BIHRhY28gaXMgYSB0cmFkaXRpb25hbCBNZXhpY2FuIGRpc2g8YnI+PGJyPjUkPGJyPjwvZGl2PmA7XG5cdFxuXHRjb25zdCBpbWczID0gbmV3IEltYWdlKCk7XG5cdGltZzMuc3JjID0gdGFjbztcblx0aW1nMy5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cdGNhcmQzLmFwcGVuZENoaWxkKGltZzMpO1xuXHRcblx0XG5cdGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1lbnVDYXJkcy5hcHBlbmQoY2FyZDQpO1xuXHRjYXJkNC5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXHRjYXJkNC5pbm5lckhUTUwgPSBgPGRpdj48aDI+UGFzdGE8L2gyPiA8YnI+UGFzdGEgaXMgYW4gSXRhbGlhbiBmb29kPGJyPjxicj44JDxicj48L2Rpdj5gO1xuXHRcblx0Y29uc3QgaW1nNCA9IG5ldyBJbWFnZSgpO1xuXHRpbWc0LnNyYyA9IHBhc3RhO1xuXHRpbWc0LmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0Y2FyZDQuYXBwZW5kQ2hpbGQoaW1nNCk7XG5cblx0Y29uc3QgY2FyZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWVudUNhcmRzLmFwcGVuZChjYXJkNSk7XG5cdGNhcmQ1LmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cdGNhcmQ1LmlubmVySFRNTCA9IGA8ZGl2PjxoMj5QaXp6YTwvaDI+IDxicj5BIGRpc2ggb2YgSXRhbGlhbiBvcmlnaW48YnI+PGJyPjEwJDxicj48L2Rpdj5gO1xuXHRcblx0Y29uc3QgaW1nNSA9IG5ldyBJbWFnZSgpO1xuXHRpbWc1LnNyYyA9IHBpenphO1xuXHRpbWc1LmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0Y2FyZDUuYXBwZW5kQ2hpbGQoaW1nNSk7XG5cdFxuXHRjb25zdCBjYXJkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtZW51Q2FyZHMuYXBwZW5kKGNhcmQ2KTtcblx0Y2FyZDYuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcblx0Y2FyZDYuaW5uZXJIVE1MID0gYDxkaXY+PGgyPk9uaW9uIFJpbmdzPC9oMj4gPGJyPkFuIG9uaW9uIHJpbmcsIGFsc28gY2FsbGVkIGEgRnJlbmNoIGZyaWVkIG9uaW9uIHJpbmcsIGlzIGEgZm9ybSBvZiBhcHBldGl6ZXIgb3Igc2lkZSBkaXNoIGluIEJyaXRpc2ggYW5kIEFtZXJpY2FuIGN1aXNpbmU8YnI+PGJyPjgkPGJyPjwvZGl2PmA7XG5cdFxuXHRjb25zdCBpbWc2ID0gbmV3IEltYWdlKCk7XG5cdGltZzYuc3JjID0gb25pb247XG5cdGltZzYuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuXHRjYXJkNi5hcHBlbmRDaGlsZChpbWc2KTtcblxuXHRjb25zdCBjYXJkNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtZW51Q2FyZHMuYXBwZW5kKGNhcmQ3KTtcblx0Y2FyZDcuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcblx0Y2FyZDcuaW5uZXJIVE1MID0gYDxkaXY+PGgyPk1leGljYW4gQXZvY2FkbyBTYWxhZDwvaDI+PGJyPjxicj42JDxicj48L2Rpdj5gO1xuXHRcblx0Y29uc3QgaW1nNyA9IG5ldyBJbWFnZSgpO1xuXHRpbWc3LnNyYyA9IG1leDtcblx0aW1nNy5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cdGNhcmQ3LmFwcGVuZENoaWxkKGltZzcpO1xuXG5cdGNvbnN0IGNhcmQ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1lbnVDYXJkcy5hcHBlbmQoY2FyZDgpO1xuXHRjYXJkOC5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXHRjYXJkOC5pbm5lckhUTUwgPSBgPGRpdj48aDI+TmFjaG9zPC9oMj4gPGJyPkEgZGlzaCBmcm9tIG5vcnRoZXJuIE1leGljbzxicj48YnI+MTIkPGJyPjwvZGl2PmA7XG5cdFxuXHRjb25zdCBpbWc4ID0gbmV3IEltYWdlKCk7XG5cdGltZzguc3JjID0gbmFjaG9zO1xuXHRpbWc4LmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0Y2FyZDguYXBwZW5kQ2hpbGQoaW1nOCk7XG5cblx0Y29uc3QgY2FyZDkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWVudUNhcmRzLmFwcGVuZChjYXJkOSk7XG5cdGNhcmQ5LmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cdGNhcmQ5LmlubmVySFRNTCA9IGA8ZGl2PjxoMj5OZW0gUm9sbHM8L2gyPiA8YnI+QSBWaWV0bmFtZXNlIGRpc2g8YnI+PGJyPjkkPGJyPjwvZGl2PmA7XG5cdFxuXHRjb25zdCBpbWc5ID0gbmV3IEltYWdlKCk7XG5cdGltZzkuc3JjID0gbmVtO1xuXHRpbWc5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0Y2FyZDkuYXBwZW5kQ2hpbGQoaW1nOSk7XG5cdFxuXHRjb25zdCBjYXJkMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWVudUNhcmRzLmFwcGVuZChjYXJkMTApO1xuXHRjYXJkMTAuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcblx0Y2FyZDEwLmlubmVySFRNTCA9IGA8ZGl2PjxoMj5TYW5kd2ljaDwvaDI+IDxicj5Hb29kIG9sZCBzYW5kd2ljaGVzPGJyPjxicj41JDxicj48L2Rpdj5gO1xuXHRcblx0Y29uc3QgaW1nMTAgPSBuZXcgSW1hZ2UoKTtcblx0aW1nMTAuc3JjID0gc2FuZHdpY2g7XG5cdGltZzEwLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0Y2FyZDEwLmFwcGVuZENoaWxkKGltZzEwKTtcblx0XG5cdGNvbnN0IGNhcmQxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtZW51Q2FyZHMuYXBwZW5kKGNhcmQxMSk7XG5cdGNhcmQxMS5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXHRjYXJkMTEuaW5uZXJIVE1MID0gYDxkaXY+PGgyPldhZmZsZTwvaDI+IDxicj5BIEZyZW5jaCByZWNpcGU8YnI+PGJyPjExJDxicj48L2Rpdj5gO1xuXHRcblx0Y29uc3QgaW1nMTEgPSBuZXcgSW1hZ2UoKTtcblx0aW1nMTEuc3JjID0gd2FmZmxlO1xuXHRpbWcxMS5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cdGNhcmQxMS5hcHBlbmRDaGlsZChpbWcxMSk7XG5cdFxuXG5cdHJldHVybiBtZW51VGFiO1xufVxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBob21lVGFiIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudVRhYiBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3RUYWIgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaGVhZGluZy5pbm5lckhUTUwgPSBcIkZsYXZvdXJzXCI7XG5oZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcblxuY29uc3QgdGFiSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRhYkl0ZW1zLmNsYXNzTGlzdC5hZGQoJ3RhYi1pdGVtcycpO1xuXG5jb25zdCBzdWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiSXRlbXMpO1xuY29udGVudC5hcHBlbmRDaGlsZChzdWJDb250ZW50KTtcbnN1YkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVRhYigpKTtcblxuY29uc3QgaG9tZVRhYkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbWVudVRhYkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgY29udGFjdFRhYkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbmhvbWVUYWJCdG4uY2xhc3NMaXN0LmFkZCgndGFicycpO1xubWVudVRhYkJ0bi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG5jb250YWN0VGFiQnRuLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcblxuaG9tZVRhYkJ0bi50ZXh0Q29udGVudCA9ICdob21lJztcbm1lbnVUYWJCdG4udGV4dENvbnRlbnQgPSAnbWVudSc7XG5jb250YWN0VGFiQnRuLnRleHRDb250ZW50ID0gJ2NvbnRhY3QnO1xuXG50YWJJdGVtcy5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbnRhYkl0ZW1zLmFwcGVuZENoaWxkKGhvbWVUYWJCdG4pO1xudGFiSXRlbXMuYXBwZW5kQ2hpbGQobWVudVRhYkJ0bik7XG50YWJJdGVtcy5hcHBlbmRDaGlsZChjb250YWN0VGFiQnRuKTtcblxuaG9tZVRhYkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge3Nob3dDb250ZW50KGhvbWVUYWIpfSk7XG5tZW51VGFiQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7c2hvd0NvbnRlbnQobWVudVRhYil9KTtcbmNvbnRhY3RUYWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtzaG93Q29udGVudChjb250YWN0VGFiKX0pO1xuXG5mdW5jdGlvbiBzaG93Q29udGVudCh0YWIpe1xuXHRzdWJDb250ZW50LmlubmVySFRNTCA9ICcnO1xuXHRzdWJDb250ZW50LmFwcGVuZENoaWxkKHRhYigpKTtcbn1cblxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5mb290ZXIuaW5uZXJIVE1MID0gJyZjb3B5IENvcHlyaWdodCBvc1NpZGQgZ2l0aHViIDIwMjInO1xuY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9