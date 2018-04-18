import React from 'react';

import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import { person } from '../../../datas/person';

import {FaLinkedin, FaGithub} from 'react-icons/lib/fa'
import {MdCall, MdMail, MdWeb, MdPlace} from 'react-icons/lib/md'

import {GridList, GridTile} from 'material-ui';

const Profile = () => 
(
    <GridList cellHeight='auto' cols={4}>
        <GridTile cols={3}>
            <h3>Présentation</h3>
            {person.basics.summary.map(line => 
                (
                <p key={line}>{line}</p>
                )
            )
            }
            <GridList cellHeight='auto'>
                <GridTile>
                    {getContacts()}
                </GridTile>
                <GridTile>
                    {getProfiles()}
                </GridTile>
            </GridList>
        </GridTile>
        <GridTile>
            <Image key="avatar" src={person.basics.picture} width={200} circular/>
        </GridTile>
    </GridList>
)

const getContacts = () =>
(
    <div>
        <h3>Contacts</h3>
        <p><MdCall/> {person.basics.phone}</p>
        <MdWeb/> <a href={person.basics.website}>{person.basics.website}</a>
        <p><MdMail/> {person.basics.email}</p>
        <p><MdPlace/> {person.basics.location.address + ", " + person.basics.location.city
            + ", " + person.basics.location.countryCode}
        </p>
    </div>
)

const getProfiles = () =>
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
    <div>
        <h2>{person.basics.name} - {person.basics.label}</h2>
    </div>
)

export {Profile, ProfileTitle};
