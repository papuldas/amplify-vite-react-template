import React, { useState } from "react";
import { View, Heading } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { OrderCreateForm,OrderUpdateForm } from '../../../../ui-components';
import { useNavigate } from "react-router-dom";
const OrderForms = () => {
  const { id } = useParams();
  const navigate = useNavigate();
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSuccess = () => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate(`/tables`);
      }, 2000); // Adjust the timeout duration as needed
    };

  return (
    <>

      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth={{ base: "100%", large: "70%" }}
        padding="1rem"
        minHeight="100vh"
      >
        <h2> Order Details</h2>
         {showSuccessMessage && <div>Form submitted successfully!</div>}
         {id ? (
           <OrderUpdateForm id={id} onSuccess={handleSuccess} />
         ) : (
           <OrderCreateForm onSuccess={handleSuccess} />
         )}
      </View>
    </>
  );
};

export default OrderForms;
