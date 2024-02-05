import Skeleton from '@mui/material/Skeleton';

const ProductDetailsSkeletonLoader = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row gap-8">
        <Skeleton variant="rectangular" width={300} height={265} animation="wave" />
        <div className='flex flex-col justify-between'>
          <div className="flex flex-col gap-3">
            <Skeleton animation="wave" width={220} />
            <Skeleton animation="wave" width={290} />
            <div className="flex flex-col">
              <Skeleton animation="wave" width={150} />
              <Skeleton animation="wave" width={230} />
            </div>
          </div>

          <div className='border-t-2 border-grey-6 pt-6 mt-5 md:mt-0'>
            <div className='flex flex-col justify-between gap-10'>
              <Skeleton animation="wave" width={150} />
              <Skeleton animation="wave" width={240} />
            </div>
          </div>           
        </div>
      </div>
    </div>
  )
};

export default ProductDetailsSkeletonLoader;