'use client';

import React from 'react';
import Image from 'next/image';
import { EventAccount } from '@/services/get-events.service';
import SponsorEventFeature from '@/components/sponsor-event/sponsor-event.feature';
import BuyTicketsFeature from '@/components/buy-tickets/buy-tickets.feature';

export default function EventCard(event: EventAccount) {
    
  return(
    <div className="col-md-4">
      <div className="card bg-body-secondary rounded-4">
	<div className="card-body">
	  <h5 className="card-title text-center">{event.account.name}</h5>
	  <div className="container">
	    <div className="row">
	      <div className="col">
		<div className="bg-body-tertiary rounded-2"></div>
		<BuyTicketsFeature
		  publicKey={event.publicKey}
		  account={event.account}
		  name={event.account.name} 
		/>
	      </div>
	      <div className="col">
		<div className="bg-body-tertiary rounded-2">
		  
		</div>
		
		<SponsorEventFeature
		  publicKey={event.publicKey}
		  account={event.account}
		  name={event.account.name} 
		/>
	  
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    </div>
  );
}
