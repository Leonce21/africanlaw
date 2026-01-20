import { render, screen } from '@testing-library/react'
import HeroSection from '../HeroSection'

describe('HeroSection', () => {
  it('renders the main headline', () => {
    render(<HeroSection />)

    expect(
      screen.getByRole('heading', {
        name: /expert legal solutions/i,
      })
    ).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<HeroSection />)

    expect(
      screen.getByRole('button', {
        name: /schedule a free consultation/i,
      })
    ).toBeInTheDocument()
  })
})
