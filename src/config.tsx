import React from "react";
import { Icon } from "@aws-amplify/ui-react";

import {
  MdDashboard,
  MdModeEditOutline,
  MdAccountBox,
  MdOutlineTableChart,
  MdAcUnit,
  MdAdUnits,
  MdAccountBalance
} from "react-icons/md";

import {
  GiNuclearWaste
} from "react-icons/gi";

export const baseConfig = {
  projectLink: "/", // GitHub link in the navbar
  docsRepositoryBase: "", // base URL for the docs repository
  titleSuffix: "",
  search: false,
  header: true,
  headerText: "KC Recycling Skip Management",
  footer: true,
  footerText: (
    <>
      <span>
        © {new Date().getFullYear()},Honey Trading Ltd. All rights reserved.

      </span>
    </>
  ),

  logo: (
    <>
      <img
        src={"../public/logo.png"}
        alt="logo"
        width="30"
        height="22"
      />
    </>
  ),
};

/// Navigation sidebar
export const appNavs = [
  {
    eventKey: "dashboard",
    icon: <Icon as={MdDashboard} />,
    title: "Dashboard",
    to: "/",
  },

  {
    eventKey: "tables",
    icon: <Icon as={MdAcUnit } />,
    title: "Skip Management",
    to: "/tables"
  },
  {
    eventKey: "forms",
    icon: <Icon as={MdAdUnits} />,
    title: "Order Management",
    to: "/forms",
    /**children: [
        {
          icon: <Icon as={MdOutlineTableChart} />,
          eventKey: "basic-table",
          title: "My Orders",
          to: "/tables",
        },{
        eventKey: "form-basic",
        title: "Add Order",
        to: "/forms",
      },
      {
        eventKey: "form-wizard",
        title: "Edit Form",
        to: "/edit-form",
      },
    ], */
  },
   {
      eventKey: "tables",
      icon: <Icon as={MdAccountBalance  } />,
      title: "Weighbridge Management",
      to: "/tables"
    },
  {
    eventKey: "profile",
    icon: <Icon as={MdAccountBox} />,
    title: "Audit Trail",
    to: "/profile",
  },
];
