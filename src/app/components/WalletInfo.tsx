'use client';

import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSolanaConnection } from '@/app/utils/SolanaConnectionProvider';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export default function WalletInfo() {
  
  const { publicKey } = useWallet();
  const connection = useSolanaConnection();
  const [balance, setBalance] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const getBalance = async () => {
    try {
      if (!publicKey) {
	throw new Error("Wallet is not Connected");
      }
      if (connection) {
	const newBalance = await connection.getBalance(publicKey);
	setBalance(newBalance / LAMPORTS_PER_SOL);
	console.log(`The balance is: ${balance}`);
      } else {
	alert("Connection is not established");
      }
      
    } catch {
      alert("Error al leer balance");
    }
  };
  
  const getAirdrop = async () => {
    try {
      setIsLoading(true);
      if(!publicKey) {
	throw new Error("Wallet is not Connected");
      }
      if (connection) {
	  const [latestBlockhash, signature] = await Promise.all([
	    connection.getLatestBlockhash(),
	    connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL),
	  ]);
	  
	  const sigResult = await connection.confirmTransaction(
	    { signature, ...latestBlockhash},
	    "confirmed",
	  );
	  
	  if (sigResult) {
	    alert('Airdrop was confirmed!');
	  }
	
      } else {
	alert("Connection is not established");
      }
      setIsLoading(false);
    } catch {
      alert("You are Rate limited for Airdrop. Go to: https://faucet.solana.com/");
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    if(publicKey) {
      getBalance();
    }
  }, [publicKey, connection, balance]);
  
  return (
    <>
      {
	publicKey && (
	  <div className="d-flex align-items-center text-center justify-content-center p-3 my-3 rounded text-white shadow-sm" style={{background:"#6f42c1"}}>
	    <div className="lh-1">
	      <h6 className="mb-0 lh-1">Tu dirección wallet: {publicKey?.toString()}</h6>
	      <p className="mb-0 lh-1">Tu balance es: {balance} SOL</p>
	      <div className="flex justify-center gap-4">
		<button 
		  className="btn btn-primary p-2 my-1 mx-2"
		  onClick={getBalance}
		  disabled={isLoading}
		>
		  Actualizar Balance
	      </button>
	      <button 
		  className="btn btn-primary p-2 my-1"
		  onClick={getAirdrop}
		  disabled={isLoading}
		>
		  {isLoading ? ("Obteniendo airdrop...") : ("Solicitar Aidrop")}
	      </button>
	      </div>
	    </div>
	  </div>
	)
      }
    </>
  );
}
