import React from "react";
import { Menu, MenuItem, MenuButton, Link } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { baseConfig } from "../../config";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { FaUserCircle } from "react-icons/fa";
const HeaderNav = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator();

 return (
    <>
    {/* {baseConfig.projectLink ? (
        <div className="github-link">
          <Link
            href={baseConfig.projectLink}
            isExternal={true}
            ariaLabel="github"
          >
            <AiFillGithub />
          </Link>
        </div>
      ) : (
        <></>
      )}
*/}
      <Menu
        menuAlign="end"
        trigger={
          <MenuButton variation="menu">
            <div className="header-avatar">
              <FaUserCircle size={24} />

            </div>
          </MenuButton>
        }
      >
      {/*  <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>*/}
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderNav;
