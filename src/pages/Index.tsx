import AnimalGame from '@/components/AnimalGame';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEF7CD] to-[#D3E4FD] py-8">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#8B5CF6] drop-shadow-lg">Doe een Dier Na!</h1>
        <AnimalGame />
      </div>
    </div>
  );
};

export default Index;