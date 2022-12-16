import { Processor } from "../../core/processor";
import { HelloCommand } from "../commands/hello.command";
import { SumCommand } from "../commands/sum.command";
import { HelloRequest } from "../internal/hello.request";
import { HelloResponse } from "../internal/hello.response";

export class HelloProcessor extends Processor<HelloRequest, HelloResponse>{
    helloCommand: HelloCommand;
    sumCommand: SumCommand;
    constructor(){
        super();
        this.helloCommand = new HelloCommand();
        this.sumCommand = new SumCommand();

    }
    setup(): void {
        this.add(this.helloCommand)
        this.add(this.sumCommand)
    }
    
}