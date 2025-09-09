import React from 'react';
import { Play, Mic, Phone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 animate-float">
            <div className="p-3 rounded-2xl bg-gradient-primary shadow-glow">
              <Mic className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SpeechAI
            </h1>
          </div>

          {/* Hero Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Next-Generation{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Voice Agent
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your business with intelligent voice interactions. Handle inbound and outbound calls 
              with human-like AI that understands context, emotion, and intent.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Play className="h-5 w-5 mr-2" />
              Start Demo
            </Button>
            <Button variant="outline_glow" size="lg" className="w-full sm:w-auto">
              <Phone className="h-5 w-5 mr-2" />
              Schedule Call
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-voice-primary/20 hover:shadow-voice transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-4">
                <div className="p-3 rounded-xl bg-voice-primary/10 w-fit mx-auto">
                  <Phone className="h-6 w-6 text-voice-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Inbound Calls</h3>
                <p className="text-muted-foreground">
                  Intelligent call handling with natural conversation flow and instant responses.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-voice-secondary/20 hover:shadow-voice transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-4">
                <div className="p-3 rounded-xl bg-voice-secondary/10 w-fit mx-auto">
                  <Mic className="h-6 w-6 text-voice-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Outbound Campaigns</h3>
                <p className="text-muted-foreground">
                  Automated outreach with personalized messaging and intelligent lead qualification.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-voice-glow/20 hover:shadow-voice transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-4">
                <div className="p-3 rounded-xl bg-voice-glow/10 w-fit mx-auto">
                  <Zap className="h-6 w-6 text-voice-glow" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Real-time AI</h3>
                <p className="text-muted-foreground">
                  Lightning-fast responses with context awareness and emotional intelligence.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-voice-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-voice-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;