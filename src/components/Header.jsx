import React from 'react';
import { Link } from 'react-router-dom';

export default() => (
  <header>
    <Link id="logo" to="/">The JS Quiz</Link>

    <nav>
      <Link to="/">HOME</Link>
      <Link to="/resources">RESOURCES</Link>
      <a href="https://github.com/JamieLivingstone/TheJSQuiz" target="_blank" rel="noopener noreferrer">GITHUB</a>
    </nav>
  </header>
);
