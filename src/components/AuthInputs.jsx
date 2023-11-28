import { useState } from "react";
import "../AuthInput.css";
import styled, { css } from "styled-components";
import Button from "./Button";
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses =
    "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow";
  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  if (emailNotValid) {
    labelClasses += " text-red-400";
    inputClasses += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800 mx-auto"
    >
      <div className="flex flex-col gap-2 mb-6">
        <p>
          <label className={labelClasses}>Email</label>
          <input
            type="email"
            className={inputClasses}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className={inputClasses}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <Button type="button" className="text-amber-400 hover:text-amber-500">Create a new Account</Button>
        <Button type="button" className="text-amber-400 hover:text-amber-500" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
