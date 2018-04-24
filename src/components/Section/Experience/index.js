import React, {Component} from 'react';

import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import '../style.css';
import { person } from '../../../datas/person';
import {GridList, GridTile} from 'material-ui';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from 'material-ui-icons/Work';
import {WorkDetails} from './WorkDetails';

class Experience extends Component {
    render() 
    {
        return (
            <div>
                {this.props.isMobile?
                    this.MobileView()
                :
                    this.DesktopView()
                }
            </div>
        );
    }

    DesktopView = () => 
    (
        <GridList cellHeight='auto' cols={4}>
            <GridTile 
                cols={1}>
                <Image key="education" src="images/work experiences.jpg" height={800}/>
            </GridTile>
            <GridTile
                cols={3}>
            {this.displayTimeLine()}
            </GridTile>
        </GridList>
    )

    MobileView = () => 
    (
        <div>{this.displayTimeLine()}</div>
    )

    displayTimeLineElements = () =>
    (
        person.work.map(work =>
            <VerticalTimelineElement
                key={work.company}
                className="vertical-timeline-element--education"
                date={work.startDate +' - '+ work.endDate}
                iconStyle={{ background: '#fff', color: '#fff' }}
                icon={work.logo?
                <Image src={work.logo} circular fluid centered/>
                :
                <WorkIcon/>
            }
            >
                <WorkDetails work={work}/>
            </VerticalTimelineElement>
        )
    )

    displayTimeLine = () =>
    (
            <VerticalTimeline>
                {this.displayTimeLineElements()}
            </VerticalTimeline>
    )

}

const ExperienceTitle = () =>
(
    <h1>Experience</h1>
)
export {Experience, ExperienceTitle};
