import { MessageInterface } from '../Chat';
import { JSX } from 'react';
interface MessageProps {
    message: MessageInterface;
    agentName?: string;
    agentAvatar?: JSX.Element;
    isSameSourceAsPrevious?: boolean;
    isNextSourceSame?: boolean;
    className?: string;
}
declare const Message: ({ message, agentName, agentAvatar, className, isSameSourceAsPrevious, isNextSourceSame }: MessageProps) => JSX.Element;
export default Message;
//# sourceMappingURL=Message.d.ts.map