'use client';
import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

import { useBoundShoeStore } from '@/context/store';
import { useAvoidSSR } from '@/hooks/useAvoidSSR';

function PurchaseConfetti() {
  const activeConfetti = useBoundShoeStore((state) => state.activeConfetti);
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;

  const height = typeof window !== 'undefined' ? window.innerHeight : 0;

  const isClient = useAvoidSSR();

  //set time out of 5 seconds to stop confetti only if it is active
  useEffect(() => {
    if (activeConfetti) {
      setTimeout(() => {
        useBoundShoeStore.setState({ activeConfetti: false });
      }, 6000);
    }
  }, [activeConfetti]);

  return (
    <>
      {isClient && activeConfetti ? (
        <Confetti height={height} recycle={false} width={width} />
      ) : null}
    </>
  );
}

export default PurchaseConfetti;
