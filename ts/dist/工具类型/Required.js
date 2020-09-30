var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function makeRequest(url, log) {
    return __awaiter(this, void 0, void 0, function* () {
        log === null || log === void 0 ? void 0 : log(`Request started at ${new Date().toISOString()}`);
        // roughly equivalent to
        //   if (log != null) {
        //       log(`Request started at ${new Date().toISOString()}`);
        //   }
        const result = (yield fetch(url)).json();
        log === null || log === void 0 ? void 0 : log(`Request finished at at ${new Date().toISOString()}`);
        return result;
    });
}
