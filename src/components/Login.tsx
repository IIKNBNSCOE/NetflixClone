import { useState } from "react"
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className='text-white  h-full w-full'>
    <div className='flex flex-col gap-8 m-14 px-2'>
        <h1 className='font-bold text-2xl'>SignIn!</h1>
        <input className="py-1 rounded-sm text-black" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input className="py-1 rounded-sm text-black" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <div className="px-2 py-2 bg-red-700 rounded-md cursor-pointer hover:opacity-50 w-full text-center text-lg text-white" >Sign In</div>
    </div>
     </div>
  )
}

export default Login