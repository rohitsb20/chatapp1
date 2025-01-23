import {TiMessages} from "react-icons/ti"

export default function Nochat() {
  return (
    <div className=" w-full h-full flex pt-20 justify-center">
        <div className="px-4 text-center sm:text-lg md:text-xl
        text-black font-semibold flex flex-col items-center gap-2">
<p>Welcome 👋 JHON DOE</p>
<p>Select a chat to start Messaging..</p>
<TiMessages className="text-3xl md:text-6xl text-center" />
        </div>

    </div>
  )
}
