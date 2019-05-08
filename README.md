# Belly-Button-Biodiversity


## Background

Full-Stack Data Analysis to build an interactive dashboard exploring the Belly Button Biodiversity Dataset using Plotly.js, Flask and Heroku


## Objectives

### Step 1 - Plotly.js

Use Plotly.js to build interactive charts for the dashboard

* Create a Pie Chart that uses data from the samples route (`/samples/<sample>`) to display the top 10 samples
    * Use `sample_values` as the values for the Pie Chart
    * Use `otu_ids` as the labels for the Pie Chart
    * Use `otu_labels` as the hovertext for the Pie Chart

![](Images/pie_chart.png)

* Create a Bubble Chart that uses data from the samples route (`/samples/<sample>`) to display each sample
    * Use `otu_ids` for the x values
    * Use `sample_values` for the y values
    * Use `sample_values` for the marker size
    * Use `otu_ids` for the marker colors
    * Use `otu_labels` for the text values

![](Images/bubble_chart.png)

* Display the sample metadata from the route `/metadata/<sample>`
    * Display each key/value pair from the metadata JSON object somewhere on the page

* Update all of the plots any time that a new sample is selected

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the Weekly Washing Frequency obtained from the route `/wfreq/<sample>`
    * Modify the example gauge code to account for values ranging from 0 - 9
    * Update the chart whenever a new sample is selected

![](Images/wash_frequency.png)


### Step 2 - Heroku

Deploy the Flask App to Heroku

* Use the provided SQLite file for the database

#### Heroku Deployment:
https://belly-button-biodiversity2019.herokuapp.com/


### Step 3 - Flask API

Use Flask API code to serve the data needed for the plots

* Test the routes by visiting each one in the browser