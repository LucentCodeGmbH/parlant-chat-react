import { JSX } from 'react';
interface ChatInputProps {
    onSendMessage: (message: string) => Promise<void>;
    sendIcon?: JSX.Element;
    className?: string;
    float?: boolean;
    focusTrigger?: boolean;
}
declare const ChatInput: ({ onSendMessage, sendIcon, className, float, focusTrigger, }: ChatInputProps) => JSX.Element;
export default ChatInput;
//# sourceMappingURL=ChatInput.d.ts.map