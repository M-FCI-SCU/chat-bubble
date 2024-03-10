import { useState } from "react";
import ChatContainer from "./ChatContainer";
import { Avatar } from "./common";

type ChatBubbleProps = {
  avatar: string;
  title: string;
  color: string;
  messages: any[];
  onSend: (message: Message) => void;
  sender: User;
  avatarStyle?: React.CSSProperties;
  chatMessagesContainerStyle?: React.CSSProperties;
  direction?: "rtl" | "ltr";

}

export default function ChatBubble({
  avatar,
  title,
  color,
  sender,
  onSend,
  avatarStyle,
  chatMessagesContainerStyle,
  messages,
  direction = "ltr"
}: ChatBubbleProps) {

  const [open, setOpen] = useState(false)

  return (
    <>
      {
        open ?
          <ChatContainer
            avatar={avatar}
            title={title}
            color={color}
            currentUserId={sender?.id}
            onSend={onSend}
            messages={messages}
            chatMessagesContainerStyle={chatMessagesContainerStyle}
            onClose={() => setOpen(false)}
            direction={direction}
          />
          :
          <div
            onClick={() => setOpen(true)}
            style={{
              bottom: 10,
              right: 10,
              ...avatarStyle,
              position: 'absolute',
              cursor: "pointer",
            }}>
            <Avatar src={avatar} />
          </div>
      }
    </>
  )
}
