const projects = [

{
title:"TRACE – Technical Warranty Recommender",
desc:"AI system that analyzes warranty claims using ML, NLP and sensor data to recommend warranty decisions."
},

{
title:"AI Personalized Sports Content",
desc:"Google MLB Hackathon project using GCP AI tools and Imagen models to generate personalized sports content."
},

{
title:"VetDeploy",
desc:"Platform mapping military ranks to corporate roles using FastAPI and MongoDB."
},

{
title:"Menstrual Tracking Chatbot",
desc:"Hybrid ML chatbot predicting menstrual cycles and tracking symptoms."
}

]

export default function Projects(){

return(

<section className="py-20">

<h2 className="text-3xl text-blue-400 text-center">
Projects
</h2>

<div className="grid md:grid-cols-2 gap-8 mt-10 px-10">

{projects.map((p,i)=>(
<div key={i} className="bg-slate-800 p-6 rounded-xl">

<h3 className="text-xl font-bold">{p.title}</h3>

<p className="mt-3 text-gray-300">
{p.desc}
</p>

</div>
))}

</div>

</section>

)
}