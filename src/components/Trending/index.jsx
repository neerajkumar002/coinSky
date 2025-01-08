const Card = ({ id, name, price, image, marketCap, score }) => {
  return (
    <div className="bg-[#303030] flex items-center justify-between w-[500px] h-[140px] rounded-md px-4 ">
      <div>
        <img
          src={
            image ||
            "https://coin-images.coingecko.com/coins/images/53183/large/1000281355.jpg?1735563013"
          }
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-gray-400">
          Name:{" "}
          <span className="text-[#FFB9B3]  font-semibold pl-2">{name} </span>
        </p>
        <p className="text-gray-400">
          Price (In Btc):{" "}
          <span className="text-[#FFB9B3]  font-semibold pl-2">
            BTC {price}{" "}
          </span>
        </p>
        <p className="text-gray-400">
          Market Cap Rank:
          <span className="text-[#FFB9B3]  font-semibold pl-2">
            {marketCap}{" "}
          </span>
        </p>
        <p className="text-gray-400">
          score:
          <span className="text-[#FFB9B3]  font-semibold pl-2">{score} </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
