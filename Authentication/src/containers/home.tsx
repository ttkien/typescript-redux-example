import React, { PureComponent } from 'react'
import { View, Text, TextInput } from 'react-native'
import { loginAction } from '../actions/login'
import { connect } from 'react-redux'
import { IProfile, ActionType } from '../types'

interface Props {
    type: ActionType | null
    profile: IProfile | null
    onLoginSuccess: (profile: IProfile | null) => void
}


interface ProfileProps {
    profile: IProfile | null
}

class ProfileComponent extends PureComponent<ProfileProps> {
    constructor(props: ProfileProps) {
        super(props)
    }

    render() {
        return (
            <Text> {this.props.profile.name}</Text>
        )
    }
}

export class HomeComponent extends PureComponent<Props> {
    constructor(props: Props) {
        super(props)
    }
    componentDidMount() {
        this.props.onClick("kien", "password")
    }

    render() {
        switch (this.props.type) {
            case ActionType.Login:
                return (<View style={{ top: 50 }}>
                    <Text>login</Text>
                </View>)
            case ActionType.Loading:
                return (<View style={{ top: 50 }}>
                    <Text>Loading</Text>
                </View>)
            case ActionType.Success:

                this.props.onLoginSuccess(this.props.profile)
                return (
                    <View style={{ top: 50 }}>
                        <ProfileComponent profile={this.props.profile} />
                    </View>
                )

            default:
                return (<View></View>)
        }
    }
}

const mapStateToProps = (state, ownProps: Props) => ({
    type: state.loginReducer.type,
    profile: state.loginReducer.profile
})

function mapDispatchToProps(dispatch, ownProps: Props) {
    return {
        onClick: (username: string, password: string) => dispatch(loginAction(username, password))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)