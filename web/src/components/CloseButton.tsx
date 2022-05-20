import { Popover } from "@headlessui/react";
import { X } from 'phosphor-react'
export function CloseButton() {
    return (
        <Popover.Button
            className='top-5 right-5 absolute text-zinc-400 hover:text-zinc-100  rounded-sm border-2 border-transparent focus:border-brand-500 focus:outline-none'
            title='Fechar formulário de Feedback'>

            <X weight='bold' className='w-4 h-4' />

        </Popover.Button>
    );
}