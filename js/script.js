const $ = (...s) => document.querySelector(...s); 
const $$ = (...s) => Array.from(document.querySelectorAll(...s));

const $demo = $(".demo");
const $sections = $$("body > section").reverse();
const $pages = $$(".page");
const $editor = $(".demo .editor");

window.addEventListener("scroll", e => {
  const vhhalf = window.innerHeight / 2;
  let className = "demo";
  if(pageYOffset > vhhalf) className += " fixed";
  const $showing = $sections
    .find($section =>
      $section.getBoundingClientRect().top < vhhalf);
  if($showing){
    const $page = $showing.getElementsByClassName("page")[0];
    $page.classList.add("show");
    className += " ";
    className += $page.getAttribute("data-demo");
    if($page.classList.contains("right")) {
      className += " left";
    } else {
      className += " right";
    }
  }
  const {top} = $sections[0].getBoundingClientRect();
  $demo.style.top = top < 0 ? top + "px" : "";
  $demo.className = className;
});
