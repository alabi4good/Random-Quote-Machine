$(function(){
    
// Get quote on page load
getQuote();
// Get quote on button click
 $('.container').click(function(e){
    if(e.target.id.startsWith('btn')) {
        document.querySelector('.container').innerHTML = '';
        getQuote();
     }
  });

    
    

   function getQuote() {
       // Array of random colors
       var color = ['#3498db', '#2ecc71', '#1abc9c', '#16a085', '#f1c40f', '#c0392b'];
       //used to generate random colors
       let randomNum = Math.floor(Math.random() * 6);
       // using the fetch api
       fetch("https://programming-quotes-api.herokuapp.com/quotes")
       .then((resp) => resp.json())
       .then(function(data) {
         //the data returns an array of 40 elements,so i am using the random number generator to randomly get the eaxch element
         var randomQuote = Math.floor(Math.random() * 500);    
         //console.log(data[randomQuote].en);
          document.querySelector('.container').innerHTML += `<div class="box colorChange" style="color: ${color[randomNum]};">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>${data[randomQuote].en}
                    <div class="name"><p>&#8210; ${data[randomQuote].author}</p></div>
                   <ul class="btnDiv">
                     <li class="social" style="background: ${color[randomNum]};"><i class="fa fa-instagram" aria-hidden="true"></i></li>
                    <li class="social" style="background: ${color[randomNum]};"><i class="fa fa-tumblr" aria-hidden="true"></i></li>
                      <li id="btn" style="background: ${color[randomNum]};">New Quote</li>
                    </ul>
                  </div>`

                  // Add random background colors to the body element
                  document.body.style.backgroundColor = color[randomNum];
                  
       })
       .catch(function(error) {
            document.body.style.backgroundColor = color[randomNum];
            document.querySelector('.container').innerHTML += `<div class="box" style="color: ${color[randomNum]};">
                   <p>Error in the api, please check the api server</p>
                  </div>`
       });
   }

});
