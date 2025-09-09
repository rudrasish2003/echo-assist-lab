import React from 'react';
import { 
  Brain, 
  Clock, 
  Globe, 
  Shield, 
  BarChart3, 
  Headphones,
  MessageSquare,
  Users,
  Smartphone
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Engine',
      description: 'Powered by cutting-edge language models with natural conversation capabilities and context understanding.',
      color: 'voice-primary'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a call. Your AI agent works around the clock to handle customer inquiries and business operations.',
      color: 'voice-secondary'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Communicate naturally in over 30 languages with accent recognition and cultural context awareness.',
      color: 'voice-glow'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with GDPR, HIPAA, and other industry standards for data protection.',
      color: 'voice-pulse'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Real-time call analytics, sentiment analysis, and performance metrics to optimize your voice strategy.',
      color: 'voice-primary'
    },
    {
      icon: Headphones,
      title: 'Human Handoff',
      description: 'Seamless transfer to human agents when needed, with full context and conversation history preserved.',
      color: 'voice-secondary'
    },
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Human-like dialogue with emotional intelligence, interruption handling, and contextual responses.',
      color: 'voice-glow'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Multiple agent personalities, role-based access, and team performance tracking for optimal results.',
      color: 'voice-pulse'
    },
    {
      icon: Smartphone,
      title: 'Omnichannel Integration',
      description: 'Seamlessly integrate with phone systems, CRM, messaging platforms, and existing business tools.',
      color: 'voice-primary'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Powerful Features for{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to revolutionize your voice interactions and customer experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-voice transition-all duration-300 hover:scale-105 group"
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-xl bg-${feature.color}/10 w-fit group-hover:bg-${feature.color}/20 transition-colors duration-300`}>
                    <Icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-voice-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              &lt;200ms
            </div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              30+
            </div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              1M+
            </div>
            <div className="text-sm text-muted-foreground">Calls Handled</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;