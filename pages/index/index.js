import { Component } from 'react'
import dynamic from 'next/dynamic'
import Layout from '@/components/layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import style from './index.less'
import getConfig from 'next/config'
import Carousel from '@/components/carousel'


class Index extends Component {
    static async getInitialProps(context) {
        let res = null;
        let api = getConfig().publicRuntimeConfig.api;
        /*if (context.req) {
            res = await fetch(api + 'v2/book/1220562')
        } else {
            res = await fetch('v2/book/1220562')
        }
        const data = await res.json()*/
        return{
            /* 导航数据 */
            navigation_message:[
                {
                    btn_text: '电影',
                    key: 'film'
                },
                {
                    btn_text: '电视剧',
                    key: 'tv_play'
                },
                {
                    btn_text: '综艺',
                    key: 'variety'
                },
                {
                    btn_text: '体育',
                    key: 'sports'
                },
                {
                    btn_text: '动画片',
                    key: 'cartoon'
                },
                {
                    btn_text: '搞笑短视频',
                    key: 'short_video'
                }
            ],
            banner_message:[
                {   
                    title: '标题1',
                    text: '这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1',
                    img: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=ed84f4d0c4fcc3ceabc0cf33a244d6b7/cefc1e178a82b901e004bbc17f8da9773812ef93.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: '',
                },
                {
                    title: '标题1',
                    text: 'aaa这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1',
                    img: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=ed84f4d0c4fcc3ceabc0cf33a244d6b7/cefc1e178a82b901e004bbc17f8da9773812ef93.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: '',
                },
                {
                    title: '标题1',
                    text: 'aaa这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1',
                    img: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=ed84f4d0c4fcc3ceabc0cf33a244d6b7/cefc1e178a82b901e004bbc17f8da9773812ef93.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: '',
                },
                {
                    title: '标题1',
                    text: 'aaa这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1',
                    img: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=ed84f4d0c4fcc3ceabc0cf33a244d6b7/cefc1e178a82b901e004bbc17f8da9773812ef93.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: '',
                },
                {
                    title: '标题1',
                    text: 'aaa这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1',
                    img: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=ed84f4d0c4fcc3ceabc0cf33a244d6b7/cefc1e178a82b901e004bbc17f8da9773812ef93.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: '',
                }
            ]
        }
    }
    
    render() {
        return (
            <Layout navigation_message={this.props.navigation_message}>
                <Carousel banner_message={this.props.banner_message}/>
            </Layout>
        )
    }
}

export default Index