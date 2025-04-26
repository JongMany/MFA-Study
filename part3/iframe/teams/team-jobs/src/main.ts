import "./style.css";

document.querySelector<HTMLDivElement>(
  "#jobs-fragment-recommendation"
)!.innerHTML = `
<h2>추천 채용공고</h2>
<div class="recommendations"></div>
`;

fetch("/jobs/api/recommendations.json")
  .then((res) => res.json())
  .then((recommendations) => {
    document.querySelector<HTMLDivElement>(".recommendations")!.innerHTML =
      recommendations
        .map((recommendation: { url: string; name: string }) => {
          return `
    <div>
    <a href="${recommendation.url}">${recommendation.name}</a>
    </div>
    `;
        })
        .join("");

    document
      .querySelectorAll<HTMLAnchorElement>(".recommendations a")
      .forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          window.parent.location.href = a.href;
        });
      });
  });
