import React from 'react';

import { Image } from 'semantic-ui-react'

import '../style.css';
import { person } from '../../../datas/person';
import {Chip} from 'material-ui';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import SchoolIcon from 'material-ui-icons/School';

const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    title: {
        height: "50px",
        overflow: 'hidden',
        fontSize: 32,
        padding:20,

    },
}
const displaySchoolDetails = () =>
    person.education.map(school =>
        <VerticalTimelineElement
            key={school.institution}
            className="vertical-timeline-element--education"
            date={school.startDate +' - '+ school.endDate + ' (' + (school.endDate-school.startDate) +' ans)'}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={school.logo?
            <Image src={school.logo} circular fluid centered/>
            :
            <SchoolIcon/>
        }
        >
            <h3 className="vertical-timeline-element-title">{school.studyType}</h3>
            <h4 className="vertical-timeline-element-subtitle">{school.institution}</h4>
            <div style={styles.wrapper}>
            {school.courses.map(course=>
                <Chip key={course} style={styles.chip}>{course}</Chip> 
            )}
            </div>
        </VerticalTimelineElement>
    );

const displayTimeLine = () =>
    <VerticalTimeline>
        {displaySchoolDetails()}
    </VerticalTimeline>

const Education = () => 
(
    <div>
        {displayTimeLine()}
    </div>
)

const EducationTitle = () =>
(
    <div style={styles.title}>
        Education
    </div>
)
export {Education, EducationTitle};
