var svg = d3.select("#mapContainer")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

d3.json("../india_state_ut_administered.geojson").then(function(geojson) {
  svg.append("g")
    .selectAll("path")
    .data(geojson.features)
    .enter()
    .append("path")
    .attr("d", d3.geoPath())
    .style("fill", "lightgray")
    .style("stroke", "gray");
});

svg.append("text")
  .attr("x", 820) // Adjust the x position accordingly
  .attr("y", 470) // Adjust the y position accordingly
  .attr("text-anchor", "middle")
  .attr("font-size", "12px")
  .text("Andhra Pradesh");
