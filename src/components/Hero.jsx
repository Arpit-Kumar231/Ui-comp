import { Button } from "@/components/ui/button"



const Hero = () => {
    return (
      <div className="h-screen bg-black flex justify-end font-Hanken">
         <div className="h-[270px] w-[500px] mr-10 mt-[20px] border-[3px] border-current rounded-3xl  bg-gradient-to-r from-black via-black to-indigo-900 flex flex-col ">
         
          <div className="flex flex-row">
          <h1 className="text-indigo-700 text-3xl m-8 font-Hanken">Write Flawless mails with Merlin AI!</h1>
          <img src="./images/name.png"
            alt="" />
          </div>
          <div className="flex flex-row justify-around">
          <Button variant="ghost" className="text-slate-500 font-Hanken">Remind me later</Button>
          <Button variant="secondary" className="bg-indigo-700 text-white font-Hanken">Explore now</Button>
          
         </div>
         
         
          
          
  
         </div>
         <div class=" h-5 w-5 relative right-[500px] bg-black rotate-45 transform origin-bottom-left border-[3px] border-current border-b-0 border-r-0"></div>
         
         
         
  
      </div>
    )
  }
  
  export default Hero
