import { useState } from 'react'
import RegisterationCard from '../components/RegisterationCard'
const Address = () => {
    const [tab, setTab] = useState("address");
    return (
        <div className="w-[100vw] h-[100vh] pl-[7.5%] flex flex-row items-center nunito justify-center max-w-[100vw] overflow-x-hidden">
            <RegisterationCard>
                {
                    tab == "address" ?
                        <div className="w-6/12 px-12 z-10 flex flex-col gap-6 justify-center items-start h-[100vh]">
                            <h1 className='text-2xl'>Address</h1>
                            <div className='flex flex-col w-[100%]'>
                                <span>Address</span>
                                <input className='border bg-slate-100 mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-3' placeholder='' />
                            </div>
                            <div className='flex flex-col w-[100%]'>
                                <span>LGA</span>
                                <input className='border bg-slate-100 mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-3' placeholder='' />
                            </div>
                            <div className='flex flex-col w-[100%]'>
                                <span>state</span>
                                <input className='border bg-slate-100 mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-3' placeholder='' />
                            </div>
                            <div className='flex flex-col w-[100%]'>
                                <span>Country</span>
                                <input className='border bg-slate-100 mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-3' placeholder='' />
                            </div>

                            <div className='flex mt-16 max-w-[30rem] items-center justify-between w-[100%]'>
                                <button className='border border-red-400 py-2 px-6 text-[15px] text-red-500 rounded-xl'>Add new address</button>
                                <button className=' bg-red-400 text-white py-2 px-20 text-[15px] rounded-xl'  onClick={() => setTab('admin')}>Next</button>
                            </div>
                        </div> : tab == "admin" ?
                            <div className="w-6/12 px-12 z-10 flex flex-col gap-6 justify-center items-start h-[100vh]">
                                <h1 className='text-2xl'>Company Admin User</h1>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>Company user</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>User phone no</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>User email</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>Gender</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>User Position</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>User address</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>User phone no</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>


                                <div className='flex mt-16 max-w-[30rem] items-center justify-between w-[100%]'>
                                    <button className='border border-red-400 py-2 px-6 text-[15px] text-red-500 rounded-xl'>Add new admin</button>
                                    <button className=' bg-red-400 text-white py-2 px-20 text-[15px] rounded-xl' onClick={() => setTab('adin')}>Next</button>
                                </div>
                            </div>
                            : tab == "admn" ? <div className="w-6/12 px-12 z-10 flex flex-col gap-6 justify-center items-start h-[100vh]">
                                <h1 className='text-2xl'>Education</h1>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>School</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>State</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>Degree</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>Course</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>Gender</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>

                                <div className='flex gap-12 max-w-[27.5rem]'>
                                    <div className='flex flex-col relative w-[50%]'>
                                        <span className=' bg-white left-6 text-[14px] px-2'>Start Year</span>
                                        <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                    </div>

                                    <div className='flex flex-col relative w-[50%]'>
                                        <span className=' bg-white left-6 text-[14px] px-2'>Finish Year</span>
                                        <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                    </div>
                                </div>

                                <div className='flex items-center gap-3 mt-3'>
                                <input type='checkbox' className='' placeholder='' />
                                <p>I am still schooling here</p>
                                </div>

                                <div className='flex mt-16 max-w-[30rem] items-center justify-between w-[100%]'>
                                    <button className='border border-red-400 py-2 px-6 text-[15px] text-red-500 rounded-xl'>Add new Education</button>
                                    <button className=' bg-red-400 text-white py-2 px-20 text-[15px] rounded-xl'>Next</button>
                                </div>
                            </div> : <div className="w-6/12 px-12 z-10 flex flex-col gap-6 justify-center items-start h-[100vh]">
                                <h1 className='text-2xl'>Education</h1>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>School</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>State</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>Degree</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>Course</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>
                                <div className='flex flex-col relative w-[100%]'>
                                    <span className='absolute bg-white left-6 text-[14px] px-2'>Gender</span>
                                    <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                </div>

                                <div className='flex gap-12 max-w-[27.5rem]'>
                                    <div className='flex flex-col relative w-[50%]'>
                                        <span className=' bg-white left-6 text-[14px] px-2'>Start Year</span>
                                        <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                    </div>

                                    <div className='flex flex-col relative w-[50%]'>
                                        <span className=' bg-white left-6 text-[14px] px-2'>Finish Year</span>
                                        <input className='border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2' placeholder='' />
                                    </div>
                                </div>

                                <div className='flex items-center gap-3 mt-3'>
                                <input type='checkbox' className='' placeholder='' />
                                <p>I am still schooling here</p>
                                </div>

                                <div className='flex mt-16 max-w-[30rem] items-center justify-between w-[100%]'>
                                    <button className='border border-red-400 py-2 px-6 text-[15px] text-red-500 rounded-xl'>Add new Education</button>
                                    <button className=' bg-red-400 text-white py-2 px-20 text-[15px] rounded-xl'>Next</button>
                                </div>
                            </div>
                }
            </RegisterationCard>
        </div>
    )
}

export default Address