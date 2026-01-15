import React from 'react';

interface CodeHighlightProps {
  code: string;
  language?: 'html' | 'javascript' | 'typescript' | 'jsx' | 'tsx';
  className?: string;
}

export function CodeHighlight({ code, className = '' }: CodeHighlightProps) {
  const formatHtmlForDisplay = (htmlString: string) => {
    const htmlWithLineBreaks = htmlString
      .split('\n')
      .map((line, index, array) => (
        <React.Fragment key={index}>
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .replace(
                  /(&lt;\/?)([a-zA-Z][a-zA-Z0-9-]*)([\s&gt;])/g,
                  '$1<span class="text-pink-400">$2</span>$3',
                )
                .replace(
                  /\s([a-zA-Z][a-zA-Z0-9-]*)=(&quot;|&apos;)/g,
                  ' <span class="text-sky-300">$1</span>=$2',
                )
                .replace(
                  /=(&quot;|&apos;)(.*?)(&quot;|&apos;)/g,
                  '=$1<span class="text-amber-300">$2</span>$3',
                ),
            }}
          />
          {index < array.length - 1 ? <br /> : null}
        </React.Fragment>
      ));

    return htmlWithLineBreaks;
  };

  const escapeHtml = (unsafe: string) =>
    unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

  return (
    <pre className={`text-sm text-slate-100 font-mono whitespace-pre-wrap ${className}`}>
      <code>{formatHtmlForDisplay(escapeHtml(code))}</code>
    </pre>
  );
}
