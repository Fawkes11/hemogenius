
import GelCard from "../components/gelCard";
import Sidebar from "../components/sidebar";




const Dashboard = () => {



    return (
        <div className="flex justify-center items-center">
            <div className="w-full h-auto  md:min-h-screen max-w-[2100px] flex flex-col md:flex-row items-center justify-between">
                <Sidebar />
                <GelCard />
            </div>
        </div>
    )
}

export default Dashboard