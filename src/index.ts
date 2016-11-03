/// <reference path="../typings/index.d.ts" />
import { app } from 'electron';

// Disable TS linter
declare var Notification: any;

// Set onclick listener for notify button
let notifyButton = document.getElementById('notify');
notifyButton.onclick = (event) => {
  showNotification();
};

// Show notification function
let showNotification = () => {
  let myNotification = new Notification('Title', {
    body: 'Lorem Ipsum Dolor Sit Amet'
  })

  myNotification.onclick = () => {
    // Show notification after clicking previous notification
    showNotification();
  }
};
