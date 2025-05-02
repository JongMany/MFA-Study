
    export type RemoteKeys = 'remote_app/RemoteApp';
    type PackageType<T> = T extends 'remote_app/RemoteApp' ? typeof import('remote_app/RemoteApp') :any;