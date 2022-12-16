"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloProcessor = void 0;
const processor_1 = require("../../core/processor");
const hello_command_1 = require("../commands/hello.command");
const sum_command_1 = require("../commands/sum.command");
class HelloProcessor extends processor_1.Processor {
    constructor() {
        super();
        this.helloCommand = new hello_command_1.HelloCommand();
        this.sumCommand = new sum_command_1.SumCommand();
    }
    setup() {
        this.add(this.helloCommand);
        this.add(this.sumCommand);
    }
}
exports.HelloProcessor = HelloProcessor;
