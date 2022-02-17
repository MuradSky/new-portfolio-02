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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/configurator/actions.js":
/*!****************************************************!*\
  !*** ./src/blocks/modules/configurator/actions.js ***!
  \****************************************************/
/*! exports provided: initTrees, setTressImages, initColors, setColorImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTrees", function() { return initTrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTressImages", function() { return setTressImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initColors", function() { return initColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColorImages", function() { return setColorImages; });
var colorsData = [];
var initTrees = function initTrees($treesTemplate, data, TreesTemplate) {
  return setTressImages($treesTemplate, 'Полукрывное', data, TreesTemplate);
};
var setTressImages = function setTressImages($treesTemplate, $type, data, TreesTemplate) {
  var trees = data.filter(function (x) {
    return x.name === $type;
  })[0].trees;
  var template = trees.map(function (item, i) {
    return TreesTemplate(i === 0 ? 'active' : '', item["image-url"], item.name);
  }).join('');
  $treesTemplate.html(template);
  return trees;
};
var initColors = function initColors($colorTemplate, data, selecter, $attr, Template) {
  return setColorImages($colorTemplate, 'Сосна', data, selecter, $attr, Template);
};
var setColorImages = function setColorImages($colorTemplate, $type, data, selecter, $attr, Template) {
  if (data) colorsData = data;
  var colors = colorsData.filter(function (x) {
    return x.name === $type;
  })[0][selecter];
  var template = colors.map(function (item, i) {
    return Template(i === 0 ? 'active' : '', item["image-url"], item.name, item[$attr]);
  }).join('');
  $colorTemplate.html(template);
  return colors;
};

/***/ }),

/***/ "./src/blocks/modules/configurator/configurator.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/configurator/configurator.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/blocks/modules/configurator/actions.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./src/blocks/modules/configurator/templates.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



$(function () {
  var $document = $(document);
  var $configurator = $('.js-configurator');
  var $coating = $('.js-coating');
  var $treesTemplate = $('.js-tress-template');
  var $colorTemplate = $('.js-color-template');
  var $accessoryTemplate = $('.js-accessory-template');
  var $configWindow = $('.js-config-window');
  var $configAccess = $('.js-config-access');

  var $timber = function $timber() {
    return $('.js-timber');
  };

  var $color = function $color() {
    return $('.js-color');
  };

  var $accessory = function $accessory() {
    return $('.js-accessory');
  };

  var materials = [];
  var state = {
    coating: "Полукрывное",
    timber: "Сосна",
    color: "Цвет 1",
    accessory: "Серебро натуральное"
  };

  var getColorsValues = function getColorsValues(type, data) {
    var color = Object(_actions__WEBPACK_IMPORTED_MODULE_0__["setColorImages"])($colorTemplate, type, data, "colors", "window", _templates__WEBPACK_IMPORTED_MODULE_1__["ColorTemplate"]);
    var accessory = Object(_actions__WEBPACK_IMPORTED_MODULE_0__["setColorImages"])($accessoryTemplate, type, data, "accessory", "access", _templates__WEBPACK_IMPORTED_MODULE_1__["AccessoryTemplate"]);
    return {
      color: color,
      accessory: accessory
    };
  };

  $.ajax($configurator.attr('data-url')).done(function (data) {
    materials = data;
    var trees = Object(_actions__WEBPACK_IMPORTED_MODULE_0__["initTrees"])($treesTemplate, data, _templates__WEBPACK_IMPORTED_MODULE_1__["TreesTemplate"]);
    Object(_actions__WEBPACK_IMPORTED_MODULE_0__["initColors"])($colorTemplate, trees, "colors", "window", _templates__WEBPACK_IMPORTED_MODULE_1__["ColorTemplate"]);
    Object(_actions__WEBPACK_IMPORTED_MODULE_0__["initColors"])($accessoryTemplate, trees, "accessory", "access", _templates__WEBPACK_IMPORTED_MODULE_1__["AccessoryTemplate"]);
  });
  var currentCoating = null;
  $coating.on('click', function () {
    var $this = $(this);
    var $dataType = $this.attr('data-type');
    if (currentCoating === $dataType) return;
    toggleActive($coating, $this);
    var trees = Object(_actions__WEBPACK_IMPORTED_MODULE_0__["setTressImages"])($treesTemplate, $dataType, materials, _templates__WEBPACK_IMPORTED_MODULE_1__["TreesTemplate"]);

    var _getColorsValues = getColorsValues(trees[0].name, trees),
        color = _getColorsValues.color,
        accessory = _getColorsValues.accessory;

    $configWindow.attr('src', color[0].window);
    $configAccess.attr('src', accessory[0].access);
    state = {
      coating: $dataType,
      timber: trees[0].name,
      color: color[0].name,
      accessory: accessory[0].name
    };
    currentCoating = $dataType;
  });
  var currentTimber = null;
  $document.on('click', '.js-timber', function () {
    var $this = $(this);
    var $dataType = $this.attr('data-type');
    if (currentTimber === $dataType) return;
    toggleActive($timber(), $this);

    var _getColorsValues2 = getColorsValues($dataType, false),
        color = _getColorsValues2.color,
        accessory = _getColorsValues2.accessory;

    $configWindow.attr('src', color[0].window);
    $configAccess.attr('src', accessory[0].access);
    state = _objectSpread(_objectSpread({}, state), {}, {
      timber: $dataType,
      color: color[0].name,
      accessory: accessory[0].name
    });
    currentTimber = $dataType;
  });
  $document.on('click', '.js-color', function () {
    var $this = $(this);
    var $dataType = $this.attr('data-type');
    var $dataWindow = $this.attr('data-window');
    toggleActive($color(), $this);
    $configWindow.attr('src', $dataWindow);
    state = _objectSpread(_objectSpread({}, state), {}, {
      color: $dataType
    });
  });
  $document.on('click', '.js-accessory', function () {
    var $this = $(this);
    var $dataType = $this.attr('data-type');
    var $dataAccessory = $this.attr('data-accessory');
    toggleActive($accessory(), $this);
    $configAccess.attr("src", $dataAccessory);
    state = _objectSpread(_objectSpread({}, state), {}, {
      accessory: $dataType
    });
  });
});

