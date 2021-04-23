webpackJsonp([2],{

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactJss = __webpack_require__(420);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	var _reactFacebook = __webpack_require__(837);

	var _reactFacebook2 = _interopRequireDefault(_reactFacebook);

	var _reactTwitterWidgets = __webpack_require__(887);

	var _config = __webpack_require__(576);

	var _config2 = _interopRequireDefault(_config);

	var _instagram = __webpack_require__(727);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = function styles(theme) {
	  var _share, _before, _instaButton, _followbutton, _label;

	  return {
	    share: (_share = {
	      display: "flex",
	      flexDirection: "column",
	      justifyContent: "center",
	      alignItems: "center",
	      padding: "2em 0 0"
	    }, _share["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      flexDirection: "row"
	    }, _share),
	    links: {
	      display: "flex",
	      flexDirection: "row",
	      maxWidth: "320px",
	      flexWrap: "wrap",
	      justifyContent: "center",
	      "& .SocialMediaShareButton": {
	        margin: "0 .8em",
	        cursor: "pointer"
	      }
	    },
	    followbutton: (_followbutton = {
	      margin: "0 .5rem .5rem .5rem"
	    }, _followbutton["@media (max-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      margin: "0 .25rem .5rem .25rem"
	    }, _followbutton["& .instaButton"] = (_instaButton = {
	      color: "#fff",
	      borderRadius: "3px",
	      position: "relative",
	      display: "inline-block",
	      height: "28px",
	      width: "90px",
	      textAlign: "center",
	      fontSize: "14px",
	      background: "-webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat"
	    }, _instaButton["background"] = "linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat", _instaButton.overflow = "hidden", _instaButton["&:before"] = (_before = {
	      content: "''",
	      position: "absolute",
	      top: 0,
	      left: 0,
	      width: "100%",
	      height: "100%",
	      background: "-webkit-linear-gradient(15deg, #ffdb2c, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat"
	    }, _before["background"] = "linear-gradient(15deg, #ffdb2c, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat", _before), _instaButton["& svg"] = {
	      fill: "#fff",
	      width: "28px",
	      position: "relative"
	    }, _instaButton["& span"] = {
	      display: "inline-block",
	      position: "relative",
	      fontWeight: "normal",
	      paddingRight: "5px",
	      top: "-8px"
	    }, _instaButton["&:hover"] = {
	      color: "#fff"
	    }, _instaButton), _followbutton),
	    label: (_label = {
	      fontSize: "1.2em",
	      margin: "0 1em 1em"
	    }, _label["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      margin: "0 1em"
	    }, _label)
	  };
	};

	var PostFollow = function (_React$Component) {
	  _inherits(PostFollow, _React$Component);

	  function PostFollow() {
	    _classCallCheck(this, PostFollow);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  PostFollow.prototype.componentDidMount = function componentDidMount() {
	    if (typeof twttr !== 'undefined' && typeof twttr.widgets !== 'undefined') {
	      twttr.widgets.load();
	    }
	  };

	  PostFollow.prototype.render = function render() {
	    var _props = this.props,
	        post = _props.post,
	        classes = _props.classes,
	        slug = _props.slug,
	        facebook = _props.facebook;
	    var excerpt = post.excerpt,
	        frontmatter = post.frontmatter;

	    var url = _config2.default.siteUrl + _config2.default.pathPrefix + "/rss.xml";
	    var twitterAccount = _config2.default.authorTwitterAccount;
	    var instaUrl = 'https://www.instagram.com/masakinishi_com/';
	    var facebookUrl = 'https://www.facebook.com/masakinishicom/';
	    var feedlyfollowurl = 'https://feedly.com/i/subscription/feed%2F' + url;
	    var iconSize = 36;
	    var filter = function filter(count) {
	      return count > 0 ? count : "";
	    };

	    return _react2.default.createElement(
	      "div",
	      { className: classes.share },
	      _react2.default.createElement(
	        "span",
	        { className: classes.label },
	        "\u30D5\u30A9\u30ED\u30FC"
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: classes.links },
	        _react2.default.createElement(
	          "div",
	          { className: classes.followbutton },
	          _react2.default.createElement(
	            _reactFacebook2.default,
	            { appId: facebook },
	            _react2.default.createElement(_reactFacebook.Like, { href: facebookUrl, colorScheme: "dark", layout: "button_count", size: "large" })
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: classes.followbutton },
	          _react2.default.createElement(
	            "a",
	            {
	              href: instaUrl,
	              className: "instaButton",
	              target: "_blank",
	              rel: "noopener noreferrer",
	              title: "\u30A4\u30F3\u30B9\u30BF\u3092\u30D5\u30A9\u30ED\u30FC\u3059\u308B"
	            },
	            _react2.default.createElement(_instagram.ReactComponent, null),
	            " ",
	            _react2.default.createElement(
	              "span",
	              null,
	              "Follow"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: classes.followbutton },
	          _react2.default.createElement(
	            "a",
	            {
	              href: feedlyfollowurl,
	              target: "_blank",
	              rel: "noopener noreferrer",
	              title: "Feedly\u3067\u8CFC\u8AAD\u3059\u308B"
	            },
	            _react2.default.createElement("img", {
	              id: "feedlyFollow",
	              src: "https://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-medium_2x.png",
	              alt: "feedly\u3067\u8CFC\u8AAD",
	              width: "71",
	              height: "28" })
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: classes.followbutton },
	          _react2.default.createElement(_reactTwitterWidgets.Follow, {
	            username: twitterAccount,
	            options: { size: "large" }
	          })
	        )
	      )
	    );
	  };

	  return PostFollow;
	}(_react2.default.Component);

	PostFollow.propTypes = {
	  post: _propTypes2.default.object.isRequired,
	  classes: _propTypes2.default.object.isRequired,
	  slug: _propTypes2.default.string.isRequired
	};

	exports.default = (0, _reactJss2.default)(styles)(PostFollow);
	module.exports = exports["default"];

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.MessengerColor = exports.MessengerSize = exports.CommentsOrderBy = exports.LikeAction = exports.ColorScheme = exports.LikeLayout = exports.LikeSize = exports.SendToMessenger = exports.MessengerCheckbox = exports.MessageUs = exports.CustomChat = exports.Feed = exports.CommentsCount = exports.Comments = exports.EmbeddedVideo = exports.EmbeddedPost = exports.LoginButton = exports.Login = exports.Page = exports.ShareButton = exports.Share = exports.Send = exports.Like = exports.InitFacebook = exports.Parser = exports.FacebookProvider = exports.default = undefined;

	var _FacebookProvider2 = __webpack_require__(838);

	var _FacebookProvider3 = _interopRequireDefault(_FacebookProvider2);

	var _Parser2 = __webpack_require__(856);

	var _Parser3 = _interopRequireDefault(_Parser2);

	var _InitFacebook2 = __webpack_require__(857);

	var _InitFacebook3 = _interopRequireDefault(_InitFacebook2);

	var _Like2 = __webpack_require__(859);

	var _Like3 = _interopRequireDefault(_Like2);

	var _Send2 = __webpack_require__(861);

	var _Send3 = _interopRequireDefault(_Send2);

	var _Share2 = __webpack_require__(864);

	var _Share3 = _interopRequireDefault(_Share2);

	var _ShareButton2 = __webpack_require__(865);

	var _ShareButton3 = _interopRequireDefault(_ShareButton2);

	var _Page2 = __webpack_require__(866);

	var _Page3 = _interopRequireDefault(_Page2);

	var _Login2 = __webpack_require__(867);

	var _Login3 = _interopRequireDefault(_Login2);

	var _LoginButton2 = __webpack_require__(868);

	var _LoginButton3 = _interopRequireDefault(_LoginButton2);

	var _EmbeddedPost2 = __webpack_require__(871);

	var _EmbeddedPost3 = _interopRequireDefault(_EmbeddedPost2);

	var _EmbeddedVideo2 = __webpack_require__(872);

	var _EmbeddedVideo3 = _interopRequireDefault(_EmbeddedVideo2);

	var _Comments2 = __webpack_require__(873);

	var _Comments3 = _interopRequireDefault(_Comments2);

	var _CommentsCount2 = __webpack_require__(876);

	var _CommentsCount3 = _interopRequireDefault(_CommentsCount2);

	var _Feed2 = __webpack_require__(877);

	var _Feed3 = _interopRequireDefault(_Feed2);

	var _CustomChat2 = __webpack_require__(878);

	var _CustomChat3 = _interopRequireDefault(_CustomChat2);

	var _MessageUs2 = __webpack_require__(879);

	var _MessageUs3 = _interopRequireDefault(_MessageUs2);

	var _MessengerCheckbox2 = __webpack_require__(880);

	var _MessengerCheckbox3 = _interopRequireDefault(_MessengerCheckbox2);

	var _SendToMessenger2 = __webpack_require__(881);

	var _SendToMessenger3 = _interopRequireDefault(_SendToMessenger2);

	var _LikeSize2 = __webpack_require__(884);

	var _LikeSize3 = _interopRequireDefault(_LikeSize2);

	var _LikeLayout2 = __webpack_require__(885);

	var _LikeLayout3 = _interopRequireDefault(_LikeLayout2);

	var _ColorScheme2 = __webpack_require__(874);

	var _ColorScheme3 = _interopRequireDefault(_ColorScheme2);

	var _LikeAction2 = __webpack_require__(886);

	var _LikeAction3 = _interopRequireDefault(_LikeAction2);

	var _CommentsOrderBy2 = __webpack_require__(875);

	var _CommentsOrderBy3 = _interopRequireDefault(_CommentsOrderBy2);

	var _MessengerSize2 = __webpack_require__(882);

	var _MessengerSize3 = _interopRequireDefault(_MessengerSize2);

	var _MessengerColor2 = __webpack_require__(883);

	var _MessengerColor3 = _interopRequireDefault(_MessengerColor2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FacebookProvider3.default;
	exports.FacebookProvider = _FacebookProvider3.default;
	exports.Parser = _Parser3.default;
	exports.InitFacebook = _InitFacebook3.default;
	exports.Like = _Like3.default;
	exports.Send = _Send3.default;
	exports.Share = _Share3.default;
	exports.ShareButton = _ShareButton3.default;
	exports.Page = _Page3.default;
	exports.Login = _Login3.default;
	exports.LoginButton = _LoginButton3.default;
	exports.EmbeddedPost = _EmbeddedPost3.default;
	exports.EmbeddedVideo = _EmbeddedVideo3.default;
	exports.Comments = _Comments3.default;
	exports.CommentsCount = _CommentsCount3.default;
	exports.Feed = _Feed3.default;
	exports.CustomChat = _CustomChat3.default;
	exports.MessageUs = _MessageUs3.default;
	exports.MessengerCheckbox = _MessengerCheckbox3.default;
	exports.SendToMessenger = _SendToMessenger3.default;
	exports.LikeSize = _LikeSize3.default;
	exports.LikeLayout = _LikeLayout3.default;
	exports.ColorScheme = _ColorScheme3.default;
	exports.LikeAction = _LikeAction3.default;
	exports.CommentsOrderBy = _CommentsOrderBy3.default;
	exports.MessengerSize = _MessengerSize3.default;
	exports.MessengerColor = _MessengerColor3.default;
	//# sourceMappingURL=index.js.map

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _regenerator = __webpack_require__(839);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(842);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck2 = __webpack_require__(223);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(224);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(259);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Facebook = __webpack_require__(855);

	var _Facebook2 = _interopRequireDefault(_Facebook);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var facebookInstance = null;

	var Facebook = (_temp = _class = function (_Component) {
	  (0, _inherits3.default)(Facebook, _Component);

	  function Facebook() {
	    (0, _classCallCheck3.default)(this, Facebook);
	    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
	  }

	  Facebook.prototype.getChildContext = function getChildContext() {
	    return {
	      facebook: this
	    };
	  };

	  Facebook.prototype.init = function () {
	    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	      var _props, _domain, _version, _appId, _cookie, _status, _xfbml, _language, _frictionlessRequests, _wait;

	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              if (!this.facebook) {
	                _props = this.props, _domain = _props.domain, _version = _props.version, _appId = _props.appId, _cookie = _props.cookie, _status = _props.status, _xfbml = _props.xfbml, _language = _props.language, _frictionlessRequests = _props.frictionlessRequests, _wait = _props.wait;


	                this.facebook = facebookInstance || new _Facebook2.default({
	                  domain: _domain,
	                  appId: _appId,
	                  version: _version,
	                  cookie: _cookie,
	                  status: _status,
	                  xfbml: _xfbml,
	                  language: _language,
	                  frictionlessRequests: _frictionlessRequests,
	                  wait: _wait
	                });

	                facebookInstance = this.facebook;
	              }

	              _context.next = 3;
	              return this.facebook.init();

	            case 3:
	              return _context.abrupt('return', this.facebook);

	            case 4:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));

	    function init() {
	      return _ref.apply(this, arguments);
	    }

	    return init;
	  }();

	  Facebook.prototype.render = function render() {
	    return this.props.children;
	  };

	  return Facebook;
	}(_react.Component), _class.childContextTypes = {
	  facebook: _propTypes2.default.object.isRequired
	}, _class.defaultProps = {
	  version: 'v2.9',
	  cookie: false,
	  status: false,
	  xfbml: false,
	  language: 'ja_JP',
	  frictionlessRequests: false,
	  domain: 'connect.facebook.net',
	  children: undefined,
	  wait: false
	}, _temp);
	exports.default = Facebook;
	//# sourceMappingURL=FacebookProvider.js.map

/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(840);


/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(841);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}


/***/ }),

