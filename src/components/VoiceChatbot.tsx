import React, { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX, MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const VoiceChatbot = () => {
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isConnected) {
      setIsConnected(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Chat Interface */}
      {isExpanded && (
        <Card className="mb-4 w-80 h-96 bg-card border-voice-primary/20 shadow-card">
          <div className="p-4 border-b border-voice-primary/20 bg-gradient-glow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-voice-primary animate-pulse-glow"></div>
                <span className="text-sm font-medium text-foreground">SpeechAI Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleExpanded}
                className="h-6 w-6 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {isConnected ? (
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    👋 Hi! I'm your AI voice assistant. How can I help you today?
                  </p>
                </div>
                
                {isListening && (
                  <div className="bg-voice-primary/10 p-3 rounded-lg border border-voice-primary/20">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 h-6 bg-voice-primary animate-voice-wave rounded-full"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-voice-primary">Listening...</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <MessageSquare className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Click the voice button to start your conversation</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-voice-primary/20 bg-gradient-glow">
            <div className="flex items-center justify-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              
              <Button
                variant={isListening ? "destructive" : "voice"}
                size="icon"
                onClick={toggleListening}
                className={`h-12 w-12 rounded-full ${isListening ? 'animate-pulse-glow' : ''}`}
              >
                {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Floating Voice Button */}
      <div className="relative">
        <Button
          variant="voice"
          size="icon"
          onClick={isExpanded ? toggleListening : toggleExpanded}
          className={`h-14 w-14 rounded-full shadow-voice ${
            isListening ? 'animate-pulse-glow' : 'hover:scale-110'
          } transition-all duration-300`}
        >
          {isExpanded && isListening ? (
            <MicOff className="h-6 w-6" />
          ) : isExpanded ? (
            <Mic className="h-6 w-6" />
          ) : (
            <MessageSquare className="h-6 w-6" />
          )}
        </Button>

        {/* Status indicator */}
        {isConnected && !isExpanded && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-voice-primary rounded-full animate-pulse-glow border-2 border-background"></div>
        )}
      </div>
    </div>
  );
};

export default VoiceChatbot;