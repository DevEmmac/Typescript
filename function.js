 "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
exports.getName = getName;
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
// const function
var format = function (title, param) { return "".concat(title, " ").concat(param); };
exports.format = format;
// Void function
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
var fetchData = function (url) { return Promise.resolve("Data from ".concat(url)); };
exports.fetchData = fetchData;
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
function getName(user) {
    return "".concat(user === null || user === void 0 ? void 0 : user.first, " ").concat(user === null || user === void 0 ? void 0 : user.last);
}
