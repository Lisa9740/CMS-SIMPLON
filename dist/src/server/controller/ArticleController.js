"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const Article_1 = __importDefault(require("../database/model/Article"));
class ArticleController {
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Article_1.default.findAll();
        });
    }
    static getById() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Article_1.default.findById(1);
        });
    }
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {
                id: 3,
                title: 'Je suis un article',
                content: 'test test content',
                author: 'Alison'
            };
            try {
                return yield Article_1.default.create(data);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    static update() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                column: 'content',
                filterColumn: 'id',
                newData: 'new new',
                searchData: 2
            };
            try {
                return yield Article_1.default.update(data);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    static delete() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Article_1.default.delete(1);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.ArticleController = ArticleController;
//# sourceMappingURL=ArticleController.js.map