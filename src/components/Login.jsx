import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const Login = () => {
    
    const {User, saveLoginDetails} = useContext(UserContext)

    const navigate = useNavigate()
    const userDetails = [
        {'username':'Krishna','password':'123456','userrole':'admin'},
        {'username':'Rajesh','password':'1234567','userrole':'customer'},
        {'username':'Ramu','password':'1234567','userrole':'customer'},
    ]

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () =>{
        console.log(username,password);
        const validate = userDetails.find((u)=>
            u.username == username && u.password == password 
        )

        
        if(validate){
            saveLoginDetails({
                username: validate.username,
                password: validate.password,
                userrole: validate.userrole
            })
            alert('Validate')
            navigate('/')

        }else{
            alert('Not validate')
        }
    }
  return (
    <>
        <div className='border'>
            <form  action="">
                <div className='gap-10'>
                <label className='text-2xl font-semibold' htmlFor="username">Username</label>
                <input className=' border' type="text" name="username" id="username" onChange={(e)=>setUsername(e.target.value)} />
                </div>

                <div>
                <label className='text-2xl font-semibold' htmlFor="">Password</label>
                <input type="password" name="password" id='password' onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <button className='w-20 h-10 border rounded-2xl hover:bg-black hover:text-white hover:cursor-pointer' type='button' onClick={()=>handleSubmit()} >Submit</button>
            </form>
        </div>
    </>
  )
}
