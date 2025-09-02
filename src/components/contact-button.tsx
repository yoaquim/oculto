'use client'

import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { ExternalLink } from "lucide-react"

export function ContactButton() {
  return (
    <ShimmerButton 
      shimmerColor="#ffffff"
      background="#ff1d74"
      borderRadius="100px"
      shimmerSize="0.15em"
      shimmerDuration="2s"
      className="inline-flex items-center text-white px-8 py-3 text-base font-bold transition-all duration-300 hover:scale-105 border-none"
      onClick={() => window.open('https://wa.me/17876712662?text=Hola%20Oculto%20City%20Concierge', '_blank')}
    >
      <ExternalLink className="w-4 h-4 mr-2" />
      <span className="font-bold">Contact Concierge</span>
    </ShimmerButton>
  )
}
