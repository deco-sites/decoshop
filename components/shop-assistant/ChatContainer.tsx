import { Signal } from "@preact/signals";
import { mockMsgList } from "../mock.ts";
import { Message } from "./types/shop-assistant.ts";
import { Messages } from "./Messages.tsx";
import { useRef } from "preact/hooks";

type ChatProps = {
  messageList: Signal<Message[]>;
  updateMessageList: ({ content, type, role }: Message) => void;
  send: (text: string) => void;
};

export function ChatContainer(
  { messageList, updateMessageList, send }: ChatProps,
) {
  const mock = false;

  if (mock) {
    messageList.value = mockMsgList;
  }

  return (
    <div class="w-1/2 shadow-md h-[100vh] flex flex-col justify-end z-50 bg-white">
      <div class="bg-green-500 flex justify-center p-3 text-white">
        shop.deco.cx
      </div>
      <Messages messageList={messageList.value} />
      <InputArea
        send={send}
        updateMessageList={updateMessageList}
      />
    </div>
  );
}

type InputAreaProps = {
  send: (text: string) => void;
  updateMessageList: ({ content, type, role }: Message) => void;
};

function InputArea({ send, updateMessageList }: InputAreaProps) {
  const userInput = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (!userInput.current?.value) return;

    send(userInput.current.value);

    updateMessageList({
      content: userInput.current.value,
      type: "message",
      role: "user",
    });

    userInput.current.value = "";
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      class="flex flex-row items-center bg-gray-100 rounded-xl relative mb-4 p-4 mt-4 mx-4"
    >
      <textarea
        ref={userInput}
        name="userInput"
        placeholder="Ask..."
        class="w-full grow h-32 outline-none relative resize-none pr-6 bg-gray-100 text-sm"
        aria-label="Chat text area"
        onKeyDown={handleKeydown}
      />
      <button
        class="bg-green-600 hover:bg-green-700 absolute rounder-md font-light text-white py-1 px-4 rounded-lg text-sm bottom-3 right-3"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
