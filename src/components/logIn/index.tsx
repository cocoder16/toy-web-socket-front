import React from "react";
import Button from "src/components/atom/Button";

type IProps = {
  onLogIn: () => void;
};

function LogIn({ onLogIn }: IProps) {
  return (
    <div className="d-flex" data-testid="log-in">
      <form className="card" style={{ width: 300 }}>
        <div className="mb-3">
          <label htmlFor="user-name-input" className="form-label">
            닉네임
          </label>
          <input
            data-testid="nickname-input"
            type="text"
            className="form-control"
            id="user-name-input"
            maxLength={12}
          />
          <div id="emailHelp" className="form-text">
            건너뛰면 닉네임은 "익명"을 사용하게 됩니다.
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Button className="btn btn-primary" value="확인" />
          <Button
            dataTestid="skip-btn"
            className="btn btn-light"
            value="건너뛰기"
            onClick={onLogIn}
          />
        </div>
      </form>
    </div>
  );
}

export default LogIn;
