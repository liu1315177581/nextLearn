/**
 * 详情页
 */
import {
    Component
} from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import getConfig from 'next/config'
import Layout from '../../components/layout/index'
import detail from './index.less'



class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail_message: {}
        }

    }
    async switchSlideFun(index, id) {
        let res = null;
        res = await fetch('v2/movie/subject/' + id)
        const data = await res.json()
        this.setState({ detail_message: data });
    }

    static async getInitialProps(context) {

        let res = null;
        let api = getConfig().publicRuntimeConfig.api;
        let data = {};

        if (context.req) {
            res = await fetch(api + '/v2/movie/in_theaters')
            data = await res.json()
        } else {
            /* 打开loading */
            context.reduxStore.dispatch({ type: 'MARK_ONOFF', mark_onoff: true });
            res = await fetch('v2/movie/in_theaters')
            data = await res.json()
        }
        context.reduxStore.dispatch({ type: 'MARK_ONOFF', mark_onoff: false });
        return {
            moviesList: data
        }
    }

    componentDidMount() {
        /* 界面初始化轮播 */
        this.switchSlideFun(0, this.props.moviesList.subjects[0].id)
    }


    render() {
        return (
            <Layout>
                <div className={detail.detail_content}>
                    <div className={detail.left_content}>
                        <h2 className={detail.header}>{this.state.detail_message.title}</h2>
                        <img className={detail.big_img} src={this.state.detail_message.images && this.state.detail_message.images.small}/>
                        <div className={detail.banner_text}>
                            <h5>描述</h5>
                            <p>    {this.state.detail_message.summary} </p>
                        </div>
                    </div>

                    <div className={detail.reight_content}>

                        <h3>{this.props.moviesList.title}</h3>

                        <ul className={detail.detail_list}>
                            {this.props.moviesList.subjects.map((item, index) => (
                                <li key={item.id} className={detail.list_item}
                                    onClick={this.switchSlideFun.bind(this, index, item.id)}>
                                    <div className={detail.item_left_img}>
                                        <img src={item.images.small} alt=""/>

                                    </div>
                                    <div className={detail.item_right_text}>
                                        <p className={detail.title}>{item.title}</p>
                                        <p className={detail.casts}>
                                            {item.casts.map((casts_item, index) => (
                                                <a key={index} href={casts_item.alt}>{casts_item.name}  </a>
                                            ))}
                                        </p>
                                        <p>
                                            {item.directors.map((directors_item, index) => (
                                                <a key={index} href={directors_item.alt}>{directors_item.name}  </a>
                                            ))}
                                        </p>
                                        <p className={detail.views}>{item.collect_count} views</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <Link href="/?counter=10"><a>Changes with scrolling to top</a></Link>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(Index)