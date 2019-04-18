import React from 'react'
import {PureComponent} from 'react'
import { Text } from 'react-native';

interface IProps {
    name: string
}

export class WelcomeComponent extends PureComponent<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <Text>{ "Welcome" } </Text>
        )
    }
}