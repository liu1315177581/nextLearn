import React, { Component } from 'react'
import Header from '../header/index'
import Nav from '@/components/nav'
import '@/assets/css/common.less'
import 'lodash'
export default class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
				<Header/>
                <Nav navigation_message={this.props.navigation_message}/>
				{this.props.children}
			</div>

        )
    }
}