import React from 'react';
import { Player } from '@/lib/types';
import { Button } from "@/components/ui/button";
import { Plus, Minus } from 'lucide-react';

interface PlayerListProps {
  players: Player[];
  onUpdateScore: (playerId: string, increment: boolean) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, onUpdateScore }) => {
  return (
    <div className="space-y-2">
      {players.map((player) => (
        <div key={player.id} className="flex items-center gap-2 p-2 bg-white rounded-lg shadow">
          <span className="flex-1 font-medium">{player.name}</span>
          <span className="px-3 py-1 bg-purple-100 rounded-md">{player.score}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onUpdateScore(player.id, false)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onUpdateScore(player.id, true)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;