import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from 'lucide-react';

interface AddPlayerProps {
  onAddPlayer: (name: string) => void;
}

const AddPlayer: React.FC<AddPlayerProps> = ({ onAddPlayer }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddPlayer(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Voer naam in..."
        className="flex-1"
      />
      <Button type="submit">
        <Plus className="mr-2 h-4 w-4" />
        Voeg Speler Toe
      </Button>
    </form>
  );
};

export default AddPlayer;