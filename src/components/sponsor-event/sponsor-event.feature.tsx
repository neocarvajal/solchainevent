'use client';

import React, { useState, useEffect, useRef } from 'react';
import SponsorEventModal from '@/components/sponsor-event/sponsor-event.ui';
import { SponsorFormInputs } from '@/components/sponsor-event/sponsor-event.ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/navigation';
import { useEventManagerProgram } from "@/utils/solanaProgram";
import { EventAccount } from '@/services/get-events.service';
import { sponsorEvent } from '@/services/sponsor-event.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Modal } from 'bootstrap';
import Image from 'next/image';
import Swal from 'sweetalert2';

export default function SponsorEventFeature(event: EventAccount) {
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
   if(!publicKey){
      Swal.fire({
	title: 'Error!',
	text: 'Debes Conectarte con tu Wallet',
	icon: 'error',
	confirmButtonText: 'Ok!'
      });
      
       return null;
    }
    
    if (modalInstanceRef.current) {
      modalInstanceRef.current.show();
    }
  };

  const handleCloseModal = () => {
    if (modalInstanceRef.current) {
      modalInstanceRef.current.hide();
    }
  };
  
  const onSubmit = async ({ quantity }: SponsorFormInputs) => {
    setIsLoading(true);
    try {
        const successSponsor = await sponsorEvent({ quantity, program, publicKey, eventPublicKey })
	if (successSponsor) {
	  handleCloseModal();
	  Swal.fire({
	    title: "Has Colaborado!",
	    text: "Gracias por Colaborar",
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
      console.error("Error al colaborar en evento: ", e);
      handleCloseModal();
      Swal.fire({
        title: 'Error!',
        text: 'Error al Colaborar',
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
        className="btn btn-primary form-control"
        id="openModalBtn"
        style={{
          background: 'linear-gradient(90deg,#c766ef,#7928d2 51.04%,#2b0c52)',
          transition: 'transform 0.5s',
          border: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onClick={handleOpenModal}
      >
         <p className="fw-bold d-flex align-items-center justify-content-center my-2">Colaborar Ahora </p> 
	 <p className="fw-bold d-flex align-items-center justify-content-center">
	    1
	   <Image
	    className="mx-1"
	    src="/UsdcLogo.png" 
	    width={20} 
	    height={20} 
	    alt="solana logo"
	  />
	</p>
      </button>

      <SponsorEventModal
	eventName={event.name}
	modalRef={modalRef}
        loading={isLoading}
	onClose={handleCloseModal}
        onSubmit={onSubmit}
      />
    </>
  );
}
