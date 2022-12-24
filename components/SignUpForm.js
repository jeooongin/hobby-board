import React, { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { signUp } from "../reducers/user";

const SignUpForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [name, onChangeName] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(signUp({ email, name, password }));
    },
    [email, name, password]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
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
        <label htmlFor="user-name">이름</label>
        <br />
        <input
          name="user-name"
          type="text"
          value={name}
          onChange={onChangeName}
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
        <label htmlFor="user-password">패스워드 확인</label>
        <br />
        <input
          type="password"
          name="user-password-check"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          required
        />
        {passwordError && (
          <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
        )}
      </div>
      <div style={{ marginTop: "10px" }}>
        <button type="submit">회원가입</button>
      </div>
    </form>
  );
};

export default SignUpForm;
