
    export type RemoteKeys = 'isolated_app/injector';
    type PackageType<T> = T extends 'isolated_app/injector' ? typeof import('isolated_app/injector') :any;