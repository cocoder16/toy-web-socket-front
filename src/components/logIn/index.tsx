import { useState, useCallback } from "react";

import Button from "src/components/atoms/Button";
import Input from "src/components/atoms/Input";

type IProps = {
  handleSubmitNickname: (event?: any) => void;
};

function LogIn({ handleSubmitNickname }: IProps) {
  const [nickname, setNickname] = useState<string>("");

  const handleChangeNickname = useCallback((event: any) => {
    setNickname(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    handleSubmitNickname(nickname);
    setNickname("");
  }, [handleSubmitNickname, nickname]);

  return (
    <div className="d-flex" data-testid="log-in">
      <div className="card d-flex flex-row align-items-center">
        <label htmlFor="user-name-input" style={{ width: 60 }}>
          닉네임
        </label>
        <Input
          dataTestid="nickname-input"
          type="text"
          className="form-control w300"
          id="user-name-input"
          maxLength={12}
          value={nickname}
          onChange={handleChangeNickname}
          onPressEnter={handleSubmit}
        />
        <Button
          dataTestid="nickname-confirm-btn"
          className="btn btn-primary send-btn"
          value="확인"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default LogIn;
