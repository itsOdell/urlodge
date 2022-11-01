import { FeatureProps } from "../types";
import {Link, Avatar, Banner, Free} from "../../components/icons";

export const features: [FeatureProps, FeatureProps, FeatureProps, FeatureProps] = [
    {
        Icon: () => <Link size={"2x"} color={"var(--dark-green)"}/>,
        title: "Sharing",
        description: "Share all of your links instead of sharing your links one by one.",
        key: 123
    },
    {
        Icon: () => <Avatar size={"2x"} color={"var(--dark-green)"}/>,
        title: "Avatar",
        description: "Upload your own custom picture and set it as an avatar!",
        key: 456
    },
    {
        Icon: () => <Banner size={"2x"} color={"var(--dark-green)"}/>,
        title: "Banner",
        description: "Upgrade your URLodge to have a custom background banner!",
        key: 789
    },
    {
        Icon: () => <Free size={"2x"} color={"var(--dark-green)"}/>,
        title: "Free",
        description: "Best of all, our platform is 100% free to use!",
        key: 101
    },
];
