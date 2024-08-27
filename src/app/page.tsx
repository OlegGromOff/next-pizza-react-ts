import { Container, Title } from "@/components/shared";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
    </>
  );
}
