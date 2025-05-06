
    export type RemoteKeys = 'network/injector';
    type PackageType<T> = T extends 'network/injector' ? typeof import('network/injector') :any;