
    export type RemoteKeys = 'posting/injector';
    type PackageType<T> = T extends 'posting/injector' ? typeof import('posting/injector') :any;