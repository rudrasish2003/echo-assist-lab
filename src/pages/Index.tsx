import Hero from '@/components/Hero';
import Features from '@/components/Features';
import VoiceChatbot from '@/components/VoiceChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <VoiceChatbot />
    </div>
  );
};

export default Index;
