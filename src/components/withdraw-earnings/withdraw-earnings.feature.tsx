'use client';

import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/navigation';
import { useEventManagerProgram } from "@/utils/solanaProgram";
import { EventAccount } from '@/services/get-events.service';
import { withdrawEarnings } from '@/services/withdraw-earnings.service';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';

export default function WithdrawEarningsFeature(event: EventAccount) {
  const {publicKey} = useWallet()
  const program = useEventManagerProgram();
  const eventPublicKey = event.publicKey;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const withdraw = async () => {
    setIsLoading(true);
    try {
        const successEarnings = await withdrawEarnings({ program, publicKey, eventPublicKey })
	if (successEarnings) {
	  setIsLoading(false);
	   Swal.fire({
	    title: "Retiro Exitoso!",
	    text: "Las ganancias fueron transferidas a tu Wallet",
	    icon: "success"
	  }).then((result) => {
	      router.push('/');
	  });
	} else {
	  setIsLoading(false);
	  Swal.fire({
	    title: 'Error!',
	    text: 'Transacción Rechazada',
	    icon: 'error',
	    confirmButtonText: 'Ok!'
	  });
      }
    } catch (e) {
      console.error("Error al retirar ", e);
      setIsLoading(false);
      Swal.fire({
        title: 'Error!',
        text: 'Error al Retirar',
        icon: 'error',
        confirmButtonText: 'Ok!'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
	className="btn btn-success form-control"
	style={{
	  background: "linear-gradient(180.65deg,#19fb9b 11.36%,#199890 54.3%,#005f59 100.78%)",
	  border: 'none',
	  transition: 'transform 0.5s',
	}}
	onMouseEnter={(e) => {
	  e.currentTarget.style.transform = 'scale(1.1)';
	}}
	onMouseLeave={(e) => {
	  e.currentTarget.style.transform = 'scale(1)';
	}}
	onClick={withdraw}
	disabled={event.isTokenCollabZero()}
      >
	<p className="fw-bold d-flex align-items-center justify-content-center my-2">
	  {isLoading ? "Retirando..." : "Retirar Ganancias"}
	</p>
      </button>
    </>
  );
};
