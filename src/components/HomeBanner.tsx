import { useNavigate } from 'react-router-dom'

const HomeBanner = () => {
  const navigate = useNavigate()

  const handleSignUp = (e:any) => {
    e.preventDefault();
    navigate("/login")
  }

  return (
    <div className="w-screen h-screen relative">
    { /* <img
        className="w-full h-full  "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />*/
    }

    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-no-repeat brightness-50 w-full h-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white font-semibold text-4xl">
          {" "}
          Unlimited movies, TV shows and more{" "}
        </h1>
        <div className="flex justify-center mt-4">
        <div className="px-2 py-2 bg-red-700 rounded-md cursor-pointer hover:opacity-50 w-1/5 text-center text-lg text-white" onClick={handleSignUp}>Sign In</div>
        </div>
      
      </div>
    </div>
  );
};

export default HomeBanner;
