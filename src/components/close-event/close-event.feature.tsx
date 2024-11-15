'use client';

import { useState } from 'react';
import CloseEventModal from '@/components/close-event/close-event.ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEventManagerProgram } from "@/utils/solanaProgram";
import { EventAccount } from '@/services/get-events.service';
import { closeEvent } from '@/services/close-event.service';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export function CloseEventFeature(event: EventAccount) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {publicKey} = useWallet()
  const program = useEventManagerProgram();
  const eventPublicKey = event.publicKey;
  const router = useRouter();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
        const closeResult = await closeEvent({ program, publicKey, eventPublicKey })
	if (closeResult) {
	  setIsModalOpen(false);
	  Swal.fire({
	    title: "Evento cerrado",
	    text: "El evento ha sido cerrado con éxito.",
	    icon: "success",
	    confirmButtonColor: "#28a745"
	  }).then(() => {
	      router.push('/');
	  });
	} else {
	  setIsModalOpen(false);
	  Swal.fire({
	    title: 'Error!',
	    text: 'Transacción Rechazada',
	    icon: 'error',
	    confirmButtonText: 'Ok!'
	  });
	}
    } catch (e) {
      console.error("Error al cerrar el evento:", e);
      setIsModalOpen(false);
      Swal.fire({
	title: "Error",
	text: "Hubo un problema al cerrar el evento. Inténtalo nuevamente.",
	icon: "error",
	confirmButtonColor: "#d33"
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button 
	  className="btn btn-primary form-control"
	  type="submit"
	  style={{
	    background: 'linear-gradient(180.65deg,#c766ef,#7928d2 51.04%,#2b0c52)',
	    border: 'none',
	    transition: 'transform 0.5s',
	  }}
	  onMouseEnter={(e) => {
	    e.currentTarget.style.transform = 'scale(1.1)';
	  }}
	  onMouseLeave={(e) => {
	    e.currentTarget.style.transform = 'scale(1)';
	  }}
	  onClick={() => setIsModalOpen(true)}
      >
	 <p className="fw-bold d-flex align-items-center justify-content-center my-2"> 
	   {isLoading ? "Cerrando..." : "Cerrar Evento"}
	 </p>
      </button>
	<CloseEventModal
	  isOpen={isModalOpen}
	  onClose={() => setIsModalOpen(false)}
	  onSubmit={onSubmit}
	/>
    </>
  );
};
