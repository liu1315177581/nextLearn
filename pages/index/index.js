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
import ContentList from '@/components/content_list' /* content 列表组件 */



class Index extends Component {
    static async getInitialProps(context) {
        let res = null;
        let api = getConfig().publicRuntimeConfig.api;
        context.reduxStore.dispatch({
            type: 'VEDIO_MESSAGE',
            vedio_message: [
                {
                    title: 'Tarzan',
                    text: ' Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.',
                    img_max: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    img_min: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    appraise_num: '3',
                    score_num: ''
                },
                {
                    title: 'Tarzan',
                    text: ' Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.',
                    img_max: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    img_min: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: ''
                },
                {
                    title: 'Tarzan',
                    text: ' Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.',
                    img_max: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    img_min: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: ''
                },
                {
                    title: 'Tarzan',
                    text: ' Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.',
                    img_max: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    img_min: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: ''
                },
                {
                    title: 'Tarzan',
                    text: ' Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.',
                    img_max: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    img_min: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: ''
                },
                {
                    title: 'Tarzan',
                    text: ' Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.',
                    img_max: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    img_min: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: ''
                },
                {
                    title: 'Tarzan',
                    text: ' Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.',
                    img_max: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    img_min: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: ''
                }
            ]
        })
        if (context.req) {

            // res = await fetch(api + 'v2/book/1220562')
        } else {
            // res = await fetch('v2/book/1220562')
        }
        return {}
        // const data = await res.json()
    }

    render() {
        return (
            <Layout>
                <Carousel/>
                <ContentList/>
                <Link href="/detail"><a>go to detail</a></Link>
            </Layout>
        )
    }
}

export default Index