import { DotBookIcon, JaggedArrowIcon, OpenBookIcon } from "../../icons";


function FeaturedProducts() {
  const featuredItems = [
    {
      icon: <DotBookIcon width={72} height={72} />,
      main: 'Easy Wins',
      sub: 'Get your best looking smile now!'
    },
    {
      icon: <OpenBookIcon width={72} height={72} />,
      main: 'Concrete',
      sub: 'Defalcate is most focused in helping you discover your most beautiful smile'
    },
    {
      icon: <JaggedArrowIcon width={72} height={72} />,
      main: 'Hack Growth',
      sub: 'Overcame any hurdle or any other problem.'
    }
  ]

  return (
    <div className="mt-20 container m-auto px-8 md:px-20">
      <div className="flex flex-col gap-2.5 items-center">
        <div className="text-xl text-light-grey">Featured Products</div>
        <div className="uppercase text-2xl font-bold">The Best Services</div>
        <div className="text-sm text-light-grey">Problems trying to resolve the conflict between </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 justify-between">
        {featuredItems.map((item) => (
          <div key={`feature-${item.main}`} className="flex flex-col gap-2 items-center">
            {item.icon}
            <div className="text-center text-2xl font-bold text-dark-grey">{item.main}</div>
            <div className="text-center text-light-grey">{item.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts;