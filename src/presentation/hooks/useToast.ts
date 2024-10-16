import { toast } from "react-toastify";

export const useToast = () => {
    const notifySuccess = (message: string) => toast.success(message);

    const notifyError = (message: string) => toast.error(message);

    return { notifyError, notifySuccess }
}
