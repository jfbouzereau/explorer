# Presentation

This Explorer allows to perform various statistical analyses and data mining operations in a very easy and intuitive way, just by dragging objects with the mouse. You can watch a demo [here](http://www.dailymotion.com/video/x37lze3)

![explorer screenshot](http://jfbouzereau.free.fr/explorer/explorer.png)

## Types of analysis
* Pie chart
* Bar chart
* Line chart
* Association diagram
* Word cloud
* Arc graph
* Checker graph
* Factorial analysis
* Self-organizing map
* 3-variable graph
* Treemap
* Chi-square test
* Gini impurity
* Entropy
* Repartition curve
* Distribution curve
* Scatter plot
* Ternary plot
* Lag plot
* General statistics
* Principal components
* K-means
* Huen diagram
* Dendogram
* Radviz
* Discriminant analysis
* Variance analysis
* Linear regression
* Box plot
* Parallel coordinates

## Loading data

Data can be loaded from various sources :

#### Clipboard

Launch the application, and click the "Clipboard" button. The data must be in tabular form, with the names of the fields on the first line.

#### Tabular file

Launch the application, and drag the tabular file to the window. The names of the fields are expected to be on the first line.

#### Excel spreadsheet

Launch the application, and drag the excel file to the window. The names of the fields are expected to be at the top of the columns.

#### Mysql database

Launch the application, and drag a configuration file with a content like this:

```
mysql
host:192.168.0.2
user:bob
password:secret
database:test
query:select * from mytable
```

## Principles

#### Fields

There are two kinds of fields :

* Categorical (or qualitative) fields represended in pink
* Numerical (or quantitative) fields represented in pale blue. A field with name terminated by ":n" or "/n" is regarded as numerical.

#### Basic gestures

* Drag an icon to the workspace to create a new graph.

* Drag an icon to an existing graph to change its type.

* Drag a qualitative (pink) field or a quantitative (blue) field to the corresponding slot of a graph to change its definition.

* Drag away a field from a slot to remove the definition.

* Drag a slice of a pie chart to the workspace to create a subset of the data.

* Drag a bar of a bar chart to the workspace to create a subset of the data.

* Move the mouse over an element of a graph to highlight the corresponding element in all the graphs.

## Binaries

Pre-built binary for OSX can be downloaded [here](http://jfbouzereau.free.fr/explorer/explorer.zip)

Pre-built binary for Windows can be downloaded [here](http://jfbouzereau.free.fr/explorer/explorer-ms.zip)

The Explorer is written in javascript and built with [electron](http://electron.atom.io)

## In the browser

The Explorer can also be executed in any modern browser. Open app/index.html, 
paste the data from the clipboard, and click OK.

![](http://88.162.232.107/explorer.jpg)
