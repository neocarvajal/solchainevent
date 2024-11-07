'use client';

import { MyEventData as MyEventCardProp } from "@/utils/dataMock";
import Image from 'next/image';

export default function MyEventCard(event: MyEventCardProp) {
  
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
	  <h5 className="card-title text-center">{event.title} <Image src={event.img_event} width={25} height={25} alt="Latam Fest Logo" /></h5>
	  <div className="container">
	    <div className="row">
	      <div className="col">
		<div className="bg-body-tertiary rounded-2">
		  <h6 className="text-center">Boveda del Evento</h6>
		  <p>Precio Token: {event.token_price}</p>
		  <p>Colaboradores: {event.collaborators}</p>
		  <p>Total: {event.event_vault_total}</p>
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
		  <p>Precio Ticket: {event.ticket_price}</p>
		  <p>Total Vendidos: {event.tickets_sold}</p>
		  <p>Total: {event.gain_vault_total}</p>
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
