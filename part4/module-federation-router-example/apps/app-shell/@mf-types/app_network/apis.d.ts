
    export type RemoteKeys = 'app_network/injector';
    type PackageType<T> = T extends 'app_network/injector' ? typeof import('app_network/injector') :any;