'use client';

import React, { useState } from 'react';
import CreateEventModal, { EventFormInputs } from './create-event.ui';
import { createEvent } from '@/app/services/create-event.service';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEventManagerProgram } from "@/app/utils/solanaProgram";

export default function CreateEventFeature() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { publicKey } = useWallet();
  const program = useEventManagerProgram();
  // onSubmit
  
  const createEventData = useCreateEvent();
  
  const onSubmit = async ({ name, price }: EventFormInputs) => {
    setisLoading(!isLoading);
    try {
      await createEvent({ name, price, program, publicKey })
    } catch (e) {
      console.error(e)
    } finally {
      setisLoading(!isLoading);
      setIsModalOpen(!isModalOpen);
    }
  }
  
  return(
    <>
      <button
	type="button"
	className="btn btn-primary"
	style={{
	  background: 'linear-gradient(90deg,#c766ef,#7928d2 51.04%,#2b0c52)',
	  border: 'none',
	}}
	data-bs-toggle="modal"
	data-bs-target="#staticBackdrop"
	onClick={handleOpenModal}
      > 
	Crear Evento
      </button>
      
      <CreateEventModal 
	isOpen={isModalOpen}
        loading={isLoading}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onSubmit}
      />
    </>
  );
}
