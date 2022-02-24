import './App.css';
import LoginForm from './component/LoginForm'
import PostList from './component/PostList'
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    //<Grid> : 나란히 배치, 하위 컴포넌트에게는 item이라는 prop을 줘야함.
    //<Grid xs> : auto layout, 플렉스 비트윈과 같은 역할?
    //<Typography component="h1" variant="h5"> : 텍스트태그 같은 역할?, 실제 태그는 h1인데 디자인은 h5에 하겠다.
    //동글동글한 ui를 원하면 avatar로 씌워주기
    //가운데 배치는 <Box> like div
    //xs : extra small, md : 900px
    <div className="App">
      <LoginForm/>
      {user.loginState ? <PostList/> : ""}
    </div>
  );
}

export default App;
