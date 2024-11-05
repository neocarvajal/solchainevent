'use client';

import EventCard from "@/app/components/EventCard";
import { eventData } from "@/app/utils/dataMock";
import WalletInfo from "@/app/components/WalletInfo";

export default function Home() {

  return (
    <>
      <WalletInfo />
      {
	eventData.length === 0 ? 
	(
	  <div className="container my-5">
	    <div className="position-relative p-2 text-center text-muted bg-body border border-dashed rounded-5">
	      <h1 className="text-body-emphasis">¡Lo sentimos! No hay eventos disponibles. </h1>
	      <p className="col-lg-6 mx-auto mb-4">
		Sé el primero en crear un evento en Solana:
	      </p>
	      <button 
	       className="btn btn-primary"
		style={{
		  background: 'linear-gradient(90deg,#c766ef,#7928d2 51.04%,#2b0c52)',
		  border: 'none',
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
	    <div className="position-relative p-2 text-center text-muted bg-body border border-dashed rounded-5">
	      <h1 className="text-body-emphasis">¡No te pierdas los últimos eventos!</h1>
	      <p className="col-lg-6 mx-auto mb-4">
		Forma parte de la gran comunidad de Solana
	      </p>
	    </div>
	  </div>
	  
	  <div className="container mt-5">
	    <div className="row">
	    {eventData.map((event, key) => (
		 <EventCard 
		    key={key}
		    title={event.title} 
		    ticket_price={event.ticket_price} 
		    token_price={event.token_price}
		    img_event={event.img_event}
		  />
	    ))}
	    </div>
	  </div>
	</>
	)
      }
      
    </>
  );
}
