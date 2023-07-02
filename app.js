'use strict'; // Forces JavaScript into Strict Mode which helps catch common coding mistakes and "unsafe" actions

// Function to show menu when clicked
const showMenu = (toggleId, navId) => {

    // Get elements by id
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    // If either of elements don't exist, return and stop function
    if (!toggle || !nav) return;
    
    // Add event listener for 'click', toggle 'show' classList of nav
    toggle.addEventListener('click', () => nav.classList.toggle('show'));
}

// Invoke showMenu function
showMenu('nav-toggle', 'nav-menu');

// Get all elements with class '.nav__link' and convert NodeList to Array
const navLinks = Array.from(document.querySelectorAll('.nav__link'));

// Function to handle link action
const linkAction = clickedLink => {
    // For each link in navLinks, remove the 'active' classList
    navLinks.forEach(link => link.classList.remove('active'));
    // Add the 'active' classList to the clicked link
    clickedLink.classList.add('active');

    // Get the navMenu element by id and remove the 'show' classList
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

// Add event listener for 'click' to each link in navLinks, bind linkAction function with the clicked link
navLinks.forEach(link => link.addEventListener('click', linkAction.bind(null, link)));

// Get signout button and signin button by their class
const signout_btn = document.querySelector(".signout");
const signin_btn = document.querySelector(".signin");

// Function to handle the display style on page load
const index_onload = () => {
    // Get the modal_window by id and set the display style to 'none'
    modal_window.style.display = "none";

    // Check if token exists in local storage and set the display style accordingly
    const displayStyle = localStorage.getItem("token") ? "initial" : "none";
    // Apply the display style to signout button
    signout_btn.style.display = displayStyle;
    // If display style is 'initial', hide the signin button, otherwise show the signin button
    signin_btn.style.display = displayStyle === "initial" ? "none" : "initial";
}
