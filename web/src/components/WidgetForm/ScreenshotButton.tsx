import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "../Loading";


interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: string | null) => void;
    screenshot: string | null;
}
export function ScreenshotButton({ onScreenshotTook, screenshot }: ScreenshotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTaskScreenShot() {
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64Image = canvas.toDataURL('image/png')

        onScreenshotTook(base64Image)
        setIsTakingScreenshot(false)
    }

    if (screenshot) {
        return (
            <button
                type='button'
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180
                }}
                onClick={() => onScreenshotTook(null)}
                className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-secondary-light hover:text-primary-light dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors'

            >
                <Trash weight='fill' />
            </button>
        )
    }


    return (
        <button
            type='button'
            onClick={handleTaskScreenShot}
            className='p-2 text-primary-light dark:text-primary-dark dark:bg-zinc-800 rounded-md border-transparent bg-surface-secondary-light hover:bg-[#E4E4E7] dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors'
        >
            {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
        </button>
    )
}