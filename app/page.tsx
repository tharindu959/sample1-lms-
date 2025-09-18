import CompanionCard from '@/components/CompanionCard'
import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
            id="123"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="science"
            duration={45}
            color="#ffda6e"
        />
        <CompanionCard
            id="456"
            name="Countsy the number Wizard"
            topic="Derivatives & Integrals"
            subject="Maths"
            duration={30}
            color="#e5d0ff"
        />
        <CompanionCard
            id="789"
            name="Verba the Vocabulary Builder"
            topic="language"
            subject="English Literature"
            duration={30}
            color="#BDE7FF"
        />
      </section>

      <section className='home-section'>
        <CompanionsList />
        <CTA />
      </section>
    </main>
  )
}

export default Page
