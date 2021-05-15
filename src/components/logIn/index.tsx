import React from "react";

type IProps = {
  onSignedIn: () => void;
};

function LogIn({ onSignedIn }: IProps) {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      data-testid="log-in">
      <form className="card" style={{ width: 300, padding: 14 }}>
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
          <button type="button" className="btn btn-primary">
            확인
          </button>
          <button
            data-testid="skip-btn"
            type="button"
            className="btn btn-light"
            onClick={onSignedIn}>
            건너뛰기
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
