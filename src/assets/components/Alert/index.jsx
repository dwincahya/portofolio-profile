import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const calculateResponsiveWidth = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 640) return "100%"; 
  if (screenWidth < 1024) return "100%"; 
  return "70%"; 
};

export const showSuccessAlert = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "bg-green-500 text-white",
    progressClassName: "bg-green-300",
    style: { width: calculateResponsiveWidth() },
  });
};

export const showErrorAlert = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "bg-red-500 text-white",
    progressClassName: "bg-red-300",
    style: { width: calculateResponsiveWidth() },
  });
};

export const showInfoAlert = (message) => {
  toast.info(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "bg-blue-500 text-white",
    progressClassName: "bg-blue-300",
    style: { width: calculateResponsiveWidth() },
  });
};