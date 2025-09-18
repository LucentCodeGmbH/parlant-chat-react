import { JSX } from 'react';
interface ChatHeaderProps {
    agentName?: string;
    agentAvatar?: JSX.Element;
    changeIsExpanded: () => void;
    isExpanded?: boolean;
    className?: string;
}
declare const ChatHeader: ({ agentName, agentAvatar, changeIsExpanded, isExpanded, className }: ChatHeaderProps) => JSX.Element;
export default ChatHeader;
//# sourceMappingURL=ChatHeader.d.ts.map