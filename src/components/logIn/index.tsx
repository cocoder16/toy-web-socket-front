import { useState, useCallback } from "react";
import Button from "src/components/atom/Button";

type IProps = {
  onChangeNickname: (event?: any) => void;
};

function LogIn({ onChangeNickname }: IProps) {
  const [nickname, setNickname] = useState("");

  const handleChangeInput = useCallback((event: any) => {
    const { value } = event.target;
    setNickname(value);
  }, []);

  return (
    <div className="d-flex" data-testid="log-in">
      <div className="card d-flex flex-row align-items-center">
        <label htmlFor="user-name-input" style={{ width: 60 }}>
          닉네임
        </label>
        <input
          data-testid="nickname-input"
          type="text"
          className="form-control w300"
          id="user-name-input"
          maxLength={12}
          value={nickname}
          onChange={handleChangeInput}
          onKeyDown={event => {
            // TODO: 키누르고있으면 계속 실행됨.
            if (event.code === "Enter") {
              event.preventDefault();
              onChangeNickname(nickname);
              setNickname("");
            }
          }}
        />
        <Button
          dataTestid="nickname-confirm-btn"
          className="btn btn-primary send-btn"
          value="확인"
          onClick={onChangeNickname}
        />
      </div>
    </div>
  );
}

export default LogIn;
