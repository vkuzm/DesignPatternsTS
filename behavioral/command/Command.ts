interface Command {
    execute(): void;
    unexecute(): void;
}