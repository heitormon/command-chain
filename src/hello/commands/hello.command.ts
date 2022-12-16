import { Command } from "../../core/command";
import { HelloRequest } from "../internal/hello.request";
import { HelloResponse } from "../internal/hello.response";


export class HelloCommand implements Command<HelloRequest,HelloResponse>{

    run(t: HelloRequest, r: HelloResponse): void {
        console.log('Hello World')
    }
    
}