function toggleActive($all, $this) {
  $all.removeClass('active');
  $this.addClass('active');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/configurator/templates.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/configurator/templates.js ***!
  \******************************************************/
/*! exports provided: TreesTemplate, ColorTemplate, AccessoryTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreesTemplate", function() { return TreesTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorTemplate", function() { return ColorTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoryTemplate", function() { return AccessoryTemplate; });
var TreesTemplate = function TreesTemplate(className, img, name) {
  return "\n    <div class=\"configurator__timber js-timber ".concat(className, "\" data-type=\"").concat(name, "\">\n        <div class=\"configurator__timber-img\">\n            <span class=\"configurator__timber-check\">\n                <img src=\"./img/svg/checkmark.svg\" alt=\"Icon\">\n            </span>\n            <img src=\"").concat(img, "\" alt=\"Trees\">\n        </div>\n        <p class=\"configurator__timber-name\">").concat(name, "</p>\n    </div>\n");
};
var ColorTemplate = function ColorTemplate(className, img, name, color) {
  return "\n    <div class=\"configurator__color configurator__color_1 js-color ".concat(className, "\" data-type=\"").concat(name, "\" data-window=\"").concat(color, "\">\n        <img src=\"").concat(img, "\" alt=\"Color\" title=\"").concat(name, "\">\n    </div>\n");
};
var AccessoryTemplate = function AccessoryTemplate(className, img, name, access) {
  return "\n    <div class=\"configurator__color configurator__color_2 js-accessory ".concat(className, "\" data-type=\"").concat(name, "\" data-accessory=\"").concat(access, "\">\n        <img src=\"").concat(img, "\" alt=\"Color\" title=\"").concat(name, "\">\n    </div>\n");
};

/***/ }),

/***/ "./src/blocks/modules/form/components/errorMessages.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/form/components/errorMessages.js ***!
  \*************************************************************/
