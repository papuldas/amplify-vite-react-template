
import { View, Heading } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { SkipCreateForm,SkipUpdateForm } from '../../../ui-components';
const Forms = () => {
  const { id } = useParams();

  return (
    <>

      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth={{ base: "100%", large: "70%" }}
        padding="1rem"
        minHeight="100vh"
      >
        <Heading color="#333"> Skip Form </Heading>
        <br></br>
         {id ? <SkipUpdateForm id={id} /> : <SkipCreateForm />}
      </View>
    </>
  );
};

export default Forms;
