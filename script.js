"use strict";

const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-img");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, culpa! Aliquam hic consequuntur architecto facere eius officia amet libero atque ullam delectus dolor neque repudiandae cum soluta, voluptatem earum ratione quisquam corrupti dolores? Animi cumque dolore minima recusandae et, sed neque aperiam impedit! Numquam maiores iste eos quaerat optio earum!",
  },

  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, culpa! Aliquam hic consequuntur architecto facere eius offiores iste eos quaerat optio earum",
  },

  {
    name: "Sasha Ho",
    position: "Accountant",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "ipsum dolor sit amet consectetur adipisicing elit. Dolores, culpa! Aliquam hic consequuntur architecto facere eius offiisqu",
  },
  {
    name: "Veeti Sappanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    text: "ipsum dolor sit amet consectetur adipisicing elit. Dolores, culpa! Aliquam hic consequuntur architecto facere eius facerem dolor sit amet consectetur adipisicing elit. Dolores, culpa! Aliquam hic consequuntur architecto facere eius  offiisqu",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(() => {
  updateTestimonial();
}, 8000);
