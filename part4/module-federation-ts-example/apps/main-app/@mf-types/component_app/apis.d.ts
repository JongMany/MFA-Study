
    export type RemoteKeys = 'component_app/Button';
    type PackageType<T> = T extends 'component_app/Button' ? typeof import('component_app/Button') :any;