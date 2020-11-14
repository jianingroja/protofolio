import Ignite from "./images/ignite.png";
import Jazznight from "./images/jazznight.png";
import Music from "./images/music-player.png";
import Recipe from "./images/recipe.png";
import Rock from "./images/rock-paper.png";
import TaskManager from "./images/task-manager.png";
import TodoRedux from "./images/todo-redux.png";
import Weather from "./images/weather.png";
import Duozhuayu from "./images/duozhuayu.png";
import Apple from "./images/apple.png";
//shoping cart
//react todolisit

function data() {
  return [
    {
      type: "html/css",
      title: "Clone Duozhuayu Career Website",
      description:
        "Clone Duozhuayu-2021-Campus-Recruitment website with Html and Css.",
      url: "https://jianingroja.github.io/duozhuayu-clone/",
      image: Duozhuayu,
    },
    {
      type: "react",
      title: "React - Music Player",
      description: "Music Player built with React Hooks and node-sass",
      url: "https://jianingroja.github.io/react-music-player/",
      image: Music,
    },
    {
      type: "react",
      title: "React & Router - JazzNight Website",
      url: "https://jianingroja.github.io/react-jazznight-website/#/",
      image: Jazznight,
    },
    {
      type: "react",
      title: "React & Redux & Router - Ignite Game Website",
      url: "https://jianingroja.github.io/react-ignite/",
      image: Ignite,
    },

    {
      type: "react",
      title: "React - Recipe",
      url: "https://jianingroja.github.io/react-recipe/",
      image: Recipe,
    },

    {
      type: "react",
      title: "React & Redux - Weather App",
      url: "https://jianingroja.github.io/react-weather-app/",
      image: Weather,
    },
    {
      type: "react",
      title: "React & Redux - TodoList",
      url: "https://jianingroja.github.io/todolist-redux/",
      image: TodoRedux,
    },
    {
      type: "javascript",
      title: "JavaScript - Task Manager",
      description:
        "Manage your tasks by adding, updating, filtering with status, sorting with name and deadline, deleting.",
      url: "https://jianingroja.github.io/task-manager-segundo/",
      image: TaskManager,
    },
    {
      type: "javascript",
      title: "JavaScript - Rock Paper Scissor",
      description:
        "Classic responsive Rock-Paper-Scissor game built with JavaScript.",
      url: "https://jianingroja.github.io/rock-paper-scissor/",
      image: Rock,
    },
    {
      type: "html/css",
      title: "Clone Apple Website",
      description: "Clone Apple-iPhone6s-Release website with Html and Css.",
      image: Apple,
      url: "https://elastic-minsky-0fdfcb.netlify.app/",
    },
  ];
}

export default data;
