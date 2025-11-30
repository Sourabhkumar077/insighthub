import { useState } from "react"
import { signup } from '../services/authService.js';

const SignUp = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await signup(form);
            localStorage.setItem("token", result.token);
            // console.log(result);
            // console.log(result.token);
            alert("Signup successfull !")
        } catch (err) {
            if (err.response) {
                // Server responded with a status code outside 2xx
                console.error("Error response:", err.response.data);
            } else if (err.request) {
                // Request made but no response
                console.error("No response received:", err.request);
            } else {
                // Something else
                console.error("Error message:", err.message);
            }
            alert("Signup failed!");
        }
    }
    return (

        <div>
            <h2>Create Account </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
                <br />

                <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default SignUp