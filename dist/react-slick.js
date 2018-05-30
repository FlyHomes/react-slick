(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Slider"] = factory(require("react"), require("react-dom"));
	else
		root["Slider"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _slider = __webpack_require__(1);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _slider2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _innerSlider = __webpack_require__(3);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _json2mq = __webpack_require__(17);

	var _json2mq2 = _interopRequireDefault(_json2mq);

	var _defaultProps = __webpack_require__(12);

	var _defaultProps2 = _interopRequireDefault(_defaultProps);

	var _canUseDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"can-use-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _canUseDom2 = _interopRequireDefault(_canUseDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var enquire = _canUseDom2.default && __webpack_require__(19);

	var Slider = function (_React$Component) {
	  _inherits(Slider, _React$Component);

	  function Slider(props) {
	    _classCallCheck(this, Slider);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.innerSliderRefHandler = function (ref) {
	      return _this.innerSlider = ref;
	    };

	    _this.slickPrev = function () {
	      return _this.innerSlider.slickPrev();
	    };

	    _this.slickNext = function () {
	      return _this.innerSlider.slickNext();
	    };

	    _this.slickGoTo = function (slide) {
	      return _this.innerSlider.slickGoTo(slide);
	    };

	    _this.slickPause = function () {
	      return _this.innerSlider.pause();
	    };

	    _this.slickPlay = function () {
	      return _this.innerSlider.autoPlay();
	    };

	    _this.state = {
	      breakpoint: null
	    };
	    _this._responsiveMediaHandlers = [];
	    return _this;
	  }

	  Slider.prototype.media = function media(query, handler) {
	    // javascript handler for  css media query
	    enquire.register(query, handler);
	    this._responsiveMediaHandlers.push({ query: query, handler: handler });
	  };

	  // handles responsive breakpoints


	  Slider.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    if (this.props.responsive) {
	      var breakpoints = this.props.responsive.map(function (breakpt) {
	        return breakpt.breakpoint;
	      });
	      // sort them in increasing order of their numerical value
	      breakpoints.sort(function (x, y) {
	        return x - y;
	      });

	      breakpoints.forEach(function (breakpoint, index) {
	        // media query for each breakpoint
	        var bQuery = void 0;
	        if (index === 0) {
	          bQuery = (0, _json2mq2.default)({ minWidth: 0, maxWidth: breakpoint });
	        } else {
	          bQuery = (0, _json2mq2.default)({ minWidth: breakpoints[index - 1] + 1, maxWidth: breakpoint });
	        }
	        // when not using server side rendering
	        _canUseDom2.default && _this2.media(bQuery, function () {
	          _this2.setState({ breakpoint: breakpoint });
	        });
	      });

	      // Register media query for full screen. Need to support resize from small to large
	      // convert javascript object to media query string
	      var query = (0, _json2mq2.default)({ minWidth: breakpoints.slice(-1)[0] });

	      _canUseDom2.default && this.media(query, function () {
	        _this2.setState({ breakpoint: null });
	      });
	    }
	  };

	  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._responsiveMediaHandlers.forEach(function (obj) {
	      enquire.unregister(obj.query, obj.handler);
	    });
	  };

	  Slider.prototype.render = function render() {
	    var _this3 = this;

	    var settings;
	    var newProps;
	    if (this.state.breakpoint) {
	      newProps = this.props.responsive.filter(function (resp) {
	        return resp.breakpoint === _this3.state.breakpoint;
	      });
	      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _objectAssign2.default)({}, _defaultProps2.default, this.props, newProps[0].settings);
	    } else {
	      settings = (0, _objectAssign2.default)({}, _defaultProps2.default, this.props);
	    }

	    // force scrolling by one if centerMode is on
	    if (settings.centerMode) {
	      if (settings.slidesToScroll > 1 && (undefined) !== 'production') {
	        console.warn('slidesToScroll should be equal to 1 in centerMode, you are using ' + settings.slidesToScroll);
	      }
	      settings.slidesToScroll = 1;
	    }
	    // force showing one slide and scrolling by one if the fade mode is on
	    if (settings.fade) {
	      if (settings.slidesToShow > 1 && (undefined) !== 'production') {
	        console.warn('slidesToShow should be equal to 1 when fade is true, you\'re using ' + settings.slidesToShow);
	      }
	      if (settings.slidesToScroll > 1 && (undefined) !== 'production') {
	        console.warn('slidesToScroll should be equal to 1 when fade is true, you\'re using ' + settings.slidesToScroll);
	      }
	      settings.slidesToShow = 1;
	      settings.slidesToScroll = 1;
	    }

	    // makes sure that children is an array, even when there is only 1 child
	    var children = _react2.default.Children.toArray(this.props.children);

	    // Children may contain false or null, so we should filter them
	    // children may also contain string filled with spaces (in certain cases where we use jsx strings)
	    children = children.filter(function (child) {
	      if (typeof child === 'string') {
	        return !!child.trim();
	      }
	      return !!child;
	    });

	    if (settings === 'unslick') {
	      settings = (0, _objectAssign2.default)({ unslick: true }, _defaultProps2.default, this.props);
	      settings.slidesToShow = children.length;
	      settings.className += ' unslicked';
	    } else if (children.length <= settings.slidesToShow) {
	      settings.unslick = true;
	      settings.slidesToShow = children.length;
	      settings.className += ' unslicked';
	    }
	    return _react2.default.createElement(
	      _innerSlider.InnerSlider,
	      _extends({ ref: this.innerSliderRefHandler }, settings),
	      children
	    );
	  };

	  return Slider;
	}(_react2.default.Component);

	exports.default = Slider;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.InnerSlider = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _eventHandlers = __webpack_require__(4);

	var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

	var _helpers = __webpack_require__(9);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _initialState = __webpack_require__(11);

	var _initialState2 = _interopRequireDefault(_initialState);

	var _defaultProps = __webpack_require__(12);

	var _defaultProps2 = _interopRequireDefault(_defaultProps);

	var _createReactClass = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"create-react-class\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _classnames = __webpack_require__(13);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _innerSliderUtils = __webpack_require__(10);

	var _trackHelper = __webpack_require__(5);

	var _track = __webpack_require__(14);

	var _dots = __webpack_require__(15);

	var _arrows = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InnerSlider = exports.InnerSlider = (0, _createReactClass2.default)({
	  displayName: 'InnerSlider',

	  mixins: [_helpers2.default, _eventHandlers2.default],
	  list: null, // wraps the track
	  track: null, // component that rolls out like a film
	  listRefHandler: function listRefHandler(ref) {
	    this.list = ref;
	  },
	  trackRefHandler: function trackRefHandler(ref) {
	    this.track = ref;
	  },
	  getInitialState: function getInitialState() {
	    return _extends({}, _initialState2.default, {
	      currentSlide: this.props.initialSlide
	    });
	  },
	  componentWillMount: function componentWillMount() {
	    if (this.props.init) {
	      this.props.init();
	    }
	    if (this.props.lazyLoad) {
	      var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)((0, _objectAssign2.default)({}, this.props, this.state));
	      if (slidesToLoad.length > 0) {
	        this.setState(function (prevState, props) {
	          return { lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad) };
	        });
	        if (this.props.onLazyLoad) {
	          this.props.onLazyLoad(slidesToLoad);
	        }
	      }
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var spec = (0, _objectAssign2.default)({ listRef: this.list, trackRef: this.track }, this.props);
	    var initState = (0, _innerSliderUtils.initializedState)(spec);
	    (0, _objectAssign2.default)(spec, { slideIndex: initState.currentSlide }, initState);
	    var targetLeft = (0, _trackHelper.getTrackLeft)(spec);
	    (0, _objectAssign2.default)(spec, { left: targetLeft });
	    var trackStyle = (0, _trackHelper.getTrackCSS)(spec);
	    initState['trackStyle'] = trackStyle;
	    this.setState(initState, function () {
	      _this.adaptHeight();
	      _this.autoPlay(); // it doesn't have to be here
	    });

	    // To support server-side rendering
	    if (!window) {
	      return;
	    }
	    if (window.addEventListener) {
	      window.addEventListener('resize', this.onWindowResized);
	    } else {
	      window.attachEvent('onresize', this.onWindowResized);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationEndCallback) {
	      clearTimeout(this.animationEndCallback);
	    }
	    if (window.addEventListener) {
	      window.removeEventListener('resize', this.onWindowResized);
	    } else {
	      window.detachEvent('onresize', this.onWindowResized);
	    }
	    if (this.autoplayTimer) {
	      clearInterval(this.autoplayTimer);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    var spec = (0, _objectAssign2.default)({ listRef: this.list, trackRef: this.track }, nextProps, this.state);
	    var updatedState = (0, _innerSliderUtils.initializedState)(spec);
	    (0, _objectAssign2.default)(spec, { slideIndex: updatedState.currentSlide }, updatedState);
	    var targetLeft = (0, _trackHelper.getTrackLeft)(spec);
	    (0, _objectAssign2.default)(spec, { left: targetLeft });
	    var trackStyle = (0, _trackHelper.getTrackCSS)(spec);
	    // not setting trackStyle in other cases because no prop change can trigger slideChange
	    if (_react2.default.Children.count(this.props.children) !== _react2.default.Children.count(nextProps.children)) {
	      updatedState['trackStyle'] = trackStyle;
	    }
	    this.setState(updatedState, function () {
	      if (_this2.state.currentSlide >= _react2.default.Children.count(nextProps.children)) {
	        _this2.changeSlide({
	          message: 'index',
	          index: _react2.default.Children.count(nextProps.children) - nextProps.slidesToShow,
	          currentSlide: _this2.state.currentSlide
	        });
	      }
	      // the following doesn't have to be this way
	      if (!nextProps.autoplay) _this2.pause();else _this2.autoPlay(nextProps.autoplay);
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    var _this3 = this;

	    var images = document.querySelectorAll('.slick-slide img');
	    images.forEach(function (image) {
	      if (!image.onload) {
	        image.onload = function () {
	          return setTimeout(function () {
	            return _this3.update(_this3.props);
	          }, _this3.props.speed);
	        };
	      }
	    });
	    if (this.props.reInit) {
	      this.props.reInit();
	    }
	    if (this.props.lazyLoad) {
	      var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)((0, _objectAssign2.default)({}, this.props, this.state));
	      if (slidesToLoad.length > 0) {
	        this.setState(function (prevState, props) {
	          return { lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad) };
	        });
	        if (this.props.onLazyLoad) {
	          this.props.onLazyLoad(slidesToLoad);
	        }
	      }
	    }
	    // if (this.props.onLazyLoad) {
	    //   this.props.onLazyLoad([leftMostSlide])
	    // }
	    this.adaptHeight();
	  },
	  onWindowResized: function onWindowResized() {
	    this.update(this.props);
	    // animating state should be cleared while resizing, otherwise autoplay stops working
	    this.setState({
	      animating: false
	    });
	    clearTimeout(this.animationEndCallback);
	    delete this.animationEndCallback;
	  },
	  slickPrev: function slickPrev() {
	    var _this4 = this;

	    // this and fellow methods are wrapped in setTimeout
	    // to make sure initialize setState has happened before
	    // any of such methods are called
	    setTimeout(function () {
	      return _this4.changeSlide({ message: 'previous' });
	    }, 0);
	  },
	  slickNext: function slickNext() {
	    var _this5 = this;

	    setTimeout(function () {
	      return _this5.changeSlide({ message: 'next' });
	    }, 0);
	  },
	  slickGoTo: function slickGoTo(slide) {
	    var _this6 = this;

	    slide = Number(slide);
	    !isNaN(slide) && setTimeout(function () {
	      return _this6.changeSlide({
	        message: 'index',
	        index: slide,
	        currentSlide: _this6.state.currentSlide
	      });
	    }, 0);
	  },
	  render: function render() {
	    var className = (0, _classnames2.default)('slick-initialized', 'slick-slider', this.props.className, {
	      'slick-vertical': this.props.vertical
	    });
	    var spec = (0, _objectAssign2.default)({}, this.props, this.state);
	    var trackProps = (0, _innerSliderUtils.extractObject)(spec, ['fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth', 'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll', 'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding']);
	    trackProps.focusOnSelect = this.props.focusOnSelect ? this.selectHandler : null;

	    var dots;
	    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
	      var dotProps = (0, _innerSliderUtils.extractObject)(spec, ['dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll', 'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots']);
	      dotProps.clickHandler = this.changeSlide;
	      dots = _react2.default.createElement(_dots.Dots, dotProps);
	    }

	    var prevArrow, nextArrow;
	    var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ['infinite', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow']);
	    arrowProps.clickHandler = this.changeSlide;

	    if (this.props.arrows) {
	      prevArrow = _react2.default.createElement(_arrows.PrevArrow, arrowProps);
	      nextArrow = _react2.default.createElement(_arrows.NextArrow, arrowProps);
	    }

	    var verticalHeightStyle = null;

	    if (this.props.vertical) {
	      verticalHeightStyle = {
	        height: this.state.listHeight
	      };
	    }

	    var centerPaddingStyle = null;

	    if (this.props.vertical === false) {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: '0px ' + this.props.centerPadding
	        };
	      }
	    } else {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: this.props.centerPadding + ' 0px'
	        };
	      }
	    }

	    var listStyle = (0, _objectAssign2.default)({}, verticalHeightStyle, centerPaddingStyle);
	    var listProps = {
	      className: 'slick-list',
	      style: listStyle,
	      onMouseDown: this.swipeStart,
	      onMouseMove: this.state.dragging ? this.swipeMove : null,
	      onMouseUp: this.swipeEnd,
	      onMouseLeave: this.state.dragging ? this.swipeEnd : null,
	      onTouchStart: this.swipeStart,
	      onTouchMove: this.state.dragging ? this.swipeMove : null,
	      onTouchEnd: this.swipeEnd,
	      onTouchCancel: this.state.dragging ? this.swipeEnd : null,
	      onKeyDown: this.props.accessibility ? this.keyHandler : null
	    };

	    var innerSliderProps = {
	      className: className,
	      onMouseEnter: this.onInnerSliderEnter,
	      onMouseLeave: this.onInnerSliderLeave,
	      onMouseOver: this.onInnerSliderOver,
	      dir: 'ltr'
	    };

	    if (this.props.unslick) {
	      listProps = { className: 'slick-list' };
	      innerSliderProps = { className: className };
	    }

	    return _react2.default.createElement(
	      'div',
	      innerSliderProps,
	      !this.props.unslick ? prevArrow : '',
	      _react2.default.createElement(
	        'div',
	        _extends({ ref: this.listRefHandler }, listProps),
	        _react2.default.createElement(
	          _track.Track,
	          _extends({ ref: this.trackRefHandler }, trackProps),
	          this.props.children
	        )
	      ),
	      !this.props.unslick ? nextArrow : '',
	      !this.props.unslick ? dots : ''
	    );
	  }
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _trackHelper = __webpack_require__(5);

	var _helpers = __webpack_require__(9);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _trackUtils = __webpack_require__(8);

	var _innerSliderUtils = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EventHandlers = {
	  // Event handler for previous and next
	  // gets called if slide is changed via arrows or dots but not swiping/dragging
	  changeSlide: function changeSlide(options) {
	    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
	    var _props = this.props,
	        slidesToScroll = _props.slidesToScroll,
	        slidesToShow = _props.slidesToShow,
	        centerMode = _props.centerMode,
	        rtl = _props.rtl;
	    var _state = this.state,
	        slideCount = _state.slideCount,
	        currentSlide = _state.currentSlide;

	    unevenOffset = slideCount % slidesToScroll !== 0;
	    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

	    if (options.message === 'previous') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
	      targetSlide = currentSlide - slideOffset;
	      if (this.props.lazyLoad && !this.props.infinite) {
	        previousInt = currentSlide - slideOffset;
	        targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
	      }
	    } else if (options.message === 'next') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
	      targetSlide = currentSlide + slideOffset;
	      if (this.props.lazyLoad && !this.props.infinite) {
	        targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
	      }
	    } else if (options.message === 'dots') {
	      // Click on dots
	      targetSlide = options.index * options.slidesToScroll;
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	    } else if (options.message === 'children') {
	      // Click on the slides
	      targetSlide = options.index;
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	      if (this.props.infinite) {
	        var direction = (0, _trackUtils.siblingDirection)({ currentSlide: currentSlide, targetSlide: targetSlide, slidesToShow: slidesToShow, centerMode: centerMode, slideCount: slideCount, rtl: rtl });
	        if (targetSlide > options.currentSlide && direction === 'left') {
	          targetSlide = targetSlide - slideCount;
	        } else if (targetSlide < options.currentSlide && direction === 'right') {
	          targetSlide = targetSlide + slideCount;
	        }
	      }
	    } else if (options.message === 'index') {
	      targetSlide = Number(options.index);
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	    }
	    this.slideHandler(targetSlide);
	  },

	  // Accessiblity handler for previous and next
	  keyHandler: function keyHandler(e) {
	    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
	    if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	      if (e.keyCode === 37 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'next' : 'previous'
	        });
	      } else if (e.keyCode === 39 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'previous' : 'next'
	        });
	      }
	    }
	  },
	  // Focus on selecting a slide (click handler on track)
	  selectHandler: function selectHandler(options) {
	    this.changeSlide(options);
	  },
	  // invoked when swiping/dragging starts (just once)
	  swipeStart: function swipeStart(e) {
	    if (e.target.tagName === 'IMG') {
	      e.preventDefault();
	    }
	    var touches, posX, posY;

	    // the condition after or looked redundant
	    if (this.props.swipe === false) {
	      // || ('ontouchend' in document && this.props.swipe === false)) {
	      return;
	    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
	      return;
	    }
	    posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
	    posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
	    this.setState({
	      dragging: true,
	      touchObject: {
	        startX: posX,
	        startY: posY,
	        curX: posX,
	        curY: posY
	      }
	    });
	  },
	  // continuous invokation while swiping/dragging is going on
	  swipeMove: function swipeMove(e) {
	    if (!this.state.dragging) {
	      e.preventDefault();
	      return;
	    }
	    if (this.state.scrolling) {
	      return;
	    }
	    if (this.state.animating) {
	      e.preventDefault();
	      return;
	    }
	    if (this.props.vertical && this.props.swipeToSlide && this.props.verticalSwiping) {
	      e.preventDefault();
	    }
	    var swipeLeft;
	    var curLeft, positionOffset;
	    var touchObject = this.state.touchObject;

	    curLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: this.state.currentSlide,
	      trackRef: this.track
	    }, this.props, this.state));
	    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
	    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
	    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
	    var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

	    if (!this.props.verticalSwiping && !this.state.swiping && verticalSwipeLength > 10) {
	      this.setState({
	        scrolling: true
	      });
	      return;
	    }

	    if (this.props.verticalSwiping) {
	      touchObject.swipeLength = verticalSwipeLength;
	    }

	    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);

	    if (this.props.verticalSwiping) {
	      positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
	    }

	    var currentSlide = this.state.currentSlide;
	    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll); // this might not be correct, using getDotCount may be more accurate
	    var swipeDirection = (0, _innerSliderUtils.getSwipeDirection)(this.state.touchObject, this.props.verticalSwiping);
	    var touchSwipeLength = touchObject.swipeLength;

	    if (this.props.infinite === false) {
	      if (currentSlide === 0 && swipeDirection === 'right' || currentSlide + 1 >= dotCount && swipeDirection === 'left') {
	        touchSwipeLength = touchObject.swipeLength * this.props.edgeFriction;

	        if (this.state.edgeDragged === false && this.props.edgeEvent) {
	          this.props.edgeEvent(swipeDirection);
	          this.setState({ edgeDragged: true });
	        }
	      }
	    }
	    if (this.state.swiped === false && this.props.swipeEvent) {
	      this.props.swipeEvent(swipeDirection);
	      this.setState({ swiped: true });
	    }

	    if (!this.props.vertical) {
	      if (!this.props.rtl) {
	        swipeLeft = curLeft + touchSwipeLength * positionOffset;
	      } else {
	        swipeLeft = curLeft - touchSwipeLength * positionOffset;
	      }
	    } else {
	      swipeLeft = curLeft + touchSwipeLength * (this.state.listHeight / this.state.listWidth) * positionOffset;
	    }

	    if (this.props.verticalSwiping) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    }

	    this.setState({
	      touchObject: touchObject,
	      swipeLeft: swipeLeft,
	      trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: swipeLeft }, this.props, this.state))
	    });

	    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
	      return;
	    }
	    if (touchObject.swipeLength > 10) {
	      this.setState({
	        swiping: true
	      });
	      e.preventDefault();
	    }
	  },
	  getNavigableIndexes: function getNavigableIndexes() {
	    var max = void 0;
	    var breakPoint = 0;
	    var counter = 0;
	    var indexes = [];

	    if (!this.props.infinite) {
	      max = this.state.slideCount;
	    } else {
	      breakPoint = this.props.slidesToShow * -1;
	      counter = this.props.slidesToShow * -1;
	      max = this.state.slideCount * 2;
	    }

	    while (breakPoint < max) {
	      indexes.push(breakPoint);
	      breakPoint = counter + this.props.slidesToScroll;

	      counter += this.props.slidesToScroll <= this.props.slidesToShow ? this.props.slidesToScroll : this.props.slidesToShow;
	    }

	    return indexes;
	  },
	  checkNavigable: function checkNavigable(index) {
	    var navigables = this.getNavigableIndexes();
	    var prevNavigable = 0;

	    if (index > navigables[navigables.length - 1]) {
	      index = navigables[navigables.length - 1];
	    } else {
	      for (var n in navigables) {
	        if (index < navigables[n]) {
	          index = prevNavigable;
	          break;
	        }

	        prevNavigable = navigables[n];
	      }
	    }

	    return index;
	  },
	  getSlideCount: function getSlideCount() {
	    var _this = this;

	    var centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;

	    if (this.props.swipeToSlide) {
	      var swipedSlide = void 0;

	      var slickList = _reactDom2.default.findDOMNode(this.list);

	      var slides = slickList.querySelectorAll('.slick-slide');

	      Array.from(slides).every(function (slide) {
	        if (!_this.props.vertical) {
	          if (slide.offsetLeft - centerOffset + (0, _innerSliderUtils.getWidth)(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        } else {
	          if (slide.offsetTop + (0, _innerSliderUtils.getHeight)(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        }

	        return true;
	      });

	      if (!swipedSlide) {
	        return 0;
	      }
	      var currentIndex = this.props.rtl === true ? this.state.slideCount - this.state.currentSlide : this.state.currentSlide;
	      var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;

	      return slidesTraversed;
	    } else {
	      return this.props.slidesToScroll;
	    }
	  },

	  swipeEnd: function swipeEnd(e) {
	    if (!this.state.dragging) {
	      if (this.props.swipe) {
	        e.preventDefault();
	      }
	      return;
	    }
	    var touchObject = this.state.touchObject;
	    var minSwipe = this.state.listWidth / this.props.touchThreshold;
	    var swipeDirection = (0, _innerSliderUtils.getSwipeDirection)(touchObject, this.props.verticalSwiping);

	    if (this.props.verticalSwiping) {
	      minSwipe = this.state.listHeight / this.props.touchThreshold;
	    }

	    var wasScrolling = this.state.scrolling;
	    // reset the state of touch related state variables.
	    this.setState({
	      dragging: false,
	      edgeDragged: false,
	      scrolling: false,
	      swiping: false,
	      swiped: false,
	      swipeLeft: null,
	      touchObject: {}
	    });
	    if (wasScrolling) {
	      return;
	    }

	    // Fix for #13
	    if (!touchObject.swipeLength) {
	      return;
	    }
	    if (touchObject.swipeLength > minSwipe) {
	      e.preventDefault();

	      if (this.props.onSwipe) {
	        this.props.onSwipe(swipeDirection);
	      }

	      var slideCount = void 0,
	          newSlide = void 0;

	      switch (swipeDirection) {

	        case 'left':
	        case 'up':
	          newSlide = this.state.currentSlide + this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.setState({ currentDirection: 0 });
	          break;

	        case 'right':
	        case 'down':
	          newSlide = this.state.currentSlide - this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.setState({ currentDirection: 1 });
	          break;

	        default:
	          slideCount = this.state.currentSlide;

	      }
	      this.slideHandler(slideCount);
	    } else {
	      // Adjust the track back to it's original position.
	      var currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, this.props, this.state));

	      this.setState({
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      });
	    }
	  },
	  onInnerSliderEnter: function onInnerSliderEnter(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  onInnerSliderOver: function onInnerSliderOver(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  onInnerSliderLeave: function onInnerSliderLeave(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.autoPlay();
	    }
	  }
	};

	exports.default = EventHandlers;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = undefined;

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _trackUtils = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// checks if spec is the superset of keys in keysArray, i.e., spec contains all the keys from keysArray
	var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
	  return keysArray.reduce(function (value, key) {
	    return value && spec.hasOwnProperty(key);
	  }, true) ? null : console.error('Keys Missing', spec);
	};

	var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

	  var trackWidth, trackHeight;
	  var trackChildren = spec.slideCount + 2 * spec.slidesToShow; // this should probably be getTotalSlides
	  if (!spec.vertical) {
	    trackWidth = (0, _trackUtils.getTotalSlides)(spec) * spec.slideWidth;
	  } else {
	    trackHeight = trackChildren * spec.slideHeight;
	  }

	  var style = {
	    opacity: 1,
	    WebkitTransform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transition: '',
	    WebkitTransition: '',
	    msTransform: !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)'
	  };
	  if (spec.fade) {
	    style = {
	      opacity: 1
	    };
	  }

	  if (trackWidth) {
	    (0, _objectAssign2.default)(style, { width: trackWidth });
	  }

	  if (trackHeight) {
	    (0, _objectAssign2.default)(style, { height: trackHeight });
	  }

	  // Fallback for IE8
	  if (window && !window.addEventListener && window.attachEvent) {
	    if (!spec.vertical) {
	      style.marginLeft = spec.left + 'px';
	    } else {
	      style.marginTop = spec.left + 'px';
	    }
	  }

	  return style;
	};

	var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);

	  var style = getTrackCSS(spec);
	  // useCSS is true by default so it can be undefined
	  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
	  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
	  return style;
	};

	// gets total length of track that's on the left side of current slide
	var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {

	  if (spec.unslick) {
	    return 0;
	  }

	  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);

	  var slideIndex = spec.slideIndex,
	      trackRef = spec.trackRef,
	      infinite = spec.infinite,
	      centerMode = spec.centerMode,
	      slideCount = spec.slideCount,
	      slidesToShow = spec.slidesToShow,
	      slidesToScroll = spec.slidesToScroll,
	      slideWidth = spec.slideWidth,
	      listWidth = spec.listWidth,
	      variableWidth = spec.variableWidth,
	      slideHeight = spec.slideHeight,
	      fade = spec.fade,
	      vertical = spec.vertical;


	  var slideOffset = 0;
	  var targetLeft;
	  var targetSlide;
	  var verticalOffset = 0;

	  if (fade || spec.slideCount === 1) {
	    return 0;
	  }

	  var slidesToOffset = 0;
	  if (infinite) {
	    slidesToOffset = -(0, _trackUtils.getPreClones)(spec); // bring active slide to the beginning of visual area
	    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children
	    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
	      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
	    }
	    // shift current slide to center of the frame
	    if (centerMode) {
	      slidesToOffset += parseInt(slidesToShow / 2);
	    }
	  } else {
	    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
	      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
	    }
	    if (centerMode) {
	      slidesToOffset = parseInt(slidesToShow / 2);
	    }
	  }
	  slideOffset = slidesToOffset * slideWidth;
	  verticalOffset = slidesToOffset * slideHeight;

	  if (!vertical) {
	    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
	  } else {
	    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
	  }

	  if (variableWidth === true) {
	    var targetSlideIndex;
	    var lastSlide = _reactDom2.default.findDOMNode(trackRef).children[slideCount - 1];
	    targetSlideIndex = slideIndex + (0, _trackUtils.getPreClones)(spec);
	    targetSlide = _reactDom2.default.findDOMNode(trackRef).childNodes[targetSlideIndex];
	    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	    if (centerMode === true) {
	      targetSlideIndex = infinite ? slideIndex + (0, _trackUtils.getPreClones)(spec) : slideIndex;
	      targetSlide = _reactDom2.default.findDOMNode(trackRef).children[targetSlideIndex];
	      targetLeft = 0;
	      for (var slide = 0; slide < targetSlideIndex; slide++) {
	        targetLeft -= _reactDom2.default.findDOMNode(trackRef).children[slide].offsetWidth;
	      }
	      targetLeft -= parseInt(spec.centerPadding);
	      targetLeft += (listWidth - targetSlide.offsetWidth) / 2;
	    }
	  }

	  return targetLeft;
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.siblingDirection = siblingDirection;
	exports.slidesOnRight = slidesOnRight;
	exports.slidesOnLeft = slidesOnLeft;
	var getPreClones = exports.getPreClones = function getPreClones(spec) {
	  if (spec.unslick || !spec.infinite) {
	    return 0;
	  }
	  if (spec.variableWidth) {
	    return spec.slideCount;
	  }
	  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
	};

	var getPostClones = exports.getPostClones = function getPostClones(spec) {
	  if (spec.unslick || !spec.infinite) {
	    return 0;
	  }
	  return spec.slideCount;
	};

	var getTotalSlides = exports.getTotalSlides = function getTotalSlides(spec) {
	  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
	};

	function siblingDirection(_ref) {
	  var currentSlide = _ref.currentSlide,
	      targetSlide = _ref.targetSlide,
	      slidesToShow = _ref.slidesToShow,
	      centerMode = _ref.centerMode,
	      rtl = _ref.rtl;

	  if (targetSlide > currentSlide) {
	    if (targetSlide > currentSlide + slidesOnRight(slidesToShow, centerMode, rtl)) {
	      return 'left';
	    }
	    return 'right';
	  } else {
	    if (targetSlide < currentSlide - slidesOnLeft(slidesToShow, centerMode, rtl)) {
	      return 'right';
	    }
	    return 'left';
	  }
	}

	function slidesOnRight(slidesToShow, centerMode, rtl) {
	  // returns no of slides on the right of active slide
	  if (centerMode) {
	    var right = (slidesToShow - 1) / 2 + 1;
	    if (rtl && slidesToShow % 2 === 0) right += 1;
	    return right;
	  }
	  if (rtl) {
	    return 0;
	  }
	  return slidesToShow - 1;
	}

	function slidesOnLeft(slidesToShow, centerMode, rtl) {
	  // returns no of slides on the left of active slide
	  if (centerMode) {
	    var left = (slidesToShow - 1) / 2 + 1;
	    if (!rtl && slidesToShow % 2 === 0) left += 1;
	    return left;
	  }
	  if (rtl) {
	    return slidesToShow - 1;
	  }
	  return 0;
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _trackHelper = __webpack_require__(5);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _innerSliderUtils = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var helpers = {
	  update: function update(props) {
	    var recursionLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	    var slickList = _reactDom2.default.findDOMNode(this.list);
	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = (0, _innerSliderUtils.getWidth)(slickList);
	    var trackWidth = (0, _innerSliderUtils.getWidth)(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;

	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      if (props.centerPadding.slice(-1) === '%') {
	        centerPaddingAdj *= listWidth / 100;
	      }
	      slideWidth = Math.ceil(((0, _innerSliderUtils.getWidth)(slickList) - centerPaddingAdj) / props.slidesToShow);
	    } else {
	      slideWidth = Math.ceil((0, _innerSliderUtils.getWidth)(slickList));
	    }

	    var slideHeight = (0, _innerSliderUtils.getHeight)(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;

	    // pause slider if autoplay is set to false
	    if (!props.autoplay) {
	      this.pause();
	    } else {
	      this.autoPlay(props.autoplay);
	    }

	    var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)({}, this.props, this.state);
	    if (slidesToLoad.length > 0 && this.props.onLazyLoad) {
	      this.props.onLazyLoad(slidesToLoad);
	    }
	    var prevLazyLoadedList = this.state.lazyLoadedList;
	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      slideHeight: slideHeight,
	      listHeight: listHeight,
	      lazyLoadedList: prevLazyLoadedList.concat(slidesToLoad)
	    }, function () {
	      if (!slideWidth) {
	        if (recursionLevel < 2) {
	          this.update(this.props, recursionLevel + 1);
	        }
	      }
	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

	      this.setState({ trackStyle: trackStyle });
	    });
	  },
	  adaptHeight: function adaptHeight() {
	    if (this.props.adaptiveHeight) {
	      var selector = '[data-index="' + this.state.currentSlide + '"]';
	      if (this.list) {
	        var slickList = _reactDom2.default.findDOMNode(this.list);
	        var elem = slickList.querySelector(selector) || {};
	        slickList.style.height = (elem.offsetHeight || 0) + 'px';
	      }
	    }
	  },
	  slideHandler: function slideHandler(index) {
	    var _this = this;

	    // index is target slide index
	    // Functionality of animateSlide and postSlide is merged into this function
	    var animationTargetSlide, finalTargetSlide;
	    var animationTargetLeft, finalTargetLeft;
	    var callback;

	    if (this.props.waitForAnimate && this.state.animating) {
	      return;
	    }

	    if (this.props.fade) {
	      finalTargetSlide = this.state.currentSlide;

	      // Don't change slide if infinite=false and target slide is out of range
	      if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
	        return;
	      }

	      //  Shifting animationTargetSlide back into the range
	      if (index < 0) {
	        animationTargetSlide = index + this.state.slideCount;
	      } else if (index >= this.state.slideCount) {
	        animationTargetSlide = index - this.state.slideCount;
	      } else {
	        animationTargetSlide = index;
	      }

	      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(animationTargetSlide) < 0) {
	        this.setState(function (prevState, props) {
	          return { lazyLoadedList: prevState.lazyLoadedList.concat(animationTargetSlide) };
	        });
	        if (this.props.onLazyLoad) {
	          this.props.onLazyLoad([animationTargetSlide]);
	        }
	      }

	      callback = function callback() {
	        _this.setState({
	          animating: false
	        });
	        if (_this.props.afterChange) {
	          _this.props.afterChange(animationTargetSlide);
	        }
	        delete _this.animationEndCallback;
	      };

	      this.setState({
	        animating: true,
	        currentSlide: animationTargetSlide
	      }, function () {
	        if (_this.props.asNavFor && _this.props.asNavFor.innerSlider.state.currentSlide !== _this.state.currentSlide) {
	          _this.props.asNavFor.innerSlider.slideHandler(index);
	        }
	        _this.animationEndCallback = setTimeout(callback, _this.props.speed);
	      });

	      if (this.props.beforeChange) {
	        this.props.beforeChange(this.state.currentSlide, animationTargetSlide);
	      }

	      this.autoPlay();
	      return;
	    }

	    animationTargetSlide = index;

	    /*
	      @TODO: Make sure to leave no bug in the code below
	      start: critical checkpoint
	    */
	    if (animationTargetSlide < 0) {
	      if (this.props.infinite === false) {
	        finalTargetSlide = 0;
	      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
	        finalTargetSlide = this.state.slideCount - this.state.slideCount % this.props.slidesToScroll;
	      } else {
	        finalTargetSlide = this.state.slideCount + animationTargetSlide;
	      }
	    } else if (this.props.centerMode && animationTargetSlide >= this.state.slideCount) {
	      if (this.props.infinite === false) {
	        animationTargetSlide = this.state.slideCount - 1;
	        finalTargetSlide = this.state.slideCount - 1;
	      } else {
	        animationTargetSlide = this.state.slideCount;
	        finalTargetSlide = 0;
	      }
	    } else if (animationTargetSlide >= this.state.slideCount) {
	      if (this.props.infinite === false) {
	        finalTargetSlide = this.state.slideCount - this.props.slidesToShow;
	      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
	        finalTargetSlide = 0;
	      } else {
	        finalTargetSlide = animationTargetSlide - this.state.slideCount;
	      }
	    } else if (this.state.currentSlide + this.slidesToShow < this.state.slideCount && animationTargetSlide + this.props.slidesToShow >= this.state.slideCount) {
	      if (this.props.infinite === false) {
	        finalTargetSlide = this.state.slideCount - this.props.slidesToShow;
	      } else {
	        if ((this.state.slideCount - animationTargetSlide) % this.props.slidesToScroll !== 0) {
	          finalTargetSlide = this.state.slideCount - this.props.slidesToShow;
	        } else {
	          finalTargetSlide = animationTargetSlide;
	        }
	      }
	    } else {
	      finalTargetSlide = animationTargetSlide;
	    }

	    /* 
	      stop: critical checkpoint
	    */

	    animationTargetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: animationTargetSlide,
	      trackRef: this.track
	    }, this.props, this.state));

	    finalTargetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: finalTargetSlide,
	      trackRef: this.track
	    }, this.props, this.state));

	    if (this.props.infinite === false) {
	      if (animationTargetLeft === finalTargetLeft) {
	        animationTargetSlide = finalTargetSlide;
	      }
	      animationTargetLeft = finalTargetLeft;
	    }

	    if (this.props.beforeChange) {
	      this.props.beforeChange(this.state.currentSlide, finalTargetSlide);
	    }
	    if (this.props.lazyLoad) {
	      var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)((0, _objectAssign2.default)({}, this.props, this.state, { currentSlide: animationTargetSlide }));
	      if (slidesToLoad.length > 0) {
	        this.setState(function (prevState, props) {
	          return { lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad) };
	        });
	        if (this.props.onLazyLoad) {
	          this.props.onLazyLoad(slidesToLoad);
	        }
	      }
	    }
	    // Slide Transition happens here.
	    // animated transition happens to target Slide and
	    // non - animated transition happens to current Slide
	    // If CSS transitions are false, directly go the current slide.

	    if (this.props.useCSS === false) {
	      this.setState({
	        currentSlide: finalTargetSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: finalTargetLeft }, this.props, this.state))
	      }, function () {
	        if (this.props.afterChange) {
	          this.props.afterChange(finalTargetSlide);
	        }
	      });
	    } else {

	      var nextStateChanges = {
	        animating: false,
	        currentSlide: finalTargetSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: finalTargetLeft }, this.props, this.state)),
	        swipeLeft: null
	      };
	      callback = function callback() {
	        _this.setState(nextStateChanges, function () {
	          if (_this.props.afterChange) {
	            _this.props.afterChange(finalTargetSlide);
	          }
	          delete _this.animationEndCallback;
	        });
	      };
	      this.setState({
	        animating: true,
	        currentSlide: finalTargetSlide,
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: animationTargetLeft }, this.props, this.state))
	      }, function () {
	        if (_this.props.asNavFor && _this.props.asNavFor.innerSlider.state.currentSlide !== _this.state.currentSlide) {
	          _this.props.asNavFor.innerSlider.slideHandler(index);
	        }
	        _this.animationEndCallback = setTimeout(callback, _this.props.speed);
	      });
	    }

	    this.autoPlay();
	  },
	  play: function play() {
	    var nextIndex;

	    // if (!this.state.mounted) {
	    //   return false
	    // }

	    if (this.props.rtl) {
	      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
	    } else {
	      if ((0, _innerSliderUtils.canGoNext)(_extends({}, this.props, this.state))) {
	        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
	      } else {
	        return false;
	      }
	    }

	    this.slideHandler(nextIndex);
	  },
	  autoPlay: function autoPlay() {
	    var autoplay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    if (this.autoplayTimer) {
	      clearTimeout(this.autoplayTimer);
	    }
	    if (autoplay || this.props.autoplay) {
	      this.autoplayTimer = setTimeout(this.play, this.props.autoplaySpeed);
	    }
	  },
	  pause: function pause() {
	    if (this.autoplayTimer) {
	      clearTimeout(this.autoplayTimer);
	      this.autoplayTimer = null;
	    }
	  }
	};

	exports.default = helpers;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.initializedState = exports.extractObject = exports.canGoNext = exports.getSwipeDirection = exports.getHeight = exports.getWidth = exports.slidesOnRight = exports.slidesOnLeft = exports.lazyEndIndex = exports.lazyStartIndex = exports.getRequiredLazySlides = exports.getOnDemandLazySlides = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// return list of slides that need to be loaded and are not in lazyLoadedList
	var getOnDemandLazySlides = exports.getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
	  var onDemandSlides = [];
	  var startIndex = lazyStartIndex(spec);
	  var endIndex = lazyEndIndex(spec);
	  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
	    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
	      onDemandSlides.push(slideIndex);
	    }
	  }
	  return onDemandSlides;
	};

	// return list of slides that need to be present
	var getRequiredLazySlides = exports.getRequiredLazySlides = function getRequiredLazySlides(spec) {
	  var requiredSlides = [];
	  var startIndex = lazyStartIndex(spec);
	  var endIndex = lazyEndIndex(spec);
	  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
	    requiredSlides.push(slideIndex);
	  }
	  return requiredSlides;
	};

	// startIndex that needs to be present
	var lazyStartIndex = exports.lazyStartIndex = function lazyStartIndex(spec) {
	  return spec.currentSlide - slidesOnLeft(spec);
	};
	// endIndex that needs to be present but is exclusive
	var lazyEndIndex = exports.lazyEndIndex = function lazyEndIndex(spec) {
	  return spec.currentSlide + slidesOnRight(spec);
	};

	// no of slides on left of current in active frame
	var slidesOnLeft = exports.slidesOnLeft = function slidesOnLeft(spec) {
	  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
	};

	// no of slides on right of current in active frame
	var slidesOnRight = exports.slidesOnRight = function slidesOnRight(spec) {
	  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
	};

	// get width of an element
	var getWidth = exports.getWidth = function getWidth(elem) {
	  return elem && elem.offsetWidth || 0;
	};

	// get height of an element
	var getHeight = exports.getHeight = function getHeight(elem) {
	  return elem && elem.offsetHeight || 0;
	};

	// in case of swipe event, get direction of the swipe event
	var getSwipeDirection = exports.getSwipeDirection = function getSwipeDirection(touchObject) {
	  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var xDist, yDist, r, swipeAngle;
	  xDist = touchObject.startX - touchObject.curX;
	  yDist = touchObject.startY - touchObject.curY;
	  r = Math.atan2(yDist, xDist);
	  swipeAngle = Math.round(r * 180 / Math.PI);
	  if (swipeAngle < 0) {
	    swipeAngle = 360 - Math.abs(swipeAngle);
	  }
	  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
	    return 'left';
	  }
	  if (swipeAngle >= 135 && swipeAngle <= 225) {
	    return 'right';
	  }
	  if (verticalSwiping === true) {
	    if (swipeAngle >= 35 && swipeAngle <= 135) {
	      return 'up';
	    } else {
	      return 'down';
	    }
	  }

	  return 'vertical';
	};

	// whether or not we can go next
	var canGoNext = exports.canGoNext = function canGoNext(spec) {
	  var canGo = true;
	  if (!spec.infinite) {
	    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
	      canGo = false;
	    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
	      canGo = false;
	    }
	  }
	  return canGo;
	};

	// given an object and a list of keys, return new object with given keys
	var extractObject = exports.extractObject = function extractObject(spec, keys) {
	  var newObject = {};
	  keys.forEach(function (key) {
	    return newObject[key] = spec[key];
	  });
	  return newObject;
	};

	// get initialized state
	var initializedState = exports.initializedState = function initializedState(spec) {
	  // spec also contains listRef, trackRef
	  var slideCount = _react2.default.Children.count(spec.children);
	  var listWidth = Math.ceil(getWidth(_reactDom2.default.findDOMNode(spec.listRef)));
	  var trackWidth = Math.ceil(getWidth(_reactDom2.default.findDOMNode(spec.trackRef)));
	  var slideWidth = void 0;
	  if (!spec.vertical) {
	    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
	    if (typeof spec.centerPadding === 'string' && spec.centerPadding.slice(-1) === '%') {
	      centerPaddingAdj *= listWidth / 100;
	    }
	    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
	  } else {
	    slideWidth = listWidth;
	  }
	  var slideHeight = getHeight(_reactDom2.default.findDOMNode(spec.listRef).querySelector('[data-index="0"]'));
	  var listHeight = slideHeight * spec.slidesToShow;
	  var currentSlide = spec.currentSlide || spec.initialSlide;
	  if (spec.rtl && !spec.currentSlide) {
	    currentSlide = slideCount - 1 - spec.initialSlide;
	  }
	  var lazyLoadedList = spec.lazyLoadedList || [];
	  var slidesToLoad = getOnDemandLazySlides({ currentSlide: currentSlide, lazyLoadedList: lazyLoadedList }, spec);
	  lazyLoadedList.concat(slidesToLoad);

	  return { slideCount: slideCount, slideWidth: slideWidth, listWidth: listWidth, trackWidth: trackWidth, currentSlide: currentSlide,
	    slideHeight: slideHeight, listHeight: listHeight, lazyLoadedList: lazyLoadedList };
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	var initialState = {
	    animating: false,
	    dragging: false,
	    currentDirection: 0,
	    currentLeft: null,
	    currentSlide: 0,
	    direction: 1,
	    listWidth: null,
	    listHeight: null,
	    scrolling: false,
	    // loadIndex: 0,
	    slideCount: null,
	    slideWidth: null,
	    slideHeight: null,
	    swiping: false,
	    // sliding: false,
	    // slideOffset: 0,
	    swipeLeft: null,
	    touchObject: {
	        startX: 0,
	        startY: 0,
	        curX: 0,
	        curY: 0
	    },

	    lazyLoadedList: [],

	    // added for react
	    initialized: false,
	    edgeDragged: false,
	    swiped: false, // used by swipeEvent. differentites between touch and swipe.
	    trackStyle: {},
	    trackWidth: 0

	    // Removed
	    // transformsEnabled: false,
	    // $nextArrow: null,
	    // $prevArrow: null,
	    // $dots: null,
	    // $list: null,
	    // $slideTrack: null,
	    // $slides: null,
	};

	module.exports = initialState;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultProps = {
	    className: '',
	    accessibility: true,
	    adaptiveHeight: false,
	    arrows: true,
	    autoplay: false,
	    autoplaySpeed: 3000,
	    centerMode: false,
	    centerPadding: '50px',
	    cssEase: 'ease',
	    customPaging: function customPaging(i) {
	        return _react2.default.createElement(
	            'button',
	            null,
	            i + 1
	        );
	    },
	    dots: false,
	    dotsClass: 'slick-dots',
	    draggable: true,
	    easing: 'linear',
	    edgeFriction: 0.35,
	    fade: false,
	    focusOnSelect: false,
	    infinite: true,
	    initialSlide: 0,
	    lazyLoad: false,
	    pauseOnHover: true,
	    responsive: null,
	    rtl: false,
	    slide: 'div',
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    speed: 500,
	    swipe: true,
	    swipeToSlide: false,
	    touchMove: true,
	    touchThreshold: 5,
	    useCSS: true,
	    variableWidth: false,
	    vertical: false,
	    waitForAnimate: true,
	    afterChange: null,
	    beforeChange: null,
	    edgeEvent: null,
	    // init: function hook that gets called right before InnerSlider mounts
	    init: null,
	    swipeEvent: null,
	    // nextArrow, prevArrow should react componets
	    nextArrow: null,
	    prevArrow: null,
	    appendDots: function appendDots(dots) {
	        return _react2.default.createElement(
	            'ul',
	            { style: { display: 'block' } },
	            dots
	        );
	    }
	};

	exports.default = defaultProps;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Track = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _classnames = __webpack_require__(13);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _trackUtils = __webpack_require__(8);

	var _innerSliderUtils = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
	var getSlideClasses = function getSlideClasses(spec) {
	  // if spec has currentSlideIndex, we can also apply slickCurrent class according to that (https://github.com/kenwheeler/slick/blob/master/slick/slick.js#L2300-L2302)
	  var slickActive, slickCenter, slickCloned;
	  var centerOffset, index;

	  if (spec.rtl) {
	    // if we're going right to left, index is reversed
	    index = spec.slideCount - 1 - spec.index;
	  } else {
	    // index of the slide
	    index = spec.index;
	  }
	  slickCloned = index < 0 || index >= spec.slideCount;
	  if (spec.centerMode) {
	    centerOffset = Math.floor(spec.slidesToShow / 2);
	    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0; // concern: not sure if this should be correct (https://github.com/kenwheeler/slick/blob/master/slick/slick.js#L2328-L2346)
	    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
	      slickActive = true;
	    }
	  } else {
	    // concern: following can be incorrect in case where currentSlide is lastSlide in frame and rest of the slides to show have index smaller than currentSlideIndex
	    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
	  }
	  var slickCurrent = index === spec.currentSlide;
	  return (0, _classnames2.default)({
	    'slick-slide': true,
	    'slick-active': slickActive,
	    'slick-center': slickCenter,
	    'slick-cloned': slickCloned,
	    'slick-current': slickCurrent // dubious in case of RTL
	  });
	};

	var getSlideStyle = function getSlideStyle(spec) {
	  var style = {};

	  if (spec.variableWidth === undefined || spec.variableWidth === false) {
	    style.width = spec.slideWidth;
	  }

	  if (spec.fade) {
	    style.position = 'relative';
	    if (spec.vertical) {
	      style.top = -spec.index * spec.slideHeight;
	    } else {
	      style.left = -spec.index * spec.slideWidth;
	    }
	    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
	    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase + ', ' + 'visibility ' + spec.speed + 'ms ' + spec.cssEase;
	    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase + ', ' + 'visibility ' + spec.speed + 'ms ' + spec.cssEase;
	  }

	  return style;
	};

	var getKey = function getKey(child, fallbackKey) {
	  return child.key || fallbackKey;
	};

	var renderSlides = function renderSlides(spec) {
	  var key;
	  var slides = [];
	  var preCloneSlides = [];
	  var postCloneSlides = [];
	  var childrenCount = _react2.default.Children.count(spec.children);
	  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
	  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);

	  _react2.default.Children.forEach(spec.children, function (elem, index) {
	    var child = void 0;
	    var childOnClickOptions = {
	      message: 'children',
	      index: index,
	      slidesToScroll: spec.slidesToScroll,
	      currentSlide: spec.currentSlide
	    };

	    // in case of lazyLoad, whether or not we want to fetch the slide
	    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
	      child = elem;
	    } else {
	      child = _react2.default.createElement('div', null);
	    }
	    var childStyle = getSlideStyle((0, _objectAssign2.default)({}, spec, { index: index }));
	    var slideClass = child.props.className || '';

	    // push a cloned element of the desired slide
	    slides.push(_react2.default.cloneElement(child, {
	      key: 'original' + getKey(child, index),
	      'data-index': index,
	      className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: index }, spec)), slideClass),
	      tabIndex: '-1',
	      style: (0, _objectAssign2.default)({ outline: 'none' }, child.props.style || {}, childStyle),
	      onClick: function onClick(e) {
	        child.props && child.props.onClick && child.props.onClick(e);
	        if (spec.focusOnSelect) {
	          spec.focusOnSelect(childOnClickOptions);
	        }
	      }
	    }));

	    // if slide needs to be precloned or postcloned
	    if (spec.infinite && spec.fade === false) {
	      var preCloneNo = childrenCount - index;
	      if (preCloneNo <= (0, _trackUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
	        key = -preCloneNo;
	        if (key >= startIndex) {
	          child = elem;
	        }
	        preCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'precloned' + getKey(child, key),
	          'data-index': key,
	          tabIndex: '-1',
	          className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: key }, spec)), slideClass),
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: function onClick(e) {
	            child.props && child.props.onClick && child.props.onClick(e);
	            if (spec.focusOnSelect) {
	              spec.focusOnSelect(childOnClickOptions);
	            }
	          }
	        }));
	      }

	      if (childrenCount !== spec.slidesToShow) {
	        key = childrenCount + index;
	        if (key < endIndex) {
	          child = elem;
	        }
	        postCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'postcloned' + getKey(child, key),
	          'data-index': key,
	          tabIndex: '-1',
	          className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: key }, spec)), slideClass),
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: function onClick(e) {
	            child.props && child.props.onClick && child.props.onClick(e);
	            if (spec.focusOnSelect) {
	              spec.focusOnSelect(childOnClickOptions);
	            }
	          }
	        }));
	      }
	    }
	  });

	  if (spec.rtl) {
	    return preCloneSlides.concat(slides, postCloneSlides).reverse();
	  } else {
	    return preCloneSlides.concat(slides, postCloneSlides);
	  }
	};

	var Track = exports.Track = function (_React$Component) {
	  _inherits(Track, _React$Component);

	  function Track() {
	    _classCallCheck(this, Track);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Track.prototype.render = function render() {
	    // var slides = renderSlides.call(this, this.props);
	    var slides = renderSlides(this.props);
	    return _react2.default.createElement(
	      'div',
	      { className: 'slick-track', style: this.props.trackStyle },
	      slides
	    );
	  };

	  return Track;
	}(_react2.default.Component);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Dots = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(13);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var getDotCount = function getDotCount(spec) {
	  var dots;

	  if (spec.infinite) {
	    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
	  } else {
	    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
	  }

	  return dots;
	};

	var Dots = exports.Dots = function (_React$Component) {
	  _inherits(Dots, _React$Component);

	  function Dots() {
	    _classCallCheck(this, Dots);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Dots.prototype.clickHandler = function clickHandler(options, e) {
	    // In Autoplay the focus stays on clicked button even after transition
	    // to next slide. That only goes away by click somewhere outside
	    e.preventDefault();
	    this.props.clickHandler(options);
	  };

	  Dots.prototype.render = function render() {
	    var _this2 = this;

	    var dotCount = getDotCount({
	      slideCount: this.props.slideCount,
	      slidesToScroll: this.props.slidesToScroll,
	      slidesToShow: this.props.slidesToShow,
	      infinite: this.props.infinite
	    });

	    // Apply join & split to Array to pre-fill it for IE8
	    //
	    // Credit: http://stackoverflow.com/a/13735425/1849458
	    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map(function (x, i) {

	      var leftBound = i * _this2.props.slidesToScroll;
	      var rightBound = i * _this2.props.slidesToScroll + (_this2.props.slidesToScroll - 1);
	      var className = (0, _classnames2.default)({
	        'slick-active': _this2.props.currentSlide >= leftBound && _this2.props.currentSlide <= rightBound
	      });

	      var dotOptions = {
	        message: 'dots',
	        index: i,
	        slidesToScroll: _this2.props.slidesToScroll,
	        currentSlide: _this2.props.currentSlide
	      };

	      var onClick = _this2.clickHandler.bind(_this2, dotOptions);

	      return _react2.default.createElement(
	        'li',
	        { key: i, className: className },
	        _react2.default.cloneElement(_this2.props.customPaging(i), { onClick: onClick })
	      );
	    });

	    return _react2.default.cloneElement(this.props.appendDots(dots), { className: this.props.dotsClass });
	  };

	  return Dots;
	}(_react2.default.Component);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.NextArrow = exports.PrevArrow = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(13);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _helpers = __webpack_require__(9);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _innerSliderUtils = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PrevArrow = exports.PrevArrow = function (_React$Component) {
	  _inherits(PrevArrow, _React$Component);

	  function PrevArrow() {
	    _classCallCheck(this, PrevArrow);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  PrevArrow.prototype.clickHandler = function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  };

	  PrevArrow.prototype.render = function render() {
	    var prevClasses = { 'slick-arrow': true, 'slick-prev': true };
	    var prevHandler = this.clickHandler.bind(this, { message: 'previous' });

	    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
	      prevClasses['slick-disabled'] = true;
	      prevHandler = null;
	    }

	    var prevArrowProps = {
	      key: '0',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(prevClasses),
	      style: { display: 'block' },
	      onClick: prevHandler
	    };
	    var customProps = {
	      currentSlide: this.props.currentSlide,
	      slideCount: this.props.slideCount
	    };
	    var prevArrow = void 0;

	    if (this.props.prevArrow) {
	      prevArrow = _react2.default.cloneElement(this.props.prevArrow, _extends({}, prevArrowProps, customProps));
	    } else {
	      prevArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '0', type: 'button' }, prevArrowProps),
	        ' Previous'
	      );
	    }

	    return prevArrow;
	  };

	  return PrevArrow;
	}(_react2.default.Component);

	var NextArrow = exports.NextArrow = function (_React$Component2) {
	  _inherits(NextArrow, _React$Component2);

	  function NextArrow() {
	    _classCallCheck(this, NextArrow);

	    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	  }

	  NextArrow.prototype.clickHandler = function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  };

	  NextArrow.prototype.render = function render() {
	    var nextClasses = { 'slick-arrow': true, 'slick-next': true };
	    var nextHandler = this.clickHandler.bind(this, { message: 'next' });

	    if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
	      nextClasses['slick-disabled'] = true;
	      nextHandler = null;
	    }

	    var nextArrowProps = {
	      key: '1',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(nextClasses),
	      style: { display: 'block' },
	      onClick: nextHandler
	    };
	    var customProps = {
	      currentSlide: this.props.currentSlide,
	      slideCount: this.props.slideCount
	    };
	    var nextArrow = void 0;

	    if (this.props.nextArrow) {
	      nextArrow = _react2.default.cloneElement(this.props.nextArrow, _extends({}, nextArrowProps, customProps));
	    } else {
	      nextArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '1', type: 'button' }, nextArrowProps),
	        ' Next'
	      );
	    }

	    return nextArrow;
	  };

	  return NextArrow;
	}(_react2.default.Component);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var camel2hyphen = __webpack_require__(18);

	var isDimension = function (feature) {
	  var re = /[height|width]$/;
	  return re.test(feature);
	};

	var obj2mq = function (obj) {
	  var mq = '';
	  var features = Object.keys(obj);
	  features.forEach(function (feature, index) {
	    var value = obj[feature];
	    feature = camel2hyphen(feature);
	    // Add px to dimension features
	    if (isDimension(feature) && typeof value === 'number') {
	      value = value + 'px';
	    }
	    if (value === true) {
	      mq += feature;
	    } else if (value === false) {
	      mq += 'not ' + feature;
	    } else {
	      mq += '(' + feature + ': ' + value + ')';
	    }
	    if (index < features.length-1) {
	      mq += ' and '
	    }
	  });
	  return mq;
	};

	var json2mq = function (query) {
	  var mq = '';
	  if (typeof query === 'string') {
	    return query;
	  }
	  // Handling array of media queries
	  if (query instanceof Array) {
	    query.forEach(function (q, index) {
	      mq += obj2mq(q);
	      if (index < query.length-1) {
	        mq += ', '
	      }
	    });
	    return mq;
	  }
	  // Handling single media query
	  return obj2mq(query);
	};

	module.exports = json2mq;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	var camel2hyphen = function (str) {
	  return str
	          .replace(/[A-Z]/g, function (match) {
	            return '-' + match.toLowerCase();
	          })
	          .toLowerCase();
	};

	module.exports = camel2hyphen;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var MediaQueryDispatch = __webpack_require__(20);
	module.exports = new MediaQueryDispatch();


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var MediaQuery = __webpack_require__(21);
	var Util = __webpack_require__(23);
	var each = Util.each;
	var isFunction = Util.isFunction;
	var isArray = Util.isArray;

	/**
	 * Allows for registration of query handlers.
	 * Manages the query handler's state and is responsible for wiring up browser events
	 *
	 * @constructor
	 */
	function MediaQueryDispatch () {
	    if(!window.matchMedia) {
	        throw new Error('matchMedia not present, legacy browsers require a polyfill');
	    }

	    this.queries = {};
	    this.browserIsIncapable = !window.matchMedia('only all').matches;
	}

	MediaQueryDispatch.prototype = {

	    constructor : MediaQueryDispatch,

	    /**
	     * Registers a handler for the given media query
	     *
	     * @param {string} q the media query
	     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
	     * @param {function} options.match fired when query matched
	     * @param {function} [options.unmatch] fired when a query is no longer matched
	     * @param {function} [options.setup] fired when handler first triggered
	     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
	     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
	     */
	    register : function(q, options, shouldDegrade) {
	        var queries         = this.queries,
	            isUnconditional = shouldDegrade && this.browserIsIncapable;

	        if(!queries[q]) {
	            queries[q] = new MediaQuery(q, isUnconditional);
	        }

	        //normalise to object in an array
	        if(isFunction(options)) {
	            options = { match : options };
	        }
	        if(!isArray(options)) {
	            options = [options];
	        }
	        each(options, function(handler) {
	            if (isFunction(handler)) {
	                handler = { match : handler };
	            }
	            queries[q].addHandler(handler);
	        });

	        return this;
	    },

	    /**
	     * unregisters a query and all it's handlers, or a specific handler for a query
	     *
	     * @param {string} q the media query to target
	     * @param {object || function} [handler] specific handler to unregister
	     */
	    unregister : function(q, handler) {
	        var query = this.queries[q];

	        if(query) {
	            if(handler) {
	                query.removeHandler(handler);
	            }
	            else {
	                query.clear();
	                delete this.queries[q];
	            }
	        }

	        return this;
	    }
	};

	module.exports = MediaQueryDispatch;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var QueryHandler = __webpack_require__(22);
	var each = __webpack_require__(23).each;

	/**
	 * Represents a single media query, manages it's state and registered handlers for this query
	 *
	 * @constructor
	 * @param {string} query the media query string
	 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
	 */
	function MediaQuery(query, isUnconditional) {
	    this.query = query;
	    this.isUnconditional = isUnconditional;
	    this.handlers = [];
	    this.mql = window.matchMedia(query);

	    var self = this;
	    this.listener = function(mql) {
	        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
	        self.mql = mql.currentTarget || mql;
	        self.assess();
	    };
	    this.mql.addListener(this.listener);
	}

	MediaQuery.prototype = {

	    constuctor : MediaQuery,

	    /**
	     * add a handler for this query, triggering if already active
	     *
	     * @param {object} handler
	     * @param {function} handler.match callback for when query is activated
	     * @param {function} [handler.unmatch] callback for when query is deactivated
	     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
	     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
	     */
	    addHandler : function(handler) {
	        var qh = new QueryHandler(handler);
	        this.handlers.push(qh);

	        this.matches() && qh.on();
	    },

	    /**
	     * removes the given handler from the collection, and calls it's destroy methods
	     *
	     * @param {object || function} handler the handler to remove
	     */
	    removeHandler : function(handler) {
	        var handlers = this.handlers;
	        each(handlers, function(h, i) {
	            if(h.equals(handler)) {
	                h.destroy();
	                return !handlers.splice(i,1); //remove from array and exit each early
	            }
	        });
	    },

	    /**
	     * Determine whether the media query should be considered a match
	     *
	     * @return {Boolean} true if media query can be considered a match, false otherwise
	     */
	    matches : function() {
	        return this.mql.matches || this.isUnconditional;
	    },

	    /**
	     * Clears all handlers and unbinds events
	     */
	    clear : function() {
	        each(this.handlers, function(handler) {
	            handler.destroy();
	        });
	        this.mql.removeListener(this.listener);
	        this.handlers.length = 0; //clear array
	    },

	    /*
	        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
	        */
	    assess : function() {
	        var action = this.matches() ? 'on' : 'off';

	        each(this.handlers, function(handler) {
	            handler[action]();
	        });
	    }
	};

	module.exports = MediaQuery;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	/**
	 * Delegate to handle a media query being matched and unmatched.
	 *
	 * @param {object} options
	 * @param {function} options.match callback for when the media query is matched
	 * @param {function} [options.unmatch] callback for when the media query is unmatched
	 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
	 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
	 * @constructor
	 */
	function QueryHandler(options) {
	    this.options = options;
	    !options.deferSetup && this.setup();
	}

	QueryHandler.prototype = {

	    constructor : QueryHandler,

	    /**
	     * coordinates setup of the handler
	     *
	     * @function
	     */
	    setup : function() {
	        if(this.options.setup) {
	            this.options.setup();
	        }
	        this.initialised = true;
	    },

	    /**
	     * coordinates setup and triggering of the handler
	     *
	     * @function
	     */
	    on : function() {
	        !this.initialised && this.setup();
	        this.options.match && this.options.match();
	    },

	    /**
	     * coordinates the unmatch event for the handler
	     *
	     * @function
	     */
	    off : function() {
	        this.options.unmatch && this.options.unmatch();
	    },

	    /**
	     * called when a handler is to be destroyed.
	     * delegates to the destroy or unmatch callbacks, depending on availability.
	     *
	     * @function
	     */
	    destroy : function() {
	        this.options.destroy ? this.options.destroy() : this.off();
	    },

	    /**
	     * determines equality by reference.
	     * if object is supplied compare options, if function, compare match callback
	     *
	     * @function
	     * @param {object || function} [target] the target for comparison
	     */
	    equals : function(target) {
	        return this.options === target || this.options.match === target;
	    }

	};

	module.exports = QueryHandler;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/**
	 * Helper function for iterating over a collection
	 *
	 * @param collection
	 * @param fn
	 */
	function each(collection, fn) {
	    var i      = 0,
	        length = collection.length,
	        cont;

	    for(i; i < length; i++) {
	        cont = fn(collection[i], i);
	        if(cont === false) {
	            break; //allow early exit
	        }
	    }
	}

	/**
	 * Helper function for determining whether target object is an array
	 *
	 * @param target the object under test
	 * @return {Boolean} true if array, false otherwise
	 */
	function isArray(target) {
	    return Object.prototype.toString.apply(target) === '[object Array]';
	}

	/**
	 * Helper function for determining whether target object is a function
	 *
	 * @param target the object under test
	 * @return {Boolean} true if function, false otherwise
	 */
	function isFunction(target) {
	    return typeof target === 'function';
	}

	module.exports = {
	    isFunction : isFunction,
	    isArray : isArray,
	    each : each
	};


/***/ })
/******/ ])
});
;