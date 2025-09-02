'use client'

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function ContactButton() {
  return (
    <Button 
      size="lg" 
      className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
      onClick={() => window.open('https://wa.me/1XXXXXXXXXX?text=Hola%20Oculto%20City%20Concierge', '_blank')}
    >
      <ExternalLink className="w-5 h-5 mr-2" />
      Contact Concierge
    </Button>
  )
}