'use client';

import React, { useState, useEffect } from 'react';
import EventCard from "@/components/EventCard";
import { useEventManagerProgram } from '@/utils/solanaProgram';
import { EventAccount, getEvents } from '@/services/get-events.service';

export default function Home() {
  
  const program = useEventManagerProgram();
  const [events, setEvents] = useState<EventAccount[]>([]);
    
  const getAllEvents = async () => {
    try {
      getEvents(program).then((events) => {
	if(events) {
	  setEvents(events);
	}
      })
    } catch(err) {
      console.log("Error getting events", err);
    }
  }
  
  useEffect(() => {
    getAllEvents();
  }, [events]);
  
  return (
    <>
      {
	events.length === 0 ? 
	(
	  <div className="container">
	    <div className="position-relative text-center text-muted bg-body border border-dashed rounded-5 mt-5">
	      <h1 className="text-body-emphasis">¡Lo sentimos! No hay eventos disponibles. </h1>
	      <p className="col-lg-6 mx-auto mb-4">
		Sé el primero en crear un evento en Solana:
	      </p>
	      <button 
	       className="btn btn-primary mb-2"
		style={{
		  background: 'linear-gradient(90deg,#c766ef,#7928d2 51.04%,#2b0c52)',
		  border: 'none',
		  transition: 'transform 0.5s',
		}}
		onMouseEnter={(e) => {
		  e.currentTarget.style.transform = 'scale(1.1)';
		}}
		onMouseLeave={(e) => {
		  e.currentTarget.style.transform = 'scale(1)';
		}}
	      >
		Crear Evento
	      </button>
	    </div>
	  </div>
	)
	:
	(
	<>
	  <div className="container my-5">
	    <div className="position-relative text-center text-muted bg-body border border-dashed rounded-5">
	      <h1 className="text-body-emphasis">¡No te pierdas los últimos eventos!</h1>
	      <p className="col-lg-6 mx-auto mb-4">
		Forma parte de la gran comunidad de Solana
	      </p>
	    </div>

	    <div className="container mt-5">
	      <div className="row gy-3">
		{events.map((event, key) => (
		  <EventCard 
		    key={key} 
		    publicKey={event.publicKey} 
		    account={event.account} 
		  />
		))}
	      </div>
	    </div>
	  </div>
	</>
	)
      }
    </>
  );
}
