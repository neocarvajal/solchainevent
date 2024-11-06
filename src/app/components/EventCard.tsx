'use client';

import Image from 'next/image';
import { EventAccount as EventDataProp} from '@/app/services/get-events.service';

export default function EventCard(event: EventDataProp) {
  
  const handleCollab = () => {
      alert("Dentro de poco integraremos esta función");
  }
  
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
		      src="/Solana.png" 
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
		<button
		  className="btn btn-primary form-control"
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
		  onClick={handleCollab}
		>
		  <p className="fw-bold d-flex align-items-center justify-content-center my-2">Colaborar Ahora </p> 
		  <p className="fw-bold d-flex align-items-center justify-content-center">
		    1
		     <Image
		      className="mx-1"
		      src="/Solana.png" 
		      width={20} 
		      height={20} 
		      alt="solana logo"
		    />
		  </p>
		</button>
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    </div>
  );
}
