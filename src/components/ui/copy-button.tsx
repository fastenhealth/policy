import React, { useEffect, useState } from 'react';
import { Check, Clipboard } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

export function CopyButton({ textToCopy, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
  };

  return (
    <button
      onClick={handleCopy}
      className={className}
      aria-label="Copy to clipboard"
      type="button"
    >
      {copied ? (
        <>
          <Check className="mr-1 size-4" />
          Copied
        </>
      ) : (
        <>
          <Clipboard className="mr-1 size-4" />
          Copy
        </>
      )}
    </button>
  );
}
