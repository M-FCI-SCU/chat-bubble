import { useState } from "react"
import { Send } from "src/assets"
import AudioInput from "./AudioInput"
import { CURRENT_USER, MessageT } from "src/types/constant-vars"
import "./ChatInput.css"
import ImageInput from "./ImageInput"

type ChatInputProps = {
    onSend: (message: Message) => void
    customInputs?: JSX.Element[]
}

export default function ChatInput({ onSend, customInputs }: ChatInputProps) {
    const [text, setText] = useState<string>("")


    const changeTectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const sendMessageHandler = ({ type, content }: Partial<Message>) => {
        if (!!content) {
            onSend({
                id: new Date().getTime(),
                type,
                content: content,
                user: CURRENT_USER
            })
            setText('')
        }
    }

    return (
        <form style={{ width: "100%", }} onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            sendMessageHandler({ type: MessageT.TEXT, content: text });
        }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <div className="input-container">
                    <input value={text} onChange={changeTectHandler} type="text" placeholder="Type your message here..." />
                    <div className="button-icons-container">
                        <ImageInput
                            onChange={(data) => {
                                sendMessageHandler({ type: MessageT.IMAGE, content: data })
                            }}
                        />
                        <AudioInput
                            onChange={(data) => {
                                sendMessageHandler({ type: MessageT.VOICE, content: data })
                            }}
                        />
                        {customInputs}
                    </div>
                </div>
                <button
                    className="button-icon"
                    type="submit"
                >
                    <img src={Send} width={25} height={25} />
                </button>
            </div>
        </form>

    )
}