/***/ 841:
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _promise = __webpack_require__(843);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }

	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }

	      return step("next");
	    });
	  };
	};

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(844), __esModule: true };

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(256);
	__webpack_require__(228);
	__webpack_require__(241);
	__webpack_require__(845);
	__webpack_require__(853);
	__webpack_require__(854);
	module.exports = __webpack_require__(186).Promise;


/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(231);
	var global = __webpack_require__(185);
	var ctx = __webpack_require__(187);
	var classof = __webpack_require__(526);
	var $export = __webpack_require__(184);
	var isObject = __webpack_require__(192);
	var aFunction = __webpack_require__(188);
	var anInstance = __webpack_require__(521);
	var forOf = __webpack_require__(522);
	var speciesConstructor = __webpack_require__(846);
	var task = __webpack_require__(847).set;
	var microtask = __webpack_require__(849)();
	var newPromiseCapabilityModule = __webpack_require__(850);
	var perform = __webpack_require__(851);
	var promiseResolve = __webpack_require__(852);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(239)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c;
	  var i = 0;
	  var reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  } return true;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(520)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(238)($Promise, PROMISE);
	__webpack_require__(527)(PROMISE);
	Wrapper = __webpack_require__(186)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(594)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(191);
	var aFunction = __webpack_require__(188);
	var SPECIES = __webpack_require__(239)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(187);
	var invoke = __webpack_require__(848);
	var html = __webpack_require__(237);
	var cel = __webpack_require__(196);
	var global = __webpack_require__(185);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(205)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),

/***/ 848:
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(185);
	var macrotask = __webpack_require__(847).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(205)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(188);

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}

	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),

