import React, { PureComponent } from 'react'
import {View, Text} from 'react-native'
import { loginAction} from '../src/actions/login'
import {connect} from './node_modules/react-redux'
import { LoginState } from '../src/reducers/loginReducer';

interface Props {
    type: string
}

export class HomeComponent extends PureComponent<Props> {
    constructor(props: Props) {
        super(props)
    }

    componentDidMount() {

        this.props.onClick("kien", "password")
        
    }


    render () {
        return(
            <View style={{top: 50}}>
                <Text>
                    <Text>kienhipesi</Text>
                    {this.props.type != null ? this.props.type : "empty"}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps:Props) => ({
    type: state.loginReducer.type
  })
  
  function mapDispatchToProps (dispatch, ownProps: Props) {
    return {
        onClick: (username: string, password: string) => dispatch(loginAction(username, password))
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeComponent)