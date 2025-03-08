"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedError = exports.MainError = void 0;
var MainError = /** @class */ (function (_super) {
    __extends(MainError, _super);
    function MainError(props) {
        var _this = _super.call(this, props.message) || this;
        _this.type = 'UnexpectedError';
        _this.name = 'MainError';
        _this.type = props.type || _this.type;
        _this.name = props.name || _this.name;
        return _this;
    }
    return MainError;
}(Error));
exports.MainError = MainError;
var UnexpectedError = /** @class */ (function (_super) {
    __extends(UnexpectedError, _super);
    function UnexpectedError(error) {
        var _this = this;
        console.error('UnexpectedError:::', error);
        _this = _super.call(this, 'An unexpected error occurred. Please try again later.') || this;
        _this.name = 'UnexpectedError';
        return _this;
    }
    return UnexpectedError;
}(Error));
exports.UnexpectedError = UnexpectedError;
