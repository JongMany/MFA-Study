
    export type RemoteKeys = 'edu/injector';
    type PackageType<T> = T extends 'edu/injector' ? typeof import('edu/injector') :any;