import { useState } from "react";
import { useNavigate } from "react-router";
import { GoHomeFill, GoPerson,GoInbox } from "react-icons/go";

import styles from "./NavBar.module.css";

const ICONS = {
  home: <GoHomeFill size={24}/>,
  search: <GoInbox size={24}/>,
  profile: <GoPerson size={24}/>
};

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  const tabs = [
    { id: 'home', label: 'Главная', path: "/" },
    { id: 'search', label: 'Поиск', path: "/search" },
    { id: 'profile', label: 'Профиль', path: "/profile" },
  ];

  return (
    <nav className={styles.container}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.item} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => { setActiveTab(tab.id); navigate(tab.path); }}
        >
          {ICONS[tab.id as keyof typeof ICONS]}
          <span>{tab.label}</span>
        </div>
      ))}
    </nav>
  );
};
