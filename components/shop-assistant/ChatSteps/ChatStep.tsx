import { useRef } from "preact/hooks";
import { Messages } from "deco-sites/decoshop/components/shop-assistant/Messages.tsx";
import {
  Message,
  MessageContentText,
} from "deco-sites/decoshop/components/shop-assistant/types/shop-assistant.ts";
import { Signal } from "@preact/signals";

type ChatProps = {
  messageList: Signal<Message[]>;
  updateMessageList: ({ content, type, role }: Message) => void;
  send: (text: string) => void;
};

export function ChatStep({ messageList, updateMessageList, send }: ChatProps) {
  return (
    <div class="text-white min-h-full">
      <div class="text-2xl">All set!</div>
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
  const userInput = useRef<HTMLInputElement>(null);

  const processSubmit = () => {
    const inputValue = userInput.current?.value;
    if (!inputValue) return;

    send(inputValue);

    const msgContent: MessageContentText[] = [{
      type: "text",
      value: inputValue,
    }];

    updateMessageList({
      content: msgContent,
      type: "message",
      role: "user",
    });

    userInput.current.value = "";
  };

  const handleUserInput = (e: React.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      processSubmit();
    }
  };

  return (
    <form
      onSubmit={handleUserInput}
      class="flex flex-row items-center rounded-xl relative mb-2 mt-4 mx-2 bg-[#063534]"
    >
      <input
        ref={userInput}
        name="userInput"
        placeholder="Type to reply"
        class="w-full p-4 grow rounded-[5rem] bg-opacity-50 text-white relative bg-[#104E4A] text-sm"
        aria-label="Chat input area"
        onKeyDown={handleKeydown}
      />
    </form>
  );
}
