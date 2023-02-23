import { Link, Navigate, useNavigate } from "react-router-dom";
import useValidateForm from "../../hook/useValidateForm";
import classes from './CheckoutForm.module.css'

// The checkoutForm component
function CheckoutForm() {

    const navigate = useNavigate();

    const { values, errors, handleChange, handleSubmit } = useValidateForm(
      {
        fullName: '',
        email: '',
        password: '',
        phone: ''
      },
      validate,handleAfterReg
    );
    function handleAfterReg(){
        window.localStorage.removeItem('carts');
        navigate("/");
    }
    return (
        <form onSubmit={handleSubmit} className={classes['checkout-form']}>
            <h1> Billing details</h1>

            <input
              placeholder="Full Name"
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              className={errors.fullName && 'error-input'}
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
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
            <input
              placeholder="Phone"
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className={errors.phone && 'error-input'}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
        
        <button type="submit" >Place order
        </button>
      </form>
      
    );
  }


// A simple form validation function
function validate(values) {
    let errors = {};
    const registeredUserJson = window.localStorage.getItem('user');
    var registeredUser = [];
    if (registeredUserJson) {
        registeredUser =  JSON.parse(registeredUserJson);
    }
  
    if (!values.fullName) {
      errors.fullName = 'Full name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    } else if (registeredUser.filter(value => value.email === values.email).length > 0){
        errors.email = 'Email already existed';
    }
  
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
  
    if (!values.phone) {
      errors.phone = 'Phone number is required';
    }
    return errors;
  }

  export default CheckoutForm;