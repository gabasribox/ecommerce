import Sidebar from "@/components/sidebar/sidebar";
import Container from "@/components/container/container";

export default function Orders() {
  return (
    <main>
      <Sidebar>
        <Container 
          container_width="w-[450px] md:w-[1050px]" 
          container_title="All Orders"
        >
          List including all orders in the system
        </Container>
      </Sidebar>
    </main>
  )
}