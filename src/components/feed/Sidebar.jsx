import { SidebarWrapper, Nav } from "../../styles/FeedStyles";
import { Profile } from "../../styles/FeedStyles";
import {
  BiHomeCircle as Home,
  BiHash as Hash,
  BiGroup as Group,
  BiBookmark as Bookmark,
  BiUser as User,
} from "react-icons/bi";

import { BsBellFill as Bell } from "react-icons/bs";
import { GiFeather as Feather } from "react-icons/gi";
import {
  AiOutlineMail as Mail,
  AiOutlineTwitter as Twitter,
} from "react-icons/ai";
import { CgMoreO as More } from "react-icons/cg";

export default function Sidebar() {
  const nav = [
    {
      icon: <Twitter />,
      route: "/",
    },
    {
      icon: <Home />,
      route: "/",
    },
    {
      icon: <Hash />,
      route: "/",
    },
    {
      icon: <Group />,
      route: "/",
    },
    {
      icon: <Bell />,
      route: "/",
    },
    {
      icon: <Mail />,
      route: "/",
    },
    {
      icon: <Bookmark />,
      route: "/",
    },
    {
      icon: <User />,
      route: "/",
    },
    {
      icon: <More />,
      route: "/",
    },
  ];
  return (
    <SidebarWrapper>
      {nav.map((i, index) => (
        <Nav to={i.route} key={index}>
          {i.icon}
        </Nav>
      ))}
      <div className="feather">
        <Feather />
      </div>
      <Profile />
    </SidebarWrapper>
  );
}
