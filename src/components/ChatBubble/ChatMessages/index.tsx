import MessageBubble from "./MessageBubble";
import "./ChatMessage.css"

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



  return (
    <div id="chat-messages-container" style={{ margin: 10, display: "flex", flexDirection: "column", overflow: "auto", scrollBehavior: "smooth" }}>
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
