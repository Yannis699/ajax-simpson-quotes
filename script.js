            // This function loads simpsons data from the Simpson API
            function fetchSimpsonQuotesJSON() {
                // Feel free to download this HTML and edit it, to use another Simpson ID
                const simpsonId = 1;
                const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
                axios
                  .get(url)
                  .then(function (response) {
                    return response.data[0]; // response.data instead of response.json() with fetch
                  })
                  .then(function (simpson) {
                    console.log("data decoded from JSON:", simpson);
        
                    // Build a block of HTML
                    const simpsonHtml = `
                        <h2><strong>${simpson.character}</strong></h2>
                        <img src="${simpson.image}" />
                        <small>${simpson.quote}</small>
                      `;
                    document.querySelector("#simpson").innerHTML = simpsonHtml;
                  });
              }
        
              fetchSimpsonQuotesJSON();