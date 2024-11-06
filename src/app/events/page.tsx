/* eslint-disable */

'use client';

import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/navigation';
import MyEventCard from '@/app/components/MyEventCard';
import { myEventData } from '@/app/utils/dataMock';
import CreateEventFeature from '@/app/components/create-event-modal/create-event.feature';

export default function Events() {
  
  const { publicKey } = useWallet();
  const router = useRouter();
  
  if (!publicKey) {
    router.push('/');
  }
  
  return(
    <>
      <div className="container my-5">
	<div className="position-relative p-2 text-center text-muted bg-body border border-dashed rounded-5">
	  <h1 className="text-body-emphasis">Aún no tienes eventos en Solana</h1>
	  <p className="col-lg-6 mx-auto mb-4">
	    ¡Crea tu primer evento hoy mismo!
	  </p>
	  <CreateEventFeature />
	</div>
      </div>

      <div className="container mt-5">
	  <div className="row">
	    {myEventData.map((event, key) => (
	       <MyEventCard 
		  key={key}
		  title={event.title} 
		  ticket_price={event.ticket_price} 
		  token_price={event.token_price}
		  closed={event.closed}
		  img_event={event.img_event}
		  collaborators={event.collaborators}
		  tickets_sold={event.tickets_sold}
		  event_vault_total={event.event_vault_total} 
		  gain_vault_total={event.gain_vault_total}
		/>
	    ))}
	  </div>
	</div>
    </>
  );
}
