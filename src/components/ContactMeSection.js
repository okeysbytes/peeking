import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
   Box,
   Button,
   FormControl,
   FormLabel,
   FormErrorMessage,
   Heading,
   Input,
   Select,
   Textarea,
   VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
   const { isLoading, response, submit } = useSubmit(false);   
   const { onOpen } = useAlertContext();   

useEffect(() => {
   if (response)    {
     onOpen(response.type, response.message);
   }
}, [response, onOpen]);
   const formik = useFormik({
      initialValues: {
	firstName: "",
	email:"",
	comment: "",
      },
      onSubmit: (values) => {
	submit(values);
      },
      validationSchema: Yup.object({
	firstName: Yup.string().required("Required"),	
	email: Yup.string().email("“Invalid email address").required("Required"),	
      type: Yup.string().optional(),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
      }),
   });
   return (
      <FullScreenSection
         isDarkBackground
         backgroundColor="#512DA8"
         py={16}
         spacing={8}
      >
      <VStack w="1024px" p={32} alignItems="flex-start">
      <Heading as="h1" id="contact-me-section">
Contact me
      </Heading>
      <Box p={6} rounded="md" w="100%">
        <form onSubmit={(e) => { e.preventDefault();
	formik.handleSubmit(e) }}>
        <VStack spacing={4}>
          <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
          <FormLabel htmlFor="firstName">Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            {...formik.getFieldProps("firstName")}
/>
<FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
</FormControl>
          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
          <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
/>
<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
</FormControl>
          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
          <FormLabel htmlFor="type">Type of inquiry</FormLabel>
	<Select id="type" name="type" onChange={formik.handleChange}>
	<option value="hireMe">Freelance project proposal</option>
	<option value="openSource">Open source consultancy session</option>
	<option value="other">Other</option>
	</Select>
	</FormControl>
          <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
          <FormLabel htmlFor="comment">Your message</FormLabel>
          <Textarea
	  id="comment"
	  name="comment"
	  height="250px"
            {...formik.getFieldProps("comment")}
          />
<FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
</FormControl>
<Button type="submit" colorScheme="purple" 
width="full" isLoading={isLoading}>
         Submit
         </Button>
       </VStack>
     </form>
    </Box>
  </VStack>
</FullScreenSection>
   );
};
export default ContactMeSection;
