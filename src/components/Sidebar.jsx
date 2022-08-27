import {
  SidebarHead,
  SidebarWrapper,
  Logo,
  SidebarNav,
  NavEl,
  Tweet,
  Profile,
  Image,
} from "../styles/SidebarStyles";
import {
  BiHomeCircle as Home,
  BiHash as Hash,
  BiGroup as Group,
  BiBookmark as Bookmark,
  BiUser as User,
} from "react-icons/bi";
import { BsBellFill as Bell } from "react-icons/bs";
import { AiOutlineMail as Mail } from "react-icons/ai";
import { CgMoreO as More } from "react-icons/cg";
export default function Sidebar() {
  const nav = [
    {
      icon: <Home />,
      label: "Home",
      route: "/",
    },
    {
      icon: <Hash />,
      label: "Explore",
      route: "/",
    },
    {
      icon: <Group />,
      label: "Communities",
      route: "/",
    },
    {
      icon: <Bell />,
      label: "Notifications",
      route: "/",
    },
    {
      icon: <Mail />,
      label: "Messages",
      route: "/",
    },
    {
      icon: <Bookmark />,
      label: "Bookmarks",
      route: "/",
    },
    {
      icon: <User />,
      label: "Profile",
      route: "/",
    },
    {
      icon: <More />,
      label: "More",
      route: "/",
    },
  ];
  return (
    <SidebarWrapper>
      <SidebarHead>
        <Logo />
      </SidebarHead>
      <SidebarNav>
        {nav.map((i) => (
          <NavEl key={i.label} to={`${i.route}`}>
            {i.icon}
            <span>{i.label}</span>
          </NavEl>
        ))}
      </SidebarNav>
      <Tweet>Tweet</Tweet>
      <Profile>
        <div className="profile">
          <Image />
          <div>
            <p>Mehul Mohan</p>
            <p>@mehulmpt</p>
          </div>
        </div>
        <div className="more">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Profile>
    </SidebarWrapper>
  );
}
