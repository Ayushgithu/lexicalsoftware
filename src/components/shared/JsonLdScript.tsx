'use client';

import { useEffect } from 'react';

type JsonLdData = Record<string, unknown>;

export default function JsonLdScript({ data }: { data: JsonLdData }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [data]);

  return null;
}
