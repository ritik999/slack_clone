import { Button } from "@mui/material";
import React, {useState } from "react";
import styled from "styled-components";
import { addDoc, collection} from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

type PropsType = {
  channelName?: string;
  channelId?: string;
  chatRef?: any;
};

const ChatInput = ({channelId, chatRef }: PropsType) => {
  const [input, setInput] = useState<string>("");
  const [user]=useAuthState(auth);

  const sendMessage = async (e: React.MouseEvent) => {
    e.preventDefault();

    console.log(channelId);

    if (!channelId) return;

    await addDoc(collection(db, `rooms/${channelId}/messages`), {
      message: input,
      user: user?.displayName,
    });

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message #Room`}
        />

        <Button type="submit" hidden onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  position: relative;

  > form {
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 70%;
    padding: 10px 10px;
    outline: none;
    border: 1px solid gray;
    border-radius: 10px;
    font-weight: bold;
  }

  > form > button {
    display: none;
  }
`;
