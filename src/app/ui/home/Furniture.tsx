import Image from 'next/image';
import furniture1 from '@/app/ui/images/furniture-1.png';
import furniture2 from '@/app/ui/images/furniture-2.png';
import furniture3 from '@/app/ui/images/furniture-3.png';
import furniture4 from '@/app/ui/images/furniture-4.png';

function Furniture() {
  return (
    <section className="flex flex-col md:flex-row gap-2 container px-20 mt-6 justify-center">
      <div className="basis-2/5 grow-0 shrink-1">
        <Image
          className='h-full'
          src={furniture1}
          alt="furniture 1"
          width={450}
        />
      </div>
      <div className='flex-3/5 flex flex-col gap-2'>
        <Image
          src={furniture2}
          alt="furniture 1"
        />
        <div className='flex flex-col md:flex-row gap-2'>
          <Image
            src={furniture3}
            alt="furniture 1"
            width={350}
          />
          <Image
            src={furniture4}
            alt="furniture 1"
            width={350}
          />
        </div>
      </div>
    </section>
  )
}

export default Furniture;