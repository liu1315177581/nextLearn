import React, { Component } from 'react'
import Link from 'next/link'
export default class Header extends Component {
    render() {
        return (
            <div>
				<Link href="/about">
					<a href="">about</a>
				</Link>
				<Link href="/index">
					<a href="">index</a>
				</Link>
			</div>
        )
    }
}