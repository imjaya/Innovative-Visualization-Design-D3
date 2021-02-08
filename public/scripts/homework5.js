// This runs when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
  //year=document.getElementById("year-input").value;
  svg = d3.select('#map');
  svg.append('g').attr("id","plots")
  tooltip=d3.select("body").append("div")
  .attr("class","tooltip")
  .style("opacity",0);

  // Load both files before doing anything else
  Promise.all([d3.csv('data/adobada.csv'),d3.csv('data/al_pastor.csv'),d3.csv('data/california.csv'),d3.csv('data/carne_asada.csv'),d3.csv('data/carnitas.csv'),d3.csv('data/surf_and_turf.csv')])
  .then(function(values){

adobada = values[0];
al_pastor = values[1];
california=values[2];
carne_asada=values[3];
carnitas=values[4];
surf_and_turf=values[5];
drawMap();
})
});




// Draw the map in the #map svg
function drawMap() {
//data=d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum.csv");
items=["Temperature","Hunger","Uniformity","Wrap","Synergy"]
console.log(adobada)
data=[]
 i=0;
  console.log(adobada[i]['Location'])
  // console.log(adobada[i]['Temp'])
  for(var i=0;i<adobada.length;i++)
  {
    data=[]

  if(i==0)
  {
    data.push(["Temperature",adobada[i]['Temp'],"#f0ff0a",adobada[i]['overall'],adobada[i]['Google'],40,120,"#ff0a0a",adobada[i]['Cost'],adobada[i]['Location']])
  data.push(["Hunger",adobada[i]['Hunger'],"#19ff0a",adobada[i]['overall'],adobada[i]['Google'],40,120,"#ff0a0a",adobada[i]['Cost'],adobada[i]['Location']])
  data.push(["Uniformity",adobada[i]['Uniformity'],"#0a11ff",adobada[i]['overall'],adobada[i]['Google'],40,120,"#ff0a0a",adobada[i]['Cost'],adobada[i]['Location']])
  data.push(["Wrap",adobada[i]['Wrap'],"#ff1ae3",adobada[i]['overall'],adobada[i]['Google'],40,120,"#ff0a0a",adobada[i]['Cost'],adobada[i]['Location']])
  data.push(["Synergy",adobada[i]['Synergy'],"#FFA500",adobada[i]['overall'],adobada[i]['Google'],40,120,"#ff0a0a",adobada[i]['Cost'],adobada[i]['Location']])
  
  }
  else{
  data.push(["Temperature",adobada[i]['Temp'],"#f0ff0a",adobada[i]['overall'],adobada[i]['Google'],60+i*180,120,"#ff0a0a",adobada[i]['Cost'],adobada[i]['Location']])
  data.push(["Hunger",adobada[i]['Hunger'],"#19ff0a",adobada[i]['overall'],adobada[i]['Google'],60+i*180,120,"#ff0a0a",adobada[i]['Cost'],adobada[i]['Location']])
  data.push(["Uniformity",adobada[i]['Uniformity'],"#0a11ff",adobada[i]['overall'],adobada[i]['Google'],60+i*180,120,"#ff0a0a",adobada[i]['Cost'],adobada[i]['Location']])
  data.push(["Wrap",adobada[i]['Wrap'],"#ff1ae3",adobada[i]['overall'],adobada[i]['Google'],60+i*180,120,"#ff0a0a",adobada[i]['Cost'],adobada[i]['Location']])
  data.push(["Synergy",adobada[i]['Synergy'],"#FFA500",adobada[i]['overall'],adobada[i]['Google'],60+i*180,120,"#ff0a0a",adobada[i]['Cost'],adobada[i]['Location']])
  }//console.log(data)
drawRadialChart(data);
}

for(var i=0;i<al_pastor.length;i++)
  {
    data=[]
  if(i==0)
  {
    data.push(["Temperature",al_pastor[i]['Temp'],"#f0ff0a",al_pastor[i]['overall'],al_pastor[i]['Google'],40,370,'#00FFFF',al_pastor[i]['Cost'],al_pastor[i]['Location']])
  data.push(["Hunger",al_pastor[i]['Hunger'],"#19ff0a",al_pastor[i]['overall'],al_pastor[i]['Google'],40,370,'#00FFFF',al_pastor[i]['Cost'],al_pastor[i]['Location']])
  data.push(["Uniformity",al_pastor[i]['Uniformity'],"#0a11ff",al_pastor[i]['overall'],al_pastor[i]['Google'],40,370,'#00FFFF',al_pastor[i]['Cost'],al_pastor[i]['Location']])
  data.push(["Wrap",al_pastor[i]['Wrap'],"#ff1ae3",al_pastor[i]['overall'],al_pastor[i]['Google'],40,370,'#00FFFF',al_pastor[i]['Cost'],al_pastor[i]['Location']])
  data.push(["Synergy",al_pastor[i]['Synergy'],"#FFA500",al_pastor[i]['overall'],al_pastor[i]['Google'],40,370,'#00FFFF',al_pastor[i]['Cost'],al_pastor[i]['Location']])
  
  }
else{
  data.push(["Temperature",al_pastor[i]['Temp'],"#f0ff0a",al_pastor[i]['overall'],al_pastor[i]['Google'],60+i*180,370,'#00FFFF',al_pastor[i]['Cost'],al_pastor[i]['Location']])
  data.push(["Hunger",al_pastor[i]['Hunger'],"#19ff0a",al_pastor[i]['overall'],al_pastor[i]['Google'],60+i*180,370,'#00FFFF',al_pastor[i]['Cost'],al_pastor[i]['Location']])
  data.push(["Uniformity",al_pastor[i]['Uniformity'],"#0a11ff",al_pastor[i]['overall'],al_pastor[i]['Google'],60+i*180,370,'#00FFFF',al_pastor[i]['Cost'],al_pastor[i]['Location']])
  data.push(["Wrap",al_pastor[i]['Wrap'],"#ff1ae3",al_pastor[i]['overall'],al_pastor[i]['Google'],60+i*180,370,'#00FFFF',al_pastor[i]['Cost'],al_pastor[i]['Location']])
  data.push(["Synergy",al_pastor[i]['Synergy'],"#FFA500",al_pastor[i]['overall'],al_pastor[i]['Google'],60+i*180,370,'#00FFFF',al_pastor[i]['Cost'],al_pastor[i]['Location']])
  //console.log(data)
}
drawRadialChart(data);
}

for(var i=0;i<california.length;i++)
  {
    data=[]
    // if(i>49)
    // {
    //   var x=60+(i-50)*180;
    //   var y=1520; 
    // }
    if(i>39)
    {
      var x=60+(i-40)*180;
      var y=1420; 
    }
    else if(i>29)
    {
      var x=60+(i-30)*180;
      var y=1220;
    }

  else if(i>19)
  {
    if(i==20)
    {
      var x=40+(i-20)*180;
    var y=1020;
    }
    else{
    var x=40+(i-20)*180;
    var y=1020;
    }
  }
  else if(i>9)
  {
    if(i==10)
    {
      var x=40+(i-10)*180;
      var y=820;
    }
    else{
    var x=60+(i-10)*180;
    var y=820;
    }
  }
  else{
    var x=60+i*180;
    var y=620;
  }
  if(i==0){
  data.push(["Temperature",california[i]['Temp'],"#f0ff0a",california[i]['overall'],california[i]['Google'],40,620,'#bf3117',california[i]['Cost'],california[i]['Location']])
  data.push(["Hunger",california[i]['Hunger'],"#19ff0a",california[i]['overall'],california[i]['Google'],40,620,'#bf3117',california[i]['Cost'],california[i]['Location']])
  data.push(["Uniformity",california[i]['Uniformity'],"#0a11ff",california[i]['overall'],california[i]['Google'],40,620,'#bf3117',california[i]['Cost'],california[i]['Location']])
  data.push(["Wrap",california[i]['Wrap'],"#ff1ae3",california[i]['overall'],california[i]['Google'],40,620,'#bf3117',california[i]['Cost'],california[i]['Location']])
  data.push(["Synergy",california[i]['Synergy'],"#FFA500",california[i]['overall'],california[i]['Google'],40,620,'#bf3117',california[i]['Cost'],california[i]['Location']])
  
  }
  else{
  data.push(["Temperature",california[i]['Temp'],"#f0ff0a",california[i]['overall'],california[i]['Google'],x,y,'#bf3117',california[i]['Cost'],california[i]['Location']])
  data.push(["Hunger",california[i]['Hunger'],"#19ff0a",california[i]['overall'],california[i]['Google'],x,y,'#bf3117',california[i]['Cost'],california[i]['Location']])
  data.push(["Uniformity",california[i]['Uniformity'],"#0a11ff",california[i]['overall'],california[i]['Google'],x,y,'#bf3117',california[i]['Cost'],california[i]['Location']])
  data.push(["Wrap",california[i]['Wrap'],"#ff1ae3",california[i]['overall'],california[i]['Google'],x,y,'#bf3117',california[i]['Cost'],california[i]['Location']])
  data.push(["Synergy",california[i]['Synergy'],"#FFA500",california[i]['overall'],california[i]['Google'],x,y,'#bf3117',california[i]['Cost'],california[i]['Location']])
  }
  //console.log(data)
drawRadialChart(data);
}

for(var i=0;i<surf_and_turf.length;i++)
  {
    data=[]
  if(i==0)
  {
    data.push(["Temperature",surf_and_turf[i]['Temp'],"#f0ff0a",surf_and_turf[i]['overall'],surf_and_turf[i]['Google'],40,1670,'#9400d3',surf_and_turf[i]['Cost'],surf_and_turf[i]['Location']])
  data.push(["Hunger",surf_and_turf[i]['Hunger'],"#19ff0a",surf_and_turf[i]['overall'],surf_and_turf[i]['Google'],40,1670,'#9400d3',surf_and_turf[i]['Cost'],surf_and_turf[i]['Location']])
  data.push(["Uniformity",surf_and_turf[i]['Uniformity'],"#0a11ff",surf_and_turf[i]['overall'],surf_and_turf[i]['Google'],40,1670,'#9400d3',surf_and_turf[i]['Cost'],surf_and_turf[i]['Location']])
  data.push(["Wrap",surf_and_turf[i]['Wrap'],"#ff1ae3",surf_and_turf[i]['overall'],surf_and_turf[i]['Google'],40,1670,'#9400d3',surf_and_turf[i]['Cost'],surf_and_turf[i]['Location']])
  data.push(["Synergy",surf_and_turf[i]['Synergy'],"#FFA500",surf_and_turf[i]['overall'],surf_and_turf[i]['Google'],40,1670,'#9400d3',surf_and_turf[i]['Cost'],surf_and_turf[i]['Location']])
  
  }

  else{
  data.push(["Temperature",surf_and_turf[i]['Temp'],"#f0ff0a",surf_and_turf[i]['overall'],surf_and_turf[i]['Google'],60+i*180,1670,'#9400d3',surf_and_turf[i]['Cost'],surf_and_turf[i]['Location']])
  data.push(["Hunger",surf_and_turf[i]['Hunger'],"#19ff0a",surf_and_turf[i]['overall'],surf_and_turf[i]['Google'],60+i*180,1670,'#9400d3',surf_and_turf[i]['Cost'],surf_and_turf[i]['Location']])
  data.push(["Uniformity",surf_and_turf[i]['Uniformity'],"#0a11ff",surf_and_turf[i]['overall'],surf_and_turf[i]['Google'],60+i*180,1670,'#9400d3',surf_and_turf[i]['Cost'],surf_and_turf[i]['Location']])
  data.push(["Wrap",surf_and_turf[i]['Wrap'],"#ff1ae3",surf_and_turf[i]['overall'],surf_and_turf[i]['Google'],60+i*180,1670,'#9400d3',surf_and_turf[i]['Cost'],surf_and_turf[i]['Location']])
  data.push(["Synergy",surf_and_turf[i]['Synergy'],"#FFA500",surf_and_turf[i]['overall'],surf_and_turf[i]['Google'],60+i*180,1670,'#9400d3',surf_and_turf[i]['Cost'],surf_and_turf[i]['Location']])
  }//console.log(data)
drawRadialChart(data);
}

for(var i=0;i<carnitas.length;i++)
  {
    data=[]
  if(i>9)
  {
    if(i==10)
    {
      var x=40+(i-10)*180;
      var y=2120;
    }
    else{
    var x=60+(i-10)*180;
    var y=2120;
    }
  }
  else
  {
    var x=60+i*180;
    var y=1920;
  }
  if(i==0)
  {
    data.push(["Temperature",carnitas[i]['Temp'],"#f0ff0a",carnitas[i]['overall'],carnitas[i]['Google'],40,1920,'#006400',carnitas[i]['Cost'],carnitas[i]['Location']])
    data.push(["Hunger",carnitas[i]['Hunger'],"#19ff0a",carnitas[i]['overall'],carnitas[i]['Google'],40,1920,'#006400',carnitas[i]['Cost'],carnitas[i]['Location']])
    data.push(["Uniformity",carnitas[i]['Uniformity'],"#0a11ff",carnitas[i]['overall'],carnitas[i]['Google'],40,1920,'#006400',carnitas[i]['Cost'],carnitas[i]['Location']])
    data.push(["Wrap",carnitas[i]['Wrap'],"#ff1ae3",carnitas[i]['overall'],carnitas[i]['Google'],40,1920,'#006400',carnitas[i]['Cost'],carnitas[i]['Location']])
    data.push(["Synergy",carnitas[i]['Synergy'],"#FFA500",carnitas[i]['overall'],carnitas[i]['Google'],40,1920,'#006400',carnitas[i]['Cost'],carnitas[i]['Location']])
  }
  else
  {
  data.push(["Temperature",carnitas[i]['Temp'],"#f0ff0a",carnitas[i]['overall'],carnitas[i]['Google'],x,y,'#006400',carnitas[i]['Cost'],carnitas[i]['Location']])
  data.push(["Hunger",carnitas[i]['Hunger'],"#19ff0a",carnitas[i]['overall'],carnitas[i]['Google'],x,y,'#006400',carnitas[i]['Cost'],carnitas[i]['Location']])
  data.push(["Uniformity",carnitas[i]['Uniformity'],"#0a11ff",carnitas[i]['overall'],carnitas[i]['Google'],x,y,'#006400',carnitas[i]['Cost'],carnitas[i]['Location']])
  data.push(["Wrap",carnitas[i]['Wrap'],"#ff1ae3",carnitas[i]['overall'],carnitas[i]['Google'],x,y,'#006400',carnitas[i]['Cost'],carnitas[i]['Location']])
  data.push(["Synergy",carnitas[i]['Synergy'],"#FFA500",carnitas[i]['overall'],carnitas[i]['Google'],x,y,'#006400',carnitas[i]['Cost'],carnitas[i]['Location']])
  }//console.log(data)
drawRadialChart(data);
}


for(var i=0;i<carne_asada.length;i++)
  {
    data=[]
  if(i>19)
  {
    if(i==20)
    {
      var x=40+(i-20)*180;
    var y=2750;
    }
    else{
    var x=60+(i-20)*180;
    var y=2750;
    }
  }
  else if(i>9)
  {
    if(i==10)
    {
      var x=40 +(i-10);
      var y=2550;
    }
    else{
    var x=60+(i-10)*180;
    var y=2550;
    }
  }
  else{
    var x=60+i*180;
    var y=2350;
  }
  if(i==0)
  {
    data.push(["Temperature",carne_asada[i]['Temp'],"#f0ff0a",carne_asada[i]['overall'],carne_asada[i]['Google'],40,2350,'#74282d',carne_asada[i]['Cost'],carne_asada[i]['Location']])
  data.push(["Hunger",carne_asada[i]['Hunger'],"#19ff0a",carne_asada[i]['overall'],carne_asada[i]['Google'],40,2350,'#74282d',carne_asada[i]['Cost'],carne_asada[i]['Location']])
  data.push(["Uniformity",carne_asada[i]['Uniformity'],"#0a11ff",carne_asada[i]['overall'],carne_asada[i]['Google'],40,2350,'#74282d',carne_asada[i]['Cost'],carne_asada[i]['Location']])
  data.push(["Wrap",carne_asada[i]['Wrap'],"#ff1ae3",carne_asada[i]['overall'],carne_asada[i]['Google'],40,2350,'#74282d',carne_asada[i]['Cost'],carne_asada[i]['Location']])
  data.push(["Synergy",carne_asada[i]['Synergy'],"#FFA500",carne_asada[i]['overall'],carne_asada[i]['Google'],40,2350,'#74282d',carne_asada[i]['Cost'],carne_asada[i]['Location']])
  
  }
  else{
  data.push(["Temperature",carne_asada[i]['Temp'],"#f0ff0a",carne_asada[i]['overall'],carne_asada[i]['Google'],x,y,'#74282d',carne_asada[i]['Cost'],carne_asada[i]['Location']])
  data.push(["Hunger",carne_asada[i]['Hunger'],"#19ff0a",carne_asada[i]['overall'],carne_asada[i]['Google'],x,y,'#74282d',carne_asada[i]['Cost'],carne_asada[i]['Location']])
  data.push(["Uniformity",carne_asada[i]['Uniformity'],"#0a11ff",carne_asada[i]['overall'],carne_asada[i]['Google'],x,y,'#74282d',carne_asada[i]['Cost'],carne_asada[i]['Location']])
  data.push(["Wrap",carne_asada[i]['Wrap'],"#ff1ae3",carne_asada[i]['overall'],carne_asada[i]['Google'],x,y,'#74282d',carne_asada[i]['Cost'],carne_asada[i]['Location']])
  data.push(["Synergy",carne_asada[i]['Synergy'],"#FFA500",carne_asada[i]['overall'],carne_asada[i]['Google'],x,y,'#74282d',carne_asada[i]['Cost'],carne_asada[i]['Location']])
  }//console.log(data)
drawRadialChart(data);
}



//console.log(california.length)


}
function drawRadialChart(data)
{
  
  // set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
width = 1920 - margin.left - margin.right,
height = 2800 - margin.top - margin.bottom,
innerRadius = parseFloat(data[0][3])*8,
outerRadius = innerRadius+30;   // the outerRadius goes from the middle of the SVG area to the border

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + parseInt(data[0][5]) + "," + ( parseInt(data[0][6]) )+ ")"); // Add 100 on Y translation, cause upper bars are longer

