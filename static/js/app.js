// Belly Button Biodiversity - Plotly.js

function buildMetadata(sample) {

  // @TODO: Complete the Following Function that Builds the Metadata Panel

  // Use `d3.json` to Fetch the Metadata for a Sample
    d3.json(`/metadata/${sample}`).then((data) => {
      // Use d3 to Select the Panel with id of `#sample-metadata`
      var PANEL = d3.select(`#sample-metdata`);
      // Use `.html("") to Clear any Existing Metadata

      // Use `Object.entries` to Add Each Key & Value Pair to the Panel
      // Hint: Inside the Loop, Use d3 to Append New Tags for Each Key-Value in the Metadata

      // BONUS: Build the Gauge Chart
      // buildGauge(data.WFREQ);
    })
  }

function buildCharts(sample) {

  // @TODO: Use `d3.json` to Fetch the Sample Data for the Plots

    // @TODO: Build a Bubble Chart Using the Sample Data

    // @TODO: Build a Pie Chart
    // HINT: Use slice() to Grab the Top 10 sample_values,
    // otu_ids, and labels (10 each).
}

function init() {
  // Grab a Reference to the Dropdown Select Element
  var selector = d3.select("#selDataset");

  // Use the List of Sample Names to Populate the Select Options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the First Sample from the List to Build Initial Plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch New Data Each Time a New Sample is Selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the Dashboard
init();