export namespace utils {
    export { getTime };
    export { logMem };
    export { formatD };
    export { calcStats };
    export { calcDeviation };
    export { calcCorrelation };
}
export function mark(label: Label, samples: Samples, callback?: Function): Promise<void>;
export function compare(title: string, samples: Samples, cases: FunctionObject): Promise<void>;
export function run(tries: Function, callback?: Function): Promise<void>;

declare function getTime(): bigint;
declare function logMem(): void;
declare function formatD(duration: bigint): string;
declare function calcDeviation(list: bigint[]): number;
declare function calcCorrelation(x: bigint[], y: bigint[]): number;
declare function calcStats(list: bigint[]): {
    rme: number;
    min: bigint;
    max: bigint;
    mean: bigint;
    median: bigint;
    formatted: string;
};
type Label = Function | string;
type Samples = Function | number | null;
type FunctionObject = {
    [key: string]: Function;
};
export {};
