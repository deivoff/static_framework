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
        this.input.addEventListener('change', function () {
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
        this.input.addEventListener('change', function () {
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
        this.input.addEventListener('change', function () {
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
//# sourceMappingURL=main.bundle.js.map