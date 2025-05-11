interface Game {
    started: boolean;
    processStarted: boolean;
    stopped: boolean;
    setRegion(region: string): this;
    setOptions(options: object): this;
    setECPKey(ECPKey: string): this;
    configure(options: { options?: object; region?: string; ECPKey?: string }): this;
    setOpen(value: boolean): this;
    setCustomMap(map: string): this;
    findStructureByUUID(uuid: string, includeInactive?: boolean): any | null;
    start(options: object): Promise<string>;
    stop(): Promise<this>;
    isRunning(): boolean;
    link: string | null;
    version: string;
    requestOptions: object;
    region: string;
    ships: any;
    aliens: any;
    asteroids: any;
    collectibles: any;
    objects: any;
    teams: any | null;
    timer: any;
    options: object;
}