/***/ 851:
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(191);
	var isObject = __webpack_require__(192);
	var newPromiseCapability = __webpack_require__(850);

	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(184);
	var core = __webpack_require__(186);
	var global = __webpack_require__(185);
	var speciesConstructor = __webpack_require__(846);
	var promiseResolve = __webpack_require__(852);

	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(184);
	var newPromiseCapability = __webpack_require__(850);
	var perform = __webpack_require__(851);

	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = exports.Method = exports.LoginStatus = undefined;

	var _regenerator = __webpack_require__(839);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(842);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _extends2 = __webpack_require__(180);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(223);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _debug = __webpack_require__(779);

	var _debug2 = _interopRequireDefault(_debug);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var log = (0, _debug2.default)('react-facebook:facebook');

	var LoginStatus = exports.LoginStatus = {
	  CONNECTED: 'connected',
	  NOT_AUTHORIZED: 'not_authorized'
	};

	var Method = exports.Method = {
	  GET: 'get',
	  POST: 'post',
	  DELETE: 'delete'
	};

	var Facebook = function () {
	  function Facebook() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    (0, _classCallCheck3.default)(this, Facebook);

	    this.options = (0, _extends3.default)({
	      domain: 'connect.facebook.net',
	      version: 'v2.9',
	      cookie: false,
	      status: false,
	      xfbml: false,
	      language: 'en_US',
	      frictionlessRequests: false
	    }, options);

	    if (!this.options.appId) {
	      throw new Error('You need to set appId');
	    }

	    if (!this.options.wait) {
	      this.init();
	    }
	  }

	  Facebook.prototype.getAppId = function getAppId() {
	    return this.options.appId;
	  };

	  Facebook.prototype.init = function () {
	    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	      var _this = this;

	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              if (!this.loadingPromise) {
	                _context.next = 2;
	                break;
	              }

	              return _context.abrupt('return', this.loadingPromise);

	            case 2:

	              this.loadingPromise = new Promise(function (resolve) {
	                var options = _this.options;


	                window.fbAsyncInit = function () {
	                  window.FB.init({
	                    appId: options.appId,
	                    version: options.version,
	                    cookie: options.cookie,
	                    status: options.status,
	                    xfbml: options.xfbml,
	                    frictionlessRequests: _this.frictionlessRequests
	                  });

	                  resolve(window.FB);
	                };

	                var fjs = document.getElementsByTagName('script')[0];
	                if (!fjs) {
	                  log('Script tag does not exists in the DOM');
	                  return;
	                }

	                if (document.getElementById('facebook-jssdk')) {
	                  return;
	                }

	                var js = document.createElement('script');
	                js.id = 'facebook-jssdk';
	                js.async = true;
	                js.src = '//' + options.domain + '/' + options.language + '/sdk.js';

	                fjs.parentNode.insertBefore(js, fjs);
	              });

	              return _context.abrupt('return', this.loadingPromise);

	            case 4:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));

	    function init() {
	      return _ref.apply(this, arguments);
	    }

	    return init;
	  }();

	  Facebook.prototype.process = function () {
	    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(method) {
	      var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	      var after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	      var fb;
	      return _regenerator2.default.wrap(function _callee2$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return this.init();

	            case 2:
	              fb = _context2.sent;
	              return _context2.abrupt('return', new Promise(function (resolve, reject) {
	                fb[method].apply(fb, before.concat([function (response) {
	                  if (!response || response.error) {
	                    reject(new Error(response && response.error || 'Response is undefined'));
	                    return;
	                  }

	                  resolve(response);
	                }], after));
	              }));

	            case 4:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, _callee2, this);
	    }));

	    function process(_x2) {
	      return _ref2.apply(this, arguments);
	    }

	    return process;
	  }();

	  Facebook.prototype.ui = function () {
	    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(options) {
	      return _regenerator2.default.wrap(function _callee3$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              return _context3.abrupt('return', this.process('ui', [options]));

	            case 1:
	            case 'end':
	              return _context3.stop();
	          }
	        }
	      }, _callee3, this);
	    }));

	    function ui(_x5) {
	      return _ref3.apply(this, arguments);
	    }

	    return ui;
	  }();

	  Facebook.prototype.api = function () {
	    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(path) {
	      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Method.GET;
	      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      return _regenerator2.default.wrap(function _callee4$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              return _context4.abrupt('return', this.process('api', [path, method, params]));

	            case 1:
	            case 'end':
	              return _context4.stop();
	          }
	        }
	      }, _callee4, this);
	    }));

	    function api(_x6) {
	      return _ref4.apply(this, arguments);
	    }

	    return api;
	  }();

	  Facebook.prototype.login = function () {
	    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
	      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      return _regenerator2.default.wrap(function _callee5$(_context5) {
	        while (1) {
	          switch (_context5.prev = _context5.next) {
	            case 0:
	              return _context5.abrupt('return', this.process('login', [], [opts]));

	            case 1:
	            case 'end':
	              return _context5.stop();
	          }
	        }
	      }, _callee5, this);
	    }));

	    function login() {
	      return _ref5.apply(this, arguments);
	    }

	    return login;
	  }();

	  Facebook.prototype.logout = function () {
	    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
	      return _regenerator2.default.wrap(function _callee6$(_context6) {
	        while (1) {
	          switch (_context6.prev = _context6.next) {
	            case 0:
	              return _context6.abrupt('return', this.process('logout'));

	            case 1:
	            case 'end':
	              return _context6.stop();
	          }
	        }
	      }, _callee6, this);
	    }));

	    function logout() {
	      return _ref6.apply(this, arguments);
	    }

	    return logout;
	  }();

	  Facebook.prototype.getLoginStatus = function () {
	    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
	      return _regenerator2.default.wrap(function _callee7$(_context7) {
	        while (1) {
	          switch (_context7.prev = _context7.next) {
	            case 0:
	              return _context7.abrupt('return', this.process('getLoginStatus'));

	            case 1:
	            case 'end':
	              return _context7.stop();
	          }
	        }
	      }, _callee7, this);
	    }));

	    function getLoginStatus() {
	      return _ref7.apply(this, arguments);
	    }

	    return getLoginStatus;
	  }();

	  Facebook.prototype.getAuthResponse = function () {
	    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
	      return _regenerator2.default.wrap(function _callee8$(_context8) {
	        while (1) {
	          switch (_context8.prev = _context8.next) {
	            case 0:
	              return _context8.abrupt('return', this.process('getAuthResponse'));

	            case 1:
	            case 'end':
	              return _context8.stop();
	          }
	        }
	      }, _callee8, this);
	    }));

	    function getAuthResponse() {
	      return _ref8.apply(this, arguments);
	    }

	    return getAuthResponse;
	  }();

	  Facebook.prototype.getTokenDetail = function () {
	    var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
	      var response;
	      return _regenerator2.default.wrap(function _callee9$(_context9) {
	        while (1) {
	          switch (_context9.prev = _context9.next) {
	            case 0:
	              _context9.next = 2;
	              return this.getLoginStatus();

	            case 2:
	              response = _context9.sent;

	              if (!(response.status === LoginStatus.CONNECTED && response.authResponse)) {
	                _context9.next = 5;
	                break;
	              }

	              return _context9.abrupt('return', response.authResponse);

	            case 5:
	              throw new Error('Token is undefined');

	            case 6:
	            case 'end':
	              return _context9.stop();
	          }
	        }
	      }, _callee9, this);
	    }));

	    function getTokenDetail() {
	      return _ref9.apply(this, arguments);
	    }

	    return getTokenDetail;
	  }();

	  Facebook.prototype.getProfile = function () {
	    var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(params) {
	      return _regenerator2.default.wrap(function _callee10$(_context10) {
	        while (1) {
	          switch (_context10.prev = _context10.next) {
	            case 0:
	              return _context10.abrupt('return', this.api('/me', Method.GET, params));

	            case 1:
	            case 'end':
	              return _context10.stop();
	          }
	        }
	      }, _callee10, this);
	    }));

	    function getProfile(_x10) {
	      return _ref10.apply(this, arguments);
	    }

	    return getProfile;
	  }();

	  Facebook.prototype.getTokenDetailWithProfile = function () {
	    var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(params) {
	      var tokenDetail, profile;
	      return _regenerator2.default.wrap(function _callee11$(_context11) {
	        while (1) {
	          switch (_context11.prev = _context11.next) {
	            case 0:
	              _context11.next = 2;
	              return this.getTokenDetail();

	            case 2:
	              tokenDetail = _context11.sent;
	              _context11.next = 5;
	              return this.getProfile(params);

	            case 5:
	              profile = _context11.sent;
	              return _context11.abrupt('return', {
	                profile: profile,
	                tokenDetail: tokenDetail
	              });

	            case 7:
	            case 'end':
	              return _context11.stop();
	          }
	        }
	      }, _callee11, this);
	    }));

	    function getTokenDetailWithProfile(_x11) {
	      return _ref11.apply(this, arguments);
	    }

	    return getTokenDetailWithProfile;
	  }();

	  Facebook.prototype.getToken = function () {
	    var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
	      var authResponse;
	      return _regenerator2.default.wrap(function _callee12$(_context12) {
	        while (1) {
	          switch (_context12.prev = _context12.next) {
	            case 0:
	              _context12.next = 2;
	              return this.getTokenDetail();

	            case 2:
	              authResponse = _context12.sent;
	              return _context12.abrupt('return', authResponse.accessToken);

	            case 4:
	            case 'end':
	              return _context12.stop();
	          }
	        }
	      }, _callee12, this);
	    }));

	    function getToken() {
	      return _ref12.apply(this, arguments);
	    }

	    return getToken;
	  }();

	  Facebook.prototype.getUserId = function () {
	    var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
	      var authResponse;
	      return _regenerator2.default.wrap(function _callee13$(_context13) {
	        while (1) {
	          switch (_context13.prev = _context13.next) {
	            case 0:
	              _context13.next = 2;
	              return this.getTokenDetail();

	            case 2:
	              authResponse = _context13.sent;
	              return _context13.abrupt('return', authResponse.userID);

	            case 4:
	            case 'end':
	              return _context13.stop();
	          }
	        }
	      }, _callee13, this);
	    }));

	    function getUserId() {
	      return _ref13.apply(this, arguments);
	    }

	    return getUserId;
	  }();

	  Facebook.prototype.sendInvite = function () {
	    var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(to, options) {
	      return _regenerator2.default.wrap(function _callee14$(_context14) {
	        while (1) {
	          switch (_context14.prev = _context14.next) {
	            case 0:
	              return _context14.abrupt('return', this.ui((0, _extends3.default)({
	                to: to,
	                method: 'apprequests'
	              }, options)));

	            case 1:
	            case 'end':
	              return _context14.stop();
	          }
	        }
	      }, _callee14, this);
	    }));

	    function sendInvite(_x12, _x13) {
	      return _ref14.apply(this, arguments);
	    }

	    return sendInvite;
	  }();

	  Facebook.prototype.postAction = function () {
	    var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(ogNamespace, ogAction, ogObject, ogObjectUrl, noFeedStory) {
	      var url;
	      return _regenerator2.default.wrap(function _callee15$(_context15) {
	        while (1) {
	          switch (_context15.prev = _context15.next) {
	            case 0:
	              url = '/me/' + ogNamespace + ':' + ogAction + '?' + ogObject + '=' + encodeURIComponent(ogObjectUrl);


	              if (noFeedStory === true) {
	                url += '&no_feed_story=true';
	              }

	              return _context15.abrupt('return', this.api(url, Method.POST));

	            case 3:
	            case 'end':
	              return _context15.stop();
	          }
	        }
	      }, _callee15, this);
	    }));

	    function postAction(_x14, _x15, _x16, _x17, _x18) {
	      return _ref15.apply(this, arguments);
	    }

	    return postAction;
	  }();

	  Facebook.prototype.getPermissions = function () {
	    var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {
	      var response;
	      return _regenerator2.default.wrap(function _callee16$(_context16) {
	        while (1) {
	          switch (_context16.prev = _context16.next) {
	            case 0:
	              _context16.next = 2;
	              return this.api('/me/permissions');

	            case 2:
	              response = _context16.sent;
	              return _context16.abrupt('return', response.data);

	            case 4:
	            case 'end':
	              return _context16.stop();
	          }
	        }
	      }, _callee16, this);
	    }));

	    function getPermissions() {
	      return _ref16.apply(this, arguments);
	    }

	    return getPermissions;
	  }();

	  Facebook.prototype.hasPermissions = function () {
	    var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(permissions) {
	      var usersPermissions, findedPermissions;
	      return _regenerator2.default.wrap(function _callee17$(_context17) {
	        while (1) {
	          switch (_context17.prev = _context17.next) {
	            case 0:
	              _context17.next = 2;
	              return this.getPermissions();

	            case 2:
	              usersPermissions = _context17.sent;
	              findedPermissions = permissions.filter(function (p) {
	                return !!usersPermissions.find(function (row) {
	                  var permission = row.permission,
	                      status = row.status;

	                  return status === 'granted' && permission === p;
	                });
	              });
	              return _context17.abrupt('return', findedPermissions.length === permissions.length);

	            case 5:
	            case 'end':
	              return _context17.stop();
	          }
	        }
	      }, _callee17, this);
	    }));

	    function hasPermissions(_x19) {
	      return _ref17.apply(this, arguments);
	    }

	    return hasPermissions;
	  }();

	  Facebook.prototype.subscribe = function () {
	    var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18(eventName, callback) {
	      var fb;
	      return _regenerator2.default.wrap(function _callee18$(_context18) {
	        while (1) {
	          switch (_context18.prev = _context18.next) {
	            case 0:
	              _context18.next = 2;
	              return this.init();

	            case 2:
	              fb = _context18.sent;

	              fb.Event.subscribe(eventName, callback);

	            case 4:
	            case 'end':
	              return _context18.stop();
	          }
	        }
	      }, _callee18, this);
	    }));

	    function subscribe(_x20, _x21) {
	      return _ref18.apply(this, arguments);
	    }

	    return subscribe;
	  }();

	  Facebook.prototype.unsubscribe = function () {
	    var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19(eventName, callback) {
	      var fb;
	      return _regenerator2.default.wrap(function _callee19$(_context19) {
	        while (1) {
	          switch (_context19.prev = _context19.next) {
	            case 0:
	              _context19.next = 2;
	              return this.init();

	            case 2:
	              fb = _context19.sent;

	              fb.Event.unsubscribe(eventName, callback);

	            case 4:
	            case 'end':
	              return _context19.stop();
	          }
	        }
	      }, _callee19, this);
	    }));

	    function unsubscribe(_x22, _x23) {
	      return _ref19.apply(this, arguments);
	    }

	    return unsubscribe;
	  }();

	  Facebook.prototype.parse = function () {
	    var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20(parentNode) {
	      var fb;
	      return _regenerator2.default.wrap(function _callee20$(_context20) {
	        while (1) {
	          switch (_context20.prev = _context20.next) {
	            case 0:
	              _context20.next = 2;
	              return this.init();

	            case 2:
	              fb = _context20.sent;


	              if (typeof parentNode === 'undefined') {
	                fb.XFBML.parse();
	              } else {
	                fb.XFBML.parse(parentNode);
	              }

	            case 4:
	            case 'end':
	              return _context20.stop();
	          }
	        }
	      }, _callee20, this);
	    }));

	    function parse(_x24) {
	      return _ref20.apply(this, arguments);
	    }

	    return parse;
	  }();

	  Facebook.prototype.getRequests = function () {
	    var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21() {
	      return _regenerator2.default.wrap(function _callee21$(_context21) {
	        while (1) {
	          switch (_context21.prev = _context21.next) {
	            case 0:
	              return _context21.abrupt('return', this.api('/me/apprequests'));

	            case 1:
	            case 'end':
	              return _context21.stop();
	          }
	        }
	      }, _callee21, this);
	    }));

	    function getRequests() {
	      return _ref21.apply(this, arguments);
	    }

	    return getRequests;
	  }();

	  Facebook.prototype.removeRequest = function () {
	    var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22(requestID) {
	      return _regenerator2.default.wrap(function _callee22$(_context22) {
	        while (1) {
	          switch (_context22.prev = _context22.next) {
	            case 0:
	              return _context22.abrupt('return', this.api(requestID, Method.DELETE));

	            case 1:
	            case 'end':
	              return _context22.stop();
	          }
	        }
	      }, _callee22, this);
	    }));

	    function removeRequest(_x25) {
	      return _ref22.apply(this, arguments);
	    }

	    return removeRequest;
	  }();

	  Facebook.prototype.setAutoGrow = function () {
	    var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23() {
	      var fb;
	      return _regenerator2.default.wrap(function _callee23$(_context23) {
	        while (1) {
	          switch (_context23.prev = _context23.next) {
	            case 0:
	              _context23.next = 2;
	              return this.init();

	            case 2:
	              fb = _context23.sent;

	              fb.Canvas.setAutoGrow();

	            case 4:
	            case 'end':
	              return _context23.stop();
	          }
	        }
	      }, _callee23, this);
	    }));

	    function setAutoGrow() {
	      return _ref23.apply(this, arguments);
	    }

	    return setAutoGrow;
	  }();

	  Facebook.prototype.paySimple = function () {
	    var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee24(product) {
	      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	      return _regenerator2.default.wrap(function _callee24$(_context24) {
	        while (1) {
	          switch (_context24.prev = _context24.next) {
	            case 0:
	              return _context24.abrupt('return', this.ui({
	                method: 'pay',
	                action: 'purchaseitem',
	                product: product,
	                quantity: quantity
	              }));

	            case 1:
	            case 'end':
	              return _context24.stop();
	          }
	        }
	      }, _callee24, this);
	    }));

	    function paySimple(_x26) {
	      return _ref24.apply(this, arguments);
	    }

	    return paySimple;
	  }();

	  Facebook.prototype.pay = function () {
	    var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee25(product, options) {
	      return _regenerator2.default.wrap(function _callee25$(_context25) {
	        while (1) {
	          switch (_context25.prev = _context25.next) {
	            case 0:
	              return _context25.abrupt('return', this.ui((0, _extends3.default)({
	                method: 'pay',
	                action: 'purchaseitem',
	                product: product
	              }, options)));

	            case 1:
	            case 'end':
	              return _context25.stop();
	          }
	        }
	      }, _callee25, this);
	    }));

	    function pay(_x28, _x29) {
	      return _ref25.apply(this, arguments);
	    }

	    return pay;
	  }();

	  return Facebook;
	}();

	/*
	  sendToFriends: function(options, callback) {
	    if(!options) {
	      options = {};
	    }

	    options.method = 'send';

	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.ui(options, function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  sendMessage: function(message, name, caption, description, url, imgUrl, callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.ui({
	        method: 'stream.publish',
	        message: message,
	        attachment: {
	          name: name,
	          caption: caption,
	          description: description,
	          href: url,
	          media:[{
	            type: 'image',
	            src:  imgUrl,
	            href: url
	          }]
	        },
	        action_links: [{
	          text: 'Code',
	          href: url
	        }],
	        user_prompt_message: message
	      },
	      function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  sendInviteForm: function(options, callback) {
	    if(typeof options === 'function') {
	      callback = options;
	      options = {};
	    }

	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      options.method = options.method || 'apprequests';


	      FB.ui(options, function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  checkPageLike: function(pageID, callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      fbApi.getUserID(function(err, userID) {
	        if(err) {
	          return callback(err);
	        }

	        var fqlQuery = 'SELECT uid FROM page_fan WHERE page_id = ' + pageID + ' and uid =  '+ userID;
	        var query = FB.Data.query(fqlQuery);

	        query.wait(function(rows) {
	          if (rows.length === 1 && rows[0].uid === userID) {
	            callback(null, true, query);
	          }
	          else {
	            callback(null, false, query);
	          }
	        });
	      });
	    });
	  },

	  sendMessageToFriend: function (friendID, link, callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.ui({
	        to: friendID,
	        method: 'send',
	        link: link
	      }, function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  _prepareUsers: function(data) {
	    var users=[];

	    for(var index in data) {
	      var userData=data[index];

	      var user = {
	        provider_uid: 'facebook'+'_'+userData.uid,
	        provider: 'facebook',
	        id: userData.uid,
	        name: userData.name,
	        first_name: userData.first_name,
	        last_name: userData.last_name,
	        status: (userData.status!==null) ? userData.status : null,
	        image: '//graph.facebook.com/'+userData.uid+'/picture?'
	      };

	      users.push(user);
	    }

	    return users;
	  },

	  getUserList: function(callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.api('fql', { q: 'SELECT uid, name, first_name, last_name, online_presence, status FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY name' }, function (response)
	      {
	        var users = fbApi._prepareUsers(response.data);
	        callback(null, users, response);
	      });
	    });
	  },

	  postFeed: function(options, callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      options.method='feed';

	      FB.ui(options, function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  //need publish_stream
	  createAlbum: function(name, description, callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.api('/me/albums', 'post', {
	        name: name,
	        description: description
	      },function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  //need publish_stream
	  addImageToAlbum: function(albumID, imageURL, message, callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.api('/'+albumID+'/photos', 'post', {
	        message: message,
	        url: imageURL
	      }, function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  //'user_photos'
	  getAlbums: function(callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.api('/me/albums', function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  //'user_photos'
	  getAlbumPhotos: function(albumID, callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.api('/'+albumID+'/photos', function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  //'user_photos'
	  getAlbumCoverPicture: function(albumID, callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.api('/'+albumID+'/picture', function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  //'publish_stream'
	  postPhoto: function(photoUrl, message, callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.api('/me/photos', 'post', {
	        message: message,
	        url: photoUrl
	      },function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  },

	  getPageInfo: function(callback) {
	    this.afterLoad(function(err, fbApi) {
	      if(err) {
	        return callback(err);
	      }

	      FB.Canvas.getPageInfo(function(response) {
	        fbApi._callCallbackByResponse(callback, response);
	      });
	    });
	  }
	*/


	exports.default = Facebook;
	//# sourceMappingURL=Facebook.js.map

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _classCallCheck2 = __webpack_require__(223);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(224);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(259);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp2;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _InitFacebook = __webpack_require__(857);

	var _InitFacebook2 = _interopRequireDefault(_InitFacebook);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Parser = (_temp2 = _class = function (_Component) {
	  (0, _inherits3.default)(Parser, _Component);

	  function Parser() {
	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Parser);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleFacebookReady = function (facebook) {
	      _this.facebook = facebook;
	      _this.parse();
	    }, _this.handleContainer = function (container) {
	      _this.container = container;
	      _this.parse();
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  Parser.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    var oldChildren = this.props.children;
	    var children = props.children;


	    if (!children || !oldChildren) {
	      return;
	    }

	    var changed = Object.keys(oldChildren.props).find(function (propName) {
	      var oldValue = oldChildren.props[propName];
	      var newValue = children.props[propName];

	      return oldValue !== newValue;
	    });

	    if (changed) {
	      this.rerender();
	    }
	  };

	  Parser.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	    return false;
	  };

	  Parser.prototype.rerender = function rerender() {
	    this.forceUpdate();

	    this.parsed = false;
	    this.parse();
	  };

	  Parser.prototype.parse = function parse() {
	    var parsed = this.parsed,
	        container = this.container,
	        facebook = this.facebook;

	    if (parsed || !container || !facebook) {
	      return false;
	    }

	    this.parsed = true;

	    var parseResponse = facebook.parse(container);

	    var onParse = this.props.onParse;

	    if (onParse) {
	      onParse(parseResponse);
	    }

	    return parseResponse;
	  };

	  Parser.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        children = _props.children;


	    return _react2.default.createElement(
	      _InitFacebook2.default,
	      { onReady: this.handleFacebookReady },
	      _react2.default.createElement(
	        'div',
	        { className: className, ref: this.handleContainer },
	        children
	      )
	    );
	  };

	  return Parser;
	}(_react.Component), _class.defaultProps = {
	  className: undefined,
	  onParse: undefined
	}, _temp2);
	exports.default = Parser;
	//# sourceMappingURL=Parser.js.map

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _regenerator = __webpack_require__(839);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(842);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck2 = __webpack_require__(223);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(224);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(259);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _canUseDom = __webpack_require__(858);

	var _canUseDom2 = _interopRequireDefault(_canUseDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InitFacebook = (_temp = _class = function (_Component) {
	  (0, _inherits3.default)(InitFacebook, _Component);

	  function InitFacebook() {
	    (0, _classCallCheck3.default)(this, InitFacebook);
	    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
	  }

	  InitFacebook.prototype.componentDidMount = function componentDidMount() {
	    if (_canUseDom2.default) {
	      this.initFacebook();
	    }
	  };

	  InitFacebook.prototype.initFacebook = function () {
	    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	      var onReady, facebook;
	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              onReady = this.props.onReady;
	              _context.next = 3;
	              return this.context.facebook.init();

	            case 3:
	              facebook = _context.sent;

	              onReady(facebook);

	            case 5:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));

	    function initFacebook() {
	      return _ref.apply(this, arguments);
	    }

	    return initFacebook;
	  }();

	  InitFacebook.prototype.render = function render() {
	    return this.props.children;
	  };

	  return InitFacebook;
	}(_react.Component), _class.defaultProps = {
	  children: undefined
	}, _class.contextTypes = {
	  facebook: _propTypes2.default.object.isRequired
	}, _temp);
	exports.default = InitFacebook;
	//# sourceMappingURL=InitFacebook.js.map

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);

	module.exports = canUseDOM;

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = Like;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Parser = __webpack_require__(856);

	var _Parser2 = _interopRequireDefault(_Parser);

	var _getCurrentHref = __webpack_require__(860);

	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Like(props) {
	  var className = props.className,
	      _props$href = props.href,
	      href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
	      layout = props.layout,
	      colorScheme = props.colorScheme,
	      action = props.action,
	      showFaces = props.showFaces,
	      share = props.share,
	      children = props.children,
	      width = props.width,
	      size = props.size,
	      kidDirectedSite = props.kidDirectedSite,
	      referral = props.referral,
	      onParse = props.onParse;


	  return _react2.default.createElement(
	    _Parser2.default,
	    { className: className, onParse: onParse },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'fb-like',
	        'data-ref': referral,
	        'data-href': href,
	        'data-layout': layout,
	        'data-colorscheme': colorScheme,
	        'data-action': action,
	        'data-show-faces': showFaces,
	        'data-share': share,
	        'data-width': width,
	        'data-size': size,
	        'data-kid-directed-site': kidDirectedSite
	      },
	      children
	    )
	  );
	}

	Like.defaultProps = {
	  layout: undefined,
	  showFaces: undefined,
	  colorScheme: undefined,
	  action: undefined,
	  share: undefined,
	  size: undefined,
	  kidDirectedSite: undefined,
	  children: undefined,
	  className: undefined,
	  href: undefined,
	  referral: undefined,
	  width: undefined,
	  onParse: undefined
	};
	//# sourceMappingURL=Like.js.map

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = getCurrentHref;

	var _canUseDom = __webpack_require__(858);

	var _canUseDom2 = _interopRequireDefault(_canUseDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getCurrentHref() {
	  if (!_canUseDom2.default) {
	    return 'https://www.facebook.com';
	  }

	  return location.href;
	}
	//# sourceMappingURL=getCurrentHref.js.map

/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _extends2 = __webpack_require__(180);

	var _extends3 = _interopRequireDefault(_extends2);

	var _regenerator = __webpack_require__(839);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(842);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck2 = __webpack_require__(223);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(224);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(259);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _getCurrentHref = __webpack_require__(860);

	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

	var _clearUndefinedProperties = __webpack_require__(862);

	var _clearUndefinedProperties2 = _interopRequireDefault(_clearUndefinedProperties);

	var _Process2 = __webpack_require__(863);

	var _Process3 = _interopRequireDefault(_Process2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Send = (_temp = _class = function (_Process) {
	  (0, _inherits3.default)(Send, _Process);

	  function Send() {
	    (0, _classCallCheck3.default)(this, Send);
	    return (0, _possibleConstructorReturn3.default)(this, _Process.apply(this, arguments));
	  }

	  Send.prototype.process = function () {
	    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(facebook) {
	      var _props, _props$link, link, display, _props$appId, appId, to, redirectURI;

	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _props = this.props, _props$link = _props.link, link = _props$link === undefined ? (0, _getCurrentHref2.default)() : _props$link, display = _props.display, _props$appId = _props.appId, appId = _props$appId === undefined ? facebook.getAppId() : _props$appId, to = _props.to, redirectURI = _props.redirectURI;
	              return _context.abrupt('return', facebook.ui((0, _clearUndefinedProperties2.default)({
	                method: 'send',
	                link: link,
	                display: display,
	                app_id: appId,
	                to: to,
	                redirect_uri: redirectURI
	              })));

	            case 2:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));

	    function process(_x) {
	      return _ref.apply(this, arguments);
	    }

	    return process;
	  }();

	  return Send;
	}(_Process3.default), _class.defaultProps = (0, _extends3.default)({}, _Process3.default.defaultProps, {
	  to: undefined,
	  display: undefined,
	  appId: undefined,
	  redirectURI: undefined
	}), _temp);
	exports.default = Send;
	//# sourceMappingURL=Send.js.map

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = clearUndefinedProperties;
	function clearUndefinedProperties(obj) {
	  if (!obj) {
	    return obj;
	  }

	  var newObj = {};

	  Object.keys(obj).forEach(function (propertyName) {
	    var value = obj[propertyName];
	    if (value !== undefined) {
	      newObj[propertyName] = value;
	    }
	  });

	  return newObj;
	}
	//# sourceMappingURL=clearUndefinedProperties.js.map

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _regenerator = __webpack_require__(839);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(842);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck2 = __webpack_require__(223);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(224);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(259);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp2;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _InitFacebook = __webpack_require__(857);

	var _InitFacebook2 = _interopRequireDefault(_InitFacebook);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Process = (_temp2 = _class = function (_Component) {
	  (0, _inherits3.default)(Process, _Component);

	  function Process() {
	    var _this2 = this;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Process);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	      isWorking: false,
	      isMounted: true
	    }, _this.handleClick = function () {
	      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(evn) {
	        var facebook, _this$props, _dontWait, _onResponse, _onError, response, _onError2, isMounted;

	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                evn.preventDefault();
	                evn.stopPropagation();

	                _this.setState({
	                  isWorking: true
	                });

	                _context.prev = 3;
	                facebook = _this.state.facebook;

	                if (facebook) {
	                  _context.next = 7;
	                  break;
	                }

	                throw new Error('Facebook is not initialized');

	              case 7:
	                _this$props = _this.props, _dontWait = _this$props.dontWait, _onResponse = _this$props.onResponse, _onError = _this$props.onError;

	                if (!_dontWait) {
	                  _context.next = 12;
	                  break;
	                }

	                _this.process(facebook).then(function (response) {
	                  if (_onResponse) {
	                    _onResponse(response);
	                  }
	                }, function (error) {
	                  if (_onError) {
	                    _onError(error);
	                  }
	                });
	                _context.next = 18;
	                break;

	              case 12:
	                _context.next = 14;
	                return _this.process(facebook);

	              case 14:
	                response = _context.sent;

	                if (!_onResponse) {
	                  _context.next = 18;
	                  break;
	                }

	                _context.next = 18;
	                return _onResponse(response);

	              case 18:
	                _context.next = 26;
	                break;

	              case 20:
	                _context.prev = 20;
	                _context.t0 = _context['catch'](3);
	                _onError2 = _this.props.onError;

	                if (!_onError2) {
	                  _context.next = 26;
	                  break;
	                }

	                _context.next = 26;
	                return _onError2(_context.t0);

	              case 26:
	                isMounted = _this.state.isMounted;

	                if (isMounted) {
	                  _this.setState({
	                    isWorking: false
	                  });
	                }

	              case 28:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this2, [[3, 20]]);
	      }));

	      return function (_x) {
	        return _ref.apply(this, arguments);
	      };
	    }(), _this.handleFacebookReady = function (facebook) {
	      var isMounted = _this.state.isMounted;

	      if (isMounted) {
	        _this.setState({ facebook: facebook });

	        var _onReady = _this.props.onReady;

	        if (_onReady) {
	          _onReady(facebook);
	        }
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  Process.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.setState({
	      isMounted: false
	    });
	  };

	  Process.prototype.getElement = function getElement() {
	    var _props = this.props,
	        children = _props.children,
	        render = _props.render,
	        CustomComponent = _props.component;
	    var _state = this.state,
	        facebook = _state.facebook,
	        isWorking = _state.isWorking;

	    var isLoading = !facebook;
	    var isReady = !isLoading && !isWorking;

	    if (render) {
	      return render({
	        isWorking: isWorking,
	        isLoading: isLoading,
	        isReady: isReady,
	        onClick: this.handleClick
	      });
	    }

	    if (CustomComponent) {
	      return _react2.default.createElement(CustomComponent, {
	        onClick: this.handleClick,
	        isLoading: isLoading,
	        isWorking: isWorking,
	        isReady: isReady
	      });
	    }

	    return (0, _react.cloneElement)(children, {
	      onClick: this.handleClick
	    });
	  };

	  Process.prototype.render = function render() {
	    return _react2.default.createElement(
	      _InitFacebook2.default,
	      { onReady: this.handleFacebookReady },
	      this.getElement()
	    );
	  };

	  return Process;
	}(_react.Component), _class.defaultProps = {
	  children: undefined,
	  render: undefined,
	  component: undefined,
	  onReady: undefined,
	  onError: undefined,
	  onResponse: undefined,
	  dontWait: undefined
	}, _temp2);
	exports.default = Process;
	//# sourceMappingURL=Process.js.map

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _extends2 = __webpack_require__(180);

	var _extends3 = _interopRequireDefault(_extends2);

	var _regenerator = __webpack_require__(839);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(842);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck2 = __webpack_require__(223);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(224);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(259);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _getCurrentHref = __webpack_require__(860);

	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

	var _clearUndefinedProperties = __webpack_require__(862);

	var _clearUndefinedProperties2 = _interopRequireDefault(_clearUndefinedProperties);

	var _Process2 = __webpack_require__(863);

	var _Process3 = _interopRequireDefault(_Process2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Share = (_temp = _class = function (_Process) {
	  (0, _inherits3.default)(Share, _Process);

	  function Share() {
	    (0, _classCallCheck3.default)(this, Share);
	    return (0, _possibleConstructorReturn3.default)(this, _Process.apply(this, arguments));
	  }

	  Share.prototype.process = function () {
	    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(facebook) {
	      var _props, _props$href, href, display, _props$appId, appId, hashtag, redirectURI, quote, mobileIframe;

	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _props = this.props, _props$href = _props.href, href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href, display = _props.display, _props$appId = _props.appId, appId = _props$appId === undefined ? facebook.getAppId() : _props$appId, hashtag = _props.hashtag, redirectURI = _props.redirectURI, quote = _props.quote, mobileIframe = _props.mobileIframe;
	              return _context.abrupt('return', facebook.ui((0, _clearUndefinedProperties2.default)({
	                method: 'share',
	                href: href,
	                display: display,
	                app_id: appId,
	                hashtag: hashtag,
	                redirect_uri: redirectURI,
	                quote: quote,
	                mobile_iframe: mobileIframe
	              })));

	            case 2:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));

	    function process(_x) {
	      return _ref.apply(this, arguments);
	    }

	    return process;
	  }();

	  return Share;
	}(_Process3.default), _class.defaultProps = (0, _extends3.default)({}, _Process3.default.defaultProps, {
	  href: undefined,
	  hashtag: undefined,
	  quote: undefined,
	  mobileIframe: undefined,
	  display: undefined,
	  appId: undefined,
	  redirectURI: undefined
	}), _temp);
	exports.default = Share;
	//# sourceMappingURL=Share.js.map

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(180);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(222);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	exports.default = ShareButton;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Share = __webpack_require__(864);

	var _Share2 = _interopRequireDefault(_Share);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ShareButton(props) {
	  var className = props.className,
	      iconClassName = props.iconClassName,
	      icon = props.icon,
	      children = props.children,
	      rest = (0, _objectWithoutProperties3.default)(props, ['className', 'iconClassName', 'icon', 'children']);


	  return _react2.default.createElement(_Share2.default, (0, _extends3.default)({}, rest, {
	    render: function render(_ref) {
	      var isReady = _ref.isReady,
	          onClick = _ref.onClick;
	      return _react2.default.createElement(
	        'button',
	        {
	          type: 'button',
	          disabled: !isReady,
	          className: className,
	          onClick: onClick
	        },
	        !!icon && _react2.default.createElement('i', { className: iconClassName }),
	        children
	      );
	    }
	  }));
	}

	ShareButton.defaultProps = (0, _extends3.default)({}, _Share2.default.defaultProps, {
	  className: 'btn btn-lg',
	  iconClassName: 'fa fa-facebook pull-left',
	  icon: true
	});
	//# sourceMappingURL=ShareButton.js.map

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = Page;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Parser = __webpack_require__(856);

	var _Parser2 = _interopRequireDefault(_Parser);

	var _getCurrentHref = __webpack_require__(860);

	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Page(props) {
	  var className = props.className,
	      style = props.style,
	      _props$href = props.href,
	      href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
	      tabs = props.tabs,
	      hideCover = props.hideCover,
	      width = props.width,
	      height = props.height,
	      showFacepile = props.showFacepile,
	      hideCTA = props.hideCTA,
	      smallHeader = props.smallHeader,
	      adaptContainerWidth = props.adaptContainerWidth,
	      children = props.children,
	      onParse = props.onParse;


	  return _react2.default.createElement(
	    _Parser2.default,
	    { className: className, onParse: onParse },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'fb-page',
	        style: style,
	        'data-tabs': tabs,
	        'data-hide-cover': hideCover,
	        'data-show-facepile': showFacepile,
	        'data-hide-cta': hideCTA,
	        'data-href': href,
	        'data-small-header': smallHeader,
	        'data-adapt-container-width': adaptContainerWidth,
	        'data-height': height,
	        'data-width': width
	      },
	      children
	    )
	  );
	}


	Page.defaultProps = {
	  width: undefined,
	  height: undefined,
	  tabs: undefined,
	  hideCover: undefined,
	  showFacepile: undefined,
	  hideCTA: undefined,
	  smallHeader: undefined,
	  adaptContainerWidth: undefined,
	  children: undefined,
	  className: undefined,
	  onParse: undefined,
	  style: undefined,
	  href: undefined
	};
	//# sourceMappingURL=Page.js.map

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _extends2 = __webpack_require__(180);

	var _extends3 = _interopRequireDefault(_extends2);

	var _regenerator = __webpack_require__(839);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(842);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck2 = __webpack_require__(223);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(224);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(259);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _Process2 = __webpack_require__(863);

	var _Process3 = _interopRequireDefault(_Process2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Login = (_temp = _class = function (_Process) {
	  (0, _inherits3.default)(Login, _Process);

	  function Login() {
	    (0, _classCallCheck3.default)(this, Login);
	    return (0, _possibleConstructorReturn3.default)(this, _Process.apply(this, arguments));
	  }

	  Login.prototype.process = function () {
	    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(facebook) {
	      var _props, scope, fields, returnScopes, rerequest, reauthorize, loginQpts, authType, response;

	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _props = this.props, scope = _props.scope, fields = _props.fields, returnScopes = _props.returnScopes, rerequest = _props.rerequest, reauthorize = _props.reauthorize;
	              loginQpts = { scope: scope };
	              authType = [];


	              if (returnScopes) {
	                loginQpts.return_scopes = true;
	              }

	              if (rerequest) {
	                authType.push('rerequest');
	              }

	              if (reauthorize) {
	                authType.push('reauthenticate');
	              }

	              if (authType.length) {
	                loginQpts.auth_type = authType.join(',');
	              }

	              _context.next = 9;
	              return facebook.login(loginQpts);

	            case 9:
	              response = _context.sent;

	              if (!(response.status !== 'connected')) {
	                _context.next = 12;
	                break;
	              }

	              throw new Error('Unauthorized user');

	            case 12:
	              return _context.abrupt('return', facebook.getTokenDetailWithProfile({ fields: fields }));

	            case 13:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));

	    function process(_x) {
	      return _ref.apply(this, arguments);
	    }

	    return process;
	  }();

	  return Login;
	}(_Process3.default), _class.defaultProps = (0, _extends3.default)({}, _Process3.default.defaultProps, {
	  scope: '',
	  fields: ['id', 'first_name', 'last_name', 'middle_name', 'name', 'email', 'locale', 'gender', 'timezone', 'verified', 'link'],
	  returnScopes: false,
	  rerequest: false,
	  reauthorize: false
	}), _temp);
	exports.default = Login;
	//# sourceMappingURL=Login.js.map

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(180);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(222);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	exports.default = LoginButton;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactSpinnerChildren = __webpack_require__(869);

	var _reactSpinnerChildren2 = _interopRequireDefault(_reactSpinnerChildren);

	var _Login = __webpack_require__(867);

	var _Login2 = _interopRequireDefault(_Login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function LoginButton(props) {
	  var _this = this;

	  var children = props.children,
	      buttonClassName = props.buttonClassName,
	      iconClassName = props.iconClassName,
	      icon = props.icon,
	      spinner = props.spinner,
	      spinnerClassName = props.spinnerClassName,
	      rest = (0, _objectWithoutProperties3.default)(props, ['children', 'buttonClassName', 'iconClassName', 'icon', 'spinner', 'spinnerClassName']);


	  return _react2.default.createElement(_Login2.default, (0, _extends3.default)({}, rest, {
	    render: function render(_ref) {
	      var isWorking = _ref.isWorking,
	          isLoading = _ref.isLoading,
	          onClick = _ref.onClick;
	      return _react2.default.createElement(
	        'button',
	        {
	          type: 'button',
	          className: buttonClassName,
	          onClick: onClick,
	          disabled: isWorking || isLoading
	        },
	        !!icon && _react2.default.createElement('i', { className: iconClassName }),
	        children,
	        !!spinner && (isWorking || isLoading) && _react2.default.createElement(_reactSpinnerChildren2.default, {
	          config: _this.props.spinnerConfig,
	          className: spinnerClassName
	        })
	      );
	    }
	  }));
	}

	LoginButton.defaultProps = (0, _extends3.default)({}, _Login2.default.defaultProps, {
	  spinnerConfig: {},
	  buttonClassName: 'btn btn-lg',
	  iconClassName: 'fa fa-facebook pull-left',
	  spinner: true,
	  icon: true
	});
	//# sourceMappingURL=LoginButton.js.map

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _spin = __webpack_require__(870);

	var _spin2 = _interopRequireDefault(_spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Spinner = function (_Component) {
	  _inherits(Spinner, _Component);

	  function Spinner() {
	    _classCallCheck(this, Spinner);

	    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
	  }

	  _createClass(Spinner, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.updateSpinner();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.updateSpinner();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.spinner) {
	        this.spinner.stop();
	        this.spinner = null;
	      }
	    }
	  }, {
	    key: 'updateSpinner',
	    value: function updateSpinner() {
	      var loaded = this.props.loaded;

	      if (!loaded && !this.spinner) {
	        this.spinner = new _spin2.default(this.props.config);
	        this.spinner.spin(this.refs.loader);
	      } else if (loaded && this.spinner) {
	        this.spinner.stop();
	        this.spinner = null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          loaded = _props.loaded,
	          className = _props.className;


	      if (loaded) {
	        return this.props.children ? _react.Children.only(this.props.children) : null;
	      }

	      return _react2.default.createElement('div', { className: className, ref: 'loader' });
	    }
	  }]);

	  return Spinner;
	}(_react.Component);

	Spinner.propTypes = {
	  className: _propTypes2.default.string,
	  config: _propTypes2.default.object.isRequired,
	  loaded: _propTypes2.default.bool.isRequired,
	  children: _propTypes2.default.node
	};
	Spinner.defaultProps = {
	  config: {},
	  loaded: false,
	  className: 'loader'
	};
	exports.default = Spinner;

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Copyright (c) 2011-2014 Felix Gnass
	 * Licensed under the MIT license
	 * http://spin.js.org/
	 *
	 * Example:
	    var opts = {
	      lines: 12             // The number of lines to draw
	    , length: 7             // The length of each line
	    , width: 5              // The line thickness
	    , radius: 10            // The radius of the inner circle
	    , scale: 1.0            // Scales overall size of the spinner
	    , corners: 1            // Roundness (0..1)
	    , color: '#000'         // #rgb or #rrggbb
	    , opacity: 1/4          // Opacity of the lines
	    , rotate: 0             // Rotation offset
	    , direction: 1          // 1: clockwise, -1: counterclockwise
	    , speed: 1              // Rounds per second
	    , trail: 100            // Afterglow percentage
	    , fps: 20               // Frames per second when using setTimeout()
	    , zIndex: 2e9           // Use a high z-index by default
	    , className: 'spinner'  // CSS class to assign to the element
	    , top: '50%'            // center vertically
	    , left: '50%'           // center horizontally
	    , shadow: false         // Whether to render a shadow
	    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
	    , position: 'absolute'  // Element positioning
	    }
	    var target = document.getElementById('foo')
	    var spinner = new Spinner(opts).spin(target)
	 */
	;(function (root, factory) {

	  /* CommonJS */
	  if (typeof module == 'object' && module.exports) module.exports = factory()

	  /* AMD module */
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

	  /* Browser global */
	  else root.Spinner = factory()
	}(this, function () {
	  "use strict"

	  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
	    , animations = {} /* Animation rules keyed by their name */
	    , useCssAnimations /* Whether to use CSS animations or setTimeout */
	    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

	  /**
	   * Utility function to create elements. If no tag name is given,
	   * a DIV is created. Optionally properties can be passed.
	   */
	  function createEl (tag, prop) {
	    var el = document.createElement(tag || 'div')
	      , n

	    for (n in prop) el[n] = prop[n]
	    return el
	  }

	  /**
	   * Appends children and returns the parent.
	   */
	  function ins (parent /* child1, child2, ...*/) {
	    for (var i = 1, n = arguments.length; i < n; i++) {
	      parent.appendChild(arguments[i])
	    }

	    return parent
	  }

	  /**
	   * Creates an opacity keyframe animation rule and returns its name.
	   * Since most mobile Webkits have timing issues with animation-delay,
	   * we create separate rules for each line/segment.
	   */
	  function addAnimation (alpha, trail, i, lines) {
	    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
	      , start = 0.01 + i/lines * 100
	      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
	      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
	      , pre = prefix && '-' + prefix + '-' || ''

	    if (!animations[name]) {
	      sheet.insertRule(
	        '@' + pre + 'keyframes ' + name + '{' +
	        '0%{opacity:' + z + '}' +
	        start + '%{opacity:' + alpha + '}' +
	        (start+0.01) + '%{opacity:1}' +
	        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
	        '100%{opacity:' + z + '}' +
	        '}', sheet.cssRules.length)

	      animations[name] = 1
	    }

	    return name
	  }

	  /**
	   * Tries various vendor prefixes and returns the first supported property.
	   */
	  function vendor (el, prop) {
	    var s = el.style
	      , pp
	      , i

	    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
	    if (s[prop] !== undefined) return prop
	    for (i = 0; i < prefixes.length; i++) {
	      pp = prefixes[i]+prop
	      if (s[pp] !== undefined) return pp
	    }
	  }

	  /**
	   * Sets multiple style properties at once.
	   */
	  function css (el, prop) {
	    for (var n in prop) {
	      el.style[vendor(el, n) || n] = prop[n]
	    }

	    return el
	  }

	  /**
	   * Fills in default values.
	   */
	  function merge (obj) {
	    for (var i = 1; i < arguments.length; i++) {
	      var def = arguments[i]
	      for (var n in def) {
	        if (obj[n] === undefined) obj[n] = def[n]
	      }
	    }
	    return obj
	  }

	  /**
	   * Returns the line color from the given string or array.
	   */
	  function getColor (color, idx) {
	    return typeof color == 'string' ? color : color[idx % color.length]
	  }

	  // Built-in defaults

	  var defaults = {
	    lines: 12             // The number of lines to draw
	  , length: 7             // The length of each line
	  , width: 5              // The line thickness
	  , radius: 10            // The radius of the inner circle
	  , scale: 1.0            // Scales overall size of the spinner
	  , corners: 1            // Roundness (0..1)
	  , color: '#000'         // #rgb or #rrggbb
	  , opacity: 1/4          // Opacity of the lines
	  , rotate: 0             // Rotation offset
	  , direction: 1          // 1: clockwise, -1: counterclockwise
	  , speed: 1              // Rounds per second
	  , trail: 100            // Afterglow percentage
	  , fps: 20               // Frames per second when using setTimeout()
	  , zIndex: 2e9           // Use a high z-index by default
	  , className: 'spinner'  // CSS class to assign to the element
	  , top: '50%'            // center vertically
	  , left: '50%'           // center horizontally
	  , shadow: false         // Whether to render a shadow
	  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
	  , position: 'absolute'  // Element positioning
	  }

	  /** The constructor */
	  function Spinner (o) {
	    this.opts = merge(o || {}, Spinner.defaults, defaults)
	  }

	  // Global defaults that override the built-ins:
	  Spinner.defaults = {}

	  merge(Spinner.prototype, {
	    /**
	     * Adds the spinner to the given target element. If this instance is already
	     * spinning, it is automatically removed from its previous target b calling
	     * stop() internally.
	     */
	    spin: function (target) {
	      this.stop()

	      var self = this
	        , o = self.opts
	        , el = self.el = createEl(null, {className: o.className})

	      css(el, {
	        position: o.position
	      , width: 0
	      , zIndex: o.zIndex
	      , left: o.left
	      , top: o.top
	      })

	      if (target) {
	        target.insertBefore(el, target.firstChild || null)
	      }

	      el.setAttribute('role', 'progressbar')
	      self.lines(el, self.opts)

	      if (!useCssAnimations) {
	        // No CSS animation support, use setTimeout() instead
	        var i = 0
	          , start = (o.lines - 1) * (1 - o.direction) / 2
	          , alpha
	          , fps = o.fps
	          , f = fps / o.speed
	          , ostep = (1 - o.opacity) / (f * o.trail / 100)
	          , astep = f / o.lines

	        ;(function anim () {
	          i++
	          for (var j = 0; j < o.lines; j++) {
	            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

	            self.opacity(el, j * o.direction + start, alpha, o)
	          }
	          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
	        })()
	      }
	      return self
	    }

	    /**
	     * Stops and removes the Spinner.
	     */
	  , stop: function () {
	      var el = this.el
	      if (el) {
	        clearTimeout(this.timeout)
	        if (el.parentNode) el.parentNode.removeChild(el)
	        this.el = undefined
	      }
	      return this
	    }

	    /**
	     * Internal method that draws the individual lines. Will be overwritten
	     * in VML fallback mode below.
	     */
	  , lines: function (el, o) {
	      var i = 0
	        , start = (o.lines - 1) * (1 - o.direction) / 2
	        , seg

	      function fill (color, shadow) {
	        return css(createEl(), {
	          position: 'absolute'
	        , width: o.scale * (o.length + o.width) + 'px'
	        , height: o.scale * o.width + 'px'
	        , background: color
	        , boxShadow: shadow
	        , transformOrigin: 'left'
	        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
	        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
	        })
	      }

	      for (; i < o.lines; i++) {
	        seg = css(createEl(), {
	          position: 'absolute'
	        , top: 1 + ~(o.scale * o.width / 2) + 'px'
	        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
	        , opacity: o.opacity
	        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
	        })

	        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
	        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
	      }
	      return el
	    }

	    /**
	     * Internal method that adjusts the opacity of a single line.
	     * Will be overwritten in VML fallback mode below.
	     */
	  , opacity: function (el, i, val) {
	      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
	    }

	  })


	  function initVML () {

	    /* Utility function to create a VML tag */
	    function vml (tag, attr) {
	      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
	    }

	    // No CSS transforms but VML support, add a CSS rule for VML elements:
	    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

	    Spinner.prototype.lines = function (el, o) {
	      var r = o.scale * (o.length + o.width)
	        , s = o.scale * 2 * r

	      function grp () {
	        return css(
	          vml('group', {
	            coordsize: s + ' ' + s
	          , coordorigin: -r + ' ' + -r
	          })
	        , { width: s, height: s }
	        )
	      }

	      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
	        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
	        , i

	      function seg (i, dx, filter) {
	        ins(
	          g
	        , ins(
	            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
	          , ins(
	              css(
	                vml('roundrect', {arcsize: o.corners})
	              , { width: r
	                , height: o.scale * o.width
	                , left: o.scale * o.radius
	                , top: -o.scale * o.width >> 1
	                , filter: filter
	                }
	              )
	            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
	            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
	            )
	          )
	        )
	      }

	      if (o.shadow)
	        for (i = 1; i <= o.lines; i++) {
	          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
	        }

	      for (i = 1; i <= o.lines; i++) seg(i)
	      return ins(el, g)
	    }

	    Spinner.prototype.opacity = function (el, i, val, o) {
	      var c = el.firstChild
	      o = o.shadow && o.lines || 0
	      if (c && i + o < c.childNodes.length) {
	        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
	        if (c) c.opacity = val
	      }
	    }
	  }

	  if (typeof document !== 'undefined') {
	    sheet = (function () {
	      var el = createEl('style', {type : 'text/css'})
	      ins(document.getElementsByTagName('head')[0], el)
	      return el.sheet || el.styleSheet
	    }())

	    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

	    if (!vendor(probe, 'transform') && probe.adj) initVML()
	    else useCssAnimations = vendor(probe, 'animation')
	  }

	  return Spinner

	}));


