/**
 * 公共头部模块
 */
import React, { Component } from 'react'
import Link from 'next/link'
import style from './index.less'

export default class Header extends Component {
    render() {
        return (
            <div className={style.header}>
				<div className={style.container}>
					<div className={style.w3layouts_logo}>
						<a><h1>New<span>Movies</span></h1></a>
					</div>
					<div className={style.w3_search}>
						<input type="text" name="Search" placeholder="请输入查询的视频" required=""/>
						<input type="submit" value="Go"/>
					</div>
				</div>
			</div>
        )
    }
}