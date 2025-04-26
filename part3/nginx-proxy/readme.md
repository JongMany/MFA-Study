# Nginx와 Frontend Proxy Server

Nginx = 웹서버  
Nginx (Reverse Proxy Server)는 사용자의 요청을 가장 먼저 받고, 내부의 서버로부터 리소스를 대신 요청하고 받아 제공하는 중개자 역할을 하며 여러가지 도움을 준다.

- 로드 밸런싱을 수행해서 성능, 확장성 및 신뢰성을 향상시킬 수 있습니다.
- 캐싱을 이용해서 동일한 응답을 뒤에있는 서버에 다시 요청하지 않을 수 있습니다.
- 외부 사용자로부터 내부의 서버를 숨겨 보안에 도움을 준다.
- SSL을 사용해서 암호화가 가능하다.

#시나리오 정리

- Team Home이 운영하는 정적 파일을 제공하는 웹서버 localhost:3001
  - pages: /index.html
- Team Jobs 운영하는 정적 파일을 제공하는 웹서버 localhost:3002
  - pages: /jobs/index.html
- Team Network이 운영하는 정적 파일을 제공하는 웹서버 localhost:3003
  - pages: /network/index.html
- Nginx Reverse Proxy Server: localhost:3000
  - Nginx를 Docker로 실행

# 정리

- Nginx는 웹서버와 리버스 프록시 서버로 많이 사용된다.
- 사용자의 요청을 받아 구분하여, 약속된 내부 서버로부터 응답을 대신 받아 전해주는 중개자의 역할을 한다.
- 도메인으로 구분이 가능하기도 하지만, URL을 이용해서 Path로 구분할 수 있다.
- 실제 많은 서비스들이 이렇게 요청을 해석하여 서비스를 구분하는 경우가 많다.
- 정적인 사이트뿐만 아니라 SPA에서도 사용될 수 있다.