/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = EmbeddedPost;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Parser = __webpack_require__(856);

	var _Parser2 = _interopRequireDefault(_Parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function EmbeddedPost(props) {
	  var className = props.className,
	      href = props.href,
	      width = props.width,
	      showText = props.showText,
	      children = props.children,
	      onParse = props.onParse;


	  return _react2.default.createElement(
	    _Parser2.default,
	    { className: className, onParse: onParse },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'fb-post',
	        'data-href': href,
	        'data-width': width,
	        'data-show-text': showText
	      },
	      children
	    )
	  );
	}

	EmbeddedPost.defaultProps = {
	  width: undefined,
	  showText: undefined,
	  children: undefined,
	  className: undefined,
	  onParse: undefined
	};
	//# sourceMappingURL=EmbeddedPost.js.map

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = EmbeddedVideo;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Parser = __webpack_require__(856);

	var _Parser2 = _interopRequireDefault(_Parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function EmbeddedVideo(props) {
	  var className = props.className,
	      href = props.href,
	      width = props.width,
	      showText = props.showText,
	      allowFullScreen = props.allowFullScreen,
	      autoPlay = props.autoPlay,
	      showCaptions = props.showCaptions,
	      children = props.children,
	      onParse = props.onParse;


	  return _react2.default.createElement(
	    _Parser2.default,
	    { className: className, onParse: onParse },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'fb-video',
	        'data-href': href,
	        'data-width': width,
	        'data-show-text': showText,
	        'data-show-captions': showCaptions,
	        'data-autoplay': autoPlay,
	        'data-allowfullscreen': allowFullScreen
	      },
	      children
	    )
	  );
	}

	EmbeddedVideo.defaultProps = {
	  width: undefined,
	  showText: undefined,
	  allowFullScreen: undefined,
	  autoPlay: undefined,
	  showCaptions: undefined,
	  children: undefined,
	  className: undefined,
	  onParse: undefined
	};
	//# sourceMappingURL=EmbeddedVideo.js.map

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = Comments;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Parser = __webpack_require__(856);

	var _Parser2 = _interopRequireDefault(_Parser);

	var _getCurrentHref = __webpack_require__(860);

	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

	var _ColorScheme = __webpack_require__(874);

	var _ColorScheme2 = _interopRequireDefault(_ColorScheme);

	var _CommentsOrderBy = __webpack_require__(875);

	var _CommentsOrderBy2 = _interopRequireDefault(_CommentsOrderBy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Comments(props) {
	  var className = props.className,
	      colorScheme = props.colorScheme,
	      _props$href = props.href,
	      href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
	      numPosts = props.numPosts,
	      orderBy = props.orderBy,
	      width = props.width,
	      children = props.children,
	      onParse = props.onParse,
	      mobile = props.mobile;


	  return _react2.default.createElement(
	    _Parser2.default,
	    { className: className, onParse: onParse },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'fb-comments',
	        'data-colorscheme': colorScheme,
	        'data-numposts': numPosts,
	        'data-href': href,
	        'data-order-by': orderBy,
	        'data-width': width,
	        'data-skin': colorScheme,
	        'data-mobile': mobile
	      },
	      children
	    )
	  );
	}


	Comments.defaultProps = {
	  href: undefined,
	  numPosts: undefined,
	  orderBy: undefined,
	  width: undefined,
	  colorScheme: undefined,
	  children: undefined,
	  className: undefined,
	  onParse: undefined,
	  mobile: undefined
	};
	//# sourceMappingURL=Comments.js.map

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  LIGHT: 'light',
	  DARK: 'dark'
	};
	//# sourceMappingURL=ColorScheme.js.map

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  SOCIAL: 'social',
	  REVERSE_TIME: 'reverse_time',
	  TIME: 'time'
	};
	//# sourceMappingURL=CommentsOrderBy.js.map

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = CommentsCount;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Parser = __webpack_require__(856);

	var _Parser2 = _interopRequireDefault(_Parser);

	var _getCurrentHref = __webpack_require__(860);

	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function CommentsCount(props) {
	  var className = props.className,
	      _props$href = props.href,
	      href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
	      children = props.children,
	      onParse = props.onParse;


	  return _react2.default.createElement(
	    _Parser2.default,
	    { className: className, onParse: onParse },
	    _react2.default.createElement(
	      'span',
	      {
	        className: 'fb-comments-count',
	        'data-href': href
	      },
	      children
	    )
	  );
	}


	CommentsCount.defaultProps = {
	  className: undefined,
	  href: undefined,
	  children: undefined,
	  onParse: undefined
	};
	//# sourceMappingURL=CommentsCount.js.map

