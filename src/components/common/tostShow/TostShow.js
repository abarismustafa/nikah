import { toast } from "react-toastify";

export const toastSuccessMessage = (data) => {
    toast.success(`${data}`, {
        position: "top-center",
    });
};

export const toastSuccessMessageError = (data) => {
    toast.error(`${data}`, {
        position: "top-center",
    });
};