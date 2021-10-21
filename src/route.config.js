import Home from "@pages/Home";
import routeConstants from "@utils/routeConstants";
import AdminDashboard from "@pages/Dashboard";
import SellerVerification from "@pages/SellerVerification";

export const routeConfig = {
    home: {
        component: Home,
        ...routeConstants.home
    },
    dashboard: {
        component: AdminDashboard,
        ...routeConstants.dashboard
    },
    seller: {
        component: SellerVerification,
        ...routeConstants.seller
    }
}