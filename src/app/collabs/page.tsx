'use client';

import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { redirect } from 'next/navigation';
import CollabCard from '@/app/components/CollabCard';
import { collabData } from "@/app/utils/dataMock";


export default function Collabs() {
  
  const { publicKey } = useWallet();
  
  if(!publicKey) {
    redirect('/');
  }
  
  return (
  <>
    {
      collabData.length == 0 ? (
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
	      {collabData.map((event, key) => (
		 <CollabCard 
		    key={key}
		    event_title={event.event_title}
		    tokens_amount={event.tokens_amount}
		    event_closed={event.event_closed}
		    img_event={event.img_event}
		  />
	      ))}
	  </div>
	</div>
      )
    }
  </>
  );
}
