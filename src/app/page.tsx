import {
  Container,
  Title,
  Categories,
  SortPopup,
  TopBar,
  Filters,
  ProductsGroupList,
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
        <div className="flex gap-[80px]">
          {/* Filters */}
          <div className="W-[250px">
            <Filters />
          </div>
          {/* Products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.jpg",
                    items: [{ price: 10 }],
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.jpg",
                    items: [{ price: 10 }],
                  },
                  {
                    id: 3,
                    name: "Гавайская",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.jpg",
                    items: [{ price: 10 }],
                  },
                  {
                    id: 4,
                    name: "Четыре сыра",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.jpg",
                    items: [{ price: 10 }],
                  },
                  {
                    id: 5,
                    name: "Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.jpg",
                    items: [{ price: 10 }],
                  },
                  {
                    id: 6,
                    name: "Вегетарианская",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.jpg",
                    items: [{ price: 10 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.jpg",
                    items: [{ price: 10 }],
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.jpg",
                    items: [{ price: 10 }],
                  },
                  {
                    id: 3,
                    name: "Гавайская",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.jpg",
                    items: [{ price: 10 }],
                  },
                  {
                    id: 4,
                    name: "Четыре сыра",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.jpg",
                    items: [{ price: 10 }],
                  },
                  {
                    id: 5,
                    name: "Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.jpg",
                    items: [{ price: 10 }],
                  },
                  {
                    id: 6,
                    name: "Вегетарианская",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.jpg",
                    items: [{ price: 10 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
