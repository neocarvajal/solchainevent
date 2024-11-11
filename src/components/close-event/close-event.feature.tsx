import { useState } from 'react';
import CloseEventModal from '@/components/close-event/close-event.ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEventManagerProgram } from "@/utils/solanaProgram";
import { EventAccount } from '@/services/get-events.service';
import { closeEvent } from '@/services/close-event.service';

export function CloseEventFeature(event: EventAccount) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const {publicKey} = useWallet()
  const program = useEventManagerProgram();
  const eventPublicKey = event.publicKey;

  const onSubmit = async () => {
    setisLoading(!isLoading);
    try {
        console.log(event)
        await closeEvent({ program, publicKey, eventPublicKey })
    } catch (e) {
      console.error(e)
    } finally {
      setisLoading(!isLoading);
      setIsModalOpen(!isModalOpen);
    }
  }

  return (
    <>
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
	  onClick={() => setIsModalOpen(true)}
      >
	 <p className="fw-bold d-flex align-items-center justify-content-center my-2">Cerrar Evento </p> 
      </button>
	<CloseEventModal
	  isOpen={isModalOpen}
	  loading={isLoading}
	  onClose={() => setIsModalOpen(false)}
	  onSubmit={onSubmit}
	/>
    </>
  );
};
