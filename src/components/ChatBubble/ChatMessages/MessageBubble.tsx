import { MessageT } from "src/types/constant-vars";
import { Avatar } from "../common";

type MessageBubbleProps = {
    message: Message;
    outBound: boolean;

}

export default function MessageBubble({ message, outBound }: MessageBubbleProps) {

    const Content = ({ message }: { message: Message }) => {
        switch (message.type) {
            case MessageT.TEXT:
                return <div>{message.content}</div>;
            case MessageT.IMAGE:
                return <img src={message.content} height={250} width={250} style={{ objectFit: "contain" }} />;
            case MessageT.VOICE:
                return (
                    <audio controls>
                        <source src={message.content} type="audio/wav" />
                        {/* <source src="horse.mp3" type="audio/mpeg" /> */}
                        Your browser does not support the audio element.
                    </audio>
                );
            default:
                return <p>Unsupported message type</p>;
        }
    };

    return (
        <div className={`bubble-container ${outBound ? 'bubble-container-outbound' : 'bubble-container-inbound'}`}>
            {
                !outBound &&
                <Avatar src={message?.user?.avatar} height="45px" width="45px" />
            }
            <div style={{ alignSelf: "center" }} className={`bubble-message ${outBound ? 'bubble-message-outbound' : 'bubble-message-inbound'}`}>
                {
                    !outBound &&
                    <h4 style={{ margin: 0, paddingBottom: 5 }}>{message?.user?.name}</h4>
                }
                <Content key={message.id} message={message} />
            </div>
        </div>
    )
}
