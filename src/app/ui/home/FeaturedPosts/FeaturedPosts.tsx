import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import range from 'lodash/range';
import { ClockIcon, GraphIcon, ChevronDownIcon } from '../../icons';

function FeaturedPosts() {
  return (
    <div className='mt-20 md:mt-40 container m-auto px-8 md:px-20'>
      <div className='text-blue-link text-sm text-center'>Practice Advice</div>
      <div className='text-4xl font-bold text-center'>Featured Posts</div>
      <div className='mt-14 grid grid-cols-1 md:grid-cols-3 justify-between gap-5'>
        {
          range(3).map((i) => (
            <Card className='relative' key={`featured-post-${i}`} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={`https://cdn.dummyjson.com/product-images/${i + 1}/thumbnail.jpg`}
                title="Item"
              />
              <div className='absolute uppercase text-white bg-[#E74040] top-5 left-5 text-xs p-1 rounded font-bold px-2 tracking-wide'>New</div>
              <CardContent>
                <div className='flex gap-5 text-xs'>
                  <div className='text-[#8EC2F2]'>Google</div>
                  <div className='text-light-grey'>Trending</div>
                  <div className='text-light-grey'>Now</div>
                </div>
                <div className='text-xl mt-5'>Loudest à la Madison #1 (L&apos;integral)</div>
                <p className='text-sm text-light-grey mt-5'>
                  We focus on ergonomics and meeting 
                  you where you work. It&apos;s only a 
                  keystroke away.
                </p>
                <div className='mt-5 flex justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <ClockIcon />
                    <span className='text-light-grey text-xs'>February 6, 2024</span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <GraphIcon />
                    <span className='text-light-grey text-xs'>10 comments</span>
                  </div>
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" className='flex gap-2 items-center'>
                  <span className='normal-case font-bold text-light-grey'>Learn More</span>
                  <ChevronDownIcon className='rotate-[-90deg]' />
                </Button>
              </CardActions>
            </Card>
          ))
        }
      </div>
    </div>
  );
}

export default FeaturedPosts;