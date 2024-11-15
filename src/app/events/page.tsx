'use client';

import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from "@solana/web3.js";
import { redirect } from 'next/navigation';
import MyEventCard from '@/components/MyEventCard';
import { useEventManagerProgram } from "@/utils/solanaProgram";
import CreateEventFeature from '@/components/create-event/create-event.feature';
import { getMyEvents } from "@/services/get-my-events.service";
import { EventAccount } from "@/services/get-events.service";

export default function Events() {
  const program = useEventManagerProgram();
  const { connection } = useConnection();
  const [events, setEvents] = useState<EventAccount[]>([]);
  const { publicKey } = useWallet();
  
  useEffect(() => { 
    if (publicKey) { 
      getEvents(publicKey); 
    }
  }, [publicKey]);
  
  const getEvents = async (publicKey: PublicKey) => { 
    try { 
      const events = await getMyEvents(connection, program, publicKey); 
      if (events) { 
	setEvents(events); 
      } 
    } catch (error) { 
      console.error("Error obteniendo eventos:", error); 
    }
  };
  
  if(!publicKey){
    return redirect('/');
  }
  
  return(
    <>
      { events.length == 0 ? (
	<div className="container my-5">
	  <div className="position-relative p-2 text-center text-muted bg-body border border-dashed rounded-5">
	    <h1 className="text-body-emphasis">Aún no tienes eventos en Solana</h1>
	    <p className="col-lg-6 mx-auto mb-4">
	      ¡Crea tu primer evento hoy mismo!
	    </p>
	    <CreateEventFeature />
	  </div>
	</div>
	) : (
	<>
	  <div className="container my-5">
	    <div className="position-relative p-2 text-center text-muted bg-body border border-dashed rounded-5">
	      <h1 className="text-body-emphasis">Tus eventos en Solana</h1>
	      <p className="col-lg-6 mx-auto mb-4">
		¿Nuevo plan? ¡Hazlo realidad!
	      </p>
	      <CreateEventFeature />
	    </div>
	  </div>
	  
	   <div className="container mt-5">
	    <div className="row">
	      {events.map((event, key) => (
		 <MyEventCard
		  key={key}
		  publicKey={event.publicKey}
		  account={event.account}
		/>
	      ))}
	    </div>
	  </div>
	</>
      )}
    </>
  );
}
