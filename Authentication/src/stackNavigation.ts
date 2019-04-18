import { createStackNavigator, createAppContainer } from "react-navigation";
import {HomeComponent} from "./containers/home"
import { WelcomeComponent } from "./containers/welcome/welcome";
const appNavigator = createStackNavigator(
    {
        Home: HomeComponent,
        Welcome: WelcomeComponent
    }
)

export default createAppContainer(appNavigator)