import React from 'react';

import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import '../style.css';
import { person } from '../../../datas/person';
import {GridList, GridTile} from 'material-ui';
import {List, ListItem} from 'material-ui';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from 'material-ui-icons/Work';

const style = {
    listItem: {
      fontSize:14,
      padding:8,
    },
}

const Experience = (props) => 
{
    if (props.isMobile)
    {
        return <MobileView/>;
    }
    else {
        return <DesktopView/>;
    }
}

const DesktopView = () => 
(
    <GridList cellHeight='auto' cols={4}>
        <GridTile 
            cols={1}>
            <Image key="education" src="images/work experiences.jpg" height={800}/>
        </GridTile>
        <GridTile
            cols={3}>
        {displayTimeLine()}
        </GridTile>
    </GridList>
)

const MobileView = () => 
(
    <div>{displayTimeLine()}</div>
)

const displayDetails = () =>
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
            <h3 className="vertical-timeline-element-title">{work.position}</h3>
            <h4 className="vertical-timeline-element-subtitle">{work.company}</h4>
            <a href={work.website}>{work.website}</a>
            <p>{work.summary}</p>
            <List>
            {work.highlights.map(h=>
                <ListItem key={h} primaryText={h} innerDivStyle={style.listItem}/> 
            )}
            </List>
        </VerticalTimelineElement>
    )
)

const displayTimeLine = () =>
(
        <VerticalTimeline>
            {displayDetails()}
        </VerticalTimeline>
)

const ExperienceTitle = () =>
(
    <h1>Experience</h1>
)
export {Experience, ExperienceTitle};
