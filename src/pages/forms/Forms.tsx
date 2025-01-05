import React, { useState } from "react";
import { View, Heading } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { SkipCreateForm,SkipUpdateForm } from '../../../ui-components';
import { useNavigate } from "react-router-dom";
const Forms = () => {
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
        <h2> Skip Form </h2>
         <br />
         {showSuccessMessage && <div>Form submitted successfully!</div>}
         {id ? (
           <SkipUpdateForm id={id} onSuccess={handleSuccess} />
         ) : (
           <SkipCreateForm onSuccess={handleSuccess} />
         )}
      </View>
    </>
  );
};

export default Forms;
