import { HeroSection } from '@/components/hero-section'
import { Navbar } from '@/components/navbar'
import { ProjectProgress } from '@/components/project-progress'
import { ConstructionGallery } from '@/components/construction-gallery'
import { PlansSection } from '@/components/plans-section'
import { WhyContribute } from '@/components/why-contribute'
import { DonationForm } from '@/components/donation-form'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <ProjectProgress />
        <ConstructionGallery />
        <PlansSection />
        <WhyContribute />
        <DonationForm />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}
