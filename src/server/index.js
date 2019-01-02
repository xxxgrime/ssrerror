
import express from "express"
import cors from "cors"
import TextBlock from "../components/textblock/textblock.js"

var app=express();


app.use(cors())

app.get("*",(req,res)=>{
    res.send(`
     <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="root">${renderToString(<TextBlock />)}</div>
      </body>
    </html>
    `)
})

app.listen(3000,()=>{
    console.log("server is listening");
})

