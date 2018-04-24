import React from 'react';

import {GridList, GridTile} from 'material-ui';
import {Chip} from 'material-ui';

import {blue300} from 'material-ui/styles/colors';

import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import { person } from '../../../datas/person';


const styles = {
    chip: {
      margin: 4,
      backgroundColor:blue300
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
}

const Interest = (props) => 
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
    <GridList 
        cellHeight='auto' 
        cols={person.interests.length}>
    {person.interests.map(interest => 
        <GridTile key={interest.name}>
            <h3>{interest.name}</h3>
                <Image src={interest.picture} width={200} centered fluid/>
            <div style={styles.wrapper}>
                {interest.keywords.map(keyword =>
                    <Chip key={keyword} style={styles.chip}>{keyword}</Chip> 
                )}
            </div>
        </GridTile>
    )}
    </GridList>
)

const MobileView = () => 
(
    person.interests.map(interest => 
        <GridList 
            key={interest.name} 
            cellHeight='auto' cols={2}
            style={{
                marginBottom : '5%',
              }}>
            <GridTile>
                <h3>{interest.name}</h3>
                <Image src={interest.picture} width={200} centered fluid/>
            </GridTile>
            <GridTile style={styles.wrapper}>
                {interest.keywords.map(keyword =>
                    <Chip key={keyword} style={styles.chip}>{keyword}</Chip> 
                )}
            </GridTile>
        </GridList>
    )
)

const InterestTitle = () =>
(
    <h1>Intérêts</h1>
)
export {Interest, InterestTitle};
