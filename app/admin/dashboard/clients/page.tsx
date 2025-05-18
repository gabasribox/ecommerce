import Sidebar from "@/components/sidebar/sidebar";
import Container from "@/components/container/container";

export default function Clients() {
  return (
    <main>
      <Sidebar>
        <Container 
          container_width="w-[450px] md:w-[1050px]" 
          container_title="List of Clients"
        >
          List including all clients in the system
        </Container>
      </Sidebar>
    </main>
  )
}