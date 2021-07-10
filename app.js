"use strict";

const taskInput = document.querySelector('input.task');
const lists = document.querySelector('.lists');

const favSection = document.querySelector('.favs');
const favTitle = document.querySelector('.favs h3');
const favs = document.querySelector('.favs ul');
const favsItems = favs.children;

const tasksSelection = document.querySelector('.tasks');
const tasksTitle = document.querySelector('.tasks h3');
const tasks = document.querySelector('.tasks ul');
const taskItems = tasks.children;

if ( favsItems.length === 0 ) {
    favsSection.style.display = 'none';
  };
  
  if ( taskItems.length === 0 ) {
    tasksSection.style.display = "none";
  };
  
  taskInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      let li = document.createElement('li');
      if (taskInput.value === "") {
        alert("Please add a task");
      } else {
        li.textContent = taskInput.value;
        attachButton(li);
        tasks.appendChild(li);
        tasksTitle.style.display = '';
        taskInput.value = '';
  
        tasksTitle.textContent = "Inbox";
        tasksSection.style.display = "";
      }
    }
  });