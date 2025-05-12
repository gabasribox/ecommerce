"use client";

import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FiMenu } from "react-icons/fi";
import "./sidebar.css";

/* Sidebar Type */
type SidebarProps = {
  children: ReactNode;
};

/* Path of the Tabs */
const links = [
  { href: "/admin/dashboard", title: "Admin Dashboard", label: "Dashboard" },
  { href: "/admin/dashboard/orders", title: "Orders Page", label: "Orders" },
  { href: "/admin/dashboard/products", title: "Products Page", label: "Products" },
  { href: "/admin/dashboard/clients", title: "Clients Page", label: "Clients" },
];

const Sidebar = ({ children }: SidebarProps) => {
  /* To use a Path of the Tabs */
  const pathname = usePathname();
  
  /* To use a Button to Collapse and Open the Sidebar*/
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsOpen(true);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  if (!isMounted) return null;

  /* To define the current page as selected in the sidebar */
  const current_page = links.find(
    link => pathname === link.href || 
    (link.href !== "/admin/dashboard" && pathname.startsWith(link.href))
  );

  const page_title = current_page?.title ;

  /* The Component */
  return (
    <div className="flex">
      {/* Button to Open and Collapse the Sidebar */}
      {isMounted && (
        <button 
          onClick={toggleSidebar}
          className="toggle-button"
        >
          <FiMenu size={20} />
        </button>
      )}

      {/* The Sidebar */}
      <aside className={`sidebar-styles ${isOpen ? "" : "translate-opened"}`}>
        <div className="sidebar-content">
          
          {/* Sidebar Title */}
          <div className="p-5">
            <h1 className="sidebar-title">
              Sidebar
            </h1>
          </div>

          <div className="sidebar-division"/>
          
          {/* Buttons to Access the Sidebar Tabs */}
          <nav>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`sidebar-items ${pathname === link.href ? "selected-item" : "unselected-item"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sidebar-division"/>

          {/* The Sidebar Logout Button */}
          <button className="logout-button">
            Logout
          </button>
          
          {/* The text in the bottom content the version of the application */}
          <div className="text-bottom">
            <div className="version-text">
              Version 1.0.0
            </div>
          </div>
        </div>
      </aside>

      {/* The content children of the sidebar */}
      <main className={`sidebar-children ${isOpen ? "md:ml-64" : "ml-0"}`}>
        {page_title && (
          <h1 className="children-title">
            {page_title}
          </h1>
        )}
        {children}
      </main>
    </div>
  );
}

export default Sidebar;