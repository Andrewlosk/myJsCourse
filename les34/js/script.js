//! Intersection Observer API дозволяє виконувати асинхронне спостереження за змінами видимості елемента на веб-сторінці в межах кореневого елемента або в межах viewport (області видимості вікна браузера).
// Цей API є корисним для реалізації відкладеного завантаження зображень (lazy loading), нескінченного прокручування (infinite scrolling), або для відстеження того, коли елементи стають видимими на екрані.
const target = document.querySelector('.target');
// const container = document.querySelector('.container');

const callback = (entries, observer) => {
    console.log(entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting ) {
            // entry.isIntersecting - властивість яка є будевою і вказувати чи перетинається спостерігач елементом з областю видимості (viewport) або з кореневим елементом root в даний момент
            console.log('елемент став видимим');

            observer.unobserve(target) //stop спостереження після першого перетину з елементом
        } else {
            console.log('елемент невидимий');
        }
    });
}

const options = {
    root: null,
    rootMargin: '100px',
    // threshold: 1.0 // елемент повністю видимий
    threshold: 0.2 // елемент повністю видимий

}

const observer = new IntersectionObserver(callback, options)

//? observe - починає спостереження за заданим елементом

observer.observe(target)



// setTimeout(() => {
//     console.log('припиняємо спостерігання');
//     observer.disconnect()
// }, 10000)



//? Основні методи Intersection Observer API
// observe(): Починає спостереження за заданим елементом.
// unobserve(): Припиняє спостереження за заданим елементом.
// disconnect(): Припиняє спостереження за всіма елементами.



//для завантаження картинок

const images = document.querySelectorAll('img')


const checkImage = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src
            observer.unobserve(entry.target)
        }
    })
}


const optionsForImage = {
    // root: null,
    threshold: 0.5, // на 50 % бачимо зображення 

}

const imageObsrver = new IntersectionObserver(checkImage, optionsForImage)

images.forEach(image => imageObsrver.observe(image))

// imageObsrver.observe()










//video

const videoCheck = (entries, observer) => {
    entries.forEach(entry => {

        //перевірка на те чи відео запустилось
        if (entry.isIntersecting !== 0) {
            //якщо відео за межами viewport або видиме лише на 20 %
            if (entry.isIntersecting <= 0.2) {
                entry.target.pause()
                
            }else {
                entry.target.play()

            }
            
        }
    })
}


const optionsForVideo = {
    threshold: 0.2
}


const videoObserver = new IntersectionObserver(videoCheck, optionsForVideo)

const video =  document.querySelector('video')

videoObserver.observe(video)








const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('a');



const checkSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            link.forEach(link => {
                link.classList.remove('active')

                const activeId = entry.target.id
                const activeLink = document.querySelector(`a[href="#${activeId}"]`)

                if (activeLink) {
                    activeLink.classList.add('active')
                    
                }
                
            })
            
        }
    })

}

const optionsForSection = {
    threshold: [0.2, 0.5, 0.8]
}
const sectionObserver = new IntersectionObserver (checkSection, optionsForSection)

sections.forEach(section => sectionObserver.observe(section))
