'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/navigation';
import { useEventManagerProgram } from "@/utils/solanaProgram";
import { EventAccount } from '@/services/get-events.service';
import WithdrawFundsModal, { WithdrawFundsFormInputs } from '@/components/withdraw-funds/withdraw-funds.ui';
import { withdrawFunds } from '@/services/withdraw-funds.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';

export default function WithdrawFundsFeature(event: EventAccount) {
  const [isLoading, setIsLoading] = useState(false);
  const { publicKey } = useWallet();
  const program = useEventManagerProgram();
  const eventPublicKey = event.publicKey;
  
  const modalInstanceRef = useRef<Modal | null>(null);
  const modalRef = useRef(null);
  const router = useRouter();
  
  useEffect(() => { 
    if (typeof window !== 'undefined') { 
      if (modalRef.current) { 
	modalInstanceRef.current = new Modal(modalRef.current); 
      } 
    } 
  }, []);
  
 const handleOpenModal = () => {
    if (modalInstanceRef.current) {
      modalInstanceRef.current.show();
    }
  };

  const handleCloseModal = () => {
    if (modalInstanceRef.current) {
      modalInstanceRef.current.hide();
    }
  };
  
  const onSubmit = async ({ amount }: WithdrawFundsFormInputs) => {
    setIsLoading(true);
    try {
        const successFunds = await withdrawFunds({ amount, program, publicKey, eventPublicKey })
	if (successFunds) {
	  handleCloseModal();
	  Swal.fire({
	    title: "Retiro Exitoso!",
	    text: "Los fondos fueron transferidos a tu Wallet",
	    icon: "success"
	  }).then((result) => {
	      router.push('/');
	  });
	} else {
	 handleCloseModal();
	  Swal.fire({
	    title: 'Error!',
	    text: 'Transacción Rechazada',
	    icon: 'error',
	    confirmButtonText: 'Ok!'
	  });
      }
    } catch (e) {
      console.error("Error al retirar fondos ", e);
      handleCloseModal();
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
        type="button"
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
        onClick={handleOpenModal}
	disabled={event.isTreasuryVaultZero()} 
      >
        <p className="fw-bold d-flex align-items-center justify-content-center my-2">
	  {event.isTreasuryVaultZero() ? "Sin fondos" : "Retirar Fondos"}
	</p> 
      </button>

      <WithdrawFundsModal
	eventName={event.name}
	modalRef={modalRef}
        loading={isLoading}
        onClose={handleCloseModal}
        onSubmit={onSubmit}
      />
    </>
  );
}
