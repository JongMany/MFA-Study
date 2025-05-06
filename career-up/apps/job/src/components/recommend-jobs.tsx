import { useEffect } from "react";
import { RecommendJobsWrapper } from "./recommend-jobs.styles";
import { JobType } from "../types";
import RecommendJob from "./recommend-job";

interface RecommendJobsProps {
  jobs: JobType[];
  fetchJobs: () => Promise<void>;
}

const RecommendJobs = ({ jobs, fetchJobs }: RecommendJobsProps) => {
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <RecommendJobsWrapper>
      <div className="job--recommend-jobs-top">
        <span className="job--recommend-jobs-top-title">추천 채용공고</span>
      </div>
      <div className="job--recommend-jobs-bottom">
        {jobs.map((job) => (
          <RecommendJob key={job.id} {...job} />
        ))}
      </div>
    </RecommendJobsWrapper>
  );
};

export default RecommendJobs;
