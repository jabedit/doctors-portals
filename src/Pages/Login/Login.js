import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const [signInError, setSignInError] = useState('')
  const [data, setData] = useState("");
  const {signIn} = useContext(AuthContext)
  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      setSignInError(error.message)
  })
    
  };
  return (
    <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 rounded-xl bg-slate-800'>
                <h2 className='text-xl text-center'>Sign In</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                   
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signInError && <p className='text-red-600'>{signInError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/signup">Please Sign Up</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
  );
};

export default Login;
