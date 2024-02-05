import Image from 'next/image';
import furniture1 from '@/app/ui/images/furniture-1.png';
import furniture2 from '@/app/ui/images/furniture-2.png';
import furniture3 from '@/app/ui/images/furniture-3.png';
import furniture4 from '@/app/ui/images/furniture-4.png';
import FurnitureText from './FurnitureText/FurnitureText';

function Furniture() {
  return (
    <section className="flex flex-col md:flex-row gap-2 container px-8 md:px-20 mt-6 justify-center">
      <div className="basis-2/5 grow-0 shrink-1">
        <div className='relative h-full'>
          <Image
            className='h-72 md:h-full object-cover'
            src={furniture1}
            alt="furniture 1"
            width={450}
            loading="eager"
            priority={true}
          />
          <FurnitureText />
        </div>
      </div>
      <div className='flex-3/5 flex flex-col gap-2'>
        <div className='relative'>
          <Image
            className='h-72 md:h-auto'
            src={furniture2}
            alt="furniture 1"
          />
          <FurnitureText />
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='relative'>
            <Image
              className='h-72 md:h-auto'
              src={furniture3}
              alt="furniture 1"
              width={350}
            />
            <FurnitureText />
          </div>
          <div className='relative'>
            <Image
              className='h-72 md:h-auto'
              src={furniture4}
              alt="furniture 1"
              width={350}
            />
            <FurnitureText />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Furniture;