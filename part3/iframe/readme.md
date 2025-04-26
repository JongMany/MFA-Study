# iframe이란

- iframe은 the inline frame element라는 의미
- 중첩된 브라우징 컨텍스트를 나타내며 현재 페이지에 다른 HTML 페이지를 삽입할 수 있다.

## 시나리오

- Team Home이 운영하는 정적 파일을 제공하는 웹서버 localhost:3001
  - pages: index.html
- Team Jobs가 운영하는 정적 파일을 제공하는 웹서버 localhost:3002
  - fragments: /jobs/fragments/recommendation/index.html

## 특징

- iframe은 구형 브라우저에서도 사용가능
- 그냥 서로 다른 도큐먼트이며, 별개의 브라우저 컨텍스트를 생성하므로 강력하게 격리된다. 이로 인해 서로 통신을 해야한다면 추가적인 작업이 필요하다.
- 새로운 컨텍스트를 만들어야 하므로 추가적인 메모리 및 CPU가 필요하다.
- 검색엔진은 iframe을 개별 페이지로 색인하므로 본 페이지의 내용에서 제외한다.
- 단점이 많지만 오래전부터 결합을 위해 선택하게 되는 선택지 중 가장 대표적인 케이스다.
- 성능, 접근성, SEO가 중요한 고객 지향적인 서비스를 구축하는 경우 iframe을 권장하지 않는다.
