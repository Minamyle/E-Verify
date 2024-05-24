import RegisterationCard from "../components/RegisterationCard"

const RegisterScreen = () => {
    return (
        <div className="w-[100vw] h-[100vh] container mx-auto flex flex-row items-center nunito justify-center max-w-[100vw] overflow-x-hidden">
            <RegisterationCard>
                <div className="w-6/12 px-12 z-10 flex flex-col justify-center items-start h-[100vh]">
                    <h1 className="text-5xl min-w-[40rem] xl:text-7xl leading-[5rem] font-[500]">Are you registering <br /> as a <span className="text-red-500 font-[600]">Worker</span> or as a <br /> <span className="text-yellow-400 font-[600]">Company</span></h1>
                    <button className="border-2 text-xl text-[#2917FC] font-[600] mt-20 w-48 border-[#2917FC] px-8 py-3 rounded-xl">Worker</button>
                    <button className="border-2 text-xl text-[#2917FC] font-[600] w-48 mt-5 border-[#2917FC] px-8 py-3 rounded-xl">Company</button>
                </div>
            </RegisterationCard>
        </div>
    )
}

export default RegisterScreen