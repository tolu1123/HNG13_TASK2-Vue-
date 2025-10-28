// ~/lib/toasts.ts
import { toast } from "vue-sonner";

export function toastSuccess(message: string) {
  toast.success(message);
}

export function toastError(message: string) {
  toast.error(message);
}
