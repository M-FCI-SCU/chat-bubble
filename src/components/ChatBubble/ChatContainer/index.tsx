import { useMemo } from "react";
import useIsMobile from "src/hooks/useIsMobile";
import ChatHeader from "../ChatHeader";
import ChatMessages from "../ChatMessages";
import ChatInput from "../ChatInput";

type ChatContainerProps = {
  avatar: string;
  title: string;
  color: string;
  messages: any[];
  currentUserId: string;
  onSend: (message: Message) => void;
  onClose: () => void;
  chatMessagesContainerStyle?: React.CSSProperties;
  direction?: "rtl" | "ltr";
  customMessageTypes?: { [key: string]: (message: Message) => JSX.Element }
}

export default function ChatContainer({
  avatar,
  title,
  color,
  messages,
  currentUserId,
  onSend,
  onClose,
  chatMessagesContainerStyle,
  direction,
  customMessageTypes
}: React.PropsWithChildren<ChatContainerProps>) {

  const [isMobile] = useIsMobile()

  const style = useMemo(() => {
    const MobileStyle = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }

    const DesktopStyle = {
      height: '700px',
      width: '500px',
      right: 10,
      bottom: 0,
      ...chatMessagesContainerStyle,
    }

    if (isMobile) {
      return MobileStyle
    } else {
      return DesktopStyle
    }
  }, [isMobile, chatMessagesContainerStyle])

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: color,
        border: "2px solid black",
        borderRadius: 10,
        direction: direction,
        ...(style as React.CSSProperties)
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%" }}>
        <ChatHeader avatar={avatar} title={title} onClose={onClose} />
        <ChatMessages messages={messages} currentUserId={currentUserId} customMessageTypes={customMessageTypes} />
        <div style={{ marginTop: "auto" }}></div>
        <ChatInput onSend={onSend} />
      </div>
    </div>
  )
}