/*! exports provided: errorPayment, errorRequestCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPayment", function() { return errorPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRequestCall", function() { return errorRequestCall; });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./src/blocks/modules/form/components/validation.js");

var errorPayment = function errorPayment(name, phone, email, formInput) {
  var nameError = Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validate"])(name);
  var phoneError = Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validate"])(phone);
  var emailError = Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validateEmail"])(email);
  formInput.eq(0).focus();
  if (!nameError) formInput.eq(0).addClass('error');
  if (!phoneError) formInput.eq(1).addClass('error');
  if (!emailError) formInput.eq(2).addClass('error');
  if (!nameError && !phoneError && !emailError) return false;
  if (nameError && phoneError && email) return true;
};
var errorRequestCall = function errorRequestCall(name, phone, formInput) {
  var nameError = Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validate"])(name);
  var phoneError = Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validate"])(phone);
  formInput.eq(0).focus();
  if (!nameError) formInput.eq(0).addClass('error');
  if (!phoneError) formInput.eq(1).addClass('error');
  if (!nameError && !phoneError) return false;
  if (nameError && phoneError) return true;
};

/***/ }),

/***/ "./src/blocks/modules/form/components/handlers.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/form/components/handlers.js ***!
  \********************************************************/
/*! exports provided: handlingPayment, handlingRequestCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlingPayment", function() { return handlingPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlingRequestCall", function() { return handlingRequestCall; });
/* harmony import */ var _errorMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorMessages */ "./src/blocks/modules/form/components/errorMessages.js");
/* harmony import */ var _replaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replaces */ "./src/blocks/modules/form/components/replaces.js");


var handlingPayment = function handlingPayment(formDataEntries, formInput) {
  var _Object$fromEntries = Object.fromEntries(formDataEntries.entries()),
      name = _Object$fromEntries.name,
      phone = _Object$fromEntries.phone,
      email = _Object$fromEntries.email,
      message = _Object$fromEntries.message,
      file = _Object$fromEntries.file;

  if (!Object(_errorMessages__WEBPACK_IMPORTED_MODULE_0__["errorPayment"])(name, phone, email, formInput)) return "error";
  return {
    name: name,
    phone: Object(_replaces__WEBPACK_IMPORTED_MODULE_1__["phoneReplace"])(phone),
    email: email,
    message: message,
    file: file
  };
};
var handlingRequestCall = function handlingRequestCall(formDataEntries, formInput) {
  var _Object$fromEntries2 = Object.fromEntries(formDataEntries.entries()),
      name = _Object$fromEntries2.name,
      phone = _Object$fromEntries2.phone;

  if (!Object(_errorMessages__WEBPACK_IMPORTED_MODULE_0__["errorRequestCall"])(name, phone, formInput)) return "error";
  return {
    name: name,
    phone: Object(_replaces__WEBPACK_IMPORTED_MODULE_1__["phoneReplace"])(phone)
  };
};

/***/ }),

/***/ "./src/blocks/modules/form/components/inputsChange.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/form/components/inputsChange.js ***!
  \************************************************************/
/*! exports provided: inputsChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputsChange", function() { return inputsChange; });
var inputsChange = function inputsChange(inputs) {
  inputs.on('input', function (e) {
    var that = e.target;
    if (that.name === "name" && that.value.length > 3) that.classList.remove('error');
    if (that.name === "email" && that.value.length > 3) that.classList.remove('error');
  });
};

/***/ }),

/***/ "./src/blocks/modules/form/components/replaces.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/form/components/replaces.js ***!
  \********************************************************/
/*! exports provided: phoneReplace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneReplace", function() { return phoneReplace; });
var phoneReplace = function phoneReplace(string) {
  return string.replace(/[^\d\+]/g, '');
};

/***/ }),

/***/ "./src/blocks/modules/form/components/validation.js":
/*!**********************************************************!*\
  !*** ./src/blocks/modules/form/components/validation.js ***!
  \**********************************************************/
/*! exports provided: validate, validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
var validate = function validate(value) {
  if (!value) return false;
  return true;
};
var validateEmail = function validateEmail(value) {
  var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.match(regExp)) return false;
  return true;
};

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _components_inputsChange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/inputsChange */ "./src/blocks/modules/form/components/inputsChange.js");
/* harmony import */ var _components_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/handlers */ "./src/blocks/modules/form/components/handlers.js");


