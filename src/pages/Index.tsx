import AnimalGame from '@/components/AnimalGame';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-8">Doe een Dier Na!</h1>
        <AnimalGame />
      </div>
    </div>
  );
};

export default Index;