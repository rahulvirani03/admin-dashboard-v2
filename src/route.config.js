import Home from "@pages/Home";
import routeConstants from "@utils/routeConstants";
import SellerVerification from "@pages/SellerVerification";
import SellerView from "@pages/SellerView";
import Dashboard from "@pages/Dashboard";

export const routeConfig = {
    home: {
        component: Home,
        ...routeConstants.home
    },
    dashboard: {
        component: Dashboard,
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