import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div className="w-screen h-screen bg-slate-400 relative">
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/2 rounded-md  bg-black bg-opacity-30'>
        <div className='w-full h-full flex justify-center items-center'>
          <Login/>  
          </div>
        </div>
    </div>
  )
}

export default LoginPage