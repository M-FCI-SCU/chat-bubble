import MessageBubble from "./MessageBubble";
import "./ChatMessage.css"
import { useEffect, useRef } from "react";

type ChatMessageProps = {
  messages: Message[];
  currentUserId: string;
  customMessageTypes?: { [key: string]: (message: Message) => JSX.Element }
}

export default function ChatMessage({
  messages,
  currentUserId,
  customMessageTypes
}: ChatMessageProps) {


  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, 50);
    }
  }, [messages]);

  return (
    <div ref={containerRef} id="chat-messages-container" style={{ margin: 10, display: "flex", flexDirection: "column", overflow: "auto", scrollBehavior: "smooth" }}>
      {messages?.map((message) => (
        <MessageBubble
          message={message}
          outBound={currentUserId === message?.user?.id}
          customMessageTypes={customMessageTypes}
        />
      ))}
    </div>
  )
}
