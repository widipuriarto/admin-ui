import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

function FormForgotPassword() {
  return (
    <>
      {/* form start */}
      <div className="mt-16">
        <div className="flex justify-center font-bold text-2xl mb-4">Forgot Password</div>
        <div className="flex justify-center mb-6 text-sm text-gray-03">Enter your email address to get the password reset link.</div>
        <form action="">
          <div className="mb-6">
            <LabeledInput label="Email Address" id="email" type="email" placeholder="hello@example.com" name="email" />
          </div>
          <Button>Password Reset</Button>
          <div className="my-3">
            <Link to="/login">
              <Button type="button" variant="secondary">
                Back to Login
              </Button>
            </Link>
          </div>
        </form>
      </div>
      {/* form end */}
    </>
  );
}

export default FormForgotPassword;
