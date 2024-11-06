'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

export interface EventFormInputs {
  name: string;
  price: number;
}

export default function CreateEventModal({
  loading,
  onClose,
  onSubmit
}: {
  loading: boolean;
  onClose: () => void;
  onSubmit: (data: EventFormInputs) => void;
}) {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormInputs>({
    defaultValues: {
      name: "",
      price: 0,
    },
  });

  const handleFormSubmit: SubmitHandler<EventFormInputs> = async (data) => {
    try {
      console.log("Creating event: ", data);
      onSubmit(data);
      reset();
    } catch (error) {
      console.error("Error creating event: ", error);
    }
  };

  return (
    <div
      className="modal fade"
      id="createEventModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="createEventModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="createEventModalLabel">
              Crear nuevo evento
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
              <label>Event Name</label>
              <input 
                {...register("name", {
                  required: "Event name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                  maxLength: {
                    value: 40,
                    message: "Name must be less than 40 characters"
                  },
                })}
                type="text"
                className="form-control"
                placeholder="Enter event name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-danger">{errors.name.message}</p>
              )}
              
              <label>Price (USDC)</label>
              <input 
                {...register("price", {
                  min: {
                    value: 0,
                    message: "Price must be positive",
                  },
                  max: {
                    value: 1000000,
                    message: "Price must be positive",
                  },
                  valueAsNumber: true,
                })}
                type="number"
                step="1"
                className="form-control"
                placeholder="Enter price"
              />
              {errors.price && (
                <p className="mt-1 text-sm text-danger">
                  {errors.price.message}
                </p>
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
                  {loading ? "Creando..." : "Crear Evento"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
