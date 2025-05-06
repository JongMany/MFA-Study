import { JobType } from "../types";
interface RecommendJobsProps {
    jobs: JobType[];
    fetchJobs: () => Promise<void>;
}
declare const RecommendJobs: ({ jobs, fetchJobs }: RecommendJobsProps) => import("react/jsx-runtime").JSX.Element;
export default RecommendJobs;
