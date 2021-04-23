exports.ids = [2];
exports.modules = {

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(332);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _reactFacebook = __webpack_require__(810);
	
	var _reactFacebook2 = _interopRequireDefault(_reactFacebook);
	
	var _reactTwitterWidgets = __webpack_require__(857);
	
	var _config = __webpack_require__(533);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _instagram = __webpack_require__(684);
	
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

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MessengerColor = exports.MessengerSize = exports.CommentsOrderBy = exports.LikeAction = exports.ColorScheme = exports.LikeLayout = exports.LikeSize = exports.SendToMessenger = exports.MessengerCheckbox = exports.MessageUs = exports.CustomChat = exports.Feed = exports.CommentsCount = exports.Comments = exports.EmbeddedVideo = exports.EmbeddedPost = exports.LoginButton = exports.Login = exports.Page = exports.ShareButton = exports.Share = exports.Send = exports.Like = exports.InitFacebook = exports.Parser = exports.FacebookProvider = exports.default = undefined;
	
	var _FacebookProvider2 = __webpack_require__(811);
	
	var _FacebookProvider3 = _interopRequireDefault(_FacebookProvider2);
	
	var _Parser2 = __webpack_require__(826);
	
	var _Parser3 = _interopRequireDefault(_Parser2);
	
	var _InitFacebook2 = __webpack_require__(827);
	
	var _InitFacebook3 = _interopRequireDefault(_InitFacebook2);
	
	var _Like2 = __webpack_require__(829);
	
	var _Like3 = _interopRequireDefault(_Like2);
	
	var _Send2 = __webpack_require__(831);
	
	var _Send3 = _interopRequireDefault(_Send2);
	
	var _Share2 = __webpack_require__(834);
	
	var _Share3 = _interopRequireDefault(_Share2);
	
	var _ShareButton2 = __webpack_require__(835);
	
	var _ShareButton3 = _interopRequireDefault(_ShareButton2);
	
	var _Page2 = __webpack_require__(836);
	
	var _Page3 = _interopRequireDefault(_Page2);
	
	var _Login2 = __webpack_require__(837);
	
	var _Login3 = _interopRequireDefault(_Login2);
	
	var _LoginButton2 = __webpack_require__(838);
	
	var _LoginButton3 = _interopRequireDefault(_LoginButton2);
	
	var _EmbeddedPost2 = __webpack_require__(841);
	
	var _EmbeddedPost3 = _interopRequireDefault(_EmbeddedPost2);
	
	var _EmbeddedVideo2 = __webpack_require__(842);
	
	var _EmbeddedVideo3 = _interopRequireDefault(_EmbeddedVideo2);
	
	var _Comments2 = __webpack_require__(843);
	
	var _Comments3 = _interopRequireDefault(_Comments2);
	
	var _CommentsCount2 = __webpack_require__(846);
	
	var _CommentsCount3 = _interopRequireDefault(_CommentsCount2);
	
	var _Feed2 = __webpack_require__(847);
	
	var _Feed3 = _interopRequireDefault(_Feed2);
	
	var _CustomChat2 = __webpack_require__(848);
	
	var _CustomChat3 = _interopRequireDefault(_CustomChat2);
	
	var _MessageUs2 = __webpack_require__(849);
	
	var _MessageUs3 = _interopRequireDefault(_MessageUs2);
	
	var _MessengerCheckbox2 = __webpack_require__(850);
	
	var _MessengerCheckbox3 = _interopRequireDefault(_MessengerCheckbox2);
	
	var _SendToMessenger2 = __webpack_require__(851);
	
	var _SendToMessenger3 = _interopRequireDefault(_SendToMessenger2);
	
	var _LikeSize2 = __webpack_require__(854);
	
	var _LikeSize3 = _interopRequireDefault(_LikeSize2);
	
	var _LikeLayout2 = __webpack_require__(855);
	
	var _LikeLayout3 = _interopRequireDefault(_LikeLayout2);
	
	var _ColorScheme2 = __webpack_require__(844);
	
	var _ColorScheme3 = _interopRequireDefault(_ColorScheme2);
	
	var _LikeAction2 = __webpack_require__(856);
	
	var _LikeAction3 = _interopRequireDefault(_LikeAction2);
	
	var _CommentsOrderBy2 = __webpack_require__(845);
	
	var _CommentsOrderBy3 = _interopRequireDefault(_CommentsOrderBy2);
	
	var _MessengerSize2 = __webpack_require__(852);
	
	var _MessengerSize3 = _interopRequireDefault(_MessengerSize2);
	
	var _MessengerColor2 = __webpack_require__(853);
	
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

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _asyncToGenerator2 = __webpack_require__(812);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Facebook = __webpack_require__(825);
	
	var _Facebook2 = _interopRequireDefault(_Facebook);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	let facebookInstance = null;
	class Facebook extends _react.Component {
	
	  getChildContext() {
	    return {
	      facebook: this
	    };
	  }
	
	  init() {
	    var _this = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      if (!_this.facebook) {
	        const {
	          domain,
	          version,
	          appId,
	          cookie,
	          status,
	          xfbml,
	          language,
	          frictionlessRequests,
	          wait
	        } = _this.props;
	
	        _this.facebook = facebookInstance || new _Facebook2.default({
	          domain,
	          appId,
	          version,
	          cookie,
	          status,
	          xfbml,
	          language,
	          frictionlessRequests,
	          wait
	        });
	
	        facebookInstance = _this.facebook;
	      }
	
	      yield _this.facebook.init();
	
	      return _this.facebook;
	    })();
	  }
	
	  render() {
	    return this.props.children;
	  }
	}
	exports.default = Facebook;
	Facebook.childContextTypes = {
	  facebook: _propTypes2.default.object.isRequired
	};
	Facebook.defaultProps = {
	  version: 'v2.9',
	  cookie: false,
	  status: false,
	  xfbml: false,
	  language: 'en_US',
	  frictionlessRequests: false,
	  domain: 'connect.facebook.net',
	  children: undefined,
	  wait: false
	};
	//# sourceMappingURL=FacebookProvider.js.map

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(813);
	
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

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(814), __esModule: true };

