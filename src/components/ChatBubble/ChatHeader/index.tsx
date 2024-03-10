import { Avatar } from "../common";

type ChatHeaderProps = {
    avatar: string;
    title: string;
    onClose: () => void;
}

export default function ChatHeader({
    title,
    avatar,
    onClose
}: ChatHeaderProps) {

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 10, borderBottom: "2px solid black" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar src={avatar} height="45px" width="45px" />
                <div style={{ fontWeight: "bold", fontSize: 28, marginLeft: 10, marginRight:10, color: "black" }}>{title}</div>
            </div>
            <button
                style={{
                    backgroundColor: "red",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "4px 16px",
                    fontSize: "14px",
                    cursor: "pointer"
                }}
                onClick={onClose}
            >
                x
            </button>
        </div>
    )
}
