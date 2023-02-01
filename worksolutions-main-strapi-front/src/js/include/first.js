const titleURL = "/title-api";
const emailURL = "/email-api";
const logoURL = '/logo-api';
const partnersURL = '/partners-api';

function animateFirstTurn(elements) {
  const elementsLength = elements.length;
  let count = 0;

  function animateElement() {
    if (count === elementsLength) return;
    elements[count].classList.add("showed");
    count++;
    setTimeout(() => {
      animateElement();
    }, 100);
  }

  animateElement();
}

function renderTitle(){
  const title =  $(".slogan__title")[0]
  const subtitle = $(".slogan__subtitle")[0]

  $.ajax({
    url: titleURL,
    type: "GET",
    contentType: false,
    cache: false,
    success: function(data) {
       title.innerText =  data?.title
       subtitle.innerText = data?.subtitle
    },
    error: function(e) {
      console.log(e);
    },
  });

}

export default function() {
  renderTitle()
  renderEmail()
  renderLogo()
  renderPartners()
  const firstTurn = document.querySelectorAll("[data-first-animate]");
  const secondTurn = document.querySelectorAll("[data-first-fade]");

  setTimeout(() => animateFirstTurn(firstTurn), 100);
  setTimeout(() => animateFirstTurn(secondTurn), 400);
}

function renderEmail(){
  const email = $(".top-contacts__link_mail")[0]

  $.ajax({
    url: emailURL,
    type: "GET",
    contentType: false,
    cache: false,
    success: function(data) {
      email.innerText = data.email
    },
    error: function(e) {
      console.log(e);
    },
  });
}

function renderLogo(){
  const logo = $(".site-logo__image")[0]

  $.ajax({
    url: logoURL,
    type: "GET",
    contentType: false,
    cache: false,
    success: function(data) {
      logo.src = process.env.API_HOST + data.logo.url
    },
    error: function(e) {
      console.log(e);
    },
  });

}

function constructPartners(data){
  const tempList = document.createDocumentFragment();
  data.forEach((item) => {
    const { url, alternativeText } = item.logo

    const partnerElement = `
      <div class="partners__item">
          <div class="partnerCard inList">
               <img src="${process.env.API_HOST + url}" alt="${alternativeText}" class="partnerCard__logo" rel="preload"/>
          </div>
      </div>`

    $(partnerElement).appendTo(tempList);
  })

  return tempList;
}

function renderPartners(){
  const partnersContainer = $(".partners")

  $.ajax({
    url: partnersURL,
    type: "GET",
    contentType: false,
    cache: false,
    success: function(data) {
     partnersContainer.append(constructPartners(data))
    },
    error: function(e) {
      console.log(e);
    },
  });

}