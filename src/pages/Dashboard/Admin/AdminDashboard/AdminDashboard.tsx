
import MetricsCards from "./MetricsCards";
import ChartsSection from "./ChartsSection";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";
import WelcomeHeaderAdmin from "./WelcomeHeaderAdmin";


const AdminDashboard = () => {
  

    return (
        <div className="bg-gray-100">

           
            <WelcomeHeaderAdmin></WelcomeHeaderAdmin>

            <MetricsCards />
            <ChartsSection />
            <RecentActivity />
            <QuickActions />



        </div>
    );
};

export default AdminDashboard;