import { createUseStyles } from 'react-jss';
import type { JSX } from 'react';
import clsx from 'clsx';
import { COLORS } from '@/theme';

interface ChatFooterProps {
  showInfo?: string;
  className?: string;
}

const useStyles = createUseStyles({
  bottomLine: {
    paddingInline: '25px',
    left: '1rem',
    bottom: '-20px',
    margin: 0,
    lineHeight: 'normal',
    fontSize: '11px',
    fontWeight: '500',
    color: COLORS.mutedText,
    alignItems: 'center',
    height: '37px',
    display: 'flex',
    '& > div': {
      flex: 1,
    }
  },
  statusInvisible: {
    visibility: 'hidden',
  },
  statusVisible: {
    visibility: 'visible',
  }
});

const ChatFooter = ({ showInfo, className }: ChatFooterProps): JSX.Element => {
  const classes = useStyles();

  return (
    <footer className={clsx(classes.bottomLine, className)} role="contentinfo">
      <div 
        role="status"
        aria-live="polite"
        className={clsx(classes.statusInvisible)}
      >
        {showInfo}
      </div>
    </footer>
  );
};

export default ChatFooter; 