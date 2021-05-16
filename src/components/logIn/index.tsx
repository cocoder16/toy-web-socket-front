import React from "react";
import Button from "src/components/atom/Button";

type IProps = {
  onChangeNickname?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLogIn: () => void;
  onSkipLogIn: () => void;
};

function LogIn({ onLogIn, onChangeNickname, onSkipLogIn }: IProps) {
  return (
    <div className="d-flex" data-testid="log-in">
      <div className="card" style={{ width: 300 }}>
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
            onChange={onChangeNickname}
          />
          <div id="emailHelp" className="form-text">
            건너뛰면 닉네임은 "익명"을 사용하게 됩니다.
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Button
            dataTestid="nickname-confirm-btn"
            className="btn btn-primary"
            value="확인"
            onClick={onLogIn}
          />
          <Button
            dataTestid="skip-btn"
            className="btn btn-light"
            value="건너뛰기"
            onClick={onSkipLogIn}
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
