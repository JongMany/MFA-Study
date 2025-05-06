import { type ApplyStatusType, type JobType } from "./types";
export declare function getJobs(token: string): Promise<JobType[]>;
export declare function getApplyStatus(token: string): Promise<ApplyStatusType>;
