import { Link,useNavigate } from 'react-router-dom'

const Menus = [
    "Home",
    "Series",
    "Film",
    "New and Popular",
    "MyList"
]


const Navbar = () => {

  const navigate = useNavigate(); 

  const navigateToHome = (e:any) => {
    if(e.target.innerText == 'Home')
      navigate("/")
  }
  return (
    <div className='w-full flex fixed items-center z-40'>
       <div className='px-7 py-5 ml-20 text-white flex gap-8 text-lg items-center'>
       <Link to="/"> <img className="h-16 cursor-pointer" src="https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" alt="logo"/>
       </Link>
        {
            Menus.map((item)=>(
                <div className='hover:text-gray-400 cursor-pointer' onClick={navigateToHome}><p>{item}</p></div>    
            ))
        }                 
       </div>       
    </div>
  )
}

export default Navbar