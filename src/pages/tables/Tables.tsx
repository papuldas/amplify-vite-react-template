
import { View, Heading, ScrollView,Button } from "@aws-amplify/ui-react";
import BasicTable from "./BasicTable";
//import UsersTable from "./UsersTable";
import { useNavigate } from "react-router-dom";

// const demoUsers = [{ name: "hello" }, { name: "hello" }];

const Tables = () => {
 const navigate = useNavigate();

  const openForm = () => {
    navigate("/forms");
  };
  return (
    <>
       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2>Skip Management</h2>
              <Button className="amplify-button--primary" onClick={openForm}>Add Skip</Button>
       </div>


      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="1rem"
        minHeight="80vh"
      >
        <ScrollView width="100%">
          <BasicTable />
        </ScrollView>
      </View>
    </>
  );
};

export default Tables;
