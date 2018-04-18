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

const Interest = () => 
    <GridList cellHeight='auto' cols={person.interests.length}>
    {person.interests.map(interest => 
        <GridTile key={interest}>
            <h3>{interest.name}</h3>
                <Image key="avatar" src={interest.picture} width={200} centered fluid/>
            <div style={styles.wrapper}>
                {interest.keywords.map(keyword =>
                    <Chip key={keyword} style={styles.chip}>{keyword}</Chip> 
                )}
            </div>
        </GridTile>
    )}
    </GridList>

const InterestTitle = () =>
(
    <h1>Intérêts</h1>
)
export {Interest, InterestTitle};
