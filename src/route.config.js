import Home from "@pages/Home";
import routeConstants from "@utils/routeConstants";
import AdminDashboard from "@pages/Dashboard";
import SellerVerification from "@pages/SellerVerification";
import SellerView from "@pages/SellerView";
import TempDashboard from "@pages/TempDashboard";

export const routeConfig = {
    home: {
        component: Home,
        ...routeConstants.home
    },
    dashboard: {
        component: TempDashboard,
        ...routeConstants.dashboard
    },
    verifyseller: {
        component: SellerVerification,
        ...routeConstants.verifyseller
    },
    viewseller: {
        component: SellerView,
        ...routeConstants.viewseller
    },
    

}