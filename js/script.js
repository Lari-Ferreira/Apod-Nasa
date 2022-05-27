$("#botao").click(function(event){
    event.preventDefault()
    let data = $("#user").val()
    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?api_key=Jf8PPH7psbhMFF2pCOPo9wMcyTfBziQ9I2lqAsTl&date=${data}`,
        type: "GET",
        success: function(objeto){
            $("#img-desc").css("display", "flex")
            $("#titulo").text(objeto.title);
            $("#desc").text(objeto.explanation);
            console.log(objeto)
            if(objeto.media_type == "image"){
                $("#video").css("display", "none")
                $("#imagem").css("display", "flex")
                $("#imagem").attr("src",objeto.url)
            }else {
                $("#imagem").css("display", "none")
                $("#video").css("display", "block")
                $("#video").attr("src",objeto.url)
            }
        }
    })
})