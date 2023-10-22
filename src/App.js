import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex flex-row  bg-gray-300'>
          <div className='w-[200px] mt-2
            h-screen bg-slate-700 border rounded-lg  flex
            flex-col  gap-1   space-y-4 '>
            <p className=' mt-2 text-white flex flex-row gap-2  items-center
              text-lg ml-3  font-bold text-green-300'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
    Bell Labs</p>
            <div className=' p-[0.5px] bg-gray-500 w-[200px]'></div>
            <p className=' mt-2 text-white flex flex-row ml-2 gap-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
     Dashboard</p>
            <p className=' mt-2 text-white flex flex-row ml-2 gap-2' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
    Projects</p>
            <p className='mt-2  bg-green-400  items-center p-3 w-[200px] text-white flex flex-row  gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
    Tasks</p>
            <p className='mt-2 text-white flex flex-row ml-2 gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
    Services</p>
            <p className='mt-2 text-white flex flex-row ml-2 gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
    Chat</p>
          </div>
    
    <div>
      <div className='w-[1300px] flex flex-row ml-2 mt-3 border rounded-md bg-slate-50  items-center h-12    gap-80'>
            <input className='  bg-gray-100 rounded-md outline-none  w-80 h-8' placeholder=' Search...'></input>
            <p  className=' text-gray-600'>Friday, 5 june</p>
            <ul className='   border  rounded-md space-x-1 '>
              <button  className='text-white rounded bg-black gap-2 p-1 text-base'>List view</button>
              <button className=' bg-gray-100 text-black text-base'>Grid view</button> 
            </ul>
      </div>
      <div className='w-[1300px] bg-black ml-2 mt-4 rounded-md h-[450px]'>
        <h1  className= ' mt-2 ml-5 text-3xl   text-white'>Latest Tasks</h1>
        <div className='flex flex-row items-center justify-between'>
           <p className=' ml-5 text-gray-400 flex flex-col'>A list of all the users in your account including their name, title, email and <span>role.</span></p>
           <button className=' border outline-none  p-2 rounded-lg px-2 bg-green-600 mx-[60px] text-white'>Add more people</button>
        </div>
        
        <div>
          <div className=' border rounded w-[1200px] bg-gray-600 ml-10 mt-8'>
          <div className='flex flex-row items-center border-gray-600 rounded-lg bg-gray-700 gap-80 h-[40px] '>
           <p className='text-white ml-5 gap-2 flex flex-row'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
    </svg>
    Name</p> <p className='text-white'>Title</p> <p className='text-white ml-[75px]'>Role</p>
           
          </div>
          
          <div className='flex flex-row items-center   gap-72 h-[40px]  bg-white border-2 border-gray-200 border-l-indigo-500'>
            <p className='ml-5 flex flex-row gap-2 text-blue-500'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
    </svg>
    <span className=' text-green-600 text-base font-bold '>John Smith</span></p> <p className=' -ml-3  text-gray-600'>Back-end Developer</p> <p className=' -ml-2 text-gray-600'>Member<span className='text-green-600 ml-20  '>Edit</span></p>
          </div>
          <div className='flex flex-row items-center gap-80 h-[40px]  bg-white'>
          <p className='ml-5 flex flex-row gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
    </svg>
    <span className=' text-gray-600'>jane Doe</span></p> <p className=' -ml-5 text-gray-600'>Full-stack Developer</p> <p className=' -ml-10 text-gray-600'>Admin<span className='text-green-600  ml-[90px]  '>Edit</span></p>
          </div>
          <div className='flex flex-row items-center  gap-72 h-[40px]  bg-white border-2 border-gray-200 border-l-indigo-500 '>
          <p className='ml-5  text-base font-bold flex flex-row gap-2 text-blue-500'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
    </svg>
    <span className=' text-green-600 text-base font-bold  '>Bob Johnson</span></p> <p className=' -ml-6 text-gray-600'>UI Designer</p> <p className=' ml-14 text-gray-600'>Member<span className='text-green-600  ml-[74px]  '>Edit</span></p>  
          </div>
          <div className='flex flex-row items-center gap-72 h-[40px]  bg-white'>
          <p className='ml-5 text-gray-600    flex flex-row gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
    </svg>
    <span className=' text-gray-600'>Sarah Lee </span></p> <p className=' ml-2 text-gray-600'>Front-end Developer</p> <p className=' -ml-3 text-gray-600'>Admin<span className='text-green-600  ml-[90px]  '>Edit</span></p>
          </div>
          <div className='flex flex-row items-center  gap-80 h-[40px]  bg-white border-2 border-gray-200 border-l-indigo-500 '>
          <p className='ml-5 text-base font-bold  flex flex-row gap-2 text-blue-500'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
    </svg>
    <span className=' text-green-600 text-base font-bold '>Tom Brown </span></p> <p className=' -ml-11 text-gray-600'>Back-end Developer</p> <p className=' -ml-10 text-gray-600'>Member<span className='text-green-600  ml-[80px] '>Edit</span></p>
          </div>
          <div className='flex flex-row items-center gap-72 h-[40px]  bg-white'>
          <p className='ml-5 text-gray-600  flex flex-row gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
    </svg>
    <span className=' text-gray-600'>Emily Davis </span></p> <p className=' -ml-2 text-gray-600'>Full-end Developer</p> <p className=' ml-1 text-gray-600'>Admin<span className='text-green-600  ml-[95px] '>Edit</span></p>
          </div>
          
    
          </div>
          
        </div>
    
      </div>
      <div className=' flex flex-row  gap-72'>
      <div className=' bg-white w-[500px] h-[200px] ml-2 mt-2  shadow-lg rounded-lg  space-y-2'>
        <h1 className=' text-2xl font-bold ml-32 mt-2'>Projects in progress</h1>
        <div  className='flex flex-row space-x-5 ml-32 mt-8'>
          <p className=' p-1  text-sm rounded  bg-pink-300'>Deployment in progress </p>
          <p className='p-1 rounded text-sm  bg-yellow-200'> Build failed</p>
        </div>
        <p className='ml-32 mt-8 text-lg text-gray-800'>Improve code quality</p>
        <p className='ml-32 mt-8  text-xs text-gray-800'>Raised by Manu Arora, 2 hours ago</p>
        <div className='flex flex-row ml-32 mt-2'>
          <p className='flex flex-row text-gray-400 text-xs'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
    17 comments</p>
          <p className='flex flex-row text-xs text-gray-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
    </svg>
     23 files modified</p>
        </div>
       
    
      </div>
      <div className=' bg-green-600 w-[500px] h-[200px] ml-2 mt-2  shadow-lg rounded-lg  space-y-2'>
        <h1 className=' text-2xl text-white font-bold ml-32 mt-2'>Projects Completed</h1>
        <div  className='flex flex-row space-x-5 ml-32 mt-8'>
          <p className=' p-1  text-sm rounded  bg-green-200'>Deployment in progress </p>
          <p className='p-1 rounded text-sm  bg-green-200'> Build passing</p>
        </div>
        <p className='ml-32 mt-8 text-lg text-white'>Deploy hotfix</p>
        <p className='ml-32 mt-8  text-xs text-white'>Raised by Manu Arora, 17 hours ago</p>
        <div className='flex flex-row ml-32 mt-2'>
          <p className='flex flex-row text-white text-xs'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
    12 comments</p>
          <p className='flex flex-row text-xs text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
    </svg>
     2 files modified</p>
        </div>
       
    
      </div>
    
      </div>
      
    
      
      <div>
    
      </div>
    
    
    
    
    </div>
    
    
    </div>
       
      )
}

export default App;
