'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import CollabCard from '@/components/CollabCard';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEventManagerProgram } from "@/utils/solanaProgram";
import { useEffect, useState } from "react";
import { getSponsoredEvents, SponsoredEvent } from "@/services/get-sponsored-events.service";

export default function Collabs() {
  const program = useEventManagerProgram();
  const { connection } = useConnection();
  const [sponsored, setSponsored] = useState<SponsoredEvent[]>([]);
  const { publicKey } = useWallet();
    
  if(!publicKey) {
    redirect('/');
  }
  
  const getSponsored = async () => {
    try {
      getSponsoredEvents(program, connection, publicKey).then((sponsored) => {
	if(sponsored){
	  setSponsored(sponsored)
	}
      })
    } catch (error) {
      console.error("Error obteniendo eventos:", error);
    }
  };

  useEffect(() => {
    getSponsored()
  }, []
  )
  
  return (
  <>
    {
      sponsored.length == 0 ? (
	<div className="container my-5">
	  <div className="position-relative p-2 text-center text-muted bg-body border border-dashed rounded-5">
	    <h1 className="text-body-emphasis">Parece que aún no has colaborado con ningún evento</h1>
	    <p className="col-lg-6 mx-auto mb-4">
	      ¡Explora los últimos eventos en Solana y participa como colaborador!
	    </p>
	    <Link 
	       href="/"
	       className="btn btn-primary"
		style={{
		  background: 'linear-gradient(90deg,#c766ef,#7928d2 51.04%,#2b0c52)',
		  border: 'none',
		}}
	    >
	      Explorar Eventos
	    </Link>
	  </div>
	</div>
      ) : (
	<div className="container mt-5">
	   <div className="row">
	      {sponsored.map((event, key) => (
		 <CollabCard 
		    key={key}
		    event={event.event}
		    tokens={event.tokens}
		  />
	      ))}
	  </div>
	</div>
      )
    }
  </>
  );
}
