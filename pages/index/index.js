/**
 * 首页
 */
import { Component } from 'react'
import dynamic from 'next/dynamic'
import Layout from '@/components/layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import getConfig from 'next/config'

import style from './index.less'
import Carousel from '@/components/carousel' /* banner 模块 */



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
        return {
            /* 导航数据 */
            navigation_message: [{
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
            }],
            banner_message: [{
                title: 'Tarzan',
                text: ' Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                title: 'Maximum Ride',
                text: 'Six children, genetically cross-bred with avian DNA, take flight around the country to discover their origins. Along the way, their mysterious past is ...',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/4.jpg',
                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                title: 'Independence',
                text: 'The fate of humanity hangs in the balance as the U.S. President and citizens decide if these aliens are to be trusted ...or feared.',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/3.jpg',
                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                title: 'Central Intelligence',
                text: 'Bullied as a teen for being overweight, Bob Stone (Dwayne Johnson) shows up to his high school reunion looking fit and muscular. Claiming to be on a... ',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/2.jpg',
                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                title: 'Ice Age',
                text: 'In the film\'s epilogue, Scrat keeps struggling to control the alien ship until it crashes on Mars, destroying all life on the planet.',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/1.jpg',
                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }]
        }
    }

    render() {
        return (
            <Layout>
                <Carousel banner_message={this.props.banner_message}/>
                <Link href="/detail"><a>go to detail</a></Link>
            </Layout>
        )
    }
}

export default Index