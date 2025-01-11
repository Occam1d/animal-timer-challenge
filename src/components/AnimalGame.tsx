import React, { useState, useCallback } from 'react';
import { animals } from '@/lib/animals';
import { Player } from '@/lib/types';
import Timer from './Timer';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import { Button } from "@/components/ui/button";
import { Play, SkipForward } from 'lucide-react';

const AnimalGame = () => {
  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);

  const handleNextAnimal = () => {
    setIsTimerRunning(false);
    setCurrentAnimalIndex((prev) => (prev + 1) % animals.length);
  };

  const handleTimerComplete = () => {
    setIsTimerRunning(false);
  };

  const handleAddPlayer = (name: string) => {
    setPlayers((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name, score: 0 },
    ]);
  };

  const handleUpdateScore = useCallback((playerId: string, increment: boolean) => {
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === playerId
          ? { ...player, score: player.score + (increment ? 1 : -1) }
          : player
      )
    );
  }, []);

  const currentAnimal = animals[currentAnimalIndex];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={currentAnimal.imageUrl}
              alt={currentAnimal.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h2 className="text-2xl font-bold">{currentAnimal.name}</h2>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => setIsTimerRunning(true)}
              disabled={isTimerRunning}
              className="flex-1"
            >
              <Play className="mr-2 h-4 w-4" />
              Start
            </Button>
            <Button
              onClick={handleNextAnimal}
              variant="outline"
              className="flex-1"
            >
              <SkipForward className="mr-2 h-4 w-4" />
              Volgend Dier
            </Button>
          </div>
          <Timer isRunning={isTimerRunning} onComplete={handleTimerComplete} />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Scorebord</h2>
          <AddPlayer onAddPlayer={handleAddPlayer} />
          <PlayerList players={players} onUpdateScore={handleUpdateScore} />
        </div>
      </div>
    </div>
  );
};

export default AnimalGame;