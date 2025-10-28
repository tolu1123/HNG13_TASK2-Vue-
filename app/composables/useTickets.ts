import type { PostgrestError } from '@supabase/supabase-js'
// Define the ticket type
type Ticket = {
  title: string;
  id: string;
  description: string;
  status: "open" | "in-progress" | "closed";
  assignee: string;
};

// Define return types for better type safety
type TicketsResponse = {
  data: Ticket[] | null;
  error: PostgrestError | null;
}

export const useTickets = () => {
  const { $supabase } = useNuxtApp();


  const tickets = async () : Promise<TicketsResponse> => {
    const { data, error } = await $supabase
      .from('ticket')
      .select('*')
      .returns<Ticket[]>();

     
    return {data, error};
  };
  

  const totalTickets = async () => {
    const { count: total} = await $supabase
      .from("ticket")
      .select("*", { count: "exact", head: true });

    return total;
  };

  // Open tickets
  const openTickets = async () => {
    const { count: open} = await $supabase
      .from("ticket")
      .select("*", { count: "exact", head: true })
      .eq("status", "open");

    return open;
  };

  // Closed tickets
  const closedTickets = async () => {
    const { count: closed } = await $supabase
      .from("ticket")
      .select("*", { count: "exact", head: true })
      .eq("status", "closed");
    
    return closed;
  };

  return {
    tickets,
    totalTickets,
    openTickets,
    closedTickets
  }
};
