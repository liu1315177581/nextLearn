import React, { Component } from 'react'
import Header from '../header/index'
import Nav from '@/components/nav'
import '@/assets/css/common.less'
import 'lodash'
export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigation_message:[{
                btn_text: '电影',
                key: 'film'
            }, {
                btn_text: '电视剧',
                key: 'tv_play'
            }, {
                btn_text: '综艺',
                key: 'variety'
            }, {
                btn_text: '体育',
                key: 'sports'
            }, {
                btn_text: '动漫',
                key: 'cartoon'
            }, {
                btn_text: '搞笑短视频',
                key: 'short_video'
            }]
        }
    }

    render() {
        return (
            <div>
				<Header/>
                <Nav navigation_message={this.state.navigation_message}/>
				{this.props.children}
			</div>

        )
    }
}