// X scale
var x = d3.scaleBand()
  .range([0, Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
  .align(0)                  // This does nothing ?
  //.domain(data[0]); // The domain of the X axis is the list of states.
  .domain( data.map(function(d) {return d[0]; }) ); // The domain of the X axis is the list of states.
// Y scale
var y = d3.scaleRadial()
  .range([innerRadius, outerRadius])   // Domain will be define later.
    .domain([0, 5]); // Domain of Y is from 0 to the max seen in the data

var div = d3.select("body").append("div")
  .attr("class", "tooltip-donut")
  .style("opacity", 0);

  var div2=d3.select("body").append("div");

// Add bars
let g=svg.append("g");
g.selectAll("path")
.data(data)
.enter()
.append("path")
  
  .attr("d", d3.arc()     // imagine your doing a part of a donut plot
      .innerRadius(innerRadius)
      .outerRadius(function(d) { return y(d[1]); })
      .startAngle(function(d) { return x(d[0]); })
      .endAngle(function(d) {  return x(d[0]) + x.bandwidth(); })
      .padAngle(0.01)
      .padRadius(innerRadius))
  .attr("fill", function(d) { return d[2]; })
  .on('mouseover', function(e,d) {
        var attribute=d[0];
        var value=d[1];
        d3.select(this).transition()
             .duration('50')
             .style('stroke', 'black')
             .attr('stroke-width','4')
  
             div.transition()
                 .duration(50)
                 .style("opacity", 1);
                 div.html(` ${attribute}:${value}`)
                 .style("text-align","left")
                 .style("left", (e.pageX) + "px")
                 .style("top", (e.pageY - 15) + "px");
                 
      })
  .on('mouseout', function(d,i) {
        d3.select(this).transition()
             .duration('50')
             .style('stroke', 'black')
             .attr('stroke-width','0')
        div.transition()
             .style("opacity",0);
                       
      })
      

svg.selectAll("g")
      .data(data)
      .append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', function(d) { return parseFloat(d[3])*8; })
      .attr('fill', function(d) { return d[7]; })
      .attr('opacity',function(d) { return parseFloat(d[4])*0.18; })
      //.attr('text',function(d) { console.log(d[9]);return d[9]; })
      .on('mouseover', function(e,d) {
        var google_rating=d[4];
        var cost=d[8];
        var overall_score=d[3];
        d3.select(this).transition()
             .duration('50')
             .style('stroke', 'black')
             .attr('stroke-width','4')
  
             div.transition()
                 .duration(50)
                 .style("opacity", 1);
                 div.html(`Google Rating: ${google_rating} <br> Cost: $${cost}<br> Overall Score: ${overall_score}`)
                 .style("text-align","left")
                 .style("left", (e.pageX) + "px")
                 .style("top", (e.pageY - 15) + "px");
                 
      })
  
   
      .on('mouseout', function(d,i) {
        d3.select(this).transition()
             .duration('50')
             .style('stroke', 'black')
             .attr('stroke-width','0')
        div.transition()
             .style("opacity",0);
                       
      });


    //Add the SVG Text Element to the svgContainer
var text = svg.selectAll("text")
                        .data(data)
                        .enter()
                        .append("text");

//Add SVG Text Element Attributes
var textLabels = text
                 .attr("x", function(d) { return -40; })
                 .attr("y", function(d) { return 100; })
                 .text( function (d) { return d[9]; })
                  // .attr("font-family", "cursive")
                  .attr("font-size", "13px")
                 .attr("font-style","italic")
                  .attr("font-stretch","ultra-expanded")
                 .style('fill', 'white')
                //  .attr("stroke", "green")
                 .attr("font-weight","900")
                 

}
