import { Event, EventCreationParams } from 'parlant-client/src/api';
import { default as React, JSX } from 'react';
import { ChatProps } from '../../App';
export interface MessageInterface extends Event {
    status: string | null;
    error?: string;
}
export declare const createEmptyPendingMessage: () => Partial<Event & {
    serverStatus: string;
}>;
export declare const getInitialMessages: (agentOpeningMessage?: string) => MessageInterface[];
declare const Chat: ({ server, sessionId, agentId, agentName, agentAvatar, components, agentOpeningMessage, sendIcon, createSession, classNames, float, changeIsExpanded, chatDescription, messages, setMessages }: ChatProps & {
    changeIsExpanded?: () => void;
    createSession: (message: EventCreationParams) => void;
    messages: MessageInterface[];
    setMessages: React.Dispatch<React.SetStateAction<MessageInterface[]>>;
}) => JSX.Element;
export default Chat;
//# sourceMappingURL=Chat.d.ts.map