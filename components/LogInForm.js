import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { logIn } from "../reducers/user";

const LogInForm = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");

  const dispatch = useDispatch();
  const { logInDone } = useSelector((state) => state.user);

  useEffect(() => {
    if (logInDone) {
      setEmail("");
      setPassword("");
    }
  }, [logInDone]);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(logIn({ email, password }));
    },
    [email, password]
  );

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <input
          name="user-email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label htmlFor="user-password">패스워드</label>
        <br />
        <input
          type="password"
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button type="submit">로그인</button>
      </div>
    </form>
  );
};

export default LogInForm;
