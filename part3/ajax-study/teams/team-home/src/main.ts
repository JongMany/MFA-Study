import "./style.css";
import { loadFragment } from "./utils/fragment";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="main">메인입니다</div>
  <div
    id="team-jobs-recommendation"
    data-fragment="/jobs/fragments/recommendation"
  ></div>
`;

loadFragment(
  document.querySelector<HTMLDivElement>("#team-jobs-recommendation")!
);
