import Swal from "sweetalert2";

export default function CloseEventModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => Promise<void>;
}) {
  
  const handleCloseEvent = () => {
    try {
      Swal.fire({
        title: "¿Estás seguro de que quieres cerrar el evento?",
        text: "¡No podrás revertir esta acción!",
        icon: "warning",
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, cerrar evento",
        cancelButtonText: "Cancelar"
      }).then((result) => {
	  if (result.isConfirmed) {
	    console.log("Cerrando en el evento");
	    onSubmit();
	  } else{
	     onClose();
	  }
      });

    } catch(err) {
      console.error("Error cerrando el evento :", err);
    }
  };

  if (isOpen) {
    handleCloseEvent();
  }

  return null;
}
