'use client';

import 'bootstrap/dist/js/bootstrap.min.js';

import { useForm, SubmitHandler } from 'react-hook-form';

export interface EventFormInputs {
  name: string;
  price: number;
}

export default function CreateEventModal({
  isOpen,
  loading,
  onClose,
  onSubmit
}: {
  isOpen: boolean;
  loading: boolean;
  onClose: () => void;
  onSubmit: (data:EventFormInputs) => void;
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
  }
  
  if(!isOpen) return null;
  
  return (
    <>
     <h1>Soy una modal</h1>
    </>
  );
}

  
