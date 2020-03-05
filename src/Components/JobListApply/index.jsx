import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class JobListApply extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        // 获取数据
        //const data = this.props.data
        const data = [{
            jobName: "House Moving",
            id: "3",
            status: "In Progress",
            apply_date: "2020-03-04"
        }, {
            jobName: "Chemistry Midterm review",
            id: "4",
            status: "Complete",
            apply_date: "2020-02-15"
        }];

        return (
            <div className="comment-list">
                {data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default JobListApply