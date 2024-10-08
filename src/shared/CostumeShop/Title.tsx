type TitleProp = {
  name: string;
};

export default function CostumeShopTitle({
  name,
}: TitleProp): React.ReactElement {
  return (
    <div className="flex flex-row ml-4 py-4 font-bold text-lg font-[Manrope]">
      <h3>{name}</h3>
    </div>
  );
}
