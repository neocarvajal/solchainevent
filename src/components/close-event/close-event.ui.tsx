import Swal from "sweetalert2";

export default function CloseEventModal({
  isOpen,
  loading,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  loading: boolean;
  onClose: () => void;
  onSubmit: () => void;
}) {
  
  const handleCloseEvent = async () => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro de que quieres cerrar el evento?",
        text: "¡No podrás revertir esta acción!",
        icon: "warning",
        showCancelButton: true,
	reverseButtons: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, cerrar evento",
        cancelButtonText: "Cancelar"
      });

      if (result.isConfirmed) {
        onSubmit();
        Swal.fire({
          title: "Evento cerrado",
          text: "El evento ha sido cerrado con éxito.",
          icon: "success"
        });
      } else {
        onClose();
      }
    } catch (error) {
      console.error("Error closing the event:", error);
    }
  };

  if (isOpen) {
    handleCloseEvent();
  }

  return null;
}
