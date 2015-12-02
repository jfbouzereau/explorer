# Presentation

This Explorer allows to perform various statistical analyses and data mining operations in a very easy and intuitive way. As the name implies, this software aims at exploring data and getting quick insight of the order of magnitude of the observed objects. That's why it does focus on graphical representation and mouse driven operations, unlike the traditional statistical tools cluttered with numerous dialog boxes and lists with five decimal figures. You can, however, have the detailed numbers once your analysis is completed.

## Videos

<table>
<tr>
	<td>Overview</td>
	<td align="center">
		<a href="http://www.dailymotion.com/video/x39lwif_data-explorer-demo_tech" title="watch on dailymotion">
			<img src="http://jfbouzereau.free.fr/explorer/dailymotion.png"></img>
		</a></td>
	<td align="center"> 
		<a href="https://youtu.be/S0pAdZcNnj4" title="watch on youtube">
			<img src="http://jfbouzereau.free.fr/explorer/youtube.jpeg""></img>
		</a></td>
</tr>
<tr>
	<td> Contingency table</td>
	<td align="center">
		<a href="http://www.dailymotion.com/video/x3ciuco_contingency-table-with-data-explorer_lifesty"  title="watch on dailymotion">
			<img src="http://jfbouzereau.free.fr/explorer/dailymotion.png">
		</a></td>
	<td align="center">
		<a href="https://www.youtube.com/watch?v=6hUlluoQOd8" title="watch on youtube">
			<img src="http://jfbouzereau.free.fr/explorer/youtube.jpeg"></img>
		</a></td>
</tr>
</table>


## Screenshots

