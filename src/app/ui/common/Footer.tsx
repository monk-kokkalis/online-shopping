import { FacebookIcon, InstagramIcon, TwitterIcon } from "../icons";
import { Button } from "@mui/material";

function Footer() {
  const sections = [
    {
      heading: 'Company Info',
      links: [
        'About Us',
        'Carrier',
        'We are hiring',
        'Blog'
      ]
    },
    {
      heading: 'Legal',
      links: [
        'About Us',
        'Carrier',
        'We are hiring',
        'Blog'
      ]
    },
    {
      heading: 'Features',
      links: [
        'Business Marketing',
        'User Analytic',
        'Live Chat',
        'Unlimited Support'
      ]
    },
    {
      heading: 'Resources',
      links: [
        'IOS & Android',
        'Watch a Demo',
        'Customers',
        'API'
      ]
    }
  ]

  return (
    <footer className='mt-10 container m-auto px-8 md:px-20'>
      <div className='flex flex-col gap-10 justify-between'>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="font-bold text-2xl text-dark-grey">Bandage</div>
          <div className='flex items-center gap-4 text-blue-link'>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10 items-start md:items-center">
          {
            sections.map((section) => (
              <div key={`footer-${section.heading}`} className="flex flex-col gap-5">
                <div className="font-bold text-dark-grey text-base">{section.heading}</div>
                {
                  section.links.map((link) => (
                    <div key={`footer-${section.heading}-${link}`} className="text-sm text-light-grey font-bold">{link}</div>
                  ))
                }
              </div>
            ))
          }
          <div className="flex flex-col gap-5 items-start self-stretch">
            <div className="font-bold text-dark-grey text-base">Get In Touch</div>
            <div>
              <div className='flex items-center'>
                <div className="border border-grey-600 p-1.5">
                  <input placeholder="Your Email"></input>
                </div>
                <Button variant="contained">Subscribe</Button>
              </div>
              <div className="text-xs text-light-grey mt-2">Lore imp sum dolor Amit</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;