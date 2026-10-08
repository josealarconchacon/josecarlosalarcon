'use client';

import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import styles from './Contact.module.css';

const labels = {
  idle: 'Copy email',
  copied: 'Copied',
  error: 'Copy failed',
} as const;

export function CopyEmailButton({ email }: { email: string }) {
  const { status, copy } = useCopyToClipboard();

  return (
    <>
      <button type="button" className={styles.copyButton} onClick={() => copy(email)}>
        {labels[status]}
      </button>
      {/* Announces the result to screen-reader users. */}
      <span role="status" className="visually-hidden">
        {status === 'copied'
          ? 'Email address copied to clipboard'
          : status === 'error'
            ? 'Could not copy. Select the email address and copy it manually.'
            : ''}
      </span>
    </>
  );
}
