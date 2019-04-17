import React, { PureComponent } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { loginAction } from '../actions/login'
import { connect } from 'react-redux'
import { IProfile, ActionType, Action } from '../types'
import { Dispatch } from 'redux';

interface Props {
    type?: ActionType
    profile?: IProfile
    onLoginSuccess?: (profile?: IProfile) => void
    onClick?: (username: string, password: string) => void
    style?: any
}


interface ProfileProps {
    profile?: IProfile
}

class ProfileComponent extends PureComponent<ProfileProps> {
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

export class HomeComponent extends PureComponent<Props> {
    constructor(props: Props) {
        super(props)
    }
    componentDidMount() {
        
    }

    render() {
        const {style} = this.props;
       return(
           <View style={style}>
               {this.renderContent()}
           </View>
       )
    }

    renderContent() {
        const { onLoginSuccess } = this.props;
        switch (this.props.type) {
            case ActionType.Login:
                return (<View style={{ top: 50 }}>
                    <Text>login</Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.row}>
                        <Button title="Login" onPress={()=> {
                            
                        }}></Button>
                    </View>
                </View>)
            case ActionType.Loading:
                return (<View style={{ top: 50 }}>
                    <Text>Loading</Text>
                </View>)
            case ActionType.Success:
                if (onLoginSuccess != null) {
                    onLoginSuccess(this.props.profile)
                }
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

const mapStateToProps = (state: any, ownProps: Props) => ({
    type: state.loginReducer.type,
    profile: state.loginReducer.profile
})

function mapDispatchToProps(dispatch: Dispatch, ownProps: Props) {
    return {
        onClick: (username: string, password: string) => dispatch(loginAction(username, password))
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    label: {
        flex:1 
    },
    input: {
        flex: 2
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)


