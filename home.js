 import { Ui } from "./ui.js";
 import { Details } from "./Details.js" ;
 export class Home {
    constructor(){
        document.querySelectorAll(".nav-link").forEach((link)=>{
            link.addEventListener("click", () => {
                document.querySelector(".navbar-nav .active").classList.remove("active");
                link.classList.add("active");
                const category = link.innerHTML;
                console.log(category);
                this.GetGamesByCat(category);
            })
        });
        this.loading = document.querySelector(".loading");
        this.ui = new Ui();
        this.GetGamesByCat("MMORPG")
    }
    async GetGamesByCat(cat){
        this.loading.classList.remove("d-none");
        const options = {
            method: "GET",
            headers: {
               "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
               "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
               Accept: "application/json",
               "Content-Type": "application/json",
            },
         };
         const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options);
         const response = await api.json();
        this.loading.classList.add("d-none");

         this.ui.displayGames(response);
         document.querySelectorAll("#AllGamesRow .col").forEach((col)=>{
            col.addEventListener('click',function(){
                document.getElementById("gamesSec").classList.add("d-none");
                document.getElementById("detailSec").classList.remove("d-none");
                const id = col.dataset.id;
                new Details(id);
            })
         })
         console.log(response);
    }
}