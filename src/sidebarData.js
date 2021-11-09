import { Home, AccountCircleRounded, Subject, Storage, ShowChart } from "@material-ui/icons"

export const sidebarData = {}

sidebarData['test'] = [
    {
        title: "DashBoard",
        index: 1,
        path: "/dashboard",
        icon: <Home />

    },
    {
        title: "Profile",
        index: 2,
        path: "/profile",
        icon: <AccountCircleRounded />

    },
    {
        title: "Course Master",
        index: 2,
        path: "/master/course",
        icon: <Subject />

    },
    {
        title: "Field Master",
        index: 2,
        path: "/master/field",
        icon: <Storage />

    },
    {
        title: "Analysis",
        index: 2,
        path: "/profile",
        icon: <ShowChart />

    }
]


export default sidebarData