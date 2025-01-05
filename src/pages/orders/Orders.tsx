
import { View, Heading, ScrollView,Button } from "@aws-amplify/ui-react";
import OrdersTable from "./OrdersTable";
import { useNavigate } from "react-router-dom";


const Orders = () => {
 const navigate = useNavigate();

  const openForm = () => {
    navigate("/forms");
  };
  return (
    <>
       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2>Order Management</h2>
              <Button className="amplify-button--primary" onClick={openForm}>Create Order</Button>
       </div>


      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="1rem"
        minHeight="80vh"
      >
        <ScrollView width="100%">
          <OrdersTable />
        </ScrollView>
      </View>
    </>
  );
};

export default Orders;
