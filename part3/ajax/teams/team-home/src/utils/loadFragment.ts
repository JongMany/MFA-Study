export async function loadFragment(root: HTMLElement) {
  const template = root.getAttribute("data-fragment")!;

  // const htmlUrl = `${template}/index.html`;
  const proxyPath = template.replace("http://localhost:3002", "");

  const htmlUrl = `${proxyPath}/index.html`;
  const styleUrl = `${proxyPath}/index.css`;
  const scriptUrl = `${template}/index.js`;

  try {
    // html 로드
    const html = await window.fetch(htmlUrl).then((res) => res.text());
    root.innerHTML = html;

    // css 로드
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = styleUrl;
    root.appendChild(link);

    // script 로드
    const script = document.createElement("script")!;
    script.src = scriptUrl;
    root.appendChild(script);
  } catch (error) {
    // TO-DO: 리포트 서버로 에러를 전송한다.

    // 에러 화면을 띄운다.
    root.innerHTML = `<div class="error">에러입니다</div>`;
  }
}
