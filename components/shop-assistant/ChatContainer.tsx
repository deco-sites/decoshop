import { Signal } from "@preact/signals";
import { Message } from "./types/shop-assistant.ts";
import { useState } from "preact/hooks";
import { StartStep } from "./ChatSteps/StartStep.tsx";
import { SetupStep } from "deco-sites/decoshop/components/shop-assistant/ChatSteps/SetupStep.tsx";
import { ChatStep } from "deco-sites/decoshop/components/shop-assistant/ChatSteps/ChatStep.tsx";

type ChatProps = {
  messageList: Signal<Message[]>;
  updateMessageList: ({ content, type, role }: Message) => void;
  send: (text: string) => void;
};

export function ChatContainer(
  { messageList, updateMessageList, send }: ChatProps,
) {
  const [step, setStep] = useState(1);

  const onClickStart = () => {
    setStep(2);
  };

  return (
    <div class="shadow-lg h-fit outline-white/40 outline outline-8 rounded-[2.5rem] w-[25rem] min-h-[25rem] flex flex-col z-50 bg-[#063534] right-8 absolute bottom-8">
      <div class="m-6 space-y-8 h-full">
        <div class="bg-[#08F67C] rounded-full flex justify-center items-center w-16 h-16">
          <img src="/deco-icon.svg"></img>
        </div>
        {step === 1 && <StartStep onClickStart={onClickStart} />}
        {step === 2 && <SetupStep />}
        {step === 3 && (
          <ChatStep
            send={send}
            messageList={messageList}
            updateMessageList={updateMessageList}
          />
        )}
      </div>
    </div>
  );
}
