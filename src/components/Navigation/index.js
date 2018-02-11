import { StackNavigator } from "react-navigation";
import Page from '../../Page';

export default StackNavigator(
  {
    Page: { screen: Page },
  },
  {
    initialRouteName: "Page",
    headerMode: "none"
  }
);
