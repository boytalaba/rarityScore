module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "../shared/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'afterInteractive',
    onError
  } = props;
  const cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  }).catch(function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  const {
    updateScripts,
    scripts,
    getIsSsr
  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  (0, _react).useEffect(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(restProps.id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const _excluded = ["strategy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DocumentContext", {
  enumerable: true,
  get: function () {
    return _utils.DocumentContext;
  }
});
Object.defineProperty(exports, "DocumentInitialProps", {
  enumerable: true,
  get: function () {
    return _utils.DocumentInitialProps;
  }
});
Object.defineProperty(exports, "DocumentProps", {
  enumerable: true,
  get: function () {
    return _utils.DocumentProps;
  }
});
exports.Html = Html;
exports.Main = Main;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../shared/lib/constants */ "../shared/lib/constants");

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

var _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ "../server/get-page-files");

var _utils1 = __webpack_require__(/*! ../server/utils */ "../server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../server/htmlescape");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, _excluded);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

class Document1 extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, Object.assign({}, props));
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server).default()];
    return {
      html,
      head,
      styles
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document1;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var ref;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (ref = child.props) === null || ref === void 0 ? void 0 : ref['data-react-helmet'];

        if (!isReactHelmet) {
          var ref1;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var ref2, ref3;
        return el === null || el === void 0 ? void 0 : (ref2 = el.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.dangerouslySetInnerHTML) === null || ref3 === void 0 ? void 0 : ref3.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/false, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
    }),  false && /*#__PURE__*/false, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _utils.HtmlContext;

function Main() {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.BODY_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next"
  }, _constants.BODY_RENDER_TARGET);
}

