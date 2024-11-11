

import { useState, useRef, useEffect } from 'react';
import BuyTicketsModal, { BuyFormInputs } from '@/components/buy-tickets/buy-tickets.ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/navigation';
import { useEventManagerProgram } from "@/utils/solanaProgram";
import Image from "next/image";
import { EventAccount } from '@/services/get-events.service';
import { buyTickets } from '@/services/buy-tickets.service';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';

export default function BuyTicketsFeature(event: EventAccount) {

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

  const onSubmit = async ({ quantity }: BuyFormInputs) => {
     setIsLoading(true);
    try {
        console.log(event)
        const successTickets = await buyTickets({ quantity, program, publicKey, eventPublicKey });
	if (successTickets) {
	  handleCloseModal();
	  Swal.fire({
	    title: "Has Comprado Tickets!",
	    text: "Gracias por tu compra",
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
      console.error("Error al comprar tickets: ", e);
      handleCloseModal();
      Swal.fire({
        title: 'Error!',
        text: 'Error al Comprar',
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
      >
         <p className="fw-bold d-flex align-items-center justify-content-center my-2">Comprar Entrada </p> 
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

      <BuyTicketsModal
	eventName={event.name}
	modalRef={modalRef}
        loading={isLoading}
	onClose={handleCloseModal}
        onSubmit={onSubmit}
      />
    </>
  );
};
