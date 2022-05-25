import React from 'react';
import weatherApp from '../assets/weather-app.PNG';
import regExTutorial from '../assets/regex-tutorial.PNG';
import sportsFinder from '../assets/sports-finder.PNG';
import codeQuiz from '../assets/code-quiz.PNG';
import teamProfGen from '../assets/team-prof-generator.PNG';
import techBlog from '../assets/tech-login-page.PNG';
import './Portfolio.scss';

export const Portfolio = () => (
  <div className="container-fluid project-grid ">
    <h1>
      <span>Portfolio, Click Images to view project</span>
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
        <a href="https://gist.github.com/brennan64/ac37b9b9cb8cfa2bdec7b6db371c0e5c">
          <img src={regExTutorial} alt="Reg Ex Tutorial, educational markdown page." />
        </a>
        <p>
          RegEx tutorial markdown page, made to further my own understanding of regex.{' '}
          <a href="https://github.com/brennan64/regex-tutorial">Github </a>
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
        <a href="https://brennan64.github.io/CodingQuiz/">
          <img src={codeQuiz} alt="Timed Javascript coding quiz" />
        </a>
        <p>
          JavaScript timed coding quiz.{' '}
          <a href="https://github.com/brennan64/CodingQuiz">Github </a>
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
        <a href="https://frozen-bayou-00211.herokuapp.com/">
          <img src={techBlog} alt="tech blog application with login and commenting functionality" />
        </a>
        <p>
          Tech Blog website made with express, handlebars, and a sql database.{' '}
          <a href="https://github.com/brennan64/tech-blog">Github </a>
        </p>
      </div>
    </div>
  </div>
);
