export async function loadFragment(root: HTMLElement) {
  const template = root.getAttribute("data-fragment")!;

  const htmlUrl = `${template}/index.html`;
  const styleUrl = `${template}/index.css`;
  const scriptUrl = `${template}/index.js`;

  try {
    // html 로드
    const html = await window.fetch(htmlUrl).then((res) => res.text());
    root.innerHTML = html;

    // css 로드
    // const link = document.createElement("link")!;
    // link.rel = "stylesheet";
    // link.href = styleUrl;
    // root.appendChild(link);

    // script 로드
    // const script = document.createElement("script")!;
    // script.src = scriptUrl;
    // root.appendChild(script);

    const scripts = root.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");

      if (oldScript.src) {
        // 상대경로 src라면 보정해준다
        const src = oldScript.getAttribute("src")!;
        if (src.startsWith("./") || src.startsWith("../")) {
          const baseUrl = template; // ex: http://localhost:3002/jobs/fragments/recommendation
          newScript.src = new URL(src, baseUrl + "/").toString();
        } else {
          newScript.src = src;
        }
      } else {
        newScript.textContent = oldScript.textContent;
      }

      oldScript.replaceWith(newScript);
    });
  } catch (error) {
    // TODO: 리포트 서버로 에러를 전송한다.

    // 에러 화면을 띄운다.
    root.innerHTML = `<div class="error">에러입니당</div>`;
  }
}
