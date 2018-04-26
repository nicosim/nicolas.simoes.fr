import React from 'react';

import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import { person } from '../../../datas/person';

import {FaLinkedin, FaGithub} from 'react-icons/lib/fa'
import {MdCall, MdMail, MdWeb, MdPlace} from 'react-icons/lib/md'

import {GridList, GridTile} from 'material-ui';

const Profile = (props) => 
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
        <GridTile cols={3}>
            <GridList cellHeight='auto' cols={3}>
                <GridTile cols={3}>
                    {getPresentation()}
                </GridTile>
                <GridTile cols={2}>
                    {getContacts()}
                </GridTile>
                <GridTile cols={1}>
                    {getNetwork()}
                </GridTile>
            </GridList>
        </GridTile>
        <GridTile>
            <Image key="avatar" src={person.basics.picture} width={200} circular/>
        </GridTile>
    </GridList>
)

const MobileView = () =>
(
    <GridList cellHeight='auto' cols={2}>
        <GridTile>
            <GridList cellHeight='auto' cols={1}>
                <GridTile>
                    {getPresentation()}
                </GridTile>
                <GridTile>
                    {getNetwork()}
                </GridTile>
            </GridList>
        </GridTile>
        <GridTile>
            <Image key="avatar" src={person.basics.picture} width={200} circular/>
        </GridTile>
        <GridTile cols={2}>
            {getContacts()}
        </GridTile>
    </GridList>
)

const getPresentation = () => 
(
    <div>
        <h3>Présentation</h3>
        {person.basics.summary.split('\n').map((item, key) => {
                  return <span key={key}>{item}<br/></span>
        })}
    </div>
) 

const getContacts = () =>
(
    <div>
        <h3>Contacts</h3>
        <div><MdCall/> {person.basics.phone}</div>
        <div><MdWeb/> <a href={person.basics.website}>{person.basics.website}</a></div>
        <div><MdMail/> {person.basics.email}</div>
        <div><MdPlace/> {person.basics.location.address + ", " + person.basics.location.city
            + ", " + person.basics.location.countryCode}
        </div>
    </div>
)

const getNetwork = () =>
(
    <div>
        <h3>Réseaux</h3>
        {person.basics.profiles.map(profile => 
            (
            <div key={profile.network}>
                {getLogo(profile.network)} <a href={profile.url}>{profile.username}</a>
            </div>
            )
        )
        }
    </div>
)

const getLogo = (network) => {
    switch(network)
    {
        case 'LinkedIn' : return <FaLinkedin/>;
        case 'GitHub' : return <FaGithub/>;
        case 'WebSite' : return <MdWeb/>;
        default : return <MdWeb/>;
    }
}


const ProfileTitle = () =>
(
    <h2>{person.basics.name} - {person.basics.label}</h2>
)

export {Profile, ProfileTitle};
