import { useFormik } from "formik";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundColor,
    flex: 1,
  },
  error: {
    color: theme.colors.error,
    marginBottom: 10,
  },
  form: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  signIn: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 symbols long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 symbols long")
    .required("Password is required"),
});

const onSubmit = (values) => console.log(values);

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={{
            ...styles.input,
            borderColor:
              formik.touched.username && formik.errors.username
                ? theme.colors.error
                : theme.colors.textSecondary,
          }}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.error}>{formik.errors.username}</Text>
        )}

        <TextInput
          style={{
            ...styles.input,
            borderColor:
              formik.touched.password && formik.errors.password
                ? theme.colors.error
                : theme.colors.textSecondary,
          }}
          secureTextEntry
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}

        <Pressable style={styles.signIn} onPress={formik.handleSubmit}>
          <Text fontWeight="bold" color="textPrimary">
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
