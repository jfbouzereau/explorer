var remote = require("remote");
var console = remote.getGlobal("console");
var ipc = require("ipc");

/***************************************************************************/
// CONSTANTS

var VERSION = "1.50";

/***************************************************************************/

var AHELP = {};

var ANUM = 0;
_action("","");
_action("DRAG_GRAPH","");
_action("RESIZE_GRAPH","Resize graph");
_action("KEEP_GRAPH","");
_action("CLOSE_GRAPH","Close graph");
_action("DRAG_SLICE","Create graph from class");
_action("DRAG_LABEL","");
_action("SET_LABEL1","Define partition along axis 1");
_action("DRAG_LABEL1","");
_action("REMOVE_LABEL1","Remove partition along axis 1");
_action("DRAG_TYPE","Create new graph");
_action("SET_TYPE","Change graph type");
_action("DROP_SLICE","Remove class from partition");
_action("DRAG_BIN","");
_action("REMOVE_BIN","Put back class into partition");
_action("RESERVE15","");
_action("DOCK_GRAPH","Move graph into dock");
_action("UNDOCK_GRAPH","Remove graph from dock");
_action("SET_LABEL2","Define partition along axis 2");
_action("DRAG_LABEL2","");
_action("REMOVE_LABEL2","Remove partition along axis 2");
_action("SET_SELECTION","Change selection");
_action("PASTE_LABEL11","Map axis");
_action("PASTE_LABEL12","Map axis");
_action("PASTE_LABEL21","Map axis");
_action("PASTE_LABEL22","Map axis");
_action("CREATE_GRAPH1","Create graph from axis 1");
_action("CREATE_GRAPH2","Create graph from axis 2");
_action("CREATE_VALUE","Convert to numerical");
_action("DRAG_VALUE","");
_action("SET_VALUE1","Define field along axis 1");
_action("SET_VALUE2","Define field along axis 2");
_action("DRAG_VALUE1","");
_action("DRAG_VALUE2","");
_action("REMOVE_VALUE1","Remove definition along axis 1");
_action("REMOVE_VALUE2","Remove definition along axis 2");
_action("CREATE_LABEL","");
_action("DRAG_CURSOR","");
_action("DRAG_CURSORH","Partition into classes of same amplitude");
_action("DRAG_CURSORV","Partition into classes of same size");
_action("HSCROLL_GRAPH","");
_action("VSCROLL_GRAPH","");
_action("DRAG_TITLE","");
_action("REMOVE_TITLE","Remove selection");
_action("INVERT_BIN","Create complementary graph");
_action("CREATE_SET","Create set");
_action("PASTE_TITLE","Change selection");
_action("SWAP_LABEL12","Swap axes");
_action("SWAP_LABEL21","Swap axes");
_action("CREATE_BINSET","Create set");
_action("PASTE_BINLABEL11","Map stock onto axis");
_action("PASTE_BINLABEL12","Map stock onto axis");
_action("DRAG_HUE","");
_action("CHANGE_HUE","Change base color");
_action("SELECT_SLICES","Select the elements");
_action("ADD_STICKER","Add sticker");
_action("DRAG_STICKER","Move sticker");
_action("REMOVE_STICKER","Remove sticker");
_action("ASSIGN_STICKER","Assign sticker");
_action("SET_GRAPH_UNIT","Define graph unit");
_action("SCROLL_DESKTOP","");
_action("SET_LABEL3","Define partition along axis 3");
_action("DRAG_LABEL3","");
_action("REMOVE_LABEL3","Remove partition along axis 3");
_action("SET_LABELN","Define partition along axis");
_action("DRAG_LABELN","");
_action("REMOVE_LABELN","Remove partition");
_action("SWAP_LABELN","Swap partition");
_action("DRAG_TABLE","Display graph values");
_action("SHOW_TABLE","Display graph values");
_action("DRAG_INSPECTOR","Inspect graph values");
_action("SHOW_INSPECTOR","Inspect graph values");
_action("DRAG_ADD","Add field");
_action("ADD_LABEL","Add categorical field");
_action("ADD_VALUE","Add numerical field");
_action("DRAG_ERROR","Change error value");
_action("DRAG_NSLOT","Change the number of classes");
_action("CHANGE_DISPLAY","Change the point representation");
_action("DRAG_CLONE","Duplicate graph");
_action("CLONE_GRAPH","Duplicate graph");
_action("SET_VALUEN","Add field");
_action("DRAG_VALUEN","");
_action("REMOVE_VALUEN","Remove field");
_action("SWAP_VALUEN","Swap fields");
_action("DRAG_SIDEBAR","Move toolbar");
_action("DRAG_AXIS","Create field from projection");
_action("CREATE_PROJECTION","Create field from projection");
_action("SWAP_VALUE12","Swap fields");
_action("SWAP_VALUE21","Swap fields");
_action("CREATE_KGROUP","Create field from partition");
_action("CREATE_BOOLEAN","Create boolean field from modality");
_action("REMOVE_LABEL","Remove field");
_action("REMOVE_VALUE","Remove field");
_action("DONT_REMOVE_VARIABLE","Some graphs use this field");
_action("CHANGE_NCLASS","Change the number of classes");
_action("EXPORT_CHART","Export graphs into HighCharts");
_action("SAVE_CONFIG","Save the configuration");
_action("CHANGE_LAG","Change lag value");
_action("DRAG_SORT","Sort data");
_action("SORT_DATA","Sort data by");


// actions that gray the graph
var GACTIONS = {}
    GACTIONS[SET_TYPE] = 1;
    GACTIONS[SET_GRAPH_UNIT] = 1;
    GACTIONS[SHOW_TABLE] = 1;
    GACTIONS[SHOW_INSPECTOR] = 1;
    GACTIONS[CLONE_GRAPH] = 1;
	GACTIONS[EXPORT_CHART] = 1;
	

/***************************************************************************/

var GNAME = {};
var GTYPE = {};
var GHELP = {};
var GDRAW = {};

var KNUM = 0;
_type("TYPE_PIE","Pie chart",drawPieGraph);
_type("TYPE_BAR","Bar chart",drawBarGraph);
_type("TYPE_LINE","Line chart",drawLineGraph);
_type("TYPE_ASSOC","Associations",drawAssocGraph);
_type("TYPE_TAG","Word cloud",drawTagGraph);
_type("TYPE_ARC","Arc graph",drawArcGraph);
_type("TYPE_DOT","Checker graph",drawDotGraph);
_type("TYPE_FAC","Factorial analysis",drawFacGraph);
_type("TYPE_SOM","Self-organizing map",drawSomGraph);
_type("TYPE_THREE","Graph 3",drawThreeGraph);
_type("TYPE_MULTI","Treemap",drawMultiGraph);
_type("TYPE_CHI2","Chi square test",drawChi2Graph);
_type("TYPE_GINI","Gini impurity",drawGiniGraph);
_type("TYPE_ENTROPY","Entropy",drawEntropyGraph);

var NBTYPE1 = KNUM;			// max graph types

_type("TYPE_REPART","Repartition",drawRepartGraph);
_type("TYPE_DISTRIB","Distribution curve",drawDistribGraph);
_type("TYPE_SCATTER","Scatter plot",drawScatterGraph);
_type("TYPE_LAG","Lag plot",drawLagPlot);
_type("TYPE_MOMENTS","Statistics",drawMomentGraph);
_type("TYPE_CORR","Correlations",drawCorrGraph);
_type("TYPE_ACP","Principal components",drawAcpGraph);
_type("TYPE_KMEANS","K-means",drawKmeansGraph);
_type("TYPE_HUEN","Huen diagram",drawHuenGraph);
_type("TYPE_DENDRO","Dendrogram",drawDendroGraph);
_type("TYPE_RADVIZ","Radviz",drawRadvizGraph);
_type("TYPE_TERNARY","Ternary plot",drawTernaryPlot);

var NBTYPE2 = KNUM; 		//  max plot types

_type("TYPE_DISCRI","Discriminant analysis",drawDiscriGraph);
_type("TYPE_ANOVA","Variance analysis",drawAnovaGraph);
_type("TYPE_REGRES","Linear regression",drawRegresGraph);
_type("TYPE_BOX","Box plot",drawBoxGraph);
_type("TYPE_PARA","Parallel coordinates",drawParaGraph);
_type("TYPE_PALETTE","Palette",drawPaletteGraph);

var NBTYPE3 = KNUM;			// max total types

var TYPE_BAND = 99

/***************************************************************************/

var NIL = "\r"

var PINK = "#FFEEEE"
var BLUE = "#EEEEFF"
var GRAY = "#808080"
var YELLOW = "#FFFFDA"
var TINTS = []
for(var k=0;k<25;k++)
	{
	var t = Math.floor(k*255/24)
	TINTS[k] = "rgb("+t+","+t+","+t+")"
	}

//***************************************************************************

var myconfig = null;

var mywindow = null;
var canvas = null;

var mywidth = 0;
var myheight = 0;

var barshift = 0;

var graphs = [];		// all the active graphs
var dock = [];			// all the docked graphs
var formulas = [];		// all the formulas

var lrecords = [];		// records with the labels (textual)
var vrecords = [];		// records with the values (numerical)
var labels = [];
var values = [];

var sets = {}
var nset = 0;

var message = "";

var overlabel1 = -1;
var overkey1 = null;		// mouse is over this key

var overlabel2 = -1;
var overkey2 = null	;

var overlabel3 = -1;
var overkey3 = null;

var informula = false;

var checkboard = createCheckboard();

//***************************************************************************
//***************************************************************************


ipc.on("start",  function (message) {
	canvas = document.getElementById("canvas");

	window.addEventListener("mousedown", down);
	window.addEventListener("mousemove", move);
	window.addEventListener("mouseup", up);
	window.addEventListener("resize", draw);

	loadData(remote.getGlobal("data"));
	draw();
});

//***************************************************************************
//***************************************************************************

function _action(name,help)
{

window[name] = ANUM;

AHELP[ANUM] = help;

ANUM++;

}

//***************************************************************************

function _type(name,help,draw)
{

window[name] = KNUM;

GNAME[KNUM] = name;	// name from type
GTYPE[name] = KNUM;	// type from name
GHELP[KNUM] = help;	// help message
GDRAW[KNUM] = draw;	// drawing function

KNUM++;

}

//***************************************************************************

function Graph(x,y,closeable,selection,index1,hue,type)
{
this.x = x;
this.y = y;
this.w = 300;
this.h = 300;
this.closeable = closeable;
this.selection = selection;

if(type<NBTYPE1)
	{
	// graph
	this.ilabel1 = index1
	this.ivalue1 = -1
	}
else if(type<NBTYPE2)
	{
	// plot
	this.ilabel1 = -1
	this.ivalue1 = index1
	}
else
	{
	this.ilabel1 = -1;
	this.ivalue1 = -1;
	}

this._keys1 = [];
this.use1 = null;

this.ilabel2 = -1;
this._keys2 = [];
this.use2 = null;

this.ivalue2 = -1;

this.ilabel3 = -1;
this._keys3 = [];
this.use3 = null;

this.omit = {};

this.type = type;
this.option = 0;

this._count = {};

this.hue = hue;
this._colors1 = {};
this._hilites1 = {};
this._pales1 = {};
this._colors2 = {};
this._hilites2 = {};
this._pales2 = {};

this.total = 0;

this._z = {};		// specific data

this.timerid = null;	// for long computation

// height of graph title bar
this.hbar = (this.selection.length/2)*16;
if(this.hbar==0) this.hbar = 16;

this.margin1 = 5;
this.margin2 = 5;
this.margin3 = 5;

this.xshift = 0	;	// scrolling
this.yshift = 0	;

this.contour = null;
this.ncontour = 0;

this.stickers = [];

this.iunit = 0;
}

//***************************************************************************

function loadData(data) {

graphs = [];
labels = [];
values = ["1"];
lrecords = [];
vrecords = [];

var isnum = [];

// name of variables
var words = data[0];
var nv = words.length;
for(var i=0;i<words.length;i++)
	{
	words[i] = unquote(words[i]);
	var end = words[i].substring(words[i].length-2);	
	if((end==":n")||(end=="/n"))
		{
		values.push(words[i].substring(0,words[i].length-2));
		isnum.push(true)
		}
	else
		{
		labels.push(words[i])
		isnum.push(false)
		}
	}

// data
for(var k=1;k<data.length;k++)
	{
	words = data[k];
	if(words.length!=nv) continue;

	lrecord = []
	vrecord = [1]
	for(var j=0;j<words.length;j++)
		if(!isnum[j])
			lrecord.push(words[j])
		else if(typeof(words[j])=="number")
			vrecord.push(words[j])
		else
			{
			var x = words[j]==undefined ? 0: words[j] == "" ? 0 : Number(words[j].replace(",","."))
			if(isNaN(x)) x = 0
			vrecord.push(x)
			}

	lrecords.push(lrecord)
	vrecords.push(vrecord)
	}


}

//***************************************************************************

function unquote(s)
{
var m = s.match(/^"(.*)"$/);
return m==null ? s : m[1];
}

//***************************************************************************

function dumpDataset()
{
var s = ""
var sep = ""
for(var i=0;i<labels.length;i++)
	{
	s += sep
	s += labels[i]
	sep = "\t"
	}
for(var i=1;i<values.length;i++)
	{
	s += sep
	s += values[i]+":n"
	sep = "\t"
	}
console.log(s)

for(var i=0;i<lrecords.length;i++)
	{
	sep = ""
	s = ""
	for(var j=0;j<labels.length;j++)
		{
		s += sep
		s += lrecords[i][j]
		sep = "\t"
		}
	for(var j=1;j<values.length;j++)
		{
		s += sep
		s += vrecords[i][j]
		sep = "\t"
		}
	console.log(s)
	
	}

}

//***************************************************************************


/*
var wdebug = null

function debug(msg)
{
if(wdebug==null)
	{
	wdebug = window.open("","debug")
	var doc = wdebug.document
	doc.open()
	doc.write("<html>")
	doc.write("<pre>")
	doc.write("<div id='debug'></div>")
	doc.write("</pre>")
	doc.write("</html>")
	doc.close()	
	}
$("#debug",wdebug.document).append(msg+"<br>")
}
*/
function debug(msg) { console.log(msg) }

//***************************************************************************

function dumpM(mat)
{
var s = ""
for(var i=0;i<mat.length;i++)
	{
	s += "["+i+"] = "
	for(var j=0;j<mat[i].length;j++)
		s += " "+mat[i][j]	
	s += "\n"
	}
debug(s)
}

function dumpV(vec)
{
var n = vec.length
var s = ""
for(var i=0;i<n;i++)
	s += " "+vec[i]
debug(s)
}

//***************************************************************************

function utf8_decode(utftext) {

var string = "";
var i = 0;
var c = c1 = c2 = 0;

while ( i < utftext.length ) {

	c = utftext.charCodeAt(i);

	if (c < 128) {
		string += String.fromCharCode(c);
		i++;
	}
	else if((c > 191) && (c < 224)) {
		c2 = utftext.charCodeAt(i+1);
		string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
		i += 2;
	}
	else {
		c2 = utftext.charCodeAt(i+1);
		c3 = utftext.charCodeAt(i+2);
		string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
		i += 3;
	}

}

		return string;
}

//***************************************************************************

function is_utf8(text)
{
return text.indexOf("\xc3")>=0;
}

//***************************************************************************

function continueWithDataset(_data,_sts,config)
{

try { 
	if(is_utf8(_data))
		eval("_data = "+utf8_decode(_data));
	else
		eval("_data = "+_data);
	}
catch(err)
	{
	console.log("eval error "+err);
	alert(err)
	}

hideClock()

graphs = [];

labels = _data.labels
lrecords = _data.records


for(var i=0;i<labels.length;i++)
	if(labels[i].length>13)
		labels[i] = labels[i].substring(0,6)+"\u2026"+
			labels[i].substring(labels[i].length-6,labels[i].length)

vrecords = []

// dummy value
values = ["1"]

if(typeof(_data.values)=="undefined")
	{
	for(var i=0;i<lrecords.length;i++)
		vrecords.push([1])
	}
else
	{
	for(var i=0;i<_data.values.length;i++)
		values.push(_data.values[i])

	for(var i=0;i<lrecords.length;i++)
		{
		var record = [1]

		// convert the last elements to numerical values
		k = labels.length
		for(var j=0;j<_data.values.length;j++)
			record.push(lrecords[i][k++])
		vrecords.push(record);

		// remove last elements from the lrecord
		lrecords[i].splice(labels.length,lrecords[i].length-labels.length)
		}
	}

//dumpDataset()
openExplorerWindow(config)
}

//***************************************************************************

function loadStorageConfig(config)
{
if(typeof(window.localStorage)=="undefined") return;

var x = window.localStorage["explorer_"+config.dataset];
if(x)
	{
	try	{
		x = JSON.parse(x);
		if(x.graphs) config.graphs = x.graphs;
		if(x.formulas) config.formulas = x.formulas;
		if(x.width) config.width = x.width;
		if(x.height) config.height = x.height;

		// convert back type name into type number
		if(config.graphs)
		for(var i=0;i<config.graphs.length;i++)
			if(config.graphs[i].typename)
				config.graphs[i].type = GTYPE[config.graphs[i].typename];
		}
	catch(err)
		{
		console.log("localStorage err "+err);
		}
	}
}

//***************************************************************************

function saveStorageConfig()
{

try	{
	if(typeof(window.localStorage)=="undefined") return;

	for(var i=0;i<graphs.length;i++)
		graphs[i].typename = GNAME[graphs[i].type];

	var x = {}
		x.width = mywidth;
		x.height = myheight;
		x.graphs = graphs;
		x.formulas = formulas;

	window.localStorage["explorer_"+myconfig.dataset] = JSON.stringify(x);

	alert("Configuration saved");
	}
catch(err)
	{
	console.log("localStorage err "+err);
	}
}

//***************************************************************************

function openExplorerWindow(config)
{

// first graph with no selection at all
var selection = []
var graph = new Graph(50,50,true,selection,-1,0,TYPE_PIE)
computeGraphData(graph)
graphs.push(graph)		

}

//***************************************************************************

function createCheckboard()
{
var c = document.createElement("canvas");
c.width = 4;
c.height = 4;
var x = c.getContext("2d")
x.fillStyle = "rgba(0,0,0,0)"
x.fillRect(0,0,4,4);
x.fillStyle = "#000000";
x.fillRect(0,0,2,2);
x.fillRect(2,2,2,2);
return c;
}

//***************************************************************************

function dashedLine(ctx,x, y, x2, y2, da)
{
	if (!da) da = [10,5];
	ctx.save();
	var dx = (x2-x), dy = (y2-y);
	var len = Math.sqrt(dx*dx + dy*dy);
	var rot = Math.atan2(dy, dx);
	ctx.translate(x, y);
	ctx.moveTo(0, 0);
	ctx.rotate(rot);       
	var dc = da.length;
	var di = 0, draw = true;
	x = 0;
	while (len > x) {
		x += da[di++ % dc];
		if (x > len) x = len;
		draw ? ctx.lineTo(x, 0): ctx.moveTo(x, 0);
		draw = !draw;
		}       
	ctx.restore();
}

//***************************************************************************

var ptstart = {x:0,y:0}
var ptclick = {x:0,y:0}
var ptmove = {x:0,y:0}

var faction = 0				// first action
var action = 0
var graphindex = -1
var graphindex2 = -1
var sliceindex = -1
var labelindex = -1
var destlabelindex = -1
var destvalueindex = -1
var typeindex = -1
var valueindex = -1
var titleindex = -1

var animtimer = null

//***************************************************************************

function getGray(h)
{
var gray = 255 - Math.floor(h*255)
return "rgb("+gray+","+gray+","+gray+")"
}

//***************************************************************************

function getColor(h,s,v)
{
var i = Math.floor(h*6)
var f = h*6-i
var p = v*(1-s)
var q = v*(1-f*s)
var t = v*(1-(1-f)*s)
if(i==0)
	{ r = v; g = t; b = p }
else if(i==1)
	{ r = q; g = v; b = p }
else if(i==2)
	{ r = p; g = v; b = t }
else if(i==3)
	{ r = p; g = q; b = v }
else if(i==4)
	{ r = t; g = p; b = v }
else	
	{ r = v; g = p; b = q }

r = Math.floor(r*255)
g = Math.floor(g*255)
b = Math.floor(b*255)
return "rgb("+r+","+g+","+b+")"
}

//***************************************************************************

function cloneArray(a)
{
var b = []
for(var i=0;i<a.length;i++)
	b.push(a[i])
return b
}

//***************************************************************************

function cloneObject(a)
{
var b = {}
for(var x in a)
	b[x] = a[x]
return b
}

//***************************************************************************

function card(obj)
{
// number of members in objet
var n = 0
for(var x in obj) { n++ }
return n
}

//***************************************************************************

function getKeyIndex(graph,k)
{
// return actual index in full table
j = -1
for(var i=0;i<graph._keys1.length;i++)
	{
	if(graph._keys1[i] in graph.omit) continue
	j += 1
	if(j==k) return i
	}	
return -1
}

//***************************************************************************

function countKeys(graph)
{
var n = 0
for(var i=0;i<graph._keys1.length;i++)
	if(!(graph._keys1[i] in graph.omit))
		n += 1
return n
}

//***************************************************************************

function getxy(event)
{
var pt = {}
pt.x = (event.layerX||event.layerY==0)  ? event.layerX : event.offsetX
pt.y = (event.layerX||event.layerY==0)  ? event.layerY : event.offsetY
return pt
}

//***************************************************************************

function hiliteMatch1(ilabel,key)
{
if(overlabel1<0)
	{
	// no current hilite
	return false
	}
else if(overlabel2<0)
	{
	// one dimension hilite
	return (ilabel==overlabel1)&&(key==overkey1)
	}
else if(overlabel3<0)
	{
	// two dimensions
	return ((ilabel==overlabel1)&&(key==overkey1))||
		((ilabel==overlabel2)&&(key==overkey2))
	}
else
	{
	// three dimensions
	return ((ilabel==overlabel1)&&(key==overkey1))||
		((ilabel==overlabel2)&&(key==overkey2))||
		((ilabel==overlabel3)&&(key==overkey3))
	}

}

//***************************************************************************

function hiliteMatch2(ilabel1,key1,ilabel2,key2)
{
if(overlabel1<0)
	{
	// no current hilite
	return false
	}
else if(overlabel2<0)
	{
	// one dimension hilite
	return ((ilabel1==overlabel1)&&(key1==overkey1))||
		((ilabel2==overlabel1)&&(key2==overkey1))
	}
else
	{
	// two dimension hilite
	if((ilabel1==overlabel1)&&(key1==overkey1)&&
		(ilabel2==overlabel2)&&(key2==overkey2))
			return true
	else if((ilabel1==overlabel2)&&(key1==overkey2)&&
		(ilabel2==overlabel1)&&(key2==overkey1))
			return true
	else
		return false
	}
}

//***************************************************************************

function inRect(pt,x,y,w,h)
{
if(pt.x<x) return false
if(pt.x>x+w) return false
if(pt.y<y) return false
if(pt.y>y+h) return false
return true
}

//***************************************************************************

function inSticker(pt)
{
var y = pt.y+barshift

if(pt.x<mywidth-100) return false

var ni = Math.ceil(NBTYPE3/5)
var yy = labels.length*20 + 20 + ni*20 + 20 + values.length*20 + 20
if(y<yy) return false
if(y>yy+20) return false

return true
}

//***************************************************************************

// look for the index-th key in the omit set

function getBinSlice(graph,index)
{
var k = 0
for(var i=0;i<graph._keys1.length;i++)
	{
	var key = graph._keys1[i]
	if(!(key in graph.omit)) continue
	if(k==index) return i
	k++
	}
return -1
}

//***************************************************************************

function inGraph(pt)
{
for(var i=graphs.length-1;i>=0;i--)
	{
	var graph = graphs[i]
	if(inRect(pt,graph.x,graph.y+graph.hbar,graph.w,graph.h-graph.hbar))
		return i
	}
return -1
}

//***************************************************************************

function inFullGraph(pt)
{
for(var i=graphs.length-1;i>=0;i--)
	{
	var graph = graphs[i]
	if(inRect(pt,graph.x,graph.y,graph.w,graph.h))
		return i
	}
return -1
}

//***************************************************************************

function inGraphSticker(pt,graph)
{
for(var i=0;i<graph.stickers.length;i++)
	{
	var sticker = graph.stickers[i]
	var x = graph.x + graph.w*sticker.x
	var y = graph.y + graph.hbar + (graph.h-graph.hbar)*sticker.y
	if(inRect(pt,x-sticker.w/2,y-sticker.h/2,sticker.w,sticker.h))
		return i
	}
}

//***************************************************************************

function inGraphBin(pt,graph)
{
// only some charts have bin
if((graph.type!=TYPE_PIE)&&(graph.type!=TYPE_BAR)&&
	(graph.type!=TYPE_FAC)) return -1

if(!inRect(pt,graph.x,graph.y+graph.h-20,graph.w,20))
	return -1

var index = Math.floor((pt.x-graph.x)/20)

return index
}

//***************************************************************************

function inGraphAxis(pt,graph)
{

if(graph.type==TYPE_ACP)
	{
	if(typeof(graph._z.xaxis)=="undefined") return -1
	if(inRect(pt,graph._z.xaxis.x-10,graph._z.xaxis.y-10,20,20)) return 0;
	if(inRect(pt,graph._z.yaxis.x-10,graph._z.yaxis.y-10,20,20)) return 1;
	}
else if(graph.type==TYPE_DISCRI)
	{
	if(typeof(graph._z.xaxis)=="undefined") return -1
	if(inRect(pt,graph._z.xaxis.x-10,graph._z.xaxis.y-10,20,20)) return 0;
	if(inRect(pt,graph._z.yaxis.x-10,graph._z.yaxis.y-10,20,20)) return 1;
	}
else if(graph.type==TYPE_DISTRIB)
	{
	if(graph._z.cursor==0)
		return -1;
	else if(graph._z.cursor>0)
		return inRect(pt,graph.x+graph.w-20,graph.y+graph.h-30,20,20)? 0:-1
	else if(graph._z.cursor<0)
		return inRect(pt,graph.x+10,graph.y+graph.hbar,20,20) ? 1:-1
	}
else if(graph.type==TYPE_KMEANS)
	{
	if(graph.ivalues.length>0)
		return inRect(pt,graph.x+245,graph.y+graph.hbar+5,30,30) ? 1 : -1
	}
else if(graph.type==TYPE_REPART)
	{
	return inRect(pt,graph.x+graph.w-20,graph.y+graph.h-70,20,20)? 1: -1;
	}
else if(graph.type==TYPE_DENDRO)
	{
	return inRect(pt,graph.x+graph.w-120,graph.y+graph.h-70,20,20) ? 1: -1;
	}
else if(graph.type==TYPE_REGRES)
	{
	if(!graph.ivalues) return -1;

	var y = graph.y + 160 + graph.ivalues.length*20;
	if(inRect(pt,graph.x+350,y-17,20,20)) return 1;
	if(inRect(pt,graph.x+350,y+10,20,20)) return 2;	
	return -1;
	}

return -1;

}

//***************************************************************************

function inDock(pt)
{
if(pt.x<20) return -1
if(pt.x>20+20*dock.length) return -1
if(pt.y<myheight-40) return -1
if(pt.y>=myheight+20) return -1
return Math.floor((pt.x-20)/20)
}

//***************************************************************************

function inTableIcon(pt)
{
return inRect(pt,mywidth-20,myheight-40,20,20);
}

//***************************************************************************

function inInspectorIcon(pt)
{
return inRect(pt,mywidth-40,myheight-40,20,20);
}

//***************************************************************************

function inHScroll(pt,graph)
{
return false;
/*
if(graph.type != TYPE_TABLE) return false
return inRect(pt,graph.x,graph.y+graph.hbar,graph.w,14)
*/
}

//***************************************************************************

function inVScroll(pt,graph)
{
//if((graph.type != TYPE_TABLE)&&(graph.type!=TYPE_TAG)) return false
if(graph.type!=TYPE_TAG) return false
return inRect(pt,graph.x+graph.w-20,graph.y+graph.hbar,
	20,graph.h-graph.hbar)
}

//***************************************************************************

function inLabel(pt)
{
var y = pt.y+barshift
if(pt.x<mywidth-100) return -1
if(y>=labels.length*20) return -1
return Math.floor(y/20)
}

//***************************************************************************

function inValue(pt)
{
var y = pt.y+barshift

var ni = Math.ceil(NBTYPE3/5)
if(pt.x<mywidth-100) return -1
if(y<labels.length*20+20+ni*20+20) return -1
if(y>=labels.length*20+20+ni*20+20+20*values.length) return -1
return Math.floor((y-labels.length*20-20-20*ni-20)/20)
}

//***************************************************************************

function labelInUse(index)
{
for(var i=0;i<graphs.length;i++)
	{
	if(graphs[i].ilabel1==index) return true;
	if(graphs[i].ilabel2==index) return true;
	if(graphs[i].ilabel3==index) return true;
	}
return false;
}

//***************************************************************************

function valueInUse(index)
{
for(var i=0;i<graphs.length;i++)
	{
	if(graphs[i].ivalue1==index) return true;
	if(graphs[i].ivalue2==index) return true;
	if(graphs[i].ivalues)
		for(var j=0;j<graphs[i].ivalues.length;j++)
			if(graphs[i].ivalues[j]==index)
				return true;
	}
return false;
}

//***************************************************************************

function inDustbin(pt)
{
return inRect(pt,mywidth-20,myheight-40,20,20);
}

//***************************************************************************

function inGraphTitle(pt,graph)
{
return inRect(pt,graph.x,graph.y,graph.w,graph.hbar);
}

function inTitle(pt)
{
var index = -1
for(var i=0;i<graphs.length;i++)
	{
	var graph = graphs[i]
	if(inRect(pt,graph.x,graph.y,graph.w,graph.hbar))
		index = i
	else if(inRect(pt,graph.x,graph.y,graph.w,graph.h))
		index = -1;
	}
return index
}

//***************************************************************************

function inGraphLabel1(pt,graph)
{
if(graph.type>=NBTYPE1) return false
//if(graph.type==TYPE_TABLE) return false
if(graph.type==TYPE_MULTI) return false
return inRect(pt,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20)
}

//***************************************************************************

function inGraphLabel2(pt,graph)
{
if(graph.type==TYPE_ANOVA)
	return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)
if(graph.type==TYPE_DISCRI)
	return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)
if(graph.type==TYPE_REPART)
	return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)
if(graph.type==TYPE_BOX)
	return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)
if(graph.type==TYPE_PARA)
	return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)
if(graph.type==TYPE_ACP)
	return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)
if(graph.type==TYPE_RADVIZ)
	return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)

if(graph.type>=NBTYPE1) return false
if(graph.type==TYPE_PIE) return false
return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)
}

//***************************************************************************

function inGraphLabel3(pt,graph)
{
if((graph.type!=TYPE_THREE)&&(graph.type!=TYPE_SCATTER)) return false
return inRect(pt,graph.x+graph.w-100-graph.margin3,graph.y+graph.h-25,100,20)
}

//***************************************************************************

function inGraphLabeln(pt,graph)
{
if(graph.type!=TYPE_MULTI) return false

for(var k=0;k<=graph.ilabels.length;k++)	
	if(inRect(pt,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20))
		{
		destlabelindex = k
		return true
		}

return false
}

//***************************************************************************

function inGraphValue1(pt,graph)
{
if(graph.type<NBTYPE1) return false
if(hasValuen(graph)) return false;

return inRect(pt,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20)
}

//***************************************************************************

function inGraphValue2(pt,graph)
{
if(graph.type<NBTYPE1) return false
if(graph.type==TYPE_DISTRIB) return false

if(graph.type==TYPE_REGRES)
	return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)

return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)
}

//***************************************************************************

function hasValuen(graph)
{
if(graph.type == TYPE_ACP) return true;
if(graph.type == TYPE_TERNARY) return true;
if(graph.type == TYPE_CORR) return true;
if(graph.type == TYPE_KMEANS) return true;
if(graph.type == TYPE_DISCRI) return true;
if(graph.type == TYPE_HUEN) return true;
if(graph.type == TYPE_DENDRO) return true;
if(graph.type == TYPE_PARA) return true;
if(graph.type == TYPE_REGRES) return true;
if(graph.type == TYPE_RADVIZ) return true;

return false;
}

//***************************************************************************

function inGraphValuen(pt,graph,full)
{
if(!hasValuen(graph)) return false;

var n = full ? graph.ivalues.length : graph.ivalues.length-1;

for(var k=0;k<=n;k++)	
	if(inRect(pt,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20))
		{
		destvalueindex = k
		return true
		}

return false
}

//***************************************************************************

function inRepartCursor(pt,graph)
{
if(graph.type!=TYPE_REPART) return -1;
if(graph.ivalue1<0) return -1;

var x1 = graph.x +20
var x2 = graph.x + graph.w - 20;

var x = x1+(x2-x1)*graph.nslot/50;
var y = graph.y + graph.h - 30

return inRect(pt,x-10,y-15,20,30) ? 1 : -1;
}

//***************************************************************************

function inKmeansCursor(pt,graph)
{
if(graph.type!=TYPE_KMEANS) return -1
if(graph.ivalues.length<=0) return -1

x = graph.x+20+(graph.w-40)*graph.nslot/50
y = graph.y + graph.h - 40

return inRect(pt,x-10,y-15,20,30) ? 1 : -1;
}

//***************************************************************************

function inDendroCursor(pt,graph)
{
if(graph.type!=TYPE_DENDRO) return -1;
if(!graph.ivalues) return -1;
if(graph.ivalues.length==0) return -1;
if(graph._z.percent<1) return -1;

var xmin = graph.x+10;
var xmax = graph.x + graph.w - 120;

var y = graph.y + graph.h - 40;
var x = xmin+(xmax-xmin)*graph._z.nc/50;

return inRect(pt,x-10,y-15,20,30) ? 1 : -1;
}

//***************************************************************************

function inChi2Cursor(pt,graph)
{
if(graph.type!=TYPE_CHI2) return -1;
if(graph.ilabel1<0) return -1;
if(graph.ilabel2<0) return -1;

if(typeof(graph.error)=="undefined") graph.error = 5;

var y = graph.y + 200;
var x = graph.x+20+(graph.w-40)*graph.error/10;

if(inRect(pt,x-10,y-15,20,30))
	return 1;
else
	return -1;
}

//***************************************************************************

function inDistribCursor(pt,graph)
{

if(graph.type != TYPE_DISTRIB) return -1
if(graph.ivalue1<0) return -1

if(graph._z.cursor==0)
	{
	if(inRect(pt,graph.x,graph.y+graph.h-20,20,20))
		return DRAG_CURSOR
	}
else if(graph._z.cursor>0)
	{
	// horizontal cursor
	var dx = graph.w -20
	var x = graph.x+ 20 + graph._z.cursor*dx
	if(inRect(pt,x-10,graph.y+graph.h-20,20,20))
		return DRAG_CURSORH
	}
else if(graph._z.cursor<0)
	{
	var dy = graph.h -graph.hbar -20
	var y = graph.y + graph.h -20 +graph._z.cursor*dy
	if(inRect(pt,graph.x,y-10,20,20))
		return DRAG_CURSORV
	}
return -1
}

//***************************************************************************

function inLagCursor(pt,graph)
{
if(graph.type!=TYPE_LAG) return false;
if(graph.ivalue1<0) return false;

xmin = graph.x+10;
xmax = graph.x + graph.w - 130;
ymin = graph.y + graph.hbar + 25;
ymax = graph.y + graph.h -70;

var y = graph.y + graph.h - 30;
var x = xmin+(xmax-xmin)*graph._z.lag/10;

return inRect(pt,x-5,y-10,10,20);
}

//***************************************************************************

function inGraphHandle(pt,graph)
{
if(inRect(pt,graph.x+graph.w-20,graph.y,20,graph.selection.length/2*20))
	return Math.floor((pt.y-graph.y)/20)
else
	return -1
}

//***************************************************************************

function inGraphSlice(pt,graph)
{
if(!inRect(pt,graph.x,graph.y,graph.w,graph.h))
	return -1

if(graph.type==TYPE_PIE)
	return inPieSlice(pt,graph)
else if(graph.type==TYPE_BAR)
	return inBarSlice(pt,graph)
else if(graph.type==TYPE_BAND)
	return inBandSlice(pt,graph)
else if(graph.type==TYPE_DOT)
	return inDotSlice(pt,graph)
else if(graph.type==TYPE_TAG)
	return inTagSlice(pt,graph)
else if(graph.type==TYPE_ARC)
	return inArcSlice(pt,graph)
else if(graph.type==TYPE_SOM)
	return inSomGraph(pt,graph)
else if(graph.type==TYPE_THREE)
	return inThreeSlice(pt,graph)
else if(graph.type==TYPE_MULTI)
	return inMultiSlice(pt,graph)
else if(graph.type==TYPE_BOX)
	return inBoxSlice(pt,graph)
else if(graph.type==TYPE_FAC)
	{
	var x = inFacGraph(pt,graph)
	if(!x)
		return -1
	else if(x.type==2)
		return -1
	else
		return getKeyIndex(graph,x.index)
	}
}

//***************************************************************************

function inPieSlice(pt,graph)
{
var r1 = graph.w/2
var r2 = (graph.h-graph.hbar-20)/2
var xc = graph.x+r1
var yc = graph.y+graph.hbar+r2
var r = (r1<r2) ? r1 : r2

var dc = (pt.x-xc)*(pt.x-xc) + (pt.y-yc)*(pt.y-yc)
if(dc>r*r) return -1


var angle = Math.atan2(xc-pt.x,pt.y-yc)+Math.PI

var angle1 = 0

var nkey = 0
for(var i=0;i<graph._keys1.length;i++)
	if(!(graph._keys1[i] in graph.omit))
		nkey ++

for(var i=0;i<graph._keys1.length;i++)
	{
	var key = graph._keys1[i]
	if(key in graph.omit) continue

	if((graph.option%2)==0)
		var angle2 = angle1 + Math.PI*2*graph._count[key]/graph.total
	else
		var angle2 = angle1 + Math.PI*2/nkey

	if((angle>=angle1)&&(angle<angle2))
		return i
	angle1 = angle2
	}

return -1
}

//***************************************************************************

function inBarSlice(pt,graph)
{
var hmax = graph.h-graph.hbar -20

if(graph.ilabel2<0)
	{
	// one dimension
	var ymax = 0
	var nkey = 0
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue
		if(graph._count[key]>ymax)
			ymax = graph._count[key]
		nkey++
		}
	if(ymax==0) ymax = 1
	var dx = graph.w/nkey
	var ikey = 0
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue

		if((graph.option%2)==0)
			var dy = graph._count[key]*hmax/ymax
		else
			var dy = hmax

		var x = graph.x+ikey*graph.w/nkey
		var y = graph.y+graph.h-20-dy
		if(inRect(pt,x,y,dx,dy))
			return j
		ikey++
		}
	}
else
	{
	// two dimensions
	if((graph.option%3)==0)
		{
		// normal graph
	
		var nkey = 0;	
		var ymax = 0;
		for(var i=0;i<graph._keys1.length;i++)
			{	
			var key1 = graph._keys1[i];
			var sum = 0;
			if(key1 in graph.omit) continue;
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(key in graph._count)
					sum += graph._count[key];
				}
			if(sum>ymax) ymax = sum;
			nkey++;
			}

		var dx = graph.w/nkey;	
		var ikey = 0;
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
			if(key1 in graph.omit) continue;
			var x = graph.x+ikey*graph.w/nkey
			var y = graph.y + graph.h -20
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;	
				if(!(key in graph._count)) continue;
				var dy = graph._count[key]*hmax/ymax;
				y -= dy;
				if(inRect(pt,x,y,dx,dy))
					return j+graph._keys2.length*i;				
				}
			ikey++;
			}
		}

	if((graph.option%3)==1)
		{
		// percentage graph
	
		var nkey = 0;
		var sum = {};
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
			if(key1 in graph.omit) continue;
			sum[key1] = 0;
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(key in graph._count)
					sum[key1] += graph._count[key];
				}
			nkey++;
			}

		var dx = graph.w/nkey;
		var ikey = 0;
		for(var i=0;i<graph._keys1.length;i++)
			{	
			var key1= graph._keys1[i];
			if(key1 in graph.omit) continue;
			var y = graph.y+graph.h -20;
			var x = graph.x+ikey*graph.w/nkey
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(!(key in graph._count)) continue;
				var dy = graph._count[key]*hmax/sum[key1];	
				y -= dy;
				if(inRect(pt,x,y,dx,dy))
					return j + graph._keys2.length*i;
				}
			ikey++;
			}
		}	

	if((graph.option%3)==2)
		{
		// average graph
		var ymax = 0
		var nkey = 0
		var average = {};
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
			if(key1 in graph.omit) continue
			average[key1] = 0;
			nkey ++;
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(key in graph._count)
					average[key1] += graph._count[key];
				}
			average[key1] /= graph._nmod[key1];
			if(average[key1]>ymax)
				ymax = average[key1];
			}

		var color = getColor(graph.hue,1,1)
		var hilite = getColor(graph.hue,1,0.5)

		var ikey = 0
		var dx = graph.w/nkey
		for(var j=0;j<graph._keys1.length;j++)
			{
			var key1 = graph._keys1[j]
			if(key1 in graph.omit) continue

			var dy = average[key1]*hmax/ymax;

			var x = graph.x+ikey*graph.w/nkey;
			var y = graph.y+graph.h-20-dy;
	
			// TODO , treat as graph with one label
			return -1;
	
			ikey++
			}
		}
	}

return -1
}

//***************************************************************************

function inLineSlice(pt,graph)
{
var hmax = graph.h-graph.hbar
if(graph.ilabel1<0)
	{
	return -1
	}
if(graph.ilabel2<0)
	{
	// one dimension
	var nkey = 0
	var max = 0
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key = graph._keys1[i]
		if(key in graph.omit) continue
		if(graph._count[key]>max)
			max = graph._count[key]
		nkey ++
		}
	if(nkey<2) nkey = 2

	var bestdist = 15*15
	var bestindex = -1

	var dx = graph.w/(nkey-1)
	var x = graph.x 
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key = graph._keys1[i]
		if(key in graph.omit) continue

		var dy = graph._count[key]*hmax/max
		var y = graph.y+graph.h-dy
		var dist = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y)
		if(dist<bestdist)
			{
			bestdist = dist
			bestindex = i
			}
		x += dx
		}	
	return bestindex
	}
else
	{
	var bestdist = 15*15
	var bestindex1 = -1
	var bestindex2 = -1

	// two dimensions
	var nkey = 0
	for(var i=0;i<graph._keys1.length;i++)
		{	
		if(graph._keys1[i] in graph.omit) continue
		nkey ++
		}

	var max = 0
	for(var key in graph._count)
		if(graph._count[key]>max)
			max = graph._count[key]

	var dx = graph.w/(nkey-1)
	for(var j=0;j<graph._keys2.length;j++)
		{
		var key2 = graph._keys2[j]
		var ikey = 0
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i]
			if(key1 in graph.omit) continue

			var key = key1+"\t"+key2
			if(!(key in graph._count))
				var value = 0
			else
				var value  = graph._count[key]

			var dy = value*hmax/max
			var y = graph.y+graph.h-dy
			var x = graph.x+ikey*dx
		
			var dist = (x-pt.x)*(x-pt.x)+(y-pt.y)*(y-pt.y)
			if(dist<bestdist)
				{
				bestdist = dist
				bestindex1 = i
				bestindex2 = j
				}
			ikey++
			}
		}

	return bestindex2 + graph._keys2.length*bestindex1;
	}

}

//***************************************************************************

function inRadarSlice(pt,graph)
{
var r1 = graph.w/2
var r2 = (graph.h-graph.hbar)/2
var xc = graph.x+r1
var yc = graph.y+graph.hbar+r2
var r = (r1<r2) ? r1 : r2

var ptangle = Math.atan2(xc-pt.x,pt.y-yc)+Math.PI

var nkey = 0
for(var i=0;i<graph._keys1.length;i++)
	{
	var key = graph._keys1[i]
	if(key in graph.omit) continue
	nkey++
	}

var da = Math.PI/nkey
var angle = 0
for(var i=0;i<graph._keys1.length;i++)
	{
	var key = graph._keys1[i]
	if(key in graph.omit) continue
	if(Math.abs(angle-ptangle)<da) return i
	angle += 2*da
	}

return -1
}

//***************************************************************************

function inCumulSlice(pt,graph)
{

if(graph.ilabel2<0)
	{
	// one dimension
	var hmax = graph.h-graph.hbar
	var ymax = 0
	var dx = graph.w/graph._keys1.length
	var nkey = 0
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue
		ymax += graph._count[key]
		nkey++
		}
	if(ymax==0) ymax = 1
	var ikey = 0
	var cumul = 0
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue

		cumul += graph._count[key]
		var dy = cumul*hmax/ymax
		var x = graph.x+ikey*graph.w/nkey
		var y = graph.y+graph.h-dy
		if(inRect(pt,x,y,dx,dy))
			return j
		ikey++
		}
	}
else
	{
	// two dimensions
	var xcumul = {}
	var nkey = 0 
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i]
		if(key1 in graph.omit) continue
		xcumul[key1] = 0
		nkey++
		}

	for(var key in graph._count)
		{
		var i = key.indexOf("\t")		
		var key1 = key.substring(0,i)	
		xcumul[key1] += graph._count[key]
		}

	for(var i=1;i<graph._keys1.length;i++)		
		xcumul[graph._keys1[i]] += xcumul[graph._keys1[i-1]]

	var max = xcumul[graph._keys1[graph._keys1.length-1]]

	var x = graph.x
	var dx = graph.w/nkey
	var ycumul = {}
	for(var j=0;j<graph._keys2.length;j++)
		ycumul[graph._keys2[j]] = 0
	
	var scale = (graph.h-graph.hbar)/max
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i]
		if(key1 in graph.omit) continue
		
		var y = graph.y + graph.h
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j]
			var key = key1+"\t"+key2
			if(key in graph._count) 
				ycumul[key2] += graph._count[key]
			var dy = ycumul[key2]*scale
			y -= dy
			if(inRect(pt,x,y,dx,dy))
				return j + graph._keys2.length*i;
			}
		x += dx
		}	
	}

return -1
}

//***************************************************************************

function inBandSlice(pt,graph)
{

if(graph.ilabel2<0)
	{
	// one dimension
	var x = graph.x
	var dx = graph.w
	var y = graph.y+graph.hbar
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue
		var dy = graph._count[key]*(graph.h-graph.hbar)/graph.total
		if(inRect(pt,x,y,dx,dy))
			return j
		y += dy
		}
	}
else
	{
	// two dimensions
	var xsum = []
	var sum = 0
	for(var i=0;i<graph._keys1.length;i++)
		{		
		var key1 = graph._keys1[i]
		if(key1 in graph.omit) continue
			
		xsum[key1] = 0	
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j]
			var key = key1 + "\t"+ key2
			if(!(key in graph._count)) continue
			xsum[key1] += graph._count[key]
			}

		sum += xsum[key1]
		}

	var x = graph.x
	var y = graph.y + graph.hbar
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i]
		if(key1 in graph.omit) continue

		var y = graph.y + graph.h
		var dx = graph.w*xsum[key1]/sum
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j]
			var key = key1+"\t"+key2
			if(!(key in graph._count)) continue
	
			var dy = (graph.h-graph.hbar)*graph._count[key]/xsum[key1]
			y -= dy
			if(inRect(pt,x,y,dx,dy))
				return j + graph._keys2.length*i
			}
		x += dx
		}
	}

return -1
}

//***************************************************************************

function inDotSlice(pt,graph)
{

if(pt.x<graph.x) return -1
if(pt.x>graph.x+graph.w) return -1
if(pt.y<graph.y+graph.hbar) return -1
if(pt.y>graph.y+graph.h) return -1

if(graph.ilabel2<0)
	{
	// one dimension
	dx = graph.w/graph._keys1.length	
	var index = Math.floor((pt.x-graph.x)/dx)
	return index
	}
else
	{
	// two dimension
	var dx = graph.w/graph._keys1.length
	var dy = (graph.h-graph.hbar)/graph._keys2.length
	var index1 = Math.floor((pt.x-graph.x)/dx)
	var index2 = Math.floor((pt.y-graph.y-graph.hbar)/dy)
	var key = graph._keys1[index1]+"\t"+graph._keys2[index2]
	if(key in graph._count)
		return index2 + graph._keys2.length*index1;
	else
		return -1
	}

}

//***************************************************************************

function inTagSlice(pt,graph)
{
var ctx = canvas.getContext("2d")

var max = 0
var nkey = 0
for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue
	nkey ++
	if(graph._count[key]>max)
		max = graph._count[key]
	}
if(max==0) max = 1

var x = graph.x + 5
var y = graph.y + graph.hbar + 30 + 12 -13*graph.yshift

var tcard = ["8px","10px","12px","14px","16px"]

for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue
	var icard = Math.floor(graph._count[key]*5/max)
	if(icard>=tcard.length) icard = tcard.length-1		

	ctx.font = tcard[icard]+" helvetica"
	var ms = ctx.measureText(key)
	var width = ms.width
	if(x+width>graph.x+graph.w-20)
		{
		x = graph.x + 5
		y += 13
		}	
	if(inRect(pt,x,y-12,width,12))
		return j
	x += width + 5
	}

return -1
}

//***************************************************************************

function inThreeSlice(pt,graph)
{

if(pt.x<graph.x) return -1
if(pt.x>graph.x+graph.w) return -1
if(pt.y<graph.y+graph.hbar) return -1
if(pt.y>graph.y+graph.h) return -1

if((graph.ilabel1<0)||(graph.ilabel2<0)||(graph.ilabel3<0))
	return -1

var dx = graph.w/graph._keys1.length
var dy = (graph.h-graph.hbar)/graph._keys2.length
var dr = (dx<dy ? dx : dy)/2

var index1 = Math.floor((pt.x-graph.x)/dx)
var index2 = Math.floor((pt.y-graph.y-graph.hbar)/dy)

var key1 = graph._keys1[index1]
var key2 = graph._keys2[index2]

var xc = graph.x + dx/2 +index1*dx
var yc = graph.y+graph.hbar + dy/2 + index2*dy

// distance from center of cell
var d2 = (pt.x-xc)*(pt.x-xc) + (pt.y-yc)*(pt.y-yc)
if(d2>dr*dr) return -1

var angle = Math.atan2(xc-pt.x,pt.y-yc)+Math.PI

var  sum = 0

for(var k=0;k<graph._keys3.length;k++)
	{
	var key3 = graph._keys3[k]
	var key = key1+"\t"+key2+"\t"+key3
	if(!(key in graph._count)) continue
	sum += graph._count[key]
	}
			
if(sum==0) return -1

var angle1 = 0
var angle2 = 0

for(var k=0;k<graph._keys3.length;k++)
	{
	var key3 = graph._keys3[k]
	var key = key1+"\t"+key2+"\t"+key3
	if(!(key in graph._count)) continue

	angle2 = angle1 + Math.PI*2*graph._count[key]/sum
	if((angle>=angle1)&&(angle<angle2))
		return k+graph._keys3.length*(index2+graph._keys2.length*index1)

	angle1 = angle2
	}

return -1

}

//***************************************************************************

function inMultiSlice(pt,graph)
{
if(graph.ilabels.length==0) return -1

var indices = []


var x = graph.x
var w = graph.w - 110
var y = graph.y + graph.hbar
var h = graph.h - graph.hbar

if(!inRect(pt,x,y,w,h)) return -1

var oldkey = ""
var sep = ""

for(var k=0;k<graph.ilabels.length;k++)
	{
	for(var i=0;i<graph._keys[k].length;i++)
		{
		var newkey = oldkey + sep + graph._keys[k][i]
		if(!(newkey in graph._count)) continue
		if((k%2)==0)
			{
			// vertical partition
			ww = graph._count[newkey]*w/graph._count[oldkey]
			if(inRect(pt,x,y,ww,h))
				{
				indices.push(i)
				w = ww
				oldkey = newkey
				sep = "\t"
				break
				}
			else
				x += ww
			}
		else
			{
			// horizontal partition
			hh = graph._count[newkey]*h/graph._count[oldkey]
			if(inRect(pt,x,y,w,hh))
				{
				indices.push(i)
				h = hh		
				oldkey = newkey 
				sep = "\t"
				break
				}
			else
				y += hh
			}
		}

	sep = "\t"		
	}

return indices

}

//***************************************************************************

function inBoxSlice(pt,graph)
{
if(graph.ilabel1<0) return -1;
if(!inRect(pt,graph.x,graph.y+graph.hbar,graph.w,graph.h-graph.hbar)) return -1;

var dv = (graph.h-graph.hbar-20)/graph._z.keys.length;
var j = Math.floor((ptmove.y-graph.y-graph.hbar-20)/dv);
if(j>=graph._z.keys.length) j = graph._z.keys.length-1;

return j;

}

//***************************************************************************

function inArcSlice(pt,graph)
{
if(graph.ilabel1<0) return -1
if(graph.ilabel2<0) return -1

var nkey = graph._keys1.length - card(graph.omit)
if(nkey<2) return -1

var dx = graph.w/nkey

if((graph.option%2)==0)
	{
	if(pt.y<graph.y+graph.h-20) return -1
	return Math.floor((pt.x-graph.x)/dx)
	}
else
	{
	var dx = graph.w
	var dy = graph.h - graph.hbar
	var r = (dx<dy) ? dx/2 : dy/2
	r -= 10

	var xc = graph.x + dx/2
	var yc = graph.y + graph.h - dy/2

	var mindist = 15*15
	var minindex = -1
	var ikey = -1
	for(var i=0;i<graph._keys1.length;i++)
		{
		if(graph._keys1[i] in graph.omit) continue
		ikey += 1
		var a = Math.PI/2-2*Math.PI*ikey/nkey
		var x = xc + r *Math.cos(a)
		var y = yc - r *Math.sin(a)
		var dist = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y)
		if(dist<mindist)
			{
			mindist = dist
			minindex = i			
			}
		}
	return minindex
	}

}

//***************************************************************************

function inType1(pt)
{
var y = pt.y + barshift

var ni = Math.ceil(NBTYPE3/5)
if(pt.x<mywidth-100) return -1
if(y<labels.length*20+20) return -1
if(y>=labels.length*20+20+20*ni) return -1
var i = Math.floor((pt.x-mywidth+100)/20)
var j = Math.floor((y-labels.length*20-20)/20)
var k = i+5*j
return (k<NBTYPE1) ? k : -1
}

//***************************************************************************

function inType2(pt)
{
var y = pt.y + barshift

var ni = Math.ceil(NBTYPE3/5)
if(pt.x<mywidth-100) return -1
if(y<labels.length*20+20) return -1
if(y>=labels.length*20+20+ni*20) return -1
var i = Math.floor((pt.x-mywidth+100)/20)
var j = Math.floor((y-labels.length*20-20)/20)
var k = i+5*j
return (k>=NBTYPE1) ? k : -1
}

//***************************************************************************

function closeGraph(index)
{
var graph = graphs[index];
if(graph.timerid)
	clearTimeout(graph.timerid);

graphs.splice(index,1);
}

//***************************************************************************

function frac(x)
{
return x - Math.floor(x)
}

//***************************************************************************

function setAxis1(graph,keys)
{
graph.omit = {}
graph.use1 = {}
for(var i=0;i<keys.length;i++)
	graph.use1[keys[i]] = 1
}

function setAxis2(graph,keys)
{
graph.use2 = {}
for(var i=0;i<keys.length;i++)
	graph.use2[keys[i]] = 1
}

//***************************************************************************

function clearSpecific(graph)
{
try	{
	for(var x in graph._z)
		delete(graph._z.x)
	delete(graph._z)
	}
catch(e)
	{
	alert(e)
	}
graph._z = {}

if(graph.timerid)
	{
	clearTimeout(graph.timerid);
	graph.timerid = null;
	}
}

//***************************************************************************

function computeGraphData(graph)
{
clearSpecific(graph)
graph.ncontour = 0
graph.contour = null

if(graph.type<NBTYPE1)
	graph.ivalue1 = graph.ivalue2 = -1
else  if((graph.type<NBTYPE2)&&(graph.type!=TYPE_SCATTER)&&(graph.type!=TYPE_REPART)&&(graph.type!=TYPE_ACP)&&(graph.type!=TYPE_RADVIZ))
	graph.ilabel1 = graph.ilabel2 = -1

// pie chart has only one axis
if(((graph.type==TYPE_PIE)||(graph.type==TYPE_TAG))&&(graph.ilabel2>=0))	
	{
	graph.ilabel2 = -1
	graph._keys2 = []
	graph.use2 = null
	}

if((graph.type<NBTYPE1)&&(graph.ilabel2<0)&&(graph.ilabel3>=0))
	{
	graph.ilabel2 = graph.ilabel3
	graph._keys2 = graph._keys3
	graph.use2 = graph.use3
	graph.ilabel3 = -1
	graph._keys3 = []
	graph.use3 = null
	}

// if one axis only, must be axis1
if((graph.type<NBTYPE1)&&(graph.ilabel1<0)&&(graph.ilabel2>=0))
	{
	graph.ilabel1 = graph.ilabel2
	graph._keys1 = graph._keys2
	graph.use1 = graph.use2
	graph.ilabel2 = -1
	graph._keys2 = []
	graph.use2 = null
	}	

if((graph.type>=NBTYPE1)&&(graph.ivalue1<0)&&(graph.ivalue2>=0))
	{
	graph.ivalue1 = graph.ivalue2
	graph.ivalue2 = -1
	}

graph.xshift = 0
graph.yshift = 0

if(graph.type==TYPE_MULTI)	
	computeMultiData(graph)
else if(graph.type>=NBTYPE1)
	computePlotData(graph)
else if(graph.ilabel2<0)
	computeGraphData1(graph)
else if(graph.ilabel3<0)
	computeGraphData2(graph)
else
	computeGraphData3(graph)
}

//***************************************************************************

function recordMatch(irec,graph)
{
for(var i=0;i<graph.selection.length;i+=2)
	{
	var j = graph.selection[i]
	if(j>=1000)
		{
		if(sets[j][irec]==0) return false
		}
	else
		{
		if(lrecords[irec][j]!=graph.selection[i+1]) return false		
		}
	}

return true
}

//***************************************************************************

function computePlotData(graph)
{
graph._z = {}

graph._z.cursor = 0

graph._z.xmin = Number.MAX_VALUE;
graph._z.xmax = Number.MIN_VALUE;
graph._z.ymin = Number.MAX_VALUE;
graph._z.ymax = Number.MIN_VALUE;
graph._z.count = 0

var i1 = graph.ivalue1
var i2 = graph.ivalue2

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue

	graph._z.count += 1

	var x = vrecords[i][i1]
	if(x<graph._z.xmin) graph._z.xmin = x
	if(x>graph._z.xmax) graph._z.xmax = x
	
	if(i2>=0)
		{
		var y = vrecords[i][i2]
		if(y<graph._z.ymin) graph._z.ymin = y
		if(y>graph._z.ymax) graph._z.ymax = y
		}
	}

try	{
switch(graph.type)
	{
	case TYPE_DISTRIB: computeDistribData(graph); break;
	case TYPE_SCATTER: computeScatterData(graph); break;
	case TYPE_MOMENTS: computeMomentData(graph); break;
	case TYPE_REPART: computeRepartData(graph); break;
	case TYPE_DISCRI: computeDiscriData(graph); break;	
	case TYPE_PARA: computeParaData(graph); break;
	case TYPE_BOX: computeBoxData(graph); break;
	case TYPE_ANOVA: computeAnovaData(graph); break;
	case TYPE_ACP: computeAcpData(graph); break;
	case TYPE_CORR: computeCorrData(graph); break;
	case TYPE_KMEANS: computeKmeansData(graph); break;
	case TYPE_HUEN: computeHuenData(graph); break;
	case TYPE_DENDRO: computeDendroData(graph); break;
	case TYPE_REGRES: computeRegresData(graph); break;	
	case TYPE_RADVIZ: computeRadvizData(graph); break;
	}
} catch(err) { console.log(err) }

}

//***************************************************************************

function computeParaData(graph)
{
if(typeof(graph.ivalues)=="undefined")
	graph.ivalues = []

if(graph.ivalues.length<2) return;

var min = [];
var max = [];
for(var j=0;j<graph.ivalues.length;j++)
	{
	min.push(Number.MAX_VALUE);
	max.push(Number.MIN_VALUE);
	}

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	for(var j=0;j<graph.ivalues.length;j++)
		{
		var x = vrecords[i][graph.ivalues[j]];
		if(x<min[j]) min[j] = x;
		if(x>max[j]) max[j] = x;
		}
	}

graph._z.min = min;
graph._z.max = max;

if(graph.ilabel1>=0)
	computeGraphData1(graph);
}

//***************************************************************************

function computeDiscriData(graph)
{

if(typeof(graph.ivalues)=="undefined")
	graph.ivalues = []

if(graph.ilabel1<0) return;


if(graph.ivalues.length<2) return

computeGraphData1(graph)

var n = graph.ivalues.length;

// global stats

var count = 0;
var sum = vector(n);

// group stats
var gcount = {}
var gsum = {}

// global variance matrix

var V = matrix(n,n)

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	count += 1;

	var key = lrecords[i][graph.ilabel1]

	if(!(key in gsum))
		{
		gcount[key] = 0
		gsum[key] = vector(n);
		}
	gcount[key] += 1

	for(var j=0;j<n;j++)
		{
		var xj = vrecords[i][graph.ivalues[j]] 

		sum[j] += xj

		gsum[key][j] += xj

		for(var k=0;k<n;k++)
			{
			var xk = vrecords[i][graph.ivalues[k]]
			V[j][k] += xj*xk;
			}
		}	
	}


if(count==0) count = 1;

for(var j=0;j<n;j++)
	sum[j] = sum[j]/count;


for(var j=0;j<n;j++)
	for(var k=0;k<n;k++)
		V[j][k] = (V[j][k]-count*sum[j]*sum[k])/count

//console.log("V")
//dumpM(V)

// compute inverse of variance
var v1 = matrix(n,n)
for(var j=0;j<n;j++)
	for(var k=0;k<n;k++)
		v1[j][k] = V[j][k]

console.log("V");
dumpM(v1);

var d = new Array(n)
var e = new Array(n)
tred(v1,d,e,n)
tql2(v1,d,e,n)

var v2 = matrix(n,n)
for(var i=0;i<n;i++)
	for(var j=0;j<n;j++)
		v2[i][j] += v1[i][j]*1./d[j]

var INV = matrix(n,n)
for(var i=0;i<n;i++)
	for(var j=0;j<n;j++)
		for(var k=0;k<n;k++)
			INV[i][j] += v2[i][k]*v1[j][k]	

console.log("INV");
dumpM(INV);

var verif = mult(v1,INV);
console.log("VERIF");
dumpM(verif);

delete(v1)
delete(v2)


// center of gravity of each group
for(var x in gcount)
	for(var j=0;j<n;j++)
		gsum[x][j] = gsum[x][j]/gcount[x]


// intergroup variance
var B = matrix(n,n)

for(var x in gcount)
	{
	for(var j=0;j<n;j++)
		for(var k=0;k<n;k++)
			B[j][k] += gsum[x][j]*gsum[x][k]*gcount[x]
	}

for(var j=0;j<n;j++)
	for(var k=0;k<n;k++)
		B[j][k] = (B[j][k]-count*sum[j]*sum[k])/count	

//console.log("indices")
//console.log(graph.ivalues)

//console.log("B")
//dumpM(B)

// working matrix
var W = mult(INV,B)
//console.log("working matrix")
//dumpM(W)

// compute eigen values

var E = matrix(n,n)
var wr = vector(n)
var wi = vector(n)
var o = {}
	o.outmsgstr = ""

calcEigSysReal(n,W,E,wr,wi,o)
console.log("error="+o.outEr)

var temp;

/*
console.log("wr/wi avant tri")
dumpV(wr)
console.log("E avant tri")
dumpM(E)
*/

// sort eigenvalues
for(var j=0;j<n-1;j++)
	for(var k=j+1;k<n;k++)
		{
		if(wr[k]>wr[j])
			{
			temp = wr[k]
			wr[k] = wr[j]
			wr[j] = temp
			for(var l=0;l<n;l++)
				{
				temp = E[l][j]
				E[l][j] = E[l][k]
				E[l][k] = temp
				}
			}
		}

/*
console.log("wr/wi apres tri")
dumpV(wr)
console.log("E apres tri")
dumpM(E)
*/

// coefficients of projections
var xcoef = []
var ycoef = []
for(var j=0;j<n;j++)
	{
	xcoef[j] = E[j][0]
	ycoef[j] = E[j][1]
	}

graph._z.xcoef = xcoef
graph._z.ycoef = ycoef
graph._z.avg = sum

//  projections  on the first two factors

var xrow = []
var yrow = []

for(var i=0;i<lrecords.length;i++)
	{
	if(recordMatch(i,graph))
		{
		xrow[i] = yrow[i] = 0
		for(var j=0;j<n;j++)
			{
			var y = vrecords[i][graph.ivalues[j]]-sum[j]
			xrow[i] += y*E[j][0]
			yrow[i] += y*E[j][1]
			}
		}
	else
		{
		xrow[i] = 0
		yrow[i] = 0
		}
	}

graph._z.xrow = xrow
graph._z.yrow = yrow
}

//***************************************************************************

function computeBoxData(graph)
{
if(graph.ilabel1<0) return;
if(graph.ivalue1<0) return;

var pops = {};
var keys = [];
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue

	var key1 = lrecords[i][graph.ilabel1]	
	if(!(key1 in pops))
		{
		keys.push(key1);
		pops[key1] = [];	
		}

	pops[key1].push(vrecords[i][graph.ivalue1]);
	}

keys.sort();
boxes = {};

var min = Number.MAX_VALUE;
var max = Number.MIN_VALUE;

for(var i=0;i<keys.length;i++)
	{
	var pop = pops[keys[i]];
	pop.sort(function(a,b) { return a-b });
	var n = pop.length;
	var i0 = Math.floor((n-1)/10);
	var i1 = Math.floor((n-1)/4);
	var i2 = Math.floor((n-1)/2);
	var i3 = Math.floor((n-1)*3/4);
	var i4 = Math.floor((n-1)*9/10);
	boxes[keys[i]] = [pop[i0],pop[i1],pop[i2],pop[i3],pop[i4]];
	if(pop[i0]<min) min = pop[i0];
	if(pop[i4]>max) max = pop[i4];
	}

graph._z.keys = keys;
graph._z.boxes = boxes;
graph._z.min = min;
graph._z.max = max;

computeGraphData1(graph);

}

//***************************************************************************

function computeAnovaData(graph)
{
if(graph.ilabel1<0) return;
if(graph.ivalue1<0) return;

var sums = {}
var counts = {}
var sums2 = {}
var gcount = 0
var gsum = 0
var gsum2 = 0

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue

	var key1 = lrecords[i][graph.ilabel1]	
	if(!(key1 in sums))
		{
		counts[key1] = sums[key1] = sums2[key1] = 0
		}
	
	var x = vrecords[i][graph.ivalue1]

	counts[key1] += 1;
	sums[key1] += x;
	sums2[key1] += x*x;
	gcount += 1
	gsum += x;
	gsum2 += x*x;
	}

// inter-class and intra-class variance
var vinter = 0
var vintra = 0
for(var x in sums)
	{
	var dif = sums[x]/counts[x] - gsum/gcount
	vinter += counts[x]*dif*dif
	vintra += sums2[x] - sums[x]*sums[x]/counts[x]
	}

// degrees of freedom
var ninter = -1
var nintra = 0
for(var x in sums)
	{
	ninter += 1
	nintra += counts[x]-1
	}

graph._z.gcount = gcount
graph._z.gsum = gsum
graph._z.gsum2 = gsum2
graph._z.counts = counts
graph._z.sums = sums
graph._z.sums2 = sums2
graph._z.vinter = vinter
graph._z.vintra = vintra
graph._z.ninter = ninter
graph._z.nintra = nintra

}

//***************************************************************************

function computeCorrData(graph)
{
if(typeof(graph.ivalues)=="undefined")
	graph.ivalues = []

if(graph.ivalues.length<2) return;

computeCorrelationMatrix(graph)
}

//***************************************************************************

function computeAcpData(graph)
{
if(typeof(graph.ivalues)=="undefined")
	graph.ivalues = []

if(graph.ivalues.length<2) return;

computeCorrelationMatrix(graph)

var n = graph.ivalues.length

var I = matrix(n,n)
for(var j=0;j<n;j++)
	for(var k=0;k<n;k++)
		I[j][k] = graph._z.corr[j][k]


// compute eigenvectors and eigenvalues
var d = new Array(n)
var e = new Array(n)
tred(I,d,e,n)
tql2(I,d,e,n)

/*
console.log(d)
console.log("Corr")
dumpM(graph._z.corr)
console.log("I")
dumpM(I)
*/

var verif = matrix(n,n)
for(var i=0;i<n;i++)
	{
	for(var j=0;j<n;j++)
		{
		verif[i][j] = 0
		for(var k=0;k<n;k++)
			if(j==k)
				verif[i][j] += I[i][k]*1./d[k]
		}
	}

var v2 = matrix(n,n)
for(var i=0;i<n;i++)
	{
	for(var j=0;j<n;j++)
		{
		v2[i][j] = 0
		for(var k=0;k<n;k++)
			v2[i][j] += verif[i][k]*I[j][k]	
		}
	}

var v3 = matrix(n,n)
for(var i=0;i<n;i++)
	{
	for(var j=0;j<n;j++)
		{
		v3[i][j] = 0
		for(var k=0;k<n;k++)
			v3[i][j] += v2[i][k]*graph._z.corr[k][j]
		}
	}

console.log("verif")
dumpM(verif)

console.log("v2")
dumpM(v2)

console.log("v3")
dumpM(v3)

graph._z.lambda = d;

/*
dumpM(graph._z.corr)
dumpM(I)
*/

// coefficients of principal components
var xcoef = []
var ycoef = []
for(var j=0;j<n;j++)
	{
	xcoef[j] = I[j][0]
	ycoef[j] = I[j][1]
	}

graph._z.xcoef = xcoef
graph._z.ycoef = ycoef

//  projections  on the first two factors

var xrow = []
var yrow = []

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	xrow[i] = yrow[i] = 0
	for(var j=0;j<n;j++)
		{
		var y = (vrecords[i][graph.ivalues[j]]-graph._z.avg[j])/graph._z.std[j]
		xrow[i] += y*I[j][0]
		yrow[i] += y*I[j][1]
		}
	}


// projection of variables
var xsumxy = []
var xsumxx = []
var xsumyy = []
var ysumxy = []
var ysumxx = []
var ysumyy = []
for(var j=0;j<n;j++)
	{
	xsumxy.push(0)
	xsumxx.push(0)
	xsumyy.push(0)
	ysumxy.push(0)
	ysumxx.push(0)
	ysumyy.push(0)
	}

for(var i=0;i<lrecords.length;i++)
	{
	if(typeof(xrow[i])=="undefined") continue;
	for(var j=0;j<n;j++)
		{
		var y = (vrecords[i][graph.ivalues[j]]-graph._z.avg[j])/graph._z.std[j]
		xsumxy[j] += y*xrow[i]
		xsumxx[j] += y*y
		xsumyy[j] += xrow[i]*xrow[i]
		ysumxy[j] += y*yrow[i]
		ysumxx[j] += y*y
		ysumyy[j] += yrow[i]*yrow[i]
		}
	}

for(var j=0;j<n;j++)
	{
	xsumxy[j] = xsumxy[j]/Math.sqrt(xsumxx[j]*xsumyy[j])
	ysumxy[j] = ysumxy[j]/Math.sqrt(ysumxx[j]*ysumyy[j])
	}

graph._z.xrow = xrow
graph._z.yrow = yrow

graph._z.xproj = xsumxy
graph._z.yproj = ysumxy

xsumxx = xsumyy = ysumxx = ysumyy = null

computeGraphData1(graph);
}

//***************************************************************************

function computeCorrelationMatrix(graph)
{
var n = graph.ivalues.length;

var sums = []
var sums2 = []
var count = 0
for(var j=0;j<n;j++)
	sums[j] = sums2[j] = 0

var M = matrix(n,n)

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	count += 1;
	for(var j=0;j<n;j++)
		{
		var xj = vrecords[i][graph.ivalues[j]]
		sums[j] += xj
		sums2[j] += xj*xj
		for(var k=0;k<n;k++)
			{
			var xk = vrecords[i][graph.ivalues[k]]
			M[j][k] += xj*xk
			}
		}
	}

if(count==0) count = 1;

// means and standard deviations
for(var j=0;j<n;j++)
	{
	sums[j] = sums[j]/count
	sums2[j] = Math.sqrt( (sums2[j]-sums[j]*sums[j]*count)/count)
	}


// correlation matrix

for(var j=0;j<n;j++)
	for(var k=0;k<n;k++)
		M[j][k] = (M[j][k]-count*sums[j]*sums[k])/(sums2[j]*sums2[k]*count)


/*
console.log("corr")
dumpM(M)
*/

graph._z.avg = sums
graph._z.std = sums2
graph._z.corr = M
}

//***************************************************************************

function computeKmeansData(graph)
{
if(typeof(graph.ivalues)=="undefined")
	graph.ivalues = []

if(graph.ivalues.length<1) return

if(typeof(graph.nslot)=="undefined")
	graph.nslot = 3

// list of valid record numbers
var rindices = []
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	rindices.push(i)
	}

// if not enough data
if(rindices.length<=graph.nslot) return
	
// random center of groups
var centers = new Array(graph.nslot)
var counts = new Array(graph.nslot)

for(var i=0;i<graph.nslot;i++)
	{
	// make sure we do not choose the same center twice
	var j;
	while(1)
		{
		j = Math.floor(Math.random()*rindices.length)
		if(rindices[j]>=0) break;
		}
	k = rindices[j]
	rindices[j] = -1		
	
	//console.log("center of group "+i+" is record "+k)	

	counts[i] = 0
	centers[i] = []
	for(var j=0;j<graph.ivalues.length;j++)
		centers[i].push(vrecords[k][graph.ivalues[j]])

	}

for(var iter=0;iter<50;iter++)
	{
	var sumdist = 0
	var nchange = 0
	for(var k=0;k<counts.length;k++)
		counts[k] = 0

	// assign each record to the nearest center
	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue
		var dist = Number.MAX_VALUE;
		var idist = -1
		var d = 0
		for(var k=0;k<centers.length;k++)
			{
			d = 0
			for(var j=0;j<graph.ivalues.length;j++)
				{
				var x = vrecords[i][graph.ivalues[j]]-centers[k][j]
				d += x*x
				}
			if(d<dist)
				{
				dist = d
				idist = k
				}
			}
		if(rindices[i]!=idist)
			nchange += 1
		rindices[i] = idist
		counts[idist] += 1
		sumdist += dist
		}	
	//console.log("iter="+iter+" sumdist="+sumdist+" changes="+nchange)
	
	// compute new centers
	for(var k=0;k<centers.length;k++)
		for(var j=0;j<graph.ivalues.length;j++)
			centers[k][j] = 0

	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue
		var k = rindices[i]
		for(var j=0;j<graph.ivalues.length;j++)
			centers[k][j] += vrecords[i][graph.ivalues[j]]
		}

	for(var k=0;k<centers.length;k++)
		for(var j=0;j<graph.ivalues.length;j++)
			centers[k][j] = centers[k][j]/counts[k]


	/*	
	for(var k=0;k<centers.length;k++)
		{
		var s = "center["+k+"] = ";
		for(var j=0;j<graph.ivalues.length;j++)
			s += " "+centers[k][j]
		s += "     "+count[k]+" records"
		console.log(s)
		}
	*/
	if(nchange==0) break;
	}

graph._z.counts = counts
graph._z.centers = centers
graph._z.rindices = rindices
}

//***************************************************************************

function computeHuenData(graph)
{
// compute means and standard deviation of each variable

if(typeof(graph.ivalues)=="undefined")
	graph.ivalues = []

if(graph.ivalues.length<1) return

computeMeans(graph);

}

//***************************************************************************

function computeMeans(graph)
{

var n = graph.ivalues.length

var count = 0
var sum = vector(n)
var sum2 = vector(n)


for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	count += 1;
	for(var j=0;j<n;j++)
		{
		var x = vrecords[i][graph.ivalues[j]]
		sum[j] += x;
		sum2[j] += x*x;
		}	
	}

if(count==0) count = 1;

// means and standard deviations
for(var j=0;j<n;j++)
	{
	sum[j] = sum[j]/count;
	sum2[j] = Math.sqrt((sum2[j]-count*sum[j]*sum[j])/count);
	}

graph._z.avg = sum
graph._z.std = sum2
}

//***************************************************************************

function computeRegresData(graph)
{
if(typeof(graph.ivalues)=="undefined")
	graph.ivalues = []

if(graph.ivalues.length<1) return;
if(graph.ivalue1<0) return;

var n = graph.ivalues.length;
var M = matrix(n+1,n+1);

var nr = 0;
var ybar  = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	nr += 1;	
	ybar += vrecords[i][graph.ivalue1];

	M[0][0] += 1;
	for(var j=0;j<n;j++)
		{
		M[0][j+1] += vrecords[i][graph.ivalues[j]];
		M[j+1][0] += vrecords[i][graph.ivalues[j]]
		for(var k=0;k<n;k++)
			M[k+1][j+1] += vrecords[i][graph.ivalues[j]]*vrecords[i][graph.ivalues[k]]
		}
	}

if(nr==0) nr = 1;
ybar = ybar/nr;

// compute inverse of M

var d = new Array(n+1)
var e = new Array(n+1)
tred(M,d,e,n+1)
tql2(M,d,e,n+1)

var v2 = matrix(n+1,n+1)
for(var i=0;i<=n;i++)
	for(var j=0;j<=n;j++)
		v2[i][j] += M[i][j]*1./d[j]

var INV = matrix(n+1,n+1)
for(var i=0;i<=n;i++)
	for(var j=0;j<=n;j++)
		for(var k=0;k<=n;k++)
			INV[i][j] += v2[i][k]*M[j][k]	


// diagonal elements are variances of coefficients
var D = new Array(n+1);
for(var i=0;i<=n;i++)
	D[i] = INV[i][i];

var B = new Array(n+1);
for(var i=0;i<=n;i++)
	B[i] = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	B[0] += vrecords[i][graph.ivalue1];
	for(var j=0;j<n;j++)
		B[j+1] += vrecords[i][graph.ivalue1]*vrecords[i][graph.ivalues[j]];
	}

var A = new Array(n+1);
for(var i=0;i<=n;i++)
	A[i] = 0;

for(var i=0;i<=n;i++)
	for(var j=0;j<=n;j++)
		A[i] += INV[i][j]*B[j];


// explained and total variance
var sce = 0;
var sct = 0;
var scr = 0;
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	var y = vrecords[i][graph.ivalue1];
	sct += (y-ybar)*(y-ybar);
	
	var yc = A[0];
	for(var j=0;j<n;j++)
		yc += A[j+1]*vrecords[i][graph.ivalues[j]];

	sce += (yc-ybar)*(yc-ybar);
	scr += (yc-y)*(yc-y);
	}

var r2 = sce/sct;

graph._z.sce = sce;
graph._z.sct = sct;
graph._z.scr = scr;
graph._z.nr = nr;
graph._z.a = A;
graph._z.d = D;
}

//***************************************************************************

function computeDendroData(graph)
{

if(typeof(graph.ivalues)=="undefined")
	graph.ivalues = []

if(graph.ivalues.length<1) return;

if(typeof(graph.timerid))
	{
	clearTimeout(graph.timerid)
	graph.timerid = null;
	}

computeMeans(graph)

// start with one element per group
var groups = []
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	groups.push([i])
	}

// number of classes
if(typeof(graph._z.nc)=="undefined")
	graph._z.nc = 10;

var grouping = []
graph._z.grouping = grouping
graph._z.percent  = 0;

var ng = groups.length;

var groupDistance = ((graph.option%2)==0) ? maxDistance : minDistance;

mergeGroups()

function mergeGroups()
	{
	var kmin = -1
	var lmin = -1
	var dmin = Number.MAX_VALUE;	
	dbg = (groups.length%50)==0;

	for(var k=0;k<groups.length-1;k++)
		{
		for(var l=k+1;l<groups.length;l++)
			{
			var d = groupDistance(groups[k],groups[l])
			if(d<dmin)
				{
				kmin = k;
				lmin = l;
				dmin = d;
				klen = groups[k].length;	
				llen = groups[l].length;	
				}
			}
		}

	grouping.push([kmin,lmin,dmin,klen,llen])

	// merge kmin and lmin
	for(var j=0;j<groups[lmin].length;j++)
			groups[kmin].push(groups[lmin][j])
	groups.splice(lmin,1)

	if(groups.length>1)
		{
		graph._z.percent = (ng-groups.length)/ng;
		draw();
		graph.timerid = setTimeout(mergeGroups,1)
		}
	else
		{
		graph._z.percent = 1;
		draw();
		graph.timerid = null;
		}
	}


function minDistance(g1,g2)
	{
	var dmin = Number.MAX_VALUE;
	for(var i1=0;i1<g1.length;i1++)
		for(var i2=0;i2<g2.length;i2++)
			{
			var d = computeDistance(g1[i1],g2[i2])
			if(d<dmin)
				dmin = d;
			}
	return dmin;	
	}

function maxDistance(g1,g2)
	{
	var dmax = Number.MIN_VALUE;
	for(var i1=0;i1<g1.length;i1++)
		for(var i2=0;i2<g2.length;i2++)
			{
			var d = computeDistance(g1[i1],g2[i2]);
			if(d>dmax)
				dmax = d;
			}	
	return dmax;
	}

function computeDistance(i1,i2)
	{
	var d = 0
	for(var j=0;j<graph.ivalues.length;j++)
		{
		var x1=(vrecords[i1][graph.ivalues[j]] -graph._z.avg[j])/graph._z.std[j]
		var x2=(vrecords[i2][graph.ivalues[j]] -graph._z.avg[j])/graph._z.std[j]
		d += (x1-x2)*(x1-x2)
		}
	return d;
	}

function dumpGroups()
	{
	var s = "";
	for(var k=0;k<groups.length;k++)
		{
		s += "["
		sep = ""
		for(var l=0;l<groups[k].length;l++)
			{
			s += sep+groups[k][l]
			sep = ","
			}
		s += "] "
		}
	console.log(s)
	}

}

//***************************************************************************

function computeRadvizData(graph)
{

if(typeof(graph.ivalues)=="undefined")
	graph.ivalues = [];

if(graph.ivalues.length<2) return;

var min = [];
var max = [];
for(var j=0;j<graph.ivalues.length;j++)
	{
	min.push(Number.MAX_VALUE);
	max.push(Number.MIN_VALUE);
	}

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	var record = vrecords[i];
	for(var j=0;j<graph.ivalues.length;j++)
		{		
		var x = record[graph.ivalues[j]];
		if(x<min[j]) min[j] = x;
		if(x>max[j]) max[j] = x;
		}
	}

graph._z.min = min;
graph._z.max = max;

console.log("radviz ilabel1 = "+graph.ilabel1);
if(graph.ilabel1>=0)
	computeGraphData1(graph);
}

//***************************************************************************

function computeDistribData(graph)
{
if(graph.ivalue1<0) return

var i1 = graph.ivalue1

graph._z.xx = []
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	graph._z.xx.push(vrecords[i][i1])
	}

// numerical sort
graph._z.xx.sort(function(a,b) { return a-b })
}

//***************************************************************************

function computeScatterData(graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalue2<0) return;

var sum1 = 0
var sum2 = 0
var sum11 = 0
var sum12 = 0
var count = 0
var min1 = Number.MAX_VALUE;
var max1 = Number.MIN_VALUE;

// if ivalue1=0 or ivalue2=0, use index instead
var ind = 0;
var b = (graph.ivalue1==0)||(graph.ivalue2==0);

var x1,x2;

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	x1 = graph.ivalue1==0 ? ind : vrecords[i][graph.ivalue1];
	x2 = graph.ivalue2==0 ? ind : vrecords[i][graph.ivalue2];
	if(b) ind++;

	count += 1;
	sum1 += x1;
	sum2 += x2;
	sum11 += x1*x1;
	sum12 += x1*x2;
	if(x1<min1) min1 = x1;
	if(x1>max1) max1 = x1;
	}

sum1 = sum1/count;
sum2 = sum2/count;

var v12 = sum12/count-sum1*sum2;
var v11 = sum11/count-sum1*sum1;

graph._z.a = v12/v11
graph._z.b = sum2 - sum1*v12/v11;
graph._z.min = min1;
graph._z.max = max1;

if(graph.ilabel1>=0)
	computeGraphData1(graph)
}

//***************************************************************************

function computeRepartData(graph)
{
if(graph.ivalue1<0) return;

computeMomentData(graph)

if(graph.ilabel1>=0)
	computeGraphData1(graph)
}

//***************************************************************************

function computeMomentData(graph)
{
var i1 = graph.ivalue1
var i2 = graph.ivalue2

graph._z.stats = {}

// mean
var m1 = 0;
var m2 = 0;
var m3 = 0;
var m4 = 0;
var n = 0;
var x = 0;
var min = null;
var max = null;
var xx = [];
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	x = vrecords[i][i1];
	xx.push(x);
	min = (min==null) ? x : x < min ? x : min;
	max = (max==null) ? x : x > max ? x : max;
	m1 += x;
	m2 += x*x;
	m3 += x*x*x;
	m4 += x*x*x*x;
	n += 1;
	}	

graph._z.stats.min = min;
graph._z.stats.max = max;
graph._z.stats.mean1 = m1/n;
graph._z.stats.mean2 = Math.pow(m2/n,1./2.)
graph._z.stats.mean3 = Math.pow(m3/n,1./3.)
graph._z.stats.mean4 = Math.pow(m4/n,1./4.)

m1 = m1/n;
m2 = 0;
m3 = 0;
m4 = 0;
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;	
	x = vrecords[i][i1] - m1;
	m2 += x*x;
	m3 += x*x*x;
	m4 += x*x*x*x;	
	}

graph._z.stats.momentc2 = m2/n;
graph._z.stats.momentc3 = m3/n;
graph._z.stats.momentc4 = m4/n;

xx.sort(function(a,b) { return a-b });
graph._z.d1 = xx[Math.floor((n-1)/10)];
graph._z.q1 = xx[Math.floor((n-1)/4)];
graph._z.q2 = xx[Math.floor((n-1)/2)];
graph._z.q3 = xx[Math.floor((n-1)*3/4)];
graph._z.d9 = xx[Math.floor((n-1)*9/10)];
}

//***************************************************************************

function computeMultiData(graph)
{

if(typeof(graph.ilabels)=="undefined")
	graph.ilabels = []

graph._keys= []

graph._count = {}
graph.total = 0

var seens = []

for(var k=0;k<graph.ilabels.length;k++)
	{
	graph._keys.push([])
	seens.push({})
	}	

// keys of last axis
var lastkeys = []
	
for(var i=0;i<lrecords.length;i++)
	{
	// check if data match graph selection
	if(!recordMatch(i,graph)) continue

	graph.total += 1

	var key = ""
	var sep = ""
	for(var k=0;k<graph.ilabels.length;k++)
		{
		ilabel = graph.ilabels[k]
		keyk = lrecords[i][ilabel]	
		if(keyk=="") keyk = NIL

		if(k==graph.ilabels.length-1)
			if(lastkeys.indexOf(keyk)<0)
				lastkeys.push(keyk)

		if(!(keyk in seens[k]))
			{
			graph._keys[k].push(keyk)
			seens[k][keyk] = 1
			}

		key = key + sep + keyk
		sep = "\t"

		if(key in graph._count)
			graph._count[key] += 1
		else
			graph._count[key] = 1

		}

	}


delete(seens)

for(var k=0;k<graph.ilabels.length;k++)
	graph._keys[k].sort(function(a,b){ return a.localeCompare(b) })

if(graph.total==0)
	graph.total = 1

graph._count[""] = graph.total

// build color table
lastkeys.sort(function(a,b){return a.localeCompare(b)})

graph._colors1 = {}
graph._hilites1 = {}
graph._pales1 = {}
for(var i=0;i<lastkeys.length;i++)
	{
	var key = lastkeys[i]
	var hue = alternateIndex(i,lastkeys.length)*5.0/(6*lastkeys.length)
	graph._colors1[key] = getColor(frac(hue+graph.hue),1,1)
	graph._hilites1[key] = getColor(frac(hue+graph.hue),1,0.5)
	graph._pales1[key] = getColor(frac(hue+graph.hue),0.4,1)
	}
}

//***************************************************************************

function computeGraphData1(graph)
{

graph._count = {}
graph._keys1 = []

if(graph.use1!=null)
	{
	for(var key in graph.use1)
		{
		graph._count[key] = 0
		graph._keys1.push(key)
		}
	}

for(var i=0;i<lrecords.length;i++)
	{
	// check if data match graph selection
	if(!recordMatch(i,graph)) continue

	// key
	key = (graph.ilabel1<0) ? NIL : lrecords[i][graph.ilabel1]			

	if(graph.use1!=null)
		if(!(key in graph.use1))
			continue

	if(!(key in graph._count))
		{
		graph._count[key] = 0
		graph._keys1.push(key)
		}

	if(graph.iunit==0)
		graph._count[key]++
	else
		graph._count[key] += vrecords[i][graph.iunit]
	}

// sort by decreasing values
if((graph.type!=TYPE_PIE)&&(graph.type!=TYPE_ACP)&&(graph.type!=TYPE_SCATTER))
	{	
	// alphabetical sort
	graph._keys1.sort(function(a,b){ return a.localeCompare(b) })
	}
else
	{
	// numerical sort
	graph._keys1.sort(function(a,b){ return graph._count[b]-graph._count[a] })
	}

// build color table
graph._colors1 = {}
graph._hilites1 = {}
graph._pales1 = {}
for(var i=0;i<graph._keys1.length;i++)
	{
	var key = graph._keys1[i]
	var hue = alternateIndex(i,graph._keys1.length)*5.0/(6*graph._keys1.length)
	graph._colors1[key] = getColor(frac(hue+graph.hue),1,1)
	graph._hilites1[key] = getColor(frac(hue+graph.hue),1,0.5)
	graph._pales1[key] = getColor(frac(hue+graph.hue),0.4,1)
	}

graph._colors2 = {}
graph._hilites2 = {}
graph._pales2 = {}
if(graph.type!=TYPE_PIE)
	{	
	// alphabetical sort
	graph._keys1.sort(function(a,b){ return a.localeCompare(b) })
	}

graph.total = 0
for(var key in graph._count)
	if(!(key in graph.omit))
		graph.total += graph._count[key]
if(graph.total==0)
	graph.total = 1

}

//***************************************************************************

function computeGraphData2(graph)
{
graph._count = {}
graph._nmod = {}		// number of modalities for key1

graph._keys1 = [];
graph._keys2 = [];
graph._keys3 = [];

var seen = {};
var seen1 = {};
var seen2 = {};

if(graph.use1!=null)
	{
	for(var key in graph.use1)
		{
		graph._keys1.push(key)
		seen1[key] = 1
		}
	}

if(graph.use2!=null)
	{
	for(var key in graph.use2)
		{
		graph._keys2.push(key)
		seen2[key] = 1
		}
	}

for(var i=0;i<lrecords.length;i++)
	{
	// check if data match graph selection
	if(!recordMatch(i,graph)) continue

	// keys
	key1 = (graph.ilabel1<0) ? NIL : lrecords[i][graph.ilabel1]			
	// if(key1 in graph.omit) continue
	if((graph.use1!=null)&&(!(key1 in seen1))) continue

	key2 = (graph.ilabel2<0) ? NIL : lrecords[i][graph.ilabel2]
	if((graph.use2!=null)&&(!(key2 in seen2))) continue
	
	key = key1+"\t"+key2

	if(!(key in seen))
		{
		seen[key] = 1;
		if(key1 in graph._nmod)
			graph._nmod[key1]++;
		else
			graph._nmod[key1] = 1;
		}

	if(!(key in graph._count))
		graph._count[key] = 0

	if(graph.iunit==0)
		graph._count[key]++
	else
		graph._count[key] += vrecords[i][graph.iunit]

	if(!(key1 in seen1)) { seen1[key1] = 1 ; graph._keys1.push(key1) }
	if(!(key2 in seen2)) { seen2[key2] = 1 ; graph._keys2.push(key2) } 
	}


graph._keys1.sort(function(a,b){ return a.localeCompare(b) })
graph._keys2.sort(function(a,b){ return a.localeCompare(b) })

// build color table
graph._colors1 = {}
graph._hilites1 = {}
graph._pales1 = {}
for(var i=0;i<graph._keys1.length;i++)
	{
	var key = graph._keys1[i]
	var hue = alternateIndex(i,graph._keys1.length)*5.0/(6*graph._keys1.length)
	graph._colors1[key] = getColor(frac(hue+graph.hue),1,1)
	graph._hilites1[key] = getColor(frac(hue+graph.hue),1,0.5)
	graph._pales1[key] = getColor(frac(hue+graph.hue),0.4,1)
	}

graph._colors2 = {}
graph._hilites2 = {}
graph._pales2 = {}
for(var i=0;i<graph._keys2.length;i++)
	{
	var key = graph._keys2[i]
	var hue = alternateIndex(i,graph._keys2.length)*5.0/(6*graph._keys2.length)
	graph._colors2[key] = getColor(frac(hue+graph.hue),1,1)
	graph._hilites2[key] = getColor(frac(hue+graph.hue),1,0.5)
	graph._pales2[key] = getColor(frac(hue+graph.hue),0.4,1)
	}

graph.total = 0
for(var key in graph._count)
	{
	var key1 = key.split("\t")[0]
	if(!(key1 in graph.omit))
		graph.total += graph._count[key]
	}
if(graph.total==0)
	graph.total = 1

if(graph.type==TYPE_ARC)
	computeArcData(graph)
else if(graph.type==TYPE_FAC)
	computeFacData(graph)
else if(graph.type==TYPE_ASSOC)
	computeAssocData(graph)
else if(graph.type==TYPE_SOM)
	computeSomData(graph)
}

//***************************************************************************

function computeGraphData3(graph)
{
graph._count = {}

graph._keys1 = []
graph._keys2 = []
graph._keys3 = []

var seen1 = {}
var seen2 = {}
var seen3 = {}

if(graph.use1!=null)
	{
	for(var key in graph.use1)
		{
		graph._keys1.push(key)
		seen1[key] = 1
		}
	}

if(graph.use2!=null)
	{
	for(var key in graph.use2)
		{
		graph._keys2.push(key)
		seen2[key] = 1
		}
	}

if(graph.use3!=null)
	{
	for(var key in graph.use3)
		{
		graph._keys3.push(key)
		seen3[key] = 1
		}
	}

for(var i=0;i<lrecords.length;i++)
	{
	// check if data match graph selection
	if(!recordMatch(i,graph)) continue

	// keys
	key1 = (graph.ilabel1<0) ? NIL : lrecords[i][graph.ilabel1]			
	if((graph.use1!=null)&&(!(key1 in seen1))) continue

	key2 = (graph.ilabel2<0) ? NIL : lrecords[i][graph.ilabel2]
	if((graph.use2!=null)&&(!(key2 in seen2))) continue

	key3 = (graph.ilabel3<0) ? NIL : lrecords[i][graph.ilabel3]	
	if((graph.use3!=null)&&(!(key3 in seen3))) continue

	key = key1+"\t"+key2+"\t"+key3

	if(!(key in graph._count))
		graph._count[key] = 0

	if(graph.iunit==0)
		graph._count[key]++
	else
		graph._count[key] += vrecords[i][graph.iunit]

	if(!(key1 in seen1)) { seen1[key1] = 1 ; graph._keys1.push(key1) }
	if(!(key2 in seen2)) { seen2[key2] = 1 ; graph._keys2.push(key2) } 
	if(!(key3 in seen3)) { seen3[key3] = 1 ; graph._keys3.push(key3) }
	}


graph._keys1.sort(function(a,b){ return a.localeCompare(b) })
graph._keys2.sort(function(a,b){ return a.localeCompare(b) })
graph._keys3.sort(function(a,b){ return a.localeCompare(b) })

// build color table
graph._colors1 = {}
graph._hilites1 = {}
graph._pales1 = {}
for(var i=0;i<graph._keys3.length;i++)
	{
	var key = graph._keys3[i]
	var hue = alternateIndex(i,graph._keys3.length)*5.0/(6*graph._keys3.length)
	graph._colors1[key] = getColor(frac(hue+graph.hue),1,1)
	graph._hilites1[key] = getColor(frac(hue+graph.hue),1,0.5)
	graph._pales1[key] = getColor(frac(hue+graph.hue),0.4,1)
	}

graph.total = 0
for(var key in graph._count)
	graph.total += graph._count[key]
if(graph.total==0)
	graph.total = 1
}

//***************************************************************************

function contingency(graph)
{
var nx = countKeys(graph)
var ny = graph._keys2.length

var Z = matrix(nx,ny)

var ix = -1
for(var i=0;i<graph._keys1.length;i++)
	{
	var key1 = graph._keys1[i]
	if(key1 in graph.omit) continue
	ix +=1

	for(var j=0;j<graph._keys2.length;j++)
		{
		var key2 = graph._keys2[j]
		var key = key1+"\t"+key2
		if(key in graph._count)
			Z[ix][j] = graph._count[key]
		else
			Z[ix][j] = 0
		}
	}

return Z
}

//***************************************************************************

function computeArcData(graph)
{
if(typeof(graph._z.dist)!="undefined")
	delete(graph._z.dist)

var nx = graph._keys1.length - card(graph.omit)
var ny = graph._keys2.length

var dist = []

//dump("count",graph._count)

var ikeya = -1
for(var ia=0;ia<graph._keys1.length;ia++)
	{
	var key1a = graph._keys1[ia]
	if(key1a in graph.omit) continue
	ikeya +=1

	ikeyb = ikeya
	for(var ib=ia+1;ib<graph._keys1.length;ib++)
		{
		var key1b = graph._keys1[ib]
		if(key1b in graph.omit) continue
		ikeyb += 1

		// number of common columns
		var prox = 0
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2a = key1a+"\t"+graph._keys2[j]
			var key2b = key1b+"\t"+graph._keys2[j]
			if(key2a in graph._count)
				if(key2b in graph._count)
					{
					if(graph._count[key2a]!=0)
						if(graph._count[key2b]!=0)
							prox += 1
					}
			}
		dist.push([prox,ikeya,ikeyb,key1a,key1b])
		}
	}


dist.sort(function(a,b) { return a[0]-b[0] } )

graph._z.dist = dist
}

//***************************************************************************

function vector(n)
{
var vec = new Array(n)
for(var i=0;i<n;i++)
	vec[i] = 0
return vec
}

//***************************************************************************

function matrix(n1,n2)
{
var mat = new Array(n1)
for(var i=0;i<n1;i++)
	{
	mat[i] = new Array(n2)
	for(var j=0;j<n2;j++)
		mat[i][j] = 0
	}
return mat
}

function mult(A,B)
{
var n1 = A.length
var n2 = A[0].length
var n3 = B.length
var n4 = B[0].length
if(n2!=n3) return null;
var C = matrix(n1,n4)
for(var i=0;i<n1;i++)
	for(var j=0;j<n4;j++)
		for(var k=0;k<n2;k++)
			C[i][j] += A[i][k]*B[k][j]
return C;
}

//***************************************************************************

function tomatrix(list,n1,n2)
{
var k = 0
var mat = new Array(n1)
for(var i=0;i<n1;i++)
	{
	mat[i] = new Array(n2)
	for(var j=0;j<n2;j++)
		mat[i][j] = list[k++]
	}
return mat
}

//***************************************************************************

function computeSomData(graph)
{
if(graph.ilabel1<0) return
if(graph.ilabel2<0) return

var nx = countKeys(graph)
var ny = graph._keys2.length

var X = contingency(graph)

// normalize data points
for(var i=0;i<nx;i++)
	normalize(X[i])
	
// side of the squared weight network
var nw = 2*Math.ceil(Math.sqrt(nx))
if(nw<10) nw = 10

// initialize weights 
W = new Array(nw)
for(var i=0;i<nw;i++)
	{
	W[i] = new Array(nw)
	for(var j=0;j<nw;j++)
		{
		W[i][j] = new Array(ny)
		for(var k=0;k<ny;k++)
			W[i][j][k] = Math.random()*0.2-0.1
		normalize(W[i][j])
		}
	}

// learning rate
var rate = 0.04
var maxpass = 15

var recul = new Array(ny)

try	{

for(var neibor=6;neibor>=1;neibor--)
	{
	for(var ipass=0;ipass<maxpass;ipass++)
		{
		var dsum = 0
		for(var i=0;i<nx;i++)
			{
			// look for the best weight
			var ibest = 0
			var jbest = 0
			var dbest = euclidian(X[i],W[ibest][jbest])

			for(var iw=0;iw<nw;iw++)
				{
				for(var jw=0;jw<nw;jw++)
					{
					var d = euclidian(X[i],W[iw][jw])
					if(d<dbest)
						{
						dbest = d
						ibest = iw
						jbest = jw
						}		
					}
				}

			dsum += dbest
			// move all neighbours of best weight toward i
			for(var k=0;k<ny;k++)
				recul[k] = 0

			for(var iw=0;iw<nw;iw++)
				for(var jw=0;jw<nw;jw++)
					if(topodist(iw,jw,ibest,jbest)<=neibor)
						for(var k=0;k<ny;k++)
							{
							W[iw][jw][k] += rate*(X[i][k]-W[iw][jw][k])
							recul[k] += (X[i][k]-W[iw][jw][k])
							}

			// relax best weight
			for(var k=0;k<ny;k++)
				W[ibest][jbest][k] += rate*(X[i][k]-W[ibest][jbest][k]-recul[k]/8)
			}

		rate = rate*0.999	
		}

	maxpass += 1
	}

// compute projections of data points on the weight network
var xproj = new Array(nx)
var yproj = new Array(nx)

for(var i=0;i<nx;i++)
	{
	// find best weight
	var ibest = 0
	var jbest = 0
	var dbest = euclidian(X[i],W[ibest][jbest])

	for(var iw=0;iw<nw;iw++)
		{
		for(var jw=0;jw<nw;jw++)
			{
			var d = euclidian(X[i],W[iw][jw])
			if(d<dbest)
				{
				dbest = d
				ibest = iw
				jbest = jw
				}		
			}
		}

	xproj[i] = ibest
	yproj[i] = jbest
	}

graph._z.nw = nw
graph._z.xproj = xproj
graph._z.yproj = yproj

// compute distance between weights
var hdist = matrix(nw,nw-1)
for(var iw=0;iw<nw;iw++)
	for(var jw=0;jw<nw-1;jw++)
		hdist[iw][jw] = euclidian(W[iw][jw],W[iw][jw+1])

var vdist = matrix(nw-1,nw)
for(var iw=0;iw<nw-1;iw++)
	for(var jw=0;jw<nw;jw++)
		vdist[iw][jw] = euclidian(W[iw][jw],W[iw+1][iw])

graph._z.hdist = hdist
graph._z.vdist = vdist

delete(X)
delete(W)

}
catch(e) { debug(e) }
}

//***************************************************************************

function normalize(A)
{
var norm = 0
for(var i=0;i<A.length;i++)
	norm += A[i]*A[i]

if(norm==0) norm = 1
for(var i=0;i<A.length;i++)
	A[i] = A[i]/norm
}

//***************************************************************************

function euclidian(A,B)
{
var n = A.length
var d = 0
for(var k=0;k<n;k++)
	d += (A[k]-B[k])*(A[k]-B[k])
return d
}

//***************************************************************************

function topodist(i1,j1,i2,j2)
{
if((i1==i2)&&(j1==j2))
	return 999999
else
	return Math.max(Math.abs(i1-i2),Math.abs(j1-j2))
}

//***************************************************************************

function computeFacData(graph)
{
var nx = countKeys(graph)
var ny = graph._keys2.length

var Z = contingency(graph)

/*
var nx = 6
var ny = 3
var Z = tomatrix([41,16,8,28,25,10,172,84,127,133,118,157,16,5,19,11,6,24],
	nx,ny)
*/

// partial sums
var xsum = new Array(nx)
var ysum = new Array(ny)
for(var i=0;i<nx;i++)
	xsum[i] = 0
for(var i=0;i<ny;i++)
	ysum[i] = 0
var sum = 0
for(var i=0;i<nx;i++)
	for(var j=0;j<ny;j++)
		{
		xsum[i] += Z[i][j]
		ysum[j] += Z[i][j]		
		sum += Z[i][j]	
		}

// eliminate null columns
var newysum = []
var newny = 0
var newZ = new Array(nx)
for(var i=0;i<nx;i++)
	newZ[i] = []

var newkeys2 = []

for(var j=0;j<ny;j++)
	{
	if(ysum[j]==0) continue
	newysum.push(ysum[j])
	for(var i=0;i<nx;i++)
		newZ[i].push(Z[i][j])
	newkeys2.push(graph._keys2[j])
	newny += 1
	}

graph._keys2 = newkeys2
ny = newny
ysum = newysum
for(var i=0;i<nx;i++)
	Z[i] = newZ[i]

var invsum = 1.0/sum
for(var i=0;i<nx;i++)
	for(var j=0;j<ny;j++)
		Z[i][j] = Z[i][j]*invsum

for(var i=0;i<nx;i++)
	xsum[i] = xsum[i]*invsum
for(var j=0;j<ny;j++)
	ysum[j] = ysum[j]*invsum

var ZZ = matrix(nx,ny)
for(var i=0;i<nx;i++)
	for(var j=0;j<ny;j++)
		ZZ[i][j] = Z[i][j]/xsum[i]

// inertia matrix
var I = matrix(ny,ny)
for(var i=0;i<ny;i++)
	for(var j=0;j<ny;j++)
		{
		var s = 0
		for(var k=0;k<nx;k++)
			s += ZZ[k][i]*Z[k][j]
		I[i][j] = s
		}

for(var i=0;i<ny;i++)
	ysum[i] = 1/Math.sqrt(ysum[i])

var M = matrix(ny,ny)

for(var i=0;i<ny;i++)
	for(var j=0;j<ny;j++)
		M[i][j] = I[i][j] = I[i][j]*ysum[i]*ysum[j]

// compute eigenvectors and eigenvalues
var d = new Array(ny)
var e = new Array(ny)
tred(I,d,e,ny)
tql2(I,d,e,ny)

for(var i=0;i<ny;i++)
	for(var j=0;j<ny;j++)	
		I[i][j] = I[i][j]*ysum[i]

//  projections of rows on the first two factors
var xrow = new Array(nx)
var yrow = new Array(nx)

for(var i=0;i<nx;i++)
	{
	xrow[i] = yrow[i] = 0
	for(var j=0;j<ny;j++)
		{
		xrow[i] += ZZ[i][j]*I[j][1]
		yrow[i] += ZZ[i][j]*I[j][2]
		}
	}

// projections of columns on the first two factors

var xcol = new Array(ny)
var ycol = new Array(ny)

for(var i=0;i<ny;i++)
	{
	var s = 0
	for(var k=0;k<ny;k++)
		s += M[i][k]*I[k][1]/ysum[k]
	xcol[i] = s/Math.sqrt(d[1])*ysum[i]

	var s = 0
	for(var k=0;k<ny;k++)
		s += M[i][k]*I[k][2]/ysum[k]
	ycol[i] = s/Math.sqrt(d[2])*ysum[i]
	}

graph._z.xrow = xrow
graph._z.yrow = yrow
graph._z.xcol = xcol
graph._z.ycol = ycol

graph._z.xmax = 0
graph._z.ymax = 0

for(var i=0;i<graph._z.xrow.length;i++)
	{
	if(Math.abs(graph._z.xrow[i])>graph._z.xmax)
		graph._z.xmax = Math.abs(graph._z.xrow[i])
	if(Math.abs(graph._z.yrow[i])>graph._z.ymax)
		graph._z.ymax = Math.abs(graph._z.yrow[i])
	}	

for(var i=0;i<graph._z.xcol.length;i++)
	{
	if(Math.abs(graph._z.xcol[i])>graph._z.xmax)
		graph._z.xmax = Math.abs(graph._z.xcol[i])
	if(Math.abs(graph._z.ycol[i])>graph._z.ymax)
		graph._z.ymax = Math.abs(graph._z.ycol[i])
	}	
}

//***************************************************************************

function hypot(x,y)
{
return Math.sqrt(x*x+y*y)
}

//***************************************************************************

function alternateIndex(i,n)
{
var n2 = Math.floor((n+1)/2)
var j = Math.floor(i/2)
return (i%2==0) ? j : (n2+j)
}

//***************************************************************************

function computeAssocData(graph)
{
graph._z = {}		// specific

commons = {}	// common sets

assoc = {}
for(var i=0;i<graph._keys1.length;i++)
	assoc[i] = 0

for(var ia=0;ia<graph._keys1.length;ia++)
	{
	keya = graph._keys1[ia]
	if(keya in graph.omit) continue

	for(var ib=0;ib<graph._keys1.length;ib++)
		{
		if(ib==ia) continue

		keyb = graph._keys1[ib]	
		if(keyb in graph.omit) continue

		var commonkeys = ""
		var sep = ""
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j]
			if(!(keya+"\t"+key2 in graph._count)) continue
			if(graph._count[keya+"\t"+key2]==0) continue
			if(!(keyb+"\t"+key2 in graph._count)) continue
			if(graph._count[keyb+"\t"+key2]==0) continue

			commonkeys += sep + j
			sep = "\t"	
			}

		// no keys in common	
		if(commonkeys=="") continue

		if(!(commonkeys in commons)) commons[commonkeys] = {}

		if(!(ia in commons[commonkeys]))
			{
			commons[commonkeys][ia] = 1
			assoc[ia] += 1
			}
		if(!(ib in commons[commonkeys]))
			{
			commons[commonkeys][ib] = 1
			assoc[ib] += 1
			}

		}
	}

// convert to list
graph._z.commons = []
for(var x in commons)	
	{
	var card2 = x.split("\t").length
	var card1 = card(commons[x])
	graph._z.commons.push([x,commons[x],card2,card1])
	}	

// sort by number of keys
graph._z.commons.sort(function(a,b) { 	
	return a[2]!=b[2] ? b[2]-a[2] :b[3]-a[3]
	})

// key1 order
var order1 = new Array(graph._keys1.length)
for(var i=0;i<order1.length;i++)
	order1[i] = i
order1.sort(function(a,b) { return assoc[a]-assoc[b]})

graph._z.order1 = order1
}

//***************************************************************************

function createProjectionValue(graph,index)
{


if(graph.type==TYPE_ACP)
	{
	values.push("ACP_"+values.length)

	var n = graph.ivalues.length;
	var x;
	var y;
	var coef = (index==0) ? graph._z.xcoef : graph._z.ycoef;

	for(var i=0;i<lrecords.length;i++)
		{
		x = 0
		for(var j=0;j<n;j++)
			{
			y = (vrecords[i][graph.ivalues[j]]-graph._z.avg[j])/graph._z.std[j]
			x += y* coef[j];
			}
		vrecords[i].push(x)
		}
	}

if(graph.type==TYPE_DISCRI)
	{
	values.push("DISCRI_"+values.length)

	var n= graph.ivalues.length;
	var x;
	var y;
	var coef = (index==0) ? graph._z.xcoef : graph._z.ycoef;

	for(var i=0;i<lrecords.length;i++)
		{
		x = 0
		for(var j=0;j<n;j++)
			{
			y = vrecords[i][graph.ivalues[j]]-graph._z.avg[j]
			x += y* coef[j]
			}
		vrecords[i].push(x)
		}
	}

if(graph.type==TYPE_REGRES)
	{
	if(valueindex==1)
		{
		values.push(values[graph.ivalue1]+"_"+values.length);
		for(var i=0;i<vrecords.length;i++)
			{
			var r = vrecords[i];
			var x = graph._z.a[0];
			for(var j=0;j<graph.ivalues.length;j++)
				x += r[graph.ivalues[j]]*graph._z.a[j+1];
			vrecords[i].push(x);
			}
		}
	else
		{
		values.push("RES_"+values.length);
		for(var i=0;i<vrecords.length;i++)
			{
			var r = vrecords[i];
			var x = graph._z.a[0];
			for(var j=0;j<graph.ivalues.length;j++)
				x += r[graph.ivalues[j]]*graph._z.a[j+1];
			vrecords[i].push(x-r[graph.ivalue1]);
			}
		}	
	}
}

//***************************************************************************

function getGraphLabel1(graph)
{
var title = graph.ilabel1 < 0 ? "" : labels[graph.ilabel1]
if(graph.use1!=null) title += "\u2734"
return title
}

//***************************************************************************

function getGraphLabel2(graph)
{
var title = graph.ilabel2 < 0 ? "" : labels[graph.ilabel2]
if(graph.use2!=null) title += "\u2734"
return title
}

//***************************************************************************

function getGraphLabel3(graph)
{
var title = graph.ilabel3 < 0 ? "": labels[graph.ilabel3]
if(graph.use3!=null) title += "\u2734"
return title
}

//***************************************************************************

function swapLabels(graph)
{
var temp = graph.ilabel1
graph.ilabel1 = graph.ilabel2
graph.ilabel2 = temp

temp = graph._keys1
graph._keys1 = graph._keys2
graph._keys2 = temp

temp = graph.use1
graph.use1 = graph.use2
graph.use2 = temp
}

//***************************************************************************

function swapLabeln(graph)
{
var temp = graph.ilabels[labelindex]
graph.ilabels[labelindex] = graph.ilabels[destlabelindex]
graph.ilabels[destlabelindex] = temp

temp = graph._keys[labelindex]
graph._keys[labelindex] = graph._keys[destlabelindex]
graph._keys[destlabelindex] = temp
}

//***************************************************************************

function swapValuen(graph)
{
var temp = graph.ivalues[valueindex]
graph.ivalues[valueindex] = graph.ivalues[destvalueindex]
graph.ivalues[destvalueindex] = temp
}

//***************************************************************************

function indexIn(value,table)
{
for(var i=0;i<table.length;i++)
	if(table[i]==value)	
		return i
return -1
}

//***************************************************************************

function createValue(index)
{
// if value already created
//if(indexIn(labels[index],values)>=0) return

for(var i=0;i<lrecords.length;i++)
	{
	var x = Number(lrecords[i][index].replace(",","."))
	if(isNaN(x)) x = 0
	vrecords[i].push(x)
	}

values.push(labels[index])

removeLabel(index);
}

//***************************************************************************

function removeLabel(index)
{
for(var i=0;i<lrecords.length;i++)
	lrecords[i].splice(index,1);

labels.splice(index,1);

for(var i=0;i<graphs.length;i++)
	{	
	if(graphs[i].ilabel1>index) graphs[i].ilabel1 -=1;
	if(graphs[i].ilabel2>index) graphs[i].ilabel2 -=1;
	if(graphs[i].ilabel3>index) graphs[i].ilabel3 -=1;
	}
}

//***************************************************************************

function removeValue(index)
{

for(var i=0;i<vrecords.length;i++)
	vrecords[i].splice(index,1);	

values.splice(index,1);

for(var i=0;i<graphs.length;i++)
	{
	if(graphs[i].ivalue1>index) graphs[i].ivalue1 -=1;
	if(graphs[i].ivalue2>index) graphs[i].ivalue2 -=1;
	if(graphs[i].ivalues)
		for(var j=0;j<graphs[i].ivalues.length;j++)
			if(graphs[i].ivalues[j]>index)
				graphs[i].ivalues[j] -=1;
	}
}

//***************************************************************************

function createBoolean(graph,sliceindex)
{ 
if(graph.ilabel3>=0)
	{
	var index3 = sliceindex % graph._keys3.length;
	var k = Math.floor(sliceindex/graph._keys3.length)
	var key3 = graph._keys3[index3];
	var il3 = graph.ilabel3;

	var index2 = k % graph._keys2.length
	var key2 = graph._keys2[index2];
	var il2 = graph.ilabel2;

	var index1 = Math.floor(k/graph._keys2.length)
	var key1 = graph._keys1[index1];
	var il1 = graph.ilabel1;

	for(var i=0;i<lrecords.length;i++)
		{
		var k = ((lrecords[i][il1]==key1)&&(lrecords[i][il2]==key2)&&
			(lrecords[i][il3]==key3)) ? 1 : 0;
		vrecords[i].push(k);
		}

	values.push(key1+"_"+key2+"_"+key3);
	}
else if((graph.ilabel2>=0)&&(graph.type!=TYPE_FAC))
	{
	var index2 = sliceindex % graph._keys2.length
	var key2 = graph._keys2[index2];
	var il2 = graph.ilabel2;

	var index1 = Math.floor( sliceindex / graph._keys2.length)
	var key1 = graph._keys1[index1];
	var il1 = graph.ilabel1;

	for(var i=0;i<lrecords.length;i++)
		{
		var k = ((lrecords[i][il1]==key1)&&(lrecords[i][il2]==key2))?1:0;
		vrecords[i].push(k);
		}
	values.push(key1+"_"+key2);
	}
else if(graph.ilabel1>=0)
	{
	var index1 = sliceindex;
	var key1 = graph._keys1[index1];
	var il1 = graph.ilabel1;

	for(var i=0;i<lrecords.length;i++)
		{
		var k = (lrecords[i][il1] == key1 ) ? 1 : 0;
		vrecords[i].push(k);
		}
	values.push(key1);
	}

}

//***************************************************************************

function createKgroup(graph)
{

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph))
		lrecords[i].push("")
	else
		{
		var s = ""+(graph._z.rindices[i]+1)
		if(s.length<2) s = "0"+s
		lrecords[i].push(s)
		}
	}

labels.push("CLUSTERS_"+(labels.length+1))

}

//***************************************************************************

function createLabelFromRepart(graph)
{
var i1 = graph.ivalue1 
if(i1<0) return

var initial = values[i1].substring(0,1)

var xslot = (graph._z.xmax - graph._z.xmin)/graph.nslot;
var xmin = graph._z.xmin;
var xmax = graph._z.xmax;

var name = "";

for(var i=0;i<lrecords.length;i++)
	{
	var k = Math.floor((vrecords[i][graph.ivalue1]-xmin)/xslot)
	if(k<0)
		name = "";
	else if(k==graph._z.histo.length)
		name = initial + ((k<10) ? "0" : "") + k;
	else if(k>graph._z.histo.length)
		name = "";
	else
		name = initial + ((k+1<10) ? "0" : "" ) + (k+1);
	lrecords[i].push(name)
	}

name = values[graph.ivalue1]+"_"+(labels.length+1);
labels.push(name);
}

//***************************************************************************

function createLabelFromDistrib(graph)
{
if(graph._z.cursor==0) return

var i1 = graph.ivalue1 
if(i1<0) return

var initial = values[i1].substring(0,1)

if(graph._z.cursor>0)
	{
	// slices of equal range
	var n = Math.ceil(1.0/graph._z.cursor) 

	var dx = (graph._z.xmax-graph._z.xmin)*graph._z.cursor
	for(var i=0;i<vrecords.length;i++)
		{
		var x = vrecords[i][i1]
		var slice = Math.floor((x-graph._z.xmin)/dx)
		if(slice==n) slice = n-1
		/*
		var xdeb = graph._z.xmin+slice*dx
		xdeb = Math.floor(xdeb*100)/100
		var xfin = graph._z.xmin+(slice+1)*dx
		xfin = Math.floor(xfin*100)/100
		*/
		var name = initial + ((slice<10) ? "0" : "" ) + slice
		lrecords[i].push(name)
		}
	}
else
	{
	// slices of equal population

	var bounds = []
	var n = Math.ceil(-1.0/graph._z.cursor) 
	for(var i=1;i<n;i++)
		{
		var j = Math.floor(-i*graph._z.xx.length*graph._z.cursor)
		if(j>=graph._z.xx.length) j = graph._z.xx.length-1
		bounds.push(graph._z.xx[j])
		}

	for(var i=0;i<vrecords.length;i++)
		{
		var x = vrecords[i][i1]
		var slice = n
		for(var j=0;j<bounds.length;j++)
			if(x<bounds[j])
				{ slice = j; break }	
		if(slice>=n) slice = n-1
		/*
		var xdeb = (slice==0) ? graph._z.xmin : bounds[slice]
		xdeb = Math.floor(xdeb*100)/100
		var xfin = (slice==bounds.length) ? graph._z.xmax : bounds[slice]
		xfin = Math.floor(xfin*100)/100
		*/
		var name = initial + ((slice<10) ? "0" : "" ) + slice
		lrecords[i].push(name)
		}
	}

name = values[graph.ivalue1]+"_"+(labels.length+1);
labels.push(name);
}

//***************************************************************************

function createLabelFromDendro(graph)
{
if(!graph._z) return;
if(!graph._z.grouping) return;
if(!graph._z.nc) return;

var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var a = new Array(lrecords.length);
for(var i=0;i<a.length;i++)
	a[i] = -1;

var nc = 0;
for(var i=0;i<a.length;i++)
	a[i] = recordMatch(i,graph) ? nc++ : -1;


var grouping = graph._z.grouping;

for(var j=0;j<grouping.length;j++)
	{
	if(nc<=graph._z.nc) break;

	var i1 = grouping[j][0];
	var i2 = grouping[j][1];
	for(var i=0;i<a.length;i++)
		{
		if(a[i]==i2)
			a[i] = i1;
		else if(a[i]>i2)
			a[i] -=1;
		}
	nc--;
	}

// determine swapping
var k = 0;
var swap = {}
visitNode(graph._z.node,function(node) {
	if(node.left) return;
	if(node.level!=graph._z.level) return;
	swap[node.value] = k;
	k++;
	})

for(var i=0;i<lrecords.length;i++)
	{
	if(a[i]<0)
		lrecords[i].push("");
	else if(swap[a[i]]<26)
		lrecords[i].push("A"+alpha.charAt(swap[a[i]]));
	else
		lrecords[i].push("B"+alpha.charAt(swap[a[i]]-26));
	}


name = "D"+(labels.length+1);
labels.push(name);
}

//***************************************************************************

function removeTitle(graph,index)
{

var newselection = []
for(var i=0;i<graph.selection.length;i++)
	if((i!=2*index)&&(i!=2*index+1))
		newselection.push(graph.selection[i])

graph.selection = newselection
graph.hbar = graph.selection.length/2*16
if(graph.hbar==0) graph.hbar = 16

computeGraphData(graph)
}

//***************************************************************************

function selectSlices(graph)
{
if(graph.type==TYPE_FAC)
	selectFacSlices(graph)
else if(graph.type==TYPE_BAR)
	selectBarSlices(graph)

computeGraphData(graph)
}

//***************************************************************************

function selectBarSlices(graph)
{
if(graph.contour[0]<graph.contour[1])
	{
	var xmin = graph.contour[0]
	var xmax = graph.contour[1]
	}
else
	{
	var xmin = graph.contour[1]
	var xmax = graph.contour[0]
	}

var nkey = 0
for(var i=0;i<graph._keys1.length;i++)
	if(!(graph._keys1[i] in graph.omit))
		nkey+=1

var ikey = 0
var dx = graph.w/nkey
var ndel = 0
for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue

	var x = graph.x+ikey*graph.w/nkey
	if((x<=xmax)&&(x+dx>=xmin))
		{
		graph.omit[key] = 1	
		ndel+=1
		}
	ikey++
	}

}

//***************************************************************************

function selectFacSlices(graph)
{
if(typeof(graph._z.xrow)=="undefined") return
if(graph.ncontour==0) return

var ctx = canvas.getContext("2d")

var dx = graph.w/2
var dy = (graph.h - graph.hbar -20)/2

var xc = graph.x + dx
var yc = graph.y + graph.h -20 - dy

var xmax = graph._z.xmax
var ymax = graph._z.ymax

var xscale = (dx-5)/xmax
var yscale = (dy-5)/ymax
var scale = (xscale<yscale) ? xscale : yscale

// build contour path
ctx.beginPath()
ctx.moveTo(graph.contour[0].x,graph.contour[0].y)
for(var i=1;i<graph.ncontour;i++)
	ctx.lineTo(graph.contour[i].x,graph.contour[i].y)

// for each point, check if it is within the path
var k = -1
for(var i=0;i<graph._keys1.length;i++)
	{
	var key = graph._keys1[i]
	if(key in graph.omit) continue

	k += 1
	var x = xc + scale*graph._z.xrow[k]
	var y = yc - scale*graph._z.yrow[k]
	if(ctx.isPointInPath(x,y))
		graph.omit[key] = 1
	}

}

//***************************************************************************

function inGraphBackground(pt,graph)
{
if(graph.type==TYPE_FAC)
	{
	faction = SELECT_SLICES	
	graph.contour = new Array(1000)
	graph.ncontour = 0
	graph.contour[graph.ncontour++] = pt	
	return true
	}	
else if(graph.type==TYPE_BAR)
	{
	faction = SELECT_SLICES
	graph.contour = new Array(2)
	graph.contour[0] = pt.x
	graph.contour[1] = pt.x
	return true
	}
else
	return false
}

//***************************************************************************

function down(event)
{

ptclick = getxy(event)

faction = 0
action = 0
graphindex = -1
graphindex2 = -1
labelindex = -1
valueindex = -1
sliceindex = -1
typeindex = -1
titleindex = -1
stickerindex = -1

var index = -1

var movetop = false

// click in dustbin
if(inRect(ptclick,mywidth-20,myheight-40,20,20))
	{
	faction = 0;
	return;
	}

// check if click in table icon
if(inRect(ptclick,mywidth-40,myheight-40,20,20))
	{
	faction = action = DRAG_TABLE
	return
	}

// check if click in inspector icon
if(inRect(ptclick,mywidth-60,myheight-40,20,20))
	{
	faction = action = DRAG_INSPECTOR;
	return;
	}

if(inRect(ptclick,mywidth-80,myheight-40,20,20))	
	{
	faction = action = DRAG_ADD;
	return;
	}

if(inRect(ptclick,mywidth-100,myheight-40,20,20))
	{
	faction = action = DRAG_CLONE;
	return;
	}

if(inRect(ptclick,mywidth-120,myheight-40,20,20))
	{	
	faction = action = DRAG_SORT;
	return;
	}

if(inRect(ptclick,mywidth-140,myheight-40,20,20))
	{
	faction = action = SAVE_CONFIG;
	draw();
	return;
	}

// check if dragging label
index = inLabel(ptclick)
if(index>=0)
	{
	faction = action = DRAG_LABEL
	labelindex = index
	return
	}

index = inValue(ptclick)
if(index>=0)
	{
	faction = action = DRAG_VALUE
	valueindex = index
	return
	}

if(inSticker(ptclick))
	{
	faction = action = ADD_STICKER
	return
	}

// check if dragging chart type
index = inType1(ptclick)
if(index>=0)
	{
	faction = action = DRAG_TYPE	
	typeindex = index
	return
	}

index = inType2(ptclick)
if(index>=0)
	{
	faction = action = DRAG_TYPE
	typeindex = index
	return
	}

index = inDock(ptclick)
if(index>=0)
	{
	faction = action = UNDOCK_GRAPH
	graphindex = index
	return
	}


try	{

// check if clicking in graph

var i = inFullGraph(ptclick);
if(i>=0)
	{
	var graph = graphs[i]

	if(graph.closeable&&inRect(ptclick,graph.x+5,graph.y+4,10,10))
		{
		faction = CLOSE_GRAPH
		graphindex = i
		}
	else if((index=inGraphHandle(ptclick,graph))>=0)
		{
		faction = DRAG_TITLE
		graphindex = i
		titleindex = index
		}
	else if(inRect(ptclick,graph.x+graph.w-10,graph.y+graph.h-10,10,10))
		{
		faction = RESIZE_GRAPH
		graphindex = i
		movetop = true
		}
	else if(graph.type==TYPE_PALETTE)
		{
		if(inRect(ptclick,graph.x+2,graph.y+graph.hbar+2,graph.w-4,
			graph.h-graph.hbar-4))
			{
			faction = DRAG_HUE
			var dx = (graph.w-2)/5
			var dy = (graph.h-graph.hbar-2)/5
			sliceindex = Math.floor((ptclick.x-graph.x)/dx)
				+5*Math.floor((ptclick.y-graph.y-graph.hbar)/dy)
			graphindex = -1
			}
		else
			{
			faction = DRAG_GRAPH
			graphindex = i
			movetop = true
			}
		}
	else if(inGraphLabel1(ptclick,graph))
		{
		faction = DRAG_LABEL1
		graphindex = i
		}
	else if(inGraphLabel2(ptclick,graph))
		{
		faction = DRAG_LABEL2
		graphindex = i
		}
	else if(inGraphLabel3(ptclick,graph))
		{
		faction = DRAG_LABEL3
		graphindex = i
		}
	else if(inGraphLabeln(ptclick,graph)&&(destlabelindex<graph.ilabels.length))
		{
		faction = DRAG_LABELN
		labelindex = destlabelindex
		graphindex = i
		}
	else if(inGraphValue1(ptclick,graph))
		{
		faction = DRAG_VALUE1
		graphindex = i
		}
	else if(inGraphValue2(ptclick,graph))
		{
		faction = DRAG_VALUE2
		graphindex = i
		}
	else if(inGraphValuen(ptclick,graph,false))
		{
		if(destvalueindex<graph.ivalues.length)
			{
			faction = DRAG_VALUEN
			valueindex = destvalueindex
			graphindex = i
			}
		}
	else if((index=inGraphAxis(ptclick,graph))>=0)
		{
		faction = action = DRAG_AXIS;
		graphindex = i;
		valueindex = index;
		}
	else if((index=inGraphBin(ptclick,graph))>=0)
		{
		if(index<=card(graph.omit))
			{
			faction = DRAG_BIN
			graphindex = i
			sliceindex = index
			}
		}
	else if((index=inGraphSticker(ptclick,graph))>=0)
		{
		faction = DRAG_STICKER
		stickerindex = index
		graphindex = i
		}
	else if((graph.type==TYPE_MULTI)&&((index=inMultiSlice(ptclick,graph)) instanceof Array))
		{
		faction = DRAG_SLICE
		graphindex = i
		sliceindex = index
		}
	else if((index=inGraphSlice(ptclick,graph))>=0)
		{
		faction = DRAG_SLICE
		graphindex = i
		sliceindex = index
		}
	else if((index=inRepartCursor(ptclick,graph))>=0)
		{
		faction = DRAG_NSLOT;
		graphindex = i;	
		}
	else if((index=inChi2Cursor(ptclick,graph))>=0)
		{
		faction = DRAG_ERROR;
		graphindex = i;
		}
	else if((index=inDistribCursor(ptclick,graph))>=0)
		{
		faction = index
		graphindex = i
		}
	else if((index=inKmeansCursor(ptclick,graph))>=0)
		{
		faction = DRAG_NSLOT
		graphindex = i
		}
	else if((index=inDendroCursor(ptclick,graph))>=0)
		{
		faction = CHANGE_NCLASS;
		graphindex = i;
		}
	else if(inLagCursor(ptclick,graph))
		{
		faction = CHANGE_LAG;
		graphindex = i;
		}
	else if(inHScroll(ptclick,graph))
		{		
		faction = HSCROLL_GRAPH
		graphindex = i
		}
	else if(inVScroll(ptclick,graph))
		{
		faction = VSCROLL_GRAPH
		graphindex = i
		}
	else if(inRect(ptclick,graph.x,graph.y,graph.w,graph.hbar))
		{
		// in graph title bar
		faction = DRAG_GRAPH
		graphindex = i
		movetop = true
		}
	else if(inGraphBackground(ptclick,graph))
		{	
		graphindex = i
		}
	else 
		{
		faction = DRAG_GRAPH
		graphindex = i
		movetop = true
		}
	}

} catch(err) { console.log("down error "+err) }

if(faction==0)
	if(inRect(ptclick,mywidth-120,0,100,myheight))
	{
	faction = action = DRAG_SIDEBAR	
	ptstart = ptclick
	return
	}

// check if undocking graph
if(faction==0)
	faction = SCROLL_DESKTOP

if(movetop)
	{
	// move selected graph to top
	var gtemp = graphs[graphs.length-1]
	graphs[graphs.length-1] = graphs[graphindex]
	graphs[graphindex] = gtemp	
	graphindex = graphs.length-1
	}

action = faction
draw()
}

//***************************************************************************

function up(event)
{
var graph;

ptmove = getxy(event)

if(action==DRAG_SIDEBAR)
	{
	barshift = Math.round(barshift/20)*20
	}
if(action==SHOW_TABLE)
	{
	showTable();
	}
else if(action==SHOW_INSPECTOR)
	{
	showInspector();
	}
else if(action==CLONE_GRAPH)
	{
	graph = clone(graphs[graphindex])
	graph.x += 50;
	graph.y += 50;
	graphs.push(graph)
	computeGraphData(graph)
	}
else if((action==ADD_LABEL)||(action==ADD_VALUE))
	{
	show_formula_dialog(action);
	}
else if(action==DOCK_GRAPH)
	{
	graph = graphs[graphindex]

	// remove graph
	var newgraphs = []
	for(var i=0;i<graphs.length;i++)
		if(i!=graphindex)
			newgraphs.push(graphs[i])
	graphs = newgraphs
	myconfig.graphs = graphs

	// add graph to dock
	dock.push(graph)
	}	
else if(action==UNDOCK_GRAPH)
	{
	graph = dock[graphindex]
	
	// remove graph from the dock
	var newdock = []	
	for(var i=0;i<dock.length;i++)
		if(i!=graphindex)
			newdock.push(dock[i])
	dock = newdock

	// put back graph in active list
	graph.x = ptmove.x-graph.w/2
	graph.y = ptmove.y-20
	graphs.push(graph)
	}
else if(action==REMOVE_LABEL)
	{
	removeLabel(labelindex);
	}
else if(action==REMOVE_VALUE)
	{
	removeValue(valueindex);
	}
else if(action==SET_LABEL1)
	{
	graph = graphs[graphindex]
	graph.ilabel1 = labelindex
	graph.use1 = null
	graph.omit = {}
	computeGraphData(graph)
	}
else if(action==SET_LABEL2)
	{	
	graph = graphs[graphindex]
	if((graph.type==TYPE_ANOVA)||(graph.type==TYPE_DISCRI)||(graph.type==TYPE_REPART)||(graph.type==TYPE_BOX)||(graph.type==TYPE_PARA)||(graph.type==TYPE_ACP)||(graph.type==TYPE_RADVIZ))
		{	
		graph.ilabel1 = labelindex;
		graph.use1 = null;
		graph.omit = {}
		computeGraphData(graph)	
		}
	else
		{
		graph.ilabel2 = labelindex
		graph.use2 = null
		computeGraphData(graph)
		}
	}
else if(action==SET_LABEL3)
	{
	graph = graphs[graphindex]
	if(graph.type==TYPE_THREE)
		{
		graph.ilabel3 = labelindex
		graph.use3 = null
		computeGraphData(graph)
		}
	else if(graph.type==TYPE_SCATTER)
		{
		graph.ilabel1 = labelindex
		graph.use1 = null;
		computeGraphData(graph)
		}
	}
else if(action==SET_LABELN)
	{		
	graph = graphs[graphindex]
	if(graph.ilabels.indexOf(labelindex)<0)
		{	
		if(destlabelindex==graph.ilabels.length)
			graph.ilabels.push(labelindex)
		else 
			graph.ilabels[destlabelindex] = labelindex	
		}
	computeGraphData(graph)
	}
else if(action==SET_VALUE1)
	{
	graph = graphs[graphindex]
	graph.ivalue1 = valueindex
	computeGraphData(graph)
	}
else if(action==SET_VALUE2)
	{
	graph = graphs[graphindex]	
	if(graph.type==TYPE_REGRES)
		graph.ivalue1 = valueindex;
	else
		graph.ivalue2 = valueindex
	computeGraphData(graph)
	}
else if(action==SET_VALUEN)
	{		
	graph = graphs[graphindex]
	if(valueindex>0)
		{
		// add value if it doesnt exist already	
		if(valueindex==graph.ivalue1)
			{
			// cannot have same value 
			}
		else if(graph.ivalues.indexOf(valueindex)<0)
			{	
			if(destvalueindex==graph.ivalues.length)
				graph.ivalues.push(valueindex)
			else 
				graph.ivalues[destvalueindex] = valueindex	
			}
		}
	else
		{
		// add all values
		for(var k=1;k<values.length;k++)
			{
			if(graph.ivalues.indexOf(k)>=0) continue;
			graph.ivalues.push(k)
			}
		}
	computeGraphData(graph)
	}
else if(action==DRAG_TYPE)
	{
	graph = new Graph(ptmove.x-10,ptmove.y-10,true,[],-1,0,typeindex)
	graphs.push(graph)
	computeGraphData(graph)
	}
else if(action==SET_TYPE)
	{	
	graph = graphs[graphindex]
	// if already this type, change the option
	if(graph.type==typeindex)
		graph.option += 1
	else
		{
		graph.type = typeindex
		graph.option = 0
		}
	computeGraphData(graph);
	}
else if(action==SET_GRAPH_UNIT)
	{
	graph = graphs[graphindex]
	graph.iunit = valueindex
	computeGraphData(graph)
	}
else if(action==DRAG_SLICE)
	{
	try {
	graph = graphs[graphindex]
	var selection = cloneArray(graph.selection)	
	// new graph selection 
	if(graph.type==TYPE_MULTI)
		{
		for(var k=0;k<sliceindex.length;k++)
			{
			selection.push(graph.ilabels[k])
			selection.push(graph._keys[k][sliceindex[k]])
			}
		var hue = 0
		}
	else if(graph.ilabel3>=0)
		{
		var index3 = sliceindex % graph._keys3.length;
		var k = Math.floor(sliceindex/graph._keys3.length)
		var index2 = k % graph._keys2.length
		var index1 = Math.floor(k/graph._keys2.length)
		selection.push(graph.ilabel1)
		selection.push(graph._keys1[index1])
		selection.push(graph.ilabel2)
		selection.push(graph._keys2[index2])
		selection.push(graph.ilabel3)
		selection.push(graph._keys3[index3])
		var hue = 0
		}
	else if((graph.ilabel2>=0)&&(graph.type!=TYPE_FAC))
		{
		var index2 = sliceindex % graph._keys2.length
		var index1 = Math.floor( sliceindex / graph._keys2.length)
		selection.push(graph.ilabel1)
		selection.push(graph._keys1[index1])
		selection.push(graph.ilabel2)
		selection.push(graph._keys2[index2])
		var index = alternateIndex(index2,graph._keys2.length)
		var hue = frac(index*5.0/(6*graph._keys2.length)+graph.hue)
		}
	else if(graph.ilabel1>=0)
		{
		selection.push(graph.ilabel1)
		selection.push(graph._keys1[sliceindex])
		var index = alternateIndex(sliceindex,graph._keys1.length)
		var hue =  frac(index*5.0/(6*graph._keys1.length)+graph.hue)
		}
	else 
		{
		var hue = graph.hue
		}
	var newgraph = new Graph(ptmove.x-150,ptmove.y-20,true,selection,-1,hue,
		TYPE_PIE)
	newgraph.iunit = graph.iunit
	computeGraphData(newgraph)
	graphs.push(newgraph)	
		}
	catch(e) { alert(e) }
	}
else if(action==DROP_SLICE)
	{
	graph = graphs[graphindex]
	var key = graph._keys1[sliceindex]
	graph.omit[key] = 1	
	computeGraphData(graph)
	}
else if(action==SET_SELECTION)
	{
	var oldgraph = graphs[graphindex]
	var newgraph = graphs[graphindex2]
	newgraph.selection = cloneArray(oldgraph.selection)
	newgraph.selection.push(oldgraph.ilabel1)
	newgraph.selection.push(oldgraph._keys1[sliceindex])
	newgraph.hbar = newgraph.selection.length/2*16
	if(newgraph.hbar==0) newgraph.hbar = 16
	computeGraphData(newgraph)
	}
else if(action==PASTE_TITLE)
	{
	var oldgraph = graphs[graphindex]
	var newgraph = graphs[graphindex2]
	newgraph.selection = [oldgraph.selection[2*titleindex],
		oldgraph.selection[2*titleindex+1]]
	newgraph.hbar = newgraph.selection.length/2*16
	if(newgraph.hbar==0) newgraph.hbar = 16
	computeGraphData(newgraph)
	}
else if((action==CREATE_SET)||(action==CREATE_BINSET))
	{
	var oldgraph = graphs[graphindex]
	var newgraph = graphs[graphindex2]
	newgraph.selection = [1000+nset,1]

	var records = new Array(lrecords.length)
	for(var i=0;i<lrecords.length;i++)
		{
		records[i] = 0
		if(!recordMatch(i,oldgraph)) continue	
		if((lrecords[i][oldgraph.ilabel1] in oldgraph.omit)!=
			(action==CREATE_BINSET)) continue
		records[i] = 1	
		}
	sets[nset+1000] = records

	nset += 1

	newgraph.hbar = newgraph.selection.length/2*16
	computeGraphData(newgraph)
	}
else if((action==DRAG_LABEL1)||(action==DRAG_VALUE1))
	{
	graph = graphs[graphindex]
	graph.margin1 = graph.x + graph.w - ptmove.x -50
	if(graph.margin1 < 5) graph.margin1 = 5
	}
else if((action==DRAG_LABEL2)||(action==DRAG_VALUE2))
	{
	graph = graphs[graphindex]
	graph.margin2 = ptmove.y - graph.y - graph.hbar -50
	if(graph.margin2<5) graph.margin2 = 5
	}
else if(action==DRAG_LABEL3)
	{
	graph = graphs[graphindex]
	graph.margin3 = graph.x + graph.w - ptmove.x -50
	if(graph.margin3 < 5) graph.margin3 = 5
	}
else if(action==CREATE_PROJECTION)
	{	
	graph = graphs[graphindex];
	createProjectionValue(graph,valueindex)
	draw()
	}
else if(action==REMOVE_LABEL1)
	{
	graph = graphs[graphindex]
	graph.ilabel1 = -1
	graph.use1 = null
	computeGraphData(graph)
	}
else if(action==REMOVE_LABEL2)
	{
	graph = graphs[graphindex]
	if((graph.type==TYPE_DISCRI)||(graph.type==TYPE_REPART)||
		(graph.type==TYPE_BOX)||(graph.type==TYPE_PARA)||(graph.type==TYPE_ACP))
		{
		graph.ilabel1 = -1
		graph.use1 = null;
		}
	else
		{
		graph.ilabel2 = -1
		graph.use2 = null
		}
	computeGraphData(graph)
	}
else if(action==REMOVE_LABEL3)
	{
	graph = graphs[graphindex]
	if(graph.type==TYPE_THREE)
		{
		graph.ilabel3 = -1
		graph.use3 = null
		computeGraphData(graph)
		}
	else if(graph.type==TYPE_SCATTER)
		{
		graph.ilabel1 = -1
		graph.use1 = null
		computeGraphData(graph)
		}
	}
else if(action==REMOVE_LABELN)
	{	
	graph = graphs[graphindex]
	var newlabels = []
	for(var i=0;i<graph.ilabels.length;i++)
		if(i!=destlabelindex)
			newlabels.push(graph.ilabels[i])
	graph.ilabels = newlabels
	computeGraphData(graph)
	}
else if(action==REMOVE_VALUE1)
	{
	graph = graphs[graphindex]
	graph.ivalue1 = -1
	computeGraphData(graph)
	}
else if(action==REMOVE_VALUE2)
	{
	graph = graphs[graphindex]
	if(graph.type==TYPE_REGRES)
		graph.ivalue1 = -1;
	else
		graph.ivalue2 = -1
	computeGraphData(graph)
	}
else if(action==REMOVE_VALUEN)
	{
	graph = graphs[graphindex]
	var newvalues = []
	for(var i=0;i<graph.ivalues.length;i++)
		if(i!=destvalueindex)
			newvalues.push(graph.ivalues[i])
	graph.ivalues = newvalues
	computeGraphData(graph)
	}
else if(action==REMOVE_BIN)
	{
	graph = graphs[graphindex]
	if(sliceindex==0)
		{
		// put back all keys in graph
		graph.omit = {}
		computeGraphData(graph)
		}
	else if(sliceindex<=card(graph.omit))
		{
		// put back key in graph	
		var index = getBinSlice(graph,sliceindex-1)
		var key = graph._keys1[index]
		delete(graph.omit[key])
		computeGraphData(graph)
		}
	}
else if((action==INVERT_BIN)&&(sliceindex==0))
	{
	var oldgraph = graphs[graphindex]
	var newgraph = new Graph(
		ptmove.x-10,ptmove.y-5,true,
		cloneArray(oldgraph.selection),
		oldgraph.ilabel1,oldgraph.hue,oldgraph.type)

	newgraph.w = oldgraph.w
	newgraph.h = oldgraph.h

	newgraph.iunit = oldgraph.iunit

	// invert omit set
	newgraph.omit = {}
	for(var i=0;i<oldgraph._keys1.length;i++)
		{	
		var key = oldgraph._keys1[i]	
		if(!(key in oldgraph.omit))
			newgraph.omit[key] = 1
		}	

	
	newgraph.ilabel2 = oldgraph.ilabel2

	graphs.push(newgraph)
	computeGraphData(newgraph)
	}
else if((action==PASTE_LABEL11)||(action==PASTE_BINLABEL11))
	{
	// paste axis1 to axis1
	if(graphindex!=graphindex2)
		{
		var ograph = graphs[graphindex]		// origin graph
		var dgraph = graphs[graphindex2]	// destination graph

		dgraph._colors1 = {}
		dgraph._hilites1 = {}
		dgraph._pales1 = {}
		var keys = []
		for(var i=0;i<ograph._keys1.length;i++)
			{
			var key = ograph._keys1[i]
			if((key in ograph.omit)!=(action==PASTE_BINLABEL11)) continue
			keys.push(key)
			dgraph._colors1[key] = ograph._colors1[key]	
			dgraph._hilites1[key] = ograph._hilites1[key]
			dgraph._pales1[key] = ograph._pales1[key]
			}
		dgraph.ilabel1 = ograph.ilabel1
		setAxis1(dgraph,keys)
		computeGraphData(dgraph)	
		}
	}
else if((action==PASTE_LABEL12)||(action==PASTE_BINLABEL12))
	{
	// paste axis1 to axis2
	var ograph = graphs[graphindex]		// origin graph
	var dgraph = graphs[graphindex2]	// destination graph

	dgraph._colors2 = {}
	dgraph._hilites2 = {}
	dgraph._pales2 = {}
	var keys = []
	for(var i=0;i<ograph._keys1.length;i++)
		{
		var key = ograph._keys1[i]
		if((key in ograph.omit)!=(action==PASTE_BINLABEL12)) continue
		keys.push(key)
		dgraph._colors2[key] = ograph._colors1[key]
		dgraph._hilites2[key] = ograph._hilites1[key]
		dgraph._pales2[key] = ograph._pales1[key]
		}
	dgraph.ilabel2 = ograph.ilabel1
	setAxis2(dgraph,keys)
	computeGraphData(dgraph)	
	}
else if(action==PASTE_LABEL21)
	{
	var ograph = graphs[graphindex]		// origin graph
	var dgraph = graphs[graphindex2]	// destination graph

	// paste axis2 to axis1
	dgraph._colors1 = {}
	dgraph._hilites1 = {}
	dgraph._pales1 = {}
	var keys = []
	for(var i=0;i<ograph._keys2.length;i++)
		{
		var key = ograph._keys2[i]
		keys.push(key)
		dgraph._colors1[key] = ograph._colors2[key]
		dgraph._hilites1[key] = ograph._hilites2[key]
		dgraph._pales1[key] = ograph._pales1[key]
		}
	dgraph.ilabel1 = ograph.ilabel2
	setAxis1(dgraph,keys)
	computeGraphData(dgraph)	
	}
else if(action==PASTE_LABEL22)
	{
	// paste axis2 to axis2
	var ograph = graphs[graphindex]		// origin graph
	var dgraph = graphs[graphindex2]	// destination graph

	dgraph._colors2 = {}	
	dgraph._hilites2 = {}
	dgraph._pales2 = {}
	var keys = []
	for(var i=0;i<ograph._keys2.length;i++)
		{
		var key = ograph._keys2[i]
		keys.push(key)
		dgraph._colors2[key] = ograph._colors2[key]
		dgraph._hilites2[key] = ograph._hilites2[key]
		dgraph._pales2[key] = ograph._pales2[key]
		}
	dgraph.ilabel2 = ograph.ilabel2
	setAxis2(dgraph,keys)
	computeGraphData(dgraph)	
	}
else if((action==SWAP_LABEL12)||(action==SWAP_LABEL21))
	{
	graph = graphs[graphindex]		// origin graph
	swapLabels(graph)
	computeGraphData(graph)
	}
else if(action==SWAP_LABELN)
	{
	graph = graphs[graphindex]
	swapLabeln(graph)
	computeGraphData(graph)	
	}
else if(action==SWAP_VALUEN)
	{
	graph = graphs[graphindex]
	swapValuen(graph)
	computeGraphData(graph)
	}
else if((action==SWAP_VALUE12)||(action==SWAP_VALUE21))	
	{
	graph = graphs[graphindex]
	var temp = graph.ivalue1
	graph.ivalue1 = graph.ivalue2
	graph.ivalue2 = temp
	computeGraphData(graph)
	}
else if(action==CREATE_GRAPH1)
	{
	var oldgraph = graphs[graphindex]
	var selection = cloneArray(oldgraph.selection)
	var newgraph = new Graph(ptmove.x-280,ptmove.y-10,true,selection,
		oldgraph.ilabel1,0,typeindex)
	newgraph.iunit = oldgraph.iunit
	graphs.push(newgraph)
	computeGraphData(newgraph)
	}
else if(action==CREATE_GRAPH2)
	{
	var oldgraph = graphs[graphindex]
	var selection = cloneArray(oldgraph.selection)
	var newgraph = new Graph(ptmove.x-280,ptmove.y-10,true,selection,
		oldgraph.ilabel2,0,typeindex)
	newgraph.iunit = oldgraph.iunit
	graphs.push(newgraph)
	computeGraphData(newgraph)
	}
else if(action==CREATE_VALUE)
	{
	createValue(labelindex)
	}
else if(action==CREATE_LABEL)
	{
	var graph = graphs[graphindex];
	if(graph.type==TYPE_DISTRIB)
		createLabelFromDistrib(graph);
	else if(graph.type==TYPE_REPART)
		createLabelFromRepart(graph);
	else if(graph.type==TYPE_DENDRO)
		createLabelFromDendro(graph);
	}
else if(action==CREATE_KGROUP)
	{
	createKgroup(graphs[graphindex])
	}
else if(action==CREATE_BOOLEAN)
	{
	graph = graphs[graphindex];
	createBoolean(graph,sliceindex);
	}
else if(action==REMOVE_TITLE)
	{
	removeTitle(graphs[graphindex],titleindex)
	}
else if(action==CHANGE_HUE)
	{
	graph = graphs[graphindex]	
	graph.hue = sliceindex*5/25/6
	computeGraphData(graph)
	}
else if(action==SELECT_SLICES)
	{
	graph = graphs[graphindex]
	selectSlices(graph)
	}
else if(action==CLOSE_GRAPH)
	{
	closeGraph(graphindex)
	}
else if(action==ADD_STICKER)
	{
	var index = inGraph(ptmove)
	if(index>=0)
		{
		var graph = graphs[index]
		var sticker = {}
		sticker.x = (ptmove.x-graph.x)/graph.w
		sticker.y = (ptmove.y-graph.y-graph.hbar)/(graph.h-graph.hbar)
		sticker.w = 100
		sticker.h = 20
		sticker.key = NIL
		sticker.ilabel = -1
		graph.stickers.push(sticker)
		}	
	}
else if(action==DRAG_STICKER)
	{
	graph = graphs[graphindex]
	var sticker = graph.stickers[stickerindex]
	sticker.x = (ptmove.x-graph.x)/graph.w
	sticker.y = (ptmove.y-graph.y-graph.hbar)/(graph.h-graph.hbar)
	}
else if(action==REMOVE_STICKER)
	{
	graph = graphs[graphindex]
	var stickers = []
	for(var i=0;i<graph.stickers.length;i++)
		if(i!=stickerindex)
			stickers.push(graph.stickers[i])
	graph.stickers = stickers
	}
else if(action==ASSIGN_STICKER)
	{
	graph = graphs[graphindex]
	var sticker = graph.stickers[stickerindex]
	sticker.key = graph._keys1[sliceindex]
	sticker.ilabel = graph.ilabel1

	var ctx = canvas.getContext("2d")
	var ms = ctx.measureText(sticker.key)
	sticker.w = ms.width+10
	}
else if(action==CHANGE_DISPLAY)
	{
	graph = graphs[graphindex];
	if(graph._display==labelindex)
		graph._display = -1;
	else
		graph._display = labelindex;
	}
else if(action==SORT_DATA)
	{
	sortData();
	}
else if((action==DRAG_LABEL)&&informula)
	{
	if(labelindex>=0)
		document.getElementById("fiform").value += "$C"+(labelindex+1);
	document.getElementById("fiform").focus();
	}
else if((action==DRAG_VALUE)&&informula)
	{
	if(valueindex>0)
		document.getElementById("fiform").value += "$N"+valueindex;
	document.getElementById("fiform").focus();
	}
else if(action==EXPORT_CHART)
	{
	if(inRect(ptmove,mywidth-120,myheight-40,20,20))
		exportCharts();
	else if(graphindex>=0)
		exportCharts();
	}
else if(action==SAVE_CONFIG)
	{
	if(inRect(ptmove,mywidth-140,myheight-40,20,20))
		saveStorageConfig();
	}

faction = 0;
action = 0;
graphindex = -1;
sliceindex = -1;
labelindex = -1;
typeindex = -1;

draw()
}

//***************************************************************************

function showTable()
{
if(graphindex<0) return;
var graph = graphs[graphindex];

var t = null;

if(graph.type==TYPE_CORR)
	t = getCorrTable(graph)
else if(graph.type==TYPE_SCATTER)
	t = getScatterTable(graph);
else if(graph.type==TYPE_KMEANS)
	t = getKmeansTable(graph);

if(!t)
	t = getDefaultTable(graph)

t = t || "";

var wname = (new Date()).getTime()+"";

if(window.inbrowser)
	{
	var w = window.open("",wname,"status=0");
	var d = w.document;
	d.open()
	d.write(t)
	d.close()
	}
else
	ipc.send("window", {title:wname,source:t});

}

//***************************************************************************

function getKmeansTable(graph)
{

var t = ""

t += "<html>";
t += "<style>\n";
t += "table	{ font-family:Courier; font-size:12px; }\n";
t += "table tr td { text-align: right; }\n";
t += "</style>\n";
t += "<body>";
t += "<table>\n";

var sum = 0;
for(var k=0;k<graph.nslot;k++)
	sum += graph._z.counts[k];

t += "<tr style='background-color:#CCCCCC;'>"
t += "<td>Cluster</td>";
t += "<td>Count</td>";
t += "<td>Pct</td>";
t += "</tr>\n"

for(var k=0;k<graph.nslot;k++)
	{	
	t += "<tr style='background-color:#EEEEEE;'>"
	t += "<td>"+(k+1)+"</td>";
	t += "<td>"+graph._z.counts[k]+"</td>";
	pct = Math.round(graph._z.counts[k]*100/sum);
	t += "<td>"+pct+"</td>";
	t += "</tr>\n";
	}

t += "</table>"
t += "</body>"
t += "</html>"

return t
}

//***************************************************************************

function getScatterTable(graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalue2<0) return;

var t = ""

t += "<html>";
t += "<style>\n";
t += "table	{ font-family:Courier; font-size:12px; }\n";
t += "table tr td { text-align: right; }\n";
t += "</style>\n";
t += "<body>";
t += "<table>\n";


t += "<tr style='background-color:#CCCCCC;'>"
t += "<td></td>";
if(graph.ilabel1>=0) t += "<td>"+labels[graph.ilabel1]+"</td>";
t += "<td>"+values[graph.ivalue1]+"</td>";
t += "<td>"+values[graph.ivalue2]+"</td>";
t += "</tr>"

var n = vrecords.length;
for(var j=0;j<n;j++)
	{
	t += "<tr style='background-color:#EEEEEE;'>"
	t += "<td>"+(j+1)+"</td>";
	if(graph.ilabel1>=0) t += "<td>"+lrecords[j][graph.ilabel1]+"</td>";
	t += "<td>"+vrecords[j][graph.ivalue1]+"</td>";
	t += "<td>"+vrecords[j][graph.ivalue2]+"</td>";
	t += "</tr>"
	}

t += "</table>"
t += "</body>"
t += "</html>"

return t

}

//***************************************************************************

function getCorrTable(graph)
{

var t = ""

t += "<html>";
t += "<style>\n";
t += "table	{\n";
t += "font-family:Courier;\n";
t += "font-size:12px;\n";	
t += "</style>\n";
t += "<body>";
t += "<table>\n";

var n = graph.ivalues.length;

t += "<tr style='background-color:#CCCCCC;'>"
t += "<td></td>"
for(var j=0;j<n;j++)
	t += "<td>"+values[graph.ivalues[j]]+"</td>"
t += "</tr>"

for(var j=0;j<n;j++)
	{
	t += "<tr style='background-color:#EEEEEE;'>"
	t += "<td>"+values[graph.ivalues[j]]+"</td>"
	for(var k=0;k<n;k++)
		t += "<td>"+((graph._z.corr[j][k]+"").replace(".",","))+"</td>"
	t += "</tr>"
	}

t += "</table>"
t += "</body>"
t += "</html>"

return t

}

//***************************************************************************

function getDefaultTable(graph)
{
	
var t = "";

if(graph.ilabel1<0)	
	{	
	// zero dimension
	}

else if(graph.ilabel2<0)
	{

	// one dimension
	t += "<html>";
	t += "<style>\n";
	t += "table	{\n";
	t += "font-family:Courier;\n";
	t += "font-size:12px;\n";	
	t += "</style>\n";
	t += "<body>";
	t += "<table>\n";

	for(var i=0;i<graph.selection.length;i+=2)
		t += "<tr><td colspan='3' align='center'>"+
			labels[graph.selection[i]]+" : "+
			graph.selection[i+1]+"</td></tr>"

	t += "<tr style='background-color:#CCCCCC;'><td>"+labels[graph.ilabel1]+"</td>"+
		"<td align='right'>N</td><td align='right'>%</td></tr>\n";

	var sum = 0;
    for(var j=0;j<graph._keys1.length;j++)
        {
        var key = graph._keys1[j]
        if(key in graph.omit) continue
		sum += graph._count[key];
        }

	if(sum==0) sum = 1;

	for(var j=0;j<graph._keys1.length;j++)
		{
        var key = graph._keys1[j]
        if(key in graph.omit) continue

		var pct = Math.round(graph._count[key]*1000/sum)/10;
		t += "<tr style='background-color:#EEEEEE;'><td>"+key+"</td><td align='right'>"+graph._count[key]+"</td>"+
			"<td align='right'>"+pct+"</td></tr>\n";
		}

	t += "<tr style='background-color:#CCCCCC;'><td>TOTAL</td><td align='right'>"+sum+"</td>"+
		"<td align='right'>100</td></tr>\n";
	t += "</table>";
	t += "</body>";
	t += "</html>";
	}
else	
	{
	// two dimensions

	t += "<html>";
	t += "<style>\n";
	t += "table	{\n";
	t += "font-family:Courier;\n";
	t += "font-size:12px;\n";	
	t += "</style>\n";
	t += "<body>";
	t += "<table>\n";

	var ncol = graph._keys2.length+1;
	for(var i=0;i<graph.selection.length;i+=2)
		t += "<tr><td colspan='"+ncol+"' align='center'>"+
			labels[graph.selection[i]]+" : "+
			graph.selection[i+1]+"</td></tr>"

	t += "<tr style='background-color:#CCCCCC;'>"
	t += "<td></td>"
	for(var j=0;j<graph._keys2.length;j++)
		t += "<td>"+graph._keys2[j]+"</td>"
	t += "</tr>"
	
    for(var i=0;i<graph._keys1.length;i++)
        {
        if(graph._keys1[i] in graph.omit) continue
		t += "<tr><td style='background-color:#CCCCCC;'>"+graph._keys1[i]+"</td>"
        for(var j=0;j<graph._keys2.length;j++)
            {
            var key = graph._keys1[i]+"\t"+graph._keys2[j]
            if(key in graph._count)
				t += "<td align='right'>"+graph._count[key]+"</td>"
			else
				t += "<td></td>"
			}
		t += "</tr>"
		}

	t += "</table>"
	t += "</body>"
	t += "</html>"
	}


return t;

}

//***************************************************************************

function showInspector()
{
if(graphindex<0) return;
var graph = graphs[graphindex];

var rid = [];
for(var i=0;i<lrecords.length;i++)
    if(recordMatch(i,graph)) 
		rid.push(i);

var wname = (new Date()).getTime()+"";

var w = window.open("",wname,"status=0")

var d = w.document;

var t = "";
t += "<html>\n";
t += "<head>\n";
t += "<style>\n";
t += "table	{\n";
t += "font-family:Courier;\n";
t += "font-size:12px;\n";	
t += "</style>\n";
t += "<script src='jquery.js' type='text/javascript'></script>\n";
t += "<script>\n";
t += "var ipage = 0;\n";
t += "var npage = "+rid.length+";\n";
t += "function set_prev_page() { if(ipage>1) { ipage-=1; show_page() }}\n";
t += "function set_next_page() { if(ipage<npage) { ipage+=1; show_page() }}\n";
t += "function set_content(t) { $('#content_"+wname+"').html(t); }\n";
t += "function set_title(t) { window.document.title = t; }\n";
t += "function init() {\n"
t += "$('#prev_"+wname+"').click(set_prev_page); \n";
t += "$('#next_"+wname+"').click(set_next_page); \n";
t += "set_next_page() }\n";
t += "</script>\n";
t += "</head>\n";
t += "<body onload='init()'>\n";
t += "<table width='100%'>\n";
t += "<tr>\n";
t += "<td width='50'><button id='prev_"+wname+"' style='width:100%;height:100%;'> &lt; </button></td>\n";
t += "<td id='content_"+wname+"'> content </td>\n";
t += "<td width='50'><button id='next_"+wname+"' style='width:100%;height:100%;'>  &gt; </button></td>\n";
t += "</tr>\n";
t += "</table>\n";
t += "</body>\n";
t += "</html>\n";


d.open();
d.write(t);
d.close();

w.show_page =  function () { showInspectorPage(w,rid) } ;
}

//***************************************************************************

function showInspectorPage(w,rid)
{
var t = "";
t += "<table width='100%'>";
t += "<tr><td colspan='2' align='center'>"+w.ipage+" / "+w.npage+"</td></tr>";
for(var i=0;i<labels.length;i++)
	t += "<tr style='background-color:#EEEEEE;'><td>"+labels[i]+"</td><td>"+lrecords[rid[w.ipage-1]][i]+"</td></tr>"
t += "</table>"

w.set_content(t);
}

//***************************************************************************

function show_formula_dialog(action)
{

var text = ""
text += "<table width='100%' cellspacing='10'>"
text += "<tr><td width='70'>Name :</td><td><input type='text' id='finom' placeholder='Enter name of new field'/></td><td width='15'>&nbsp;</td></tr>" 
text += "<tr><td width='70'>Formula :</td><td><input type='text' id='fiform' /></td><td width='15'><button id='fihelp'>?</button></td></tr>"
text += "</table>"
text += "<table width='100%' cellspacing='10'>"
text += "<tr><td width='50%' align='center'><button id='ficancel'>Cancel</button>"
text += "<td width='50%' align='center'><button id='fiok'>&nbsp; OK &nbsp;</button></td></tr>"
text += "</table>"

var div = document.createElement("div");
div.setAttribute("id","fi");
document.body.appendChild(div);

div.innerHTML = text;

div.style.position = "fixed";
div.style["z-index"] = 10;
div.style.top = "120px";
div.style.left = "110px";
div.style.right = "110px";
div.style["font-family"] = "sans-serif";
div.style["background-color"] = "#DEF7D6"
div.style.border = "1px solid #000000"
div.style["user-select"] = "none";
div.style["-webkit-user-select"] = "none";
div.style["-moz-user-select"] = "none";
div.style["-ms-user-select"] = "none";

document.getElementById("finom").style.width = "100%";
document.getElementById("fiform").style.width = "100%";

document.getElementById("ficancel").addEventListener("click",cancel,false);
document.getElementById("fiok").addEventListener("click",ok,false);
document.getElementById("fihelp").addEventListener("click",help,false);

document.getElementById("fi").addEventListener("mouseover", enter,false);
document.getElementById("fi").addEventListener("mouseout", leave, false);

informula = false;

	function enter() { informula = true; }
	function leave() { informula = false; }

	function cancel() {
		document.body.removeChild(div);
	}

	function ok() {
		var nam = document.getElementById("finom").value;
		var form = document.getElementById("fiform").value;
		if((nam!="")&&(form!=""))
			{
			add_formula(nam,form,action);
			document.body.removeChild(div);
			}
	}

	function help() {
		show_formula_help();
	}
}

//***************************************************************************

function show_formula_help()
{
var t = "";


t += "<html>";
t += "<head>";
t += "<title>Help</title>";
t += "<style>";;
t += "td	{ font-family:Courier; font-size:12px; }";
t += "</style>";
t += "</head>";
t += "<body>";
t += "<table border='0' width='100%'>";

t += "<tr><td colspan='1' style='background-color:#000000;color:#FFFFFF'>Categorical fields</td></tr>";

for(var i=0;i<labels.length;i++)
	addLine("$C"+(i+1)+"  :   "+labels[i]);

t += "<tr><td colspan='1' style='background-color:#000000;color:#FFFFFF'>Numerical fields</td></tr>";

for(var i=1;i<values.length;i++)
	addLine("$N"+i+"  :   "+values[i]);

t += "<tr><td colspan='1' style='background-color:#000000;color:#FFFFFF'>String functions</td></tr>";;

addLine("s.charAt(index)");
addLine("s.charCodeAt(index)");
addLine("s.concat(s1,...,sk)");
addLine("s.indexOf(t)");
addLine("s.lastIndexOf(t)");
addLine("s.length");
addLine("s.localeCompare(t)");
addLine("s.match(re)");
addLine("s.replace(re,t)");
addLine("s.search(re)");
addLine("s.slice(from,to)");
addLine("s.split(sep)");
addLine("s.substr(from,len)");
addLine("s.substring(from,to)");
addLine("s.toLocaleLowerCase()");
addLine("s.toLocaleUpperCase()");
addLine("s.toLowerCase()");
addLine("s.toUpperCase()");
addLine("s.trim()");
addLine("s.trimLeft()");
addLine("s.trimRight()");

t += "<tr><td colspan='1' style='background-color:#000000;color:#FFFFFF'>Numerical functions</td></tr>";

addLine("Math.E: 2.718281828459045");
addLine("Math.LN2: 0.6931471805599453");
addLine("Math.LN10: 2.302585092994046");
addLine("Math.LOG2E: 1.4426950408889634");
addLine("Math.LOG10E: 0.4342944819032518");
addLine("Math.PI: 3.141592653589793");
addLine("Math.SQRT1_2: 0.7071067811865476");
addLine("Math.SQRT2: 1.4142135623730951");
addLine("Math.abs(x)");
addLine("Math.acos(x)");
addLine("Math.asin(x)");
addLine("Math.atan(x)");
addLine("Math.atan2(y,x)");
addLine("Math.ceil(x)");
addLine("Math.cos(x)");
addLine("Math.exp(x)");
addLine("Math.floor(x)");
addLine("Math.log(x)");
addLine("Math.max(x1,...,xk)");
addLine("Math.min(x1,...,xk)");
addLine("Math.pow(x,y)");
addLine("Math.random()");
addLine("Math.round(x)");
addLine("Math.sin(x)");
addLine("Math.sqrt(x)");
addLine("Math.tan(x)");

t += "</table>";
t += "</body>";
t += "</html>";


if(window.inbrowser)
	{
	var w = window.open("about:blank","help","width=500;status=0");
	var d = w.document;
	d.title = "Help";
	d.open()
	d.write(t)
	d.close()
	}
else
	ipc.send("window", {title:"Javascript functions",source:t});


	function addLine(a)
	{
	t += "<tr><td>"+a+"</td></tr>";
	}

}

//***************************************************************************

function add_formula(nom,formula,action)
{
var f = [action==ADD_LABEL?1:2 , nom, formula];
formulas.push(f);

process_formula(f);
draw();
}

//***************************************************************************

function process_formula(f)
{
var action = f[0];
var nom = f[1];
var formula = f[2];


for(var i=labels.length;i>=1;i--)
	{
	while(formula.indexOf("$C"+i)>=0)
		formula = formula.replace("$C"+i,"C["+(i-1)+"]");
	while(formula.indexOf("$c"+i)>=0)
		formula = formula.replace("$c"+i,"C["+(i-1)+"]");
	}


for(var i=values.length-1;i>=1;i--)
	{
	while(formula.indexOf("$N"+i)>=0)
		formula = formula.replace("$N"+i,"N["+i+"]");
	while(formula.indexOf("$n"+i)>=0)
		formula = formula.replace("$n"+i,"N["+i+"]");
	}


var nerr = 0;

if(action==1)
	{
	var C;
	var N;
	var x;
	labels.push(nom);
	for(var i=0;i<lrecords.length;i++)
		{	
		C = lrecords[i];		
		N = vrecords[i];
		try  {	eval("x="+formula) ; x = ""+x; }
		catch(err)  { nerr+=1; x= ""}

		lrecords[i].push(x)
		}

	}
else if(action==2)
	{
	var C;
	var N;
	var x;
	values.push(nom);
	for(var i=0;i<vrecords.length;i++)
		{
		C = lrecords[i];
		N = vrecords[i];	
		try { eval("x="+formula); x = Number(x); }
		catch(err) {  nerr+=1; x = 0; }

		vrecords[i].push(x);
		}

	}

if(nerr>0)
	alert(nerr+" errors when applying the formula");
}

//***************************************************************************

function updateStatus()
{
var sindex = -1		// slice index
var gindex = -1		// graph index
overlabel1 = -1
overkey1 = null
overlabel2 = -1
overkey2 = null

message = ""

// check if over dock
gindex = inDock(ptmove)
if(gindex>=0)
	{	
	message = ""
	sep = ""
	var graph = dock[gindex]
	for(var i=0;i<graph.selection.length;i+=2)
		{
		message += sep + graph.selection[i+1]
		sep = " \u2022 "			
		}
	return		
	}

// over a function icon
var index = inType1(ptmove)
if(index>=0)
	{
	message = GHELP[index]
	return
	}

index = inType2(ptmove)
if(index>=0)
	{
	message = GHELP[index]
	return
	}

index = inLabel(ptmove);
if(index>=0)
	{
	message = labels[index];
	return;
	}

index = inValue(ptmove);
if(index>=0)
	{
	message = values[index];
	return;	
	}

if(inRect(ptmove,mywidth-20,myheight-40,20,20))
	{
	message = "Trash";
	return;
	}

if(inRect(ptmove,mywidth-40,myheight-40,20,20))
	{
	message = AHELP[DRAG_TABLE];
	return
	}

if(inRect(ptmove,mywidth-60,myheight-40,20,20))
	{
	message = AHELP[DRAG_INSPECTOR];
	return;
	}

if(inRect(ptmove,mywidth-80,myheight-40,20,20))	
	{
	message = AHELP[DRAG_ADD];
	return;
	}

if(inRect(ptmove,mywidth-100,myheight-40,20,20))
	{
	message = AHELP[DRAG_CLONE];
	return;
	}

if(inRect(ptmove,mywidth-120,myheight-40,20,20))
	{
	message = AHELP[DRAG_SORT];
	return;
	}

if(inRect(ptmove,mywidth-140,myheight-40,20,20))
	{
	message = AHELP[SAVE_CONFIG];
	return;
	}

var i = inFullGraph(ptmove);

if(i<0)
	{
	message = "";
	return;
	}
else if(inGraphTitle(ptmove,graphs[i]))
	{
	if(graphs[i].selection.length==0)
		message = "";
	else
		{
		var isel = Math.floor((ptmove.y-graphs[i].y)/16);
		message = labels[graphs[i].selection[2*isel]]+" = "+
			graphs[i].selection[2*isel+1];	
		}
	return;
	}
else if(graphs[i].type==TYPE_PALETTE)	
	{
	message = "";
	return;
	}
else if(overBarGraph(ptmove,graphs[i]))
	return;
else if(overLineGraph(ptmove,graphs[i]))
	return;
else if(overArcGraph(ptmove,graphs[i]))
	return;
else if(overFacGraph(ptmove,graphs[i]))
	return
else if(overSomGraph(ptmove,graphs[i]))
	return
else if(overAssocGraph(ptmove,graphs[i]))
	return
else if(overCorrGraph(ptmove,graphs[i]))
	return
else if(overScatterGraph(ptmove,graphs[i]))
	return
else if(overTernaryPlot(ptmove,graphs[i]))
	return;
else if(overDistribGraph(ptmove,graphs[i]))
	return;
else if(overRepartGraph(ptmove,graphs[i]))
	return;
else if(overBoxGraph(ptmove,graphs[i]))
	return;
else if(overDendroGraph(ptmove,graphs[i]))
	return;
else if(overGiniGraph(ptmove,graphs[i]))
	return;
else if(overEntropyGraph(ptmove,graphs[i]))
	return;
else if((index=inGraphBin(ptmove,graphs[i]))>0)
	{
	if(index<=card(graphs[i].omit))
		{
		index = getBinSlice(graphs[i],index-1) 
		var key = graphs[i]._keys1[index]
		message = key+" : "

		overlabel1 = graphs[i].ilabel1
		overkey1 = key
		}
	return;
	}

else if(graphs[i].type==TYPE_MULTI)
	{
	var graph = graphs[i];
	indices = inMultiSlice(ptmove,graph)
	if(indices instanceof Array)
		{
		message = ""
		sep = ""
		var key = ""
		var ksep = ""
		for(var k=0;k<graph.ilabels.length;k++)
			{
			message += sep + graph._keys[k][indices[k]]
			sep = " \u2022 "	
			key += ksep + graph._keys[k][indices[k]]
			ksep = "\t"
			}
		if(key in graph._count)
			{
			var pct = graph._count[key]*1000/graph.total
			pct = Math.floor(pct)/10
			message += " : "+graph._count[key]+" / "+graph.total+" ( "+pct+"% )"
			}
		var il = graph.ilabels.length-1
		overlabel1 = graph.ilabels[il]
		overkey1 = graph._keys[il][indices[il]];	
		return;
		}
	}
else if((index=inGraphSlice(ptmove,graphs[i]))>=0)
	{
	var graph = graphs[i];
	if(graph.type==TYPE_PIE)
		{
		var key = graph._keys1[index]
		overlabel1 = graph.ilabel1
		overkey1 = key
		var nkey = 0
		for(var i=0;i<graph._keys1.length;i++)
			if(!(graph._keys1[i] in graph.omit))
				nkey++
		if((graph.option%2)==0)
			{
			var value = graph._count[key]
			var pct = value*1000/graph.total
			var total = graph.total
			}
		else
			{
			var value = 1
			var pct = 1000/nkey
			var total = nkey
			}
		pct = Math.floor(pct)/10

		if(graph.iunit==0)
			var unit = ""
		else
			var unit = values[graph.iunit]

		value = Math.floor(value*1000)/1000.0;
		total = Math.floor(total*1000)/1000.0;

		message = key+" : "+value +" / "+total+" "+unit+" ("+pct+"%)"
		return;
		}	
	else if(graph.type==TYPE_THREE)	
		{
		// three dimension
		var index3 = index%graph._keys3.length
		index = Math.floor(index/graph._keys3.length)
		var index2 = index%graph._keys2.length
		var index1 = Math.floor(index/graph._keys2.length) 
		var key1 = graph._keys1[index1]
		var key2 = graph._keys2[index2]
		var key3 = graph._keys3[index3]
		var value = graph._count[key1+"\t"+key2+"\t"+key3]
		var pct = value*1000/graph.total
		pct = Math.floor(pct)/10	

		if(graph.iunit==0)
			var unit = ""
		else
			var unit = values[graph.iunit]

		value = Math.floor(value*1000)/1000.0;
		var total = Math.floor(graph.total*1000)/1000.0;
	
		message = key1+" \u2022 "+key2+" \u2022 "+key3 +
			" : "+value+" / "+total+" "+unit+" ("+pct+"%)"
		overlabel1 = graph.ilabel1
		overkey1 = key1
		overlabel2 = graph.ilabel2
		overkey2 = key2
		overlabel3 = graph.ilabel3
		overkey3 = key3
		return;
		}
	else if((graph.ilabel2<0)||(graph.type==TYPE_ARC))
		{
		// one dimension
		var key = graph._keys1[index]
		overlabel1 = graph.ilabel1
		overkey1 = key
		var value = graph._count[key]
		var pct = value*1000/graph.total
		pct = Math.floor(pct)/10

		if(graph.iunit==0)
			var unit = ""
		else
			var unit = values[graph.iunit]

		value = Math.floor(value*1000)/1000.0;
		var total = Math.floor(graph.total*1000)/1000.0;

		message = key+" : "+value +" / "+total+" "+unit+" ("+pct+"%)"		
		return;
		}
	else
		{
		// two dimensions
		var index2 = index%graph._keys2.length
		var index1 = Math.floor(index/graph._keys2.length) 
		var key1 = graph._keys1[index1]
		var key2 = graph._keys2[index2]
		var value = graph._count[key1+"\t"+key2]
		var pct = value*1000/graph.total
		pct = Math.floor(pct)/10	

		if(graph.iunit==0)
			var unit = ""
		else
			var unit = values[graph.iunit]

		value = Math.floor(value*1000)/1000.0;
		var total = Math.floor(graph.total*1000)/1000.0;

		message = key1+" \u2022 "+key2+" : "+value+" / "+total+" "+unit+" ("+pct+"%)"
		overlabel1 = graph.ilabel1
		overkey1 = key1
		overlabel2 = graph.ilabel2
		overkey2 = key2
		return
		}
	}
else
	{
	message = ""
	}

}

//***************************************************************************

function overBarGraph(pt,graph)
{
// only the case : two dimensions, option 2

if(graph.type!=TYPE_BAR) return false;
if(graph.ilabel2<0) return false;
if((graph.option%3)!=2) return false;

var hmax = graph.h-graph.hbar -20
var average = {};
var nkey = 0;
var ymax = 0;

for(var i=0;i<graph._keys1.length;i++)
	{
	var key1 = graph._keys1[i];
	if(key1 in graph.omit) continue
	average[key1] = 0;
	for(var j=0;j<graph._keys2.length;j++)
		{
		var key2 = graph._keys2[j];
		var key = key1+"\t"+key2;
		if(key in graph._count)
			average[key1] += graph._count[key];
		}
	average[key1] /= graph._nmod[key1];
	if(average[key1]>ymax) ymax = average[key1];
	nkey++;
	}

var ikey = 0
var dx = graph.w/nkey
for(var j=0;j<graph._keys1.length;j++)
	{
	var key1 = graph._keys1[j]
	if(key1 in graph.omit) continue

	var dy = average[key1]*hmax/ymax;
	var x = graph.x+ikey*graph.w/nkey;
	var y = graph.y+graph.h-20-dy;
	
	if(inRect(pt,x,y,dx,dy))
		{
		overlabel1 = graph.ilabel1;
		overkey1 = key1;
		message = key1+"  :  "+(Math.round(average[key1]*100)/100)+" / "+labels[graph.ilabel2];
		return true;
		}	
	ikey++
	}

return false;
}

//***************************************************************************

function overLineGraph(pt,graph)
{
if(graph.type!=TYPE_LINE) return false;
if(!inRect(pt,graph.x,graph.y,graph.w,graph.h)) return false;

//if(graph.ilabel2<0)
var nkey = 0;
for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue
	nkey ++
	}

var dx = graph.w/nkey;

var ikey = 0;
for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue

	var x = graph.x+ikey*graph.w/nkey;
	if(Math.abs(x+dx/2-pt.x)<dx/2)
		{
		if(graph.ilabel2>=0)
			message = key;
		else if(graph.iunit==0)
			message = key + " : "+(Math.round(graph._count[key]*100)/100);
		else
			message = key + " : "+(Math.round(graph._count[key]*100)/100)+" "+values[graph.iunit]
		return true;
		}
	ikey++
	}

return false;
}

//***************************************************************************

function overArcGraph(pt,graph)
{
if(graph.type!=TYPE_ARC) return false
if(!inRect(pt,graph.x,graph.y,graph.w,graph.h)) return false
if(typeof(graph._z.dist)=="undefined") return false

var index = inGraphSlice(pt,graph)
if(index>=0)
	{		
	message = graph._keys1[index]
	overlabel1 = graph.ilabel1
	overkey1 = graph._keys1[index]
	graph._z.clue = 0
	return true
	}

var max = graph._z.dist[graph._z.dist.length-1][0]

var dy = graph.h - graph.hbar - 20
var iy =Math.floor( max*(graph.y+graph.h-20-pt.y)/dy+0.5)

var pct = Math.floor(iy*10000/graph._keys2.length)/100
message = labels[graph.ilabel2]+" : "+iy+" / "+graph._keys2.length+"   ("+pct+"%)"

graph._z.clue = iy
return true
}

//***************************************************************************

function overSomGraph(pt,graph)
{
var index = inSomGraph(pt,graph)
if(index<0) return false

overlabel1 = graph.ilabel1
overkey1 = graph._keys1[index]
message = overkey1
return true
}

//***************************************************************************

function inSomGraph(pt,graph)
{
if(graph.type!=TYPE_SOM) return -1
if(typeof(graph._z.nw)=="undefined") return -1

var dmin = 10*10
var index = -1

var nw = graph._z.nw
var dx = (graph.w-20)/(nw-1)
var dy = (graph.h-graph.hbar-20)/(nw-1)
var k = -1
for(var i=0;i<graph._keys1.length;i++)
	{
	if(graph._keys1[i] in graph.omit) continue
	k += 1
	var x = graph.x + 10 + graph._z.xproj[k]*dx
	var y = graph.y + graph.hbar + 10 + graph._z.yproj[k]*dy	
	/*
	x += 5*Math.cos(Math.PI*2*i/nw)
	y += 5*Math.sin(Math.PI*2*i/nw)
	*/
	var d = (x-pt.x)*(x-pt.x)+(y-pt.y)*(y-pt.y)
	if(d<dmin)
		{
		dmin = d
		index = i
		}
	}

return index
}

//***************************************************************************

function inFacGraph(pt,graph)
{
if(graph.type!=TYPE_FAC) return false
if(typeof(graph._z.xrow)=="undefined") return false

var dx = graph.w/2
var dy = (graph.h - graph.hbar -20)/2

var xc = graph.x + dx
var yc = graph.y + graph.h - 20 - dy

var xmax = graph._z.xmax 
var ymax = graph._z.ymax

var mindist = 10*10
var minindex = -1
var mintype = 0

var xscale = (dx-5)/xmax
var yscale = (dy-5)/ymax
var scale = (xscale<yscale) ? xscale : yscale

// look for the closest point

var option = graph.option%4

if(option==0)
for(var i=0;i<graph._z.xcol.length;i++)
	{
	var x = xc + scale*graph._z.xcol[i]
	var y = yc - scale*graph._z.ycol[i]
	var dist = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y)
	if(dist<mindist)
		{
		mindist = dist
		minindex = i
		mintype = 2
		}
	}


if(option!=3)
for(var i=0;i<graph._z.xrow.length;i++)
	{		
	var x = xc + scale*graph._z.xrow[i]
	var y = yc - scale*graph._z.yrow[i]
	var dist = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y)
	if(dist<mindist)
		{
		mindist = dist
		minindex = i
		mintype = 1
		}
	}

if((option==1)||(option==3))
for(var i=0;i<graph._z.xcol.length;i++)
	{
	var x = xc + scale*graph._z.xcol[i]
	var y = yc - scale*graph._z.ycol[i]
	var dist = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y)
	if(dist<mindist)
		{
		mindist = dist
		minindex = i
		mintype = 2
		}
	}


if(mintype<0)
	return false
else
	return {type:mintype,index:minindex}
}

//***************************************************************************

function overFacGraph(pt,graph)
{

var x = inFacGraph(pt,graph)
if(!x)
	return false
else if(x.type==1)
	{
	var k = getKeyIndex(graph,x.index)
	message = graph._keys1[k]
	overlabel1 = graph.ilabel1
	overkey1 = graph._keys1[k] 
	return true
	}
else if(x.type==2)
	{
	message = graph._keys2[x.index]
	overlabel1 = graph.ilabel2
	overkey1 = graph._keys2[x.index]
	return true
	}

}

//***************************************************************************

function overRepartGraph(ptmove,graph)
{
if(graph.type!=TYPE_REPART) return false;
if(graph.ivalue1<0) return false;

var x1 = graph.x+20
var x2 = graph.x + graph.w - 20
var y1 = graph.y + graph.h - 60
var y2 = graph.y + 45


if(graph.ilabel1<0)
	{
	var xslot = (graph._z.xmax - graph._z.xmin)/graph.nslot;
	var xmin = graph._z.xmin;
	var xmax = graph._z.xmax;

	var ymax = 0;
	var total = 0
	for(var i=0;i<graph._z.histo.length;i++)
		{
		total += graph._z.histo[i]
		if(graph._z.histo[i]>ymax)
			ymax = graph._z.histo[i];
		}
	
	var x = (x2-x1)/graph.nslot;

	for(var i=0;i<graph._z.histo.length;i++)
		{
		if(graph._z.histo[i]==0) continue;

		var y = (y1-y2)*graph._z.histo[i]/ymax;

		if(inRect(ptmove,x1+i*x,y1-y,x,y))
			{
			var xa = xmin + i*(xmax-xmin)/graph._z.histo.length
			var xb = xmin + (i+1)*(xmax-xmin)/graph._z.histo.length
			pct = Math.round(graph._z.histo[i]*1000/total)/10
			message = "[ "+trunc(xa,4)+" , "+trunc(xb,4)+
				" ]  :  "+graph._z.histo[i]+" / "+ total+" ("+pct+"%)"
			return true;	
			}
		}
	}
else
	{
	// with label

	var xslot = (graph._z.xmax - graph._z.xmin)/graph.nslot;
	var xmin = graph._z.xmin;
	var xmax = graph._z.xmax;

	var ymax = 0
	var total = 0
	for(var i=0;i<graph._z.histo.length;i++)
		{
		total += graph._z.histo[i]
		if(graph._z.histo[i]>ymax)
			ymax = graph._z.histo[i];
		}
	
	for(var i=0;i<graph._z.histo.length;i++)
		{
		if(graph._z.histo[i]==0) continue;

		var x = (x2-x1)/graph.nslot;
		var y = y1;

		for(var k=0;k<graph._keys1.length;k++)
			{
			var key = graph._keys1[k];
			if(!(key in graph._z.histokey[i])) continue
			dy = (y1-y2)*graph._z.histokey[i][key]/ymax

			if(inRect(ptmove,x1+i*x,y-dy,x,dy))
				{		
				var xa = xmin + i*(xmax-xmin)/graph._z.histo.length
				var xb = xmin + (i+1)*(xmax-xmin)/graph._z.histo.length
				pct = Math.round(graph._z.histokey[i][key]*1000/total)/10
				message = "["+trunc(xa,4)+","+trunc(xb,4)+
					"] \u2022 "+key+"   :  "+graph._z.histokey[i][key]+
					" / "+ total+" ("+pct+"%)"
				return true;
				}
			y -= dy;
			}
		}
	}

return false;
}

//***************************************************************************

function overBoxGraph(ptmove,graph)
{
if(graph.type!=TYPE_BOX) return false;
if(graph.ilabel1<0) return false;
if(graph.ivalue1<0) return false;

var dv = (graph.h-graph.hbar-20)/graph._z.keys.length;

var j = Math.floor((ptmove.y-graph.y-graph.hbar-20)/dv);
if(j<0) j = 0;
if(j>=graph._z.keys.length) j = graph._z.keys.length-1;

var x = (ptmove.x -graph.x-20)*(graph._z.max-graph._z.min)/(graph.w-40)+graph._z.min;

overlabel1 = graph.ilabel1
overkey1 = graph._z.keys[j];
message = graph._z.keys[j]+"  "+trunc(x,4);

return true;
}

//***************************************************************************

function overDistribGraph(ptmove,graph)
{

if(graph.type!=TYPE_DISTRIB) return false;
if(graph.ivalue1<0) return false;
if(ptmove.x<20) return false;
if(ptmove.y>graph.y+graph.h-20) return false;

var xscale = (graph.w-20)/(graph._z.xmax-graph._z.xmin)

//var x = graph.x +20 + (graph._z.xx[i]-graph._z.xmin)*xscale

x = (ptmove.x-graph.x-20)/xscale + graph._z.xmin
y = Math.round((graph.y+graph.h-20-ptmove.y)*100/(graph.h-graph.hbar-20))

message = x+"   "+y+"%"

return true
}

//***************************************************************************

function overScatterGraph(ptmove,graph)
{
if(graph.type!=TYPE_SCATTER) return false;
if(graph.ivalue1<0) return false;
if(graph.ivalue2<0) return false;

var xmin = graph.ivalue1==0 ? 0 : graph._z.xmin;
var xmax = graph.ivalue1==0 ? lrecords.length : graph._z.xmax;

var ymin = graph.ivalue2==0 ? 0 : graph._z.ymin;
var ymax = graph.ivalue2==0 ? lrecords.length : graph._z.ymax;

var xscale = (graph.w-10)/(xmax-xmin)
var yscale = (graph.h-graph.hbar-10)/(ymax-ymin)

var x = (ptmove.x - graph.x -5)/xscale + xmin;
var y = (graph.y +graph.h - 5 - ptmove.y)/yscale + ymin;

message = trunc(x,4)+"   "+trunc(y,4)

return true;
}

//***************************************************************************

function overTernaryPlot(ptmove,graph)
{
if(graph.type!=TYPE_TERNARY) return false;

message = "";

if(!graph.ivalues) return true;
if(graph.ivalues.length<3) return true;


var dx = graph.w-20;
var dy = graph.h-graph.hbar-20;
if(dy<dx*Math.sqrt(3)/2)
	dx = Math.floor(dy*2/Math.sqrt(3));
else
	dy = Math.floor(dx*Math.sqrt(3)/2);

var b = (graph.y+graph.h-10-ptmove.y)/dy;
if(b<0) return true;
if(b>1) return true;

var a = (ptmove.x - graph.x-10)/dx-b/2;
if(a<0) return true;
if(a>1) return true;
if(a+b>1) return true;

var p1 = Math.round(a*100);
var p2 = Math.round(b*100);
var p3 = Math.round((1-a-b)*100);

message = values[graph.ivalues[0]]+" : "+p1+"%         "
		+values[graph.ivalues[1]]+" : " +p2+"%         "
		+values[graph.ivalues[2]]+" : " +p3+"%";

return true;

}

//***************************************************************************

function overGiniGraph(ptmove,graph)
{
if(graph.type!=TYPE_GINI) return false;

if(graph.ilabel2<0)
	{
	var gini = Math.round(graph._z.gini*1000)/1000;
	message = ""+gini;
	return true;
	}

var dy = (graph.h-graph.hbar)/graph._keys2.length;
var j = Math.floor((ptmove.y-graph.y-graph.hbar)/dy);
if(j<0) return false;
if(j>=graph._keys2.length) return false;


var key2 = graph._keys2[j];
var gini = Math.round(graph._z.gini[key2]*1000)/1000;

message = key2+" : "+gini;

overlabel1 = graph.ilabel2;
overkey1 = key2;

return true;
}

//***************************************************************************

function overEntropyGraph(ptmove,graph)
{
if(graph.type!=TYPE_ENTROPY) return false;

if(graph.ilabel2<0)
	{
	var entropy = Math.round(graph._z.entropy*1000)/1000;
	message = ""+entropy;
	return true;
	}

var dy = (graph.h-graph.hbar)/graph._keys2.length;
var j = Math.floor((ptmove.y-graph.y-graph.hbar)/dy);
if(j<0) return false;
if(j>=graph._keys2.length) return false;


var key2 = graph._keys2[j];
var entropy = Math.round(graph._z.entropy[key2]*1000)/1000;

message = key2+" : "+entropy;

overlabel1 = graph.ilabel2;
overkey1 = key2;

return true;
}

//***************************************************************************

function overDendroGraph(ptmove,graph)
{
if(graph.type!=TYPE_DENDRO) return false;

if(!graph._z) return false;
if(!graph._z.node) return false;

var y = graph.y + graph.h - 65;

var xmin = graph.x+10;
var xmax = graph.x + graph.w - 130;
if(!inRect(ptmove,xmin,y,xmax-xmin,25)) return false;

// find closest node
var found = null;
var dmin = Number.MAX_VALUE;
var total = 0;

visitNode(graph._z.node,function(node) {
	if(node.left) return;
	if(node.level!=graph._z.level) return;
	total += node.size;

	var d = (ptmove.x-node.x)*(ptmove.x-node.x);
	if(d<dmin)
		{
		dmin = d;
		found = node;
		}
	});


if(found!=null)
	{
	var pct = trunc(found.size*100/total,2);
	message = found.size+" / "+total+"  ("+pct+"%)";
	return true;
	}
else
	return false;
}

//***************************************************************************

function overCorrGraph(ptmove,graph)
{

if(graph.type!=TYPE_CORR) return false;
if(graph.ivalues.length<2) return false;

var x1 = graph.x+10;
var x2 = graph.x + graph.w - 115;
var dx = (x2-x1)
var xc = (x1+x2)/2
var y1 = graph.y + graph.hbar + 5;
var y2 = graph.y + graph.h -5
var yc = (y1+y2)/2
var dy = (y2-y1)

if(dx<dy)
	{
	dy = dx
	y1 = yc - dy/2
	y2 = yc + dy/2	
	}
else
	{
	dx = dy
	x1 = xc - dx/2
	x2 = dx + dx/2
	}

var n = graph._z.corr.length;
var d = dx/n;

var j = Math.floor((ptmove.x-x1)/d)
var k = Math.floor((ptmove.y-y1)/d)

if(j<0) return;
if(j>=graph.ivalues.length) return;
if(k<0) return;
if(k>=graph.ivalues.length) return;

message = values[graph.ivalues[k]]+" ~ "+values[graph.ivalues[j]]+" : "+
	trunc(graph._z.corr[j][k]+0.0000005,5);

return true
}

//***************************************************************************

function overAssocGraph(pt,graph)
{
if(graph.type!=TYPE_ASSOC) return false
if(!inRect(pt,graph.x,graph.y,graph.w,graph.h)) return false

graph._z.clue = -1

if(graph.ilabel2<0) return false
if(typeof(graph._z.commons)=="undefined") return false

dx = (graph.w-30)/(graph._keys1.length-card(graph.omit)+1+graph._keys2.length)
if(dx<3) dx = 3

var i = Math.floor((pt.y-graph.y-graph.hbar-30)/(dx*2))
if(i<0) return false
if(i>=graph._z.commons.length) return false

graph._z.clue = i

var y = graph.y + graph.hbar + 30 + dx*i*2

var common2 = graph._z.commons[i][0].split("\t")
var common1 = graph._z.commons[i][1]

var mindist = 15*15
var minindex = -1
var mintype = 0
	
for(var j=0;j<common2.length;j++)
	{
	var k = Number(common2[j])
	var x = graph.x + 30 + k*dx
	var dist = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y)
	if(dist<mindist)
		{
		mindist  = dist
		minindex = k
		mintype = 2
		}
	}

var k = -1
for(var jj=0;jj<graph._z.order1.length;jj++)
	{
	j = graph._z.order1[jj]
	var key1 = graph._keys1[j]
	if(key1 in graph.omit) continue
	k += 1
	if(!(j in common1)) continue
	var x = graph.x + 30 + graph._keys2.length*dx + dx + k*dx
	var dist = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y)
	if(dist<mindist)
		{
		mindist = dist
		minindex = j
		mintype = 1
		}
	}


if(mintype==1)
	{
	overlabel1 = graph.ilabel1
	overkey1 = graph._keys1[minindex]
	message = overkey1
	return true
	}
else if(mintype==2)
	{
	overlabel1 = graph.ilabel2
	overkey1 = graph._keys2[minindex]
	message = overkey1
	return true
	}
else
	{
	message = labels[graph.ilabel2]+" : "+
		(common2.length)+"   "+
		labels[graph.ilabel1]+" : "+
		card(common1)
	return true
	}
}

//***************************************************************************

function move(event)
{
ptmove = getxy(event)

if(action==0)
	{
	updateStatus();
	draw();
	return
	}

if(faction==DRAG_SIDEBAR)
	{
	var ni = Math.ceil(NBTYPE3/5)
	var yy = labels.length*20 + 20 + ni*20 + 20 + values.length*20 + 20

	barshift += ptclick.y - ptmove.y
	if(barshift<0)
		barshift =0
	else if(barshift>yy)
		barshift = yy

	ptclick = ptmove
	draw()
	}
else if(faction==DRAG_ADD)
	{
	if(inLabel(ptmove)>=0)
		action = ADD_LABEL;
	else if(inValue(ptmove)>=0)
		action = ADD_VALUE;
	else
		action = DRAG_ADD;
	}
else if(faction==DRAG_TABLE)
	{
	graphindex = -1;
	for(var i=0;i<graphs.length;i++)
		if(inRect(ptmove,graphs[i].x,graphs[i].y,graphs[i].w,graphs[i].h))
			graphindex = i;

	action = (graphindex<0) ? DRAG_TABLE : SHOW_TABLE;
	}
else if(faction==DRAG_INSPECTOR)
	{
	graphindex = -1;
	for(var i=0;i<graphs.length;i++)
		if(inRect(ptmove,graphs[i].x,graphs[i].y,graphs[i].w,graphs[i].h))
			graphindex = i;

	action = (graphindex<0) ? DRAG_INSPECTOR : SHOW_INSPECTOR;
	}
else if(faction==CLOSE_GRAPH)
	{
	var graph = graphs[graphindex]
	if(graph.closeable&&inRect(ptmove,graph.x+5,graph.y+5,10,10))
		action = CLOSE_GRAPH
	else
		action = KEEP_GRAPH
	}
else if(faction==DRAG_CLONE)
	{
	graphindex = -1;
	for(var i=0;i<graphs.length;i++)
		if(inRect(ptmove,graphs[i].x,graphs[i].y,graphs[i].w,graphs[i].h))
			graphindex = i;

	action = (graphindex<0) ? DRAG_CLONE : CLONE_GRAPH;
	}
else if(faction==DRAG_SORT)
	{
	action = DRAG_SORT;
	labelindex = -1;
	valueindex = -1;
	var index = inLabel(ptmove);
	if(index>=0)
		{
		action = SORT_DATA;
		labelindex = index;
		AHELP[action] = 'Sort data by "'+labels[index]+'"';
		}
	index = inValue(ptmove);
	if(index>0)
		{
		action = SORT_DATA;
		valueindex = index;
		AHELP[action] = 'Sort data by "'+values[index]+'"';
		}
	}
else if(faction==EXPORT_CHART)
	{
	graphindex = -1;
	for(var i=0;i<graphs.length;i++)
		if(inRect(ptmove,graphs[i].x,graphs[i].y,graphs[i].w,graphs[i].h))	
			if((graphs[i].type==TYPE_PIE)||(graphs[i].type==TYPE_BAR)||
				(graphs[i].type==TYPE_LINE))
				graphindex = i;
	}
else if(faction==DRAG_GRAPH)
	{
	if(inRect(ptmove,0,myheight-40,20+20*dock.length,20))
		{
		action = DOCK_GRAPH
		}
	else
		{
		action = DRAG_GRAPH
		var graph = graphs[graphindex]
		graph.x += ptmove.x - ptclick.x
		graph.y += ptmove.y - ptclick.y
		ptclick = ptmove
		}
	}
else if(faction==RESIZE_GRAPH)
	{
	var graph = graphs[graphindex]
	graph.w += ptmove.x - ptclick.x
	graph.h += ptmove.y - ptclick.y
	if(graph.w<150) graph.w = 150
	if(graph.h<150) graph.h = 150
	ptclick = ptmove
	}
else if(faction==DRAG_LABEL)
	{
	graphindex = -1
	var i = inFullGraph(ptmove);
	if(inDustbin(ptmove))
		{
		action = labelInUse(labelindex) ? DONT_REMOVE_VARIABLE:REMOVE_LABEL;
		}
	else if(inValue(ptmove)>=0)
		{
		action = labelInUse(labelindex) ? DONT_REMOVE_VARIABLE:CREATE_VALUE;
		}
	else if(i<0)
		{
		action = DRAG_LABEL;
		}
	else if(inGraphLabel1(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_LABEL1
		}
	else if(inGraphLabel2(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_LABEL2
		}	
	else if(inGraphLabel3(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_LABEL3
		}
	else if(inGraphLabeln(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_LABELN
		}	
	else if((graphs[i].type==TYPE_SCATTER)||(graphs[i].type==TYPE_ACP)||(graphs[i].type==TYPE_DISCRI))
		{
		graphindex = i;
		action = CHANGE_DISPLAY;		
		}
	else
		action = DRAG_LABEL;
	}
else if(faction==DRAG_VALUE)
	{
	graphindex = -1
	var i = inFullGraph(ptmove);
	if(inDustbin(ptmove)&&(valueindex>0))
		{
		action = valueInUse(valueindex)? DONT_REMOVE_VARIABLE:REMOVE_VALUE;
		}
	else if(i<0)
		action = DRAG_VALUE;
	else if(inGraphValue1(ptmove,graphs[i]))
		{
		graphindex =  i;
		action = SET_VALUE1	
		}
	else if(inGraphValue2(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_VALUE2
		}	
	else if(inGraphValuen(ptmove,graphs[i],true))
		{
		graphindex = i;
		action = SET_VALUEN
		}
	else if(graphs[i].type<NBTYPE1)
		{
		graphindex = i
		action = SET_GRAPH_UNIT
		}
	else
		action = DRAG_VALUE;
	}
else if(faction==DRAG_TYPE)
	{
	action = DRAG_TYPE	
	graphindex = -1
	var index = -1
	for(var i=0;i<graphs.length;i++)
		{
		var graph = graphs[i]
		if(inRect(ptmove,graph.x,graph.y,graph.w,graph.h))
			index = i
		}
	if(index>=0)
		{
		action = SET_TYPE
		graphindex = index
		}
	}
else if(faction==DRAG_LABEL1)
	{
	var graph = graphs[graphindex]	
	var i = inFullGraph(ptmove);
	if(inRect(ptmove,graph.x,graph.y+graph.hbar,graph.w,30))
		{
		action = DRAG_LABEL1
		}
	else if(i<0)
		{
		action = REMOVE_LABEL1;
		}
	else if(inGraphLabel1(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = PASTE_LABEL11
		}
	else if(inGraphLabel2(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = (graphindex==graphindex2) ? SWAP_LABEL12 : PASTE_LABEL12
		}	
	else if(inGraphTitle(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = CREATE_SET
		}
	else
		action = REMOVE_LABEL1;
	}
else if(faction==DRAG_LABEL2)
	{
	var graph = graphs[graphindex]
	var i = inFullGraph(ptmove);
	if(inRect(ptmove,graph.x,graph.y,30,graph.h))
		{
		action = DRAG_LABEL2
		}
	else if(i<0)
		{	
		action = REMOVE_LABEL2;
		}
	else if(inGraphLabel1(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = (graphindex==graphindex2) ? SWAP_LABEL21 : PASTE_LABEL21
		}
	else if(inGraphLabel2(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = PASTE_LABEL22
		}
	else 
		action = REMOVE_LABEL2;
	}
else if(faction==DRAG_LABEL3)
	{
	var graph =graphs[graphindex]
	if(inRect(ptmove,graph.x,graph.y+graph.h-30,graph.w,30))
		{
		action = DRAG_LABEL3
		}
	else
		{
		action = REMOVE_LABEL3
		}
	}
else if(faction==DRAG_LABELN)
	{
	action = REMOVE_LABELN
	var graph = graphs[graphindex]
	if(inGraphLabeln(ptmove,graph))
		if(destlabelindex<graph.ilabels.length)
			if(destlabelindex!=labelindex)
				action = SWAP_LABELN
	}
else if(faction==DRAG_VALUE1)
	{
	var graph = graphs[graphindex]
	if(inRect(ptmove,graph.x,graph.y+graph.hbar,graph.w,30))
		action = DRAG_VALUE1
	else if(inGraphValue2(ptmove,graph))
		action = SWAP_VALUE12
	else
		action = REMOVE_VALUE1
	}
else if(faction==DRAG_VALUE2)
	{
	var graph = graphs[graphindex]
	if(inRect(ptmove,graph.x,graph.y,30,graph.h))
		action = DRAG_VALUE2
	else if(inGraphValue1(ptmove,graph))
		action = SWAP_VALUE21
	else
		action = REMOVE_VALUE2
	}
else if(faction==DRAG_VALUEN)
	{
	var graph = graphs[graphindex]
	if(valueindex<graph.ivalues.length)
		{
		if(inGraphValuen(ptmove,graph,false))
			action = SWAP_VALUEN 
		else
			action = REMOVE_VALUEN;
		}
	}
else if(faction==DRAG_AXIS)
	{
	var graph = graphs[graphindex]	
	if((graph.type==TYPE_ACP)||(graph.type==TYPE_DISCRI)||(graph.type==TYPE_REGRES))
		action = (inValue(ptmove) >=0)  ? CREATE_PROJECTION : DRAG_AXIS
	else if((graph.type==TYPE_DISTRIB)||(graph.type==TYPE_REPART)||(graph.type==TYPE_DENDRO))
		action = (inLabel(ptmove) >=0) ?  CREATE_LABEL : DRAG_AXIS
	else if(graph.type==TYPE_KMEANS)
		action = (inLabel(ptmove) >=0) ? CREATE_KGROUP : DRAG_AXIS
	}
else if(faction==DRAG_SLICE)
	{
	var graph = graphs[graphindex]
	if(inGraphBin(ptmove,graph)>=0)
		action = DROP_SLICE
	else if((index=inGraphSticker(ptmove,graph))>=0)
		{
		action = ASSIGN_STICKER
		stickerindex = index
		}
	else if((index=inTitle(ptmove))>=0)
		{
		action = SET_SELECTION
		graphindex2 = index
		}
    else if(inValue(ptmove)>=0)
        action = CREATE_BOOLEAN;
	else
		action = DRAG_SLICE;
	}
else if(faction==DRAG_BIN)
	{
	var graph = graphs[graphindex]
	var i = inFullGraph(ptmove);
	if(inRect(ptmove,graph.x,graph.y,graph.w,graph.h))
		{
		var r1 = graph.w/2
		var r2 = (graph.h-graph.hbar-20)/2
		var xc = graph.x+r1
		var yc = graph.y+graph.hbar+r2
		var r = (r1<r2) ? r1 : r2
		var d = (ptmove.x-xc)*(ptmove.x-xc) + (ptmove.y-yc)*(ptmove.y-yc)
		if(d<r*r)
			action = REMOVE_BIN
		else
			action = DRAG_BIN
		}
	else if(i<0)
		action = DRAG_BIN;
	else if(inGraphTitle(ptmove,graphs[i])&&(sliceindex==0))
		{
		graphindex2 = i;
		action = CREATE_BINSET
		}
	else if(inGraphLabel1(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = PASTE_BINLABEL11
		}
	else if(inGraphLabel2(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = PASTE_BINLABEL12
		}
	else if(sliceindex==0)
		action = INVERT_BIN;
	else
		action = DRAG_BIN;
	}
else if(faction==DRAG_NSLOT)
	{
	var graph = graphs[graphindex];
	var oldnslot = graph.nslot
	graph.nslot = (ptmove.x-graph.x-20)*50/(graph.w-40);
	graph.nslot = Math.round(graph.nslot)
	if(graph.nslot<2)
		graph.nslot = 2;
	else if(graph.nslot>50)
		graph.nslot = 50

	if(graph.nslot!=oldnslot)
		computeGraphData(graph)
	}
else if(faction==CHANGE_NCLASS)
	{
	var graph = graphs[graphindex];
	var xmin = graph.x+10;
	var xmax = graph.x + graph.w - 120;
	graph._z.nc = Math.floor((ptmove.x-xmin)*50/(xmax-xmin));
	if(graph._z.nc<3) graph._z.nc = 2;
	if(graph._z.nc>50) graph._z.nc = 50;
	}
else if(faction==CHANGE_LAG)
	{
	var graph = graphs[graphindex];
	var xmin = graph.x+10;
	var xmax = graph.x + graph.w - 130;
	graph._z.lag = Math.round((ptmove.x-xmin)*10/(xmax-xmin));
	if(graph._z.lag<1) graph._z.lag = 1;
	if(graph._z.lag>10) graph._z.lag = 10;
	}
else if(faction==DRAG_ERROR)
	{
	var graph = graphs[graphindex]
	graph.error = (ptmove.x-graph.x-20)*10/(graph.w-40)	
	graph.error = Math.round(graph.error*10)/10.0;	
	if(graph.error<0.1)
		graph.error = 0.1
	if(graph.error>10)
		graph.error = 10
	}
else if(faction==DRAG_CURSOR)
	{
	var graph = graphs[graphindex]	
	var dx = graph.w-20
	var dy = graph.h - graph.hbar-20
	var xx = (ptmove.x-graph.x-20)
	var yy = (graph.y+graph.h-20-ptmove.y)
	if((xx>10)&&((xx/dx)>(yy/dy)))	
		{
		graph._z.cursor = xx/dx
		graph._z.cursor = 1.0/Math.ceil(1.0/graph._z.cursor-0.5)
		action = DRAG_CURSORH
		}
	else if((yy>10)&&((yy/dy)>(xx/dx)))
		{
		graph._z.cursor = -yy/dy
		graph._z.cursor = -1.0/Math.ceil(-1.0/graph._z.cursor-0.5)
		action = DRAG_CURSORV		
		}
	}
else if(faction==DRAG_CURSORH)
	{
	var graph = graphs[graphindex]	
	var dx = graph.w-20
	var xx = (ptmove.x-graph.x-20)
	if((xx>10)&&(xx<dx))
		{
		graph._z.cursor = xx/dx
		graph._z.cursor = 1.0/Math.ceil(1.0/graph._z.cursor-0.5)
		var delta = (graph._z.xmax-graph._z.xmin)*graph._z.cursor
		delta = Math.floor(delta*100)/100
		var nclas = Math.ceil(1.0/graph._z.cursor)
		message = nclas+" classes"
		}
	else
		{
		action = DRAG_CURSOR
		graph._z.cursor = 0
		message = ""
		}
	}
else if(faction==DRAG_CURSORV)
	{
	var graph = graphs[graphindex]	
	var dy = graph.h - graph.hbar-20
	var yy = (graph.y+graph.h-20-ptmove.y)
	if((yy>10)&&(yy<dy))
		{
		graph._z.cursor = -yy/dy
		graph._z.cursor = -1.0/Math.ceil(-1.0/graph._z.cursor-0.5)
		var delta = Math.floor(-10000*graph._z.cursor)/100
		var nclas = Math.ceil(-1.0/graph._z.cursor)
		message = nclas+" classes"
		}
	else
		{
		action = DRAG_CURSOR
		graph._z.cursor = 0
		message = ""
		}
	}
else if(faction==HSCROLL_GRAPH)
	{
	var graph = graphs[graphindex]
	if(ptmove.x<ptclick.x)
		{
		var incr = Math.floor((ptclick.x-ptmove.x)/50)
		if(incr>0)
			{
			graph.xshift += incr	
			if(graph.xshift>=labels.length)
				graph.xshift = labels.length-1
			ptclick = ptmove
			}
		}
	else
		{
		var incr = Math.floor((ptmove.x-ptclick.x)/50)
		if(incr>0)
			{
			graph.xshift -= incr
			if(graph.xshift<0)
				graph.xshift = 0
			ptclick = ptmove
			}
		}
	}
else if(faction==VSCROLL_GRAPH)
	{
	var graph = graphs[graphindex]
	if(ptmove.y<ptclick.y)
		{
		var incr = Math.floor((ptclick.y-ptmove.y)/10)
		if(incr>0)
			{
			graph.yshift += incr	
			if(graph.yshift>=vrecords.length)
				graph.yshift = vrecords.length-1
			ptclick = ptmove
			}
		}
	else
		{
		var incr = Math.floor((ptmove.y-ptclick.y)/10)
		if(incr>0)
			{
			graph.yshift -= incr
			if(graph.yshift<0)
				graph.yshift = 0
			ptclick = ptmove
			}
		}
	}
else if(faction==DRAG_TITLE)
	{
	var graph = graphs[graphindex]
	if(inRect(ptmove,graph.x,graph.y,graph.w,20*graph.selection.length/2))
		action = DRAG_TITLE
	else if((index=inTitle(ptmove))>=0)
		{
		action = PASTE_TITLE
		graphindex2 = index
		}
	else
		action = REMOVE_TITLE
	}
else if(faction==DRAG_HUE)
	{
	action = DRAG_HUE
	graphindex = -1
	for(var i=graphs.length-1;i>=0;i--)
		{
		var graph = graphs[i]
		if(graph.type==TYPE_PALETTE) continue
		if(inRect(ptmove,graph.x,graph.y,graph.w,graph.h))
			{
			action = CHANGE_HUE
			graphindex = i
			break
			}
		}
	}
else if(faction==SELECT_SLICES)
	{
	var graph = graphs[graphindex]
	if(graph.type==TYPE_BAR)
		{
		graph.contour[1] = ptmove.x
		}
	else if(graph.type==TYPE_FAC)
		{
		// add a point to the contouring path
		if(graph.ncontour<graph.contour.length-1)
			graph.contour[graph.ncontour++] = ptmove
		}
	}
else if(faction==DRAG_STICKER)
	{
	var index = inGraph(ptmove)
	if(index==graphindex)
		action = DRAG_STICKER
	else
		action = REMOVE_STICKER
	}
else if(faction==SCROLL_DESKTOP)
	{
	// move all the graphs
	for(var i=0;i<graphs.length;i++)
		{
		graphs[i].x += ptmove.x - ptclick.x
		graphs[i].y += ptmove.y - ptclick.y
		}	
	ptclick = ptmove
	}
else if(faction==SAVE_CONFIG)
	{
	if(inRect(ptmove,mywidth-140,myheight-40,20,20))
		action = SAVE_CONFIG;
	else
		action = 0;
	}

if(action!=0)
	{
	message = AHELP[action]
	}
else
	message = ""

draw()
}

//***************************************************************************

function drawVLabel(ctx,x,y,w,h,title)
{
ctx.save();
ctx.beginPath()
ctx.rect(x-1,y-1,w+2,h+2);
ctx.clip()

ctx.fillStyle = PINK
ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.moveTo(x,y)
ctx.lineTo(x+w,y)
ctx.lineTo(x+w,y+h-w/3)
ctx.lineTo(x+w-w/3,y+h)
ctx.lineTo(x+w/3,y+h)
ctx.lineTo(x,y+h-w/3)
ctx.lineTo(x,y)
ctx.fill()
ctx.stroke()

ctx.fillStyle = "#000000"
ctx.save()
ctx.translate(x+w,y+h)
ctx.rotate(-Math.PI/2)
ctx.fillText(title,h/2,-5)
ctx.restore()

ctx.restore();
}

//***************************************************************************

function pathValue(ctx,x,y,w,h,d)
{
ctx.beginPath()
ctx.moveTo(x,y+d)
ctx.lineTo(x+d,y)
ctx.lineTo(x+w-d,y)
ctx.lineTo(x+w,y+d)
ctx.lineTo(x+w,y+h-d)
ctx.lineTo(x+w-d,y+h)
ctx.lineTo(x+d,y+h)
ctx.lineTo(x,y+h-d)
ctx.lineTo(x,y+d)
}

//***************************************************************************

function drawVValue(ctx,x,y,w,h,title)
{
ctx.save();
ctx.beginPath()
ctx.rect(x-1,y-1,w+2,h+2);
ctx.clip()

ctx.fillStyle = BLUE
ctx.strokeStyle = "#000000"
pathValue(ctx,x,y,w,h,w/5)
ctx.fill()
ctx.stroke()

ctx.fillStyle = "#000000"
ctx.save()
ctx.translate(x+w,y+h)
ctx.rotate(-Math.PI/2)
ctx.fillText(title,h/2,-5)
ctx.restore()

ctx.restore();
}

//***************************************************************************

function drawHValue(ctx,x,y,w,h,title)
{
ctx.save();
ctx.beginPath()
ctx.rect(x-1,y-1,w+2,h+2);
ctx.clip()

ctx.fillStyle = BLUE
ctx.strokeStyle = "#000000"
pathValue(ctx,x,y,w,h,h/5)
ctx.fill()
ctx.stroke()

ctx.fillStyle = "#000000"
ctx.fillText(title,x+w/2,y+h-5)

ctx.restore();
}

//***************************************************************************

function drawHLabel(ctx,x,y,w,h,title)
{
ctx.save();
ctx.beginPath()
ctx.rect(x-1,y-1,w+2,h+2);
ctx.clip()

ctx.fillStyle = PINK
ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.moveTo(x,y+h/3)
ctx.lineTo(x+h/3,y)
ctx.lineTo(x+w,y)
ctx.lineTo(x+w,y+h)
ctx.lineTo(x+h/3,y+h)
ctx.lineTo(x,y+2*h/3)
ctx.lineTo(x,y+h/3)
ctx.fill()
ctx.stroke()

ctx.fillStyle = "#000000"
ctx.fillText(title,x+w/2,y+h-5)

ctx.restore();
}

//***************************************************************************

function drawRect(ctx,x,y,w,h)
{
ctx.fillRect(x,y,w,1)
ctx.fillRect(x,y+h,w,1)
ctx.fillRect(x,y,1,h)
ctx.fillRect(x+w,y,1,h+1)
}

//***************************************************************************

function drawCorner(ctx,x,y,h)
{
ctx.fillStyle = "#000000"
for(var i=h;i>=1;i--)
	ctx.fillRect(x+h-i,y+h-i,h,1)
}

//***************************************************************************

function drawLine(ctx,x1,y1,x2,y2,n)
{
for(var i=0;i<=n;i++)
	{
	var x = Math.floor(x1+(x2-x1)*i/n+0.5)
	var y = Math.floor(y1+(y2-y1)*i/n+0.5)
	ctx.fillRect(x,y,1,1)
	}
}

//***************************************************************************

function drawSticker(ctx,x,y,w,h,ilabel,name)
{
if((overlabel1==ilabel)&&(overkey1==name))
	{
	ctx.fillStyle = "#000000"
	ctx.strokeStyle = YELLOW
	ctx.fillRect(x,y,w,h)
	ctx.strokeRect(x,y,w,h)

	ctx.fillStyle = YELLOW
	ctx.fillText(name,x+w/2,y+15)
	}
else
	{
	ctx.fillStyle = YELLOW
	ctx.strokeStyle = "#000000"
	ctx.fillRect(x,y,w,h)
	ctx.strokeRect(x,y,w,h)

	ctx.fillStyle = "#000000"
	ctx.fillText(name,x+w/2,y+15)
	}
}

//***************************************************************************

function drawTopArrow(ctx,x,y)
{
ctx.beginPath()
ctx.moveTo(x-5,y+5)
ctx.lineTo(x,y-5)
ctx.lineTo(x+5,y+5)
ctx.lineTo(x-5,y+5)
ctx.fill()
ctx.stroke()
}

function drawRightArrow(ctx,x,y)
{	
ctx.beginPath()
ctx.moveTo(x-5,y-5)
ctx.lineTo(x+5,y)
ctx.lineTo(x-5,y+5)
ctx.lineTo(x-5,y-5)
ctx.fill()
ctx.stroke()
}

//***************************************************************************

function drawIcon(ctx,index,x,y)
{

if(index==TYPE_PIE)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	var xc = x+10
	var yc = y+10
	var r = 8
	ctx.moveTo(xc,yc)
	var k = 0
	var alpha = -Math.PI/2
	for(var i=0;i<5;i++)
		{
		ctx.arc(xc,yc,r,alpha+2*Math.PI*k/15,alpha+2*Math.PI*(k+5-i)/15,false)
		ctx.lineTo(xc,yc)
		k += (5-i)
		}
	ctx.stroke()

	drawCorner(ctx,x+20-4,y,4)
	}
else if(index==TYPE_BAR)
	{	
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle= "#000000"
	ctx.fillStyle = "#000000"
	drawRect(ctx,x+2,y+5,4,20-5)
	drawRect(ctx,x+6,y+8,4,20-8)
	drawRect(ctx,x+10,y+2,4,20-2)
	drawRect(ctx,x+14,y+10,4,20-10)

	drawCorner(ctx,x+20-4,y,4)
	}
else if(index==TYPE_LINE)
	{
	ctx.fillStyle = PINK;
	ctx.fillRect(x,y,20,20);
	
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(x+2,y+17);
	ctx.lineTo(x+5,y+12);
	ctx.lineTo(x+8,y+15);
	ctx.lineTo(x+11,y+11);	
	ctx.lineTo(x+14,y+18);
	ctx.lineTo(x+18,y+13);
	ctx.moveTo(x+2,y+11);
	ctx.lineTo(x+5,y+4);
	ctx.lineTo(x+8,y+10);
	ctx.lineTo(x+11,y+6);
	ctx.lineTo(x+14,y+11);
	ctx.lineTo(x+18,y+6);
	ctx.stroke();
	}
else if(index==TYPE_THREE)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	for(var i=5;i<=15;i+=10)
		for(var j=5;j<=15;j+=10)
			{
			ctx.moveTo(x+i,y+j)
			ctx.arc(x+i,y+j,4,0,Math.PI*2,true)
			}
	ctx.stroke()
	}
else if(index==TYPE_BAND)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#000000"
	ctx.fillStyle = "#000000"
	ctx.fillRect(x,y,20,1)
	ctx.fillRect(x,y+8,20,1)
	ctx.fillRect(x,y+13,20,1)
	ctx.fillRect(x,y+16,20,1)
	}
else if(index==TYPE_DOT)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#000000"
	ctx.fillStyle = "#000000"
	drawRect(ctx,x+4,y+4,2,2)
	drawRect(ctx,x+10,y+3,6,6)
	drawRect(ctx,x+10+3,y+10+3,4,4)	
	drawRect(ctx,x+2,y+10,8,8)

	drawCorner(ctx,x+20-4,y,4)
	}
else if(index==TYPE_TAG)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.fillStyle = "#000000"
	ctx.fillRect(x+2,y+6,6,1)	
	ctx.fillRect(x+10,y+5,7,2)
	ctx.fillRect(x+2,y+11,4,1)
	ctx.fillRect(x+8,y+9,4,3)
	ctx.fillRect(x+14,y+10,4,2)
	ctx.fillRect(x+2,y+14,3,3)
	ctx.fillRect(x+7,y+16,6,1)
	ctx.fillRect(x+15,y+15,3,2)
	}
else if(index==TYPE_ARC)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	ctx.arc(x+7,y+20,7,Math.PI,2*Math.PI,false)
	ctx.arc(x+15,y+20,5,Math.PI,2*Math.PI,false)
	ctx.stroke()

	ctx.fillStyle = "#000000"
	drawCorner(ctx,x+20-4,y,4)
	}
else if(index==TYPE_FAC)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.fillStyle = "#000000"
	ctx.fillRect(x,y+10,20,1)
	ctx.fillRect(x+10,y,1,20)
	ctx.fillRect(x+3,y+7,2,2)
	ctx.fillRect(x+5,y+3,2,2)
	ctx.fillRect(x+12,y+4,2,2)
	ctx.fillRect(x+6,y+13,2,2)
	ctx.fillRect(x+15,y+12,2,2)
	}
else if(index==TYPE_SOM)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	var xx = [[2,6,10,14,18],[3,6,11,14,18],[2,6,10,14,18],[2,6,9,14,17],[2,6,10,14,18]]
	var yy = [[2,2,3,2,2],[6,6,6,6,6],[10,10,10,10,10],[14,14,13,14,14],[18,17,18,19,18]]

	ctx.fillStyle = "#000000"
	for(var i=0;i<5;i++)
		for(var k=0;k<4;k++)
			drawLine(ctx,x+xx[i][k],y+yy[i][k],
				x+xx[i][k+1],y+yy[i][k+1],5)

	for(var i=0;i<5;i++)
		for(var k=0;k<4;k++)
			drawLine(ctx,x+xx[k][i],y+yy[k][i],
				x+xx[k+1][i],y+yy[k+1][i],5)
	}
/*
else if(index==TYPE_TABLE)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.fillStyle = "#000000"
	for(var i=3;i<18;i+=3)
		ctx.fillRect(x+4,y+i,13,1)
	for(var i=4;i<19;i+=4)
		ctx.fillRect(x+i,y+3,1,13) 
	}
*/
else if(index==TYPE_MULTI)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.fillStyle = "#000000"
	ctx.fillRect(x+8,y,1,20)
	ctx.fillRect(x+14,y,1,20)
	ctx.fillRect(x,y+8,8,1)
	ctx.fillRect(x,y+14,8,1)	
	ctx.fillRect(x+8,y+5,6,1)
	ctx.fillRect(x+8,y+10,6,1)
	ctx.fillRect(x+8,y+15,6,1)
	ctx.fillRect(x+14,y+4,6,1)
	ctx.fillRect(x+14,y+8,6,1)
	ctx.fillRect(x+14,y+12,6,1)
	ctx.fillRect(x+14,y+16,6,1)
	}
else if(index==TYPE_REPART)
	{	
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle= "#000000"
	ctx.fillStyle = "#000000"
	drawRect(ctx,x+2,y+5,4,20-5)
	drawRect(ctx,x+6,y+8,4,20-8)
	drawRect(ctx,x+10,y+2,4,20-2)
	drawRect(ctx,x+14,y+10,4,20-10)
	}
else if(index==TYPE_DISTRIB)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	ctx.moveTo(x,y+20)
	ctx.lineTo(x+2,y+19)
	ctx.lineTo(x+4,y+18)
	ctx.lineTo(x+6,y+16)
	ctx.lineTo(x+8,y+13)
	ctx.lineTo(x+10,y+10)
	ctx.lineTo(x+12,y+7)
	ctx.lineTo(x+14,y+3)
	ctx.lineTo(x+16,y+2)
	ctx.lineTo(x+18,y+1)
	ctx.lineTo(x+20,y)
	ctx.stroke()
	}
else if(index==TYPE_SCATTER)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)

	ctx.fillStyle = "#000000"
	var xy = [2,4, 5,1, 3,12, 8,5, 10,7, 17,15, 3,5, 2,8, 5,15,
			18,11, 11,17, 12,14, 18,3, 16,2, 12,11, 8,13, 16,7]
	for(var i=0;i<xy.length;i+=2)
		ctx.fillRect(x+xy[i],y+xy[i+1],2,2)
	}
else if(index==TYPE_LAG)
	{
	ctx.fillStyle = BLUE;
	ctx.fillRect(x,y,20,20);
	
	/*
	ctx.fillStyle = "#AAAAAA";
	ctx.fillRect(x+2,y+11,17,1);
	ctx.fillRect(x+2,y+17,17,1);
	ctx.fillRect(x+2,y+2,17,1);

	ctx.fillStyle = "#000000";
	ctx.fillRect(x+6,y+11,3,7);
	ctx.fillRect(x+5,y+12,5,1);
	ctx.fillRect(x+5,y+16,5,1);

	ctx.fillRect(x+13,y+2,3,10);
	ctx.fillRect(x+12,y+3,5,1);
	ctx.fillRect(x+12,y+10,5,1);
	*/
	ctx.fillStyle = "#000000";

	ctx.fillRect(x+3,y+16,2,2);
	ctx.fillRect(x+4,y+14,2,2);
	ctx.fillRect(x+6,y+13,2,2);
	ctx.fillRect(x+7,y+11,2,2);
	ctx.fillRect(x+8,y+12,2,2);
	ctx.fillRect(x+10,y+11,2,2);
	ctx.fillRect(x+11,y+9,2,2);
	ctx.fillRect(x+12,y+8,2,2);
	ctx.fillRect(x+14,y+9,2,2);
	ctx.fillRect(x+14,y+5,2,2);
	ctx.fillRect(x+15,y+6,2,2);
	ctx.fillRect(x+16,y+3,2,2);
	ctx.fillRect(x+17,y+2,2,2);
	}
else if(index==TYPE_CHI2)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)
	var font = ctx.font;	
	ctx.font = "18px helvetica";
	ctx.fillStyle = "#000000";
	ctx.fillText("\u03C7",x+10,y+13);
	ctx.font = font;
	/*
	ctx.lineWidth = 3
	ctx.strokeStyle = "#333333"
	ctx.beginPath()
	ctx.moveTo(x+2,y+3)
	ctx.lineTo(x+7,y+3)
	ctx.lineTo(x+20-7,y+20-2)
	ctx.lineTo(x+20-2,y+20-2)
	ctx.moveTo(x+2,y+20-2)
	ctx.lineTo(x+20-2,y+2)
	ctx.stroke()
	ctx.lineWidth = 1
	*/
	/*
	ctx.fillStyle = "#333333"
	ctx.textAlign = "center"
	ctx.strokeText("χ",x+10,y+14)
	*/
	}
else if(index==TYPE_GINI)
	{
	var font = ctx.font;
	ctx.fillStyle = PINK;
	ctx.fillRect(x,y,20,20);
	ctx.font = "18px times italic";
	ctx.fillStyle = "#000000";
	ctx.fillText("Ig",x+10,y+16);
	ctx.font = font;
	}
else if(index==TYPE_ENTROPY)
	{
	ctx.fillStyle = PINK;
	ctx.fillRect(x,y,20,20);

	ctx.fillStyle = "#9E9E9E";
	ctx.fillRect(x+8,y+3,4,2);
	ctx.fillRect(x+3,y+8,2,4);
	ctx.fillRect(x+15,y+8,2,4);
	ctx.fillRect(x+8,y+15,4,2);

	ctx.fillStyle = "#000000";	
	ctx.fillRect(x+3,y+3,3,3);
	ctx.fillRect(x+5,y+5,2,2);
	ctx.fillRect(x+6,y+6,2,2);

	ctx.fillRect(x+12,y+6,2,2);
	ctx.fillRect(x+13,y+5,2,2);
	ctx.fillRect(x+14,y+3,3,3);

	ctx.fillRect(x+9,y+2,2,16);
	ctx.fillRect(x+7,y+7,6,6);
	ctx.fillRect(x+2,y+9,16,2);

	ctx.fillRect(x+6,y+12,2,2);	
	ctx.fillRect(x+5,y+13,2,2);
	ctx.fillRect(x+3,y+14,3,3);

	ctx.fillRect(x+12,y+12,2,2);
	ctx.fillRect(x+13,y+13,2,2);
	ctx.fillRect(x+14,y+14,3,3);	

	
	}
else if(index==TYPE_MOMENTS)
	{
	var font = ctx.font;
	ctx.font = "18px helvetica";
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)
	ctx.fillStyle = "#000000";
	ctx.fillText("\u03A3",x+10,y+17);
	ctx.font = font;
	/*
	ctx.strokeStyle = "#333333"
	ctx.lineWidth = 3
	ctx.beginPath()
	ctx.moveTo(x+20-4,y+3)
	ctx.lineTo(x+4,y+3)
	ctx.lineTo(x+10,y+10)
	ctx.lineTo(x+4,y+20-2)
	ctx.lineTo(x+20-4,y+20-2)
	ctx.stroke()
	ctx.lineWidth = 1
	*/
	/*
	ctx.fillStyle = "#333333"
	ctx.textAlign = "center"
	ctx.strokeText("∑",x+12,y+15)
	*/
	}
else if(index==TYPE_BOX)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#000000";

	drawRect(ctx,x+5,y+4,3,0);
	drawRect(ctx,x+8,y+2,6,4);
	drawRect(ctx,x+14,y+4,3,0);

	drawRect(ctx,x+2,y+10,3,0);
	drawRect(ctx,x+5,y+8,8,4);
	drawRect(ctx,x+13,y+10,3,0);

	drawRect(ctx,x+7,y+16,3,0);
	drawRect(ctx,x+10,y+14,4,4);
	drawRect(ctx,x+14,y+16,3,0);
	}
else if(index==TYPE_PARA)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)
	ctx.strokeStyle = "#000000";
	ctx.beginPath();

	var xx = [5,3,8,4,6,4];
	ctx.moveTo(x+xx[0],y+2);
	for(var i=1;i<xx.length;i++)
		ctx.lineTo(x+xx[i],y+2+3*i);

	xx = [5,6,11,7,10,14];
	ctx.moveTo(x+xx[0],y+2);
	for(var i=1;i<xx.length;i++)
		ctx.lineTo(x+xx[i],y+2+3*i);

	xx = [8,10,15,13,14,8];
	ctx.moveTo(x+xx[0],y+2);
	for(var i=1;i<xx.length;i++)
		ctx.lineTo(x+xx[i],y+2+3*i);

	xx = [17,13,18,12,17,12];
	ctx.moveTo(x+xx[0],y+2);
	for(var i=1;i<xx.length;i++)
		ctx.lineTo(x+xx[i],y+2+3*i);

	ctx.stroke();
	}
else if(index==TYPE_ANOVA)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)
	var font = ctx.font;
	ctx.font = "18px helvetica";
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)
	ctx.fillStyle = "#000000";
	ctx.fillText("A",x+7,y+17);
	ctx.fillText("V",x+15,y+17);
	ctx.font = font;
	/*
	ctx.strokeStyle = "#000000";
	ctx.lineWidth =2
	ctx.beginPath()
	ctx.moveTo(x+4,y+20-4)
	ctx.lineTo(x+8,y+5)
	ctx.lineTo(x+12,y+20-4)
	ctx.lineTo(x+16,y+5)
	ctx.moveTo(x+6,y+20-8)
	ctx.lineTo(x+10,y+20-8)
	ctx.stroke()
	ctx.lineWidth = 1
	*/
	}
else if(index==TYPE_ASSOC)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)

	ctx.fillStyle = "#000000"
	for(i=3;i<20;i+=3)	
		{
		ctx.fillRect(x+2,y+i,2,1)	
		ctx.fillRect(x+5,y+i,2,1)
		ctx.fillRect(x+10,y+i,2,1)
		ctx.fillRect(x+13,y+i,2,1)
		ctx.fillRect(x+16,y+i,2,1)
		}
	}
else if(index==TYPE_ACP)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)

	ctx.fillStyle = "#000000"
	ctx.fillRect(x,y+10,20,1)
	ctx.fillRect(x+10,y,1,20)
	ctx.fillRect(x+3,y+7,2,2)
	ctx.fillRect(x+5,y+3,2,2)
	ctx.fillRect(x+12,y+4,2,2)
	ctx.fillRect(x+6,y+13,2,2)
	ctx.fillRect(x+15,y+12,2,2)

	drawCorner(ctx,x+20-4,y,4)
	}
else if(index==TYPE_KMEANS)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	ctx.moveTo(x+16,y)
	ctx.lineTo(x+10,y+10)
	ctx.lineTo(x,y+14)
	ctx.moveTo(x+10,y+10)
	ctx.lineTo(x+14,y+20)
	ctx.stroke()

	ctx.fillStyle = "#000000"
	ctx.fillRect(x+2,y+2,2,2)
	ctx.fillRect(x+6,y+3,2,2)
	ctx.fillRect(x+4,y+7,2,2)
	ctx.fillRect(x+17,y+7,2,2)
	ctx.fillRect(x+16,y+12,2,2)
	ctx.fillRect(x+5,y+14,2,2)
	ctx.fillRect(x+9,y+17,2,2)
	}
else if(index==TYPE_DISCRI)
	{	
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#444444";
	//ctx.strokeStyle = ctx.createPattern(checkboard,"repeat");
	ctx.beginPath()
	ctx.moveTo(x+6+4,y+8)
	ctx.arc(x+6,y+8,4,0,Math.PI*2,true)
	ctx.moveTo(x+12+6,y+8)
	ctx.arc(x+12,y+8,6,0,Math.PI*2,true)
	ctx.moveTo(x+10+5,y+14)
	ctx.arc(x+10,y+14,5,0,Math.PI*2,true)
	ctx.stroke()
	}
else if(index==TYPE_CORR)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#000000"
	ctx.fillStyle = "#000000"
	drawRect(ctx,x+4,y+4,2,2)
	drawRect(ctx,x+10,y+3,6,6)
	drawRect(ctx,x+10+3,y+10+3,4,4)	
	drawRect(ctx,x+2,y+10,8,8)
	}
else if(index==TYPE_HUEN)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	ctx.moveTo(x+3,y+5)
	ctx.lineTo(x+7,y+4)
	ctx.lineTo(x+11,y+8)
	ctx.moveTo(x+5,y+13)
	ctx.lineTo(x+6,y+17)
	ctx.lineTo(x+10,y+14)
	ctx.moveTo(x+8,y+10)
	ctx.lineTo(x+13,y+11)
	ctx.lineTo(x+18,y+7)
	ctx.stroke()
	}
else if(index==TYPE_DENDRO)
	{
	ctx.fillStyle = BLUE;
	ctx.fillRect(x,y,20,20);
	ctx.fillStyle = "#000000"
	ctx.fillRect(x+2,y+17,1,3)	
	ctx.fillRect(x+5,y+17,1,3)
	ctx.fillRect(x+8,y+13,1,7)
	ctx.fillRect(x+11,y+13,1,7)
	ctx.fillRect(x+14,y+15,1,5)
	ctx.fillRect(x+17,y+15,1,5)

	ctx.fillRect(x+2,y+16,4,1)
	ctx.fillRect(x+8,y+12,4,1)
	ctx.fillRect(x+14,y+14,4,1)

	ctx.fillRect(x+4,y+9,1,8)
	ctx.fillRect(x+10,y+9,1,4)

	ctx.fillRect(x+4,y+8,7,1)
	ctx.fillRect(x+7,y+5,1,3)
	ctx.fillRect(x+16,y+5,1,10)
	ctx.fillRect(x+7,y+4,10,1)
	ctx.fillRect(x+12,y+2,1,3)

	drawCorner(ctx,x+20-4,y,4)
	}
else if(index==TYPE_RADVIZ)
	{
	ctx.fillStyle = BLUE;
	ctx.fillRect(x,y,20,20)

	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	var xc = x+10
	var yc = y+10
	var r = 7
	ctx.arc(xc,yc,r,0,2*Math.PI,false);
	ctx.stroke()

	ctx.fillStyle = "#000000";
	ctx.fillRect(x+6,y+9,2,2);
	ctx.fillRect(x+8,y+5,2,2);
	ctx.fillRect(x+9,y+13,2,2);
	ctx.fillRect(x+12,y+12,2,2);
	ctx.fillRect(x+11,y+9,2,2);
	}
else if(index==TYPE_REGRES)
	{
	var font = ctx.font;
	ctx.font = "18px helvetica";
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)
	ctx.fillStyle = "#000000";
	ctx.fillText("R",x+10,y+17);
	ctx.font = font;
	}
else if(index==TYPE_TERNARY)
	{
	ctx.fillStyle = BLUE;
	ctx.fillRect(x,y,20,20);
	
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(x+2,y+18);
	ctx.lineTo(x+18,y+18);
	ctx.lineTo(x+10,y+2);
	ctx.lineTo(x+2,y+18);
	ctx.moveTo(x+10,y+18);
	ctx.lineTo(x+14,y+10);
	ctx.lineTo(x+6,y+10);
	ctx.lineTo(x+10,y+18);
	ctx.stroke();
	}
else if(index==TYPE_PALETTE)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)
	for(var k=0;k<25;k++)
		{
		var xx = x+3+(k%5)*3
		var yy = y+3+Math.floor(k/5)*3
		var zz = Math.floor(k*255/24)
		ctx.fillStyle = TINTS[k]
		ctx.fillRect(xx,yy,2,2)
		}
	}
else if(index<NBTYPE1)
	{
	ctx.fillStyle = PINK
	ctx.fillRect(x,y,20,20)
	}
else if(index>=NBTYPE1)
	{
	ctx.fillStyle = BLUE
	ctx.fillRect(x,y,20,20)
	}

ctx.strokeStyle = "#000000"
ctx.fillStyle = "#000000"
drawRect(ctx,x,y,20,20)
//ctx.strokeRect(x,y,20,20)
}

//***************************************************************************

function dumpArray(title,table)
{
debug("DUMP ARRAY "+title)
for(var i=0;i<table.length;i++)
	debug(i+" >"+table[i]+"< ")
}

function dumpSet(title,set)
{
debug("DUMP SET "+title)
for(var x in set)
	debug("  >"+x+"<  "+set[x])
}

//***************************************************************************

function drawGraphStickers(ctx,graph)
{
ctx.fillStyle = YELLOW
ctx.strokeStyle = "#000000"
for(var i=0;i<graph.stickers.length;i++)
	{
	var sticker = graph.stickers[i]
	var x = graph.x + graph.w*sticker.x - sticker.w/2
	var y = graph.y + graph.hbar + (graph.h-graph.hbar)*sticker.y - sticker.h/2
	drawSticker(ctx,x,y,sticker.w,sticker.h,sticker.ilabel,sticker.key)
	}
}

//***************************************************************************

function drawGraphOption(ctx,graph,modulo)
{
/*
ctx.save()
ctx.font = "9px Helvetica"
ctx.fillStyle = "#000000"
ctx.fillText(""+((graph.option%modulo)+1),graph.x+20,graph.y+11)
ctx.restore()
*/
for(var i=0;i<modulo;i++)
	{
	ctx.strokeStyle = (graph.option%modulo)==i ? "#000000" : GRAY
	ctx.beginPath()
	ctx.moveTo(graph.x+18+i*5,graph.y+4)
	ctx.lineTo(graph.x+18+i*5,graph.y+12)
	ctx.stroke()
	}
}

//***************************************************************************

function drawGraphBin(ctx,graph,option)
{
/*
ctx.strokeStyle = "#000000"
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(x,y,20,20)
ctx.strokeRect(x,y,20,20)
ctx.strokeRect(x+5,y+6,10,12)
ctx.beginPath()
ctx.moveTo(x+8,y+8)
ctx.lineTo(x+8,y+16)
ctx.moveTo(x+12,y+8)
ctx.lineTo(x+12,y+16)
ctx.moveTo(x+4,y+3)
ctx.lineTo(x+16,y+3)
ctx.stroke()
*/

var x = graph.x
var y = graph.y + graph.h -20

ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.moveTo(graph.x,graph.y+graph.h-20)
ctx.lineTo(graph.x+graph.w,graph.y+graph.h-20)
ctx.stroke()

// draw bin icon
ctx.strokeStyle = "#000000"
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(x,y,20,20)
ctx.beginPath()
for(var i=4;i<=16;i+=4)
	{
	ctx.moveTo(x+3,y+i)
	ctx.lineTo(x+20-3,y+i)
	}
ctx.stroke()
ctx.strokeRect(x,y,20,20)

x += 20

for(var i=0;i<graph._keys1.length;i++)
	{
	var key = graph._keys1[i]
	if(!(key in graph.omit)) continue
	if((graph.ilabel1==overlabel1)&&(key==overkey1))
		ctx.fillStyle = graph._hilites1[key]
	else
		ctx.fillStyle = graph._pales1[key]
	ctx.fillRect(x,y,20,20)
	ctx.strokeRect(x,y,20,20)
	x += 20
	}
}

//***************************************************************************

function drawDock(ctx,w,h)
{
// draw dock anchor
ctx.strokeStyle = "#000000"
ctx.fillStyle = "#FFFFFF"

var x = 0;
var y = h-40;
ctx.fillRect(x,y,20,20)
ctx.beginPath()
for(var i=4;i<=16;i+=4)
	{
	ctx.moveTo(x+3,y+i)
	ctx.lineTo(x+20-3,y+i)
	}
ctx.stroke()
ctx.strokeRect(x,y,20,20)

// draw dustbin icon
x = w-20;
y = h-40;
ctx.fillRect(x,y,20,20);
ctx.fillStyle = "#000000";
ctx.fillRect(x+4,y+5,1,13);
ctx.fillRect(x+7,y+7,1,9);
ctx.fillRect(x+10,y+7,1,9);
ctx.fillRect(x+13,y+7,1,9);
ctx.fillRect(x+16,y+5,1,13);
ctx.fillRect(x+3,y+4,15,1);
ctx.fillRect(x+4,y+17,13,1);
ctx.fillRect(x+7,y+3,7,1);
ctx.strokeRect(x,y,20,20);

// draw spreadsheet icon
x = w-40;
y = h-40;
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(x,y,20,20);
ctx.fillStyle = "#000000"
for(var i=3;i<18;i+=3)
	ctx.fillRect(x+4,y+i,13,1)
for(var i=4;i<19;i+=4)
	ctx.fillRect(x+i,y+3,1,13) 
ctx.strokeRect(x,y,20,20);

// draw inspector icon
x = w-60;
y = h-40;
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(x,y,20,20);
ctx.beginPath()
ctx.moveTo(x+12,y+7)
ctx.arc(x+7,y+7,5,0,2*Math.PI,true);
ctx.moveTo(x+10,y+10);
ctx.lineTo(x+18,y+18);
ctx.stroke();
ctx.strokeRect(x,y,20,20);

// draw add icon
x = w-80;
y = h-40;
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(x,y,20,20);
ctx.strokeStyle = "#000000";
ctx.beginPath()
ctx.moveTo(x+3,y+9);
ctx.lineTo(x+17,y+9);
ctx.moveTo(x+3,y+10);
ctx.lineTo(x+17,y+10);
ctx.moveTo(x+3,y+11);
ctx.lineTo(x+17,y+11);
ctx.moveTo(x+9,y+3);
ctx.lineTo(x+9,y+17);
ctx.moveTo(x+10,y+3);
ctx.lineTo(x+10,y+17);
ctx.moveTo(x+11,y+3);
ctx.lineTo(x+11,y+17);
ctx.stroke();
ctx.strokeRect(x,y,20,20);

// draw clone icon
x = w - 100;
y = h - 40;
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(x,y,20,20);
ctx.fillStyle = "#000000";
drawRect(ctx,x+3,y+3,9,9)
drawRect(ctx,x+7,y+7,9,9)
ctx.strokeStyle = "#000000";
ctx.strokeRect(x,y,20,20)

// draw sort icon
x = w-120;
y = h-40;
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(x,y,20,20);
ctx.fillStyle = "#000000";
ctx.fillRect(x+3,y+16,2,2);
ctx.fillRect(x+6,y+13,2,5);
ctx.fillRect(x+9,y+10,2,8);
ctx.fillRect(x+12,y+7,2,11);
ctx.fillRect(x+15,y+4,2,14);
ctx.strokeStyle = "#000000";
ctx.strokeRect(x,y,20,20)

/*
// draw highcharts icon
x = w -120;
y = h-40;
ctx.drawImage(gimg,x,y,20,20);
if(action==EXPORT_CHART)
	{
	ctx.save();
	ctx.globalAlpha = 0.5;
	ctx.fillStyle = "#000000";
	ctx.fillRect(x,y,20,20);
	ctx.restore();
	ctx.restore;
	}
ctx.strokeStyle = "#000000";
ctx.strokeRect(x,y,20,20)

// draw diskette icon
x = w -140;
y = h - 40;
ctx.fillStyle = action == SAVE_CONFIG ? "#000000" : "#FFFFFF";
ctx.fillRect(x,y,20,20);
ctx.fillStyle = action == SAVE_CONFIG ? "#FFFFFF" : "#000000";
ctx.fillRect(x+2,y+2,13,1);
ctx.fillRect(x+2,y+2,1,16);
ctx.fillRect(x+2,y+17,16,1);
ctx.fillRect(x+17,y+6,1,11);

ctx.fillRect(x+5,y+9,9,1);
ctx.fillRect(x+5,y+9,1,8);
ctx.fillRect(x+14,y+9,1,8);

ctx.fillRect(x+15,y+3,1,1);
ctx.fillRect(x+16,y+4,1,1);
ctx.fillRect(x+17,y+5,1,1);

ctx.fillRect(x+7,y+2,3,5);
ctx.fillRect(x+12,y+2,1,5);
ctx.fillRect(x+9,y+6,4,1);

ctx.strokeStyle = "#000000";
ctx.strokeRect(x,y,20,20)
*/

// draw dock 
for(var i=0;i<dock.length;i++)
	{
	var graph = dock[i]
	ctx.fillStyle = getColor(graph.hue,1,1)
	ctx.fillRect(20+20*i,y,20,20)
	ctx.strokeRect(20+20*i,y,20,20)		
	}

}

//***************************************************************************

function drawPieGraph(ctx,graph)
{
var angle1 = -Math.PI/2
var r1 = graph.w/2
var r2 = (graph.h-graph.hbar-20)/2
var xc = graph.x+r1
var yc = graph.y+graph.hbar+r2
var r = (r1<r2) ? r1 : r2

var option = graph.option%4;

var nkey = 0
for(var i=0;i<graph._keys1.length;i++)
	if(!(graph._keys1[i] in graph.omit))
		nkey ++

for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue

	if(option%2==0)
		var angle2 = angle1 + Math.PI*2*graph._count[key]/graph.total
	else
		var angle2 = angle1 + Math.PI*2/nkey

	if(hiliteMatch1(graph.ilabel1,key))
		ctx.fillStyle = graph._hilites1[key]
	else
		ctx.fillStyle = graph._colors1[key]		

	ctx.beginPath()
	ctx.moveTo(xc,yc)
	ctx.arc(xc,yc,r,angle1,angle2,false)
	ctx.fill()	
	angle1 = angle2
	}

if(option>1)
	{
	ctx.fillStyle = "#FFFFFF";
	ctx.beginPath();
	ctx.moveTo(xc+r/2,yc);
	ctx.arc(xc,yc,r/2,0,2*Math.PI,false);
	ctx.fill();
	}
	
drawGraphOption(ctx,graph,4);

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"
var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

drawGraphBin(ctx,graph)
}

//***************************************************************************

function drawBarGraph(ctx,graph)
{
ctx.strokeStyle = "#000000"
var hmax = graph.h-graph.hbar -20

if(graph.contour!=null)
	{
	ctx.fillStyle = GRAY
	if(graph.contour[0]<graph.contour[1])
		{
		var x = graph.contour[0]
		var dx = graph.contour[1] - graph.contour[0]
		}
	else
		{
		var x = graph.contour[1]
		var dx = graph.contour[0] - graph.contour[1]
		}
	ctx.fillRect(x,graph.y+graph.hbar,dx,graph.h-graph.hbar-20)
	}

if(graph.ilabel2<0)
	{
	// one dimension

	if(graph.contour!=null)
		{
		ctx.fillStyle = GRAY
		ctx.fillRect(graph.contour[0],graph.y+graph.hbar,
			graph.contour[1]-graph.contour[0],
			graph.h-graph.hbar-20)
		}

	var ymax = 0
	var nkey = 0
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue
		nkey ++
		if(graph._count[key]>ymax)
			ymax = graph._count[key]
		}
	if(ymax==0) ymax = 1

	var color = getColor(graph.hue,1,1)
	var hilite = getColor(graph.hue,1,0.5)

	var ikey = 0
	var dx = graph.w/nkey
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue

		if((graph.option%3)==1)
			var dy = hmax;
		else
			var dy = graph._count[key]*hmax/ymax;

		var x = graph.x+ikey*graph.w/nkey
		var y = graph.y+graph.h-20-dy

		if(hiliteMatch1(graph.ilabel1,key))
			ctx.fillStyle = hilite
		else
			ctx.fillStyle = color
		ctx.fillRect(x,y,dx,dy)
		ctx.fillStyle = "#000000"
		ctx.strokeRect(x,y,dx,dy)
		ikey++
		}
		
	}
else
	{
	// two dimensions
	if(graph.contour!=null)
		{
		ctx.fillStyle = GRAY
		ctx.fillRect(graph.contour[0],graph.y+graph.hbar,
			graph.contour[1]-graph.contour[0],
			graph.h-graph.hbar-20)
		}
	
	if((graph.option%3)==0)
		{
		// normal graph
	
		var nkey = 0;	
		var ymax = 0;
		for(var i=0;i<graph._keys1.length;i++)
			{	
			var key1 = graph._keys1[i];
			var sum = 0;
			if(key1 in graph.omit) continue;
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(key in graph._count)
					sum += graph._count[key];
				}
			if(sum>ymax) ymax = sum;
			nkey++;
			}

		var dx = graph.w/nkey;	
		var ikey = 0;
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
			if(key1 in graph.omit) continue;
			var x = graph.x+ikey*graph.w/nkey
			var y = graph.y + graph.h -20
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;	
				if(!(key in graph._count)) continue;
				var dy = graph._count[key]*hmax/ymax;
				y -= dy;
				if(hiliteMatch2(graph.ilabel1,key1,graph.ilabel2,key2))
					ctx.fillStyle = graph._hilites2[graph._keys2[j]]
				else
					ctx.fillStyle = graph._colors2[graph._keys2[j]]
				ctx.fillRect(x,y,dx,dy);
				ctx.fillStyle = "#000000"
				ctx.strokeRect(x,y,dx,dy)
				}
			ikey++;
			}
		}

	if((graph.option%3)==1)
		{
		// percentage graph
	
		var nkey = 0;
		var sum = {};
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
			if(key1 in graph.omit) continue;
			sum[key1] = 0;
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(key in graph._count)
					sum[key1] += graph._count[key];
				}
			nkey++;
			}

		var dx = graph.w/nkey;
		var ikey = 0;
		for(var i=0;i<graph._keys1.length;i++)
			{	
			var key1= graph._keys1[i];
			if(key1 in graph.omit) continue;
			var y = graph.y+graph.h -20;
			var x = graph.x+ikey*graph.w/nkey
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(!(key in graph._count)) continue;
				var dy = graph._count[key]*hmax/sum[key1];	
				y -= dy;
				if(hiliteMatch2(graph.ilabel1,key1,graph.ilabel2,key2))
					ctx.fillStyle = graph._hilites2[graph._keys2[j]]
				else
					ctx.fillStyle = graph._colors2[graph._keys2[j]]
				ctx.fillRect(x,y,dx,dy);
				ctx.fillStyle = "#000000"
				ctx.strokeRect(x,y,dx,dy)
				}
			ikey++;
			}
		}	

	if((graph.option%3)==2)
		{
		// average graph
		var ymax = 0
		var nkey = 0
		var average = {};
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
			if(key1 in graph.omit) continue
			average[key1] = 0;
			nkey ++;
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(key in graph._count)
					average[key1] += graph._count[key];
				}
			average[key1] /= graph._nmod[key1];
			if(average[key1]>ymax)
				ymax = average[key1];
			}

		var color = getColor(graph.hue,1,1)
		var hilite = getColor(graph.hue,1,0.5)

		var ikey = 0
		var dx = graph.w/nkey
		for(var j=0;j<graph._keys1.length;j++)
			{
			var key1 = graph._keys1[j]
			if(key1 in graph.omit) continue

			var dy = average[key1]*hmax/ymax;

			var x = graph.x+ikey*graph.w/nkey;
			var y = graph.y+graph.h-20-dy;
		
			if(hiliteMatch1(graph.ilabel1,key1))
				ctx.fillStyle = hilite;
			else
				ctx.fillStyle = color;
			ctx.fillRect(x,y,dx,dy);
			ctx.fillStyle = "#000000";
			ctx.strokeRect(x,y,dx,dy);
			ikey++
			}
		}
	}

drawGraphBin(ctx,graph)
drawGraphOption(ctx,graph,3)

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"
var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function drawLineGraph(ctx,graph)
{
ctx.strokeStyle = "#000000"
var hmax = graph.h-graph.hbar -20


if(graph.ilabel2<0)
	{
	// one dimension

	var ymax = 0
	var nkey = 0
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue
		nkey ++
		if(graph._count[key]>ymax)
			ymax = graph._count[key]
		}
	if(ymax==0) ymax = 1

	var color = getColor(graph.hue,1,1)
	var hilite = getColor(graph.hue,1,0.5)

	var ikey = 0
	var dx = graph.w/nkey

	ctx.strokeStyle = color;
	ctx.lineWidth = 3;
	ctx.beginPath();

	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue

		var x = graph.x+ikey*graph.w/nkey;
		var dy = graph._count[key]*hmax/ymax;
		var y = graph.y+graph.h-20-dy;

		if(ikey==0)
			ctx.moveTo(x+dx/2,y);
		else
			ctx.lineTo(x+dx/2,y);
		ikey++
		}
	ctx.stroke();
	ctx.lineWidth = 1;	
	}
else
	{
	// two dimensions

	var ymax = 0
	var nkey = 0;
	for(var i=0;i<graph._keys1.length;i++)
		{	
		if(graph._keys1[i] in graph.omit) continue
		nkey++;
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key = graph._keys1[i]+"\t"+graph._keys2[j]
			if(key in graph._count)
				if(graph._count[key]>ymax)
					ymax = graph._count[key];
			}
		}

	var dx = graph.w/nkey;

	var jhilite = -1;
	for(var j=0;j<graph._keys2.length;j++)
		{
		var key2 = graph._keys2[j];
		if(hiliteMatch1(graph.ilabel2,key2)) { jhilite = j; continue; }
		ctx.strokeStyle = graph._colors2[key2];
		ctx.lineWidth= 3;
		drawCurve(key2);
		}

	if(jhilite>=0)
		{
		var key2 = graph._keys2[jhilite];
		ctx.strokeStyle = graph._hilites2[key2];	
		ctx.lineWidth = 5;
		drawCurve(key2);	
		}
		
	ctx.lineWidth = 1;
	}

drawGraphBin(ctx,graph)
drawGraphOption(ctx,graph,3)

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"
var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)

function drawCurve(key2) {
	ctx.beginPath();

	var ikey = 0;
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i];
		if(key1 in graph.omit) continue;

		var key = key1+"\t"+key2;

		if((key in graph._count))
			var dy = graph._count[key]*hmax/ymax;
		else
			var dy = 0;

		var x = graph.x+ikey*graph.w/nkey;
		var y = graph.y+graph.h-20-dy;

		if(ikey==0)
			ctx.moveTo(x+dx/2,y);
		else
			ctx.lineTo(x+dx/2,y);	

		ikey++;
		}
	ctx.stroke();
	}
}

//***************************************************************************

function drawThreeGraph(ctx,graph)
{

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"

var hmax = graph.h-graph.hbar

if((graph.ilabel1>=0)&&(graph.ilabel2>=0)&&(graph.ilabel3>=0))
	{
	// three dimensions
	var dx = graph.w/graph._keys1.length
	var dy = (graph.h-graph.hbar)/graph._keys2.length
	var dr = (dx<dy ? dx : dy)/2

	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i]
		var x = graph.x + dx/2 +i*dx

		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j]
			var y = graph.y+graph.hbar + dy/2 + j*dy

			var  sum = 0

			for(var k=0;k<graph._keys3.length;k++)
				{
				var key3 = graph._keys3[k]
				var key = key1+"\t"+key2+"\t"+key3
				if(!(key in graph._count)) continue
				sum += graph._count[key]
				}
			
			if(sum==0) continue

			var angle1 = -Math.PI/2

			for(var k=0;k<graph._keys3.length;k++)
				{
				var key3 = graph._keys3[k]
				var key = key1+"\t"+key2+"\t"+key3
				if(!(key in graph._count)) continue

				var angle2 = angle1 + Math.PI*2*graph._count[key]/sum

				if(hiliteMatch1(graph.ilabel3,key3))
					ctx.fillStyle = graph._hilites1[key3]
				else
					ctx.fillStyle = graph._colors1[key3]		

				ctx.beginPath()
				ctx.moveTo(x,y)
				ctx.arc(x,y,dr,angle1,angle2,false)
				ctx.fill()
				angle1 = angle2
				}

			}
		}
	}

ctx.lineWidth = 1.0

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"
var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)

var title3 = getGraphLabel3(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin3,graph.y+graph.h-25,100,20,title3)
}

//***************************************************************************

function drawRadarGraph(ctx,graph)
{

if(graph.ilabel1<0)
	{
	}
else if(graph.ilabel2<0)
	{
	// one dimension
	var max = 0
	var nkey = 0
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue
		nkey ++
		if(graph._count[key]>max)
			max = graph._count[key]
		}
	if(max==0) max = 1
	if(nkey==0) return

	var r1 = graph.w/2
	var r2 = (graph.h-graph.hbar)/2
	var xc = graph.x+r1
	var yc = graph.y+graph.hbar+r2
	var r = (r1<r2) ? r1 : r2
	var alpha = -Math.PI/2

	ctx.strokeStyle = "#CCCCCC"
	ctx.beginPath()
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue

		ctx.moveTo(xc,yc)
		ctx.lineTo(xc+r*Math.cos(alpha),yc+r*Math.sin(alpha))
		alpha += 2*Math.PI/nkey		
		}
	ctx.stroke()

	ctx.fillStyle = getColor(graph.hue,1,1)
	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	var ikey = 0
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue

		var d = r*graph._count[key]/max
		if(ikey==0)
			{
			var d0 = d
			ctx.moveTo(xc+d*Math.cos(alpha),yc+d*Math.sin(alpha))
			}
		else
			ctx.lineTo(xc+d*Math.cos(alpha),yc+d*Math.sin(alpha))	
		alpha += 2*Math.PI/nkey
		ikey++
		}
	ctx.lineTo(xc+d0*Math.cos(alpha),yc+d0*Math.sin(alpha))	
	ctx.fill()
	ctx.stroke()		
	}

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"
var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

}

//***************************************************************************

function drawBandGraph(ctx,graph)
{
ctx.strokeStyle = "#000000"

if(graph.ilabel2<0)
	{
	// one dimension
	var x = graph.x
	var y = graph.y + graph.hbar
	var dy = graph.w - graph.hbar
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue
		var dx = graph._count[key]*graph.w/graph.total

		if(hiliteMatch1(graph.ilabel1,key))
			ctx.fillStyle = graph._hilites1[key]
		else
			ctx.fillStyle = graph._colors1[key]

		ctx.fillRect(x,y,dx,dy)
		ctx.strokeRect(x,y,dx,dy)
		x += dx
		}
	}
else
	{
	// two dimensions
	var xsum = []
	var sum = 0
	for(var i=0;i<graph._keys1.length;i++)
		{		
		var key1 = graph._keys1[i]
		if(key1 in graph.omit) continue
			
		xsum[key1] = 0	
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j]
			var key = key1 + "\t"+ key2
			if(!(key in graph._count)) continue
			xsum[key1] += graph._count[key]
			}

		sum += xsum[key1]
		}

	var x = graph.x
	var y = graph.y + graph.hbar
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i]
		if(key1 in graph.omit) continue

		var y = graph.y + graph.h
		var dx = graph.w*xsum[key1]/sum
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j]
			var key = key1+"\t"+key2
			if(!(key in graph._count)) continue
	
			var dy = (graph.h-graph.hbar)*graph._count[key]/xsum[key1]
			y -= dy

			if(hiliteMatch2(graph.ilabel1,key1,graph.ilabel2,key2))
				ctx.fillStyle = graph._hilites2[key2]
			else
				ctx.fillStyle = graph._colors2[key2]	

			ctx.fillRect(x,y,dx,dy)
			ctx.strokeRect(x,y,dx,dy)	
			}
		x += dx
		}
	}

ctx.strokeRect(graph.x,graph.y+graph.hbar,graph.w,graph.h-graph.hbar)

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"
var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)


var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function drawDotGraph(ctx,graph)
{

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"


if(graph.ilabel2<0)
	{	
	// one dimension
	var max = 0
	for(var key in graph._count)
		if(!(key in graph.omit))
			if(graph._count[key]>max)
				max = graph._count[key]
	if(max==0) max = 1

	var dy = graph.h - graph.hbar
	var y = graph.y + graph.hbar+ dy/2
	var dx = graph.w/graph._keys1.length
	for(var i=0;i<graph._keys1.length;i++)
		{	
		var key = graph._keys1[i]
		if(key in graph.omit) continue

		var value = graph._count[key]
		var ratio = Math.sqrt(value/max)
		var x = graph.x+ dx/2 +i*dx	
		if((graph.option%2)==0)
			{
			var xx = dx*ratio
			var yy = dy*ratio	

			if(hiliteMatch1(graph.ilabel1,key))
				ctx.fillStyle = getColor(graph.hue,1,0.5)
			else
				ctx.fillStyle = getColor(graph.hue,1,1)

			ctx.fillRect(x-xx/2,y-yy/2,xx,yy)
			}
		else
			{
			if(hiliteMatch1(graph.ilabel1,key))
				ctx.fillStyle = getGray(ratio)
			else	
				ctx.fillStyle = getColor(graph.hue,ratio,1)

			ctx.fillRect(x-dx/2,y-dy/2,dx,dy)
			}
		}

	drawGraphOption(ctx,graph,2)

	}
else
	{

	// two dimensions

	var max = 0

	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i];
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j];
			var key = key1+"\t"+key2;
			if(key in graph.omit) continue;
			if(!(key in graph._count)) continue;
			if(graph._count[key]>max)
				max = graph._count[key];
			}
		}

	// compute average profile
	if((graph.option%2)==1)
		{
		var gsum = 0
		var sum1 = {}		
		var sum2 = {}
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i]
			if(!(key1 in sum1)) sum1[key1] = 0
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j]
				if(!(key2 in sum2)) sum2[key2] = 0
				var key = key1+"\t"+key2	
				if(key in graph._count)
					{
					sum1[key1] += graph._count[key]
					sum2[key2] += graph._count[key]
					gsum += graph._count[key]
					}
				}
			}
		}

	var ikey = 0
	var dx = graph.w/graph._keys1.length
	var dy = (graph.h-graph.hbar)/graph._keys2.length
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i]
		var x = graph.x + dx/2 +i*dx

		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j]
			var y = graph.y+graph.hbar + dy/2 + j*dy

			var key = key1+"\t"+key2
			if(!(key in graph._count)) continue

			var value = graph._count[key]
			var ratio = Math.sqrt(value/max)

			var xx = dx*ratio
			var yy = dy*ratio

			if(hiliteMatch2(graph.ilabel1,key1,graph.ilabel2,key2))
				ctx.fillStyle = getColor(graph.hue,1,0.5)
			else
				ctx.fillStyle = getColor(graph.hue,1,1)

			ctx.fillRect(x-xx/2,y-yy/2,xx-1,yy-1)

			if((graph.option%2)==1)
				{
				// draw average
				ratio = Math.sqrt(sum1[key1]*sum2[key2]/gsum/max)
				xx = dx*ratio;
				yy = dy*ratio;		
				ctx.fillStyle ="#000000";
				drawRect(ctx,x-xx/2,y-yy/2,xx-1,yy-1)
				}
			}
		}

	drawGraphOption(ctx,graph,2)
	}


var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function processPartition(ctx,graph,index,x,w,y,h,oldkey,sep)
{
var mustdraw = index == graph.ilabels.length-1
var vertical = (index%2) == 0

/*
var sum = 0
for(var i=0;i<graph._keys[index].length;i++)
	{
	var newkey = oldkey + graph._keys[index][i]
	if(newkey in graph._count)
		sum += graph._count[newkey]
	}
*/

var xx = x
var yy = y
var hh = h
var ww = w
for(var i=0;i<graph._keys[index].length;i++)
	{
	var newkey = oldkey + sep + graph._keys[index][i]
	if(!(newkey in graph._count)) continue

	if(vertical)
		ww = graph._count[newkey]*w/graph._count[oldkey]
	else
		hh = graph._count[newkey]*h/graph._count[oldkey]
	
	if(mustdraw)
		{
		if(hiliteMatch1(graph.ilabels[index],graph._keys[index][i]))
			ctx.fillStyle = graph._hilites1[graph._keys[index][i]]
		else
			ctx.fillStyle = graph._colors1[graph._keys[index][i]]
		ctx.fillRect(xx,yy,ww-1,hh-1)	
		}
	else
		processPartition(ctx,graph,index+1,xx,ww,yy,hh,newkey,"\t")
	
	if(vertical)
		xx += ww
	else
		yy += hh
	}
	
}

//***************************************************************************

function drawChi2Graph(ctx,graph)
{
var title1 = getGraphLabel1(graph)
var title2 = getGraphLabel2(graph)

if(typeof(graph.error)=="undefined")
	graph.error = 5;

ctx.lineWidth = 1;

if((graph.ilabel1>=0)&&(graph.ilabel2>=0))
	{
	var sum1 = []
	for(var i=0;i<graph._keys1.length;i++)
		sum1.push(0)

	var sum2 = []
	for(var i=0;i<graph._keys2.length;i++)
		sum2.push(0)

	var sum = 0;

    for(var i=0;i<graph._keys1.length;i++)
        {
        for(var j=0;j<graph._keys2.length;j++)
            {
            var key = graph._keys1[i]+"\t"+graph._keys2[j]
            if(key in graph._count)
                {
				sum1[i] += graph._count[key];
				sum2[j] += graph._count[key];
				sum += graph._count[key];
                }
            }
        }

	if(sum==0) sum=1;

	var chi2 = 0;
	for(var i=0;i<graph._keys1.length;i++)
		{
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key = graph._keys1[i]+"\t"+graph._keys2[j]
			if(key in graph._count)
				{
				var e =  sum1[i]*sum2[j]/sum;
				chi2 +=	(graph._count[key]-e)*(graph._count[key]-e)/e;
				}
			}
		}

	
	ctx.fillStyle = "#000000";
	ctx.textAlign = "left";
	
	var y = graph.y+60;
	ctx.fillText(title1+" : "+graph._keys1.length+" classes",graph.x+40,y);

	y += 20;
	ctx.fillText(title2+" : "+graph._keys2.length+" classes",graph.x+40,y);

	nd = (graph._keys1.length-1)*(graph._keys2.length-1)
	y += 20;
	ctx.fillText("Degrees of freedom : "+nd,graph.x+40,y);

	y += 20;
	ctx.fillText("Computed distance (chi-square) : "+trunc(chi2,4),graph.x+40,y)
	
	var dcrit = critchi(graph.error/100.0,nd)		
	y += 20;
	ctx.fillText("Critical distance : "+trunc(dcrit,4),graph.x+40,y);

	if(chi2<dcrit)
		{
		y += 40;
		ctx.fillStyle = "#008800";
		ctx.fillText("Independance hypothesis is accepted", graph.x+40,y);
		}
	else
		{
		ctx.fillStyle = "#CC0000";
		y += 20;
		ctx.fillText("With error probability "+trunc(graph.error,1)+"%",graph.x+40,y);

		y += 20;
		ctx.fillText("independance hypothesis is rejected", graph.x+40,y);
		}
	
	y += 30;
	ctx.strokeStyle = "#000000";
	ctx.strokeRect(graph.x+20,y-3,graph.w-40,6)

	x = graph.x+20+(graph.w-40)*graph.error/10;
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(x-5,y-10,10,20)
	ctx.strokeRect(x-5,y-10,10,20)

	ctx.fillStyle = "#000000";
	ctx.beginPath()
	for(var i=0;i<=10;i++)
		{
		x = graph.x+20+(graph.w-40)*i/10;
		ctx.moveTo(x,y+15)
		ctx.lineTo(x,y+25)
		}
	ctx.stroke()

	x = graph.x+20+(graph.w-40)*5/10
	ctx.textAlign = "center"
	ctx.fillText("5%",x,y+40)
	}

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"

drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function drawGiniGraph(ctx,graph)
{

var align = ctx.textAlign;

if(graph.ilabel2<0)
	{
	// one dimension

	var total = 0;
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue
		total += graph._count[key];
		}
	
	graph._z.gini = 1;
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j];
		if(key in graph.omit) continue;
		graph._z.gini -= graph._count[key]*graph._count[key]/total/total;
		}

	var gini = Math.round(graph._z.gini*1000)/1000;

	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	ctx.fillText(""+gini,graph.x+graph.w/2,graph.y+graph.h/2-5);
	}
else
	{
	// two dimensions
	graph._z.gini = {};
	var total = {};	

	for(var j=0;j<graph._keys2.length;j++)
		{
		var key2 = graph._keys2[j];
		total[key2] = 0;
		graph._z.gini[key2] = 1;
		}
	
	for(var i=0;i<graph._keys1.length;i++)
		{	
		var key1 = graph._keys1[i];
		if(key1 in graph.omit) continue;
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j];
			var key = key1+"\t"+key2;
			if(key in graph._count)
				total[key2] += graph._count[key];
			}
		}

	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i];
		if(key1 in graph.omit) continue;
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j];
			var key = key1+"\t"+key2;
			if(key in graph._count)
				{
				var freq = graph._count[key]/total[key2];
				graph._z.gini[key2] -= freq*freq;
				}
			}
		}

	ctx.strokeStyle = "#000000";
	var dy = (graph.h-graph.hbar)/graph._keys2.length;
	var y = graph.y+graph.hbar;
	for(var j=0;j<graph._keys2.length;j++)
		{
		var key2 = graph._keys2[j];
		if(hiliteMatch2(graph.ilabel2,key2))
			ctx.fillStyle = getColor(graph.hue,1,0.5)
		else
			ctx.fillStyle = getColor(graph.hue,1,1)	
		var dx = (graph.w-30)*graph._z.gini[key2];
		ctx.fillRect(graph.x+30,y,dx,dy);
		ctx.strokeRect(graph.x+30,y,dx,dy);
		y += dy;
		}
	}

ctx.textAlign = align;
ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"
var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function drawEntropyGraph(ctx,graph)
{

var align = ctx.textAlign;

var log2 = Math.log(2);

if(graph.ilabel2<0)
	{
	// one dimension

	var total = 0;
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue
		total += graph._count[key];
		}
	
	graph._z.entropy = 0;
	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j];
		if(key in graph.omit) continue;
		var prob = graph._count[key]/total;
		graph._z.entropy -= prob*Math.log(prob)/log2;
		}

	var entropy = Math.round(graph._z.entropy*1000)/1000;

	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	ctx.fillText(""+entropy,graph.x+graph.w/2,graph.y+graph.h/2-5);
	}
else
	{
	// two dimensions	

	graph._z.entropy = {};
	var total = {};	

	for(var j=0;j<graph._keys2.length;j++)
		{
		var key2 = graph._keys2[j];
		total[key2] = 0;
		graph._z.entropy[key2] = 0;
		}
	
	for(var i=0;i<graph._keys1.length;i++)
		{	
		var key1 = graph._keys1[i];
		if(key1 in graph.omit) continue;
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j];
			var key = key1+"\t"+key2;
			if(key in graph._count)
				total[key2] += graph._count[key];
			}
		}

	var max = 0;
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i];
		if(key1 in graph.omit) continue;
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j];
			var key = key1+"\t"+key2;
			if(key in graph._count)
				{
				var prob = graph._count[key]/total[key2];
				graph._z.entropy[key2] -= prob*Math.log(prob)/log2;
				if(graph._z.entropy[key2]>max) max=graph._z.entropy[key2];
				}
			}
		}

	ctx.strokeStyle = "#000000";
	var dy = (graph.h-graph.hbar)/graph._keys2.length;
	var y = graph.y+graph.hbar;
	for(var j=0;j<graph._keys2.length;j++)
		{
		var key2 = graph._keys2[j];
		if(hiliteMatch2(graph.ilabel2,key2))
			ctx.fillStyle = getColor(graph.hue,1,0.5)
		else
			ctx.fillStyle = getColor(graph.hue,1,1)	
		var dx = (graph.w-30)*graph._z.entropy[key2]/max;
		ctx.fillRect(graph.x+30,y,dx,dy);
		ctx.strokeRect(graph.x+30,y,dx,dy);
		y += dy;
		}
	}

ctx.textAlign = align;
ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"
var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function drawMultiGraph(ctx,graph)
{

var x = graph.x
var w = graph.w - 110
var y = graph.y + graph.hbar
var h = graph.h - graph.hbar

if(graph.ilabels.length>0)
	processPartition(ctx,graph,0,x,w,y,h,"","")

for(var k=0;k<graph.ilabels.length;k++)
	{
	var title = labels[graph.ilabels[k]]
	drawHLabel(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}
drawHLabel(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ilabels.length,100,20,"")
}

//***************************************************************************

function drawArcGraph(ctx,graph)
{
var nkey = graph._keys1.length - card(graph.omit)	

if((typeof(graph._z.dist)!="undefined")&&(graph.ilabel2>=0)&&(nkey>1))
	{	
	if((graph.option%2)==0)
		drawArcGraph0(ctx,graph)
	else
		drawArcGraph1(ctx,graph)
	}

drawGraphOption(ctx,graph,2)

var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function drawArcGraph0(ctx,graph)
{
var nkey = graph._keys1.length - card(graph.omit)	
var dx = graph.w/nkey

// max distance
var maxdist = graph._z.dist[graph._z.dist.length-1][0]

if(typeof(graph._z.clue)!="undefined")
	{
	// vertical info following mouse position
	ctx.strokeStyle = GRAY
	ctx.lineWidth = 1.0
	var dy = (graph.h - graph.hbar -20) /maxdist
	var y = graph.y + graph.h - 20 -dy*graph._z.clue 
	ctx.beginPath()
	ctx.moveTo(graph.x,y)
	ctx.lineTo(graph.x+graph.w,y)
	ctx.stroke()
	}

// show only the most important links
var istart = graph._z.dist.length-2*nkey
if(istart<0) istart = 0

for(var i=istart;i<graph._z.dist.length;i++)
	{		
	var dist = graph._z.dist[i][0]
	var ikeya = graph._z.dist[i][1]
	var ikeyb = graph._z.dist[i][2]
	var keya = graph._z.dist[i][3]
	var keyb = graph._z.dist[i][4]


	var weight = Math.floor(5*dist/maxdist)/5
	var weight = dist/maxdist
	if(weight==0) continue

	if(hiliteMatch1(graph.ilabel1,keya)||hiliteMatch1(graph.ilabel1,keyb))
		{
		ctx.lineWidth = 3	
		ctx.strokeStyle = getGray(weight*weight)
		}
	else
		{
		ctx.lineWidth = 3
		ctx.strokeStyle = getColor(graph.hue,weight*weight,1)
		}

	var xa = graph.x + ikeya*dx + dx/2
	var xb = graph.x + ikeyb*dx + dx/2
	var rx = (xb-xa)/2
	var ry = (graph.h -graph.hbar -20	)*weight
	var xc = (xa+xb)/2
	var yc = graph.y + graph.h -20
	ctx.beginPath()
	for(var k=0;k<=50;k++)
		{
		var a = Math.PI*k/50.0
		var x = xc + rx*Math.cos(a)	
		var y = yc - ry*Math.sin(a)
		if(k==0)
			ctx.moveTo(x,y)
		else
			ctx.lineTo(x,y)
		}
	ctx.stroke()
	}

ctx.lineWidth = 1.0

// draw hilite
ctx.fillStyle = "#000000"
var x = -dx
for(var i=0;i<graph._keys1.length;i++)
	{
	var key1 = graph._keys1[i]
	if(key1 in graph.omit) continue
	x += dx
	if(hiliteMatch1(graph.ilabel1,key1))
		ctx.fillRect(graph.x+x,graph.y+graph.h-20,dx,20)
	}

// draw horizontal axis
ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.moveTo(graph.x,graph.y+graph.h-20)
ctx.lineTo(graph.x+graph.w,graph.y+graph.h-20)
var x = 0
while(x<graph.w)
	{
	ctx.moveTo(graph.x+x,graph.y+graph.h-20)
	ctx.lineTo(graph.x+x,graph.y+graph.h)		
	x += dx
	}	
ctx.stroke()

}

//***************************************************************************

function drawArcGraph1(ctx,graph)
{
var nkey = graph._keys1.length - card(graph.omit)	
var dx = graph.w
var dy = graph.h - graph.hbar
var r = (dx<dy) ? dx/2 : dy/2
r -= 10

var xc = graph.x + dx/2
var yc = graph.y + graph.h - dy/2

ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.arc(xc,yc,r,0,2*Math.PI,true)
ctx.stroke()

// show only the most important links
var istart = graph._z.dist.length-2*nkey
if(istart<0) istart = 0

// max distance
var maxdist = graph._z.dist[graph._z.dist.length-1][0]

for(var i=istart;i<graph._z.dist.length;i++)
	{		
	var dist = graph._z.dist[i][0]
	var ikeya = graph._z.dist[i][1]
	var ikeyb = graph._z.dist[i][2]
	var keya = graph._z.dist[i][3]
	var keyb = graph._z.dist[i][4]


	var weight = Math.floor(5*dist/maxdist)/5
	var weight = dist/maxdist
	if(weight==0) continue

	if(hiliteMatch1(graph.ilabel1,keya)||hiliteMatch1(graph.ilabel1,keyb))
		{
		ctx.lineWidth = 3	
		ctx.strokeStyle = getGray(weight*weight)
		}
	else
		{
		ctx.lineWidth = 3
		ctx.strokeStyle = getColor(graph.hue,weight*weight,1)
		}

	var a = Math.PI/2-2*Math.PI*ikeya/nkey
	var xa = xc + r*Math.cos(a)
	var ya = yc - r*Math.sin(a)

	var b = Math.PI/2-2*Math.PI*ikeyb/nkey
	var xb = xc + r*Math.cos(b)
	var yb = yc - r*Math.sin(b)

	ctx.beginPath()
	ctx.moveTo(xa,ya)
	ctx.quadraticCurveTo(xc,yc,xb,yb)
	ctx.stroke()
	}

ctx.lineWidth = 1.0


var ikey = -1
for(var i=0;i<graph._keys1.length;i++)
	{
	if(graph._keys1[i] in graph.omit) continue
	ikey += 1

	var a = Math.PI/2-2*Math.PI*i/nkey
	var xa = xc + r*Math.cos(a)
	var ya = yc - r*Math.sin(a)

	if(hiliteMatch1(graph.ilabel1,graph._keys1[i]))		
		{
		ctx.fillStyle = "#000000"
		ctx.fillRect(xa-4,ya-4,8,8)
		}
	else
		{
		ctx.fillStyle = GRAY
		ctx.fillRect(xa-2,ya-2,4,4)
		}
	}

}

//***************************************************************************

function drawFacGraph(ctx,graph)
{

var dx = graph.w/2
var dy = (graph.h - graph.hbar -20)/2

var xc = graph.x + dx
var yc = graph.y + graph.h -20 - dy

ctx.fillStyle = GRAY
ctx.fillRect(graph.x,yc,2*dx,1)
ctx.fillRect(xc,graph.y+graph.hbar,1,2*dy)

if(typeof(graph._z.xrow)!="undefined")
	{
	var xmax = graph._z.xmax
	var ymax = graph._z.ymax

	var xscale = (dx-5)/xmax
	var yscale = (dy-5)/ymax
	var scale = (xscale<yscale) ? xscale : yscale

	var overtype = 0
	var overk = -1

	var option = graph.option%4
	if(option==0)
		{
		ctx.fillStyle = "#FF0000"
		for(var i=0;i<graph._z.xcol.length;i++)
			{
			var key2 = graph._keys2[i]	
			if(hiliteMatch1(graph.ilabel2,key2))
				{
				overtype = 2
				overk = i
				}
			var x = xc + scale*graph._z.xcol[i]
			var y = yc - scale*graph._z.ycol[i]
			ctx.fillRect(x-2,y-2,5,5)
			}
		}

	if(option!=3)
		{
		ctx.fillStyle = "#0000FF"
		var k = -1
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key = graph._keys1[i]
			if(key in graph.omit) continue

			k += 1
			var x = xc + scale*graph._z.xrow[k]
			var y = yc - scale*graph._z.yrow[k]
			if(hiliteMatch1(graph.ilabel1,key))
				{
				overk = k
				overtype = 1	
				}
			ctx.fillRect(x-2,y-2,5,5)
			}
		}
	
	if((option==1)||(option==3))
		{
		ctx.fillStyle = "#FF0000"
		for(var i=0;i<graph._z.xcol.length;i++)
			{
			var key2 = graph._keys2[i]	
			if(hiliteMatch1(graph.ilabel2,key2))
				{
				overtype = 2
				overk = i
				}
			var x = xc + scale*graph._z.xcol[i]
			var y = yc - scale*graph._z.ycol[i]
			ctx.fillRect(x-2,y-2,5,5)
			}
		}

	// hilite the selected point if any
	if(overtype==1)
		{
		var x = xc + scale*graph._z.xrow[overk]
		var y = yc - scale*graph._z.yrow[overk]
		ctx.fillStyle = "#000000"
		ctx.fillRect(x-4,y-4,9,9)
		}
	else if(overtype==2)
		{
		var x = xc + scale*graph._z.xcol[overk]
		var y = yc - scale*graph._z.ycol[overk]
		ctx.fillStyle = "#000000"
		ctx.fillRect(x-4,y-4,9,9)
		}
	}


if(graph.ncontour>0)
	{
	ctx.strokeStyle = GRAY
	ctx.beginPath()
	ctx.moveTo(graph.contour[0].x,graph.contour[0].y)
	for(var i=1;i<graph.ncontour;i++)
		ctx.lineTo(graph.contour[i].x,graph.contour[i].y)
	ctx.stroke()
	}

drawGraphBin(ctx,graph,graph.ilabel2)
drawGraphOption(ctx,graph,4)

var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function drawSomGraph(ctx,graph)
{
if(typeof(graph._z.nw)!="undefined")
	{
	var khi = null
	var nw = graph._z.nw
	var dx = (graph.w-20)/(nw-1)
	var dy = (graph.h-graph.hbar-20)/(nw-1)
	var k = -1

	ctx.fillStyle = GRAY
	for(var iw=0;iw<nw;iw++)
		for(var jw=0;jw<nw;jw++)
			ctx.fillRect(graph.x + 10 + iw*dx,
				graph.y + graph.hbar + 10 + jw*dy,1,1)

	for(var i=0;i<graph._keys1.length;i++)
		{
		if(graph._keys1[i] in graph.omit) continue
		k += 1
		var x = graph.x + 10 + graph._z.xproj[k]*dx
		var y = graph.y + graph.hbar + 10 + graph._z.yproj[k]*dy
		/*
		x += 5*Math.cos(Math.PI*2*i/nw)
		y += 5*Math.sin(Math.PI*2*i/nw)
		*/
		if(hiliteMatch1(graph.ilabel1,graph._keys1[i]))
			khi = [k,i]
		ctx.fillStyle = "#0000FF"
		ctx.fillRect(x-2,y-2,5,5)
		}

	// if point to be hilited
	if(khi!=null)
		{
		var k = khi[0]
		var i = khi[1]
		var x = graph.x + 10  + graph._z.xproj[k]*dx
		var y = graph.y + graph.hbar + 10 + graph._z.yproj[k]*dy
		/*
		x += 5*Math.cos(Math.PI*2*i/nw)
		y += 5*Math.sin(Math.PI*2*i/nw)
		*/
		ctx.fillStyle = "#000000"
		ctx.fillRect(x-3,y-3,7,7)
		}

	// compute max distances between weights
	var max = graph._z.hdist[0][0]
	for(var iw=0;iw<nw;iw++)
		for(var jw=0;jw<nw-1;jw++)
			{
			if(graph._z.hdist[iw][jw]>max) max = graph._z.hdist[iw][jw]
			if(graph._z.vdist[jw][iw]>max) max = graph._z.vdist[jw][iw]
			}

	// draw cell separations
	for(var iw=0;iw<nw;iw++)
		for(var jw=0;jw<nw-1;jw++)
			{	
			var x = graph.x + 10 + dx*jw
			var y = graph.y + graph.hbar + 10 + dy*iw 
			var color = Math.floor(graph._z.hdist[iw][jw]*5/max)/5.0
			ctx.strokeStyle = getGray(color,color,color)
			ctx.beginPath()
			ctx.moveTo(x+dx/2,y-dy/2)
			ctx.lineTo(x+dx/2,y+dy/2)
			ctx.stroke()
			}

	for(var iw=0;iw<nw-1;iw++)
		for(var jw=0;jw<nw;jw++)
			{
			var	x = graph.x + 10 + dx*jw
			var y = graph.y + graph.hbar + 10 + dy*iw
			var color = Math.floor(graph._z.vdist[iw][jw]*5/max)/5.0	
			ctx.strokeStyle = getGray(color,color,color)
			ctx.beginPath()
			ctx.moveTo(x-dx/2,y+dy/2)
			ctx.lineTo(x+dx/2,y+dy/2)
			ctx.stroke()
			}
	}

var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function drawTagGraph(ctx,graph)
{

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"

var hilite = getColor(graph.hue,1,0.5)

var max = 0
var nkey = 0
for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue
	nkey ++
	if(graph._count[key]>max)
		max = graph._count[key]
	}
if(max==0) max = 1

var x = graph.x + 5
var y = graph.y + graph.hbar + 30 + 12 - 13*graph.yshift

ctx.save()
ctx.fillStyle = "#000000"
ctx.textAlign = "start"

var tcard = ["8px","10px","12px","14px","16px"]

for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue
	var icard = Math.floor(graph._count[key]*5/max)
	if(icard>=tcard.length) icard = tcard.length-1		

	ctx.font = tcard[icard]+" helvetica"
	var ms = ctx.measureText(key)
	var width = ms.width
	if(x+width>graph.x+graph.w-20)
		{
		x = graph.x + 5
		y += 13
		if(y>graph.y+graph.h) break
		}	
	
	
	if(hiliteMatch1(graph.ilabel1,key))
		ctx.fillStyle = "#FF0000"
	else
		ctx.fillStyle = "#000000"

	if(y>=graph.y+graph.hbar+13)
		ctx.fillText(key,x,y)
	x += width + 5
	}

ctx.restore()

ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.moveTo(graph.x+graph.w-20,graph.y+graph.hbar)
ctx.lineTo(graph.x+graph.w-20,graph.y+graph.h)
ctx.stroke()

var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

}

//***************************************************************************

function drawInterGraph(ctx,graph)
{
var dx = graph.w
var dy = graph.h - graph.hbar
var r = dx/3

var xc1 = graph.x + r
var yc1 = graph.y + graph.h - r

var xc2 = graph.x + 2*r
var yc2 = graph.y + graph.h - r

ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.arc(xc1,yc1,r,0,2*Math.PI,true)
ctx.moveTo(graph.x+graph.w,graph.y+graph.h-r)
ctx.arc(xc2,yc2,r,0,2*Math.PI,true)
ctx.stroke()

ctx.fillStyle = "#FF0000"
var n = 0
while(n<100)
	{
	var d = Math.random()*r
	var a = Math.random()*2*Math.PI
	var x = xc1 + d*Math.cos(a)
	var y = yc1 + d*Math.sin(a)
	var z = (x-xc2)*(x-xc2)+(y-yc2)*(y-yc2)
	if(z<r*r) continue
	ctx.fillRect(x-1,y-1,3,3)	
	n += 1
	}

for(var i=0;i<50;i++)
	{
	}

ctx.fillStyle = "#0000FF"
var n = 0
while(n<80)
	{	
	var d = Math.random()*r
	var a = Math.random()*2*Math.PI
	var x = xc2 + d*Math.cos(a)
	var y = yc2 + d*Math.sin(a)
	var z = (x-xc1)*(x-xc1)+(y-yc1)*(y-yc1)
	if(z<r*r) continue
	ctx.fillRect(x-1,y-1,3,3)
	n += 1
	}

}

//***************************************************************************

function drawTableGraph(ctx,graph)
{
ctx.save()

var i
var j

try	{

ctx.textAlign = "center"
ctx.fillStyle = "#000000"
ctx.font = "12px monospace"

var col = new Array(labels.length)
for(i=0;i<labels.length;i++)
	col[i] = ((i<graph.xshift) ? 0: 10)

// do not display selection
for(i=0;i<graph.selection.length;i+=2)
	if(graph.selection[i]<1000)
		col[graph.selection[i]] = 0

for(i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	if(graph.ilabel1>=0)
		if(lrecords[i][graph.ilabel1] in graph.omit) continue

	for(j=0;j<labels.length;j++)
	{
		if(col[j]<=0) continue
		if(lrecords[i][j].length>col[j])
			col[j] = lrecords[i][j].length
		}
	}

for(j=0;j<labels.length;j++)
	{
	if(col[j]==0) continue
	var s = ""
	for(var k=0;k<col[j];k++)
		s += "m"
	var l = ctx.measureText(s)
	col[j] = l.width+6
	}

var x = graph.x 
var y = graph.y + graph.hbar + 11 

// column headers
for(var j=0;j<labels.length;j++)
	{
	if(col[j]<=0) continue	
	ctx.save()
	ctx.beginPath()
	ctx.rect(x,y-12,col[j],14)
	ctx.clip()
	ctx.fillText(labels[j],x+col[j]/2,y)
	ctx.restore()
	x += col[j]
	}

y += 3

var irec = -1
for(var i=0;i<vrecords.length;i++)
	{	
	if(!recordMatch(i,graph)) continue
	if(graph.ilabel1>=0)
		if(lrecords[i][graph.ilabel1] in graph.omit) continue

	irec += 1
	if(irec<graph.yshift) continue

	x = graph.x 
	y += 12

	if((overlabel1>=0)&&(lrecords[i][overlabel1]==overkey1))
		{
		if((overlabel2<0)||(lrecords[i][overlabel2]==overkey2))
			{	
			// gray background
			ctx.fillStyle = "#CCCCCC"
			ctx.fillRect(x,y-10,graph.w,12)
			ctx.fillStyle = "#000000"	
			}
		}

	for(var j=0;j<labels.length;j++)
		{		
		if(col[j]<=0) continue
		ctx.fillText(lrecords[i][j],x+col[j]/2,y)
		x += col[j]
		}
	}

ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.moveTo(graph.x,graph.y+graph.hbar+14)
ctx.lineTo(graph.x+graph.w,graph.y+graph.hbar+14)
x = graph.x
for(var j=0;j<labels.length;j++)
	{
	if(col[j]<=0) continue
	x += col[j]
	ctx.moveTo(x,graph.y+graph.hbar)
	ctx.lineTo(x,graph.y+graph.h)
	}
ctx.moveTo(graph.x+graph.w-20,graph.y+graph.hbar+15)
ctx.lineTo(graph.x+graph.w-20,graph.y+graph.h)
ctx.stroke()

ctx.fillStyle = "#FFFFFF"
ctx.fillRect(graph.x+graph.w-20,graph.y+graph.hbar+15,
	19,graph.h-graph.hbar-16)

ctx.beginPath()
ctx.moveTo(graph.x+graph.w-20,graph.y+graph.hbar+15)
ctx.lineTo(graph.x+graph.w-20,graph.y+graph.h)
ctx.stroke()
	}
catch(e) {  }

ctx.restore()
}

//***************************************************************************

function findY(graph,t)
{
var x = graph._z.xmin + t*(graph._z.xmax-graph._z.xmin)
for(var i=0;i<graph._z.xx.length-1;i++)
	if((x>=graph._z.xx[i])&&(x<graph._z.xx[i+1]))
		return (i+0.0)/graph._z.xx.length
return 1
}

function findX(graph,t)
{
var i = Math.floor(graph._z.xx.length*t)
if(i<0) i = 0
if(i>=graph._z.xx.length) i = graph._z.xx.length-1
return (graph._z.xx[i]-graph._z.xmin)/(graph._z.xmax-graph._z.xmin)
}

//***************************************************************************

function drawCursor(ctx,graph)
{

if(graph._z.cursor==0)
	{
	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	ctx.moveTo(graph.x+5,graph.y+graph.h-18)
	ctx.lineTo(graph.x+18,graph.y+graph.h-18)
	ctx.lineTo(graph.x+18,graph.y+graph.h-5)
	ctx.lineTo(graph.x+5,graph.y+graph.h-18)
	ctx.stroke()
	}
else if(graph._z.cursor>0)
	{
	// horizontal cursor
	var dx = graph.w - 20
	var dy = graph.h - graph.hbar -20

	var t = graph._z.cursor
	var x = graph.x + 20 + t*dx
	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	ctx.moveTo(x,graph.y+graph.h-18)
	ctx.lineTo(x+5,graph.y+graph.h-5)
	ctx.lineTo(x-5,graph.y+graph.h-5)
	ctx.lineTo(x,graph.y+graph.h-18)
	ctx.stroke()

	ctx.strokeStyle = GRAY
	ctx.beginPath()
	while(x<graph.x+graph.w)
		{
		var x = graph.x + 20 + t*dx
		var y = findY(graph,t)
		ctx.moveTo(x,graph.y+graph.h-20)	
		ctx.lineTo(x,graph.y+graph.h-20-y*dy)
		ctx.lineTo(graph.x+20,graph.y+graph.h-20-y*dy)
		t += graph._z.cursor
		}
	ctx.stroke()
	}
else if(graph._z.cursor<0)
	{
	// vertical cursor
	var dx = graph.w -20
	var dy = graph.h - graph.hbar - 20

	var t = graph._z.cursor
	var y = graph.y + graph.h -20 +t*dy
	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	ctx.moveTo(graph.x+18,y)
	ctx.lineTo(graph.x+5,y-5)
	ctx.lineTo(graph.x+5,y+5)
	ctx.lineTo(graph.x+18,y)
	ctx.stroke()

	ctx.strokeStyle = GRAY
	ctx.beginPath()
	while(y>graph.y+graph.hbar)
		{
		var x = findX(graph,-t)
		var y = graph.y + graph.h -20 +t*dy
		ctx.moveTo(graph.x+20,y)
		ctx.lineTo(graph.x+20+x*dx,y)
		ctx.lineTo(graph.x+20+x*dx,graph.y+graph.h-20)
		t += graph._z.cursor
		}
	ctx.stroke()
	}

}

//***************************************************************************

function drawRepartGraph(ctx,graph)
{

if(graph.ivalue1>=0)
	{
	if(typeof(graph.nslot)=="undefined")	
		graph.nslot = 10

	var x1 = graph.x+20
	var x2 = graph.x + graph.w - 20
	var y1 = graph.y + graph.h - 60
	var y2 = graph.y + 45


	if(graph.ilabel1<0)
		{
		graph._z.histo = []
		for(var i=0;i<graph.nslot;i++)
			graph._z.histo.push(0)

		var xslot = (graph._z.xmax - graph._z.xmin)/graph.nslot;
		var xmin = graph._z.xmin;
		var xmax = graph._z.xmax;

		for(var i=0;i<lrecords.length;i++)
			{
			if(!recordMatch(i,graph)) continue
			var x = Math.floor((vrecords[i][graph.ivalue1]-xmin)/xslot)
			if(x<0) x = 0;
			if(x>=graph._z.histo.length) x = graph._z.histo.length-1;
			graph._z.histo[x]++;
			}

		var ymax = 0
		for(var i=0;i<graph._z.histo.length;i++)
			if(graph._z.histo[i]>ymax)
				ymax = graph._z.histo[i];

		ctx.strokeStyle = "#000000"
		ctx.fillStyle = BLUE;
	
		for(var i=0;i<graph._z.histo.length;i++)
			{
			if(graph._z.histo[i]==0) continue;

			var x = (x2-x1)/graph.nslot;
			var y = (y1-y2)*graph._z.histo[i]/ymax;

			ctx.fillRect( x1+i*x,y1-y,x,y)	
			ctx.strokeRect( x1+i*x, y1-y,x,y)
			}

		ctx.strokeRect(x1,y1,x2-x1,0)

		ctx.fillStyle = "#FFFFFF";

		var y = y1+30;
		ctx.strokeRect(x1,y-3,x2-x1,6)

		}
	else
		{
		// with label
		graph._z.histo = []
		graph._z.histokey = []
		for(var i=0;i<graph.nslot;i++)
			{
			graph._z.histo.push(0)
			graph._z.histokey.push({})
			}

		var xslot = (graph._z.xmax - graph._z.xmin)/graph.nslot;
		var xmin = graph._z.xmin;
		var xmax = graph._z.xmax;

		try {
		for(var i=0;i<lrecords.length;i++)
			{
			if(!recordMatch(i,graph)) continue
			var key = lrecords[i][graph.ilabel1]

			var x = Math.floor((vrecords[i][graph.ivalue1]-xmin)/xslot)
			if(x<0) x = 0;
			if(x>=graph._z.histo.length) x = graph._z.histo.length-1;

			graph._z.histo[x] ++;

			if(!(key in graph._z.histokey[x])) graph._z.histokey[x][key] = 0
			graph._z.histokey[x][key]++;
			}
		} catch(err) { console.log(err) }

		var ymax = 0
		for(var i=0;i<graph._z.histo.length;i++)
			if(graph._z.histo[i]>ymax)
				ymax = graph._z.histo[i];

		ctx.strokeStyle = "#000000"
	
		for(var i=0;i<graph._z.histo.length;i++)
			{
			if(graph._z.histo[i]==0) continue;

			var x = (x2-x1)/graph.nslot;
			var y = y1;

			for(var k=0;k<graph._keys1.length;k++)
				{
				var key = graph._keys1[k];
				if(!(key in graph._z.histokey[i])) continue
				dy = (y1-y2)*graph._z.histokey[i][key]/ymax

				if((overlabel1>=0)&&(overlabel1==graph.ilabel1)&&(key==overkey1))
					ctx.fillStyle = graph._hilites1[key];
				else
					ctx.fillStyle = graph._colors1[key];
				ctx.fillRect(x1+i*x,y-dy,x,dy)
				ctx.strokeRect(x1+i*x,y-dy,x,dy)
				y -= dy;
				}
			}

		ctx.strokeRect(x1,y1,x2-x1,0)

		ctx.fillStyle = "#FFFFFF";

		var y = y1+30;
		ctx.strokeRect(x1,y-3,x2-x1,6)

		}

	// draw arrow
	ctx.fillStyle = PINK;
	ctx.strokeStyle = "#000000";

	drawRightArrow(ctx,x2+10,y1);
	
	// draw cursor
	ctx.fillStyle = "#FFFFFF";
	var x = x1+(x2-x1)*graph.nslot/50;
	ctx.fillRect(x-5,y-10,10,20)
	ctx.strokeRect(x-5,y-10,10,20)

	ctx.beginPath()
	for(var i=0;i<=50;i+=10)
		{
		x = x1+(x2-x1)*i/50.0;
		ctx.moveTo(x,y+15)
		ctx.lineTo(x,y+25)
		}
	ctx.stroke()

	// draw mean and standard deviation
	var std = Math.sqrt(graph._z.stats.momentc2);

	ctx.beginPath()

	x = x1+(x2-x1)*(graph._z.stats.mean1-xmin)/(xmax-xmin);
	ctx.moveTo(x,y1+5);
	ctx.lineTo(x,y1+15);

	x = x1+(x2-x1)*(graph._z.stats.mean1-std-xmin)/(xmax-xmin);
	ctx.moveTo(x,y1+5);
	ctx.lineTo(x,y1+15);

	x = x1+(x2-x1)*(graph._z.stats.mean1+std-xmin)/(xmax-xmin);
	ctx.moveTo(x,y1+5);
	ctx.lineTo(x,y1+15);
	ctx.stroke()
	
	ctx.fillStyle = "#000000"
	ctx.textAlign = "center"
	ctx.fillText(graph.nslot+" classes",graph.x+graph.w/2,graph.y+30)
	}

var title1 = (graph.ivalue1<0) ? "" : values[graph.ivalue1]
drawHValue(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel1(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)

}

//***************************************************************************

function drawDistribGraph(ctx,graph)
{

if(graph.ivalue1>=0)
	{
	var xscale = (graph.w-20)/(graph._z.xmax-graph._z.xmin)
	var dy = (graph.h-graph.hbar-20)/graph._z.xx.length

	ctx.fillStyle = "#000000"
	var y = graph.y + graph.h -20
	for(var i=0;i<graph._z.xx.length;i++)
		{
		var x = graph.x +20 + (graph._z.xx[i]-graph._z.xmin)*xscale
		ctx.fillRect(x,y-3,3,3)
		y -= dy
		}
	}

ctx.fillStyle = "#000000"
ctx.fillRect(graph.x+20,graph.y+graph.hbar,1,graph.h-graph.hbar-20)
ctx.fillRect(graph.x+20,graph.y+graph.h-20,graph.w-20,1)

ctx.fillStyle = PINK
if(graph._z.cursor<0)
	drawTopArrow(ctx,graph.x+20,graph.y+graph.hbar+5)
if(graph._z.cursor>0)
	drawRightArrow(ctx,graph.x+graph.w-5,graph.y+graph.h-20)

drawCursor(ctx,graph)

var title1 = (graph.ivalue1<0) ? "" : values[graph.ivalue1]
drawHValue(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)


}

//***************************************************************************

function drawScatterGraph(ctx,graph)
{
var oldfont = ctx.font;

if((graph.ivalue1>=0)&&(graph.ivalue2>=0))
	{

	var i1 = graph.ivalue1;
	var i2 = graph.ivalue2;

	var il = typeof(graph._display)=="undefined" ? -1 : graph._display;

	var xmin = i1==0 ? 0 : graph._z.xmin;
	var xmax = i1==0 ? lrecords.length : graph._z.xmax;

	var ymin = i2==0 ? 0 : graph._z.ymin;
	var ymax = i2==0 ? lrecords.length : graph._z.ymax;

	var xscale = (graph.w-10)/(xmax-xmin)
	var yscale = (graph.h-graph.hbar-10)/(ymax-ymin)

	// draw regression line
	ctx.strokeStyle = "#008800";
	ctx.lineWidth = 1
	ctx.beginPath()
	var xx = graph._z.min;
	var yy = graph._z.a * xx + graph._z.b;
	x = graph.x+5+(xx-graph._z.xmin)*xscale;
	y = graph.y+graph.h-5-(yy-graph._z.ymin)*yscale
	ctx.moveTo(x,y)
	xx = graph._z.max;
	yy = graph._z.a * xx + graph._z.b;
	x = graph.x+5+(xx-graph._z.xmin)*xscale;
	y = graph.y+graph.h-5-(yy-graph._z.ymin)*yscale
	ctx.lineTo(x,y)
	ctx.stroke()


	ctx.textAlign = "center"
	ctx.font = "9px helvetica";

	//graph._colors1 = {}
	//graph._hilites1 = {}
	//graph._pales1 = {}

	var x;
	var y;
	var v;

	// if ivalue1=0 or ivalue2=0, use index instead
	var ind = 0;
	var b = (i1==0)||(i2==0);

	// draw axes
	ctx.fillStyle = "#999999"

	x = graph.x + 5 +(0-xmin)*xscale;
	ctx.fillRect(x,graph.y+graph.hbar+5,1,graph.h-graph.hbar-10)
	y = graph.y + graph.h - 5 -(0-ymin)*yscale
	ctx.fillRect(graph.x+5,y,graph.w-10,1)

	// draw points
	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue

		if(graph.ilabel1<0)
			ctx.fillStyle = "#000000";
		else
			ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]]

		v = i1==0 ? ind : vrecords[i][i1];	
		x = graph.x + 5 +(v-xmin)*xscale
		
		v = i2==0 ? ind : vrecords[i][i2];
		y = graph.y + graph.h -5 - (v-ymin)*yscale

		if(b) ind++;

		if(il<0)
			ctx.fillRect(x-1,y-1,3,3)
		else
			ctx.fillText(lrecords[i][il],x,y+3)
		}

	ind = 0;
	if(overlabel1>=0)
		{
		ctx.lineWidth = 1
		for(var i=0;i<lrecords.length;i++)
			{
			if(!recordMatch(i,graph)) continue
			if(!recordHilite(lrecords[i])) continue

			if(graph.ilabel1<0)
				ctx.fillStyle = ctx.strokeStyle = "#FF0000";
			else
				ctx.fillStyle = ctx.strokeStyle = graph._hilites1[
					lrecords[i][graph.ilabel1]];
	
			v = i1==0 ? ind : vrecords[i][i1];	
			x = graph.x + 5 + (v-xmin)*xscale

			v = i2==0 ? ind : vrecords[i][i2];
			y = graph.y + graph.h -5 - (v-ymin)*yscale;

			if(b) ind++;

			if(il<0)
				ctx.fillRect(x-3,y-3,7,7)
			else
				ctx.strokeText(lrecords[i][il],x,y+3)	
			}
		}

	}

ctx.font = oldfont;

var title1 = (graph.ivalue1<0) ? "" : values[graph.ivalue1]
drawHValue(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = (graph.ivalue2<0) ? "" : values[graph.ivalue2]
drawVValue(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)

var title3 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin3,graph.y+graph.h-25,100,20,title3)
}

//***************************************************************************

function drawLagPlot(ctx,graph)
{

if(graph.ivalue1>=0)
	{
	if(!graph._z.lag)
		graph._z.lag = 1;
	
	var history = [];

	var xmin = graph.x+10;
	var xmax = graph.x + graph.w - 20;
	var ymin = graph.y + graph.hbar + 10;
	var ymax = graph.y + graph.h - 40;

	var xscale = (xmax-xmin)/(graph._z.xmax-graph._z.xmin)
	var yscale = (ymax-ymin)/(graph._z.xmax-graph._z.xmin)

	var i1 = graph.ivalue1 


	// draw points
	ctx.fillStyle = "#000000";
	var x,y;
	var vcurrent,vprevious;
	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue

		vcurrent = vrecords[i][i1];
		history.push(vcurrent);

		if(history.length>graph._z.lag)
			{
			vprevious = history.shift();
			x = xmin +(vcurrent-graph._z.xmin)*xscale;
			y = ymax - (vprevious-graph._z.xmin)*yscale;
			ctx.fillRect(x-1,y-1,3,3);
			}
		}

	// draw cursor
	xmin = graph.x+10;
	xmax = graph.x + graph.w - 130;
	ymin = graph.y + graph.hbar + 25;
	ymax = graph.y + graph.h -70;

	ctx.fillStyle = "#FFFFFF";
	var y = graph.y + graph.h - 30;
	ctx.fillRect(xmin,y-5,xmax-xmin,10);
	ctx.strokeRect(xmin,y-5,xmax-xmin,10);

	var x = xmin+(xmax-xmin)*graph._z.lag/10;
	ctx.fillRect(x-5,y-10,10,20)
	ctx.strokeRect(x-5,y-10,10,20)

	ctx.beginPath()
	for(var i=0;i<=10;i++)
		{
		x = xmin+(xmax-xmin)*i/10;
		ctx.moveTo(x,y+15)
		ctx.lineTo(x,y+25)
		}
	ctx.stroke()

	ctx.fillStyle = "#000000";
	ctx.textAlign = "center"
	ctx.fillText("Lag = "+graph._z.lag,
		graph.x+graph.w-65,graph.y+graph.h-25);
	}


ctx.textAlign = "center"
var title1 = (graph.ivalue1<0) ? "" : values[graph.ivalue1]
drawHValue(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

}

//***************************************************************************

function recordHilite(record)
{
if(overlabel2<0)
	return record[overlabel1] == overkey1
else
	return (record[overlabel1]==overkey1) && (record[overlabel2]==overkey2)
}

//***************************************************************************

function trunc(s,ndigits)
{
s = ""+s;

var i = s.indexOf("e")
if(i>0)
	{
	var suffix = s.substring(i)
	s = s.substring(0,i)
	}
else
	{
	var suffix = ""
	}

var i = s.indexOf(".")

if(i<0) return s+suffix;

if(s.length-i<ndigits) return s+suffix;

return s.substring(0,i+ndigits+1)+suffix
}

//***************************************************************************

function drawMomentGraph(ctx,graph)
{
if(graph.ivalue1>=0)
	{
	ctx.fillStyle = "#000000";
	ctx.textAlign = "left"

	var y = graph.y+40;

	y += 20;
	ctx.fillText("Average",graph.x+10,y);
	ctx.fillText(trunc(graph._z.stats.mean1,4),graph.x+170,y)

	y += 20;
	ctx.fillText("Standard deviation",graph.x+10,y)
	ctx.fillText(trunc(Math.sqrt(graph._z.stats.momentc2),4),graph.x+170,y)

	y += 20;
	ctx.fillText("Variance",graph.x+10,y)
	ctx.fillText(trunc(graph._z.stats.momentc2,4),graph.x+170,y)

	y += 20;	
	ctx.fillText("Minimum",graph.x+10,y);
	ctx.fillText(graph._z.stats.min+"",graph.x+170,y);

	y += 20;
	ctx.fillText("Maximum",graph.x+10,y);
	ctx.fillText(graph._z.stats.max+"",graph.x+170,y);

	y += 30;
	ctx.fillText("First decile",graph.x+10,y);
	ctx.fillText(trunc(graph._z.d1,4),graph.x+170,y);

	y += 20;
	ctx.fillText("First quartile",graph.x+10,y);
	ctx.fillText(trunc(graph._z.q1,4),graph.x+170,y);

	y += 20;
	ctx.fillText("Median",graph.x+10,y);
	ctx.fillText(trunc(graph._z.q2,4),graph.x+170,y);

	y += 20;
	ctx.fillText("Third quartile",graph.x+10,y);
	ctx.fillText(trunc(graph._z.q3,4),graph.x+170,y);

	y += 20;
	ctx.fillText("Ninth decile",graph.x+10,y);
	ctx.fillText(trunc(graph._z.d9,4),graph.x+170,y);

	y += 30;
	ctx.fillText("2nd order average",graph.x+10,y)
	ctx.fillText(trunc(graph._z.stats.mean2,4),graph.x+170,y)

	y += 20;
	ctx.fillText("3rd order average",graph.x+10,y);
	ctx.fillText(trunc(graph._z.stats.mean3,4),graph.x+170,y);

	y += 20;
	ctx.fillText("4th order average",graph.x+10,y);
	ctx.fillText(trunc(graph._z.stats.mean4,4),graph.x+170,y);

	y += 30;
	ctx.fillText("3rd order centered moment",graph.x+10,y)
	ctx.fillText(trunc(graph._z.stats.momentc3,4),graph.x+170,y)

	y += 20;
	ctx.fillText("4th order centered moment",graph.x+10,y)
	ctx.fillText(trunc(graph._z.stats.momentc4,4),graph.x+170,y)
	}

ctx.textAlign = "center"
var title1 = (graph.ivalue1<0) ? "" : values[graph.ivalue1]
drawHValue(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

}

//***************************************************************************

function drawCorrGraph(ctx,graph)
{
var font = ctx.font

if(graph.ivalues.length>=2)
	{

	var x1 = graph.x+10;
	var x2 = graph.x + graph.w - 115;
	var dx = (x2-x1)
	var xc = (x1+x2)/2
	var y1 = graph.y + graph.hbar + 5;
	var y2 = graph.y + graph.h -5
	var yc = (y1+y2)/2
	var dy = (y2-y1)

	if(dx<dy)
		{
		dy = dx
		y1 = yc - dy/2
		y2 = yc + dy/2	
		}
	else
		{
		dx = dy
		x1 = xc - dx/2
		x2 = dx + dx/2
		}

	var n = graph._z.corr.length;
	var d = dx/n;

	ctx.textAlign = "center"
	ctx.font = "9px helvetica";

	for(var j=0;j<n;j++)
		for(var k=0;k<n;k++)
			if(k==j)
			{
			ctx.fillStyle = "#000000"
			if(d>20)
				ctx.fillText(values[graph.ivalues[k]],x1+j*d+d/2,y1+k*d+d/2+3)
			}
			else
			{
			var c = graph._z.corr[j][k];
			if(c<0)
				{
				ctx.fillStyle = "#FF0000"
				var size = -d*c
				ctx.fillRect(x1+j*d+d/2-size/2,y1+k*d+d/2-size/2,size,size)
				}
			else
				{
				ctx.fillStyle = "#008800"
				var size = d*c
				ctx.fillRect(x1+j*d+d/2-size/2,y1+k*d+d/2-size/2,size,size)
				}		
			}
	}

ctx.font = font
ctx.strokeStyle = "#000000"
ctx.strokeRect(x1-5,y1-5,dx+10,dy+10)

for(var k=0;k<graph.ivalues.length;k++)
	{
	var title = values[graph.ivalues[k]]
	drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}

drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ivalues.length,100,20,"")
}

//***************************************************************************

function drawHuenGraph(ctx,graph)
{
if(graph.ivalues.length>0)
	{
	// compute bounds of graph

	var n = graph.ivalues.length
	
	xmin = Number.MAX_VALUE;
	xmax = Number.MIN_VALUE;
	ymin = Number.MAX_VALUE;
	ymax = Number.MIN_VALUE;

	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue	
		var x = 0;	
		var y = 0
		for(var j=0;j<n;j++)
			{
			var xj = (vrecords[i][graph.ivalues[j]]-graph._z.avg[j])/graph._z.std[j]
			if(j%2)
				y += xj
			else
				x += xj
			}
		if(x<xmin) xmin = x;
		if(x>xmax) xmax = x;
		if(y<ymin) ymin = y;
		if(y>ymax) ymax = y;
		}

	var x1 = graph.x + 5
	var x2 = graph.x + graph.w - 110
	var y1 = graph.y + graph.hbar + 5
	var y2 = graph.y + graph.h - 5

	var scale = (x2-x1)/(xmax-xmin)
	if((ymax-ymin)*scale>y2-y1)
		scale = (y2-y1)/(ymax-ymin)

	x1 = (x1+x2)/2 - scale*(xmax-xmin)/2
	y1 = (y1+y2)/2 - scale*(ymax-ymin)/2

	ctx.strokeStyle = "#000000"
	ctx.fillStyle = "#000000"
	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue	
		ctx.beginPath()
		var x = 0;	
		var y = 0
		for(var j=0;j<n;j++)
			{
			var xj = (vrecords[i][graph.ivalues[j]]-graph._z.avg[j])/graph._z.std[j]
			if(j%2)
				y += xj
			else
				x += xj
			if(j==1)
				{
				if(n==2)	
					ctx.fillRect(x1+scale*(x-xmin)-1,y2-scale*(y-ymin)-1,3,3)	
				else
					ctx.moveTo(x1+scale*(x-xmin),y2-scale*(y-ymin))
				}
			else if(j%2)
				ctx.lineTo(x1+scale*(x-xmin),y2-scale*(y-ymin))
			}
		if((n%2)==0)
			ctx.lineTo(x1+scale*(x-xmin),y2-scale*(y-ymin))
		ctx.stroke()
		}

	if(overlabel1>=0)
		{
		ctx.strokeStyle = "#FF0000"
		ctx.fillStyle = "#FF0000"
		ctx.lineWidth = 3
		for(var i=0;i<lrecords.length;i++)
			{
			if(!recordMatch(i,graph)) continue	
			if(!recordHilite(lrecords[i])) continue

			ctx.beginPath()
			var x = 0;	
			var y = 0
			for(var j=0;j<n;j++)
				{
				var xj = (vrecords[i][graph.ivalues[j]]-graph._z.avg[j])/graph._z.std[j]
				if(j%2)
					y += xj
				else
					x += xj
				if(j==1)
					{
					if(n==2)	
						ctx.fillRect(x1+scale*(x-xmin)-3,y2-scale*(y-ymin)-3,7,7)	
					else
						ctx.moveTo(x1+scale*(x-xmin),y2-scale*(y-ymin))
					}
				else if(j%2)
					ctx.lineTo(x1+scale*(x-xmin),y2-scale*(y-ymin))
				}
			if((n%2)==0)
				ctx.lineTo(x1+scale*(x-xmin),y2-scale*(y-ymin))
			ctx.stroke()
			}
		ctx.lineWidth = 1
		}
	}

for(var k=0;k<graph.ivalues.length;k++)
	{
	var title = values[graph.ivalues[k]]
	drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}

drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ivalues.length,100,20,"")

}

//***************************************************************************

function drawAcpGraph(ctx,graph)
{
var font = ctx.font;

if(graph.ivalues.length>=2)
	{
	if((graph.option%3)==0)
		{
		if(typeof(graph._display)=="undefined")
			graph._display = -1

		var x1 = graph.x+5
		var x2 = graph.x + graph.w -115
		var xc = (x1+x2)/2

		var y1 = graph.y + graph.hbar + 5
		var y2 = graph.y + graph.h -5
		var yc = (y1+y2)/2

		xmin = Number.MAX_VALUE;
		xmax = Number.MIN_VALUE;
		ymin = Number.MAX_VALUE;
		ymax = Number.MIN_VALUE;

		for(var i=0;i<graph._z.xrow.length;i++)
			{
			if(graph._z.xrow[i]<xmin) xmin = graph._z.xrow[i]
			if(graph._z.xrow[i]>xmax) xmax = graph._z.xrow[i]
			if(graph._z.yrow[i]<ymin) ymin = graph._z.yrow[i]
			if(graph._z.yrow[i]>ymax) ymax = graph._z.yrow[i]
			}

		var scale = (x2-x1)/(xmax-xmin)
		if((ymax-ymin)*scale>y2-y1)
			scale = (y2-y1)/(ymax-ymin)


		x1 = xc - (xmax-xmin)*scale/2
		x2 = xc + (xmax-xmin)*scale/2
		y1 = yc - (ymax-ymin)*scale/2
		y2 = yc + (ymax-ymin)*scale/2

		ctx.strokeStyle = "#000000"
		ctx.fillStyle = "#000000"
		var x = x1+scale*(0-xmin)
		var y = y2-scale*(0-ymin)

		// draw axes
		ctx.fillStyle = "#999999"
		ctx.fillRect(x,y1,1,y2-y1)
		ctx.fillRect(x1,y,x2-x1,1)

		// draw arrows
		ctx.fillStyle = BLUE
		ctx.strokeStyle = "#000000"

		drawTopArrow(ctx,x,y1)
		drawRightArrow(ctx,x2,y)
	
		graph._z.xaxis = {x:x2,y:y}
		graph._z.yaxis = {x:x,y:y1}

		// draw points

		ctx.fillStyle = "#000000"
		ctx.textAlign = "center"
		ctx.font = "9px helvetica";

		for(var i=0;i<lrecords.length;i++)
			{		
			if(typeof(graph._z.xrow[i])=="undefined") continue;

			var x = x1+scale*(graph._z.xrow[i]-xmin)
			var y = y2-scale*(graph._z.yrow[i]-ymin)

			if(graph.ilabel1<0)
				ctx.fillStyle = "#000000";
			else
				ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]];

			ctx.fillRect(x-1,y-1,3,3)
				//ctx.fillText(lrecords[i][graph._display],x,y+3)
			}

		if(overlabel1>=0)
			{
			ctx.fillStyle = "#FF0000"
			ctx.strokeStyle = "#FF0000"
			ctx.lineWidth = 1
			for(var i=0;i<lrecords.length;i++)
				{
				if(typeof(graph._z.xrow[i])=="undefined") continue;
				if(!recordHilite(lrecords[i])) continue

				var x = x1+scale*(graph._z.xrow[i]-xmin)
				var y = y2-scale*(graph._z.yrow[i]-ymin)

				if(graph.ilabel1<0)
					ctx.fillStyle = "#000000";
				else
					ctx.fillStyle = graph._hilites1[lrecords[i][graph.ilabel1]];

				ctx.fillRect(x-3,y-3,7,7)
				}
			}
		}

	if((graph.option%3)==1)
		{
		var x1 = graph.x+5
		var x2 = graph.x + graph.w -115
		var xc = (x1+x2)/2
		var dx = x2-x1

		var y1 = graph.y + graph.hbar + 5
		var y2 = graph.y + graph.h -5
		var yc = (y1+y2)/2
		var dy = y2-y1

		var scale = (x2-x1)/2
		if(2*scale>y2-y1)
			scale = (y2-y1)/2

		ctx.beginPath()
		ctx.moveTo(xc+scale,yc)
		ctx.arc(xc,yc,scale,0,Math.PI*2,true)
		ctx.stroke()

		// draw arrows
		ctx.strokeStyle = "#CCCCCC";
		ctx.beginPath();
		for(var i=0;i<graph.ivalues.length;i++)
			{
			var x = xc + scale*graph._z.xproj[i]
			var y = yc - scale*graph._z.yproj[i]	
			ctx.moveTo(xc,yc);
			ctx.lineTo(x,y);
			}
		ctx.stroke();
	
		// draw variable names	
		ctx.strokeStyle = "#000000"
		ctx.fillStyle = "#000000"
		ctx.textAlign = "center"
		ctx.font = "9px helvetica";

		for(var i=0;i<graph.ivalues.length;i++)
			{
			var x = xc + scale*graph._z.xproj[i]
			var y = yc - scale*graph._z.yproj[i]
			ctx.fillText(values[graph.ivalues[i]],x,y+3)
			}

		}

	if((graph.option%3)==2)
		{
		var x1 = graph.x+40
		var x2 = graph.x + graph.w -115
		var xc = (x1+x2)/2

		var y1 = graph.y + graph.hbar + 5
		var y2 = graph.y + graph.h -5
		var yc = (y1+y2)/2

		var n = graph._z.lambda.length;
		var dx = (x2-x1)/n;

		ctx.strokeStyle = "#000000"
		ctx.fillStyle = "#008800"
		
		var sum = 0
		for(var i=0;i<n;i++)
			sum += graph._z.lambda[i];

		for(var i=0;i<n;i++)
			{
			var x = x1 + i*dx;
			var y = graph._z.lambda[i]*(y2-y1)/sum;
			ctx.fillRect(x+1,y2-y,dx-2,y)
			ctx.strokeRect(x+1,y2-y,dx-2,y)			
			}

		ctx.fillStyle = "#000000"
		ctx.textAlign = "left"
		for(var i=0;i<=10;i++)
			{
			var y = i*(y2-y1)/10
			ctx.fillRect(x1-10,y2-y,8,1)
			ctx.fillText(trunc(i*0.1,1),graph.x+5,y2-y+3)
			}
		}
	}

ctx.textAlign = "center"
ctx.font = font;

for(var k=0;k<graph.ivalues.length;k++)
	{
	var title = values[graph.ivalues[k]]
	drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}

drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ivalues.length,100,20,"")

drawGraphOption(ctx,graph,3)

var title2 = getGraphLabel1(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)

}

//***************************************************************************

function drawKmeansGraph(ctx,graph)
{

if(graph.ivalues.length>0)
	{
	ctx.textAlign = "right"
	ctx.fillStyle = "#000000"
	ctx.fillText("Cluster",graph.x+80,graph.y+graph.hbar+20)
	ctx.fillText("Count",graph.x+150,graph.y+graph.hbar+20)
	ctx.fillText("Pct", graph.x+220,graph.y+graph.hbar+20);
	ctx.fillRect(graph.x+10,graph.y+graph.hbar+30,220,2)


	var sum = 0;
	for(var k=0;k<graph.nslot;k++)
		sum += graph._z.counts[k];

	var x,y,pct;

	for(var k=0;k<graph.nslot;k++)
		{
		y = graph.y + graph.hbar + 50 + 20*k
		ctx.fillText(""+(k+1),graph.x+80,y)
		ctx.fillText(""+graph._z.counts[k],graph.x+150,y)
		pct = Math.round(graph._z.counts[k]*100/sum);
		ctx.fillText(""+pct+"%",graph.x+220,y);
		}

	ctx.textAlign = "center"

	// draw histogram if enough room
	var dx = graph.w-330;
	if(dx>0)
		{
		ctx.fillStyle = getColor(graph.hue,1,1);
		ctx.strokeStyle = "#000000";
		for(var k=0;k<graph.nslot;k++)
			{
			y = graph.y + graph.hbar + 37 + 20*k
			x = dx*graph._z.counts[k]/sum;
			ctx.fillRect(graph.x+230,y,x,16);
			ctx.strokeRect(graph.x+230,y,x,16);
			}	
		}
	
	// draw cursor

	y = graph.y + graph.h - 40
	ctx.strokeStyle = "#000000";
	ctx.strokeRect(graph.x+20,y-3,graph.w-40,6)

	x = graph.x+20+(graph.w-40)*graph.nslot/50
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(x-5,y-10,10,20)
	ctx.strokeRect(x-5,y-10,10,20)

	ctx.fillStyle = "#000000"
	ctx.fillText(""+graph.nslot+" clusters",graph.x+graph.w/2,
		graph.y+graph.h-10)

	// draw arrow
	ctx.fillStyle = PINK
	ctx.strokeStyle = "#000000"
	drawRightArrow(ctx,graph.x+250,graph.y+graph.hbar+15)
	}

ctx.textAlign = "center"

for(var k=0;k<graph.ivalues.length;k++)
	{
	var title = values[graph.ivalues[k]]
	drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}

drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ivalues.length,100,20,"")

}

//***************************************************************************

function drawParaGraph(ctx,graph)
{
if(graph.ivalues.length>=2)
	{
	var min = graph._z.min;
	var max = graph._z.max;

	var x = graph.x +20;
	var w = graph.w -140;

	var y = graph.y + graph.hbar +10;
	var dy = (graph.h-graph.hbar-20)/(graph.ivalues.length-1);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue	;
		
		if(graph.ilabel1>=0)
			ctx.strokeStyle = graph._colors1[lrecords[i][graph.ilabel1]];
		else
			ctx.strokeStyle = "#000000";	
		ctx.beginPath();

		for(var j=0;j<graph.ivalues.length;j++)
			{
			var v = vrecords[i][graph.ivalues[j]];	
			if(j==0)
				ctx.moveTo(x+w*(v-min[j])/(max[j]-min[j]), y+dy*j);
			else
				ctx.lineTo(x+w*(v-min[j])/(max[j]-min[j]), y+dy*j);
			}	

		ctx.stroke();
		}

	if(overlabel1>=0)
		{
		ctx.lineWidth = 2;

		for(var i=0;i<vrecords.length;i++)
			{
			if(!recordMatch(i,graph)) continue	;
		
			var key = lrecords[i][overlabel1];	
			if(key!=overkey1) continue;

			if(graph.ilabel1>=0)
				ctx.strokeStyle = graph._hilites1[lrecords[i][graph.ilabel1]];
			else
				ctx.strokeStyle = "#000000";	
			ctx.beginPath();

			for(var j=0;j<graph.ivalues.length;j++)
				{
				var v = vrecords[i][graph.ivalues[j]];	
				if(j==0)
					ctx.moveTo(x+w*(v-min[j])/(max[j]-min[j]), y+dy*j);
				else
					ctx.lineTo(x+w*(v-min[j])/(max[j]-min[j]), y+dy*j);
				}	

			ctx.stroke();
			}

		ctx.lineWidth = 1;
		}

	}


for(var k=0;k<graph.ivalues.length;k++)
	{
	var title = values[graph.ivalues[k]]
	drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}

drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ivalues.length,100,20,"")

var title2 = getGraphLabel1(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function drawDiscriGraph(ctx,graph)
{
var font = ctx.font

if((graph.ilabel1>=0)&&(graph.ivalues.length>=2))
	{
	if(typeof(graph._display)=="undefined")		
		graph._display = -1;

	// compute bounds
	var xmin = Number.MAX_VALUE;
	var xmax = Number.MIN_VALUE;
	var ymin = Number.MAX_VALUE;
	var ymax = Number.MIN_VALUE;
	for(var i=0;i<graph._z.xrow.length;i++)
		{
		if(graph._z.xrow[i]<xmin) xmin = graph._z.xrow[i]
		if(graph._z.xrow[i]>xmax) xmax = graph._z.xrow[i]
		if(graph._z.yrow[i]<ymin) ymin = graph._z.yrow[i]
		if(graph._z.yrow[i]>ymax) ymax = graph._z.yrow[i]
		}	

	var x1 = graph.x + 5
	var x2 = graph.x + graph.w -115
	var y1 = graph.y + graph.hbar + 5
	var y2 = graph.y + graph.h -5

	var scale = (x2-x1)/(xmax-xmin)
	if((ymax-ymin)*scale>y2-y1)
		scale = (y2-y1)/(ymax-ymin)

	x1 = (x1+x2)/2-(xmax-xmin)*scale/2
	x2 = x1 + (xmax-xmin)*scale
	y2 = (y1+y2)/2+(ymax-ymin)*scale/2
	y1 = y2 - (ymax-ymin)*scale

	ctx.fillStyle = "#000000"
	ctx.textAlign = "center"	
	ctx.font = "9px Helvetica"

	var x;
	var y;

	// draw axes
	ctx.fillStyle = "#999999"

	x = x1 + scale*(0-xmin)
	ctx.fillRect(x,y1,1,y2-y1)

	y = y2 - scale*(0-ymin)
	ctx.fillRect(x1,y,x2-x1,1)	

	// draw arrows
	ctx.fillStyle = BLUE
	ctx.strokeStyle = "#000000"

	drawTopArrow(ctx,x,y1)
	drawRightArrow(ctx,x2,y)

	graph._z.xaxis = {x:x2,y:y}
	graph._z.yaxis = {x:x,y:y1}

	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue	

		var key = lrecords[i][graph.ilabel1]
		ctx.fillStyle = graph._colors1[key]

		x = x1 + scale*(graph._z.xrow[i]-xmin)
		y = y2 - scale*(graph._z.yrow[i]-ymin)
		if(graph._display<0)
			ctx.fillRect(x-1,y-1,3,3)
		else
			ctx.fillText(lrecords[i][graph._display],x,y+3)
		}

	if(overlabel1>=0)
		for(var i=0;i<lrecords.length;i++)
			{
			if(!recordMatch(i,graph)) continue	
			if(!recordHilite(lrecords[i])) continue
		
			var key = lrecords[i][graph.ilabel1]
			ctx.fillStyle = ctx.strokeStyle = graph._hilites1[key]

			x = x1 + scale*(graph._z.xrow[i]-xmin)
			y = y2 - scale*(graph._z.yrow[i]-ymin)
			if(graph._display<0)
				ctx.fillRect(x-3,y-3,7,7)
			else
				ctx.strokeText(lrecords[i][graph._display],x,y+3)
			}
	}

ctx.font = font

for(var k=0;k<graph.ivalues.length;k++)
	{
	var title = values[graph.ivalues[k]]
	drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}

drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ivalues.length,100,20,"")

drawGraphOption(ctx,graph,3)

var title2 = getGraphLabel1(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)

}

//***************************************************************************

function drawBoxGraph(ctx,graph)
{
if((graph.ilabel1>=0)&&(graph.ivalue1>=0))
	{
	var min = graph._z.min;
	var max = graph._z.max;

	var dv = (graph.h-graph.hbar-20)/graph._z.keys.length;
	if(dv<6) dv = 6;
	var idv = Math.floor(dv);

	ctx.strokeStyle = "#000000";
	ctx.fillStyle = graph._colors1[graph._z.keys[0]];

	var y = graph.y+graph.hbar+20;

	for(var i=0;i<graph._z.keys.length;i++)
		{
		var key = graph._z.keys[i];
		var box = graph._z.boxes[key];
		var x0 = Math.floor(graph.x+20+(graph.w-40)*(box[0]-min)/(max-min));
		var x1 = Math.floor(graph.x+20+(graph.w-40)*(box[1]-min)/(max-min));
		var x2 = Math.floor(graph.x+20+(graph.w-40)*(box[2]-min)/(max-min));
		var x3 = Math.floor(graph.x+20+(graph.w-40)*(box[3]-min)/(max-min));
		var x4 = Math.floor(graph.x+20+(graph.w-40)*(box[4]-min)/(max-min));

		if(hiliteMatch1(graph.ilabel1,key))
			ctx.fillStyle = graph._hilites1[graph._z.keys[0]];
		else
			ctx.fillStyle = graph._colors1[graph._z.keys[0]];

		ctx.fillRect(x1,Math.floor(y+3),x2-x1,idv-6);
		ctx.fillRect(x2,Math.floor(y+3),x3-x2,idv-6);
		ctx.strokeRect(x0,Math.floor(y+dv/2),x1-x0,0);
		ctx.strokeRect(x0,Math.floor(y+3),0,idv-6);
		ctx.strokeRect(x1,Math.floor(y+3),x2-x1,idv-6);
		ctx.strokeRect(x2,Math.floor(y+3),x3-x2,idv-6);
		ctx.strokeRect(x3,Math.floor(y+dv/2),x4-x3,0);
		ctx.strokeRect(x4,Math.floor(y+3),0,idv-6);
		y += dv;
		}
	}

ctx.textAlign = "center"

var title1 = (graph.ivalue1<0) ? "" : values[graph.ivalue1]
drawHValue(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel1(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)
}

//***************************************************************************

function drawAnovaGraph(ctx,graph)
{
if((graph.ivalue1>=0)&&(graph.ilabel1>=0))
	{
	ctx.fillStyle = "#000000";
	ctx.strokeStyle = "#000000";
	ctx.textAlign = "left"
	ctx.lineWidth = 1

	var y = graph.y+60;

	ctx.fillText("Source",graph.x+30,y);
	ctx.fillText("DDL",graph.x+140,y)
	ctx.fillText("Variance",graph.x+190,y)
	ctx.fillText("F",graph.x+290,y)
	ctx.fillText("p-value",graph.x+390,y)

	ctx.fillRect(graph.x+30,y+10,450,2)

	y += 30;
	ctx.fillText(labels[graph.ilabel1],graph.x+30,y)
	ctx.fillText(""+graph._z.ninter,graph.x+140,y)
	ctx.fillText(trunc(graph._z.vinter/graph._z.ninter,4),graph.x+190,y)

	y += 10
	var F = (graph._z.vinter/graph._z.ninter)/(graph._z.vintra/graph._z.nintra)
	ctx.fillText(trunc(F,4),graph.x+290,y)

	var pvalue = Fspin(F,graph._z.ninter,graph._z.nintra)
	ctx.fillText(trunc(pvalue,4),graph.x+390,y)

	y += 10;
	ctx.fillText("Residuals",graph.x+30,y)
	ctx.fillText(""+graph._z.nintra,graph.x+140,y)
	ctx.fillText(trunc(graph._z.vintra/graph._z.nintra,4),graph.x+190,y)

	y += 30;
	if(pvalue<0.05)
		{
		ctx.fillStyle = "#008800";
		ctx.fillText("p-value < 0.05 : "+labels[graph.ilabel1]+" has influence on "+values[graph.ivalue1],graph.x+30,y)
		}
	else
		{
		ctx.fillStyle= "#FF0000";
		ctx.fillText("p-value > 0.05 : "+labels[graph.ilabel1]+" has no influence on "+values[graph.ivalue1],graph.x+30,y)
		}

	ctx.fillStyle = "#000000";

	y += 50;
	ctx.fillText("Group",graph.x+30,y)
	ctx.fillText("Count",graph.x+190,y)
	ctx.fillText("Average",graph.x+290,y)
	ctx.fillText("Variance",graph.x+390,y)

	ctx.fillRect(graph.x+30,y+10,450,2)
	
	y += 30
	for(var x in graph._z.sums)
		{
		var txt = x
		if(txt.length>20) txt = txt.substring(0,20)
		ctx.fillText(txt,graph.x+30,y)

		ctx.fillText(""+graph._z.counts[x],graph.x+190,y)

		var avg = graph._z.sums[x]/graph._z.counts[x]
		ctx.fillText(trunc(avg,4),graph.x+290,y)

		var v = (graph._z.sums2[x]-graph._z.sums[x]*graph._z.sums[x]/graph._z.counts[x])/(graph._z.counts[x]-1)
		ctx.fillText(trunc(v,4),graph.x+390,y)
		y += 20;
		}	
	}

ctx.textAlign = "center"

var title1 = (graph.ivalue1<0) ? "" : values[graph.ivalue1]
drawHValue(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel1(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)

}

//***************************************************************************

function drawDendroGraph(ctx,graph)
{

var font = ctx.font;

// draw linkage type
ctx.strokeStyle = "#000000";
ctx.fillStyle = "#000000";

var y = graph.y + graph.hbar + 25/2;
ctx.beginPath();
ctx.arc(graph.x+30,y,10,0,2*Math.PI,true);
ctx.stroke();
ctx.beginPath();
ctx.arc(graph.x+60,y,10,0,2*Math.PI,true);
ctx.stroke();
if((graph.option%2)==1)
	{
	ctx.fillRect(graph.x+36,y-2,5,5);
	ctx.fillRect(graph.x+50,y-2,5,5);
	ctx.fillRect(graph.x+40,y,10,1);
	}
else
	{
	ctx.fillRect(graph.x+20,y-2,5,5);
	ctx.fillRect(graph.x+66,y-2,5,5);
	ctx.fillRect(graph.x+20,y,50,1);
	}

if(graph.ivalues.length==0)
	{
	}
else if(graph._z.percent<1)
	{
	var x = graph.x+(graph.w-100)/2
	var y = graph.y + graph.hbar + (graph.h-graph.hbar)/2;
	var w = graph.w - 120;
	var h = 20;

	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(x-w/2,y-h/2,w,h);

	ctx.fillStyle = "#DEF7D6"
	//ctx.fillStyle = BLUE;
	ctx.fillRect(x-w/2,y-h/2,w*graph._z.percent,h);

	ctx.strokeStyle = "#000000";
	ctx.strokeRect(x-w/2,y-h/2,w,h);
	}
else
	{
	var grouping = graph._z.grouping;
	var ng= grouping.length-1;
	var ng0 = ng-graph._z.nc+2;
	if(ng0<0) ng0 = 0;
	var node = {value:0}
	for(var ig=ng;ig>=ng0;ig--)
		{
		var i1 = grouping[ig][0];
		var i2 = grouping[ig][1];
		var level = grouping[ig][2];
		var l1 = grouping[ig][3];
		var l2 = grouping[ig][4];

		visitNode(node,function(node) {	
				// leaf nodes go to this level
				if(node.value>=0)
					node.level = level;

				// right part of tree shifted
				if(node.value>=i2) 
					node.value += 1;
				});

		// insert new node at i1
		visitNode(node,function(node) {
			if(node.value==i1)
				{
				node.value = -1;
				node.left = {value:i1,level:level,size:l1};
				node.right = {value:i2,level:level,size:l2};
				}	
			});

		}


	var xmin = graph.x+10;
	var xmax = graph.x + graph.w - 130;
	var ymin = graph.y + graph.hbar + 25;
	var ymax = graph.y + graph.h -70;

	ctx.fillStyle = "#000000";
	ctx.fillText(graph._z.nc+" classes",xmin+(xmax-xmin)/2,ymin-7);


	var lmin = grouping[ng][2];
	var lmax = level;
	if(lmin==lmax) 
		{
		level -=1;
		lmax -= 1;
		node.left.level -= 1;
		node.right.level -= 1;
		}
		
	var nn = 0;
	visitNode(node,function(node){
		if(!node.left)if(node.level==level) nn += 1;
		 })

	var nt = 0;
	visitNode(node,function(node){nt+=1});

	var dx = (xmax-xmin)/(nn-1);
	var x = xmin;
	visitNode(node,function(node){
		if(!node.left)if(node.level==level){node.x = x; x += dx}
		});	

	// draw dendrogram
	ctx.strokeStyle = "#000000";
	visitNode(node,function(node) {
		node.y = ymin+(node.level-lmin)*(ymax-ymin)/(lmax-lmin);
		node.x = Math.floor(node.x);
		node.y = Math.floor(node.y);
	
		if(!node.left) return;	
		if(!node.right) return;
		node.x = (node.left.x + node.right.x)/2;

		ctx.beginPath();
		ctx.moveTo(node.left.x,node.left.y);
		ctx.lineTo(node.left.x,node.y);
		ctx.lineTo(node.right.x,node.y);
		ctx.lineTo(node.right.x,node.right.y);
		ctx.stroke();
		});

	// compute max size of final classes
	var maxsize = 0;
	visitNode(node,function(node) {
		if(!node.left)if(node.level==level)if(node.size>maxsize)
			maxsize = node.size
			});

	// draw final classes
	var y = graph.y + graph.h - 65;
	visitNode(node,function(node) {
		if(node.left) return;
		if(node.level!=level) return;
		ctx.fillStyle = getColor(frac(graph.hue),1,1)
		var dy = 25*node.size/maxsize;
		if(dy<1) dy = 1;
		ctx.fillRect(node.x-5,y,10,dy);
		});

	// draw cursor
	ctx.fillStyle = "#FFFFFF";
	var y = graph.y + graph.h - 30;
	ctx.fillRect(xmin,y-5,xmax-xmin,10);
	ctx.strokeRect(xmin,y-5,xmax-xmin,10);

	var x = xmin+(xmax-xmin)*graph._z.nc/50;
	ctx.fillRect(x-5,y-10,10,20)
	ctx.strokeRect(x-5,y-10,10,20)

	ctx.beginPath()
	for(var i=0;i<=50;i+=10)
		{
		x = xmin+(xmax-xmin)*i/50.0;
		ctx.moveTo(x,y+15)
		ctx.lineTo(x,y+25)
		}
	ctx.stroke()

	ctx.fillStyle = PINK;
	var x = graph.x + graph.w -115;
	var y = graph.y + graph.h -65;
	drawRightArrow(ctx,x,y);

	graph._z.node = node;
	graph._z.level = level;
	}

ctx.textAlign = "center"
ctx.font = font;

for(var k=0;k<graph.ivalues.length;k++)
	{
	var title = values[graph.ivalues[k]]
	drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}

drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ivalues.length,100,20,"")

drawGraphOption(ctx,graph,2);

}

//***************************************************************************

function visitNode(node,func)
{
if(node.left) visitNode(node.left,func);
if(node.right) visitNode(node.right,func);
func(node);
}

//***************************************************************************

function drawRegresGraph(ctx,graph)
{
try	{
if((graph.ivalues.length>0)&&(graph.ivalue1>=0))
	{
	var sigma = Math.sqrt(graph._z.scr/(graph._z.nr-graph.ivalues.length-1));

	ctx.fillStyle = "#000000";
	ctx.strokeStyle = "#000000";
	ctx.textAlign = "left"
	ctx.lineWidth = 1

	var y = graph.y+60;

	ctx.textAlign = "left";
	ctx.fillText("Attribute",graph.x+30,y);

	ctx.textAlign = "right";
	ctx.fillText("Coef.",graph.x+230,y);

	ctx.fillText("Std deviation",graph.x+350,y);

	ctx.fillRect(graph.x+30,y+10,340,2)

	y += 30;
	ctx.fillText(trunc(graph._z.a[0],4),graph.x+230,y);

	var std = Math.sqrt(graph._z.d[0]*sigma*sigma);
	ctx.fillText(trunc(std,4),graph.x+350,y);

	for(var i=0;i<graph.ivalues.length;i++)
		{
		y += 20;
		ctx.textAlign = "left"
		ctx.fillText(values[graph.ivalues[i]],graph.x+30,y);
		ctx.textAlign = "right"
		ctx.fillText(trunc(graph._z.a[i+1],4),graph.x+230,y);

		var std = Math.sqrt(graph._z.d[i+1]*sigma*sigma);
		ctx.fillText(trunc(std,4),graph.x+350,y);
		}

	y += 40;
	ctx.textAlign = "left";
	ctx.fillText("Source",graph.x+30,y);
		
	ctx.textAlign = "right";
	ctx.fillText("\u03A3 squares",graph.x+230,y);
	ctx.fillText("d.o.f",graph.x+350,y);

	ctx.fillRect(graph.x+30,y+10,340,2)


	y += 30;
	ctx.textAlign = "left";
	ctx.fillText("Regression",graph.x+30,y);
	ctx.textAlign = "right"
	ctx.fillText(trunc(graph._z.sce,4),graph.x+230,y);
	ctx.fillText(""+graph.ivalues.length,graph.x+350,y);

	var scr = graph._z.sct - graph._z.sce;
	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Residuals",graph.x+30,y);
	ctx.textAlign = "right";
	ctx.fillText(trunc(scr,4),graph.x+230,y);
	ctx.fillText(""+(graph._z.nr-graph.ivalues.length-1),graph.x+350,y);

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Total",graph.x+30,y);
	ctx.textAlign = "right";
	ctx.fillText(trunc(graph._z.sct,4),graph.x+230,y);
	ctx.fillText(""+(graph._z.nr-1),graph.x+350,y);

	ctx.fillStyle = BLUE;
	drawRightArrow(ctx,graph.x+370,y-45);
	drawRightArrow(ctx,graph.x+370,y-25);

	ctx.fillStyle = "#000000";

	y += 40;
	ctx.textAlign = "left";
	ctx.fillText("Global results",graph.x+30,y);
	ctx.fillRect(graph.x+30,y+10,340,2)

	y += 30;
	ctx.textAlign = "left";
	ctx.fillText("Observations",graph.x+30,y);
	ctx.textAlign = "right";
	ctx.fillText(""+graph._z.nr,graph.x+260,y);

	var r2 = graph._z.sce/graph._z.sct;
	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("determination coef R\u00B2",graph.x+30,y);
	ctx.textAlign = "right";
	ctx.fillText(trunc(r2,4),graph.x+260,y);

	var sigma = Math.sqrt(graph._z.scr/(graph._z.nr-graph.ivalues.length-1));
	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Error \u03C3",graph.x+30,y);
	ctx.textAlign = "right";
	ctx.fillText(trunc(sigma,4),graph.x+260,y);	

	var n1 = graph.ivalues.length;
	var n2 = graph._z.nr - n1 -1;
	var ftest = (r2/graph.ivalues.length)/((1-r2)/(graph._z.nr-graph.ivalues.length-1));
	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Test-F ("+n1+","+n2+")",graph.x+30,y);
	ctx.textAlign = "right"
	ctx.fillText(trunc(ftest,4),graph.x+260,y);

	var pvalue = Fspin(ftest,n1,n2);
	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("p-value",graph.x+30,y);
	ctx.textAlign = "right";
	ctx.fillText(trunc(pvalue,4),graph.x+260,y);

	y += 30;
	ctx.textAlign = "left";
	if(pvalue<0.05)
		{
		ctx.fillStyle = "#008800";
		ctx.fillText("p-value < 0.05 : "+values[graph.ivalue1]+" is dependent of attributes",graph.x+30,y);
		}
	else
		{
		ctx.fillStyle = "#FF0000";
		ctx.fillText("p-value > 0.05 : "+values[graph.ivalue1]+" is not dependent of attributes",graph.x+30,y);
		}
	}
}
catch(err) { console.log(""+err) }

ctx.textAlign = "center";

for(var k=0;k<graph.ivalues.length;k++)
	{
	var title = values[graph.ivalues[k]]
	drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}

drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ivalues.length,100,20,"")

var title = (graph.ivalue1<0) ? "" : values[graph.ivalue1]
drawVValue(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title);
}

//***************************************************************************

function drawRadvizGraph(ctx,graph)
{

ctx.save();

if(graph.ivalues.length>=2)
	{
	var xc = graph.x +20 + (graph.w-100-20)/2;
	var yc = graph.y + graph.hbar + (graph.h-graph.hbar)/2;
	var rad = xc - graph.x - 30;
	if(rad> yc - graph.y - graph.hbar -10) rad = yc-graph.y-graph.hbar-10;
	
	ctx.strokeStyle = "#000000";
	ctx.beginPath()
	ctx.arc(xc,yc,rad,0,2*Math.PI,false);
	ctx.stroke();

	ctx.strokeStyle = "#CCCCCC";
	ctx.beginPath();
	ctx.arc(xc,yc,rad/2,0,2*Math.PI,false);
	ctx.stroke();

	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#000000";
	ctx.font = "10px helvetica"
	// coordinate of reference variables on the circle
	var xref = [];	
	var yref = [];
	for(var j=0;j<graph.ivalues.length;j++)
		{
		var alpha = -Math.PI/2+ j*Math.PI*2/graph.ivalues.length;
		xref.push(xc + rad*Math.cos(alpha));
		yref.push(yc + rad*Math.sin(alpha));
		if(j==0)
			{
			ctx.textAlign = "center";
			ctx.fillText(values[graph.ivalues[j]],xref[j],yref[j]-4);
			}
		else if(j<graph.ivalues.length/2)
			{
			ctx.textAlign = "left";
			ctx.fillText(values[graph.ivalues[j]],xref[j]+6,yref[j]+2);
			}
		else if(j==graph.ivalues.length/2)
			{
			ctx.textAlign = "center"
			ctx.fillText(values[graph.ivalues[j]],xref[j],yref[j]+10);
			}
		else
			{
			ctx.textAlign = "right";
			ctx.fillText(values[graph.ivalues[j]],xref[j]-4,yref[j]+2);
			}
		}

	ctx.fillStyle = "#000000";
	for(var j=0;j<graph.ivalues.length;j++)
		ctx.fillRect(xref[j]-3,yref[j]-3,7,7);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue	
		var record = vrecords[i];

		var sum = 0;
		for(var j=0;j<graph.ivalues.length;j++)
			sum += (record[graph.ivalues[j]]-graph._z.min[j])/(graph._z.max[j]-graph._z.min[j]);

		var x = 0;
		var y = 0;	
		for(var j=0;j<graph.ivalues.length;j++)
			{
			var vj = (record[graph.ivalues[j]]-graph._z.min[j])/(graph._z.max[j]-graph._z.min[j]);
			x += xref[j]*vj/sum;
			y += yref[j]*vj/sum;
			}

		if(graph.ilabel1<0)
			ctx.fillRect(x-2,y-2,4,4);
		else
			{
			ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]];
			ctx.fillRect(x-2,y-2,4,4);
			}
		}

	graph._z.xref = xref;
	graph._z.yref = yref;

	}

ctx.restore();

for(var k=0;k<graph.ivalues.length;k++)
	{
	var title = values[graph.ivalues[k]]
	drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}

drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ivalues.length,100,20,"")

var title = (graph.ilabel1<0) ? "" : labels[graph.ilabel1]
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title);
}

//***************************************************************************

function drawTernaryPlot(ctx,graph)
{

if(!graph.ivalues)	
	graph.ivalues = [];


ctx.textAlign = "center"

for(var k=0;k<graph.ivalues.length;k++)
	{
	var title = values[graph.ivalues[k]]
	drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20,title)
	}

drawHValue(ctx,graph.x+graph.w-105,graph.y+graph.hbar+5+25*graph.ivalues.length,100,20,"")

if(graph.ivalues.length<3) return;

var dx = graph.w-20;
var dy = graph.h-graph.hbar-20;
if(dy<dx*Math.sqrt(3)/2)
	dx = Math.floor(dy*2/Math.sqrt(3));
else
	dy = Math.floor(dx*Math.sqrt(3)/2);

ctx.strokeStyle = "#BBBBBB";
ctx.beginPath();
ctx.moveTo(graph.x+10,graph.y+graph.h-10);
ctx.lineTo(graph.x+10+dx,graph.y+graph.h-10);
ctx.lineTo(graph.x+10+dx/2,graph.y+graph.h-10-dy);
ctx.lineTo(graph.x+10,graph.y+graph.h-10);

ctx.moveTo(graph.x+10+dx/2,graph.y+graph.h-10);
ctx.lineTo(graph.x+10+3*dx/4,graph.y+graph.h-10-dy/2);
ctx.lineTo(graph.x+10+dx/4,graph.y+graph.h-10-dy/2);
ctx.lineTo(graph.x+10+dx/2,graph.y+graph.h-10);

ctx.moveTo(graph.x+10+dx/4,graph.y+graph.h-10);
ctx.lineTo(graph.x+10+dx/8,graph.y+graph.h-10-dy/4);
ctx.lineTo(graph.x+10+7*dx/8, graph.y+graph.h-10-dy/4);
ctx.lineTo(graph.x+10+3*dx/4, graph.y+graph.h-10);
ctx.lineTo(graph.x+10+3*dx/8, graph.y+graph.h-10-3*dy/4);
ctx.lineTo(graph.x+10+5*dx/8, graph.y+graph.h-10-3*dy/4);
ctx.lineTo(graph.x+10+dx/4, graph.y+graph.h-10);

ctx.stroke();

ctx.fillStyle = "#000000";

// draw points
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue

	ctx.fillStyle = "#000000";

	if(vrecords[i][graph.ivalues[0]]<0) continue;
	if(vrecords[i][graph.ivalues[1]]<0) continue;	
	if(vrecords[i][graph.ivalues[2]]<0) continue;
	var sum = vrecords[i][graph.ivalues[0]]+
			vrecords[i][graph.ivalues[1]]+
			vrecords[i][graph.ivalues[2]];

	var a = vrecords[i][graph.ivalues[0]]/sum;
	var b = vrecords[i][graph.ivalues[1]]/sum;

	var x = Math.round(graph.x+10+dx*(a+b/2));
	var y = Math.round(graph.y+graph.h-10-b*dy);

	ctx.fillRect(x-1,y-1,3,3);	
	}

	if(overlabel1>=0)
	{
	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue
		if( lrecords[i][overlabel1] != overkey1) continue;
		//if(!recordHilite(lrecords[i])) continue

		ctx.fillStyle = ctx.strokeStyle = "#000000";

		if(vrecords[i][graph.ivalues[0]]<0) continue;
		if(vrecords[i][graph.ivalues[1]]<0) continue;	
		if(vrecords[i][graph.ivalues[2]]<0) continue;
		var sum = vrecords[i][graph.ivalues[0]]+
				vrecords[i][graph.ivalues[1]]+
				vrecords[i][graph.ivalues[2]];

		var a = vrecords[i][graph.ivalues[0]]/sum;
		var b = vrecords[i][graph.ivalues[1]]/sum;

		var x = Math.round(graph.x+10+dx*(a+b/2));
		var y = Math.round(graph.y+graph.h-10-b*dy);

		ctx.fillRect(x-3,y-3,7,7);	
		}
	}

}

//***************************************************************************

function drawAssocGraph(ctx,graph)
{
if((graph.ilabel2>=0)&&(typeof(graph._z.commons)!="undefined"))
	{
	dx = (graph.w-30)/(graph._keys1.length-card(graph.omit)+1+graph._keys2.length)
	if(dx<3) dx = 3

	if((typeof(graph._z.clue)!="undefined")&&(graph._z.clue>=0))
		{
		ctx.fillStyle = "#EEEEEE"
		ctx.fillRect(graph.x,graph.y+graph.hbar+30+dx*graph._z.clue*2-dx/2,
			graph.w,2*dx)
		}

	for(var i=0;i<graph._z.commons.length;i++)
		{
		var y = graph.y + graph.hbar + 30 + dx*i*2

		var common2 = graph._z.commons[i][0].split("\t")
		var common1 = graph._z.commons[i][1]
	
		ctx.fillStyle = "#FF0000"		
		for(var j=0;j<common2.length;j++)
			{
			var k = Number(common2[j])
			var x = graph.x + 30 + k*dx
			if(hiliteMatch1(graph.ilabel2,graph._keys2[k]))
				{
				ctx.fillStyle = "#000000"
				ctx.fillRect(x-1,y-1,dx+1,dx+1)
				}
			else
				{
				ctx.fillStyle = "#FF0000"
				ctx.fillRect(x,y,dx-1,dx-1)
				}
			}

		ctx.fillStyle = "#0000FF"
		var k = -1
		/*
		for(var j=0;j<graph._keys1.length;j++)
			{
			var key1 = graph._keys1[j]
			if(key1 in graph.omit) continue
			k += 1
			if(!(j in common1)) continue
			var x = graph.x + 30 + graph._keys2.length*dx + dx + k*dx

			if(hiliteMatch1(graph.ilabel1,key1))
				{
				ctx.fillStyle = "#000000"
				ctx.fillRect(x-1,y-1,dx+1,dx+1)
				}
			else
				{
				ctx.fillStyle = "#0000FF"
				ctx.fillRect(x,y,dx-1,dx-1)
				}
			}
		*/
		for(var jj=0;jj<graph._z.order1.length;jj++)
			{
			var j = graph._z.order1[jj]
			var key1 = graph._keys1[j]
			if(key1 in graph.omit) continue
			k += 1
			if(!(j in common1)) continue
			var x = graph.x + 30 + graph._keys2.length*dx + dx + k*dx

			if(hiliteMatch1(graph.ilabel1,key1))
				{
				ctx.fillStyle = "#000000"
				ctx.fillRect(x-1,y-1,dx+1,dx+1)
				}
			else
				{
				ctx.fillStyle = "#0000FF"
				ctx.fillRect(x,y,dx-1,dx-1)
				}
			}
		}
	}

var title1 = getGraphLabel1(graph)
drawHLabel(ctx,graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20,title1)

var title2 = getGraphLabel2(graph)
drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.margin2,20,100,title2)

}

//***************************************************************************

function drawPaletteGraph(ctx,graph)
{
var dx = (graph.w-2)/5
var dy = (graph.h-graph.hbar-2)/5

for(var i=0;i<5;i++)
	for(var j=0;j<5;j++)
		{
		var x = graph.x + 2 +i*dx
		var y = graph.y + graph.hbar + 2 + j*dy
		ctx.fillStyle = getColor((5*j+i)*5/25/6,1,1)
		ctx.fillRect(x,y,dx-2,dy-2)
		ctx.strokeStyle = "#000000"
		ctx.strokeRect(x,y,dx-2,dy-2)
		}
}

//***************************************************************************

function draw()
{
try 	{

mywidth = window.innerWidth;
myheight = window.innerHeight;



canvas.width = mywidth;
canvas.height = myheight;

var ctx = canvas.getContext("2d")

// default settings
ctx.lineWidth = 1
ctx.lineJoin = "round"
ctx.font = "14px helvetica"
ctx.textAlign = "center"

// background
ctx.fillStyle = "#DEF7D6";
ctx.fillStyle = "#EFF8E7";
ctx.fillRect(0,0,mywidth,myheight)

// graphs
for(var i=0;i<graphs.length;i++)
	{
	var graph = graphs[i]

    if((i==graphindex)&&(action in GACTIONS))
        {
        ctx.fillStyle = GRAY
        ctx.fillRect(graph.x,graph.y,graph.w,graph.h);
        continue;
        }

	// bar height

	ctx.save()
	ctx.beginPath()	
	ctx.rect(graph.x-1,graph.y-1,graph.w+2,graph.h+2)
	ctx.clip()

	// background
	ctx.fillStyle = "#FFFFFF"
	ctx.fillRect(graph.x,graph.y,graph.w,graph.h)

	if(graph.iunit!=0)
		{
		ctx.fillStyle = BLUE;
		ctx.fillRect(graph.x,graph.y,graph.w,graph.hbar);
		}

	// border
	ctx.strokeStyle = "#000000"
	ctx.strokeRect(graph.x,graph.y,graph.w,graph.h)
	// title bar	
	ctx.beginPath()		
	ctx.moveTo(graph.x,graph.y+graph.hbar)
	ctx.lineTo(graph.x+graph.w,graph.y+graph.hbar)
	ctx.stroke()

	// title bar
	ctx.fillStyle = "#000000"
	ctx.strokeStyle = "#000000"
	var hh = 13
	for(var j=0;j<graph.selection.length;j+=2)
		{
		var k = graph.selection[j]
		if(k>=1000)
			ctx.fillText("set"+(k-1000+1),graph.x+graph.w/2,graph.y+hh)
		else
			ctx.fillText(graph.selection[j+1],graph.x+graph.w/2,graph.y+hh)
		ctx.beginPath()
		/*
		ctx.arc(graph.x+graph.w-10,graph.y+hh-5,4,0,2*Math.PI,true)
		*/
		ctx.moveTo(graph.x+graph.w-20,graph.y+hh-10)
		ctx.lineTo(graph.x+graph.w-10,graph.y+hh-5)
		ctx.lineTo(graph.x+graph.w-20,graph.y+hh)
		ctx.lineTo(graph.x+graph.w-20,graph.y+hh-10)
		ctx.stroke()
		hh += 16
		}

	// close box
	if(graph.closeable)
		{
		if((action==CLOSE_GRAPH)&&(graphindex==i))	
			ctx.fillStyle = GRAY
		else
			ctx.fillStyle = "#FFFFFF"
		ctx.fillRect(graph.x+5,graph.y+4,8,8)	
		ctx.strokeRect(graph.x+5,graph.y+4,8,8)
		}

	GDRAW[graph.type](ctx,graph);
	//drawGraph(ctx,graph)

	drawGraphStickers(ctx,graph)

	// right grow box
	ctx.fillStyle = "#FFFFFF"
	ctx.strokeStyle = "#000000"
	ctx.fillRect(graph.x+graph.w-10,graph.y+graph.h-10,10,10)
	ctx.strokeRect(graph.x+graph.w-10,graph.y+graph.h-10,10,10)

	ctx.restore()
	}

var y = -barshift
// labels
ctx.font = "14px helvetica"
ctx.textAlign = "center"
for(var i=0;i<labels.length;i++)
	drawHLabel(ctx,mywidth-100,y+i*20,100,20,labels[i])
y += labels.length*20

y += 20

// icons
var ni = Math.ceil(NBTYPE3/5)*5
for(var i=0;i<ni;i++)	
	{
	drawIcon(ctx,i,mywidth-100+20*(i%5),y)
	if((i%5)==4)
		y += 20
	}

y += 20

// values
for(var i=0;i<values.length;i++)
	drawHValue(ctx,mywidth-100,y+i*20,100,20,values[i])
y += 20*values.length


y += 20

// sticker
drawSticker(ctx,mywidth-100,y,100,20,-1,"")

// dock
drawDock(ctx,mywidth,myheight)

if((action==REMOVE_LABEL)||(action==REMOVE_VALUE))
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-20,myheight-40,20,20);
	}

// if dragging a label
if((action==DRAG_LABEL)||(action==SET_LABEL1)||(action==SET_LABEL2))
	{
	if(!informula) {
		ctx.strokeStyle = GRAY
		ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
		}
	}

if((action==DRAG_VALUE)||(action==SET_VALUE1)||(action==SET_VALUE2))
	{
	if(!informula)
		{
		ctx.strokeStyle = GRAY
		ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
		}
	}

if((action==SET_LABEL1)||(action==SET_VALUE1)||(action==SWAP_VALUE21))
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect( graph.x+graph.w-100-graph.margin1, graph.y+graph.hbar+5,100,20)
	}

if((action==SET_LABEL2)||(action==SET_VALUE2)||(action==SWAP_VALUE12))
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)
	}

if(action==SET_LABEL3)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+graph.w-100-graph.margin3,graph.y+graph.h-25,100,20)
	}

if(action==SET_LABELN)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+graph.w-105,graph.y+graph.hbar+5+25*destlabelindex,100,20)	
	}

if(action==SET_VALUEN)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+graph.w-105,graph.y+graph.hbar+5+25*destvalueindex,100,20)	
	}

if(action==DRAG_AXIS)
	{
	ctx.fillStyle = GRAY
	ctx.fillRect(ptmove.x-10,ptmove.y-10,20,20)
	}

if((action==DRAG_TABLE)||(action==DRAG_INSPECTOR)||(action==DRAG_ADD)||(action==DRAG_CLONE)||
	(action==EXPORT_CHART)||(action==DRAG_SORT))
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-10,ptmove.y-10,20,20);
	}

if(action==ADD_LABEL)
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-100,0-barshift,100,labels.length*20);
	}
if((action==SORT_DATA)&&(labelindex>=0))
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-100,labelindex*20-barshift,100,20);
	}
if((action==DRAG_TYPE)||(action==SET_TYPE))
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-10,ptmove.y-10,20,20)
	}

if(action==SET_GRAPH_UNIT)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x,graph.y,graph.w,graph.h)
	}

if(action==DRAG_SLICE)
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-150,ptmove.y-20,300,300)
	}

if(action==DROP_SLICE)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY	
	ctx.fillRect(graph.x,graph.y+graph.h-20,graph.w,20)
	}

if((action==SET_SELECTION)||(action==CREATE_SET)||(action==PASTE_TITLE)||
	(action==CREATE_BINSET))
	{
	var graph = graphs[graphindex2]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x,graph.y,graph.w,graph.hbar)
	}

if((action==DRAG_LABEL1)||(action==DRAG_VALUE1))
	{
	var graph = graphs[graphindex]		
	ctx.fillStyle = GRAY
	ctx.fillRect(ptmove.x-50,graph.y+graph.hbar+5,100,20)
	}
else if((action==REMOVE_LABEL1)||(action==REMOVE_VALUE1))
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
	}

if((action==DRAG_LABEL2)||(action==DRAG_VALUE2))
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+5,ptmove.y-50,20,100)
	}
else if((action==REMOVE_LABEL2)||(action==REMOVE_VALUE2))
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-10,ptmove.y-10,20,100)
	}
else if(action==DRAG_LABEL3)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(ptmove.x-50,graph.y+graph.h-25,100,20)
	}
else if(action==REMOVE_LABEL3)
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
	}
else if((action==REMOVE_LABELN)||(action==REMOVE_VALUEN))
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
	}

if(action==DRAG_BIN)
	{
	if(sliceindex==0)
		var dx = 20*card(graphs[graphindex].omit)+20
	else
		var dx = 20
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-10,ptmove.y-5,dx,20)
	}
else if((action==INVERT_BIN)&&(sliceindex==0))
	{
	var dx = 20*card(graphs[graphindex].omit)+20
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-10,ptmove.y-5,dx,20)
	}
else if(action==REMOVE_BIN)
	{
	var graph = graphs[graphindex]
	if(graph.type==TYPE_PIE)
		{
		ctx.fillStyle = GRAY
		var r1 = graph.w/2
		var r2 = (graph.h-graph.hbar-20)/2
		var xc = graph.x+r1
		var yc = graph.y+graph.hbar+r2
		var r = (r1<r2) ? r1 : r2
		ctx.beginPath()
		ctx.arc(xc,yc,r,0,Math.PI*2,true)
		ctx.fill()	
		}
	else if(graph.type==TYPE_BAR)
		{
		ctx.fillStyle = GRAY
		ctx.fillRect(graph.x,graph.y+graph.hbar,graph.w,
			graph.h-graph.hbar-20)
		}
	}

if((action==PASTE_LABEL11)||(action==PASTE_LABEL21)||(action==SWAP_LABEL21)||
	(action==PASTE_BINLABEL11))
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex2]
	ctx.fillRect(graph.x+graph.w-100-graph.margin1,graph.y+graph.hbar+5,100,20)
	}
else if((action==PASTE_LABEL12)||(action==PASTE_LABEL22)||(action==SWAP_LABEL12)||(action==PASTE_BINLABEL12))
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex2]
	ctx.fillRect(graph.x+5,graph.y+graph.hbar+graph.margin2,20,100)
	}
else if(action==SWAP_LABELN)
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex]
	ctx.fillRect(graph.x+graph.w-110,graph.y+graph.hbar+5+25*destlabelindex,100,20)
	}
else if(action==SWAP_VALUEN)
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex]
	ctx.fillRect(graph.x+graph.w-110,graph.y+graph.hbar+5+25*destvalueindex,100,20)
	}
else if(action==DOCK_GRAPH)
	{
	ctx.fillStyle = GRAY
	ctx.fillRect(0,myheight-40,20+20*dock.length,20)
	}
else if(action==UNDOCK_GRAPH)
	{
	var graph = dock[graphindex]
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-graph.w/2,ptmove.y-20,graph.w,graph.h)
	}
else if((action==CREATE_GRAPH1)||(action==CREATE_GRAPH2))
	{	
	ctx.fillStyle = GRAY
	var i = typeindex % 5
	var j = Math.floor(typeindex/5)
	ctx.fillRect(mywidth-100+i*20,labels.length*20+20+j*20,20,20)
	}
else if((action==CREATE_VALUE)||(action==ADD_VALUE)||(action==CREATE_PROJECTION)||(action==CREATE_BOOLEAN))
	{	
	var ni = Math.ceil(NBTYPE3/5)
	ctx.fillStyle = GRAY
	ctx.fillRect(mywidth-100,labels.length*20+20+ni*20+20-barshift,100,values.length*20)
	}
else if((action==SORT_DATA)&&(valueindex>=0))
	{
	var ni = Math.ceil(NBTYPE3/5)
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-100,
		labels.length*20+20+ni*20+20+20*valueindex-barshift,100,20);
	}
else if((action==CREATE_LABEL)||(action==CREATE_KGROUP))
	{
	ctx.fillStyle = GRAY
	ctx.fillRect(mywidth-100,0,100,labels.length*20)
	}
else if(action==DRAG_TITLE)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(ptmove.x-graph.w+10,ptmove.y-10,graph.w,20)
	}
else if(action==REMOVE_TITLE)
	{
	var graph = graphs[graphindex]
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-graph.w+10,ptmove.y-10,graph.w,20)
	}
else if(action==DRAG_HUE)
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-10,ptmove.y-10,20,20)
	}
else if(action==CHANGE_HUE)
	{
	graph = graphs[graphindex]	
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x,graph.y,graph.w,graph.h)
	}
else if(action==ADD_STICKER)
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
	}
else if(action==DRAG_STICKER)
	{
	var graph = graphs[graphindex]
	var sticker = graph.stickers[stickerindex]
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-sticker.w/2,ptmove.y-sticker.h/2,sticker.w,sticker.h)
	}
else if(action==ASSIGN_STICKER)
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex]
	var sticker = graph.stickers[stickerindex]
	var x = graph.x + graph.w*sticker.x
	var y = graph.y + graph.hbar + (graph.h-graph.hbar)*sticker.y
	ctx.fillRect(x-sticker.w/2,y-sticker.h/2,sticker.w,sticker.h)
	}

// message
ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"
ctx.fillRect(0,myheight-20,mywidth,20)
ctx.strokeRect(0,myheight-20,mywidth,20)

ctx.fillStyle = "#CCCCCC"
ctx.textAlign = "left"
ctx.fillText(VERSION,5,myheight-5)

ctx.fillStyle = "#000000"
if(typeof(message)=="undefined") message = ""

var i = message.indexOf(":")
var j = message.indexOf(":",i+1)
if((i<0)||(j>0))
	{
	ctx.textAlign = "center"
	ctx.fillText(message,mywidth/2,myheight-5)
	}
else
	{
	ctx.textAlign = "right"
	ctx.fillText(message.substring(0,i),mywidth*2/3-5,myheight-5)
	ctx.textAlign = "left"
	ctx.fillText(message.substring(i),mywidth*2/3+5,myheight-5)
	}

}
catch(e) {
	alert("draw error "+e)
	}
}

//***************************************************************************

function sortData()
{

	// stable sort

	// create index table
	var n = vrecords.length;
	var indices = new Array(n);
	for(var i=0;i<n;i++)
		indices[i] = i;

	if(labelindex>=0)
		{
		indices.sort(compareLabels);
		}

	if(valueindex>0)
		{
		indices.sort(compareValues);
		}

	// new records
	var newlrecords = new Array(n);
	for(var i=0;i<n;i++)
		newlrecords[i] = lrecords[indices[i]];
	lrecords = newlrecords;

	var newvrecords = new Array(n);
	for(var i=0;i<n;i++)
		newvrecords[i] = vrecords[indices[i]];
	vrecords = newvrecords;

	function compareLabels(a,b) {
		var c = lrecords[a][labelindex].localeCompare(lrecords[b][labelindex]);
		return c==0 ? a-b : c;
	}

	function compareValues(a,b) {
		var c = vrecords[a][valueindex] - vrecords[b][valueindex];		
		return c==0 ? a-b : c;
	}

}

//***************************************************************************

var highwin = null;

function exportCharts() {

try {

if(highwin) highwin.close();

highwin = window.open("about:blank","charts_"+myconfig.dataset,
	"width="+mywidth+",height="+myheight+",scrollbars=no,toolbar=no,status=no,menubar=no")
if(highwin==null)
	{
	alert("Allow popup windows for this site");
	return
	}

highwin.myDrawChart = drawHighCharts;

var doc = highwin.document

function wr(s) { doc.writeln(s) }

doc.open()
wr('<html>');
wr('<head>');
wr('<title>'+myconfig.dataset+'</title>');
wr('<script src="jquery.js"></script>');
wr('<script src="highcharts.js"></script>');
wr('<script src="exporting.js"></script>');
wr('<script>');
wr('function init() {');
wr('try { myDrawChart($,Highcharts); } catch(err) { alert(err) }');
wr('}');
wr('</script>');
wr('</head>');
wr('<style>');
wr('body	{ position:fixed; width:100%; height:100%; background-color:#FFFFFF;}');

var fmt = '#pie{{1}}    { position:absolute;width:{{2}}px;height:{{3}}px;left:{{4}}px;top:{{5}}px;background-color:transparent;}';

if(graphindex>=0)
	{
	var i = graphindex;
	wr(format(fmt,i,graphs[i].w,graphs[i].h+100,100,50));
	}
else
	for(var i=0;i<graphs.length;i++)
		if((graphs[i].type==TYPE_PIE)||(graphs[i].type==TYPE_BAR)||(graphs[i].type==TYPE_LINE))
			wr(format(fmt,i,graphs[i].w,graphs[i].h+100,graphs[i].x,graphs[i].y));

wr('</style>');
wr('<body onload="init()">');

if(graphindex>=0)
	wr(format('<div id="pie{{1}}"></div>',graphindex))
else
	for(var i=0;i<graphs.length;i++)
		if((graphs[i].type==TYPE_PIE)||(graphs[i].type==TYPE_BAR)||(graphs[i].type==TYPE_LINE))
			wr(format('<div id="pie{{1}}"></div>',i));

wr('</body>');
wr('</html>');
doc.close();



} catch(err) { console.log(err) }
}

//***************************************************************************

function drawHighCharts($,Highcharts) {

// adjust chart height according to legend height

(function (H) {
    H.wrap(H.Legend.prototype, 'render', function (proceed) {
        var chart = this.chart;

        proceed.call(this);

        if (this.options.adjustChartSize && this.options.verticalAlign === 'bottom') {
            chart.chartHeight += this.legendHeight;
            chart.marginBottom += this.legendHeight;
            chart.container.style.height = chart.container.firstChild.style.height = chart.chartHeight + 'px';

            this.group.attr({
                translateY: this.group.attr('translateY') + this.legendHeight
            });
        }
    });

}(Highcharts));

if(graphindex>=0)
	drawHighChartsOne($,graphindex,true);
else
	for(var i=0;i<graphs.length;i++)
		drawHighChartsOne($,i,false);
}

//***************************************************************************

function drawHighChartsOne($,index,alone)
{

if(graphs[index].type==TYPE_PIE)
	drawHighChartsPie($,index,alone);
else if(graphs[index].type==TYPE_BAR)
	drawHighChartsBar($,index,alone);
else if(graphs[index].type==TYPE_LINE)
	drawHighChartsLine($,index,alone);
}

//***************************************************************************

function drawHighChartsLine($,index,alone)
{
var graph = graphs[index];

var categories = [];
var series = [];
var options = {};
var legend = {};

if(graph.ilabel2<0) 
	{
	var data = [];
	
	var bottom = 0;

	for(var i=0;i<graph._keys1.length;i++)
		{
		var key = graph._keys1[i]
		if(key in graph.omit) continue
		categories.push(key);
		data.push(graph._count[key])
		if(key.length>bottom)
			bottom = key.length;
		}

	bottom = bottom*9;

	series = [{name:getGraphLabel1(graph),data:data}]

	legend = {enabled:false};
	}
else
	{

	var bottom = 0;

	// two dimensions
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i];
		if(key1 in graph.omit) continue
		categories.push(key1);
		if(key1.length>bottom)
			bottom = key1.length;
		}

	bottom = bottom*9;

	bottom += 30;

	for(var j=graph._keys2.length-1;j>=0;j--)
		{
		var key2 = graph._keys2[j];
		var data = [];
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
			var key = key1+"\t"+key2;
			data.push(key in graph._count ? graph._count[key]: 0);
			}
		series.push({name:key2,data:data});
		}

	legend = {enabled:true,adjustChartSize:true}
	}

var subtitle = "";
for(var i=0;i<graph.selection.length;i+=2)
	subtitle += labels[graph.selection[i+i]]+" : "+graph.selection[i+i+1]+"<br>"
subtitle += "<b>"+getGraphLabel1(graph)+"</b>"

var div = $("#pie"+index);

div.css("top",(graph.y-30)+"px");
div.css("height",(graph.h+bottom)+"px");

$(function () {
	div.highcharts({
		chart: {
			backgroundColor: "transparent",
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
			type: "line"
		},
		title: {
			text: ""
		},
		subtitle: {
			text : subtitle,
			style: { "font-size":"14px" }
		},
		xAxis: {
			categories : categories,
			labels: { rotation: -90, align: "right" }
		},
		yAxis: {
			min: 0,
			title: {text: values[graph.iunit]}
		},
		series: series
		,
		legend:legend
		});
	})

}

//***************************************************************************

function drawHighChartsBar($,index,alone)
{
var graph = graphs[index];

var categories = [];
var series = [];
var options = {};
var legend = {};
var ytitle = "";

if(graph.ilabel2<0) 
	{
	// one dimension

	var data = [];
	
	var bottom = 0;

	for(var i=0;i<graph._keys1.length;i++)
		{
		var key = graph._keys1[i]
		if(key in graph.omit) continue
		categories.push(key);
		data.push(graph._count[key])
		if(key.length>bottom)
			bottom = key.length;
		}

	bottom = bottom*9;

	series = [{name:getGraphLabel1(graph),data:data}]

	var pw = Math.floor(graph.w/categories.length*0.6);
	options = { column: {pointPadding: 0.2, borderWidth: 0 , pointWidth: pw }};

	legend = {enabled:false};
	ytitle = values[graph.iunit];
	}
else
	{

	var bottom = 0;

	// two dimensions
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i];
		if(key1 in graph.omit) continue
		categories.push(key1);
		if(key1.length>bottom)
			bottom = key1.length;
		}

	var pw = Math.floor(graph.w/categories.length*0.6);
	bottom = bottom*9;	// for vertical labels

	bottom += 30;	// for legend

	if(((graph.option%3)==0)||((graph.option%3)==1))
		{
		// normal graph
	
		for(var j=graph._keys2.length-1;j>=0;j--)
			{
			var key2 = graph._keys2[j];
			var data = [];
			for(var i=0;i<graph._keys1.length;i++)
				{
				var key1 = graph._keys1[i];
				var key = key1+"\t"+key2;
				data.push(key in graph._count ? graph._count[key]: 0);
				}
			series.push({name:key2,data:data});	
			}
		options = { column: {pointPadding: 0.2, borderWidth: 0 ,
			 pointWidth: pw , 
			stacking: (graph.option%3)==0 ? "normal" : "percent" }};
		ytitle = values[graph.iunit];

		legend = {enabled:true,adjustChartSize:true}
		}

	if((graph.option%3)==2)
		{
		// average graph
		var ymax = 0;
		var data = [];
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
			if(key1 in graph.omit) continue
			var average = 0;
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(key in graph._count)
					average += graph._count[key];
				}
			average /= graph._nmod[key1];
			data.push(average);
			}

		series.push({name:getGraphLabel1(graph),data:data});
		options={ column: {pointPadding: 0.2, borderWidth: 0 , pointWidth: pw}};
		ytitle = values[graph.iunit]+" / "+labels[graph.ilabel2];
		legend = {enabled:false};
		}

	}

var subtitle = "";
for(var i=0;i<graph.selection.length;i+=2)
	subtitle += labels[graph.selection[i+i]]+" : "+graph.selection[i+i+1]+"<br>"
subtitle += "<b>"+getGraphLabel1(graph)+"</b>"

var div = $("#pie"+index);

console.log("graph.h="+graph.h+" bottom="+bottom);
div.css("top",(graph.y-30)+"px");
div.css("height",(graph.h+bottom)+"px");

$(function () {
	div.highcharts({
		chart: {
			backgroundColor: "transparent",
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
			type: "column"
		},
		title: {
			text: ""
		},
		subtitle: {
			text : subtitle,
			style: { "font-size":"14px" }
		},
		xAxis: {
			categories : categories,
			labels: { rotation: -90, align: "right" }
		},
		yAxis: {
			min: 0,
			title: {text: ytitle }
		},
		plotOptions: options
		,
		series: series
		,
		legend:legend
		});
	})

}

//***************************************************************************

function drawHighChartsPie($,index,alone)
{
var graph = graphs[index];

// compute margins
var sum = 0;
for(var j=0;j<graph._keys1.length;j++)
    {
    var key = graph._keys1[j]
    if(key in graph.omit) continue
	sum += graph._count[key];
	}

// compute margins needed to display the labels
var left = 0;
var right = 0;
var sub = 0;
for(var j=0;j<graph._keys1.length;j++)
	{
    var key = graph._keys1[j]
    if(key in graph.omit) continue
	if(sub<sum/2)
		right = Math.max(right,Math.floor((key.length+8)*10));
	else
		left = Math.max(left, Math.floor((key.length+8)*10));
	sub += graph._count[key];
	}

var data = [];
for(var j=0;j<graph._keys1.length;j++)
	{
    var key = graph._keys1[j]
	if(key in graph.omit) continue;
	data.push([key,graph._count[key]]);
	}

var subtitle = "";
for(var i=0;i<graph.selection.length;i+=2)
	subtitle += labels[graph.selection[i+i]]+" : "+graph.selection[i+i+1]+"<br>"
subtitle += "<b>"+getGraphLabel1(graph)+ ((graph.iunit==0) ? "" : " : "+values[graph.iunit])+"</b>"

// adjust graph position and size to take the margins into account
var div = $("#pie"+index);

div.css("top",(graph.y-50)+"px");
div.css("width",(graph.w+left+right)+"px");
if(!alone)
	div.css("left",(graph.x-(left+right)/2)+"px");

$(function () {
	div.highcharts({
        chart: {
			backgroundColor: "transparent",
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
			text: ""
        },
		subtitle: {
			text : subtitle,
			style: { "font-size":"14px" }
		},
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: getGraphLabel1(graph),
			innerSize: graph.option%4 <2 ? '0%' : '50%',
            data: data
        }]
    });
});
}

//***************************************************************************

function format(fmt) {
	var args = arguments;
	return fmt.replace(/\{\{\d+\}\}/g,function(x) {
		return args[Number(x.match(/\d+/))]	
	});

}

//***************************************************************************
//***************************************************************************

/*  The following JavaScript functions for calculating normal and
	chi-square probabilities and critical values were adapted by
	John Walker from C implementations
	written by Gary Perlman of Wang Institute, Tyngsboro, MA
	01879.  Both the original C code and this JavaScript edition
	are in the public domain.  */

/*  POZ  --  probability of normal z value

	Adapted from a polynomial approximation in:
			Ibbetson D, Algorithm 209
			Collected Algorithms of the CACM 1963 p. 616
	Note:
			This routine has six digit accuracy, so it is only useful for absolute
			z values < 6.  For z values >= to 6.0, poz() returns 0.0.
*/

function poz(z) {
	var y, x, w;
	var Z_MAX = 6.0;              /* Maximum meaningful z value */
	
	if (z == 0.0) {
		x = 0.0;
	} else {
		y = 0.5 * Math.abs(z);
		if (y >= (Z_MAX * 0.5)) {
			x = 1.0;
		} else if (y < 1.0) {
			w = y * y;
			x = ((((((((0.000124818987 * w
					 - 0.001075204047) * w + 0.005198775019) * w
					 - 0.019198292004) * w + 0.059054035642) * w
					 - 0.151968751364) * w + 0.319152932694) * w
					 - 0.531923007300) * w + 0.797884560593) * y * 2.0;
		} else {
			y -= 2.0;
			x = (((((((((((((-0.000045255659 * y
						   + 0.000152529290) * y - 0.000019538132) * y
						   - 0.000676904986) * y + 0.001390604284) * y
						   - 0.000794620820) * y - 0.002034254874) * y
						   + 0.006549791214) * y - 0.010557625006) * y
						   + 0.011630447319) * y - 0.009279453341) * y
						   + 0.005353579108) * y - 0.002141268741) * y
						   + 0.000535310849) * y + 0.999936657524;
		}
	}
	return z > 0.0 ? ((x + 1.0) * 0.5) : ((1.0 - x) * 0.5);
}


var BIGX = 20.0;                  /* max value to represent exp(x) */

function ex(x) {
	return (x < -BIGX) ? 0.0 : Math.exp(x);
}   

/*  POCHISQ  --  probability of chi-square value

		  Adapted from:
				  Hill, I. D. and Pike, M. C.  Algorithm 299
				  Collected Algorithms for the CACM 1967 p. 243
		  Updated for rounding errors based on remark in
				  ACM TOMS June 1985, page 185
*/

function pochisq(x, df) {
	var a, y, s;
	var e, c, z;
	var even;                     /* True if df is an even number */

	var LOG_SQRT_PI = 0.5723649429247000870717135; /* log(sqrt(pi)) */
	var I_SQRT_PI = 0.5641895835477562869480795;   /* 1 / sqrt(pi) */
	
	if (x <= 0.0 || df < 1) {
		return 1.0;
	}
	
	a = 0.5 * x;
	even = !(df & 1);
	if (df > 1) {
		y = ex(-a);
	}
	s = (even ? y : (2.0 * poz(-Math.sqrt(x))));
	if (df > 2) {
		x = 0.5 * (df - 1.0);
		z = (even ? 1.0 : 0.5);
		if (a > BIGX) {
			e = (even ? 0.0 : LOG_SQRT_PI);
			c = Math.log(a);
			while (z <= x) {
				e = Math.log(z) + e;
				s += ex(c * z - a - e);
				z += 1.0;
			}
			return s;
		} else {
			e = (even ? 1.0 : (I_SQRT_PI / Math.sqrt(a)));
			c = 0.0;
			while (z <= x) {
				e = e * (a / z);
				c = c + e;
				z += 1.0;
			}
			return c * y + s;
		}
	} else {
		return s;
	}
}

/*  CRITCHI  --  Compute critical chi-square value to
				 produce given p.  We just do a bisection
				 search for a value within CHI_EPSILON,
				 relying on the monotonicity of pochisq().  */

function critchi(p, df) {
	var CHI_EPSILON = 0.000001;   /* Accuracy of critchi approximation */
	var CHI_MAX = 99999.0;        /* Maximum chi-square value */
	var minchisq = 0.0;
	var maxchisq = CHI_MAX;
	var chisqval;
	
	if (p <= 0.0) {
		return maxchisq;
	} else {
		if (p >= 1.0) {
			return 0.0;
		}
	}
	
	chisqval = df / Math.sqrt(p);    /* fair first value */
	while ((maxchisq - minchisq) > CHI_EPSILON) {
		if (pochisq(chisqval, df) < p) {
			maxchisq = chisqval;
		} else {
			minchisq = chisqval;
		}
		chisqval = (maxchisq + minchisq) * 0.5;
	}
	return chisqval;
}

//	TRIMFLOAT  --  Trim a floating point number to maximum number of digits

function trimfloat(ov, d) {
	var o = "", v = ov.toString();
var c, i, n = 0, indec = false, aftdec = false;

for (i = 0; i < v.length; i++) {
	c = v.charAt(i);
	if (!indec) {
		if (c == '.') {
		indec = true;
	}
	o += c;
	} else {
		if (aftdec) {
		o += c;
	} else {
		if ((c >= '0') && (c <= '9')) {
			if (n < d) {
			o += c;
					}
		n++;
		} else {
			aftdec = true;
		o += c;
		}
	}
	}
}
return o;
}

//***************************************************************************

// source :  http://vassarstats.net

var ipj2 = 2.0/Math.PI; 
var pi = Math.PI;

function Fspin(f,df1,df2) {
var x=df2/(df1*f+df2);
if((df1%2)==0) {return LJspin(1-x,df2,df1+df2-4,df2-2)*Math.pow(x,df2/2)}
if((df2%2)==0){return 1-LJspin(x,df1,df1+df2-4,df1-2)*Math.pow(1-x,df1/2)}

var tan = Math.atan(Math.sqrt(df1*f/df2));
var a = tan*ipj2;
var sat = Math.sin(tan);
var cot=Math.cos(tan);
if(df2>1) {a=a+sat*cot*LJspin(cot*cot,2,df2-3,-1)*ipj2}
if(df1==1) { return 1-a }

var c=4*LJspin(sat*sat,df2+1,df1+df2-4,df2-2)*sat*Math.pow(cot,df2)/pi;
if(df2==1) { return 1-a+c/2 }

var k=2;
while(k<=(df2-1)/2) {c=c*k/(k-.5); k=k+1 }
return 1-a+c;

}<!--end.f.Fspin-->


function LJspin(q,i,j,b) {
var zz=1;
var z=zz;
var k=i;
while(k<=j) { zz=zz*q*k/(k-b); z=z+zz; k=k+2 }
    return z
}<!--end.f.LJspin-->


//***************************************************************************

function clone(o)
{
if(o instanceof Array)
	{
	var newo = []
	for(var i=0;i<o.length;i++)
		newo.push(clone(o[i]))	
	return newo
	}
else if(o instanceof Object)
	{
	var newo = {}
	for(var x in o)
		newo[x] = clone(o[x])
	return newo
	}
else 
	return o
}

//***************************************************************************


function cdivA(ar, ai, br, bi, A, in1, in2, in3){
// Division routine for dividing one complex number into another:
// This routine does (ar + ai)/(br + bi) and returns the results in the specified
// elements of the A matrix.

 var s, ars, ais, brs, bis;

 s = Math.abs(br) + Math.abs(bi);
 ars = ar/s;
 ais = ai/s;
 brs = br/s;
 bis = bi/s;
 s = brs*brs + bis*bis;
 A[in1][in2] = (ars*brs + ais*bis)/s;
 A[in1][in3] = (-(ars*bis) + ais*brs)/s;
 return;
} // End cdivA

function hqr2(N, A, B, low, igh, wi, wr, oPar){
/* Computes the eigenvalues and eigenvectors of a real upper-Hessenberg Matrix using the QR method. */

var norm = 0.0, p, q, ra, s, sa, t = 0.0, tst1, tst2, vi, vr, w, x, y, zz;
var k = 0, l, m, mp2, en = igh, incrFlag = 1, its, itn = 30*N, enm2, na, notlas;

for (var i = 0; i < N; i++){ // Store eigenvalues already isolated and compute matrix norm.
 for (var j = k; j < N; j++)
  norm += Math.abs(A[i][j]);
 k = i;
 if ((i < low) || (i > igh)){
  wi[i] = 0.0;
  wr[i] = A[i][i];
 } //End if (i < low or i > igh)
}  // End for i

// Search next eigenvalues
while (en >= low){

 if (incrFlag) { //Skip this part if incrFlag is set to 0 at very end of while loop
  its = 0;
  na = en - 1;
  enm2 = na - 1;
 } //End if (incrFlag)
 else
  incrFlag = 1;
 
  /*Look for single small sub-diagonal element for l = en step -1 until low */

 for (var i = low; i <= en; i++){
  l = en + low - i;
  if (l == low)
   break;
  s = Math.abs(A[l - 1][l - 1]) + Math.abs(A[l][l]);
  if (s == 0.0)
   s = norm;
  tst1 = s;
  tst2 = tst1 + Math.abs(A[l][l - 1]);
  if (tst2 == tst1)
   break;
 } //End for i

 x = A[en][en];

 if (l == en){  //One root found
  wr[en] = A[en][en] = x + t;
  wi[en] = 0.0;
  en--;
  continue;
 } //End if (l == en)

 y = A[na][na];
 w = A[en][na]*A[na][en];
 
 if (l == na){  //Two roots found
  p = (-x + y)/2;
  q = p*p + w;
  zz = Math.sqrt(Math.abs(q));
  x = A[en][en] = x + t;
  A[na][na] = y + t;
  if (q >= 0.0){//Real Pair
   zz = ((p < 0.0) ? (-zz + p) : (p + zz));
   wr[en] = wr[na] = x + zz;
   if (zz != 0.0)
    wr[en] = -(w/zz) + x;
   wi[en] = wi[na] = 0.0;
   x = A[en][na];
   s = Math.abs(x) + Math.abs(zz);
   p = x/s;
   q = zz/s;
   r = Math.sqrt(p*p + q*q);
   p /= r;
   q /= r;
   for (var j = na; j < N; j++){ //Row modification
    zz = A[na][j];
    A[na][j] = q*zz + p*A[en][j];
    A[en][j] = -(p*zz) + q*A[en][j];
   }//End for j
   for (var j = 0; j <= en; j++){ // Column modification
    zz = A[j][na];
    A[j][na] = q*zz + p*A[j][en];
    A[j][en] = -(p*zz) + q*A[j][en];
   }//End for j
   for (var j = low; j <= igh; j++){//Accumulate transformations
    zz = B[j][na];
    B[j][na] = q*zz + p*B[j][en];
    B[j][en] = -(p*zz) + q*B[j][en];
   }//End for j
  } //End if (q >= 0.0)
  else {//else q < 0.0
   wr[en] = wr[na] = x + p;
   wi[na] = zz;
   wi[en] = -zz;
  } //End else
  en--;
  en--;
  continue;
 }//End if (l == na)
 
 if (itn == 0){ //Set error; all eigenvalues have not converged after 30 iterations.
  oPar.outEr = en + 1;
  return;
 }//End if (itn == 0)

 if ((its == 10) || (its == 20)){ //Form exceptional shift
  t += x;
  for (var i = low; i <= en; i++)
   A[i][i] += -x;
  s = Math.abs(A[en][na]) + Math.abs(A[na][enm2]);
  y = x = 0.75*s;
  w = -0.4375*s*s;
 } //End if (its equals 10 or 20)

 its++;
 itn--;

/*Look for two consecutive small sub-diagonal elements. Do m = en - 2 to l in increments of -1 */

 for (m = enm2; m >= l; m--){
  zz = A[m][m];
  r = -zz + x;
  s = -zz + y;
  p = (-w + r*s)/A[m + 1][m] + A[m][m + 1];
  q = -(zz + r + s) + A[m + 1][m + 1] ;
  r = A[m + 2][m + 1];
  s = Math.abs(p) + Math.abs(q) + Math.abs(r);
  p /= s;
  q /= s;
  r /= s;
  if (m == l)
   break;
  tst1 = Math.abs(p) * (Math.abs(A[m - 1][m - 1]) + Math.abs(zz) + Math.abs(A[m + 1][m + 1]));
  tst2 = tst1 + Math.abs(A[m][m - 1]) * (Math.abs(q) + Math.abs(r));
  if (tst1 == tst2)
   break;
 }//End for m

 mp2 = m + 2;
 
 for (var i = mp2; i <= en; i++){
  A[i][i - 2] = 0.0;
  if (i == mp2)
   continue;
  A[i][i - 3] = 0.0;
 }//End for i
 
 /* Double qr step involving rows l to en and columns m to en. */

 for (var i = m; i <= na; i++){
  notlas = ((i != na) ? 1 : 0);
  if (i != m){
   p = A[i][i - 1];
   q = A[i + 1][i - 1];
   r = ((notlas) ? A[i + 2][i - 1] : 0.0);
   x = Math.abs(p) + Math.abs(q) + Math.abs(r);
   if (x == 0.0)      //Drop through rest of for i loop
    continue;
   p /= x;
   q /= x;
   r /= x;
  } //End if (i != m)

  s = Math.sqrt(p*p + q*q + r*r);
  if (p < 0.0)
   s = -s;

  if (i != m)
   A[i][i - 1] = -(s*x);
  else {
   if (l != m)
    A[i][i - 1] = -A[i][i - 1];
  }

  p += s;
  x = p/s;
  y = q/s;
  zz = r/s;
  q /= p;
  r /= p;
  k = ((i + 3 < en) ? i + 3 : en);

  if (notlas){ //Do row modification
   for (var j = i; j < N; j++) {
    p = A[i][j] + q*A[i + 1][j] + r*A[i + 2][j];
    A[i][j] += -(p*x);
    A[i + 1][j] += -(p*y);
    A[i + 2][j] += -(p*zz);
   }//End for j

   for (var j = 0; j <= k; j++) {//Do column modification
    p = x*A[j][i] + y*A[j][i + 1] + zz*A[j][i + 2];
    A[j][i] += -p;
    A[j][i + 1] += -(p*q);
    A[j][i + 2] += -(p*r);
   }//End for j
   
   for (var j = low; j <= igh; j++) {//Accumulate transformations
    p = x*B[j][i] + y*B[j][i + 1] + zz*B[j][i + 2];
    B[j][i] += -p;
    B[j][i + 1] += -(p*q);
    B[j][i + 2] += -(p*r);
   } // End for j
  }//End if notlas

  else {
   for (var j = i; j < N; j++) {//Row modification
    p = A[i][j] + q*A[i + 1][j];
    A[i][j] += -(p*x);
    A[i + 1][j] += -(p*y);
   }//End for j

   for (var j = 0; j <= k; j++){//Column modification
    p = x*A[j][i] + y*A[j][i +1];
    A[j][i] += -p;
    A[j][i + 1] += -(p*q);
   }//End for j

   for (var j = low; j <= igh; j++){//Accumulate transformations
    p = x*B[j][i] + y*B[j][i +1];
    B[j][i] += -p;
    B[j][i + 1] += -(p*q);
   }//End for j

  } //End else if notlas
 }//End for i
 incrFlag = 0;
}//End while (en >= low)

if (norm == 0.0)
 return;

//Step from (N - 1) to 0 in steps of -1

for (en = (N - 1); en >= 0; en--){
 p = wr[en];
 q = wi[en];
 na = en - 1;

 if (q > 0.0)
  continue;

 if (q == 0.0){//Real vector
  m = en;
  A[en][en] = 1.0;

  for (var j = na; j >= 0; j--){
   w = -p + A[j][j];
   r = 0.0;
   for (var ii = m; ii <= en; ii++)
    r += A[j][ii]*A[ii][en];

   if (wi[j] < 0.0){
    zz = w;
    s = r;
   }//End wi[j] < 0.0

   else {//wi[j] >= 0.0
    m = j;
    if (wi[j] == 0.0){
     t = w;
     if (t == 0.0){
      t = tst1 = norm;
      do {
       t *= 0.01;
       tst2 = norm + t;
      } while (tst2 > tst1);
     } //End if t == 0.0
     A[j][en] = -(r/t);
    }//End if wi[j] == 0.0

    else { //else wi[j] > 0.0; Solve real equations
     x = A[j][j + 1];
     y = A[j + 1][j];
     q = (-p + wr[j])*(-p + wr[j]) + wi[j]*wi[j];
     A[j][en] = t = (-(zz*r) + x*s)/q;
     A[j + 1][en] = ((Math.abs(x) > Math.abs(zz)) ? -(r + w*t)/x : -(s + y*t)/zz);
    }//End  else wi[j] > 0.0

    // Overflow control
    t = Math.abs(A[j][en]);
    if (t == 0.0)
     continue; //go up to top of for j loop
    tst1 = t;
    tst2 = tst1 + 1.0/tst1;
    if (tst2 > tst1)
     continue; //go up to top of for j loop
    for (var ii = j; ii <= en; ii++)
     A[ii][en] /= t;

   }//End else wi[j] >= 0.0

  }//End for j
  
 }      //End q == 0.0

 else {//else q < 0.0, complex vector
 //Last vector component chosen imaginary so that eigenvector matrix is triangular
 m = na;

 if (Math.abs(A[en][na]) <= Math.abs(A[na][en]))
  cdivA(0.0, -A[na][en], -p + A[na][na], q, A, na, na, en);
 else {
  A[na][na] = q/A[en][na];
  A[na][en] = -(-p + A[en][en])/A[en][na];
 } //End else (Math.abs(A[en][na] > Math.abs(A[na][en])

 A[en][na] = 0.0;
 A[en][en] = 1.0;

 for (var j = (na - 1); j >= 0; j--) {
  w = -p + A[j][j];
  sa = ra = 0.0;
  
  for (var ii = m; ii <= en; ii++) {
   ra += A[j][ii]*A[ii][na];
   sa += A[j][ii]*A[ii][en];
  } //End for ii

  if (wi[j] < 0.0){
   zz = w;
   r = ra;
   s = sa;
   continue;
  } //End if (wi[j] < 0.0)

  //else wi[j] >= 0.0
  m = j;
  if (wi[j] == 0.0)
   cdivA(-ra, -sa, w, q, A, j, na, en);
  else {// else wi[j] > 0.0; solve complex equations
   x = A[j][j + 1];
   y = A[j + 1][j];
   vr = -(q*q) + (-p + wr[j])*(-p + wr[j]) + wi[j]*wi[j];
   vi = (-p + wr[j])*2.0*q;
   if ((vr == 0.0) && (vi == 0.0)){
    tst1 = norm*(Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(zz));
    vr = tst1;
    do {
     vr *= 0.01;
     tst2 = tst1 + vr;
    } while (tst2 > tst1);
   } //End if vr and vi == 0.0
   cdivA(-(zz*ra) + x*r + q*sa, -(zz*sa + q*ra) + x*s, vr, vi, A, j, na, en);

   if (Math.abs(x) > (Math.abs(zz) + Math.abs(q))){
    A[j + 1][na] = (-(ra + w*A[j][na]) + q*A[j][en])/x;
    A[j + 1][en] = -(sa + w*A[j][en] + q*A[j][na])/x;
   }//End if
   else
    cdivA(-(r + y*A[j][na]), -(s + y*A[j][en]), zz, q, A, j + 1, na, en);

  }//End else wi[j] > 0.0
    
  t = ((Math.abs(A[j][na]) >= Math.abs(A[j][en])) ? Math.abs(A[j][na]) : Math.abs(A[j][en]));

  if (t == 0.0)
   continue; // go to top of for j loop

  tst1 = t;
  tst2 = tst1 + 1.0/tst1;
  if (tst2 > tst1)
   continue; //go to top of for j loop
    
  for (var ii = j; ii <= en; ii++){
   A[ii][na] /= t;
   A[ii][en] /= t;
  } //End for ii loop

 } // End for j
  
 }//End else q < 0.0
 
}//End for en

//End back substitution. Vectors of isolated roots.

for (var i = 0; i < N; i++){
 if ((i < low) || (i > igh)) {
  for (var j = i; j < N; j++)
   B[i][j] = A[i][j];
 }//End if i
}//End for i

// Multiply by transformation matrix to give vectors of original full matrix.

//Step from (N - 1) to low in steps of -1.

for (var i = (N - 1); i >= low; i--){

 m = ((i < igh) ? i : igh);
 
 for (var ii = low; ii <= igh; ii++){
  zz = 0.0;
  for (var jj = low; jj <= m; jj++)
   zz += B[ii][jj]*A[jj][i];
  B[ii][i] = zz;
 }//End for ii
}//End of for i loop

return;
} //End of function hqr2

function norVecC(N, Z, wi){// Normalizes the eigenvectors

// This subroutine is based on the LINPACK routine SNRM2, written 25 October 1982, modified
// on 14 October 1993 by Sven Hammarling of NAG Ltd.
// I have further modified it for use in this Javascript routine, for use with a column
// of an array rather than a column vector.
//
// Z - eigenvector Matrix
// wi - eigenvalue vector

 var scale, ssq, absxi, dummy, norm;
  
 for (var j = 0; j < N; j++){ //Go through the columns of the vector array 
  scale = 0.0;
  ssq = 1.0;

  for (var i = 0; i < N; i++){
   if (Z[i][j] != 0){
    absxi = Math.abs(Z[i][j]);
    dummy = scale/absxi;
    if (scale < absxi){
     ssq = 1.0 + ssq*dummy*dummy;
     scale = absxi;
    }//End if (scale < absxi)
    else
     ssq += 1.0/dummy/dummy;
   }//End if (Z[i][j] != 0)
  } //End for i

  if (wi[j] != 0){// If complex eigenvalue, take into account imaginary part of eigenvector
   for (var i = 0; i < N; i++){
    if (Z[i][j + 1] != 0){
     absxi = Math.abs(Z[i][j + 1]);
     dummy = scale/absxi;
     if (scale < absxi){
      ssq = 1.0 + ssq*dummy*dummy;
      scale = absxi;
     }//End if (scale < absxi)
     else
      ssq += 1.0/dummy/dummy;
     }//End if (Z[i][j + 1] != 0)
   } //End for i
  }//End if (wi[j] != 0)

  norm = scale*Math.sqrt(ssq); //This is the norm of the (possibly complex) vector

  for (var i = 0; i < N; i++)
   Z[i][j] /= norm;

  if (wi[j] != 0){// If complex eigenvalue, also scale imaginary part of eigenvector
   j++;
   for (var i = 0; i < N; i++)
   Z[i][j] /= norm;
  }//End if (wi[j] != 0)

 }// End for j
 
 return;
} // End norVecC

function calcEigSysReal(N, A, B, wr, wi, oPar){

var scale = new Array(N);    //Contains information about transformations.
var trace = new Array(N);    //Records row and column interchanges
var radix = 2;               //Base of machine floating point representation.
var c, f, g, r, s, b2 = radix*radix;
var ierr = -1, igh, low, k = 0, l = N - 1, noconv;

/* Balance the matrix to improve accuracy of eigenvalues. Introduces no rounding errors, since it scales A by powers of the radix.
*/

//Search through rows, isolating eigenvalues and pushing them down.

noconv = l;

while (noconv >= 0){
 r = 0;

 for (var j = 0; j <= l; j++) {
  if (j == noconv) continue;
  if (A[noconv][j] != 0.0){
   r = 1;
   break;
  }
 } //End for j

 if (r == 0){
  scale[l] = noconv;

  if (noconv != l){
   for (var i = 0; i <= l; i++){
    f = A[i][noconv];
    A[i][noconv] = A[i][l];
    A[i][l] = f;
   }//End for i
   for (var i = 0; i < N; i++){
    f = A[noconv][i];
    A[noconv][i] = A[l][i];
    A[l][i] = f;
   }//End for i
  }//End if (noconv != l)

  if (l == 0)
   break;  //break out of while loop

  noconv = --l;

 }//End if (r == 0)

 else //else (r != 0)
  noconv--;

}//End while (noconv >= 0)

if (l > 0) {  //Search through columns, isolating eigenvalues and pushing them left.

 noconv = 0;

 while (noconv <= l){  
  c = 0;

  for (var i = k; i <= l; i++){
   if (i == noconv) continue;
   if (A[i][noconv] != 0.0){
    c = 1;
    break;
   }
  }//End for i

  if (c == 0){
   scale[k] = noconv;

   if (noconv != k){
    for (var i = 0; i <= l; i++){
     f = A[i][noconv];
     A[i][noconv] = A[i][k];
     A[i][k] = f;
    }//End for i
    for (var i = k; i < N; i++){
     f = A[noconv][i];
     A[noconv][i] = A[k][i];
     A[k][i] = f;
    }//End for i

   }//End if (noconv != k)

   noconv = ++k;
  }//End if (c == 0)

  else  //else (c != 0)
   noconv++;

 }//End while noconv

 //Balance the submatrix in rows k through l.

 for (var i = k; i <= l; i++)
  scale[i] = 1.0;

 //Iterative loop for norm reduction
 do {
  noconv = 0;
  for (var i = k; i <= l; i++) {
   c = r = 0.0;
   for (var j = k; j <= l; j++){
    if (j == i) continue;
    c += Math.abs(A[j][i]);
    r += Math.abs(A[i][j]);
   } // End for j
   if ((c == 0.0) || (r == 0.0)) continue;   //guard against zero c or r due to underflow
   g = r/radix;
   f = 1.0;
   s = c + r;
   while (c < g) {
    f *= radix;
    c *= b2;
   } // End while (c < g)
   g = r*radix;
   while (c >= g) {
    f /= radix;
    c /= b2;
   } // End while (c >= g)

   //Now balance
   if ((c + r)/f < 0.95*s) {
    g = 1.0/f;
    scale[i] *= f;
    noconv = 1;
    for (var j = k; j < N; j++)
     A[i][j] *= g;
    for (var j = 0; j <= l; j++)
     A[j][i] *= f;
   } //End if ((c + r)/f < 0.95*s)
  } // End for i
 } while (noconv);  // End of do-while loop.

} //End if (l > 0)

low = k;
igh = l;

//End of balanc
 
/* Now reduce the real general Matrix to upper-Hessenberg form using stabilized elementary similarity transformations. */

for (var i = (low + 1); i < igh; i++){
 k = i;
 c = 0.0;

 for (var j = i; j <= igh; j++){
  if (Math.abs(A[j][i - 1]) > Math.abs(c)){
   c = A[j][i - 1];
   k = j;
  }//End if
 }//End for j

 trace[i] = k;

 if (k != i){
  for (var j = (i - 1); j < N; j++){
   r = A[k][j];
   A[k][j] = A[i][j];
   A[i][j] = r;
  }//End for j

  for (var j = 0; j <= igh; j++){
   r = A[j][k];
   A[j][k] = A[j][i];
   A[j][i] = r;
  }//End for j
 }//End if (k != i)

 if (c != 0.0){
  for (var m = (i + 1); m <= igh; m++){
   r = A[m][i - 1];

   if (r != 0.0){
    r = A[m][i - 1] = r/c;
    for (var j = i; j < N; j++)
     A[m][j] += -(r*A[i][j]);
    for (var j = 0; j <= igh; j++)
     A[j][i] += r*A[j][m];
   }//End if (r != 0.0)
  }//End for m
 }//End if (c != 0)
}  //End for i.

/* Accumulate the stabilized elementary similarity transformations used in the reduction of A to upper-Hessenberg form. Introduces no rounding errors since it only transfers the multipliers used in the reduction process into the eigenvector matrix. */

for (var i = 0; i < N; i++){ //Initialize B to the identity Matrix.
 for (var j = 0; j < N; j++)
  B[i][j] = 0.0;
 B[i][i] = 1.0;
} //End for i

for (var i = (igh - 1); i >= (low + 1); i--){
 k = trace[i];
 for (var j = (i + 1); j <= igh; j++)
  B[j][i] = A[j][i - 1];

 if (i == k)
  continue;

 for (var j = i; j <= igh; j++){
  B[i][j] = B[k][j];
  B[k][j] = 0.0;
 } //End for j

 B[k][i] = 1.0; 

} // End for i
 
oPar.outEr = ierr;
hqr2(N, A, B, low, igh, wi, wr, oPar);
ierr = oPar.outEr;

if (ierr == -1){

 if (low != igh){
  for (var i = low; i <= igh; i++){
   s = scale[i];
   for (var j = 0; j < N; j++)
    B[i][j] *= s;
  }//End for i
 }//End if (low != igh)

 for (var i = (low - 1); i >= 0; i--){
  k = scale[i];
  if (k != i){
   for (var j = 0; j < N; j++){
    s = B[i][j];
    B[i][j] = B[k][j];
    B[k][j] = s;
   }//End for j
  }//End if k != i
 }//End for i

 for (var i = (igh + 1); i < N; i++){
  k = scale[i];
  if (k != i){
   for (var j = 0; j < N; j++){
    s = B[i][j];
    B[i][j] = B[k][j];
    B[k][j] = s;
   }//End for j
  }//End if k != i
 }//End for i

 norVecC(N, B, wi);  //Normalize the eigenvectors
  
 }//End if ierr = -1

 return;
}  //End of compRealEigSys

//***************************************************************************

function tred(V,d,e,n) {

   //  This is derived from the Algol procedures tred2 by
   //  Bowdler, Martin, Reinsch, and Wilkinson, Handbook for
   //  Auto. Comp., Vol.ii-Linear Algebra, and the corresponding
   //  Fortran subroutine in EISPACK.

for (var j = 0; j < n; j++) {
	d[j] = V[n-1][j];
	}

      // Householder reduction to tridiagonal form.
   
for (var i = n-1; i > 0; i--) {
   
         // Scale to avoid under/overflow.
   
	scale = 0.0;
	h = 0.0;
	for (var k = 0; k < i; k++) {
		scale = scale + Math.abs(d[k]);
		}
		if (scale == 0.0) {
			e[i] = d[i-1];
			for (var j = 0; j < i; j++) {
				d[j] = V[i-1][j];
				V[i][j] = 0.0;
				V[j][i] = 0.0;
				}
			} else {
   
            // Generate Householder vector.
   
			for (var k = 0; k < i; k++) {
				d[k] /= scale;
				h += d[k] * d[k];
				}
			f = d[i-1];
            g = Math.sqrt(h);
            if (f > 0) {
				g = -g;
				}
            e[i] = scale * g;
            h = h - f * g;
            d[i-1] = f - g;
            for (var j = 0; j < i; j++) {
               e[j] = 0.0;
            }
   
            // Apply similarity transformation to remaining columns.
   
            for (var j = 0; j < i; j++) {
               f = d[j];
               V[j][i] = f;
               g = e[j] + V[j][j] * f;
               for (var k = j+1; k <= i-1; k++) {
                  g += V[k][j] * d[k];
                  e[k] += V[k][j] * f;
               }
               e[j] = g;
            }
            f = 0.0;
            for (var j = 0; j < i; j++) {
               e[j] /= h;
               f += e[j] * d[j];
            }
            hh = f / (h + h);
            for (var j = 0; j < i; j++) {
               e[j] -= hh * d[j];
            }
            for (var j = 0; j < i; j++) {
               f = d[j];
               g = e[j];
               for (var k = j; k <= i-1; k++) {
                  V[k][j] -= (f * e[k] + g * d[k]);
               }
               d[j] = V[i-1][j];
               V[i][j] = 0.0;
            }
         }
         d[i] = h;
      }
   
      // Accumulate transformations.
   
      for (var i = 0; i < n-1; i++) {
         V[n-1][i] = V[i][i];
         V[i][i] = 1.0;
         h = d[i+1];
         if (h != 0.0) {
            for (var k = 0; k <= i; k++) {
               d[k] = V[k][i+1] / h;
            }
            for (var j = 0; j <= i; j++) {
               g = 0.0;
               for (var k = 0; k <= i; k++) {
                  g += V[k][i+1] * V[k][j];
               }
               for (var k = 0; k <= i; k++) {
                  V[k][j] -= g * d[k];
               }
            }
         }
         for (var k = 0; k <= i; k++) {
            V[k][i+1] = 0.0;
         }
      }
      for (var j = 0; j < n; j++) {
         d[j] = V[n-1][j];
         V[n-1][j] = 0.0;
      }
      V[n-1][n-1] = 1.0;
      e[0] = 0.0;
   } 

//****************************************************************************

   // Symmetric tridiagonal QL algorithm.
  
function tql2(V,d,e,n)
{ 

   //  This is derived from the Algol procedures tql2, by
   //  Bowdler, Martin, Reinsch, and Wilkinson, Handbook for
   //  Auto. Comp., Vol.ii-Linear Algebra, and the corresponding
   //  Fortran subroutine in EISPACK.
   
for (var i = 1; i < n; i++) {
	e[i-1] = e[i];
	}

e[n-1] = 0.0;
   
f = 0.0;
tst1 = 0.0;
eps = Math.pow(2.0,-20.0);
for (var l = 0; l < n; l++) {

         // Find small subdiagonal element
   
	tst1 = Math.max(tst1,Math.abs(d[l]) + Math.abs(e[l]));
	m = l;
	while (m < n) {
		if (Math.abs(e[m]) <= eps*tst1) {
			break;
            }
            m++;
         }
   
	// If m == l, d[l] is an eigenvalue,
	// otherwise, iterate.
   
	if (m > l) {
		iter = 0;
		do {
			iter = iter + 1;  // (Could check iteration count here.)
   
               // Compute implicit shift
   
			g = d[l];
			p = (d[l+1] - g) / (2.0 * e[l]);
            r = hypot(p,1.0);
            if (p < 0) {
                  r = -r;
               }
            d[l] = e[l] / (p + r);
            d[l+1] = e[l] * (p + r);
            dl1 = d[l+1];
            h = g - d[l];
            for (var i = l+2; i < n; i++) {
                  d[i] -= h;
               }
			f = f + h;
   
               // Implicit QL transformation.
   
			p = d[m];
            c = 1.0;
            c2 = c;
            c3 = c;
            el1 = e[l+1];
            s = 0.0;
            s2 = 0.0;
            for (var i = m-1; i >= l; i--) {
				c3 = c2;
				c2 = c;
				s2 = s;
				g = c * e[i];
				h = c * p;
				r = hypot(p,e[i]);
				e[i+1] = s * r;
                  s = e[i] / r;
                  c = p / r;
                  p = c * d[i] - s * g;
                  d[i+1] = h + s * (c * g + s * d[i]);
   
                  // Accumulate transformation.
   
				for (var k = 0; k < n; k++) {
                     h = V[k][i+1];
                     V[k][i+1] = s * V[k][i] + c * h;
                     V[k][i] = c * V[k][i] - s * h;
                  }
               }
               p = -s * s2 * c3 * el1 * e[l] / dl1;
               e[l] = s * p;
               d[l] = c * p;
   
               // Check for convergence.
   
            } while (Math.abs(e[l]) > eps*tst1);
         }
         d[l] = d[l] + f;
         e[l] = 0.0;
      }
     
      // Sort eigenvalues and corresponding vectors.
for (var i = 0; i < n-1; i++) {
	k = i;
    p = d[i];
    for (var j = i+1; j < n; j++) {
            if (d[j] > p) {
               k = j;
               p = d[j];
            }
         }
         if (k != i) {
            d[k] = d[i];
            d[i] = p;
            for (var j = 0; j < n; j++) {
               p = V[j][i];
               V[j][i] = V[j][k];
               V[j][k] = p;
            }
         }
      }
}

//***************************************************************************

var gimg = new Image();
gimg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAyFJREFUeJyUVGlPU1EQ7V/yk8oia4uRQMQYIh80GjURBVlKW2SJghE0RtGUVUxkaQvdKBSQnVIIBEGK7C0VTaMgMQghAtWyHOdepBSEgh8mL++9e8+cOXNmBKFiNTwjhOJMgsrjWzX2n/EWAs+X4ORqhEk0a49VAzkiqd4iktVAJDMccFFzNCBjdlaqcRYbRxTXn3V2EdBqaIoWoSn7LtO7UKKn0HkHPHW7cl1tsvXU9c0s+sRXITTZe6lCiRZClnA/IGMWnqpbERd1VpvH5heSC0zwjVPuapp8MGAIJfS/q4JIqtsi1ltuwNN3FNCabXnm0dl3rUMOxDw0IiChyg3GLoZ4MqMISqzier/QDSLzTS+CxLvlCy5kaCdm5xfkjQOODW3XFKIf1CGQLgRQxGTXo6JlfE/X2b9wmQ7KtglklfduJ/EoXRCbRzeAVkOPHRWt47iS20gAVWDMi40f8Nu1gcs5DRyUsRVSU5Rtk3ik6Me5VB1ny77tuEFw63nLEgHO9k/OIU/7HrJXZpyMrURUpgFWxwI6LQ6wZCyBX7ySJymotSDfYEFUhgHBSdtJRKm13LOCyPQal312ybnqdCGttBtlTWM4cbMclUTc2Gfnhz9/W8albCOu5r6FunOKA0am60lrFdeU+ZJZiTP0jVe6JCVm5+bmFlTtk8RyEGmvuzE68x25VBYlhKbLCp3ZBnnNEBSkXfzLds5WeIgPnX4J6mW5YRhrv9aRUmyCxmSFvtsGbZeNgKw4n1GD+R8raOz/ROyGyaNHjB7rEjFFrqof018XkVJkgrjQhBLSq9g4jGtPmlDaMAI7/UvM7yB2Ku+AHFSq58JTk1Df+xHdI1/INkZEZ9WhvHmcS7H004mIND1Z5/ApcgOGpRq2GFN/YiqSaHDjaTPvoE+cAoVU5tD0PLLKyMRJ3kdSsLOiaITcA8+mIOCvmZmRL96vxYB1jic6JuDuJjloXbGpSZB3IOKenic7PiDfIjquJ396rK5ANzPNvyvNG6AbmPQMI/cT8AYHZ3JItBtsbf0Xw73BWW0ypttsqze9n1fjDwAAAP//AwAN9/2dI5HCCQAAAABJRU5ErkJggg==";