/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _extends2 = __webpack_require__(180);

	var _extends3 = _interopRequireDefault(_extends2);

	var _regenerator = __webpack_require__(839);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(842);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck2 = __webpack_require__(223);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(224);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(259);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _getCurrentHref = __webpack_require__(860);

	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

	var _clearUndefinedProperties = __webpack_require__(862);

	var _clearUndefinedProperties2 = _interopRequireDefault(_clearUndefinedProperties);

	var _Process2 = __webpack_require__(863);

	var _Process3 = _interopRequireDefault(_Process2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Feed = (_temp = _class = function (_Process) {
	  (0, _inherits3.default)(Feed, _Process);

	  function Feed() {
	    (0, _classCallCheck3.default)(this, Feed);
	    return (0, _possibleConstructorReturn3.default)(this, _Process.apply(this, arguments));
	  }

	  Feed.prototype.process = function () {
	    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(facebook) {
	      var _props, _props$link, link, display, _props$appId, appId, redirectURI, from, to, picture, source, name, caption, description, ref;

	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _props = this.props, _props$link = _props.link, link = _props$link === undefined ? (0, _getCurrentHref2.default)() : _props$link, display = _props.display, _props$appId = _props.appId, appId = _props$appId === undefined ? facebook.getAppId() : _props$appId, redirectURI = _props.redirectURI, from = _props.from, to = _props.to, picture = _props.picture, source = _props.source, name = _props.name, caption = _props.caption, description = _props.description, ref = _props.ref;
	              return _context.abrupt('return', facebook.ui((0, _clearUndefinedProperties2.default)({
	                method: 'feed',
	                link: link,
	                display: display,
	                app_id: appId,
	                redirect_uri: redirectURI,
	                from: from,
	                to: to,
	                picture: picture,
	                source: source,
	                name: name,
	                caption: caption,
	                description: description,
	                ref: ref
	              })));

	            case 2:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));

	    function process(_x) {
	      return _ref.apply(this, arguments);
	    }

	    return process;
	  }();

	  return Feed;
	}(_Process3.default), _class.defaultProps = (0, _extends3.default)({}, _Process3.default.defaultProps, {
	  link: undefined,
	  display: undefined,
	  appId: undefined,
	  redirectURI: undefined
	}), _temp);
	exports.default = Feed;
	//# sourceMappingURL=Feed.js.map

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = CustomChat;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Parser = __webpack_require__(856);

	var _Parser2 = _interopRequireDefault(_Parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function CustomChat(props) {
	  var className = props.className,
	      minimized = props.minimized,
	      children = props.children,
	      pageId = props.pageId,
	      onParse = props.onParse,
	      themeColor = props.themeColor,
	      loggedInGreeting = props.loggedInGreeting,
	      loggedOutGreeting = props.loggedOutGreeting;


	  return _react2.default.createElement(
	    _Parser2.default,
	    { className: className, onParse: onParse },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'fb-customerchat',
	        page_id: pageId,
	        minimized: minimized,
	        theme_color: themeColor,
	        logged_in_greeting: loggedInGreeting,
	        logged_out_greeting: loggedOutGreeting
	      },
	      children
	    )
	  );
	}

	CustomChat.defaultProps = {
	  minimized: undefined,
	  children: undefined,
	  className: undefined,
	  onParse: undefined,
	  themeColor: undefined,
	  loggedInGreeting: undefined,
	  loggedOutGreeting: undefined
	};
	//# sourceMappingURL=CustomChat.js.map

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = MessageUs;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Parser = __webpack_require__(856);

	var _Parser2 = _interopRequireDefault(_Parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MessageUs(props) {
	  var className = props.className,
	      color = props.color,
	      messengerAppId = props.messengerAppId,
	      pageId = props.pageId,
	      children = props.children,
	      size = props.size,
	      onParse = props.onParse;


	  return _react2.default.createElement(
	    _Parser2.default,
	    { className: className, onParse: onParse },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'fb-messengermessageus',
	        messenger_app_id: messengerAppId,
	        page_id: pageId,
	        color: color,
	        size: size
	      },
	      children
	    )
	  );
	}

	MessageUs.defaultProps = {
	  color: undefined,
	  size: undefined,
	  children: undefined,
	  className: undefined,
	  onParse: undefined
	};
	//# sourceMappingURL=MessageUs.js.map

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = MessengerCheckbox;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Parser = __webpack_require__(856);

	var _Parser2 = _interopRequireDefault(_Parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MessengerCheckbox(props) {
	  var className = props.className,
	      origin = props.origin,
	      prechecked = props.prechecked,
	      allowLogin = props.allowLogin,
	      userRef = props.userRef,
	      messengerAppId = props.messengerAppId,
	      pageId = props.pageId,
	      children = props.children,
	      size = props.size,
	      onParse = props.onParse,
	      centerAlign = props.centerAlign,
	      skin = props.skin;


	  return _react2.default.createElement(
	    _Parser2.default,
	    { className: className, onParse: onParse },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'fb-messenger-checkbox',
	        messenger_app_id: messengerAppId,
	        page_id: pageId,
	        size: size,
	        origin: origin,
	        user_ref: userRef,
	        prechecked: prechecked,
	        allow_login: allowLogin,
	        skin: skin,
	        center_align: centerAlign
	      },
	      children
	    )
	  );
	}

	MessengerCheckbox.defaultProps = {
	  size: undefined,
	  allowLogin: undefined,
	  prechecked: undefined,
	  userRef: undefined,
	  children: undefined,
	  className: undefined,
	  onParse: undefined,
	  origin: undefined,
	  skin: undefined,
	  centerAlign: undefined
	};
	//# sourceMappingURL=MessengerCheckbox.js.map

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = SendToMessenger;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Parser = __webpack_require__(856);

	var _Parser2 = _interopRequireDefault(_Parser);

	var _MessengerSize = __webpack_require__(882);

	var _MessengerSize2 = _interopRequireDefault(_MessengerSize);

	var _MessengerColor = __webpack_require__(883);

	var _MessengerColor2 = _interopRequireDefault(_MessengerColor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function SendToMessenger(props) {
	  var className = props.className,
	      color = props.color,
	      messengerAppId = props.messengerAppId,
	      pageId = props.pageId,
	      children = props.children,
	      dataRef = props.dataRef,
	      size = props.size,
	      onParse = props.onParse;


	  return _react2.default.createElement(
	    _Parser2.default,
	    { className: className, onParse: onParse },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'fb-send-to-messenger',
	        messenger_app_id: messengerAppId,
	        page_id: pageId,
	        'data-color': color,
	        'data-size': size,
	        'data-ref': dataRef
	      },
	      children
	    )
	  );
	}

	SendToMessenger.defaultProps = {
	  color: undefined,
	  size: undefined,
	  dataRef: undefined,
	  children: undefined,
	  className: undefined,
	  onParse: undefined
	};
	//# sourceMappingURL=SendToMessenger.js.map

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  SMALL: 'small',
	  MEDIUM: 'medium',
	  STANDARD: 'standard',
	  LARGE: 'large',
	  XLARGE: 'xlarge'
	};
	//# sourceMappingURL=MessengerSize.js.map

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  BLUE: 'blue',
	  WHITE: 'white'
	};
	//# sourceMappingURL=MessengerColor.js.map

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  SMALL: 'small',
	  LARGE: 'large'
	};
	//# sourceMappingURL=LikeSize.js.map

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  STANDARD: 'standard',
	  BUTTON_COUNT: 'button_count',
	  BUTTON: 'button',
	  BOX_COUNT: 'box_count'
	};
	//# sourceMappingURL=LikeLayout.js.map

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  LIKE: 'like',
	  RECOMMEND: 'recommend'
	};
	//# sourceMappingURL=LikeAction.js.map

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tweet = exports.Timeline = exports.Share = exports.Mention = exports.Hashtag = exports.Follow = undefined;

	var _exenv = __webpack_require__(756);

	var _Follow2 = __webpack_require__(888);

	var _Follow3 = _interopRequireDefault(_Follow2);

	var _Hashtag2 = __webpack_require__(1002);

	var _Hashtag3 = _interopRequireDefault(_Hashtag2);

	var _Mention2 = __webpack_require__(1003);

	var _Mention3 = _interopRequireDefault(_Mention2);

	var _Share2 = __webpack_require__(1004);

	var _Share3 = _interopRequireDefault(_Share2);

	var _Timeline2 = __webpack_require__(1005);

	var _Timeline3 = _interopRequireDefault(_Timeline2);

	var _Tweet2 = __webpack_require__(1006);

	var _Tweet3 = _interopRequireDefault(_Tweet2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (_exenv.canUseDOM) {
	  var $script = __webpack_require__(1001); // eslint-disable-line global-require
	  $script('https://platform.twitter.com/widgets.js', 'twitter-widgets');
	}

	exports.Follow = _Follow3.default;
	exports.Hashtag = _Hashtag3.default;
	exports.Mention = _Mention3.default;
	exports.Share = _Share3.default;
	exports.Timeline = _Timeline3.default;
	exports.Tweet = _Tweet3.default;

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _isEqual = __webpack_require__(889);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _cloneDeep = __webpack_require__(969);

	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

	var _AbstractWidget = __webpack_require__(1000);

	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Follow = function (_React$Component) {
	  _inherits(Follow, _React$Component);

	  function Follow() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Follow);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Follow.__proto__ || Object.getPrototypeOf(Follow)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          username = _this$props.username,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;

	      // Options must be cloned since Twitter Widgets modifies it directly

	      tw.widgets.createFollowButton(username, element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Follow, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;

	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('username') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);

	  return Follow;
	}(_react2.default.Component);

	Follow.propTypes = {
	  username: _propTypes2.default.string.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Follow.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Follow;

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(970);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}

	module.exports = cloneDeep;


