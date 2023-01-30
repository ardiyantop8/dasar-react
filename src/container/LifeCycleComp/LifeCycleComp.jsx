import React, {Component} from 'react'

class LifeCycleComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
          count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount () {
        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState ({
        //         count: 2  
        //     })
        // }, 5000)
    }

    shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    }

    componentWillUnmount() {
    console.log('componentWillUnmount')
    }

    ChangeCount = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render')
        return (
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6' onClick={this.ChangeCount}>Component Button {this.state.count}</button>
        )
    }
}


export default LifeCycleComp