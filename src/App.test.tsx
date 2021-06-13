import { render, fireEvent } from "@testing-library/react";
import socketIo from "socket.io-client";

import App from "src/App";

type User = {
  name: string;
};

describe("App", () => {
  const setUp = (props = {}) => {
    const utils = render(<App {...props} />);
    return {
      ...utils,
    };
  };
  const userMe: User = { name: "렌고쿠 쿄주로" };
  const userYou: User = { name: "카마도 탄지로" };

  it("input nickname and submit", () => {
    const { getByTestId } = setUp();
    const nicknameInput = getByTestId("nickname-input");
    const nicknameConfirmBtn = getByTestId("nickname-confirm-btn");
    const myNickname = getByTestId("my-nickname");
    fireEvent.change(nicknameInput, { target: { value: userMe.name } });
    fireEvent.click(nicknameConfirmBtn);
    expect(myNickname).toHaveTextContent(userMe.name);

    fireEvent.change(nicknameInput, { target: { value: userYou.name } });
    fireEvent.keyDown(nicknameInput, { key: "Enter", code: "Enter" });
    expect(myNickname).toHaveTextContent(userYou.name);
  });

  it("join a room", done => {
    const ENDPOINT = "localhost:4000";
    const socket = socketIo(ENDPOINT);

    const { getByText } = setUp();

    socket.on("connect", () => {
      socket.emit("join", { name: "익명" });
      socket.disconnect();
      done();
    });
    getByText("익명 has joined the room.");
  });

  // it("input and send message", () => {
  //   const { getByTestId } = setUp();
  //   const messageInput = getByTestId("message-input");
  //   const messageSendBtn = getByTestId("message-send-btn");
  //   const ENDPOINT = "localhost:4000";
  //   const socket = socketIo(ENDPOINT);

  //   socket.on("connect", () => {
  //     socket.emit("join", userMe, (data: { message: string }) => {
  //       console.log("data: ", data);
  //       const { message } = data;
  //       expect(message).toEqual(`익명 has joined the room.`);
  //     });
  //     socket.disconnect();
  //     done();
  //   });

  //   fireEvent;
  //   expect(mockSocket.emit).toHaveBeenCalledWith(
  //     "join",
  //     { name: "Paola", room: "1" },
  //     expect.any(Function)
  //   );
  // });
});
