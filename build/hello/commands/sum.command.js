"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumCommand = void 0;
class SumCommand {
    run(t, r) {
        r.c = t.a + t.b;
    }
}
exports.SumCommand = SumCommand;
