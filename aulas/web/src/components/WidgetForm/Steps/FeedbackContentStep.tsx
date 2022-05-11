import { ArrowLeft } from "phosphor-react";
import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequest: () => void;
}
export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequest }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return (
        <>
            <header>
                <button
                    type='button'
                    className='top-5 left-5 absolute  text-zinc-400 hover:text-zinc-100'
                    onClick={onFeedbackRestartRequest}
                >
                    <ArrowLeft weight='bold' className='w-4 h-4' />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypeInfo.image.source}
                        alt={feedbackTypeInfo.image.alt}
                        className='w-6 h-6' />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>


        </>
    );
}