'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';

const WalletMultiButton = dynamic(() => import('@solana/wallet-adapter-react-ui').then(mod => mod.WalletMultiButton), { ssr: false });

export default function NavBar() {
  const { publicKey } = useWallet();

  return (
    <header className="p-3 text-bg-dark position-sticky top-0" style={{ zIndex: '1000' }}>
      <div className="container">
        {publicKey ? (
          <nav className="d-flex flex-wrap align-items-center justify-content-between">
            <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <Image src="/NewBuilder.png" width="30" height="30" alt="Heavy Duty Camp" />
              <span className="px-3">Reto 5 | Conectando a la Blockchain</span>
            </Link>
            <ul className="nav col-sm-6 mx-2 justify-content-end list-unstyled d-flex">
              <li><Link href="/events" className="nav-link px-2 text-white">Mis Eventos</Link></li>
              <li><Link href="/collabs" className="nav-link px-2 text-white">Colaboraciones</Link></li>
              <li><WalletMultiButton className="nav-link px-2 text-white" style={{ background: 'linear-gradient(180.65deg,#c766ef,#7928d2 51.04%,#2b0c52)', border: 'none', color: 'white' }} /></li>
            </ul>
          </nav>
        ) : (
          <nav className="d-flex flex-wrap align-items-center justify-content-between">
            <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <Image src="/NewBuilder.png" width="30" height="30" alt="Heavy Duty Camp" />
              <span className="px-3">Reto 5 | Conectando a la Blockchain</span>
            </Link>
            <WalletMultiButton style={{ background: 'linear-gradient(180.65deg,#c766ef,#7928d2 51.04%,#2b0c52)', border: 'none', color: 'white' }} />
          </nav>
        )}
      </div>
    </header>
  );
}
