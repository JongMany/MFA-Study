
    export type RemoteKeys = 'fragment_recommend_connections/container';
    type PackageType<T> = T extends 'fragment_recommend_connections/container' ? typeof import('fragment_recommend_connections/container') :any;