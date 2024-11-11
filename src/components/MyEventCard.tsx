'use client';

import { DECIMALS_PER_USDC } from "@/utils/solanaProgram";
import { CloseEventFeature } from "@/components/close-event/close-event.feature";
import { EventAccount } from "@/services/get-events.service";
import Image from 'next/image';

export default function MyEventCard(event: EventAccount) {
  
  const handleCloseEvent = () => {
      alert("Dentro de poco integraremos esta función");
  }
  
  const handleClaim = () => {
      alert("Dentro de poco integraremos esta función");
  }
  
  return (
    <div className="col-md-4">
      <div className="card bg-body-secondary rounded-4">
	<div className="card-body">
	  <h5 className="card-title text-center">{event.account.name}</h5>
	  <div className="container">
	    <div className="row">
	      <div className="col">
		<div className="bg-body-tertiary rounded-2">
		  <h6 className="text-center">Boveda del Evento</h6>
		  <p>Precio Token: {1}</p>
		  <p>Colaboradores: {event.account.sponsors.toNumber().toFixed(0)}</p>
		  <p>Total: {(event.account.treasuryVaultTotal.toNumber()/DECIMALS_PER_USDC).toFixed(0)}</p>
		</div>
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
		  disabled={event.closed}
		>
		  <p className="fw-bold d-flex align-items-center justify-content-center my-2">Retirar Fondos</p> 
		</button>
	      </div>
	      <div className="col">
		<div className="bg-body-tertiary rounded-2">
		  <h6 className="text-center">Boveda Ganancias</h6>
		  <p>Precio Ticket: {event.account.ticketPrice.toNumber().toFixed(0)}</p>
		  <p>Total Vendidos: {event.account.ticketsSold.toNumber().toFixed(0)}</p>
		  <p>Total: {(event.account.gainVaultTotal.toNumber()/DECIMALS_PER_USDC).toFixed(0)}</p>
		</div>
		<button
		  className="btn btn-primary form-control"
		  type="submit"
		  style={{
		    background: 'linear-gradient(180.65deg,#c766ef,#7928d2 51.04%,#2b0c52)',
		    border: 'none',
		    transition: 'transform 0.5s',
		  }}
		  onMouseEnter={(e) => {
		    e.currentTarget.style.transform = 'scale(1.1)';
		  }}
		  onMouseLeave={(e) => {
		    e.currentTarget.style.transform = 'scale(1)';
		  }}
		  onClick={handleCloseEvent}
		>
		  <p className="fw-bold d-flex align-items-center justify-content-center my-2">Cerrar Evento </p> 
		</button>
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    </div>
  );
}
