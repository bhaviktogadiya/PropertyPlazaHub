import { useFormik } from "formik";
import '../assets/css/Login.css'
import axios from "axios"; 

import { useEffect } from "react";
import { ENDPOINT } from "../config";
import { useNavigate } from "react-router-dom";

//2

const Login  = () => {
    const Navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },

        validate: (values) => {
            // console.log(values, "=======here");
            let errors = {}
            if (!values.email) {
                errors.email = "please enter email"  
            }
            if (!values.password) {
                errors.password = "please enter password"
            }
            // console.log(errors);
            return errors
        },

        onSubmit: (values) => {
            try{
                // console.log(values);
                console.log(ENDPOINT);
                axios.post(ENDPOINT + "/login",{
                    email: values.email,
                    password: values.password,
                }).then(res => {
                    // console.log(res);
                    if (res?.status == 200 && res?.data?.token) {
                        localStorage.setItem('token', res?.data?.token)
                        localStorage.setItem('userData', JSON.stringify(res?.data))
                        Navigate("/")
                    }
                }).catch(err => {
                    console.log(err);
                })
            }catch(err){
                console.log(err);
            }
            // try{
            //     // console.log(values);
            //     console.log(ENDPOINT);
            //     axios.post(`${ENDPOINT}/login`,{
            //         email: values.email,
            //         password: values.password,
            //     }).then(res => {
            //         // console.log(res);
            //         if (res?.status == 200 && res?.data?.token) {
            //             localStorage.setItem('token', res?.data?.token)
            //             localStorage.setItem('userData', JSON.stringify(res?.data))
            //             Navigate("/")
            //         }
            //     }).catch(err => {
            //         console.log(err);
            //     })
            // }catch(err){
            //     console.log(err);
            // }
        }
    })

    return(
        <div className="body">
            <div className="login-container">
                <h1>Login</h1>
                <form method="post" onSubmit={formik.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="Enter email"
                            className={formik.errors.email && 'is-error'}
                        />
                        {formik.errors.email && <p className="error-txt">{formik.errors.email}</p>}
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="******"
                            className={formik.errors.password && 'is-error'}
                        />
                        {formik.errors.password && <p className="error-txt">{formik.errors.password}</p>}

                    </div>
                    <div>
                        <button className="Sign-in">Sign in</button>
                    </div>
                </form>

                <button type="submit"><i class="fa-brands fa-google"></i> <a href="./google.html" style={{textDecoration: "none", color: "black"}}>Sign with Google</a></button>

                <p>Or <a href="./create.html">create an account</a>.</p>


            </div>
            
        </div>
    )
}

export default Login

//2