class NextScript extends _react.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(context) {
    const {
      __NEXT_DATA__
    } = context;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _utils.HtmlContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi next/dist/pages/_document ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_document */"./node_modules/next/dist/pages/_document.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9oZWFkLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9zY3JpcHQudHN4Iiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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O0FBQUEsVUFBVSxDQUNkLFdBREksR0E1c0JOLE1BQXFCLFlBNHNCZjtBQUFBLFVBQVUsQ0FNZCxpQkFOSSxHQU1hLDBUQU5iOztTQXlKSixVLENBQVcsTyxFQUFpQixNLEVBQXdCO1NBQ3BELE9BQU8sT0FBTyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVAsQ0FBZSxHQUFmLElBQW1CLEdBQW5CLEdBQTBCLEdBQU8sTztBQUNoRSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ24zQkQsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvX25leHQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvY29uc3RhbnRzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsImV4cG9ydCBjb25zdCBET01BdHRyaWJ1dGVOYW1lczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0JyxcbiAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICBodG1sRm9yOiAnZm9yJyxcbiAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdicsXG4gIG5vTW9kdWxlOiAnbm9Nb2R1bGUnLFxufVxuXG5mdW5jdGlvbiByZWFjdEVsZW1lbnRUb0RPTSh7IHR5cGUsIHByb3BzIH06IEpTWC5FbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gIGZvciAoY29uc3QgcCBpbiBwcm9wcykge1xuICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkocCkpIGNvbnRpbnVlXG4gICAgaWYgKHAgPT09ICdjaGlsZHJlbicgfHwgcCA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykgY29udGludWVcblxuICAgIC8vIHdlIGRvbid0IHJlbmRlciB1bmRlZmluZWQgcHJvcHMgdG8gdGhlIERPTVxuICAgIGlmIChwcm9wc1twXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxuXG4gICAgY29uc3QgYXR0ciA9IERPTUF0dHJpYnV0ZU5hbWVzW3BdIHx8IHAudG9Mb3dlckNhc2UoKVxuICAgIGlmIChcbiAgICAgIHR5cGUgPT09ICdzY3JpcHQnICYmXG4gICAgICAoYXR0ciA9PT0gJ2FzeW5jJyB8fCBhdHRyID09PSAnZGVmZXInIHx8IGF0dHIgPT09ICdub01vZHVsZScpXG4gICAgKSB7XG4gICAgICA7KGVsIGFzIEhUTUxTY3JpcHRFbGVtZW50KVthdHRyXSA9ICEhcHJvcHNbcF1cbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHByb3BzW3BdKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIH0gPSBwcm9wc1xuICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJydcbiAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgIGVsLnRleHRDb250ZW50ID1cbiAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICAgID8gY2hpbGRyZW4uam9pbignJylcbiAgICAgICAgOiAnJ1xuICB9XG4gIHJldHVybiBlbFxufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlOiBzdHJpbmcsIGNvbXBvbmVudHM6IEpTWC5FbGVtZW50W10pOiB2b2lkIHtcbiAgY29uc3QgaGVhZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICBjb25zdCBoZWFkQ291bnRFbDogSFRNTE1ldGFFbGVtZW50ID0gaGVhZEVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ21ldGFbbmFtZT1uZXh0LWhlYWQtY291bnRdJ1xuICApIGFzIEhUTUxNZXRhRWxlbWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghaGVhZENvdW50RWwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdXYXJuaW5nOiBuZXh0LWhlYWQtY291bnQgaXMgbWlzc2luZy4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1oZWFkLWNvdW50LW1pc3NpbmcnXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWFkQ291bnQgPSBOdW1iZXIoaGVhZENvdW50RWwuY29udGVudClcbiAgY29uc3Qgb2xkVGFnczogRWxlbWVudFtdID0gW11cblxuICBmb3IgKFxuICAgIGxldCBpID0gMCwgaiA9IGhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaSA8IGhlYWRDb3VudDtcbiAgICBpKyssIGogPSBqIS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICkge1xuICAgIGlmIChqIS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHR5cGUpIHtcbiAgICAgIG9sZFRhZ3MucHVzaChqISlcbiAgICB9XG4gIH1cbiAgY29uc3QgbmV3VGFncyA9IChjb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkgYXMgSFRNTEVsZW1lbnRbXSkuZmlsdGVyKFxuICAgIChuZXdUYWcpID0+IHtcbiAgICAgIGZvciAobGV0IGsgPSAwLCBsZW4gPSBvbGRUYWdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGNvbnN0IG9sZFRhZyA9IG9sZFRhZ3Nba11cbiAgICAgICAgaWYgKG9sZFRhZy5pc0VxdWFsTm9kZShuZXdUYWcpKSB7XG4gICAgICAgICAgb2xkVGFncy5zcGxpY2UoaywgMSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIClcblxuICBvbGRUYWdzLmZvckVhY2goKHQpID0+IHQucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQodCkpXG4gIG5ld1RhZ3MuZm9yRWFjaCgodCkgPT4gaGVhZEVsLmluc2VydEJlZm9yZSh0LCBoZWFkQ291bnRFbCkpXG4gIGhlYWRDb3VudEVsLmNvbnRlbnQgPSAoaGVhZENvdW50IC0gb2xkVGFncy5sZW5ndGggKyBuZXdUYWdzLmxlbmd0aCkudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKToge1xuICBtb3VudGVkSW5zdGFuY2VzOiBTZXQ8dW5rbm93bj5cbiAgdXBkYXRlSGVhZDogKGhlYWQ6IEpTWC5FbGVtZW50W10pID0+IHZvaWRcbn0ge1xuICBsZXQgdXBkYXRlUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudGVkSW5zdGFuY2VzOiBuZXcgU2V0KCksXG4gICAgdXBkYXRlSGVhZDogKGhlYWQ6IEpTWC5FbGVtZW50W10pID0+IHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSAodXBkYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAocHJvbWlzZSAhPT0gdXBkYXRlUHJvbWlzZSkgcmV0dXJuXG5cbiAgICAgICAgdXBkYXRlUHJvbWlzZSA9IG51bGxcbiAgICAgICAgY29uc3QgdGFnczogUmVjb3JkPHN0cmluZywgSlNYLkVsZW1lbnRbXT4gPSB7fVxuXG4gICAgICAgIGhlYWQuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIElmIHRoZSBmb250IHRhZyBpcyBsb2FkZWQgb25seSBvbiBjbGllbnQgbmF2aWdhdGlvblxuICAgICAgICAgICAgLy8gaXQgd29uJ3QgYmUgaW5saW5lZC4gSW4gdGhpcyBjYXNlIHJldmVydCB0byB0aGUgb3JpZ2luYWwgYmVoYXZpb3JcbiAgICAgICAgICAgIGgudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgICBoLnByb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddICYmXG4gICAgICAgICAgICAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYHN0eWxlW2RhdGEtaHJlZj1cIiR7aC5wcm9wc1snZGF0YS1ocmVmJ119XCJdYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaC5wcm9wcy5ocmVmID0gaC5wcm9wc1snZGF0YS1ocmVmJ11cbiAgICAgICAgICAgIGgucHJvcHNbJ2RhdGEtaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0YWdzW2gudHlwZV0gfHwgW11cbiAgICAgICAgICBjb21wb25lbnRzLnB1c2goaClcbiAgICAgICAgICB0YWdzW2gudHlwZV0gPSBjb21wb25lbnRzXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdGl0bGVDb21wb25lbnQgPSB0YWdzLnRpdGxlID8gdGFncy50aXRsZVswXSA6IG51bGxcbiAgICAgICAgbGV0IHRpdGxlID0gJydcbiAgICAgICAgaWYgKHRpdGxlQ29tcG9uZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGl0bGVDb21wb25lbnQucHJvcHNcbiAgICAgICAgICB0aXRsZSA9XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgICBpZiAodGl0bGUgIT09IGRvY3VtZW50LnRpdGxlKSBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gICAgICAgIDtbJ21ldGEnLCAnYmFzZScsICdsaW5rJywgJ3N0eWxlJywgJ3NjcmlwdCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICB1cGRhdGVFbGVtZW50cyh0eXBlLCB0YWdzW3R5cGVdIHx8IFtdKVxuICAgICAgICB9KVxuICAgICAgfSkpXG4gICAgfSxcbiAgfVxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gICAgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmXG4gICAgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSkgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmXG4gICAgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTY3JpcHRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVhZE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnLi4vc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dCdcbmltcG9ydCB7IERPTUF0dHJpYnV0ZU5hbWVzIH0gZnJvbSAnLi9oZWFkLW1hbmFnZXInXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbmNvbnN0IFNjcmlwdENhY2hlID0gbmV3IE1hcCgpXG5jb25zdCBMb2FkQ2FjaGUgPSBuZXcgU2V0KClcblxuZXhwb3J0IGludGVyZmFjZSBTY3JpcHRQcm9wcyBleHRlbmRzIFNjcmlwdEhUTUxBdHRyaWJ1dGVzPEhUTUxTY3JpcHRFbGVtZW50PiB7XG4gIHN0cmF0ZWd5PzogJ2FmdGVySW50ZXJhY3RpdmUnIHwgJ2xhenlPbmxvYWQnIHwgJ2JlZm9yZUludGVyYWN0aXZlJ1xuICBpZD86IHN0cmluZ1xuICBvbkxvYWQ/OiAoZTogYW55KSA9PiB2b2lkXG4gIG9uRXJyb3I/OiAoZTogYW55KSA9PiB2b2lkXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBTY3JpcHRQcm9wc2AgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IHR5cGUgUHJvcHMgPSBTY3JpcHRQcm9wc1xuXG5jb25zdCBpZ25vcmVQcm9wcyA9IFtcbiAgJ29uTG9hZCcsXG4gICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsXG4gICdjaGlsZHJlbicsXG4gICdvbkVycm9yJyxcbiAgJ3N0cmF0ZWd5Jyxcbl1cblxuY29uc3QgbG9hZFNjcmlwdCA9IChwcm9wczogU2NyaXB0UHJvcHMpOiB2b2lkID0+IHtcbiAgY29uc3Qge1xuICAgIHNyYyxcbiAgICBpZCxcbiAgICBvbkxvYWQgPSAoKSA9PiB7fSxcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTCxcbiAgICBjaGlsZHJlbiA9ICcnLFxuICAgIHN0cmF0ZWd5ID0gJ2FmdGVySW50ZXJhY3RpdmUnLFxuICAgIG9uRXJyb3IsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNhY2hlS2V5ID0gaWQgfHwgc3JjXG5cbiAgLy8gU2NyaXB0IGhhcyBhbHJlYWR5IGxvYWRlZFxuICBpZiAoY2FjaGVLZXkgJiYgTG9hZENhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIENvbnRlbnRzIG9mIHRoaXMgc2NyaXB0IGFyZSBhbHJlYWR5IGxvYWRpbmcvbG9hZGVkXG4gIGlmIChTY3JpcHRDYWNoZS5oYXMoc3JjKSkge1xuICAgIExvYWRDYWNoZS5hZGQoY2FjaGVLZXkpXG4gICAgLy8gRXhlY3V0ZSBvbkxvYWQgc2luY2UgdGhlIHNjcmlwdCBsb2FkaW5nIGhhcyBiZWd1blxuICAgIFNjcmlwdENhY2hlLmdldChzcmMpLnRoZW4ob25Mb2FkLCBvbkVycm9yKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gIGNvbnN0IGxvYWRQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgcmVzb2x2ZSgpXG4gICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgIG9uTG9hZC5jYWxsKHRoaXMsIGUpXG4gICAgICB9XG4gICAgfSlcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICByZWplY3QoZSlcbiAgICB9KVxuICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgIGlmIChvbkVycm9yKSB7XG4gICAgICBvbkVycm9yKGUpXG4gICAgfVxuICB9KVxuXG4gIGlmIChzcmMpIHtcbiAgICBTY3JpcHRDYWNoZS5zZXQoc3JjLCBsb2FkUHJvbWlzZSlcbiAgfVxuICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KVxuXG4gIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xuICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJ1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgZWwudGV4dENvbnRlbnQgPVxuICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgICAgPyBjaGlsZHJlbi5qb2luKCcnKVxuICAgICAgICA6ICcnXG4gIH0gZWxzZSBpZiAoc3JjKSB7XG4gICAgZWwuc3JjID0gc3JjXG4gIH1cblxuICBmb3IgKGNvbnN0IFtrLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgaWdub3JlUHJvcHMuaW5jbHVkZXMoaykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0ciA9IERPTUF0dHJpYnV0ZU5hbWVzW2tdIHx8IGsudG9Mb3dlckNhc2UoKVxuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgfVxuXG4gIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1uc2NyaXB0Jywgc3RyYXRlZ3kpXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xpZW50U2NyaXB0TG9hZChwcm9wczogU2NyaXB0UHJvcHMpIHtcbiAgY29uc3QgeyBzdHJhdGVneSA9ICdhZnRlckludGVyYWN0aXZlJyB9ID0gcHJvcHNcbiAgaWYgKHN0cmF0ZWd5ID09PSAnYWZ0ZXJJbnRlcmFjdGl2ZScpIHtcbiAgICBsb2FkU2NyaXB0KHByb3BzKVxuICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eU9ubG9hZCcpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gbG9hZFNjcmlwdChwcm9wcykpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTGF6eVNjcmlwdChwcm9wczogU2NyaXB0UHJvcHMpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IGxvYWRTY3JpcHQocHJvcHMpKVxuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBsb2FkU2NyaXB0KHByb3BzKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2NyaXB0TG9hZGVyKHNjcmlwdExvYWRlckl0ZW1zOiBTY3JpcHRQcm9wc1tdKSB7XG4gIHNjcmlwdExvYWRlckl0ZW1zLmZvckVhY2goaGFuZGxlQ2xpZW50U2NyaXB0TG9hZClcbn1cblxuZnVuY3Rpb24gU2NyaXB0KHByb3BzOiBTY3JpcHRQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHtcbiAgICBzcmMgPSAnJyxcbiAgICBvbkxvYWQgPSAoKSA9PiB7fSxcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTCxcbiAgICBzdHJhdGVneSA9ICdhZnRlckludGVyYWN0aXZlJyxcbiAgICBvbkVycm9yLFxuICAgIC4uLnJlc3RQcm9wc1xuICB9ID0gcHJvcHNcblxuICAvLyBDb250ZXh0IGlzIGF2YWlsYWJsZSBvbmx5IGR1cmluZyBTU1JcbiAgY29uc3QgeyB1cGRhdGVTY3JpcHRzLCBzY3JpcHRzLCBnZXRJc1NzciB9ID0gdXNlQ29udGV4dChIZWFkTWFuYWdlckNvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RyYXRlZ3kgPT09ICdhZnRlckludGVyYWN0aXZlJykge1xuICAgICAgbG9hZFNjcmlwdChwcm9wcylcbiAgICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eU9ubG9hZCcpIHtcbiAgICAgIGxvYWRMYXp5U2NyaXB0KHByb3BzKVxuICAgIH1cbiAgfSwgW3Byb3BzLCBzdHJhdGVneV0pXG5cbiAgaWYgKHN0cmF0ZWd5ID09PSAnYmVmb3JlSW50ZXJhY3RpdmUnKSB7XG4gICAgaWYgKHVwZGF0ZVNjcmlwdHMpIHtcbiAgICAgIHNjcmlwdHMuYmVmb3JlSW50ZXJhY3RpdmUgPSAoc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkuY29uY2F0KFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYyxcbiAgICAgICAgICBvbkxvYWQsXG4gICAgICAgICAgb25FcnJvcixcbiAgICAgICAgICAuLi5yZXN0UHJvcHMsXG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICAgdXBkYXRlU2NyaXB0cyhzY3JpcHRzKVxuICAgIH0gZWxzZSBpZiAoZ2V0SXNTc3IgJiYgZ2V0SXNTc3IoKSkge1xuICAgICAgLy8gU2NyaXB0IGhhcyBhbHJlYWR5IGxvYWRlZCBkdXJpbmcgU1NSXG4gICAgICBMb2FkQ2FjaGUuYWRkKHJlc3RQcm9wcy5pZCB8fCBzcmMpXG4gICAgfSBlbHNlIGlmIChnZXRJc1NzciAmJiAhZ2V0SXNTc3IoKSkge1xuICAgICAgbG9hZFNjcmlwdChwcm9wcylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInXG5pbXBvcnQge1xuICBCT0RZX1JFTkRFUl9UQVJHRVQsXG4gIE9QVElNSVpFRF9GT05UX1BST1ZJREVSUyxcbn0gZnJvbSAnLi4vc2hhcmVkL2xpYi9jb25zdGFudHMnXG5pbXBvcnQge1xuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzLFxuICBIdG1sQ29udGV4dCxcbiAgSHRtbFByb3BzLFxufSBmcm9tICcuLi9zaGFyZWQvbGliL3V0aWxzJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCwgZ2V0UGFnZUZpbGVzIH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgY2xlYW5BbXBQYXRoIH0gZnJvbSAnLi4vc2VydmVyL3V0aWxzJ1xuaW1wb3J0IHsgaHRtbEVzY2FwZUpzb25TdHJpbmcgfSBmcm9tICcuLi9zZXJ2ZXIvaHRtbGVzY2FwZSdcbmltcG9ydCBTY3JpcHQsIHsgU2NyaXB0UHJvcHMgfSBmcm9tICcuLi9jbGllbnQvc2NyaXB0J1xuXG5leHBvcnQgeyBEb2N1bWVudENvbnRleHQsIERvY3VtZW50SW5pdGlhbFByb3BzLCBEb2N1bWVudFByb3BzIH1cblxuZXhwb3J0IHR5cGUgT3JpZ2luUHJvcHMgPSB7XG4gIG5vbmNlPzogc3RyaW5nXG4gIGNyb3NzT3JpZ2luPzogc3RyaW5nXG59XG5cbnR5cGUgRG9jdW1lbnRGaWxlcyA9IHtcbiAgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG4gIHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgYWxsRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3QsXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGluQW1wTW9kZTogYm9vbGVhblxuKTogRG9jdW1lbnRGaWxlcyB7XG4gIGNvbnN0IHNoYXJlZEZpbGVzOiByZWFkb25seSBzdHJpbmdbXSA9IGdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCAnL19hcHAnKVxuICBjb25zdCBwYWdlRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gaW5BbXBNb2RlXG4gICAgPyBbXVxuICAgIDogZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lKVxuXG4gIHJldHVybiB7XG4gICAgc2hhcmVkRmlsZXMsXG4gICAgcGFnZUZpbGVzLFxuICAgIGFsbEZpbGVzOiBbLi4ubmV3IFNldChbLi4uc2hhcmVkRmlsZXMsIC4uLnBhZ2VGaWxlc10pXSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQb2x5ZmlsbFNjcmlwdHMoY29udGV4dDogSHRtbFByb3BzLCBwcm9wczogT3JpZ2luUHJvcHMpIHtcbiAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICBjb25zdCB7XG4gICAgYXNzZXRQcmVmaXgsXG4gICAgYnVpbGRNYW5pZmVzdCxcbiAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgfSA9IGNvbnRleHRcblxuICByZXR1cm4gYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzXG4gICAgLmZpbHRlcihcbiAgICAgIChwb2x5ZmlsbCkgPT4gcG9seWZpbGwuZW5kc1dpdGgoJy5qcycpICYmICFwb2x5ZmlsbC5lbmRzV2l0aCgnLm1vZHVsZS5qcycpXG4gICAgKVxuICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICA8c2NyaXB0XG4gICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgIGRlZmVyPXshZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgY3Jvc3NPcmlnaW49e3Byb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59XG4gICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgIC8+XG4gICAgKSlcbn1cblxuZnVuY3Rpb24gZ2V0UHJlTmV4dFNjcmlwdHMoY29udGV4dDogSHRtbFByb3BzLCBwcm9wczogT3JpZ2luUHJvcHMpIHtcbiAgY29uc3QgeyBzY3JpcHRMb2FkZXIsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nIH0gPSBjb250ZXh0XG5cbiAgcmV0dXJuIChzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLm1hcChcbiAgICAoZmlsZTogU2NyaXB0UHJvcHMsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyYXRlZ3ksIC4uLnNjcmlwdFByb3BzIH0gPSBmaWxlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgey4uLnNjcmlwdFByb3BzfVxuICAgICAgICAgIGtleT17c2NyaXB0UHJvcHMuc3JjIHx8IGluZGV4fVxuICAgICAgICAgIGRlZmVyPXshZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgICAgbm9uY2U9e3Byb3BzLm5vbmNlfVxuICAgICAgICAgIGRhdGEtbnNjcmlwdD1cImJlZm9yZUludGVyYWN0aXZlXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17cHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gZ2V0RHluYW1pY0NodW5rcyhcbiAgY29udGV4dDogSHRtbFByb3BzLFxuICBwcm9wczogT3JpZ2luUHJvcHMsXG4gIGZpbGVzOiBEb2N1bWVudEZpbGVzXG4pIHtcbiAgY29uc3Qge1xuICAgIGR5bmFtaWNJbXBvcnRzLFxuICAgIGFzc2V0UHJlZml4LFxuICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gIH0gPSBjb250ZXh0XG5cbiAgcmV0dXJuIGR5bmFtaWNJbXBvcnRzLm1hcCgoZmlsZSkgPT4ge1xuICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzJykgfHwgZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoZmlsZSkpIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNjcmlwdFxuICAgICAgICBhc3luYz17IWlzRGV2ZWxvcG1lbnQgJiYgZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgIGRlZmVyPXshZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgZmlsZVxuICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgbm9uY2U9e3Byb3BzLm5vbmNlfVxuICAgICAgICBjcm9zc09yaWdpbj17cHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn1cbiAgICAgIC8+XG4gICAgKVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRTY3JpcHRzKFxuICBjb250ZXh0OiBIdG1sUHJvcHMsXG4gIHByb3BzOiBPcmlnaW5Qcm9wcyxcbiAgZmlsZXM6IERvY3VtZW50RmlsZXNcbikge1xuICBjb25zdCB7XG4gICAgYXNzZXRQcmVmaXgsXG4gICAgYnVpbGRNYW5pZmVzdCxcbiAgICBpc0RldmVsb3BtZW50LFxuICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICB9ID0gY29udGV4dFxuXG4gIGNvbnN0IG5vcm1hbFNjcmlwdHMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGUpID0+IGZpbGUuZW5kc1dpdGgoJy5qcycpKVxuICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSBidWlsZE1hbmlmZXN0Lmxvd1ByaW9yaXR5RmlsZXM/LmZpbHRlcigoZmlsZSkgPT5cbiAgICBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICApXG5cbiAgcmV0dXJuIFsuLi5ub3JtYWxTY3JpcHRzLCAuLi5sb3dQcmlvcml0eVNjcmlwdHNdLm1hcCgoZmlsZSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8c2NyaXB0XG4gICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgZmlsZVxuICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgbm9uY2U9e3Byb3BzLm5vbmNlfVxuICAgICAgICBhc3luYz17IWlzRGV2ZWxvcG1lbnQgJiYgZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgIGRlZmVyPXshZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgIGNyb3NzT3JpZ2luPXtwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG59XG5cbi8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQ8UCA9IHt9PiBleHRlbmRzIENvbXBvbmVudDxEb2N1bWVudFByb3BzICYgUD4ge1xuICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhcbiAgICBjdHg6IERvY3VtZW50Q29udGV4dFxuICApOiBQcm9taXNlPERvY3VtZW50SW5pdGlhbFByb3BzPiB7XG4gICAgY29uc3QgZW5oYW5jZUFwcCA9IChBcHA6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChwcm9wczogYW55KSA9PiA8QXBwIHsuLi5wcm9wc30gLz5cbiAgICB9XG5cbiAgICBjb25zdCB7IGh0bWwsIGhlYWQgfSA9IGF3YWl0IGN0eC5yZW5kZXJQYWdlKHsgZW5oYW5jZUFwcCB9KVxuICAgIGNvbnN0IHN0eWxlcyA9IFsuLi5mbHVzaCgpXVxuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIHN0eWxlcyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEh0bWwoXG4gIHByb3BzOiBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5IdG1sSFRNTEF0dHJpYnV0ZXM8SFRNTEh0bWxFbGVtZW50PixcbiAgICBIVE1MSHRtbEVsZW1lbnRcbiAgPlxuKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBkb2NDb21wb25lbnRzUmVuZGVyZWQsIGxvY2FsZSB9ID0gdXNlQ29udGV4dChIdG1sQ29udGV4dClcblxuICBkb2NDb21wb25lbnRzUmVuZGVyZWQuSHRtbCA9IHRydWVcblxuICByZXR1cm4gKFxuICAgIDxodG1sXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBsYW5nPXtwcm9wcy5sYW5nIHx8IGxvY2FsZSB8fCB1bmRlZmluZWR9XG4gICAgICBhbXA9e2luQW1wTW9kZSA/ICcnIDogdW5kZWZpbmVkfVxuICAgICAgZGF0YS1hbXBkZXZtb2RlPXtcbiAgICAgICAgaW5BbXBNb2RlICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnJyA6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGNsYXNzIEhlYWQgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIE9yaWdpblByb3BzICZcbiAgICBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICAgIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkRWxlbWVudD4sXG4gICAgICBIVE1MSGVhZEVsZW1lbnRcbiAgICA+XG4+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gSHRtbENvbnRleHRcblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIEh0bWxDb250ZXh0PlxuXG4gIGdldENzc0xpbmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLCBkeW5hbWljSW1wb3J0cyB9ID1cbiAgICAgIHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgY29uc3Qgc2hhcmVkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcylcblxuICAgIC8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuICAgIC8vIHdlYnBhY2sgcnVudGltZSAoYG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luYCkuXG4gICAgbGV0IHVubWFuZ2VkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbXSlcbiAgICBsZXQgZHluYW1pY0Nzc0ZpbGVzID0gQXJyYXkuZnJvbShcbiAgICAgIG5ldyBTZXQoZHluYW1pY0ltcG9ydHMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuY3NzJykpKVxuICAgIClcbiAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKVxuICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihcbiAgICAgICAgKGYpID0+ICEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcbiAgICAgIClcbiAgICAgIHVubWFuZ2VkRmlsZXMgPSBuZXcgU2V0KGR5bmFtaWNDc3NGaWxlcylcbiAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKVxuICAgIH1cblxuICAgIGxldCBjc3NMaW5rRWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXVxuICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGlzU2hhcmVkRmlsZSA9IHNoYXJlZEZpbGVzLmhhcyhmaWxlKVxuXG4gICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MpIHtcbiAgICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzVW5tYW5hZ2VkRmlsZSA9IHVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpXG4gICAgICBjc3NMaW5rRWxlbWVudHMucHVzaChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhLW4tZz17aXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgZGF0YS1uLXA9e2lzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/IHVuZGVmaW5lZCA6ICcnfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTXG4gICAgKSB7XG4gICAgICBjc3NMaW5rRWxlbWVudHMgPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoXG4gICAgICAgIGNzc0xpbmtFbGVtZW50c1xuICAgICAgKSBhcyBSZWFjdEVsZW1lbnRbXVxuICAgIH1cblxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cywgYXNzZXRQcmVmaXgsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIH0gPVxuICAgICAgdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gKFxuICAgICAgZHluYW1pY0ltcG9ydHNcbiAgICAgICAgLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cblxuICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLCBzY3JpcHRMb2FkZXIgfSA9XG4gICAgICB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBwcmVsb2FkRmlsZXMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGZpbGUuZW5kc1dpdGgoJy5qcycpXG4gICAgfSlcblxuICAgIHJldHVybiBbXG4gICAgICAuLi4oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGUuc3JjfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgIGhyZWY9e2ZpbGUuc3JjfVxuICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKSxcbiAgICAgIC4uLnByZWxvYWRGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgIF1cbiAgfVxuXG4gIGdldER5bmFtaWNDaHVua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKVxuICB9XG5cbiAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgcmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGdldFNjcmlwdHMoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICByZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKVxuICB9XG5cbiAgaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlKTogUmVhY3ROb2RlW10ge1xuICAgIGNvbnN0IHsgc2NyaXB0TG9hZGVyIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBzY3JpcHRMb2FkZXJJdGVtczogU2NyaXB0UHJvcHNbXSA9IFtdXG4gICAgY29uc3QgZmlsdGVyZWRDaGlsZHJlbjogUmVhY3ROb2RlW10gPSBbXVxuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgKGNoaWxkOiBhbnkpID0+IHtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSBTY3JpcHQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzLnN0cmF0ZWd5ID09PSAnYmVmb3JlSW50ZXJhY3RpdmUnKSB7XG4gICAgICAgICAgc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlID0gKFxuICAgICAgICAgICAgc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdXG4gICAgICAgICAgKS5jb25jYXQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5jaGlsZC5wcm9wcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBbJ2xhenlPbmxvYWQnLCAnYWZ0ZXJJbnRlcmFjdGl2ZSddLmluY2x1ZGVzKGNoaWxkLnByb3BzLnN0cmF0ZWd5KVxuICAgICAgICApIHtcbiAgICAgICAgICBzY3JpcHRMb2FkZXJJdGVtcy5wdXNoKGNoaWxkLnByb3BzKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbHRlcmVkQ2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18uc2NyaXB0TG9hZGVyID0gc2NyaXB0TG9hZGVySXRlbXNcblxuICAgIHJldHVybiBmaWx0ZXJlZENoaWxkcmVuXG4gIH1cblxuICBtYWtlU3R5bGVzaGVldEluZXJ0KG5vZGU6IFJlYWN0Tm9kZSk6IFJlYWN0Tm9kZVtdIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKG5vZGUsIChjOiBhbnkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgIE9QVElNSVpFRF9GT05UX1BST1ZJREVSUy5zb21lKCh7IHVybCB9KSA9PlxuICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb3BzID0geyAuLi4oYy5wcm9wcyB8fCB7fSkgfVxuICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddXG4gICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcylcbiAgICAgIH0gZWxzZSBpZiAoYy5wcm9wcyAmJiBjLnByb3BzWydjaGlsZHJlbiddKSB7XG4gICAgICAgIGMucHJvcHNbJ2NoaWxkcmVuJ10gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoYy5wcm9wc1snY2hpbGRyZW4nXSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBjXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdHlsZXMsXG4gICAgICBhbXBQYXRoLFxuICAgICAgaW5BbXBNb2RlLFxuICAgICAgaHlicmlkQW1wLFxuICAgICAgY2Fub25pY2FsQmFzZSxcbiAgICAgIF9fTkVYVF9EQVRBX18sXG4gICAgICBkYW5nZXJvdXNBc1BhdGgsXG4gICAgICBoZWFkVGFncyxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICAgIHVuc3RhYmxlX0pzUHJlbG9hZCxcbiAgICAgIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG4gICAgY29uc3QgZGlzYWJsZUpzUHJlbG9hZCA9XG4gICAgICB1bnN0YWJsZV9Kc1ByZWxvYWQgPT09IGZhbHNlIHx8ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZ1xuXG4gICAgdGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkID0gdHJ1ZVxuXG4gICAgbGV0IHsgaGVhZCB9ID0gdGhpcy5jb250ZXh0XG4gICAgbGV0IGNzc1ByZWxvYWRzOiBBcnJheTxKU1guRWxlbWVudD4gPSBbXVxuICAgIGxldCBvdGhlckhlYWRFbGVtZW50czogQXJyYXk8SlNYLkVsZW1lbnQ+ID0gW11cbiAgICBpZiAoaGVhZCkge1xuICAgICAgaGVhZC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjICYmXG4gICAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgICBjLnByb3BzWydyZWwnXSA9PT0gJ3ByZWxvYWQnICYmXG4gICAgICAgICAgYy5wcm9wc1snYXMnXSA9PT0gJ3N0eWxlJ1xuICAgICAgICApIHtcbiAgICAgICAgICBjc3NQcmVsb2Fkcy5wdXNoKGMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYyAmJiBvdGhlckhlYWRFbGVtZW50cy5wdXNoKGMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBoZWFkID0gY3NzUHJlbG9hZHMuY29uY2F0KG90aGVySGVhZEVsZW1lbnRzKVxuICAgIH1cbiAgICBsZXQgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZpbHRlcihCb29sZWFuKVxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXRpdGxlXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgY2hpbGQ/LnR5cGUgPT09ICdtZXRhJyAmJlxuICAgICAgICAgICAgY2hpbGQ/LnByb3BzPy5uYW1lID09PSAndmlld3BvcnQnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH0pXG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmXG4gICAgICAhaW5BbXBNb2RlXG4gICAgKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjaGlsZHJlbilcbiAgICB9XG5cbiAgICBjaGlsZHJlbiA9IHRoaXMuaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbilcblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICBsZXQgYmFkUHJvcDogc3RyaW5nID0gJydcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJ1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgIC8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4gICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xKSB8fFxuICAgICAgICAgICAgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmXG4gICAgICAgICAgICAgICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NvbmZsaWN0aW5nLWFtcC10YWdgXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2FtcGh0bWwnKSB7XG4gICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfSlcblxuICAgIC8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGNvbnN0IGN1clN0eWxlczogUmVhY3QuUmVhY3RFbGVtZW50W10gPSBBcnJheS5pc0FycmF5KHN0eWxlcylcbiAgICAgID8gKHN0eWxlcyBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXSlcbiAgICAgIDogW11cbiAgICBpZiAoXG4gICAgICBpbkFtcE1vZGUgJiZcbiAgICAgIHN0eWxlcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWw6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT5cbiAgICAgICAgZWw/LnByb3BzPy5kYW5nZXJvdXNseVNldElubmVySFRNTD8uX19odG1sXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKSA9PiBoYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKSlcbiAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XG4gICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLFxuICAgICAgaW5BbXBNb2RlXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiYgKFxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJuZXh0LWZvbnQtcHJlY29ubmVjdFwiIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtoZWFkfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJuZXh0LWhlYWQtY291bnRcIlxuICAgICAgICAgIGNvbnRlbnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIChcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGRhdGEtbi1jc3M9e3RoaXMucHJvcHMubm9uY2UgPz8gJyd9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9JTUFHRVMgJiYgKFxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibmV4dC1pbWFnZS1wcmVsb2FkXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVKc1ByZWxvYWQgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlSnNQcmVsb2FkICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHshZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXRTY3JpcHRzKGZpbGVzKX1cbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgKFxuICAgICAgICAgICAgICA8bm9zY3JpcHQgZGF0YS1uLWNzcz17dGhpcy5wcm9wcy5ub25jZSA/PyAnJ30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgICAgICAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4gICAgICAgICAgICAgIC8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuICAgICAgICAgICAgICAvLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGlkPVwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c3R5bGVzIHx8IG51bGx9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGhlYWRUYWdzIHx8IFtdKSl9XG4gICAgICA8L2hlYWQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCB7IGluQW1wTW9kZSwgZG9jQ29tcG9uZW50c1JlbmRlcmVkIH0gPSB1c2VDb250ZXh0KEh0bWxDb250ZXh0KVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluID0gdHJ1ZVxuXG4gIGlmIChpbkFtcE1vZGUpIHJldHVybiA8PntCT0RZX1JFTkRFUl9UQVJHRVR9PC8+XG4gIHJldHVybiA8ZGl2IGlkPVwiX19uZXh0XCI+e0JPRFlfUkVOREVSX1RBUkdFVH08L2Rpdj5cbn1cblxuZXhwb3J0IGNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8T3JpZ2luUHJvcHM+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gSHRtbENvbnRleHRcblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIEh0bWxDb250ZXh0PlxuXG4gIC8vIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2FtdGhvci82NGIxMTRlNGE0ZjUzOTkxNWE5NWI5MWZmZDM0MGFjY1xuICBzdGF0aWMgc2FmYXJpTm9tb2R1bGVGaXggPVxuICAgICchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOydcblxuICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgcmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcylcbiAgfVxuXG4gIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpXG4gIH1cblxuICBnZXRTY3JpcHRzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgcmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcylcbiAgfVxuXG4gIGdldFBvbHlmaWxsU2NyaXB0cygpIHtcbiAgICByZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcylcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoY29udGV4dDogUmVhZG9ubHk8SHRtbFByb3BzPik6IHN0cmluZyB7XG4gICAgY29uc3QgeyBfX05FWFRfREFUQV9fIH0gPSBjb250ZXh0XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKVxuICAgICAgcmV0dXJuIGh0bWxFc2NhcGVKc29uU3RyaW5nKGRhdGEpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jaXJjdWxhci1zdHJ1Y3R1cmVgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQgPSB0cnVlXG5cbiAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbXBEZXZGaWxlcyA9IFtcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyxcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzLFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YW1wRGV2RmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlczogRG9jdW1lbnRGaWxlcyA9IGdldERvY3VtZW50RmlsZXMoXG4gICAgICB0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCxcbiAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsXG4gICAgICBpbkFtcE1vZGVcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXNcbiAgICAgICAgICA/IGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKX1cbiAgICAgICAge2Rpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICB0aGlzLmdldFByZU5leHRTY3JpcHRzKCl9XG4gICAgICAgIHtkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKX1cbiAgICAgICAge2Rpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoOiBzdHJpbmcsIGFzUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9YW1wPTFgXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9