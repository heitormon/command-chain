export interface Command <T, R> {
    run(t: T, r: R): void;
}