import Hero from '../components/Hero.jsx'
import WhyItMatters from '../components/WhyItMatters.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import WhatYouGet from '../components/WhatYouGet.jsx'
import WhoItsFor from '../components/WhoItsFor.jsx'
import Pricing from '../components/Pricing.jsx'
import Faq from '../components/Faq.jsx'
import SignupSection from '../components/SignupSection.jsx'
import FinalCta from '../components/FinalCta.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyItMatters />
      <HowItWorks />
      <WhatYouGet />
      <WhoItsFor />
      <Pricing />
      <Faq />
      <SignupSection />
      <FinalCta />
    </>
  )
}
