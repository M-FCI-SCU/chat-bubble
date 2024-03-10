import { Attach } from 'src/assets';

type ImageInputProps = {
    onChange: (data: string) => void
}

export default function ImageInput({ onChange }: ImageInputProps) {

    const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!!e?.target?.files?.length) {
            const file = e.target.files[0];
            const image = URL.createObjectURL(file)
            onChange(image)
        }
    };

    return (
        <label style={{ marginTop: 4, cursor: "pointer" }}>
            <img src={Attach} width={25} height={25} />
            <input hidden accept="image/*" type="file" onChange={imageChangeHandler} />
        </label>
    )
};
