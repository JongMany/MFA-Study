# AJAX - Asynchronous JS and XML

- 자바스크립트를 이용해서 비동기적으로 서버에 있는 데이터를 받아오는 기법
- XML, JSON, HTML을 이용
- 과거 브라우저에서는 XMLHttpRequest를 이용, 최근 모던 브라우저에서는 Fetch를 활용

## Fetch를 이용해서 프래그먼트의 HTML을 받아오고 페이지에 추가한다.

- 페이지와 프레그먼트가 있는 서버를 팀별로 운영한다.

## 시나리오

- Team Home이 운영하는 정적 파일을 제공하는 웹서버 (3001) => vite
  - Pages: /index.html
- Team Jobs이 운영하는 정적 파일을 제공하는 웹서버 (3002) =>
  - Pages: /jobs/fragments/recommendation/index.html
