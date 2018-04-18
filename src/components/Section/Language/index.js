import React from 'react';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis} from 'recharts';

import { person } from '../../../datas/person';

const LanguageLevel = {
    fr : [
        "Débutant","Élémentaire","Intermédiaire","Expert","Language maternelle",
    ],
    en: [
        "Beginner","Basic","Intermediate","Expert","Native Speaker",
    ],
}

const Language = () => 
    <ResponsiveContainer height={150}>
        <BarChart layout="vertical" data={person.languages}>
            <XAxis type="number"/>
            <YAxis dataKey="name" type="category"/>
            <Bar 
                dataKey="level" 
                fill="#8884d8" />
        </BarChart>
    </ResponsiveContainer>

const LanguageTitle = () =>
(
    <h1>Langues</h1>
)
export {Language, LanguageTitle};
