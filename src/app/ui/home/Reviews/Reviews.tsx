import Image from "next/image";
import user1 from '../../../ui/images/user1.png';
import range from 'lodash/range';
import { StarIcon } from "../../icons";
import first from '../../../ui/images/first.png';
import second from '../../../ui/images/second.png';
import third from '../../../ui/images/third.png';
import fourth from '../../../ui/images/fourth.png';
import fifth from '../../../ui/images/fifth.png';
import sixth from '../../../ui/images/sixth.png';
import seventh from '../../../ui/images/seventh.png';
import eighth from '../../../ui/images/eighth.png';
import ninth from '../../../ui/images/ninth.png';

function Reviews() {
  const starsFilling = [...range(4).map(() => true), ...range(1).map(() => false)];
  const images = [ first, second, third, fourth, fifth, sixth, seventh, eighth, ninth ];
  return (
    <div className='mt-20 md:mt-40 container m-auto px-8 md:px-20'>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 md:gap-28">
        <div className="flex flex-col gap-4 items-center">
          <div className="font-bold text-dark-grey text-2xl">What they say about us</div>
          <Image width={90} height={90} src={user1} alt="reviewer" className="mt-10" />
          <div className="flex gap-3 items-center">
            {starsFilling.map((filled, index) => (
              <StarIcon key={`rating-star-${index}`} className="text-yellow-500" filled={filled} />
            ))}
          </div>
          <div className="font-bold text-sm text-light-grey text-center">Slate helps you see how many more days you need to work to reach your financial goal.</div>
          <div className="text-sm font-bold">
            <div className="text-blue-link">Regina Miles</div>
            <div className="text-center text-dark-grey">Designer</div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-5">
          {
            images.map((i, index) => (
              <Image 
                key={`gallery-item-${index}`}
                width={145}
                src={i}
                alt={`gallery item ${index}`}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Reviews;