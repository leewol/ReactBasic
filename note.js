// * CRA는 컴포넌트와 스타일을 독립적으로 유지시켜준다!

/*
  ! React는 변화가 일어날 때마다 알아서 refresh
  ! 원래 state가 바뀔 때마다 해당 컴포넌트의 모든 코드가 다시 실행되는데
  * 우리는 컴포넌트가 처음 한 번의 render에만 코드가 실행되도록 만들고 싶을 때가 있다
  * ex) API를 통해 데이터를 가져올 때
  ! useEffect 이용 : 코드를 언제 실행할지 선택 가능
  * useEffet(실행하고 싶은 코드, dep(endencie)s: 해당 state가 변화할 때마다 실행 => React가 지켜봐야 할 것)
  * React 입장에서는 보호막 같은 것
  * 언제 create 되고 destroy 되는지를 알 수 있다
   ! 컴포넌트가 destory 될 때도 코드 실행 가능
   * 자주 사용되지는 않음
 */

/*
 * create-react-app은 CSS코드를 javascript 오브젝트로 변환시켜줌
 * style들도 modular가 될 수 있음!
 */

/* 
 ! router는 URL을 보고 있는 컴포넌트
 ! BrowserRouter에서 URL은 보통의 웹사이트처럼 생김
 ! HashRouter는 #이 덧붙여진다
 */

/*
 *  Router를 먼저 렌더링 해주고, 그 안에 들어가는 건 유저가 있는 URL에 따라 유저에게 보여주고 싶은 것
 * Switch는 한 번에 하나의 Route만 렌더링하기 위해 사용
 a href로 컴포넌트 이동 시켜줄 수 있지만 페이지 전체가 리로드됨
 * Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜줌
 */

/* 
  react-router-dom 5버전 -> 버전6 바뀐 부분

  1. Switch컴포넌트가 Routes컴포넌트로 대체되었습니다.
  Switch -> Routes

  2. Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고, element prop에 자식 컴포넌트를 할당하도록 바뀌었습니다.
  Route path="/" element={< Home / >}
*/

// ! useParams()로 받은 데이터 객체의 프로퍼티 이름은 Route에서 지정한 (:받을변수이름)과 동일 => React Router가 넘겨준다
