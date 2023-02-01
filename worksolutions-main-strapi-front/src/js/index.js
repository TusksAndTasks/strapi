import "jquery-bez";
import "dragscroll";
import "slick-carousel";
import "lazysizes";
import { device } from "device.js";

import "../css/main.scss";

import detectOs from "./include/detectOs";
import menu from "./include/menu";
import map from "./include/map";
import generalAnimations from "./include/generalAnimations";
import difference from "./include/difference";
import modal from "./include/modal";
import forms from "./include/forms";
import experience from "./include/experience";
import first from "./include/first";
import teamSlider from "./include/teamSlider";
import reviewsSlider from "./include/reviewsSlider";
import blogInIndex from "./include/blogInIndex";
import setLocationForHiddenInputs from "./include/forms/setLocationForHiddenInputs";
import about from "./include/about";
import features from "./include/features";
import technologes from "./include/technologes";
import team from "./include/team";
import developers from "./include/developers";

device.addClasses(document.documentElement);

document.addEventListener("DOMContentLoaded", function() {
  detectOs();
  first();
  about();
  features();
  technologes();
  menu();
  map();
  generalAnimations();
  modal();
  forms();
  difference();
  experience();
  teamSlider();
  team();
  developers();
  blogInIndex();
  reviewsSlider();
  setLocationForHiddenInputs();
});
