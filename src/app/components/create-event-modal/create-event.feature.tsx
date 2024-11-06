'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import CreateEventModal, { EventFormInputs } from './create-event.ui';
import { createEvent } from '@/app/services/create-event.service';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEventManagerProgram } from "@/app/utils/solanaProgram";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';

export default function CreateEventFeature() {
  const [isLoading, setIsLoading] = useState(false);
  const { publicKey } = useWallet();
  const program = useEventManagerProgram();
  const router = useRouter();
  
  const modalInstanceRef = useRef<Modal | null>(null);
    
   useEffect(() => {
    const modalElement = document.getElementById('createEventModal');
    if (modalElement) {
      modalInstanceRef.current = new Modal(modalElement); 
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

   const onSubmit = async ({ name, price }: EventFormInputs) => {
    setIsLoading(true);
    try {
      const success = await createEvent({ name, price, program, publicKey });
      if (success) {
        handleCloseModal();
	Swal.fire({
	  title: "Evento Creado!",
	  text: "Tu evento está registrado en la Blockchain",
	  icon: "success"
	}).then(() => {
	  router.push('/');
	});
      } else{
	 handleCloseModal();
	  Swal.fire({
	    title: 'Error!',
	    text: 'Transacción Rechazada',
	    icon: 'error',
	    confirmButtonText: 'Ok!'
	  }).then((result) => {
	    if (result.isConfirmed) {
	      router.push('/');
	    }
	  });
      }
    } catch (e) {
      console.error("Error al crear el evento: ", e);
      handleCloseModal();
      Swal.fire({
        title: 'Error!',
        text: 'Error al crear evento',
        icon: 'error',
        confirmButtonText: 'Ok!'
      }).then((result) => {
	if (result.isConfirmed) {
	    router.push('/');
	  }
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
          width: '10em',
          height: '3em',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onClick={handleOpenModal}
      >
        Crear Evento
      </button>

      <CreateEventModal
        loading={isLoading}
	onClose={handleCloseModal}
        onSubmit={onSubmit}
      />
    </>
  );
}
