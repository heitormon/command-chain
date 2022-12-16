import { Command } from "./command";

export abstract class Processor<T, R>{
    commands: Command<T, R>[] = [];

    abstract setup(): void;

    add(command: Command<T, R>): void {
        this.commands.push(command);
    }

    run(request: T, response: R): void {
        this.setup();
        this.commands.forEach((command) => { 
            console.log(command);
            command.run(request, response) });
    }
}