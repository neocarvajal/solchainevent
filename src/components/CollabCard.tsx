'use client';

import { SponsoredEvent as CollaborationCardProp } from "@/services/get-sponsored-events.service";
import WithdrawEarningsFeature from "@/components/withdraw-earnings/withdraw-earnings.feature";

export default function CollabCard(collab: CollaborationCardProp) {
  
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
		      
		    <WithdrawEarningsFeature
		      publicKey={collab.event.publicKey}
		      account={collab.event.account}
		    />
		    
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
