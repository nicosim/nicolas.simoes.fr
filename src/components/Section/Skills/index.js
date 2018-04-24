import React, {Component} from 'react';

import { PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { ResponsiveContainer, RadarChart, Radar, Tooltip} from 'recharts';

import {GridList, GridTile} from 'material-ui';

import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { person } from '../../../datas/person';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeSkill: '',
        };
    }
    customSkillTooltip = (props) => 
    {
        const { active, label } = props;
        if (active) {
            this.setState({activeSkill:label});
        }
        return null;
    }

    findSkill = (label) =>
    {
      return person.skills.find(skill => {return skill.name === label;});
    }

    displayActiveSkill = (activeSkill) =>
    (
        <div>
            {activeSkill !==''?
                this.displaySkill(activeSkill)
            :
                this.displaySkill(person.skills[0].name)
            }
        </div>
    )

    displaySkill = (label) =>
    {
        return (
            <div>
                <h3>{label}</h3>
                {this.findSkill(label).keywords.map(keyword => 
                <p key={keyword}>{keyword}</p>
                )}
            </div>
        );
    }

    handleOnOver = (e) => 
    {
        this.customSkillTooltip({active:true,label:e.value});
    }

    displaySkillsChart = () =>
    {
        return (
            <ResponsiveContainer width="100%">
                <RadarChart key="chart" data={person.skills}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" onMouseOver={this.handleOnOver}/>
                    <PolarRadiusAxis angle={125} domain={[0, 100]} />
                    <Tooltip content={this.customSkillTooltip}/>
                    <Radar name="" dataKey="level" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );
    }

    render() 
    {
        const {activeSkill} = this.state;
        return (
            <div>
                {this.props.isMobile?
                    this.MobileView(activeSkill)
                :
                    this.DesktopView(activeSkill)
                }
            </div>
        );
    }

    DesktopView = (activeSkill) =>
    (
        <GridList cellHeight='auto' cols={5}>
            <GridTile>
                <Image key="avatar" src="images/detecteur.jpg" width={400}/>
            </GridTile>
            <GridTile cols={2}>
                {this.displaySkillsChart()}
            </GridTile>
            <GridTile cols={2}>
                {this.displayActiveSkill(activeSkill)}
            </GridTile>
        </GridList>
    )

    MobileView = (activeSkill)  =>
    (
        <GridList cols={1}>
            <GridTile>
                {this.displaySkillsChart()}
            </GridTile>
            <GridTile>
                {this.displayActiveSkill(activeSkill)}
            </GridTile>
        </GridList>   
    )
};

const SkillsTitle = () =>
(
    <h1>Compétences</h1>
)
export {Skills, SkillsTitle};
