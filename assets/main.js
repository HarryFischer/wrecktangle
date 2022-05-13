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