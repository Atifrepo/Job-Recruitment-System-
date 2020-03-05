import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import {NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserClock} from '@fortawesome/free-solid-svg-icons'
class JobItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取数据
        const item = this.props.data;
        let link = "/jobSummary/"+ item.id;
        return (
            <div className="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    <NavLink href={link}>{item.jobName} &nbsp;{item.id==1?<FontAwesomeIcon icon={faUserClock}/>:''} </NavLink>
                </h3>
                <p style={{ color: '#FFFFFF' }}>Status:{item.status}</p>
            </div>
        )
    }
}

export default JobItem