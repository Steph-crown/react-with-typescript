import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './component/List';
import AppInterface from './interface';

interface IState {
    people: AppInterface["people"]
}

export default function App() {
    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "LeBron James",
            age: 32,
            url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
            note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad ducimus labore quam quod odio rerum corporis."
        },
        {
            name: "LeBron James",
            age: 32,
            url: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg",
            note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad ducimus labore quam quod odio rerum corporis."
        }
    ])

    

    return (
        <div className="App">
            <h1>People invited to our Party</h1>
            <List people={people} />
        </div>
    );
}

