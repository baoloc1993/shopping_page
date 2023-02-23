import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useValidateForm from "../../hook/useValidateForm";
import classes from './RegisterPage.module.css'
import { authActions } from "../../store/auth";

// The SignupForm component
function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { values, errors, handleChange, handleSubmit } = useValidateForm(
      {
        fullName: '',
        email: '',
        password: '',
        phone: ''
      },
      validate,
      handleAfterLogin
    );
  
    function handleAfterLogin(){
      const registeredUserJson = window.localStorage.getItem('user');
      var registeredUser = [];
      if (registeredUserJson) {
          registeredUser =  JSON.parse(registeredUserJson);
      }
      if (registeredUser.filter(value => value.email === values.email).length > 0 &&
            registeredUser.filter(value => value.password === values.password).length > 0){
        dispatch(authActions.logIn(values));
        navigate('/');

      }else{
        errors.email = "Wrong email or password";
      }
    }

    return (
      <form onSubmit={handleSubmit} className={classes['signup-form']}>
            <h1> Login</h1>

            <input
              placeholder="Email"            
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={errors.email && 'error-input'}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
            <input
              placeholder="Password"            
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className={errors.password && 'error-input'}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}

        <button type="submit" >Login</button>
        <Link to ="/register"><p>Create an account? Sign up </p> </Link>
      </form>
    );
  }


// A simple form validation function
function validate(values) {
    let errors = {};
  
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    } 
  
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
  }

  export default LoginPage;