# Nginx의 SSI 기능이란 무엇인가

SSI(Server Side Includes)란 무엇인가

- #include 지시문을 사용하여 하나 이상의 파일 내용을 웹 서버의 웹 페이지에 포함시키는 방법
- Nginx 뿐만 아니라 다른 웹 서버에서도 지원하는 기능
- 웹 서버가 HTML 문서 내에서 지시문을 만나면, 지시문을 해석하여 변환하고 최종 결과물을 만들어서 요청자에게 제공한다.

## 시나리오

- Team Home이 운영하는 정적 파일을 제공하는 웹서버 (localhost:3001)
  - Pages: /index.html
- Team Jobs이 운영하는 정적 파일을 제공하는 웹서버 (localhost:3002)
  - Fragments: /job/fragment/recommendation/index.html
- Nginx Reverse Proxy Server (localhost:3000)

## 정리
- Nginx 서버에서 웹 서버를 설정할 때, ssi를 활성화해서 Server Side Includes 기능을 사용할 수 있다.
- 웹서버로 요청이 들어온 후, 응답을 위해 내부의 서버로부터 HTML을 받아온 후, 내용을 탐색하면서 #include 지시문이 있는지 확인
  - 있는 경우, 지시문이 가리키는 다른 문서를 가져와서 대체한 후 최정 결과물을 최종 응답을 내려준다.
- 클라이언트로 다시 응답을 보낸 후 템플릿을 가져오는 Ajax와 달리 서버에서 모든 처리를 한 후에 응답을 내려준다.