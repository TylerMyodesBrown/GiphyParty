console.log("Let's get this party started!");

const $gifArea = $("#gifArea");
const $Input = $("#query");

$("form").on("submit", async function(evt) {
    evt.preventDefault();
    let term = $Input.val();  
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: term,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
    });
    $Input.val("");
    addGif(res.data);
  });

  function addGif(res) {
    let dataLength = res.data.length;
    if (dataLength) {
      let randomIdx = Math.floor(Math.random() * dataLength);
      let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url
      });
      $gifArea.append($newGif);
    }
  }

  $("#delete").on("click", function() {
    $gifArea.empty();
  });