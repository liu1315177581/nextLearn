import {
    Component
} from 'react'
import dynamic from 'next/dynamic'
import Layout from '../../components/layout/index'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import detail from './index.less'
import getConfig from 'next/config'
const api = getConfig().publicRuntimeConfig.api;


class Index extends Component {
    constructor(props){
        super(props)

        this.state = {
            data:[]
        }
    }
    static async getInitialProps(context) {
        return {
            detail_message:[
                {
                id: 1,
                title: 'Tarzan',
                text: ' Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                item_img:"http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/m5.jpg",
                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                id: 2,
                title: 'Maximum Ride',
                text: 'Six children, genetically cross-bred with avian DNA, take flight around the country to discover their origins. Along the way, their mysterious past is ...',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/4.jpg',
                item_img:"http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/m4.jpg",

                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                id:3,
                title: 'Independence',
                text: 'The fate of humanity hangs in the balance as the U.S. President and citizens decide if these aliens are to be trusted ...or feared.',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/3.jpg',
                item_img:"http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/m3.jpg",

                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                id:4,
                title: 'Central Intelligence',
                text: 'Bullied as a teen for being overweight, Bob Stone (Dwayne Johnson) shows up to his high school reunion looking fit and muscular. Claiming to be on a... ',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/2.jpg',
                item_img:"http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/m2.jpg",

                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                id:5,
                title: 'Ice Age',
                text: 'In the film\'s epilogue, Scrat keeps struggling to control the alien ship until it crashes on Mars, destroying all life on the planet.',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/1.jpg',
                item_img:"http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/m1.jpg",

                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }],
            moviesList:[
                {
                    "rating": {
                        "max": 10,
                        "average": 6.7,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": ["喜剧"],
                    "title": "西虹市首富",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1325700\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533527370.41.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533527370.41.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533527370.41.jpg"
                        },
                        "name": "沈腾",
                        "id": "1325700"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1341903\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1446281965.79.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1446281965.79.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1446281965.79.jpg"
                        },
                        "name": "宋芸桦",
                        "id": "1341903"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1322777\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1413261818.41.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1413261818.41.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1413261818.41.jpg"
                        },
                        "name": "张一鸣",
                        "id": "1322777"
                    }],
                    "collect_count": 365165,
                    "original_title": "西虹市首富",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1350410\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437030925.47.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437030925.47.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437030925.47.jpg"
                        },
                        "name": "闫非",
                        "id": "1350410"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1350409\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437031053.5.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437031053.5.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437031053.5.jpg"
                        },
                        "name": "彭大魔",
                        "id": "1350409"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529206747.jpg",
                        "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529206747.jpg",
                        "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529206747.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/27605698\/",
                    "id": "27605698"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": ["动作", "科幻", "惊悚"],
                    "title": "巨齿鲨",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1049484\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p424.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p424.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p424.jpg"
                        },
                        "name": "杰森·斯坦森",
                        "id": "1049484"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1040990\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p37168.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p37168.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p37168.jpg"
                        },
                        "name": "李冰冰",
                        "id": "1040990"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1004593\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p9747.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p9747.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p9747.jpg"
                        },
                        "name": "雷恩·威尔森",
                        "id": "1004593"
                    }],
                    "collect_count": 2026,
                    "original_title": "The Meg",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1022710\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1379831737.28.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1379831737.28.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1379831737.28.jpg"
                        },
                        "name": "乔·德特杜巴",
                        "id": "1022710"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529425149.jpg",
                        "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529425149.jpg",
                        "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529425149.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/26426194\/",
                    "id": "26426194"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 8.8,
                        "stars": "45",
                        "min": 0
                    },
                    "genres": ["剧情", "犯罪", "家庭"],
                    "title": "小偷家族",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1042693\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p19077.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p19077.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p19077.jpg"
                        },
                        "name": "中川雅也",
                        "id": "1042693"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1274350\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1442220877.34.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1442220877.34.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1442220877.34.jpg"
                        },
                        "name": "安藤樱",
                        "id": "1274350"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1320978\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1428591465.76.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1428591465.76.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1428591465.76.jpg"
                        },
                        "name": "松冈茉优",
                        "id": "1320978"
                    }],
                    "collect_count": 156865,
                    "original_title": "万引き家族",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1274351\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1363134033.35.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1363134033.35.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1363134033.35.jpg"
                        },
                        "name": "是枝裕和",
                        "id": "1274351"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529394955.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529394955.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529394955.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/27622447\/",
                    "id": "27622447"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 6.5,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": ["动作", "悬疑", "古装"],
                    "title": "狄仁杰之四大天王",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1274608\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49483.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49483.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49483.jpg"
                        },
                        "name": "赵又廷",
                        "id": "1274608"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1275721\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p36925.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p36925.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p36925.jpg"
                        },
                        "name": "冯绍峰",
                        "id": "1275721"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1314535\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1399987210.67.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1399987210.67.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1399987210.67.jpg"
                        },
                        "name": "林更新",
                        "id": "1314535"
                    }],
                    "collect_count": 122074,
                    "original_title": "狄仁杰之四大天王",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1007152\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1393840734.39.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1393840734.39.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1393840734.39.jpg"
                        },
                        "name": "徐克",
                        "id": "1007152"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526405034.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526405034.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526405034.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/25882296\/",
                    "id": "25882296"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 7.0,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": ["动画", "奇幻"],
                    "title": "风语咒",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1329887\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1370588849.4.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1370588849.4.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1370588849.4.jpg"
                        },
                        "name": "路知行",
                        "id": "1329887"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1340811\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1478049229.21.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1478049229.21.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1478049229.21.jpg"
                        },
                        "name": "阎萌萌",
                        "id": "1340811"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1390805\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1522323624.45.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1522323624.45.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1522323624.45.jpg"
                        },
                        "name": "褚珺",
                        "id": "1390805"
                    }],
                    "collect_count": 26103,
                    "original_title": "风语咒",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1364166\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1501141090.9.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1501141090.9.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1501141090.9.jpg"
                        },
                        "name": "刘阔",
                        "id": "1364166"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298441.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298441.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298441.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/30146756\/",
                    "id": "30146756"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 9.0,
                        "stars": "45",
                        "min": 0
                    },
                    "genres": ["剧情", "喜剧"],
                    "title": "我不是药神",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1274297\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p43738.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p43738.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p43738.jpg"
                        },
                        "name": "徐峥",
                        "id": "1274297"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1313837\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1496577458.38.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1496577458.38.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1496577458.38.jpg"
                        },
                        "name": "王传君",
                        "id": "1313837"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1276085\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1514533436.1.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1514533436.1.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1514533436.1.jpg"
                        },
                        "name": "周一围",
                        "id": "1276085"
                    }],
                    "collect_count": 1088933,
                    "original_title": "我不是药神",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1349765\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529658740.26.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529658740.26.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529658740.26.jpg"
                        },
                        "name": "文牧野",
                        "id": "1349765"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2519070834.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2519070834.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2519070834.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/26752088\/",
                    "id": "26752088"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 5.8,
                        "stars": "30",
                        "min": 0
                    },
                    "genres": ["喜剧", "动作", "犯罪"],
                    "title": "的士速递5",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1350461\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg"
                        },
                        "name": "弗兰克·盖思堂彼得",
                        "id": "1350461"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1338536\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1508296892.32.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1508296892.32.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1508296892.32.jpg"
                        },
                        "name": "马利克·班泽拉",
                        "id": "1338536"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1340833\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1424004495.1.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1424004495.1.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1424004495.1.jpg"
                        },
                        "name": "伯纳尔·法西",
                        "id": "1340833"
                    }],
                    "collect_count": 7829,
                    "original_title": "Taxi 5",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1350461\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg"
                        },
                        "name": "弗兰克·盖思堂彼得",
                        "id": "1350461"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529136453.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529136453.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529136453.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/27615564\/",
                    "id": "27615564"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": ["动画"],
                    "title": "神秘世界历险记4",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1395143\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1528456334.7.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1528456334.7.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1528456334.7.jpg"
                        },
                        "name": "阎么么",
                        "id": "1395143"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1392959\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1531717367.71.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1531717367.71.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1531717367.71.jpg"
                        },
                        "name": "赵一博",
                        "id": "1392959"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1340809\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278703.48.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278703.48.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278703.48.jpg"
                        },
                        "name": "张磊",
                        "id": "1340809"
                    }],
                    "collect_count": 435,
                    "original_title": "神秘世界历险记4",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1321732\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1436771114.49.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1436771114.49.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1436771114.49.jpg"
                        },
                        "name": "王云飞",
                        "id": "1321732"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1360428\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278577.39.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278577.39.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278577.39.jpg"
                        },
                        "name": "张林旭",
                        "id": "1360428"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1337468\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1435053152.21.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1435053152.21.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1435053152.21.jpg"
                        },
                        "name": "李佳怡",
                        "id": "1337468"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528380655.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528380655.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528380655.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/30208005\/",
                    "id": "30208005"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 6.5,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": ["动作", "惊悚", "冒险"],
                    "title": "摩天营救",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1044707\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p45621.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p45621.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p45621.jpg"
                        },
                        "name": "道恩·强森",
                        "id": "1044707"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1027828\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532109034.28.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532109034.28.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532109034.28.jpg"
                        },
                        "name": "内芙·坎贝尔",
                        "id": "1027828"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1036774\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p23588.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p23588.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p23588.jpg"
                        },
                        "name": "黄经汉",
                        "id": "1036774"
                    }],
                    "collect_count": 83187,
                    "original_title": "Skyscraper",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1005149\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1377869988.64.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1377869988.64.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1377869988.64.jpg"
                        },
                        "name": "罗森·马歇尔·瑟伯",
                        "id": "1005149"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2527484082.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2527484082.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2527484082.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/26804147\/",
                    "id": "26804147"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 4.1,
                        "stars": "20",
                        "min": 0
                    },
                    "genres": ["喜剧", "动作", "犯罪"],
                    "title": "解码游戏",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1275667\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1519976356.71.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1519976356.71.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1519976356.71.jpg"
                        },
                        "name": "韩庚",
                        "id": "1275667"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1274684\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372773609.01.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372773609.01.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372773609.01.jpg"
                        },
                        "name": "凤小岳",
                        "id": "1274684"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1314374\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439792310.44.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439792310.44.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439792310.44.jpg"
                        },
                        "name": "李媛",
                        "id": "1314374"
                    }],
                    "collect_count": 1618,
                    "original_title": "解码游戏",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1388759\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1521528597.3.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1521528597.3.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1521528597.3.jpg"
                        },
                        "name": "李海龙",
                        "id": "1388759"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529787833.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529787833.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529787833.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/26767512\/",
                    "id": "26767512"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 7.4,
                        "stars": "40",
                        "min": 0
                    },
                    "genres": ["喜剧", "爱情", "歌舞"],
                    "title": "妈妈咪呀2",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1318674\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1426508419.1.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1426508419.1.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1426508419.1.jpg"
                        },
                        "name": "莉莉·詹姆斯",
                        "id": "1318674"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1053586\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4902.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4902.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4902.jpg"
                        },
                        "name": "阿曼达·塞弗里德",
                        "id": "1053586"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1031902\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1484993245.89.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1484993245.89.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1484993245.89.jpg"
                        },
                        "name": "朱丽·沃特斯",
                        "id": "1031902"
                    }],
                    "collect_count": 6225,
                    "original_title": "Mamma Mia! Here We Go Again",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1319911\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48233.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48233.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48233.jpg"
                        },
                        "name": "欧·帕克",
                        "id": "1319911"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528272481.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528272481.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528272481.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/27050259\/",
                    "id": "27050259"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 5.5,
                        "stars": "30",
                        "min": 0
                    },
                    "genres": ["动画"],
                    "title": "肆式青春",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1397449\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533376408.27.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533376408.27.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533376408.27.jpg"
                        },
                        "name": "坂泰斗",
                        "id": "1397449"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1275208\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p51585.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p51585.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p51585.jpg"
                        },
                        "name": "寿美菜子",
                        "id": "1275208"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1372491\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1509958646.03.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1509958646.03.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1509958646.03.jpg"
                        },
                        "name": "白石晴香",
                        "id": "1372491"
                    }],
                    "collect_count": 3223,
                    "original_title": "詩季織々",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1343518\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1470884079.3.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1470884079.3.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1470884079.3.jpg"
                        },
                        "name": "李豪凌",
                        "id": "1343518"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1317854\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41706.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41706.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41706.jpg"
                        },
                        "name": "易小星",
                        "id": "1317854"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1397448\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533462530.21.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533462530.21.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533462530.21.jpg"
                        },
                        "name": "竹内良贵",
                        "id": "1397448"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526429256.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526429256.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526429256.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/30156898\/",
                    "id": "30156898"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 7.1,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": ["剧情", "喜剧", "动作"],
                    "title": "邪不压正",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1013782\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1368156632.65.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1368156632.65.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1368156632.65.jpg"
                        },
                        "name": "彭于晏",
                        "id": "1013782"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1007401\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1454644679.84.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1454644679.84.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1454644679.84.jpg"
                        },
                        "name": "廖凡",
                        "id": "1007401"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1021999\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg"
                        },
                        "name": "姜文",
                        "id": "1021999"
                    }],
                    "collect_count": 311265,
                    "original_title": "邪不压正",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1021999\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg"
                        },
                        "name": "姜文",
                        "id": "1021999"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526297221.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526297221.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526297221.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/26366496\/",
                    "id": "26366496"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 5.6,
                        "stars": "30",
                        "min": 0
                    },
                    "genres": ["喜剧", "动画", "奇幻"],
                    "title": "神奇马戏团之动物饼干",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1041022\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21481.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21481.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21481.jpg"
                        },
                        "name": "艾米莉·布朗特",
                        "id": "1041022"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1027146\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1452855116.89.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1452855116.89.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1452855116.89.jpg"
                        },
                        "name": "约翰·卡拉辛斯基",
                        "id": "1027146"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1054410\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453792417.87.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453792417.87.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453792417.87.jpg"
                        },
                        "name": "伊恩·麦克莱恩",
                        "id": "1054410"
                    }],
                    "collect_count": 5426,
                    "original_title": "Magical Circus : Animal Crackers",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1277815\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500617178.26.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500617178.26.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500617178.26.jpg"
                        },
                        "name": "托尼·班克罗夫特",
                        "id": "1277815"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1206807\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500623271.8.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500623271.8.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500623271.8.jpg"
                        },
                        "name": "斯科特·克里斯汀·萨瓦",
                        "id": "1206807"
                    }],
                    "year": "2017",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298973.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298973.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298973.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/26253783\/",
                    "id": "26253783"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": ["剧情", "传记"],
                    "title": "李保国",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1274650\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5995.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5995.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5995.jpg"
                        },
                        "name": "林永健",
                        "id": "1274650"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1034637\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1415028031.49.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1415028031.49.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1415028031.49.jpg"
                        },
                        "name": "颜丹晨",
                        "id": "1034637"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1301518\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p14604.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p14604.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p14604.jpg"
                        },
                        "name": "尤勇",
                        "id": "1301518"
                    }],
                    "collect_count": 260,
                    "original_title": "李保国",
                    "subtype": "movie",
                    "directors": [{
                        "alt": null,
                        "avatars": null,
                        "name": "赵琦",
                        "id": null
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529852602.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529852602.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529852602.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/27104330\/",
                    "id": "27104330"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 6.8,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": ["动作", "科幻", "冒险"],
                    "title": "侏罗纪世界2",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1017967\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1408711300.32.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1408711300.32.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1408711300.32.jpg"
                        },
                        "name": "克里斯·帕拉特",
                        "id": "1017967"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1027772\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p315.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p315.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p315.jpg"
                        },
                        "name": "布莱丝·达拉斯·霍华德",
                        "id": "1027772"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1350981\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1523860646.23.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1523860646.23.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1523860646.23.jpg"
                        },
                        "name": "贾斯蒂斯·史密斯",
                        "id": "1350981"
                    }],
                    "collect_count": 196162,
                    "original_title": "Jurassic World: Fallen Kingdom",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1305510\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372318484.25.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372318484.25.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372318484.25.jpg"
                        },
                        "name": "胡安·安东尼奥·巴亚纳",
                        "id": "1305510"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522069454.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522069454.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522069454.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/26416062\/",
                    "id": "26416062"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 5.0,
                        "stars": "25",
                        "min": 0
                    },
                    "genres": ["儿童", "动画", "冒险"],
                    "title": "新大头儿子和小头爸爸3：俄罗斯奇遇记",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1318433\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44177.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44177.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44177.jpg"
                        },
                        "name": "刘纯燕",
                        "id": "1318433"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1318435\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44180.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44180.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44180.jpg"
                        },
                        "name": "董浩",
                        "id": "1318435"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1274251\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1494778054.15.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1494778054.15.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1494778054.15.jpg"
                        },
                        "name": "鞠萍",
                        "id": "1274251"
                    }],
                    "collect_count": 7289,
                    "original_title": "新大头儿子和小头爸爸3：俄罗斯奇遇记",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1342907\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1469705072.9.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1469705072.9.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1469705072.9.jpg"
                        },
                        "name": "何澄",
                        "id": "1342907"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522820714.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522820714.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522820714.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/30198729\/",
                    "id": "30198729"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 8.1,
                        "stars": "40",
                        "min": 0
                    },
                    "genres": ["喜剧", "动作", "动画"],
                    "title": "超人总动员2",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1002721\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21297.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21297.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21297.jpg"
                        },
                        "name": "格雷格·T·尼尔森",
                        "id": "1002721"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1031838\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48614.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48614.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48614.jpg"
                        },
                        "name": "霍利·亨特",
                        "id": "1031838"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1186797\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529654136.33.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529654136.33.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529654136.33.jpg"
                        },
                        "name": "莎拉·沃威尔",
                        "id": "1186797"
                    }],
                    "collect_count": 107582,
                    "original_title": "Incredibles 2",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1027204\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529655910.45.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529655910.45.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529655910.45.jpg"
                        },
                        "name": "布拉德·伯德",
                        "id": "1027204"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522880251.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522880251.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522880251.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/25849049\/",
                    "id": "25849049"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": ["喜剧", "爱情"],
                    "title": "真心话太冒险",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1355001\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1456208642.89.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1456208642.89.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1456208642.89.jpg"
                        },
                        "name": "涂世旻",
                        "id": "1355001"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1398496\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
                            "large": "https://img3.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
                            "medium": "https://img1.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
                        },
                        "name": "柯子静",
                        "id": "1398496"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1398497\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
                            "large": "https://img3.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
                            "medium": "https://img1.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
                        },
                        "name": "Stephanie Stralow",
                        "id": "1398497"
                    }],
                    "collect_count": 47,
                    "original_title": "真心话太冒险",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1398494\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
                            "large": "https://img3.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
                            "medium": "https://img1.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
                        },
                        "name": "谢韵",
                        "id": "1398494"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1398495\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
                            "large": "https://img3.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
                            "medium": "https://img1.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
                        },
                        "name": "黄俊舒",
                        "id": "1398495"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528763272.jpg",
                        "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528763272.jpg",
                        "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528763272.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/30274733\/",
                    "id": "30274733"
                }, {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": ["历史", "战争"],
                    "title": "浴血广昌",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1384169\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1511950470.56.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1511950470.56.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1511950470.56.jpg"
                        },
                        "name": "卢秋宏",
                        "id": "1384169"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1326695\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1492423392.22.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1492423392.22.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1492423392.22.jpg"
                        },
                        "name": "何达",
                        "id": "1326695"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1317855\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41469.jpg",
                            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41469.jpg",
                            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41469.jpg"
                        },
                        "name": "郑昊",
                        "id": "1317855"
                    }],
                    "collect_count": 385,
                    "original_title": "浴血广昌",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1319184\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46010.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46010.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46010.jpg"
                        },
                        "name": "高峰",
                        "id": "1319184"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1327101\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532071022.25.jpg",
                            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532071022.25.jpg",
                            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532071022.25.jpg"
                        },
                        "name": "张馨",
                        "id": "1327101"
                    }],
                    "year": "2018",
                    "images": {
                        "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529260597.jpg",
                        "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529260597.jpg",
                        "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529260597.jpg"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/27180974\/",
                    "id": "27180974"
                }]
        }
	}

    async componentWillMount () {
        let res = await fetch(api+'v2/movie/in_theaters')
        let data = await res.json()
        this.setState({
            data:data,
            moviesList:[
                {
                "rating": {
                    "max": 10,
                    "average": 6.7,
                    "stars": "35",
                    "min": 0
                },
                "genres": ["喜剧"],
                "title": "西虹市首富",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1325700\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533527370.41.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533527370.41.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533527370.41.jpg"
                    },
                    "name": "沈腾",
                    "id": "1325700"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1341903\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1446281965.79.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1446281965.79.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1446281965.79.jpg"
                    },
                    "name": "宋芸桦",
                    "id": "1341903"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1322777\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1413261818.41.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1413261818.41.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1413261818.41.jpg"
                    },
                    "name": "张一鸣",
                    "id": "1322777"
                }],
                "collect_count": 365165,
                "original_title": "西虹市首富",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1350410\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437030925.47.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437030925.47.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437030925.47.jpg"
                    },
                    "name": "闫非",
                    "id": "1350410"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1350409\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437031053.5.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437031053.5.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1437031053.5.jpg"
                    },
                    "name": "彭大魔",
                    "id": "1350409"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529206747.jpg",
                    "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529206747.jpg",
                    "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529206747.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/27605698\/",
                "id": "27605698"
            }, {
                "rating": {
                    "max": 10,
                    "average": 0,
                    "stars": "00",
                    "min": 0
                },
                "genres": ["动作", "科幻", "惊悚"],
                "title": "巨齿鲨",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1049484\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p424.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p424.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p424.jpg"
                    },
                    "name": "杰森·斯坦森",
                    "id": "1049484"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1040990\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p37168.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p37168.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p37168.jpg"
                    },
                    "name": "李冰冰",
                    "id": "1040990"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1004593\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p9747.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p9747.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p9747.jpg"
                    },
                    "name": "雷恩·威尔森",
                    "id": "1004593"
                }],
                "collect_count": 2026,
                "original_title": "The Meg",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1022710\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1379831737.28.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1379831737.28.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1379831737.28.jpg"
                    },
                    "name": "乔·德特杜巴",
                    "id": "1022710"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529425149.jpg",
                    "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529425149.jpg",
                    "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529425149.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/26426194\/",
                "id": "26426194"
            }, {
                "rating": {
                    "max": 10,
                    "average": 8.8,
                    "stars": "45",
                    "min": 0
                },
                "genres": ["剧情", "犯罪", "家庭"],
                "title": "小偷家族",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1042693\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p19077.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p19077.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p19077.jpg"
                    },
                    "name": "中川雅也",
                    "id": "1042693"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1274350\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1442220877.34.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1442220877.34.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1442220877.34.jpg"
                    },
                    "name": "安藤樱",
                    "id": "1274350"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1320978\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1428591465.76.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1428591465.76.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1428591465.76.jpg"
                    },
                    "name": "松冈茉优",
                    "id": "1320978"
                }],
                "collect_count": 156865,
                "original_title": "万引き家族",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1274351\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1363134033.35.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1363134033.35.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1363134033.35.jpg"
                    },
                    "name": "是枝裕和",
                    "id": "1274351"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529394955.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529394955.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529394955.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/27622447\/",
                "id": "27622447"
            }, {
                "rating": {
                    "max": 10,
                    "average": 6.5,
                    "stars": "35",
                    "min": 0
                },
                "genres": ["动作", "悬疑", "古装"],
                "title": "狄仁杰之四大天王",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1274608\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49483.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49483.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49483.jpg"
                    },
                    "name": "赵又廷",
                    "id": "1274608"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1275721\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p36925.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p36925.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p36925.jpg"
                    },
                    "name": "冯绍峰",
                    "id": "1275721"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1314535\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1399987210.67.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1399987210.67.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1399987210.67.jpg"
                    },
                    "name": "林更新",
                    "id": "1314535"
                }],
                "collect_count": 122074,
                "original_title": "狄仁杰之四大天王",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1007152\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1393840734.39.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1393840734.39.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1393840734.39.jpg"
                    },
                    "name": "徐克",
                    "id": "1007152"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526405034.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526405034.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526405034.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/25882296\/",
                "id": "25882296"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.0,
                    "stars": "35",
                    "min": 0
                },
                "genres": ["动画", "奇幻"],
                "title": "风语咒",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1329887\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1370588849.4.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1370588849.4.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1370588849.4.jpg"
                    },
                    "name": "路知行",
                    "id": "1329887"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1340811\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1478049229.21.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1478049229.21.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1478049229.21.jpg"
                    },
                    "name": "阎萌萌",
                    "id": "1340811"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1390805\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1522323624.45.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1522323624.45.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1522323624.45.jpg"
                    },
                    "name": "褚珺",
                    "id": "1390805"
                }],
                "collect_count": 26103,
                "original_title": "风语咒",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1364166\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1501141090.9.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1501141090.9.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1501141090.9.jpg"
                    },
                    "name": "刘阔",
                    "id": "1364166"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298441.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298441.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298441.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/30146756\/",
                "id": "30146756"
            }, {
                "rating": {
                    "max": 10,
                    "average": 9.0,
                    "stars": "45",
                    "min": 0
                },
                "genres": ["剧情", "喜剧"],
                "title": "我不是药神",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1274297\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p43738.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p43738.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p43738.jpg"
                    },
                    "name": "徐峥",
                    "id": "1274297"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1313837\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1496577458.38.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1496577458.38.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1496577458.38.jpg"
                    },
                    "name": "王传君",
                    "id": "1313837"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1276085\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1514533436.1.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1514533436.1.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1514533436.1.jpg"
                    },
                    "name": "周一围",
                    "id": "1276085"
                }],
                "collect_count": 1088933,
                "original_title": "我不是药神",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1349765\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529658740.26.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529658740.26.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529658740.26.jpg"
                    },
                    "name": "文牧野",
                    "id": "1349765"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2519070834.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2519070834.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2519070834.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/26752088\/",
                "id": "26752088"
            }, {
                "rating": {
                    "max": 10,
                    "average": 5.8,
                    "stars": "30",
                    "min": 0
                },
                "genres": ["喜剧", "动作", "犯罪"],
                "title": "的士速递5",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1350461\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg"
                    },
                    "name": "弗兰克·盖思堂彼得",
                    "id": "1350461"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1338536\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1508296892.32.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1508296892.32.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1508296892.32.jpg"
                    },
                    "name": "马利克·班泽拉",
                    "id": "1338536"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1340833\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1424004495.1.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1424004495.1.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1424004495.1.jpg"
                    },
                    "name": "伯纳尔·法西",
                    "id": "1340833"
                }],
                "collect_count": 7829,
                "original_title": "Taxi 5",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1350461\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439837122.18.jpg"
                    },
                    "name": "弗兰克·盖思堂彼得",
                    "id": "1350461"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529136453.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529136453.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529136453.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/27615564\/",
                "id": "27615564"
            }, {
                "rating": {
                    "max": 10,
                    "average": 0,
                    "stars": "00",
                    "min": 0
                },
                "genres": ["动画"],
                "title": "神秘世界历险记4",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1395143\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1528456334.7.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1528456334.7.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1528456334.7.jpg"
                    },
                    "name": "阎么么",
                    "id": "1395143"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1392959\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1531717367.71.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1531717367.71.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1531717367.71.jpg"
                    },
                    "name": "赵一博",
                    "id": "1392959"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1340809\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278703.48.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278703.48.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278703.48.jpg"
                    },
                    "name": "张磊",
                    "id": "1340809"
                }],
                "collect_count": 435,
                "original_title": "神秘世界历险记4",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1321732\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1436771114.49.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1436771114.49.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1436771114.49.jpg"
                    },
                    "name": "王云飞",
                    "id": "1321732"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1360428\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278577.39.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278577.39.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1526278577.39.jpg"
                    },
                    "name": "张林旭",
                    "id": "1360428"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1337468\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1435053152.21.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1435053152.21.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1435053152.21.jpg"
                    },
                    "name": "李佳怡",
                    "id": "1337468"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528380655.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528380655.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528380655.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/30208005\/",
                "id": "30208005"
            }, {
                "rating": {
                    "max": 10,
                    "average": 6.5,
                    "stars": "35",
                    "min": 0
                },
                "genres": ["动作", "惊悚", "冒险"],
                "title": "摩天营救",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1044707\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p45621.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p45621.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p45621.jpg"
                    },
                    "name": "道恩·强森",
                    "id": "1044707"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1027828\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532109034.28.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532109034.28.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532109034.28.jpg"
                    },
                    "name": "内芙·坎贝尔",
                    "id": "1027828"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1036774\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p23588.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p23588.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p23588.jpg"
                    },
                    "name": "黄经汉",
                    "id": "1036774"
                }],
                "collect_count": 83187,
                "original_title": "Skyscraper",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1005149\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1377869988.64.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1377869988.64.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1377869988.64.jpg"
                    },
                    "name": "罗森·马歇尔·瑟伯",
                    "id": "1005149"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2527484082.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2527484082.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2527484082.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/26804147\/",
                "id": "26804147"
            }, {
                "rating": {
                    "max": 10,
                    "average": 4.1,
                    "stars": "20",
                    "min": 0
                },
                "genres": ["喜剧", "动作", "犯罪"],
                "title": "解码游戏",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1275667\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1519976356.71.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1519976356.71.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1519976356.71.jpg"
                    },
                    "name": "韩庚",
                    "id": "1275667"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1274684\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372773609.01.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372773609.01.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372773609.01.jpg"
                    },
                    "name": "凤小岳",
                    "id": "1274684"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1314374\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439792310.44.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439792310.44.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1439792310.44.jpg"
                    },
                    "name": "李媛",
                    "id": "1314374"
                }],
                "collect_count": 1618,
                "original_title": "解码游戏",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1388759\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1521528597.3.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1521528597.3.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1521528597.3.jpg"
                    },
                    "name": "李海龙",
                    "id": "1388759"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529787833.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529787833.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529787833.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/26767512\/",
                "id": "26767512"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.4,
                    "stars": "40",
                    "min": 0
                },
                "genres": ["喜剧", "爱情", "歌舞"],
                "title": "妈妈咪呀2",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1318674\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1426508419.1.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1426508419.1.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1426508419.1.jpg"
                    },
                    "name": "莉莉·詹姆斯",
                    "id": "1318674"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1053586\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4902.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4902.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4902.jpg"
                    },
                    "name": "阿曼达·塞弗里德",
                    "id": "1053586"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1031902\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1484993245.89.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1484993245.89.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1484993245.89.jpg"
                    },
                    "name": "朱丽·沃特斯",
                    "id": "1031902"
                }],
                "collect_count": 6225,
                "original_title": "Mamma Mia! Here We Go Again",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1319911\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48233.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48233.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48233.jpg"
                    },
                    "name": "欧·帕克",
                    "id": "1319911"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528272481.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528272481.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528272481.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/27050259\/",
                "id": "27050259"
            }, {
                "rating": {
                    "max": 10,
                    "average": 5.5,
                    "stars": "30",
                    "min": 0
                },
                "genres": ["动画"],
                "title": "肆式青春",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1397449\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533376408.27.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533376408.27.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533376408.27.jpg"
                    },
                    "name": "坂泰斗",
                    "id": "1397449"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1275208\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p51585.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p51585.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p51585.jpg"
                    },
                    "name": "寿美菜子",
                    "id": "1275208"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1372491\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1509958646.03.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1509958646.03.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1509958646.03.jpg"
                    },
                    "name": "白石晴香",
                    "id": "1372491"
                }],
                "collect_count": 3223,
                "original_title": "詩季織々",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1343518\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1470884079.3.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1470884079.3.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1470884079.3.jpg"
                    },
                    "name": "李豪凌",
                    "id": "1343518"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1317854\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41706.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41706.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41706.jpg"
                    },
                    "name": "易小星",
                    "id": "1317854"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1397448\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533462530.21.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533462530.21.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533462530.21.jpg"
                    },
                    "name": "竹内良贵",
                    "id": "1397448"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526429256.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526429256.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526429256.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/30156898\/",
                "id": "30156898"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.1,
                    "stars": "35",
                    "min": 0
                },
                "genres": ["剧情", "喜剧", "动作"],
                "title": "邪不压正",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1013782\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1368156632.65.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1368156632.65.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1368156632.65.jpg"
                    },
                    "name": "彭于晏",
                    "id": "1013782"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1007401\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1454644679.84.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1454644679.84.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1454644679.84.jpg"
                    },
                    "name": "廖凡",
                    "id": "1007401"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1021999\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg"
                    },
                    "name": "姜文",
                    "id": "1021999"
                }],
                "collect_count": 311265,
                "original_title": "邪不压正",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1021999\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517818343.94.jpg"
                    },
                    "name": "姜文",
                    "id": "1021999"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526297221.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526297221.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526297221.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/26366496\/",
                "id": "26366496"
            }, {
                "rating": {
                    "max": 10,
                    "average": 5.6,
                    "stars": "30",
                    "min": 0
                },
                "genres": ["喜剧", "动画", "奇幻"],
                "title": "神奇马戏团之动物饼干",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1041022\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21481.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21481.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21481.jpg"
                    },
                    "name": "艾米莉·布朗特",
                    "id": "1041022"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1027146\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1452855116.89.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1452855116.89.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1452855116.89.jpg"
                    },
                    "name": "约翰·卡拉辛斯基",
                    "id": "1027146"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1054410\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453792417.87.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453792417.87.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453792417.87.jpg"
                    },
                    "name": "伊恩·麦克莱恩",
                    "id": "1054410"
                }],
                "collect_count": 5426,
                "original_title": "Magical Circus : Animal Crackers",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1277815\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500617178.26.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500617178.26.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500617178.26.jpg"
                    },
                    "name": "托尼·班克罗夫特",
                    "id": "1277815"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1206807\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500623271.8.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500623271.8.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1500623271.8.jpg"
                    },
                    "name": "斯科特·克里斯汀·萨瓦",
                    "id": "1206807"
                }],
                "year": "2017",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298973.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298973.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528298973.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/26253783\/",
                "id": "26253783"
            }, {
                "rating": {
                    "max": 10,
                    "average": 0,
                    "stars": "00",
                    "min": 0
                },
                "genres": ["剧情", "传记"],
                "title": "李保国",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1274650\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5995.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5995.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5995.jpg"
                    },
                    "name": "林永健",
                    "id": "1274650"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1034637\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1415028031.49.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1415028031.49.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1415028031.49.jpg"
                    },
                    "name": "颜丹晨",
                    "id": "1034637"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1301518\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p14604.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p14604.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p14604.jpg"
                    },
                    "name": "尤勇",
                    "id": "1301518"
                }],
                "collect_count": 260,
                "original_title": "李保国",
                "subtype": "movie",
                "directors": [{
                    "alt": null,
                    "avatars": null,
                    "name": "赵琦",
                    "id": null
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529852602.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529852602.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529852602.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/27104330\/",
                "id": "27104330"
            }, {
                "rating": {
                    "max": 10,
                    "average": 6.8,
                    "stars": "35",
                    "min": 0
                },
                "genres": ["动作", "科幻", "冒险"],
                "title": "侏罗纪世界2",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1017967\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1408711300.32.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1408711300.32.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1408711300.32.jpg"
                    },
                    "name": "克里斯·帕拉特",
                    "id": "1017967"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1027772\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p315.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p315.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p315.jpg"
                    },
                    "name": "布莱丝·达拉斯·霍华德",
                    "id": "1027772"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1350981\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1523860646.23.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1523860646.23.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1523860646.23.jpg"
                    },
                    "name": "贾斯蒂斯·史密斯",
                    "id": "1350981"
                }],
                "collect_count": 196162,
                "original_title": "Jurassic World: Fallen Kingdom",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1305510\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372318484.25.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372318484.25.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372318484.25.jpg"
                    },
                    "name": "胡安·安东尼奥·巴亚纳",
                    "id": "1305510"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522069454.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522069454.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522069454.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/26416062\/",
                "id": "26416062"
            }, {
                "rating": {
                    "max": 10,
                    "average": 5.0,
                    "stars": "25",
                    "min": 0
                },
                "genres": ["儿童", "动画", "冒险"],
                "title": "新大头儿子和小头爸爸3：俄罗斯奇遇记",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1318433\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44177.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44177.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44177.jpg"
                    },
                    "name": "刘纯燕",
                    "id": "1318433"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1318435\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44180.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44180.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44180.jpg"
                    },
                    "name": "董浩",
                    "id": "1318435"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1274251\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1494778054.15.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1494778054.15.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1494778054.15.jpg"
                    },
                    "name": "鞠萍",
                    "id": "1274251"
                }],
                "collect_count": 7289,
                "original_title": "新大头儿子和小头爸爸3：俄罗斯奇遇记",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1342907\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1469705072.9.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1469705072.9.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1469705072.9.jpg"
                    },
                    "name": "何澄",
                    "id": "1342907"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522820714.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522820714.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522820714.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/30198729\/",
                "id": "30198729"
            }, {
                "rating": {
                    "max": 10,
                    "average": 8.1,
                    "stars": "40",
                    "min": 0
                },
                "genres": ["喜剧", "动作", "动画"],
                "title": "超人总动员2",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1002721\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21297.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21297.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21297.jpg"
                    },
                    "name": "格雷格·T·尼尔森",
                    "id": "1002721"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1031838\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48614.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48614.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48614.jpg"
                    },
                    "name": "霍利·亨特",
                    "id": "1031838"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1186797\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529654136.33.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529654136.33.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529654136.33.jpg"
                    },
                    "name": "莎拉·沃威尔",
                    "id": "1186797"
                }],
                "collect_count": 107582,
                "original_title": "Incredibles 2",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1027204\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529655910.45.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529655910.45.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529655910.45.jpg"
                    },
                    "name": "布拉德·伯德",
                    "id": "1027204"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522880251.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522880251.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2522880251.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/25849049\/",
                "id": "25849049"
            }, {
                "rating": {
                    "max": 10,
                    "average": 0,
                    "stars": "00",
                    "min": 0
                },
                "genres": ["喜剧", "爱情"],
                "title": "真心话太冒险",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1355001\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1456208642.89.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1456208642.89.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1456208642.89.jpg"
                    },
                    "name": "涂世旻",
                    "id": "1355001"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1398496\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
                        "large": "https://img3.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
                        "medium": "https://img1.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
                    },
                    "name": "柯子静",
                    "id": "1398496"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1398497\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
                        "large": "https://img3.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
                        "medium": "https://img1.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
                    },
                    "name": "Stephanie Stralow",
                    "id": "1398497"
                }],
                "collect_count": 47,
                "original_title": "真心话太冒险",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1398494\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
                        "large": "https://img3.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
                        "medium": "https://img1.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
                    },
                    "name": "谢韵",
                    "id": "1398494"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1398495\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
                        "large": "https://img3.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
                        "medium": "https://img1.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
                    },
                    "name": "黄俊舒",
                    "id": "1398495"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528763272.jpg",
                    "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528763272.jpg",
                    "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2528763272.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/30274733\/",
                "id": "30274733"
            }, {
                "rating": {
                    "max": 10,
                    "average": 0,
                    "stars": "00",
                    "min": 0
                },
                "genres": ["历史", "战争"],
                "title": "浴血广昌",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1384169\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1511950470.56.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1511950470.56.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1511950470.56.jpg"
                    },
                    "name": "卢秋宏",
                    "id": "1384169"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1326695\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1492423392.22.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1492423392.22.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1492423392.22.jpg"
                    },
                    "name": "何达",
                    "id": "1326695"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1317855\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41469.jpg",
                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41469.jpg",
                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41469.jpg"
                    },
                    "name": "郑昊",
                    "id": "1317855"
                }],
                "collect_count": 385,
                "original_title": "浴血广昌",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1319184\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46010.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46010.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46010.jpg"
                    },
                    "name": "高峰",
                    "id": "1319184"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1327101\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532071022.25.jpg",
                        "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532071022.25.jpg",
                        "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1532071022.25.jpg"
                    },
                    "name": "张馨",
                    "id": "1327101"
                }],
                "year": "2018",
                "images": {
                    "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529260597.jpg",
                    "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529260597.jpg",
                    "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529260597.jpg"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/27180974\/",
                "id": "27180974"
            }]
        })

        console.log(this.state)
    }

    render() {
        return (
            <Layout>
                <div className={detail.detail_content}>
                    <div className={detail.left_content}>
                        <h2 className={detail.header}>{this.props.detail_message[0].title}</h2>
                        <img className={detail.big_img} src={this.props.detail_message[0].img}/>
                        <div className={detail.banner_text}>
                            <h5>描述</h5>
                            <p>	{this.props.detail_message[0].text} </p>
                        </div>
                    </div>

                    <div className={detail.reight_content}>
                        <h3>{this.state.data.title}</h3>
                        <ul className={detail.detail_list}>
                            {this.props.moviesList.map((item) => (
                                <li key={item.id} className={detail.list_item}>
                                    <div className={detail.item_left_img}>
                                        <img src={item.images.small} alt=""/>

                                    </div>
                                    <div className={detail.item_right_text}>
                                        <p className={detail.title}>{item.title}</p>
                                        <p className={detail.casts}>
                                            {item.casts.map((casts_item)=>(
                                                <a href={casts_item.alt}>{casts_item.name}  </a>
                                            ))}
                                        </p>
                                        <p>
                                            {item.directors.map((directors_item)=>(
                                                <a  href={directors_item.alt}>{directors_item.name}  </a>
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


export default Index