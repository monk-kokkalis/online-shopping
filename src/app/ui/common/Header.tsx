import { 
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon
} from "../icons";

function Header() {
  return (
    <div className="bg-green h-[58px] px-8 items-center justify-between text-sm text-white hidden md:flex">
      <div className='flex items-center justify-between gap-8'>
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <div className="text-sm text-white">(225) 555-0118</div>
        </div>
        <div className="flex items-center gap-2">
          <EmailIcon />
          <div className="text-sm text-white">michelle.rivera@example.com</div>
        </div>
      </div>
      <div>Follow Us  and get a chance to win 80% off</div>
      <div className="flex items-center gap-5">
        <div>Follow Us :</div>
        <div className="flex items-center gap-4">
          <InstagramIcon />
          <YoutubeIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  )
}

export default Header;