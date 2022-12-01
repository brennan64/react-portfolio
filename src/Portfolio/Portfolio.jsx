import React from 'react';
import weatherApp from '../assets/weather-app.PNG';

import sportsFinder from '../assets/sports-finder.PNG';

import teamProfGen from '../assets/team-prof-generator.PNG';

import './Portfolio.scss';

export const Portfolio = () => (
  <div className="container-fluid project-grid ">
    <h1>
      <span>Portfolio, Click Images to View Deployment</span>
    </h1>
    <div className="row">
      <div className="col">
        <a href="https://brennan64.github.io/weather-app/">
          <img src={weatherApp} alt="weather application, api project" />
        </a>
        <p>
          Weather App made with OpenWeather API.
          <a href="https://github.com/brennan64/weather-app">Github</a>
        </p>

      </div>
      <div className="col">
        <a href="https://fchang1720.github.io/Sporting-Event-Finder/">
          <img src={sportsFinder} alt="sports finder, a group project that uses multiple apis." />
        </a>
        <p>
          Sports Event Finder, using OpenWeather and SeatGeek apis.{' '}
          <a href="https://github.com/fchang1720/Sporting-Event-Finder">Github </a>
        </p>

      </div>
      <div className="col">
        <a href="https://github.com/brennan64/team-profile-generator">
          <img
            src={teamProfGen}
            alt="Command line application that creates a web template for a team profile."
          />
        </a>
        <p>
          Team Profile Generator command line application built with inquirer.js.{' '}
          <a href="https://github.com/brennan64/team-profile-generator">Github </a>
        </p>

      </div>
    </div>
<div className='resume'>
<a href="https://docs.google.com/document/d/1cshaw02zf32f9htUmnaDqy6ihCQJg4BgPF4XUqOmvwk/edit?usp=sharing"> Resume</a>
</div>
    
  </div>
);
