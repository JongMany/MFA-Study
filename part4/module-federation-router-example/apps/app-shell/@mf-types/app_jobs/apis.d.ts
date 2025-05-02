
    export type RemoteKeys = 'app_jobs/injector';
    type PackageType<T> = T extends 'app_jobs/injector' ? typeof import('app_jobs/injector') :any;