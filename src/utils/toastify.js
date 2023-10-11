import { toast } from "react-toastify";

const alertSuccess = (message, time = 1000) =>
  toast.success(message, {
    autoClose: time,
    draggable: true,
  });
const alertError = (message, time = 1000) =>
  toast.error(message, {
    autoClose: time,
    draggable: true,
  });
const alertWarning = (message, time = 1000) =>
  toast.warning(message, {
    autoClose: time,
    draggable: true,
  });
const alertInfo = (message, time = 1000) =>
  toast.info(message, {
    autoClose: time,
    draggable: true,
  });

export { alertSuccess, alertError, alertWarning, alertInfo };
