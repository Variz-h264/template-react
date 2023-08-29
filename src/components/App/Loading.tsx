export const Loading = ({ msg }: { msg: string }) => {
  return (
    <>
      <div className="backdrop-blur-sm min-h-screen w-full bg-black/50 flex justify-center items-center animate-fade-in">
          <div className="mx-auto">
            <img className="rounded-lg mx-auto" src="https://media.tenor.com/RVvnVPK-6dcAAAAC/reload-cat.gif" alt="" />

            <h1 className="text-3xl text-white text-center font-bold mt-4">{msg}</h1>
          </div>
      </div>
    </>
  );
};
