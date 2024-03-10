import MessageBubble from "./MessageBubble";
import "./ChatMessage.css"

type ChatMessageProps = {
  messages: Message[];
  currentUserId: string;
}

export default function ChatMessage({
  messages,
  currentUserId
}: ChatMessageProps) {



  return (
    <div id="chat-messages-container" style={{ margin: 10, display: "flex", flexDirection: "column", overflow: "auto", scrollBehavior: "smooth" }}>
      {messages?.map((message) => (
        <MessageBubble message={message} outBound={currentUserId === message?.user?.id} />
      ))}
    </div>
  )
}
