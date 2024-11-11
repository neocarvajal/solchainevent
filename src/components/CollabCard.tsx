'use client';

import Image from 'next/image';
import { SponsoredEvent as CollaborationCardProp } from "@/services/get-sponsored-events.service"

export default function CollabCard(collab: CollaborationCardProp) {
  
   const handleClaim = () => {
      alert("Dentro de poco integraremos esta función");
  }
  
  return (
   <div className="col-md-4">
      <div className="card bg-body-secondary rounded-4">
	<div className="card-body">
	  <h5 className="card-title text-center">{collab.event.account.name}</h5>
	  <div className="container">
	    <div className="row">
	      <div className="col">
		<div className="bg-body-tertiary rounded-2 text-center">
		  <p>Colaboraste con: {collab.tokens.toFixed(0)} tokens</p>
		</div>
		{
		  !collab.event.account.active ? (
		      
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
			onClick={handleClaim}
			disabled={!collab.event_closed}
		      >
			<p className="fw-bold d-flex align-items-center justify-content-center my-2">Retirar Fondos</p> 
		      </button>
		    
		  ) : (
		    <p className="text-center">¡Este evento no ha finalizado!</p>
		  )
		}
		
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    </div>
  );
}
