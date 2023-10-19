import { useForm } from "react-hook-form";
import "./signUpUser.css";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.password === data.passwordCompare){
        alert(
            `First name: ${data.firstName}, Last name: ${data.lastName}, 
            User name: ${data.userName}, email: ${data.email},
            password: ${data.password}`
          );
    }else{
        alert(
            'Passwords do not match, please try again.'
          );
    }
  };

  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className="signUpUser">

        <label>First name</label>
        <input
        type="firstName"
        {...register("firstName", { required: true})}
        />
        {errors.firstName && <p className="textAlert">First name is required</p>}

        <label>Last name</label>
        <input
        type="lastName"
        {...register("lastName", { required: true})}
        />
        {errors.lastName && <p className="textAlert">Last name is required</p>}

        <label>User name</label>
        <input
        type="userName"
        {...register("userName", { required: true})}
        />
        {errors.userName && <p className="textAlert">User name is required</p>}

        <label>Email</label>
        <input
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
        <p className="textAlert">Email is required and must be valid</p>
        )}

        <label>Password</label>
        <input
        type="password"
        {...register("password", { required: true })}
        />
        {errors.password && <p className="textAlert">Password is required</p>}

        <label>Repeat password</label>
        <input
        type="password"
        {...register("passwordCompare", { required: true })}
        />
        {errors.passwordCompare && <p className="textAlert">Repeated password is required</p>}

        <button type="submit">
        Submit
        </button>

    </form>
  );
}

export default LoginForm;
