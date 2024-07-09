export class Ui {
    constructor(){
    }
    displayGames(GamesArr){
        console.log(GamesArr)
        let cartona =``;
        for(let i = 0 ; i < GamesArr.length; i++){
            cartona +=`
                <div class="col" data-id="${GamesArr[i].id}">
                        <div class="card h-100 bg-transparent" role="button"  >
                           <div  class="card-body">
                              <div>
                                 <img class="card-img object-fit-cover h-100" src="${GamesArr[i].thumbnail}" />
                              </div>
                              <div>
                                 <div class="hstack justify-content-between my-3">
                                    <h3 class="h6 small">${GamesArr[i].title}</h3>
                                    <span class="badge text-bg-primary p-2">Free</span>
                                 </div>
                  
                                 <p class="card-text text-center opacity-50">
                                    ${GamesArr[i].short_description}
                                 </p>
                                </div>
                           </div>
                  
                           <footer class="card-footer small hstack justify-content-between">
                  
                              <span class="badge badge-color">${GamesArr[i].genre}</span>
                              <span class="badge badge-color">${GamesArr[i].platform}</span>
                  
                           </footer>
                           
                        </div>
                 </div>`
        }
        document.getElementById("AllGamesRow").innerHTML = cartona;
    
    }
    displayDetails(data){
      let cartona2 =`
      <div class="col-4">
             <img src="${data.thumbnail}" alt="game-photo" class="w-100">
          </div>
          <div class="col-8">
            <h3>Title: ${data.title}</h3>
            <p>
              Category: 
              <span class="badge text-bg-info catSpan"> ${data.genre}</span>
            </p>
            <p>
              Platform:
              <span class="badge text-bg-info platSpan"> ${data.platform}</span>
            </p>
            <p>
              Status: 
              <span class="badge text-bg-info StaSpan"> ${data.status}</span>
            </p>
            <p class="small detail-p">
            ${data.description}
            </p>
            <a class="btn btn-outline-warning"  href="${data.game_url}">Show Game</a>
        </div>`
    document.getElementById("Details-row").innerHTML = cartona2;
    
    };
}