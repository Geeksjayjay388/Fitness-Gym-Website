import ReviewCard from "../components/ReviewCard";
function Blogs() {
  return (
    <main className="">
      <div className="bg-[url('https://c4.wallpaperflare.com/wallpaper/317/334/429/working-out-exercise-barbell-gyms-wallpaper-preview.jpg')] bg-cover bg-center bg-no-repeat w-screen h-47 text-2xl font-bold mb-4">
         <div className="flex items-center font-bold justify-center h-full bg-black/50 ">
          <h1 className="text-white text-4xl uppercase font-bold">User Reviews</h1>
         </div>
          
        </div>
      <ReviewCard />
    </main>
  );
};

export default Blogs;