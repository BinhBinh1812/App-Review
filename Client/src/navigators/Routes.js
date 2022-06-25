import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthStacks from "./AuthStacks";
import MainStacks from "./MainStacks";

export default function Routes() {
  const { authorized } = useSelector((state) => state.authReducer);

  return (
    <NavigationContainer>
      {authorized ? <MainStacks /> : <AuthStacks />}
    </NavigationContainer>
  );
}