$(function () {
  $("[type='tel']").mask("+7 (999) 999-99-99", {
    completed: function completed() {
      $(this).removeClass('error');
    }
  });
  var $fileContent = $('.js-form__file-content');
  var $form = $('.js-form');
  var $fileInput = $('.js-file__input');
  var clone = null;
  var formValue = {};

  var fileContentTemplate = function fileContentTemplate(text) {
    return "\n        <span>".concat(text, "</span>\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"js-clear-file\">\n            <path d=\"M4.89775 4.10225C4.67808 3.88258 4.32193 3.88258 4.10226 4.10225C3.88259 4.32192 3.88259 4.67808 4.10226 4.89775L8.20451 9L4.10225 13.1023C3.88258 13.3219 3.88258 13.6781 4.10225 13.8978C4.32192 14.1174 4.67808 14.1174 4.89775 13.8978L9.00001 9.7955L13.1023 13.8978C13.3219 14.1174 13.6781 14.1174 13.8978 13.8978C14.1174 13.6781 14.1174 13.3219 13.8978 13.1023L9.7955 9L13.8977 4.89775C14.1174 4.67808 14.1174 4.32193 13.8977 4.10226C13.6781 3.88259 13.3219 3.88259 13.1023 4.10226L9.00001 8.20451L4.89775 4.10225Z\" fill=\"white\"/>\n        </svg>\n    ");
  };

  $fileContent.on('click', function () {
    var $this = $(this);
    if (!$this.next().val()) return;
    $this.next().val('');
    $this.html(clone);
  });
  $fileInput.on('change', function (e) {
    var target = e.target;
    if (!target.files.length) return;
    var $this = $(this);
    clone = $this.prev().children();
    $this.prev().html(fileContentTemplate(target.files[0].name.slice(0, 15) + '...'));
  });
  $('.js-form-success').on('click', function () {
    $.fancybox.close();
  });
  $form.on('submit', function (e) {
    e.preventDefault();
    var target = e.target;
    var url = target.action;
    var formInput = $(this).find('.js-form-input');
    var formBtn = $(this).find('.js-form-submit');
    var formDataEntries = new FormData(target);
    if (target.dataset.id === 'form-payment') formValue = Object(_components_handlers__WEBPACK_IMPORTED_MODULE_1__["handlingPayment"])(formDataEntries, formInput, target);
    if (target.dataset.id === 'form-request-call') formValue = Object(_components_handlers__WEBPACK_IMPORTED_MODULE_1__["handlingRequestCall"])(formDataEntries, formInput, target);
    if (formValue === "error") return Object(_components_inputsChange__WEBPACK_IMPORTED_MODULE_0__["inputsChange"])(formInput);
    formBtn.attr('disabled', true);
    formInput.addClass('disabled');
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formValue)
    }).then(function () {
      target.reset();
      formInput.blur();

      if (clone) {
        $('.js-form__file-content').html(clone);
        clone = null;
      }

      formInput.removeClass('disabled');
      formBtn.removeAttr('disabled');
      $.magnificPopup.close();
      $.magnificPopup.open({
        items: {
          src: '#modal-success'
        },
        type: 'inline',
        callbacks: {
          open: function open() {
            setTimeout(function () {
              return $.magnificPopup.close();
            }, 3000);
          }
        }
      });
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $headerBtn = $('.js-header__btn');
  var $headerMenu = $('.js-header__menu');
  $headerBtn.on('click', function () {
    $(this).toggleClass('active');
    $headerMenu.toggleClass('active');
  });
  $(window).on('click', function (e) {
    if (!$headerMenu.is(e.target) && $headerMenu.has(e.target).length === 0 && !$headerBtn.is(e.target) && $headerBtn.has(e.target).length === 0) {
      $headerBtn.removeClass('active');
      $headerMenu.removeClass('active');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.js-popup-link').magnificPopup({
    type: 'inline',
    midClick: true
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/our-work/our-work.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/our-work/our-work.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $tab = $('.js-tab');
  var $slider = $('.our-work__slider');
  var arrows = $slider.attr('data-btn').split(',');
  var $sliderHtml = $slider.children();
  var $empty = $('.js-empty');
  var params = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: "<button class=\"slick-prev slick-arrow\"><svg><use xlink:href=\"".concat(arrows[0], "\"></use></svg></button>"),
    nextArrow: "<button class=\"slick-next slick-arrow\"><svg><use xlink:href=\"".concat(arrows[1], "\"></use></svg></button>"),
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        mobileFirst: true
      }
    }]
  };
  $slider.slick(params);
  var cloneElements = [];
  $tab.on('click', function (e) {
    var $this = $(this);
    $tab.removeClass('active');
    $this.addClass('active');
    var value = $this.attr('data-tab').toLowerCase();
    $empty.fadeOut();
    if (value === "all") cloneElements = $sliderHtml;else {
      $sliderHtml.each(function (i, item) {
        if (item.dataset.category === value) cloneElements.push(item);
      });
    }
    if (!cloneElements.length) $empty.fadeIn();
    $slider.slick('destroy');
    $slider.html($(cloneElements));
    $slider.slick(params);
    cloneElements = [];
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/working/working.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/working/working.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $workingTab = $('.js-working__tab-item');
  var $stepNumb = $('.js-working__step');
  var $infoBtn = $('.js-working__info');
  var $infoClose = $('.js-working__info-close');
  var $workingContainerInner = $('.js-working__container-inner');
  var $arrows = $workingContainerInner.attr('data-arrows').split(',');
  var $workingStepsBtn = $('.js-working__steps-btn');
  var $window = $(window);
  var initSlider = false;
  var count = 0;
  $infoBtn.on('click', function () {
    $(this).prev().fadeIn(300);
  });
  $infoClose.on('click', function () {
    $(this).closest('.js-working__info-text').fadeOut(300);
  });
  var options = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: "<button class=\"slick-next slick-arrow\" aria-label=\"Next\" type=\"button\"><svg><use xlink:href=\"".concat($arrows[0], "\"></use></svg></button>"),
    prevArrow: "<button class=\"slick-prev slick-arrow\" aria-label=\"Next\" type=\"button\"><svg><use xlink:href=\"".concat($arrows[1], "\"></use></svg></button>"),
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true
      }
    }]
  };
  var width = $(this).width();

  if (width < 768) {
    $workingContainerInner.slick(options);
    initSlider = true;
  }

  $workingStepsBtn.on('click', function () {
    if (count === 3) return;
    count += 1;
    $stepNumb.text(count + 1);
    $workingContainerInner.parent().removeClass('active').eq(count).addClass('active');
    $workingTab.eq(count).addClass('active').prevAll().addClass('active after-active');
  });
  $workingTab.on('click', function () {
    var $windowWidth = $window.width();
    var $this = $(this);
    var idx = $workingTab.index($this);
    $this.siblings().removeClass('active after-active');
    $this.addClass('active').removeClass('after-active').prevAll().addClass('active after-active');
    $stepNumb.text(idx + 1);
    if (initSlider) $workingContainerInner.slick('destroy');
    if ($windowWidth < 768) $workingContainerInner.eq(idx).slick(options);
    $workingContainerInner.parent().removeClass('active').eq(idx).addClass('active');
    count = idx;
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/global.js":
/*!*********************************!*\
  !*** ./src/js/import/global.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $(document).on('click', '.js-anchor', function (event) {
    event.preventDefault();

    if ($(this).hasClass('navigation__nav-link')) {
      $('.navigation__nav-link').removeClass('active');
      $(this).addClass('active');
    }

    $('html, body').stop(true, true).delay(200).animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 500);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/js/import/global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_configurator_configurator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/configurator/configurator */ "./src/blocks/modules/configurator/configurator.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_working_working__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/working/working */ "./src/blocks/modules/working/working.js");
/* harmony import */ var _modules_working_working__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_working_working__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_our_work_our_work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/our-work/our-work */ "./src/blocks/modules/our-work/our-work.js");
/* harmony import */ var _modules_our_work_our_work__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_our_work_our_work__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_6__);
 // import "%modules%/footer/footer";








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map