const contactNavElement = document.getElementById('contact-nav')
const contactNavOverlay = document.getElementById('contact-nav-overlay')
const navLinkWrapper = document.querySelector('.site-nav')
console.log(navLinkWrapper)
const navLink = navLinkWrapper.querySelectorAll('a')
console.log(navLink)

// open and close nav
contactNavElement.addEventListener('click', () => {
    contactNavOverlay.classList.toggle('open')
    console.log(contactNavOverlay)
    navLink.forEach((el) => {
        el.classList.remove('active')
        console.log(el)
    })
    contactNavElement.classList.add('active')
    console.log(contactNavOverlay)
    // if ()
})



// add class to image parent (<p>)
const contentWrapper = document.querySelector('.page-content')
const contentImages = contentWrapper.querySelectorAll('img')
const contentPImages = contentWrapper.querySelectorAll('p img')
contentPImages.forEach((el) => {
  el.parentElement.classList.add('image-wrapper')
})

let fadeMeIn 

if (contentWrapper) {
  fadeMeIn = contentWrapper.querySelectorAll('.fade-me-in')
}


const options = {
  rootMargin: '0px 0px -30% 0px',
  threshold: 0.000001,
};
const picObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add('in-view');
    }
  });
}, options);

contentImages.forEach((el, i) => {
    picObserver.observe(el);
})


// const leftShape = document.querySelectorAll('.left-shape')

// document.addEventListener('scroll', () => {
  
  // })

if (contentWrapper && fadeMeIn.length > 0) {
  fadeMeIn.forEach((el) => {
    picObserver.observe(el);
  })  
}



const rectangles = document.querySelectorAll('.rectangle');

let scrollAmount = 0;
let oldScrollAmount = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  rectangles.forEach((rectangle, i) => {
    if (scrollTop + window.innerHeight > rectangle.offsetTop) {
      if (scrollTop > oldScrollAmount) {
        scrollAmount--;  
      } else if (scrollTop < oldScrollAmount) {
        scrollAmount++;
      }
      if (rectangle.classList.contains("left")) {
        rectangle.style.transform = `translateY(${oldScrollAmount * 0.2}px)`;
      } else {
        rectangle.style.transform = `translateY(${oldScrollAmount * -0.25}px)`;
      }
    }  
  });
  oldScrollAmount = scrollTop;
});

  
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
  slidesPerView: "auto",
  // slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    980: {
      simulateTouch: false,
      shortSwipes: false,
      preventClicks: true,
      allowTouchMove: false,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



const howWeWorkItems = document.querySelectorAll('.hww-hide-me')

const hWWOptions = {
  rootMargin: '-50% 0px -40% 0px',
  threshold: 0.000001,
};
const hWWObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add('in-view');
    } else {
      // entry.target.classList.remove('in-view');
    }
  });
}, hWWOptions);

howWeWorkItems.forEach((el, i) => {
    hWWObserver.observe(el);
})



  var i, tabcontent, tablinks;
tablinks = document.getElementsByClassName("tablinks");
tablinks[0].setAttribute('id', 'defaultOpen')

function openCity(evt, cityName) {
  // Declare all variables

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  console.log(tablinks[0])
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

setTimeout(() => {
  document.getElementById("defaultOpen").click();
}, 1500)