![explorer screenshot](http://jfbouzereau.free.fr/explorer/explorer2.png)
![explorer screenshot](http://jfbouzereau.free.fr/explorer/explorer3.png)

## Types of analysis
* Pie chart
* Bar chart
* Line chart
* Association diagram
* Word cloud
* Arc diagram
* Contingency table
* Multiple Correspondence analysis
* Self-organizing map
* 3-variable graph
* Treemap
* Pearson' chi-square test
* Yates' chi-square test
* G-test
* Fisher's exact test
* Gini impurity
* Entropy
* Repartition curve
* Distribution curve
* Scatter plot
* Ternary plot
* Andrew's curves
* Survey plot
* 3D plot
* Correlations
* Autocorrelation plot
* Probability plot
* Tukey-lambda PPCC plot
* Lag plot
* General statistics
* Analysis of variance
* Bartlett's test
* F-test
* Levene test
* Brown Forsythe test
* Box's M test
* Student's T-test
* Welch T-test
* Hotelling's test
* Wilk's lambda
* Lawley-Hotelling trace
* Pillai trace
* Two-way anova
* Non-parametric tests
* Kolmogorov-Smirnov test
* Kruskal-Wallis test
* Jonckheere test
* Cochran Q test
* Durbin test
* Friedman test
* Principal components
* Canonical correlation analysis
* K-means
* K-medoids
* Fuzzy C-means
* Huen diagram
* Dendogram
* Radviz
* Discriminant analysis
* Linear regression
* Influence plot
* QQ plot
* Box plot
* Parallel coordinates

## Loading data

Data can be loaded from various sources :

<table border="0">
<tr>
	<th>Source</th>
	<th>File extension</th>
	<th>Remarks</th>
	
</tr>
<tr>
	<td>Access</td>
	<td>mdb , accdb</td>
	<td>Access 2000 or higher</td>
</tr>
<tr>
	<td>Clipboard</td>
	<td>N/A</td>
	<td>The data must be in tabular form, with the names of the fields on the first line</td
</tr>
<tr>
	<td>dBase</td>
	<td>dbf</td>
	<td></td>
</tr>
<tr>	
	<td>Excel</td>
	<td>xlsx</td>
	<td>The names of the fields are expected at the top of the columns</td>
</tr>
<tr>
	<td>JMP</td>
	<td>jmp</td>
	<td></td>
</tr>
<tr>
	<td>JSON file</td>
	<td>*</td>
	<td>A JSON array of records</td>
</tr>
<tr>
	<td>MINITAB</td>
	<td>mtw</td>
	<td></td>
</tr>
<tr>
	<td>MLwiN</td>
	<td>ws</td>
	<td>Uncompressed format only</td>
</tr>
<tr>
	<td>Mysql</td>
	<td>*</td>
	<td>A config file with a content like this:
<div style="background-color:#EEEEEE;">
mysql <br>
host:192.168.0.2 <br>
user:bob <br>
password:secret <br>
database:test <br>
query:select * from mytable <br>
</div>
	</td>
</tr>
<tr>
	<td>Postgres</td>
	<td>*</td>
	<td>A config file with a content like this:
<div style="background-color:#EEEEEE;">
postgres <br>
host:192.168.0.2 <br>
user:bob <br>
password:secret <br>
database:test <br>
query:select * from mytable <br>
</div>
or: 
<div style="background-color:#EEEEEE;">
postgres <br>
connection:bob:secret@192.168.0.2/test <br>
query:select * from mytable <br>
</div>
	</td>
</tr>
<tr>
	<td>R</td>
	<td>rdb</td>
	<td>Binary format only</td>
</tr>
<tr>
	<td>SAS</td>
	<td>sas7bdat</td>	
	<td>Uncompressed format only</td>
</tr>
<tr>
	<td>SPLUS</td>
	<td>sdd</td>
	<td></td>
</tr>
<tr>
	<td>SPSS</td>
	<td>sav</td>
	<td>Uncompressed format only</td>
</tr>
<tr>
	<td>Stata</td>
	<td>dta</td>	
	<td>Stata 8 or higher</td>
</tr>
<tr>	
	<td>Tabular file</td>
	<td>*</td>
	<td>The names of the fields are expected on the first line</td>
</tr>
<tr>
	<td>Web file</td>
	<td>*</td>
	<td>Contains the url of the data. The remote file must be in one of the previous formats</td>
</tr>
</table>

## Principles

##### Fields

There are two kinds of fields :

* Categorical (or qualitative) fields represended in pink.
* Numerical (or quantitative) fields represented in pale blue.

##### Basic gestures

* Drag an icon to the workspace to create a new graph.

* Right-click or control-Click on the workspace to create a new graph.

* Drag a icon to an existing graph to change its type.

* Drag a icon to a graph of same type to change its option.

* Right-click or control-click on a graph to change its option.

* Drag a qualitative (pink) field or a quantitative (blue) field to the corresponding slot of a graph to change its definition.

* Drag away a field from a slot to remove the definition.

* Drag a slice of a pie chart to the workspace to create a subset of the data.

* Drag a slice of a pie chart to the title of another graph to change its selection.

* Drag a bar of a bar chart to the workspace to create a subset of the data.

* Drag a bar of a bar chart to the title of another graph to change its selection.

* Move the mouse over an element of a graph to highlight the corresponding element in all the graphs.

* Drag a categorical field to the numerical fields to generale dummy variables.

* Drag a numerical field to the categorical fields to convert it to categorical.

* Drag the "1" field to the categorical fields to pivot the data.

* Drag a field to the trash icon, or drag the trash icon to a field, to remove this field.

* Drag a field to the sort icon, or drag the sort icon to a field, to sort the data according to this field.

* Drag the help icon (exclamation mark) to a graph to get info about this type of graph.

* Drag the grid icon to the fields to get a spreadsheet of the data.

* Drag the grid icon to a graph to get a spreadsheet of its values.

* Drag the background to scroll the workspace.

* Use the mouse wheel to scroll the workspace vertically.

* Use the mouse wheel on a field list to scroll it.

* Move the mouse at the right of a field list to scroll it.

* Move the mouse under a field list to resize it.

## Installation

The Explorer is written in javascript and built with [electron](http://electron.atom.io),

Pre-built binaries for OSX and Windows can be downloaded from [the release page](https://github.com/jfbouzereau/explorer/releases).

For Linux, download [electron](https://github.com/atom/electron/releases), 
download the source of the Data Explorer from [the release page](https://github.com/jfbouzereau/explorer/releases) and copy the app folder into electron/resources.

## In the browser

The Explorer can also be executed in any modern browser. Open app/index.html, 
paste the data from the clipboard, and click OK.
![](http://88.162.232.107/explorer.jpg)

## Contact

jfbouzereau&#064;netcourrier.com
