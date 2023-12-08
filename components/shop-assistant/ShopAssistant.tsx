import { Signal, useSignal } from "@preact/signals";
import { useCallback, useEffect } from "preact/hooks";
import { cache } from "../mock.ts";
import StoreSearch from "./StoreSearch.tsx";
import { ChatContainer } from "./ChatContainer.tsx";
import { Message, MessageContentText } from "./types/shop-assistant.ts";

function ShopAssistant() {
  const selectedUserInstagram = useSignal("");
  const ws = useSignal<WebSocket | null>(null);
  const messageList = useSignal<Message[]>([]);

  useEffect(() => {
    const host = window.location.host;
    const websocket = window.location.protocol === "https:" ? "wss" : "ws";
    ws.value = new WebSocket(
      `${websocket}://${host}/live/invoke/ai-assistants/actions/chat.ts?assistant=Boteco`,
    );
    ws.value.onmessage = (event: MessageEvent) => {
      // Dealing with welcome message
      // if (typeof event.data === "string") {
      //   const welcomeMessageContet: MessageContentText[] = [{
      //     type: "text",
      //     value: event.data,
      //   }];

      //   updateMessageList({
      //     content: welcomeMessageContet,
      //     type: "message",
      //     role: "assistant",
      //   });
      // }

      const parsedAiResponse = JSON.parse(event.data);
      const role = parsedAiResponse.role ?? "assistant";

      updateMessageList({
        content: parsedAiResponse.content,
        type: parsedAiResponse.type,
        role,
      });
    };
  }, []);

  const send = useCallback((text: string) => {
    if (ws.value) {
      ws.value.send(text);
    }
  }, []);

  const updateMessageList = (newMessage: Message): void => {
    messageList.value = [...messageList.value, newMessage];
  };

  const onUser = (user: string) => {
    const value = `Quero um presente para @${user}`;

    const msgContent: MessageContentText[] = [{
      type: "text",
      value,
    }];

    send(value);

    updateMessageList({
      content: msgContent,
      type: "message",
      role: "user",
    });

    selectedUserInstagram.value = user;
  };

  // if (!selectedUserInstagram.value) {
  //   return <StoreSearch onUser={onUser} />;
  // }

  return (
    <div>
      <img
        class="h-full w-full"
        src="https://s3-alpha-sig.figma.com/img/1cec/b079/0b024aee22f170f20a9ac1e0498a45d6?Expires=1702857600&Signature=Wsgbxjp8ANtANh8a0EWZUW7dG0WC3GMcWyM4pKh1Z920YNspiTpTUbFmzuQ1QYB0KBBt80ES6-YdMfZsvBNKbJC2MXnbj6V5eBfjwa8bpp74CtiueDkV1ANIeSaonF8Hn4492JkGuf4F6hY4P7XMfS65c8PEu~zpALNDeI6NONl1Tb~JfsMNOCZ4ygaRsSM3VyDpdpwXG0IR6VXzrlabGstC9Ujss6dPNfvWWlQmg2GLPBbKpDkNv5UzlPmNaiw~f~4RZMAbAqKlLUN1oTCiL15fMOSXw0N9houfLZxQKD5pI5ywuE0P~82LmjZyWyZRh34O0mwtETPQuW~ggVidwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      >
      </img>
      <ChatContainer
        send={send}
        messageList={messageList}
        updateMessageList={updateMessageList}
      />
    </div>
  );
}

export default ShopAssistant;
