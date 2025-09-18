import { JSX, ReactElement } from 'react';
import { MessageInterface } from './components/chat/Chat';
interface MessageComponentProps {
    message: MessageInterface;
    className?: string;
}
interface PopupButtonComponentProps {
    toggleChatOpen: () => void;
}
export interface ChatProps {
    server: string;
    sessionId?: string;
    agentName?: string;
    agentAvatar?: JSX.Element;
    chatDescription?: string;
    float?: boolean;
    onPopupButtonClick?: () => void;
    agentOpeningMessage?: string;
    titleFn?: () => string;
    popupButton?: JSX.Element;
    sendIcon?: JSX.Element;
    agentId?: string;
    classNames?: {
        chatboxWrapper?: string;
        chatbox?: string;
        messagesArea?: string;
        agentMessage?: string;
        customerMessage?: string;
        textarea?: string;
        popupButton?: string;
        popupButtonIcon?: string;
        chatDescription?: string;
        bottomLine?: string;
    };
    components?: {
        popupButton?: (props: PopupButtonComponentProps) => ReactElement;
        agentMessage?: (props: MessageComponentProps) => ReactElement;
        customerMessage?: (props: MessageComponentProps) => ReactElement;
        header?: ({ changeIsExpanded, agentName }: {
            changeIsExpanded: () => void;
            agentName: string | undefined;
        }) => ReactElement;
    };
    onSessionCreated?: (sessionId: string) => void;
}
declare const Chatbox: ({ server, titleFn, agentId, sessionId, agentName, agentAvatar, onPopupButtonClick, agentOpeningMessage, chatDescription, float, popupButton, components, sendIcon, classNames, onSessionCreated }: ChatProps) => JSX.Element;
export default Chatbox;
//# sourceMappingURL=App.d.ts.map