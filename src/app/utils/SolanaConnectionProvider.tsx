'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { Connection, clusterApiUrl } from '@solana/web3.js';
import { Cluster } from '@/app/utils/dataMock';

const SolanaConnectionContext = createContext<Connection | null>(null);

export function SolanaConnectionProvider({ children }: { children: React.ReactNode }) {
  const connection = useMemo(() => new Connection(clusterApiUrl(Cluster.Devnet)), []);
  
  return (
    <SolanaConnectionContext.Provider value={connection}>
      {children}
    </SolanaConnectionContext.Provider>
  );
}

export function useSolanaConnection() {
  return useContext(SolanaConnectionContext);
}
