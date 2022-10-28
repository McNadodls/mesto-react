import AuthForm from './AuthForm';

function Register  (props) {
  return (
      <AuthForm {...props} title="Регистрация" submitTitle="Зарегистрироваться" regSignature="Уже зарегистрированы? Войти"/>
  )
}

export default Register ;