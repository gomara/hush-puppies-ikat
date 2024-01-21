'use client';

import { useEffect, useState } from 'react';

export const useAvoidSSR = () => {
  const [isClient, setIsClient] = useState(false);

  // This is a trick to avoid the server rendering of the carousel content

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};
