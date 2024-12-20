'use client';

import { DECIMALS_PER_USDC } from "@/utils/solanaProgram";
import { CloseEventFeature } from "@/components/close-event/close-event.feature";
import { EventAccount } from "@/services/get-events.service";
import WithdrawFundsFeature from "@/components/withdraw-funds/withdraw-funds.feature";

export default function MyEventCard(event: EventAccount) {
  
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
		<WithdrawFundsFeature
		  publicKey={event.publicKey}
		  account={event.account}
		/>
	      </div>
	      <div className="col">
		<div className="bg-body-tertiary rounded-2">
		  <h6 className="text-center">Boveda Ganancias</h6>
		  <p>Precio Ticket: {event.account.ticketPrice.toNumber().toFixed(0)}</p>
		  <p>Total Vendidos: {event.account.ticketsSold.toNumber().toFixed(0)}</p>
		  <p>Total: {(event.account.gainVaultTotal.toNumber()/DECIMALS_PER_USDC).toFixed(0)}</p>
		</div>
		{
		  event.account.active && (
		    <CloseEventFeature
		      publicKey={event.publicKey}
		      account={event.account}
		    />
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
