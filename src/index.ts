import { HelloRequest } from "./hello/internal/hello.request";
import { HelloResponse } from "./hello/internal/hello.response";
import { HelloProcessor } from "./hello/processor/hello.processor";

const req = new HelloRequest(1, 2);
const res = new HelloResponse();
const processor = new HelloProcessor();
processor.run(req, res);
console.log(res);