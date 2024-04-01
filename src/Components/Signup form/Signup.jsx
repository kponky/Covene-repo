import React, { useState } from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signupWrapper">
      <section>
        <div className="Form-side">
          <h1>Sign Up</h1>

          <form>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />

            <input type="email" name="email" placeholder="Email" required />

            <input
              type="tel"
              name="phone number"
              placeholder="Phone Number"
              pattern="{+0-9}[13]"
              required
            />

            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <FontAwesomeIcon className="icon"
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
              />
            </div>

            <div className="password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder=" Confirm Password"
                required
              />
              <FontAwesomeIcon  className="icon"
                icon={showConfirmPassword ? faEyeSlash : faEye}
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
          </form>

          <button className="btn" type="submit">
            Signup
          </button>
          <div className="additional-options">
            <p>
              Already have an account? Login <a href="#">here</a>{" "}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="form-img">
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstories.freepiklabs.com%2Fstorage%2F1297%2FMobile-login-01.svg&tbnid=fCpqPqv92KlkQM&vet=12ahUKEwjF3Lv8kqGFAxWV0AIHHaKlDfQQMyhPegUIARChAg..i&imgrefurl=https%3A%2F%2Fstoryset.com%2Flogin&docid=55b9b03PvXjrTM&w=800&h=800&q=illustrations%20images%20for%20login%20page&ved=2ahUKEwjF3Lv8kqGFAxWV0AIHHaKlDfQQMyhPegUIARChAg"/>
        </div>
      </section>
    </div>
  );
};

export default Signup;
