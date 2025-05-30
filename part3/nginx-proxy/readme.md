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

# 특징
- Nginx를 이용한 Reverse Proxy Server는 매우 일반적인 형태. Location을 통해 서버 분리만을 추가하는 형태라 도입이 쉬움
- 각 팀이 다른 도메인(a.com, b.com)을 사용하는 것은 여러가지 측면에서 올바르지 않을 수 있다. 
  - 서브 도메인(a.com, network.a.com)을 활용해서 각 팀이 분리될 수 있지만, 완전히 같은 서비스라는 인식을 주지 않는다.
- 외부에서는 같은 리소스로 인식하므로 cors와 같은 문제도 해결가능
- location의 path로 구별되는 서버라는 것을 인지하고 spa를 사용하여 각자 구축할 때 주의해야 한다. (보통 Linked SPA라고 부른다.)
  - SPA 사이에서 넘나들 때는 a 태그를 이용한 하드 네비게이션을 사용해야 한다.
  - SPA 내부에서 이동할 때는 soft navigation을 사용한다.
- 내부망의 엔드포인트만 공유하고 인프라를 각자의 팀에서 개발, 관리할 수 있다. 
  - 내부에서 인프라를 구축하고 엔드포인트만 nginx에 등록
- 팀이 같은 리소스를 각자 중복으로 사용한다. 스타일이나 중복 로직을 별도 패키지로 구축하고 함께 사용하는 경우에도 각자 빌드를 통해 따로 유저에게 제공된다. 
- 각 팀은 각자 앱을 개발하게 된다. 이로 인해 각 팀의 영역으로 이동시에는 스타일이나 같은 로직을 중복으로 로드해야한다. 
  - 머신의 리소스 측면에서는 단점이나 완벽하게 서비스는 분리되어 있으므로 장애의 전파는 차단될 수 있다.
- 팀간의 이동시에는 하드링크로 인해 새로 실행하면서 깜빡임이 있을 수 있고, 이로 인해 UX를 다소 해칠 수 있다. 
  - 확실한 분리로 인한 장점과 팀 간의 전환이 빈번하지 않을 경우에 선택할 수 있는 좋은 옵션이다.