import { useContext } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { ShopContext } from "../../../../../store/costumeshop_context";
import CostumeShopContainer from "../../../../../shared/CostumeShop/CostumeShopContainer";
import CostumeShopTitle from "../../../../../shared/CostumeShop/Title";

export default function CostumeList() {
  const { items, setSelected, selected } = useContext(ShopContext);

  function handleClick(value: number) {
    setSelected(value);
  }

  return (
    <CostumeShopContainer widthRatio="flex-[3]" className="bg-white h-full flex flex-col">
      <CostumeShopTitle name="Costume List" />
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-2 overflow-y-auto h-full pb-[0.1rem]">
        {items.map((item, index) => (
          <li className="flex m-auto pb-[0.03rem]" key={item.title}>
            <Thumbnail
              thumbnail={item.thumbnailPng}
              isNew={item.userCreated ? true : false}
              onClick={() => {
                handleClick(index);
              }}
              selected={selected === index ? true : false}
            />
          </li>
        ))}
      </ul>
    </CostumeShopContainer>
  );
}
