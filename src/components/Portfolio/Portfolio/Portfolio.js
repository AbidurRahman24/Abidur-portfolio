import React, { useState } from 'react';
import PortfolioDetails from '../PortfolioDetails/PortfolioDetails';
import './Portfolio.css'
import doctor from '../img/doctorsPortal.png'
import gym from '../img/GYM.png'
import busTicket from '../img/BUS-TICKET.png'
import player from '../img/PLAYER SALARY.png'
import food from '../img/FOOD.png'
import ticket from '../img/TICKET.png'
import shop from '../img/SHOP.png'

const Project = [
    {
        id: 1,
        url: 'https://doctors-portal-e60bb.web.app/',
        title: 'DOCTORS PORTAL',
        catagory: 'MERN',
        img: doctor
    },
    {
        id: 2,
        url: 'https://power-zone-gym.web.app/',
        title: 'GYM FITNESS',
        catagory: 'MERN',
        img: gym
    },
    {
        id: 3,
        url: 'https://ticket-fire-auth.web.app/',
        title: 'BUS TICKET',
        catagory: 'REACT',
        img: busTicket
    },
    {
        id: 4,
        url: 'https://dazzling-haibt-93bb1d.netlify.app/',
        title: 'PLAYER COUNT',
        catagory: 'REACT',
        img: player
    },
    {
        id: 5,
        url: 'https://niloy-sumon.github.io/food-menu-api/',
        title: 'FOOD BUZZ',
        catagory: 'REACT',
        img: food
    },
    {
        id: 6,
        url: 'https://niloy-sumon.github.io/bus-ticket-js-dom/',
        title: 'TICKET',
        catagory: 'JAVASCRIPT',
        img: ticket
    },
    {
        id: 7,
        url: 'https://super-shop-3751d.web.app/',
        title: 'SUPER SHOP',
        catagory: 'MERN',
        img: shop
    },
]


const Portfolio = () => {

    const [project, setProject] = useState(Project);

    const filterItem = catagoryItem => {
        const updateProject = Project.filter((curElem) => {
            return curElem.catagory === catagoryItem
        })
        setProject(updateProject)
    }

    return (
        <>
            <div className="container">
                <div className="text-center mt-4">
                    <h2>PROJECT</h2>
                    <hr />
                </div>
                <div className="project-btn d-flex justify-content-center m-3">
                    <button className="m-2 p-2 btn btn-warning" onClick={() => setProject(Project)}>ALL</button>
                    <button className="m-2 p-2 btn btn-warning" onClick={() => filterItem('REACT')}>FRONT END</button>
                    <button className="m-2 p-2 btn btn-warning" onClick={() => filterItem('MERN')}>FULL STACK</button>
                    <button className="m-2 p-2 btn btn-warning" onClick={() => filterItem('JAVASCRIPT')}> JAVASCRIPT</button>
                </div>
                <div className="row ">
                    {
                        project.map(data => <PortfolioDetails key={data.id} data={data}></PortfolioDetails>)
                    }
                </div>
            </div>
        </>
    );
};

export default Portfolio;