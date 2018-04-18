import React from 'react';


import {Card, CardTitle, CardText} from 'material-ui';

import {Education, EducationTitle} from './Education';
import {Experience, ExperienceTitle} from './Experience';
import {Interest, InterestTitle} from './Interest';
import {Language, LanguageTitle} from './Language';
import {Profile, ProfileTitle} from './Profile';
import {Skills, SkillsTitle} from './Skills';

const CARD_STYLE = {
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
    <Card style={CARD_STYLE}>
        <CardTitle>{props.title}</CardTitle>
        <CardText>
            {props.content}
        </CardText>
    </Card>

const Section = (props) =>
{
    switch(props.type)
    {
    case "Education" :
        return <SectionContent
            title={<EducationTitle/>}
            content={<Education/>}/>;
    case "Experience" :
        return <SectionContent
            title={<ExperienceTitle/>}
            content={<Experience/>}/>;
    case "Interest" :
        return <SectionContent 
            content={<Interest/>}
            title={<InterestTitle/>}/>;
    case "Language" :
        return <SectionContent 
            content={<Language/>}
            title={<LanguageTitle/>}/>;
    case "Profile":
        return <SectionContent 
            title={<ProfileTitle/>}
            position="right"
            content={<Profile/>}/>;
    case "Skills" :
        return <SectionContent 
            content={<Skills/>}
            title={<SkillsTitle/>}/>;
    default :
        return <div></div>;
    }
}

export default Section;
