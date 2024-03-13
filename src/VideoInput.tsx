import { Video } from "./assets";

type VideoInputProps = {
    onChange: (data: string) => void;
}

export default function VideoInput({ onChange }: VideoInputProps) {
    const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                onChange(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (

        <label style={{ marginTop: 4, cursor: "pointer" }}>
            <img src={Video} width={25} height={25} />
            <input hidden type="file" accept="video/*" onChange={handleVideoChange} />
        </label>
    );
};