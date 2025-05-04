
    export type RemoteKeys = 'dynamic/Button';
    type PackageType<T> = T extends 'dynamic/Button' ? typeof import('dynamic/Button') :any;