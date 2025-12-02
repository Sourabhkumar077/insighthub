import {useState,useContext} from 'react'
import { login } from '../services/authService';
import {AuthContext} from '../context/AuthContext.jsx'

const Login = () => {
  const {loginUser} = useContext(AuthContext);

  const [form, setForm] = useState({
    email :"",
    password:""
  });

  const handleChange = (e)=>{
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(form);
      // console.log("result data = ",result);
      loginUser(result);
      alert("Login successfull !");
    } catch (error) {
      console.log(error);
      alert("Login failed due to error!" , error);
    }
  }
  return (
    <div >
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder='Enter your email'
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder='Enter your password'
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <button>Login to platform</button>
      </form>
    </div>
  )
}

export default Login;