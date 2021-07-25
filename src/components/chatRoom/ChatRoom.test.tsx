import { render, fireEvent, waitFor } from "@testing-library/react";

import ChatRoom from "src/components/chatRoom";
import { socket } from "src/service/socket";

jest.mock("src/service/socket");
jest.spyOn(socket, "on");

describe("ChatRoom", () => {
  const defaultProps = {
    nickname: "렌고쿠",
  };
  const setUp = (props = defaultProps) => {
    const utils = render(<ChatRoom {...props} />);

    return {
      ...utils,
    };
  };

  it("render", () => {
    const { getByTestId } = setUp();
    getByTestId("chat-window");
    getByTestId("message-input");
    getByTestId("message-send-btn");

    const myNickname = getByTestId("my-nickname");
    expect(myNickname).toHaveTextContent(defaultProps.nickname);
  });

  it("send a message", async () => {
    const { getByTestId, getByText } = setUp();
    const messsageInput = getByTestId("message-input");
    const messageSendBtn = getByTestId("message-send-btn");

    // 1. UI에서 이런 이벤트들이 일어나면,
    fireEvent.change(messsageInput, { target: { value: "hi!" } });
    fireEvent.click(messageSendBtn);

    // 2. socket 이벤트는 이런것들을 기대하고 (socket은 mock)
    expect(socket.emit).toHaveBeenCalledWith("SEND", {
      user: { name: defaultProps.nickname },
      content: "hi!",
    });
    expect(socket.on).toBeCalledTimes(1); // TODO: 위 fireEvent 코드나 emit 없어도 그냥 통과되는데?
    expect(socket.on).toBeCalledWith("RECEIVE", expect.any(Function));

    // 3. 그 결과 이런 것들이 렌더링 되기를 원함.
    // TODO: handleReceiveMessage 가 없어서 테스트 실패중
    await waitFor(() => getByText("hi!"), {
      timeout: 2000,
    });
  });

  // TODO: mock, spyOn clear?

  // TODO: 총체적 난국. socket test code 정리를 위한 학습이 필요
});
