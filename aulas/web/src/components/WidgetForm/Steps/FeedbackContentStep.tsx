import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
}
export function FeedbackContentStep({ feedbackType }: FeedbackContentStepProps) {
    const feedbackTypeInfo  = feedbackTypes[feedbackType]

    return (
        <>
            <header>
                <span className="text-xl leading-6">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}/>
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton/>

            </header>


            <div className='flex pt-8 py-8 gap-2 w-full'>

            </div>
        </>
    );
}