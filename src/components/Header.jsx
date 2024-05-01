
import avatar from "../assets/images/avatar.png"


export default function Header() {
    return (
        <div className="bg-slate-800 p-4">
            <div className="flex items-center justify-between w-11/12 mx-auto">
                <div className="text-white text-2xl">Todo <span className="text-green-300">Application</span> </div>
                <div className="flex items-center gap-3">
                    <img src={avatar} alt="" className="w-12 h-12" />
                    <div className="text-white capitalize">john doe</div>
                </div>
            </div>
        </div>
    )
}