'use client';

import React from 'react';
import Image from 'next/image';
import { EventAccount } from '@/services/get-events.service';
import SponsorEventFeature from '@/components/sponsor-event/sponsor-event.feature';

export default function EventCard(event: EventAccount) {

  const handleBuy = () => {
      alert("Dentro de poco integraremos esta función");
  }
    
  return(
    <div className="col-md-4">
      <div className="card bg-body-secondary rounded-4">
	<div className="card-body">
	  <h5 className="card-title text-center">{event.account.name}</h5>
	  <div className="container">
	    <div className="row">
	      <div className="col">
		<div className="bg-body-tertiary rounded-2"></div>
		<button 
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
		  onClick={handleBuy}
		>
		  <p className="fw-bold d-flex align-items-center justify-content-center my-2">Comprar Entrada</p> 
		  <p className="fw-bold d-flex align-items-center justify-content-center">
		    {event.account.ticketPrice.toNumber()}
		    
		    <Image
		      className="mx-1"
		      src="/UsdcLogo.png" 
		      width={20} 
		      height={20} 
		      alt="solana logo"
		    />
		  </p>
		  
		</button>
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
