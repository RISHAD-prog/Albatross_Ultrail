import {useState } from "react";
import { useForm } from "react-hook-form";
// import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [checked, setChecked] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    // const { signIn, googleSignIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // let location = useLocation();
    // let from = location.state?.from?.pathName || "/";
    const { register, formState: { errors } } = useForm();

    // const handleChange = () => {
    //     setChecked(!checked);
    //     setPasswordVisible(!passwordVisible);
    // };

    // const onSubmit = (data: any )=> {
    //     signIn(data.email, data.password)
    //         .then((result: any) => {
    //             const user = result.user;
    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: `${user?.email} has been logged in`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //             reset();
    //             navigate(from, { replace: true });
    //         })
    //         .catch((error:any) => alert(error.message));
    // };

    // const handleGoogle = () => {
    //     googleSignIn()
    //         .then((result: any) => {
    //             const user = result.user;
    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: `${user?.displayName} has been logged in`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //             navigate(from, { replace: true });
    //         })
    //         .catch((error: any) => alert(error.message));
    // };

    return (
        <div className="container my-5">
            <div className="row">
                {/* Left Side with Image */}
                <div className="col-lg-6 d-none d-lg-block">
                    <div
                        className="h-100"
                        style={{
                            backgroundImage: `url('Albatross_cover.png')`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: '10px',
                        }}
                    >
                        {/* <div className="h-100 d-flex flex-column justify-content-center align-items-center text-white p-4">
                            <h1 className="display-5 fw-bold">Join the LADAKH MARATHON community</h1>
                            <p className="lead">
                                Please sign in to access your LADAKH MARATHON dashboard and register for the LADAKH Marathon Series races.
                            </p>
                            <Link to="/" className="btn btn-danger mt-3">Back To Home</Link>
                        </div> */}
                    </div>
                </div>

                {/* Right Side with Login Form */}
                <div className="col-lg-6">
                    <div className="text-center mb-4">
                        <img src="/Albatross_Logo_1.png" alt="Logo" style={{ maxWidth: '100px' }} />
                        <h1 className="">Sign In</h1>
                        <p className="h6">Enter your email and password to login</p>
                    </div>
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Enter your email"
                                        {...register("email", {
                                            required: "Email field is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Please enter a valid email address"
                                            }
                                        })}
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    />
                                    {errors.email && <div className="invalid-feedback">{String(errors.email.message)}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            id="password"
                                            placeholder="Enter your password"
                                            {...register("password", {
                                                required: "Password field is required",
                                                minLength: {
                                                    value: 5,
                                                    message: "Password must be at least 5 characters long"
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,
                                                    message: "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
                                                }
                                            })}
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setPasswordVisible(!passwordVisible)}
                                        >
                                            {passwordVisible ? 'Hide' : 'Show'}
                                        </button>
                                    </div>
                                    {errors.password && <div className="invalid-feedback">{String(errors.password.message)}</div>}
                                </div>
                                <div className="form-check mb-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberMe"
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                </div>
                                
                                {/* <div className="d-grid mb-3">
                        <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>Login</button>
                    </div>
                    <div className="text-center">
                        <p>New Here? <Link to='/register' className='text-primary'>Go to Registration</Link></p>
                        <div className="my-3">OR</div>
                        <button
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                        onClick={handleGoogle}
                        >
                        <BsGoogle className="me-2" /> Login with Google
                        </button>
                    </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;