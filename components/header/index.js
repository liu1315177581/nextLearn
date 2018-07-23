import React, { Component } from 'react'
import Link from 'next/link'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
				<div className="container">
					<div className="w3layouts_logo">
						<a href="index.html"><h1>New<span>Movies</span></h1></a>
					</div>
					<div className="w3_search">
						<input type="text" name="Search" placeholder="请输入查询的视频" required=""/>
						<input type="submit" value="Go"/>
					</div>
					<div className="w3l_sign_in_register">
						<ul>
							
						</ul>
					</div>
					<div className="clearfix"> </div>
				</div>
			</div>
        )
    }
}