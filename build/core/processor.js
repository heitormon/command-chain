"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Processor = void 0;
class Processor {
    constructor() {
        this.commands = [];
    }
    add(command) {
        this.commands.push(command);
    }
    run(request, response) {
        this.setup();
        this.commands.forEach((command) => {
            console.log(command);
            command.run(request, response);
        });
    }
}
exports.Processor = Processor;
