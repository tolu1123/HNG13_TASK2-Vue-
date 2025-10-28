import type { TicketFormValues } from "@/lib/validations/ticket.ts";

interface TicketResponse {
  success: boolean;
  error?: string;
}

export const useTicketManagement = () => {
  const { $supabase } = useNuxtApp();
  const router = useRouter();

  // Reusable function to navigate after a successful operation
  const revalidatePaths = () => {
    // Navigate to the management page to trigger a full page refresh
    // as Nuxt doesn't have a direct equivalent of Next.js revalidatePath
    router.push('/ticket-management');
  };

  const createTicket = async (formData: TicketFormValues): Promise<TicketResponse> => {
    try {
      const { error } = await $supabase
        .from("ticket")
        .insert({
          title: formData.title,
          description: formData.description,
          assignee: formData.assignee,
          status: formData.status
        });

      if (error) {
        throw new Error(error.message);
      }
      
      revalidatePaths();
      return { success: true };


      // eslint-disable-next-line
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  };

  const updateTicket = async (ticketId: string, formData: TicketFormValues): Promise<TicketResponse> => {
    try {
      const { error } = await $supabase
        .from("ticket")
        .update({
          title: formData.title,
          description: formData.description,
          assignee: formData.assignee,
          status: formData.status
        })
        .eq("id", ticketId);

      if (error) {
        throw new Error(error.message);
      }
      
      revalidatePaths();
      return { success: true };

      // eslint-disable-next-line
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  };

  const deleteTicket = async (ticketId: string): Promise<TicketResponse> => {
    try {
      const { error } = await $supabase
        .from("ticket")
        .delete()
        .eq("id", ticketId);

      if (error) {
        throw new Error(error.message);
      }
      
      revalidatePaths();
      return { success: true };

      // eslint-disable-next-line
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  };

  return {
    createTicket,
    updateTicket,
    deleteTicket,
  };
};
