import React from 'react'
import { IProfile } from "../../types";
import { PureComponent } from "react";
import { View, Text } from "react-native";


interface ProfileProps {
    profile?: IProfile
}

export default class ProfileComponent extends PureComponent<ProfileProps> {
    constructor(props: ProfileProps) {
        super(props)
    }

    render() {
        const { profile } = this.props;

        if (profile != null) {
            return (
                <Text>
                    {
                        profile.name
                    }
                </Text>
            )
        } else {
            return (
                <View></View>
            );
        }

    }
}