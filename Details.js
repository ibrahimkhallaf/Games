import { Ui } from "./ui.js";
export class Details{
    constructor(id){
        
        document.getElementById("btn-close").addEventListener('click',()=>{
        document.getElementById("gamesSec").classList.remove("d-none");
        document.getElementById("detailSec").classList.add("d-none");
        });
        this.GetGameDetails(id);
    }
    async GetGameDetails(id){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: "GET",
            headers: {
               "X-RapidAPI-Key": "216eca9217msheb372ff9a4ed7d0p1aa51bjsn650432b4c0c0",
               "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
               Accept: "application/json",
               "Content-Type": "application/json",
            },
         };
         const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
         const response = await api.json();
        loading.classList.add("d-none");
         console.log(response);
         new Ui().displayDetails(response);
    }
}