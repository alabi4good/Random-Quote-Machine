$(function(){
    // Get quote on page load
    getQuote();

    // Get quote on button click
    $('.container').click(function(e){
        if(e.target.id.startsWith('btn')) {
            getQuote();
        }
    });

    
    

    function getQuote() {
        // Array of random colors
       var color = ['#3498db', '#2ecc71', '#1abc9c', '#16a085', '#f1c40f', '#c0392b'];
       
        $.ajax({
            url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
            success: (data)=> {
                var post = data.shift();
                var randomNum = Math.floor(Math.random() * 6);
                $('.container').html(`<div class="box" style="color: ${color[randomNum]};">
                  <i class="fa fa-quote-left" aria-hidden="true"></i>${post.content}
                  <div class="name"><p>&#8210; ${post.title}</p></div>
                  <ul class="btnDiv">
                    <li class="social" style="background: ${color[randomNum]};"><i class="fa fa-twitter" aria-hidden="true"></i></li>
                    <li class="social" style="background: ${color[randomNum]};"><i class="fa fa-tumblr" aria-hidden="true"></i></li>
                    <li id="btn" style="background: ${color[randomNum]};">New Quote</li>
                  </ul>
                </div>`);

                // Add random background colors to the body element
                $('body').css('backgroundColor', color[randomNum]);
            },
            // Return a new quote from the server instead of the cached in the browser
            cache: false
        });
        return false;
    }

});