import Button from '@mui/material/Button';

function CallToAction() {
  return (
    <div
      className='m-auto py-20'
      style={{
        backgroundImage: `url(/cook.png)`
      }}>
      <div className="max-w-xl flex flex-col justify-center items-center gap-8 m-auto">
        <div className="text-blue-link text-sm font-bold">Designing Better Experience</div>
        <div className="font-bold text-dark-grey text-4xl text-center">Problems trying to resolve the conflict between </div>
        <p className='text-center text-sm text-light-grey'>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
        <div className='text-green text-2xl font-bold'>$16.48</div>
        <Button variant="contained">ADD YOUR CALL TO ACTION</Button>
      </div>
    </div>
  )
}

export default CallToAction;