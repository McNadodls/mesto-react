import AuthForm from './AuthForm';

function Login (props) {
  return (
      <AuthForm {...props} title={"Вход"} submitTitle={"Войти"} regSignature={false}/>
  )
}

export default Login;