type AvatarProps = {
    src: string
    alt?: string
    height?: string
    width?: string
    avatarStyle?: React.CSSProperties;
}

export default function Avatar({ src, alt, height = "50px", width = "50px", avatarStyle }: AvatarProps) {

    return <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        style={{
            border: "2px solid #fff",
            ...avatarStyle,
            display: "inline-block",
            cursor:"pointer",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
            borderRadius: "50%",
            objectFit: "cover",
        }}
    />
};