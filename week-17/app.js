const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){

  res.sendFile(__dirname+"/index.html");
  
});

app.post("/", function(req,res){
  const city = req.body.city;
  

  const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=dabda1de41c265b4e04726d398c0f8b6";

  https.get(url, function(response){
  console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);

      const temp = weatherData.main.temp;
      const weatherDesc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

      res.write("<h1 style='color:purple;'>Temperature in "+weatherData.name+" is "+ temp+" degree celsius.</h1>");
      res.write("<h2 style='color:green; '>The weather is currently "+weatherDesc+"</h2>");
      res.write("<img src = "+imgUrl+">");

         });
    });


    const url2 = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&cnt=24&appid=dabda1de41c265b4e04726d398c0f8b6";

    
    https.get(url2, function(response){
      console.log(response.statusCode);
      
      response.on("data", function(data){
        const weatherData = JSON.parse(data);
        res.write("<h1 style='color:blue; text-align:center; margin-bottom:7%; '>    3 Day forecast in 3 hr intervals        </h1>");
          
          for(let i=0; i<24;++i){
            
            const temp = weatherData.list[i].main.temp;
            const min = weatherData.list[i].main.temp_min;
            const max = weatherData.list[i].main.temp_max;
            const weatherDesc = weatherData.list[i].weather[0].description;
            const icon = weatherData.list[i].weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            const date= weatherData.list[i].dt_txt;
      
            res.write("<h2>Temperature in "+weatherData.city.name+" would be "+ temp+" degree celsius on "+date+"</h2>");
            res.write("<h3 style='color:green; '>The weather would be "+weatherDesc+"</h3>");
            res.write("<h3 style='color:blue; '>Minimum Temperature - "+min+" degree celsius</h3>");
            res.write("<h3 style='color:red; ' >Maximum Temperature - "+max+" degree celsius</h3>");
            res.write("<img style='margin-bottom:3%; ' src = "+imgUrl+">");
          }
    
             });
        });
 
    
    


});

app.listen(3000, function(){
  console.log("server started at 3000");
});
