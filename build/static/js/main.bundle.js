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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./markup/static/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./markup/components/form/form.ts":
/*!****************************************!*\
  !*** ./markup/components/form/form.ts ***!
  \****************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input_input_mask_input_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/input-mask/input-mask */ "./markup/components/form/input/input-mask/input-mask.ts");
/* harmony import */ var _input_input_file_input_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input/input-file/input-file */ "./markup/components/form/input/input-file/input-file.ts");
/* harmony import */ var _input_input_default_input_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/input-default/input-default */ "./markup/components/form/input/input-default/input-default.ts");
/* harmony import */ var _input_input_select_input_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/input-select/input-select */ "./markup/components/form/input/input-select/input-select.ts");
/* harmony import */ var _grecaptcha_v3_grecaptcha_v3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grecaptcha-v3/grecaptcha-v3 */ "./markup/components/form/grecaptcha-v3/grecaptcha-v3.ts");






var Form = /** @class */ (function () {
    function Form(element) {
        var _this = this;
        this.form = element;
        this.inputs = this.inputsCreate();
        this.form.addEventListener('submit', function (e) {
            _this.formSubmit();
            e.preventDefault();
        });
        return this;
    }
    Form.init = function () {
        var className = 'cf-form';
        var elements = Array.from(document.getElementsByClassName(className));
        elements.map(function (elem) {
            new Form(elem);
        });
    };
    Form.prototype.formSubmit = function () {
        this.sendForm(this.form.action, this.createFormData(), Object(_grecaptcha_v3_grecaptcha_v3__WEBPACK_IMPORTED_MODULE_5__["addTokenOnForm"])(this.form));
    };
    Form.prototype.sendForm = function (url, data, middleCheck) {
        if (middleCheck === undefined) {
            middleCheck = true;
        }
        if (middleCheck) {
            this.formDisabled();
            axios__WEBPACK_IMPORTED_MODULE_0___default()({
                method: 'post',
                url: url,
                data: data,
            }).then(function (res) {
                console.log(res);
            });
        }
    };
    Form.prototype.formDisabled = function () {
        this.inputs.forEach(function (block) { return block.disabled(); });
        return this;
    };
    Form.prototype.formEnabled = function () {
        this.inputs.forEach(function (block) { return block.enabled(); });
        return this;
    };
    Form.prototype.createFormData = function () {
        var formData = new FormData();
        this.inputs.map(function (block) {
            var obj = block.getData();
            if (obj instanceof Array) {
                obj.forEach(function (elem) {
                    formData.append(elem.name, elem.value);
                });
            }
            else {
                formData.append(obj.name, obj.value);
            }
        });
        return formData;
    };
    Form.prototype.inputsCreate = function () {
        var elements = Array.from(this.form.querySelectorAll('.cf-input'));
        var elemArr = elements.map(function (elem) {
            if (elem instanceof HTMLInputElement)
                switch (elem.type) {
                    case 'tel':
                        return new _input_input_mask_input_mask__WEBPACK_IMPORTED_MODULE_1__["InputMask"](elem);
                    case 'file':
                        return new _input_input_file_input_file__WEBPACK_IMPORTED_MODULE_2__["InputFile"](elem);
                    default:
                        return new _input_input_default_input_default__WEBPACK_IMPORTED_MODULE_3__["InputDefault"](elem);
                }
            else if (elem instanceof HTMLSelectElement)
                return new _input_input_select_input_select__WEBPACK_IMPORTED_MODULE_4__["InputSelect"](elem);
            else if (elem instanceof HTMLTextAreaElement)
                return;
            return;
        });
        return elemArr;
    };
    return Form;
}());



/***/ }),

/***/ "./markup/components/form/grecaptcha-v3/grecaptcha-v3.ts":
/*!***************************************************************!*\
  !*** ./markup/components/form/grecaptcha-v3/grecaptcha-v3.ts ***!
  \***************************************************************/
/*! exports provided: addTokenOnForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTokenOnForm", function() { return addTokenOnForm; });
function addTokenOnForm(form) {
    var token = sessionStorage.getItem('captcha');
    if (token) {
        var tokenInput = form.querySelector('input[name="token"]');
        if (!tokenInput) {
            tokenInput = document.createElement('input');
            tokenInput.type = 'hidden';
            tokenInput.name = 'token';
            form.appendChild(tokenInput);
        }
        tokenInput.value = token;
        return true;
    }
    else {
        console.error('Or maybe you\'re a robot?');
        return false;
    }
}


/***/ }),

/***/ "./markup/components/form/input/input-default/input-default.ts":
/*!*********************************************************************!*\
  !*** ./markup/components/form/input/input-default/input-default.ts ***!
  \*********************************************************************/
/*! exports provided: InputDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDefault", function() { return InputDefault; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input */ "./markup/components/form/input/input.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var InputDefault = /** @class */ (function (_super) {
    __extends(InputDefault, _super);
    function InputDefault(element) {
        var _this = _super.call(this, element) || this;
        _this.isEmptyListener();
        return _this;
    }
    return InputDefault;
}(_input__WEBPACK_IMPORTED_MODULE_0__["Input"]));



/***/ }),

/***/ "./markup/components/form/input/input-file/input-file.ts":
/*!***************************************************************!*\
  !*** ./markup/components/form/input/input-file/input-file.ts ***!
  \***************************************************************/
/*! exports provided: InputFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFile", function() { return InputFile; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input */ "./markup/components/form/input/input.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var InputFile = /** @class */ (function (_super) {
    __extends(InputFile, _super);
    function InputFile(element) {
        var _this = _super.call(this, element) || this;
        _this
            .activateFile()
            .isEmptyListener();
        return _this;
    }
    InputFile.prototype.activateFile = function () {
        var _this = this;
        var defaultText = this.input.dataset.defaultValue || 'Файл в формате .doc, .pdf, .txt до 10MB';
        this.input.dataset.currentValue = defaultText;
        this.input.addEventListener('change', function (e) {
            if (_this.input.files[0]) {
                var nameFile = _this.input.files[0].name;
                _this.input.dataset.currentValue = nameFile;
            }
            else {
                _this.input.dataset.currentValue = defaultText;
            }
        });
        return this;
    };
    InputFile.prototype.getData = function () {
        var el = this.input;
        return Array.from(el.files).map(function (item) {
            return {
                name: el.getAttribute('name'),
                value: item
            };
        }).slice();
    };
    return InputFile;
}(_input__WEBPACK_IMPORTED_MODULE_0__["Input"]));



/***/ }),

/***/ "./markup/components/form/input/input-mask/input-mask.ts":
/*!***************************************************************!*\
  !*** ./markup/components/form/input/input-mask/input-mask.ts ***!
  \***************************************************************/
/*! exports provided: InputMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMask", function() { return InputMask; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input */ "./markup/components/form/input/input.ts");
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! imask */ "./node_modules/imask/dist/imask.js");
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(imask__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var InputMask = /** @class */ (function (_super) {
    __extends(InputMask, _super);
    function InputMask(element) {
        var _this = _super.call(this, element) || this;
        _this.mask = _this.activateMask();
        _this.isEmptyListener();
        return _this;
    }
    InputMask.prototype.activateMask = function () {
        var mask = '';
        var pattern = '';
        var type = this.input.type || this.input.dataset.type;
        switch (type) {
            case 'tel': {
                mask = '+{7}(000)000-00-00';
                pattern = '+{7}(000)000-00-00';
                return imask__WEBPACK_IMPORTED_MODULE_1___default()(this.input, {
                    mask: mask,
                    pattern: pattern,
                });
            }
            default: {
                return;
            }
        }
    };
    InputMask.prototype.isEmptyListener = function () {
        var _this = this;
        if (!this.mask.masked.lazy) {
            this.input.classList.add('active');
        }
        this.mask.on('accept', function () {
            _this.input.classList.remove('error');
            switch (_this.mask.value) {
                case '+7(': {
                    _this.mask.value = '';
                    break;
                }
                case '': {
                    _this.input.classList.remove('active');
                    break;
                }
                default: {
                    _this.input.classList.add('active');
                    break;
                }
            }
        });
        return this;
    };
    return InputMask;
}(_input__WEBPACK_IMPORTED_MODULE_0__["Input"]));



/***/ }),

/***/ "./markup/components/form/input/input-select/input-select.ts":
/*!*******************************************************************!*\
  !*** ./markup/components/form/input/input-select/input-select.ts ***!
  \*******************************************************************/
/*! exports provided: InputSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSelect", function() { return InputSelect; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input */ "./markup/components/form/input/input.ts");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.min.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var InputSelect = /** @class */ (function (_super) {
    __extends(InputSelect, _super);
    function InputSelect(element) {
        var _this = this;
        var choises = new choices_js__WEBPACK_IMPORTED_MODULE_1___default.a(element);
        _this = _super.call(this, element) || this;
        _this.isEmptyListener();
        return _this;
    }
    InputSelect.prototype.getData = function () {
        var el = this.input;
        return {
            name: el.getAttribute('name'),
            value: el.options[el.selectedIndex].value
        };
    };
    return InputSelect;
}(_input__WEBPACK_IMPORTED_MODULE_0__["Input"]));



/***/ }),

/***/ "./markup/components/form/input/input.ts":
/*!***********************************************!*\
  !*** ./markup/components/form/input/input.ts ***!
  \***********************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _helpers_validation_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../helpers/validation/validation */ "./markup/helpers/validation/validation.ts");

var Input = /** @class */ (function () {
    function Input(element) {
        var _this = this;
        this.customValidation = new _helpers_validation_validation__WEBPACK_IMPORTED_MODULE_0__["CustomValidation"]();
        this.input = element;
        this.errorNode = this.input.parentNode.querySelector('.error');
        this.input.addEventListener('invalid', function (e) {
            _this.check();
            e.preventDefault();
        });
        this.input.addEventListener('change', function (e) {
            _this.check();
        });
        return this;
    }
    Input.prototype.check = function () {
        this.input.setCustomValidity(this.customValidation
            .checkValidity(this.input)
            .getInvaliditiesString());
        this.setError();
    };
    Input.prototype.setError = function () {
        if (this.errorNode) {
            this.errorNode.innerHTML = this.customValidation.getInvaliditiesForHTML();
        }
        else {
            this.errorNode = document.createElement('div');
            this.errorNode.classList.add('error');
            this.errorNode.innerHTML = this.customValidation.getInvaliditiesForHTML();
            this.input.insertAdjacentElement('afterend', this.errorNode);
        }
    };
    Input.prototype.clear = function () {
        this.input.value = '';
        return this;
    };
    Input.prototype.isEmptyListener = function () {
        var _this = this;
        this.input.addEventListener('change', function (e) {
            _this.input.classList.remove('error');
            if (_this.input.value !== '') {
                _this.input.classList.add('active');
            }
            else {
                _this.input.classList.remove('active');
            }
            return _this;
        });
    };
    Input.prototype.disabled = function () {
        this.input.setAttribute('disabled', 'disabled');
        return this;
    };
    Input.prototype.enabled = function () {
        this.input.removeAttribute('disabled');
        return this;
    };
    Input.prototype.getData = function () {
        return {
            name: this.input.getAttribute('name'),
            value: this.input.value
        };
    };
    Input.prototype.error = function () {
        this.input.classList.add('error');
    };
    return Input;
}());



/***/ }),

/***/ "./markup/components/header/header.ts":
/*!********************************************!*\
  !*** ./markup/components/header/header.ts ***!
  \********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./markup/components/index.ts");

var Header = /** @class */ (function () {
    function Header() {
    }
    Header.init = function () {
        var modal = new _index__WEBPACK_IMPORTED_MODULE_0__["Modal"](document.getElementsByClassName('modal')[0]);
        var button = document.getElementsByClassName('header')[0];
        button.addEventListener('click', function (e) {
            e.preventDefault();
            modal.open();
        });
    };
    return Header;
}());



/***/ }),

/***/ "./markup/components/index.ts":
/*!************************************!*\
  !*** ./markup/components/index.ts ***!
  \************************************/
/*! exports provided: Header, Modal, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ "./markup/components/header/header.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header_header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });

/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal */ "./markup/components/modal/modal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal_modal__WEBPACK_IMPORTED_MODULE_1__["Modal"]; });

/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form */ "./markup/components/form/form.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form_form__WEBPACK_IMPORTED_MODULE_2__["Form"]; });






/***/ }),

/***/ "./markup/components/modal/modal.ts":
/*!******************************************!*\
  !*** ./markup/components/modal/modal.ts ***!
  \******************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
var Modal = /** @class */ (function () {
    function Modal(element) {
        this.elem = element;
        this.elem.classList.add('hidden');
        this.buttonClose = this.elem.getElementsByClassName('close')[0];
    }
    Modal.init = function () {
        var className = 'cf-modal';
        var elements = document.getElementsByClassName(className);
        var elemArr = Array.from(elements);
        elemArr.map(function (elem) {
            new Modal(elem);
        });
    };
    Modal.prototype.close = function () {
        document.body.classList.remove('scroll-hidden');
        this.elem.classList.add('hidden');
    };
    Modal.prototype.open = function () {
        document.body.classList.add('scroll-hidden');
        this.elem.classList.remove('hidden');
    };
    Object.defineProperty(Modal.prototype, "buttonClose", {
        get: function () {
            return this._buttonClose;
        },
        set: function (elem) {
            var _this = this;
            if (elem) {
                this._buttonClose = elem;
            }
            else {
                var button = this.elem.appendChild(document.createElement('button'));
                button.className = 'close';
                this._buttonClose = button;
            }
            this._buttonClose.addEventListener('click', function (event) {
                event.preventDefault();
                _this.close();
            });
        },
        enumerable: true,
        configurable: true
    });
    return Modal;
}());



/***/ }),

/***/ "./markup/helpers/validation/validation.ts":
/*!*************************************************!*\
  !*** ./markup/helpers/validation/validation.ts ***!
  \*************************************************/
/*! exports provided: CustomValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidation", function() { return CustomValidation; });
var CustomValidation = /** @class */ (function () {
    function CustomValidation() {
        this._invalidities = new Set;
    }
    Object.defineProperty(CustomValidation.prototype, "invalidities", {
        get: function () {
            return this._invalidities;
        },
        set: function (value) {
            this._invalidities = value;
        },
        enumerable: true,
        configurable: true
    });
    CustomValidation.prototype.getInvaliditiesString = function () {
        return Array.from(this._invalidities).join(' \n');
    };
    CustomValidation.prototype.getInvaliditiesForHTML = function () {
        return Array.from(this._invalidities).join('<br>');
    };
    CustomValidation.prototype.invaliditiesReset = function () {
        this._invalidities.clear();
    };
    CustomValidation.prototype.checkValidity = function (elem) {
        this.invaliditiesReset();
        var validity = elem.validity;
        var flag = true;
        if (validity.patternMismatch) {
            var customError = elem.title || 'Введенное значение не соответствует требуемому.';
            this.invalidities.add(customError);
            flag = false;
        }
        if (validity.rangeOverflow) {
            var max = elem.max;
            this.invalidities.add("\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 " + max + ".");
            flag = false;
        }
        if (validity.rangeUnderflow) {
            var min = elem.min;
            this.invalidities.add("\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 " + min + ".");
            flag = false;
        }
        if (validity.stepMismatch) {
            var step = elem.step;
            this.invalidities.add("\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u043E " + step + ".");
            flag = false;
        }
        if (validity.valueMissing) {
            this.invalidities.add("\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E.");
            flag = false;
        }
        if (validity.typeMismatch) {
            var customError = void 0;
            switch (elem.type) {
                case 'tel':
                    customError = 'Пожалуйста, введите номер телефона в необходимом формате';
                    break;
                case 'email':
                    customError = 'Пожалуйства, введите email в формате "email@example.com"';
                    break;
                default:
                    customError = 'Пожалуйства, введите требуемое значение';
                    break;
            }
            this.invalidities.add(customError);
            flag = false;
        }
        return this;
    };
    return CustomValidation;
}());



/***/ }),

/***/ "./markup/static/ts/main.ts":
/*!**********************************!*\
  !*** ./markup/static/ts/main.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/index */ "./markup/components/index.ts");

(function () {
    [
        _components_index__WEBPACK_IMPORTED_MODULE_0__["Header"],
        _components_index__WEBPACK_IMPORTED_MODULE_0__["Modal"],
        _components_index__WEBPACK_IMPORTED_MODULE_0__["Form"]
    ].map(function (block) { return block.init(); });
})();


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ( true &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/choices.js/public/assets/scripts/choices.min.js":
/*!**********************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/scripts/choices.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! choices.js v7.0.0 | (c) 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/public/assets/scripts/",i(i.s=9)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.diff=t.cloneObject=t.existsInArray=t.isIE11=t.fetchFromObject=t.getWindowHeight=t.dispatchEvent=t.sortByScore=t.sortByAlpha=t.calcWidthOfInput=t.strToEl=t.sanitise=t.isScrolledIntoView=t.getAdjacentEl=t.findAncestorByAttrName=t.wrap=t.isElement=t.isType=t.getType=t.generateId=t.generateChars=t.getRandomNumber=void 0;var n=function(e,t){return Math.floor(Math.random()*(t-e)+e)};t.getRandomNumber=n;var o=function(e){for(var t="",i=0;i<e;i++){t+=n(0,36).toString(36)}return t};t.generateChars=o;t.generateId=function(e,t){var i=e.id||e.name&&"".concat(e.name,"-").concat(o(2))||o(4);return i=i.replace(/(:|\.|\[|\]|,)/g,""),i="".concat(t,"-").concat(i)};var r=function(e){return Object.prototype.toString.call(e).slice(8,-1)};t.getType=r;var s=function(e,t){return null!=t&&r(t)===e};t.isType=s;t.isElement=function(e){return e instanceof Element};t.wrap=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.createElement("div");return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)};t.findAncestorByAttrName=function(e,t){for(var i=e;i;){if(i.hasAttribute(t))return i;i=i.parentElement}return null};t.getAdjacentEl=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e&&t){var n=e.parentNode.parentNode,o=Array.from(n.querySelectorAll(t)),r=o.indexOf(e);return o[r+(i>0?1:-1)]}};t.isScrolledIntoView=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e)return i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop};var a=function(e){return s("String",e)?e.replace(/&/g,"&amp;").replace(/>/g,"&rt;").replace(/</g,"&lt;").replace(/"/g,"&quot;"):e};t.sanitise=a;var c,l=(c=document.createElement("div"),function(e){var t=e.trim();c.innerHTML=t;for(var i=c.children[0];c.firstChild;)c.removeChild(c.firstChild);return i});t.strToEl=l;t.calcWidthOfInput=function(e,t){var i=e.value||e.placeholder,n=e.offsetWidth;if(i){var o=l("<span>".concat(a(i),"</span>"));if(o.style.position="absolute",o.style.padding="0",o.style.top="-9999px",o.style.left="-9999px",o.style.width="auto",o.style.whiteSpace="pre",document.body.contains(e)&&window.getComputedStyle){var r=window.getComputedStyle(e);r&&(o.style.fontSize=r.fontSize,o.style.fontFamily=r.fontFamily,o.style.fontWeight=r.fontWeight,o.style.fontStyle=r.fontStyle,o.style.letterSpacing=r.letterSpacing,o.style.textTransform=r.textTransform,o.style.padding=r.padding)}document.body.appendChild(o),requestAnimationFrame(function(){i&&o.offsetWidth!==e.offsetWidth&&(n=o.offsetWidth+4),document.body.removeChild(o),t.call(void 0,"".concat(n,"px"))})}else t.call(void 0,"".concat(n,"px"))};t.sortByAlpha=function(e,t){var i="".concat(e.label||e.value).toLowerCase(),n="".concat(t.label||t.value).toLowerCase();return i<n?-1:i>n?1:0};t.sortByScore=function(e,t){return e.score-t.score};t.dispatchEvent=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)};t.getWindowHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)};t.fetchFromObject=function e(t,i){var n=i.indexOf(".");return n>-1?e(t[i.substring(0,n)],i.substr(n+1)):t[i]};t.isIE11=function(){return!(!navigator.userAgent.match(/Trident/)||!navigator.userAgent.match(/rv[ :]11/))};t.existsInArray=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value";return e.some(function(e){return s("String",t)?e[i]===t.trim():e[i]===t})};t.cloneObject=function(e){return JSON.parse(JSON.stringify(e))};t.diff=function(e,t){var i=Object.keys(e).sort(),n=Object.keys(t).sort();return i.filter(function(e){return n.indexOf(e)<0})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SCROLLING_SPEED=t.KEY_CODES=t.ACTION_TYPES=t.EVENTS=t.DEFAULT_CONFIG=t.DEFAULT_CLASSNAMES=void 0;var n=i(0),o={containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",hiddenState:"is-hidden",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"};t.DEFAULT_CLASSNAMES=o;var r={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,addItemFilterFn:null,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sortFn:n.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(e){return'Press Enter to add <b>"'.concat((0,n.sanitise)(e),'"</b>')},maxItemText:function(e){return"Only ".concat(e," values can be added")},itemComparer:function(e,t){return e===t},fuseOptions:{includeScore:!0},callbackOnInit:null,callbackOnCreateTemplates:null,classNames:o};t.DEFAULT_CONFIG=r;t.EVENTS={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice"};t.ACTION_TYPES={ADD_CHOICE:"ADD_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM",CLEAR_ALL:"CLEAR_ALL"};t.KEY_CODES={BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34};t.SCROLLING_SPEED=4},function(e,t,i){"use strict";(function(e,n){var o,r=i(7);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var s=Object(r.a)(o);t.a=s}).call(this,i(3),i(14)(e))},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(0);function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){var i=t.element,o=t.classNames;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{element:i,classNames:o}),!(0,n.isElement)(i))throw new TypeError("Invalid element passed");this.isDisabled=!1}var t,i,r;return t=e,(i=[{key:"conceal",value:function(){this.element.classList.add(this.classNames.input),this.element.classList.add(this.classNames.hiddenState),this.element.tabIndex="-1";var e=this.element.getAttribute("style");e&&this.element.setAttribute("data-choice-orig-style",e),this.element.setAttribute("aria-hidden","true"),this.element.setAttribute("data-choice","active")}},{key:"reveal",value:function(){this.element.classList.remove(this.classNames.input),this.element.classList.remove(this.classNames.hiddenState),this.element.removeAttribute("tabindex");var e=this.element.getAttribute("data-choice-orig-style");e?(this.element.removeAttribute("data-choice-orig-style"),this.element.setAttribute("style",e)):this.element.removeAttribute("style"),this.element.removeAttribute("aria-hidden"),this.element.removeAttribute("data-choice"),this.element.value=this.element.value}},{key:"enable",value:function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1}},{key:"disable",value:function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0}},{key:"triggerEvent",value:function(e,t){(0,n.dispatchEvent)(this.element,e,t)}},{key:"value",get:function(){return this.element.value}}])&&o(t.prototype,i),r&&o(t,r),e}();t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TEMPLATES=void 0;var n,o=(n=i(27))&&n.__esModule?n:{default:n},r=i(0);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a={containerOuter:function(e,t,i,n,o,s){var a=n?'tabindex="0"':"",c=i?'role="listbox"':"",l="";return i&&o&&(c='role="combobox"',l='aria-autocomplete="list"'),(0,r.strToEl)('\n      <div\n        class="'.concat(e.containerOuter,'"\n        data-type="').concat(s,'"\n        ').concat(c,"\n        ").concat(a,"\n        ").concat(l,'\n        aria-haspopup="true"\n        aria-expanded="false"\n        dir="').concat(t,'"\n        >\n      </div>\n    '))},containerInner:function(e){return(0,r.strToEl)('\n      <div class="'.concat(e.containerInner,'"></div>\n    '))},itemList:function(e,t){var i,n=(0,o.default)(e.list,(s(i={},e.listSingle,t),s(i,e.listItems,!t),i));return(0,r.strToEl)('\n      <div class="'.concat(n,'"></div>\n    '))},placeholder:function(e,t){return(0,r.strToEl)('\n      <div class="'.concat(e.placeholder,'">\n        ').concat(t,"\n      </div>\n    "))},item:function(e,t,i){var n,a,c=t.active?'aria-selected="true"':"",l=t.disabled?'aria-disabled="true"':"",u=(0,o.default)(e.item,(s(n={},e.highlightedState,t.highlighted),s(n,e.itemSelectable,!t.highlighted),s(n,e.placeholder,t.placeholder),n));return i?(u=(0,o.default)(e.item,(s(a={},e.highlightedState,t.highlighted),s(a,e.itemSelectable,!t.disabled),s(a,e.placeholder,t.placeholder),a)),(0,r.strToEl)('\n        <div\n          class="'.concat(u,'"\n          data-item\n          data-id="').concat(t.id,'"\n          data-value="').concat(t.value,"\"\n          data-custom-properties='").concat(t.customProperties,"'\n          data-deletable\n          ").concat(c,"\n          ").concat(l,"\n          >\n          ").concat(t.label,'\x3c!--\n       --\x3e<button\n            type="button"\n            class="').concat(e.button,'"\n            data-button\n            aria-label="Remove item: \'').concat(t.value,"'\"\n            >\n            Remove item\n          </button>\n        </div>\n      "))):(0,r.strToEl)('\n      <div\n        class="'.concat(u,'"\n        data-item\n        data-id="').concat(t.id,'"\n        data-value="').concat(t.value,'"\n        ').concat(c,"\n        ").concat(l,"\n        >\n        ").concat(t.label,"\n      </div>\n    "))},choiceList:function(e,t){var i=t?"":'aria-multiselectable="true"';return(0,r.strToEl)('\n      <div\n        class="'.concat(e.list,'"\n        dir="ltr"\n        role="listbox"\n        ').concat(i,"\n        >\n      </div>\n    "))},choiceGroup:function(e,t){var i=t.disabled?'aria-disabled="true"':"",n=(0,o.default)(e.group,s({},e.itemDisabled,t.disabled));return(0,r.strToEl)('\n      <div\n        class="'.concat(n,'"\n        data-group\n        data-id="').concat(t.id,'"\n        data-value="').concat(t.value,'"\n        role="group"\n        ').concat(i,'\n        >\n        <div class="').concat(e.groupHeading,'">').concat(t.value,"</div>\n      </div>\n    "))},choice:function(e,t,i){var n,a=t.groupId>0?'role="treeitem"':'role="option"',c=(0,o.default)(e.item,e.itemChoice,(s(n={},e.itemDisabled,t.disabled),s(n,e.itemSelectable,!t.disabled),s(n,e.placeholder,t.placeholder),n));return(0,r.strToEl)('\n      <div\n        class="'.concat(c,'"\n        data-select-text="').concat(i,'"\n        data-choice\n        data-id="').concat(t.id,'"\n        data-value="').concat(t.value,'"\n        ').concat(t.disabled?'data-choice-disabled aria-disabled="true"':"data-choice-selectable",'\n        id="').concat(t.elementId,'"\n        ').concat(a,"\n        >\n        ").concat(t.label,"\n      </div>\n    "))},input:function(e){var t=(0,o.default)(e.input,e.inputCloned);return(0,r.strToEl)('\n      <input\n        type="text"\n        class="'.concat(t,'"\n        autocomplete="off"\n        autocapitalize="off"\n        spellcheck="false"\n        role="textbox"\n        aria-autocomplete="list"\n        >\n    '))},dropdown:function(e){var t=(0,o.default)(e.list,e.listDropdown);return(0,r.strToEl)('\n      <div\n        class="'.concat(t,'"\n        aria-expanded="false"\n        >\n      </div>\n    '))},notice:function(e,t){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=(0,o.default)(e.item,e.itemChoice,(s(i={},e.noResults,"no-results"===n),s(i,e.noChoices,"no-choices"===n),i));return(0,r.strToEl)('\n      <div class="'.concat(a,'">\n        ').concat(t,"\n      </div>\n    "))},option:function(e){return(0,r.strToEl)('\n      <option value="'.concat(e.value,'" ').concat(e.active?"selected":""," ").concat(e.disabled?"disabled":""," ").concat(e.customProperties?"data-custom-properties=".concat(e.customProperties):"",">").concat(e.label,"</option>\n    "))}};t.TEMPLATES=a;var c=a;t.default=c},function(e,t,i){"use strict";i.r(t);var n=i(8),o="object"==typeof self&&self&&self.Object===Object&&self,r=(n.a||o||Function("return this")()).Symbol,s=Object.prototype,a=s.hasOwnProperty,c=s.toString,l=r?r.toStringTag:void 0;var u=function(e){var t=a.call(e,l),i=e[l];try{e[l]=void 0;var n=!0}catch(e){}var o=c.call(e);return n&&(t?e[l]=i:delete e[l]),o},h=Object.prototype.toString;var d=function(e){return h.call(e)},f="[object Null]",p="[object Undefined]",v=r?r.toStringTag:void 0;var m=function(e){return null==e?void 0===e?p:f:v&&v in Object(e)?u(e):d(e)};var g=function(e,t){return function(i){return e(t(i))}}(Object.getPrototypeOf,Object);var _=function(e){return null!=e&&"object"==typeof e},y="[object Object]",b=Function.prototype,E=Object.prototype,S=b.toString,I=E.hasOwnProperty,O=S.call(Object);var C=function(e){if(!_(e)||m(e)!=y)return!1;var t=g(e);if(null===t)return!0;var i=I.call(t,"constructor")&&t.constructor;return"function"==typeof i&&i instanceof i&&S.call(i)==O},T=i(2),w={INIT:"@@redux/INIT"};function k(e,t,i){var n;if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(k)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,r=t,s=[],a=s,c=!1;function l(){a===s&&(a=s.slice())}function u(){return r}function h(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return l(),a.push(e),function(){if(t){t=!1,l();var i=a.indexOf(e);a.splice(i,1)}}}function d(e){if(!C(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,r=o(r,e)}finally{c=!1}for(var t=s=a,i=0;i<t.length;i++){(0,t[i])()}return e}return d({type:w.INIT}),(n={dispatch:d,subscribe:h,getState:u,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,d({type:w.INIT})}})[T.a]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");function i(){e.next&&e.next(u())}return i(),{unsubscribe:t(i)}}})[T.a]=function(){return this},e},n}function A(e,t){var i=t&&t.type;return"Given action "+(i&&'"'+i.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function L(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(i[o]=e[o])}var r=Object.keys(i);var s=void 0;try{!function(e){Object.keys(e).forEach(function(t){var i=e[t];if(void 0===i(void 0,{type:w.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===i(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+w.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(i)}catch(e){s=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(s)throw s;for(var n=!1,o={},a=0;a<r.length;a++){var c=r[a],l=i[c],u=e[c],h=l(u,t);if(void 0===h){var d=A(c,t);throw new Error(d)}o[c]=h,n=n||h!==u}return n?o:e}}function x(e,t){return function(){return t(e.apply(void 0,arguments))}}function P(e,t){if("function"==typeof e)return x(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var i=Object.keys(e),n={},o=0;o<i.length;o++){var r=i[o],s=e[r];"function"==typeof s&&(n[r]=x(s,t))}return n}function D(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}var j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};function M(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(i,n,o){var r,s=e(i,n,o),a=s.dispatch,c={getState:s.getState,dispatch:function(e){return a(e)}};return r=t.map(function(e){return e(c)}),a=D.apply(void 0,r)(s.dispatch),j({},s,{dispatch:a})}}}i.d(t,"createStore",function(){return k}),i.d(t,"combineReducers",function(){return L}),i.d(t,"bindActionCreators",function(){return P}),i.d(t,"applyMiddleware",function(){return M}),i.d(t,"compose",function(){return D})},function(e,t,i){"use strict";function n(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}i.d(t,"a",function(){return n})},function(e,t,i){"use strict";(function(e){var i="object"==typeof e&&e&&e.Object===Object&&e;t.a=i}).call(this,i(3))},function(e,t,i){e.exports=i(10)},function(e,t,i){"use strict";var n=v(i(11)),o=v(i(12)),r=v(i(13)),s=i(20),a=i(1),c=i(5),l=i(28),u=i(29),h=i(30),d=i(31),f=i(32),p=i(0);function v(e){return e&&e.__esModule?e:{default:e}}function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function g(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[data-choice]",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(0,p.isType)("String",t)){var n=Array.from(document.querySelectorAll(t));if(n.length>1)return this._generateInstances(n,i)}this.config=o.default.all([a.DEFAULT_CONFIG,e.userDefaults,i],{arrayMerge:function(e,t){return[].concat(t)}});var c=(0,p.diff)(this.config,a.DEFAULT_CONFIG);c.length&&console.warn("Unknown config option(s) passed",c.join(", ")),["auto","always"].includes(this.config.renderSelectedChoices)||(this.config.renderSelectedChoices="auto");var l=(0,p.isType)("String",t)?document.querySelector(t):t;return l?(this._isTextElement="text"===l.type,this._isSelectOneElement="select-one"===l.type,this._isSelectMultipleElement="select-multiple"===l.type,this._isSelectElement=this._isSelectOneElement||this._isSelectMultipleElement,this._isTextElement?this.passedElement=new s.WrappedInput({element:l,classNames:this.config.classNames,delimiter:this.config.delimiter}):this._isSelectElement&&(this.passedElement=new s.WrappedSelect({element:l,classNames:this.config.classNames})),this.passedElement?(!0===this.config.shouldSortItems&&this._isSelectOneElement&&!this.config.silent&&console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false."),this.initialised=!1,this._store=new r.default(this.render),this._initialState={},this._currentState={},this._prevState={},this._currentValue="",this._canSearch=this.config.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=(0,p.generateId)(this.passedElement.element,"choices-"),this._direction=this.passedElement.element.getAttribute("dir")||"ltr",this._idNames={itemChoice:"item-choice"},this._presetChoices=this.config.choices,this._presetItems=this.config.items,this.passedElement.value&&(this._presetItems=this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))),this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onAKey=this._onAKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),"active"===this.passedElement.element.getAttribute("data-choice")&&console.warn("Trying to initialise Choices on element already initialised"),void this.init()):console.error("Passed element was of an invalid type")):console.error("Could not find passed element or passed element was of an invalid type")}var t,i,v;return t=e,(i=[{key:"init",value:function(){if(!this.initialised){this._createTemplates(),this._createElements(),this._createStructure(),this._initialState=(0,p.cloneObject)(this._store.state),this._store.subscribe(this._render),this._render(),this._addEventListeners(),(!this.config.addItems||this.passedElement.element.hasAttribute("disabled"))&&this.disable(),this.initialised=!0;var e=this.config.callbackOnInit;e&&(0,p.isType)("Function",e)&&e.call(this)}}},{key:"destroy",value:function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this._isSelectElement&&(this.passedElement.options=this._presetChoices),this.clearStore(),this.config.templates=null,this.initialised=!1)}},{key:"enable",value:function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this}},{key:"disable",value:function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this}},{key:"highlightItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return this;var i=e.id,n=e.groupId,o=void 0===n?-1:n,r=e.value,s=void 0===r?"":r,c=e.label,l=void 0===c?"":c,h=o>=0?this._store.getGroupById(o):null;return this._store.dispatch((0,u.highlightItem)(i,!0)),t&&this.passedElement.triggerEvent(a.EVENTS.highlightItem,{id:i,value:s,label:l,groupValue:h&&h.value?h.value:null}),this}},{key:"unhighlightItem",value:function(e){if(!e)return this;var t=e.id,i=e.groupId,n=void 0===i?-1:i,o=e.value,r=void 0===o?"":o,s=e.label,c=void 0===s?"":s,l=n>=0?this._store.getGroupById(n):null;return this._store.dispatch((0,u.highlightItem)(t,!1)),this.passedElement.triggerEvent(a.EVENTS.highlightItem,{id:t,value:r,label:c,groupValue:l&&l.value?l.value:null}),this}},{key:"highlightAll",value:function(){var e=this;return this._store.items.forEach(function(t){return e.highlightItem(t)}),this}},{key:"unhighlightAll",value:function(){var e=this;return this._store.items.forEach(function(t){return e.unhighlightItem(t)}),this}},{key:"removeActiveItemsByValue",value:function(e){var t=this;return this._store.activeItems.filter(function(t){return t.value===e}).forEach(function(e){return t._removeItem(e)}),this}},{key:"removeActiveItems",value:function(e){var t=this;return this._store.activeItems.filter(function(t){return t.id!==e}).forEach(function(e){return t._removeItem(e)}),this}},{key:"removeHighlightedItems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._store.highlightedActiveItems.forEach(function(i){e._removeItem(i),t&&e._triggerChange(i.value)}),this}},{key:"showDropdown",value:function(e){var t=this;return this.dropdown.isActive?this:(requestAnimationFrame(function(){t.dropdown.show(),t.containerOuter.open(t.dropdown.distanceFromTopWindow()),!e&&t._canSearch&&t.input.focus(),t.passedElement.triggerEvent(a.EVENTS.showDropdown,{})}),this)}},{key:"hideDropdown",value:function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame(function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent(a.EVENTS.hideDropdown,{})}),this):this}},{key:"getValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._store.activeItems.reduce(function(t,i){var n=e?i.value:i;return t.push(n),t},[]);return this._isSelectOneElement?t[0]:t}},{key:"setValue",value:function(e){var t=this;return this.initialised?([].concat(e).forEach(function(e){return t._setChoiceOrItem(e)}),this):this}},{key:"setChoiceByValue",value:function(e){var t=this;return!this.initialised||this._isTextElement?this:(((0,p.isType)("Array",e)?e:[e]).forEach(function(e){return t._findAndSelectChoiceByValue(e)}),this)}},{key:"setChoices",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!this._isSelectElement||!i)return this;o&&this.clearChoices(),this.containerOuter.removeLoadingState();return this._setLoading(!0),t.forEach(function(t){t.choices?e._addGroup({group:t,id:t.id||null,valueKey:i,labelKey:n}):e._addChoice({value:t[i],label:t[n],isSelected:t.selected,isDisabled:t.disabled,customProperties:t.customProperties,placeholder:t.placeholder})}),this._setLoading(!1),this}},{key:"clearChoices",value:function(){this._store.dispatch((0,l.clearChoices)())}},{key:"clearStore",value:function(){return this._store.dispatch((0,d.clearAll)()),this}},{key:"clearInput",value:function(){var e=!this._isSelectOneElement;return this.input.clear(e),!this._isTextElement&&this._canSearch&&(this._isSearching=!1,this._store.dispatch((0,l.activateChoices)(!0))),this}},{key:"ajax",value:function(e){var t=this;return this.initialised&&this._isSelectElement&&e?(requestAnimationFrame(function(){return t._handleLoadingState(!0)}),e(this._ajaxCallback()),this):this}},{key:"_render",value:function(){if(!this._store.isLoading()){this._currentState=this._store.state;var e=this._currentState.choices!==this._prevState.choices||this._currentState.groups!==this._prevState.groups||this._currentState.items!==this._prevState.items,t=this._isSelectElement,i=this._currentState.items!==this._prevState.items;e&&(t&&this._renderChoices(),i&&this._renderItems(),this._prevState=this._currentState)}}},{key:"_renderChoices",value:function(){var e=this,t=this._store,i=t.activeGroups,n=t.activeChoices,o=document.createDocumentFragment();if(this.choiceList.clear(),this.config.resetScrollPosition&&requestAnimationFrame(function(){return e.choiceList.scrollToTop()}),i.length>=1&&!this._isSearching){var r=n.filter(function(e){return!0===e.placeholder&&-1===e.groupId});r.length>=1&&(o=this._createChoicesFragment(r,o)),o=this._createGroupsFragment(i,n,o)}else n.length>=1&&(o=this._createChoicesFragment(n,o));if(o.childNodes&&o.childNodes.length>0){var s=this._store.activeItems,a=this._canAddItem(s,this.input.value);a.response?(this.choiceList.append(o),this._highlightChoice()):this.choiceList.append(this._getTemplate("notice",a.notice))}else{var c,l;this._isSearching?(l=(0,p.isType)("Function",this.config.noResultsText)?this.config.noResultsText():this.config.noResultsText,c=this._getTemplate("notice",l,"no-results")):(l=(0,p.isType)("Function",this.config.noChoicesText)?this.config.noChoicesText():this.config.noChoicesText,c=this._getTemplate("notice",l,"no-choices")),this.choiceList.append(c)}}},{key:"_renderItems",value:function(){var e=this._store.activeItems||[];this.itemList.clear();var t=this._createItemsFragment(e);t.childNodes&&this.itemList.append(t)}},{key:"_createGroupsFragment",value:function(e,t,i){var n=this,o=i||document.createDocumentFragment();return this.config.shouldSort&&e.sort(this.config.sortFn),e.forEach(function(e){var i=function(e){return t.filter(function(t){return n._isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&("always"===n.config.renderSelectedChoices||!t.selected)})}(e);if(i.length>=1){var r=n._getTemplate("choiceGroup",e);o.appendChild(r),n._createChoicesFragment(i,o,!0)}}),o}},{key:"_createChoicesFragment",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=t||document.createDocumentFragment(),r=this.config,s=r.renderSelectedChoices,a=r.searchResultLimit,c=r.renderChoiceLimit,l=this._isSearching?p.sortByScore:this.config.sortFn,u=function(e){if("auto"!==s||(i._isSelectOneElement||!e.selected)){var t=i._getTemplate("choice",e,i.config.itemSelectText);o.appendChild(t)}},h=e;"auto"!==s||this._isSelectOneElement||(h=e.filter(function(e){return!e.selected}));var d=h.reduce(function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e},{placeholderChoices:[],normalChoices:[]}),f=d.placeholderChoices,v=d.normalChoices;(this.config.shouldSort||this._isSearching)&&v.sort(l);var m=h.length,g=[].concat(f,v);this._isSearching?m=a:c>0&&!n&&(m=c);for(var _=0;_<m;_+=1)g[_]&&u(g[_]);return o}},{key:"_createItemsFragment",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.config,o=n.shouldSortItems,r=n.sortFn,s=n.removeItemButton,a=i||document.createDocumentFragment();o&&!this._isSelectOneElement&&e.sort(r),this._isTextElement?this.passedElement.value=e:this.passedElement.options=e;return e.forEach(function(e){return function(e){var i=t._getTemplate("item",e,s);a.appendChild(i)}(e)}),a}},{key:"_triggerChange",value:function(e){null!=e&&this.passedElement.triggerEvent(a.EVENTS.change,{value:e})}},{key:"_selectPlaceholderChoice",value:function(){var e=this._store.placeholderChoice;e&&(this._addItem({value:e.value,label:e.label,choiceId:e.id,groupId:e.groupId,placeholder:e.placeholder}),this._triggerChange(e.value))}},{key:"_handleButtonAction",value:function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode.getAttribute("data-id"),n=e.find(function(e){return e.id===parseInt(i,10)});this._removeItem(n),this._triggerChange(n.value),this._isSelectOneElement&&this._selectPlaceholderChoice()}}},{key:"_handleItemAction",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e&&t&&this.config.removeItems&&!this._isSelectOneElement){var o=t.getAttribute("data-id");e.forEach(function(e){e.id!==parseInt(o,10)||e.highlighted?!n&&e.highlighted&&i.unhighlightItem(e):i.highlightItem(e)}),this.input.focus()}}},{key:"_handleChoiceAction",value:function(e,t){if(e&&t){var i=t.getAttribute("data-id"),n=this._store.getChoiceById(i),o=e[0]&&e[0].keyCode?e[0].keyCode:null,r=this.dropdown.isActive;if(n.keyCode=o,this.passedElement.triggerEvent(a.EVENTS.choice,{choice:n}),n&&!n.selected&&!n.disabled)this._canAddItem(e,n.value).response&&(this._addItem({value:n.value,label:n.label,choiceId:n.id,groupId:n.groupId,customProperties:n.customProperties,placeholder:n.placeholder,keyCode:n.keyCode}),this._triggerChange(n.value));this.clearInput(),r&&this._isSelectOneElement&&(this.hideDropdown(!0),this.containerOuter.focus())}}},{key:"_handleBackspace",value:function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some(function(e){return e.highlighted});this.config.editItems&&!i&&t?(this.input.value=t.value,this.input.setWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}}},{key:"_setLoading",value:function(e){this._store.dispatch((0,f.setIsLoading)(e))}},{key:"_handleLoadingState",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.itemList.getChild(".".concat(this.config.classNames.placeholder));e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText),this.itemList.append(t)):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?t.innerHTML=this._placeholderValue||"":this.input.placeholder=this._placeholderValue||"")}},{key:"_handleSearch",value:function(e){if(e&&this.input.isFocussed){var t=this._store.choices,i=this.config,n=i.searchFloor,o=i.searchChoices,r=t.some(function(e){return!e.active});if(e&&e.length>=n){var s=o?this._searchChoices(e):0;this.passedElement.triggerEvent(a.EVENTS.search,{value:e,resultCount:s})}else r&&(this._isSearching=!1,this._store.dispatch((0,l.activateChoices)(!0)))}}},{key:"_canAddItem",value:function(e,t){var i=!0,n=(0,p.isType)("Function",this.config.addItemText)?this.config.addItemText(t):this.config.addItemText;if(!this._isSelectOneElement){var o=(0,p.existsInArray)(e,t);this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n=(0,p.isType)("Function",this.config.maxItemText)?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),!this.config.duplicateItemsAllowed&&o&&i&&(i=!1,n=(0,p.isType)("Function",this.config.uniqueItemText)?this.config.uniqueItemText(t):this.config.uniqueItemText),this._isTextElement&&this.config.addItems&&i&&(0,p.isType)("Function",this.config.addItemFilterFn)&&!this.config.addItemFilterFn(t)&&(i=!1,n=(0,p.isType)("Function",this.config.customAddItemText)?this.config.customAddItemText(t):this.config.customAddItemText)}return{response:i,notice:n}}},{key:"_ajaxCallback",value:function(){var e=this;return function(t,i,n){if(t&&i){var o=(0,p.isType)("Object",t)?[t]:t;o&&(0,p.isType)("Array",o)&&o.length?(e._handleLoadingState(!1),e._setLoading(!0),o.forEach(function(t){t.choices?e._addGroup({group:t,id:t.id||null,valueKey:i,labelKey:n}):e._addChoice({value:(0,p.fetchFromObject)(t,i),label:(0,p.fetchFromObject)(t,n),isSelected:t.selected,isDisabled:t.disabled,customProperties:t.customProperties,placeholder:t.placeholder})}),e._setLoading(!1),e._isSelectOneElement&&e._selectPlaceholderChoice()):e._handleLoadingState(!1)}}}},{key:"_searchChoices",value:function(e){var t=(0,p.isType)("String",e)?e.trim():e,i=(0,p.isType)("String",this._currentValue)?this._currentValue.trim():this._currentValue;if(t.length<1&&t==="".concat(i," "))return 0;var o=this._store.searchableChoices,r=t,s=[].concat(this.config.searchFields),a=Object.assign(this.config.fuseOptions,{keys:s}),c=new n.default(o,a).search(r);return this._currentValue=t,this._highlightPosition=0,this._isSearching=!0,this._store.dispatch((0,l.filterChoices)(c)),c.length}},{key:"_addEventListeners",value:function(){document.addEventListener("keyup",this._onKeyUp),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("click",this._onClick),document.addEventListener("touchmove",this._onTouchMove),document.addEventListener("touchend",this._onTouchEnd),document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.addEventListener("focus",this._onFocus),this.containerOuter.element.addEventListener("blur",this._onBlur)),this.input.element.addEventListener("focus",this._onFocus),this.input.element.addEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.addEventListener("reset",this._onFormReset),this.input.addEventListeners()}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("click",this._onClick),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.removeEventListener("focus",this._onFocus),this.containerOuter.element.removeEventListener("blur",this._onBlur)),this.input.element.removeEventListener("focus",this._onFocus),this.input.element.removeEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()}},{key:"_onKeyDown",value:function(e){var t,i=e.target,n=e.keyCode,o=e.ctrlKey,r=e.metaKey;if(i===this.input.element||this.containerOuter.element.contains(i)){var s=this._store.activeItems,c=this.input.isFocussed,l=this.dropdown.isActive,u=this.itemList.hasChildren,h=String.fromCharCode(n),d=a.KEY_CODES.BACK_KEY,f=a.KEY_CODES.DELETE_KEY,p=a.KEY_CODES.ENTER_KEY,v=a.KEY_CODES.A_KEY,g=a.KEY_CODES.ESC_KEY,_=a.KEY_CODES.UP_KEY,y=a.KEY_CODES.DOWN_KEY,b=a.KEY_CODES.PAGE_UP_KEY,E=a.KEY_CODES.PAGE_DOWN_KEY,S=o||r;!this._isTextElement&&/[a-zA-Z0-9-_ ]/.test(h)&&this.showDropdown();var I=(m(t={},v,this._onAKey),m(t,p,this._onEnterKey),m(t,g,this._onEscapeKey),m(t,_,this._onDirectionKey),m(t,b,this._onDirectionKey),m(t,y,this._onDirectionKey),m(t,E,this._onDirectionKey),m(t,f,this._onDeleteKey),m(t,d,this._onDeleteKey),t);I[n]&&I[n]({event:e,target:i,keyCode:n,metaKey:r,activeItems:s,hasFocusedInput:c,hasActiveDropdown:l,hasItems:u,hasCtrlDownKeyPressed:S})}}},{key:"_onKeyUp",value:function(e){var t=e.target,i=e.keyCode;if(t===this.input.element){var n=this.input.value,o=this._store.activeItems,r=this._canAddItem(o,n),s=a.KEY_CODES.BACK_KEY,c=a.KEY_CODES.DELETE_KEY;if(this._isTextElement){if(r.notice&&n){var u=this._getTemplate("notice",r.notice);this.dropdown.element.innerHTML=u.outerHTML,this.showDropdown(!0)}else this.hideDropdown(!0)}else{var h=(i===s||i===c)&&!t.value,d=!this._isTextElement&&this._isSearching,f=this._canSearch&&r.response;h&&d?(this._isSearching=!1,this._store.dispatch((0,l.activateChoices)(!0))):f&&this._handleSearch(this.input.value)}this._canSearch=this.config.searchEnabled}}},{key:"_onAKey",value:function(e){var t=e.hasItems;e.hasCtrlDownKeyPressed&&t&&(this._canSearch=!1,this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement&&this.highlightAll())}},{key:"_onEnterKey",value:function(e){var t=e.event,i=e.target,n=e.activeItems,o=e.hasActiveDropdown,r=a.KEY_CODES.ENTER_KEY,s=i.hasAttribute("data-button");if(this._isTextElement&&i.value){var c=this.input.value;this._canAddItem(n,c).response&&(this.hideDropdown(!0),this._addItem({value:c}),this._triggerChange(c),this.clearInput())}if(s&&(this._handleButtonAction(n,i),t.preventDefault()),o){var l=this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));l&&(n[0]&&(n[0].keyCode=r),this._handleChoiceAction(n,l)),t.preventDefault()}else this._isSelectOneElement&&(this.showDropdown(),t.preventDefault())}},{key:"_onEscapeKey",value:function(e){e.hasActiveDropdown&&(this.hideDropdown(!0),this.containerOuter.focus())}},{key:"_onDirectionKey",value:function(e){var t=e.event,i=e.hasActiveDropdown,n=e.keyCode,o=e.metaKey,r=a.KEY_CODES.DOWN_KEY,s=a.KEY_CODES.PAGE_UP_KEY,c=a.KEY_CODES.PAGE_DOWN_KEY;if(i||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var l,u=n===r||n===c?1:-1;if(o||n===c||n===s)l=u>0?Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]")).pop():this.dropdown.element.querySelector("[data-choice-selectable]");else{var h=this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));l=h?(0,p.getAdjacentEl)(h,"[data-choice-selectable]",u):this.dropdown.element.querySelector("[data-choice-selectable]")}l&&((0,p.isScrolledIntoView)(l,this.choiceList.element,u)||this.choiceList.scrollToChoice(l,u),this._highlightChoice(l)),t.preventDefault()}}},{key:"_onDeleteKey",value:function(e){var t=e.event,i=e.target,n=e.hasFocusedInput,o=e.activeItems;!n||i.value||this._isSelectOneElement||(this._handleBackspace(o),t.preventDefault())}},{key:"_onTouchMove",value:function(){this._wasTap&&(this._wasTap=!1)}},{key:"_onTouchEnd",value:function(e){var t=(e||e.touches[0]).target;this._wasTap&&this.containerOuter.element.contains(t)&&((t===this.containerOuter.element||t===this.containerInner.element)&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation());this._wasTap=!0}},{key:"_onMouseDown",value:function(e){var t=e.target,i=e.shiftKey;if(this.choiceList.element.contains(t)&&(0,p.isIE11)()&&(this._isScrollingOnIe=!0),this.containerOuter.element.contains(t)&&t!==this.input.element){var n=this._store.activeItems,o=i,r=(0,p.findAncestorByAttrName)(t,"data-button"),s=(0,p.findAncestorByAttrName)(t,"data-item"),a=(0,p.findAncestorByAttrName)(t,"data-choice");r?this._handleButtonAction(n,r):s?this._handleItemAction(n,s,o):a&&this._handleChoiceAction(n,a),e.preventDefault()}}},{key:"_onMouseOver",value:function(e){var t=e.target;(t===this.dropdown||this.dropdown.element.contains(t))&&t.hasAttribute("data-choice")&&this._highlightChoice(t)}},{key:"_onClick",value:function(e){var t=e.target;this.containerOuter.element.contains(t)?this.dropdown.isActive||this.containerOuter.isDisabled?this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),this.containerOuter.focus()):(this._store.highlightedActiveItems&&this.unhighlightAll(),this.containerOuter.removeFocusState(),this.hideDropdown(!0))}},{key:"_onFocus",value:function(e){var t=this,i=e.target;this.containerOuter.element.contains(i)&&{text:function(){i===t.input.element&&t.containerOuter.addFocusState()},"select-one":function(){t.containerOuter.addFocusState(),i===t.input.element&&t.showDropdown(!0)},"select-multiple":function(){i===t.input.element&&(t.showDropdown(!0),t.containerOuter.addFocusState())}}[this.passedElement.element.type]()}},{key:"_onBlur",value:function(e){var t=this,i=e.target;if(this.containerOuter.element.contains(i)&&!this._isScrollingOnIe){var n=this._store.activeItems.some(function(e){return e.highlighted});({text:function(){i===t.input.element&&(t.containerOuter.removeFocusState(),n&&t.unhighlightAll(),t.hideDropdown(!0))},"select-one":function(){t.containerOuter.removeFocusState(),(i===t.input.element||i===t.containerOuter.element&&!t._canSearch)&&t.hideDropdown(!0)},"select-multiple":function(){i===t.input.element&&(t.containerOuter.removeFocusState(),t.hideDropdown(!0),n&&t.unhighlightAll())}})[this.passedElement.element.type]()}else this._isScrollingOnIe=!1,this.input.element.focus()}},{key:"_onFormReset",value:function(){this._store.dispatch((0,d.resetTo)(this._initialState))}},{key:"_highlightChoice",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if(i.length){var n=t;Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach(function(t){t.classList.remove(e.config.classNames.highlightedState),t.setAttribute("aria-selected","false")}),n?this._highlightPosition=i.indexOf(n):(n=i.length>this._highlightPosition?i[this._highlightPosition]:i[i.length-1])||(n=i[0]),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(a.EVENTS.highlightChoice,{el:n}),this.dropdown.isActive&&(this.input.setActiveDescendant(n.id),this.containerOuter.setActiveDescendant(n.id))}}},{key:"_addItem",value:function(e){var t=e.value,i=e.label,n=void 0===i?null:i,o=e.choiceId,r=void 0===o?-1:o,s=e.groupId,c=void 0===s?-1:s,l=e.customProperties,h=void 0===l?null:l,d=e.placeholder,f=void 0!==d&&d,v=e.keyCode,m=void 0===v?null:v,g=(0,p.isType)("String",t)?t.trim():t,_=m,y=h,b=this._store.items,E=n||g,S=parseInt(r,10)||-1,I=c>=0?this._store.getGroupById(c):null,O=b?b.length+1:1;return this.config.prependValue&&(g=this.config.prependValue+g.toString()),this.config.appendValue&&(g+=this.config.appendValue.toString()),this._store.dispatch((0,u.addItem)({value:g,label:E,id:O,choiceId:S,groupId:c,customProperties:h,placeholder:f,keyCode:_})),this._isSelectOneElement&&this.removeActiveItems(O),this.passedElement.triggerEvent(a.EVENTS.addItem,{id:O,value:g,label:E,customProperties:y,groupValue:I&&I.value?I.value:void 0,keyCode:_}),this}},{key:"_removeItem",value:function(e){if(!e||!(0,p.isType)("Object",e))return this;var t=e.id,i=e.value,n=e.label,o=e.choiceId,r=e.groupId,s=r>=0?this._store.getGroupById(r):null;return this._store.dispatch((0,u.removeItem)(t,o)),s&&s.value?this.passedElement.triggerEvent(a.EVENTS.removeItem,{id:t,value:i,label:n,groupValue:s.value}):this.passedElement.triggerEvent(a.EVENTS.removeItem,{id:t,value:i,label:n}),this}},{key:"_addChoice",value:function(e){var t=e.value,i=e.label,n=void 0===i?null:i,o=e.isSelected,r=void 0!==o&&o,s=e.isDisabled,a=void 0!==s&&s,c=e.groupId,u=void 0===c?-1:c,h=e.customProperties,d=void 0===h?null:h,f=e.placeholder,p=void 0!==f&&f,v=e.keyCode,m=void 0===v?null:v;if(null!=t){var g=this._store.choices,_=n||t,y=g?g.length+1:1,b="".concat(this._baseId,"-").concat(this._idNames.itemChoice,"-").concat(y);this._store.dispatch((0,l.addChoice)({value:t,label:_,id:y,groupId:u,disabled:a,elementId:b,customProperties:d,placeholder:p,keyCode:m})),r&&this._addItem({value:t,label:_,choiceId:y,customProperties:d,placeholder:p,keyCode:m})}}},{key:"_addGroup",value:function(e){var t=this,i=e.group,n=e.id,o=e.valueKey,r=void 0===o?"value":o,s=e.labelKey,a=void 0===s?"label":s,c=(0,p.isType)("Object",i)?i.choices:Array.from(i.getElementsByTagName("OPTION")),l=n||Math.floor((new Date).valueOf()*Math.random()),u=!!i.disabled&&i.disabled;if(c){this._store.dispatch((0,h.addGroup)(i.label,l,!0,u));c.forEach(function(e){var i=e.disabled||e.parentNode&&e.parentNode.disabled;t._addChoice({value:e[r],label:(0,p.isType)("Object",e)?e[a]:e.innerHTML,isSelected:e.selected,isDisabled:i,groupId:l,customProperties:e.customProperties,placeholder:e.placeholder})})}else this._store.dispatch((0,h.addGroup)(i.label,i.id,!1,i.disabled))}},{key:"_getTemplate",value:function(e){var t;if(!e)return null;for(var i=this.config,n=i.templates,o=i.classNames,r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];return(t=n[e]).call.apply(t,[this,o].concat(s))}},{key:"_createTemplates",value:function(){var e=this.config.callbackOnCreateTemplates,t={};e&&(0,p.isType)("Function",e)&&(t=e.call(this,p.strToEl)),this.config.templates=(0,o.default)(c.TEMPLATES,t)}},{key:"_createElements",value:function(){this.containerOuter=new s.Container({element:this._getTemplate("containerOuter",this._direction,this._isSelectElement,this._isSelectOneElement,this.config.searchEnabled,this.passedElement.element.type),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.containerInner=new s.Container({element:this._getTemplate("containerInner"),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.input=new s.Input({element:this._getTemplate("input"),classNames:this.config.classNames,type:this.passedElement.element.type}),this.choiceList=new s.List({element:this._getTemplate("choiceList",this._isSelectOneElement)}),this.itemList=new s.List({element:this._getTemplate("itemList",this._isSelectOneElement)}),this.dropdown=new s.Dropdown({element:this._getTemplate("dropdown"),classNames:this.config.classNames,type:this.passedElement.element.type})}},{key:"_createStructure",value:function(){this.passedElement.conceal(),this.containerInner.wrap(this.passedElement.element),this.containerOuter.wrap(this.containerInner.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":this._placeholderValue&&(this.input.placeholder=this._placeholderValue,this.input.setWidth(!0)),this.containerOuter.element.appendChild(this.containerInner.element),this.containerOuter.element.appendChild(this.dropdown.element),this.containerInner.element.appendChild(this.itemList.element),this._isTextElement||this.dropdown.element.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&this.dropdown.element.insertBefore(this.input.element,this.dropdown.element.firstChild):this.containerInner.element.appendChild(this.input.element),this._isSelectElement?this._addPredefinedChoices():this._isTextElement&&this._addPredefinedItems()}},{key:"_addPredefinedChoices",value:function(){var e=this,t=this.passedElement.optionGroups;if(this._highlightPosition=0,this._isSearching=!1,this._setLoading(!0),t&&t.length){var i=this.passedElement.placeholderOption;i&&"SELECT"===i.parentNode.tagName&&this._addChoice({value:i.value,label:i.innerHTML,isSelected:i.selected,isDisabled:i.disabled,placeholder:!0}),t.forEach(function(t){return e._addGroup({group:t,id:t.id||null})})}else{var n=this.passedElement.options,o=this.config.sortFn,r=this._presetChoices;n.forEach(function(e){r.push({value:e.value,label:e.innerHTML,selected:e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:e.hasAttribute("placeholder"),customProperties:e.getAttribute("data-custom-properties")})}),this.config.shouldSort&&r.sort(o);var s=r.some(function(e){return e.selected});r.forEach(function(t,i){return function(t,i){var n=t.value,o=t.label,r=t.customProperties,a=t.placeholder;if(e._isSelectElement)if(t.choices)e._addGroup({group:t,id:t.id||null});else{var c=e._isSelectOneElement&&!s&&0===i,l=!!c||t.selected,u=!c&&t.disabled;e._addChoice({value:n,label:o,isSelected:l,isDisabled:u,customProperties:r,placeholder:a})}else e._addChoice({value:n,label:o,isSelected:t.selected,isDisabled:t.disabled,customProperties:r,placeholder:a})}(t,i)})}this._setLoading(!1)}},{key:"_addPredefinedItems",value:function(){var e=this;this._presetItems.forEach(function(t){return function(t){var i=(0,p.getType)(t);"Object"===i&&t.value?e._addItem({value:t.value,label:t.label,choiceId:t.id,customProperties:t.customProperties,placeholder:t.placeholder}):"String"===i&&e._addItem({value:t})}(t)})}},{key:"_setChoiceOrItem",value:function(e){var t=this;({object:function(){e.value&&(t._isTextElement?t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}):t._addChoice({value:e.value,label:e.label,isSelected:!0,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder}))},string:function(){t._isTextElement?t._addItem({value:e}):t._addChoice({value:e,label:e,isSelected:!0,isDisabled:!1})}})[(0,p.getType)(e).toLowerCase()]()}},{key:"_findAndSelectChoiceByValue",value:function(e){var t=this,i=this._store.choices.find(function(i){return t.config.itemComparer(i.value,e)});i&&!i.selected&&this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode})}},{key:"_generateInstances",value:function(t,i){return t.reduce(function(t,n){return t.push(new e(n,i)),t},[this])}},{key:"_generatePlaceholderValue",value:function(){return!this._isSelectOneElement&&(!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.element.getAttribute("placeholder")))}}])&&g(t.prototype,i),v&&g(t,v),e}();_.userDefaults={},e.exports=_},function(e,t,i){
/*!
 * Fuse.js v3.4.2 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var n;n=function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s="./src/index.js")}({"./src/bitap/bitap_matched_indices.js":
/*!********************************************!*\
  !*** ./src/bitap/bitap_matched_indices.js ***!
  \********************************************/
/*! no static exports found */function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=[],n=-1,o=-1,r=0,s=e.length;r<s;r+=1){var a=e[r];a&&-1===n?n=r:a||-1===n||((o=r-1)-n+1>=t&&i.push([n,o]),n=-1)}return e[r-1]&&r-n>=t&&i.push([n,r-1]),i}},"./src/bitap/bitap_pattern_alphabet.js":
/*!*********************************************!*\
  !*** ./src/bitap/bitap_pattern_alphabet.js ***!
  \*********************************************/
/*! no static exports found */function(e,t){e.exports=function(e){for(var t={},i=e.length,n=0;n<i;n+=1)t[e.charAt(n)]=0;for(var o=0;o<i;o+=1)t[e.charAt(o)]|=1<<i-o-1;return t}},"./src/bitap/bitap_regex_search.js":
/*!*****************************************!*\
  !*** ./src/bitap/bitap_regex_search.js ***!
  \*****************************************/
/*! no static exports found */function(e,t){var i=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(i,"\\$&").replace(n,"|")),r=e.match(o),s=!!r,a=[];if(s)for(var c=0,l=r.length;c<l;c+=1){var u=r[c];a.push([e.indexOf(u),u.length-1])}return{score:s?.5:1,isMatch:s,matchedIndices:a}}},"./src/bitap/bitap_score.js":
/*!**********************************!*\
  !*** ./src/bitap/bitap_score.js ***!
  \**********************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){var i=t.errors,n=void 0===i?0:i,o=t.currentLocation,r=void 0===o?0:o,s=t.expectedLocation,a=void 0===s?0:s,c=t.distance,l=void 0===c?100:c,u=n/e.length,h=Math.abs(a-r);return l?u+h/l:h?1:u}},"./src/bitap/bitap_search.js":
/*!***********************************!*\
  !*** ./src/bitap/bitap_search.js ***!
  \***********************************/
/*! no static exports found */function(e,t,i){var n=i(/*! ./bitap_score */"./src/bitap/bitap_score.js"),o=i(/*! ./bitap_matched_indices */"./src/bitap/bitap_matched_indices.js");e.exports=function(e,t,i,r){for(var s=r.location,a=void 0===s?0:s,c=r.distance,l=void 0===c?100:c,u=r.threshold,h=void 0===u?.6:u,d=r.findAllMatches,f=void 0!==d&&d,p=r.minMatchCharLength,v=void 0===p?1:p,m=a,g=e.length,_=h,y=e.indexOf(t,m),b=t.length,E=[],S=0;S<g;S+=1)E[S]=0;if(-1!==y){var I=n(t,{errors:0,currentLocation:y,expectedLocation:m,distance:l});if(_=Math.min(I,_),-1!==(y=e.lastIndexOf(t,m+b))){var O=n(t,{errors:0,currentLocation:y,expectedLocation:m,distance:l});_=Math.min(O,_)}}y=-1;for(var C=[],T=1,w=b+g,k=1<<b-1,A=0;A<b;A+=1){for(var L=0,x=w;L<x;){n(t,{errors:A,currentLocation:m+x,expectedLocation:m,distance:l})<=_?L=x:w=x,x=Math.floor((w-L)/2+L)}w=x;var P=Math.max(1,m-x+1),D=f?g:Math.min(m+x,g)+b,j=Array(D+2);j[D+1]=(1<<A)-1;for(var M=D;M>=P;M-=1){var N=M-1,F=i[e.charAt(N)];if(F&&(E[N]=1),j[M]=(j[M+1]<<1|1)&F,0!==A&&(j[M]|=(C[M+1]|C[M])<<1|1|C[M+1]),j[M]&k&&(T=n(t,{errors:A,currentLocation:N,expectedLocation:m,distance:l}))<=_){if(_=T,(y=N)<=m)break;P=Math.max(1,2*m-y)}}if(n(t,{errors:A+1,currentLocation:m,expectedLocation:m,distance:l})>_)break;C=j}return{isMatch:y>=0,score:0===T?.001:T,matchedIndices:o(E,v)}}},"./src/bitap/index.js":
/*!****************************!*\
  !*** ./src/bitap/index.js ***!
  \****************************/
/*! no static exports found */function(e,t,i){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=i(/*! ./bitap_regex_search */"./src/bitap/bitap_regex_search.js"),r=i(/*! ./bitap_search */"./src/bitap/bitap_search.js"),s=i(/*! ./bitap_pattern_alphabet */"./src/bitap/bitap_pattern_alphabet.js"),a=function(){function e(t,i){var n=i.location,o=void 0===n?0:n,r=i.distance,a=void 0===r?100:r,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.isCaseSensitive,f=void 0!==d&&d,p=i.tokenSeparator,v=void 0===p?/ +/g:p,m=i.findAllMatches,g=void 0!==m&&m,_=i.minMatchCharLength,y=void 0===_?1:_;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:v,findAllMatches:g,minMatchCharLength:y},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=s(this.pattern))}var t,i,a;return t=e,(i=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,i=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>i)return o(e,this.pattern,n);var s=this.options,a=s.location,c=s.distance,l=s.threshold,u=s.findAllMatches,h=s.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:a,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}])&&n(t.prototype,i),a&&n(t,a),e}();e.exports=a},"./src/helpers/deep_value.js":
/*!***********************************!*\
  !*** ./src/helpers/deep_value.js ***!
  \***********************************/
/*! no static exports found */function(e,t,i){var n=i(/*! ./is_array */"./src/helpers/is_array.js");e.exports=function(e,t){return function e(t,i,o){if(i){var r=i.indexOf("."),s=i,a=null;-1!==r&&(s=i.slice(0,r),a=i.slice(r+1));var c=t[s];if(null!=c)if(a||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var l=0,u=c.length;l<u;l+=1)e(c[l],a,o);else a&&e(c,a,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}},"./src/helpers/is_array.js":
/*!*********************************!*\
  !*** ./src/helpers/is_array.js ***!
  \*********************************/
/*! no static exports found */function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=i(/*! ./bitap */"./src/bitap/index.js"),s=i(/*! ./helpers/deep_value */"./src/helpers/deep_value.js"),a=i(/*! ./helpers/is_array */"./src/helpers/is_array.js"),c=function(){function e(t,i){var n=i.location,o=void 0===n?0:n,r=i.distance,a=void 0===r?100:r,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.caseSensitive,f=void 0!==d&&d,p=i.tokenSeparator,v=void 0===p?/ +/g:p,m=i.findAllMatches,g=void 0!==m&&m,_=i.minMatchCharLength,y=void 0===_?1:_,b=i.id,E=void 0===b?null:b,S=i.keys,I=void 0===S?[]:S,O=i.shouldSort,C=void 0===O||O,T=i.getFn,w=void 0===T?s:T,k=i.sortFn,A=void 0===k?function(e,t){return e.score-t.score}:k,L=i.tokenize,x=void 0!==L&&L,P=i.matchAllTokens,D=void 0!==P&&P,j=i.includeMatches,M=void 0!==j&&j,N=i.includeScore,F=void 0!==N&&N,K=i.verbose,R=void 0!==K&&K;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:v,findAllMatches:g,minMatchCharLength:y,id:E,keys:I,includeMatches:M,includeScore:F,shouldSort:C,getFn:w,sortFn:A,verbose:R,tokenize:x,matchAllTokens:D},this.setCollection(t)}var t,i,c;return t=e,(i=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var i=this._prepareSearchers(e),n=i.tokenSearchers,o=i.fullSearcher,r=this._search(n,o),s=r.weights,a=r.results;return this._computeScore(s,a),this.options.shouldSort&&this._sort(a),t.limit&&"number"==typeof t.limit&&(a=a.slice(0,t.limit)),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var i=e.split(this.options.tokenSeparator),n=0,o=i.length;n<o;n+=1)t.push(new r(i[n],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=this.list,n={},o=[];if("string"==typeof i[0]){for(var r=0,s=i.length;r<s;r+=1)this._analyze({key:"",value:i[r],record:r,index:r},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var a={},c=0,l=i.length;c<l;c+=1)for(var u=i[c],h=0,d=this.options.keys.length;h<d;h+=1){var f=this.options.keys[h];if("string"!=typeof f){if(a[f.name]={weight:1-f.weight||1},f.weight<=0||f.weight>1)throw new Error("Key weight has to be > 0 and <= 1");f=f.name}else a[f]={weight:1};this._analyze({key:f,value:this.options.getFn(u,f),record:u,index:c},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:a,results:o}}},{key:"_analyze",value:function(e,t){var i=e.key,n=e.arrayIndex,o=void 0===n?-1:n,r=e.value,s=e.record,c=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,h=t.fullSearcher,d=void 0===h?[]:h,f=t.resultMap,p=void 0===f?{}:f,v=t.results,m=void 0===v?[]:v;if(null!=r){var g=!1,_=-1,y=0;if("string"==typeof r){this._log("\nKey: ".concat(""===i?"-":i));var b=d.search(r);if(this._log('Full text: "'.concat(r,'", score: ').concat(b.score)),this.options.tokenize){for(var E=r.split(this.options.tokenSeparator),S=[],I=0;I<u.length;I+=1){var O=u[I];this._log('\nPattern: "'.concat(O.pattern,'"'));for(var C=!1,T=0;T<E.length;T+=1){var w=E[T],k=O.search(w),A={};k.isMatch?(A[w]=k.score,g=!0,C=!0,S.push(k.score)):(A[w]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'.concat(w,'", score: ').concat(A[w]))}C&&(y+=1)}_=S[0];for(var L=S.length,x=1;x<L;x+=1)_+=S[x];_/=L,this._log("Token score average:",_)}var P=b.score;_>-1&&(P=(P+_)/2),this._log("Score average:",P);var D=!this.options.tokenize||!this.options.matchAllTokens||y>=u.length;if(this._log("\nCheck Matches: ".concat(D)),(g||b.isMatch)&&D){var j=p[c];j?j.output.push({key:i,arrayIndex:o,value:r,score:P,matchedIndices:b.matchedIndices}):(p[c]={item:s,output:[{key:i,arrayIndex:o,value:r,score:P,matchedIndices:b.matchedIndices}]},m.push(p[c]))}}else if(a(r))for(var M=0,N=r.length;M<N;M+=1)this._analyze({key:i,arrayIndex:M,value:r[M],record:s,index:c},{resultMap:p,results:m,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var i=0,n=t.length;i<n;i+=1){for(var o=t[i].output,r=o.length,s=1,a=1,c=0;c<r;c+=1){var l=e?e[o[c].key].weight:1,u=(1===l?o[c].score:o[c].score||.001)*l;1!==l?a=Math.min(a,u):(o[c].nScore=u,s*=u)}t[i].score=1===a?s:a,this._log(t[i])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var i=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===n(t)&&null!==t){if(-1!==i.indexOf(t))return;i.push(t)}return t})),i=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var i=e.output;t.matches=[];for(var n=0,o=i.length;n<o;n+=1){var r=i[n];if(0!==r.matchedIndices.length){var s={indices:r.matchedIndices,value:r.value};r.key&&(s.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(s.arrayIndex=r.arrayIndex),t.matches.push(s)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var r=0,s=e.length;r<s;r+=1){var a=e[r];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),o.length){for(var c={item:a.item},l=0,u=o.length;l<u;l+=1)o[l](a,c);t.push(c)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,i),c&&o(t,c),e}();e.exports=c}})},e.exports=n()},function(e,t,i){"use strict";i.r(t);var n=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a((i=e,Array.isArray(i)?[]:{}),e,t):e;var i}function s(e,t,i){return e.concat(t).map(function(e){return r(e,i)})}function a(e,t,i){(i=i||{}).arrayMerge=i.arrayMerge||s,i.isMergeableObject=i.isMergeableObject||n;var o=Array.isArray(t);return o===Array.isArray(e)?o?i.arrayMerge(e,t,i):function(e,t,i){var n={};return i.isMergeableObject(e)&&Object.keys(e).forEach(function(t){n[t]=r(e[t],i)}),Object.keys(t).forEach(function(o){i.isMergeableObject(t[o])&&e[o]?n[o]=a(e[o],t[o],i):n[o]=r(t[o],i)}),n}(e,t,i):r(t,i)}a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,i){return a(e,i,t)},{})};var c=a;t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=i(6),r=(n=i(15))&&n.__esModule?n:{default:n};function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._store=(0,o.createStore)(r.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}var t,i,n;return t=e,(i=[{key:"subscribe",value:function(e){this._store.subscribe(e)}},{key:"dispatch",value:function(e){this._store.dispatch(e)}},{key:"isLoading",value:function(){return this.state.general.loading}},{key:"getChoiceById",value:function(e){return!!e&&this.activeChoices.find(function(t){return t.id===parseInt(e,10)})}},{key:"getGroupById",value:function(e){return this.groups.find(function(t){return t.id===parseInt(e,10)})}},{key:"state",get:function(){return this._store.getState()}},{key:"items",get:function(){return this.state.items}},{key:"activeItems",get:function(){return this.items.filter(function(e){return!0===e.active})}},{key:"highlightedActiveItems",get:function(){return this.items.filter(function(e){return e.active&&e.highlighted})}},{key:"choices",get:function(){return this.state.choices}},{key:"activeChoices",get:function(){return this.choices.filter(function(e){return!0===e.active})}},{key:"selectableChoices",get:function(){return this.choices.filter(function(e){return!0!==e.disabled})}},{key:"searchableChoices",get:function(){return this.selectableChoices.filter(function(e){return!0!==e.placeholder})}},{key:"placeholderChoice",get:function(){return[].concat(this.choices).reverse().find(function(e){return!0===e.placeholder})}},{key:"groups",get:function(){return this.state.groups}},{key:"activeGroups",get:function(){var e=this.groups,t=this.choices;return e.filter(function(e){var i=!0===e.active&&!1===e.disabled,n=t.some(function(e){return!0===e.active&&!1===e.disabled});return i&&n},[])}}])&&s(t.prototype,i),n&&s(t,n),e}();t.default=a},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6),o=l(i(16)),r=l(i(17)),s=l(i(18)),a=l(i(19)),c=i(0);function l(e){return e&&e.__esModule?e:{default:e}}var u=(0,n.combineReducers)({items:o.default,groups:r.default,choices:s.default,general:a.default}),h=function(e,t){var i=e;if("CLEAR_ALL"===t.type)i=void 0;else if("RESET_TO"===t.type)return(0,c.cloneObject)(t.state);return u(i,t)};t.default=h},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var i=[].concat(e,[{id:t.id,choiceId:t.choiceId,groupId:t.groupId,value:t.value,label:t.label,active:!0,highlighted:!1,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]);return i.map(function(e){var t=e;return t.highlighted=!1,t});case"REMOVE_ITEM":return e.map(function(e){var i=e;return i.id===t.id&&(i.active=!1),i});case"HIGHLIGHT_ITEM":return e.map(function(e){var i=e;return i.id===t.id&&(i.highlighted=t.highlighted),i});default:return e}},t.defaultState=void 0;var n=[];t.defaultState=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_GROUP":return[].concat(e,[{id:t.id,value:t.value,active:t.active,disabled:t.disabled}]);case"CLEAR_CHOICES":return[];default:return e}},t.defaultState=void 0;var n=[];t.defaultState=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CHOICE":return[].concat(e,[{id:t.id,elementId:t.elementId,groupId:t.groupId,value:t.value,label:t.label||t.value,disabled:t.disabled||!1,selected:!1,active:!0,score:9999,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]);case"ADD_ITEM":return t.activateOptions?e.map(function(e){var i=e;return i.active=t.active,i}):t.choiceId>-1?e.map(function(e){var i=e;return i.id===parseInt(t.choiceId,10)&&(i.selected=!0),i}):e;case"REMOVE_ITEM":return t.choiceId>-1?e.map(function(e){var i=e;return i.id===parseInt(t.choiceId,10)&&(i.selected=!1),i}):e;case"FILTER_CHOICES":return e.map(function(e){var i=e;return i.active=t.results.some(function(e){var t=e.item,n=e.score;return t.id===i.id&&(i.score=n,!0)}),i});case"ACTIVATE_CHOICES":return e.map(function(e){var i=e;return i.active=t.active,i});case"CLEAR_CHOICES":return n;default:return e}},t.defaultState=void 0;var n=[];t.defaultState=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.defaultState=void 0;var n={loading:!1};t.defaultState=n;var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_LOADING":return{loading:t.isLoading};default:return e}};t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Dropdown",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Container",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Input",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"List",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"WrappedInput",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WrappedSelect",{enumerable:!0,get:function(){return c.default}});var n=l(i(21)),o=l(i(22)),r=l(i(23)),s=l(i(24)),a=l(i(25)),c=l(i(26));function l(e){return e&&e.__esModule?e:{default:e}}},function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(t){var i=t.element,n=t.type,o=t.classNames;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{element:i,type:n,classNames:o}),this.isActive=!1}var t,i,o;return t=e,(i=[{key:"distanceFromTopWindow",value:function(){return this.dimensions=this.element.getBoundingClientRect(),this.position=Math.ceil(this.dimensions.top+window.pageYOffset+this.element.offsetHeight),this.position}},{key:"getChild",value:function(e){return this.element.querySelector(e)}},{key:"show",value:function(){return this.element.classList.add(this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this}},{key:"hide",value:function(){return this.element.classList.remove(this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this}}])&&n(t.prototype,i),o&&n(t,o),e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(0);function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){var i=t.element,n=t.type,o=t.classNames,r=t.position;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{element:i,classNames:o,type:n,position:r}),this.isOpen=!1,this.isFlipped=!1,this.isFocussed=!1,this.isDisabled=!1,this.isLoading=!1,this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}var t,i,r;return t=e,(i=[{key:"addEventListeners",value:function(){this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur)}},{key:"removeEventListeners",value:function(){this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)}},{key:"shouldFlip",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,n.getWindowHeight)();if(void 0===e)return!1;var i=!1;return"auto"===this.position?i=e>=t:"top"===this.position&&(i=!0),i}},{key:"setActiveDescendant",value:function(e){this.element.setAttribute("aria-activedescendant",e)}},{key:"removeActiveDescendant",value:function(){this.element.removeAttribute("aria-activedescendant")}},{key:"open",value:function(e){this.element.classList.add(this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e)&&(this.element.classList.add(this.classNames.flippedState),this.isFlipped=!0)}},{key:"close",value:function(){this.element.classList.remove(this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(this.element.classList.remove(this.classNames.flippedState),this.isFlipped=!1)}},{key:"focus",value:function(){this.isFocussed||this.element.focus()}},{key:"addFocusState",value:function(){this.element.classList.add(this.classNames.focusState)}},{key:"removeFocusState",value:function(){this.element.classList.remove(this.classNames.focusState)}},{key:"enable",value:function(){this.element.classList.remove(this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),"select-one"===this.type&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1}},{key:"disable",value:function(){this.element.classList.add(this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),"select-one"===this.type&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0}},{key:"wrap",value:function(e){(0,n.wrap)(e,this.element)}},{key:"unwrap",value:function(e){this.element.parentNode.insertBefore(e,this.element),this.element.parentNode.removeChild(this.element)}},{key:"addLoadingState",value:function(){this.element.classList.add(this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0}},{key:"removeLoadingState",value:function(){this.element.classList.remove(this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1}},{key:"_onFocus",value:function(){this.isFocussed=!0}},{key:"_onBlur",value:function(){this.isFocussed=!1}}])&&o(t.prototype,i),r&&o(t,r),e}();t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(0);function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){var i=t.element,n=t.type,o=t.classNames,r=t.placeholderValue;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{element:i,type:n,classNames:o,placeholderValue:r}),this.element=i,this.classNames=o,this.isFocussed=this.element===document.activeElement,this.isDisabled=!1,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}var t,i,r;return t=e,(i=[{key:"addEventListeners",value:function(){this.element.addEventListener("input",this._onInput),this.element.addEventListener("paste",this._onPaste),this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur),this.element.form&&this.element.form.addEventListener("reset",this._onFormReset)}},{key:"removeEventListeners",value:function(){this.element.removeEventListener("input",this._onInput),this.element.removeEventListener("paste",this._onPaste),this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur),this.element.form&&this.element.form.removeEventListener("reset",this._onFormReset)}},{key:"enable",value:function(){this.element.removeAttribute("disabled"),this.isDisabled=!1}},{key:"disable",value:function(){this.element.setAttribute("disabled",""),this.isDisabled=!0}},{key:"focus",value:function(){this.isFocussed||this.element.focus()}},{key:"blur",value:function(){this.isFocussed&&this.element.blur()}},{key:"clear",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.element.value&&(this.element.value=""),e&&this.setWidth(),this}},{key:"setWidth",value:function(e){var t=this,i=function(e){t.element.style.width=e};if(this._placeholderValue){var n=this.element.value.length>=this._placeholderValue.length/1.25;(this.element.value&&n||e)&&this.calcWidth(i)}else this.calcWidth(i)}},{key:"calcWidth",value:function(e){return(0,n.calcWidthOfInput)(this.element,e)}},{key:"setActiveDescendant",value:function(e){this.element.setAttribute("aria-activedescendant",e)}},{key:"removeActiveDescendant",value:function(){this.element.removeAttribute("aria-activedescendant")}},{key:"_onInput",value:function(){"select-one"!==this.type&&this.setWidth()}},{key:"_onPaste",value:function(e){e.target===this.element&&this.preventPaste&&e.preventDefault()}},{key:"_onFocus",value:function(){this.isFocussed=!0}},{key:"_onBlur",value:function(){this.isFocussed=!1}},{key:"placeholder",set:function(e){this.element.placeholder=e}},{key:"value",set:function(e){this.element.value=e},get:function(){return(0,n.sanitise)(this.element.value)}}])&&o(t.prototype,i),r&&o(t,r),e}();t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(1);function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){var i=t.element;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{element:i}),this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight,this.hasChildren=!!this.element.children}var t,i,r;return t=e,(i=[{key:"clear",value:function(){this.element.innerHTML=""}},{key:"append",value:function(e){this.element.appendChild(e)}},{key:"getChild",value:function(e){return this.element.querySelector(e)}},{key:"scrollToTop",value:function(){this.element.scrollTop=0}},{key:"scrollToChoice",value:function(e,t){var i=this;if(e){var n=this.element.offsetHeight,o=e.offsetHeight,r=e.offsetTop+o,s=this.element.scrollTop+n,a=t>0?this.element.scrollTop+r-s:e.offsetTop;requestAnimationFrame(function(e){i._animateScroll(e,a,t)})}}},{key:"_scrollDown",value:function(e,t,i){var n=(i-e)/t,o=n>1?n:1;this.element.scrollTop=e+o}},{key:"_scrollUp",value:function(e,t,i){var n=(e-i)/t,o=n>1?n:1;this.element.scrollTop=e-o}},{key:"_animateScroll",value:function(e,t,i){var o=this,r=n.SCROLLING_SPEED,s=this.element.scrollTop,a=!1;i>0?(this._scrollDown(s,r,t),s<t&&(a=!0)):(this._scrollUp(s,r,t),s>t&&(a=!0)),a&&requestAnimationFrame(function(){o._animateScroll(e,t,i)})}}])&&o(t.prototype,i),r&&o(t,r),e}();t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=i(4))&&n.__esModule?n:{default:n};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,i){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(i):o.value}})(e,t,i||e)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var i,n=e.element,o=e.classNames,r=e.delimiter;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=a(this,l(t).call(this,{element:n,classNames:o}))).delimiter=r,i}var i,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.default),i=t,(n=[{key:"value",set:function(e){var t=e.map(function(e){return e.value}).join(this.delimiter);this.element.setAttribute("value",t),this.element.value=t},get:function(){return c(l(t.prototype),"value",this)}}])&&s(i.prototype,n),r&&s(i,r),t}();t.default=h},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(4)),o=r(i(5));function r(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var i=e.element,n=e.classNames;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,l(t).call(this,{element:i,classNames:n}))}var i,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,n.default),i=t,(r=[{key:"appendDocFragment",value:function(e){this.element.innerHTML="",this.element.appendChild(e)}},{key:"placeholderOption",get:function(){return this.element.querySelector("option[placeholder]")}},{key:"optionGroups",get:function(){return Array.from(this.element.getElementsByTagName("OPTGROUP"))}},{key:"options",get:function(){return Array.from(this.element.options)},set:function(e){var t=document.createDocumentFragment();e.forEach(function(e){return i=e,n=o.default.option(i),void t.appendChild(n);var i,n}),this.appendDocFragment(t)}}])&&a(i.prototype,r),s&&a(i,s),t}();t.default=h},function(e,t,i){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var s=o.apply(null,n);s&&e.push(s)}else if("object"===r)for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearChoices=t.activateChoices=t.filterChoices=t.addChoice=void 0;var n=i(1);t.addChoice=function(e){var t=e.value,i=e.label,o=e.id,r=e.groupId,s=e.disabled,a=e.elementId,c=e.customProperties,l=e.placeholder,u=e.keyCode;return{type:n.ACTION_TYPES.ADD_CHOICE,value:t,label:i,id:o,groupId:r,disabled:s,elementId:a,customProperties:c,placeholder:l,keyCode:u}};t.filterChoices=function(e){return{type:n.ACTION_TYPES.FILTER_CHOICES,results:e}};t.activateChoices=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:n.ACTION_TYPES.ACTIVATE_CHOICES,active:e}};t.clearChoices=function(){return{type:n.ACTION_TYPES.CLEAR_CHOICES}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.highlightItem=t.removeItem=t.addItem=void 0;var n=i(1);t.addItem=function(e){var t=e.value,i=e.label,o=e.id,r=e.choiceId,s=e.groupId,a=e.customProperties,c=e.placeholder,l=e.keyCode;return{type:n.ACTION_TYPES.ADD_ITEM,value:t,label:i,id:o,choiceId:r,groupId:s,customProperties:a,placeholder:c,keyCode:l}};t.removeItem=function(e,t){return{type:n.ACTION_TYPES.REMOVE_ITEM,id:e,choiceId:t}};t.highlightItem=function(e,t){return{type:n.ACTION_TYPES.HIGHLIGHT_ITEM,id:e,highlighted:t}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addGroup=void 0;var n=i(1);t.addGroup=function(e,t,i,o){return{type:n.ACTION_TYPES.ADD_GROUP,value:e,id:t,active:i,disabled:o}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetTo=t.clearAll=void 0;t.clearAll=function(){return{type:"CLEAR_ALL"}};t.resetTo=function(e){return{type:"RESET_TO",state:e}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setIsLoading=void 0;t.setIsLoading=function(e){return{type:"SET_IS_LOADING",isLoading:e}}}])});

/***/ }),

/***/ "./node_modules/imask/dist/imask.js":
/*!******************************************!*\
  !*** ./node_modules/imask/dist/imask.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  var ceil = Math.ceil;
  var floor = Math.floor; // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger

  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var min = Math.min; // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength

  var toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // `String.prototype.repeat` method implementation
  // https://tc39.github.io/ecma262/#sec-string.prototype.repeat


  var stringRepeat = ''.repeat || function repeat(count) {
    var str = String(requireObjectCoercible(this));
    var result = '';
    var n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

    return result;
  };

  // https://github.com/tc39/proposal-string-pad-start-end






  var stringPad = function (that, maxLength, fillString, left) {
    var S = String(requireObjectCoercible(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = toLength(maxLength);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$1 = typeof window == 'object' && window && window.Math == Math ? window : typeof self == 'object' && self && self.Math == Math ? self // eslint-disable-next-line no-new-func
  : Function('return this')();

  var navigator = global$1.navigator;
  var userAgent = navigator && navigator.userAgent || '';

  // https://github.com/zloirock/core-js/issues/280
   // eslint-disable-next-line unicorn/no-unsafe-regex


  var webkitStringPadBug = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var descriptors = !fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = nativeGetOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
    1: 2
  }, 1);
  var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = nativeGetOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings




  var split = ''.split;
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // toObject with fallback for non-array-like ES3 strings




  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // 7.1.1 ToPrimitive(input [, PreferredType])
   // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var toPrimitive = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var document$1 = global$1.document; // typeof document.createElement is 'object' in old IE


  var exist = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return exist ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var nativeGetOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var f$1 = descriptors ? nativeGetOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor$1(O, P);
    } catch (error) {
      /* empty */
    }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$1
  };

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  };

  var nativeDefineProperty = Object.defineProperty;
  var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$2
  };

  var hide = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var setGlobal = function (key, value) {
    try {
      hide(global$1, key, value);
    } catch (error) {
      global$1[key] = value;
    }

    return value;
  };

  var shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = global$1[SHARED] || setGlobal(SHARED, {});
  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.0.1',
    mode: 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var functionToString = shared('native-function-to-string', Function.toString);

  var WeakMap = global$1.WeakMap;

  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
  };

  var shared$1 = shared('keys');



  var sharedKey = function (key) {
    return shared$1[key] || (shared$1[key] = uid(key));
  };

  var hiddenKeys = {};

  var WeakMap$1 = global$1.WeakMap;

  var set, get, has$1;

  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;

      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (nativeWeakMap) {
    var store = new WeakMap$1();
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;

    set = function (it, metadata) {
      wmset.call(store, it, metadata);
      return metadata;
    };

    get = function (it) {
      return wmget.call(store, it) || {};
    };

    has$1 = function (it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;

    set = function (it, metadata) {
      hide(it, STATE, metadata);
      return metadata;
    };

    get = function (it) {
      return has(it, STATE) ? it[STATE] : {};
    };

    has$1 = function (it) {
      return has(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };

  var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(functionToString).split('toString');

  shared('inspectSource', function (it) {
    return functionToString.call(it);
  });

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;

    if (typeof value == 'function') {
      if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
      enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }

    if (O === global$1) {
      if (simple) O[key] = value;else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }

    if (simple) O[key] = value;else hide(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
  });
  });

  var max = Math.max;
  var min$1 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).

  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  // false -> Array#indexOf
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  // true  -> Array#includes
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes


  var arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIndexOf = arrayIncludes(false);



  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


    while (names.length > i) if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }

    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)


  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
  	f: f$3
  };

  var f$4 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$4
  };

  var Reflect$1 = global$1.Reflect; // all object keys, includes non-enumerable and symbols


  var ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  var isForced_1 = isForced;

  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;










  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */


  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global$1;
    } else if (STATIC) {
      target = global$1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$1[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        hide(sourceProperty, 'sham', true);
      } // extend global


      redefine(target, key, sourceProperty, options);
    }
  };

  // `String.prototype.padEnd` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padend


  _export({
    target: 'String',
    proto: true,
    forced: webkitStringPadBug
  }, {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });

  // `String.prototype.padStart` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart


  _export({
    target: 'String',
    proto: true,
    forced: webkitStringPadBug
  }, {
    padStart: function padStart(maxLength
    /* , fillString = ' ' */
    ) {
      return stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });

  // `String.prototype.repeat` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.repeat
  _export({
    target: 'String',
    proto: true
  }, {
    repeat: stringRepeat
  });

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
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

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function set$1(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set$1 = Reflect.set;
    } else {
      set$1 = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set$1(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set$1(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /** Checks if value is string */
  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }
  /**
    Direction
    @prop {string} NONE
    @prop {string} LEFT
    @prop {string} FORCE_LEFT
    @prop {string} RIGHT
    @prop {string} FORCE_RIGHT
  */

  var DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
    /**
      Direction
      @enum {string}
    */

  };
  /** */

  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;

      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;

      default:
        return direction;
    }
  }
  /** Escapes regular expression control chars */

  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
  } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

  function objectIncludes(b, a) {
    if (a === b) return true;
    var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i;

    if (arrA && arrB) {
      if (a.length != b.length) return false;

      for (i = 0; i < a.length; i++) {
        if (!objectIncludes(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;

    if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
      var dateA = a instanceof Date,
          dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;
      var regexpA = a instanceof RegExp,
          regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;
      var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

      for (i = 0; i < keys.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      }

      for (i = 0; i < keys.length; i++) {
        if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
      }

      return true;
    }

    return false;
  }
  /* eslint-disable no-undef */

  var g = typeof window !== 'undefined' && window || typeof global !== 'undefined' && global.global === global && global || typeof self !== 'undefined' && self.self === self && self || {};
  /* eslint-enable no-undef */

  /** Selection range */

  /** Provides details of changing input */

  var ActionDetails =
  /*#__PURE__*/
  function () {
    /** Current input value */

    /** Current cursor position */

    /** Old input value */

    /** Old selection */
    function ActionDetails(value, cursorPos, oldValue, oldSelection) {
      _classCallCheck(this, ActionDetails);

      this.value = value;
      this.cursorPos = cursorPos;
      this.oldValue = oldValue;
      this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
    }
    /**
      Start changing position
      @readonly
    */


    _createClass(ActionDetails, [{
      key: "startChangePos",
      get: function get() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
      /**
        Inserted symbols count
        @readonly
      */

    }, {
      key: "insertedCount",
      get: function get() {
        return this.cursorPos - this.startChangePos;
      }
      /**
        Inserted symbols
        @readonly
      */

    }, {
      key: "inserted",
      get: function get() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
      /**
        Removed symbols count
        @readonly
      */

    }, {
      key: "removedCount",
      get: function get() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
        this.oldValue.length - this.value.length, 0);
      }
      /**
        Removed symbols
        @readonly
      */

    }, {
      key: "removed",
      get: function get() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
      /**
        Unchanged head symbols
        @readonly
      */

    }, {
      key: "head",
      get: function get() {
        return this.value.substring(0, this.startChangePos);
      }
      /**
        Unchanged tail symbols
        @readonly
      */

    }, {
      key: "tail",
      get: function get() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
      /**
        Remove direction
        @readonly
      */

    }, {
      key: "removeDirection",
      get: function get() {
        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

        return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }]);

    return ActionDetails;
  }();

  /**
    Provides details of changing model value
    @param {Object} [details]
    @param {string} [details.inserted] - Inserted symbols
    @param {boolean} [details.skip] - Can skip chars
    @param {number} [details.removeCount] - Removed symbols count
    @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
  */
  var ChangeDetails =
  /*#__PURE__*/
  function () {
    /** Inserted symbols */

    /** Can skip chars */

    /** Additional offset if any changes occurred before tail */

    /** Raw inserted is used by dynamic mask */
    function ChangeDetails(details) {
      _classCallCheck(this, ChangeDetails);

      _extends(this, {
        inserted: '',
        rawInserted: '',
        skip: false,
        tailShift: 0
      }, details);
    }
    /**
      Aggregate changes
      @returns {ChangeDetails} `this`
    */


    _createClass(ChangeDetails, [{
      key: "aggregate",
      value: function aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
      }
      /** Total offset considering all changes */

    }, {
      key: "offset",
      get: function get() {
        return this.tailShift + this.inserted.length;
      }
    }]);

    return ChangeDetails;
  }();

  /** Provides details of continuous extracted tail */
  var ContinuousTailDetails =
  /*#__PURE__*/
  function () {
    /** Tail value as string */

    /** Tail start position */

    /** Start position */
    function ContinuousTailDetails() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var stop = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, ContinuousTailDetails);

      this.value = value;
      this.from = from;
      this.stop = stop;
    }

    _createClass(ContinuousTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }, {
      key: "extend",
      value: function extend(tail) {
        this.value += String(tail);
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        return masked.append(this.toString(), {
          tail: true
        });
      }
    }, {
      key: "shiftBefore",
      value: function shiftBefore(pos) {
        if (this.from >= pos || !this.value.length) return '';
        var shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          value: this.value,
          from: this.from,
          stop: this.stop
        };
      },
      set: function set(state) {
        _extends(this, state);
      }
    }]);

    return ContinuousTailDetails;
  }();

  /** Provides common masking stuff */
  var Masked =
  /*#__PURE__*/
  function () {
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

    /** @type {Mask} */

    /** */
    // $FlowFixMe no ideas

    /** Transforms value before mask processing */

    /** Validates if value is acceptable */

    /** Does additional processing in the end of editing */

    /** Enable characters overwriting */

    /** */
    function Masked(opts) {
      _classCallCheck(this, Masked);

      this._value = '';

      this._update(opts);

      this.isInitialized = true;
    }
    /** Sets and applies new options */


    _createClass(Masked, [{
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (!Object.keys(opts).length) return;
        this.withValueRefresh(this._update.bind(this, opts));
      }
      /**
        Sets new options
        @protected
      */

    }, {
      key: "_update",
      value: function _update(opts) {
        _extends(this, opts);
      }
      /** Mask state */

    }, {
      key: "reset",

      /** Resets value */
      value: function reset() {
        this._value = '';
      }
      /** */

    }, {
      key: "resolve",

      /** Resolve new value */
      value: function resolve(value) {
        this.reset();
        this.append(value, {
          input: true
        }, '');
        this.doCommit();
        return this.value;
      }
      /** */

    }, {
      key: "nearestInputPos",

      /** Finds nearest input position in direction */
      value: function nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }
      /** Extracts value in range considering flags */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos);
      }
      /** Extracts tail in range */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
      }
      /** Stores state before tail */

    }, {
      key: "_storeBeforeTailState",
      value: function _storeBeforeTailState() {
        this._beforeTailState = this.state;
      }
      /** Restores state before tail */

    }, {
      key: "_restoreBeforeTailState",
      value: function _restoreBeforeTailState() {
        this.state = this._beforeTailState;
      }
      /** Resets state before tail */

    }, {
      key: "_resetBeforeTailState",
      value: function _resetBeforeTailState() {
        this._beforeTailState = null;
      }
      /** Appends tail */
      // $FlowFixMe no ideas

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
      /** Appends char */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        this._value += ch;
        return new ChangeDetails({
          inserted: ch,
          rawInserted: ch
        });
      }
      /** Appends char */

    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var checkTail = arguments.length > 2 ? arguments[2] : undefined;
        ch = this.doPrepare(ch, flags);
        if (!ch) return new ChangeDetails({
          skip: true
        });
        var consistentState = this.state;
        var consistentTail;

        var details = this._appendCharRaw(ch, flags);

        if (details.inserted) {
          var appended = this.doValidate(flags) !== false;

          if (appended && checkTail != null) {
            // validation ok, check tail
            this._storeBeforeTailState();

            if (this.overwrite) {
              consistentTail = checkTail.state;
              checkTail.shiftBefore(this.value.length);
            }

            var tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

            if (appended && tailDetails.inserted) this._restoreBeforeTailState();
          } // revert all if something went wrong


          if (!appended) {
            details.rawInserted = details.inserted = '';
            this.state = consistentState;
            if (checkTail && consistentTail) checkTail.state = consistentTail;
          }
        }

        return details;
      }
      /** Appends symbols considering flags */
      // $FlowFixMe no ideas

    }, {
      key: "append",
      value: function append(str, flags, tail) {
        if (!isString(str)) throw new Error('value should be string');
        var details = new ChangeDetails();
        var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;

        for (var ci = 0; ci < str.length; ++ci) {
          details.aggregate(this._appendChar(str[ci], flags, checkTail));
        } // append tail but aggregate only tailShift


        if (checkTail != null) {
          this._storeBeforeTailState();

          details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
          // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
          // this._resetBeforeTailState();
        }

        return details;
      }
      /** */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
        return new ChangeDetails();
      }
      /** Calls function and reapplies current value */

    }, {
      key: "withValueRefresh",
      value: function withValueRefresh(fn) {
        if (this._refreshing || !this.isInitialized) return fn();
        this._refreshing = true;
        var unmasked = this.unmaskedValue;
        var value = this.value;
        var ret = fn(); // try to update with raw value first to keep fixed chars

        if (this.resolve(value) !== value) {
          // or fallback to unmasked
          this.unmaskedValue = unmasked;
        }

        delete this._refreshing;
        return ret;
      }
      /**
        Prepares string before mask processing
        @protected
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.prepare ? this.prepare(str, this, flags) : str;
      }
      /**
        Validates if value is acceptable
        @protected
      */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
      }
      /**
        Does additional processing in the end of editing
        @protected
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.commit) this.commit(this.value, this);
      }
      /** */

    }, {
      key: "splice",
      value: function splice(start, deleteCount, inserted, removeDirection) {
        var tailPos = start + deleteCount;
        var tail = this.extractTail(tailPos);
        var startChangePos = this.nearestInputPos(start, removeDirection);
        var changeDetails = new ChangeDetails({
          tailShift: startChangePos - start // adjust tailShift if start was aligned

        }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
          input: true
        }, tail));
        return changeDetails;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this.value
        };
      },
      set: function set(state) {
        this._value = state._value;
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(value) {
        this.resolve(value);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.reset();
        this.append(value, {}, '');
        this.doCommit();
      }
      /** */

    }, {
      key: "typedValue",
      get: function get() {
        return this.unmaskedValue;
      },
      set: function set(value) {
        this.unmaskedValue = value;
      }
      /** Value that includes raw user input */

    }, {
      key: "rawInputValue",
      get: function get() {
        return this.extractInput(0, this.value.length, {
          raw: true
        });
      },
      set: function set(value) {
        this.reset();
        this.append(value, {
          raw: true
        }, '');
        this.doCommit();
      }
      /** */

    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }]);

    return Masked;
  }();

  /** Get Masked class by mask type */
  function maskedClass(mask) {
    if (mask == null) {
      throw new Error('mask property should be defined');
    }

    if (mask instanceof RegExp) return g.IMask.MaskedRegExp;
    if (isString(mask)) return g.IMask.MaskedPattern;
    if (mask instanceof Date || mask === Date) return g.IMask.MaskedDate;
    if (mask instanceof Number || typeof mask === 'number' || mask === Number) return g.IMask.MaskedNumber;
    if (Array.isArray(mask) || mask === Array) return g.IMask.MaskedDynamic; // $FlowFixMe

    if (mask.prototype instanceof g.IMask.Masked) return mask; // $FlowFixMe

    if (mask instanceof Function) return g.IMask.MaskedFunction;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console

    return g.IMask.Masked;
  }
  /** Creates new {@link Masked} depending on mask type */

  function createMask(opts) {
    opts = _objectSpread({}, opts);
    var mask = opts.mask;
    if (mask instanceof g.IMask.Masked) return mask;
    var MaskedClass = maskedClass(mask);
    return new MaskedClass(opts);
  }

  var DEFAULT_INPUT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
  };
  /** */

  var PatternInputDefinition =
  /*#__PURE__*/
  function () {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */
    function PatternInputDefinition(opts) {
      _classCallCheck(this, PatternInputDefinition);

      var mask = opts.mask,
          blockOpts = _objectWithoutProperties(opts, ["mask"]);

      this.masked = createMask({
        mask: mask
      });

      _extends(this, blockOpts);
    }

    _createClass(PatternInputDefinition, [{
      key: "reset",
      value: function reset() {
        this._isFilled = false;
        this.masked.reset();
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        if (fromPos === 0 && toPos >= 1) {
          this._isFilled = false;
          return this.masked.remove(fromPos, toPos);
        }

        return new ChangeDetails();
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this._isFilled) return new ChangeDetails();
        var state = this.masked.state; // simulate input

        var details = this.masked._appendChar(str, flags);

        if (details.inserted && this.doValidate(flags) === false) {
          details.inserted = details.rawInserted = '';
          this.masked.state = state;
        }

        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
          details.inserted = this.placeholderChar;
        }

        details.skip = !details.inserted && !this.isOptional;
        this._isFilled = Boolean(details.inserted);
        return details;
      }
    }, {
      key: "append",
      value: function append() {
        var _this$masked;

        return (_this$masked = this.masked).append.apply(_this$masked, arguments);
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._isFilled || this.isOptional) return details;
        this._isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$masked2;

        return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
      }
    }, {
      key: "appendTail",
      value: function appendTail() {
        var _this$masked3;

        return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;
        return this.masked.extractInput(fromPos, toPos, flags);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this.value.length;
        var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return this.isComplete ? boundPos : minPos;

          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            return this.isComplete ? boundPos : maxPos;

          case DIRECTION.NONE:
          default:
            return boundPos;
        }
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this$masked4, _this$parent;

        return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.masked.doCommit();
      }
    }, {
      key: "value",
      get: function get() {
        return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.masked.unmaskedValue;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Boolean(this.masked.value) || this.isOptional;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          masked: this.masked.state,
          _isFilled: this._isFilled
        };
      },
      set: function set(state) {
        this.masked.state = state.masked;
        this._isFilled = state._isFilled;
      }
    }]);

    return PatternInputDefinition;
  }();

  var PatternFixedDefinition =
  /*#__PURE__*/
  function () {
    /** */

    /** */

    /** */

    /** */
    function PatternFixedDefinition(opts) {
      _classCallCheck(this, PatternFixedDefinition);

      _extends(this, opts);

      this._value = '';
    }

    _createClass(PatternFixedDefinition, [{
      key: "reset",
      value: function reset() {
        this._isRawInput = false;
        this._value = '';
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new ChangeDetails();
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this._value.length;

        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return minPos;

          case DIRECTION.NONE:
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
          default:
            return maxPos;
        }
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details = new ChangeDetails();
        if (this._value) return details;
        var appended = this.char === str[0];
        var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
        if (isResolved) details.rawInserted = this.char;
        this._value = details.inserted = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._value) return details;
        this._value = details.inserted = this.char;
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails('');
      } // $FlowFixMe no ideas

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
    }, {
      key: "append",
      value: function append(str, flags, tail) {
        var details = this._appendChar(str, flags);

        if (tail != null) {
          details.tailShift += this.appendTail(tail).tailShift;
        }

        return details;
      }
    }, {
      key: "doCommit",
      value: function doCommit() {}
    }, {
      key: "value",
      get: function get() {
        return this._value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.isUnmasking ? this.value : '';
      }
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this._value,
          _isRawInput: this._isRawInput
        };
      },
      set: function set(state) {
        _extends(this, state);
      }
    }]);

    return PatternFixedDefinition;
  }();

  var ChunksTailDetails =
  /*#__PURE__*/
  function () {
    /** */
    function ChunksTailDetails() {
      var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, ChunksTailDetails);

      this.chunks = chunks;
      this.from = from;
    }

    _createClass(ChunksTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.chunks.map(String).join('');
      } // $FlowFixMe no ideas

    }, {
      key: "extend",
      value: function extend(tailChunk) {
        if (!String(tailChunk)) return;
        if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
        var lastChunk = this.chunks[this.chunks.length - 1];
        var extendLast = lastChunk && ( // if stops are same or tail has no stop
        lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;

        if (tailChunk instanceof ContinuousTailDetails) {
          // check the ability to extend previous chunk
          if (extendLast) {
            // extend previous chunk
            lastChunk.extend(tailChunk.toString());
          } else {
            // append new chunk
            this.chunks.push(tailChunk);
          }
        } else if (tailChunk instanceof ChunksTailDetails) {
          if (tailChunk.stop == null) {
            // unwrap floating chunks to parent, keeping `from` pos
            var firstTailChunk;

            while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
              firstTailChunk = tailChunk.chunks.shift();
              firstTailChunk.from += tailChunk.from;
              this.extend(firstTailChunk);
            }
          } // if tail chunk still has value


          if (tailChunk.toString()) {
            // if chunks contains stops, then popup stop to container
            tailChunk.stop = tailChunk.blockIndex;
            this.chunks.push(tailChunk);
          }
        }
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        if (!(masked instanceof g.IMask.MaskedPattern)) {
          var tail = new ContinuousTailDetails(this.toString());
          return tail.appendTo(masked);
        }

        var details = new ChangeDetails();

        for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
          var chunk = this.chunks[ci];

          var lastBlockIter = masked._mapPosToBlock(masked.value.length);

          var stop = chunk.stop;
          var chunkBlock = void 0;

          if (stop && ( // if block not found or stop is behind lastBlock
          !lastBlockIter || lastBlockIter.index <= stop)) {
            if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
            masked._stops.indexOf(stop) >= 0) {
              details.aggregate(masked._appendPlaceholder(stop));
            }

            chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
          }

          if (chunkBlock) {
            var tailDetails = chunkBlock.appendTail(chunk);
            tailDetails.skip = false; // always ignore skip, it will be set on last

            details.aggregate(tailDetails);
            masked._value += tailDetails.inserted; // get not inserted chars

            var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
            if (remainChars) details.aggregate(masked.append(remainChars, {
              tail: true
            }));
          } else {
            details.aggregate(masked.append(chunk.toString(), {
              tail: true
            }));
          }
        }
        return details;
      }
    }, {
      key: "shiftBefore",
      value: function shiftBefore(pos) {
        if (this.from >= pos || !this.chunks.length) return '';
        var chunkShiftPos = pos - this.from;
        var ci = 0;

        while (ci < this.chunks.length) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.shiftBefore(chunkShiftPos);

          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            ++ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }

          if (shiftChar) return shiftChar;
        }

        return '';
      }
    }, {
      key: "state",
      get: function get() {
        return {
          chunks: this.chunks.map(function (c) {
            return c.state;
          }),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex
        };
      },
      set: function set(state) {
        var chunks = state.chunks,
            props = _objectWithoutProperties(state, ["chunks"]);

        _extends(this, props);

        this.chunks = chunks.map(function (cstate) {
          var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

          chunk.state = cstate;
          return chunk;
        });
      }
    }]);

    return ChunksTailDetails;
  }();

  /**
    Pattern mask
    @param {Object} opts
    @param {Object} opts.blocks
    @param {Object} opts.definitions
    @param {string} opts.placeholderChar
    @param {boolean} opts.lazy
  */
  var MaskedPattern =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedPattern, _Masked);

    /** */

    /** */

    /** Single char for empty input */

    /** Show placeholder only when needed */
    function MaskedPattern() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MaskedPattern);

      // TODO type $Shape<MaskedPatternOptions>={} does not work
      opts.definitions = _extends({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedPattern).call(this, _objectSpread({}, MaskedPattern.DEFAULTS, opts)));
    }
    /**
      @override
      @param {Object} opts
    */


    _createClass(MaskedPattern, [{
      key: "_update",
      value: function _update() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        opts.definitions = _extends({}, this.definitions, opts.definitions);

        _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

        this._rebuildMask();
      }
      /** */

    }, {
      key: "_rebuildMask",
      value: function _rebuildMask() {
        var _this = this;

        var defs = this.definitions;
        this._blocks = [];
        this._stops = [];
        this._maskedBlocks = {};
        var pattern = this.mask;
        if (!pattern || !defs) return;
        var unmaskingBlock = false;
        var optionalBlock = false;

        for (var i = 0; i < pattern.length; ++i) {
          if (this.blocks) {
            var _ret = function () {
              var p = pattern.slice(i);
              var bNames = Object.keys(_this.blocks).filter(function (bName) {
                return p.indexOf(bName) === 0;
              }); // order by key length

              bNames.sort(function (a, b) {
                return b.length - a.length;
              }); // use block name with max length

              var bName = bNames[0];

              if (bName) {
                var maskedBlock = createMask(_objectSpread({
                  parent: _this,
                  lazy: _this.lazy,
                  placeholderChar: _this.placeholderChar
                }, _this.blocks[bName]));

                if (maskedBlock) {
                  _this._blocks.push(maskedBlock); // store block index


                  if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                  _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                }

                i += bName.length - 1;
                return "continue";
              }
            }();

            if (_ret === "continue") continue;
          }

          var char = pattern[i];

          var _isInput = char in defs;

          if (char === MaskedPattern.STOP_CHAR) {
            this._stops.push(this._blocks.length);

            continue;
          }

          if (char === '{' || char === '}') {
            unmaskingBlock = !unmaskingBlock;
            continue;
          }

          if (char === '[' || char === ']') {
            optionalBlock = !optionalBlock;
            continue;
          }

          if (char === MaskedPattern.ESCAPE_CHAR) {
            ++i;
            char = pattern[i];
            if (!char) break;
            _isInput = false;
          }

          var def = _isInput ? new PatternInputDefinition({
            parent: this,
            lazy: this.lazy,
            placeholderChar: this.placeholderChar,
            mask: defs[char],
            isOptional: optionalBlock
          }) : new PatternFixedDefinition({
            char: char,
            isUnmasking: unmaskingBlock
          });

          this._blocks.push(def);
        }
      }
      /**
        @override
      */

    }, {
      key: "_storeBeforeTailState",

      /**
        @override
      */
      value: function _storeBeforeTailState() {
        this._blocks.forEach(function (b) {
          // $FlowFixMe _storeBeforeTailState is not exist in PatternBlock
          if (typeof b._storeBeforeTailState === 'function') {
            b._storeBeforeTailState();
          }
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "_storeBeforeTailState", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "_restoreBeforeTailState",
      value: function _restoreBeforeTailState() {
        this._blocks.forEach(function (b) {
          // $FlowFixMe _restoreBeforeTailState is not exist in PatternBlock
          if (typeof b._restoreBeforeTailState === 'function') {
            b._restoreBeforeTailState();
          }
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "_restoreBeforeTailState", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "_resetBeforeTailState",
      value: function _resetBeforeTailState() {
        this._blocks.forEach(function (b) {
          // $FlowFixMe _resetBeforeTailState is not exist in PatternBlock
          if (typeof b._resetBeforeTailState === 'function') {
            b._resetBeforeTailState();
          }
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "_resetBeforeTailState", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

        this._blocks.forEach(function (b) {
          return b.reset();
        });
      }
      /**
        @override
      */

    }, {
      key: "doCommit",

      /**
        @override
      */
      value: function doCommit() {
        this._blocks.forEach(function (b) {
          return b.doCommit();
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "appendTail",

      /**
        @override
      */
      value: function appendTail(tail) {
        return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var blockIter = this._mapPosToBlock(this.value.length);

        var details = new ChangeDetails();
        if (!blockIter) return details;

        for (var bi = blockIter.index;; ++bi) {
          var _block = this._blocks[bi];
          if (!_block) break;

          var blockDetails = _block._appendChar(ch, flags);

          var skip = blockDetails.skip;
          details.aggregate(blockDetails);
          if (skip || blockDetails.rawInserted) break; // go next char
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this2 = this;

        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var chunkTail = new ChunksTailDetails();
        if (fromPos === toPos) return chunkTail;

        this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
          var blockChunk = b.extractTail(bFromPos, bToPos);
          blockChunk.stop = _this2._findStopBefore(bi);
          blockChunk.from = _this2._blockStartPos(bi);
          if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
          chunkTail.extend(blockChunk);
        });

        return chunkTail;
      }
      /**
        @override
      */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (fromPos === toPos) return '';
        var input = '';

        this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
          input += b.extractInput(fromPos, toPos, flags);
        });

        return input;
      }
    }, {
      key: "_findStopBefore",
      value: function _findStopBefore(blockIndex) {
        var stopBefore;

        for (var si = 0; si < this._stops.length; ++si) {
          var stop = this._stops[si];
          if (stop <= blockIndex) stopBefore = stop;else break;
        }

        return stopBefore;
      }
      /** Appends placeholder depending on laziness */

    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder(toBlockIndex) {
        var _this3 = this;

        var details = new ChangeDetails();
        if (this.lazy && toBlockIndex == null) return details;

        var startBlockIter = this._mapPosToBlock(this.value.length);

        if (!startBlockIter) return details;
        var startBlockIndex = startBlockIter.index;
        var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

        this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
          if (typeof b._appendPlaceholder === 'function') {
            // $FlowFixMe `_blocks` may not be present
            var args = b._blocks != null ? [b._blocks.length] : [];

            var bDetails = b._appendPlaceholder.apply(b, args);

            _this3._value += bDetails.inserted;
            details.aggregate(bDetails);
          }
        });

        return details;
      }
      /** Finds block in pos */

    }, {
      key: "_mapPosToBlock",
      value: function _mapPosToBlock(pos) {
        var accVal = '';

        for (var bi = 0; bi < this._blocks.length; ++bi) {
          var _block2 = this._blocks[bi];
          var blockStartPos = accVal.length;
          accVal += _block2.value;

          if (pos <= accVal.length) {
            return {
              index: bi,
              offset: pos - blockStartPos
            };
          }
        }
      }
      /** */

    }, {
      key: "_blockStartPos",
      value: function _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
          return pos += b.value.length;
        }, 0);
      }
      /** */

    }, {
      key: "_forEachBlocksInRange",
      value: function _forEachBlocksInRange(fromPos) {
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var fn = arguments.length > 2 ? arguments[2] : undefined;

        var fromBlockIter = this._mapPosToBlock(fromPos);

        if (fromBlockIter) {
          var toBlockIter = this._mapPosToBlock(toPos); // process first block


          var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
          var fromBlockStartPos = fromBlockIter.offset;
          var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
          fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

          if (toBlockIter && !isSameBlock) {
            // process intermediate blocks
            for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
              fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
            } // process last block


            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
          }
        }
      }
      /**
        @override
      */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

        this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
          removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });

        return removeDetails;
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        // TODO refactor - extract alignblock
        var beginBlockData = this._mapPosToBlock(cursorPos) || {
          index: 0,
          offset: 0
        };
        var beginBlockOffset = beginBlockData.offset,
            beginBlockIndex = beginBlockData.index;
        var beginBlock = this._blocks[beginBlockIndex];
        if (!beginBlock) return cursorPos;
        var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

        if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
          beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
        }

        var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
        var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

        if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
        var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

        if (direction === DIRECTION.NONE) {
          // NONE direction used to calculate start input position if no chars were removed
          // FOR NONE:
          // -
          // input|any
          // ->
          //  any|input
          // <-
          //  filled-input|any
          // check if first block at left is input
          if (searchBlockIndex > 0) {
            var blockIndexAtLeft = searchBlockIndex - 1;
            var blockAtLeft = this._blocks[blockIndexAtLeft];
            var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE); // is input

            if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
              return this._blockStartPos(searchBlockIndex);
            }
          } // ->


          var firstInputAtRight = searchBlockIndex;

          for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
            var _block3 = this._blocks[bi];

            var _blockInputPos = _block3.nearestInputPos(0, DIRECTION.NONE);

            if (_blockInputPos !== _block3.value.length) {
              return this._blockStartPos(bi) + _blockInputPos;
            }
          }

          return this.value.length;
        }

        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
          // -
          //  any|filled-input
          // <-
          //  any|first not empty is not-len-aligned
          //  not-0-aligned|any
          // ->
          //  any|not-len-aligned or end
          // check if first block at right is filled input
          var firstFilledBlockIndexAtRight;

          for (var _bi = searchBlockIndex; _bi < this._blocks.length; ++_bi) {
            if (this._blocks[_bi].value) {
              firstFilledBlockIndexAtRight = _bi;
              break;
            }
          }

          if (firstFilledBlockIndexAtRight != null) {
            var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

            var _blockInputPos2 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);

            if (_blockInputPos2 === 0 && filledBlock.unmaskedValue.length) {
              // filled block is input
              return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos2;
            }
          } // <-
          // find this vars


          var firstFilledInputBlockIndex = -1;
          var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

          for (var _bi2 = searchBlockIndex - 1; _bi2 >= 0; --_bi2) {
            var _block4 = this._blocks[_bi2];

            var _blockInputPos3 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);

            if (firstEmptyInputBlockIndex == null && (!_block4.value || _blockInputPos3 !== 0)) {
              firstEmptyInputBlockIndex = _bi2;
            }

            if (_blockInputPos3 !== 0) {
              if (_blockInputPos3 !== _block4.value.length) {
                // aligned inside block - return immediately
                return this._blockStartPos(_bi2) + _blockInputPos3;
              } else {
                // found filled
                firstFilledInputBlockIndex = _bi2;
                break;
              }
            }
          }

          if (direction === DIRECTION.LEFT) {
            // try find first empty input before start searching position only when not forced
            for (var _bi3 = firstFilledInputBlockIndex + 1; _bi3 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi3) {
              var _block5 = this._blocks[_bi3];

              var _blockInputPos4 = _block5.nearestInputPos(0, DIRECTION.NONE);

              var blockAlignedPos = this._blockStartPos(_bi3) + _blockInputPos4; // if block is empty and last or not lazy input


              if ((!_block5.value.length && blockAlignedPos === this.value.length || _blockInputPos4 !== _block5.value.length) && blockAlignedPos <= cursorPos) {
                return blockAlignedPos;
              }
            }
          } // process overflow


          if (firstFilledInputBlockIndex >= 0) {
            return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
          } // for lazy if has aligned left inside fixed and has came to the start - use start position


          if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
            return 0;
          }

          if (firstEmptyInputBlockIndex != null) {
            return this._blockStartPos(firstEmptyInputBlockIndex);
          } // find first input


          for (var _bi4 = searchBlockIndex; _bi4 < this._blocks.length; ++_bi4) {
            var _block6 = this._blocks[_bi4];

            var _blockInputPos5 = _block6.nearestInputPos(0, DIRECTION.NONE); // is input


            if (!_block6.value.length || _blockInputPos5 !== _block6.value.length) {
              return this._blockStartPos(_bi4) + _blockInputPos5;
            }
          }

          return 0;
        }

        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
          // ->
          //  any|not-len-aligned and filled
          //  any|not-len-aligned
          // <-
          var firstInputBlockAlignedIndex;
          var firstInputBlockAlignedPos;

          for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
            var _block7 = this._blocks[_bi5];

            var _blockInputPos6 = _block7.nearestInputPos(0, DIRECTION.NONE);

            if (_blockInputPos6 !== _block7.value.length) {
              firstInputBlockAlignedPos = this._blockStartPos(_bi5) + _blockInputPos6;
              firstInputBlockAlignedIndex = _bi5;
              break;
            }
          }

          if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
            for (var _bi6 = firstInputBlockAlignedIndex; _bi6 < this._blocks.length; ++_bi6) {
              var _block8 = this._blocks[_bi6];

              var _blockInputPos7 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);

              if (_blockInputPos7 !== _block8.value.length) {
                return this._blockStartPos(_bi6) + _blockInputPos7;
              }
            }

            return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
          }

          for (var _bi7 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi7 >= 0; --_bi7) {
            var _block9 = this._blocks[_bi7];

            var _blockInputPos8 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);

            if (_blockInputPos8 !== 0) {
              var alignedPos = this._blockStartPos(_bi7) + _blockInputPos8;

              if (alignedPos >= cursorPos) return alignedPos;
              break;
            }
          }
        }

        return cursorPos;
      }
      /** Get block by name */

    }, {
      key: "maskedBlock",
      value: function maskedBlock(name) {
        return this.maskedBlocks(name)[0];
      }
      /** Get all blocks by name */

    }, {
      key: "maskedBlocks",
      value: function maskedBlocks(name) {
        var _this4 = this;

        var indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map(function (gi) {
          return _this4._blocks[gi];
        });
      }
    }, {
      key: "state",
      get: function get() {
        return _objectSpread({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
          _blocks: this._blocks.map(function (b) {
            return b.state;
          })
        });
      },
      set: function set(state) {
        var _blocks = state._blocks,
            maskedState = _objectWithoutProperties(state, ["_blocks"]);

        this._blocks.forEach(function (b, bi) {
          return b.state = _blocks[bi];
        });

        _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
      }
    }, {
      key: "isComplete",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isComplete;
        });
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._blocks.reduce(function (str, b) {
          return str += b.unmaskedValue;
        }, '');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
        @override
      */

    }, {
      key: "value",
      get: function get() {
        // TODO return _value when not in change?
        return this._blocks.reduce(function (str, b) {
          return str += b.value;
        }, '');
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
      }
    }]);

    return MaskedPattern;
  }(Masked);
  MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;

  function isInput(block) {
    if (!block) return false;
    var value = block.value;
    return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
  }

  /** Pattern which accepts ranges */
  var MaskedRange =
  /*#__PURE__*/
  function (_MaskedPattern) {
    _inherits(MaskedRange, _MaskedPattern);

    function MaskedRange() {
      _classCallCheck(this, MaskedRange);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRange).apply(this, arguments));
    }

    _createClass(MaskedRange, [{
      key: "_update",

      /**
        @override
      */
      value: function _update(opts) {
        // TODO type
        opts = _objectSpread({
          to: this.to || 0,
          from: this.from || 0
        }, opts);
        var maxLength = String(opts.to).length;
        if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
        opts.maxLength = maxLength;
        var fromStr = String(opts.from).padStart(maxLength, '0');
        var toStr = String(opts.to).padStart(maxLength, '0');
        var sameCharsCount = 0;

        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
          ++sameCharsCount;
        }

        opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

        _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "boundaries",
      value: function boundaries(str) {
        var minstr = '';
        var maxstr = '';

        var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
            _ref2 = _slicedToArray(_ref, 3),
            placeholder = _ref2[1],
            num = _ref2[2];

        if (num) {
          minstr = '0'.repeat(placeholder.length) + num;
          maxstr = '9'.repeat(placeholder.length) + num;
        }

        minstr = minstr.padEnd(this.maxLength, '0');
        maxstr = maxstr.padEnd(this.maxLength, '9');
        return [minstr, maxstr];
      }
      /**
        @override
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        str = _get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
        if (!this.autofix) return str;
        var fromStr = String(this.from).padStart(this.maxLength, '0');
        var toStr = String(this.to).padStart(this.maxLength, '0');
        var val = this.value;
        var prepStr = '';

        for (var ci = 0; ci < str.length; ++ci) {
          var nextVal = val + prepStr + str[ci];

          var _this$boundaries = this.boundaries(nextVal),
              _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
              minstr = _this$boundaries2[0],
              maxstr = _this$boundaries2[1];

          if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
        }

        return prepStr;
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;

        var str = this.value;
        var firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

        var _this$boundaries3 = this.boundaries(str),
            _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
            minstr = _this$boundaries4[0],
            maxstr = _this$boundaries4[1];

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }, {
      key: "_matchFrom",

      /**
        Optionally sets max length of pattern.
        Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
      */

      /** Min bound */

      /** Max bound */

      /** */
      get: function get() {
        return this.maxLength - String(this.from).length;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
      }
    }]);

    return MaskedRange;
  }(MaskedPattern);

  /** Date mask */

  var MaskedDate =
  /*#__PURE__*/
  function (_MaskedPattern) {
    _inherits(MaskedDate, _MaskedPattern);

    /** Parse string to Date */

    /** Format Date to string */

    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Start date */

    /** End date */

    /** */

    /**
      @param {Object} opts
    */
    function MaskedDate(opts) {
      _classCallCheck(this, MaskedDate);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedDate).call(this, _objectSpread({}, MaskedDate.DEFAULTS, opts)));
    }
    /**
      @override
    */


    _createClass(MaskedDate, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.mask === Date) delete opts.mask;

        if (opts.pattern) {
          opts.mask = opts.pattern;
          delete opts.pattern;
        }

        var blocks = opts.blocks;
        opts.blocks = _extends({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

        if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
        if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

        if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
          opts.blocks.m.from = opts.min.getMonth() + 1;
          opts.blocks.m.to = opts.max.getMonth() + 1;

          if (opts.blocks.m.from === opts.blocks.m.to) {
            opts.blocks.d.from = opts.min.getDate();
            opts.blocks.d.to = opts.max.getDate();
          }
        }

        _extends(opts.blocks, blocks); // add autofix


        Object.keys(opts.blocks).forEach(function (bk) {
          var b = opts.blocks[bk];
          if (!('autofix' in b)) b.autofix = opts.autofix;
        });

        _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;

        var date = this.date;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }
      /** Checks if date is exists */

    }, {
      key: "isDateExist",
      value: function isDateExist(str) {
        return this.format(this.parse(str)) === str;
      }
      /** Parsed Date */

    }, {
      key: "date",
      get: function get() {
        return this.isComplete ? this.parse(this.value) : null;
      },
      set: function set(date) {
        this.value = this.format(date);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get() {
        return this.date;
      },
      set: function set(value) {
        this.date = value;
      }
    }]);

    return MaskedDate;
  }(MaskedPattern);
  MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function format(date) {
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      return [day, month, year].join('.');
    },
    parse: function parse(str) {
      var _str$split = str.split('.'),
          _str$split2 = _slicedToArray(_str$split, 3),
          day = _str$split2[0],
          month = _str$split2[1],
          year = _str$split2[2];

      return new Date(year, month - 1, day);
    }
  };

  MaskedDate.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {
        mask: MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: MaskedRange,
        from: 1900,
        to: 9999
      }
    };
  };

  /**
    Generic element API to use with mask
    @interface
  */
  var MaskElement =
  /*#__PURE__*/
  function () {
    function MaskElement() {
      _classCallCheck(this, MaskElement);
    }

    _createClass(MaskElement, [{
      key: "select",

      /** Safely sets element selection */
      value: function select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

        try {
          this._unsafeSelect(start, end);
        } catch (e) {}
      }
      /** Should be overriden in subclasses */

    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {}
      /** Should be overriden in subclasses */

    }, {
      key: "bindEvents",

      /** Should be overriden in subclasses */
      value: function bindEvents(handlers) {}
      /** Should be overriden in subclasses */

    }, {
      key: "unbindEvents",
      value: function unbindEvents() {}
    }, {
      key: "selectionStart",

      /** */

      /** */

      /** */

      /** Safely returns selection start */
      get: function get() {
        var start;

        try {
          start = this._unsafeSelectionStart;
        } catch (e) {}

        return start != null ? start : this.value.length;
      }
      /** Safely returns selection end */

    }, {
      key: "selectionEnd",
      get: function get() {
        var end;

        try {
          end = this._unsafeSelectionEnd;
        } catch (e) {}

        return end != null ? end : this.value.length;
      }
    }, {
      key: "isActive",
      get: function get() {
        return false;
      }
    }]);

    return MaskElement;
  }();

  /** Bridge between HTMLElement and {@link Masked} */

  var HTMLMaskElement =
  /*#__PURE__*/
  function (_MaskElement) {
    _inherits(HTMLMaskElement, _MaskElement);

    /** Mapping between HTMLElement events and mask internal events */

    /** HTMLElement to use mask on */

    /**
      @param {HTMLInputElement|HTMLTextAreaElement} input
    */
    function HTMLMaskElement(input) {
      var _this;

      _classCallCheck(this, HTMLMaskElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HTMLMaskElement).call(this));
      _this.input = input;
      _this._handlers = {};
      return _this;
    }
    /**
      Is element in focus
      @readonly
    */


    _createClass(HTMLMaskElement, [{
      key: "_unsafeSelect",

      /**
        Sets HTMLElement selection
        @override
      */
      value: function _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }
      /**
        HTMLElement value
        @override
      */

    }, {
      key: "bindEvents",

      /**
        Binds HTMLElement events to mask internal events
        @override
      */
      value: function bindEvents(handlers) {
        var _this2 = this;

        Object.keys(handlers).forEach(function (event) {
          return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
        });
      }
      /**
        Unbinds HTMLElement events to mask internal events
        @override
      */

    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this3 = this;

        Object.keys(this._handlers).forEach(function (event) {
          return _this3._toggleEventHandler(event);
        });
      }
      /** */

    }, {
      key: "_toggleEventHandler",
      value: function _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
          this.input.removeEventListener(event, this._handlers[event]);
          delete this._handlers[event];
        }

        if (handler) {
          this.input.addEventListener(event, handler);
          this._handlers[event] = handler;
        }
      }
    }, {
      key: "isActive",
      get: function get() {
        return this.input === document.activeElement;
      }
      /**
        Returns HTMLElement selection start
        @override
      */

    }, {
      key: "_unsafeSelectionStart",
      get: function get() {
        return this.input.selectionStart;
      }
      /**
        Returns HTMLElement selection end
        @override
      */

    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        return this.input.selectionEnd;
      }
    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set(value) {
        this.input.value = value;
      }
    }]);

    return HTMLMaskElement;
  }(MaskElement);
  HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'blur'
  };

  /** Listens to element events and controls changes between element and {@link Masked} */

  var InputMask =
  /*#__PURE__*/
  function () {
    /**
      View element
      @readonly
    */

    /**
      Internal {@link Masked} model
      @readonly
    */

    /**
      @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
      @param {Object} opts
    */
    function InputMask(el, opts) {
      _classCallCheck(this, InputMask);

      this.el = el instanceof MaskElement ? el : new HTMLMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

      this._bindEvents(); // refresh


      this.updateValue();

      this._onChange();
    }
    /** Read or update mask */


    _createClass(InputMask, [{
      key: "_bindEvents",

      /**
        Starts listening to element events
        @protected
      */
      value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this.alignCursorFriendly,
          focus: this._onFocus,
          commit: this._onChange
        });
      }
      /**
        Stops listening to element events
        @protected
       */

    }, {
      key: "_unbindEvents",
      value: function _unbindEvents() {
        this.el.unbindEvents();
      }
      /**
        Fires custom event
        @protected
       */

    }, {
      key: "_fireEvent",
      value: function _fireEvent(ev) {
        var listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach(function (l) {
          return l();
        });
      }
      /**
        Current selection start
        @readonly
      */

    }, {
      key: "_saveSelection",

      /**
        Stores current selection
        @protected
      */
      value: function _saveSelection()
      /* ev */
      {
        if (this.value !== this.el.value) {
          console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
        }

        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
      /** Syncronizes model value from view */

    }, {
      key: "updateValue",
      value: function updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
      }
      /** Syncronizes view from model value, fires change events */

    }, {
      key: "updateControl",
      value: function updateControl() {
        var newUnmaskedValue = this.masked.unmaskedValue;
        var newValue = this.masked.value;
        var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        if (this.el.value !== newValue) this.el.value = newValue;
        if (isChanged) this._fireChangeEvents();
      }
      /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

    }, {
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (objectIncludes(this.masked, opts)) return;

        var mask = opts.mask,
            restOpts = _objectWithoutProperties(opts, ["mask"]);

        this.mask = mask;
        this.masked.updateOptions(restOpts);
        this.updateControl();
      }
      /** Updates cursor */

    }, {
      key: "updateCursor",
      value: function updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

        this._delayUpdateCursor(cursorPos);
      }
      /**
        Delays cursor update to support mobile browsers
        @private
      */

    }, {
      key: "_delayUpdateCursor",
      value: function _delayUpdateCursor(cursorPos) {
        var _this = this;

        this._abortUpdateCursor();

        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(function () {
          if (!_this.el) return; // if was destroyed

          _this.cursorPos = _this._changingCursorPos;

          _this._abortUpdateCursor();
        }, 10);
      }
      /**
        Fires custom events
        @protected
      */

    }, {
      key: "_fireChangeEvents",
      value: function _fireChangeEvents() {
        this._fireEvent('accept');

        if (this.masked.isComplete) this._fireEvent('complete');
      }
      /**
        Aborts delayed cursor update
        @private
      */

    }, {
      key: "_abortUpdateCursor",
      value: function _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }
      /** Aligns cursor to nearest available position */

    }, {
      key: "alignCursor",
      value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
      }
      /** Aligns cursor only if selection is empty */

    }, {
      key: "alignCursorFriendly",
      value: function alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

        this.alignCursor();
      }
      /** Adds listener on custom event */

    }, {
      key: "on",
      value: function on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];

        this._listeners[ev].push(handler);

        return this;
      }
      /** Removes custom event listener */

    }, {
      key: "off",
      value: function off(ev, handler) {
        if (!this._listeners[ev]) return this;

        if (!handler) {
          delete this._listeners[ev];
          return this;
        }

        var hIndex = this._listeners[ev].indexOf(handler);

        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
      }
      /** Handles view input event */

    }, {
      key: "_onInput",
      value: function _onInput() {
        this._abortUpdateCursor(); // fix strange IE behavior


        if (!this._selection) return this.updateValue();
        var details = new ActionDetails( // new state
        this.el.value, this.cursorPos, // old state
        this.value, this._selection);
        var oldRawValue = this.masked.rawInputValue;
        var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

        var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
        var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        this.updateControl();
        this.updateCursor(cursorPos);
      }
      /** Handles view change event and commits model value */

    }, {
      key: "_onChange",
      value: function _onChange() {
        if (this.value !== this.el.value) {
          this.updateValue();
        }

        this.masked.doCommit();
        this.updateControl();

        this._saveSelection();
      }
      /** Handles view drop event, prevents by default */

    }, {
      key: "_onDrop",
      value: function _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      /** Restore last selection on focus */

    }, {
      key: "_onFocus",
      value: function _onFocus(ev) {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

        if (this._selection) this.cursorPos = this._selection.end;
        this.alignCursorFriendly();
      }
      /** Unbind view events and removes element reference */

    }, {
      key: "destroy",
      value: function destroy() {
        this._unbindEvents(); // $FlowFixMe why not do so?


        this._listeners.length = 0;
        delete this.el;
      }
    }, {
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set(mask) {
        if (mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate) return;

        if (this.masked.constructor === maskedClass(mask)) {
          this.masked.updateOptions({
            mask: mask
          });
          return;
        }

        var masked = createMask({
          mask: mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }
      /** Raw value */

    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(str) {
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Unmasked value */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._unmaskedValue;
      },
      set: function set(str) {
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Typed unmasked value */

    }, {
      key: "typedValue",
      get: function get() {
        return this.masked.typedValue;
      },
      set: function set(val) {
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
      }
    }, {
      key: "selectionStart",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
      /** Current cursor position */

    }, {
      key: "cursorPos",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      },
      set: function set(pos) {
        if (!this.el.isActive) return;
        this.el.select(pos, pos);

        this._saveSelection();
      }
    }]);

    return InputMask;
  }();

  /** Pattern which validates enum values */

  var MaskedEnum =
  /*#__PURE__*/
  function (_MaskedPattern) {
    _inherits(MaskedEnum, _MaskedPattern);

    function MaskedEnum() {
      _classCallCheck(this, MaskedEnum);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedEnum).apply(this, arguments));
    }

    _createClass(MaskedEnum, [{
      key: "_update",

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        // TODO type
        if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

        _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this = this,
            _get2;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.enum.some(function (e) {
          return e.indexOf(_this.unmaskedValue) >= 0;
        }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);

    return MaskedEnum;
  }(MaskedPattern);

  /**
    Number mask
    @param {Object} opts
    @param {string} opts.radix - Single char
    @param {string} opts.thousandsSeparator - Single char
    @param {Array<string>} opts.mapToRadix - Array of single chars
    @param {number} opts.min
    @param {number} opts.max
    @param {number} opts.scale - Digits after point
    @param {boolean} opts.signed - Allow negative
    @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
    @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
  */
  var MaskedNumber =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedNumber, _Masked);

    /** Single char */

    /** Single char */

    /** Array of single chars */

    /** */

    /** */

    /** Digits after point */

    /** */

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Flag to pad trailing zeros after point in the end of editing */
    function MaskedNumber(opts) {
      _classCallCheck(this, MaskedNumber);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedNumber).call(this, _objectSpread({}, MaskedNumber.DEFAULTS, opts)));
    }
    /**
      @override
    */


    _createClass(MaskedNumber, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

        this._updateRegExps();
      }
      /** */

    }, {
      key: "_updateRegExps",
      value: function _updateRegExps() {
        // use different regexp to process user input (more strict, input suffix) and tail shifting
        var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
        var midInput = '(0|([1-9]+\\d*))?';
        var mid = '\\d*';
        var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
        this._numberRegExpInput = new RegExp(start + midInput + end);
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
      }
      /** */

    }, {
      key: "_removeThousandsSeparators",
      value: function _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, '');
      }
      /** */

    }, {
      key: "_insertThousandsSeparators",
      value: function _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        var parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }
      /**
        @override
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var _get2;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
      }
      /** */

    }, {
      key: "_separatorsCount",
      value: function _separatorsCount(to) {
        var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var count = 0;

        for (var pos = 0; pos < to; ++pos) {
          if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
          }
        }

        return count;
      }
      /** */

    }, {
      key: "_separatorsCountFromSlice",
      value: function _separatorsCountFromSlice() {
        var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
      }
      /**
        @override
      */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;

        var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

        var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

        fromPos = _this$_adjustRangeWit2[0];
        toPos = _this$_adjustRangeWit2[1];
        return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

        var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(flags.tail && this._beforeTailState ? this._beforeTailState._value : this._value);

        this._value = this._removeThousandsSeparators(this.value);

        var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

        this._value = this._insertThousandsSeparators(this._value);

        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(flags.tail && this._beforeTailState ? this._beforeTailState._value : this._value);

        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        return appendDetails;
      }
      /** */

    }, {
      key: "_findSeparatorAround",
      value: function _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
          var searchFrom = pos - this.thousandsSeparator.length + 1;
          var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
          if (separatorPos <= pos) return separatorPos;
        }

        return -1;
      }
    }, {
      key: "_adjustRangeWithSeparators",
      value: function _adjustRangeWithSeparators(from, to) {
        var separatorAroundFromPos = this._findSeparatorAround(from);

        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

        var separatorAroundToPos = this._findSeparatorAround(to);

        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [from, to];
      }
      /**
        @override
      */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

        var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

        fromPos = _this$_adjustRangeWit4[0];
        toPos = _this$_adjustRangeWit4[1];
        var valueBeforePos = this.value.slice(0, fromPos);
        var valueAfterPos = this.value.slice(toPos);

        var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

        return new ChangeDetails({
          tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;

        switch (direction) {
          case DIRECTION.NONE:
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            {
              var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

              if (separatorAtLeftPos >= 0) {
                var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

                if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                  return separatorAtLeftPos;
                }
              }

              break;
            }

          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            {
              var separatorAtRightPos = this._findSeparatorAround(cursorPos);

              if (separatorAtRightPos >= 0) {
                return separatorAtRightPos + this.thousandsSeparator.length;
              }
            }
        }

        return cursorPos;
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

        var valid = regexp.test(this._removeThousandsSeparators(this.value));

        if (valid) {
          // validate as number
          var number = this.number;
          valid = valid && !isNaN(number) && ( // check min bound for negative values
          this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
          this.max == null || this.max <= 0 || this.number <= this.max);
        }

        return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
      }
      /**
        @override
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.value) {
          var number = this.number;
          var validnum = number; // check bounds

          if (this.min != null) validnum = Math.max(validnum, this.min);
          if (this.max != null) validnum = Math.min(validnum, this.max);
          if (validnum !== number) this.unmaskedValue = String(validnum);
          var formatted = this.value;
          if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
          if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
          this._value = formatted;
        }

        _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
      }
      /** */

    }, {
      key: "_normalizeZeros",
      value: function _normalizeZeros(value) {
        var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
          return sign + num;
        }); // add leading zero

        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

          if (!parts[1].length) parts.length = 1; // remove fractional
        }

        return this._insertThousandsSeparators(parts.join(this.radix));
      }
      /** */

    }, {
      key: "_padFractionalZeros",
      value: function _padFractionalZeros(value) {
        if (!value) return value;
        var parts = value.split(this.radix);
        if (parts.length < 2) parts.push('');
        parts[1] = parts[1].padEnd(this.scale, '0');
        return parts.join(this.radix);
      }
      /**
        @override
      */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
      }
      /** Parsed Number */

    }, {
      key: "number",
      get: function get() {
        return Number(this.unmaskedValue);
      },
      set: function set(number) {
        this.unmaskedValue = String(number);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get() {
        return this.number;
      },
      set: function set(value) {
        this.number = value;
      }
      /**
        Is negative allowed
        @readonly
      */

    }, {
      key: "allowNegative",
      get: function get() {
        return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }
    }]);

    return MaskedNumber;
  }(Masked);
  MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: ['.'],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false
  };

  /** Masking by RegExp */

  var MaskedRegExp =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedRegExp, _Masked);

    function MaskedRegExp() {
      _classCallCheck(this, MaskedRegExp);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRegExp).apply(this, arguments));
    }

    _createClass(MaskedRegExp, [{
      key: "_update",

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        if (opts.mask) opts.validate = function (value) {
          return value.search(opts.mask) >= 0;
        };

        _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
      }
    }]);

    return MaskedRegExp;
  }(Masked);

  /** Masking by custom Function */

  var MaskedFunction =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedFunction, _Masked);

    function MaskedFunction() {
      _classCallCheck(this, MaskedFunction);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedFunction).apply(this, arguments));
    }

    _createClass(MaskedFunction, [{
      key: "_update",

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        if (opts.mask) opts.validate = opts.mask;

        _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
      }
    }]);

    return MaskedFunction;
  }(Masked);

  /** Dynamic mask for choosing apropriate mask in run-time */
  var MaskedDynamic =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedDynamic, _Masked);

    /** Currently chosen mask */

    /** Compliled {@link Masked} options */

    /** Chooses {@link Masked} depending on input value */

    /**
      @param {Object} opts
    */
    function MaskedDynamic(opts) {
      var _this;

      _classCallCheck(this, MaskedDynamic);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MaskedDynamic).call(this, _objectSpread({}, MaskedDynamic.DEFAULTS, opts)));
      _this.currentMask = null;
      return _this;
    }
    /**
      @override
    */


    _createClass(MaskedDynamic, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

        if ('mask' in opts) {
          // mask could be totally dynamic with only `dispatch` option
          this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
            return createMask(m);
          }) : [];
        }
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw() {
        var details = this._applyDispatch.apply(this, arguments);

        if (this.currentMask) {
          var _this$currentMask;

          details.aggregate((_this$currentMask = this.currentMask)._appendChar.apply(_this$currentMask, arguments));
        }

        return details;
      }
    }, {
      key: "_applyDispatch",
      value: function _applyDispatch() {
        var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var prevValueBeforeTail = flags.tail && this._beforeTailState ? this._beforeTailState._value : this.value;
        var inputValue = this.rawInputValue;
        var insertValue = flags.tail && this._beforeTailState ? // $FlowFixMe - tired to fight with type system
        this._beforeTailState._rawInputValue : inputValue;
        var tailValue = inputValue.slice(insertValue.length);
        var prevMask = this.currentMask;
        var details = new ChangeDetails();
        var prevMaskState = prevMask && prevMask.state;
        var prevMaskBeforeTailState = prevMask && prevMask._beforeTailState;
        this.currentMask = this.doDispatch(appended, flags); // restore state after dispatch

        if (this.currentMask) {
          if (this.currentMask !== prevMask) {
            // if mask changed reapply input
            this.currentMask.reset(); // $FlowFixMe - it's ok, we don't change current mask above

            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;

            if (tailValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              details.tailShift += this.currentMask.append(tailValue, {
                raw: true,
                tail: true
              }).tailShift;
            }
          } else {
            // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
            this.currentMask._beforeTailState = prevMaskBeforeTailState;
          }
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "doDispatch",
      value: function doDispatch(appended) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.dispatch(appended, this, flags);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2, _this$currentMask2;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask2 = this.currentMask).doValidate.apply(_this$currentMask2, args));
      }
      /**
        @override
      */

    }, {
      key: "reset",
      value: function reset() {
        if (this.currentMask) this.currentMask.reset();
        this.compiledMasks.forEach(function (m) {
          return m.reset();
        });
      }
      /**
        @override
      */

    }, {
      key: "remove",

      /**
        @override
      */
      value: function remove() {
        var details = new ChangeDetails();

        if (this.currentMask) {
          var _this$currentMask3;

          details.aggregate((_this$currentMask3 = this.currentMask).remove.apply(_this$currentMask3, arguments)) // update with dispatch
          .aggregate(this._applyDispatch());
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "extractInput",

      /**
        @override
      */
      value: function extractInput() {
        var _this$currentMask4;

        return this.currentMask ? (_this$currentMask4 = this.currentMask).extractInput.apply(_this$currentMask4, arguments) : '';
      }
      /**
        @override
      */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$currentMask5, _get3;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this.currentMask ? (_this$currentMask5 = this.currentMask).extractTail.apply(_this$currentMask5, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
      }
      /**
        @override
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.currentMask) this.currentMask.doCommit();

        _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos() {
        var _this$currentMask6, _get4;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return this.currentMask ? (_this$currentMask6 = this.currentMask).nearestInputPos.apply(_this$currentMask6, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
      }
    }, {
      key: "value",
      get: function get() {
        return this.currentMask ? this.currentMask.value : '';
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
      }
      /**
        @override
      */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : '';
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.typedValue : '';
      } // probably typedValue should not be used with dynamic
      ,
      set: function set(value) {
        var unmaskedValue = String(value); // double check it

        if (this.currentMask) {
          this.currentMask.typedValue = value;
          unmaskedValue = this.currentMask.unmaskedValue;
        }

        this.unmaskedValue = unmaskedValue;
      }
      /**
        @override
      */

    }, {
      key: "isComplete",
      get: function get() {
        return !!this.currentMask && this.currentMask.isComplete;
      }
    }, {
      key: "state",
      get: function get() {
        return _objectSpread({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(function (m) {
            return m.state;
          }),
          currentMaskRef: this.currentMask,
          currentMask: this.currentMask && this.currentMask.state
        });
      },
      set: function set(state) {
        var compiledMasks = state.compiledMasks,
            currentMaskRef = state.currentMaskRef,
            currentMask = state.currentMask,
            maskedState = _objectWithoutProperties(state, ["compiledMasks", "currentMaskRef", "currentMask"]);

        this.compiledMasks.forEach(function (m, mi) {
          return m.state = compiledMasks[mi];
        });

        if (currentMaskRef != null) {
          this.currentMask = currentMaskRef;
          this.currentMask.state = currentMask;
        }

        _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
      }
    }]);

    return MaskedDynamic;
  }(Masked);
  MaskedDynamic.DEFAULTS = {
    dispatch: function dispatch(appended, masked, flags) {
      if (!masked.compiledMasks.length) return;
      var inputValue = masked.rawInputValue; // simulate input

      var inputs = masked.compiledMasks.map(function (m, index) {
        m.rawInputValue = inputValue;
        m.append(appended, flags);
        var weight = m.rawInputValue.length;
        return {
          weight: weight,
          index: index
        };
      }); // pop masks with longer values first

      inputs.sort(function (i1, i2) {
        return i2.weight - i1.weight;
      });
      return masked.compiledMasks[inputs[0].index];
    }
  };

  /**
   * Applies mask on element.
   * @constructor
   * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
   * @param {Object} opts - Custom mask options
   * @return {InputMask}
   */

  function IMask(el) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // currently available only for input-like elements
    return new InputMask(el, opts);
  }
  /** {@link InputMask} */

  IMask.InputMask = InputMask;
  /** {@link Masked} */

  IMask.Masked = Masked;
  /** {@link MaskedPattern} */

  IMask.MaskedPattern = MaskedPattern;
  /** {@link MaskedEnum} */

  IMask.MaskedEnum = MaskedEnum;
  /** {@link MaskedRange} */

  IMask.MaskedRange = MaskedRange;
  /** {@link MaskedNumber} */

  IMask.MaskedNumber = MaskedNumber;
  /** {@link MaskedDate} */

  IMask.MaskedDate = MaskedDate;
  /** {@link MaskedRegExp} */

  IMask.MaskedRegExp = MaskedRegExp;
  /** {@link MaskedFunction} */

  IMask.MaskedFunction = MaskedFunction;
  /** {@link MaskedDynamic} */

  IMask.MaskedDynamic = MaskedDynamic;
  /** {@link createMask} */

  IMask.createMask = createMask;
  /** {@link MaskElement} */

  IMask.MaskElement = MaskElement;
  /** {@link HTMLMaskElement} */

  IMask.HTMLMaskElement = HTMLMaskElement;
  g.IMask = IMask;

  return IMask;

}));
//# sourceMappingURL=imask.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvZm9ybS9mb3JtLnRzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Zvcm0vZ3JlY2FwdGNoYS12My9ncmVjYXB0Y2hhLXYzLnRzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Zvcm0vaW5wdXQvaW5wdXQtZGVmYXVsdC9pbnB1dC1kZWZhdWx0LnRzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Zvcm0vaW5wdXQvaW5wdXQtZmlsZS9pbnB1dC1maWxlLnRzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Zvcm0vaW5wdXQvaW5wdXQtbWFzay9pbnB1dC1tYXNrLnRzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Zvcm0vaW5wdXQvaW5wdXQtc2VsZWN0L2lucHV0LXNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvY29tcG9uZW50cy9mb3JtL2lucHV0L2lucHV0LnRzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2hlbHBlcnMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnRzIiwid2VicGFjazovLy8uL21hcmt1cC9zdGF0aWMvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jaG9pY2VzLmpzL3B1YmxpYy9hc3NldHMvc2NyaXB0cy9jaG9pY2VzLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZGlzdC9pbWFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FB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YUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QixjQUFjO0FBQzlCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0IsZUFBZSxLQUFLOztBQUVwQjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdFQUF3RTs7QUFFeEU7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBLFNBQVM7OztBQUdUO0FBQ0E7O0FBRUEsb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFOztBQUU1RSw4REFBOEQ7O0FBRTlEO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7O0FBRWhDO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsMENBQTBDO0FBQ2xFOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpR0FBaUc7O0FBRWpHO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0Q7QUFDbEQsb0NBQW9DO0FBQ3BDLHdHQUF3RztBQUN4RztBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTs7QUFFakI7QUFDQTtBQUNBLGVBQWUsRUFBRTs7QUFFakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQSxrREFBa0Q7OztBQUdsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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RUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsaUJBQWlCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlGQUFpRix3RUFBd0U7QUFDeko7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw0Q0FBNEMsd0JBQXdCOztBQUVwRTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7O0FBRUEscUdBQXFHO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxtQ0FBbUM7O0FBRXBFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDOzs7QUFHdEM7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkVBQTJFLGFBQWE7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSCxzQ0FBc0MsYUFBYTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxjQUFjLHFDQUFxQztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEVBQTBFLGFBQWE7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLGNBQWMsaURBQWlEO0FBQy9ELGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qjs7O0FBR3pCOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrSUFBa0k7QUFDbEk7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFlBQVk7O0FBRXpFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQSwyREFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0NBQWtDOzs7QUFHbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJQUEwSTtBQUMxSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdGQUFnRjs7QUFFaEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkVBQTZFOzs7QUFHN0U7QUFDQTtBQUNBLFNBQVMsRUFBRTs7QUFFWDs7QUFFQTtBQUNBLGlEQUFpRDs7QUFFakQsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGFBQWE7O0FBRWhDLGlCQUFpQixhQUFhOztBQUU5QjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUdBQXlHO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLDJFQUEyRSxhQUFhO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSw4RUFBOEUsZUFBZTtBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlEQUFpRDtBQUM5RCxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdCQUFnQjs7QUFFdkI7QUFDQSxPQUFPLGFBQWE7O0FBRXBCO0FBQ0EsT0FBTyxvQkFBb0I7O0FBRTNCO0FBQ0EsT0FBTyxpQkFBaUI7O0FBRXhCO0FBQ0EsT0FBTyxrQkFBa0I7O0FBRXpCO0FBQ0EsT0FBTyxtQkFBbUI7O0FBRTFCO0FBQ0EsT0FBTyxpQkFBaUI7O0FBRXhCO0FBQ0EsT0FBTyxtQkFBbUI7O0FBRTFCO0FBQ0EsT0FBTyxxQkFBcUI7O0FBRTVCO0FBQ0EsT0FBTyxvQkFBb0I7O0FBRTNCO0FBQ0EsT0FBTyxpQkFBaUI7O0FBRXhCO0FBQ0EsT0FBTyxrQkFBa0I7O0FBRXpCO0FBQ0EsT0FBTyxzQkFBc0I7O0FBRTdCO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcC9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJzdGF0aWMvanMvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21hcmt1cC9zdGF0aWMvdHMvbWFpbi50c1wiKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBJbnB1dCwgSUlucHV0Rm9ybSwgfSBmcm9tIFwiLi9pbnB1dC9pbnB1dFwiO1xuaW1wb3J0IHsgSW5wdXRNYXNrIH0gZnJvbSBcIi4vaW5wdXQvaW5wdXQtbWFzay9pbnB1dC1tYXNrXCI7XG5pbXBvcnQgeyBJbnB1dEZpbGUgfSBmcm9tIFwiLi9pbnB1dC9pbnB1dC1maWxlL2lucHV0LWZpbGVcIjtcbmltcG9ydCB7IElucHV0RGVmYXVsdCB9IGZyb20gXCIuL2lucHV0L2lucHV0LWRlZmF1bHQvaW5wdXQtZGVmYXVsdFwiO1xuaW1wb3J0IHsgSW5wdXRTZWxlY3QgfSBmcm9tIFwiLi9pbnB1dC9pbnB1dC1zZWxlY3QvaW5wdXQtc2VsZWN0XCI7XG5pbXBvcnQgeyBhZGRUb2tlbk9uRm9ybSB9IGZyb20gXCIuL2dyZWNhcHRjaGEtdjMvZ3JlY2FwdGNoYS12M1wiO1xuXG5leHBvcnQgY2xhc3MgRm9ybSB7XG4gIHByaXZhdGUgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xuICBwcml2YXRlIGlucHV0czogSW5wdXQ8SUlucHV0Rm9ybT5bXTtcblxuICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gJ2NmLWZvcm0nO1xuXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSk7XG4gICAgZWxlbWVudHMubWFwKChlbGVtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgICAgIG5ldyBGb3JtKGVsZW0pO1xuICAgIH0pXG4gIH1cbiAgXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxGb3JtRWxlbWVudCkge1xuICAgIHRoaXMuZm9ybSA9IGVsZW1lbnQ7XG4gICAgdGhpcy5pbnB1dHMgPSB0aGlzLmlucHV0c0NyZWF0ZSgpO1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5mb3JtU3VibWl0KCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBmb3JtU3VibWl0KCkge1xuICAgIHRoaXMuc2VuZEZvcm0oXG4gICAgICB0aGlzLmZvcm0uYWN0aW9uLFxuICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YSgpLFxuICAgICAgYWRkVG9rZW5PbkZvcm0odGhpcy5mb3JtKVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgc2VuZEZvcm0odXJsOiBzdHJpbmcsIGRhdGE6IEZvcm1EYXRhLCBtaWRkbGVDaGVjaz86IGJvb2xlYW4gKSB7XG4gICAgaWYgKG1pZGRsZUNoZWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG1pZGRsZUNoZWNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWlkZGxlQ2hlY2spIHtcbiAgICAgIHRoaXMuZm9ybURpc2FibGVkKCk7XG4gICAgICBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICB1cmwsXG4gICAgICAgIGRhdGEsXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvcm1EaXNhYmxlZCgpIHtcbiAgICB0aGlzLmlucHV0cy5mb3JFYWNoKGJsb2NrID0+IGJsb2NrLmRpc2FibGVkKCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGZvcm1FbmFibGVkKCkge1xuICAgIHRoaXMuaW5wdXRzLmZvckVhY2goYmxvY2sgPT4gYmxvY2suZW5hYmxlZCgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRm9ybURhdGEoKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICB0aGlzLmlucHV0cy5tYXAoKGJsb2NrKSA9PiB7XG4gICAgICBsZXQgb2JqID0gYmxvY2suZ2V0RGF0YSgpO1xuICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIG9iai5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGVsZW0ubmFtZSwgZWxlbS52YWx1ZSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChvYmoubmFtZSwgb2JqLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgaW5wdXRzQ3JlYXRlKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmNmLWlucHV0JykpO1xuICAgIGNvbnN0IGVsZW1BcnIgPSBlbGVtZW50cy5tYXAoKGVsZW06IElJbnB1dEZvcm0gKSA9PiB7XG4gICAgICAgIGlmIChlbGVtIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudClcbiAgICAgICAgICBzd2l0Y2ggKGVsZW0udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndGVsJzpcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnB1dE1hc2soZWxlbSk7XG4gICAgICAgICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnB1dEZpbGUoZWxlbSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gbmV3IElucHV0RGVmYXVsdChlbGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW0gaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudClcbiAgICAgICAgICByZXR1cm4gbmV3IElucHV0U2VsZWN0KGVsZW0pO1xuICAgICAgICBlbHNlIGlmIChlbGVtIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtQXJyO1xuICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFRva2VuT25Gb3JtKGZvcm06IEhUTUxGb3JtRWxlbWVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcHRjaGEnKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgICBsZXQgdG9rZW5JbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRva2VuXCJdJyk7XG5cbiAgICAgIGlmICghdG9rZW5JbnB1dCkge1xuICAgICAgICAgIHRva2VuSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgdG9rZW5JbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gICAgICAgICAgdG9rZW5JbnB1dC5uYW1lID0gJ3Rva2VuJztcbiAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRva2VuSW5wdXQpO1xuICAgICAgfVxuXG4gICAgICB0b2tlbklucHV0LnZhbHVlID0gdG9rZW47XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ09yIG1heWJlIHlvdVxcJ3JlIGEgcm9ib3Q/Jyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2lucHV0JztcblxuZXhwb3J0IGNsYXNzIElucHV0RGVmYXVsdCBleHRlbmRzIElucHV0PEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCl7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy5pc0VtcHR5TGlzdGVuZXIoKTtcbiAgfVxufSIsImltcG9ydCB7IElucHV0LCBJSW5wdXREYXRhIH0gZnJvbSAnLi4vaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgSW5wdXRGaWxlIGV4dGVuZHMgSW5wdXQ8SFRNTElucHV0RWxlbWVudD57XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpe1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIHRoaXNcbiAgICAgIC5hY3RpdmF0ZUZpbGUoKVxuICAgICAgLmlzRW1wdHlMaXN0ZW5lcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZUZpbGUoKSB7XG4gICAgbGV0IGRlZmF1bHRUZXh0ID0gdGhpcy5pbnB1dC5kYXRhc2V0LmRlZmF1bHRWYWx1ZSB8fCAn0KTQsNC50Lsg0LIg0YTQvtGA0LzQsNGC0LUgLmRvYywgLnBkZiwgLnR4dCDQtNC+IDEwTUInO1xuXG4gICAgdGhpcy5pbnB1dC5kYXRhc2V0LmN1cnJlbnRWYWx1ZSA9IGRlZmF1bHRUZXh0O1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmlucHV0LmZpbGVzWzBdKSB7XG4gICAgICAgIGxldCBuYW1lRmlsZSA9IHRoaXMuaW5wdXQuZmlsZXNbMF0ubmFtZTtcbiAgICAgICAgdGhpcy5pbnB1dC5kYXRhc2V0LmN1cnJlbnRWYWx1ZSA9IG5hbWVGaWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnB1dC5kYXRhc2V0LmN1cnJlbnRWYWx1ZSA9IGRlZmF1bHRUZXh0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXREYXRhKCk6IElJbnB1dERhdGEgIHtcbiAgICBsZXQgZWwgPSB0aGlzLmlucHV0O1xuICAgIHJldHVybiBbLi4uQXJyYXkuZnJvbShlbC5maWxlcykubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBlbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSwgXG4gICAgICAgIHZhbHVlOiBpdGVtXG4gICAgICB9XG4gICAgfSldXG4gIH1cbn0iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2lucHV0JztcbmltcG9ydCBJTWFzayBmcm9tICdpbWFzayc7XG5cbmV4cG9ydCBjbGFzcyBJbnB1dE1hc2sgZXh0ZW5kcyBJbnB1dDxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIHB1YmxpYyBtYXNrOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCl7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy5tYXNrID0gdGhpcy5hY3RpdmF0ZU1hc2soKTtcbiAgICB0aGlzLmlzRW1wdHlMaXN0ZW5lcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZU1hc2soKSB7XG4gICAgICBsZXQgbWFzayA9ICcnO1xuICAgICAgbGV0IHBhdHRlcm4gPSAnJztcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmlucHV0LnR5cGUgfHwgdGhpcy5pbnB1dC5kYXRhc2V0LnR5cGU7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICd0ZWwnOiB7XG4gICAgICAgICAgICAgIG1hc2sgPSAnK3s3fSgwMDApMDAwLTAwLTAwJztcbiAgICAgICAgICAgICAgcGF0dGVybiA9ICcrezd9KDAwMCkwMDAtMDAtMDAnO1xuICAgICAgICAgICAgICByZXR1cm4gSU1hc2soXG4gICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IG1hc2ssXG4gICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybixcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpc0VtcHR5TGlzdGVuZXIoKSB7XG4gICAgaWYgKCF0aGlzLm1hc2subWFza2VkLmxhenkpIHtcbiAgICAgIHRoaXMuaW5wdXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXNrLm9uKCdhY2NlcHQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgICBzd2l0Y2ggKHRoaXMubWFzay52YWx1ZSkge1xuICAgICAgICBjYXNlICcrNygnOiB7XG4gICAgICAgICAgdGhpcy5tYXNrLnZhbHVlID0gJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnJzoge1xuICAgICAgICAgIHRoaXMuaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHRoaXMuaW5wdXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSIsImltcG9ydCB7IElucHV0LCBJSW5wdXREYXRhIH0gZnJvbSAnLi4vaW5wdXQnO1xuaW1wb3J0IENob2ljZXMgZnJvbSAnY2hvaWNlcy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBJbnB1dFNlbGVjdCBleHRlbmRzIElucHV0PEhUTUxTZWxlY3RFbGVtZW50PiB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxTZWxlY3RFbGVtZW50KXtcbiAgICBjb25zdCBjaG9pc2VzID0gbmV3IENob2ljZXMoZWxlbWVudCk7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy5pc0VtcHR5TGlzdGVuZXIoKTtcbiAgfVxuXG4gIGdldERhdGEoKTogSUlucHV0RGF0YSB7XG4gICAgbGV0IGVsID0gdGhpcy5pbnB1dDtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogZWwuZ2V0QXR0cmlidXRlKCduYW1lJyksIFxuICAgICAgdmFsdWU6IGVsLm9wdGlvbnNbZWwuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBDdXN0b21WYWxpZGF0aW9uIH0gZnJvbSAnLi8uLi8uLi8uLi9oZWxwZXJzL3ZhbGlkYXRpb24vdmFsaWRhdGlvbic7XG5cbmV4cG9ydCB0eXBlIElJbnB1dEZvcm0gPSAoSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCkgJiB7XG4gIG1heD86IHN0cmluZztcbiAgbWluPzogc3RyaW5nO1xuICBzdGVwPzogc3RyaW5nO1xufVxuXG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZyB8IEJsb2I7XG59XG5leHBvcnQgdHlwZSBJSW5wdXREYXRhID0gRGF0YSB8IERhdGFbXTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElucHV0PFQgZXh0ZW5kcyBJSW5wdXRGb3JtPntcbiAgcHJvdGVjdGVkIGlucHV0OiBUO1xuICBwcm90ZWN0ZWQgZXJyb3JOb2RlOiBFbGVtZW50O1xuICBwcm90ZWN0ZWQgY3VzdG9tVmFsaWRhdGlvbiA9IG5ldyBDdXN0b21WYWxpZGF0aW9uKCk7IFxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IFQpIHtcbiAgICB0aGlzLmlucHV0ID0gZWxlbWVudDtcbiAgICB0aGlzLmVycm9yTm9kZSA9IHRoaXMuaW5wdXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW52YWxpZCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgfSlcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3RlY3RlZCBjaGVjaygpIHtcbiAgICB0aGlzLmlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgdGhpcy5jdXN0b21WYWxpZGF0aW9uXG4gICAgICAuY2hlY2tWYWxpZGl0eSh0aGlzLmlucHV0KVxuICAgICAgLmdldEludmFsaWRpdGllc1N0cmluZygpXG4gICAgICApO1xuICAgIHRoaXMuc2V0RXJyb3IoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRFcnJvcigpIHtcbiAgICBpZiAodGhpcy5lcnJvck5vZGUpIHtcbiAgICAgIHRoaXMuZXJyb3JOb2RlLmlubmVySFRNTCA9IHRoaXMuY3VzdG9tVmFsaWRhdGlvbi5nZXRJbnZhbGlkaXRpZXNGb3JIVE1MKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZXJyb3JOb2RlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgICB0aGlzLmVycm9yTm9kZS5pbm5lckhUTUwgPSB0aGlzLmN1c3RvbVZhbGlkYXRpb24uZ2V0SW52YWxpZGl0aWVzRm9ySFRNTCgpO1xuICAgICAgdGhpcy5pbnB1dC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgdGhpcy5lcnJvck5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNFbXB0eUxpc3RlbmVyKCkge1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcblxuICAgICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGRpc2FibGVkKCkge1xuICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlZCgpIHtcbiAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGdldERhdGEoKTogSUlucHV0RGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMuaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJyksIFxuICAgICAgdmFsdWU6IHRoaXMuaW5wdXQudmFsdWVcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGVycm9yKCkge1xuICAgIHRoaXMuaW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgfVxufSIsImltcG9ydCB7IElUZW1wbGF0ZUNsYXNzIH0gZnJvbSBcIi4uL190ZW1wbGF0ZS9fdGVtcGxhdGVcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmludGVyZmFjZSBJSGVhZGVyIGV4dGVuZHMgSVRlbXBsYXRlQ2xhc3N7XG4gIHByb3BzOiBvYmplY3Q7XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgaW1wbGVtZW50cyBJSGVhZGVye1xuICBwcm9wczogb2JqZWN0O1xuICBwdWJsaWMgc3RhdGljIGluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwnKVswXSlcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXInKVswXVxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9KVxuICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kYWwvbW9kYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2Zvcm0nO1xuXG5cbiIsImltcG9ydCB7IElUZW1wbGF0ZUNsYXNzIH0gZnJvbSBcIi4uL190ZW1wbGF0ZS9fdGVtcGxhdGVcIjtcblxuaW50ZXJmYWNlIElNb2RhbCBleHRlbmRzIElUZW1wbGF0ZUNsYXNze1xufVxuXG5leHBvcnQgY2xhc3MgTW9kYWwgaW1wbGVtZW50cyBJTW9kYWx7XG4gIHByb3BzOiBvYmplY3Q7XG4gIGVsZW06IEVsZW1lbnQ7XG4gIHByaXZhdGUgX2J1dHRvbkNsb3NlOiBFbGVtZW50O1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdCgpOnZvaWQge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9ICdjZi1tb2RhbCc7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XG4gICAgY29uc3QgZWxlbUFyciA9IEFycmF5LmZyb20oZWxlbWVudHMpO1xuICAgIGVsZW1BcnIubWFwKGVsZW0gPT4ge1xuICAgICAgbmV3IE1vZGFsKGVsZW0pO1xuICAgIH0pXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtID0gZWxlbWVudDtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdGhpcy5idXR0b25DbG9zZSA9IHRoaXMuZWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdO1xuICB9XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhpZGRlbicpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWhpZGRlbicpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IGJ1dHRvbkNsb3NlKGVsZW06IEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgdGhpcy5fYnV0dG9uQ2xvc2UgPSBlbGVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xuICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdjbG9zZSc7XG4gICAgICB0aGlzLl9idXR0b25DbG9zZSA9IGJ1dHRvbjtcbiAgICB9XG4gICAgdGhpcy5fYnV0dG9uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBidXR0b25DbG9zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnV0dG9uQ2xvc2U7XG4gIH1cbn0iLCJpbXBvcnQgeyBJSW5wdXRGb3JtIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3JtL2lucHV0L2lucHV0JztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbGlkYXRpb257IFxuICBwcml2YXRlIF9pbnZhbGlkaXRpZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldDtcblxuICBzZXQgaW52YWxpZGl0aWVzKHZhbHVlOiBTZXQ8c3RyaW5nPikge1xuICAgICAgdGhpcy5faW52YWxpZGl0aWVzID0gdmFsdWU7XG4gIH1cblxuICBnZXQgaW52YWxpZGl0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnZhbGlkaXRpZXM7XG4gIH1cblxuICBnZXRJbnZhbGlkaXRpZXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faW52YWxpZGl0aWVzKS5qb2luKCcgXFxuJyk7XG4gIH1cblxuICBnZXRJbnZhbGlkaXRpZXNGb3JIVE1MKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2ludmFsaWRpdGllcykuam9pbignPGJyPicpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnZhbGlkaXRpZXNSZXNldCgpIHtcbiAgICB0aGlzLl9pbnZhbGlkaXRpZXMuY2xlYXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja1ZhbGlkaXR5KGVsZW06IElJbnB1dEZvcm0pIHtcbiAgICB0aGlzLmludmFsaWRpdGllc1Jlc2V0KCk7XG4gICAgbGV0IHZhbGlkaXR5ID0gZWxlbS52YWxpZGl0eTtcbiAgICBsZXQgZmxhZyA9IHRydWU7XG4gICAgaWYgKHZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgY29uc3QgY3VzdG9tRXJyb3IgPSBlbGVtLnRpdGxlIHx8ICfQktCy0LXQtNC10L3QvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQvdC1INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCINGC0YDQtdCx0YPQtdC80L7QvNGDLidcbiAgICAgIHRoaXMuaW52YWxpZGl0aWVzLmFkZChjdXN0b21FcnJvcik7XG4gICAgICBmbGFnID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWxpZGl0eS5yYW5nZU92ZXJmbG93KSB7XG4gICAgICBsZXQgbWF4ID0gZWxlbS5tYXg7XG4gICAgICB0aGlzLmludmFsaWRpdGllcy5hZGQoYNCc0LDQutGB0LjQvNCw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQvdC1INCx0L7Qu9GM0YjQtSAke21heH0uYCk7XG4gICAgICBmbGFnID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWxpZGl0eS5yYW5nZVVuZGVyZmxvdykge1xuICAgICAgbGV0IG1pbiA9IGVsZW0ubWluO1xuICAgICAgdGhpcy5pbnZhbGlkaXRpZXMuYWRkKGDQnNC40L3QuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC90LUg0LzQtdC90LXQtSAke21pbn0uYCk7XG4gICAgICBmbGFnID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWxpZGl0eS5zdGVwTWlzbWF0Y2gpIHtcbiAgICAgIGxldCBzdGVwID0gZWxlbS5zdGVwO1xuICAgICAgdGhpcy5pbnZhbGlkaXRpZXMuYWRkKGDQl9C90LDRh9C10L3QuNC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQutGA0LDRgtC90L4gJHtzdGVwfS5gKTtcbiAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgdGhpcy5pbnZhbGlkaXRpZXMuYWRkKGDQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+LmApO1xuICAgICAgZmxhZyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgICBsZXQgY3VzdG9tRXJyb3I6IHN0cmluZztcbiAgICAgIHN3aXRjaCAoZWxlbS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RlbCc6XG4gICAgICAgICAgY3VzdG9tRXJyb3IgPSAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCDQsiDQvdC10L7QsdGF0L7QtNC40LzQvtC8INGE0L7RgNC80LDRgtC1JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgIGN1c3RvbUVycm9yID0gJ9Cf0L7QttCw0LvRg9C50YHRgtCy0LAsINCy0LLQtdC00LjRgtC1IGVtYWlsINCyINGE0L7RgNC80LDRgtC1IFwiZW1haWxAZXhhbXBsZS5jb21cIic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY3VzdG9tRXJyb3IgPSAn0J/QvtC20LDQu9GD0LnRgdGC0LLQsCwg0LLQstC10LTQuNGC0LUg0YLRgNC10LHRg9C10LzQvtC1INC30L3QsNGH0LXQvdC40LUnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5pbnZhbGlkaXRpZXMuYWRkKGN1c3RvbUVycm9yKTtcbiAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IFxuICBIZWFkZXIsXG4gIE1vZGFsLFxuICBGb3JtXG4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbmRleFwiO1xuXG4oKCkgPT4ge1xuICBbXG4gICAgSGVhZGVyLFxuICAgIE1vZGFsLFxuICAgIEZvcm1cbiAgXS5tYXAoYmxvY2sgPT4gYmxvY2suaW5pdCgpKTtcbn0pKCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohIGNob2ljZXMuanMgdjcuMC4wIHwgKGMpIDIwMTkgSm9zaCBKb2huc29uIHwgaHR0cHM6Ly9naXRodWIuY29tL2pzaGpvaG5zb24vQ2hvaWNlcyNyZWFkbWUgKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQ2hvaWNlcz10KCk6ZS5DaG9pY2VzPXQoKX0od2luZG93LGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIGkobil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciBvPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLGkpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIGkubT1lLGkuYz10LGkuZD1mdW5jdGlvbihlLHQsbil7aS5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om59KX0saS5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGkudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9aShlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKGkucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSlpLmQobixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiBufSxpLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIGkuZCh0LFwiYVwiLHQpLHR9LGkubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0saS5wPVwiL3B1YmxpYy9hc3NldHMvc2NyaXB0cy9cIixpKGkucz05KX0oW2Z1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRpZmY9dC5jbG9uZU9iamVjdD10LmV4aXN0c0luQXJyYXk9dC5pc0lFMTE9dC5mZXRjaEZyb21PYmplY3Q9dC5nZXRXaW5kb3dIZWlnaHQ9dC5kaXNwYXRjaEV2ZW50PXQuc29ydEJ5U2NvcmU9dC5zb3J0QnlBbHBoYT10LmNhbGNXaWR0aE9mSW5wdXQ9dC5zdHJUb0VsPXQuc2FuaXRpc2U9dC5pc1Njcm9sbGVkSW50b1ZpZXc9dC5nZXRBZGphY2VudEVsPXQuZmluZEFuY2VzdG9yQnlBdHRyTmFtZT10LndyYXA9dC5pc0VsZW1lbnQ9dC5pc1R5cGU9dC5nZXRUeXBlPXQuZ2VuZXJhdGVJZD10LmdlbmVyYXRlQ2hhcnM9dC5nZXRSYW5kb21OdW1iZXI9dm9pZCAwO3ZhciBuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoodC1lKStlKX07dC5nZXRSYW5kb21OdW1iZXI9bjt2YXIgbz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9XCJcIixpPTA7aTxlO2krKyl7dCs9bigwLDM2KS50b1N0cmluZygzNil9cmV0dXJuIHR9O3QuZ2VuZXJhdGVDaGFycz1vO3QuZ2VuZXJhdGVJZD1mdW5jdGlvbihlLHQpe3ZhciBpPWUuaWR8fGUubmFtZSYmXCJcIi5jb25jYXQoZS5uYW1lLFwiLVwiKS5jb25jYXQobygyKSl8fG8oNCk7cmV0dXJuIGk9aS5yZXBsYWNlKC8oOnxcXC58XFxbfFxcXXwsKS9nLFwiXCIpLGk9XCJcIi5jb25jYXQodCxcIi1cIikuY29uY2F0KGkpfTt2YXIgcj1mdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpfTt0LmdldFR5cGU9cjt2YXIgcz1mdW5jdGlvbihlLHQpe3JldHVybiBudWxsIT10JiZyKHQpPT09ZX07dC5pc1R5cGU9czt0LmlzRWxlbWVudD1mdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIEVsZW1lbnR9O3Qud3JhcD1mdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5uZXh0U2libGluZz9lLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyk6ZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHQpLHQuYXBwZW5kQ2hpbGQoZSl9O3QuZmluZEFuY2VzdG9yQnlBdHRyTmFtZT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgaT1lO2k7KXtpZihpLmhhc0F0dHJpYnV0ZSh0KSlyZXR1cm4gaTtpPWkucGFyZW50RWxlbWVudH1yZXR1cm4gbnVsbH07dC5nZXRBZGphY2VudEVsPWZ1bmN0aW9uKGUsdCl7dmFyIGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjE7aWYoZSYmdCl7dmFyIG49ZS5wYXJlbnROb2RlLnBhcmVudE5vZGUsbz1BcnJheS5mcm9tKG4ucXVlcnlTZWxlY3RvckFsbCh0KSkscj1vLmluZGV4T2YoZSk7cmV0dXJuIG9bcisoaT4wPzE6LTEpXX19O3QuaXNTY3JvbGxlZEludG9WaWV3PWZ1bmN0aW9uKGUsdCl7dmFyIGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjE7aWYoZSlyZXR1cm4gaT4wP3Quc2Nyb2xsVG9wK3Qub2Zmc2V0SGVpZ2h0Pj1lLm9mZnNldFRvcCtlLm9mZnNldEhlaWdodDplLm9mZnNldFRvcD49dC5zY3JvbGxUb3B9O3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVybiBzKFwiU3RyaW5nXCIsZSk/ZS5yZXBsYWNlKC8mL2csXCImYW1wO1wiKS5yZXBsYWNlKC8+L2csXCImcnQ7XCIpLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKTplfTt0LnNhbml0aXNlPWE7dmFyIGMsbD0oYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGZ1bmN0aW9uKGUpe3ZhciB0PWUudHJpbSgpO2MuaW5uZXJIVE1MPXQ7Zm9yKHZhciBpPWMuY2hpbGRyZW5bMF07Yy5maXJzdENoaWxkOyljLnJlbW92ZUNoaWxkKGMuZmlyc3RDaGlsZCk7cmV0dXJuIGl9KTt0LnN0clRvRWw9bDt0LmNhbGNXaWR0aE9mSW5wdXQ9ZnVuY3Rpb24oZSx0KXt2YXIgaT1lLnZhbHVlfHxlLnBsYWNlaG9sZGVyLG49ZS5vZmZzZXRXaWR0aDtpZihpKXt2YXIgbz1sKFwiPHNwYW4+XCIuY29uY2F0KGEoaSksXCI8L3NwYW4+XCIpKTtpZihvLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixvLnN0eWxlLnBhZGRpbmc9XCIwXCIsby5zdHlsZS50b3A9XCItOTk5OXB4XCIsby5zdHlsZS5sZWZ0PVwiLTk5OTlweFwiLG8uc3R5bGUud2lkdGg9XCJhdXRvXCIsby5zdHlsZS53aGl0ZVNwYWNlPVwicHJlXCIsZG9jdW1lbnQuYm9keS5jb250YWlucyhlKSYmd2luZG93LmdldENvbXB1dGVkU3R5bGUpe3ZhciByPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpO3ImJihvLnN0eWxlLmZvbnRTaXplPXIuZm9udFNpemUsby5zdHlsZS5mb250RmFtaWx5PXIuZm9udEZhbWlseSxvLnN0eWxlLmZvbnRXZWlnaHQ9ci5mb250V2VpZ2h0LG8uc3R5bGUuZm9udFN0eWxlPXIuZm9udFN0eWxlLG8uc3R5bGUubGV0dGVyU3BhY2luZz1yLmxldHRlclNwYWNpbmcsby5zdHlsZS50ZXh0VHJhbnNmb3JtPXIudGV4dFRyYW5zZm9ybSxvLnN0eWxlLnBhZGRpbmc9ci5wYWRkaW5nKX1kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG8pLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2kmJm8ub2Zmc2V0V2lkdGghPT1lLm9mZnNldFdpZHRoJiYobj1vLm9mZnNldFdpZHRoKzQpLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobyksdC5jYWxsKHZvaWQgMCxcIlwiLmNvbmNhdChuLFwicHhcIikpfSl9ZWxzZSB0LmNhbGwodm9pZCAwLFwiXCIuY29uY2F0KG4sXCJweFwiKSl9O3Quc29ydEJ5QWxwaGE9ZnVuY3Rpb24oZSx0KXt2YXIgaT1cIlwiLmNvbmNhdChlLmxhYmVsfHxlLnZhbHVlKS50b0xvd2VyQ2FzZSgpLG49XCJcIi5jb25jYXQodC5sYWJlbHx8dC52YWx1ZSkudG9Mb3dlckNhc2UoKTtyZXR1cm4gaTxuPy0xOmk+bj8xOjB9O3Quc29ydEJ5U2NvcmU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5zY29yZS10LnNjb3JlfTt0LmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24oZSx0KXt2YXIgaT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbCxuPW5ldyBDdXN0b21FdmVudCh0LHtkZXRhaWw6aSxidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KTtyZXR1cm4gZS5kaXNwYXRjaEV2ZW50KG4pfTt0LmdldFdpbmRvd0hlaWdodD1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmJvZHksdD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIE1hdGgubWF4KGUuc2Nyb2xsSGVpZ2h0LGUub2Zmc2V0SGVpZ2h0LHQuY2xpZW50SGVpZ2h0LHQuc2Nyb2xsSGVpZ2h0LHQub2Zmc2V0SGVpZ2h0KX07dC5mZXRjaEZyb21PYmplY3Q9ZnVuY3Rpb24gZSh0LGkpe3ZhciBuPWkuaW5kZXhPZihcIi5cIik7cmV0dXJuIG4+LTE/ZSh0W2kuc3Vic3RyaW5nKDAsbildLGkuc3Vic3RyKG4rMSkpOnRbaV19O3QuaXNJRTExPWZ1bmN0aW9uKCl7cmV0dXJuISghbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC8pfHwhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvcnZbIDpdMTEvKSl9O3QuZXhpc3RzSW5BcnJheT1mdW5jdGlvbihlLHQpe3ZhciBpPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpcInZhbHVlXCI7cmV0dXJuIGUuc29tZShmdW5jdGlvbihlKXtyZXR1cm4gcyhcIlN0cmluZ1wiLHQpP2VbaV09PT10LnRyaW0oKTplW2ldPT09dH0pfTt0LmNsb25lT2JqZWN0PWZ1bmN0aW9uKGUpe3JldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUpKX07dC5kaWZmPWZ1bmN0aW9uKGUsdCl7dmFyIGk9T2JqZWN0LmtleXMoZSkuc29ydCgpLG49T2JqZWN0LmtleXModCkuc29ydCgpO3JldHVybiBpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gbi5pbmRleE9mKGUpPDB9KX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlNDUk9MTElOR19TUEVFRD10LktFWV9DT0RFUz10LkFDVElPTl9UWVBFUz10LkVWRU5UUz10LkRFRkFVTFRfQ09ORklHPXQuREVGQVVMVF9DTEFTU05BTUVTPXZvaWQgMDt2YXIgbj1pKDApLG89e2NvbnRhaW5lck91dGVyOlwiY2hvaWNlc1wiLGNvbnRhaW5lcklubmVyOlwiY2hvaWNlc19faW5uZXJcIixpbnB1dDpcImNob2ljZXNfX2lucHV0XCIsaW5wdXRDbG9uZWQ6XCJjaG9pY2VzX19pbnB1dC0tY2xvbmVkXCIsbGlzdDpcImNob2ljZXNfX2xpc3RcIixsaXN0SXRlbXM6XCJjaG9pY2VzX19saXN0LS1tdWx0aXBsZVwiLGxpc3RTaW5nbGU6XCJjaG9pY2VzX19saXN0LS1zaW5nbGVcIixsaXN0RHJvcGRvd246XCJjaG9pY2VzX19saXN0LS1kcm9wZG93blwiLGl0ZW06XCJjaG9pY2VzX19pdGVtXCIsaXRlbVNlbGVjdGFibGU6XCJjaG9pY2VzX19pdGVtLS1zZWxlY3RhYmxlXCIsaXRlbURpc2FibGVkOlwiY2hvaWNlc19faXRlbS0tZGlzYWJsZWRcIixpdGVtQ2hvaWNlOlwiY2hvaWNlc19faXRlbS0tY2hvaWNlXCIscGxhY2Vob2xkZXI6XCJjaG9pY2VzX19wbGFjZWhvbGRlclwiLGdyb3VwOlwiY2hvaWNlc19fZ3JvdXBcIixncm91cEhlYWRpbmc6XCJjaG9pY2VzX19oZWFkaW5nXCIsYnV0dG9uOlwiY2hvaWNlc19fYnV0dG9uXCIsYWN0aXZlU3RhdGU6XCJpcy1hY3RpdmVcIixmb2N1c1N0YXRlOlwiaXMtZm9jdXNlZFwiLG9wZW5TdGF0ZTpcImlzLW9wZW5cIixkaXNhYmxlZFN0YXRlOlwiaXMtZGlzYWJsZWRcIixoaWdobGlnaHRlZFN0YXRlOlwiaXMtaGlnaGxpZ2h0ZWRcIixoaWRkZW5TdGF0ZTpcImlzLWhpZGRlblwiLGZsaXBwZWRTdGF0ZTpcImlzLWZsaXBwZWRcIixsb2FkaW5nU3RhdGU6XCJpcy1sb2FkaW5nXCIsbm9SZXN1bHRzOlwiaGFzLW5vLXJlc3VsdHNcIixub0Nob2ljZXM6XCJoYXMtbm8tY2hvaWNlc1wifTt0LkRFRkFVTFRfQ0xBU1NOQU1FUz1vO3ZhciByPXtpdGVtczpbXSxjaG9pY2VzOltdLHNpbGVudDohMSxyZW5kZXJDaG9pY2VMaW1pdDotMSxtYXhJdGVtQ291bnQ6LTEsYWRkSXRlbXM6ITAsYWRkSXRlbUZpbHRlckZuOm51bGwscmVtb3ZlSXRlbXM6ITAscmVtb3ZlSXRlbUJ1dHRvbjohMSxlZGl0SXRlbXM6ITEsZHVwbGljYXRlSXRlbXNBbGxvd2VkOiEwLGRlbGltaXRlcjpcIixcIixwYXN0ZTohMCxzZWFyY2hFbmFibGVkOiEwLHNlYXJjaENob2ljZXM6ITAsc2VhcmNoRmxvb3I6MSxzZWFyY2hSZXN1bHRMaW1pdDo0LHNlYXJjaEZpZWxkczpbXCJsYWJlbFwiLFwidmFsdWVcIl0scG9zaXRpb246XCJhdXRvXCIscmVzZXRTY3JvbGxQb3NpdGlvbjohMCxzaG91bGRTb3J0OiEwLHNob3VsZFNvcnRJdGVtczohMSxzb3J0Rm46bi5zb3J0QnlBbHBoYSxwbGFjZWhvbGRlcjohMCxwbGFjZWhvbGRlclZhbHVlOm51bGwsc2VhcmNoUGxhY2Vob2xkZXJWYWx1ZTpudWxsLHByZXBlbmRWYWx1ZTpudWxsLGFwcGVuZFZhbHVlOm51bGwscmVuZGVyU2VsZWN0ZWRDaG9pY2VzOlwiYXV0b1wiLGxvYWRpbmdUZXh0OlwiTG9hZGluZy4uLlwiLG5vUmVzdWx0c1RleHQ6XCJObyByZXN1bHRzIGZvdW5kXCIsbm9DaG9pY2VzVGV4dDpcIk5vIGNob2ljZXMgdG8gY2hvb3NlIGZyb21cIixpdGVtU2VsZWN0VGV4dDpcIlByZXNzIHRvIHNlbGVjdFwiLHVuaXF1ZUl0ZW1UZXh0OlwiT25seSB1bmlxdWUgdmFsdWVzIGNhbiBiZSBhZGRlZFwiLGN1c3RvbUFkZEl0ZW1UZXh0OlwiT25seSB2YWx1ZXMgbWF0Y2hpbmcgc3BlY2lmaWMgY29uZGl0aW9ucyBjYW4gYmUgYWRkZWRcIixhZGRJdGVtVGV4dDpmdW5jdGlvbihlKXtyZXR1cm4nUHJlc3MgRW50ZXIgdG8gYWRkIDxiPlwiJy5jb25jYXQoKDAsbi5zYW5pdGlzZSkoZSksJ1wiPC9iPicpfSxtYXhJdGVtVGV4dDpmdW5jdGlvbihlKXtyZXR1cm5cIk9ubHkgXCIuY29uY2F0KGUsXCIgdmFsdWVzIGNhbiBiZSBhZGRlZFwiKX0saXRlbUNvbXBhcmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10fSxmdXNlT3B0aW9uczp7aW5jbHVkZVNjb3JlOiEwfSxjYWxsYmFja09uSW5pdDpudWxsLGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXM6bnVsbCxjbGFzc05hbWVzOm99O3QuREVGQVVMVF9DT05GSUc9cjt0LkVWRU5UUz17c2hvd0Ryb3Bkb3duOlwic2hvd0Ryb3Bkb3duXCIsaGlkZURyb3Bkb3duOlwiaGlkZURyb3Bkb3duXCIsY2hhbmdlOlwiY2hhbmdlXCIsY2hvaWNlOlwiY2hvaWNlXCIsc2VhcmNoOlwic2VhcmNoXCIsYWRkSXRlbTpcImFkZEl0ZW1cIixyZW1vdmVJdGVtOlwicmVtb3ZlSXRlbVwiLGhpZ2hsaWdodEl0ZW06XCJoaWdobGlnaHRJdGVtXCIsaGlnaGxpZ2h0Q2hvaWNlOlwiaGlnaGxpZ2h0Q2hvaWNlXCJ9O3QuQUNUSU9OX1RZUEVTPXtBRERfQ0hPSUNFOlwiQUREX0NIT0lDRVwiLEZJTFRFUl9DSE9JQ0VTOlwiRklMVEVSX0NIT0lDRVNcIixBQ1RJVkFURV9DSE9JQ0VTOlwiQUNUSVZBVEVfQ0hPSUNFU1wiLENMRUFSX0NIT0lDRVM6XCJDTEVBUl9DSE9JQ0VTXCIsQUREX0dST1VQOlwiQUREX0dST1VQXCIsQUREX0lURU06XCJBRERfSVRFTVwiLFJFTU9WRV9JVEVNOlwiUkVNT1ZFX0lURU1cIixISUdITElHSFRfSVRFTTpcIkhJR0hMSUdIVF9JVEVNXCIsQ0xFQVJfQUxMOlwiQ0xFQVJfQUxMXCJ9O3QuS0VZX0NPREVTPXtCQUNLX0tFWTo0NixERUxFVEVfS0VZOjgsRU5URVJfS0VZOjEzLEFfS0VZOjY1LEVTQ19LRVk6MjcsVVBfS0VZOjM4LERPV05fS0VZOjQwLFBBR0VfVVBfS0VZOjMzLFBBR0VfRE9XTl9LRVk6MzR9O3QuU0NST0xMSU5HX1NQRUVEPTR9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oZSxuKXt2YXIgbyxyPWkoNyk7bz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCE9PWU/ZTpuO3ZhciBzPU9iamVjdChyLmEpKG8pO3QuYT1zfSkuY2FsbCh0aGlzLGkoMyksaSgxNCkoZSkpfSxmdW5jdGlvbihlLHQpe3ZhciBpO2k9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKTt0cnl7aT1pfHxuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKGUpe1wib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJihpPXdpbmRvdyl9ZS5leHBvcnRzPWl9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9dm9pZCAwO3ZhciBuPWkoMCk7ZnVuY3Rpb24gbyhlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgbj10W2ldO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBpPXQuZWxlbWVudCxvPXQuY2xhc3NOYW1lcztpZihmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksT2JqZWN0LmFzc2lnbih0aGlzLHtlbGVtZW50OmksY2xhc3NOYW1lczpvfSksISgwLG4uaXNFbGVtZW50KShpKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBlbGVtZW50IHBhc3NlZFwiKTt0aGlzLmlzRGlzYWJsZWQ9ITF9dmFyIHQsaSxyO3JldHVybiB0PWUsKGk9W3trZXk6XCJjb25jZWFsXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuaW5wdXQpLHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5oaWRkZW5TdGF0ZSksdGhpcy5lbGVtZW50LnRhYkluZGV4PVwiLTFcIjt2YXIgZT10aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik7ZSYmdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY2hvaWNlLW9yaWctc3R5bGVcIixlKSx0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIiksdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY2hvaWNlXCIsXCJhY3RpdmVcIil9fSx7a2V5OlwicmV2ZWFsXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuaW5wdXQpLHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5oaWRkZW5TdGF0ZSksdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO3ZhciBlPXRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNob2ljZS1vcmlnLXN0eWxlXCIpO2U/KHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWNob2ljZS1vcmlnLXN0eWxlXCIpLHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUpKTp0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpLHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWNob2ljZVwiKSx0aGlzLmVsZW1lbnQudmFsdWU9dGhpcy5lbGVtZW50LnZhbHVlfX0se2tleTpcImVuYWJsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLHRoaXMuZWxlbWVudC5kaXNhYmxlZD0hMSx0aGlzLmlzRGlzYWJsZWQ9ITF9fSx7a2V5OlwiZGlzYWJsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIiksdGhpcy5lbGVtZW50LmRpc2FibGVkPSEwLHRoaXMuaXNEaXNhYmxlZD0hMH19LHtrZXk6XCJ0cmlnZ2VyRXZlbnRcIix2YWx1ZTpmdW5jdGlvbihlLHQpeygwLG4uZGlzcGF0Y2hFdmVudCkodGhpcy5lbGVtZW50LGUsdCl9fSx7a2V5OlwidmFsdWVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlfX1dKSYmbyh0LnByb3RvdHlwZSxpKSxyJiZvKHQsciksZX0oKTt0LmRlZmF1bHQ9cn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVmYXVsdD10LlRFTVBMQVRFUz12b2lkIDA7dmFyIG4sbz0obj1pKDI3KSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59LHI9aSgwKTtmdW5jdGlvbiBzKGUsdCxpKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOmksZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPWksZX12YXIgYT17Y29udGFpbmVyT3V0ZXI6ZnVuY3Rpb24oZSx0LGksbixvLHMpe3ZhciBhPW4/J3RhYmluZGV4PVwiMFwiJzpcIlwiLGM9aT8ncm9sZT1cImxpc3Rib3hcIic6XCJcIixsPVwiXCI7cmV0dXJuIGkmJm8mJihjPSdyb2xlPVwiY29tYm9ib3hcIicsbD0nYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCInKSwoMCxyLnN0clRvRWwpKCdcXG4gICAgICA8ZGl2XFxuICAgICAgICBjbGFzcz1cIicuY29uY2F0KGUuY29udGFpbmVyT3V0ZXIsJ1wiXFxuICAgICAgICBkYXRhLXR5cGU9XCInKS5jb25jYXQocywnXCJcXG4gICAgICAgICcpLmNvbmNhdChjLFwiXFxuICAgICAgICBcIikuY29uY2F0KGEsXCJcXG4gICAgICAgIFwiKS5jb25jYXQobCwnXFxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXFxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxcbiAgICAgICAgZGlyPVwiJykuY29uY2F0KHQsJ1wiXFxuICAgICAgICA+XFxuICAgICAgPC9kaXY+XFxuICAgICcpKX0sY29udGFpbmVySW5uZXI6ZnVuY3Rpb24oZSl7cmV0dXJuKDAsci5zdHJUb0VsKSgnXFxuICAgICAgPGRpdiBjbGFzcz1cIicuY29uY2F0KGUuY29udGFpbmVySW5uZXIsJ1wiPjwvZGl2PlxcbiAgICAnKSl9LGl0ZW1MaXN0OmZ1bmN0aW9uKGUsdCl7dmFyIGksbj0oMCxvLmRlZmF1bHQpKGUubGlzdCwocyhpPXt9LGUubGlzdFNpbmdsZSx0KSxzKGksZS5saXN0SXRlbXMsIXQpLGkpKTtyZXR1cm4oMCxyLnN0clRvRWwpKCdcXG4gICAgICA8ZGl2IGNsYXNzPVwiJy5jb25jYXQobiwnXCI+PC9kaXY+XFxuICAgICcpKX0scGxhY2Vob2xkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4oMCxyLnN0clRvRWwpKCdcXG4gICAgICA8ZGl2IGNsYXNzPVwiJy5jb25jYXQoZS5wbGFjZWhvbGRlciwnXCI+XFxuICAgICAgICAnKS5jb25jYXQodCxcIlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIikpfSxpdGVtOmZ1bmN0aW9uKGUsdCxpKXt2YXIgbixhLGM9dC5hY3RpdmU/J2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCInOlwiXCIsbD10LmRpc2FibGVkPydhcmlhLWRpc2FibGVkPVwidHJ1ZVwiJzpcIlwiLHU9KDAsby5kZWZhdWx0KShlLml0ZW0sKHMobj17fSxlLmhpZ2hsaWdodGVkU3RhdGUsdC5oaWdobGlnaHRlZCkscyhuLGUuaXRlbVNlbGVjdGFibGUsIXQuaGlnaGxpZ2h0ZWQpLHMobixlLnBsYWNlaG9sZGVyLHQucGxhY2Vob2xkZXIpLG4pKTtyZXR1cm4gaT8odT0oMCxvLmRlZmF1bHQpKGUuaXRlbSwocyhhPXt9LGUuaGlnaGxpZ2h0ZWRTdGF0ZSx0LmhpZ2hsaWdodGVkKSxzKGEsZS5pdGVtU2VsZWN0YWJsZSwhdC5kaXNhYmxlZCkscyhhLGUucGxhY2Vob2xkZXIsdC5wbGFjZWhvbGRlciksYSkpLCgwLHIuc3RyVG9FbCkoJ1xcbiAgICAgICAgPGRpdlxcbiAgICAgICAgICBjbGFzcz1cIicuY29uY2F0KHUsJ1wiXFxuICAgICAgICAgIGRhdGEtaXRlbVxcbiAgICAgICAgICBkYXRhLWlkPVwiJykuY29uY2F0KHQuaWQsJ1wiXFxuICAgICAgICAgIGRhdGEtdmFsdWU9XCInKS5jb25jYXQodC52YWx1ZSxcIlxcXCJcXG4gICAgICAgICAgZGF0YS1jdXN0b20tcHJvcGVydGllcz0nXCIpLmNvbmNhdCh0LmN1c3RvbVByb3BlcnRpZXMsXCInXFxuICAgICAgICAgIGRhdGEtZGVsZXRhYmxlXFxuICAgICAgICAgIFwiKS5jb25jYXQoYyxcIlxcbiAgICAgICAgICBcIikuY29uY2F0KGwsXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICBcIikuY29uY2F0KHQubGFiZWwsJ1xceDNjIS0tXFxuICAgICAgIC0tXFx4M2U8YnV0dG9uXFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXFxuICAgICAgICAgICAgY2xhc3M9XCInKS5jb25jYXQoZS5idXR0b24sJ1wiXFxuICAgICAgICAgICAgZGF0YS1idXR0b25cXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVtb3ZlIGl0ZW06IFxcJycpLmNvbmNhdCh0LnZhbHVlLFwiJ1xcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgUmVtb3ZlIGl0ZW1cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICBcIikpKTooMCxyLnN0clRvRWwpKCdcXG4gICAgICA8ZGl2XFxuICAgICAgICBjbGFzcz1cIicuY29uY2F0KHUsJ1wiXFxuICAgICAgICBkYXRhLWl0ZW1cXG4gICAgICAgIGRhdGEtaWQ9XCInKS5jb25jYXQodC5pZCwnXCJcXG4gICAgICAgIGRhdGEtdmFsdWU9XCInKS5jb25jYXQodC52YWx1ZSwnXCJcXG4gICAgICAgICcpLmNvbmNhdChjLFwiXFxuICAgICAgICBcIikuY29uY2F0KGwsXCJcXG4gICAgICAgID5cXG4gICAgICAgIFwiKS5jb25jYXQodC5sYWJlbCxcIlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIikpfSxjaG9pY2VMaXN0OmZ1bmN0aW9uKGUsdCl7dmFyIGk9dD9cIlwiOidhcmlhLW11bHRpc2VsZWN0YWJsZT1cInRydWVcIic7cmV0dXJuKDAsci5zdHJUb0VsKSgnXFxuICAgICAgPGRpdlxcbiAgICAgICAgY2xhc3M9XCInLmNvbmNhdChlLmxpc3QsJ1wiXFxuICAgICAgICBkaXI9XCJsdHJcIlxcbiAgICAgICAgcm9sZT1cImxpc3Rib3hcIlxcbiAgICAgICAgJykuY29uY2F0KGksXCJcXG4gICAgICAgID5cXG4gICAgICA8L2Rpdj5cXG4gICAgXCIpKX0sY2hvaWNlR3JvdXA6ZnVuY3Rpb24oZSx0KXt2YXIgaT10LmRpc2FibGVkPydhcmlhLWRpc2FibGVkPVwidHJ1ZVwiJzpcIlwiLG49KDAsby5kZWZhdWx0KShlLmdyb3VwLHMoe30sZS5pdGVtRGlzYWJsZWQsdC5kaXNhYmxlZCkpO3JldHVybigwLHIuc3RyVG9FbCkoJ1xcbiAgICAgIDxkaXZcXG4gICAgICAgIGNsYXNzPVwiJy5jb25jYXQobiwnXCJcXG4gICAgICAgIGRhdGEtZ3JvdXBcXG4gICAgICAgIGRhdGEtaWQ9XCInKS5jb25jYXQodC5pZCwnXCJcXG4gICAgICAgIGRhdGEtdmFsdWU9XCInKS5jb25jYXQodC52YWx1ZSwnXCJcXG4gICAgICAgIHJvbGU9XCJncm91cFwiXFxuICAgICAgICAnKS5jb25jYXQoaSwnXFxuICAgICAgICA+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KGUuZ3JvdXBIZWFkaW5nLCdcIj4nKS5jb25jYXQodC52YWx1ZSxcIjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIikpfSxjaG9pY2U6ZnVuY3Rpb24oZSx0LGkpe3ZhciBuLGE9dC5ncm91cElkPjA/J3JvbGU9XCJ0cmVlaXRlbVwiJzoncm9sZT1cIm9wdGlvblwiJyxjPSgwLG8uZGVmYXVsdCkoZS5pdGVtLGUuaXRlbUNob2ljZSwocyhuPXt9LGUuaXRlbURpc2FibGVkLHQuZGlzYWJsZWQpLHMobixlLml0ZW1TZWxlY3RhYmxlLCF0LmRpc2FibGVkKSxzKG4sZS5wbGFjZWhvbGRlcix0LnBsYWNlaG9sZGVyKSxuKSk7cmV0dXJuKDAsci5zdHJUb0VsKSgnXFxuICAgICAgPGRpdlxcbiAgICAgICAgY2xhc3M9XCInLmNvbmNhdChjLCdcIlxcbiAgICAgICAgZGF0YS1zZWxlY3QtdGV4dD1cIicpLmNvbmNhdChpLCdcIlxcbiAgICAgICAgZGF0YS1jaG9pY2VcXG4gICAgICAgIGRhdGEtaWQ9XCInKS5jb25jYXQodC5pZCwnXCJcXG4gICAgICAgIGRhdGEtdmFsdWU9XCInKS5jb25jYXQodC52YWx1ZSwnXCJcXG4gICAgICAgICcpLmNvbmNhdCh0LmRpc2FibGVkPydkYXRhLWNob2ljZS1kaXNhYmxlZCBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiJzpcImRhdGEtY2hvaWNlLXNlbGVjdGFibGVcIiwnXFxuICAgICAgICBpZD1cIicpLmNvbmNhdCh0LmVsZW1lbnRJZCwnXCJcXG4gICAgICAgICcpLmNvbmNhdChhLFwiXFxuICAgICAgICA+XFxuICAgICAgICBcIikuY29uY2F0KHQubGFiZWwsXCJcXG4gICAgICA8L2Rpdj5cXG4gICAgXCIpKX0saW5wdXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9KDAsby5kZWZhdWx0KShlLmlucHV0LGUuaW5wdXRDbG9uZWQpO3JldHVybigwLHIuc3RyVG9FbCkoJ1xcbiAgICAgIDxpbnB1dFxcbiAgICAgICAgdHlwZT1cInRleHRcIlxcbiAgICAgICAgY2xhc3M9XCInLmNvbmNhdCh0LCdcIlxcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXplPVwib2ZmXCJcXG4gICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXFxuICAgICAgICByb2xlPVwidGV4dGJveFwiXFxuICAgICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxcbiAgICAgICAgPlxcbiAgICAnKSl9LGRyb3Bkb3duOmZ1bmN0aW9uKGUpe3ZhciB0PSgwLG8uZGVmYXVsdCkoZS5saXN0LGUubGlzdERyb3Bkb3duKTtyZXR1cm4oMCxyLnN0clRvRWwpKCdcXG4gICAgICA8ZGl2XFxuICAgICAgICBjbGFzcz1cIicuY29uY2F0KHQsJ1wiXFxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxcbiAgICAgICAgPlxcbiAgICAgIDwvZGl2PlxcbiAgICAnKSl9LG5vdGljZTpmdW5jdGlvbihlLHQpe3ZhciBpLG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOlwiXCIsYT0oMCxvLmRlZmF1bHQpKGUuaXRlbSxlLml0ZW1DaG9pY2UsKHMoaT17fSxlLm5vUmVzdWx0cyxcIm5vLXJlc3VsdHNcIj09PW4pLHMoaSxlLm5vQ2hvaWNlcyxcIm5vLWNob2ljZXNcIj09PW4pLGkpKTtyZXR1cm4oMCxyLnN0clRvRWwpKCdcXG4gICAgICA8ZGl2IGNsYXNzPVwiJy5jb25jYXQoYSwnXCI+XFxuICAgICAgICAnKS5jb25jYXQodCxcIlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIikpfSxvcHRpb246ZnVuY3Rpb24oZSl7cmV0dXJuKDAsci5zdHJUb0VsKSgnXFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIicuY29uY2F0KGUudmFsdWUsJ1wiICcpLmNvbmNhdChlLmFjdGl2ZT9cInNlbGVjdGVkXCI6XCJcIixcIiBcIikuY29uY2F0KGUuZGlzYWJsZWQ/XCJkaXNhYmxlZFwiOlwiXCIsXCIgXCIpLmNvbmNhdChlLmN1c3RvbVByb3BlcnRpZXM/XCJkYXRhLWN1c3RvbS1wcm9wZXJ0aWVzPVwiLmNvbmNhdChlLmN1c3RvbVByb3BlcnRpZXMpOlwiXCIsXCI+XCIpLmNvbmNhdChlLmxhYmVsLFwiPC9vcHRpb24+XFxuICAgIFwiKSl9fTt0LlRFTVBMQVRFUz1hO3ZhciBjPWE7dC5kZWZhdWx0PWN9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtpLnIodCk7dmFyIG49aSg4KSxvPVwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixyPShuLmF8fG98fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSkuU3ltYm9sLHM9T2JqZWN0LnByb3RvdHlwZSxhPXMuaGFzT3duUHJvcGVydHksYz1zLnRvU3RyaW5nLGw9cj9yLnRvU3RyaW5nVGFnOnZvaWQgMDt2YXIgdT1mdW5jdGlvbihlKXt2YXIgdD1hLmNhbGwoZSxsKSxpPWVbbF07dHJ5e2VbbF09dm9pZCAwO3ZhciBuPSEwfWNhdGNoKGUpe312YXIgbz1jLmNhbGwoZSk7cmV0dXJuIG4mJih0P2VbbF09aTpkZWxldGUgZVtsXSksb30saD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO3ZhciBkPWZ1bmN0aW9uKGUpe3JldHVybiBoLmNhbGwoZSl9LGY9XCJbb2JqZWN0IE51bGxdXCIscD1cIltvYmplY3QgVW5kZWZpbmVkXVwiLHY9cj9yLnRvU3RyaW5nVGFnOnZvaWQgMDt2YXIgbT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT92b2lkIDA9PT1lP3A6Zjp2JiZ2IGluIE9iamVjdChlKT91KGUpOmQoZSl9O3ZhciBnPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGkpe3JldHVybiBlKHQoaSkpfX0oT2JqZWN0LmdldFByb3RvdHlwZU9mLE9iamVjdCk7dmFyIF89ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlfSx5PVwiW29iamVjdCBPYmplY3RdXCIsYj1GdW5jdGlvbi5wcm90b3R5cGUsRT1PYmplY3QucHJvdG90eXBlLFM9Yi50b1N0cmluZyxJPUUuaGFzT3duUHJvcGVydHksTz1TLmNhbGwoT2JqZWN0KTt2YXIgQz1mdW5jdGlvbihlKXtpZighXyhlKXx8bShlKSE9eSlyZXR1cm4hMTt2YXIgdD1nKGUpO2lmKG51bGw9PT10KXJldHVybiEwO3ZhciBpPUkuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3I7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgaSYmaSBpbnN0YW5jZW9mIGkmJlMuY2FsbChpKT09T30sVD1pKDIpLHc9e0lOSVQ6XCJAQHJlZHV4L0lOSVRcIn07ZnVuY3Rpb24gayhlLHQsaSl7dmFyIG47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdm9pZCAwPT09aSYmKGk9dCx0PXZvaWQgMCksdm9pZCAwIT09aSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgaSl0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi5cIik7cmV0dXJuIGkoaykoZSx0KX1pZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uXCIpO3ZhciBvPWUscj10LHM9W10sYT1zLGM9ITE7ZnVuY3Rpb24gbCgpe2E9PT1zJiYoYT1zLnNsaWNlKCkpfWZ1bmN0aW9uIHUoKXtyZXR1cm4gcn1mdW5jdGlvbiBoKGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi5cIik7dmFyIHQ9ITA7cmV0dXJuIGwoKSxhLnB1c2goZSksZnVuY3Rpb24oKXtpZih0KXt0PSExLGwoKTt2YXIgaT1hLmluZGV4T2YoZSk7YS5zcGxpY2UoaSwxKX19fWZ1bmN0aW9uIGQoZSl7aWYoIUMoZSkpdGhyb3cgbmV3IEVycm9yKFwiQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuIFVzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy5cIik7aWYodm9pZCAwPT09ZS50eXBlKXRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiBIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7aWYoYyl0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuXCIpO3RyeXtjPSEwLHI9byhyLGUpfWZpbmFsbHl7Yz0hMX1mb3IodmFyIHQ9cz1hLGk9MDtpPHQubGVuZ3RoO2krKyl7KDAsdFtpXSkoKX1yZXR1cm4gZX1yZXR1cm4gZCh7dHlwZTp3LklOSVR9KSwobj17ZGlzcGF0Y2g6ZCxzdWJzY3JpYmU6aCxnZXRTdGF0ZTp1LHJlcGxhY2VSZWR1Y2VyOmZ1bmN0aW9uKGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uXCIpO289ZSxkKHt0eXBlOncuSU5JVH0pfX0pW1QuYV09ZnVuY3Rpb24oKXt2YXIgZSx0PWg7cmV0dXJuKGU9e3N1YnNjcmliZTpmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC5cIik7ZnVuY3Rpb24gaSgpe2UubmV4dCYmZS5uZXh0KHUoKSl9cmV0dXJuIGkoKSx7dW5zdWJzY3JpYmU6dChpKX19fSlbVC5hXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxlfSxufWZ1bmN0aW9uIEEoZSx0KXt2YXIgaT10JiZ0LnR5cGU7cmV0dXJuXCJHaXZlbiBhY3Rpb24gXCIrKGkmJidcIicraS50b1N0cmluZygpKydcIid8fFwiYW4gYWN0aW9uXCIpKycsIHJlZHVjZXIgXCInK2UrJ1wiIHJldHVybmVkIHVuZGVmaW5lZC4gVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiBJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC4nfWZ1bmN0aW9uIEwoZSl7Zm9yKHZhciB0PU9iamVjdC5rZXlzKGUpLGk9e30sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dOzAsXCJmdW5jdGlvblwiPT10eXBlb2YgZVtvXSYmKGlbb109ZVtvXSl9dmFyIHI9T2JqZWN0LmtleXMoaSk7dmFyIHM9dm9pZCAwO3RyeXshZnVuY3Rpb24oZSl7T2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgaT1lW3RdO2lmKHZvaWQgMD09PWkodm9pZCAwLHt0eXBlOncuSU5JVH0pKXRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicrdCtcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgeW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7aWYodm9pZCAwPT09aSh2b2lkIDAse3R5cGU6XCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OX1wiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdChcIlwiKS5qb2luKFwiLlwiKX0pKXRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicrdCtcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gRG9uJ3QgdHJ5IHRvIGhhbmRsZSBcIit3LklOSVQrJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiIG5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsIGluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC4nKX0pfShpKX1jYXRjaChlKXtzPWV9cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9YXJndW1lbnRzWzFdO2lmKHMpdGhyb3cgcztmb3IodmFyIG49ITEsbz17fSxhPTA7YTxyLmxlbmd0aDthKyspe3ZhciBjPXJbYV0sbD1pW2NdLHU9ZVtjXSxoPWwodSx0KTtpZih2b2lkIDA9PT1oKXt2YXIgZD1BKGMsdCk7dGhyb3cgbmV3IEVycm9yKGQpfW9bY109aCxuPW58fGghPT11fXJldHVybiBuP286ZX19ZnVuY3Rpb24geChlLHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0KGUuYXBwbHkodm9pZCAwLGFyZ3VtZW50cykpfX1mdW5jdGlvbiBQKGUsdCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSlyZXR1cm4geChlLHQpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSl0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgXCIrKG51bGw9PT1lP1wibnVsbFwiOnR5cGVvZiBlKSsnLiBEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiPycpO2Zvcih2YXIgaT1PYmplY3Qua2V5cyhlKSxuPXt9LG89MDtvPGkubGVuZ3RoO28rKyl7dmFyIHI9aVtvXSxzPWVbcl07XCJmdW5jdGlvblwiPT10eXBlb2YgcyYmKG5bcl09eChzLHQpKX1yZXR1cm4gbn1mdW5jdGlvbiBEKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsdD1BcnJheShlKSxpPTA7aTxlO2krKyl0W2ldPWFyZ3VtZW50c1tpXTtyZXR1cm4gMD09PXQubGVuZ3RoP2Z1bmN0aW9uKGUpe3JldHVybiBlfToxPT09dC5sZW5ndGg/dFswXTp0LnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlKHQuYXBwbHkodm9pZCAwLGFyZ3VtZW50cykpfX0pfXZhciBqPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBpPWFyZ3VtZW50c1t0XTtmb3IodmFyIG4gaW4gaSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaSxuKSYmKGVbbl09aVtuXSl9cmV0dXJuIGV9O2Z1bmN0aW9uIE0oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PUFycmF5KGUpLGk9MDtpPGU7aSsrKXRbaV09YXJndW1lbnRzW2ldO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oaSxuLG8pe3ZhciByLHM9ZShpLG4sbyksYT1zLmRpc3BhdGNoLGM9e2dldFN0YXRlOnMuZ2V0U3RhdGUsZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSl9fTtyZXR1cm4gcj10Lm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZShjKX0pLGE9RC5hcHBseSh2b2lkIDAscikocy5kaXNwYXRjaCksaih7fSxzLHtkaXNwYXRjaDphfSl9fX1pLmQodCxcImNyZWF0ZVN0b3JlXCIsZnVuY3Rpb24oKXtyZXR1cm4ga30pLGkuZCh0LFwiY29tYmluZVJlZHVjZXJzXCIsZnVuY3Rpb24oKXtyZXR1cm4gTH0pLGkuZCh0LFwiYmluZEFjdGlvbkNyZWF0b3JzXCIsZnVuY3Rpb24oKXtyZXR1cm4gUH0pLGkuZCh0LFwiYXBwbHlNaWRkbGV3YXJlXCIsZnVuY3Rpb24oKXtyZXR1cm4gTX0pLGkuZCh0LFwiY29tcG9zZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIER9KX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7dmFyIHQsaT1lLlN5bWJvbDtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kub2JzZXJ2YWJsZT90PWkub2JzZXJ2YWJsZToodD1pKFwib2JzZXJ2YWJsZVwiKSxpLm9ic2VydmFibGU9dCk6dD1cIkBAb2JzZXJ2YWJsZVwiLHR9aS5kKHQsXCJhXCIsZnVuY3Rpb24oKXtyZXR1cm4gbn0pfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKGUpe3ZhciBpPVwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLk9iamVjdD09PU9iamVjdCYmZTt0LmE9aX0pLmNhbGwodGhpcyxpKDMpKX0sZnVuY3Rpb24oZSx0LGkpe2UuZXhwb3J0cz1pKDEwKX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3ZhciBuPXYoaSgxMSkpLG89dihpKDEyKSkscj12KGkoMTMpKSxzPWkoMjApLGE9aSgxKSxjPWkoNSksbD1pKDI4KSx1PWkoMjkpLGg9aSgzMCksZD1pKDMxKSxmPWkoMzIpLHA9aSgwKTtmdW5jdGlvbiB2KGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBtKGUsdCxpKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOmksZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPWksZX1mdW5jdGlvbiBnKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciBuPXRbaV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX12YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJbZGF0YS1jaG9pY2VdXCIsaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307aWYoZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLCgwLHAuaXNUeXBlKShcIlN0cmluZ1wiLHQpKXt2YXIgbj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodCkpO2lmKG4ubGVuZ3RoPjEpcmV0dXJuIHRoaXMuX2dlbmVyYXRlSW5zdGFuY2VzKG4saSl9dGhpcy5jb25maWc9by5kZWZhdWx0LmFsbChbYS5ERUZBVUxUX0NPTkZJRyxlLnVzZXJEZWZhdWx0cyxpXSx7YXJyYXlNZXJnZTpmdW5jdGlvbihlLHQpe3JldHVybltdLmNvbmNhdCh0KX19KTt2YXIgYz0oMCxwLmRpZmYpKHRoaXMuY29uZmlnLGEuREVGQVVMVF9DT05GSUcpO2MubGVuZ3RoJiZjb25zb2xlLndhcm4oXCJVbmtub3duIGNvbmZpZyBvcHRpb24ocykgcGFzc2VkXCIsYy5qb2luKFwiLCBcIikpLFtcImF1dG9cIixcImFsd2F5c1wiXS5pbmNsdWRlcyh0aGlzLmNvbmZpZy5yZW5kZXJTZWxlY3RlZENob2ljZXMpfHwodGhpcy5jb25maWcucmVuZGVyU2VsZWN0ZWRDaG9pY2VzPVwiYXV0b1wiKTt2YXIgbD0oMCxwLmlzVHlwZSkoXCJTdHJpbmdcIix0KT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpOnQ7cmV0dXJuIGw/KHRoaXMuX2lzVGV4dEVsZW1lbnQ9XCJ0ZXh0XCI9PT1sLnR5cGUsdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50PVwic2VsZWN0LW9uZVwiPT09bC50eXBlLHRoaXMuX2lzU2VsZWN0TXVsdGlwbGVFbGVtZW50PVwic2VsZWN0LW11bHRpcGxlXCI9PT1sLnR5cGUsdGhpcy5faXNTZWxlY3RFbGVtZW50PXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudHx8dGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnQsdGhpcy5faXNUZXh0RWxlbWVudD90aGlzLnBhc3NlZEVsZW1lbnQ9bmV3IHMuV3JhcHBlZElucHV0KHtlbGVtZW50OmwsY2xhc3NOYW1lczp0aGlzLmNvbmZpZy5jbGFzc05hbWVzLGRlbGltaXRlcjp0aGlzLmNvbmZpZy5kZWxpbWl0ZXJ9KTp0aGlzLl9pc1NlbGVjdEVsZW1lbnQmJih0aGlzLnBhc3NlZEVsZW1lbnQ9bmV3IHMuV3JhcHBlZFNlbGVjdCh7ZWxlbWVudDpsLGNsYXNzTmFtZXM6dGhpcy5jb25maWcuY2xhc3NOYW1lc30pKSx0aGlzLnBhc3NlZEVsZW1lbnQ/KCEwPT09dGhpcy5jb25maWcuc2hvdWxkU29ydEl0ZW1zJiZ0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQmJiF0aGlzLmNvbmZpZy5zaWxlbnQmJmNvbnNvbGUud2FybihcInNob3VsZFNvcnRFbGVtZW50czogVHlwZSBvZiBwYXNzZWQgZWxlbWVudCBpcyAnc2VsZWN0LW9uZScsIGZhbGxpbmcgYmFjayB0byBmYWxzZS5cIiksdGhpcy5pbml0aWFsaXNlZD0hMSx0aGlzLl9zdG9yZT1uZXcgci5kZWZhdWx0KHRoaXMucmVuZGVyKSx0aGlzLl9pbml0aWFsU3RhdGU9e30sdGhpcy5fY3VycmVudFN0YXRlPXt9LHRoaXMuX3ByZXZTdGF0ZT17fSx0aGlzLl9jdXJyZW50VmFsdWU9XCJcIix0aGlzLl9jYW5TZWFyY2g9dGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZCx0aGlzLl9pc1Njcm9sbGluZ09uSWU9ITEsdGhpcy5faGlnaGxpZ2h0UG9zaXRpb249MCx0aGlzLl93YXNUYXA9ITAsdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZT10aGlzLl9nZW5lcmF0ZVBsYWNlaG9sZGVyVmFsdWUoKSx0aGlzLl9iYXNlSWQ9KDAscC5nZW5lcmF0ZUlkKSh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCxcImNob2ljZXMtXCIpLHRoaXMuX2RpcmVjdGlvbj10aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkaXJcIil8fFwibHRyXCIsdGhpcy5faWROYW1lcz17aXRlbUNob2ljZTpcIml0ZW0tY2hvaWNlXCJ9LHRoaXMuX3ByZXNldENob2ljZXM9dGhpcy5jb25maWcuY2hvaWNlcyx0aGlzLl9wcmVzZXRJdGVtcz10aGlzLmNvbmZpZy5pdGVtcyx0aGlzLnBhc3NlZEVsZW1lbnQudmFsdWUmJih0aGlzLl9wcmVzZXRJdGVtcz10aGlzLl9wcmVzZXRJdGVtcy5jb25jYXQodGhpcy5wYXNzZWRFbGVtZW50LnZhbHVlLnNwbGl0KHRoaXMuY29uZmlnLmRlbGltaXRlcikpKSx0aGlzLl9yZW5kZXI9dGhpcy5fcmVuZGVyLmJpbmQodGhpcyksdGhpcy5fb25Gb2N1cz10aGlzLl9vbkZvY3VzLmJpbmQodGhpcyksdGhpcy5fb25CbHVyPXRoaXMuX29uQmx1ci5iaW5kKHRoaXMpLHRoaXMuX29uS2V5VXA9dGhpcy5fb25LZXlVcC5iaW5kKHRoaXMpLHRoaXMuX29uS2V5RG93bj10aGlzLl9vbktleURvd24uYmluZCh0aGlzKSx0aGlzLl9vbkNsaWNrPXRoaXMuX29uQ2xpY2suYmluZCh0aGlzKSx0aGlzLl9vblRvdWNoTW92ZT10aGlzLl9vblRvdWNoTW92ZS5iaW5kKHRoaXMpLHRoaXMuX29uVG91Y2hFbmQ9dGhpcy5fb25Ub3VjaEVuZC5iaW5kKHRoaXMpLHRoaXMuX29uTW91c2VEb3duPXRoaXMuX29uTW91c2VEb3duLmJpbmQodGhpcyksdGhpcy5fb25Nb3VzZU92ZXI9dGhpcy5fb25Nb3VzZU92ZXIuYmluZCh0aGlzKSx0aGlzLl9vbkZvcm1SZXNldD10aGlzLl9vbkZvcm1SZXNldC5iaW5kKHRoaXMpLHRoaXMuX29uQUtleT10aGlzLl9vbkFLZXkuYmluZCh0aGlzKSx0aGlzLl9vbkVudGVyS2V5PXRoaXMuX29uRW50ZXJLZXkuYmluZCh0aGlzKSx0aGlzLl9vbkVzY2FwZUtleT10aGlzLl9vbkVzY2FwZUtleS5iaW5kKHRoaXMpLHRoaXMuX29uRGlyZWN0aW9uS2V5PXRoaXMuX29uRGlyZWN0aW9uS2V5LmJpbmQodGhpcyksdGhpcy5fb25EZWxldGVLZXk9dGhpcy5fb25EZWxldGVLZXkuYmluZCh0aGlzKSxcImFjdGl2ZVwiPT09dGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jaG9pY2VcIikmJmNvbnNvbGUud2FybihcIlRyeWluZyB0byBpbml0aWFsaXNlIENob2ljZXMgb24gZWxlbWVudCBhbHJlYWR5IGluaXRpYWxpc2VkXCIpLHZvaWQgdGhpcy5pbml0KCkpOmNvbnNvbGUuZXJyb3IoXCJQYXNzZWQgZWxlbWVudCB3YXMgb2YgYW4gaW52YWxpZCB0eXBlXCIpKTpjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGZpbmQgcGFzc2VkIGVsZW1lbnQgb3IgcGFzc2VkIGVsZW1lbnQgd2FzIG9mIGFuIGludmFsaWQgdHlwZVwiKX12YXIgdCxpLHY7cmV0dXJuIHQ9ZSwoaT1be2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbigpe2lmKCF0aGlzLmluaXRpYWxpc2VkKXt0aGlzLl9jcmVhdGVUZW1wbGF0ZXMoKSx0aGlzLl9jcmVhdGVFbGVtZW50cygpLHRoaXMuX2NyZWF0ZVN0cnVjdHVyZSgpLHRoaXMuX2luaXRpYWxTdGF0ZT0oMCxwLmNsb25lT2JqZWN0KSh0aGlzLl9zdG9yZS5zdGF0ZSksdGhpcy5fc3RvcmUuc3Vic2NyaWJlKHRoaXMuX3JlbmRlciksdGhpcy5fcmVuZGVyKCksdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKSwoIXRoaXMuY29uZmlnLmFkZEl0ZW1zfHx0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkmJnRoaXMuZGlzYWJsZSgpLHRoaXMuaW5pdGlhbGlzZWQ9ITA7dmFyIGU9dGhpcy5jb25maWcuY2FsbGJhY2tPbkluaXQ7ZSYmKDAscC5pc1R5cGUpKFwiRnVuY3Rpb25cIixlKSYmZS5jYWxsKHRoaXMpfX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmluaXRpYWxpc2VkJiYodGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLnBhc3NlZEVsZW1lbnQucmV2ZWFsKCksdGhpcy5jb250YWluZXJPdXRlci51bndyYXAodGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQpLHRoaXMuX2lzU2VsZWN0RWxlbWVudCYmKHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zPXRoaXMuX3ByZXNldENob2ljZXMpLHRoaXMuY2xlYXJTdG9yZSgpLHRoaXMuY29uZmlnLnRlbXBsYXRlcz1udWxsLHRoaXMuaW5pdGlhbGlzZWQ9ITEpfX0se2tleTpcImVuYWJsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFzc2VkRWxlbWVudC5pc0Rpc2FibGVkJiZ0aGlzLnBhc3NlZEVsZW1lbnQuZW5hYmxlKCksdGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkJiYodGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLmlucHV0LmVuYWJsZSgpLHRoaXMuY29udGFpbmVyT3V0ZXIuZW5hYmxlKCkpLHRoaXN9fSx7a2V5OlwiZGlzYWJsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFzc2VkRWxlbWVudC5pc0Rpc2FibGVkfHx0aGlzLnBhc3NlZEVsZW1lbnQuZGlzYWJsZSgpLHRoaXMuY29udGFpbmVyT3V0ZXIuaXNEaXNhYmxlZHx8KHRoaXMuX3JlbW92ZUV2ZW50TGlzdGVuZXJzKCksdGhpcy5pbnB1dC5kaXNhYmxlKCksdGhpcy5jb250YWluZXJPdXRlci5kaXNhYmxlKCkpLHRoaXN9fSx7a2V5OlwiaGlnaGxpZ2h0SXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PSEoYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0pfHxhcmd1bWVudHNbMV07aWYoIWUpcmV0dXJuIHRoaXM7dmFyIGk9ZS5pZCxuPWUuZ3JvdXBJZCxvPXZvaWQgMD09PW4/LTE6bixyPWUudmFsdWUscz12b2lkIDA9PT1yP1wiXCI6cixjPWUubGFiZWwsbD12b2lkIDA9PT1jP1wiXCI6YyxoPW8+PTA/dGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKG8pOm51bGw7cmV0dXJuIHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLHUuaGlnaGxpZ2h0SXRlbSkoaSwhMCkpLHQmJnRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoYS5FVkVOVFMuaGlnaGxpZ2h0SXRlbSx7aWQ6aSx2YWx1ZTpzLGxhYmVsOmwsZ3JvdXBWYWx1ZTpoJiZoLnZhbHVlP2gudmFsdWU6bnVsbH0pLHRoaXN9fSx7a2V5OlwidW5oaWdobGlnaHRJdGVtXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuIHRoaXM7dmFyIHQ9ZS5pZCxpPWUuZ3JvdXBJZCxuPXZvaWQgMD09PWk/LTE6aSxvPWUudmFsdWUscj12b2lkIDA9PT1vP1wiXCI6byxzPWUubGFiZWwsYz12b2lkIDA9PT1zP1wiXCI6cyxsPW4+PTA/dGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKG4pOm51bGw7cmV0dXJuIHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLHUuaGlnaGxpZ2h0SXRlbSkodCwhMSkpLHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoYS5FVkVOVFMuaGlnaGxpZ2h0SXRlbSx7aWQ6dCx2YWx1ZTpyLGxhYmVsOmMsZ3JvdXBWYWx1ZTpsJiZsLnZhbHVlP2wudmFsdWU6bnVsbH0pLHRoaXN9fSx7a2V5OlwiaGlnaGxpZ2h0QWxsXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0aGlzLl9zdG9yZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLmhpZ2hsaWdodEl0ZW0odCl9KSx0aGlzfX0se2tleTpcInVuaGlnaGxpZ2h0QWxsXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0aGlzLl9zdG9yZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnVuaGlnaGxpZ2h0SXRlbSh0KX0pLHRoaXN9fSx7a2V5OlwicmVtb3ZlQWN0aXZlSXRlbXNCeVZhbHVlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0LnZhbHVlPT09ZX0pLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIHQuX3JlbW92ZUl0ZW0oZSl9KSx0aGlzfX0se2tleTpcInJlbW92ZUFjdGl2ZUl0ZW1zXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0LmlkIT09ZX0pLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIHQuX3JlbW92ZUl0ZW0oZSl9KSx0aGlzfX0se2tleTpcInJlbW92ZUhpZ2hsaWdodGVkSXRlbXNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO3JldHVybiB0aGlzLl9zdG9yZS5oaWdobGlnaHRlZEFjdGl2ZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaSl7ZS5fcmVtb3ZlSXRlbShpKSx0JiZlLl90cmlnZ2VyQ2hhbmdlKGkudmFsdWUpfSksdGhpc319LHtrZXk6XCJzaG93RHJvcGRvd25cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiB0aGlzLmRyb3Bkb3duLmlzQWN0aXZlP3RoaXM6KHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3QuZHJvcGRvd24uc2hvdygpLHQuY29udGFpbmVyT3V0ZXIub3Blbih0LmRyb3Bkb3duLmRpc3RhbmNlRnJvbVRvcFdpbmRvdygpKSwhZSYmdC5fY2FuU2VhcmNoJiZ0LmlucHV0LmZvY3VzKCksdC5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChhLkVWRU5UUy5zaG93RHJvcGRvd24se30pfSksdGhpcyl9fSx7a2V5OlwiaGlkZURyb3Bkb3duXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5kcm9wZG93bi5pc0FjdGl2ZT8ocmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dC5kcm9wZG93bi5oaWRlKCksdC5jb250YWluZXJPdXRlci5jbG9zZSgpLCFlJiZ0Ll9jYW5TZWFyY2gmJih0LmlucHV0LnJlbW92ZUFjdGl2ZURlc2NlbmRhbnQoKSx0LmlucHV0LmJsdXIoKSksdC5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChhLkVWRU5UUy5oaWRlRHJvcGRvd24se30pfSksdGhpcyk6dGhpc319LHtrZXk6XCJnZXRWYWx1ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSx0PXRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zLnJlZHVjZShmdW5jdGlvbih0LGkpe3ZhciBuPWU/aS52YWx1ZTppO3JldHVybiB0LnB1c2gobiksdH0sW10pO3JldHVybiB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQ/dFswXTp0fX0se2tleTpcInNldFZhbHVlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5pbml0aWFsaXNlZD8oW10uY29uY2F0KGUpLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIHQuX3NldENob2ljZU9ySXRlbShlKX0pLHRoaXMpOnRoaXN9fSx7a2V5Olwic2V0Q2hvaWNlQnlWYWx1ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7cmV0dXJuIXRoaXMuaW5pdGlhbGlzZWR8fHRoaXMuX2lzVGV4dEVsZW1lbnQ/dGhpczooKCgwLHAuaXNUeXBlKShcIkFycmF5XCIsZSk/ZTpbZV0pLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIHQuX2ZpbmRBbmRTZWxlY3RDaG9pY2VCeVZhbHVlKGUpfSksdGhpcyl9fSx7a2V5Olwic2V0Q2hvaWNlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSxpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcIlwiLG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOlwiXCIsbz1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXSYmYXJndW1lbnRzWzNdO2lmKCF0aGlzLl9pc1NlbGVjdEVsZW1lbnR8fCFpKXJldHVybiB0aGlzO28mJnRoaXMuY2xlYXJDaG9pY2VzKCksdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVMb2FkaW5nU3RhdGUoKTtyZXR1cm4gdGhpcy5fc2V0TG9hZGluZyghMCksdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuY2hvaWNlcz9lLl9hZGRHcm91cCh7Z3JvdXA6dCxpZDp0LmlkfHxudWxsLHZhbHVlS2V5OmksbGFiZWxLZXk6bn0pOmUuX2FkZENob2ljZSh7dmFsdWU6dFtpXSxsYWJlbDp0W25dLGlzU2VsZWN0ZWQ6dC5zZWxlY3RlZCxpc0Rpc2FibGVkOnQuZGlzYWJsZWQsY3VzdG9tUHJvcGVydGllczp0LmN1c3RvbVByb3BlcnRpZXMscGxhY2Vob2xkZXI6dC5wbGFjZWhvbGRlcn0pfSksdGhpcy5fc2V0TG9hZGluZyghMSksdGhpc319LHtrZXk6XCJjbGVhckNob2ljZXNcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLGwuY2xlYXJDaG9pY2VzKSgpKX19LHtrZXk6XCJjbGVhclN0b3JlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc3RvcmUuZGlzcGF0Y2goKDAsZC5jbGVhckFsbCkoKSksdGhpc319LHtrZXk6XCJjbGVhcklucHV0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT0hdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50O3JldHVybiB0aGlzLmlucHV0LmNsZWFyKGUpLCF0aGlzLl9pc1RleHRFbGVtZW50JiZ0aGlzLl9jYW5TZWFyY2gmJih0aGlzLl9pc1NlYXJjaGluZz0hMSx0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCxsLmFjdGl2YXRlQ2hvaWNlcykoITApKSksdGhpc319LHtrZXk6XCJhamF4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5pbml0aWFsaXNlZCYmdGhpcy5faXNTZWxlY3RFbGVtZW50JiZlPyhyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXR1cm4gdC5faGFuZGxlTG9hZGluZ1N0YXRlKCEwKX0pLGUodGhpcy5fYWpheENhbGxiYWNrKCkpLHRoaXMpOnRoaXN9fSx7a2V5OlwiX3JlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX3N0b3JlLmlzTG9hZGluZygpKXt0aGlzLl9jdXJyZW50U3RhdGU9dGhpcy5fc3RvcmUuc3RhdGU7dmFyIGU9dGhpcy5fY3VycmVudFN0YXRlLmNob2ljZXMhPT10aGlzLl9wcmV2U3RhdGUuY2hvaWNlc3x8dGhpcy5fY3VycmVudFN0YXRlLmdyb3VwcyE9PXRoaXMuX3ByZXZTdGF0ZS5ncm91cHN8fHRoaXMuX2N1cnJlbnRTdGF0ZS5pdGVtcyE9PXRoaXMuX3ByZXZTdGF0ZS5pdGVtcyx0PXRoaXMuX2lzU2VsZWN0RWxlbWVudCxpPXRoaXMuX2N1cnJlbnRTdGF0ZS5pdGVtcyE9PXRoaXMuX3ByZXZTdGF0ZS5pdGVtcztlJiYodCYmdGhpcy5fcmVuZGVyQ2hvaWNlcygpLGkmJnRoaXMuX3JlbmRlckl0ZW1zKCksdGhpcy5fcHJldlN0YXRlPXRoaXMuX2N1cnJlbnRTdGF0ZSl9fX0se2tleTpcIl9yZW5kZXJDaG9pY2VzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5fc3RvcmUsaT10LmFjdGl2ZUdyb3VwcyxuPXQuYWN0aXZlQ2hvaWNlcyxvPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZih0aGlzLmNob2ljZUxpc3QuY2xlYXIoKSx0aGlzLmNvbmZpZy5yZXNldFNjcm9sbFBvc2l0aW9uJiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXR1cm4gZS5jaG9pY2VMaXN0LnNjcm9sbFRvVG9wKCl9KSxpLmxlbmd0aD49MSYmIXRoaXMuX2lzU2VhcmNoaW5nKXt2YXIgcj1uLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUucGxhY2Vob2xkZXImJi0xPT09ZS5ncm91cElkfSk7ci5sZW5ndGg+PTEmJihvPXRoaXMuX2NyZWF0ZUNob2ljZXNGcmFnbWVudChyLG8pKSxvPXRoaXMuX2NyZWF0ZUdyb3Vwc0ZyYWdtZW50KGksbixvKX1lbHNlIG4ubGVuZ3RoPj0xJiYobz10aGlzLl9jcmVhdGVDaG9pY2VzRnJhZ21lbnQobixvKSk7aWYoby5jaGlsZE5vZGVzJiZvLmNoaWxkTm9kZXMubGVuZ3RoPjApe3ZhciBzPXRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zLGE9dGhpcy5fY2FuQWRkSXRlbShzLHRoaXMuaW5wdXQudmFsdWUpO2EucmVzcG9uc2U/KHRoaXMuY2hvaWNlTGlzdC5hcHBlbmQobyksdGhpcy5faGlnaGxpZ2h0Q2hvaWNlKCkpOnRoaXMuY2hvaWNlTGlzdC5hcHBlbmQodGhpcy5fZ2V0VGVtcGxhdGUoXCJub3RpY2VcIixhLm5vdGljZSkpfWVsc2V7dmFyIGMsbDt0aGlzLl9pc1NlYXJjaGluZz8obD0oMCxwLmlzVHlwZSkoXCJGdW5jdGlvblwiLHRoaXMuY29uZmlnLm5vUmVzdWx0c1RleHQpP3RoaXMuY29uZmlnLm5vUmVzdWx0c1RleHQoKTp0aGlzLmNvbmZpZy5ub1Jlc3VsdHNUZXh0LGM9dGhpcy5fZ2V0VGVtcGxhdGUoXCJub3RpY2VcIixsLFwibm8tcmVzdWx0c1wiKSk6KGw9KDAscC5pc1R5cGUpKFwiRnVuY3Rpb25cIix0aGlzLmNvbmZpZy5ub0Nob2ljZXNUZXh0KT90aGlzLmNvbmZpZy5ub0Nob2ljZXNUZXh0KCk6dGhpcy5jb25maWcubm9DaG9pY2VzVGV4dCxjPXRoaXMuX2dldFRlbXBsYXRlKFwibm90aWNlXCIsbCxcIm5vLWNob2ljZXNcIikpLHRoaXMuY2hvaWNlTGlzdC5hcHBlbmQoYyl9fX0se2tleTpcIl9yZW5kZXJJdGVtc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fc3RvcmUuYWN0aXZlSXRlbXN8fFtdO3RoaXMuaXRlbUxpc3QuY2xlYXIoKTt2YXIgdD10aGlzLl9jcmVhdGVJdGVtc0ZyYWdtZW50KGUpO3QuY2hpbGROb2RlcyYmdGhpcy5pdGVtTGlzdC5hcHBlbmQodCl9fSx7a2V5OlwiX2NyZWF0ZUdyb3Vwc0ZyYWdtZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPXRoaXMsbz1pfHxkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7cmV0dXJuIHRoaXMuY29uZmlnLnNob3VsZFNvcnQmJmUuc29ydCh0aGlzLmNvbmZpZy5zb3J0Rm4pLGUuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgaT1mdW5jdGlvbihlKXtyZXR1cm4gdC5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIG4uX2lzU2VsZWN0T25lRWxlbWVudD90Lmdyb3VwSWQ9PT1lLmlkOnQuZ3JvdXBJZD09PWUuaWQmJihcImFsd2F5c1wiPT09bi5jb25maWcucmVuZGVyU2VsZWN0ZWRDaG9pY2VzfHwhdC5zZWxlY3RlZCl9KX0oZSk7aWYoaS5sZW5ndGg+PTEpe3ZhciByPW4uX2dldFRlbXBsYXRlKFwiY2hvaWNlR3JvdXBcIixlKTtvLmFwcGVuZENoaWxkKHIpLG4uX2NyZWF0ZUNob2ljZXNGcmFnbWVudChpLG8sITApfX0pLG99fSx7a2V5OlwiX2NyZWF0ZUNob2ljZXNGcmFnbWVudFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcyxuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0sbz10fHxkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscj10aGlzLmNvbmZpZyxzPXIucmVuZGVyU2VsZWN0ZWRDaG9pY2VzLGE9ci5zZWFyY2hSZXN1bHRMaW1pdCxjPXIucmVuZGVyQ2hvaWNlTGltaXQsbD10aGlzLl9pc1NlYXJjaGluZz9wLnNvcnRCeVNjb3JlOnRoaXMuY29uZmlnLnNvcnRGbix1PWZ1bmN0aW9uKGUpe2lmKFwiYXV0b1wiIT09c3x8KGkuX2lzU2VsZWN0T25lRWxlbWVudHx8IWUuc2VsZWN0ZWQpKXt2YXIgdD1pLl9nZXRUZW1wbGF0ZShcImNob2ljZVwiLGUsaS5jb25maWcuaXRlbVNlbGVjdFRleHQpO28uYXBwZW5kQ2hpbGQodCl9fSxoPWU7XCJhdXRvXCIhPT1zfHx0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnR8fChoPWUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiFlLnNlbGVjdGVkfSkpO3ZhciBkPWgucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQucGxhY2Vob2xkZXI/ZS5wbGFjZWhvbGRlckNob2ljZXMucHVzaCh0KTplLm5vcm1hbENob2ljZXMucHVzaCh0KSxlfSx7cGxhY2Vob2xkZXJDaG9pY2VzOltdLG5vcm1hbENob2ljZXM6W119KSxmPWQucGxhY2Vob2xkZXJDaG9pY2VzLHY9ZC5ub3JtYWxDaG9pY2VzOyh0aGlzLmNvbmZpZy5zaG91bGRTb3J0fHx0aGlzLl9pc1NlYXJjaGluZykmJnYuc29ydChsKTt2YXIgbT1oLmxlbmd0aCxnPVtdLmNvbmNhdChmLHYpO3RoaXMuX2lzU2VhcmNoaW5nP209YTpjPjAmJiFuJiYobT1jKTtmb3IodmFyIF89MDtfPG07Xys9MSlnW19dJiZ1KGdbX10pO3JldHVybiBvfX0se2tleTpcIl9jcmVhdGVJdGVtc0ZyYWdtZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsLG49dGhpcy5jb25maWcsbz1uLnNob3VsZFNvcnRJdGVtcyxyPW4uc29ydEZuLHM9bi5yZW1vdmVJdGVtQnV0dG9uLGE9aXx8ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO28mJiF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQmJmUuc29ydChyKSx0aGlzLl9pc1RleHRFbGVtZW50P3RoaXMucGFzc2VkRWxlbWVudC52YWx1ZT1lOnRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zPWU7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIGk9dC5fZ2V0VGVtcGxhdGUoXCJpdGVtXCIsZSxzKTthLmFwcGVuZENoaWxkKGkpfShlKX0pLGF9fSx7a2V5OlwiX3RyaWdnZXJDaGFuZ2VcIix2YWx1ZTpmdW5jdGlvbihlKXtudWxsIT1lJiZ0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KGEuRVZFTlRTLmNoYW5nZSx7dmFsdWU6ZX0pfX0se2tleTpcIl9zZWxlY3RQbGFjZWhvbGRlckNob2ljZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fc3RvcmUucGxhY2Vob2xkZXJDaG9pY2U7ZSYmKHRoaXMuX2FkZEl0ZW0oe3ZhbHVlOmUudmFsdWUsbGFiZWw6ZS5sYWJlbCxjaG9pY2VJZDplLmlkLGdyb3VwSWQ6ZS5ncm91cElkLHBsYWNlaG9sZGVyOmUucGxhY2Vob2xkZXJ9KSx0aGlzLl90cmlnZ2VyQ2hhbmdlKGUudmFsdWUpKX19LHtrZXk6XCJfaGFuZGxlQnV0dG9uQWN0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZihlJiZ0JiZ0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyYmdGhpcy5jb25maWcucmVtb3ZlSXRlbUJ1dHRvbil7dmFyIGk9dC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIiksbj1lLmZpbmQoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaWQ9PT1wYXJzZUludChpLDEwKX0pO3RoaXMuX3JlbW92ZUl0ZW0obiksdGhpcy5fdHJpZ2dlckNoYW5nZShuLnZhbHVlKSx0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQmJnRoaXMuX3NlbGVjdFBsYWNlaG9sZGVyQ2hvaWNlKCl9fX0se2tleTpcIl9oYW5kbGVJdGVtQWN0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtpZihlJiZ0JiZ0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyYmIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCl7dmFyIG89dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO2UuZm9yRWFjaChmdW5jdGlvbihlKXtlLmlkIT09cGFyc2VJbnQobywxMCl8fGUuaGlnaGxpZ2h0ZWQ/IW4mJmUuaGlnaGxpZ2h0ZWQmJmkudW5oaWdobGlnaHRJdGVtKGUpOmkuaGlnaGxpZ2h0SXRlbShlKX0pLHRoaXMuaW5wdXQuZm9jdXMoKX19fSx7a2V5OlwiX2hhbmRsZUNob2ljZUFjdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoZSYmdCl7dmFyIGk9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpLG49dGhpcy5fc3RvcmUuZ2V0Q2hvaWNlQnlJZChpKSxvPWVbMF0mJmVbMF0ua2V5Q29kZT9lWzBdLmtleUNvZGU6bnVsbCxyPXRoaXMuZHJvcGRvd24uaXNBY3RpdmU7aWYobi5rZXlDb2RlPW8sdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChhLkVWRU5UUy5jaG9pY2Use2Nob2ljZTpufSksbiYmIW4uc2VsZWN0ZWQmJiFuLmRpc2FibGVkKXRoaXMuX2NhbkFkZEl0ZW0oZSxuLnZhbHVlKS5yZXNwb25zZSYmKHRoaXMuX2FkZEl0ZW0oe3ZhbHVlOm4udmFsdWUsbGFiZWw6bi5sYWJlbCxjaG9pY2VJZDpuLmlkLGdyb3VwSWQ6bi5ncm91cElkLGN1c3RvbVByb3BlcnRpZXM6bi5jdXN0b21Qcm9wZXJ0aWVzLHBsYWNlaG9sZGVyOm4ucGxhY2Vob2xkZXIsa2V5Q29kZTpuLmtleUNvZGV9KSx0aGlzLl90cmlnZ2VyQ2hhbmdlKG4udmFsdWUpKTt0aGlzLmNsZWFySW5wdXQoKSxyJiZ0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQmJih0aGlzLmhpZGVEcm9wZG93bighMCksdGhpcy5jb250YWluZXJPdXRlci5mb2N1cygpKX19fSx7a2V5OlwiX2hhbmRsZUJhY2tzcGFjZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHRoaXMuY29uZmlnLnJlbW92ZUl0ZW1zJiZlKXt2YXIgdD1lW2UubGVuZ3RoLTFdLGk9ZS5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBlLmhpZ2hsaWdodGVkfSk7dGhpcy5jb25maWcuZWRpdEl0ZW1zJiYhaSYmdD8odGhpcy5pbnB1dC52YWx1ZT10LnZhbHVlLHRoaXMuaW5wdXQuc2V0V2lkdGgoKSx0aGlzLl9yZW1vdmVJdGVtKHQpLHRoaXMuX3RyaWdnZXJDaGFuZ2UodC52YWx1ZSkpOihpfHx0aGlzLmhpZ2hsaWdodEl0ZW0odCwhMSksdGhpcy5yZW1vdmVIaWdobGlnaHRlZEl0ZW1zKCEwKSl9fX0se2tleTpcIl9zZXRMb2FkaW5nXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fc3RvcmUuZGlzcGF0Y2goKDAsZi5zZXRJc0xvYWRpbmcpKGUpKX19LHtrZXk6XCJfaGFuZGxlTG9hZGluZ1N0YXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT0hKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdKXx8YXJndW1lbnRzWzBdLHQ9dGhpcy5pdGVtTGlzdC5nZXRDaGlsZChcIi5cIi5jb25jYXQodGhpcy5jb25maWcuY2xhc3NOYW1lcy5wbGFjZWhvbGRlcikpO2U/KHRoaXMuZGlzYWJsZSgpLHRoaXMuY29udGFpbmVyT3V0ZXIuYWRkTG9hZGluZ1N0YXRlKCksdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50P3Q/dC5pbm5lckhUTUw9dGhpcy5jb25maWcubG9hZGluZ1RleHQ6KHQ9dGhpcy5fZ2V0VGVtcGxhdGUoXCJwbGFjZWhvbGRlclwiLHRoaXMuY29uZmlnLmxvYWRpbmdUZXh0KSx0aGlzLml0ZW1MaXN0LmFwcGVuZCh0KSk6dGhpcy5pbnB1dC5wbGFjZWhvbGRlcj10aGlzLmNvbmZpZy5sb2FkaW5nVGV4dCk6KHRoaXMuZW5hYmxlKCksdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVMb2FkaW5nU3RhdGUoKSx0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQ/dC5pbm5lckhUTUw9dGhpcy5fcGxhY2Vob2xkZXJWYWx1ZXx8XCJcIjp0aGlzLmlucHV0LnBsYWNlaG9sZGVyPXRoaXMuX3BsYWNlaG9sZGVyVmFsdWV8fFwiXCIpfX0se2tleTpcIl9oYW5kbGVTZWFyY2hcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlJiZ0aGlzLmlucHV0LmlzRm9jdXNzZWQpe3ZhciB0PXRoaXMuX3N0b3JlLmNob2ljZXMsaT10aGlzLmNvbmZpZyxuPWkuc2VhcmNoRmxvb3Isbz1pLnNlYXJjaENob2ljZXMscj10LnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIWUuYWN0aXZlfSk7aWYoZSYmZS5sZW5ndGg+PW4pe3ZhciBzPW8/dGhpcy5fc2VhcmNoQ2hvaWNlcyhlKTowO3RoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoYS5FVkVOVFMuc2VhcmNoLHt2YWx1ZTplLHJlc3VsdENvdW50OnN9KX1lbHNlIHImJih0aGlzLl9pc1NlYXJjaGluZz0hMSx0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCxsLmFjdGl2YXRlQ2hvaWNlcykoITApKSl9fX0se2tleTpcIl9jYW5BZGRJdGVtXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgaT0hMCxuPSgwLHAuaXNUeXBlKShcIkZ1bmN0aW9uXCIsdGhpcy5jb25maWcuYWRkSXRlbVRleHQpP3RoaXMuY29uZmlnLmFkZEl0ZW1UZXh0KHQpOnRoaXMuY29uZmlnLmFkZEl0ZW1UZXh0O2lmKCF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpe3ZhciBvPSgwLHAuZXhpc3RzSW5BcnJheSkoZSx0KTt0aGlzLmNvbmZpZy5tYXhJdGVtQ291bnQ+MCYmdGhpcy5jb25maWcubWF4SXRlbUNvdW50PD1lLmxlbmd0aCYmKGk9ITEsbj0oMCxwLmlzVHlwZSkoXCJGdW5jdGlvblwiLHRoaXMuY29uZmlnLm1heEl0ZW1UZXh0KT90aGlzLmNvbmZpZy5tYXhJdGVtVGV4dCh0aGlzLmNvbmZpZy5tYXhJdGVtQ291bnQpOnRoaXMuY29uZmlnLm1heEl0ZW1UZXh0KSwhdGhpcy5jb25maWcuZHVwbGljYXRlSXRlbXNBbGxvd2VkJiZvJiZpJiYoaT0hMSxuPSgwLHAuaXNUeXBlKShcIkZ1bmN0aW9uXCIsdGhpcy5jb25maWcudW5pcXVlSXRlbVRleHQpP3RoaXMuY29uZmlnLnVuaXF1ZUl0ZW1UZXh0KHQpOnRoaXMuY29uZmlnLnVuaXF1ZUl0ZW1UZXh0KSx0aGlzLl9pc1RleHRFbGVtZW50JiZ0aGlzLmNvbmZpZy5hZGRJdGVtcyYmaSYmKDAscC5pc1R5cGUpKFwiRnVuY3Rpb25cIix0aGlzLmNvbmZpZy5hZGRJdGVtRmlsdGVyRm4pJiYhdGhpcy5jb25maWcuYWRkSXRlbUZpbHRlckZuKHQpJiYoaT0hMSxuPSgwLHAuaXNUeXBlKShcIkZ1bmN0aW9uXCIsdGhpcy5jb25maWcuY3VzdG9tQWRkSXRlbVRleHQpP3RoaXMuY29uZmlnLmN1c3RvbUFkZEl0ZW1UZXh0KHQpOnRoaXMuY29uZmlnLmN1c3RvbUFkZEl0ZW1UZXh0KX1yZXR1cm57cmVzcG9uc2U6aSxub3RpY2U6bn19fSx7a2V5OlwiX2FqYXhDYWxsYmFja1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gZnVuY3Rpb24odCxpLG4pe2lmKHQmJmkpe3ZhciBvPSgwLHAuaXNUeXBlKShcIk9iamVjdFwiLHQpP1t0XTp0O28mJigwLHAuaXNUeXBlKShcIkFycmF5XCIsbykmJm8ubGVuZ3RoPyhlLl9oYW5kbGVMb2FkaW5nU3RhdGUoITEpLGUuX3NldExvYWRpbmcoITApLG8uZm9yRWFjaChmdW5jdGlvbih0KXt0LmNob2ljZXM/ZS5fYWRkR3JvdXAoe2dyb3VwOnQsaWQ6dC5pZHx8bnVsbCx2YWx1ZUtleTppLGxhYmVsS2V5Om59KTplLl9hZGRDaG9pY2Uoe3ZhbHVlOigwLHAuZmV0Y2hGcm9tT2JqZWN0KSh0LGkpLGxhYmVsOigwLHAuZmV0Y2hGcm9tT2JqZWN0KSh0LG4pLGlzU2VsZWN0ZWQ6dC5zZWxlY3RlZCxpc0Rpc2FibGVkOnQuZGlzYWJsZWQsY3VzdG9tUHJvcGVydGllczp0LmN1c3RvbVByb3BlcnRpZXMscGxhY2Vob2xkZXI6dC5wbGFjZWhvbGRlcn0pfSksZS5fc2V0TG9hZGluZyghMSksZS5faXNTZWxlY3RPbmVFbGVtZW50JiZlLl9zZWxlY3RQbGFjZWhvbGRlckNob2ljZSgpKTplLl9oYW5kbGVMb2FkaW5nU3RhdGUoITEpfX19fSx7a2V5OlwiX3NlYXJjaENob2ljZXNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD0oMCxwLmlzVHlwZSkoXCJTdHJpbmdcIixlKT9lLnRyaW0oKTplLGk9KDAscC5pc1R5cGUpKFwiU3RyaW5nXCIsdGhpcy5fY3VycmVudFZhbHVlKT90aGlzLl9jdXJyZW50VmFsdWUudHJpbSgpOnRoaXMuX2N1cnJlbnRWYWx1ZTtpZih0Lmxlbmd0aDwxJiZ0PT09XCJcIi5jb25jYXQoaSxcIiBcIikpcmV0dXJuIDA7dmFyIG89dGhpcy5fc3RvcmUuc2VhcmNoYWJsZUNob2ljZXMscj10LHM9W10uY29uY2F0KHRoaXMuY29uZmlnLnNlYXJjaEZpZWxkcyksYT1PYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLmZ1c2VPcHRpb25zLHtrZXlzOnN9KSxjPW5ldyBuLmRlZmF1bHQobyxhKS5zZWFyY2gocik7cmV0dXJuIHRoaXMuX2N1cnJlbnRWYWx1ZT10LHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uPTAsdGhpcy5faXNTZWFyY2hpbmc9ITAsdGhpcy5fc3RvcmUuZGlzcGF0Y2goKDAsbC5maWx0ZXJDaG9pY2VzKShjKSksYy5sZW5ndGh9fSx7a2V5OlwiX2FkZEV2ZW50TGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9vbktleVVwKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93biksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fb25DbGljayksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMuX29uVG91Y2hNb3ZlKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLl9vblRvdWNoRW5kKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5fb25Nb3VzZURvd24pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIix0aGlzLl9vbk1vdXNlT3ZlciksdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50JiYodGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLHRoaXMuX29uRm9jdXMpLHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMuX29uQmx1cikpLHRoaXMuaW5wdXQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIix0aGlzLl9vbkZvY3VzKSx0aGlzLmlucHV0LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIix0aGlzLl9vbkJsdXIpLHRoaXMuaW5wdXQuZWxlbWVudC5mb3JtJiZ0aGlzLmlucHV0LmVsZW1lbnQuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIix0aGlzLl9vbkZvcm1SZXNldCksdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVycygpfX0se2tleTpcIl9yZW1vdmVFdmVudExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5fb25LZXlVcCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLl9vbktleURvd24pLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuX29uQ2xpY2spLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy5fb25Ub3VjaEVuZCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuX29uTW91c2VEb3duKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsdGhpcy5fb25Nb3VzZU92ZXIpLHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCYmKHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIix0aGlzLl9vbkZvY3VzKSx0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIix0aGlzLl9vbkJsdXIpKSx0aGlzLmlucHV0LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsdGhpcy5fb25Gb2N1cyksdGhpcy5pbnB1dC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsdGhpcy5fb25CbHVyKSx0aGlzLmlucHV0LmVsZW1lbnQuZm9ybSYmdGhpcy5pbnB1dC5lbGVtZW50LmZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsdGhpcy5fb25Gb3JtUmVzZXQpLHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKX19LHtrZXk6XCJfb25LZXlEb3duXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQsaT1lLnRhcmdldCxuPWUua2V5Q29kZSxvPWUuY3RybEtleSxyPWUubWV0YUtleTtpZihpPT09dGhpcy5pbnB1dC5lbGVtZW50fHx0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuY29udGFpbnMoaSkpe3ZhciBzPXRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zLGM9dGhpcy5pbnB1dC5pc0ZvY3Vzc2VkLGw9dGhpcy5kcm9wZG93bi5pc0FjdGl2ZSx1PXRoaXMuaXRlbUxpc3QuaGFzQ2hpbGRyZW4saD1TdHJpbmcuZnJvbUNoYXJDb2RlKG4pLGQ9YS5LRVlfQ09ERVMuQkFDS19LRVksZj1hLktFWV9DT0RFUy5ERUxFVEVfS0VZLHA9YS5LRVlfQ09ERVMuRU5URVJfS0VZLHY9YS5LRVlfQ09ERVMuQV9LRVksZz1hLktFWV9DT0RFUy5FU0NfS0VZLF89YS5LRVlfQ09ERVMuVVBfS0VZLHk9YS5LRVlfQ09ERVMuRE9XTl9LRVksYj1hLktFWV9DT0RFUy5QQUdFX1VQX0tFWSxFPWEuS0VZX0NPREVTLlBBR0VfRE9XTl9LRVksUz1vfHxyOyF0aGlzLl9pc1RleHRFbGVtZW50JiYvW2EtekEtWjAtOS1fIF0vLnRlc3QoaCkmJnRoaXMuc2hvd0Ryb3Bkb3duKCk7dmFyIEk9KG0odD17fSx2LHRoaXMuX29uQUtleSksbSh0LHAsdGhpcy5fb25FbnRlcktleSksbSh0LGcsdGhpcy5fb25Fc2NhcGVLZXkpLG0odCxfLHRoaXMuX29uRGlyZWN0aW9uS2V5KSxtKHQsYix0aGlzLl9vbkRpcmVjdGlvbktleSksbSh0LHksdGhpcy5fb25EaXJlY3Rpb25LZXkpLG0odCxFLHRoaXMuX29uRGlyZWN0aW9uS2V5KSxtKHQsZix0aGlzLl9vbkRlbGV0ZUtleSksbSh0LGQsdGhpcy5fb25EZWxldGVLZXkpLHQpO0lbbl0mJklbbl0oe2V2ZW50OmUsdGFyZ2V0Omksa2V5Q29kZTpuLG1ldGFLZXk6cixhY3RpdmVJdGVtczpzLGhhc0ZvY3VzZWRJbnB1dDpjLGhhc0FjdGl2ZURyb3Bkb3duOmwsaGFzSXRlbXM6dSxoYXNDdHJsRG93bktleVByZXNzZWQ6U30pfX19LHtrZXk6XCJfb25LZXlVcFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LGk9ZS5rZXlDb2RlO2lmKHQ9PT10aGlzLmlucHV0LmVsZW1lbnQpe3ZhciBuPXRoaXMuaW5wdXQudmFsdWUsbz10aGlzLl9zdG9yZS5hY3RpdmVJdGVtcyxyPXRoaXMuX2NhbkFkZEl0ZW0obyxuKSxzPWEuS0VZX0NPREVTLkJBQ0tfS0VZLGM9YS5LRVlfQ09ERVMuREVMRVRFX0tFWTtpZih0aGlzLl9pc1RleHRFbGVtZW50KXtpZihyLm5vdGljZSYmbil7dmFyIHU9dGhpcy5fZ2V0VGVtcGxhdGUoXCJub3RpY2VcIixyLm5vdGljZSk7dGhpcy5kcm9wZG93bi5lbGVtZW50LmlubmVySFRNTD11Lm91dGVySFRNTCx0aGlzLnNob3dEcm9wZG93bighMCl9ZWxzZSB0aGlzLmhpZGVEcm9wZG93bighMCl9ZWxzZXt2YXIgaD0oaT09PXN8fGk9PT1jKSYmIXQudmFsdWUsZD0hdGhpcy5faXNUZXh0RWxlbWVudCYmdGhpcy5faXNTZWFyY2hpbmcsZj10aGlzLl9jYW5TZWFyY2gmJnIucmVzcG9uc2U7aCYmZD8odGhpcy5faXNTZWFyY2hpbmc9ITEsdGhpcy5fc3RvcmUuZGlzcGF0Y2goKDAsbC5hY3RpdmF0ZUNob2ljZXMpKCEwKSkpOmYmJnRoaXMuX2hhbmRsZVNlYXJjaCh0aGlzLmlucHV0LnZhbHVlKX10aGlzLl9jYW5TZWFyY2g9dGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZH19fSx7a2V5OlwiX29uQUtleVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuaGFzSXRlbXM7ZS5oYXNDdHJsRG93bktleVByZXNzZWQmJnQmJih0aGlzLl9jYW5TZWFyY2g9ITEsdGhpcy5jb25maWcucmVtb3ZlSXRlbXMmJiF0aGlzLmlucHV0LnZhbHVlJiZ0aGlzLmlucHV0LmVsZW1lbnQ9PT1kb2N1bWVudC5hY3RpdmVFbGVtZW50JiZ0aGlzLmhpZ2hsaWdodEFsbCgpKX19LHtrZXk6XCJfb25FbnRlcktleVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuZXZlbnQsaT1lLnRhcmdldCxuPWUuYWN0aXZlSXRlbXMsbz1lLmhhc0FjdGl2ZURyb3Bkb3duLHI9YS5LRVlfQ09ERVMuRU5URVJfS0VZLHM9aS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWJ1dHRvblwiKTtpZih0aGlzLl9pc1RleHRFbGVtZW50JiZpLnZhbHVlKXt2YXIgYz10aGlzLmlucHV0LnZhbHVlO3RoaXMuX2NhbkFkZEl0ZW0obixjKS5yZXNwb25zZSYmKHRoaXMuaGlkZURyb3Bkb3duKCEwKSx0aGlzLl9hZGRJdGVtKHt2YWx1ZTpjfSksdGhpcy5fdHJpZ2dlckNoYW5nZShjKSx0aGlzLmNsZWFySW5wdXQoKSl9aWYocyYmKHRoaXMuX2hhbmRsZUJ1dHRvbkFjdGlvbihuLGkpLHQucHJldmVudERlZmF1bHQoKSksbyl7dmFyIGw9dGhpcy5kcm9wZG93bi5nZXRDaGlsZChcIi5cIi5jb25jYXQodGhpcy5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKSk7bCYmKG5bMF0mJihuWzBdLmtleUNvZGU9ciksdGhpcy5faGFuZGxlQ2hvaWNlQWN0aW9uKG4sbCkpLHQucHJldmVudERlZmF1bHQoKX1lbHNlIHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCYmKHRoaXMuc2hvd0Ryb3Bkb3duKCksdC5wcmV2ZW50RGVmYXVsdCgpKX19LHtrZXk6XCJfb25Fc2NhcGVLZXlcIix2YWx1ZTpmdW5jdGlvbihlKXtlLmhhc0FjdGl2ZURyb3Bkb3duJiYodGhpcy5oaWRlRHJvcGRvd24oITApLHRoaXMuY29udGFpbmVyT3V0ZXIuZm9jdXMoKSl9fSx7a2V5OlwiX29uRGlyZWN0aW9uS2V5XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ldmVudCxpPWUuaGFzQWN0aXZlRHJvcGRvd24sbj1lLmtleUNvZGUsbz1lLm1ldGFLZXkscj1hLktFWV9DT0RFUy5ET1dOX0tFWSxzPWEuS0VZX0NPREVTLlBBR0VfVVBfS0VZLGM9YS5LRVlfQ09ERVMuUEFHRV9ET1dOX0tFWTtpZihpfHx0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpe3RoaXMuc2hvd0Ryb3Bkb3duKCksdGhpcy5fY2FuU2VhcmNoPSExO3ZhciBsLHU9bj09PXJ8fG49PT1jPzE6LTE7aWYob3x8bj09PWN8fG49PT1zKWw9dT4wP0FycmF5LmZyb20odGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jaG9pY2Utc2VsZWN0YWJsZV1cIikpLnBvcCgpOnRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2hvaWNlLXNlbGVjdGFibGVdXCIpO2Vsc2V7dmFyIGg9dGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHRoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSkpO2w9aD8oMCxwLmdldEFkamFjZW50RWwpKGgsXCJbZGF0YS1jaG9pY2Utc2VsZWN0YWJsZV1cIix1KTp0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNob2ljZS1zZWxlY3RhYmxlXVwiKX1sJiYoKDAscC5pc1Njcm9sbGVkSW50b1ZpZXcpKGwsdGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQsdSl8fHRoaXMuY2hvaWNlTGlzdC5zY3JvbGxUb0Nob2ljZShsLHUpLHRoaXMuX2hpZ2hsaWdodENob2ljZShsKSksdC5wcmV2ZW50RGVmYXVsdCgpfX19LHtrZXk6XCJfb25EZWxldGVLZXlcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLmV2ZW50LGk9ZS50YXJnZXQsbj1lLmhhc0ZvY3VzZWRJbnB1dCxvPWUuYWN0aXZlSXRlbXM7IW58fGkudmFsdWV8fHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudHx8KHRoaXMuX2hhbmRsZUJhY2tzcGFjZShvKSx0LnByZXZlbnREZWZhdWx0KCkpfX0se2tleTpcIl9vblRvdWNoTW92ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fd2FzVGFwJiYodGhpcy5fd2FzVGFwPSExKX19LHtrZXk6XCJfb25Ub3VjaEVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PShlfHxlLnRvdWNoZXNbMF0pLnRhcmdldDt0aGlzLl93YXNUYXAmJnRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5jb250YWlucyh0KSYmKCh0PT09dGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50fHx0PT09dGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50KSYmKHRoaXMuX2lzVGV4dEVsZW1lbnQ/dGhpcy5pbnB1dC5mb2N1cygpOnRoaXMuX2lzU2VsZWN0TXVsdGlwbGVFbGVtZW50JiZ0aGlzLnNob3dEcm9wZG93bigpKSxlLnN0b3BQcm9wYWdhdGlvbigpKTt0aGlzLl93YXNUYXA9ITB9fSx7a2V5OlwiX29uTW91c2VEb3duXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQsaT1lLnNoaWZ0S2V5O2lmKHRoaXMuY2hvaWNlTGlzdC5lbGVtZW50LmNvbnRhaW5zKHQpJiYoMCxwLmlzSUUxMSkoKSYmKHRoaXMuX2lzU2Nyb2xsaW5nT25JZT0hMCksdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHQpJiZ0IT09dGhpcy5pbnB1dC5lbGVtZW50KXt2YXIgbj10aGlzLl9zdG9yZS5hY3RpdmVJdGVtcyxvPWkscj0oMCxwLmZpbmRBbmNlc3RvckJ5QXR0ck5hbWUpKHQsXCJkYXRhLWJ1dHRvblwiKSxzPSgwLHAuZmluZEFuY2VzdG9yQnlBdHRyTmFtZSkodCxcImRhdGEtaXRlbVwiKSxhPSgwLHAuZmluZEFuY2VzdG9yQnlBdHRyTmFtZSkodCxcImRhdGEtY2hvaWNlXCIpO3I/dGhpcy5faGFuZGxlQnV0dG9uQWN0aW9uKG4scik6cz90aGlzLl9oYW5kbGVJdGVtQWN0aW9uKG4scyxvKTphJiZ0aGlzLl9oYW5kbGVDaG9pY2VBY3Rpb24obixhKSxlLnByZXZlbnREZWZhdWx0KCl9fX0se2tleTpcIl9vbk1vdXNlT3ZlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0Oyh0PT09dGhpcy5kcm9wZG93bnx8dGhpcy5kcm9wZG93bi5lbGVtZW50LmNvbnRhaW5zKHQpKSYmdC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWNob2ljZVwiKSYmdGhpcy5faGlnaGxpZ2h0Q2hvaWNlKHQpfX0se2tleTpcIl9vbkNsaWNrXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7dGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHQpP3RoaXMuZHJvcGRvd24uaXNBY3RpdmV8fHRoaXMuY29udGFpbmVyT3V0ZXIuaXNEaXNhYmxlZD90aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQmJnQhPT10aGlzLmlucHV0LmVsZW1lbnQmJiF0aGlzLmRyb3Bkb3duLmVsZW1lbnQuY29udGFpbnModCkmJnRoaXMuaGlkZURyb3Bkb3duKCk6dGhpcy5faXNUZXh0RWxlbWVudD9kb2N1bWVudC5hY3RpdmVFbGVtZW50IT09dGhpcy5pbnB1dC5lbGVtZW50JiZ0aGlzLmlucHV0LmZvY3VzKCk6KHRoaXMuc2hvd0Ryb3Bkb3duKCksdGhpcy5jb250YWluZXJPdXRlci5mb2N1cygpKToodGhpcy5fc3RvcmUuaGlnaGxpZ2h0ZWRBY3RpdmVJdGVtcyYmdGhpcy51bmhpZ2hsaWdodEFsbCgpLHRoaXMuY29udGFpbmVyT3V0ZXIucmVtb3ZlRm9jdXNTdGF0ZSgpLHRoaXMuaGlkZURyb3Bkb3duKCEwKSl9fSx7a2V5OlwiX29uRm9jdXNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9ZS50YXJnZXQ7dGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKGkpJiZ7dGV4dDpmdW5jdGlvbigpe2k9PT10LmlucHV0LmVsZW1lbnQmJnQuY29udGFpbmVyT3V0ZXIuYWRkRm9jdXNTdGF0ZSgpfSxcInNlbGVjdC1vbmVcIjpmdW5jdGlvbigpe3QuY29udGFpbmVyT3V0ZXIuYWRkRm9jdXNTdGF0ZSgpLGk9PT10LmlucHV0LmVsZW1lbnQmJnQuc2hvd0Ryb3Bkb3duKCEwKX0sXCJzZWxlY3QtbXVsdGlwbGVcIjpmdW5jdGlvbigpe2k9PT10LmlucHV0LmVsZW1lbnQmJih0LnNob3dEcm9wZG93bighMCksdC5jb250YWluZXJPdXRlci5hZGRGb2N1c1N0YXRlKCkpfX1bdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZV0oKX19LHtrZXk6XCJfb25CbHVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPWUudGFyZ2V0O2lmKHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5jb250YWlucyhpKSYmIXRoaXMuX2lzU2Nyb2xsaW5nT25JZSl7dmFyIG49dGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMuc29tZShmdW5jdGlvbihlKXtyZXR1cm4gZS5oaWdobGlnaHRlZH0pOyh7dGV4dDpmdW5jdGlvbigpe2k9PT10LmlucHV0LmVsZW1lbnQmJih0LmNvbnRhaW5lck91dGVyLnJlbW92ZUZvY3VzU3RhdGUoKSxuJiZ0LnVuaGlnaGxpZ2h0QWxsKCksdC5oaWRlRHJvcGRvd24oITApKX0sXCJzZWxlY3Qtb25lXCI6ZnVuY3Rpb24oKXt0LmNvbnRhaW5lck91dGVyLnJlbW92ZUZvY3VzU3RhdGUoKSwoaT09PXQuaW5wdXQuZWxlbWVudHx8aT09PXQuY29udGFpbmVyT3V0ZXIuZWxlbWVudCYmIXQuX2NhblNlYXJjaCkmJnQuaGlkZURyb3Bkb3duKCEwKX0sXCJzZWxlY3QtbXVsdGlwbGVcIjpmdW5jdGlvbigpe2k9PT10LmlucHV0LmVsZW1lbnQmJih0LmNvbnRhaW5lck91dGVyLnJlbW92ZUZvY3VzU3RhdGUoKSx0LmhpZGVEcm9wZG93bighMCksbiYmdC51bmhpZ2hsaWdodEFsbCgpKX19KVt0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlXSgpfWVsc2UgdGhpcy5faXNTY3JvbGxpbmdPbkllPSExLHRoaXMuaW5wdXQuZWxlbWVudC5mb2N1cygpfX0se2tleTpcIl9vbkZvcm1SZXNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fc3RvcmUuZGlzcGF0Y2goKDAsZC5yZXNldFRvKSh0aGlzLl9pbml0aWFsU3RhdGUpKX19LHtrZXk6XCJfaGlnaGxpZ2h0Q2hvaWNlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGwsaT1BcnJheS5mcm9tKHRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY2hvaWNlLXNlbGVjdGFibGVdXCIpKTtpZihpLmxlbmd0aCl7dmFyIG49dDtBcnJheS5mcm9tKHRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiLmNvbmNhdCh0aGlzLmNvbmZpZy5jbGFzc05hbWVzLmhpZ2hsaWdodGVkU3RhdGUpKSkuZm9yRWFjaChmdW5jdGlvbih0KXt0LmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKSx0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIixcImZhbHNlXCIpfSksbj90aGlzLl9oaWdobGlnaHRQb3NpdGlvbj1pLmluZGV4T2Yobik6KG49aS5sZW5ndGg+dGhpcy5faGlnaGxpZ2h0UG9zaXRpb24/aVt0aGlzLl9oaWdobGlnaHRQb3NpdGlvbl06aVtpLmxlbmd0aC0xXSl8fChuPWlbMF0pLG4uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5jbGFzc05hbWVzLmhpZ2hsaWdodGVkU3RhdGUpLG4uc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLFwidHJ1ZVwiKSx0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KGEuRVZFTlRTLmhpZ2hsaWdodENob2ljZSx7ZWw6bn0pLHRoaXMuZHJvcGRvd24uaXNBY3RpdmUmJih0aGlzLmlucHV0LnNldEFjdGl2ZURlc2NlbmRhbnQobi5pZCksdGhpcy5jb250YWluZXJPdXRlci5zZXRBY3RpdmVEZXNjZW5kYW50KG4uaWQpKX19fSx7a2V5OlwiX2FkZEl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnZhbHVlLGk9ZS5sYWJlbCxuPXZvaWQgMD09PWk/bnVsbDppLG89ZS5jaG9pY2VJZCxyPXZvaWQgMD09PW8/LTE6byxzPWUuZ3JvdXBJZCxjPXZvaWQgMD09PXM/LTE6cyxsPWUuY3VzdG9tUHJvcGVydGllcyxoPXZvaWQgMD09PWw/bnVsbDpsLGQ9ZS5wbGFjZWhvbGRlcixmPXZvaWQgMCE9PWQmJmQsdj1lLmtleUNvZGUsbT12b2lkIDA9PT12P251bGw6dixnPSgwLHAuaXNUeXBlKShcIlN0cmluZ1wiLHQpP3QudHJpbSgpOnQsXz1tLHk9aCxiPXRoaXMuX3N0b3JlLml0ZW1zLEU9bnx8ZyxTPXBhcnNlSW50KHIsMTApfHwtMSxJPWM+PTA/dGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKGMpOm51bGwsTz1iP2IubGVuZ3RoKzE6MTtyZXR1cm4gdGhpcy5jb25maWcucHJlcGVuZFZhbHVlJiYoZz10aGlzLmNvbmZpZy5wcmVwZW5kVmFsdWUrZy50b1N0cmluZygpKSx0aGlzLmNvbmZpZy5hcHBlbmRWYWx1ZSYmKGcrPXRoaXMuY29uZmlnLmFwcGVuZFZhbHVlLnRvU3RyaW5nKCkpLHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLHUuYWRkSXRlbSkoe3ZhbHVlOmcsbGFiZWw6RSxpZDpPLGNob2ljZUlkOlMsZ3JvdXBJZDpjLGN1c3RvbVByb3BlcnRpZXM6aCxwbGFjZWhvbGRlcjpmLGtleUNvZGU6X30pKSx0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQmJnRoaXMucmVtb3ZlQWN0aXZlSXRlbXMoTyksdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChhLkVWRU5UUy5hZGRJdGVtLHtpZDpPLHZhbHVlOmcsbGFiZWw6RSxjdXN0b21Qcm9wZXJ0aWVzOnksZ3JvdXBWYWx1ZTpJJiZJLnZhbHVlP0kudmFsdWU6dm9pZCAwLGtleUNvZGU6X30pLHRoaXN9fSx7a2V5OlwiX3JlbW92ZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXtpZighZXx8ISgwLHAuaXNUeXBlKShcIk9iamVjdFwiLGUpKXJldHVybiB0aGlzO3ZhciB0PWUuaWQsaT1lLnZhbHVlLG49ZS5sYWJlbCxvPWUuY2hvaWNlSWQscj1lLmdyb3VwSWQscz1yPj0wP3RoaXMuX3N0b3JlLmdldEdyb3VwQnlJZChyKTpudWxsO3JldHVybiB0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCx1LnJlbW92ZUl0ZW0pKHQsbykpLHMmJnMudmFsdWU/dGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChhLkVWRU5UUy5yZW1vdmVJdGVtLHtpZDp0LHZhbHVlOmksbGFiZWw6bixncm91cFZhbHVlOnMudmFsdWV9KTp0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KGEuRVZFTlRTLnJlbW92ZUl0ZW0se2lkOnQsdmFsdWU6aSxsYWJlbDpufSksdGhpc319LHtrZXk6XCJfYWRkQ2hvaWNlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS52YWx1ZSxpPWUubGFiZWwsbj12b2lkIDA9PT1pP251bGw6aSxvPWUuaXNTZWxlY3RlZCxyPXZvaWQgMCE9PW8mJm8scz1lLmlzRGlzYWJsZWQsYT12b2lkIDAhPT1zJiZzLGM9ZS5ncm91cElkLHU9dm9pZCAwPT09Yz8tMTpjLGg9ZS5jdXN0b21Qcm9wZXJ0aWVzLGQ9dm9pZCAwPT09aD9udWxsOmgsZj1lLnBsYWNlaG9sZGVyLHA9dm9pZCAwIT09ZiYmZix2PWUua2V5Q29kZSxtPXZvaWQgMD09PXY/bnVsbDp2O2lmKG51bGwhPXQpe3ZhciBnPXRoaXMuX3N0b3JlLmNob2ljZXMsXz1ufHx0LHk9Zz9nLmxlbmd0aCsxOjEsYj1cIlwiLmNvbmNhdCh0aGlzLl9iYXNlSWQsXCItXCIpLmNvbmNhdCh0aGlzLl9pZE5hbWVzLml0ZW1DaG9pY2UsXCItXCIpLmNvbmNhdCh5KTt0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCxsLmFkZENob2ljZSkoe3ZhbHVlOnQsbGFiZWw6XyxpZDp5LGdyb3VwSWQ6dSxkaXNhYmxlZDphLGVsZW1lbnRJZDpiLGN1c3RvbVByb3BlcnRpZXM6ZCxwbGFjZWhvbGRlcjpwLGtleUNvZGU6bX0pKSxyJiZ0aGlzLl9hZGRJdGVtKHt2YWx1ZTp0LGxhYmVsOl8sY2hvaWNlSWQ6eSxjdXN0b21Qcm9wZXJ0aWVzOmQscGxhY2Vob2xkZXI6cCxrZXlDb2RlOm19KX19fSx7a2V5OlwiX2FkZEdyb3VwXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPWUuZ3JvdXAsbj1lLmlkLG89ZS52YWx1ZUtleSxyPXZvaWQgMD09PW8/XCJ2YWx1ZVwiOm8scz1lLmxhYmVsS2V5LGE9dm9pZCAwPT09cz9cImxhYmVsXCI6cyxjPSgwLHAuaXNUeXBlKShcIk9iamVjdFwiLGkpP2kuY2hvaWNlczpBcnJheS5mcm9tKGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJPUFRJT05cIikpLGw9bnx8TWF0aC5mbG9vcigobmV3IERhdGUpLnZhbHVlT2YoKSpNYXRoLnJhbmRvbSgpKSx1PSEhaS5kaXNhYmxlZCYmaS5kaXNhYmxlZDtpZihjKXt0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCxoLmFkZEdyb3VwKShpLmxhYmVsLGwsITAsdSkpO2MuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgaT1lLmRpc2FibGVkfHxlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5kaXNhYmxlZDt0Ll9hZGRDaG9pY2Uoe3ZhbHVlOmVbcl0sbGFiZWw6KDAscC5pc1R5cGUpKFwiT2JqZWN0XCIsZSk/ZVthXTplLmlubmVySFRNTCxpc1NlbGVjdGVkOmUuc2VsZWN0ZWQsaXNEaXNhYmxlZDppLGdyb3VwSWQ6bCxjdXN0b21Qcm9wZXJ0aWVzOmUuY3VzdG9tUHJvcGVydGllcyxwbGFjZWhvbGRlcjplLnBsYWNlaG9sZGVyfSl9KX1lbHNlIHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLGguYWRkR3JvdXApKGkubGFiZWwsaS5pZCwhMSxpLmRpc2FibGVkKSl9fSx7a2V5OlwiX2dldFRlbXBsYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoIWUpcmV0dXJuIG51bGw7Zm9yKHZhciBpPXRoaXMuY29uZmlnLG49aS50ZW1wbGF0ZXMsbz1pLmNsYXNzTmFtZXMscj1hcmd1bWVudHMubGVuZ3RoLHM9bmV3IEFycmF5KHI+MT9yLTE6MCksYT0xO2E8cjthKyspc1thLTFdPWFyZ3VtZW50c1thXTtyZXR1cm4odD1uW2VdKS5jYWxsLmFwcGx5KHQsW3RoaXMsb10uY29uY2F0KHMpKX19LHtrZXk6XCJfY3JlYXRlVGVtcGxhdGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmNvbmZpZy5jYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzLHQ9e307ZSYmKDAscC5pc1R5cGUpKFwiRnVuY3Rpb25cIixlKSYmKHQ9ZS5jYWxsKHRoaXMscC5zdHJUb0VsKSksdGhpcy5jb25maWcudGVtcGxhdGVzPSgwLG8uZGVmYXVsdCkoYy5URU1QTEFURVMsdCl9fSx7a2V5OlwiX2NyZWF0ZUVsZW1lbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmNvbnRhaW5lck91dGVyPW5ldyBzLkNvbnRhaW5lcih7ZWxlbWVudDp0aGlzLl9nZXRUZW1wbGF0ZShcImNvbnRhaW5lck91dGVyXCIsdGhpcy5fZGlyZWN0aW9uLHRoaXMuX2lzU2VsZWN0RWxlbWVudCx0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQsdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZCx0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlKSxjbGFzc05hbWVzOnRoaXMuY29uZmlnLmNsYXNzTmFtZXMsdHlwZTp0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLHBvc2l0aW9uOnRoaXMuY29uZmlnLnBvc2l0aW9ufSksdGhpcy5jb250YWluZXJJbm5lcj1uZXcgcy5Db250YWluZXIoe2VsZW1lbnQ6dGhpcy5fZ2V0VGVtcGxhdGUoXCJjb250YWluZXJJbm5lclwiKSxjbGFzc05hbWVzOnRoaXMuY29uZmlnLmNsYXNzTmFtZXMsdHlwZTp0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLHBvc2l0aW9uOnRoaXMuY29uZmlnLnBvc2l0aW9ufSksdGhpcy5pbnB1dD1uZXcgcy5JbnB1dCh7ZWxlbWVudDp0aGlzLl9nZXRUZW1wbGF0ZShcImlucHV0XCIpLGNsYXNzTmFtZXM6dGhpcy5jb25maWcuY2xhc3NOYW1lcyx0eXBlOnRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGV9KSx0aGlzLmNob2ljZUxpc3Q9bmV3IHMuTGlzdCh7ZWxlbWVudDp0aGlzLl9nZXRUZW1wbGF0ZShcImNob2ljZUxpc3RcIix0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpfSksdGhpcy5pdGVtTGlzdD1uZXcgcy5MaXN0KHtlbGVtZW50OnRoaXMuX2dldFRlbXBsYXRlKFwiaXRlbUxpc3RcIix0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpfSksdGhpcy5kcm9wZG93bj1uZXcgcy5Ecm9wZG93bih7ZWxlbWVudDp0aGlzLl9nZXRUZW1wbGF0ZShcImRyb3Bkb3duXCIpLGNsYXNzTmFtZXM6dGhpcy5jb25maWcuY2xhc3NOYW1lcyx0eXBlOnRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGV9KX19LHtrZXk6XCJfY3JlYXRlU3RydWN0dXJlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnBhc3NlZEVsZW1lbnQuY29uY2VhbCgpLHRoaXMuY29udGFpbmVySW5uZXIud3JhcCh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCksdGhpcy5jb250YWluZXJPdXRlci53cmFwKHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudCksdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50P3RoaXMuaW5wdXQucGxhY2Vob2xkZXI9dGhpcy5jb25maWcuc2VhcmNoUGxhY2Vob2xkZXJWYWx1ZXx8XCJcIjp0aGlzLl9wbGFjZWhvbGRlclZhbHVlJiYodGhpcy5pbnB1dC5wbGFjZWhvbGRlcj10aGlzLl9wbGFjZWhvbGRlclZhbHVlLHRoaXMuaW5wdXQuc2V0V2lkdGgoITApKSx0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50KSx0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93bi5lbGVtZW50KSx0aGlzLmNvbnRhaW5lcklubmVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pdGVtTGlzdC5lbGVtZW50KSx0aGlzLl9pc1RleHRFbGVtZW50fHx0aGlzLmRyb3Bkb3duLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQpLHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudD90aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkJiZ0aGlzLmRyb3Bkb3duLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuaW5wdXQuZWxlbWVudCx0aGlzLmRyb3Bkb3duLmVsZW1lbnQuZmlyc3RDaGlsZCk6dGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQuZWxlbWVudCksdGhpcy5faXNTZWxlY3RFbGVtZW50P3RoaXMuX2FkZFByZWRlZmluZWRDaG9pY2VzKCk6dGhpcy5faXNUZXh0RWxlbWVudCYmdGhpcy5fYWRkUHJlZGVmaW5lZEl0ZW1zKCl9fSx7a2V5OlwiX2FkZFByZWRlZmluZWRDaG9pY2VzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbkdyb3VwcztpZih0aGlzLl9oaWdobGlnaHRQb3NpdGlvbj0wLHRoaXMuX2lzU2VhcmNoaW5nPSExLHRoaXMuX3NldExvYWRpbmcoITApLHQmJnQubGVuZ3RoKXt2YXIgaT10aGlzLnBhc3NlZEVsZW1lbnQucGxhY2Vob2xkZXJPcHRpb247aSYmXCJTRUxFQ1RcIj09PWkucGFyZW50Tm9kZS50YWdOYW1lJiZ0aGlzLl9hZGRDaG9pY2Uoe3ZhbHVlOmkudmFsdWUsbGFiZWw6aS5pbm5lckhUTUwsaXNTZWxlY3RlZDppLnNlbGVjdGVkLGlzRGlzYWJsZWQ6aS5kaXNhYmxlZCxwbGFjZWhvbGRlcjohMH0pLHQuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZS5fYWRkR3JvdXAoe2dyb3VwOnQsaWQ6dC5pZHx8bnVsbH0pfSl9ZWxzZXt2YXIgbj10aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucyxvPXRoaXMuY29uZmlnLnNvcnRGbixyPXRoaXMuX3ByZXNldENob2ljZXM7bi5mb3JFYWNoKGZ1bmN0aW9uKGUpe3IucHVzaCh7dmFsdWU6ZS52YWx1ZSxsYWJlbDplLmlubmVySFRNTCxzZWxlY3RlZDplLnNlbGVjdGVkLGRpc2FibGVkOmUuZGlzYWJsZWR8fGUucGFyZW50Tm9kZS5kaXNhYmxlZCxwbGFjZWhvbGRlcjplLmhhc0F0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpLGN1c3RvbVByb3BlcnRpZXM6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWN1c3RvbS1wcm9wZXJ0aWVzXCIpfSl9KSx0aGlzLmNvbmZpZy5zaG91bGRTb3J0JiZyLnNvcnQobyk7dmFyIHM9ci5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBlLnNlbGVjdGVkfSk7ci5mb3JFYWNoKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIGZ1bmN0aW9uKHQsaSl7dmFyIG49dC52YWx1ZSxvPXQubGFiZWwscj10LmN1c3RvbVByb3BlcnRpZXMsYT10LnBsYWNlaG9sZGVyO2lmKGUuX2lzU2VsZWN0RWxlbWVudClpZih0LmNob2ljZXMpZS5fYWRkR3JvdXAoe2dyb3VwOnQsaWQ6dC5pZHx8bnVsbH0pO2Vsc2V7dmFyIGM9ZS5faXNTZWxlY3RPbmVFbGVtZW50JiYhcyYmMD09PWksbD0hIWN8fHQuc2VsZWN0ZWQsdT0hYyYmdC5kaXNhYmxlZDtlLl9hZGRDaG9pY2Uoe3ZhbHVlOm4sbGFiZWw6byxpc1NlbGVjdGVkOmwsaXNEaXNhYmxlZDp1LGN1c3RvbVByb3BlcnRpZXM6cixwbGFjZWhvbGRlcjphfSl9ZWxzZSBlLl9hZGRDaG9pY2Uoe3ZhbHVlOm4sbGFiZWw6byxpc1NlbGVjdGVkOnQuc2VsZWN0ZWQsaXNEaXNhYmxlZDp0LmRpc2FibGVkLGN1c3RvbVByb3BlcnRpZXM6cixwbGFjZWhvbGRlcjphfSl9KHQsaSl9KX10aGlzLl9zZXRMb2FkaW5nKCExKX19LHtrZXk6XCJfYWRkUHJlZGVmaW5lZEl0ZW1zXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuX3ByZXNldEl0ZW1zLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBpPSgwLHAuZ2V0VHlwZSkodCk7XCJPYmplY3RcIj09PWkmJnQudmFsdWU/ZS5fYWRkSXRlbSh7dmFsdWU6dC52YWx1ZSxsYWJlbDp0LmxhYmVsLGNob2ljZUlkOnQuaWQsY3VzdG9tUHJvcGVydGllczp0LmN1c3RvbVByb3BlcnRpZXMscGxhY2Vob2xkZXI6dC5wbGFjZWhvbGRlcn0pOlwiU3RyaW5nXCI9PT1pJiZlLl9hZGRJdGVtKHt2YWx1ZTp0fSl9KHQpfSl9fSx7a2V5OlwiX3NldENob2ljZU9ySXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7KHtvYmplY3Q6ZnVuY3Rpb24oKXtlLnZhbHVlJiYodC5faXNUZXh0RWxlbWVudD90Ll9hZGRJdGVtKHt2YWx1ZTplLnZhbHVlLGxhYmVsOmUubGFiZWwsY2hvaWNlSWQ6ZS5pZCxjdXN0b21Qcm9wZXJ0aWVzOmUuY3VzdG9tUHJvcGVydGllcyxwbGFjZWhvbGRlcjplLnBsYWNlaG9sZGVyfSk6dC5fYWRkQ2hvaWNlKHt2YWx1ZTplLnZhbHVlLGxhYmVsOmUubGFiZWwsaXNTZWxlY3RlZDohMCxpc0Rpc2FibGVkOiExLGN1c3RvbVByb3BlcnRpZXM6ZS5jdXN0b21Qcm9wZXJ0aWVzLHBsYWNlaG9sZGVyOmUucGxhY2Vob2xkZXJ9KSl9LHN0cmluZzpmdW5jdGlvbigpe3QuX2lzVGV4dEVsZW1lbnQ/dC5fYWRkSXRlbSh7dmFsdWU6ZX0pOnQuX2FkZENob2ljZSh7dmFsdWU6ZSxsYWJlbDplLGlzU2VsZWN0ZWQ6ITAsaXNEaXNhYmxlZDohMX0pfX0pWygwLHAuZ2V0VHlwZSkoZSkudG9Mb3dlckNhc2UoKV0oKX19LHtrZXk6XCJfZmluZEFuZFNlbGVjdENob2ljZUJ5VmFsdWVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9dGhpcy5fc3RvcmUuY2hvaWNlcy5maW5kKGZ1bmN0aW9uKGkpe3JldHVybiB0LmNvbmZpZy5pdGVtQ29tcGFyZXIoaS52YWx1ZSxlKX0pO2kmJiFpLnNlbGVjdGVkJiZ0aGlzLl9hZGRJdGVtKHt2YWx1ZTppLnZhbHVlLGxhYmVsOmkubGFiZWwsY2hvaWNlSWQ6aS5pZCxncm91cElkOmkuZ3JvdXBJZCxjdXN0b21Qcm9wZXJ0aWVzOmkuY3VzdG9tUHJvcGVydGllcyxwbGFjZWhvbGRlcjppLnBsYWNlaG9sZGVyLGtleUNvZGU6aS5rZXlDb2RlfSl9fSx7a2V5OlwiX2dlbmVyYXRlSW5zdGFuY2VzXCIsdmFsdWU6ZnVuY3Rpb24odCxpKXtyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24odCxuKXtyZXR1cm4gdC5wdXNoKG5ldyBlKG4saSkpLHR9LFt0aGlzXSl9fSx7a2V5OlwiX2dlbmVyYXRlUGxhY2Vob2xkZXJWYWx1ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCYmKCEhdGhpcy5jb25maWcucGxhY2Vob2xkZXImJih0aGlzLmNvbmZpZy5wbGFjZWhvbGRlclZhbHVlfHx0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSkpfX1dKSYmZyh0LnByb3RvdHlwZSxpKSx2JiZnKHQsdiksZX0oKTtfLnVzZXJEZWZhdWx0cz17fSxlLmV4cG9ydHM9X30sZnVuY3Rpb24oZSx0LGkpe1xuLyohXG4gKiBGdXNlLmpzIHYzLjQuMiAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgS2lyb2xsb3MgUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqIFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cbnZhciBuO249ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gaShuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIG89dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsaSksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gaS5tPWUsaS5jPXQsaS5kPWZ1bmN0aW9uKGUsdCxuKXtpLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxpLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0saS50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1pKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoaS5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKWkuZChuLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59LGkubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gaS5kKHQsXCJhXCIsdCksdH0saS5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxpLnA9XCJcIixpKGkucz1cIi4vc3JjL2luZGV4LmpzXCIpfSh7XCIuL3NyYy9iaXRhcC9iaXRhcF9tYXRjaGVkX2luZGljZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2JpdGFwL2JpdGFwX21hdGNoZWRfaW5kaWNlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9mdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W10sdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MSxpPVtdLG49LTEsbz0tMSxyPTAscz1lLmxlbmd0aDtyPHM7cis9MSl7dmFyIGE9ZVtyXTthJiYtMT09PW4/bj1yOmF8fC0xPT09bnx8KChvPXItMSktbisxPj10JiZpLnB1c2goW24sb10pLG49LTEpfXJldHVybiBlW3ItMV0mJnItbj49dCYmaS5wdXNoKFtuLHItMV0pLGl9fSxcIi4vc3JjL2JpdGFwL2JpdGFwX3BhdHRlcm5fYWxwaGFiZXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9iaXRhcC9iaXRhcF9wYXR0ZXJuX2FscGhhYmV0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9mdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9e30saT1lLmxlbmd0aCxuPTA7bjxpO24rPTEpdFtlLmNoYXJBdChuKV09MDtmb3IodmFyIG89MDtvPGk7bys9MSl0W2UuY2hhckF0KG8pXXw9MTw8aS1vLTE7cmV0dXJuIHR9fSxcIi4vc3JjL2JpdGFwL2JpdGFwX3JlZ2V4X3NlYXJjaC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvYml0YXAvYml0YXBfcmVnZXhfc2VhcmNoLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL2Z1bmN0aW9uKGUsdCl7dmFyIGk9L1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTovICsvZyxvPW5ldyBSZWdFeHAodC5yZXBsYWNlKGksXCJcXFxcJCZcIikucmVwbGFjZShuLFwifFwiKSkscj1lLm1hdGNoKG8pLHM9ISFyLGE9W107aWYocylmb3IodmFyIGM9MCxsPXIubGVuZ3RoO2M8bDtjKz0xKXt2YXIgdT1yW2NdO2EucHVzaChbZS5pbmRleE9mKHUpLHUubGVuZ3RoLTFdKX1yZXR1cm57c2NvcmU6cz8uNToxLGlzTWF0Y2g6cyxtYXRjaGVkSW5kaWNlczphfX19LFwiLi9zcmMvYml0YXAvYml0YXBfc2NvcmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvYml0YXAvYml0YXBfc2NvcmUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9mdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciBpPXQuZXJyb3JzLG49dm9pZCAwPT09aT8wOmksbz10LmN1cnJlbnRMb2NhdGlvbixyPXZvaWQgMD09PW8/MDpvLHM9dC5leHBlY3RlZExvY2F0aW9uLGE9dm9pZCAwPT09cz8wOnMsYz10LmRpc3RhbmNlLGw9dm9pZCAwPT09Yz8xMDA6Yyx1PW4vZS5sZW5ndGgsaD1NYXRoLmFicyhhLXIpO3JldHVybiBsP3UraC9sOmg/MTp1fX0sXCIuL3NyYy9iaXRhcC9iaXRhcF9zZWFyY2guanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2JpdGFwL2JpdGFwX3NlYXJjaC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9mdW5jdGlvbihlLHQsaSl7dmFyIG49aSgvKiEgLi9iaXRhcF9zY29yZSAqL1wiLi9zcmMvYml0YXAvYml0YXBfc2NvcmUuanNcIiksbz1pKC8qISAuL2JpdGFwX21hdGNoZWRfaW5kaWNlcyAqL1wiLi9zcmMvYml0YXAvYml0YXBfbWF0Y2hlZF9pbmRpY2VzLmpzXCIpO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQsaSxyKXtmb3IodmFyIHM9ci5sb2NhdGlvbixhPXZvaWQgMD09PXM/MDpzLGM9ci5kaXN0YW5jZSxsPXZvaWQgMD09PWM/MTAwOmMsdT1yLnRocmVzaG9sZCxoPXZvaWQgMD09PXU/LjY6dSxkPXIuZmluZEFsbE1hdGNoZXMsZj12b2lkIDAhPT1kJiZkLHA9ci5taW5NYXRjaENoYXJMZW5ndGgsdj12b2lkIDA9PT1wPzE6cCxtPWEsZz1lLmxlbmd0aCxfPWgseT1lLmluZGV4T2YodCxtKSxiPXQubGVuZ3RoLEU9W10sUz0wO1M8ZztTKz0xKUVbU109MDtpZigtMSE9PXkpe3ZhciBJPW4odCx7ZXJyb3JzOjAsY3VycmVudExvY2F0aW9uOnksZXhwZWN0ZWRMb2NhdGlvbjptLGRpc3RhbmNlOmx9KTtpZihfPU1hdGgubWluKEksXyksLTEhPT0oeT1lLmxhc3RJbmRleE9mKHQsbStiKSkpe3ZhciBPPW4odCx7ZXJyb3JzOjAsY3VycmVudExvY2F0aW9uOnksZXhwZWN0ZWRMb2NhdGlvbjptLGRpc3RhbmNlOmx9KTtfPU1hdGgubWluKE8sXyl9fXk9LTE7Zm9yKHZhciBDPVtdLFQ9MSx3PWIrZyxrPTE8PGItMSxBPTA7QTxiO0ErPTEpe2Zvcih2YXIgTD0wLHg9dztMPHg7KXtuKHQse2Vycm9yczpBLGN1cnJlbnRMb2NhdGlvbjptK3gsZXhwZWN0ZWRMb2NhdGlvbjptLGRpc3RhbmNlOmx9KTw9Xz9MPXg6dz14LHg9TWF0aC5mbG9vcigody1MKS8yK0wpfXc9eDt2YXIgUD1NYXRoLm1heCgxLG0teCsxKSxEPWY/ZzpNYXRoLm1pbihtK3gsZykrYixqPUFycmF5KEQrMik7altEKzFdPSgxPDxBKS0xO2Zvcih2YXIgTT1EO00+PVA7TS09MSl7dmFyIE49TS0xLEY9aVtlLmNoYXJBdChOKV07aWYoRiYmKEVbTl09MSksaltNXT0oaltNKzFdPDwxfDEpJkYsMCE9PUEmJihqW01dfD0oQ1tNKzFdfENbTV0pPDwxfDF8Q1tNKzFdKSxqW01dJmsmJihUPW4odCx7ZXJyb3JzOkEsY3VycmVudExvY2F0aW9uOk4sZXhwZWN0ZWRMb2NhdGlvbjptLGRpc3RhbmNlOmx9KSk8PV8pe2lmKF89VCwoeT1OKTw9bSlicmVhaztQPU1hdGgubWF4KDEsMiptLXkpfX1pZihuKHQse2Vycm9yczpBKzEsY3VycmVudExvY2F0aW9uOm0sZXhwZWN0ZWRMb2NhdGlvbjptLGRpc3RhbmNlOmx9KT5fKWJyZWFrO0M9an1yZXR1cm57aXNNYXRjaDp5Pj0wLHNjb3JlOjA9PT1UPy4wMDE6VCxtYXRjaGVkSW5kaWNlczpvKEUsdil9fX0sXCIuL3NyYy9iaXRhcC9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9iaXRhcC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL2Z1bmN0aW9uKGUsdCxpKXtmdW5jdGlvbiBuKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciBuPXRbaV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX12YXIgbz1pKC8qISAuL2JpdGFwX3JlZ2V4X3NlYXJjaCAqL1wiLi9zcmMvYml0YXAvYml0YXBfcmVnZXhfc2VhcmNoLmpzXCIpLHI9aSgvKiEgLi9iaXRhcF9zZWFyY2ggKi9cIi4vc3JjL2JpdGFwL2JpdGFwX3NlYXJjaC5qc1wiKSxzPWkoLyohIC4vYml0YXBfcGF0dGVybl9hbHBoYWJldCAqL1wiLi9zcmMvYml0YXAvYml0YXBfcGF0dGVybl9hbHBoYWJldC5qc1wiKSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LGkpe3ZhciBuPWkubG9jYXRpb24sbz12b2lkIDA9PT1uPzA6bixyPWkuZGlzdGFuY2UsYT12b2lkIDA9PT1yPzEwMDpyLGM9aS50aHJlc2hvbGQsbD12b2lkIDA9PT1jPy42OmMsdT1pLm1heFBhdHRlcm5MZW5ndGgsaD12b2lkIDA9PT11PzMyOnUsZD1pLmlzQ2FzZVNlbnNpdGl2ZSxmPXZvaWQgMCE9PWQmJmQscD1pLnRva2VuU2VwYXJhdG9yLHY9dm9pZCAwPT09cD8vICsvZzpwLG09aS5maW5kQWxsTWF0Y2hlcyxnPXZvaWQgMCE9PW0mJm0sXz1pLm1pbk1hdGNoQ2hhckxlbmd0aCx5PXZvaWQgMD09PV8/MTpfOyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksdGhpcy5vcHRpb25zPXtsb2NhdGlvbjpvLGRpc3RhbmNlOmEsdGhyZXNob2xkOmwsbWF4UGF0dGVybkxlbmd0aDpoLGlzQ2FzZVNlbnNpdGl2ZTpmLHRva2VuU2VwYXJhdG9yOnYsZmluZEFsbE1hdGNoZXM6ZyxtaW5NYXRjaENoYXJMZW5ndGg6eX0sdGhpcy5wYXR0ZXJuPXRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmU/dDp0LnRvTG93ZXJDYXNlKCksdGhpcy5wYXR0ZXJuLmxlbmd0aDw9aCYmKHRoaXMucGF0dGVybkFscGhhYmV0PXModGhpcy5wYXR0ZXJuKSl9dmFyIHQsaSxhO3JldHVybiB0PWUsKGk9W3trZXk6XCJzZWFyY2hcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlfHwoZT1lLnRvTG93ZXJDYXNlKCkpLHRoaXMucGF0dGVybj09PWUpcmV0dXJue2lzTWF0Y2g6ITAsc2NvcmU6MCxtYXRjaGVkSW5kaWNlczpbWzAsZS5sZW5ndGgtMV1dfTt2YXIgdD10aGlzLm9wdGlvbnMsaT10Lm1heFBhdHRlcm5MZW5ndGgsbj10LnRva2VuU2VwYXJhdG9yO2lmKHRoaXMucGF0dGVybi5sZW5ndGg+aSlyZXR1cm4gbyhlLHRoaXMucGF0dGVybixuKTt2YXIgcz10aGlzLm9wdGlvbnMsYT1zLmxvY2F0aW9uLGM9cy5kaXN0YW5jZSxsPXMudGhyZXNob2xkLHU9cy5maW5kQWxsTWF0Y2hlcyxoPXMubWluTWF0Y2hDaGFyTGVuZ3RoO3JldHVybiByKGUsdGhpcy5wYXR0ZXJuLHRoaXMucGF0dGVybkFscGhhYmV0LHtsb2NhdGlvbjphLGRpc3RhbmNlOmMsdGhyZXNob2xkOmwsZmluZEFsbE1hdGNoZXM6dSxtaW5NYXRjaENoYXJMZW5ndGg6aH0pfX1dKSYmbih0LnByb3RvdHlwZSxpKSxhJiZuKHQsYSksZX0oKTtlLmV4cG9ydHM9YX0sXCIuL3NyYy9oZWxwZXJzL2RlZXBfdmFsdWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2hlbHBlcnMvZGVlcF92YWx1ZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9mdW5jdGlvbihlLHQsaSl7dmFyIG49aSgvKiEgLi9pc19hcnJheSAqL1wiLi9zcmMvaGVscGVycy9pc19hcnJheS5qc1wiKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24gZSh0LGksbyl7aWYoaSl7dmFyIHI9aS5pbmRleE9mKFwiLlwiKSxzPWksYT1udWxsOy0xIT09ciYmKHM9aS5zbGljZSgwLHIpLGE9aS5zbGljZShyKzEpKTt2YXIgYz10W3NdO2lmKG51bGwhPWMpaWYoYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGMmJlwibnVtYmVyXCIhPXR5cGVvZiBjKWlmKG4oYykpZm9yKHZhciBsPTAsdT1jLmxlbmd0aDtsPHU7bCs9MSllKGNbbF0sYSxvKTtlbHNlIGEmJmUoYyxhLG8pO2Vsc2Ugby5wdXNoKGMudG9TdHJpbmcoKSl9ZWxzZSBvLnB1c2godCk7cmV0dXJuIG99KGUsdCxbXSl9fSxcIi4vc3JjL2hlbHBlcnMvaXNfYXJyYXkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9oZWxwZXJzL2lzX2FycmF5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9mdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gQXJyYXkuaXNBcnJheT9BcnJheS5pc0FycmF5KGUpOlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX19LFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9mdW5jdGlvbihlLHQsaSl7ZnVuY3Rpb24gbihlKXtyZXR1cm4obj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9ZnVuY3Rpb24gbyhlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgbj10W2ldO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19dmFyIHI9aSgvKiEgLi9iaXRhcCAqL1wiLi9zcmMvYml0YXAvaW5kZXguanNcIikscz1pKC8qISAuL2hlbHBlcnMvZGVlcF92YWx1ZSAqL1wiLi9zcmMvaGVscGVycy9kZWVwX3ZhbHVlLmpzXCIpLGE9aSgvKiEgLi9oZWxwZXJzL2lzX2FycmF5ICovXCIuL3NyYy9oZWxwZXJzL2lzX2FycmF5LmpzXCIpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsaSl7dmFyIG49aS5sb2NhdGlvbixvPXZvaWQgMD09PW4/MDpuLHI9aS5kaXN0YW5jZSxhPXZvaWQgMD09PXI/MTAwOnIsYz1pLnRocmVzaG9sZCxsPXZvaWQgMD09PWM/LjY6Yyx1PWkubWF4UGF0dGVybkxlbmd0aCxoPXZvaWQgMD09PXU/MzI6dSxkPWkuY2FzZVNlbnNpdGl2ZSxmPXZvaWQgMCE9PWQmJmQscD1pLnRva2VuU2VwYXJhdG9yLHY9dm9pZCAwPT09cD8vICsvZzpwLG09aS5maW5kQWxsTWF0Y2hlcyxnPXZvaWQgMCE9PW0mJm0sXz1pLm1pbk1hdGNoQ2hhckxlbmd0aCx5PXZvaWQgMD09PV8/MTpfLGI9aS5pZCxFPXZvaWQgMD09PWI/bnVsbDpiLFM9aS5rZXlzLEk9dm9pZCAwPT09Uz9bXTpTLE89aS5zaG91bGRTb3J0LEM9dm9pZCAwPT09T3x8TyxUPWkuZ2V0Rm4sdz12b2lkIDA9PT1UP3M6VCxrPWkuc29ydEZuLEE9dm9pZCAwPT09az9mdW5jdGlvbihlLHQpe3JldHVybiBlLnNjb3JlLXQuc2NvcmV9OmssTD1pLnRva2VuaXplLHg9dm9pZCAwIT09TCYmTCxQPWkubWF0Y2hBbGxUb2tlbnMsRD12b2lkIDAhPT1QJiZQLGo9aS5pbmNsdWRlTWF0Y2hlcyxNPXZvaWQgMCE9PWomJmosTj1pLmluY2x1ZGVTY29yZSxGPXZvaWQgMCE9PU4mJk4sSz1pLnZlcmJvc2UsUj12b2lkIDAhPT1LJiZLOyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksdGhpcy5vcHRpb25zPXtsb2NhdGlvbjpvLGRpc3RhbmNlOmEsdGhyZXNob2xkOmwsbWF4UGF0dGVybkxlbmd0aDpoLGlzQ2FzZVNlbnNpdGl2ZTpmLHRva2VuU2VwYXJhdG9yOnYsZmluZEFsbE1hdGNoZXM6ZyxtaW5NYXRjaENoYXJMZW5ndGg6eSxpZDpFLGtleXM6SSxpbmNsdWRlTWF0Y2hlczpNLGluY2x1ZGVTY29yZTpGLHNob3VsZFNvcnQ6QyxnZXRGbjp3LHNvcnRGbjpBLHZlcmJvc2U6Uix0b2tlbml6ZTp4LG1hdGNoQWxsVG9rZW5zOkR9LHRoaXMuc2V0Q29sbGVjdGlvbih0KX12YXIgdCxpLGM7cmV0dXJuIHQ9ZSwoaT1be2tleTpcInNldENvbGxlY3Rpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5saXN0PWUsZX19LHtrZXk6XCJzZWFyY2hcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e2xpbWl0OiExfTt0aGlzLl9sb2coJy0tLS0tLS0tLVxcblNlYXJjaCBwYXR0ZXJuOiBcIicuY29uY2F0KGUsJ1wiJykpO3ZhciBpPXRoaXMuX3ByZXBhcmVTZWFyY2hlcnMoZSksbj1pLnRva2VuU2VhcmNoZXJzLG89aS5mdWxsU2VhcmNoZXIscj10aGlzLl9zZWFyY2gobixvKSxzPXIud2VpZ2h0cyxhPXIucmVzdWx0cztyZXR1cm4gdGhpcy5fY29tcHV0ZVNjb3JlKHMsYSksdGhpcy5vcHRpb25zLnNob3VsZFNvcnQmJnRoaXMuX3NvcnQoYSksdC5saW1pdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGltaXQmJihhPWEuc2xpY2UoMCx0LmxpbWl0KSksdGhpcy5fZm9ybWF0KGEpfX0se2tleTpcIl9wcmVwYXJlU2VhcmNoZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJcIix0PVtdO2lmKHRoaXMub3B0aW9ucy50b2tlbml6ZSlmb3IodmFyIGk9ZS5zcGxpdCh0aGlzLm9wdGlvbnMudG9rZW5TZXBhcmF0b3IpLG49MCxvPWkubGVuZ3RoO248bztuKz0xKXQucHVzaChuZXcgcihpW25dLHRoaXMub3B0aW9ucykpO3JldHVybnt0b2tlblNlYXJjaGVyczp0LGZ1bGxTZWFyY2hlcjpuZXcgcihlLHRoaXMub3B0aW9ucyl9fX0se2tleTpcIl9zZWFyY2hcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSx0PWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLGk9dGhpcy5saXN0LG49e30sbz1bXTtpZihcInN0cmluZ1wiPT10eXBlb2YgaVswXSl7Zm9yKHZhciByPTAscz1pLmxlbmd0aDtyPHM7cis9MSl0aGlzLl9hbmFseXplKHtrZXk6XCJcIix2YWx1ZTppW3JdLHJlY29yZDpyLGluZGV4OnJ9LHtyZXN1bHRNYXA6bixyZXN1bHRzOm8sdG9rZW5TZWFyY2hlcnM6ZSxmdWxsU2VhcmNoZXI6dH0pO3JldHVybnt3ZWlnaHRzOm51bGwscmVzdWx0czpvfX1mb3IodmFyIGE9e30sYz0wLGw9aS5sZW5ndGg7YzxsO2MrPTEpZm9yKHZhciB1PWlbY10saD0wLGQ9dGhpcy5vcHRpb25zLmtleXMubGVuZ3RoO2g8ZDtoKz0xKXt2YXIgZj10aGlzLm9wdGlvbnMua2V5c1toXTtpZihcInN0cmluZ1wiIT10eXBlb2YgZil7aWYoYVtmLm5hbWVdPXt3ZWlnaHQ6MS1mLndlaWdodHx8MX0sZi53ZWlnaHQ8PTB8fGYud2VpZ2h0PjEpdGhyb3cgbmV3IEVycm9yKFwiS2V5IHdlaWdodCBoYXMgdG8gYmUgPiAwIGFuZCA8PSAxXCIpO2Y9Zi5uYW1lfWVsc2UgYVtmXT17d2VpZ2h0OjF9O3RoaXMuX2FuYWx5emUoe2tleTpmLHZhbHVlOnRoaXMub3B0aW9ucy5nZXRGbih1LGYpLHJlY29yZDp1LGluZGV4OmN9LHtyZXN1bHRNYXA6bixyZXN1bHRzOm8sdG9rZW5TZWFyY2hlcnM6ZSxmdWxsU2VhcmNoZXI6dH0pfXJldHVybnt3ZWlnaHRzOmEscmVzdWx0czpvfX19LHtrZXk6XCJfYW5hbHl6ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5rZXksbj1lLmFycmF5SW5kZXgsbz12b2lkIDA9PT1uPy0xOm4scj1lLnZhbHVlLHM9ZS5yZWNvcmQsYz1lLmluZGV4LGw9dC50b2tlblNlYXJjaGVycyx1PXZvaWQgMD09PWw/W106bCxoPXQuZnVsbFNlYXJjaGVyLGQ9dm9pZCAwPT09aD9bXTpoLGY9dC5yZXN1bHRNYXAscD12b2lkIDA9PT1mP3t9OmYsdj10LnJlc3VsdHMsbT12b2lkIDA9PT12P1tdOnY7aWYobnVsbCE9cil7dmFyIGc9ITEsXz0tMSx5PTA7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpe3RoaXMuX2xvZyhcIlxcbktleTogXCIuY29uY2F0KFwiXCI9PT1pP1wiLVwiOmkpKTt2YXIgYj1kLnNlYXJjaChyKTtpZih0aGlzLl9sb2coJ0Z1bGwgdGV4dDogXCInLmNvbmNhdChyLCdcIiwgc2NvcmU6ICcpLmNvbmNhdChiLnNjb3JlKSksdGhpcy5vcHRpb25zLnRva2VuaXplKXtmb3IodmFyIEU9ci5zcGxpdCh0aGlzLm9wdGlvbnMudG9rZW5TZXBhcmF0b3IpLFM9W10sST0wO0k8dS5sZW5ndGg7SSs9MSl7dmFyIE89dVtJXTt0aGlzLl9sb2coJ1xcblBhdHRlcm46IFwiJy5jb25jYXQoTy5wYXR0ZXJuLCdcIicpKTtmb3IodmFyIEM9ITEsVD0wO1Q8RS5sZW5ndGg7VCs9MSl7dmFyIHc9RVtUXSxrPU8uc2VhcmNoKHcpLEE9e307ay5pc01hdGNoPyhBW3ddPWsuc2NvcmUsZz0hMCxDPSEwLFMucHVzaChrLnNjb3JlKSk6KEFbd109MSx0aGlzLm9wdGlvbnMubWF0Y2hBbGxUb2tlbnN8fFMucHVzaCgxKSksdGhpcy5fbG9nKCdUb2tlbjogXCInLmNvbmNhdCh3LCdcIiwgc2NvcmU6ICcpLmNvbmNhdChBW3ddKSl9QyYmKHkrPTEpfV89U1swXTtmb3IodmFyIEw9Uy5sZW5ndGgseD0xO3g8TDt4Kz0xKV8rPVNbeF07Xy89TCx0aGlzLl9sb2coXCJUb2tlbiBzY29yZSBhdmVyYWdlOlwiLF8pfXZhciBQPWIuc2NvcmU7Xz4tMSYmKFA9KFArXykvMiksdGhpcy5fbG9nKFwiU2NvcmUgYXZlcmFnZTpcIixQKTt2YXIgRD0hdGhpcy5vcHRpb25zLnRva2VuaXplfHwhdGhpcy5vcHRpb25zLm1hdGNoQWxsVG9rZW5zfHx5Pj11Lmxlbmd0aDtpZih0aGlzLl9sb2coXCJcXG5DaGVjayBNYXRjaGVzOiBcIi5jb25jYXQoRCkpLChnfHxiLmlzTWF0Y2gpJiZEKXt2YXIgaj1wW2NdO2o/ai5vdXRwdXQucHVzaCh7a2V5OmksYXJyYXlJbmRleDpvLHZhbHVlOnIsc2NvcmU6UCxtYXRjaGVkSW5kaWNlczpiLm1hdGNoZWRJbmRpY2VzfSk6KHBbY109e2l0ZW06cyxvdXRwdXQ6W3trZXk6aSxhcnJheUluZGV4Om8sdmFsdWU6cixzY29yZTpQLG1hdGNoZWRJbmRpY2VzOmIubWF0Y2hlZEluZGljZXN9XX0sbS5wdXNoKHBbY10pKX19ZWxzZSBpZihhKHIpKWZvcih2YXIgTT0wLE49ci5sZW5ndGg7TTxOO00rPTEpdGhpcy5fYW5hbHl6ZSh7a2V5OmksYXJyYXlJbmRleDpNLHZhbHVlOnJbTV0scmVjb3JkOnMsaW5kZXg6Y30se3Jlc3VsdE1hcDpwLHJlc3VsdHM6bSx0b2tlblNlYXJjaGVyczp1LGZ1bGxTZWFyY2hlcjpkfSl9fX0se2tleTpcIl9jb21wdXRlU2NvcmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuX2xvZyhcIlxcblxcbkNvbXB1dGluZyBzY29yZTpcXG5cIik7Zm9yKHZhciBpPTAsbj10Lmxlbmd0aDtpPG47aSs9MSl7Zm9yKHZhciBvPXRbaV0ub3V0cHV0LHI9by5sZW5ndGgscz0xLGE9MSxjPTA7YzxyO2MrPTEpe3ZhciBsPWU/ZVtvW2NdLmtleV0ud2VpZ2h0OjEsdT0oMT09PWw/b1tjXS5zY29yZTpvW2NdLnNjb3JlfHwuMDAxKSpsOzEhPT1sP2E9TWF0aC5taW4oYSx1KToob1tjXS5uU2NvcmU9dSxzKj11KX10W2ldLnNjb3JlPTE9PT1hP3M6YSx0aGlzLl9sb2codFtpXSl9fX0se2tleTpcIl9zb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fbG9nKFwiXFxuXFxuU29ydGluZy4uLi5cIiksZS5zb3J0KHRoaXMub3B0aW9ucy5zb3J0Rm4pfX0se2tleTpcIl9mb3JtYXRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1bXTtpZih0aGlzLm9wdGlvbnMudmVyYm9zZSl7dmFyIGk9W107dGhpcy5fbG9nKFwiXFxuXFxuT3V0cHV0OlxcblxcblwiLEpTT04uc3RyaW5naWZ5KGUsZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT09bih0KSYmbnVsbCE9PXQpe2lmKC0xIT09aS5pbmRleE9mKHQpKXJldHVybjtpLnB1c2godCl9cmV0dXJuIHR9KSksaT1udWxsfXZhciBvPVtdO3RoaXMub3B0aW9ucy5pbmNsdWRlTWF0Y2hlcyYmby5wdXNoKGZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5vdXRwdXQ7dC5tYXRjaGVzPVtdO2Zvcih2YXIgbj0wLG89aS5sZW5ndGg7bjxvO24rPTEpe3ZhciByPWlbbl07aWYoMCE9PXIubWF0Y2hlZEluZGljZXMubGVuZ3RoKXt2YXIgcz17aW5kaWNlczpyLm1hdGNoZWRJbmRpY2VzLHZhbHVlOnIudmFsdWV9O3Iua2V5JiYocy5rZXk9ci5rZXkpLHIuaGFzT3duUHJvcGVydHkoXCJhcnJheUluZGV4XCIpJiZyLmFycmF5SW5kZXg+LTEmJihzLmFycmF5SW5kZXg9ci5hcnJheUluZGV4KSx0Lm1hdGNoZXMucHVzaChzKX19fSksdGhpcy5vcHRpb25zLmluY2x1ZGVTY29yZSYmby5wdXNoKGZ1bmN0aW9uKGUsdCl7dC5zY29yZT1lLnNjb3JlfSk7Zm9yKHZhciByPTAscz1lLmxlbmd0aDtyPHM7cis9MSl7dmFyIGE9ZVtyXTtpZih0aGlzLm9wdGlvbnMuaWQmJihhLml0ZW09dGhpcy5vcHRpb25zLmdldEZuKGEuaXRlbSx0aGlzLm9wdGlvbnMuaWQpWzBdKSxvLmxlbmd0aCl7Zm9yKHZhciBjPXtpdGVtOmEuaXRlbX0sbD0wLHU9by5sZW5ndGg7bDx1O2wrPTEpb1tsXShhLGMpO3QucHVzaChjKX1lbHNlIHQucHVzaChhLml0ZW0pfXJldHVybiB0fX0se2tleTpcIl9sb2dcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlO3RoaXMub3B0aW9ucy52ZXJib3NlJiYoZT1jb25zb2xlKS5sb2cuYXBwbHkoZSxhcmd1bWVudHMpfX1dKSYmbyh0LnByb3RvdHlwZSxpKSxjJiZvKHQsYyksZX0oKTtlLmV4cG9ydHM9Y319KX0sZS5leHBvcnRzPW4oKX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2kucih0KTt2YXIgbj1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT10eXBlb2YgZX0oZSkmJiFmdW5jdGlvbihlKXt2YXIgdD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PXR8fFwiW29iamVjdCBEYXRlXVwiPT09dHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUuJCR0eXBlb2Y9PT1vfShlKX0oZSl9O3ZhciBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMztmdW5jdGlvbiByKGUsdCl7cmV0dXJuITEhPT10LmNsb25lJiZ0LmlzTWVyZ2VhYmxlT2JqZWN0KGUpP2EoKGk9ZSxBcnJheS5pc0FycmF5KGkpP1tdOnt9KSxlLHQpOmU7dmFyIGl9ZnVuY3Rpb24gcyhlLHQsaSl7cmV0dXJuIGUuY29uY2F0KHQpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gcihlLGkpfSl9ZnVuY3Rpb24gYShlLHQsaSl7KGk9aXx8e30pLmFycmF5TWVyZ2U9aS5hcnJheU1lcmdlfHxzLGkuaXNNZXJnZWFibGVPYmplY3Q9aS5pc01lcmdlYWJsZU9iamVjdHx8bjt2YXIgbz1BcnJheS5pc0FycmF5KHQpO3JldHVybiBvPT09QXJyYXkuaXNBcnJheShlKT9vP2kuYXJyYXlNZXJnZShlLHQsaSk6ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPXt9O3JldHVybiBpLmlzTWVyZ2VhYmxlT2JqZWN0KGUpJiZPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe25bdF09cihlW3RdLGkpfSksT2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihvKXtpLmlzTWVyZ2VhYmxlT2JqZWN0KHRbb10pJiZlW29dP25bb109YShlW29dLHRbb10saSk6bltvXT1yKHRbb10saSl9KSxufShlLHQsaSk6cih0LGkpfWEuYWxsPWZ1bmN0aW9uKGUsdCl7aWYoIUFycmF5LmlzQXJyYXkoZSkpdGhyb3cgbmV3IEVycm9yKFwiZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5XCIpO3JldHVybiBlLnJlZHVjZShmdW5jdGlvbihlLGkpe3JldHVybiBhKGUsaSx0KX0se30pfTt2YXIgYz1hO3QuZGVmYXVsdD1jfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PXZvaWQgMDt2YXIgbixvPWkoNikscj0obj1pKDE1KSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O2Z1bmN0aW9uIHMoZSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIG49dFtpXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fXZhciBhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpeyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksdGhpcy5fc3RvcmU9KDAsby5jcmVhdGVTdG9yZSkoci5kZWZhdWx0LHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fJiZ3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpKX12YXIgdCxpLG47cmV0dXJuIHQ9ZSwoaT1be2tleTpcInN1YnNjcmliZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX3N0b3JlLnN1YnNjcmliZShlKX19LHtrZXk6XCJkaXNwYXRjaFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX3N0b3JlLmRpc3BhdGNoKGUpfX0se2tleTpcImlzTG9hZGluZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhdGUuZ2VuZXJhbC5sb2FkaW5nfX0se2tleTpcImdldENob2ljZUJ5SWRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4hIWUmJnRoaXMuYWN0aXZlQ2hvaWNlcy5maW5kKGZ1bmN0aW9uKHQpe3JldHVybiB0LmlkPT09cGFyc2VJbnQoZSwxMCl9KX19LHtrZXk6XCJnZXRHcm91cEJ5SWRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5ncm91cHMuZmluZChmdW5jdGlvbih0KXtyZXR1cm4gdC5pZD09PXBhcnNlSW50KGUsMTApfSl9fSx7a2V5Olwic3RhdGVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc3RvcmUuZ2V0U3RhdGUoKX19LHtrZXk6XCJpdGVtc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlLml0ZW1zfX0se2tleTpcImFjdGl2ZUl0ZW1zXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5hY3RpdmV9KX19LHtrZXk6XCJoaWdobGlnaHRlZEFjdGl2ZUl0ZW1zXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFjdGl2ZSYmZS5oaWdobGlnaHRlZH0pfX0se2tleTpcImNob2ljZXNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdGF0ZS5jaG9pY2VzfX0se2tleTpcImFjdGl2ZUNob2ljZXNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaG9pY2VzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUuYWN0aXZlfSl9fSx7a2V5Olwic2VsZWN0YWJsZUNob2ljZXNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaG9pY2VzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4hMCE9PWUuZGlzYWJsZWR9KX19LHtrZXk6XCJzZWFyY2hhYmxlQ2hvaWNlc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNlbGVjdGFibGVDaG9pY2VzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4hMCE9PWUucGxhY2Vob2xkZXJ9KX19LHtrZXk6XCJwbGFjZWhvbGRlckNob2ljZVwiLGdldDpmdW5jdGlvbigpe3JldHVybltdLmNvbmNhdCh0aGlzLmNob2ljZXMpLnJldmVyc2UoKS5maW5kKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5wbGFjZWhvbGRlcn0pfX0se2tleTpcImdyb3Vwc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlLmdyb3Vwc319LHtrZXk6XCJhY3RpdmVHcm91cHNcIixnZXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmdyb3Vwcyx0PXRoaXMuY2hvaWNlcztyZXR1cm4gZS5maWx0ZXIoZnVuY3Rpb24oZSl7dmFyIGk9ITA9PT1lLmFjdGl2ZSYmITE9PT1lLmRpc2FibGVkLG49dC5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5hY3RpdmUmJiExPT09ZS5kaXNhYmxlZH0pO3JldHVybiBpJiZufSxbXSl9fV0pJiZzKHQucHJvdG90eXBlLGkpLG4mJnModCxuKSxlfSgpO3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtpZighZS53ZWJwYWNrUG9seWZpbGwpe3ZhciB0PU9iamVjdC5jcmVhdGUoZSk7dC5jaGlsZHJlbnx8KHQuY2hpbGRyZW49W10pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwibG9hZGVkXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQubH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcImlkXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuaX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcImV4cG9ydHNcIix7ZW51bWVyYWJsZTohMH0pLHQud2VicGFja1BvbHlmaWxsPTF9cmV0dXJuIHR9fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PXZvaWQgMDt2YXIgbj1pKDYpLG89bChpKDE2KSkscj1sKGkoMTcpKSxzPWwoaSgxOCkpLGE9bChpKDE5KSksYz1pKDApO2Z1bmN0aW9uIGwoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciB1PSgwLG4uY29tYmluZVJlZHVjZXJzKSh7aXRlbXM6by5kZWZhdWx0LGdyb3VwczpyLmRlZmF1bHQsY2hvaWNlczpzLmRlZmF1bHQsZ2VuZXJhbDphLmRlZmF1bHR9KSxoPWZ1bmN0aW9uKGUsdCl7dmFyIGk9ZTtpZihcIkNMRUFSX0FMTFwiPT09dC50eXBlKWk9dm9pZCAwO2Vsc2UgaWYoXCJSRVNFVF9UT1wiPT09dC50eXBlKXJldHVybigwLGMuY2xvbmVPYmplY3QpKHQuc3RhdGUpO3JldHVybiB1KGksdCl9O3QuZGVmYXVsdD1ofSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm4sdD1hcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMDtzd2l0Y2godC50eXBlKXtjYXNlXCJBRERfSVRFTVwiOnZhciBpPVtdLmNvbmNhdChlLFt7aWQ6dC5pZCxjaG9pY2VJZDp0LmNob2ljZUlkLGdyb3VwSWQ6dC5ncm91cElkLHZhbHVlOnQudmFsdWUsbGFiZWw6dC5sYWJlbCxhY3RpdmU6ITAsaGlnaGxpZ2h0ZWQ6ITEsY3VzdG9tUHJvcGVydGllczp0LmN1c3RvbVByb3BlcnRpZXMscGxhY2Vob2xkZXI6dC5wbGFjZWhvbGRlcnx8ITEsa2V5Q29kZTpudWxsfV0pO3JldHVybiBpLm1hcChmdW5jdGlvbihlKXt2YXIgdD1lO3JldHVybiB0LmhpZ2hsaWdodGVkPSExLHR9KTtjYXNlXCJSRU1PVkVfSVRFTVwiOnJldHVybiBlLm1hcChmdW5jdGlvbihlKXt2YXIgaT1lO3JldHVybiBpLmlkPT09dC5pZCYmKGkuYWN0aXZlPSExKSxpfSk7Y2FzZVwiSElHSExJR0hUX0lURU1cIjpyZXR1cm4gZS5tYXAoZnVuY3Rpb24oZSl7dmFyIGk9ZTtyZXR1cm4gaS5pZD09PXQuaWQmJihpLmhpZ2hsaWdodGVkPXQuaGlnaGxpZ2h0ZWQpLGl9KTtkZWZhdWx0OnJldHVybiBlfX0sdC5kZWZhdWx0U3RhdGU9dm9pZCAwO3ZhciBuPVtdO3QuZGVmYXVsdFN0YXRlPW59LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bix0PWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwO3N3aXRjaCh0LnR5cGUpe2Nhc2VcIkFERF9HUk9VUFwiOnJldHVybltdLmNvbmNhdChlLFt7aWQ6dC5pZCx2YWx1ZTp0LnZhbHVlLGFjdGl2ZTp0LmFjdGl2ZSxkaXNhYmxlZDp0LmRpc2FibGVkfV0pO2Nhc2VcIkNMRUFSX0NIT0lDRVNcIjpyZXR1cm5bXTtkZWZhdWx0OnJldHVybiBlfX0sdC5kZWZhdWx0U3RhdGU9dm9pZCAwO3ZhciBuPVtdO3QuZGVmYXVsdFN0YXRlPW59LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bix0PWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwO3N3aXRjaCh0LnR5cGUpe2Nhc2VcIkFERF9DSE9JQ0VcIjpyZXR1cm5bXS5jb25jYXQoZSxbe2lkOnQuaWQsZWxlbWVudElkOnQuZWxlbWVudElkLGdyb3VwSWQ6dC5ncm91cElkLHZhbHVlOnQudmFsdWUsbGFiZWw6dC5sYWJlbHx8dC52YWx1ZSxkaXNhYmxlZDp0LmRpc2FibGVkfHwhMSxzZWxlY3RlZDohMSxhY3RpdmU6ITAsc2NvcmU6OTk5OSxjdXN0b21Qcm9wZXJ0aWVzOnQuY3VzdG9tUHJvcGVydGllcyxwbGFjZWhvbGRlcjp0LnBsYWNlaG9sZGVyfHwhMSxrZXlDb2RlOm51bGx9XSk7Y2FzZVwiQUREX0lURU1cIjpyZXR1cm4gdC5hY3RpdmF0ZU9wdGlvbnM/ZS5tYXAoZnVuY3Rpb24oZSl7dmFyIGk9ZTtyZXR1cm4gaS5hY3RpdmU9dC5hY3RpdmUsaX0pOnQuY2hvaWNlSWQ+LTE/ZS5tYXAoZnVuY3Rpb24oZSl7dmFyIGk9ZTtyZXR1cm4gaS5pZD09PXBhcnNlSW50KHQuY2hvaWNlSWQsMTApJiYoaS5zZWxlY3RlZD0hMCksaX0pOmU7Y2FzZVwiUkVNT1ZFX0lURU1cIjpyZXR1cm4gdC5jaG9pY2VJZD4tMT9lLm1hcChmdW5jdGlvbihlKXt2YXIgaT1lO3JldHVybiBpLmlkPT09cGFyc2VJbnQodC5jaG9pY2VJZCwxMCkmJihpLnNlbGVjdGVkPSExKSxpfSk6ZTtjYXNlXCJGSUxURVJfQ0hPSUNFU1wiOnJldHVybiBlLm1hcChmdW5jdGlvbihlKXt2YXIgaT1lO3JldHVybiBpLmFjdGl2ZT10LnJlc3VsdHMuc29tZShmdW5jdGlvbihlKXt2YXIgdD1lLml0ZW0sbj1lLnNjb3JlO3JldHVybiB0LmlkPT09aS5pZCYmKGkuc2NvcmU9biwhMCl9KSxpfSk7Y2FzZVwiQUNUSVZBVEVfQ0hPSUNFU1wiOnJldHVybiBlLm1hcChmdW5jdGlvbihlKXt2YXIgaT1lO3JldHVybiBpLmFjdGl2ZT10LmFjdGl2ZSxpfSk7Y2FzZVwiQ0xFQVJfQ0hPSUNFU1wiOnJldHVybiBuO2RlZmF1bHQ6cmV0dXJuIGV9fSx0LmRlZmF1bHRTdGF0ZT12b2lkIDA7dmFyIG49W107dC5kZWZhdWx0U3RhdGU9bn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVmYXVsdD10LmRlZmF1bHRTdGF0ZT12b2lkIDA7dmFyIG49e2xvYWRpbmc6ITF9O3QuZGVmYXVsdFN0YXRlPW47dmFyIG89ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bix0PWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwO3N3aXRjaCh0LnR5cGUpe2Nhc2VcIlNFVF9JU19MT0FESU5HXCI6cmV0dXJue2xvYWRpbmc6dC5pc0xvYWRpbmd9O2RlZmF1bHQ6cmV0dXJuIGV9fTt0LmRlZmF1bHQ9b30sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiRHJvcGRvd25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbi5kZWZhdWx0fX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiQ29udGFpbmVyXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG8uZGVmYXVsdH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIklucHV0XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHIuZGVmYXVsdH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIkxpc3RcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcy5kZWZhdWx0fX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiV3JhcHBlZElucHV0XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEuZGVmYXVsdH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIldyYXBwZWRTZWxlY3RcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYy5kZWZhdWx0fX0pO3ZhciBuPWwoaSgyMSkpLG89bChpKDIyKSkscj1sKGkoMjMpKSxzPWwoaSgyNCkpLGE9bChpKDI1KSksYz1sKGkoMjYpKTtmdW5jdGlvbiBsKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciBuPXRbaV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9dm9pZCAwO3ZhciBvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10LmVsZW1lbnQsbj10LnR5cGUsbz10LmNsYXNzTmFtZXM7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSxPYmplY3QuYXNzaWduKHRoaXMse2VsZW1lbnQ6aSx0eXBlOm4sY2xhc3NOYW1lczpvfSksdGhpcy5pc0FjdGl2ZT0hMX12YXIgdCxpLG87cmV0dXJuIHQ9ZSwoaT1be2tleTpcImRpc3RhbmNlRnJvbVRvcFdpbmRvd1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGltZW5zaW9ucz10aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksdGhpcy5wb3NpdGlvbj1NYXRoLmNlaWwodGhpcy5kaW1lbnNpb25zLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQrdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCksdGhpcy5wb3NpdGlvbn19LHtrZXk6XCJnZXRDaGlsZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihlKX19LHtrZXk6XCJzaG93XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmFjdGl2ZVN0YXRlKSx0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwidHJ1ZVwiKSx0aGlzLmlzQWN0aXZlPSEwLHRoaXN9fSx7a2V5OlwiaGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5hY3RpdmVTdGF0ZSksdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpLHRoaXMuaXNBY3RpdmU9ITEsdGhpc319XSkmJm4odC5wcm90b3R5cGUsaSksbyYmbih0LG8pLGV9KCk7dC5kZWZhdWx0PW99LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9dm9pZCAwO3ZhciBuPWkoMCk7ZnVuY3Rpb24gbyhlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgbj10W2ldO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBpPXQuZWxlbWVudCxuPXQudHlwZSxvPXQuY2xhc3NOYW1lcyxyPXQucG9zaXRpb247IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSxPYmplY3QuYXNzaWduKHRoaXMse2VsZW1lbnQ6aSxjbGFzc05hbWVzOm8sdHlwZTpuLHBvc2l0aW9uOnJ9KSx0aGlzLmlzT3Blbj0hMSx0aGlzLmlzRmxpcHBlZD0hMSx0aGlzLmlzRm9jdXNzZWQ9ITEsdGhpcy5pc0Rpc2FibGVkPSExLHRoaXMuaXNMb2FkaW5nPSExLHRoaXMuX29uRm9jdXM9dGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpLHRoaXMuX29uQmx1cj10aGlzLl9vbkJsdXIuYmluZCh0aGlzKX12YXIgdCxpLHI7cmV0dXJuIHQ9ZSwoaT1be2tleTpcImFkZEV2ZW50TGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsdGhpcy5fb25Gb2N1cyksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsdGhpcy5fb25CbHVyKX19LHtrZXk6XCJyZW1vdmVFdmVudExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLHRoaXMuX29uRm9jdXMpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMuX29uQmx1cil9fSx7a2V5Olwic2hvdWxkRmxpcFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTooMCxuLmdldFdpbmRvd0hlaWdodCkoKTtpZih2b2lkIDA9PT1lKXJldHVybiExO3ZhciBpPSExO3JldHVyblwiYXV0b1wiPT09dGhpcy5wb3NpdGlvbj9pPWU+PXQ6XCJ0b3BcIj09PXRoaXMucG9zaXRpb24mJihpPSEwKSxpfX0se2tleTpcInNldEFjdGl2ZURlc2NlbmRhbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIsZSl9fSx7a2V5OlwicmVtb3ZlQWN0aXZlRGVzY2VuZGFudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiKX19LHtrZXk6XCJvcGVuXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLm9wZW5TdGF0ZSksdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIiksdGhpcy5pc09wZW49ITAsdGhpcy5zaG91bGRGbGlwKGUpJiYodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmZsaXBwZWRTdGF0ZSksdGhpcy5pc0ZsaXBwZWQ9ITApfX0se2tleTpcImNsb3NlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMub3BlblN0YXRlKSx0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksdGhpcy5yZW1vdmVBY3RpdmVEZXNjZW5kYW50KCksdGhpcy5pc09wZW49ITEsdGhpcy5pc0ZsaXBwZWQmJih0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuZmxpcHBlZFN0YXRlKSx0aGlzLmlzRmxpcHBlZD0hMSl9fSx7a2V5OlwiZm9jdXNcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaXNGb2N1c3NlZHx8dGhpcy5lbGVtZW50LmZvY3VzKCl9fSx7a2V5OlwiYWRkRm9jdXNTdGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmZvY3VzU3RhdGUpfX0se2tleTpcInJlbW92ZUZvY3VzU3RhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5mb2N1c1N0YXRlKX19LHtrZXk6XCJlbmFibGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5kaXNhYmxlZFN0YXRlKSx0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKSxcInNlbGVjdC1vbmVcIj09PXRoaXMudHlwZSYmdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCIwXCIpLHRoaXMuaXNEaXNhYmxlZD0hMX19LHtrZXk6XCJkaXNhYmxlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuZGlzYWJsZWRTdGF0ZSksdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIiksXCJzZWxlY3Qtb25lXCI9PT10aGlzLnR5cGUmJnRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIiksdGhpcy5pc0Rpc2FibGVkPSEwfX0se2tleTpcIndyYXBcIix2YWx1ZTpmdW5jdGlvbihlKXsoMCxuLndyYXApKGUsdGhpcy5lbGVtZW50KX19LHtrZXk6XCJ1bndyYXBcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLmVsZW1lbnQpLHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCl9fSx7a2V5OlwiYWRkTG9hZGluZ1N0YXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMubG9hZGluZ1N0YXRlKSx0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1idXN5XCIsXCJ0cnVlXCIpLHRoaXMuaXNMb2FkaW5nPSEwfX0se2tleTpcInJlbW92ZUxvYWRpbmdTdGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmxvYWRpbmdTdGF0ZSksdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtYnVzeVwiKSx0aGlzLmlzTG9hZGluZz0hMX19LHtrZXk6XCJfb25Gb2N1c1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5pc0ZvY3Vzc2VkPSEwfX0se2tleTpcIl9vbkJsdXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaXNGb2N1c3NlZD0hMX19XSkmJm8odC5wcm90b3R5cGUsaSksciYmbyh0LHIpLGV9KCk7dC5kZWZhdWx0PXJ9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9dm9pZCAwO3ZhciBuPWkoMCk7ZnVuY3Rpb24gbyhlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgbj10W2ldO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBpPXQuZWxlbWVudCxuPXQudHlwZSxvPXQuY2xhc3NOYW1lcyxyPXQucGxhY2Vob2xkZXJWYWx1ZTshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLE9iamVjdC5hc3NpZ24odGhpcyx7ZWxlbWVudDppLHR5cGU6bixjbGFzc05hbWVzOm8scGxhY2Vob2xkZXJWYWx1ZTpyfSksdGhpcy5lbGVtZW50PWksdGhpcy5jbGFzc05hbWVzPW8sdGhpcy5pc0ZvY3Vzc2VkPXRoaXMuZWxlbWVudD09PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsdGhpcy5pc0Rpc2FibGVkPSExLHRoaXMuX29uUGFzdGU9dGhpcy5fb25QYXN0ZS5iaW5kKHRoaXMpLHRoaXMuX29uSW5wdXQ9dGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpLHRoaXMuX29uRm9jdXM9dGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpLHRoaXMuX29uQmx1cj10aGlzLl9vbkJsdXIuYmluZCh0aGlzKX12YXIgdCxpLHI7cmV0dXJuIHQ9ZSwoaT1be2tleTpcImFkZEV2ZW50TGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsdGhpcy5fb25JbnB1dCksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLHRoaXMuX29uUGFzdGUpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIix0aGlzLl9vbkZvY3VzKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIix0aGlzLl9vbkJsdXIpLHRoaXMuZWxlbWVudC5mb3JtJiZ0aGlzLmVsZW1lbnQuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIix0aGlzLl9vbkZvcm1SZXNldCl9fSx7a2V5OlwicmVtb3ZlRXZlbnRMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIix0aGlzLl9vbklucHV0KSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsdGhpcy5fb25QYXN0ZSksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLHRoaXMuX29uRm9jdXMpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMuX29uQmx1ciksdGhpcy5lbGVtZW50LmZvcm0mJnRoaXMuZWxlbWVudC5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLHRoaXMuX29uRm9ybVJlc2V0KX19LHtrZXk6XCJlbmFibGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSx0aGlzLmlzRGlzYWJsZWQ9ITF9fSx7a2V5OlwiZGlzYWJsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIiksdGhpcy5pc0Rpc2FibGVkPSEwfX0se2tleTpcImZvY3VzXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmlzRm9jdXNzZWR8fHRoaXMuZWxlbWVudC5mb2N1cygpfX0se2tleTpcImJsdXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaXNGb2N1c3NlZCYmdGhpcy5lbGVtZW50LmJsdXIoKX19LHtrZXk6XCJjbGVhclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9IShhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSl8fGFyZ3VtZW50c1swXTtyZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlJiYodGhpcy5lbGVtZW50LnZhbHVlPVwiXCIpLGUmJnRoaXMuc2V0V2lkdGgoKSx0aGlzfX0se2tleTpcInNldFdpZHRoXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPWZ1bmN0aW9uKGUpe3QuZWxlbWVudC5zdHlsZS53aWR0aD1lfTtpZih0aGlzLl9wbGFjZWhvbGRlclZhbHVlKXt2YXIgbj10aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoPj10aGlzLl9wbGFjZWhvbGRlclZhbHVlLmxlbmd0aC8xLjI1Oyh0aGlzLmVsZW1lbnQudmFsdWUmJm58fGUpJiZ0aGlzLmNhbGNXaWR0aChpKX1lbHNlIHRoaXMuY2FsY1dpZHRoKGkpfX0se2tleTpcImNhbGNXaWR0aFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybigwLG4uY2FsY1dpZHRoT2ZJbnB1dCkodGhpcy5lbGVtZW50LGUpfX0se2tleTpcInNldEFjdGl2ZURlc2NlbmRhbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIsZSl9fSx7a2V5OlwicmVtb3ZlQWN0aXZlRGVzY2VuZGFudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiKX19LHtrZXk6XCJfb25JbnB1dFwiLHZhbHVlOmZ1bmN0aW9uKCl7XCJzZWxlY3Qtb25lXCIhPT10aGlzLnR5cGUmJnRoaXMuc2V0V2lkdGgoKX19LHtrZXk6XCJfb25QYXN0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe2UudGFyZ2V0PT09dGhpcy5lbGVtZW50JiZ0aGlzLnByZXZlbnRQYXN0ZSYmZS5wcmV2ZW50RGVmYXVsdCgpfX0se2tleTpcIl9vbkZvY3VzXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmlzRm9jdXNzZWQ9ITB9fSx7a2V5OlwiX29uQmx1clwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5pc0ZvY3Vzc2VkPSExfX0se2tleTpcInBsYWNlaG9sZGVyXCIsc2V0OmZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5wbGFjZWhvbGRlcj1lfX0se2tleTpcInZhbHVlXCIsc2V0OmZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC52YWx1ZT1lfSxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4oMCxuLnNhbml0aXNlKSh0aGlzLmVsZW1lbnQudmFsdWUpfX1dKSYmbyh0LnByb3RvdHlwZSxpKSxyJiZvKHQsciksZX0oKTt0LmRlZmF1bHQ9cn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVmYXVsdD12b2lkIDA7dmFyIG49aSgxKTtmdW5jdGlvbiBvKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciBuPXRbaV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX12YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIGk9dC5lbGVtZW50OyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksT2JqZWN0LmFzc2lnbih0aGlzLHtlbGVtZW50Oml9KSx0aGlzLnNjcm9sbFBvcz10aGlzLmVsZW1lbnQuc2Nyb2xsVG9wLHRoaXMuaGVpZ2h0PXRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQsdGhpcy5oYXNDaGlsZHJlbj0hIXRoaXMuZWxlbWVudC5jaGlsZHJlbn12YXIgdCxpLHI7cmV0dXJuIHQ9ZSwoaT1be2tleTpcImNsZWFyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuaW5uZXJIVE1MPVwiXCJ9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGUpfX0se2tleTpcImdldENoaWxkXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGUpfX0se2tleTpcInNjcm9sbFRvVG9wXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wPTB9fSx7a2V5Olwic2Nyb2xsVG9DaG9pY2VcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBpPXRoaXM7aWYoZSl7dmFyIG49dGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCxvPWUub2Zmc2V0SGVpZ2h0LHI9ZS5vZmZzZXRUb3ArbyxzPXRoaXMuZWxlbWVudC5zY3JvbGxUb3ArbixhPXQ+MD90aGlzLmVsZW1lbnQuc2Nyb2xsVG9wK3ItczplLm9mZnNldFRvcDtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oZSl7aS5fYW5pbWF0ZVNjcm9sbChlLGEsdCl9KX19fSx7a2V5OlwiX3Njcm9sbERvd25cIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7dmFyIG49KGktZSkvdCxvPW4+MT9uOjE7dGhpcy5lbGVtZW50LnNjcm9sbFRvcD1lK299fSx7a2V5OlwiX3Njcm9sbFVwXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPShlLWkpL3Qsbz1uPjE/bjoxO3RoaXMuZWxlbWVudC5zY3JvbGxUb3A9ZS1vfX0se2tleTpcIl9hbmltYXRlU2Nyb2xsXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LGkpe3ZhciBvPXRoaXMscj1uLlNDUk9MTElOR19TUEVFRCxzPXRoaXMuZWxlbWVudC5zY3JvbGxUb3AsYT0hMTtpPjA/KHRoaXMuX3Njcm9sbERvd24ocyxyLHQpLHM8dCYmKGE9ITApKToodGhpcy5fc2Nyb2xsVXAocyxyLHQpLHM+dCYmKGE9ITApKSxhJiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtvLl9hbmltYXRlU2Nyb2xsKGUsdCxpKX0pfX1dKSYmbyh0LnByb3RvdHlwZSxpKSxyJiZvKHQsciksZX0oKTt0LmRlZmF1bHQ9cn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVmYXVsdD12b2lkIDA7dmFyIG4sbz0obj1pKDQpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn07ZnVuY3Rpb24gcihlKXtyZXR1cm4ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9ZnVuY3Rpb24gcyhlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgbj10W2ldO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19ZnVuY3Rpb24gYShlLHQpe3JldHVybiF0fHxcIm9iamVjdFwiIT09cih0KSYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9mdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gZX0oZSk6dH1mdW5jdGlvbiBjKGUsdCxpKXtyZXR1cm4oYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5nZXQ/UmVmbGVjdC5nZXQ6ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPWZ1bmN0aW9uKGUsdCl7Zm9yKDshT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCkmJm51bGwhPT0oZT1sKGUpKTspO3JldHVybiBlfShlLHQpO2lmKG4pe3ZhciBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobix0KTtyZXR1cm4gby5nZXQ/by5nZXQuY2FsbChpKTpvLnZhbHVlfX0pKGUsdCxpfHxlKX1mdW5jdGlvbiBsKGUpe3JldHVybihsPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSl9KShlKX1mdW5jdGlvbiB1KGUsdCl7cmV0dXJuKHU9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbihlLHQpe3JldHVybiBlLl9fcHJvdG9fXz10LGV9KShlLHQpfXZhciBoPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7dmFyIGksbj1lLmVsZW1lbnQsbz1lLmNsYXNzTmFtZXMscj1lLmRlbGltaXRlcjtyZXR1cm4gZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpLChpPWEodGhpcyxsKHQpLmNhbGwodGhpcyx7ZWxlbWVudDpuLGNsYXNzTmFtZXM6b30pKSkuZGVsaW1pdGVyPXIsaX12YXIgaSxuLHI7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiZ1KGUsdCl9KHQsby5kZWZhdWx0KSxpPXQsKG49W3trZXk6XCJ2YWx1ZVwiLHNldDpmdW5jdGlvbihlKXt2YXIgdD1lLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS52YWx1ZX0pLmpvaW4odGhpcy5kZWxpbWl0ZXIpO3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLHQpLHRoaXMuZWxlbWVudC52YWx1ZT10fSxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYyhsKHQucHJvdG90eXBlKSxcInZhbHVlXCIsdGhpcyl9fV0pJiZzKGkucHJvdG90eXBlLG4pLHImJnMoaSxyKSx0fSgpO3QuZGVmYXVsdD1ofSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PXZvaWQgMDt2YXIgbj1yKGkoNCkpLG89cihpKDUpKTtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBzKGUpe3JldHVybihzPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiBhKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciBuPXRbaV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1mdW5jdGlvbiBjKGUsdCl7cmV0dXJuIXR8fFwib2JqZWN0XCIhPT1zKHQpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2Z1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiBlfShlKTp0fWZ1bmN0aW9uIGwoZSl7cmV0dXJuKGw9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKX0pKGUpfWZ1bmN0aW9uIHUoZSx0KXtyZXR1cm4odT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuX19wcm90b19fPXQsZX0pKGUsdCl9dmFyIGg9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXt2YXIgaT1lLmVsZW1lbnQsbj1lLmNsYXNzTmFtZXM7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyx0KSxjKHRoaXMsbCh0KS5jYWxsKHRoaXMse2VsZW1lbnQ6aSxjbGFzc05hbWVzOm59KSl9dmFyIGkscixzO3JldHVybiBmdW5jdGlvbihlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmdShlLHQpfSh0LG4uZGVmYXVsdCksaT10LChyPVt7a2V5OlwiYXBwZW5kRG9jRnJhZ21lbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQuaW5uZXJIVE1MPVwiXCIsdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGUpfX0se2tleTpcInBsYWNlaG9sZGVyT3B0aW9uXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwib3B0aW9uW3BsYWNlaG9sZGVyXVwiKX19LHtrZXk6XCJvcHRpb25Hcm91cHNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJPUFRHUk9VUFwiKSl9fSx7a2V5Olwib3B0aW9uc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5vcHRpb25zKX0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtlLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGk9ZSxuPW8uZGVmYXVsdC5vcHRpb24oaSksdm9pZCB0LmFwcGVuZENoaWxkKG4pO3ZhciBpLG59KSx0aGlzLmFwcGVuZERvY0ZyYWdtZW50KHQpfX1dKSYmYShpLnByb3RvdHlwZSxyKSxzJiZhKGkscyksdH0oKTt0LmRlZmF1bHQ9aH0sZnVuY3Rpb24oZSx0LGkpe3ZhciBuO1xuLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuIWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9e30uaGFzT3duUHJvcGVydHk7ZnVuY3Rpb24gbygpe2Zvcih2YXIgZT1bXSx0PTA7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2lmKG4pe3ZhciByPXR5cGVvZiBuO2lmKFwic3RyaW5nXCI9PT1yfHxcIm51bWJlclwiPT09cillLnB1c2gobik7ZWxzZSBpZihBcnJheS5pc0FycmF5KG4pJiZuLmxlbmd0aCl7dmFyIHM9by5hcHBseShudWxsLG4pO3MmJmUucHVzaChzKX1lbHNlIGlmKFwib2JqZWN0XCI9PT1yKWZvcih2YXIgYSBpbiBuKWkuY2FsbChuLGEpJiZuW2FdJiZlLnB1c2goYSl9fXJldHVybiBlLmpvaW4oXCIgXCIpfWUuZXhwb3J0cz8oby5kZWZhdWx0PW8sZS5leHBvcnRzPW8pOnZvaWQgMD09PShuPWZ1bmN0aW9uKCl7cmV0dXJuIG99LmFwcGx5KHQsW10pKXx8KGUuZXhwb3J0cz1uKX0oKX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuY2xlYXJDaG9pY2VzPXQuYWN0aXZhdGVDaG9pY2VzPXQuZmlsdGVyQ2hvaWNlcz10LmFkZENob2ljZT12b2lkIDA7dmFyIG49aSgxKTt0LmFkZENob2ljZT1mdW5jdGlvbihlKXt2YXIgdD1lLnZhbHVlLGk9ZS5sYWJlbCxvPWUuaWQscj1lLmdyb3VwSWQscz1lLmRpc2FibGVkLGE9ZS5lbGVtZW50SWQsYz1lLmN1c3RvbVByb3BlcnRpZXMsbD1lLnBsYWNlaG9sZGVyLHU9ZS5rZXlDb2RlO3JldHVybnt0eXBlOm4uQUNUSU9OX1RZUEVTLkFERF9DSE9JQ0UsdmFsdWU6dCxsYWJlbDppLGlkOm8sZ3JvdXBJZDpyLGRpc2FibGVkOnMsZWxlbWVudElkOmEsY3VzdG9tUHJvcGVydGllczpjLHBsYWNlaG9sZGVyOmwsa2V5Q29kZTp1fX07dC5maWx0ZXJDaG9pY2VzPWZ1bmN0aW9uKGUpe3JldHVybnt0eXBlOm4uQUNUSU9OX1RZUEVTLkZJTFRFUl9DSE9JQ0VTLHJlc3VsdHM6ZX19O3QuYWN0aXZhdGVDaG9pY2VzPWZ1bmN0aW9uKCl7dmFyIGU9IShhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSl8fGFyZ3VtZW50c1swXTtyZXR1cm57dHlwZTpuLkFDVElPTl9UWVBFUy5BQ1RJVkFURV9DSE9JQ0VTLGFjdGl2ZTplfX07dC5jbGVhckNob2ljZXM9ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpuLkFDVElPTl9UWVBFUy5DTEVBUl9DSE9JQ0VTfX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmhpZ2hsaWdodEl0ZW09dC5yZW1vdmVJdGVtPXQuYWRkSXRlbT12b2lkIDA7dmFyIG49aSgxKTt0LmFkZEl0ZW09ZnVuY3Rpb24oZSl7dmFyIHQ9ZS52YWx1ZSxpPWUubGFiZWwsbz1lLmlkLHI9ZS5jaG9pY2VJZCxzPWUuZ3JvdXBJZCxhPWUuY3VzdG9tUHJvcGVydGllcyxjPWUucGxhY2Vob2xkZXIsbD1lLmtleUNvZGU7cmV0dXJue3R5cGU6bi5BQ1RJT05fVFlQRVMuQUREX0lURU0sdmFsdWU6dCxsYWJlbDppLGlkOm8sY2hvaWNlSWQ6cixncm91cElkOnMsY3VzdG9tUHJvcGVydGllczphLHBsYWNlaG9sZGVyOmMsa2V5Q29kZTpsfX07dC5yZW1vdmVJdGVtPWZ1bmN0aW9uKGUsdCl7cmV0dXJue3R5cGU6bi5BQ1RJT05fVFlQRVMuUkVNT1ZFX0lURU0saWQ6ZSxjaG9pY2VJZDp0fX07dC5oaWdobGlnaHRJdGVtPWZ1bmN0aW9uKGUsdCl7cmV0dXJue3R5cGU6bi5BQ1RJT05fVFlQRVMuSElHSExJR0hUX0lURU0saWQ6ZSxoaWdobGlnaHRlZDp0fX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmFkZEdyb3VwPXZvaWQgMDt2YXIgbj1pKDEpO3QuYWRkR3JvdXA9ZnVuY3Rpb24oZSx0LGksbyl7cmV0dXJue3R5cGU6bi5BQ1RJT05fVFlQRVMuQUREX0dST1VQLHZhbHVlOmUsaWQ6dCxhY3RpdmU6aSxkaXNhYmxlZDpvfX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LnJlc2V0VG89dC5jbGVhckFsbD12b2lkIDA7dC5jbGVhckFsbD1mdW5jdGlvbigpe3JldHVybnt0eXBlOlwiQ0xFQVJfQUxMXCJ9fTt0LnJlc2V0VG89ZnVuY3Rpb24oZSl7cmV0dXJue3R5cGU6XCJSRVNFVF9UT1wiLHN0YXRlOmV9fX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuc2V0SXNMb2FkaW5nPXZvaWQgMDt0LnNldElzTG9hZGluZz1mdW5jdGlvbihlKXtyZXR1cm57dHlwZTpcIlNFVF9JU19MT0FESU5HXCIsaXNMb2FkaW5nOmV9fX1dKX0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuSU1hc2sgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgY2VpbCA9IE1hdGguY2VpbDtcbiAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjsgLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxuXG4gIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbiAgfTtcblxuICB2YXIgbWluID0gTWF0aC5taW47IC8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5cbiAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXIoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbiAgfTtcblxuICAvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbiAgdmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgICByZXR1cm4gaXQ7XG4gIH07XG5cbiAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcblxuXG4gIHZhciBzdHJpbmdSZXBlYXQgPSAnJy5yZXBlYXQgfHwgZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gICAgdmFyIHN0ciA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIG4gPSB0b0ludGVnZXIoY291bnQpO1xuICAgIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcblxuICAgIGZvciAoOyBuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpIGlmIChuICYgMSkgcmVzdWx0ICs9IHN0cjtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcblxuXG5cblxuXG5cbiAgdmFyIHN0cmluZ1BhZCA9IGZ1bmN0aW9uICh0aGF0LCBtYXhMZW5ndGgsIGZpbGxTdHJpbmcsIGxlZnQpIHtcbiAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoYXQpKTtcbiAgICB2YXIgc3RyaW5nTGVuZ3RoID0gUy5sZW5ndGg7XG4gICAgdmFyIGZpbGxTdHIgPSBmaWxsU3RyaW5nID09PSB1bmRlZmluZWQgPyAnICcgOiBTdHJpbmcoZmlsbFN0cmluZyk7XG4gICAgdmFyIGludE1heExlbmd0aCA9IHRvTGVuZ3RoKG1heExlbmd0aCk7XG4gICAgdmFyIGZpbGxMZW4sIHN0cmluZ0ZpbGxlcjtcbiAgICBpZiAoaW50TWF4TGVuZ3RoIDw9IHN0cmluZ0xlbmd0aCB8fCBmaWxsU3RyID09ICcnKSByZXR1cm4gUztcbiAgICBmaWxsTGVuID0gaW50TWF4TGVuZ3RoIC0gc3RyaW5nTGVuZ3RoO1xuICAgIHN0cmluZ0ZpbGxlciA9IHN0cmluZ1JlcGVhdC5jYWxsKGZpbGxTdHIsIE1hdGguY2VpbChmaWxsTGVuIC8gZmlsbFN0ci5sZW5ndGgpKTtcbiAgICBpZiAoc3RyaW5nRmlsbGVyLmxlbmd0aCA+IGZpbGxMZW4pIHN0cmluZ0ZpbGxlciA9IHN0cmluZ0ZpbGxlci5zbGljZSgwLCBmaWxsTGVuKTtcbiAgICByZXR1cm4gbGVmdCA/IHN0cmluZ0ZpbGxlciArIFMgOiBTICsgc3RyaW5nRmlsbGVyO1xuICB9O1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG4gIHZhciBnbG9iYWwkMSA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIHdpbmRvdy5NYXRoID09IE1hdGggPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4gIHZhciBuYXZpZ2F0b3IgPSBnbG9iYWwkMS5uYXZpZ2F0b3I7XG4gIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMjgwXG4gICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby11bnNhZmUtcmVnZXhcblxuXG4gIHZhciB3ZWJraXRTdHJpbmdQYWRCdWcgPSAvVmVyc2lvblxcLzEwXFwuXFxkKyhcXC5cXGQrKT8oIE1vYmlsZVxcL1xcdyspPyBTYWZhcmlcXC8vLnRlc3QodXNlckFnZW50KTtcblxuICB2YXIgZmFpbHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gISFleGVjKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG4gIHZhciBkZXNjcmlwdG9ycyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIDc7XG4gICAgICB9XG4gICAgfSkuYSAhPSA3O1xuICB9KTtcblxuICB2YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgdmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IC8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xuXG4gIHZhciBOQVNIT1JOX0JVRyA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7XG4gICAgMTogMlxuICB9LCAxKTtcbiAgdmFyIGYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbiAgfSA6IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4gIHZhciBvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHtcbiAgXHRmOiBmXG4gIH07XG5cbiAgdmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbiAgdmFyIGNsYXNzb2ZSYXcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xuICB9O1xuXG4gIC8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5cblxuXG5cbiAgdmFyIHNwbGl0ID0gJycuc3BsaXQ7XG4gIHZhciBpbmRleGVkT2JqZWN0ID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbiAgfSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gY2xhc3NvZlJhdyhpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xuICB9IDogT2JqZWN0O1xuXG4gIC8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG5cblxuXG5cbiAgdmFyIHRvSW5kZXhlZE9iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbiAgfTtcblxuICB2YXIgaXNPYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xuICB9O1xuXG4gIC8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxuICAgLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2VcbiAgLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcblxuXG4gIHZhciB0b1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChpdCwgUykge1xuICAgIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gICAgdmFyIGZuLCB2YWw7XG4gICAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gICAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gICAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfTtcblxuICB2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICB2YXIgaGFzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbiAgfTtcblxuICB2YXIgZG9jdW1lbnQkMSA9IGdsb2JhbCQxLmRvY3VtZW50OyAvLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcblxuXG4gIHZhciBleGlzdCA9IGlzT2JqZWN0KGRvY3VtZW50JDEpICYmIGlzT2JqZWN0KGRvY3VtZW50JDEuY3JlYXRlRWxlbWVudCk7XG5cbiAgdmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBleGlzdCA/IGRvY3VtZW50JDEuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbiAgfTtcblxuICAvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG4gIHZhciBpZThEb21EZWZpbmUgPSAhZGVzY3JpcHRvcnMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiA3O1xuICAgICAgfVxuICAgIH0pLmEgIT0gNztcbiAgfSk7XG5cbiAgdmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciQxID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgdmFyIGYkMSA9IGRlc2NyaXB0b3JzID8gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJDEgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICAgIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gICAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICAgIGlmIChpZThEb21EZWZpbmUpIHRyeSB7XG4gICAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJDEoTywgUCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8qIGVtcHR5ICovXG4gICAgfVxuICAgIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIW9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG4gIH07XG5cbiAgdmFyIG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHtcbiAgXHRmOiBmJDFcbiAgfTtcblxuICB2YXIgYW5PYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXQ7XG4gIH07XG5cbiAgdmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICB2YXIgZiQyID0gZGVzY3JpcHRvcnMgPyBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gICAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gICAgaWYgKGllOERvbURlZmluZSkgdHJ5IHtcbiAgICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLyogZW1wdHkgKi9cbiAgICB9XG4gICAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICAgIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgIHJldHVybiBPO1xuICB9O1xuXG4gIHZhciBvYmplY3REZWZpbmVQcm9wZXJ0eSA9IHtcbiAgXHRmOiBmJDJcbiAgfTtcblxuICB2YXIgaGlkZSA9IGRlc2NyaXB0b3JzID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBvYmplY3REZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbiAgfSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuICBcdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHZhciBzZXRHbG9iYWwgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICBoaWRlKGdsb2JhbCQxLCBrZXksIHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZ2xvYmFsJDFba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICB2YXIgc2hhcmVkID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICB2YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG4gIHZhciBzdG9yZSA9IGdsb2JhbCQxW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xuICB9KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gICAgdmVyc2lvbjogJzMuMC4xJyxcbiAgICBtb2RlOiAnZ2xvYmFsJyxcbiAgICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xuICB9KTtcbiAgfSk7XG5cbiAgdmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBzaGFyZWQoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG5cbiAgdmFyIFdlYWtNYXAgPSBnbG9iYWwkMS5XZWFrTWFwO1xuXG4gIHZhciBuYXRpdmVXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChXZWFrTWFwKSk7XG5cbiAgdmFyIGlkID0gMDtcbiAgdmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG4gIHZhciB1aWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNikpO1xuICB9O1xuXG4gIHZhciBzaGFyZWQkMSA9IHNoYXJlZCgna2V5cycpO1xuXG5cblxuICB2YXIgc2hhcmVkS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzaGFyZWQkMVtrZXldIHx8IChzaGFyZWQkMVtrZXldID0gdWlkKGtleSkpO1xuICB9O1xuXG4gIHZhciBoaWRkZW5LZXlzID0ge307XG5cbiAgdmFyIFdlYWtNYXAkMSA9IGdsb2JhbCQxLldlYWtNYXA7XG5cbiAgdmFyIHNldCwgZ2V0LCBoYXMkMTtcblxuICB2YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXMkMShpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG4gIH07XG5cbiAgdmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgICAgdmFyIHN0YXRlO1xuXG4gICAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG4gIH07XG5cbiAgaWYgKG5hdGl2ZVdlYWtNYXApIHtcbiAgICB2YXIgc3RvcmUgPSBuZXcgV2Vha01hcCQxKCk7XG4gICAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICAgIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG5cbiAgICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgICAgcmV0dXJuIG1ldGFkYXRhO1xuICAgIH07XG5cbiAgICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gICAgfTtcblxuICAgIGhhcyQxID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICAgIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcblxuICAgIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICAgIGhpZGUoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgICByZXR1cm4gbWV0YWRhdGE7XG4gICAgfTtcblxuICAgIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIGhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gICAgfTtcblxuICAgIGhhcyQxID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICByZXR1cm4gaGFzKGl0LCBTVEFURSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBpbnRlcm5hbFN0YXRlID0ge1xuICAgIHNldDogc2V0LFxuICAgIGdldDogZ2V0LFxuICAgIGhhczogaGFzJDEsXG4gICAgZW5mb3JjZTogZW5mb3JjZSxcbiAgICBnZXR0ZXJGb3I6IGdldHRlckZvclxuICB9O1xuXG4gIHZhciByZWRlZmluZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlLmdldDtcbiAgdmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZS5lbmZvcmNlO1xuICB2YXIgVEVNUExBVEUgPSBTdHJpbmcoZnVuY3Rpb25Ub1N0cmluZykuc3BsaXQoJ3RvU3RyaW5nJyk7XG5cbiAgc2hhcmVkKCdpbnNwZWN0U291cmNlJywgZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG4gIH0pO1xuXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gICAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICAgIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkgaGlkZSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgICAgZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6ICcnKTtcbiAgICB9XG5cbiAgICBpZiAoTyA9PT0gZ2xvYmFsJDEpIHtcbiAgICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO2Vsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICB9IGVsc2UgaWYgKCFub1RhcmdldEdldCAmJiBPW2tleV0pIHtcbiAgICAgIHNpbXBsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7ZWxzZSBoaWRlKE8sIGtleSwgdmFsdWUpOyAvLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbiAgfSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBmdW5jdGlvblRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH0pO1xuICB9KTtcblxuICB2YXIgbWF4ID0gTWF0aC5tYXg7XG4gIHZhciBtaW4kMSA9IE1hdGgubWluOyAvLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbiAgLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuICAvLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihsZW5ndGgsIGxlbmd0aCkuXG5cbiAgdmFyIHRvQWJzb2x1dGVJbmRleCA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gICAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICAgIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbiQxKGludGVnZXIsIGxlbmd0aCk7XG4gIH07XG5cbiAgLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbiAgLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICAvLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcblxuXG4gIHZhciBhcnJheUluY2x1ZGVzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgICB2YXIgdmFsdWU7IC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcblxuICAgICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSBPW2luZGV4KytdOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG5cbiAgICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTsgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgICAgfSBlbHNlIGZvciAoOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGFycmF5SW5kZXhPZiA9IGFycmF5SW5jbHVkZXMoZmFsc2UpO1xuXG5cblxuICB2YXIgb2JqZWN0S2V5c0ludGVybmFsID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcblxuICAgIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpOyAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG5cblxuICAgIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG4gIHZhciBlbnVtQnVnS2V5cyA9IFsnY29uc3RydWN0b3InLCAnaGFzT3duUHJvcGVydHknLCAnaXNQcm90b3R5cGVPZicsICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICd0b0xvY2FsZVN0cmluZycsICd0b1N0cmluZycsICd2YWx1ZU9mJ107XG5cbiAgLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuXG5cbiAgdmFyIGhpZGRlbktleXMkMSA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4gIHZhciBmJDMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgICByZXR1cm4gb2JqZWN0S2V5c0ludGVybmFsKE8sIGhpZGRlbktleXMkMSk7XG4gIH07XG5cbiAgdmFyIG9iamVjdEdldE93blByb3BlcnR5TmFtZXMgPSB7XG4gIFx0ZjogZiQzXG4gIH07XG5cbiAgdmFyIGYkNCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgdmFyIG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyA9IHtcbiAgXHRmOiBmJDRcbiAgfTtcblxuICB2YXIgUmVmbGVjdCQxID0gZ2xvYmFsJDEuUmVmbGVjdDsgLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xuXG5cbiAgdmFyIG93bktleXMgPSBSZWZsZWN0JDEgJiYgUmVmbGVjdCQxLm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICAgIHZhciBrZXlzID0gb2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcy5mKGFuT2JqZWN0KGl0KSk7XG4gICAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scy5mO1xuICAgIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG4gIH07XG5cbiAgdmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgICB2YXIgZGVmaW5lUHJvcGVydHkgPSBvYmplY3REZWZpbmVQcm9wZXJ0eS5mO1xuICAgIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuZjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxuICB2YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gICAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICAgIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWUgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZSA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbikgOiAhIWRldGVjdGlvbjtcbiAgfTtcblxuICB2YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgdmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG4gIHZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG4gIHZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuICB2YXIgaXNGb3JjZWRfMSA9IGlzRm9yY2VkO1xuXG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuZjtcblxuXG5cblxuXG5cblxuXG5cblxuICAvKlxuICAgIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gICAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICAgIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gICAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICAgIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICAgIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gICAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICAqL1xuXG5cbiAgdmFyIF9leHBvcnQgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gICAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICAgIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG5cbiAgICBpZiAoR0xPQkFMKSB7XG4gICAgICB0YXJnZXQgPSBnbG9iYWwkMTtcbiAgICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgICAgdGFyZ2V0ID0gZ2xvYmFsJDFbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldCA9IChnbG9iYWwkMVtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblxuICAgICAgRk9SQ0VEID0gaXNGb3JjZWRfMShHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpOyAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG5cbiAgICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgICAgfSAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG5cblxuICAgICAgaWYgKG9wdGlvbnMuc2hhbSB8fCB0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSB7XG4gICAgICAgIGhpZGUoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgICB9IC8vIGV4dGVuZCBnbG9iYWxcblxuXG4gICAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5wYWRFbmRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnBhZGVuZFxuXG5cbiAgX2V4cG9ydCh7XG4gICAgdGFyZ2V0OiAnU3RyaW5nJyxcbiAgICBwcm90bzogdHJ1ZSxcbiAgICBmb3JjZWQ6IHdlYmtpdFN0cmluZ1BhZEJ1Z1xuICB9LCB7XG4gICAgcGFkRW5kOiBmdW5jdGlvbiBwYWRFbmQobWF4TGVuZ3RoXG4gICAgLyogLCBmaWxsU3RyaW5nID0gJyAnICovXG4gICAgKSB7XG4gICAgICByZXR1cm4gc3RyaW5nUGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnBhZFN0YXJ0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5wYWRzdGFydFxuXG5cbiAgX2V4cG9ydCh7XG4gICAgdGFyZ2V0OiAnU3RyaW5nJyxcbiAgICBwcm90bzogdHJ1ZSxcbiAgICBmb3JjZWQ6IHdlYmtpdFN0cmluZ1BhZEJ1Z1xuICB9LCB7XG4gICAgcGFkU3RhcnQ6IGZ1bmN0aW9uIHBhZFN0YXJ0KG1heExlbmd0aFxuICAgIC8qICwgZmlsbFN0cmluZyA9ICcgJyAqL1xuICAgICkge1xuICAgICAgcmV0dXJuIHN0cmluZ1BhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG4gIF9leHBvcnQoe1xuICAgIHRhcmdldDogJ1N0cmluZycsXG4gICAgcHJvdG86IHRydWVcbiAgfSwge1xuICAgIHJlcGVhdDogc3RyaW5nUmVwZWF0XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gICAgfTtcbiAgICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICAgIG8uX19wcm90b19fID0gcDtcbiAgICAgIHJldHVybiBvO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICAgIHZhciB0YXJnZXQgPSB7fTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgICB2YXIga2V5LCBpO1xuXG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgICByZXR1cm4gY2FsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0JDEodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Quc2V0KSB7XG4gICAgICBzZXQkMSA9IFJlZmxlY3Quc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXQkMSA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgICB2YXIgZGVzYztcblxuICAgICAgICBpZiAoYmFzZSkge1xuICAgICAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgICAgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgICBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2RlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzZXQkMSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIGlzU3RyaWN0KSB7XG4gICAgdmFyIHMgPSBzZXQkMSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcblxuICAgIGlmICghcyAmJiBpc1N0cmljdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gc2V0IHByb3BlcnR5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgfVxuXG4gIC8qKiBDaGVja3MgaWYgdmFsdWUgaXMgc3RyaW5nICovXG4gIGZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fCBzdHIgaW5zdGFuY2VvZiBTdHJpbmc7XG4gIH1cbiAgLyoqXHJcbiAgICBEaXJlY3Rpb25cclxuICAgIEBwcm9wIHtzdHJpbmd9IE5PTkVcclxuICAgIEBwcm9wIHtzdHJpbmd9IExFRlRcclxuICAgIEBwcm9wIHtzdHJpbmd9IEZPUkNFX0xFRlRcclxuICAgIEBwcm9wIHtzdHJpbmd9IFJJR0hUXHJcbiAgICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9SSUdIVFxyXG4gICovXG5cbiAgdmFyIERJUkVDVElPTiA9IHtcbiAgICBOT05FOiAnTk9ORScsXG4gICAgTEVGVDogJ0xFRlQnLFxuICAgIEZPUkNFX0xFRlQ6ICdGT1JDRV9MRUZUJyxcbiAgICBSSUdIVDogJ1JJR0hUJyxcbiAgICBGT1JDRV9SSUdIVDogJ0ZPUkNFX1JJR0hUJ1xuICAgIC8qKlxyXG4gICAgICBEaXJlY3Rpb25cclxuICAgICAgQGVudW0ge3N0cmluZ31cclxuICAgICovXG5cbiAgfTtcbiAgLyoqICovXG5cbiAgZnVuY3Rpb24gZm9yY2VEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgIHJldHVybiBESVJFQ1RJT04uRk9SQ0VfTEVGVDtcblxuICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIHJldHVybiBESVJFQ1RJT04uRk9SQ0VfUklHSFQ7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfVxuICB9XG4gIC8qKiBFc2NhcGVzIHJlZ3VsYXIgZXhwcmVzc2lvbiBjb250cm9sIGNoYXJzICovXG5cbiAgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF0vXFxcXF0pL2csICdcXFxcJDEnKTtcbiAgfSAvLyBjbG9uZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXBvYmVyZXpraW4vZmFzdC1kZWVwLWVxdWFsIHdpdGggc21hbGwgY2hhbmdlc1xuXG4gIGZ1bmN0aW9uIG9iamVjdEluY2x1ZGVzKGIsIGEpIHtcbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gICAgdmFyIGFyckEgPSBBcnJheS5pc0FycmF5KGEpLFxuICAgICAgICBhcnJCID0gQXJyYXkuaXNBcnJheShiKSxcbiAgICAgICAgaTtcblxuICAgIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIW9iamVjdEluY2x1ZGVzKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChhICYmIGIgJiYgX3R5cGVvZihhKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZihiKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlLFxuICAgICAgICAgIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XG4gICAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcbiAgICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwLFxuICAgICAgICAgIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xuICAgICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG4gICAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpOyAvLyBpZiAoa2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIW9iamVjdEluY2x1ZGVzKGJba2V5c1tpXV0sIGFba2V5c1tpXV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXG4gIHZhciBnID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbCAmJiBnbG9iYWwgfHwgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8IHt9O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG5cbiAgLyoqIFNlbGVjdGlvbiByYW5nZSAqL1xuXG4gIC8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIGlucHV0ICovXG5cbiAgdmFyIEFjdGlvbkRldGFpbHMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQ3VycmVudCBpbnB1dCB2YWx1ZSAqL1xuXG4gICAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXG5cbiAgICAvKiogT2xkIGlucHV0IHZhbHVlICovXG5cbiAgICAvKiogT2xkIHNlbGVjdGlvbiAqL1xuICAgIGZ1bmN0aW9uIEFjdGlvbkRldGFpbHModmFsdWUsIGN1cnNvclBvcywgb2xkVmFsdWUsIG9sZFNlbGVjdGlvbikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbkRldGFpbHMpO1xuXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmN1cnNvclBvcyA9IGN1cnNvclBvcztcbiAgICAgIHRoaXMub2xkVmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgIHRoaXMub2xkU2VsZWN0aW9uID0gb2xkU2VsZWN0aW9uOyAvLyBkb3VibGUgY2hlY2sgaWYgbGVmdCBwYXJ0IHdhcyBjaGFuZ2VkIChhdXRvZmlsbGluZywgb3RoZXIgbm9uLXN0YW5kYXJkIGlucHV0IHRyaWdnZXJzKVxuXG4gICAgICB3aGlsZSAodGhpcy52YWx1ZS5zbGljZSgwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSAhPT0gdGhpcy5vbGRWYWx1ZS5zbGljZSgwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSkge1xuICAgICAgICAtLXRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0O1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAgU3RhcnQgY2hhbmdpbmcgcG9zaXRpb25cclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoQWN0aW9uRGV0YWlscywgW3tcbiAgICAgIGtleTogXCJzdGFydENoYW5nZVBvc1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmN1cnNvclBvcywgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgSW5zZXJ0ZWQgc3ltYm9scyBjb3VudFxyXG4gICAgICAgIEByZWFkb25seVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImluc2VydGVkQ291bnRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJzb3JQb3MgLSB0aGlzLnN0YXJ0Q2hhbmdlUG9zO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgSW5zZXJ0ZWQgc3ltYm9sc1xyXG4gICAgICAgIEByZWFkb25seVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImluc2VydGVkXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBSZW1vdmVkIHN5bWJvbHMgY291bnRcclxuICAgICAgICBAcmVhZG9ubHlcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVkQ291bnRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAvLyBNYXRoLm1heCBmb3Igb3Bwb3NpdGUgb3BlcmF0aW9uXG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLm9sZFNlbGVjdGlvbi5lbmQgLSB0aGlzLnN0YXJ0Q2hhbmdlUG9zIHx8IC8vIGZvciBEZWxldGVcbiAgICAgICAgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLnZhbHVlLmxlbmd0aCwgMCk7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBSZW1vdmVkIHN5bWJvbHNcclxuICAgICAgICBAcmVhZG9ubHlcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVkXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2xkVmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMucmVtb3ZlZENvdW50KTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIFVuY2hhbmdlZCBoZWFkIHN5bWJvbHNcclxuICAgICAgICBAcmVhZG9ubHlcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJoZWFkXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgVW5jaGFuZ2VkIHRhaWwgc3ltYm9sc1xyXG4gICAgICAgIEByZWFkb25seVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInRhaWxcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5zdGFydENoYW5nZVBvcyArIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBSZW1vdmUgZGlyZWN0aW9uXHJcbiAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVtb3ZlRGlyZWN0aW9uXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDb3VudCB8fCB0aGlzLmluc2VydGVkQ291bnQpIHJldHVybiBESVJFQ1RJT04uTk9ORTsgLy8gYWxpZ24gcmlnaHQgaWYgZGVsZXRlIGF0IHJpZ2h0IG9yIGlmIHJhbmdlIHJlbW92ZWQgKGV2ZW50IHdpdGggYmFja3NwYWNlKVxuXG4gICAgICAgIHJldHVybiB0aGlzLm9sZFNlbGVjdGlvbi5lbmQgPT09IHRoaXMuY3Vyc29yUG9zIHx8IHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0ID09PSB0aGlzLmN1cnNvclBvcyA/IERJUkVDVElPTi5SSUdIVCA6IERJUkVDVElPTi5MRUZUO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBY3Rpb25EZXRhaWxzO1xuICB9KCk7XG5cbiAgLyoqXHJcbiAgICBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIG1vZGVsIHZhbHVlXHJcbiAgICBAcGFyYW0ge09iamVjdH0gW2RldGFpbHNdXHJcbiAgICBAcGFyYW0ge3N0cmluZ30gW2RldGFpbHMuaW5zZXJ0ZWRdIC0gSW5zZXJ0ZWQgc3ltYm9sc1xyXG4gICAgQHBhcmFtIHtib29sZWFufSBbZGV0YWlscy5za2lwXSAtIENhbiBza2lwIGNoYXJzXHJcbiAgICBAcGFyYW0ge251bWJlcn0gW2RldGFpbHMucmVtb3ZlQ291bnRdIC0gUmVtb3ZlZCBzeW1ib2xzIGNvdW50XHJcbiAgICBAcGFyYW0ge251bWJlcn0gW2RldGFpbHMudGFpbFNoaWZ0XSAtIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsXHJcbiAgKi9cbiAgdmFyIENoYW5nZURldGFpbHMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICAvKiogSW5zZXJ0ZWQgc3ltYm9scyAqL1xuXG4gICAgLyoqIENhbiBza2lwIGNoYXJzICovXG5cbiAgICAvKiogQWRkaXRpb25hbCBvZmZzZXQgaWYgYW55IGNoYW5nZXMgb2NjdXJyZWQgYmVmb3JlIHRhaWwgKi9cblxuICAgIC8qKiBSYXcgaW5zZXJ0ZWQgaXMgdXNlZCBieSBkeW5hbWljIG1hc2sgKi9cbiAgICBmdW5jdGlvbiBDaGFuZ2VEZXRhaWxzKGRldGFpbHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFuZ2VEZXRhaWxzKTtcblxuICAgICAgX2V4dGVuZHModGhpcywge1xuICAgICAgICBpbnNlcnRlZDogJycsXG4gICAgICAgIHJhd0luc2VydGVkOiAnJyxcbiAgICAgICAgc2tpcDogZmFsc2UsXG4gICAgICAgIHRhaWxTaGlmdDogMFxuICAgICAgfSwgZGV0YWlscyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBBZ2dyZWdhdGUgY2hhbmdlc1xyXG4gICAgICBAcmV0dXJucyB7Q2hhbmdlRGV0YWlsc30gYHRoaXNgXHJcbiAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2hhbmdlRGV0YWlscywgW3tcbiAgICAgIGtleTogXCJhZ2dyZWdhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZ2dyZWdhdGUoZGV0YWlscykge1xuICAgICAgICB0aGlzLnJhd0luc2VydGVkICs9IGRldGFpbHMucmF3SW5zZXJ0ZWQ7XG4gICAgICAgIHRoaXMuc2tpcCA9IHRoaXMuc2tpcCB8fCBkZXRhaWxzLnNraXA7XG4gICAgICAgIHRoaXMuaW5zZXJ0ZWQgKz0gZGV0YWlscy5pbnNlcnRlZDtcbiAgICAgICAgdGhpcy50YWlsU2hpZnQgKz0gZGV0YWlscy50YWlsU2hpZnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgLyoqIFRvdGFsIG9mZnNldCBjb25zaWRlcmluZyBhbGwgY2hhbmdlcyAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm9mZnNldFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhaWxTaGlmdCArIHRoaXMuaW5zZXJ0ZWQubGVuZ3RoO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDaGFuZ2VEZXRhaWxzO1xuICB9KCk7XG5cbiAgLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY29udGludW91cyBleHRyYWN0ZWQgdGFpbCAqL1xuICB2YXIgQ29udGludW91c1RhaWxEZXRhaWxzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgLyoqIFRhaWwgdmFsdWUgYXMgc3RyaW5nICovXG5cbiAgICAvKiogVGFpbCBzdGFydCBwb3NpdGlvbiAqL1xuXG4gICAgLyoqIFN0YXJ0IHBvc2l0aW9uICovXG4gICAgZnVuY3Rpb24gQ29udGludW91c1RhaWxEZXRhaWxzKCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgICAgdmFyIHN0b3AgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRpbnVvdXNUYWlsRGV0YWlscyk7XG5cbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgICB0aGlzLnN0b3AgPSBzdG9wO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb250aW51b3VzVGFpbERldGFpbHMsIFt7XG4gICAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImV4dGVuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsKSB7XG4gICAgICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nKHRhaWwpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhcHBlbmRUb1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRvKG1hc2tlZCkge1xuICAgICAgICByZXR1cm4gbWFza2VkLmFwcGVuZCh0aGlzLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzaGlmdEJlZm9yZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0QmVmb3JlKHBvcykge1xuICAgICAgICBpZiAodGhpcy5mcm9tID49IHBvcyB8fCAhdGhpcy52YWx1ZS5sZW5ndGgpIHJldHVybiAnJztcbiAgICAgICAgdmFyIHNoaWZ0Q2hhciA9IHRoaXMudmFsdWVbMF07XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gc2hpZnRDaGFyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdGF0ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgZnJvbTogdGhpcy5mcm9tLFxuICAgICAgICAgIHN0b3A6IHRoaXMuc3RvcFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICAgIF9leHRlbmRzKHRoaXMsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29udGludW91c1RhaWxEZXRhaWxzO1xuICB9KCk7XG5cbiAgLyoqIFByb3ZpZGVzIGNvbW1vbiBtYXNraW5nIHN0dWZmICovXG4gIHZhciBNYXNrZWQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAkU2hhcGU8TWFza2VkT3B0aW9ucz47IFRPRE8gYWZ0ZXIgZml4IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy80NzczXG5cbiAgICAvKiogQHR5cGUge01hc2t9ICovXG5cbiAgICAvKiogKi9cbiAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgICAvKiogVHJhbnNmb3JtcyB2YWx1ZSBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG5cbiAgICAvKiogVmFsaWRhdGVzIGlmIHZhbHVlIGlzIGFjY2VwdGFibGUgKi9cblxuICAgIC8qKiBEb2VzIGFkZGl0aW9uYWwgcHJvY2Vzc2luZyBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cblxuICAgIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gICAgLyoqICovXG4gICAgZnVuY3Rpb24gTWFza2VkKG9wdHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWQpO1xuXG4gICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuXG4gICAgICB0aGlzLl91cGRhdGUob3B0cyk7XG5cbiAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICAgIC8qKiBTZXRzIGFuZCBhcHBsaWVzIG5ldyBvcHRpb25zICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhNYXNrZWQsIFt7XG4gICAgICBrZXk6IFwidXBkYXRlT3B0aW9uc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKG9wdHMpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICB0aGlzLndpdGhWYWx1ZVJlZnJlc2godGhpcy5fdXBkYXRlLmJpbmQodGhpcywgb3B0cykpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgU2V0cyBuZXcgb3B0aW9uc1xyXG4gICAgICAgIEBwcm90ZWN0ZWRcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAgIF9leHRlbmRzKHRoaXMsIG9wdHMpO1xuICAgICAgfVxuICAgICAgLyoqIE1hc2sgc3RhdGUgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXNldFwiLFxuXG4gICAgICAvKiogUmVzZXRzIHZhbHVlICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgICAvKiogKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXNvbHZlXCIsXG5cbiAgICAgIC8qKiBSZXNvbHZlIG5ldyB2YWx1ZSAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xuICAgICAgICAgIGlucHV0OiB0cnVlXG4gICAgICAgIH0sICcnKTtcbiAgICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIH1cbiAgICAgIC8qKiAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuXG4gICAgICAvKiogRmluZHMgbmVhcmVzdCBpbnB1dCBwb3NpdGlvbiBpbiBkaXJlY3Rpb24gKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICAgIH1cbiAgICAgIC8qKiBFeHRyYWN0cyB2YWx1ZSBpbiByYW5nZSBjb25zaWRlcmluZyBmbGFncyAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICAgIH1cbiAgICAgIC8qKiBFeHRyYWN0cyB0YWlsIGluIHJhbmdlICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zKSwgZnJvbVBvcyk7XG4gICAgICB9XG4gICAgICAvKiogU3RvcmVzIHN0YXRlIGJlZm9yZSB0YWlsICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3N0b3JlQmVmb3JlVGFpbFN0YXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3N0b3JlQmVmb3JlVGFpbFN0YXRlKCkge1xuICAgICAgICB0aGlzLl9iZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgfVxuICAgICAgLyoqIFJlc3RvcmVzIHN0YXRlIGJlZm9yZSB0YWlsICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3Jlc3RvcmVCZWZvcmVUYWlsU3RhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2JlZm9yZVRhaWxTdGF0ZTtcbiAgICAgIH1cbiAgICAgIC8qKiBSZXNldHMgc3RhdGUgYmVmb3JlIHRhaWwgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVzZXRCZWZvcmVUYWlsU3RhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVzZXRCZWZvcmVUYWlsU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuX2JlZm9yZVRhaWxTdGF0ZSA9IG51bGw7XG4gICAgICB9XG4gICAgICAvKiogQXBwZW5kcyB0YWlsICovXG4gICAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgICAgIHJldHVybiB0YWlsLmFwcGVuZFRvKHRoaXMpO1xuICAgICAgfVxuICAgICAgLyoqIEFwcGVuZHMgY2hhciAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgKz0gY2g7XG4gICAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgICAgaW5zZXJ0ZWQ6IGNoLFxuICAgICAgICAgIHJhd0luc2VydGVkOiBjaFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKiBBcHBlbmRzIGNoYXIgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKGNoKSB7XG4gICAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgIHZhciBjaGVja1RhaWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY2ggPSB0aGlzLmRvUHJlcGFyZShjaCwgZmxhZ3MpO1xuICAgICAgICBpZiAoIWNoKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICAgIHNraXA6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjb25zaXN0ZW50U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB2YXIgY29uc2lzdGVudFRhaWw7XG5cbiAgICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncyk7XG5cbiAgICAgICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQpIHtcbiAgICAgICAgICB2YXIgYXBwZW5kZWQgPSB0aGlzLmRvVmFsaWRhdGUoZmxhZ3MpICE9PSBmYWxzZTtcblxuICAgICAgICAgIGlmIChhcHBlbmRlZCAmJiBjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbiBvaywgY2hlY2sgdGFpbFxuICAgICAgICAgICAgdGhpcy5fc3RvcmVCZWZvcmVUYWlsU3RhdGUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgIGNvbnNpc3RlbnRUYWlsID0gY2hlY2tUYWlsLnN0YXRlO1xuICAgICAgICAgICAgICBjaGVja1RhaWwuc2hpZnRCZWZvcmUodGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdGFpbERldGFpbHMgPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKTtcbiAgICAgICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQgPT09IGNoZWNrVGFpbC50b1N0cmluZygpOyAvLyBpZiBvaywgcm9sbGJhY2sgc3RhdGUgYWZ0ZXIgdGFpbFxuXG4gICAgICAgICAgICBpZiAoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpIHRoaXMuX3Jlc3RvcmVCZWZvcmVUYWlsU3RhdGUoKTtcbiAgICAgICAgICB9IC8vIHJldmVydCBhbGwgaWYgc29tZXRoaW5nIHdlbnQgd3JvbmdcblxuXG4gICAgICAgICAgaWYgKCFhcHBlbmRlZCkge1xuICAgICAgICAgICAgZGV0YWlscy5yYXdJbnNlcnRlZCA9IGRldGFpbHMuaW5zZXJ0ZWQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBjb25zaXN0ZW50U3RhdGU7XG4gICAgICAgICAgICBpZiAoY2hlY2tUYWlsICYmIGNvbnNpc3RlbnRUYWlsKSBjaGVja1RhaWwuc3RhdGUgPSBjb25zaXN0ZW50VGFpbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICAgIH1cbiAgICAgIC8qKiBBcHBlbmRzIHN5bWJvbHMgY29uc2lkZXJpbmcgZmxhZ3MgKi9cbiAgICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhcHBlbmRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgICAgICBpZiAoIWlzU3RyaW5nKHN0cikpIHRocm93IG5ldyBFcnJvcigndmFsdWUgc2hvdWxkIGJlIHN0cmluZycpO1xuICAgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgIHZhciBjaGVja1RhaWwgPSBpc1N0cmluZyh0YWlsKSA/IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKSA6IHRhaWw7XG5cbiAgICAgICAgZm9yICh2YXIgY2kgPSAwOyBjaSA8IHN0ci5sZW5ndGg7ICsrY2kpIHtcbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRDaGFyKHN0cltjaV0sIGZsYWdzLCBjaGVja1RhaWwpKTtcbiAgICAgICAgfSAvLyBhcHBlbmQgdGFpbCBidXQgYWdncmVnYXRlIG9ubHkgdGFpbFNoaWZ0XG5cblxuICAgICAgICBpZiAoY2hlY2tUYWlsICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl9zdG9yZUJlZm9yZVRhaWxTdGF0ZSgpO1xuXG4gICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCkudGFpbFNoaWZ0OyAvLyBUT0RPIGl0J3MgYSBnb29kIGlkZWEgdG8gY2xlYXIgc3RhdGUgYWZ0ZXIgYXBwZW5kaW5nIGVuZHNcbiAgICAgICAgICAvLyBidXQgaXQgY2F1c2VzIGJ1Z3Mgd2hlbiBvbmUgYXBwZW5kIGNhbGxzIGFub3RoZXIgKHdoZW4gZHluYW1pYyBkaXNwYXRjaCBzZXQgcmF3SW5wdXRWYWx1ZSlcbiAgICAgICAgICAvLyB0aGlzLl9yZXNldEJlZm9yZVRhaWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICB9XG4gICAgICAvKiogKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLnZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB9XG4gICAgICAvKiogQ2FsbHMgZnVuY3Rpb24gYW5kIHJlYXBwbGllcyBjdXJyZW50IHZhbHVlICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwid2l0aFZhbHVlUmVmcmVzaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdpdGhWYWx1ZVJlZnJlc2goZm4pIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlZnJlc2hpbmcgfHwgIXRoaXMuaXNJbml0aWFsaXplZCkgcmV0dXJuIGZuKCk7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgdW5tYXNrZWQgPSB0aGlzLnVubWFza2VkVmFsdWU7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHZhciByZXQgPSBmbigpOyAvLyB0cnkgdG8gdXBkYXRlIHdpdGggcmF3IHZhbHVlIGZpcnN0IHRvIGtlZXAgZml4ZWQgY2hhcnNcblxuICAgICAgICBpZiAodGhpcy5yZXNvbHZlKHZhbHVlKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAvLyBvciBmYWxsYmFjayB0byB1bm1hc2tlZFxuICAgICAgICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlZnJlc2hpbmc7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBQcmVwYXJlcyBzdHJpbmcgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZ1xyXG4gICAgICAgIEBwcm90ZWN0ZWRcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkb1ByZXBhcmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgIHJldHVybiB0aGlzLnByZXBhcmUgPyB0aGlzLnByZXBhcmUoc3RyLCB0aGlzLCBmbGFncykgOiBzdHI7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZVxyXG4gICAgICAgIEBwcm90ZWN0ZWRcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZShmbGFncykge1xuICAgICAgICByZXR1cm4gKCF0aGlzLnZhbGlkYXRlIHx8IHRoaXMudmFsaWRhdGUodGhpcy52YWx1ZSwgdGhpcywgZmxhZ3MpKSAmJiAoIXRoaXMucGFyZW50IHx8IHRoaXMucGFyZW50LmRvVmFsaWRhdGUoZmxhZ3MpKTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGluIHRoZSBlbmQgb2YgZWRpdGluZ1xyXG4gICAgICAgIEBwcm90ZWN0ZWRcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgICBpZiAodGhpcy5jb21taXQpIHRoaXMuY29tbWl0KHRoaXMudmFsdWUsIHRoaXMpO1xuICAgICAgfVxuICAgICAgLyoqICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3BsaWNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgaW5zZXJ0ZWQsIHJlbW92ZURpcmVjdGlvbikge1xuICAgICAgICB2YXIgdGFpbFBvcyA9IHN0YXJ0ICsgZGVsZXRlQ291bnQ7XG4gICAgICAgIHZhciB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0YWlsUG9zKTtcbiAgICAgICAgdmFyIHN0YXJ0Q2hhbmdlUG9zID0gdGhpcy5uZWFyZXN0SW5wdXRQb3Moc3RhcnQsIHJlbW92ZURpcmVjdGlvbik7XG4gICAgICAgIHZhciBjaGFuZ2VEZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICAgIHRhaWxTaGlmdDogc3RhcnRDaGFuZ2VQb3MgLSBzdGFydCAvLyBhZGp1c3QgdGFpbFNoaWZ0IGlmIHN0YXJ0IHdhcyBhbGlnbmVkXG5cbiAgICAgICAgfSkuYWdncmVnYXRlKHRoaXMucmVtb3ZlKHN0YXJ0Q2hhbmdlUG9zKSkuYWdncmVnYXRlKHRoaXMuYXBwZW5kKGluc2VydGVkLCB7XG4gICAgICAgICAgaW5wdXQ6IHRydWVcbiAgICAgICAgfSwgdGFpbCkpO1xuICAgICAgICByZXR1cm4gY2hhbmdlRGV0YWlscztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3RhdGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIF92YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gc3RhdGUuX3ZhbHVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge30sICcnKTtcbiAgICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgICAgfVxuICAgICAgLyoqICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVubWFza2VkVmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy51bm1hc2tlZFZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICAvKiogVmFsdWUgdGhhdCBpbmNsdWRlcyByYXcgdXNlciBpbnB1dCAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInJhd0lucHV0VmFsdWVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRyYWN0SW5wdXQoMCwgdGhpcy52YWx1ZS5sZW5ndGgsIHtcbiAgICAgICAgICByYXc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xuICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICB9LCAnJyk7XG4gICAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICAgIH1cbiAgICAgIC8qKiAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFza2VkO1xuICB9KCk7XG5cbiAgLyoqIEdldCBNYXNrZWQgY2xhc3MgYnkgbWFzayB0eXBlICovXG4gIGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2spIHtcbiAgICBpZiAobWFzayA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hc2sgcHJvcGVydHkgc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBpZiAobWFzayBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIGcuSU1hc2suTWFza2VkUmVnRXhwO1xuICAgIGlmIChpc1N0cmluZyhtYXNrKSkgcmV0dXJuIGcuSU1hc2suTWFza2VkUGF0dGVybjtcbiAgICBpZiAobWFzayBpbnN0YW5jZW9mIERhdGUgfHwgbWFzayA9PT0gRGF0ZSkgcmV0dXJuIGcuSU1hc2suTWFza2VkRGF0ZTtcbiAgICBpZiAobWFzayBpbnN0YW5jZW9mIE51bWJlciB8fCB0eXBlb2YgbWFzayA9PT0gJ251bWJlcicgfHwgbWFzayA9PT0gTnVtYmVyKSByZXR1cm4gZy5JTWFzay5NYXNrZWROdW1iZXI7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWFzaykgfHwgbWFzayA9PT0gQXJyYXkpIHJldHVybiBnLklNYXNrLk1hc2tlZER5bmFtaWM7IC8vICRGbG93Rml4TWVcblxuICAgIGlmIChtYXNrLnByb3RvdHlwZSBpbnN0YW5jZW9mIGcuSU1hc2suTWFza2VkKSByZXR1cm4gbWFzazsgLy8gJEZsb3dGaXhNZVxuXG4gICAgaWYgKG1hc2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgcmV0dXJuIGcuSU1hc2suTWFza2VkRnVuY3Rpb247XG4gICAgY29uc29sZS53YXJuKCdNYXNrIG5vdCBmb3VuZCBmb3IgbWFzaycsIG1hc2spOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgIHJldHVybiBnLklNYXNrLk1hc2tlZDtcbiAgfVxuICAvKiogQ3JlYXRlcyBuZXcge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSAqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU1hc2sob3B0cykge1xuICAgIG9wdHMgPSBfb2JqZWN0U3ByZWFkKHt9LCBvcHRzKTtcbiAgICB2YXIgbWFzayA9IG9wdHMubWFzaztcbiAgICBpZiAobWFzayBpbnN0YW5jZW9mIGcuSU1hc2suTWFza2VkKSByZXR1cm4gbWFzaztcbiAgICB2YXIgTWFza2VkQ2xhc3MgPSBtYXNrZWRDbGFzcyhtYXNrKTtcbiAgICByZXR1cm4gbmV3IE1hc2tlZENsYXNzKG9wdHMpO1xuICB9XG5cbiAgdmFyIERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMgPSB7XG4gICAgJzAnOiAvXFxkLyxcbiAgICAnYSc6IC9bXFx1MDA0MS1cXHUwMDVBXFx1MDA2MS1cXHUwMDdBXFx1MDBBQVxcdTAwQjVcXHUwMEJBXFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFQ1xcdTAyRUVcXHUwMzcwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN0EtXFx1MDM3RFxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0Y1XFx1MDNGNy1cXHUwNDgxXFx1MDQ4QS1cXHUwNTI3XFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1RDAtXFx1MDVFQVxcdTA1RjAtXFx1MDVGMlxcdTA2MjAtXFx1MDY0QVxcdTA2NkVcXHUwNjZGXFx1MDY3MS1cXHUwNkQzXFx1MDZENVxcdTA2RTVcXHUwNkU2XFx1MDZFRVxcdTA2RUZcXHUwNkZBLVxcdTA2RkNcXHUwNkZGXFx1MDcxMFxcdTA3MTItXFx1MDcyRlxcdTA3NEQtXFx1MDdBNVxcdTA3QjFcXHUwN0NBLVxcdTA3RUFcXHUwN0Y0XFx1MDdGNVxcdTA3RkFcXHUwODAwLVxcdTA4MTVcXHUwODFBXFx1MDgyNFxcdTA4MjhcXHUwODQwLVxcdTA4NThcXHUwOEEwXFx1MDhBMi1cXHUwOEFDXFx1MDkwNC1cXHUwOTM5XFx1MDkzRFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTcxLVxcdTA5NzdcXHUwOTc5LVxcdTA5N0ZcXHUwOTg1LVxcdTA5OENcXHUwOThGXFx1MDk5MFxcdTA5OTMtXFx1MDlBOFxcdTA5QUEtXFx1MDlCMFxcdTA5QjJcXHUwOUI2LVxcdTA5QjlcXHUwOUJEXFx1MDlDRVxcdTA5RENcXHUwOUREXFx1MDlERi1cXHUwOUUxXFx1MDlGMFxcdTA5RjFcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTcyLVxcdTBBNzRcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkRcXHUwQUQwXFx1MEFFMFxcdTBBRTFcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzRFxcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI3MVxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEJEMFxcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzM1xcdTBDMzUtXFx1MEMzOVxcdTBDM0RcXHUwQzU4XFx1MEM1OVxcdTBDNjBcXHUwQzYxXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCRFxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBDRjFcXHUwQ0YyXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDNBXFx1MEQzRFxcdTBENEVcXHUwRDYwXFx1MEQ2MVxcdTBEN0EtXFx1MEQ3RlxcdTBEODUtXFx1MEQ5NlxcdTBEOUEtXFx1MERCMVxcdTBEQjMtXFx1MERCQlxcdTBEQkRcXHUwREMwLVxcdTBEQzZcXHUwRTAxLVxcdTBFMzBcXHUwRTMyXFx1MEUzM1xcdTBFNDAtXFx1MEU0NlxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUIwXFx1MEVCMlxcdTBFQjNcXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFREMtXFx1MEVERlxcdTBGMDBcXHUwRjQwLVxcdTBGNDdcXHUwRjQ5LVxcdTBGNkNcXHUwRjg4LVxcdTBGOENcXHUxMDAwLVxcdTEwMkFcXHUxMDNGXFx1MTA1MC1cXHUxMDU1XFx1MTA1QS1cXHUxMDVEXFx1MTA2MVxcdTEwNjVcXHUxMDY2XFx1MTA2RS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4RVxcdTEwQTAtXFx1MTBDNVxcdTEwQzdcXHUxMENEXFx1MTBEMC1cXHUxMEZBXFx1MTBGQy1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzgwLVxcdTEzOEZcXHUxM0EwLVxcdTEzRjRcXHUxNDAxLVxcdTE2NkNcXHUxNjZGLVxcdTE2N0ZcXHUxNjgxLVxcdTE2OUFcXHUxNkEwLVxcdTE2RUFcXHUxNzAwLVxcdTE3MENcXHUxNzBFLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NkNcXHUxNzZFLVxcdTE3NzBcXHUxNzgwLVxcdTE3QjNcXHUxN0Q3XFx1MTdEQ1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE4QUFcXHUxOEIwLVxcdTE4RjVcXHUxOTAwLVxcdTE5MUNcXHUxOTUwLVxcdTE5NkRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5QUJcXHUxOUMxLVxcdTE5QzdcXHUxQTAwLVxcdTFBMTZcXHUxQTIwLVxcdTFBNTRcXHUxQUE3XFx1MUIwNS1cXHUxQjMzXFx1MUI0NS1cXHUxQjRCXFx1MUI4My1cXHUxQkEwXFx1MUJBRVxcdTFCQUZcXHUxQkJBLVxcdTFCRTVcXHUxQzAwLVxcdTFDMjNcXHUxQzRELVxcdTFDNEZcXHUxQzVBLVxcdTFDN0RcXHUxQ0U5LVxcdTFDRUNcXHUxQ0VFLVxcdTFDRjFcXHUxQ0Y1XFx1MUNGNlxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEyRFxcdTIxMkYtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNEVcXHUyMTgzXFx1MjE4NFxcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDNjAtXFx1MkNFNFxcdTJDRUItXFx1MkNFRVxcdTJDRjJcXHUyQ0YzXFx1MkQwMC1cXHUyRDI1XFx1MkQyN1xcdTJEMkRcXHUyRDMwLVxcdTJENjdcXHUyRDZGXFx1MkQ4MC1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1MkUyRlxcdTMwMDVcXHUzMDA2XFx1MzAzMS1cXHUzMDM1XFx1MzAzQlxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDlELVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkRcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQkFcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQ0NcXHVBMDAwLVxcdUE0OENcXHVBNEQwLVxcdUE0RkRcXHVBNTAwLVxcdUE2MENcXHVBNjEwLVxcdUE2MUZcXHVBNjJBXFx1QTYyQlxcdUE2NDAtXFx1QTY2RVxcdUE2N0YtXFx1QTY5N1xcdUE2QTAtXFx1QTZFNVxcdUE3MTctXFx1QTcxRlxcdUE3MjItXFx1QTc4OFxcdUE3OEItXFx1QTc4RVxcdUE3OTAtXFx1QTc5M1xcdUE3QTAtXFx1QTdBQVxcdUE3RjgtXFx1QTgwMVxcdUE4MDMtXFx1QTgwNVxcdUE4MDctXFx1QTgwQVxcdUE4MEMtXFx1QTgyMlxcdUE4NDAtXFx1QTg3M1xcdUE4ODItXFx1QThCM1xcdUE4RjItXFx1QThGN1xcdUE4RkJcXHVBOTBBLVxcdUE5MjVcXHVBOTMwLVxcdUE5NDZcXHVBOTYwLVxcdUE5N0NcXHVBOTg0LVxcdUE5QjJcXHVBOUNGXFx1QUEwMC1cXHVBQTI4XFx1QUE0MC1cXHVBQTQyXFx1QUE0NC1cXHVBQTRCXFx1QUE2MC1cXHVBQTc2XFx1QUE3QVxcdUFBODAtXFx1QUFBRlxcdUFBQjFcXHVBQUI1XFx1QUFCNlxcdUFBQjktXFx1QUFCRFxcdUFBQzBcXHVBQUMyXFx1QUFEQi1cXHVBQUREXFx1QUFFMC1cXHVBQUVBXFx1QUFGMi1cXHVBQUY0XFx1QUIwMS1cXHVBQjA2XFx1QUIwOS1cXHVBQjBFXFx1QUIxMS1cXHVBQjE2XFx1QUIyMC1cXHVBQjI2XFx1QUIyOC1cXHVBQjJFXFx1QUJDMC1cXHVBQkUyXFx1QUMwMC1cXHVEN0EzXFx1RDdCMC1cXHVEN0M2XFx1RDdDQi1cXHVEN0ZCXFx1RjkwMC1cXHVGQTZEXFx1RkE3MC1cXHVGQUQ5XFx1RkIwMC1cXHVGQjA2XFx1RkIxMy1cXHVGQjE3XFx1RkIxRFxcdUZCMUYtXFx1RkIyOFxcdUZCMkEtXFx1RkIzNlxcdUZCMzgtXFx1RkIzQ1xcdUZCM0VcXHVGQjQwXFx1RkI0MVxcdUZCNDNcXHVGQjQ0XFx1RkI0Ni1cXHVGQkIxXFx1RkJEMy1cXHVGRDNEXFx1RkQ1MC1cXHVGRDhGXFx1RkQ5Mi1cXHVGREM3XFx1RkRGMC1cXHVGREZCXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYyMS1cXHVGRjNBXFx1RkY0MS1cXHVGRjVBXFx1RkY2Ni1cXHVGRkJFXFx1RkZDMi1cXHVGRkM3XFx1RkZDQS1cXHVGRkNGXFx1RkZEMi1cXHVGRkQ3XFx1RkZEQS1cXHVGRkRDXS8sXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjIwNzUwNzBcbiAgICAnKic6IC8uL1xuICB9O1xuICAvKiogKi9cblxuICB2YXIgUGF0dGVybklucHV0RGVmaW5pdGlvbiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIC8qKiAqL1xuXG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiAqL1xuXG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cbiAgICBmdW5jdGlvbiBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKG9wdHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKTtcblxuICAgICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgICAgYmxvY2tPcHRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdHMsIFtcIm1hc2tcIl0pO1xuXG4gICAgICB0aGlzLm1hc2tlZCA9IGNyZWF0ZU1hc2soe1xuICAgICAgICBtYXNrOiBtYXNrXG4gICAgICB9KTtcblxuICAgICAgX2V4dGVuZHModGhpcywgYmxvY2tPcHRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUGF0dGVybklucHV0RGVmaW5pdGlvbiwgW3tcbiAgICAgIGtleTogXCJyZXNldFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hc2tlZC5yZXNldCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuXG4gICAgICAgIGlmIChmcm9tUG9zID09PSAwICYmIHRvUG9zID49IDEpIHtcbiAgICAgICAgICB0aGlzLl9pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5yZW1vdmUoZnJvbVBvcywgdG9Qb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoc3RyKSB7XG4gICAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgIGlmICh0aGlzLl9pc0ZpbGxlZCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMubWFza2VkLnN0YXRlOyAvLyBzaW11bGF0ZSBpbnB1dFxuXG4gICAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5tYXNrZWQuX2FwcGVuZENoYXIoc3RyLCBmbGFncyk7XG5cbiAgICAgICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQgJiYgdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBkZXRhaWxzLmluc2VydGVkID0gZGV0YWlscy5yYXdJbnNlcnRlZCA9ICcnO1xuICAgICAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRldGFpbHMuaW5zZXJ0ZWQgJiYgIXRoaXMuaXNPcHRpb25hbCAmJiAhdGhpcy5sYXp5ICYmICFmbGFncy5pbnB1dCkge1xuICAgICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLnBsYWNlaG9sZGVyQ2hhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRldGFpbHMuc2tpcCA9ICFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWw7XG4gICAgICAgIHRoaXMuX2lzRmlsbGVkID0gQm9vbGVhbihkZXRhaWxzLmluc2VydGVkKTtcbiAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFwcGVuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgICAgICAgdmFyIF90aGlzJG1hc2tlZDtcblxuICAgICAgICByZXR1cm4gKF90aGlzJG1hc2tlZCA9IHRoaXMubWFza2VkKS5hcHBlbmQuYXBwbHkoX3RoaXMkbWFza2VkLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzRmlsbGVkIHx8IHRoaXMuaXNPcHRpb25hbCkgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgIHRoaXMuX2lzRmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgICAgdmFyIF90aGlzJG1hc2tlZDI7XG5cbiAgICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQyID0gdGhpcy5tYXNrZWQpLmV4dHJhY3RUYWlsLmFwcGx5KF90aGlzJG1hc2tlZDIsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKCkge1xuICAgICAgICB2YXIgX3RoaXMkbWFza2VkMztcblxuICAgICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDMgPSB0aGlzLm1hc2tlZCkuYXBwZW5kVGFpbC5hcHBseShfdGhpcyRtYXNrZWQzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xuICAgICAgICB2YXIgbWluUG9zID0gMDtcbiAgICAgICAgdmFyIG1heFBvcyA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICB2YXIgYm91bmRQb3MgPSBNYXRoLm1pbihNYXRoLm1heChjdXJzb3JQb3MsIG1pblBvcyksIG1heFBvcyk7XG5cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gYm91bmRQb3MgOiBtaW5Qb3M7XG5cbiAgICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1heFBvcztcblxuICAgICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBib3VuZFBvcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzJG1hc2tlZDQsIF90aGlzJHBhcmVudDtcblxuICAgICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDQgPSB0aGlzLm1hc2tlZCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRtYXNrZWQ0LCBhcmd1bWVudHMpICYmICghdGhpcy5wYXJlbnQgfHwgKF90aGlzJHBhcmVudCA9IHRoaXMucGFyZW50KS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJHBhcmVudCwgYXJndW1lbnRzKSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInZhbHVlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnZhbHVlIHx8ICh0aGlzLl9pc0ZpbGxlZCAmJiAhdGhpcy5pc09wdGlvbmFsID8gdGhpcy5wbGFjZWhvbGRlckNoYXIgOiAnJyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMubWFza2VkLnZhbHVlKSB8fCB0aGlzLmlzT3B0aW9uYWw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXRlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtYXNrZWQ6IHRoaXMubWFza2VkLnN0YXRlLFxuICAgICAgICAgIF9pc0ZpbGxlZDogdGhpcy5faXNGaWxsZWRcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgICB0aGlzLm1hc2tlZC5zdGF0ZSA9IHN0YXRlLm1hc2tlZDtcbiAgICAgICAgdGhpcy5faXNGaWxsZWQgPSBzdGF0ZS5faXNGaWxsZWQ7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBhdHRlcm5JbnB1dERlZmluaXRpb247XG4gIH0oKTtcblxuICB2YXIgUGF0dGVybkZpeGVkRGVmaW5pdGlvbiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIC8qKiAqL1xuXG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiAqL1xuICAgIGZ1bmN0aW9uIFBhdHRlcm5GaXhlZERlZmluaXRpb24ob3B0cykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5GaXhlZERlZmluaXRpb24pO1xuXG4gICAgICBfZXh0ZW5kcyh0aGlzLCBvcHRzKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUGF0dGVybkZpeGVkRGVmaW5pdGlvbiwgW3tcbiAgICAgIGtleTogXCJyZXNldFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbW92ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX3ZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpICsgdGhpcy5fdmFsdWUuc2xpY2UodG9Qb3MpO1xuICAgICAgICBpZiAoIXRoaXMuX3ZhbHVlKSB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xuICAgICAgICB2YXIgbWluUG9zID0gMDtcbiAgICAgICAgdmFyIG1heFBvcyA9IHRoaXMuX3ZhbHVlLmxlbmd0aDtcblxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgICAgIHJldHVybiBtaW5Qb3M7XG5cbiAgICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbWF4UG9zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgICByZXR1cm4gZmxhZ3MucmF3ICYmIHRoaXMuX2lzUmF3SW5wdXQgJiYgdGhpcy5fdmFsdWUuc2xpY2UoZnJvbVBvcywgdG9Qb3MpIHx8ICcnO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKHN0cikge1xuICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSkgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgIHZhciBhcHBlbmRlZCA9IHRoaXMuY2hhciA9PT0gc3RyWzBdO1xuICAgICAgICB2YXIgaXNSZXNvbHZlZCA9IGFwcGVuZGVkICYmICh0aGlzLmlzVW5tYXNraW5nIHx8IGZsYWdzLmlucHV0IHx8IGZsYWdzLnJhdykgJiYgIWZsYWdzLnRhaWw7XG4gICAgICAgIGlmIChpc1Jlc29sdmVkKSBkZXRhaWxzLnJhd0luc2VydGVkID0gdGhpcy5jaGFyO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBpc1Jlc29sdmVkICYmIChmbGFncy5yYXcgfHwgZmxhZ3MuaW5wdXQpO1xuICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSkgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCcnKTtcbiAgICAgIH0gLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xuICAgICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKHN0ciwgZmxhZ3MsIHRhaWwpIHtcbiAgICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyKHN0ciwgZmxhZ3MpO1xuXG4gICAgICAgIGlmICh0YWlsICE9IG51bGwpIHtcbiAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwodGFpbCkudGFpbFNoaWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7fVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVW5tYXNraW5nID8gdGhpcy52YWx1ZSA6ICcnO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXRlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBfdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgICAgIF9pc1Jhd0lucHV0OiB0aGlzLl9pc1Jhd0lucHV0XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgICAgX2V4dGVuZHModGhpcywgc3RhdGUpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQYXR0ZXJuRml4ZWREZWZpbml0aW9uO1xuICB9KCk7XG5cbiAgdmFyIENodW5rc1RhaWxEZXRhaWxzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgLyoqICovXG4gICAgZnVuY3Rpb24gQ2h1bmtzVGFpbERldGFpbHMoKSB7XG4gICAgICB2YXIgY2h1bmtzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2h1bmtzVGFpbERldGFpbHMpO1xuXG4gICAgICB0aGlzLmNodW5rcyA9IGNodW5rcztcbiAgICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENodW5rc1RhaWxEZXRhaWxzLCBbe1xuICAgICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNodW5rcy5tYXAoU3RyaW5nKS5qb2luKCcnKTtcbiAgICAgIH0gLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImV4dGVuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsQ2h1bmspIHtcbiAgICAgICAgaWYgKCFTdHJpbmcodGFpbENodW5rKSkgcmV0dXJuO1xuICAgICAgICBpZiAoaXNTdHJpbmcodGFpbENodW5rKSkgdGFpbENodW5rID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbENodW5rKSk7XG4gICAgICAgIHZhciBsYXN0Q2h1bmsgPSB0aGlzLmNodW5rc1t0aGlzLmNodW5rcy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGV4dGVuZExhc3QgPSBsYXN0Q2h1bmsgJiYgKCAvLyBpZiBzdG9wcyBhcmUgc2FtZSBvciB0YWlsIGhhcyBubyBzdG9wXG4gICAgICAgIGxhc3RDaHVuay5zdG9wID09PSB0YWlsQ2h1bmsuc3RvcCB8fCB0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSAmJiAvLyBpZiB0YWlsIGNodW5rIGdvZXMganVzdCBhZnRlciBsYXN0IGNodW5rXG4gICAgICAgIHRhaWxDaHVuay5mcm9tID09PSBsYXN0Q2h1bmsuZnJvbSArIGxhc3RDaHVuay50b1N0cmluZygpLmxlbmd0aDtcblxuICAgICAgICBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ29udGludW91c1RhaWxEZXRhaWxzKSB7XG4gICAgICAgICAgLy8gY2hlY2sgdGhlIGFiaWxpdHkgdG8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXG4gICAgICAgICAgaWYgKGV4dGVuZExhc3QpIHtcbiAgICAgICAgICAgIC8vIGV4dGVuZCBwcmV2aW91cyBjaHVua1xuICAgICAgICAgICAgbGFzdENodW5rLmV4dGVuZCh0YWlsQ2h1bmsudG9TdHJpbmcoKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFwcGVuZCBuZXcgY2h1bmtcbiAgICAgICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIHtcbiAgICAgICAgICBpZiAodGFpbENodW5rLnN0b3AgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gdW53cmFwIGZsb2F0aW5nIGNodW5rcyB0byBwYXJlbnQsIGtlZXBpbmcgYGZyb21gIHBvc1xuICAgICAgICAgICAgdmFyIGZpcnN0VGFpbENodW5rO1xuXG4gICAgICAgICAgICB3aGlsZSAodGFpbENodW5rLmNodW5rcy5sZW5ndGggJiYgdGFpbENodW5rLmNodW5rc1swXS5zdG9wID09IG51bGwpIHtcbiAgICAgICAgICAgICAgZmlyc3RUYWlsQ2h1bmsgPSB0YWlsQ2h1bmsuY2h1bmtzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgIGZpcnN0VGFpbENodW5rLmZyb20gKz0gdGFpbENodW5rLmZyb207XG4gICAgICAgICAgICAgIHRoaXMuZXh0ZW5kKGZpcnN0VGFpbENodW5rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIGlmIHRhaWwgY2h1bmsgc3RpbGwgaGFzIHZhbHVlXG5cblxuICAgICAgICAgIGlmICh0YWlsQ2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgLy8gaWYgY2h1bmtzIGNvbnRhaW5zIHN0b3BzLCB0aGVuIHBvcHVwIHN0b3AgdG8gY29udGFpbmVyXG4gICAgICAgICAgICB0YWlsQ2h1bmsuc3RvcCA9IHRhaWxDaHVuay5ibG9ja0luZGV4O1xuICAgICAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0YWlsQ2h1bmspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhcHBlbmRUb1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRvKG1hc2tlZCkge1xuICAgICAgICBpZiAoIShtYXNrZWQgaW5zdGFuY2VvZiBnLklNYXNrLk1hc2tlZFBhdHRlcm4pKSB7XG4gICAgICAgICAgdmFyIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8obWFza2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcblxuICAgICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoICYmICFkZXRhaWxzLnNraXA7ICsrY2kpIHtcbiAgICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG5cbiAgICAgICAgICB2YXIgbGFzdEJsb2NrSXRlciA9IG1hc2tlZC5fbWFwUG9zVG9CbG9jayhtYXNrZWQudmFsdWUubGVuZ3RoKTtcblxuICAgICAgICAgIHZhciBzdG9wID0gY2h1bmsuc3RvcDtcbiAgICAgICAgICB2YXIgY2h1bmtCbG9jayA9IHZvaWQgMDtcblxuICAgICAgICAgIGlmIChzdG9wICYmICggLy8gaWYgYmxvY2sgbm90IGZvdW5kIG9yIHN0b3AgaXMgYmVoaW5kIGxhc3RCbG9ja1xuICAgICAgICAgICFsYXN0QmxvY2tJdGVyIHx8IGxhc3RCbG9ja0l0ZXIuaW5kZXggPD0gc3RvcCkpIHtcbiAgICAgICAgICAgIGlmIChjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzIHx8IC8vIGZvciBjb250aW51b3VzIGJsb2NrIGFsc28gY2hlY2sgaWYgc3RvcCBpcyBleGlzdFxuICAgICAgICAgICAgbWFza2VkLl9zdG9wcy5pbmRleE9mKHN0b3ApID49IDApIHtcbiAgICAgICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLl9hcHBlbmRQbGFjZWhvbGRlcihzdG9wKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNodW5rQmxvY2sgPSBjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzICYmIG1hc2tlZC5fYmxvY2tzW3N0b3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjaHVua0Jsb2NrKSB7XG4gICAgICAgICAgICB2YXIgdGFpbERldGFpbHMgPSBjaHVua0Jsb2NrLmFwcGVuZFRhaWwoY2h1bmspO1xuICAgICAgICAgICAgdGFpbERldGFpbHMuc2tpcCA9IGZhbHNlOyAvLyBhbHdheXMgaWdub3JlIHNraXAsIGl0IHdpbGwgYmUgc2V0IG9uIGxhc3RcblxuICAgICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGFpbERldGFpbHMpO1xuICAgICAgICAgICAgbWFza2VkLl92YWx1ZSArPSB0YWlsRGV0YWlscy5pbnNlcnRlZDsgLy8gZ2V0IG5vdCBpbnNlcnRlZCBjaGFyc1xuXG4gICAgICAgICAgICB2YXIgcmVtYWluQ2hhcnMgPSBjaHVuay50b1N0cmluZygpLnNsaWNlKHRhaWxEZXRhaWxzLnJhd0luc2VydGVkLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAocmVtYWluQ2hhcnMpIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQocmVtYWluQ2hhcnMsIHtcbiAgICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKGNodW5rLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2hpZnRCZWZvcmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaGlmdEJlZm9yZShwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJvbSA+PSBwb3MgfHwgIXRoaXMuY2h1bmtzLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgICAgICB2YXIgY2h1bmtTaGlmdFBvcyA9IHBvcyAtIHRoaXMuZnJvbTtcbiAgICAgICAgdmFyIGNpID0gMDtcblxuICAgICAgICB3aGlsZSAoY2kgPCB0aGlzLmNodW5rcy5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG4gICAgICAgICAgdmFyIHNoaWZ0Q2hhciA9IGNodW5rLnNoaWZ0QmVmb3JlKGNodW5rU2hpZnRQb3MpO1xuXG4gICAgICAgICAgaWYgKGNodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIC8vIGNodW5rIHN0aWxsIGNvbnRhaW5zIHZhbHVlXG4gICAgICAgICAgICAvLyBidXQgbm90IHNoaWZ0ZWQgLSBtZWFucyBubyBtb3JlIGF2YWlsYWJsZSBjaGFycyB0byBzaGlmdFxuICAgICAgICAgICAgaWYgKCFzaGlmdENoYXIpIGJyZWFrO1xuICAgICAgICAgICAgKytjaTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2xlYW4gaWYgY2h1bmsgaGFzIG5vIHZhbHVlXG4gICAgICAgICAgICB0aGlzLmNodW5rcy5zcGxpY2UoY2ksIDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzaGlmdENoYXIpIHJldHVybiBzaGlmdENoYXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXRlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaHVua3M6IHRoaXMuY2h1bmtzLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGMuc3RhdGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZnJvbTogdGhpcy5mcm9tLFxuICAgICAgICAgIHN0b3A6IHRoaXMuc3RvcCxcbiAgICAgICAgICBibG9ja0luZGV4OiB0aGlzLmJsb2NrSW5kZXhcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgICB2YXIgY2h1bmtzID0gc3RhdGUuY2h1bmtzLFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIFtcImNodW5rc1wiXSk7XG5cbiAgICAgICAgX2V4dGVuZHModGhpcywgcHJvcHMpO1xuXG4gICAgICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzLm1hcChmdW5jdGlvbiAoY3N0YXRlKSB7XG4gICAgICAgICAgdmFyIGNodW5rID0gXCJjaHVua3NcIiBpbiBjc3RhdGUgPyBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKSA6IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoKTsgLy8gJEZsb3dGaXhNZSBhbHJlYWR5IGNoZWNrZWQgYWJvdmVcblxuICAgICAgICAgIGNodW5rLnN0YXRlID0gY3N0YXRlO1xuICAgICAgICAgIHJldHVybiBjaHVuaztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENodW5rc1RhaWxEZXRhaWxzO1xuICB9KCk7XG5cbiAgLyoqXHJcbiAgICBQYXR0ZXJuIG1hc2tcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0cy5ibG9ja3NcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRlZmluaXRpb25zXHJcbiAgICBAcGFyYW0ge3N0cmluZ30gb3B0cy5wbGFjZWhvbGRlckNoYXJcclxuICAgIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5sYXp5XHJcbiAgKi9cbiAgdmFyIE1hc2tlZFBhdHRlcm4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfTWFza2VkKSB7XG4gICAgX2luaGVyaXRzKE1hc2tlZFBhdHRlcm4sIF9NYXNrZWQpO1xuXG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiBTaW5nbGUgY2hhciBmb3IgZW1wdHkgaW5wdXQgKi9cblxuICAgIC8qKiBTaG93IHBsYWNlaG9sZGVyIG9ubHkgd2hlbiBuZWVkZWQgKi9cbiAgICBmdW5jdGlvbiBNYXNrZWRQYXR0ZXJuKCkge1xuICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkUGF0dGVybik7XG5cbiAgICAgIC8vIFRPRE8gdHlwZSAkU2hhcGU8TWFza2VkUGF0dGVybk9wdGlvbnM+PXt9IGRvZXMgbm90IHdvcmtcbiAgICAgIG9wdHMuZGVmaW5pdGlvbnMgPSBfZXh0ZW5kcyh7fSwgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUywgb3B0cy5kZWZpbml0aW9ucyk7XG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4pLmNhbGwodGhpcywgX29iamVjdFNwcmVhZCh7fSwgTWFza2VkUGF0dGVybi5ERUZBVUxUUywgb3B0cykpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hc2tlZFBhdHRlcm4sIFt7XG4gICAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUoKSB7XG4gICAgICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgICAgb3B0cy5kZWZpbml0aW9ucyA9IF9leHRlbmRzKHt9LCB0aGlzLmRlZmluaXRpb25zLCBvcHRzLmRlZmluaXRpb25zKTtcblxuICAgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICAgIHRoaXMuX3JlYnVpbGRNYXNrKCk7XG4gICAgICB9XG4gICAgICAvKiogKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVidWlsZE1hc2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVidWlsZE1hc2soKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGRlZnMgPSB0aGlzLmRlZmluaXRpb25zO1xuICAgICAgICB0aGlzLl9ibG9ja3MgPSBbXTtcbiAgICAgICAgdGhpcy5fc3RvcHMgPSBbXTtcbiAgICAgICAgdGhpcy5fbWFza2VkQmxvY2tzID0ge307XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdGhpcy5tYXNrO1xuICAgICAgICBpZiAoIXBhdHRlcm4gfHwgIWRlZnMpIHJldHVybjtcbiAgICAgICAgdmFyIHVubWFza2luZ0Jsb2NrID0gZmFsc2U7XG4gICAgICAgIHZhciBvcHRpb25hbEJsb2NrID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYmxvY2tzKSB7XG4gICAgICAgICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHAgPSBwYXR0ZXJuLnNsaWNlKGkpO1xuICAgICAgICAgICAgICB2YXIgYk5hbWVzID0gT2JqZWN0LmtleXMoX3RoaXMuYmxvY2tzKS5maWx0ZXIoZnVuY3Rpb24gKGJOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAuaW5kZXhPZihiTmFtZSkgPT09IDA7XG4gICAgICAgICAgICAgIH0pOyAvLyBvcmRlciBieSBrZXkgbGVuZ3RoXG5cbiAgICAgICAgICAgICAgYk5hbWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgICAgICAgfSk7IC8vIHVzZSBibG9jayBuYW1lIHdpdGggbWF4IGxlbmd0aFxuXG4gICAgICAgICAgICAgIHZhciBiTmFtZSA9IGJOYW1lc1swXTtcblxuICAgICAgICAgICAgICBpZiAoYk5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFza2VkQmxvY2sgPSBjcmVhdGVNYXNrKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICAgICAgcGFyZW50OiBfdGhpcyxcbiAgICAgICAgICAgICAgICAgIGxhenk6IF90aGlzLmxhenksXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6IF90aGlzLnBsYWNlaG9sZGVyQ2hhclxuICAgICAgICAgICAgICAgIH0sIF90aGlzLmJsb2Nrc1tiTmFtZV0pKTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXNrZWRCbG9jaykge1xuICAgICAgICAgICAgICAgICAgX3RoaXMuX2Jsb2Nrcy5wdXNoKG1hc2tlZEJsb2NrKTsgLy8gc3RvcmUgYmxvY2sgaW5kZXhcblxuXG4gICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdKSBfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICBfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXS5wdXNoKF90aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaSArPSBiTmFtZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0oKTtcblxuICAgICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNoYXIgPSBwYXR0ZXJuW2ldO1xuXG4gICAgICAgICAgdmFyIF9pc0lucHV0ID0gY2hhciBpbiBkZWZzO1xuXG4gICAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9wcy5wdXNoKHRoaXMuX2Jsb2Nrcy5sZW5ndGgpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2hhciA9PT0gJ3snIHx8IGNoYXIgPT09ICd9Jykge1xuICAgICAgICAgICAgdW5tYXNraW5nQmxvY2sgPSAhdW5tYXNraW5nQmxvY2s7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2hhciA9PT0gJ1snIHx8IGNoYXIgPT09ICddJykge1xuICAgICAgICAgICAgb3B0aW9uYWxCbG9jayA9ICFvcHRpb25hbEJsb2NrO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIpIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIGNoYXIgPSBwYXR0ZXJuW2ldO1xuICAgICAgICAgICAgaWYgKCFjaGFyKSBicmVhaztcbiAgICAgICAgICAgIF9pc0lucHV0ID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGRlZiA9IF9pc0lucHV0ID8gbmV3IFBhdHRlcm5JbnB1dERlZmluaXRpb24oe1xuICAgICAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICAgICAgbGF6eTogdGhpcy5sYXp5LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiB0aGlzLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgICAgIG1hc2s6IGRlZnNbY2hhcl0sXG4gICAgICAgICAgICBpc09wdGlvbmFsOiBvcHRpb25hbEJsb2NrXG4gICAgICAgICAgfSkgOiBuZXcgUGF0dGVybkZpeGVkRGVmaW5pdGlvbih7XG4gICAgICAgICAgICBjaGFyOiBjaGFyLFxuICAgICAgICAgICAgaXNVbm1hc2tpbmc6IHVubWFza2luZ0Jsb2NrXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLl9ibG9ja3MucHVzaChkZWYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc3RvcmVCZWZvcmVUYWlsU3RhdGVcIixcblxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3N0b3JlQmVmb3JlVGFpbFN0YXRlKCkge1xuICAgICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAgIC8vICRGbG93Rml4TWUgX3N0b3JlQmVmb3JlVGFpbFN0YXRlIGlzIG5vdCBleGlzdCBpbiBQYXR0ZXJuQmxvY2tcbiAgICAgICAgICBpZiAodHlwZW9mIGIuX3N0b3JlQmVmb3JlVGFpbFN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBiLl9zdG9yZUJlZm9yZVRhaWxTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcIl9zdG9yZUJlZm9yZVRhaWxTdGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3Jlc3RvcmVCZWZvcmVUYWlsU3RhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIF9yZXN0b3JlQmVmb3JlVGFpbFN0YXRlIGlzIG5vdCBleGlzdCBpbiBQYXR0ZXJuQmxvY2tcbiAgICAgICAgICBpZiAodHlwZW9mIGIuX3Jlc3RvcmVCZWZvcmVUYWlsU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGIuX3Jlc3RvcmVCZWZvcmVUYWlsU3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJfcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3Jlc2V0QmVmb3JlVGFpbFN0YXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Jlc2V0QmVmb3JlVGFpbFN0YXRlKCkge1xuICAgICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAgIC8vICRGbG93Rml4TWUgX3Jlc2V0QmVmb3JlVGFpbFN0YXRlIGlzIG5vdCBleGlzdCBpbiBQYXR0ZXJuQmxvY2tcbiAgICAgICAgICBpZiAodHlwZW9mIGIuX3Jlc2V0QmVmb3JlVGFpbFN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBiLl9yZXNldEJlZm9yZVRhaWxTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcIl9yZXNldEJlZm9yZVRhaWxTdGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVzZXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInJlc2V0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICByZXR1cm4gYi5yZXNldCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImRvQ29tbWl0XCIsXG5cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAgIHJldHVybiBiLmRvQ29tbWl0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuXG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJhcHBlbmRUYWlsXCIsIHRoaXMpLmNhbGwodGhpcywgdGFpbCkuYWdncmVnYXRlKHRoaXMuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICAgIHZhciBibG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMudmFsdWUubGVuZ3RoKTtcblxuICAgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgIGlmICghYmxvY2tJdGVyKSByZXR1cm4gZGV0YWlscztcblxuICAgICAgICBmb3IgKHZhciBiaSA9IGJsb2NrSXRlci5pbmRleDs7ICsrYmkpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcbiAgICAgICAgICBpZiAoIV9ibG9jaykgYnJlYWs7XG5cbiAgICAgICAgICB2YXIgYmxvY2tEZXRhaWxzID0gX2Jsb2NrLl9hcHBlbmRDaGFyKGNoLCBmbGFncyk7XG5cbiAgICAgICAgICB2YXIgc2tpcCA9IGJsb2NrRGV0YWlscy5za2lwO1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJsb2NrRGV0YWlscyk7XG4gICAgICAgICAgaWYgKHNraXAgfHwgYmxvY2tEZXRhaWxzLnJhd0luc2VydGVkKSBicmVhazsgLy8gZ28gbmV4dCBjaGFyXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICB2YXIgY2h1bmtUYWlsID0gbmV3IENodW5rc1RhaWxEZXRhaWxzKCk7XG4gICAgICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuIGNodW5rVGFpbDtcblxuICAgICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIGJpLCBiRnJvbVBvcywgYlRvUG9zKSB7XG4gICAgICAgICAgdmFyIGJsb2NrQ2h1bmsgPSBiLmV4dHJhY3RUYWlsKGJGcm9tUG9zLCBiVG9Qb3MpO1xuICAgICAgICAgIGJsb2NrQ2h1bmsuc3RvcCA9IF90aGlzMi5fZmluZFN0b3BCZWZvcmUoYmkpO1xuICAgICAgICAgIGJsb2NrQ2h1bmsuZnJvbSA9IF90aGlzMi5fYmxvY2tTdGFydFBvcyhiaSk7XG4gICAgICAgICAgaWYgKGJsb2NrQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykgYmxvY2tDaHVuay5ibG9ja0luZGV4ID0gYmk7XG4gICAgICAgICAgY2h1bmtUYWlsLmV4dGVuZChibG9ja0NodW5rKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNodW5rVGFpbDtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuICcnO1xuICAgICAgICB2YXIgaW5wdXQgPSAnJztcblxuICAgICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIF8sIGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgICAgICAgaW5wdXQgKz0gYi5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZmluZFN0b3BCZWZvcmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZFN0b3BCZWZvcmUoYmxvY2tJbmRleCkge1xuICAgICAgICB2YXIgc3RvcEJlZm9yZTtcblxuICAgICAgICBmb3IgKHZhciBzaSA9IDA7IHNpIDwgdGhpcy5fc3RvcHMubGVuZ3RoOyArK3NpKSB7XG4gICAgICAgICAgdmFyIHN0b3AgPSB0aGlzLl9zdG9wc1tzaV07XG4gICAgICAgICAgaWYgKHN0b3AgPD0gYmxvY2tJbmRleCkgc3RvcEJlZm9yZSA9IHN0b3A7ZWxzZSBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdG9wQmVmb3JlO1xuICAgICAgfVxuICAgICAgLyoqIEFwcGVuZHMgcGxhY2Vob2xkZXIgZGVwZW5kaW5nIG9uIGxhemluZXNzICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKHRvQmxvY2tJbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgIGlmICh0aGlzLmxhenkgJiYgdG9CbG9ja0luZGV4ID09IG51bGwpIHJldHVybiBkZXRhaWxzO1xuXG4gICAgICAgIHZhciBzdGFydEJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIGlmICghc3RhcnRCbG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xuICAgICAgICB2YXIgc3RhcnRCbG9ja0luZGV4ID0gc3RhcnRCbG9ja0l0ZXIuaW5kZXg7XG4gICAgICAgIHZhciBlbmRCbG9ja0luZGV4ID0gdG9CbG9ja0luZGV4ICE9IG51bGwgPyB0b0Jsb2NrSW5kZXggOiB0aGlzLl9ibG9ja3MubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuX2Jsb2Nrcy5zbGljZShzdGFydEJsb2NrSW5kZXgsIGVuZEJsb2NrSW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGIuX2FwcGVuZFBsYWNlaG9sZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lIGBfYmxvY2tzYCBtYXkgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIHZhciBhcmdzID0gYi5fYmxvY2tzICE9IG51bGwgPyBbYi5fYmxvY2tzLmxlbmd0aF0gOiBbXTtcblxuICAgICAgICAgICAgdmFyIGJEZXRhaWxzID0gYi5fYXBwZW5kUGxhY2Vob2xkZXIuYXBwbHkoYiwgYXJncyk7XG5cbiAgICAgICAgICAgIF90aGlzMy5fdmFsdWUgKz0gYkRldGFpbHMuaW5zZXJ0ZWQ7XG4gICAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShiRGV0YWlscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICAgIH1cbiAgICAgIC8qKiBGaW5kcyBibG9jayBpbiBwb3MgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfbWFwUG9zVG9CbG9ja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYXBQb3NUb0Jsb2NrKHBvcykge1xuICAgICAgICB2YXIgYWNjVmFsID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgYmkgPSAwOyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrMiA9IHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgICAgICAgdmFyIGJsb2NrU3RhcnRQb3MgPSBhY2NWYWwubGVuZ3RoO1xuICAgICAgICAgIGFjY1ZhbCArPSBfYmxvY2syLnZhbHVlO1xuXG4gICAgICAgICAgaWYgKHBvcyA8PSBhY2NWYWwubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpbmRleDogYmksXG4gICAgICAgICAgICAgIG9mZnNldDogcG9zIC0gYmxvY2tTdGFydFBvc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKiAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9ibG9ja1N0YXJ0UG9zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2Jsb2NrU3RhcnRQb3MoYmxvY2tJbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnNsaWNlKDAsIGJsb2NrSW5kZXgpLnJlZHVjZShmdW5jdGlvbiAocG9zLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIHBvcyArPSBiLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgICAvKiogKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZm9yRWFjaEJsb2Nrc0luUmFuZ2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcykge1xuICAgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgICB2YXIgZnJvbUJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2soZnJvbVBvcyk7XG5cbiAgICAgICAgaWYgKGZyb21CbG9ja0l0ZXIpIHtcbiAgICAgICAgICB2YXIgdG9CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRvUG9zKTsgLy8gcHJvY2VzcyBmaXJzdCBibG9ja1xuXG5cbiAgICAgICAgICB2YXIgaXNTYW1lQmxvY2sgPSB0b0Jsb2NrSXRlciAmJiBmcm9tQmxvY2tJdGVyLmluZGV4ID09PSB0b0Jsb2NrSXRlci5pbmRleDtcbiAgICAgICAgICB2YXIgZnJvbUJsb2NrU3RhcnRQb3MgPSBmcm9tQmxvY2tJdGVyLm9mZnNldDtcbiAgICAgICAgICB2YXIgZnJvbUJsb2NrRW5kUG9zID0gdG9CbG9ja0l0ZXIgJiYgaXNTYW1lQmxvY2sgPyB0b0Jsb2NrSXRlci5vZmZzZXQgOiB0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0udmFsdWUubGVuZ3RoO1xuICAgICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1tmcm9tQmxvY2tJdGVyLmluZGV4XSwgZnJvbUJsb2NrSXRlci5pbmRleCwgZnJvbUJsb2NrU3RhcnRQb3MsIGZyb21CbG9ja0VuZFBvcyk7XG5cbiAgICAgICAgICBpZiAodG9CbG9ja0l0ZXIgJiYgIWlzU2FtZUJsb2NrKSB7XG4gICAgICAgICAgICAvLyBwcm9jZXNzIGludGVybWVkaWF0ZSBibG9ja3NcbiAgICAgICAgICAgIGZvciAodmFyIGJpID0gZnJvbUJsb2NrSXRlci5pbmRleCArIDE7IGJpIDwgdG9CbG9ja0l0ZXIuaW5kZXg7ICsrYmkpIHtcbiAgICAgICAgICAgICAgZm4odGhpcy5fYmxvY2tzW2JpXSwgYmksIDAsIHRoaXMuX2Jsb2Nrc1tiaV0udmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgIH0gLy8gcHJvY2VzcyBsYXN0IGJsb2NrXG5cblxuICAgICAgICAgICAgZm4odGhpcy5fYmxvY2tzW3RvQmxvY2tJdGVyLmluZGV4XSwgdG9CbG9ja0l0ZXIuaW5kZXgsIDAsIHRvQmxvY2tJdGVyLm9mZnNldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuXG4gICAgICAgIHZhciByZW1vdmVEZXRhaWxzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInJlbW92ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIF8sIGJGcm9tUG9zLCBiVG9Qb3MpIHtcbiAgICAgICAgICByZW1vdmVEZXRhaWxzLmFnZ3JlZ2F0ZShiLnJlbW92ZShiRnJvbVBvcywgYlRvUG9zKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZW1vdmVEZXRhaWxzO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgICAgLy8gVE9ETyByZWZhY3RvciAtIGV4dHJhY3QgYWxpZ25ibG9ja1xuICAgICAgICB2YXIgYmVnaW5CbG9ja0RhdGEgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKGN1cnNvclBvcykgfHwge1xuICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgIG9mZnNldDogMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgYmVnaW5CbG9ja09mZnNldCA9IGJlZ2luQmxvY2tEYXRhLm9mZnNldCxcbiAgICAgICAgICAgIGJlZ2luQmxvY2tJbmRleCA9IGJlZ2luQmxvY2tEYXRhLmluZGV4O1xuICAgICAgICB2YXIgYmVnaW5CbG9jayA9IHRoaXMuX2Jsb2Nrc1tiZWdpbkJsb2NrSW5kZXhdO1xuICAgICAgICBpZiAoIWJlZ2luQmxvY2spIHJldHVybiBjdXJzb3JQb3M7XG4gICAgICAgIHZhciBiZWdpbkJsb2NrQ3Vyc29yUG9zID0gYmVnaW5CbG9ja09mZnNldDsgLy8gaWYgcG9zaXRpb24gaW5zaWRlIGJsb2NrIC0gdHJ5IHRvIGFkanVzdCBpdFxuXG4gICAgICAgIGlmIChiZWdpbkJsb2NrQ3Vyc29yUG9zICE9PSAwICYmIGJlZ2luQmxvY2tDdXJzb3JQb3MgPCBiZWdpbkJsb2NrLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIGJlZ2luQmxvY2tDdXJzb3JQb3MgPSBiZWdpbkJsb2NrLm5lYXJlc3RJbnB1dFBvcyhiZWdpbkJsb2NrT2Zmc2V0LCBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXJzb3JBdFJpZ2h0ID0gYmVnaW5CbG9ja0N1cnNvclBvcyA9PT0gYmVnaW5CbG9jay52YWx1ZS5sZW5ndGg7XG4gICAgICAgIHZhciBjdXJzb3JBdExlZnQgPSBiZWdpbkJsb2NrQ3Vyc29yUG9zID09PSAwOyAvLyAgY3Vyc29yIGlzIElOU0lERSBmaXJzdCBibG9jayAobm90IGF0IGJvdW5kcylcblxuICAgICAgICBpZiAoIWN1cnNvckF0TGVmdCAmJiAhY3Vyc29yQXRSaWdodCkgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmVnaW5CbG9ja0luZGV4KSArIGJlZ2luQmxvY2tDdXJzb3JQb3M7XG4gICAgICAgIHZhciBzZWFyY2hCbG9ja0luZGV4ID0gY3Vyc29yQXRSaWdodCA/IGJlZ2luQmxvY2tJbmRleCArIDEgOiBiZWdpbkJsb2NrSW5kZXg7XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgICAgICAvLyBOT05FIGRpcmVjdGlvbiB1c2VkIHRvIGNhbGN1bGF0ZSBzdGFydCBpbnB1dCBwb3NpdGlvbiBpZiBubyBjaGFycyB3ZXJlIHJlbW92ZWRcbiAgICAgICAgICAvLyBGT1IgTk9ORTpcbiAgICAgICAgICAvLyAtXG4gICAgICAgICAgLy8gaW5wdXR8YW55XG4gICAgICAgICAgLy8gLT5cbiAgICAgICAgICAvLyAgYW55fGlucHV0XG4gICAgICAgICAgLy8gPC1cbiAgICAgICAgICAvLyAgZmlsbGVkLWlucHV0fGFueVxuICAgICAgICAgIC8vIGNoZWNrIGlmIGZpcnN0IGJsb2NrIGF0IGxlZnQgaXMgaW5wdXRcbiAgICAgICAgICBpZiAoc2VhcmNoQmxvY2tJbmRleCA+IDApIHtcbiAgICAgICAgICAgIHZhciBibG9ja0luZGV4QXRMZWZ0ID0gc2VhcmNoQmxvY2tJbmRleCAtIDE7XG4gICAgICAgICAgICB2YXIgYmxvY2tBdExlZnQgPSB0aGlzLl9ibG9ja3NbYmxvY2tJbmRleEF0TGVmdF07XG4gICAgICAgICAgICB2YXIgYmxvY2tJbnB1dFBvcyA9IGJsb2NrQXRMZWZ0Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7IC8vIGlzIGlucHV0XG5cbiAgICAgICAgICAgIGlmICghYmxvY2tBdExlZnQudmFsdWUubGVuZ3RoIHx8IGJsb2NrSW5wdXRQb3MgIT09IGJsb2NrQXRMZWZ0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhzZWFyY2hCbG9ja0luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIC0+XG5cblxuICAgICAgICAgIHZhciBmaXJzdElucHV0QXRSaWdodCA9IHNlYXJjaEJsb2NrSW5kZXg7XG5cbiAgICAgICAgICBmb3IgKHZhciBiaSA9IGZpcnN0SW5wdXRBdFJpZ2h0OyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgICAgICAgIHZhciBfYmxvY2szID0gdGhpcy5fYmxvY2tzW2JpXTtcblxuICAgICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zID0gX2Jsb2NrMy5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xuXG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3MgIT09IF9ibG9jazMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJpKSArIF9ibG9ja0lucHV0UG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgICAvLyAtXG4gICAgICAgICAgLy8gIGFueXxmaWxsZWQtaW5wdXRcbiAgICAgICAgICAvLyA8LVxuICAgICAgICAgIC8vICBhbnl8Zmlyc3Qgbm90IGVtcHR5IGlzIG5vdC1sZW4tYWxpZ25lZFxuICAgICAgICAgIC8vICBub3QtMC1hbGlnbmVkfGFueVxuICAgICAgICAgIC8vIC0+XG4gICAgICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWQgb3IgZW5kXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZmlyc3QgYmxvY2sgYXQgcmlnaHQgaXMgZmlsbGVkIGlucHV0XG4gICAgICAgICAgdmFyIGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQ7XG5cbiAgICAgICAgICBmb3IgKHZhciBfYmkgPSBzZWFyY2hCbG9ja0luZGV4OyBfYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1tfYmldLnZhbHVlKSB7XG4gICAgICAgICAgICAgIGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQgPSBfYmk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBmaWxsZWRCbG9jayA9IHRoaXMuX2Jsb2Nrc1tmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0XTtcblxuICAgICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zMiA9IGZpbGxlZEJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uUklHSFQpO1xuXG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3MyID09PSAwICYmIGZpbGxlZEJsb2NrLnVubWFza2VkVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIC8vIGZpbGxlZCBibG9jayBpcyBpbnB1dFxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0KSArIF9ibG9ja0lucHV0UG9zMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIDwtXG4gICAgICAgICAgLy8gZmluZCB0aGlzIHZhcnNcblxuXG4gICAgICAgICAgdmFyIGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ID0gLTE7XG4gICAgICAgICAgdmFyIGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXg7IC8vIFRPRE8gY29uc2lkZXIgbmVzdGVkIGVtcHR5IGlucHV0c1xuXG4gICAgICAgICAgZm9yICh2YXIgX2JpMiA9IHNlYXJjaEJsb2NrSW5kZXggLSAxOyBfYmkyID49IDA7IC0tX2JpMikge1xuICAgICAgICAgICAgdmFyIF9ibG9jazQgPSB0aGlzLl9ibG9ja3NbX2JpMl07XG5cbiAgICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczMgPSBfYmxvY2s0Lm5lYXJlc3RJbnB1dFBvcyhfYmxvY2s0LnZhbHVlLmxlbmd0aCwgRElSRUNUSU9OLkZPUkNFX0xFRlQpO1xuXG4gICAgICAgICAgICBpZiAoZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCA9PSBudWxsICYmICghX2Jsb2NrNC52YWx1ZSB8fCBfYmxvY2tJbnB1dFBvczMgIT09IDApKSB7XG4gICAgICAgICAgICAgIGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXggPSBfYmkyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3MzICE9PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczMgIT09IF9ibG9jazQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gYWxpZ25lZCBpbnNpZGUgYmxvY2sgLSByZXR1cm4gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmkyKSArIF9ibG9ja0lucHV0UG9zMztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBmb3VuZCBmaWxsZWRcbiAgICAgICAgICAgICAgICBmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCA9IF9iaTI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkge1xuICAgICAgICAgICAgLy8gdHJ5IGZpbmQgZmlyc3QgZW1wdHkgaW5wdXQgYmVmb3JlIHN0YXJ0IHNlYXJjaGluZyBwb3NpdGlvbiBvbmx5IHdoZW4gbm90IGZvcmNlZFxuICAgICAgICAgICAgZm9yICh2YXIgX2JpMyA9IGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ICsgMTsgX2JpMyA8PSBNYXRoLm1pbihzZWFyY2hCbG9ja0luZGV4LCB0aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7ICsrX2JpMykge1xuICAgICAgICAgICAgICB2YXIgX2Jsb2NrNSA9IHRoaXMuX2Jsb2Nrc1tfYmkzXTtcblxuICAgICAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M0ID0gX2Jsb2NrNS5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xuXG4gICAgICAgICAgICAgIHZhciBibG9ja0FsaWduZWRQb3MgPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTMpICsgX2Jsb2NrSW5wdXRQb3M0OyAvLyBpZiBibG9jayBpcyBlbXB0eSBhbmQgbGFzdCBvciBub3QgbGF6eSBpbnB1dFxuXG5cbiAgICAgICAgICAgICAgaWYgKCghX2Jsb2NrNS52YWx1ZS5sZW5ndGggJiYgYmxvY2tBbGlnbmVkUG9zID09PSB0aGlzLnZhbHVlLmxlbmd0aCB8fCBfYmxvY2tJbnB1dFBvczQgIT09IF9ibG9jazUudmFsdWUubGVuZ3RoKSAmJiBibG9ja0FsaWduZWRQb3MgPD0gY3Vyc29yUG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrQWxpZ25lZFBvcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gcHJvY2VzcyBvdmVyZmxvd1xuXG5cbiAgICAgICAgICBpZiAoZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXgpICsgdGhpcy5fYmxvY2tzW2ZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4XS52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgfSAvLyBmb3IgbGF6eSBpZiBoYXMgYWxpZ25lZCBsZWZ0IGluc2lkZSBmaXhlZCBhbmQgaGFzIGNhbWUgdG8gdGhlIHN0YXJ0IC0gdXNlIHN0YXJ0IHBvc2l0aW9uXG5cblxuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUIHx8IHRoaXMubGF6eSAmJiAhdGhpcy5leHRyYWN0SW5wdXQoKSAmJiAhaXNJbnB1dCh0aGlzLl9ibG9ja3Nbc2VhcmNoQmxvY2tJbmRleF0pKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4KTtcbiAgICAgICAgICB9IC8vIGZpbmQgZmlyc3QgaW5wdXRcblxuXG4gICAgICAgICAgZm9yICh2YXIgX2JpNCA9IHNlYXJjaEJsb2NrSW5kZXg7IF9iaTQgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTQpIHtcbiAgICAgICAgICAgIHZhciBfYmxvY2s2ID0gdGhpcy5fYmxvY2tzW19iaTRdO1xuXG4gICAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M1ID0gX2Jsb2NrNi5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpOyAvLyBpcyBpbnB1dFxuXG5cbiAgICAgICAgICAgIGlmICghX2Jsb2NrNi52YWx1ZS5sZW5ndGggfHwgX2Jsb2NrSW5wdXRQb3M1ICE9PSBfYmxvY2s2LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk0KSArIF9ibG9ja0lucHV0UG9zNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5SSUdIVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkge1xuICAgICAgICAgIC8vIC0+XG4gICAgICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWQgYW5kIGZpbGxlZFxuICAgICAgICAgIC8vICBhbnl8bm90LWxlbi1hbGlnbmVkXG4gICAgICAgICAgLy8gPC1cbiAgICAgICAgICB2YXIgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4O1xuICAgICAgICAgIHZhciBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2JpNSA9IHNlYXJjaEJsb2NrSW5kZXg7IF9iaTUgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTUpIHtcbiAgICAgICAgICAgIHZhciBfYmxvY2s3ID0gdGhpcy5fYmxvY2tzW19iaTVdO1xuXG4gICAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M2ID0gX2Jsb2NrNy5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xuXG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M2ICE9PSBfYmxvY2s3LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk1KSArIF9ibG9ja0lucHV0UG9zNjtcbiAgICAgICAgICAgICAgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4ID0gX2JpNTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleCAhPSBudWxsICYmIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2JpNiA9IGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleDsgX2JpNiA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrX2JpNikge1xuICAgICAgICAgICAgICB2YXIgX2Jsb2NrOCA9IHRoaXMuX2Jsb2Nrc1tfYmk2XTtcblxuICAgICAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M3ID0gX2Jsb2NrOC5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLkZPUkNFX1JJR0hUKTtcblxuICAgICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M3ICE9PSBfYmxvY2s4LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTYpICsgX2Jsb2NrSW5wdXRQb3M3O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCA/IHRoaXMudmFsdWUubGVuZ3RoIDogZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHZhciBfYmk3ID0gTWF0aC5taW4oc2VhcmNoQmxvY2tJbmRleCwgdGhpcy5fYmxvY2tzLmxlbmd0aCAtIDEpOyBfYmk3ID49IDA7IC0tX2JpNykge1xuICAgICAgICAgICAgdmFyIF9ibG9jazkgPSB0aGlzLl9ibG9ja3NbX2JpN107XG5cbiAgICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczggPSBfYmxvY2s5Lm5lYXJlc3RJbnB1dFBvcyhfYmxvY2s5LnZhbHVlLmxlbmd0aCwgRElSRUNUSU9OLkxFRlQpO1xuXG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M4ICE9PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBhbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk3KSArIF9ibG9ja0lucHV0UG9zODtcblxuICAgICAgICAgICAgICBpZiAoYWxpZ25lZFBvcyA+PSBjdXJzb3JQb3MpIHJldHVybiBhbGlnbmVkUG9zO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgICAgfVxuICAgICAgLyoqIEdldCBibG9jayBieSBuYW1lICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibWFza2VkQmxvY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrZWRCbG9jayhuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tlZEJsb2NrcyhuYW1lKVswXTtcbiAgICAgIH1cbiAgICAgIC8qKiBHZXQgYWxsIGJsb2NrcyBieSBuYW1lICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibWFza2VkQmxvY2tzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbWFza2VkQmxvY2tzKG5hbWUpIHtcbiAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGluZGljZXMgPSB0aGlzLl9tYXNrZWRCbG9ja3NbbmFtZV07XG4gICAgICAgIGlmICghaW5kaWNlcykgcmV0dXJuIFtdO1xuICAgICAgICByZXR1cm4gaW5kaWNlcy5tYXAoZnVuY3Rpb24gKGdpKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5fYmxvY2tzW2dpXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXRlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCB0aGlzKSwge1xuICAgICAgICAgIF9ibG9ja3M6IHRoaXMuX2Jsb2Nrcy5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgIHJldHVybiBiLnN0YXRlO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICAgIHZhciBfYmxvY2tzID0gc3RhdGUuX2Jsb2NrcyxcbiAgICAgICAgICAgIG1hc2tlZFN0YXRlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHN0YXRlLCBbXCJfYmxvY2tzXCJdKTtcblxuICAgICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYiwgYmkpIHtcbiAgICAgICAgICByZXR1cm4gYi5zdGF0ZSA9IF9ibG9ja3NbYmldO1xuICAgICAgICB9KTtcblxuICAgICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwic3RhdGVcIiwgbWFza2VkU3RhdGUsIHRoaXMsIHRydWUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5ldmVyeShmdW5jdGlvbiAoYikge1xuICAgICAgICAgIHJldHVybiBiLmlzQ29tcGxldGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgYikge1xuICAgICAgICAgIHJldHVybiBzdHIgKz0gYi51bm1hc2tlZFZhbHVlO1xuICAgICAgICB9LCAnJyk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInZhbHVlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgLy8gVE9ETyByZXR1cm4gX3ZhbHVlIHdoZW4gbm90IGluIGNoYW5nZT9cbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgYikge1xuICAgICAgICAgIHJldHVybiBzdHIgKz0gYi52YWx1ZTtcbiAgICAgICAgfSwgJycpO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJ2YWx1ZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1hc2tlZFBhdHRlcm47XG4gIH0oTWFza2VkKTtcbiAgTWFza2VkUGF0dGVybi5ERUZBVUxUUyA9IHtcbiAgICBsYXp5OiB0cnVlLFxuICAgIHBsYWNlaG9sZGVyQ2hhcjogJ18nXG4gIH07XG4gIE1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSID0gJ2AnO1xuICBNYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSID0gJ1xcXFwnO1xuICBNYXNrZWRQYXR0ZXJuLklucHV0RGVmaW5pdGlvbiA9IFBhdHRlcm5JbnB1dERlZmluaXRpb247XG4gIE1hc2tlZFBhdHRlcm4uRml4ZWREZWZpbml0aW9uID0gUGF0dGVybkZpeGVkRGVmaW5pdGlvbjtcblxuICBmdW5jdGlvbiBpc0lucHV0KGJsb2NrKSB7XG4gICAgaWYgKCFibG9jaykgcmV0dXJuIGZhbHNlO1xuICAgIHZhciB2YWx1ZSA9IGJsb2NrLnZhbHVlO1xuICAgIHJldHVybiAhdmFsdWUgfHwgYmxvY2submVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKSAhPT0gdmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgLyoqIFBhdHRlcm4gd2hpY2ggYWNjZXB0cyByYW5nZXMgKi9cbiAgdmFyIE1hc2tlZFJhbmdlID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX01hc2tlZFBhdHRlcm4pIHtcbiAgICBfaW5oZXJpdHMoTWFza2VkUmFuZ2UsIF9NYXNrZWRQYXR0ZXJuKTtcblxuICAgIGZ1bmN0aW9uIE1hc2tlZFJhbmdlKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFJhbmdlKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hc2tlZFJhbmdlLCBbe1xuICAgICAga2V5OiBcIl91cGRhdGVcIixcblxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAgIC8vIFRPRE8gdHlwZVxuICAgICAgICBvcHRzID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgdG86IHRoaXMudG8gfHwgMCxcbiAgICAgICAgICBmcm9tOiB0aGlzLmZyb20gfHwgMFxuICAgICAgICB9LCBvcHRzKTtcbiAgICAgICAgdmFyIG1heExlbmd0aCA9IFN0cmluZyhvcHRzLnRvKS5sZW5ndGg7XG4gICAgICAgIGlmIChvcHRzLm1heExlbmd0aCAhPSBudWxsKSBtYXhMZW5ndGggPSBNYXRoLm1heChtYXhMZW5ndGgsIG9wdHMubWF4TGVuZ3RoKTtcbiAgICAgICAgb3B0cy5tYXhMZW5ndGggPSBtYXhMZW5ndGg7XG4gICAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKG9wdHMuZnJvbSkucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgICB2YXIgdG9TdHIgPSBTdHJpbmcob3B0cy50bykucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgICB2YXIgc2FtZUNoYXJzQ291bnQgPSAwO1xuXG4gICAgICAgIHdoaWxlIChzYW1lQ2hhcnNDb3VudCA8IHRvU3RyLmxlbmd0aCAmJiB0b1N0cltzYW1lQ2hhcnNDb3VudF0gPT09IGZyb21TdHJbc2FtZUNoYXJzQ291bnRdKSB7XG4gICAgICAgICAgKytzYW1lQ2hhcnNDb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdHMubWFzayA9IHRvU3RyLnNsaWNlKDAsIHNhbWVDaGFyc0NvdW50KS5yZXBsYWNlKC8wL2csICdcXFxcMCcpICsgJzAnLnJlcGVhdChtYXhMZW5ndGggLSBzYW1lQ2hhcnNDb3VudCk7XG5cbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJib3VuZGFyaWVzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYm91bmRhcmllcyhzdHIpIHtcbiAgICAgICAgdmFyIG1pbnN0ciA9ICcnO1xuICAgICAgICB2YXIgbWF4c3RyID0gJyc7XG5cbiAgICAgICAgdmFyIF9yZWYgPSBzdHIubWF0Y2goL14oXFxEKikoXFxkKikoXFxEKikvKSB8fCBbXSxcbiAgICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMyksXG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9IF9yZWYyWzFdLFxuICAgICAgICAgICAgbnVtID0gX3JlZjJbMl07XG5cbiAgICAgICAgaWYgKG51bSkge1xuICAgICAgICAgIG1pbnN0ciA9ICcwJy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICAgICAgICBtYXhzdHIgPSAnOScucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XG4gICAgICAgIH1cblxuICAgICAgICBtaW5zdHIgPSBtaW5zdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgICBtYXhzdHIgPSBtYXhzdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnOScpO1xuICAgICAgICByZXR1cm4gW21pbnN0ciwgbWF4c3RyXTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgc3RyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykuY2FsbCh0aGlzLCBzdHIsIGZsYWdzKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgICBpZiAoIXRoaXMuYXV0b2ZpeCkgcmV0dXJuIHN0cjtcbiAgICAgICAgdmFyIGZyb21TdHIgPSBTdHJpbmcodGhpcy5mcm9tKS5wYWRTdGFydCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKHRoaXMudG8pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgICB2YXIgdmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIHByZXBTdHIgPSAnJztcblxuICAgICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xuICAgICAgICAgIHZhciBuZXh0VmFsID0gdmFsICsgcHJlcFN0ciArIHN0cltjaV07XG5cbiAgICAgICAgICB2YXIgX3RoaXMkYm91bmRhcmllcyA9IHRoaXMuYm91bmRhcmllcyhuZXh0VmFsKSxcbiAgICAgICAgICAgICAgX3RoaXMkYm91bmRhcmllczIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzLCAyKSxcbiAgICAgICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczJbMF0sXG4gICAgICAgICAgICAgIG1heHN0ciA9IF90aGlzJGJvdW5kYXJpZXMyWzFdO1xuXG4gICAgICAgICAgaWYgKE51bWJlcihtYXhzdHIpIDwgdGhpcy5mcm9tKSBwcmVwU3RyICs9IGZyb21TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtlbHNlIGlmIChOdW1iZXIobWluc3RyKSA+IHRoaXMudG8pIHByZXBTdHIgKz0gdG9TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtlbHNlIHByZXBTdHIgKz0gc3RyW2NpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmVwU3RyO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgICB2YXIgc3RyID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIGZpcnN0Tm9uWmVybyA9IHN0ci5zZWFyY2goL1teMF0vKTtcbiAgICAgICAgaWYgKGZpcnN0Tm9uWmVybyA9PT0gLTEgJiYgc3RyLmxlbmd0aCA8PSB0aGlzLl9tYXRjaEZyb20pIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHZhciBfdGhpcyRib3VuZGFyaWVzMyA9IHRoaXMuYm91bmRhcmllcyhzdHIpLFxuICAgICAgICAgICAgX3RoaXMkYm91bmRhcmllczQgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzMywgMiksXG4gICAgICAgICAgICBtaW5zdHIgPSBfdGhpcyRib3VuZGFyaWVzNFswXSxcbiAgICAgICAgICAgIG1heHN0ciA9IF90aGlzJGJvdW5kYXJpZXM0WzFdO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5mcm9tIDw9IE51bWJlcihtYXhzdHIpICYmIE51bWJlcihtaW5zdHIpIDw9IHRoaXMudG8gJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX21hdGNoRnJvbVwiLFxuXG4gICAgICAvKipcclxuICAgICAgICBPcHRpb25hbGx5IHNldHMgbWF4IGxlbmd0aCBvZiBwYXR0ZXJuLlxyXG4gICAgICAgIFVzZWQgd2hlbiBwYXR0ZXJuIGxlbmd0aCBpcyBsb25nZXIgdGhlbiBgdG9gIHBhcmFtIGxlbmd0aC4gUGFkcyB6ZXJvcyBhdCBzdGFydCBpbiB0aGlzIGNhc2UuXHJcbiAgICAgICovXG5cbiAgICAgIC8qKiBNaW4gYm91bmQgKi9cblxuICAgICAgLyoqIE1heCBib3VuZCAqL1xuXG4gICAgICAvKiogKi9cbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGggLSBTdHJpbmcodGhpcy5mcm9tKS5sZW5ndGg7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJpc0NvbXBsZXRlXCIsIHRoaXMpICYmIEJvb2xlYW4odGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1hc2tlZFJhbmdlO1xuICB9KE1hc2tlZFBhdHRlcm4pO1xuXG4gIC8qKiBEYXRlIG1hc2sgKi9cblxuICB2YXIgTWFza2VkRGF0ZSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gICAgX2luaGVyaXRzKE1hc2tlZERhdGUsIF9NYXNrZWRQYXR0ZXJuKTtcblxuICAgIC8qKiBQYXJzZSBzdHJpbmcgdG8gRGF0ZSAqL1xuXG4gICAgLyoqIEZvcm1hdCBEYXRlIHRvIHN0cmluZyAqL1xuXG4gICAgLyoqIFBhdHRlcm4gbWFzayBmb3IgZGF0ZSBhY2NvcmRpbmcgdG8ge0BsaW5rIE1hc2tlZERhdGUjZm9ybWF0fSAqL1xuXG4gICAgLyoqIFN0YXJ0IGRhdGUgKi9cblxuICAgIC8qKiBFbmQgZGF0ZSAqL1xuXG4gICAgLyoqICovXG5cbiAgICAvKipcclxuICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICovXG4gICAgZnVuY3Rpb24gTWFza2VkRGF0ZShvcHRzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRGF0ZSk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZSkuY2FsbCh0aGlzLCBfb2JqZWN0U3ByZWFkKHt9LCBNYXNrZWREYXRlLkRFRkFVTFRTLCBvcHRzKSkpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoTWFza2VkRGF0ZSwgW3tcbiAgICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzLm1hc2sgPT09IERhdGUpIGRlbGV0ZSBvcHRzLm1hc2s7XG5cbiAgICAgICAgaWYgKG9wdHMucGF0dGVybikge1xuICAgICAgICAgIG9wdHMubWFzayA9IG9wdHMucGF0dGVybjtcbiAgICAgICAgICBkZWxldGUgb3B0cy5wYXR0ZXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJsb2NrcyA9IG9wdHMuYmxvY2tzO1xuICAgICAgICBvcHRzLmJsb2NrcyA9IF9leHRlbmRzKHt9LCBNYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUygpKTsgLy8gYWRqdXN0IHllYXIgYmxvY2tcblxuICAgICAgICBpZiAob3B0cy5taW4pIG9wdHMuYmxvY2tzLlkuZnJvbSA9IG9wdHMubWluLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmIChvcHRzLm1heCkgb3B0cy5ibG9ja3MuWS50byA9IG9wdHMubWF4LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgaWYgKG9wdHMubWluICYmIG9wdHMubWF4ICYmIG9wdHMuYmxvY2tzLlkuZnJvbSA9PT0gb3B0cy5ibG9ja3MuWS50bykge1xuICAgICAgICAgIG9wdHMuYmxvY2tzLm0uZnJvbSA9IG9wdHMubWluLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgIG9wdHMuYmxvY2tzLm0udG8gPSBvcHRzLm1heC5nZXRNb250aCgpICsgMTtcblxuICAgICAgICAgIGlmIChvcHRzLmJsb2Nrcy5tLmZyb20gPT09IG9wdHMuYmxvY2tzLm0udG8pIHtcbiAgICAgICAgICAgIG9wdHMuYmxvY2tzLmQuZnJvbSA9IG9wdHMubWluLmdldERhdGUoKTtcbiAgICAgICAgICAgIG9wdHMuYmxvY2tzLmQudG8gPSBvcHRzLm1heC5nZXREYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX2V4dGVuZHMob3B0cy5ibG9ja3MsIGJsb2Nrcyk7IC8vIGFkZCBhdXRvZml4XG5cblxuICAgICAgICBPYmplY3Qua2V5cyhvcHRzLmJsb2NrcykuZm9yRWFjaChmdW5jdGlvbiAoYmspIHtcbiAgICAgICAgICB2YXIgYiA9IG9wdHMuYmxvY2tzW2JrXTtcbiAgICAgICAgICBpZiAoISgnYXV0b2ZpeCcgaW4gYikpIGIuYXV0b2ZpeCA9IG9wdHMuYXV0b2ZpeDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgICB2YXIgX2dldDI7XG5cbiAgICAgICAgdmFyIGRhdGUgPSB0aGlzLmRhdGU7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkgJiYgKCF0aGlzLmlzQ29tcGxldGUgfHwgdGhpcy5pc0RhdGVFeGlzdCh0aGlzLnZhbHVlKSAmJiBkYXRlICE9IG51bGwgJiYgKHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPD0gZGF0ZSkgJiYgKHRoaXMubWF4ID09IG51bGwgfHwgZGF0ZSA8PSB0aGlzLm1heCkpO1xuICAgICAgfVxuICAgICAgLyoqIENoZWNrcyBpZiBkYXRlIGlzIGV4aXN0cyAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImlzRGF0ZUV4aXN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNEYXRlRXhpc3Qoc3RyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdCh0aGlzLnBhcnNlKHN0cikpID09PSBzdHI7XG4gICAgICB9XG4gICAgICAvKiogUGFyc2VkIERhdGUgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkYXRlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IHRoaXMucGFyc2UodGhpcy52YWx1ZSkgOiBudWxsO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGRhdGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybWF0KGRhdGUpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1hc2tlZERhdGU7XG4gIH0oTWFza2VkUGF0dGVybik7XG4gIE1hc2tlZERhdGUuREVGQVVMVFMgPSB7XG4gICAgcGF0dGVybjogJ2R7Ln1gbXsufWBZJyxcbiAgICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdChkYXRlKSB7XG4gICAgICB2YXIgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdmFyIG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl0uam9pbignLicpO1xuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICAgICAgdmFyIF9zdHIkc3BsaXQgPSBzdHIuc3BsaXQoJy4nKSxcbiAgICAgICAgICBfc3RyJHNwbGl0MiA9IF9zbGljZWRUb0FycmF5KF9zdHIkc3BsaXQsIDMpLFxuICAgICAgICAgIGRheSA9IF9zdHIkc3BsaXQyWzBdLFxuICAgICAgICAgIG1vbnRoID0gX3N0ciRzcGxpdDJbMV0sXG4gICAgICAgICAgeWVhciA9IF9zdHIkc3BsaXQyWzJdO1xuXG4gICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICAgIH1cbiAgfTtcblxuICBNYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZDoge1xuICAgICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgICAgZnJvbTogMSxcbiAgICAgICAgdG86IDMxLFxuICAgICAgICBtYXhMZW5ndGg6IDJcbiAgICAgIH0sXG4gICAgICBtOiB7XG4gICAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgICBmcm9tOiAxLFxuICAgICAgICB0bzogMTIsXG4gICAgICAgIG1heExlbmd0aDogMlxuICAgICAgfSxcbiAgICAgIFk6IHtcbiAgICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICAgIGZyb206IDE5MDAsXG4gICAgICAgIHRvOiA5OTk5XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKipcclxuICAgIEdlbmVyaWMgZWxlbWVudCBBUEkgdG8gdXNlIHdpdGggbWFza1xyXG4gICAgQGludGVyZmFjZVxyXG4gICovXG4gIHZhciBNYXNrRWxlbWVudCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hc2tFbGVtZW50KCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tFbGVtZW50KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWFza0VsZW1lbnQsIFt7XG4gICAgICBrZXk6IFwic2VsZWN0XCIsXG5cbiAgICAgIC8qKiBTYWZlbHkgc2V0cyBlbGVtZW50IHNlbGVjdGlvbiAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmIChzdGFydCA9PSBudWxsIHx8IGVuZCA9PSBudWxsIHx8IHN0YXJ0ID09PSB0aGlzLnNlbGVjdGlvblN0YXJ0ICYmIGVuZCA9PT0gdGhpcy5zZWxlY3Rpb25FbmQpIHJldHVybjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7fVxuICAgICAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImJpbmRFdmVudHNcIixcblxuICAgICAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHt9XG4gICAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge31cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2VsZWN0aW9uU3RhcnRcIixcblxuICAgICAgLyoqICovXG5cbiAgICAgIC8qKiAqL1xuXG4gICAgICAvKiogKi9cblxuICAgICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBzdGFydCAqL1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHZhciBzdGFydDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHN0YXJ0ID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ICE9IG51bGwgPyBzdGFydCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgfVxuICAgICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBlbmQgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZWxlY3Rpb25FbmRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICB2YXIgZW5kO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZW5kID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uRW5kO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgIHJldHVybiBlbmQgIT0gbnVsbCA/IGVuZCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0FjdGl2ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFza0VsZW1lbnQ7XG4gIH0oKTtcblxuICAvKiogQnJpZGdlIGJldHdlZW4gSFRNTEVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5cbiAgdmFyIEhUTUxNYXNrRWxlbWVudCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9NYXNrRWxlbWVudCkge1xuICAgIF9pbmhlcml0cyhIVE1MTWFza0VsZW1lbnQsIF9NYXNrRWxlbWVudCk7XG5cbiAgICAvKiogTWFwcGluZyBiZXR3ZWVuIEhUTUxFbGVtZW50IGV2ZW50cyBhbmQgbWFzayBpbnRlcm5hbCBldmVudHMgKi9cblxuICAgIC8qKiBIVE1MRWxlbWVudCB0byB1c2UgbWFzayBvbiAqL1xuXG4gICAgLyoqXHJcbiAgICAgIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBpbnB1dFxyXG4gICAgKi9cbiAgICBmdW5jdGlvbiBIVE1MTWFza0VsZW1lbnQoaW5wdXQpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxNYXNrRWxlbWVudCk7XG5cbiAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEhUTUxNYXNrRWxlbWVudCkuY2FsbCh0aGlzKSk7XG4gICAgICBfdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgICAgX3RoaXMuX2hhbmRsZXJzID0ge307XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBJcyBlbGVtZW50IGluIGZvY3VzXHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKEhUTUxNYXNrRWxlbWVudCwgW3tcbiAgICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG5cbiAgICAgIC8qKlxyXG4gICAgICAgIFNldHMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBIVE1MRWxlbWVudCB2YWx1ZVxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImJpbmRFdmVudHNcIixcblxuICAgICAgLyoqXHJcbiAgICAgICAgQmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEV2ZW50cyhoYW5kbGVycykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBPYmplY3Qua2V5cyhoYW5kbGVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl90b2dnbGVFdmVudEhhbmRsZXIoSFRNTE1hc2tFbGVtZW50LkVWRU5UU19NQVBbZXZlbnRdLCBoYW5kbGVyc1tldmVudF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIFVuYmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9oYW5kbGVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLl90b2dnbGVFdmVudEhhbmRsZXIoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKiAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl90b2dnbGVFdmVudEhhbmRsZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdG9nZ2xlRXZlbnRIYW5kbGVyKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tldmVudF0pIHtcbiAgICAgICAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMuX2hhbmRsZXJzW2V2ZW50XSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2hhbmRsZXJzW2V2ZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVyc1tldmVudF0gPSBoYW5kbGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBzdGFydFxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25TdGFydFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvbkVuZFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidmFsdWVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEhUTUxNYXNrRWxlbWVudDtcbiAgfShNYXNrRWxlbWVudCk7XG4gIEhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQID0ge1xuICAgIHNlbGVjdGlvbkNoYW5nZTogJ2tleWRvd24nLFxuICAgIGlucHV0OiAnaW5wdXQnLFxuICAgIGRyb3A6ICdkcm9wJyxcbiAgICBjbGljazogJ2NsaWNrJyxcbiAgICBmb2N1czogJ2ZvY3VzJyxcbiAgICBjb21taXQ6ICdibHVyJ1xuICB9O1xuXG4gIC8qKiBMaXN0ZW5zIHRvIGVsZW1lbnQgZXZlbnRzIGFuZCBjb250cm9scyBjaGFuZ2VzIGJldHdlZW4gZWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cblxuICB2YXIgSW5wdXRNYXNrID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXHJcbiAgICAgIFZpZXcgZWxlbWVudFxyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgICAvKipcclxuICAgICAgSW50ZXJuYWwge0BsaW5rIE1hc2tlZH0gbW9kZWxcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gICAgLyoqXHJcbiAgICAgIEBwYXJhbSB7TWFza0VsZW1lbnR8SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBlbFxyXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgKi9cbiAgICBmdW5jdGlvbiBJbnB1dE1hc2soZWwsIG9wdHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dE1hc2spO1xuXG4gICAgICB0aGlzLmVsID0gZWwgaW5zdGFuY2VvZiBNYXNrRWxlbWVudCA/IGVsIDogbmV3IEhUTUxNYXNrRWxlbWVudChlbCk7XG4gICAgICB0aGlzLm1hc2tlZCA9IGNyZWF0ZU1hc2sob3B0cyk7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgICB0aGlzLl91bm1hc2tlZFZhbHVlID0gJyc7XG4gICAgICB0aGlzLl9zYXZlU2VsZWN0aW9uID0gdGhpcy5fc2F2ZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuX29uQ2hhbmdlID0gdGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuX29uRHJvcCA9IHRoaXMuX29uRHJvcC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IgPSB0aGlzLmFsaWduQ3Vyc29yLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkgPSB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkuYmluZCh0aGlzKTtcblxuICAgICAgdGhpcy5fYmluZEV2ZW50cygpOyAvLyByZWZyZXNoXG5cblxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuXG4gICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgIH1cbiAgICAvKiogUmVhZCBvciB1cGRhdGUgbWFzayAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoSW5wdXRNYXNrLCBbe1xuICAgICAga2V5OiBcIl9iaW5kRXZlbnRzXCIsXG5cbiAgICAgIC8qKlxyXG4gICAgICAgIFN0YXJ0cyBsaXN0ZW5pbmcgdG8gZWxlbWVudCBldmVudHNcclxuICAgICAgICBAcHJvdGVjdGVkXHJcbiAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2JpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuZWwuYmluZEV2ZW50cyh7XG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLl9zYXZlU2VsZWN0aW9uLFxuICAgICAgICAgIGlucHV0OiB0aGlzLl9vbklucHV0LFxuICAgICAgICAgIGRyb3A6IHRoaXMuX29uRHJvcCxcbiAgICAgICAgICBjbGljazogdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5LFxuICAgICAgICAgIGZvY3VzOiB0aGlzLl9vbkZvY3VzLFxuICAgICAgICAgIGNvbW1pdDogdGhpcy5fb25DaGFuZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBTdG9wcyBsaXN0ZW5pbmcgdG8gZWxlbWVudCBldmVudHNcclxuICAgICAgICBAcHJvdGVjdGVkXHJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl91bmJpbmRFdmVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmVsLnVuYmluZEV2ZW50cygpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgRmlyZXMgY3VzdG9tIGV2ZW50XHJcbiAgICAgICAgQHByb3RlY3RlZFxyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZmlyZUV2ZW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpcmVFdmVudChldikge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICByZXR1cm4gbCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEN1cnJlbnQgc2VsZWN0aW9uIHN0YXJ0XHJcbiAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NhdmVTZWxlY3Rpb25cIixcblxuICAgICAgLyoqXHJcbiAgICAgICAgU3RvcmVzIGN1cnJlbnQgc2VsZWN0aW9uXHJcbiAgICAgICAgQHByb3RlY3RlZFxyXG4gICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zYXZlU2VsZWN0aW9uKClcbiAgICAgIC8qIGV2ICovXG4gICAgICB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdFbGVtZW50IHZhbHVlIHdhcyBjaGFuZ2VkIG91dHNpZGUgb2YgbWFzay4gU3luY3Jvbml6ZSBtYXNrIHVzaW5nIGBtYXNrLnVwZGF0ZVZhbHVlKClgIHRvIHdvcmsgcHJvcGVybHkuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0ge1xuICAgICAgICAgIHN0YXJ0OiB0aGlzLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgIGVuZDogdGhpcy5jdXJzb3JQb3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8qKiBTeW5jcm9uaXplcyBtb2RlbCB2YWx1ZSBmcm9tIHZpZXcgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1cGRhdGVWYWx1ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgICB0aGlzLm1hc2tlZC52YWx1ZSA9IHRoaXMuZWwudmFsdWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgICB9XG4gICAgICAvKiogU3luY3Jvbml6ZXMgdmlldyBmcm9tIG1vZGVsIHZhbHVlLCBmaXJlcyBjaGFuZ2UgZXZlbnRzICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlQ29udHJvbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUNvbnRyb2woKSB7XG4gICAgICAgIHZhciBuZXdVbm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgICAgIHZhciBpc0NoYW5nZWQgPSB0aGlzLnVubWFza2VkVmFsdWUgIT09IG5ld1VubWFza2VkVmFsdWUgfHwgdGhpcy52YWx1ZSAhPT0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSBuZXdVbm1hc2tlZFZhbHVlO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAodGhpcy5lbC52YWx1ZSAhPT0gbmV3VmFsdWUpIHRoaXMuZWwudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKGlzQ2hhbmdlZCkgdGhpcy5fZmlyZUNoYW5nZUV2ZW50cygpO1xuICAgICAgfVxuICAgICAgLyoqIFVwZGF0ZXMgb3B0aW9ucyB3aXRoIGRlZXAgZXF1YWwgY2hlY2ssIHJlY3JlYXRlcyBAe2xpbmsgTWFza2VkfSBtb2RlbCBpZiBtYXNrIHR5cGUgY2hhbmdlcyAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZU9wdGlvbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICAgICAgaWYgKG9iamVjdEluY2x1ZGVzKHRoaXMubWFza2VkLCBvcHRzKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBtYXNrID0gb3B0cy5tYXNrLFxuICAgICAgICAgICAgcmVzdE9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0cywgW1wibWFza1wiXSk7XG5cbiAgICAgICAgdGhpcy5tYXNrID0gbWFzaztcbiAgICAgICAgdGhpcy5tYXNrZWQudXBkYXRlT3B0aW9ucyhyZXN0T3B0cyk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgfVxuICAgICAgLyoqIFVwZGF0ZXMgY3Vyc29yICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlQ3Vyc29yXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xuICAgICAgICBpZiAoY3Vyc29yUG9zID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7IC8vIGFsc28gcXVldWUgY2hhbmdlIGN1cnNvciBmb3IgbW9iaWxlIGJyb3dzZXJzXG5cbiAgICAgICAgdGhpcy5fZGVsYXlVcGRhdGVDdXJzb3IoY3Vyc29yUG9zKTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIERlbGF5cyBjdXJzb3IgdXBkYXRlIHRvIHN1cHBvcnQgbW9iaWxlIGJyb3dzZXJzXHJcbiAgICAgICAgQHByaXZhdGVcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZGVsYXlVcGRhdGVDdXJzb3JcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsYXlVcGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcblxuICAgICAgICB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA9IGN1cnNvclBvcztcbiAgICAgICAgdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIV90aGlzLmVsKSByZXR1cm47IC8vIGlmIHdhcyBkZXN0cm95ZWRcblxuICAgICAgICAgIF90aGlzLmN1cnNvclBvcyA9IF90aGlzLl9jaGFuZ2luZ0N1cnNvclBvcztcblxuICAgICAgICAgIF90aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBGaXJlcyBjdXN0b20gZXZlbnRzXHJcbiAgICAgICAgQHByb3RlY3RlZFxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9maXJlQ2hhbmdlRXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpcmVDaGFuZ2VFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuX2ZpcmVFdmVudCgnYWNjZXB0Jyk7XG5cbiAgICAgICAgaWYgKHRoaXMubWFza2VkLmlzQ29tcGxldGUpIHRoaXMuX2ZpcmVFdmVudCgnY29tcGxldGUnKTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEFib3J0cyBkZWxheWVkIGN1cnNvciB1cGRhdGVcclxuICAgICAgICBAcHJpdmF0ZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hYm9ydFVwZGF0ZUN1cnNvclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hYm9ydFVwZGF0ZUN1cnNvcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNoYW5naW5nKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2N1cnNvckNoYW5naW5nKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fY3Vyc29yQ2hhbmdpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKiBBbGlnbnMgY3Vyc29yIHRvIG5lYXJlc3QgYXZhaWxhYmxlIHBvc2l0aW9uICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWxpZ25DdXJzb3JcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkN1cnNvcigpIHtcbiAgICAgICAgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3ModGhpcy5jdXJzb3JQb3MsIERJUkVDVElPTi5MRUZUKTtcbiAgICAgIH1cbiAgICAgIC8qKiBBbGlnbnMgY3Vyc29yIG9ubHkgaWYgc2VsZWN0aW9uIGlzIGVtcHR5ICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWxpZ25DdXJzb3JGcmllbmRseVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFsaWduQ3Vyc29yRnJpZW5kbHkoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAvLyBza2lwIGlmIHJhbmdlIGlzIHNlbGVjdGVkXG5cbiAgICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgICAgfVxuICAgICAgLyoqIEFkZHMgbGlzdGVuZXIgb24gY3VzdG9tIGV2ZW50ICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldiwgaGFuZGxlcikge1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldl0pIHRoaXMuX2xpc3RlbmVyc1tldl0gPSBbXTtcblxuICAgICAgICB0aGlzLl9saXN0ZW5lcnNbZXZdLnB1c2goaGFuZGxlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICAvKiogUmVtb3ZlcyBjdXN0b20gZXZlbnQgbGlzdGVuZXIgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvZmZcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXYsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoSW5kZXggPSB0aGlzLl9saXN0ZW5lcnNbZXZdLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgICAgaWYgKGhJbmRleCA+PSAwKSB0aGlzLl9saXN0ZW5lcnNbZXZdLnNwbGljZShoSW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIC8qKiBIYW5kbGVzIHZpZXcgaW5wdXQgZXZlbnQgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfb25JbnB1dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbklucHV0KCkge1xuICAgICAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpOyAvLyBmaXggc3RyYW5nZSBJRSBiZWhhdmlvclxuXG5cbiAgICAgICAgaWYgKCF0aGlzLl9zZWxlY3Rpb24pIHJldHVybiB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICAgIHZhciBkZXRhaWxzID0gbmV3IEFjdGlvbkRldGFpbHMoIC8vIG5ldyBzdGF0ZVxuICAgICAgICB0aGlzLmVsLnZhbHVlLCB0aGlzLmN1cnNvclBvcywgLy8gb2xkIHN0YXRlXG4gICAgICAgIHRoaXMudmFsdWUsIHRoaXMuX3NlbGVjdGlvbik7XG4gICAgICAgIHZhciBvbGRSYXdWYWx1ZSA9IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWU7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm1hc2tlZC5zcGxpY2UoZGV0YWlscy5zdGFydENoYW5nZVBvcywgZGV0YWlscy5yZW1vdmVkLmxlbmd0aCwgZGV0YWlscy5pbnNlcnRlZCwgZGV0YWlscy5yZW1vdmVEaXJlY3Rpb24pLm9mZnNldDsgLy8gZm9yY2UgYWxpZ24gaW4gcmVtb3ZlIGRpcmVjdGlvbiBvbmx5IGlmIG5vIGlucHV0IGNoYXJzIHdlcmUgcmVtb3ZlZFxuICAgICAgICAvLyBvdGhlcndpc2Ugd2Ugc3RpbGwgbmVlZCB0byBhbGlnbiB3aXRoIE5PTkUgKHRvIGdldCBvdXQgZnJvbSBmaXhlZCBzeW1ib2xzIGZvciBpbnN0YW5jZSlcblxuICAgICAgICB2YXIgcmVtb3ZlRGlyZWN0aW9uID0gb2xkUmF3VmFsdWUgPT09IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWUgPyBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiA6IERJUkVDVElPTi5OT05FO1xuICAgICAgICB2YXIgY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKGRldGFpbHMuc3RhcnRDaGFuZ2VQb3MgKyBvZmZzZXQsIHJlbW92ZURpcmVjdGlvbik7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICAgICAgfVxuICAgICAgLyoqIEhhbmRsZXMgdmlldyBjaGFuZ2UgZXZlbnQgYW5kIGNvbW1pdHMgbW9kZWwgdmFsdWUgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfb25DaGFuZ2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DaGFuZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG5cbiAgICAgICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICAgICAgfVxuICAgICAgLyoqIEhhbmRsZXMgdmlldyBkcm9wIGV2ZW50LCBwcmV2ZW50cyBieSBkZWZhdWx0ICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX29uRHJvcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRyb3AoZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICAvKiogUmVzdG9yZSBsYXN0IHNlbGVjdGlvbiBvbiBmb2N1cyAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9vbkZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRm9jdXMoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQgIT09IHRoaXMuY3Vyc29yUG9zKSByZXR1cm47IC8vIHNraXAgaWYgcmFuZ2UgaXMgc2VsZWN0ZWRcblxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0aW9uKSB0aGlzLmN1cnNvclBvcyA9IHRoaXMuX3NlbGVjdGlvbi5lbmQ7XG4gICAgICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xuICAgICAgfVxuICAgICAgLyoqIFVuYmluZCB2aWV3IGV2ZW50cyBhbmQgcmVtb3ZlcyBlbGVtZW50IHJlZmVyZW5jZSAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl91bmJpbmRFdmVudHMoKTsgLy8gJEZsb3dGaXhNZSB3aHkgbm90IGRvIHNvP1xuXG5cbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJtYXNrXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLm1hc2s7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobWFzaykge1xuICAgICAgICBpZiAobWFzayA9PSBudWxsIHx8IG1hc2sgPT09IHRoaXMubWFza2VkLm1hc2sgfHwgbWFzayA9PT0gRGF0ZSAmJiB0aGlzLm1hc2tlZCBpbnN0YW5jZW9mIE1hc2tlZERhdGUpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5tYXNrZWQuY29uc3RydWN0b3IgPT09IG1hc2tlZENsYXNzKG1hc2spKSB7XG4gICAgICAgICAgdGhpcy5tYXNrZWQudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgICBtYXNrOiBtYXNrXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hc2tlZCA9IGNyZWF0ZU1hc2soe1xuICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgfSk7XG4gICAgICAgIG1hc2tlZC51bm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgdGhpcy5tYXNrZWQgPSBtYXNrZWQ7XG4gICAgICB9XG4gICAgICAvKiogUmF3IHZhbHVlICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidmFsdWVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RyKSB7XG4gICAgICAgIHRoaXMubWFza2VkLnZhbHVlID0gc3RyO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgICAgfVxuICAgICAgLyoqIFVubWFza2VkIHZhbHVlICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91bm1hc2tlZFZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHN0cikge1xuICAgICAgICB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlID0gc3RyO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgICAgfVxuICAgICAgLyoqIFR5cGVkIHVubWFza2VkIHZhbHVlICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tlZC50eXBlZFZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICB0aGlzLm1hc2tlZC50eXBlZFZhbHVlID0gdmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZWxlY3Rpb25TdGFydFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25TdGFydDtcbiAgICAgIH1cbiAgICAgIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImN1cnNvclBvc1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25FbmQ7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQocG9zKSB7XG4gICAgICAgIGlmICghdGhpcy5lbC5pc0FjdGl2ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVsLnNlbGVjdChwb3MsIHBvcyk7XG5cbiAgICAgICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJbnB1dE1hc2s7XG4gIH0oKTtcblxuICAvKiogUGF0dGVybiB3aGljaCB2YWxpZGF0ZXMgZW51bSB2YWx1ZXMgKi9cblxuICB2YXIgTWFza2VkRW51bSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gICAgX2luaGVyaXRzKE1hc2tlZEVudW0sIF9NYXNrZWRQYXR0ZXJuKTtcblxuICAgIGZ1bmN0aW9uIE1hc2tlZEVudW0oKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRW51bSk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hc2tlZEVudW0sIFt7XG4gICAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuXG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgICAvLyBUT0RPIHR5cGVcbiAgICAgICAgaWYgKG9wdHMuZW51bSkgb3B0cy5tYXNrID0gJyonLnJlcGVhdChvcHRzLmVudW1bMF0ubGVuZ3RoKTtcblxuICAgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgICAgICBfZ2V0MjtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW51bS5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuaW5kZXhPZihfdGhpcy51bm1hc2tlZFZhbHVlKSA+PSAwO1xuICAgICAgICB9KSAmJiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1hc2tlZEVudW07XG4gIH0oTWFza2VkUGF0dGVybik7XG5cbiAgLyoqXHJcbiAgICBOdW1iZXIgbWFza1xyXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnJhZGl4IC0gU2luZ2xlIGNoYXJcclxuICAgIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnRob3VzYW5kc1NlcGFyYXRvciAtIFNpbmdsZSBjaGFyXHJcbiAgICBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdHMubWFwVG9SYWRpeCAtIEFycmF5IG9mIHNpbmdsZSBjaGFyc1xyXG4gICAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWluXHJcbiAgICBAcGFyYW0ge251bWJlcn0gb3B0cy5tYXhcclxuICAgIEBwYXJhbSB7bnVtYmVyfSBvcHRzLnNjYWxlIC0gRGlnaXRzIGFmdGVyIHBvaW50XHJcbiAgICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMuc2lnbmVkIC0gQWxsb3cgbmVnYXRpdmVcclxuICAgIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5ub3JtYWxpemVaZXJvcyAtIEZsYWcgdG8gcmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHplcm9zIGluIHRoZSBlbmQgb2YgZWRpdGluZ1xyXG4gICAgQHBhcmFtIHtib29sZWFufSBvcHRzLnBhZEZyYWN0aW9uYWxaZXJvcyAtIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZ1xyXG4gICovXG4gIHZhciBNYXNrZWROdW1iZXIgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfTWFza2VkKSB7XG4gICAgX2luaGVyaXRzKE1hc2tlZE51bWJlciwgX01hc2tlZCk7XG5cbiAgICAvKiogU2luZ2xlIGNoYXIgKi9cblxuICAgIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gICAgLyoqIEFycmF5IG9mIHNpbmdsZSBjaGFycyAqL1xuXG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiBEaWdpdHMgYWZ0ZXIgcG9pbnQgKi9cblxuICAgIC8qKiAqL1xuXG4gICAgLyoqIEZsYWcgdG8gcmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHplcm9zIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gICAgLyoqIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuICAgIGZ1bmN0aW9uIE1hc2tlZE51bWJlcihvcHRzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkTnVtYmVyKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIpLmNhbGwodGhpcywgX29iamVjdFNwcmVhZCh7fSwgTWFza2VkTnVtYmVyLkRFRkFVTFRTLCBvcHRzKSkpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoTWFza2VkTnVtYmVyLCBbe1xuICAgICAga2V5OiBcIl91cGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlZ0V4cHMoKTtcbiAgICAgIH1cbiAgICAgIC8qKiAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl91cGRhdGVSZWdFeHBzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVJlZ0V4cHMoKSB7XG4gICAgICAgIC8vIHVzZSBkaWZmZXJlbnQgcmVnZXhwIHRvIHByb2Nlc3MgdXNlciBpbnB1dCAobW9yZSBzdHJpY3QsIGlucHV0IHN1ZmZpeCkgYW5kIHRhaWwgc2hpZnRpbmdcbiAgICAgICAgdmFyIHN0YXJ0ID0gJ14nICsgKHRoaXMuYWxsb3dOZWdhdGl2ZSA/ICdbK3xcXFxcLV0/JyA6ICcnKTtcbiAgICAgICAgdmFyIG1pZElucHV0ID0gJygwfChbMS05XStcXFxcZCopKT8nO1xuICAgICAgICB2YXIgbWlkID0gJ1xcXFxkKic7XG4gICAgICAgIHZhciBlbmQgPSAodGhpcy5zY2FsZSA/ICcoJyArIGVzY2FwZVJlZ0V4cCh0aGlzLnJhZGl4KSArICdcXFxcZHswLCcgKyB0aGlzLnNjYWxlICsgJ30pPycgOiAnJykgKyAnJCc7XG4gICAgICAgIHRoaXMuX251bWJlclJlZ0V4cElucHV0ID0gbmV3IFJlZ0V4cChzdGFydCArIG1pZElucHV0ICsgZW5kKTtcbiAgICAgICAgdGhpcy5fbnVtYmVyUmVnRXhwID0gbmV3IFJlZ0V4cChzdGFydCArIG1pZCArIGVuZCk7XG4gICAgICAgIHRoaXMuX21hcFRvUmFkaXhSZWdFeHAgPSBuZXcgUmVnRXhwKCdbJyArIHRoaXMubWFwVG9SYWRpeC5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCcnKSArICddJywgJ2cnKTtcbiAgICAgICAgdGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IpLCAnZycpO1xuICAgICAgfVxuICAgICAgLyoqICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSh0aGlzLl90aG91c2FuZHNTZXBhcmF0b3JSZWdFeHAsICcnKTtcbiAgICAgIH1cbiAgICAgIC8qKiAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjkwMTEwMi9ob3ctdG8tcHJpbnQtYS1udW1iZXItd2l0aC1jb21tYXMtYXMtdGhvdXNhbmRzLXNlcGFyYXRvcnMtaW4tamF2YXNjcmlwdFxuICAgICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKHRoaXMucmFkaXgpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9QcmVwYXJlKHN0cikge1xuICAgICAgICB2YXIgX2dldDI7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvUHJlcGFyZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXMsIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc3RyLnJlcGxhY2UodGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCwgdGhpcy5yYWRpeCkpXS5jb25jYXQoYXJncykpO1xuICAgICAgfVxuICAgICAgLyoqICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NlcGFyYXRvcnNDb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXBhcmF0b3JzQ291bnQodG8pIHtcbiAgICAgICAgdmFyIGV4dGVuZE9uU2VwYXJhdG9ycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwgdG87ICsrcG9zKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlLmluZGV4T2YodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICAgIGlmIChleHRlbmRPblNlcGFyYXRvcnMpIHRvICs9IHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICB9XG4gICAgICAvKiogKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSgpIHtcbiAgICAgICAgdmFyIHNsaWNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLl92YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcGFyYXRvcnNDb3VudCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHNsaWNlKS5sZW5ndGgsIHRydWUpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdCA9IHRoaXMuX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkX2FkanVzdFJhbmdlV2l0LCAyKTtcblxuICAgICAgICBmcm9tUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0MlswXTtcbiAgICAgICAgdG9Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyWzFdO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJleHRyYWN0SW5wdXRcIiwgdGhpcykuY2FsbCh0aGlzLCBmcm9tUG9zLCB0b1BvcywgZmxhZ3MpKTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgaWYgKCF0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl9hcHBlbmRDaGFyUmF3XCIsIHRoaXMpLmNhbGwodGhpcywgY2gsIGZsYWdzKTtcblxuICAgICAgICB2YXIgcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UoZmxhZ3MudGFpbCAmJiB0aGlzLl9iZWZvcmVUYWlsU3RhdGUgPyB0aGlzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy5fdmFsdWUpO1xuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLnZhbHVlKTtcblxuICAgICAgICB2YXIgYXBwZW5kRGV0YWlscyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl9hcHBlbmRDaGFyUmF3XCIsIHRoaXMpLmNhbGwodGhpcywgY2gsIGZsYWdzKTtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fdmFsdWUpO1xuXG4gICAgICAgIHZhciBiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKGZsYWdzLnRhaWwgJiYgdGhpcy5fYmVmb3JlVGFpbFN0YXRlID8gdGhpcy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlKTtcblxuICAgICAgICBhcHBlbmREZXRhaWxzLnRhaWxTaGlmdCArPSAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGFwcGVuZERldGFpbHM7XG4gICAgICB9XG4gICAgICAvKiogKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZmluZFNlcGFyYXRvckFyb3VuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU2VwYXJhdG9yQXJvdW5kKHBvcykge1xuICAgICAgICBpZiAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHtcbiAgICAgICAgICB2YXIgc2VhcmNoRnJvbSA9IHBvcyAtIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aCArIDE7XG4gICAgICAgICAgdmFyIHNlcGFyYXRvclBvcyA9IHRoaXMudmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgc2VhcmNoRnJvbSk7XG4gICAgICAgICAgaWYgKHNlcGFyYXRvclBvcyA8PSBwb3MpIHJldHVybiBzZXBhcmF0b3JQb3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbSwgdG8pIHtcbiAgICAgICAgdmFyIHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGZyb20pO1xuXG4gICAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRGcm9tUG9zID49IDApIGZyb20gPSBzZXBhcmF0b3JBcm91bmRGcm9tUG9zO1xuXG4gICAgICAgIHZhciBzZXBhcmF0b3JBcm91bmRUb1BvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQodG8pO1xuXG4gICAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRUb1BvcyA+PSAwKSB0byA9IHNlcGFyYXRvckFyb3VuZFRvUG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbW92ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDMgPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0NCA9IF9zbGljZWRUb0FycmF5KF90aGlzJF9hZGp1c3RSYW5nZVdpdDMsIDIpO1xuXG4gICAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzBdO1xuICAgICAgICB0b1BvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDRbMV07XG4gICAgICAgIHZhciB2YWx1ZUJlZm9yZVBvcyA9IHRoaXMudmFsdWUuc2xpY2UoMCwgZnJvbVBvcyk7XG4gICAgICAgIHZhciB2YWx1ZUFmdGVyUG9zID0gdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG5cbiAgICAgICAgdmFyIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHZhbHVlQmVmb3JlUG9zLmxlbmd0aCk7XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWVCZWZvcmVQb3MgKyB2YWx1ZUFmdGVyUG9zKSk7XG5cbiAgICAgICAgdmFyIGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UodmFsdWVCZWZvcmVQb3MpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgICAgdGFpbFNoaWZ0OiAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSByZXR1cm4gY3Vyc29yUG9zO1xuXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcbiAgICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdExlZnRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyAtIDEpO1xuXG4gICAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdExlZnRQb3MgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdExlZnRFbmRQb3MgPSBzZXBhcmF0b3JBdExlZnRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3Vyc29yUG9zIDwgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRMZWZ0UG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdFJpZ2h0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MpO1xuXG4gICAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdFJpZ2h0UG9zID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRSaWdodFBvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgICAgIHZhciByZWdleHAgPSBmbGFncy5pbnB1dCA/IHRoaXMuX251bWJlclJlZ0V4cElucHV0IDogdGhpcy5fbnVtYmVyUmVnRXhwOyAvLyB2YWxpZGF0ZSBhcyBzdHJpbmdcblxuICAgICAgICB2YXIgdmFsaWQgPSByZWdleHAudGVzdCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpKTtcblxuICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAvLyB2YWxpZGF0ZSBhcyBudW1iZXJcbiAgICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy5udW1iZXI7XG4gICAgICAgICAgdmFsaWQgPSB2YWxpZCAmJiAhaXNOYU4obnVtYmVyKSAmJiAoIC8vIGNoZWNrIG1pbiBib3VuZCBmb3IgbmVnYXRpdmUgdmFsdWVzXG4gICAgICAgICAgdGhpcy5taW4gPT0gbnVsbCB8fCB0aGlzLm1pbiA+PSAwIHx8IHRoaXMubWluIDw9IHRoaXMubnVtYmVyKSAmJiAoIC8vIGNoZWNrIG1heCBib3VuZCBmb3IgcG9zaXRpdmUgdmFsdWVzXG4gICAgICAgICAgdGhpcy5tYXggPT0gbnVsbCB8fCB0aGlzLm1heCA8PSAwIHx8IHRoaXMubnVtYmVyIDw9IHRoaXMubWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWxpZCAmJiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgZmxhZ3MpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy5udW1iZXI7XG4gICAgICAgICAgdmFyIHZhbGlkbnVtID0gbnVtYmVyOyAvLyBjaGVjayBib3VuZHNcblxuICAgICAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWF4KHZhbGlkbnVtLCB0aGlzLm1pbik7XG4gICAgICAgICAgaWYgKHRoaXMubWF4ICE9IG51bGwpIHZhbGlkbnVtID0gTWF0aC5taW4odmFsaWRudW0sIHRoaXMubWF4KTtcbiAgICAgICAgICBpZiAodmFsaWRudW0gIT09IG51bWJlcikgdGhpcy51bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbGlkbnVtKTtcbiAgICAgICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5ub3JtYWxpemVaZXJvcykgZm9ybWF0dGVkID0gdGhpcy5fbm9ybWFsaXplWmVyb3MoZm9ybWF0dGVkKTtcbiAgICAgICAgICBpZiAodGhpcy5wYWRGcmFjdGlvbmFsWmVyb3MpIGZvcm1hdHRlZCA9IHRoaXMuX3BhZEZyYWN0aW9uYWxaZXJvcyhmb3JtYXR0ZWQpO1xuICAgICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybWF0dGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIC8qKiAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9ub3JtYWxpemVaZXJvc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9ub3JtYWxpemVaZXJvcyh2YWx1ZSkge1xuICAgICAgICB2YXIgcGFydHMgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKS5zcGxpdCh0aGlzLnJhZGl4KTsgLy8gcmVtb3ZlIGxlYWRpbmcgemVyb3NcblxuXG4gICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXihcXEQqKSgwKikoXFxkKikvLCBmdW5jdGlvbiAobWF0Y2gsIHNpZ24sIHplcm9zLCBudW0pIHtcbiAgICAgICAgICByZXR1cm4gc2lnbiArIG51bTtcbiAgICAgICAgfSk7IC8vIGFkZCBsZWFkaW5nIHplcm9cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoICYmICEvXFxkJC8udGVzdChwYXJ0c1swXSkpIHBhcnRzWzBdID0gcGFydHNbMF0gKyAnMCc7XG5cbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnJlcGxhY2UoLzAqJC8sICcnKTsgLy8gcmVtb3ZlIHRyYWlsaW5nIHplcm9zXG5cbiAgICAgICAgICBpZiAoIXBhcnRzWzFdLmxlbmd0aCkgcGFydHMubGVuZ3RoID0gMTsgLy8gcmVtb3ZlIGZyYWN0aW9uYWxcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHBhcnRzLmpvaW4odGhpcy5yYWRpeCkpO1xuICAgICAgfVxuICAgICAgLyoqICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3BhZEZyYWN0aW9uYWxaZXJvc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wYWRGcmFjdGlvbmFsWmVyb3ModmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpIHBhcnRzLnB1c2goJycpO1xuICAgICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnBhZEVuZCh0aGlzLnNjYWxlLCAnMCcpO1xuICAgICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl9ub3JtYWxpemVaZXJvcyh0aGlzLnZhbHVlKSkucmVwbGFjZSh0aGlzLnJhZGl4LCAnLicpO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLnJlcGxhY2UoJy4nLCB0aGlzLnJhZGl4KSwgdGhpcywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICAvKiogUGFyc2VkIE51bWJlciAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm51bWJlclwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy51bm1hc2tlZFZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChudW1iZXIpIHtcbiAgICAgICAgdGhpcy51bm1hc2tlZFZhbHVlID0gU3RyaW5nKG51bWJlcik7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMubnVtYmVyID0gdmFsdWU7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBJcyBuZWdhdGl2ZSBhbGxvd2VkXHJcbiAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWxsb3dOZWdhdGl2ZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpZ25lZCB8fCB0aGlzLm1pbiAhPSBudWxsICYmIHRoaXMubWluIDwgMCB8fCB0aGlzLm1heCAhPSBudWxsICYmIHRoaXMubWF4IDwgMDtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFza2VkTnVtYmVyO1xuICB9KE1hc2tlZCk7XG4gIE1hc2tlZE51bWJlci5ERUZBVUxUUyA9IHtcbiAgICByYWRpeDogJywnLFxuICAgIHRob3VzYW5kc1NlcGFyYXRvcjogJycsXG4gICAgbWFwVG9SYWRpeDogWycuJ10sXG4gICAgc2NhbGU6IDIsXG4gICAgc2lnbmVkOiBmYWxzZSxcbiAgICBub3JtYWxpemVaZXJvczogdHJ1ZSxcbiAgICBwYWRGcmFjdGlvbmFsWmVyb3M6IGZhbHNlXG4gIH07XG5cbiAgLyoqIE1hc2tpbmcgYnkgUmVnRXhwICovXG5cbiAgdmFyIE1hc2tlZFJlZ0V4cCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgICBfaW5oZXJpdHMoTWFza2VkUmVnRXhwLCBfTWFza2VkKTtcblxuICAgIGZ1bmN0aW9uIE1hc2tlZFJlZ0V4cCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRSZWdFeHApO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZFJlZ0V4cCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hc2tlZFJlZ0V4cCwgW3tcbiAgICAgIGtleTogXCJfdXBkYXRlXCIsXG5cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzLm1hc2spIG9wdHMudmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuc2VhcmNoKG9wdHMubWFzaykgPj0gMDtcbiAgICAgICAgfTtcblxuICAgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSZWdFeHAucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1hc2tlZFJlZ0V4cDtcbiAgfShNYXNrZWQpO1xuXG4gIC8qKiBNYXNraW5nIGJ5IGN1c3RvbSBGdW5jdGlvbiAqL1xuXG4gIHZhciBNYXNrZWRGdW5jdGlvbiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgICBfaW5oZXJpdHMoTWFza2VkRnVuY3Rpb24sIF9NYXNrZWQpO1xuXG4gICAgZnVuY3Rpb24gTWFza2VkRnVuY3Rpb24oKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRnVuY3Rpb24pO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZEZ1bmN0aW9uKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWFza2VkRnVuY3Rpb24sIFt7XG4gICAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuXG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgICBpZiAob3B0cy5tYXNrKSBvcHRzLnZhbGlkYXRlID0gb3B0cy5tYXNrO1xuXG4gICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZEZ1bmN0aW9uLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYXNrZWRGdW5jdGlvbjtcbiAgfShNYXNrZWQpO1xuXG4gIC8qKiBEeW5hbWljIG1hc2sgZm9yIGNob29zaW5nIGFwcm9wcmlhdGUgbWFzayBpbiBydW4tdGltZSAqL1xuICB2YXIgTWFza2VkRHluYW1pYyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgICBfaW5oZXJpdHMoTWFza2VkRHluYW1pYywgX01hc2tlZCk7XG5cbiAgICAvKiogQ3VycmVudGx5IGNob3NlbiBtYXNrICovXG5cbiAgICAvKiogQ29tcGxpbGVkIHtAbGluayBNYXNrZWR9IG9wdGlvbnMgKi9cblxuICAgIC8qKiBDaG9vc2VzIHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBpbnB1dCB2YWx1ZSAqL1xuXG4gICAgLyoqXHJcbiAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAqL1xuICAgIGZ1bmN0aW9uIE1hc2tlZER5bmFtaWMob3B0cykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRHluYW1pYyk7XG5cbiAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMpLmNhbGwodGhpcywgX29iamVjdFNwcmVhZCh7fSwgTWFza2VkRHluYW1pYy5ERUZBVUxUUywgb3B0cykpKTtcbiAgICAgIF90aGlzLmN1cnJlbnRNYXNrID0gbnVsbDtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hc2tlZER5bmFtaWMsIFt7XG4gICAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICAgIGlmICgnbWFzaycgaW4gb3B0cykge1xuICAgICAgICAgIC8vIG1hc2sgY291bGQgYmUgdG90YWxseSBkeW5hbWljIHdpdGggb25seSBgZGlzcGF0Y2hgIG9wdGlvblxuICAgICAgICAgIHRoaXMuY29tcGlsZWRNYXNrcyA9IEFycmF5LmlzQXJyYXkob3B0cy5tYXNrKSA/IG9wdHMubWFzay5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVNYXNrKG0pO1xuICAgICAgICAgIH0pIDogW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoKSB7XG4gICAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrO1xuXG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoKF90aGlzJGN1cnJlbnRNYXNrID0gdGhpcy5jdXJyZW50TWFzaykuX2FwcGVuZENoYXIuYXBwbHkoX3RoaXMkY3VycmVudE1hc2ssIGFyZ3VtZW50cykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hcHBseURpc3BhdGNoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGx5RGlzcGF0Y2goKSB7XG4gICAgICAgIHZhciBhcHBlbmRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgIHZhciBwcmV2VmFsdWVCZWZvcmVUYWlsID0gZmxhZ3MudGFpbCAmJiB0aGlzLl9iZWZvcmVUYWlsU3RhdGUgPyB0aGlzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIGlucHV0VmFsdWUgPSB0aGlzLnJhd0lucHV0VmFsdWU7XG4gICAgICAgIHZhciBpbnNlcnRWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgdGhpcy5fYmVmb3JlVGFpbFN0YXRlID8gLy8gJEZsb3dGaXhNZSAtIHRpcmVkIHRvIGZpZ2h0IHdpdGggdHlwZSBzeXN0ZW1cbiAgICAgICAgdGhpcy5fYmVmb3JlVGFpbFN0YXRlLl9yYXdJbnB1dFZhbHVlIDogaW5wdXRWYWx1ZTtcbiAgICAgICAgdmFyIHRhaWxWYWx1ZSA9IGlucHV0VmFsdWUuc2xpY2UoaW5zZXJ0VmFsdWUubGVuZ3RoKTtcbiAgICAgICAgdmFyIHByZXZNYXNrID0gdGhpcy5jdXJyZW50TWFzaztcbiAgICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgICB2YXIgcHJldk1hc2tTdGF0ZSA9IHByZXZNYXNrICYmIHByZXZNYXNrLnN0YXRlO1xuICAgICAgICB2YXIgcHJldk1hc2tCZWZvcmVUYWlsU3RhdGUgPSBwcmV2TWFzayAmJiBwcmV2TWFzay5fYmVmb3JlVGFpbFN0YXRlO1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gdGhpcy5kb0Rpc3BhdGNoKGFwcGVuZGVkLCBmbGFncyk7IC8vIHJlc3RvcmUgc3RhdGUgYWZ0ZXIgZGlzcGF0Y2hcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrICE9PSBwcmV2TWFzaykge1xuICAgICAgICAgICAgLy8gaWYgbWFzayBjaGFuZ2VkIHJlYXBwbHkgaW5wdXRcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTsgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcblxuICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZChpbnNlcnRWYWx1ZSwge1xuICAgICAgICAgICAgICByYXc6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgPSBkLmluc2VydGVkLmxlbmd0aCAtIHByZXZWYWx1ZUJlZm9yZVRhaWwubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAodGFpbFZhbHVlKSB7XG4gICAgICAgICAgICAgIC8vICRGbG93Rml4TWUgLSBpdCdzIG9rLCB3ZSBkb24ndCBjaGFuZ2UgY3VycmVudCBtYXNrIGFib3ZlXG4gICAgICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuY3VycmVudE1hc2suYXBwZW5kKHRhaWxWYWx1ZSwge1xuICAgICAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgICAgIH0pLnRhaWxTaGlmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGlzcGF0Y2ggY2FuIGRvIHNvbWV0aGluZyBiYWQgd2l0aCBzdGF0ZSwgc29cbiAgICAgICAgICAgIC8vIHJlc3RvcmUgcHJldiBtYXNrIHN0YXRlXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gcHJldk1hc2tTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1hc2suX2JlZm9yZVRhaWxTdGF0ZSA9IHByZXZNYXNrQmVmb3JlVGFpbFN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZG9EaXNwYXRjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvRGlzcGF0Y2goYXBwZW5kZWQpIHtcbiAgICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goYXBwZW5kZWQsIHRoaXMsIGZsYWdzKTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgICB2YXIgX2dldDIsIF90aGlzJGN1cnJlbnRNYXNrMjtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSAmJiAoIXRoaXMuY3VycmVudE1hc2sgfHwgKF90aGlzJGN1cnJlbnRNYXNrMiA9IHRoaXMuY3VycmVudE1hc2spLmRvVmFsaWRhdGUuYXBwbHkoX3RoaXMkY3VycmVudE1hc2syLCBhcmdzKSk7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXNldFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykgdGhpcy5jdXJyZW50TWFzay5yZXNldCgpO1xuICAgICAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVtb3ZlXCIsXG5cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrMztcblxuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKChfdGhpcyRjdXJyZW50TWFzazMgPSB0aGlzLmN1cnJlbnRNYXNrKS5yZW1vdmUuYXBwbHkoX3RoaXMkY3VycmVudE1hc2szLCBhcmd1bWVudHMpKSAvLyB1cGRhdGUgd2l0aCBkaXNwYXRjaFxuICAgICAgICAgIC5hZ2dyZWdhdGUodGhpcy5fYXBwbHlEaXNwYXRjaCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAgQG92ZXJyaWRlXHJcbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG5cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNDtcblxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazQgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0SW5wdXQuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s0LCBhcmd1bWVudHMpIDogJyc7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s1LCBfZ2V0MztcblxuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazUgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRjdXJyZW50TWFzazUsIGFyZ3MpIDogKF9nZXQzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImV4dHJhY3RUYWlsXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQzLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB0aGlzLmN1cnJlbnRNYXNrLmRvQ29tbWl0KCk7XG5cbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoKSB7XG4gICAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazYsIF9nZXQ0O1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrNiA9IHRoaXMuY3VycmVudE1hc2spLm5lYXJlc3RJbnB1dFBvcy5hcHBseShfdGhpcyRjdXJyZW50TWFzazYsIGFyZ3MpIDogKF9nZXQ0ID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIm5lYXJlc3RJbnB1dFBvc1wiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0NCwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInZhbHVlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnZhbHVlIDogJyc7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgIEBvdmVycmlkZVxyXG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZSA6ICcnO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgdW5tYXNrZWRWYWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgOiAnJztcbiAgICAgIH0gLy8gcHJvYmFibHkgdHlwZWRWYWx1ZSBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBkeW5hbWljXG4gICAgICAsXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICB2YXIgdW5tYXNrZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7IC8vIGRvdWJsZSBjaGVjayBpdFxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgdW5tYXNrZWRWYWx1ZSA9IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICBAb3ZlcnJpZGVcclxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jdXJyZW50TWFzayAmJiB0aGlzLmN1cnJlbnRNYXNrLmlzQ29tcGxldGU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXRlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCB0aGlzKSwge1xuICAgICAgICAgIF9yYXdJbnB1dFZhbHVlOiB0aGlzLnJhd0lucHV0VmFsdWUsXG4gICAgICAgICAgY29tcGlsZWRNYXNrczogdGhpcy5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIG0uc3RhdGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY3VycmVudE1hc2tSZWY6IHRoaXMuY3VycmVudE1hc2ssXG4gICAgICAgICAgY3VycmVudE1hc2s6IHRoaXMuY3VycmVudE1hc2sgJiYgdGhpcy5jdXJyZW50TWFzay5zdGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgICB2YXIgY29tcGlsZWRNYXNrcyA9IHN0YXRlLmNvbXBpbGVkTWFza3MsXG4gICAgICAgICAgICBjdXJyZW50TWFza1JlZiA9IHN0YXRlLmN1cnJlbnRNYXNrUmVmLFxuICAgICAgICAgICAgY3VycmVudE1hc2sgPSBzdGF0ZS5jdXJyZW50TWFzayxcbiAgICAgICAgICAgIG1hc2tlZFN0YXRlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHN0YXRlLCBbXCJjb21waWxlZE1hc2tzXCIsIFwiY3VycmVudE1hc2tSZWZcIiwgXCJjdXJyZW50TWFza1wiXSk7XG5cbiAgICAgICAgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2goZnVuY3Rpb24gKG0sIG1pKSB7XG4gICAgICAgICAgcmV0dXJuIG0uc3RhdGUgPSBjb21waWxlZE1hc2tzW21pXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRNYXNrUmVmICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gY3VycmVudE1hc2tSZWY7XG4gICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IGN1cnJlbnRNYXNrO1xuICAgICAgICB9XG5cbiAgICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInN0YXRlXCIsIG1hc2tlZFN0YXRlLCB0aGlzLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWFza2VkRHluYW1pYztcbiAgfShNYXNrZWQpO1xuICBNYXNrZWREeW5hbWljLkRFRkFVTFRTID0ge1xuICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhcHBlbmRlZCwgbWFza2VkLCBmbGFncykge1xuICAgICAgaWYgKCFtYXNrZWQuY29tcGlsZWRNYXNrcy5sZW5ndGgpIHJldHVybjtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gbWFza2VkLnJhd0lucHV0VmFsdWU7IC8vIHNpbXVsYXRlIGlucHV0XG5cbiAgICAgIHZhciBpbnB1dHMgPSBtYXNrZWQuY29tcGlsZWRNYXNrcy5tYXAoZnVuY3Rpb24gKG0sIGluZGV4KSB7XG4gICAgICAgIG0ucmF3SW5wdXRWYWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICAgIG0uYXBwZW5kKGFwcGVuZGVkLCBmbGFncyk7XG4gICAgICAgIHZhciB3ZWlnaHQgPSBtLnJhd0lucHV0VmFsdWUubGVuZ3RoO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlaWdodDogd2VpZ2h0LFxuICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9O1xuICAgICAgfSk7IC8vIHBvcCBtYXNrcyB3aXRoIGxvbmdlciB2YWx1ZXMgZmlyc3RcblxuICAgICAgaW5wdXRzLnNvcnQoZnVuY3Rpb24gKGkxLCBpMikge1xuICAgICAgICByZXR1cm4gaTIud2VpZ2h0IC0gaTEud2VpZ2h0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWFza2VkLmNvbXBpbGVkTWFza3NbaW5wdXRzWzBdLmluZGV4XTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXHJcbiAgICogQXBwbGllcyBtYXNrIG9uIGVsZW1lbnQuXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR8TWFza0VsZW1lbnR9IGVsIC0gRWxlbWVudCB0byBhcHBseSBtYXNrXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBDdXN0b20gbWFzayBvcHRpb25zXHJcbiAgICogQHJldHVybiB7SW5wdXRNYXNrfVxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIElNYXNrKGVsKSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIC8vIGN1cnJlbnRseSBhdmFpbGFibGUgb25seSBmb3IgaW5wdXQtbGlrZSBlbGVtZW50c1xuICAgIHJldHVybiBuZXcgSW5wdXRNYXNrKGVsLCBvcHRzKTtcbiAgfVxuICAvKioge0BsaW5rIElucHV0TWFza30gKi9cblxuICBJTWFzay5JbnB1dE1hc2sgPSBJbnB1dE1hc2s7XG4gIC8qKiB7QGxpbmsgTWFza2VkfSAqL1xuXG4gIElNYXNrLk1hc2tlZCA9IE1hc2tlZDtcbiAgLyoqIHtAbGluayBNYXNrZWRQYXR0ZXJufSAqL1xuXG4gIElNYXNrLk1hc2tlZFBhdHRlcm4gPSBNYXNrZWRQYXR0ZXJuO1xuICAvKioge0BsaW5rIE1hc2tlZEVudW19ICovXG5cbiAgSU1hc2suTWFza2VkRW51bSA9IE1hc2tlZEVudW07XG4gIC8qKiB7QGxpbmsgTWFza2VkUmFuZ2V9ICovXG5cbiAgSU1hc2suTWFza2VkUmFuZ2UgPSBNYXNrZWRSYW5nZTtcbiAgLyoqIHtAbGluayBNYXNrZWROdW1iZXJ9ICovXG5cbiAgSU1hc2suTWFza2VkTnVtYmVyID0gTWFza2VkTnVtYmVyO1xuICAvKioge0BsaW5rIE1hc2tlZERhdGV9ICovXG5cbiAgSU1hc2suTWFza2VkRGF0ZSA9IE1hc2tlZERhdGU7XG4gIC8qKiB7QGxpbmsgTWFza2VkUmVnRXhwfSAqL1xuXG4gIElNYXNrLk1hc2tlZFJlZ0V4cCA9IE1hc2tlZFJlZ0V4cDtcbiAgLyoqIHtAbGluayBNYXNrZWRGdW5jdGlvbn0gKi9cblxuICBJTWFzay5NYXNrZWRGdW5jdGlvbiA9IE1hc2tlZEZ1bmN0aW9uO1xuICAvKioge0BsaW5rIE1hc2tlZER5bmFtaWN9ICovXG5cbiAgSU1hc2suTWFza2VkRHluYW1pYyA9IE1hc2tlZER5bmFtaWM7XG4gIC8qKiB7QGxpbmsgY3JlYXRlTWFza30gKi9cblxuICBJTWFzay5jcmVhdGVNYXNrID0gY3JlYXRlTWFzaztcbiAgLyoqIHtAbGluayBNYXNrRWxlbWVudH0gKi9cblxuICBJTWFzay5NYXNrRWxlbWVudCA9IE1hc2tFbGVtZW50O1xuICAvKioge0BsaW5rIEhUTUxNYXNrRWxlbWVudH0gKi9cblxuICBJTWFzay5IVE1MTWFza0VsZW1lbnQgPSBIVE1MTWFza0VsZW1lbnQ7XG4gIGcuSU1hc2sgPSBJTWFzaztcblxuICByZXR1cm4gSU1hc2s7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYXNrLmpzLm1hcFxuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==