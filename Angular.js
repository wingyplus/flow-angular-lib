declare class Module {
    config(modulesToLoad: Array<any>): Module;
    controller(name: string, modulesToLoad: Array<any>): Module;
    factory(name: string, modulesToLoad: () => any): Module;
    filter(name: string, modulesToLoad: () => any | Array<any>): Module;
    provider(name: string, modulesToLoad: () => any): Module;
    run(modulesToLoad: Array<any>): Module;
    service(name: string, modulesToLoad: Array<any>): Module;
}

declare class Angular {
    forEach<T>(obj: T, iterator: (k: any, v: any) => void, context?: Object): T;
    module(name: string, modulesToLoad?: Array<string>): Module;
}

declare var angular: Angular