/***/ }),

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AbstractWidget = function (_React$Component) {
	  _inherits(AbstractWidget, _React$Component);

	  function AbstractWidget() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, AbstractWidget);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AbstractWidget.__proto__ || Object.getPrototypeOf(AbstractWidget)).call.apply(_ref, [this].concat(args))), _this), _this.loadWidget = function () {
	      var $script = __webpack_require__(1001); // eslint-disable-line global-require

	      $script.ready('twitter-widgets', function () {
	        if (!window.twttr) {
	          // If the script tag fails to load, scriptjs.ready() will still trigger.
	          // Let's avoid the JS exceptions when that happens.
	          console.error('Failure to load window.twttr, aborting load.'); // eslint-disable-line no-console
	          return;
	        }

	        // Delete existing
	        AbstractWidget.removeChildren(_this.widgetWrapper);

	        // Create widget
	        _this.props.ready(window.twttr, _this.widgetWrapper, _this.done);
	      });
	    }, _this.done = function () {
	      if (_this.willUnmount) {
	        AbstractWidget.removeChildrenExceptLast(_this.widgetWrapper);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(AbstractWidget, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.willUnmount = false;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadWidget();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.loadWidget();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.willUnmount = true;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement('div', {
	        ref: function ref(c) {
	          _this2.widgetWrapper = c;
	        }
	      });
	    }
	  }], [{
	    key: 'removeChildren',
	    value: function removeChildren(node) {
	      if (node) {
	        while (node.firstChild) {
	          node.removeChild(node.firstChild);
	        }
	      }
	    }
	  }, {
	    key: 'removeChildrenExceptLast',
	    value: function removeChildrenExceptLast(node) {
	      if (node) {
	        while (node.childNodes.length > 1) {
	          node.removeChild(node.firstChild);
	        }
	      }
	    }
	  }]);

	  return AbstractWidget;
	}(_react2.default.Component);

	AbstractWidget.propTypes = {
	  ready: _propTypes2.default.func.isRequired
	};
	exports.default = AbstractWidget;

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * $script.js JS loader & dependency manager
	  * https://github.com/ded/script.js
	  * (c) Dustin Diaz 2014 | License MIT
	  */

	(function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	})('$script', function () {
	  var doc = document
	    , head = doc.getElementsByTagName('head')[0]
	    , s = 'string'
	    , f = false
	    , push = 'push'
	    , readyState = 'readyState'
	    , onreadystatechange = 'onreadystatechange'
	    , list = {}
	    , ids = {}
	    , delay = {}
	    , scripts = {}
	    , scriptpath
	    , urlArgs

	  function every(ar, fn) {
	    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
	    return 1
	  }
	  function each(ar, fn) {
	    every(ar, function (el) {
	      return !fn(el)
	    })
	  }

	  function $script(paths, idOrDone, optDone) {
	    paths = paths[push] ? paths : [paths]
	    var idOrDoneIsDone = idOrDone && idOrDone.call
	      , done = idOrDoneIsDone ? idOrDone : optDone
	      , id = idOrDoneIsDone ? paths.join('') : idOrDone
	      , queue = paths.length
	    function loopFn(item) {
	      return item.call ? item() : list[item]
	    }
	    function callback() {
	      if (!--queue) {
	        list[id] = 1
	        done && done()
	        for (var dset in delay) {
	          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
	        }
	      }
	    }
	    setTimeout(function () {
	      each(paths, function loading(path, force) {
	        if (path === null) return callback()
	        
	        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
	          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
	        }
	        
	        if (scripts[path]) {
	          if (id) ids[id] = 1
	          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
	        }

	        scripts[path] = 1
	        if (id) ids[id] = 1
	        create(path, callback)
	      })
	    }, 0)
	    return $script
	  }

	  function create(path, fn) {
	    var el = doc.createElement('script'), loaded
	    el.onload = el.onerror = el[onreadystatechange] = function () {
	      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
	      el.onload = el[onreadystatechange] = null
	      loaded = 1
	      scripts[path] = 2
	      fn()
	    }
	    el.async = 1
	    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
	    head.insertBefore(el, head.lastChild)
	  }

	  $script.get = create

	  $script.order = function (scripts, id, done) {
	    (function callback(s) {
	      s = scripts.shift()
	      !scripts.length ? $script(s, id, done) : $script(s, callback)
	    }())
	  }

	  $script.path = function (p) {
	    scriptpath = p
	  }
	  $script.urlArgs = function (str) {
	    urlArgs = str;
	  }
	  $script.ready = function (deps, ready, req) {
	    deps = deps[push] ? deps : [deps]
	    var missing = [];
	    !each(deps, function (dep) {
	      list[dep] || missing[push](dep);
	    }) && every(deps, function (dep) {return list[dep]}) ?
	      ready() : !function (key) {
	      delay[key] = delay[key] || []
	      delay[key][push](ready)
	      req && req(missing)
	    }(deps.join('|'))
	    return $script
	  }

	  $script.done = function (idOrDone) {
	    $script([null], idOrDone)
	  }

	  return $script
	});


/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _isEqual = __webpack_require__(889);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _cloneDeep = __webpack_require__(969);

	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

	var _AbstractWidget = __webpack_require__(1000);

	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hashtag = function (_React$Component) {
	  _inherits(Hashtag, _React$Component);

	  function Hashtag() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Hashtag);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hashtag.__proto__ || Object.getPrototypeOf(Hashtag)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          hashtag = _this$props.hashtag,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;

	      // Options must be cloned since Twitter Widgets modifies it directly

	      tw.widgets.createHashtagButton(hashtag, element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Hashtag, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;

	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('hashtag') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);

	  return Hashtag;
	}(_react2.default.Component);

	Hashtag.propTypes = {
	  hashtag: _propTypes2.default.string.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Hashtag.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Hashtag;

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _isEqual = __webpack_require__(889);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _cloneDeep = __webpack_require__(969);

	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

	var _AbstractWidget = __webpack_require__(1000);

	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Mention = function (_React$Component) {
	  _inherits(Mention, _React$Component);

	  function Mention() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Mention);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mention.__proto__ || Object.getPrototypeOf(Mention)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          username = _this$props.username,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;

	      // Options must be cloned since Twitter Widgets modifies it directly

	      tw.widgets.createMentionButton(username, element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Mention, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;

	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('username') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);

	  return Mention;
	}(_react2.default.Component);

	Mention.propTypes = {
	  username: _propTypes2.default.string.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Mention.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Mention;

/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _isEqual = __webpack_require__(889);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _cloneDeep = __webpack_require__(969);

	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

	var _AbstractWidget = __webpack_require__(1000);

	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Share = function (_React$Component) {
	  _inherits(Share, _React$Component);

	  function Share() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Share);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          url = _this$props.url,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;

	      // Options must be cloned since Twitter Widgets modifies it directly

	      tw.widgets.createShareButton(url, element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Share, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;

	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('url') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);

	  return Share;
	}(_react2.default.Component);

	Share.propTypes = {
	  url: _propTypes2.default.string.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Share.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Share;

/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _isEqual = __webpack_require__(889);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _cloneDeep = __webpack_require__(969);

	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

	var _AbstractWidget = __webpack_require__(1000);

	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Timeline = function (_React$Component) {
	  _inherits(Timeline, _React$Component);

	  function Timeline() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Timeline);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          dataSource = _this$props.dataSource,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;

	      // Options and dataSource must be cloned since Twitter Widgets modifies it directly

	      tw.widgets.createTimeline((0, _cloneDeep2.default)(dataSource), element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Timeline, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;

	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('dataSource') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);

	  return Timeline;
	}(_react2.default.Component);

	Timeline.propTypes = {
	  dataSource: _propTypes2.default.object.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Timeline.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Timeline;

/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(315);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _isEqual = __webpack_require__(889);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _cloneDeep = __webpack_require__(969);

	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

	var _AbstractWidget = __webpack_require__(1000);

	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tweet = function (_React$Component) {
	  _inherits(Tweet, _React$Component);

	  function Tweet() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Tweet);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tweet.__proto__ || Object.getPrototypeOf(Tweet)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          tweetId = _this$props.tweetId,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;

	      // Options must be cloned since Twitter Widgets modifies it directly

	      tw.widgets.createTweet(tweetId, element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Tweet, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;

	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('tweetId') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);

	  return Tweet;
	}(_react2.default.Component);

	Tweet.propTypes = {
	  tweetId: _propTypes2.default.string.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Tweet.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Tweet;

/***/ })

});