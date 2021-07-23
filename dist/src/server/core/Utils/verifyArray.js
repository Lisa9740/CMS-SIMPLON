"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyArray = void 0;
class VerifyArray {
    isSame(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every(function (e, index) {
            return e === arr2[index];
        });
    }
}
exports.VerifyArray = VerifyArray;
//# sourceMappingURL=verifyArray.js.map