import React from 'react';


import {Card, CardTitle, CardText} from 'material-ui';

import {Education, EducationTitle} from './Education';
import {Experience, ExperienceTitle} from './Experience';
import {Interest, InterestTitle} from './Interest';
import {Language, LanguageTitle} from './Language';
import {Profile, ProfileTitle} from './Profile';
import {Skills, SkillsTitle} from './Skills';

const MOBILE_CARD_STYLE = {
    position: 'relative',
    marginTop:0,
    marginLeft: "5%",
    marginRight:"5%",
    marginBottom: "4%",
    padding: 10,
    paddingTop: 5,
    alignItems: 'center',
    backgroundColor: '#ddd',
    fontSize:15,
}
const DESKTOP_CARD_STYLE = {
    position: 'relative',
    marginTop:0,
    marginLeft: "13%",
    marginRight:"13%",
    marginBottom: "2%",
    padding: 15,
    paddingTop: 5,
    alignItems: 'center',
    backgroundColor: '#ddd',
    fontSize:15,
}

const SectionContent = (props) => 
{
    if (props.isMobile)
    {
        return <MobileView {...props}/>;
    }
    else 
    {
        return <DesktopView {...props}/>;
    }
}

const DesktopView = (props) => 
(
    <Card style={DESKTOP_CARD_STYLE}>
        <CardTitle>{props.title}</CardTitle>
        <CardText>
            {props.content}
        </CardText>
    </Card>
)

const MobileView = (props) => 
(
    <Card style={MOBILE_CARD_STYLE}>
        <CardTitle>{props.title}</CardTitle>
        <CardText>
            {props.content}
        </CardText>
    </Card>
)

const Section = (props) =>
{
    switch(props.type)
    {
    case "Education" :
        return <SectionContent
            isMobile={props.isMobile}
            title={<EducationTitle/>}
            content={<Education isMobile={props.isMobile}/>}/>;
    case "Experience" :
        return <SectionContent
            isMobile={props.isMobile}
            title={<ExperienceTitle/>}
            content={<Experience isMobile={props.isMobile}/>}/>;
    case "Interest" :
        return <SectionContent 
            isMobile={props.isMobile}
            title={<InterestTitle/>}
            content={<Interest isMobile={props.isMobile}/>}/>;
    case "Language" :
        return <SectionContent 
            isMobile={props.isMobile}
            title={<LanguageTitle/>}
            content={<Language isMobile={props.isMobile}/>}/>;
    case "Profile":
        return <SectionContent 
            isMobile={props.isMobile}
            title={<ProfileTitle/>}
            content={<Profile isMobile={props.isMobile}/>}/>;
    case "Skills" :
        return <SectionContent 
            isMobile={props.isMobile}
            title={<SkillsTitle/>}
            content={<Skills isMobile={props.isMobile}/>}/>;
    default :
        return <div></div>;
    }
}

export default Section;
