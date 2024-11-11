import { useForm, SubmitHandler } from "react-hook-form";

export interface WithdrawFundsFormInputs {
  amount: number;
}

export default function WithdrawFundsModal({
  eventName,
  modalRef,
  loading,
  onClose,
  onSubmit
}: {
  eventName: string;
  modalRef: React.RefObject<HTMLDivElement>;
  loading: boolean;
  onClose: () => void;
  onSubmit: (data: WithdrawFundsFormInputs) => void;
}) {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WithdrawFundsFormInputs>({
    defaultValues: {
      amount: 0,
    },
  });

  const handleFormSubmit: SubmitHandler<WithdrawFundsFormInputs> = async (data) => {
    try {
      console.log("Cantidad de Tokens: ", data);
      onSubmit(data);
      reset();
    } catch (error) {
      console.error("Error al colaborar en evento: ",  error);
    }
  };

  return (
    <div
      className="modal fade"
      id="fundsEventModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="fundsEventModalLabel"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="fundsEventModalLabel">
              Retiro de la bóveda del Evento {eventName}
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            >
	    </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <label>Cantidad a retirar:</label>
              <input 
		  {...register("amount", {
		  required: "El monto es requerido",
		  min: {
		    value: 1,
		    message: "La cantidad debe ser positiva",
		  },
		  max: {
		    value: 1000000,
		    message: "Cantidad es muy alta",
		  },
		  valueAsNumber: true,
		})}
                type="number"
		step={1}
                className={`form-control ${ errors.quantity ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.amount && (
                <p className="mt-1 text-sm text-danger">{errors.amount.message}</p>
              )}
              
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onClose}
                  disabled={loading}
                >
                  Cancelar
                </button>
                
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={loading}
                >
                  {loading ? "Retirando..." : "Retirar Fondos"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
