import Sidebar from "@/components/sidebar/sidebar";
import Container from "@/components/container/container";

export default function Dashboard() {
  return (
    <main>
      <Sidebar>
        <div className="column-5">
          <Container 
            container_width="w-[450px] md:w-[1050px]"
            container_title="Recent Orders"
          >
            Summary of recent orders
          </Container>

          <Container 
            container_width="w-[450px] md:w-[1050px]"
            container_title="Best-sellings"
          >
            Summary of the best-selling products
          </Container>

          <Container 
            container_width="w-[450px] md:w-[1050px]"
            container_title="Clients"
          >
            Summary of the customers who bought the most
          </Container>
        </div>
      </Sidebar>
    </main>
  )
}