import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("A name is required!")
    .min(3, "Name's WAY too short, chump! ;-)"),
  email: yup
    .string()
    .email("Not a real email address, man!")
    .required("You need an email, bro!"),
  password: yup
    .string()
    .trim()
    .required("No password?! You're insane; add one!")
    .min(8, "What kind of a password's that?! 8+ digits, please!"),
});

export default formSchema;
