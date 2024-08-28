import {
  Container,
  Title,
  Categories,
  SortPopup,
  TopBar,
  Filters,
} from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Filters */}
          <div className="W-[250px">
            <Filters />
          </div>
          {/* Products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCard
                id={0}
                name="Чизбургер-пицца"
                price={550}
                imageUrl={
                  "https://cdn.foodpicasso.com/assets/2023/11/17/ff0525b02d10d5c11292db1b66886179---jpeg_1000x_103c0_convert.jpeg"
                }
              /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
