import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { useNavigate } from "react-router-native";

const AppBarTab = ({ title, location }) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress={() => navigate(location)}>
      <Text
        fontWeight="bold"
        style={{
          color: "#ffffff",
          padding: 5,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
