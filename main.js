const buttons = document.querySelectorAll(".btns")
let img = document.querySelector("#imag")
let name = document.querySelector("#name")
let review = document.querySelector("#review")
let counter=0


buttons.forEach(function(element) {
    element.addEventListener("click", function() {
        if (element.classList.contains("left")) {
            if(counter===0){
                counter=persons.length;
            }
            counter--;
            img.src = persons[counter].image;
            name.textContent = persons[counter].name;
            review.textContent = persons[counter].review;

        }
        if (element.classList.contains("right")) {
            counter++;
            if(counter=== persons.length){
                counter=0;
            }
            img.src = persons[counter].image;
            name.textContent = persons[counter].name;
            review.textContent = persons[counter].review;

        }
    })
});



const persons=[
    {
        image:"images/loan-7AIDE8PrvA0-unsplash.jpg",
        name:"Cat McMeow",
        review:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
        image:"images/john-price-wzRQfEw9CMc-unsplash.jpg",
        name:"Dog Woof",
        review:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        image:"images/borna-bevanda-w12NAMymqnk-unsplash.jpg",
        name:"Cat Scratchingson",
        review:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "
    },
    {
        image:"images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg",
        name:"Dog Lovington",
        review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "
    },
    {
        image:"images/josephine-menge-h7VBJRBcieM-unsplash.jpg",
        name:"Doggo Doginson",
        review:"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        image:"images/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg",
        name:"Catson Clawington",
        review:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
    }
];