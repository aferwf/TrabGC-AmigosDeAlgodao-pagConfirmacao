const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center p-6 sm:p-8">
      <div className="text-center max-w-2xl mx-auto space-y-8 animate-fade-in">
        <h1 className="font-nunito font-extrabold text-white text-5xl sm:text-6xl md:text-7xl leading-tight drop-shadow-lg">
          Inscrição Confirmada!
        </h1>
        
        <p className="font-nunito font-normal text-white text-xl sm:text-2xl md:text-3xl leading-relaxed drop-shadow-md px-4">
          Fique atento(a) à sua caixa de e-mail para receber as atualizações.
        </p>
        
        <p className="font-nunito font-normal italic text-white text-lg sm:text-xl md:text-2xl mt-12 drop-shadow-md">
          Com carinho, Loja Amigos de Algodão
        </p>
      </div>
    </div>
  );
};

export default Index;
