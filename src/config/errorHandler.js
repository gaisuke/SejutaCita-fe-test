import { toast } from "react-toastify";

export default function errorHandler(error) {
  if (error) {
    if (error.response.status !== 404) {
      toast.error("Something went terribly wrong");
      return Promise.reject(error);
    }
  }
}
