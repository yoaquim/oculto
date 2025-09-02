import { Key } from "lucide-react"
import { ContactButton } from "@/components/contact-button"
import { TextReveal } from "@/components/magicui/text-reveal"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import { VideoText } from "@/components/magicui/video-text"
import { TypingAnimation } from "@/components/magicui/typing-animation"
import { BoxReveal } from "@/components/magicui/box-reveal"
import { ColoredTyping } from "@/components/colored-typing"
import { ShinyText } from "@/components/shiny-text"
import { AuroraText } from "@/components/magicui/aurora-text"
import { FlickeringGrid } from "@/components/magicui/flickering-grid"

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden" style={{backgroundColor: '#191919', '--oculto-black': '#191919', '--oculto-military-green': '#4a5d23', '--oculto-crimson': '#ff1d74', '--oculto-deep-grey': '#1c1c1c', '--oculto-grey': '#2d2d2d', '--oculto-white': '#f8f8f8'} as React.CSSProperties}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#ffffff"
          maxOpacity={0.15}
          flickerChance={0.2}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl mb-6 leading-none tracking-tighter font-light">
              A Hidden World.
              <br />
              <div className="h-32 flex items-center justify-center">
                <VideoText 
                  src="/videos/nightlife.mp4" 
                  fontSize="20vw"
                  fontWeight="600"
                  className="w-full max-w-lg uppercase"
                >
                  CURATED.
                </VideoText>
              </div>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light text-white">
              This is Oculto City. Private dinners, underground nightlife, seamless exclusivity, and no maps allowed.
            </p>
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
            <ColoredTyping
              text="Culture in Motion"
              highlightWord="Motion"
              highlightColor="#ff1d74"
              className="text-4xl md:text-6xl mb-8 font-light tracking-tight"
              duration={80}
            />
            <p className="text-lg md:text-xl max-w-3xl font-light opacity-90">
              A curated reel of Puerto Rico's nightlife, sound, fashion, and movement. Here, island culture doesn't just exist—it pulses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Row 1 */}
            {/* Square 1: Video 1 */}
            <div className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300 relative border border-white/10" style={{background: 'linear-gradient(to bottom right, rgba(74, 93, 35, 0.2), rgba(139, 21, 56, 0.2))', boxShadow: '0 0 20px rgba(255, 29, 116, 0.15)'}}>
              <video 
                className="w-full h-full object-cover"
                src="/videos/1.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            
            {/* Square 2: Picture 5 */}
            <div className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300 relative border border-white/10" style={{background: 'linear-gradient(to bottom right, rgba(74, 93, 35, 0.2), rgba(139, 21, 56, 0.2))', boxShadow: '0 0 20px rgba(255, 29, 116, 0.15)'}}>
              <img 
                className="w-full h-full object-cover"
                src="/pictures/5.jpg"
                alt="Culture"
              />
            </div>
            
            {/* Square 3: Video 9 */}
            <div className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300 relative border border-white/10" style={{background: 'linear-gradient(to bottom right, rgba(74, 93, 35, 0.2), rgba(139, 21, 56, 0.2))', boxShadow: '0 0 20px rgba(255, 29, 116, 0.15)'}}>
              <video 
                className="w-full h-full object-cover"
                src="/videos/9.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            
            {/* Row 2 */}
            {/* Square 1: Picture 6 */}
            <div className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300 relative border border-white/10" style={{background: 'linear-gradient(to bottom right, rgba(74, 93, 35, 0.2), rgba(139, 21, 56, 0.2))', boxShadow: '0 0 20px rgba(255, 29, 116, 0.15)'}}>
              <img 
                className="w-full h-full object-cover"
                src="/pictures/6.jpg"
                alt="Culture"
              />
            </div>
            
            {/* Square 2: Video 7 */}
            <div className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300 relative border border-white/10" style={{background: 'linear-gradient(to bottom right, rgba(74, 93, 35, 0.2), rgba(139, 21, 56, 0.2))', boxShadow: '0 0 20px rgba(255, 29, 116, 0.15)'}}>
              <video 
                className="w-full h-full object-cover"
                src="/videos/7.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            
            {/* Square 3: Picture 7 */}
            <div className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300 relative border border-white/10" style={{background: 'linear-gradient(to bottom right, rgba(74, 93, 35, 0.2), rgba(139, 21, 56, 0.2))', boxShadow: '0 0 20px rgba(255, 29, 116, 0.15)'}}>
              <img 
                className="w-full h-full object-cover"
                src="/pictures/7.jpg"
                alt="Culture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Puerto Rico in La Sombra */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl mb-8 font-light tracking-tight inline-flex items-baseline gap-3">
                <span>Puerto Rico in</span>
                <BoxReveal boxColor="#ff1d74" duration={0.5} className="inline">
                  <span style={{color: 'var(--oculto-crimson)'}}>La Sombra</span>
                </BoxReveal>
              </h2>
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
            
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative border border-white/10" style={{background: 'linear-gradient(to bottom right, rgba(74, 93, 35, 0.3), rgba(10, 10, 10, 0.5))', boxShadow: '0 0 20px rgba(255, 29, 116, 0.15)'}}>
              <video 
                className="w-full h-full object-cover"
                src="/videos/3.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
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
            <h2 className="text-4xl md:text-6xl mb-8 font-light tracking-tight">
              <AuroraText 
                className="inline text-4xl md:text-6xl font-light tracking-tight"
                colors={["#ff1d74", "#ff5599", "#ff6b9d", "#ff4488", "#ff1d74"]}
              >
                Insiders
              </AuroraText>
              <span> Only</span>
            </h2>
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
            <div className="relative flex items-center justify-center mb-8 h-20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff1d74] via-[#ff6b9d] to-[#ff1d74] opacity-10 blur-lg"></div>
              </div>
              <Key className="w-16 h-16 relative z-10" style={{
                color: '#ff1d74',
                filter: 'drop-shadow(0 0 8px rgba(255, 29, 116, 0.3))'
              }} />
            </div>
            <h2 className="text-4xl md:text-6xl mb-8 font-light tracking-tight overflow-visible">
              The{" "}
              <span className="inline-block overflow-visible">
                <ShinyText className="text-4xl md:text-6xl font-medium tracking-tight">
                  Key
                </ShinyText>
              </span>
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light opacity-90">
              Ready to step inside? Use your referral or reach out to our concierge for access.
            </p>
            
            <div className="space-y-12">
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
