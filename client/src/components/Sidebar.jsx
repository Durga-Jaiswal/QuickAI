import { Protect, useClerk, useUser } from "@clerk/clerk-react"
import { NavLink } from "react-router-dom";
import { Eraser, FileText, Hash, House, Image, LogOut, Scissors, SquarePen, User, } from 'lucide-react';

const navItems = [
    { key: 1, to: "/ai", label: "Dashboard", Icon: House },
    { key: 2, to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
    { key: 3, to: "/ai/blog-title", label: "Blog Titles", Icon: Hash },
    { key: 4, to: "/ai/generate-image", label: "Generate Images", Icon: Image },
    { key: 5, to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
    { key: 6, to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
    { key: 7, to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
    { key: 8, to: "/ai/community", label: "Community", Icon: User },

]
const Sidebar = ({ sidebar, setSidebar }) => {

    const { isLoaded, user } = useUser();
    const { signOut, openUserProfile } = useClerk();

    console.log(user);
    if (!isLoaded) return (
        <div className="w-60 h-screen flex justify-center items-center">
            <div className="w-6 h-6 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center
  sm:static sm:translate-x-0 max-sm:absolute top-14 bottom-0 transition-all duration-300 ease-in-out
  ${sidebar ? 'translate-x-0' : '-translate-x-full'}
`}>

            <div className="my-7 w-full">
                <img src={user.imageUrl} alt="user-image" className="w-12 rounded-full mx-auto" />
                <h1 className="mt-1 text-center">{user?.username ? ` ${user.username}` : "Guest-Name"}</h1>
                <div className="px-6 mt-5 text-sm text-gray-600 font-medium">
                    {navItems.map(({ key, to, label, Icon }) => (
                        <NavLink
                            key={key}
                            to={to}
                            end={to === '/ai'}
                            onClick={() => setSidebar(false)}
                            className={({ isActive }) => `px-3.5 py-2.5 flex items-center gap-3 rounded ${isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' : ""}`}
                        >
                            {({ isActive }) => (
                                <>
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''} `} />
                                    {label}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
                <div onClick={openUserProfile} className="flex gap-2 items-center cursor-pointer">
                    <img src={user.imageUrl} className="w-8 rounded-full" alt="User - Image" />
                    <div>
                        <p className="font-medium text-sm">{user?.fullName ? ` ${user.fullName}` : "Guest-Name"}</p>
                        <p className="text-xs text-gray-500">
                            <Protect plan='premium' fallback="Free ">Premium </Protect>
                            Plan
                        </p>
                    </div>
                </div>
                <LogOut onClick={signOut} className=' w-4.5 text-gray-400 hover: text-gray-700 transition cursor-pointer' />
            </div>
        </div>
    )
}

export default Sidebar