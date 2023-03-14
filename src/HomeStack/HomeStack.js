import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../src/HomeScreen/HomeScreen";
import DetailsScreen from "../src/DetailsScreen/DetailsScreen";

const screen = {
  Home: {
    screen: Home,
  },
  DetailsScreen: {
    screen: DetailsScreen,
  },
};

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack);
