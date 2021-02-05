// we want to create list items
const sections = document.getElementsByTagName('section')
const nav = document.getElementById('navbar__list')

for(const currentSection of sections){

    const title = currentSection.dataset.nav;
    const id = currentSection.id

    // creating li
    const li = document.createElement('li');

    // creating anchor
    const anchor = document.createElement('a');

    anchor.setAttribute('href', '#'+id)

    anchor.innerHTML = title
  
    li.appendChild(anchor)

    nav.appendChild(li)

}

// we want to have an active state on the clicked item

const liElemnts = nav.children;
for(const currentLi of liElemnts){
    currentLi.addEventListener('click', function(event){
        event.preventDefault()
        const aTag = currentLi.querySelector('a');
        console.log(aTag.hash)
        const section = document.querySelector(aTag.hash);
        console.log("section", section)
        section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    });
}
// we want to have active navigation with scroll 
    window.addEventListener('scroll', function(){
        let fromTop = window.scrollY;

        var arr = Array.prototype.slice.call( liElemnts )


        arr.forEach(link => {
            const aTag = link.getElementsByTagName("a")[0];
            let section = document.querySelector(aTag.hash);

            console.log("section.offsetTop"+aTag.hash, section.offsetTop)
            console.log("section.offsetHeight"+aTag.hash, section.offsetHeight)
            console.log("window.scrollY", window.scrollY)
         if (
            section.offsetTop <= fromTop + 20 &&
            section.offsetTop + section.offsetHeight  > fromTop + 20
         ) {
            link.classList.add('active');
         } else {
             link.classList.remove('active');
         }
        });
    });