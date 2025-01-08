import { RefreshCcw } from "lucide-react";
import Card from "../../components/Trending";
import { useGetTrendingCoinsQuery } from "../../services/trendingCoinApi";

const TrendingCoins = () => {
  const {
    data: coinsList,
    isLoading,
    refetch,
    isFetching,
  } = useGetTrendingCoinsQuery();

  console.log(coinsList?.coins[0]?.item);

  if (isFetching) return "Loading......";
  if (isLoading) return "Loading......";
  return (
    <div className="px-5 py-5 w-full flex gap-3 flex-col">
      <div className="flex justify-between px-5 py-1 font-semibold text-3xl">
        <h1 className="text-[#FFB9B3]">Trending</h1>
        <button onClick={() => refetch()} className="text-[#FFB9B3]">
          <RefreshCcw />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 place-items-center">
        {coinsList?.coins &&
          coinsList?.coins.map((coin) => (
            <Card
              key={coin?.item?.id}
              id={coin?.item?.id}
              name={coin?.item?.name}
              price={coin?.item?.price_btc}
              marketCap={coin?.item?.market_cap_rank}
              image={coin?.item?.large}
              score={coin?.item?.score}
            />
          ))}
      </div>
    </div>
  );
};

export default TrendingCoins;

// {
//   "item": {
//     "id": "butthole-coin",
//     "coin_id": 53183,
//     "name": "Butthole Coin",
//     "symbol": "BUTTHOLE",
//     "market_cap_rank": 749,
//     "thumb": "https://coin-images.coingecko.com/coins/images/53183/standard/1000281355.jpg?1735563013",
//     "small": "https://coin-images.coingecko.com/coins/images/53183/small/1000281355.jpg?1735563013",
//     "large": "https://coin-images.coingecko.com/coins/images/53183/large/1000281355.jpg?1735563013",
//     "slug": "butthole-coin",
//     "price_btc": 6.508022805176923e-7,
//     "score": 0,
//     "data": {
//       "price": 0.06174964727724566,
//       "price_btc": "0.0000006508022805176923",
//       "price_change_percentage_24h": {
//         "aed": -22.503738332647117,
//         "ars": -22.46587624544546,
//         "aud": -21.456508111169374,
//         "bch": -16.157458047921697,
//         "bdt": -22.604963008183436,
//         "bhd": -22.481724834885448,
//         "bmd": -22.503316351764145,
//         "bnb": -19.15801946964267,
//         "brl": -22.09418184011132,
//         "btc": -17.724641086639746,
//         "cad": -22.104129310751095,
//         "chf": -22.09609625302432,
//         "clp": -22.671323773401557,
//         "cny": -22.446195828212012,
//         "czk": -21.699248800606664,
//         "dkk": -21.67952025994391,
//         "dot": -11.859780062980757,
//         "eos": -10.935842248150626,
//         "eth": -15.746480624862816,
//         "eur": -21.696996850251487,
//         "gbp": -21.335463686331487,
//         "gel": -22.50331635176421,
//         "hkd": -22.475861133483754,
//         "huf": -21.719348310729313,
//         "idr": -22.051343539957447,
//         "ils": -21.381667461692228,
//         "inr": -22.355513316043456,
//         "jpy": -22.146498714746578,
//         "krw": -21.915841237773172,
//         "kwd": -22.464090892575914,
//         "lkr": -22.3261843490491,
//         "ltc": -15.72041668937049,
//         "mmk": -22.50331635176421,
//         "mxn": -22.08033728853931,
//         "myr": -22.244274512271474,
//         "ngn": -22.545422672681468,
//         "nok": -21.657046998935467,
//         "nzd": -21.41773003844971,
//         "php": -21.983796045172337,
//         "pkr": -22.44230618289859,
//         "pln": -21.34995389428969,
//         "rub": -23.881597177498403,
//         "sar": -22.50275893840646,
//         "sek": -21.384878493257258,
//         "sgd": -22.00401695659483,
//         "thb": -22.012340363329223,
//         "try": -22.43529744029279,
//         "twd": -22.160583195626522,
//         "uah": -22.453103776932014,
//         "usd": -22.503316351764145,
//         "vef": -22.503316351764227,
//         "vnd": -22.473803790648557,
//         "xag": -22.128659754230515,
//         "xau": -22.511535977214113,
//         "xdr": -22.463787850084415,
//         "xlm": -17.772632838553086,
//         "xrp": -19.425946841544377,
//         "yfi": -14.739195823361618,
//         "zar": -21.122333741906786,
//         "bits": -17.724641086639746,
//         "link": -13.147931813071079,
//         "sats": -17.72464108663975
//       },
//       "market_cap": "$62,187,046",
//       "market_cap_btc": "654.3558063364859",
//       "total_volume": "$46,377,213",
//       "total_volume_btc": "488.7865283266081",
//       "sparkline": "https://www.coingecko.com/coins/53183/sparkline.svg",
//       "content": null
//     }
//   }
// },
