import { JSX } from 'react';
import { MessageInterface } from '../Chat';
import { default as Message } from '../message/Message';
interface MessageListProps {
    messages: MessageInterface[];
    showInfo?: string;
    agentName?: string;
    agentAvatar?: JSX.Element;
    components?: {
        customerMessage?: typeof Message;
        agentMessage?: typeof Message;
    };
    classNames?: {
        messagesArea?: string;
        customerMessage?: string;
        agentMessage?: string;
        chatDescription?: string;
    };
    chatDescription?: JSX.Element;
    isExpanded?: boolean;
}
declare const MessageList: ({ messages, showInfo, agentName, agentAvatar, components, isExpanded, classNames, chatDescription, }: MessageListProps) => JSX.Element;
export default MessageList;
//# sourceMappingURL=MessageList.d.ts.map