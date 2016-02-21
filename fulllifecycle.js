import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
import MyListView from './mylistview';
class FullLifeCycle extends Component {

    print(info) {
        console.log("FullLifeCycle", info);
    }

    constructor(props, context) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        };
        this.print("constructor()");
    }

    componentWillMount() {
        this.print("componentWillMount()");
        this.fetchData();
    }

    componentWillUnmount() {
        this.print("componentWillUnmount()");
    }

    componentDidMount() {
        this.print("componentDidMount()");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.print("componentWillReceiveProps()");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.print("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.print("componentWillUpdate()");
    }

    componentDidUpdate() {
        this.print("componentDidUpdate()");
    }
    
    render() {
        this.print("render()");
        return (
            <View style={{ flex: 1 }}>
                <Text onPress={() => { this.TestStateLifecycle(); } }>TestStateLifecycle</Text>
                <MyListView dataSource={this.state.dataSource} />
            </View>
        );
    }
    
    onPress(){
        console.log("Main:", this);
    }

    fetchData() {
        this.print("fetchData()");
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([1, 2, 3, 4])
        });
    }

    TestStateLifecycle() {
        this.print("TestStateLifecycle()");
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([5, 6, 7, 8])
        });
    }
}

export default FullLifeCycle;