/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(308);
	__webpack_require__(280);
	__webpack_require__(293);
	__webpack_require__(815);
	__webpack_require__(823);
	__webpack_require__(824);
	module.exports = __webpack_require__(238).Promise;


/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(283);
	var global = __webpack_require__(237);
	var ctx = __webpack_require__(239);
	var classof = __webpack_require__(439);
	var $export = __webpack_require__(236);
	var isObject = __webpack_require__(244);
	var aFunction = __webpack_require__(240);
	var anInstance = __webpack_require__(434);
	var forOf = __webpack_require__(435);
	var speciesConstructor = __webpack_require__(816);
	var task = __webpack_require__(817).set;
	var microtask = __webpack_require__(819)();
	var newPromiseCapabilityModule = __webpack_require__(820);
	var perform = __webpack_require__(821);
	var promiseResolve = __webpack_require__(822);
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
	    var FakePromise = (promise.constructor = {})[__webpack_require__(291)('species')] = function (exec) {
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
	  Internal.prototype = __webpack_require__(433)($Promise.prototype, {
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
	__webpack_require__(290)($Promise, PROMISE);
	__webpack_require__(440)(PROMISE);
	Wrapper = __webpack_require__(238)[PROMISE];
	
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(552)(function (iter) {
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

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(243);
	var aFunction = __webpack_require__(240);
	var SPECIES = __webpack_require__(291)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(239);
	var invoke = __webpack_require__(818);
	var html = __webpack_require__(289);
	var cel = __webpack_require__(248);
	var global = __webpack_require__(237);
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
	  if (__webpack_require__(257)(process) == 'process') {
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

/***/ 818:
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

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(237);
	var macrotask = __webpack_require__(817).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(257)(process) == 'process';
	
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

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(240);
	
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

/***/ 821:
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(243);
	var isObject = __webpack_require__(244);
	var newPromiseCapability = __webpack_require__(820);
	
	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(236);
	var core = __webpack_require__(238);
	var global = __webpack_require__(237);
	var speciesConstructor = __webpack_require__(816);
	var promiseResolve = __webpack_require__(822);
	
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

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(236);
	var newPromiseCapability = __webpack_require__(820);
	var perform = __webpack_require__(821);
	
	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Method = exports.LoginStatus = undefined;
	
	var _asyncToGenerator2 = __webpack_require__(812);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _extends2 = __webpack_require__(232);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _debug = __webpack_require__(750);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const log = (0, _debug2.default)('react-facebook:facebook');
	
	const LoginStatus = exports.LoginStatus = {
	  CONNECTED: 'connected',
	  NOT_AUTHORIZED: 'not_authorized'
	};
	
	const Method = exports.Method = {
	  GET: 'get',
	  POST: 'post',
	  DELETE: 'delete'
	};
	
	class Facebook {
	  constructor(options = {}) {
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
	
	  getAppId() {
	    return this.options.appId;
	  }
	
	  init() {
	    var _this = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      if (_this.loadingPromise) {
	        return _this.loadingPromise;
	      }
	
	      _this.loadingPromise = new Promise(function (resolve) {
	        const { options } = _this;
	
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
	
	        const fjs = document.getElementsByTagName('script')[0];
	        if (!fjs) {
	          log('Script tag does not exists in the DOM');
	          return;
	        }
	
	        if (document.getElementById('facebook-jssdk')) {
	          return;
	        }
	
	        const js = document.createElement('script');
	        js.id = 'facebook-jssdk';
	        js.async = true;
	        js.src = `//${options.domain}/${options.language}/sdk.js`;
	
	        fjs.parentNode.insertBefore(js, fjs);
	      });
	
	      return _this.loadingPromise;
	    })();
	  }
	
	  process(method, before = [], after = []) {
	    var _this2 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const fb = yield _this2.init();
	
	      return new Promise(function (resolve, reject) {
	        fb[method](...before, function (response) {
	          if (!response || response.error) {
	            reject(new Error(response && response.error || 'Response is undefined'));
	            return;
	          }
	
	          resolve(response);
	        }, ...after);
	      });
	    })();
	  }
	
	  ui(options) {
	    var _this3 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this3.process('ui', [options]);
	    })();
	  }
	
	  api(path, method = Method.GET, params = {}) {
	    var _this4 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this4.process('api', [path, method, params]);
	    })();
	  }
	
	  login(opts = null) {
	    var _this5 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this5.process('login', [], [opts]);
	    })();
	  }
	
	  logout() {
	    var _this6 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this6.process('logout');
	    })();
	  }
	
	  getLoginStatus() {
	    var _this7 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this7.process('getLoginStatus');
	    })();
	  }
	
	  getAuthResponse() {
	    var _this8 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this8.process('getAuthResponse');
	    })();
	  }
	
	  getTokenDetail() {
	    var _this9 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const response = yield _this9.getLoginStatus();
	      if (response.status === LoginStatus.CONNECTED && response.authResponse) {
	        return response.authResponse;
	      }
	
	      throw new Error('Token is undefined');
	    })();
	  }
	
	  getProfile(params) {
	    var _this10 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this10.api('/me', Method.GET, params);
	    })();
	  }
	
	  getTokenDetailWithProfile(params) {
	    var _this11 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const tokenDetail = yield _this11.getTokenDetail();
	      const profile = yield _this11.getProfile(params);
	
	      return {
	        profile,
	        tokenDetail
	      };
	    })();
	  }
	
	  getToken() {
	    var _this12 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const authResponse = yield _this12.getTokenDetail();
	      return authResponse.accessToken;
	    })();
	  }
	
	  getUserId() {
	    var _this13 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const authResponse = yield _this13.getTokenDetail();
	      return authResponse.userID;
	    })();
	  }
	
	  sendInvite(to, options) {
	    var _this14 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this14.ui((0, _extends3.default)({
	        to,
	        method: 'apprequests'
	      }, options));
	    })();
	  }
	
	  postAction(ogNamespace, ogAction, ogObject, ogObjectUrl, noFeedStory) {
	    var _this15 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      let url = `/me/${ogNamespace}:${ogAction}?${ogObject}=${encodeURIComponent(ogObjectUrl)}`;
	
	      if (noFeedStory === true) {
	        url += '&no_feed_story=true';
	      }
	
	      return _this15.api(url, Method.POST);
	    })();
	  }
	
	  getPermissions() {
	    var _this16 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const response = yield _this16.api('/me/permissions');
	      return response.data;
	    })();
	  }
	
	  hasPermissions(permissions) {
	    var _this17 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const usersPermissions = yield _this17.getPermissions();
	
	      const findedPermissions = permissions.filter(function (p) {
	        return !!usersPermissions.find(function (row) {
	          const { permission, status } = row;
	          return status === 'granted' && permission === p;
	        });
	      });
	
	      return findedPermissions.length === permissions.length;
	    })();
	  }
	
	  subscribe(eventName, callback) {
	    var _this18 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const fb = yield _this18.init();
	      fb.Event.subscribe(eventName, callback);
	    })();
	  }
	
	  unsubscribe(eventName, callback) {
	    var _this19 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const fb = yield _this19.init();
	      fb.Event.unsubscribe(eventName, callback);
	    })();
	  }
	
	  parse(parentNode) {
	    var _this20 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const fb = yield _this20.init();
	
	      if (typeof parentNode === 'undefined') {
	        fb.XFBML.parse();
	      } else {
	        fb.XFBML.parse(parentNode);
	      }
	    })();
	  }
	
	  getRequests() {
	    var _this21 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this21.api('/me/apprequests');
	    })();
	  }
	
	  removeRequest(requestID) {
	    var _this22 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this22.api(requestID, Method.DELETE);
	    })();
	  }
	
	  setAutoGrow() {
	    var _this23 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const fb = yield _this23.init();
	      fb.Canvas.setAutoGrow();
	    })();
	  }
	
	  paySimple(product, quantity = 1) {
	    var _this24 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this24.ui({
	        method: 'pay',
	        action: 'purchaseitem',
	        product,
	        quantity
	      });
	    })();
	  }
	
	  pay(product, options) {
	    var _this25 = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      return _this25.ui((0, _extends3.default)({
	        method: 'pay',
	        action: 'purchaseitem',
	        product
	      }, options));
	    })();
	  }
	}
	
	exports.default = Facebook; /*
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
	//# sourceMappingURL=Facebook.js.map

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _InitFacebook = __webpack_require__(827);
	
	var _InitFacebook2 = _interopRequireDefault(_InitFacebook);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Parser extends _react.Component {
	  constructor(...args) {
	    var _temp;
	
	    return _temp = super(...args), this.handleFacebookReady = facebook => {
	      this.facebook = facebook;
	      this.parse();
	    }, this.handleContainer = container => {
	      this.container = container;
	      this.parse();
	    }, _temp;
	  }
	
	  componentWillReceiveProps(props) {
	    const oldChildren = this.props.children;
	    const { children } = props;
	
	    if (!children || !oldChildren) {
	      return;
	    }
	
	    const changed = Object.keys(oldChildren.props).find(propName => {
	      const oldValue = oldChildren.props[propName];
	      const newValue = children.props[propName];
	
	      return oldValue !== newValue;
	    });
	
	    if (changed) {
	      this.rerender();
	    }
	  }
	
	  shouldComponentUpdate() {
	    return false;
	  }
	
	  rerender() {
	    this.forceUpdate();
	
	    this.parsed = false;
	    this.parse();
	  }
	
	  parse() {
	    const { parsed, container, facebook } = this;
	    if (parsed || !container || !facebook) {
	      return false;
	    }
	
	    this.parsed = true;
	
	    const parseResponse = facebook.parse(container);
	
	    const { onParse } = this.props;
	    if (onParse) {
	      onParse(parseResponse);
	    }
	
	    return parseResponse;
	  }
	
	  render() {
	    const { className, children } = this.props;
	
	    return _react2.default.createElement(
	      _InitFacebook2.default,
	      { onReady: this.handleFacebookReady },
	      _react2.default.createElement(
	        'div',
	        { className: className, ref: this.handleContainer },
	        children
	      )
	    );
	  }
	}
	exports.default = Parser;
	Parser.defaultProps = {
	  className: undefined,
	  onParse: undefined
	};
	//# sourceMappingURL=Parser.js.map

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _asyncToGenerator2 = __webpack_require__(812);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _canUseDom = __webpack_require__(828);
	
	var _canUseDom2 = _interopRequireDefault(_canUseDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class InitFacebook extends _react.Component {
	
	  componentDidMount() {
	    if (_canUseDom2.default) {
	      this.initFacebook();
	    }
	  }
	
	  initFacebook() {
	    var _this = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const { onReady } = _this.props;
	
	      const facebook = yield _this.context.facebook.init();
	      onReady(facebook);
	    })();
	  }
	
	  render() {
	    return this.props.children;
	  }
	}
	exports.default = InitFacebook;
	InitFacebook.defaultProps = {
	  children: undefined
	};
	InitFacebook.contextTypes = {
	  facebook: _propTypes2.default.object.isRequired
	};
	//# sourceMappingURL=InitFacebook.js.map

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);
	
	module.exports = canUseDOM;

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Like;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Parser = __webpack_require__(826);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _getCurrentHref = __webpack_require__(830);
	
	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Like(props) {
	  const {
	    className,
	    href = (0, _getCurrentHref2.default)(),
	    layout,
	    colorScheme,
	    action,
	    showFaces,
	    share,
	    children,
	    width,
	    size,
	    kidDirectedSite,
	    referral,
	    onParse
	  } = props;
	
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

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getCurrentHref;
	
	var _canUseDom = __webpack_require__(828);
	
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

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(232);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _asyncToGenerator2 = __webpack_require__(812);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getCurrentHref = __webpack_require__(830);
	
	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);
	
	var _clearUndefinedProperties = __webpack_require__(832);
	
	var _clearUndefinedProperties2 = _interopRequireDefault(_clearUndefinedProperties);
	
	var _Process = __webpack_require__(833);
	
	var _Process2 = _interopRequireDefault(_Process);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Send extends _Process2.default {
	
	  process(facebook) {
	    var _this = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const {
	        link = (0, _getCurrentHref2.default)(),
	        display,
	        appId = facebook.getAppId(),
	        to,
	        redirectURI
	      } = _this.props;
	
	      return facebook.ui((0, _clearUndefinedProperties2.default)({
	        method: 'send',
	        link,
	        display,
	        app_id: appId,
	        to,
	        redirect_uri: redirectURI
	      }));
	    })();
	  }
	}
	exports.default = Send;
	Send.defaultProps = (0, _extends3.default)({}, _Process2.default.defaultProps, {
	  to: undefined,
	  display: undefined,
	  appId: undefined,
	  redirectURI: undefined
	});
	//# sourceMappingURL=Send.js.map

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = clearUndefinedProperties;
	function clearUndefinedProperties(obj) {
	  if (!obj) {
	    return obj;
	  }
	
	  const newObj = {};
	
	  Object.keys(obj).forEach(propertyName => {
	    const value = obj[propertyName];
	    if (value !== undefined) {
	      newObj[propertyName] = value;
	    }
	  });
	
	  return newObj;
	}
	//# sourceMappingURL=clearUndefinedProperties.js.map

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _asyncToGenerator2 = __webpack_require__(812);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _InitFacebook = __webpack_require__(827);
	
	var _InitFacebook2 = _interopRequireDefault(_InitFacebook);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Process extends _react.Component {
	  constructor(...args) {
	    var _temp, _this;
	
	    return _temp = _this = super(...args), this.state = {
	      isWorking: false,
	      isMounted: true
	    }, this.handleClick = (() => {
	      var _ref = (0, _asyncToGenerator3.default)(function* (evn) {
	        evn.preventDefault();
	        evn.stopPropagation();
	
	        _this.setState({
	          isWorking: true
	        });
	
	        try {
	          const { facebook } = _this.state;
	          if (!facebook) {
	            throw new Error('Facebook is not initialized');
	          }
	
	          const { dontWait, onResponse, onError } = _this.props;
	          if (dontWait) {
	            _this.process(facebook).then(function (response) {
	              if (onResponse) {
	                onResponse(response);
	              }
	            }, function (error) {
	              if (onError) {
	                onError(error);
	              }
	            });
	          } else {
	            const response = yield _this.process(facebook);
	
	            if (onResponse) {
	              yield onResponse(response);
	            }
	          }
	        } catch (e) {
	          const { onError } = _this.props;
	          if (onError) {
	            yield onError(e);
	          }
	        }
	
	        const { isMounted } = _this.state;
	        if (isMounted) {
	          _this.setState({
	            isWorking: false
	          });
	        }
	      });
	
	      return function (_x) {
	        return _ref.apply(this, arguments);
	      };
	    })(), this.handleFacebookReady = facebook => {
	      const { isMounted } = this.state;
	      if (isMounted) {
	        this.setState({ facebook });
	
	        const { onReady } = this.props;
	        if (onReady) {
	          onReady(facebook);
	        }
	      }
	    }, _temp;
	  }
	
	  componentWillUnmount() {
	    this.setState({
	      isMounted: false
	    });
	  }
	
	  getElement() {
	    const {
	      children,
	      render,
	      component: CustomComponent
	    } = this.props;
	
	    const { facebook, isWorking } = this.state;
	    const isLoading = !facebook;
	    const isReady = !isLoading && !isWorking;
	
	    if (render) {
	      return render({
	        isWorking,
	        isLoading,
	        isReady,
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
	  }
	
	  render() {
	    return _react2.default.createElement(
	      _InitFacebook2.default,
	      { onReady: this.handleFacebookReady },
	      this.getElement()
	    );
	  }
	}
	exports.default = Process;
	Process.defaultProps = {
	  children: undefined,
	  render: undefined,
	  component: undefined,
	  onReady: undefined,
	  onError: undefined,
	  onResponse: undefined,
	  dontWait: undefined
	};
	//# sourceMappingURL=Process.js.map

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(232);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _asyncToGenerator2 = __webpack_require__(812);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getCurrentHref = __webpack_require__(830);
	
	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);
	
	var _clearUndefinedProperties = __webpack_require__(832);
	
	var _clearUndefinedProperties2 = _interopRequireDefault(_clearUndefinedProperties);
	
	var _Process = __webpack_require__(833);
	
	var _Process2 = _interopRequireDefault(_Process);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Share extends _Process2.default {
	
	  process(facebook) {
	    var _this = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const {
	        href = (0, _getCurrentHref2.default)(),
	        display,
	        appId = facebook.getAppId(),
	        hashtag,
	        redirectURI,
	        quote,
	        mobileIframe
	      } = _this.props;
	
	      return facebook.ui((0, _clearUndefinedProperties2.default)({
	        method: 'share',
	        href,
	        display,
	        app_id: appId,
	        hashtag,
	        redirect_uri: redirectURI,
	        quote,
	        mobile_iframe: mobileIframe
	      }));
	    })();
	  }
	}
	exports.default = Share;
	Share.defaultProps = (0, _extends3.default)({}, _Process2.default.defaultProps, {
	  href: undefined,
	  hashtag: undefined,
	  quote: undefined,
	  mobileIframe: undefined,
	  display: undefined,
	  appId: undefined,
	  redirectURI: undefined
	});
	//# sourceMappingURL=Share.js.map

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(232);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(274);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	exports.default = ShareButton;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Share = __webpack_require__(834);
	
	var _Share2 = _interopRequireDefault(_Share);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ShareButton(props) {
	  const {
	    className,
	    iconClassName,
	    icon,
	    children
	  } = props,
	        rest = (0, _objectWithoutProperties3.default)(props, ['className', 'iconClassName', 'icon', 'children']);
	
	  return _react2.default.createElement(_Share2.default, (0, _extends3.default)({}, rest, {
	    render: ({ isReady, onClick }) => _react2.default.createElement(
	      'button',
	      {
	        type: 'button',
	        disabled: !isReady,
	        className: className,
	        onClick: onClick
	      },
	      !!icon && _react2.default.createElement('i', { className: iconClassName }),
	      children
	    )
	  }));
	}
	
	ShareButton.defaultProps = (0, _extends3.default)({}, _Share2.default.defaultProps, {
	  className: 'btn btn-lg',
	  iconClassName: 'fa fa-facebook pull-left',
	  icon: true
	});
	//# sourceMappingURL=ShareButton.js.map

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Page;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Parser = __webpack_require__(826);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _getCurrentHref = __webpack_require__(830);
	
	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Page(props) {
	  const {
	    className,
	    style,
	    href = (0, _getCurrentHref2.default)(),
	    tabs,
	    hideCover,
	    width,
	    height,
	    showFacepile,
	    hideCTA,
	    smallHeader,
	    adaptContainerWidth,
	    children,
	    onParse
	  } = props;
	
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

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(232);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _asyncToGenerator2 = __webpack_require__(812);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _Process = __webpack_require__(833);
	
	var _Process2 = _interopRequireDefault(_Process);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Login extends _Process2.default {
	
	  process(facebook) {
	    var _this = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const {
	        scope, fields, returnScopes, rerequest, reauthorize
	      } = _this.props;
	      const loginQpts = { scope };
	      const authType = [];
	
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
	
	      const response = yield facebook.login(loginQpts);
	      if (response.status !== 'connected') {
	        throw new Error('Unauthorized user');
	      }
	
	      return facebook.getTokenDetailWithProfile({ fields });
	    })();
	  }
	}
	exports.default = Login;
	Login.defaultProps = (0, _extends3.default)({}, _Process2.default.defaultProps, {
	  scope: '',
	  fields: ['id', 'first_name', 'last_name', 'middle_name', 'name', 'email', 'locale', 'gender', 'timezone', 'verified', 'link'],
	  returnScopes: false,
	  rerequest: false,
	  reauthorize: false
	});
	//# sourceMappingURL=Login.js.map

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(232);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(274);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	exports.default = LoginButton;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSpinnerChildren = __webpack_require__(839);
	
	var _reactSpinnerChildren2 = _interopRequireDefault(_reactSpinnerChildren);
	
	var _Login = __webpack_require__(837);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function LoginButton(props) {
	  const {
	    children,
	    buttonClassName,
	    iconClassName,
	    icon,
	    spinner,
	    spinnerClassName
	  } = props,
	        rest = (0, _objectWithoutProperties3.default)(props, ['children', 'buttonClassName', 'iconClassName', 'icon', 'spinner', 'spinnerClassName']);
	
	  return _react2.default.createElement(_Login2.default, (0, _extends3.default)({}, rest, {
	    render: ({ isWorking, isLoading, onClick }) => _react2.default.createElement(
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
	        config: this.props.spinnerConfig,
	        className: spinnerClassName
	      })
	    )
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

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _spin = __webpack_require__(840);
	
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

/***/ 840:
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

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = EmbeddedPost;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Parser = __webpack_require__(826);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function EmbeddedPost(props) {
	  const {
	    className,
	    href,
	    width,
	    showText,
	    children,
	    onParse
	  } = props;
	
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

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = EmbeddedVideo;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Parser = __webpack_require__(826);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function EmbeddedVideo(props) {
	  const {
	    className,
	    href,
	    width,
	    showText,
	    allowFullScreen,
	    autoPlay,
	    showCaptions,
	    children,
	    onParse
	  } = props;
	
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

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Comments;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Parser = __webpack_require__(826);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _getCurrentHref = __webpack_require__(830);
	
	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);
	
	var _ColorScheme = __webpack_require__(844);
	
	var _ColorScheme2 = _interopRequireDefault(_ColorScheme);
	
	var _CommentsOrderBy = __webpack_require__(845);
	
	var _CommentsOrderBy2 = _interopRequireDefault(_CommentsOrderBy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Comments(props) {
	  const {
	    className,
	    colorScheme,
	    href = (0, _getCurrentHref2.default)(),
	    numPosts,
	    orderBy,
	    width,
	    children,
	    onParse,
	    mobile
	  } = props;
	
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

/***/ 844:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  LIGHT: 'light',
	  DARK: 'dark'
	};
	//# sourceMappingURL=ColorScheme.js.map

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  SOCIAL: 'social',
	  REVERSE_TIME: 'reverse_time',
	  TIME: 'time'
	};
	//# sourceMappingURL=CommentsOrderBy.js.map

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = CommentsCount;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Parser = __webpack_require__(826);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _getCurrentHref = __webpack_require__(830);
	
	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CommentsCount(props) {
	  const {
	    className,
	    href = (0, _getCurrentHref2.default)(),
	    children,
	    onParse
	  } = props;
	
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

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(232);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _asyncToGenerator2 = __webpack_require__(812);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getCurrentHref = __webpack_require__(830);
	
	var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);
	
	var _clearUndefinedProperties = __webpack_require__(832);
	
	var _clearUndefinedProperties2 = _interopRequireDefault(_clearUndefinedProperties);
	
	var _Process = __webpack_require__(833);
	
	var _Process2 = _interopRequireDefault(_Process);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Feed extends _Process2.default {
	
	  process(facebook) {
	    var _this = this;
	
	    return (0, _asyncToGenerator3.default)(function* () {
	      const {
	        link = (0, _getCurrentHref2.default)(),
	        display,
	        appId = facebook.getAppId(),
	        redirectURI,
	        from,
	        to,
	        picture,
	        source,
	        name,
	        caption,
	        description,
	        ref
	      } = _this.props;
	
	      return facebook.ui((0, _clearUndefinedProperties2.default)({
	        method: 'feed',
	        link,
	        display,
	        app_id: appId,
	        redirect_uri: redirectURI,
	        from,
	        to,
	        picture,
	        source,
	        name,
	        caption,
	        description,
	        ref
	      }));
	    })();
	  }
	}
	exports.default = Feed;
	Feed.defaultProps = (0, _extends3.default)({}, _Process2.default.defaultProps, {
	  link: undefined,
	  display: undefined,
	  appId: undefined,
	  redirectURI: undefined
	});
	//# sourceMappingURL=Feed.js.map

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = CustomChat;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Parser = __webpack_require__(826);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CustomChat(props) {
	  const {
	    className,
	    minimized,
	    children,
	    pageId,
	    onParse,
	    themeColor,
	    loggedInGreeting,
	    loggedOutGreeting
	  } = props;
	
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

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = MessageUs;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Parser = __webpack_require__(826);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MessageUs(props) {
	  const {
	    className,
	    color,
	    messengerAppId,
	    pageId,
	    children,
	    size,
	    onParse
	  } = props;
	
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

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = MessengerCheckbox;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Parser = __webpack_require__(826);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MessengerCheckbox(props) {
	  const {
	    className,
	    origin,
	    prechecked,
	    allowLogin,
	    userRef,
	    messengerAppId,
	    pageId,
	    children,
	    size,
	    onParse,
	    centerAlign,
	    skin
	  } = props;
	
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

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = SendToMessenger;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Parser = __webpack_require__(826);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _MessengerSize = __webpack_require__(852);
	
	var _MessengerSize2 = _interopRequireDefault(_MessengerSize);
	
	var _MessengerColor = __webpack_require__(853);
	
	var _MessengerColor2 = _interopRequireDefault(_MessengerColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function SendToMessenger(props) {
	  const {
	    className,
	    color,
	    messengerAppId,
	    pageId,
	    children,
	    dataRef,
	    size,
	    onParse
	  } = props;
	
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

/***/ 852:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  SMALL: 'small',
	  MEDIUM: 'medium',
	  STANDARD: 'standard',
	  LARGE: 'large',
	  XLARGE: 'xlarge'
	};
	//# sourceMappingURL=MessengerSize.js.map

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  BLUE: 'blue',
	  WHITE: 'white'
	};
	//# sourceMappingURL=MessengerColor.js.map

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  SMALL: 'small',
	  LARGE: 'large'
	};
	//# sourceMappingURL=LikeSize.js.map

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  STANDARD: 'standard',
	  BUTTON_COUNT: 'button_count',
	  BUTTON: 'button',
	  BOX_COUNT: 'box_count'
	};
	//# sourceMappingURL=LikeLayout.js.map

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  LIKE: 'like',
	  RECOMMEND: 'recommend'
	};
	//# sourceMappingURL=LikeAction.js.map

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tweet = exports.Timeline = exports.Share = exports.Mention = exports.Hashtag = exports.Follow = undefined;
	
	var _exenv = __webpack_require__(222);
	
	var _Follow2 = __webpack_require__(858);
	
	var _Follow3 = _interopRequireDefault(_Follow2);
	
	var _Hashtag2 = __webpack_require__(972);
	
	var _Hashtag3 = _interopRequireDefault(_Hashtag2);
	
	var _Mention2 = __webpack_require__(973);
	
	var _Mention3 = _interopRequireDefault(_Mention2);
	
	var _Share2 = __webpack_require__(974);
	
	var _Share3 = _interopRequireDefault(_Share2);
	
	var _Timeline2 = __webpack_require__(975);
	
	var _Timeline3 = _interopRequireDefault(_Timeline2);
	
	var _Tweet2 = __webpack_require__(976);
	
	var _Tweet3 = _interopRequireDefault(_Tweet2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (_exenv.canUseDOM) {
	  var $script = __webpack_require__(971); // eslint-disable-line global-require
	  $script('https://platform.twitter.com/widgets.js', 'twitter-widgets');
	}
	
	exports.Follow = _Follow3.default;
	exports.Hashtag = _Hashtag3.default;
	exports.Mention = _Mention3.default;
	exports.Share = _Share3.default;
	exports.Timeline = _Timeline3.default;
	exports.Tweet = _Tweet3.default;

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(859);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(939);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(970);
	
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

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(940);
	
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

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
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
	      var $script = __webpack_require__(971); // eslint-disable-line global-require
	
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

/***/ 971:
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

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(859);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(939);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(970);
	
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

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(859);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(939);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(970);
	
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

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(859);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(939);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(970);
	
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

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(859);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(939);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(970);
	
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

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(219);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(859);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(939);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(970);
	
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

};;
//# sourceMappingURL=2.render-page.js.map