# 1. 프로젝트 소개

같은 취미를 가진 사람들이 모여 취미를 공유하고 정보를 공유할 수 있는 커뮤니티 프로젝트

# 2. 사용 기술

- React
- Redux Toolkit
- Next.js
- HTML
- CSS

# 3. 트러블 슈팅

<details>
  <summary>footer가 화면 맨 아래 위치하지 않는 문제</summary>

    content와 footer를 감싸는 div에
    ```
    display: flex;
    flex-direction: column;
    height: 100vh;
    ```
    를 적용한 후

    content를 감싸는 div에
    ```
    flex: 1;
    ```
    을 적용해 content가 여백을 다 채우게 되므로
    footer가 맨 아래 위치하게 되었다.

</details>
