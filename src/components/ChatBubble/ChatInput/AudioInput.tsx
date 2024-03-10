import { useState } from 'react';
import { Microphone, Pause } from 'src/assets';
import Timer from './Timer';

type AudioRecorderProps = {
    onChange: (data: string) => void
}

export default function AudioRecorder({ onChange }: AudioRecorderProps) {
    const [recording, setRecording] = useState<boolean>(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

    const startRecording = async (): Promise<void> => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (e: BlobEvent) => {
            // Handle recorded data (e.data)
            const url = URL.createObjectURL(e.data);
            onChange(url)
        };

        recorder.start();
        setRecording(true);
    };

    const stopRecording = (): void => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setRecording(false);
        }
    }

    return (
        <>
            {
                recording ?
                    <button onClick={stopRecording} className="button-icon">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={Pause} width={25} height={25} />
                            <Timer isActive={recording} />
                        </div>
                    </button>
                    :
                    <button onClick={startRecording} className="button-icon">
                        <img src={Microphone} width={25} height={25} />
                    </button>
            }
        </>
    )
};
