import { Key } from "lucide-react"
import { ContactButton } from "@/components/contact-button"
import { TextReveal } from "@/components/magicui/text-reveal"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden" style={{backgroundColor: '#191919', '--oculto-black': '#191919', '--oculto-military-green': '#4a5d23', '--oculto-crimson': '#ff1d74', '--oculto-deep-grey': '#1c1c1c', '--oculto-grey': '#2d2d2d', '--oculto-white': '#f8f8f8'} as React.CSSProperties}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl mb-6 leading-none tracking-tighter font-light">
              A Hidden World.
              <br />
              <span style={{color: 'var(--oculto-crimson)'}}>Curated.</span>
            </h1>
            <AnimatedShinyText className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
              This is Oculto City. Private dinners, underground nightlife, seamless exclusivity, and no maps allowed.
            </AnimatedShinyText>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Culture in Motion */}
      <section className="py-24 px-6" style={{backgroundColor: 'var(--oculto-black)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl mb-8 font-light tracking-tight">Culture in <span style={{color: 'var(--oculto-crimson)'}}>Motion</span></h2>
            <p className="text-lg md:text-xl max-w-3xl font-light opacity-90">
              A curated reel of Puerto Rico's nightlife, sound, fashion, and movement. Here, island culture doesn't just exist—it pulses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'var(--oculto-grey)'}}>
                <div className="w-full h-full flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, rgba(74, 93, 35, 0.2), rgba(139, 21, 56, 0.2))'}}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 opacity-40">📸</div>
                    <p className="text-sm text-white/60">B&W Culture Photo {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puerto Rico in La Sombra */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl mb-8 font-light tracking-tight">Puerto Rico in <span style={{color: 'var(--oculto-crimson)'}}>La Sombra</span></h2>
              <p className="text-lg md:text-xl mb-8 font-light opacity-90">
                Hidden beaches. Rooftops no one knows about. River hikes at dusk. This is the Puerto Rico you won't find on TripAdvisor. Only accessible through Oculto City.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--oculto-crimson)'}}></div>
                  <span className="text-sm font-medium tracking-wider uppercase opacity-70">Secret Beach Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--oculto-crimson)'}}></div>
                  <span className="text-sm font-medium tracking-wider uppercase opacity-70">Private Rooftop Venues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--oculto-crimson)'}}></div>
                  <span className="text-sm font-medium tracking-wider uppercase opacity-70">Exclusive Nature Trails</span>
                </div>
              </div>
            </div>
            
            <div className="aspect-[4/3] rounded-lg overflow-hidden" style={{backgroundColor: 'var(--oculto-grey)'}}>
              <div className="w-full h-full flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, rgba(74, 93, 35, 0.3), rgba(10, 10, 10, 0.5))'}}>
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-40">🌴</div>
                  <p className="text-sm text-white/60">Hidden Puerto Rico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insiders Only */}
      <section className="py-24 px-6" style={{backgroundColor: 'var(--oculto-black)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-8">
              <span className="text-accent text-sm font-medium tracking-wider uppercase">New • Beta</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-8 font-light tracking-tight"><span style={{color: 'var(--oculto-crimson)'}}>Insiders</span> Only</h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light opacity-90">
              You don't apply. You get referred. Every member of Oculto City enters by invitation or whispers from someone already inside. Here, influence replaces advertising.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(255, 29, 116, 0.2)'}}>
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl md:text-2xl mb-2 font-normal tracking-tight">Invitation Only</h3>
                <p className="text-sm text-white/70">Exclusive access through trusted referrals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(255, 29, 116, 0.2)'}}>
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl md:text-2xl mb-2 font-normal tracking-tight">Curated Network</h3>
                <p className="text-sm text-white/70">Hand-picked community of influencers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(255, 29, 116, 0.2)'}}>
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl md:text-2xl mb-2 font-normal tracking-tight">Elite Experiences</h3>
                <p className="text-sm text-white/70">Unforgettable moments, no compromises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Key - Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <Key className="w-16 h-16 mx-auto mb-8" style={{color: 'var(--oculto-crimson)'}} />
            <h2 className="text-4xl md:text-6xl mb-8 font-light tracking-tight">The <span style={{color: 'var(--oculto-crimson)'}}>Key</span></h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light opacity-90">
              Ready to step inside? Use your referral or reach out to our concierge for access.
            </p>
            
            <div className="space-y-6">
              <ContactButton />
              
              <div className="flex items-center justify-center space-x-8 text-sm text-white/60">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--oculto-crimson)'}}></div>
                  <span>Response within 2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-white/50">
            © 2024 Oculto City. All rights reserved. | Puerto Rico's most exclusive experiences.
          </p>
        </div>
      </footer>
    </main>
  );
}
