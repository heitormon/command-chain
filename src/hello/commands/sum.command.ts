import { Command } from "../../core/command";
import { HelloRequest } from "../internal/hello.request";
import { HelloResponse } from "../internal/hello.response";


export class SumCommand implements Command<HelloRequest, HelloResponse>{

    run(t: HelloRequest, r: HelloResponse): void {
        r.c = t.a + t.b;
    }

}