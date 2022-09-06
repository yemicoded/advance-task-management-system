import { FaBookOpen } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { TbMessageCircle, TbUserCircle } from "react-icons/tb";

export const pageNavs = [
  {
    title: "Overview",
    route: "/",
    icon: <BiCategoryAlt size={30} />,
  },
  {
    title: "Task",
    route: "/task",
    icon: <HiOutlineBookOpen size={30} />,
  },
  {
    title: "Mentors",
    route: "/mentors",
    icon: <TbUserCircle size={30} />,
  },
  {
    title: "Message",
    route: "/message",
    icon: <TbMessageCircle size={30} />,
  },
  {
    title: "Settings",
    route: "/settings",
    icon: <FiSettings size={30} />,
  },
];
