var remote = require("remote");
var console = remote.getGlobal("console");
var ipc = require("ipc");

/***************************************************************************/
// CONSTANTS

var VERSION = "1.71";

/***************************************************************************/

var AHELP = {};

var ANUM = 0;
_action("","");
_action("DRAG_GRAPH","");
_action("RESIZE_GRAPH","Resize graph");
_action("KEEP_GRAPH","");
_action("CLOSE_GRAPH","Close graph");
_action("DRAG_SLICE","Create graph from category");
_action("CREATE_SLICE","Create graph from category");
_action("DRAG_LABEL","");
_action("SET_TOPLABEL","Define field");
_action("SET_LEFTLABEL","Define field");
_action("SET_BOTTOMLABEL","Define field");
_action("DRAG_TOPLABEL","");
_action("DRAG_LEFTLABEL","")
_action("DRAG_BOTTOMLABEL","");
_action("REMOVE_TOPLABEL","Remove definition");
_action("REMOVE_LEFTLABEL","Remove definition");
_action("REMOVE_BOTTOMLABEL","Remove definition");
_action("DRAG_TYPE","Create new graph");
_action("SET_TYPE","Change graph type");
_action("DROP_SLICE","Remove class from partition");
_action("DRAG_BIN","");
_action("REMOVE_BIN","Put back class into partition");
_action("RESERVE15","");
_action("DOCK_GRAPH","Move graph into dock");
_action("UNDOCK_GRAPH","Remove graph from dock");
_action("SET_LEFTLABEL","Define partition ");
_action("SET_SELECTION","Change selection");
_action("PASTE_LABEL11","Map axis");
_action("PASTE_LABEL12","Map axis");
_action("PASTE_LABEL21","Map axis");
_action("PASTE_LABEL22","Map axis");
_action("CREATE_GRAPH1","Create graph from axis 1");
_action("CREATE_GRAPH2","Create graph from axis 2");
_action("CREATE_VALUE","Convert to numerical");
_action("DRAG_VALUE","");
_action("SET_TOPVALUE","Define field");
_action("SET_LEFTVALUE","Define field");
_action("SET_BOTTOMVALUE","Define field");
_action("DRAG_TOPVALUE","");
_action("DRAG_LEFTVALUE","");
_action("DRAG_BOTTOMVALUE");
_action("REMOVE_TOPVALUE","Remove definition");
_action("REMOVE_LEFTVALUE","Remove definition");
_action("REMOVE_BOTTOMVALUE","Remove definition");
_action("CREATE_LABEL","");
_action("DRAG_CURSOR","");
_action("DRAG_CURSORH","Partition into classes of same amplitude");
_action("DRAG_CURSORV","Partition into classes of same size");
_action("DRAG_TITLE","");
_action("REMOVE_TITLE","Remove selection");
_action("INVERT_BIN","Create complementary graph");
_action("CREATE_SET","Create set");
_action("PASTE_TITLE","Change selection");
_action("SWAP_LABEL_TL","Swap axes");
_action("SWAP_LABEL_LT","Swap axes");
_action("SWAP_LABEL_TB","Swap axes");
_action("SWAP_LABEL_BT","Swap axes");
_action("SWAP_LABEL_LB","Swap axes");
_action("SWAP_LABEL_BL","Swap axes");
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
_action("SET_LABELN","Define partition along axis");
_action("DRAG_LABELN","");
_action("REMOVE_LABELN","Remove partition");
_action("SWAP_LABELN","Swap partition");
_action("DRAG_TABLE","Show values ...");
_action("SHOW_TABLE","Show graph values");
_action("DRAG_HELP","Display help ...");
_action("SHOW_HELP","Display help about this graph");
_action("DRAG_ADD","Add field");
_action("ADD_LABEL","Add categorical field");
_action("ADD_VALUE","Add numerical field");
_action("DRAG_ERROR","Change error value");
_action("DRAG_SLIDER","Change the number of classes");
_action("CHANGE_DISPLAY","Change the point representation");
_action("DRAG_CLONE","Duplicate graph");
_action("CLONE_GRAPH","Duplicate graph");
_action("SET_VALUEI","Add field");
_action("SET_VALUEJ","Add field");
_action("DRAG_VALUEI","");
_action("DRAG_VALUEJ","");
_action("REMOVE_VALUEI","Remove field");
_action("REMOVE_VALUEJ","Remove field");
_action("SWAP_VALUEI","Swap fields");
_action("SWAP_VALUEJ","Swap fields");
_action("SWAP_VALUEIJ","Swap fields");
_action("SWAP_VALUEJI","Swap fields");
_action("DRAG_SIDEBAR","Move toolbar");
_action("DRAG_AXIS","Create field from projection");
_action("CREATE_PROJECTION","Create field from projection");
_action("SWAP_VALUE_TL","Swap fields");
_action("SWAP_VALUE_LT","Swap fields");
_action("CREATE_KGROUP","Create field from partition");
_action("CREATE_VBOOLEAN","Create boolean field from category");
_action("CREATE_LBOOLEAN","Create boolean field from category");
_action("REMOVE_LABEL","Remove field");
_action("REMOVE_VALUE","Remove field");
_action("DONT_REMOVE","Some graphs use this field");
_action("CHANGE_NCLASS","Change the number of classes");
_action("EXPORT_CHART","Export graphs into HighCharts");
_action("SAVE_CONFIG","Save the configuration");
_action("CHANGE_LAG","Change lag value");
_action("DRAG_SORT","Sort data");
_action("SORT_DATA","Sort data by");
_action("SHOW_LABEL","Show data values");
_action("SHOW_VALUE","Show data values");
_action("DRAG_DUSTBIN","Remove ...");
_action("SELECT_TEST","Select test");
_action("SELECT_TYPE","Select graph type");
_action("SELECT_LAW","Select distribution");
_action("SELECT_CLUSTERING","Select clustering method");
_action("ROTATE_VIEW","Rotate 3D view");
_action("SELECT_OPTION","Select graph option");
_action("PIVOT_DATA","Pivot data");
_action("SELECT_ANGLE","Select circle unit");
_action("DRAG_ORIGIN","Change circle origin");
_action("SELECT_HOMO","Select coefficient");
_action("CHANGE_ORIENTATION","Change orientation");

// actions that gray the graph
var GACTIONS = {}
	GACTIONS[SET_TYPE] = 1;
	GACTIONS[SET_GRAPH_UNIT] = 1;
	GACTIONS[SHOW_TABLE] = 1;
	GACTIONS[SHOW_HELP] = 1;
	GACTIONS[CLONE_GRAPH] = 1;
	GACTIONS[EXPORT_CHART] = 1;
	GACTIONS[CHANGE_DISPLAY] = 1;
	

/***************************************************************************/
//
// POSSIBLE OPTIONS :
//	
// bin : has local bin to temporarily remove categories
// leftlabel : has lelf label ( categorical field )
// bottomlabel : has bottom label
// display : can change point representation into text
// ivalues : has list of values ( numerical fields )
// jvalues : has second list of values
// ilabels : has list of labels ( categorical fields)
// options : number of options of representation

var GINFO = {};
var TYPE = {};

var KNUM = 0;
_type("PIE","Pie chart",{toplabel:1,bin:1,options:4});
_type("BAR","Bar chart",{toplabel:1,leftlabel:2,bin:1,options:2});
_type("LINE","Line chart",{toplabel:1,leftlabel:2});
_type("TAG","Word cloud",{toplabel:1});
_type("SOL","Solidarity",{toplabel:1,leftlabel:2});
_type("ARC","Arc diagram",{toplabel:1,leftlabel:2,options:2});
_type("CROSS","Contingency table",{toplabel:1,leftlabel:2,options:2});
_type("ASSOC","Associations",{toplabel:1,leftlabel:2});
_type("FAC","Multiple Correspondence analysis",{ilabels:1,bin:1,options:3});
_type("SOM","Self-organizing map",{toplabel:1,leftlabel:2});
_type("THREE","Graph 3",{toplabel:1,leftlabel:2,bottomlabel:3});
_type("TREE","Treemap",{ilabels:1});
_type("CHI2","Chi square test",{toplabel:1,leftlabel:2});
_type("HOMO","Homogeneity",{toplabel:1,leftlabel:2});

var NBTYPE1 = KNUM;			// max graph types

_type("MOMENTS","Statistics",{topvalue:1});
_type("HISTO","Histogram",{topvalue:1,leftlabel:1});
_type("DISTRIB","Distribution curve",{topvalue:1});
_type("PROBA","Probability plot",{topvalue:1});
_type("TUKEY","Tukey lambda PPCC plot",{topvalue:1});
_type("SCATTER","Scatter plot",{topvalue:1,leftvalue:2,bottomlabel:1,display:3});
_type("POLAR","Polar plot",{topvalue:1,leftvalue:2,bottomlabel:1,display:3,options:2});
_type("LAG","Lag plot",{topvalue:1});
_type("CORR","Correlations",{ivalues:1});
_type("AUTOCORR","Autocorrelation plot",{topvalue:1});
_type("ACP","Principal components",{ivalues:1,bottomlabel:1,display:3,options:3});
_type("CANON","Canonical correlation analysis",{leftlabel:1,ivalues:1,jvalues:1,display:3,options:5});
_type("CLUSTERING","Clustering",{ivalues:1});
//_type("TYPE_HUEN","Huen diagram");
_type("DENDRO","Dendrogram",{ivalues:1,options:2});
_type("RADVIZ","Radviz",{ivalues:1,leftlabel:1,display:3});
_type("TERNARY","Ternary plot",{ivalues:1,leftlabel:1,display:3});
_type("SURVEY","Survey plot",{ivalues:1,leftlabel:1});
_type("ANDREW","Andrew's curves",{ivalues:1,leftlabel:1});
_type("G3D","3D plot",{ivalues:1,leftlabel:1});

var NBTYPE2 = KNUM; 		//  max plot types

_type("DISCRI","Discriminant analysis",{ivalues:1,leftlabel:1,display:3,options:2});
_type("TEST","Analysis of variance",{topvalue:1,leftlabel:1});
_type("REGRES","Linear regression",{ivalues:1,leftvalue:1});
_type("BOX","Box plot",{topvalue:1,leftlabel:1});
_type("PARA","Parallel coordinates",{ivalues:1,leftlabel:1,options:2});
_type("PALETTE","Palette");

var NBTYPE3 = KNUM;			// max total types

/***************************************************************************/

var ZNUM = 0;
var TOOL = {};

_tool("DUSTBIN");
_tool("SHOW");
_tool("HELP");
_tool("ADD");
_tool("CLONE");
_tool("SORT");

/***************************************************************************/

var MNUM = 0;
var MENU = {};

_menu("TEST","BARTLETT","Bartlett's test");
_menu("TEST","FISHER","Fisher's test");
_menu("TEST","LEVENE","Levene's test");
_menu("TEST","BROWN","Brown-Forsythe test");

_menu("LAW","UNIFORM","Uniform");
_menu("LAW","NORMAL","Normal");
_menu("LAW","LOGNORMAL","Log-Normal");
_menu("LAW","EXPONENTIAL","Exponential");

_menu("CLUST","KMEANS","K-means");
_menu("CLUST","KMEDOIDS","K-medoids");
_menu("CLUST","FUZZY","FUzzy C-means");

_menu("ANGLE","RADIAN","Radians");
_menu("ANGLE","DEGREE","Degrees");

_menu("HOMO","GINI","Gini impurity");
_menu("HOMO","ENTROPY","Entropy");

/***************************************************************************/

var NIL = "\r"

var BG = "#DEF7D6";
var PINK = "#FFEEEE";
var BLUE = "#EEEEFF";
var GRAY = "rgba(64,64,64,0.5)";
var YELLOW = "#FFFFDA";
var GREEN = "#33AA33";

var TINTS = []
for(var k=0;k<25;k++)
	{
	var t = Math.floor(k*255/24)
	TINTS[k] = "rgb("+t+","+t+","+t+")"
	}

var SLOTW = 100;		// slot width
var SLOTH = 20;			// slow height

//***************************************************************************
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


var ptstart = {x:0,y:0}
var ptclick = {x:0,y:0}
var ptmove = {x:0,y:0}

var faction = 0             // first action
var action = 0
var graphindex = -1
var graphindex2 = -1
var sliceindex = -1
var labelindex = -1
var testindex = -1;
var destlabelindex = -1
var destvalueindex = -1
var typeindex = -1
var optionindex = -1;
var valueindex = -1
var titleindex = -1
var menuindex = -1;

var animtimer = null


//***************************************************************************
//***************************************************************************


ipc.on("start",  function (filename)
{

	var loader = require("./loader");
	loader.load(filename,loaded)

	function loaded(data)
	{
	console.log("loaded");
	if((data==null)||(data.length==0))
		{
		console.log("NULL DATA");
		window.close();
		ipc.send("reader");
		return;
		}

	canvas = document.getElementById("canvas");

	window.addEventListener("mousedown", down);
	window.addEventListener("mousemove", move);
	window.addEventListener("mouseup", up);
	window.addEventListener("resize", draw);
	window.addEventListener("mousewheel", wheel);

	loadData(data);
	draw();
	}

});

//***************************************************************************
//***************************************************************************

function _action(name,help)
{

window[name] = ANUM;

AHELP[ANUM] = help;

ANUM++;

}

//*********************************************************************

function _type(name,help,options)
{
//			Utility functions are derived from type name :
//			If name is ABCD ,the drawing function is  drawAbcGraph

TYPE[name] = KNUM;	

// derived name
var rname = name.substring(0,1).toUpperCase()+name.substring(1).toLowerCase();

GINFO[KNUM] = options || {};

GINFO[KNUM].help = help;
GINFO[KNUM].name = name;
GINFO[KNUM].icon = pointer("draw"+rname+"Icon");
GINFO[KNUM].draw = pointer("draw"+rname+"Graph");
GINFO[KNUM].comp = pointer("compute"+rname+"Data");
GINFO[KNUM].slice = pointer("in"+rname+"Slice");
GINFO[KNUM].down = pointer("down"+rname+"Graph");
GINFO[KNUM].move = pointer("move"+rname+"Graph");
GINFO[KNUM].drag = pointer("drag"+rname+"Graph");
GINFO[KNUM].up   = pointer("up"+rname+"Graph");
GINFO[KNUM].table = pointer("build"+rname+"Table");

KNUM++;

}

//*********************************************************************

function pointer(fname)
{
if(eval("typeof("+fname+")")=="undefined")
	return nothing;
else
	return eval(fname);
}

//*********************************************************************

function nothing() {}

//*********************************************************************

function _tool(name)
{

TOOL[name] = ZNUM;
ZNUM++;

}

//*********************************************************************


function _menu(name,item,help)
{
if(!(name in window))	
	{
	MENU[name] = [];
	window[name] = {};
	}

window[name][item] = MENU[name].length;
MENU[name].push(help);


}

//*********************************************************************

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

this.ilabels = [];		// list of labels

this.ivalues = [];		// list of values
this.jvalues = [];		// second list of values

this.omit = {};

this.type = type;
this.option = 0;
this.test = 0;	
this.law = 0;			// for TYPE.PROBA
this.clustering = -1;	// for TYPE.CLUSTER
this.homo = 0;			// for TYPE.HOMO

this.angle = 0;			// for TYPE.POLAR
this.origin = 0;

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

this.topshift = 5;
this.leftshift = 5;
this.bottomshift = 5;

this.xshift = 0	;	// scrolling
this.yshift = 0	;

this.contour = null;
this.ncontour = 0;

this.stickers = [];

this.iunit = 0;
}

//*********************************************************************

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


if(labels.length==0)	
	createDummyLabel();
}

//*********************************************************************

function unquote(s)
{
var m = s.match(/^"(.*)"$/);
return m==null ? s : m[1];
}

//*********************************************************************

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

//*********************************************************************

function debug(msg) { console.log(msg) }

//*********************************************************************

function dumpM(mat)
{
var s = ""
for(var i=0;i<mat.length;i++)
	{
	s += "["+i+"] = "
	for(var j=0;j<mat[i].length;j++)
		{
		var m = Math.round(mat[i][j]*10000)/10000;
		s += " "+m;
		}
	s += "\n"
	}
debug(s)
}

//*********************************************************************

function dumpV(vec)
{
var n = vec.length;
var s = ""
for(var i=0;i<n;i++)
	{
	var v = Math.round(vec[i]*10000)/10000;
	s += " "+v;
	}
debug(s)
}

//*********************************************************************

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

//*********************************************************************

function is_utf8(text)
{
return text.indexOf("\xc3")>=0;
}

//*********************************************************************

var ptstart = {x:0,y:0}
var ptclick = {x:0,y:0}
var ptmove = {x:0,y:0}

//*********************************************************************

function getGray(h)
{
var gray = 255 - Math.floor(h*255)
return "rgb("+gray+","+gray+","+gray+")"
}

//*********************************************************************

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

//*********************************************************************

function cloneArray(a)
{
var b = []
for(var i=0;i<a.length;i++)
	b.push(a[i])
return b
}

//*********************************************************************

function cloneObject(a)
{
var b = {}
for(var x in a)
	b[x] = a[x]
return b
}

//*********************************************************************

function card(obj)
{
// number of members in objet
var n = 0
for(var x in obj) { n++ }
return n
}

//*********************************************************************

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

//*********************************************************************

function countKeys(graph)
{
var n = 0
for(var i=0;i<graph._keys1.length;i++)
	if(!(graph._keys1[i] in graph.omit))
		n += 1
return n
}

//*********************************************************************

function getxy(event)
{
var pt = {}
pt.x = (event.layerX||event.layerY==0)  ? event.layerX : event.offsetX
pt.y = (event.layerX||event.layerY==0)  ? event.layerY : event.offsetY
return pt
}

//*********************************************************************

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

//*********************************************************************

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

//*********************************************************************

function inRect(pt,x,y,w,h)
{
if(pt.x<x) return false
if(pt.x>x+w) return false
if(pt.y<y) return false
if(pt.y>y+h) return false
return true
}

//*********************************************************************

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

//*********************************************************************

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

//*********************************************************************

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

//*********************************************************************

function inFullGraph(pt)
{
for(var i=graphs.length-1;i>=0;i--)
	{
	var graph = graphs[i];
	if(inRect(pt,graph.x,graph.y,graph.w,graph.h))
		return i
	}
return -1
}

//*********************************************************************

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

//*********************************************************************

function inGraphBin(pt,graph)
{
// if this type of graph has no bin
if(!GINFO[graph.type].bin) return -1;

if(!inRect(pt,graph.x,graph.y+graph.h-20,graph.w,20))
	return -1

var index = Math.floor((pt.x-graph.x)/20)

return index
}

//*********************************************************************


function inDock(pt)
{
if(pt.x<20) return -1
if(pt.x>=20+20*dock.length) return -1
if(pt.y<myheight-40) return -1
if(pt.y>=myheight+20) return -1
return Math.floor((pt.x-20)/20)
}

//*********************************************************************

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

//*********************************************************************

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

return k<NBTYPE1 ? -1 : k>=NBTYPE3 ? -1 : k;
}

//*********************************************************************

function inDustbinIcon(pt)
{
return inRect(pt,mywidth-20,myheight-40,20,20);
}

//*********************************************************************

function inTableIcon(pt)
{
return inRect(pt,mywidth-40,myheight-40,20,20);
}

//*********************************************************************

function inHelpIcon(pt)
{
return inRect(pt,mywidth-60,myheight-40,20,20);
}

//*********************************************************************

function inAddIcon(pt)
{
return inRect(pt,mywidth-80,myheight-40,20,20);
}

//*********************************************************************

function inCloneIcon(pt)
{
return inRect(pt,mywidth-100,myheight-40,20,20);
}

//*********************************************************************

function inSortIcon(pt)
{
return inRect(pt,mywidth-120,myheight-40,20,20);
}

//*********************************************************************

function inLabel(pt)
{
var y = pt.y+barshift
if(pt.x<mywidth-100) return -1
if(y>=labels.length*20) return -1
return Math.floor(y/20)
}

//*********************************************************************

function inValue(pt)
{
var y = pt.y+barshift

var ni = Math.ceil(NBTYPE3/5)
if(pt.x<mywidth-100) return -1
if(y<labels.length*20+20+ni*20+20) return -1
if(y>=labels.length*20+20+ni*20+20+20*values.length) return -1
return Math.floor((y-labels.length*20-20-20*ni-20)/20)
}

//*********************************************************************

function labelInUse(index)
{
for(var i=0;i<graphs.length;i++)
	{
	if(graphs[i].ilabel1==index) return true;
	if(graphs[i].ilabel2==index) return true;
	if(graphs[i].ilabel3==index) return true;
	if(graphs[i].ilabels)
		for(var j=0;j<graphs[i].ilabels.length;j++)
			if(graphs[i].ilabels[j]==index) return true;
	}
return false;
}

//*********************************************************************

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
	if(graphs[i].jvalues)
		for(var j=0;j<graphs[i].jvalues.length;j++)
			if(graphs[i].jvalues[j]==index)
				return true;
	}
return false;
}

//*********************************************************************

function inGraphTitle(pt,graph)
{
return inRect(pt,graph.x,graph.y,graph.w,graph.hbar);
}

//*********************************************************************

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

//*********************************************************************

function inGraphTopLabel(pt,graph)
{
if(!GINFO[graph.type].toplabel) return false;
return inRect(pt,graph.x+graph.w-100-graph.topshift,graph.y+graph.hbar+5,100,20)
}

//*********************************************************************

function inGraphLeftLabel(pt,graph)
{
if(!GINFO[graph.type].leftlabel) return false;
return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.leftshift,20,100)
}

//*********************************************************************

function inGraphBottomLabel(pt,graph)
{
if(!GINFO[graph.type].bottomlabel) return false;
return inRect(pt,graph.x+graph.w-100-graph.bottomshift,graph.y+graph.h-25,100,20)
}

//*********************************************************************

function inGraphLabeln(pt,graph)
{
if(!GINFO[graph.type].ilabels) return false;

for(var k=0;k<=graph.ilabels.length;k++)	
	if(inRect(pt,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20))
		{
		destlabelindex = k
		return true
		}

return false
}

//*********************************************************************

function inGraphTopValue(pt,graph)
{
if(!GINFO[graph.type].topvalue) return false;
return inRect(pt,graph.x+graph.w-100-graph.topshift,graph.y+graph.hbar+5,100,20)
}

//*********************************************************************

function inGraphLeftValue(pt,graph)
{
if(!GINFO[graph.type].leftvalue) return false;
return inRect(pt,graph.x+5,graph.y+graph.hbar+graph.leftshift,20,100)
}

//*********************************************************************

function inGraphBottomValue(pt,graph)
{
if(!GINFO[graph.type].bottomvalue) return false;
return inRect(pt,graph.x+graph.w-100-graph.bottomshift,graph.y+graph.h-25,100,20)
}

//*********************************************************************

function inGraphValuei(pt,graph,full)
{
if(!GINFO[graph.type].ivalues) return false;

var n = full ? graph.ivalues.length : graph.ivalues.length-1;

for(var k=0;k<=n;k++)	
	if(inRect(pt,graph.x+graph.w-105,graph.y+graph.hbar+5+25*k,100,20))
		{
		destvalueindex = k
		return true;
		}

return false;
}

//*********************************************************************

function inGraphValuej(pt,graph,full)
{
if(!GINFO[graph.type].jvalues) return false;

var n = full ? graph.jvalues.length : graph.jvalues.length-1;

var y = graph.y+graph.hbar+5+25*graph.ivalues.length+50;
for(var k=0;k<=n;k++)	
	if(inRect(pt,graph.x+graph.w-105,y+25*k,100,20))
		{
		destvalueindex = k;
		return true;
		}

return false;
}

//*********************************************************************

function inGraphHandle(pt,graph)
{
if(inRect(pt,graph.x+graph.w-20,graph.y,20,graph.selection.length/2*20))
	return Math.floor((pt.y-graph.y)/20)
else
	return -1
}

//*********************************************************************

function inGraphSlice(pt,graph)
{
if(!inRect(pt,graph.x,graph.y,graph.w,graph.h))
	return -1

return GINFO[graph.type].slice(pt,graph);

}

//*********************************************************************

function setGraphLabel(graph,name)
{

var k = GINFO[graph.type][name];
if(k)
	{
	graph["ilabel"+k] = labelindex;
	graph["use"+k] = null;
	if(k==1) graph.omit = {};
	}

computeGraphData(graph);
}

//*********************************************************************

function removeGraphLabel(graph,name)
{
var k = GINFO[graph.type][name];
if(k)
	{
	graph["ilabel"+k] = -1;
	graph["use"+k] = null;
	}
computeGraphData(graph);
}

//*********************************************************************

function setGraphLabeln(graph)
{
if(graph.ilabels.indexOf(labelindex)<0)
	{	
	if(destlabelindex==graph.ilabels.length)
		graph.ilabels.push(labelindex)
	else 
		graph.ilabels[destlabelindex] = labelindex	
	}
computeGraphData(graph)
}

//*********************************************************************

function removeGraphLabeln(graph)
{
graph.ilabels.splice(labelindex,1);
computeGraphData(graph);
}

//*********************************************************************

function setGraphValue(graph,name)
{
var k = GINFO[graph.type][name];
if(k)
	graph["ivalue"+k] = valueindex;

computeGraphData(graph);
}

//*********************************************************************

function setGraphValuei(graph)
{
if(valueindex>0)
	{
	// add value if it doesnt exist already	
	if((graph.ivalues.indexOf(valueindex)<0)&&(graph.jvalues.indexOf(valueindex)<0))
		{	
		if(destvalueindex==graph.ivalues.length)
			graph.ivalues.push(valueindex)
		else 
			graph.ivalues[destvalueindex] = valueindex	
		}
	}
else
	{
	// add all values not already there
	for(var k=1;k<values.length;k++)
		{
		if(graph.ivalues.indexOf(k)>=0) continue;
		if(graph.jvalues.indexOf(k)>=0) continue;
		graph.ivalues.push(k)
		}
	}

computeGraphData(graph);
}

//*********************************************************************

function setGraphValuej(graph)
{
if(valueindex>0)
	{
	if((graph.ivalues.indexOf(valueindex)<0)&&(graph.jvalues.indexOf(valueindex)<0))
		{		
		if(destvalueindex==graph.jvalues.length)
			graph.jvalues.push(valueindex);
		else
			graph.jvalues[destvalueindex] = valueindex;
		}
	}
else
	{
	// add all values not already there
	for(var k=1;k<values.length;k++)
		{
		if(graph.ivalues.indexOf(k)>=0) continue;
		if(graph.jvalues.indexOf(k)>=0) continue;
		graph.jvalues.push(k);
		}
	}

computeGraphData(graph);
}


//*********************************************************************

function removeGraphValue(graph,name)
{
var k = GINFO[graph.type][name];
if(k)
	graph["ivalue"+k] = -1;

computeGraphData(graph);
}

//*********************************************************************

function selectMenuItem(pt,graph,menu)
{
var x = graph.x+graph.w/2;
var y = graph.y+graph.hbar+5;
var w = 150;

for(var i=0;i<menu.length;i++)
	if(inRect(pt,x-w/2,y+20+20*i,w,20))
		{ menuindex = i; return; }

menuindex = -1;
}

//*********************************************************************

function getGraphOption(graph)
{
var k = GINFO[graph.type].options;
return k ? graph.option%k : -1;
}

//*********************************************************************

function getGraphDisplay(graph)
{
var k = GINFO[graph.type].display;
return !k ? -1 : graph["ilabel"+k];	
}

//*********************************************************************

function setGraphDisplay(graph,index)
{
var k = GINFO[graph.type].display;
if(k)
	graph["ilabel"+k] = graph["ilabel"+k] == index ? -1 : index;
		
}

//*********************************************************************
//
//                PIE
//
//*********************************************************************


function drawPieIcon(ctx,x,y)
	{
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

	}

//*********************************************************************

function inPieSlice(pt,graph)
{
var r1 = graph.w/2
var r2 = (graph.h-graph.hbar-20)/2
var xc = graph.x+r1
var yc = graph.y+graph.hbar+r2
var r = (r1<r2) ? r1 : r2

var dc = (pt.x-xc)*(pt.x-xc) + (pt.y-yc)*(pt.y-yc)
if(dc>r*r) return -1

var option = getGraphOption(graph);

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

	if(option==0)
		var angle2 = angle1 + Math.PI*2*graph._count[key]/graph.total
	else
		var angle2 = angle1 + Math.PI*2/nkey

	if((angle>=angle1)&&(angle<angle2))
		return i
	angle1 = angle2
	}

return -1
}

//*********************************************************************

function drawPieGraph(ctx,graph)
{
var angle1 = -Math.PI/2
var r1 = graph.w/2
var r2 = (graph.h-graph.hbar-20)/2
var xc = graph.x+r1
var yc = graph.y+graph.hbar+r2
var r = (r1<r2) ? r1 : r2

var option = getGraphOption(graph);

var nkey = 0
for(var i=0;i<graph._keys1.length;i++)
	if(!(graph._keys1[i] in graph.omit))
		nkey ++

for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue

	if(option==0)
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
	
drawGraphBin(ctx,graph)
}

//*********************************************************************

function buildPieTable(graph)
{
var nkey = 0
for(var i=0;i<graph._keys1.length;i++)
	if(!(graph._keys1[i] in graph.omit))
		nkey ++

if(graph.ilabel1>=0)
	{
	table(1,2,labels[graph.ilabel1]);
	table(1,3,"%");
	setTableName("Pie - "+labels[graph.ilabel1]);
	}
else
	setTableName("Pie");

for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue

	table(j+2,1,key);
	table(j+2,2,graph._count[key]);
	var pct = Math.round(graph._count[key]*1000/graph.total)/10;
	table(j+2,3,pct);
	}

}

//*********************************************************************
//
//                BAR
//
//*********************************************************************


function drawBarIcon(ctx,x,y)
	{	
	ctx.strokeStyle= "#000000"
	ctx.fillStyle = "#000000"
	drawRect(ctx,x+2,y+5,4,20-5)
	drawRect(ctx,x+6,y+8,4,20-8)
	drawRect(ctx,x+10,y+2,4,20-2)
	drawRect(ctx,x+14,y+10,4,20-10)
	}

//*********************************************************************

function inBarSlice(pt,graph)
{
var hmax = graph.h-graph.hbar -20
var option = getGraphOption(graph);

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

		if(option==0)
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
	if(option==0)
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

	if(option==1)
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

	if(option==2)
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

//*********************************************************************

function drawBarGraph(ctx,graph)
{
ctx.strokeStyle = "#000000"
var hmax = graph.h-graph.hbar -20
var option = getGraphOption(graph);

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

		if(option==1)
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
	
	if(option==0)
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

	if(option==1)
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

	if(option==2)
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

}

//*********************************************************************
//
//                LINE
//
//*********************************************************************


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

//*********************************************************************

function moveLineGraph(pt,graph)
{
if(graph.type!=TYPE.LINE) return false;
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

//*********************************************************************

function drawLineIcon(ctx,x,y)
	{
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

//*********************************************************************

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

//*********************************************************************
//
//                TAG
//
//*********************************************************************


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
		return j;
	x += width + 5
	}

return -1
}

//*********************************************************************

function drawTagIcon(ctx,x,y)
	{
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

//*********************************************************************

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
var y = graph.y + graph.hbar + 30 + 12 - graph.yshift;

ctx.save()
ctx.fillStyle = "#000000"
ctx.textAlign = "start"

var tcard = ["8px","10px","12px","14px","16px"]

for(var j=0;j<graph._keys1.length;j++)
	{
	var key = graph._keys1[j]
	if(key in graph.omit) continue		
	//console.log("key="+key+" count "+graph._count[key]);
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

}

//*********************************************************************
//
//                SOL
//
//*********************************************************************


function computeSolData(graph)
{
graph._z = {}		// specific

commons = {}	// common sets

assoc = {}
for(var i=0;i<graph._keys1.length;i++)
	assoc[i] = 0


for(var ia=0;ia<graph._keys1.length;ia++)
	{
	keya = graph._keys1[ia];
	if(keya in graph.omit) continue;

	for(var ib=0;ib<graph._keys1.length;ib++)
		{
		if(ib==ia) continue
		keyb = graph._keys1[ib]	
		if(keyb in graph.omit) continue;

		var commonkeys = ""
		var sep = ""
		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j]

			if(!graph._count[keya+"\t"+key2]) continue
			if(!graph._count[keyb+"\t"+key2]) continue

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
for(var seq in commons)	
	{
	var card2 = seq.split("\t").length
	var card1 = card(commons[seq]);
	graph._z.commons.push([seq,commons[seq],card2,card1])
	}	

// sort by number of keys in the sequence
graph._z.commons.sort(function(a,b) { 	
	return a[2]!=b[2] ? b[2]-a[2] :b[3]-a[3]
	})


}

//*********************************************************************

function moveSolGraph(pt,graph)
{
if(graph.type!=TYPE.SOL) return false
if(!inRect(pt,graph.x,graph.y,graph.w,graph.h)) return false

graph._z.clue = -1

if(graph.ilabel2<0) return false
if(typeof(graph._z.commons)=="undefined") return false

var n = graph._keys1.length+graph._keys2.length+1;
var dx = (graph.w-30)/n;
if(dx<5) dx = 5;

var i = Math.floor((pt.y-graph.y-graph.hbar-30)/(dx*2))
var i = Math.floor((pt.x-graph.x-30)/dx);
if(i<0) return false;
if(i<graph._keys2.length)
	{
	overlabel1 = graph.ilabel2;
	overkey1 = graph._keys2[i];
	message = overkey1;
	return true;
	}

i -= graph._keys2.length+1;
if(i<0) return false;
if(i<graph._keys1.length)
	{
	overlabel1 = graph.ilabel1;
	overkey1 = graph._keys1[i];
	message = overkey1;
	return true;
	}

return false;
}

//*********************************************************************

function drawSolIcon(ctx,x,y)
	{
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

//*********************************************************************

function drawSolGraph(ctx,graph)
{
if((graph.ilabel2>=0)&&(typeof(graph._z.commons)!="undefined"))
	{
	var n = graph._keys1.length+graph._keys2.length+1;
	var dx = (graph.w-30)/n;
	if(dx<5) dx = 5

	if((typeof(graph._z.clue)!="undefined")&&(graph._z.clue>=0))
		{
		ctx.fillStyle = "#EEEEEE"
		ctx.fillRect(graph.x,graph.y+graph.hbar+30+dx*graph._z.clue*2-dx/2,
			graph.w,2*dx)
		}

	for(var i=0;i<graph._z.commons.length;i++)
		{
		var y = graph.y + graph.hbar + 30 + dx*i;

		var common1 = graph._z.commons[i][0].split("\t")
		if(common1.length<2) continue;

		var common2 = graph._z.commons[i][1]
	
		ctx.fillStyle = "#EEEEEE";	
		for(var j=0;j<graph._keys2.length;j++)
			ctx.fillRect(graph.x+30+dx*j,y,dx-2,dx-2);

		for(var j=0;j<graph._keys1.length;j++)
			ctx.fillRect(graph.x+30+graph._keys2.length*dx+dx+dx*j,y,dx-2,dx-2);

		ctx.fillStyle = "#FF0000"		
		for(var j=0;j<common1.length;j++)
			{
			var k = Number(common1[j])
			var x = graph.x + 30 + k*dx
			if(hiliteMatch1(graph.ilabel2,graph._keys2[k]))
				{
				ctx.fillStyle = "#000000"
				ctx.fillRect(x-1,y-1,dx-2,dx-2)
				}
			else if(hiliteMatch2(graph.ilabel2,graph._keys2[k]))
				{
				ctx.fillStyle = "#000000";
				ctx.fillRect(x-1,y-1,dx-2,dx-2);
				}
			else
				{
				ctx.fillStyle = "#FF0000"
				ctx.fillRect(x,y,dx-2,dx-2);
				}
			}

		ctx.fillStyle = "#0000FF"

		for(var j=0;j<graph._keys1.length;j++)
			{			
			if(!(j in common2)) continue;
			var key1 = graph._keys1[j];
			var x = graph.x + 30+ graph._keys2.length*dx + dx + j*dx;

			if(hiliteMatch1(graph.ilabel1,key1))
				{
				ctx.fillStyle = "#000000";
				ctx.fillRect(x-1,y-1,dx-2,dx-2);
				}
			else if(hiliteMatch2(graph.ilabel1,key1))
				{
				ctx.fillStyle = "#000000";
				ctx.fillRect(x-1,y-1,dx-2,dx-2);
				}
			else
				{
				ctx.fillStyle = "#0000FF"
				ctx.fillRect(x,y,dx-2,dx-2);
				}
			}
		}
	}

}

//*********************************************************************
//
//                ARC
//
//*********************************************************************


function inArcSlice(pt,graph)
{
if(graph.ilabel1<0) return -1
if(graph.ilabel2<0) return -1

var option = getGraphOption(graph);

var nkey = graph._keys1.length - card(graph.omit)
if(nkey<2) return -1

var dx = graph.w/nkey

if(option==0)
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

//*********************************************************************

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

//*********************************************************************

function moveArcGraph(pt,graph)
{
if(graph.type!=TYPE.ARC) return false
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

//*********************************************************************

function drawArcIcon(ctx,x,y)
	{
	ctx.strokeStyle = "#000000"
	ctx.beginPath()
	ctx.arc(x+7,y+20,7,Math.PI,2*Math.PI,false)
	ctx.arc(x+15,y+20,5,Math.PI,2*Math.PI,false)
	ctx.stroke()
	}

//*********************************************************************

function drawArcGraph(ctx,graph)
{
var nkey = graph._keys1.length - card(graph.omit)	
var option = getGraphOption(graph);

if((typeof(graph._z.dist)!="undefined")&&(graph.ilabel2>=0)&&(nkey>1))
	{	
	if(option==0)
		drawArcGraph0(ctx,graph)
	else
		drawArcGraph1(ctx,graph)
	}

}

//*********************************************************************

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

// draw normal arcs
ctx.lineWidth = 1;
ctx.strokeStyle = getColor(graph.hue,1,1);
for(var i=istart;i<graph._z.dist.length;i++)
	{		
	var dist = graph._z.dist[i][0]
	var ikeya = graph._z.dist[i][1]
	var ikeyb = graph._z.dist[i][2]
	var keya = graph._z.dist[i][3]
	var keyb = graph._z.dist[i][4]

	var weight = Math.floor(5*dist/maxdist)/5;
	var weight = dist/maxdist;
	if(weight==0) continue

	drawArc(ikeya,ikeyb);
	}

// draw hilite arcs
ctx.lineWidth = 3;
ctx.strokeStyle = "#000000";
for(var i=istart;i<graph._z.dist.length;i++)
	{
	var dist = graph._z.dist[i][0]
	var ikeya = graph._z.dist[i][1]
	var ikeyb = graph._z.dist[i][2]
	var keya = graph._z.dist[i][3]
	var keyb = graph._z.dist[i][4]

	if((!hiliteMatch1(graph.ilabel1,keya))&&(!hiliteMatch1(graph.ilabel1,keyb)))
		continue;

	var weight = Math.floor(5*dist/maxdist)/5;
	var weight = dist/maxdist;
	if(weight==0) continue

	drawArc();
	}

ctx.lineWidth = 1;

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

	function drawArc()
	{
	var xa = graph.x + ikeya*dx + dx/2;
	var xb = graph.x + ikeyb*dx + dx/2;
	var rx = (xb-xa)/2
	var ry = (graph.h -graph.hbar -20	)*weight;
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
}

//*********************************************************************

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

// draw arcs
ctx.lineWidth = 1;
ctx.strokeStyle = getColor(graph.hue,1,1);
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

	drawArc();
	}

// draw hilite arcs
ctx.lineWidth = 3;
ctx.strokeStyle = "#000000";
for(var i=istart;i<graph._z.dist.length;i++)
	{		
	var dist = graph._z.dist[i][0]
	var ikeya = graph._z.dist[i][1]
	var ikeyb = graph._z.dist[i][2]
	var keya = graph._z.dist[i][3]
	var keyb = graph._z.dist[i][4]

	if((!hiliteMatch1(graph.ilabel1,keya))&&(!hiliteMatch1(graph.ilabel1,keyb))) continue;

	var weight = Math.floor(5*dist/maxdist)/5
	var weight = dist/maxdist
	if(weight==0) continue

	drawArc();
	}


ctx.lineWidth = 1;


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

	function drawArc()
	{
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
}

//*********************************************************************
//
//                CROSS
//
//*********************************************************************


function inCrossSlice(pt,graph)
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

//*********************************************************************

function drawCrossIcon(ctx,x,y)
	{
	ctx.strokeStyle = "#000000"
	ctx.fillStyle = "#000000"
	drawRect(ctx,x+4,y+4,2,2)
	drawRect(ctx,x+10,y+3,6,6)
	drawRect(ctx,x+10+3,y+10+3,4,4)	
	drawRect(ctx,x+2,y+10,8,8)
	}

//*********************************************************************

function drawCrossGraph(ctx,graph)
{

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#000000"

var option = getGraphOption(graph);

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
		if(option==0)
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
	if(option==1)
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

			if(option==1)
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

	}


}

//*********************************************************************

function buildCrossTable(graph)
{
if(graph.ilabel1<0) return;
if(graph.ilabel2<0) return;

setTableName(labels[graph.ilabel2]+" x "+labels[graph.ilabel1]);

for(var i=0;i<graph._keys1.length;i++)
	table(1,2+i,graph._keys1[i]);

for(var j=0;j<graph._keys2.length;j++)
	{
	var key2 = graph._keys2[j];
	table(2+j,1,graph._keys2[j]);
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i];
		var key = key1+"\t"+key2;
		if(key in graph._count)
			table(2+j,2+i,graph._count[key]);
		else
			table(2+j,2+i,0);
		}
	}

}

//*********************************************************************
//
//                ASSOC
//
//*********************************************************************


function computeAssocData(graph)
{
if(graph.ilabel1<0) return;
if(graph.ilabel2<0) return;

var n1 = 0;
for(var i=0;i<graph._keys1.length;i++)
	if(!(graph._keys1[i] in graph.omit))
		n1++;

var sum1 = new Array(n1);
for(var i=0;i<n1;i++)
	sum1[i] = 0;

var n2 = graph._keys2.length;

var table = new Array(n1);
for(var i=0;i<n1;i++)
	{
	table[i] = new Array(n2);
	for(var j=0;j<n2;j++)
		table[i][j] = 0;
	}

var sum2 = new Array(n2);
for(var i=0;i<n2;i++)
	sum2[i] = 0;

var sum = 0;

// build contingency table
var i=0;

for(var ii=0;ii<graph._keys1.length;ii++)
	{
	var key1 = graph._keys1[ii];
	if(key1 in graph.omit) continue;
		
	for(var j=0;j<graph._keys2.length;j++)
		{
		var key2 = graph._keys2[j];

		var key = key1+"\t"+key2;	
		if(key in graph._count)
			{	
			table[i][j] = graph._count[key];		
			sum1[i] += graph._count[key];
			sum2[j] += graph._count[key];
			sum += graph._count[key];
			}
		}
	i++;
	}

	graph._z.n1 = n1;
	graph._z.n2 = n2;

if((n1==2)&&(n2==2))
	{
	var num = table[0][0]*table[1][1]-table[1][0]*table[0][1];
	graph._z.phi = num/Math.sqrt(sum1[0]*sum1[1]*sum2[0]*sum2[1]);

	var ratio = table[0][1]*table[1][0]/(table[0][0]*table[1][1]);	
	graph._z.rho1 = Math.cos(Math.PI/(1+Math.sqrt(ratio)));

	var alpha = Math.pow(ratio,Math.PI/4);
	graph._z.rho2 = (alpha-1)/(alpha+1);

	/*
	var cze = 2*table[1][1]/(2*table[1][1]+table[0][1]+table[1][0]);
	graph._z.cze = cze;
	*/
	
	var t1 = Math.max(table[0][0],table[0][1])+
			Math.max(table[1][0],table[1][1])+
			Math.max(table[0][0],table[1][0])+
			Math.max(table[0][1],table[1][1]);
	var t2 = Math.max(table[0][0]+table[1][0],table[0][1]+table[1][1])+
			Math.max(table[0][0]+table[0][1],table[1][0]+table[1][1]);
	graph._z.and = (t1-t2)/2/(table[0][0]+table[0][1]+table[1][0]+table[1][1]);	

	/*	
	var y1 = table[0][0]*table[1][1]-table[1][0]*table[0][1];
	var y2 = table[0][0]*table[1][1]+table[1][0]*table[0][1];	
	graph._z.yul = y1/y2;

	var o1 = table[0][0]/(table[0][0]+table[0][1]);
	var o2 = table[0][0]/(table[0][0]+table[1][0]);	
	graph._z.och = Math.sqrt(o1*o2);
	*/
	}

	var chi2 = 0;
	for(var i=0;i<n1;i++)
		for(var j=0;j<n2;j++)
			{
			var x = table[i][j]-sum1[i]*sum2[j]/sum;
			chi2 += x*x/(sum1[i]*sum2[j]/sum);
			}
	graph._z.chi2 = chi2;
	graph._z.c = Math.sqrt(chi2/(sum+chi2));
	graph._z.v = Math.sqrt(chi2/sum/Math.min(n1-1,n2-1));
	

// entropy of x
var hx = 0;
for(var i=0;i<n1;i++)
	hx -= sum1[i]*Math.log(sum1[i]/sum)/sum;

// entropy of y
var hy = 0;
for(var i=0;i<n2;i++)
	hy -= sum2[i]*Math.log(sum2[i]/sum)/sum;

// conditional entropies
var hxy = 0;
var hyx = 0;
for(var i=0;i<n1;i++)
	{
	for(var j=0;j<n2;j++)
		{	
		if(table[i][j]==0) continue;
		hxy -= table[i][j]*Math.log(table[i][j]/sum2[j])/sum;
		hyx -= table[i][j]*Math.log(table[i][j]/sum1[i])/sum;
		}
	}

graph._z.uxy = 1-hxy/hx;
graph._z.uyx = 1-hyx/hy;

// mutual information
var mut = 0;
for(var i=0;i<n1;i++)	
	for(var j=0;j<n2;j++)
		{
		if(table[i][j]==0) continue;	
		mut += table[i][j]*Math.log(table[i][j]*sum/sum1[i]/sum2[j])/sum;
		}
graph._z.mut = mut;


// predictive lambda
var max1 = 0;
for(var i=0;i<n1;i++)
	if(sum1[i]>max1) max1 = sum1[i];

var max12 = 0;
for(var j=0;j<n2;j++)
	{
	var max = 0;
	var s = 0;
	for(var i=0;i<n1;i++)
		{
		if(table[i][j]>max) max = table[i][j];
		s += table[i][j];
		}
	max12 += s-max;
	}

max1 = sum-max1;
graph._z.lambda12 = 1-max12/max1;

}

//*********************************************************************

function drawAssocIcon(ctx,x,y)
	{
	ctx.save();	
	ctx.fillStyle = "#333333";
	ctx.font = "bold 24px Times";
	ctx.textAlign = "center";
	ctx.fillText("r",x+10,y+16);
	ctx.restore();
	}

//*********************************************************************

function drawAssocGraph(ctx,graph)
{

if((graph.ilabel1>=0)&&(graph.ilabel2>=0))
	{

	var name1 = labels[graph.ilabel1];
	var name2 = labels[graph.ilabel2];

	var n1 = graph._z.n1;
	var n2 = graph._z.n2;

	var y = graph.y + graph.hbar + 50;
	var x = graph.x + 40;

	ctx.fillStyle = "#000000";


	if((n1==2)&&(n2==2))
		{
		drawValue("\u03C6 coefficient",graph._z.phi);
		var rho = (Math.abs(graph._z.rho1)+Math.abs(graph._z.rho2))/2;
		drawValue("Tetrachoric correlation",rho);
		drawValue("Anderberg's D",graph._z.and);
		y+=24;
		}

	//drawValue("\u03C72 test",graph._z.chi2);
	drawValue("Contingency coefficient C",graph._z.c);
	drawValue("Cramér's V",graph._z.v);

	drawValue("Uncertainty coefficient ("+name1+" | "+name2+")",graph._z.uxy);
	
	drawValue("Mutual information ",graph._z.mut);

	drawValue("Goodman and Kruskal's \u03BB ("+name1+" | "+name2+")",graph._z.lambda12);
	}


	function drawValue(text,value) {
		ctx.save();
		ctx.textAlign = "left";
		var z = Math.round(value*10000)/10000;
		ctx.fillText(text,x,y);
		ctx.fillText(""+z,x+330,y);
		y += 24;
		ctx.restore();
	}

	function drawTitle(text) {
		ctx.save();
		ctx.textAlign = "center";
		ctx.fillText(text,x+180,y);
		y += 24;
		ctx.restore();
	}
}

//*********************************************************************
//
//                FAC
//
//*********************************************************************


function computeFacData(graph)
{

var nl = graph.ilabels.length;
if(nl<2) return;


// get keys of each label
var keys = [];
for(var j=0;j<nl;j++)
	keys[j] = {};

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	for(var j=0;j<nl;j++)
		{
		var key = lrecords[i][graph.ilabels[j]];
		if(key in keys[j]) continue;		
		keys[j][key] = 1;
		}
	}

var nk = 0;

// convert sets to list
for(var j=0;j<nl;j++)
	{
	var list = [];
	for(var k in keys[j])
		list.push(k);
	nk += list.length;
	list.sort(function(a,b) { return a.localeCompare(b) });
	keys[j] = list;
	}


// if too many categories
graph._z.nk = nk;
if(nk>100) return;


if(nl==2)
	{
	var Z = compute2();			// contingency table
	var name1 = keys[0];
	var name2 = keys[1];
	}
else
	{
	var Z = computeN();			// Burt table			
	var name1 = keys;
	}


var nx = Z.length;
var ny = Z[0].length;


// partial sums
var sum = 0;
var xsum = vector(nx);
var ysum = vector(ny);
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
var newZ = new Array(nx);
for(var j=0;j<nx;j++)
	newZ[j] = [];

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
ny = newny;
ysum = newysum;
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

if(nl==2)
	var nlambda = Math.min(nx-1,ny-1);
else
	var nlambda = nx-nl;

var lambda = new Array(nlambda);
for(var i=0;i<nlambda;i++)	
	lambda[i] = d[i+1]>0 ?d[i+1] :0;

console.log(lambda);

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
// if Burt's table, xcol = xrow and ycol = yrow
if(nl==2)
	{
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
	}

if(nl==2)
	{
	var colors = new Array(2);
	colors[0] = "#FF0000";
	colors[1] = "#0000FF";
	}
else
	{
	var colors = new Array(nl);
	for(var j=0;j<nl;j++)
		colors[j] = getColor(frac(j/nl),1,0.8);
	}

graph._z.lambda = lambda;
graph._z.xrow = xrow
graph._z.yrow = yrow
graph._z.xcol = xcol
graph._z.ycol = ycol

graph._z.xmax = 0;
graph._z.ymax = 0;

graph._z.name1 = name1;
graph._z.name2 = name2;

graph._z.colors = colors;

graph._z.xfrom = "";			// to change orientation
graph._z.xto = "";		
graph._z.yfrom = "";
graph._z.yto = "";


if(graph._z.xrow)
for(var i=0;i<graph._z.xrow.length;i++)
	{
	if(Math.abs(graph._z.xrow[i])>graph._z.xmax)
		graph._z.xmax = Math.abs(graph._z.xrow[i])
	if(Math.abs(graph._z.yrow[i])>graph._z.ymax)
		graph._z.ymax = Math.abs(graph._z.yrow[i])
	}	

if(graph._z.xcol)
for(var i=0;i<graph._z.xcol.length;i++)
	{
	if(Math.abs(graph._z.xcol[i])>graph._z.xmax)
		graph._z.xmax = Math.abs(graph._z.xcol[i])
	if(Math.abs(graph._z.ycol[i])>graph._z.ymax)
		graph._z.ymax = Math.abs(graph._z.ycol[i])
	}	


	//--------------------------------------------------------------------------

	// contingency matrix
	function compute2()
	{
	var set = {};
	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;

		var v = graph.iunit==0 ? 1 : vrecords[i][graph.iunit];

		var key1 = lrecords[i][graph.ilabels[0]];
		var key2 = lrecords[i][graph.ilabels[1]];
		var key = key1+"\t"+key2;	
		if(key in set)
			set[key] += v;
		else
			set[key] = v;
		}

	var n1 = keys[0].length;
	var n2 = keys[1].length;
	var M = matrix(n1,n2);
	for(var j=0;j<n1;j++)
		for(var k=0;k<n2;k++)
			{
			var key = keys[0][j]+"\t"+keys[1][k];
			if(key in set)
				M[j][k] = set[key];
			}
	return M;
	}

	//--------------------------------------------------------------------------

	// Burt's table
	function computeN()
	{
	var set = {};
	for(var j=0;j<nl;j++)
		for(var k=0;k<nl;k++)
			set[j+"\t"+k] = {};

	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;

		var v = graph.iunit == 0 ? 1 : vrecords[i][graph.iunit];
		for(var j=0;j<nl;j++)
			for(var k=0;k<nl;k++)
				{
				var key = lrecords[i][graph.ilabels[j]]+"\t"+lrecords[i][graph.ilabels[k]];
				if(key in set[j+"\t"+k])
					set[j+"\t"+k][key]  += v;
				else
					set[j+"\t"+k][key] = v;
				}
		}

	var n = 0;	
	for(var j=0;j<nl;j++)
		n += keys[j].length;

	var M = matrix(n,n);

	var jjj = 0;
	for(var j=0;j<nl;j++)
		for(var jj=0;jj<keys[j].length;jj++)
			{
			var kkk = 0;
			for(var k=0;k<nl;k++)
				for(var kk=0;kk<keys[k].length;kk++)
					{
					var key = keys[j][jj]+"\t"+keys[k][kk];
					if(key in set[j+"\t"+k])
							M[jjj][kkk] = set[j+"\t"+k][key];
					kkk++;
					}
			jjj++;
			}
	return M;
	}


}

//*********************************************************************

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

//*********************************************************************

function inFacGraph(pt,graph)
{
if(graph.ilabels.length<2) return;

var option = getGraphOption(graph);

if(option==0)
	{
	var dx = graph.w/2
	var dy = (graph.h - graph.hbar -20)/2

	var xc = graph.x + dx
	var yc = graph.y + graph.h - 20 - dy

	var xmax = graph._z.xmax 
	var ymax = graph._z.ymax

	var mindist = 10*10
	var minindex = -1
	var mintype = 0

	var xscale = (dx-5)/xmax;
	var yscale = (dy-5)/ymax;
	var scale = (xscale<yscale) ? xscale : yscale

	// look for the closest point

	if(graph._z.xcol)
	for(var i=0;i<graph._z.xcol.length;i++)
		{
		var x = xc + scale*graph._z.xcol[i]
		var y = yc - scale*graph._z.ycol[i]
		var dist = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y)
		if(dist<mindist)
			{
			mindist = dist;
			minindex = i;
			mintype = 2;
			}
		}

	if(graph._z.row)
	for(var i=0;i<graph._z.xrow.length;i++)
		{		
		var x = xc + scale*graph._z.xrow[i]
		var y = yc - scale*graph._z.yrow[i]
		var dist = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y)
		if(dist<mindist)
			{
			mindist = dist;
			minindex = i;
			mintype = 1;
			}
		}
	}


if(mintype<0)
	return false
else
	return {type:mintype,index:minindex}
}

//*********************************************************************

function inFacSlice(pt,graph)
{

var x = inFacGraph(pt,graph)
if(!x)
	return -1
else if(x.type==2)
	return -1
else
	return getKeyIndex(graph,x.index)

}

//*********************************************************************

function moveFacGraph(pt,graph)
{

var option = getGraphOption(graph);

if(option==0)
	{
	var x = inFacGraph(pt,graph)

	if(!x)
		return false;
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

}

//*********************************************************************

function drawFacIcon(ctx,x,y)
	{
	ctx.fillStyle = "#000000"
	ctx.fillRect(x,y+10,20,1)
	ctx.fillRect(x+10,y,1,20)
	ctx.fillRect(x+3,y+7,2,2)
	ctx.fillRect(x+5,y+3,2,2)
	ctx.fillRect(x+12,y+4,2,2)
	ctx.fillRect(x+6,y+13,2,2)
	ctx.fillRect(x+15,y+12,2,2)
	}

//*********************************************************************

function drawFacGraph(ctx,graph)
{

var nl = graph.ilabels.length;

if(nl<2) 
	{
	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	var xc = graph.x+graph.w/2;
	var yc = graph.y+graph.h/2;
	ctx.fillText("Not enough fields",xc,yc);
	return;
	}

if(graph._z.nk>100)
	{
	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	var xc = graph.x+graph.w/2;
	var yc = graph.y+graph.h/2;
	ctx.fillText("Too many categories",xc,yc);
	return;
	}

	
var xleft = graph.x+5;
var xright = graph.x+graph.w-110;
var ytop = graph.y+graph.hbar+5;
var ybottom = graph.y+graph.h-5;
	
var dx = (xright-xleft)/2;
var dy = (ybottom-ytop)/2;

var xc = xleft+dx;
var yc = ytop+dy;

var option = getGraphOption(graph);


if(option==0)
	{
	// factorial plane
	var over = [];

	var xmax = graph._z.xmax;
	var ymax = graph._z.ymax;

	var xscale = (dx-5)/xmax;
	var yscale = (dy-5)/ymax;
	var scale = (xscale<yscale) ? xscale : yscale;

	ctx.font = "12px helvetica";
	ctx.textAlign = "center";

	// draw axes
	ctx.fillStyle = GRAY;
	ctx.fillRect(xleft,yc,xright-xleft,1);
	ctx.fillRect(xc,ytop,1,ybottom-ytop);

	if(nl==2)
		{	
		// draw legend
		ctx.fillStyle = graph._z.colors[0];
		ctx.fillRect(graph.x+graph.w-130,graph.y+graph.hbar+5,20,20);
		ctx.fillStyle = graph._z.colors[1];
		ctx.fillRect(graph.x+graph.w-130,graph.y+graph.hbar+30,20,20);

		ctx.fillStyle = graph._z.colors[0];
		for(var i=0;i<graph._z.xrow.length;i++)
			{
			var x = xc + scale*graph._z.xrow[i];
			var y = yc - scale*graph._z.yrow[i];
			ctx.fillText(graph._z.name1[i],x,y+3);
			}

		ctx.fillStyle = graph._z.colors[1];
		for(var i=0;i<graph._z.xcol.length;i++)
			{
			var x = xc + scale*graph._z.xcol[i];
			var y = yc - scale*graph._z.ycol[i];
			ctx.fillText(graph._z.name2[i],x,y+3);
			/*
			if(hiliteMatch1(graph.ilabel2,key2))
				over = [key2,x,y];
			*/
			}
		}

	else
		{
		// multi
		var i = 0;
		for(var j=0;j<nl;j++)
			{
			ctx.fillStyle = graph._z.colors[j];
			ctx.fillRect(graph.x+graph.w-130,graph.y+graph.hbar+5+25*j,20,20);
			for(var k=0;k<graph._z.name1[j].length;k++)
				{
				var x = xc + scale*graph._z.xrow[i];
				var y = yc - scale*graph._z.yrow[i];
				ctx.fillText(graph._z.name1[j][k],x,y+3);
				i++;
				}
			}
		}


	if(action==CHANGE_ORIENTATION)
		{		
		ctx.fillStyle = GRAY;
		if((ptmove.x<xc)&&(ptmove.y<yc))	
			{
			ctx.fillRect(xleft,ytop,xc-xleft,yc-ytop);
			graph._z.xto = "W";
			graph._z.yto = "N";
			}
		else if((ptmove.x<xc)&&(ptmove.y>yc))
			{
			ctx.fillRect(xleft,yc,xc-xleft,ybottom-yc);
			graph._z.xto = "W";
			graph._z.yto = "S";
			}
		else if((ptmove.x>xc)&&(ptmove.y<yc))
			{
			ctx.fillRect(xc,ytop,xright-xc,yc-ytop);
			graph._z.xto = "E";		
			graph._z.yto = "N";
			}
		else if((ptmove.x>xc)&&(ptmove.y>yc))
			{
			ctx.fillRect(xc,yc,xright-xc,ybottom-yc);
			graph._z.xto = "E";
			graph._z.yto = "S";
			}
		}
	// hilite the selected point if any
	/*
	if(over)
		{
		var l = ctx.measureText(over[0]).width;
		ctx.fillStyle = "#000000";
		ctx.fillRect(over[1]-l/2-4,over[2]-9,l+8,15);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText(over[0],over[1],over[2]+3);	
		}
	*/
	}

if(option==1)
	{
	var xleft = graph.x+30;
	var xright = graph.x+graph.w-10;
	var ytop = graph.y+graph.hbar+10;
	var ybottom = graph.y+graph.h-30;

	ctx.textAlign = "right";
	for(var i=0;i<=10;i++)
		{
		var y = ybottom-(ybottom-ytop)*i/10;
		ctx.fillStyle = "#000000";
		ctx.fillText((i/10)+"",xleft-5,y+3);
		ctx.fillStyle = "#CCCCCC";
		ctx.fillRect(xleft,y,xright-xleft,1);
		}

	var lambda = graph._z.lambda;
	var nlambda = lambda.length;

	var suml = 0;	
	for(var i=0;i<nlambda;i++)
		suml += lambda[i];
	var dx = (xright-xleft)/nlambda;

	ctx.fillStyle = "#00FF00";
	ctx.strokeStyle = "#000000";
	for(var i=0;i<nlambda;i++)
		{
		var dy = (ybottom-ytop)*lambda[i]/suml;
		ctx.fillRect(xleft+i*dx,ybottom-dy,dx-3,dy);
		ctx.strokeRect(xleft+i*dx,ybottom-dy,dx-3,dy);
		}

	}


/*
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
*/

}

//*********************************************************************

function dragFacGraph(graph)
{
if(faction==SELECT_SLICES)
	{
	// add a point to the contouring path
	if(graph.ncontour<graph.contour.length-1)
		graph.contour[graph.ncontour++] = ptmove
	}

}

//*********************************************************************

function downFacGraph(pt,graph)
{
var option = getGraphOption(graph);
if(option==0)
	{
	var xleft = graph.x+5;
	var xright = graph.x+graph.w-110;
	var ytop = graph.y+graph.hbar+5;
	var ybottom = graph.y+graph.h-5;

	var dx = (xright-xleft)/2;
	var dy = (ybottom-ytop)/2;

	var xc = xleft+dx;
	var yc = ytop+dy;

		
	if((ptmove.x<xc)&&(ptmove.y<yc))	
		{
		graph._z.xfrom = "W";
		graph._z.yfrom = "N";
		}
	else if((ptmove.x<xc)&&(ptmove.y>yc))
		{
		graph._z.xfrom = "W";
		graph._z.yfrom = "S";
		}
	else if((ptmove.x>xc)&&(ptmove.y<yc))
		{
		graph._z.xfrom = "E";
		graph._z.yfrom = "N";
		}
	else if((ptmove.x>xc)&&(ptmove.y>yc))
		{
		graph._z.xfrom = "E";
		graph._z.yfrom = "S";
		}
			
	document.body.style.cursor = "Move";
	return CHANGE_ORIENTATION;
	}
return -1;
}

//*********************************************************************

function upFacGraph(graph)
{

if(action!=CHANGE_ORIENTATION) return;

if(graph._z.xfrom!=graph._z.xto)
	{
	if(graph._z.xrow)
		for(var i=0;i<graph._z.xrow.length;i++)
			graph._z.xrow[i] = -graph._z.xrow[i];
	if(graph._z.xcol)		
		for(var i=0;i<graph._z.xcol.length;i++)
			graph._z.xcol[i] = -graph._z.xcol[i];
	}

if(graph._z.yfrom!=graph._z.yto)
	{
	if(graph._z.yrow)
		for(var i=0;i<graph._z.yrow.length;i++)
			graph._z.yrow[i] = -graph._z.yrow[i];
	if(graph._z.xcol)		
		for(var i=0;i<graph._z.ycol.length;i++)
			graph._z.ycol[i] = -graph._z.ycol[i];
	}

}

//*********************************************************************
//
//                SOM
//
//*********************************************************************


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

//*********************************************************************

function moveSomGraph(pt,graph)
{
var index = inSomGraph(pt,graph)
if(index<0) return false

overlabel1 = graph.ilabel1
overkey1 = graph._keys1[index]
message = overkey1
return true
}

//*********************************************************************

function inSomGraph(pt,graph)
{
if(graph.type!=TYPE.SOM) return -1
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

//*********************************************************************

var xxsom = [[2,6,10,14,18],[3,6,11,14,18],[2,6,10,14,18],[2,6,9,14,17],[2,6,10,14,18]];
var yysom = [[2,2,3,2,2],[6,6,6,6,6],[10,10,10,10,10],[14,14,13,14,14],[18,17,18,19,18]];

function drawSomIcon(ctx,x,y)
	{

	ctx.fillStyle = "#000000"
	for(var i=0;i<5;i++)
		for(var k=0;k<4;k++)
			drawLine(ctx,x+xxsom[i][k],y+yysom[i][k],
				x+xxsom[i][k+1],y+yysom[i][k+1],5)

	for(var i=0;i<5;i++)
		for(var k=0;k<4;k++)
			drawLine(ctx,x+xxsom[k][i],y+yysom[k][i],
				x+xxsom[k+1][i],y+yysom[k+1][i],5)
	}

//*********************************************************************

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

}

//*********************************************************************
//
//                THREE
//
//*********************************************************************


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

//*********************************************************************

function drawThreeIcon(ctx,x,y)
	{
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

//*********************************************************************

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

}

//*********************************************************************

function buildThreeTable(graph)
{
if(graph.ilabel1<0) return;
if(graph.ilabel2<0) return;
if(graph.ilabel3<0) return;

setTableName(labels[graph.ilabel1]+" x "+labels[graph.ilabel2]+" x "+labels[graph.ilabel3]);

var row = 1;
table(row,1,labels[graph.ilabel1]);
table(row,2,labels[graph.ilabel2]);
table(row,3,labels[graph.ilabel3]);

for(var i=0;i<graph._keys1.length;i++)
	{
	var key1 = graph._keys1[i]

	for(var j=0;j<graph._keys2.length;j++)
		{
		var key2 = graph._keys2[j]
			
		for(var k=0;k<graph._keys3.length;k++)
			{
			var key3 = graph._keys3[k]
			var key = key1+"\t"+key2+"\t"+key3
			if(!(key in graph._count)) continue

			row++;

			table(row,1,key1);
			table(row,2,key2);
			table(row,3,key3);		
			table(row,4,round(graph._count[key]));
			}
		}
	}


	function round(value)
	{
	return Math.round(value*10000)/10000;
	}

}

//*********************************************************************
//
//                TREE
//
//*********************************************************************


function inTreeSlice(pt,graph)
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

//*********************************************************************

function computeTreeData(graph)
{

graph._keys= [];

graph._count = {};
graph.total = 0;

var seens = [];

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

//*********************************************************************

function drawTreeIcon(ctx,x,y)
	{
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

//*********************************************************************

function drawTreeGraph(ctx,graph)
{

var x = graph.x
var w = graph.w - 110
var y = graph.y + graph.hbar
var h = graph.h - graph.hbar

if(graph.ilabels.length>0)
	processPartition(ctx,graph,0,x,w,y,h,"","")

}

//*********************************************************************

function processPartition(ctx,graph,index,x,w,y,h,oldkey,sep)
{
var mustdraw = index == graph.ilabels.length-1
var vertical = (index%2) == 0

var margin = 5-index;
if(margin<1) margin = 1;

var xx = x;
var yy = y;
var hh = h;
var ww = w;
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
		ctx.fillRect(xx,yy,ww-margin,hh-margin);
		}
	else
		processPartition(ctx,graph,index+1,xx,ww,yy,hh,newkey,"\t")
	
	if(vertical)
		xx += ww
	else
		yy += hh
	}
	
}

//*********************************************************************

function downTreeGraph(pt,graph)
{
var index = inTreeSlice(pt,graph);
if(index instanceof Array)
	{
	sliceindex = index;
	return DRAG_SLICE;
	}
		
return -1;

}

//*********************************************************************

function moveTreeGraph(pt,graph)
{
indices = inTreeSlice(pt,graph)

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
	return true;
	}

return false;
}

//*********************************************************************

function buildTreeTable(graph)
{
var nl = graph.ilabels.length;
if(nl==0) return;

var row = 1;

for(var i=0;i<nl;i++)
	table(row,i+1,labels[graph.ilabels[i]]);

var keys = new Array(nl);

process_label(0);

	function process_label(index)
	{
	for(var i=0;i<graph._keys[index].length;i++)
		{
		keys[index] = graph._keys[index][i];	
		if(index==nl-1)
			{
			var gkey = keys.join("\t");
			if(gkey in graph._count)
				line(graph._count[gkey]);
			}	
		else
			process_label(index+1);
		}
	}

	function line(value)
	{
	row++;
	for(var i=0;i<nl;i++)
		table(row,i+1,keys[i]);
	table(row,1+nl,Math.round(value*10000)/10000);
	}

}

//*********************************************************************
//
//                CHI2
//
//*********************************************************************


function computeChi2Data(graph)
{
if(graph.ilabel1<0) return;
if(graph.ilabel2<0) return;

var sum1 = new Array(graph._keys1.length);
for(var i=0;i<sum1.length;i++)
	sum1[i] = 0;

var sum2 = new Array(graph._keys2.length);
for(var i=0;i<sum2.length;i++)
	sum2[i] = 0;

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


graph._z.level = 0.05;
graph._z.dof = (graph._keys1.length-1)*(graph._keys2.length-1);
graph._z.cv = critchi(graph._z.level,graph._z.dof);
graph._z.chi2 = chi2;


}

//*********************************************************************

function drawChi2Icon(ctx,x,y)
	{
	var font = ctx.font;	
	ctx.font = "18px helvetica";
	ctx.fillStyle = "#000000";
	ctx.fillText("\u03C7",x+10,y+13);
	ctx.font = font;
	}

//*********************************************************************

function drawChi2Graph(ctx,graph)
{
var name1 = getGraphLabel(graph,"toplabel");
var name2 = getGraphLabel(graph,"leftlabel");

if((graph.ilabel1>=0)&&(graph.ilabel2>=0))
	{

	var level = graph._z.level;
	var dof = graph._z.dof;
	var max = Math.max(graph._z.cv,graph._z.chi2);
	max *= 1.1;
	var pvalue = chi2inv(0.0001,max,graph._z.chi2,dof);
	pvalue = Math.round(pvalue*10000)/10000;

	ctx.fillStyle = "#000000";
	ctx.strokeStyle = "#000000";
	ctx.textAlign = "left"
	ctx.lineWidth = 1

	var y = graph.y+graph.hbar+60;
	var z;

	ctx.fillText("Groups of "+name1,graph.x+40,y);
	ctx.fillText(""+graph._keys1.length,graph.x+240,y);

	y += 20;	
	ctx.fillText("Groups of "+name2,graph.x+40,y);
	ctx.fillText(""+graph._keys2.length,graph.x+240,y);

	y += 20;
	ctx.fillText("Degrees of freedom",graph.x+40,y);
	ctx.fillText(""+dof,graph.x+240,y);

	y += 20;
	ctx.fillText("Critical value",graph.x+40,y);
	z = Math.round(graph._z.cv*10000)/10000;
	ctx.fillText(""+z,graph.x+240,y);
	ctx.fillText("(\u03B1="+level+")",graph.x+360,y);

	y += 20;	
	ctx.fillText("Test statistic T",graph.x+40,y);
	z = Math.round(graph._z.chi2*10000)/10000;
	ctx.fillText(""+z,graph.x+240,y);
	ctx.fillText("(p="+pvalue+")",graph.x+360,y);

	y += 40;
	ctx.fillStyle= "#FF0000";	
	if(graph._z.chi2>graph._z.cv)
		{
		ctx.fillText("Independance hypothesis is rejected",graph.x+40,y);
		}
	else	
		{
		ctx.fillText("Independance hypothesis is accepted",graph.x+40,y);
		}

	y += 20;

	// draw chi2 curve
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 1;
	ctx.beginPath();

	var max = critchi(0.001,dof);
	max = Math.max(max,graph._z.chi2);
	max = max*1.01;

	var dy = 200;
	var dx = graph.w-40;

	var x = graph.x+20;	
	y += 220;

	var dmax = 0;
	for(var i=0;i<=100;i++)
		{
		var d = chi2density(max*i/100,dof);
		if(d>1e4) continue;
		if(d>dmax) dmax = d;
		}

	var first = true;
	for(var i=0;i<=100;i++)
		{
		var d = chi2density(max*i/100,dof);
		if(d>1e4) continue;
		if(first)
			ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
		else
			ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
		first = false;
		}
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+dx,y);
	ctx.stroke();

	ctx.fillStyle = "#000000";
	var j = Math.round(graph._z.cv*100/max);
	ctx.beginPath();
	var first = true;
	for(var i=j;i<=100;i++)
		{
		var d = chi2density(max*i/100,dof);		
		if(d>1e4) continue;	
		if(first)
			ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
		else
			ctx.lineTo(x+dx*i/100,y-d*dy/dmax);	
		first = false;
		}
	ctx.lineTo(x+dx,y);
	ctx.lineTo(x+dx*j/100,y);
	ctx.fill();

	ctx.textAlign = "center";
	ctx.fillText("T",x+dx*graph._z.chi2/max,y+25);	
	ctx.beginPath();
	ctx.moveTo(x+dx*graph._z.chi2/max,y+2);
	ctx.lineTo(x+dx*graph._z.chi2/max,y+12);
	ctx.stroke();
	}

}

//*********************************************************************

function downChi2Graph(pt,graph)
{
if(graph.ilabel1<0) return -1;
if(graph.ilabel2<0) return -1;

if(typeof(graph.error)=="undefined") graph.error = 5;

var y = graph.y + 200;
var x = graph.x+20+(graph.w-40)*graph.error/10;

if(inRect(pt,x-10,y-15,20,30))
	return DRAG_ERROR;

return -1;
}

//*********************************************************************

function dragChi2Graph(graph)
{
if(faction==DRAG_ERROR)
	{
	graph.error = (ptmove.x-graph.x-20)*10/(graph.w-40)	
	graph.error = Math.round(graph.error*10)/10.0;	
	if(graph.error<0.1)
		graph.error = 0.1
	if(graph.error>10)
		graph.error = 10
	}

}

//*********************************************************************
//
//                HOMO
//
//*********************************************************************

function downHomoGraph(pt,graph)
{

var w = 150;
var x = graph.x+graph.w/2-w/2;
var y = graph.y+graph.hbar+5;
if(inRect(pt,x,y,w,20))
	return SELECT_HOMO;
else
	return -1;

}

//*********************************************************************

function drawHomoIcon(ctx,x,y)
{
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

//*********************************************************************

function drawHomoGraph(ctx,graph)
{

if(graph.homo == HOMO.GINI)
	drawGiniGraph(ctx,graph);
else if(graph.homo == HOMO.ENTROPY)
	drawEntropyGraph(ctx,graph);


drawMenu(ctx,graph,MENU.HOMO,graph.homo,SELECT_HOMO,menuindex);

}

//*********************************************************************

function moveHomoGraph(ptmove,graph)
{

if(graph.homo==HOMO.GINI)
	return moveGini(ptmove,graph);
if(graph.homo==HOMO.ENTROPY)
	return moveEntropy(ptmove,graph);

return false;
}

//*********************************************************************

function moveGini(ptmove,graph)
{

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

//*********************************************************************

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

}

//*********************************************************************

function moveEntropy(ptmove,graph)
{

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

//*********************************************************************

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
}

//*********************************************************************

function dragHomoGraph(graph)
{
if(faction==SELECT_HOMO)
	{
	selectMenuItem(ptmove,graph,MENU.HOMO);
	}
}

//*********************************************************************
//
//                MOMENTS
//
//*********************************************************************


function computeMomentsData(graph)
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

graph._z.stats.n = n;
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

var stdev = Math.sqrt(graph._z.stats.momentc2);
graph._z.stats.stdev = stdev;
graph._z.stats.skewness = graph._z.stats.momentc3/(stdev*stdev*stdev);
graph._z.stats.kurtosis = graph._z.stats.momentc4/(stdev*stdev*stdev*stdev);

xx.sort(function(a,b) { return a-b });
graph._z.d1 = xx[Math.floor((n-1)/10)];
graph._z.q1 = xx[Math.floor((n-1)/4)];
graph._z.q2 = xx[Math.floor((n-1)/2)];
graph._z.q3 = xx[Math.floor((n-1)*3/4)];
graph._z.d9 = xx[Math.floor((n-1)*9/10)];
}

//*********************************************************************

function drawMomentsIcon(ctx,x,y)
	{
	var font = ctx.font;
	ctx.font = "18px helvetica";
	ctx.fillStyle = "#000000";
	ctx.fillText("\u03A3",x+10,y+17);  //sigma
	ctx.font = font;
	}

//*********************************************************************

function drawMomentsGraph(ctx,graph)
{
if(graph.ivalue1>=0)
	{
	ctx.fillStyle = "#000000";
	ctx.textAlign = "left"

	var x1 = graph.x+10;
	var x2 = graph.x+190;
	var y = graph.y+40;

	y += 20;
	ctx.fillText("Number of observations",x1,y);
	ctx.fillText(""+graph._z.stats.n,x2,y);

	y += 20;
	ctx.fillText("Average",x1,y);
	ctx.fillText(trunc(graph._z.stats.mean1,4),x2,y)

	y += 20;
	ctx.fillText("Standard deviation",x1,y)
	ctx.fillText(trunc(Math.sqrt(graph._z.stats.momentc2),4),x2,y)

	y += 20;
	ctx.fillText("Variance",x1,y)
	ctx.fillText(trunc(graph._z.stats.momentc2,4),x2,y)

	y += 20;	
	ctx.fillText("Minimum",x1,y);
	ctx.fillText(graph._z.stats.min+"",x2,y);

	y += 20;
	ctx.fillText("Maximum",x1,y);
	ctx.fillText(graph._z.stats.max+"",x2,y);

	y += 30;
	ctx.fillText("First decile",x1,y);
	ctx.fillText(trunc(graph._z.d1,4),x2,y);

	y += 20;
	ctx.fillText("First quartile",x1,y);
	ctx.fillText(trunc(graph._z.q1,4),x2,y);

	y += 20;
	ctx.fillText("Median",x1,y);
	ctx.fillText(trunc(graph._z.q2,4),x2,y);

	y += 20;
	ctx.fillText("Third quartile",x1,y);
	ctx.fillText(trunc(graph._z.q3,4),x2,y);

	y += 20;
	ctx.fillText("Ninth decile",x1,y);
	ctx.fillText(trunc(graph._z.d9,4),x2,y);

	y += 30;
	ctx.fillText("2nd order average",x1,y)
	ctx.fillText(trunc(graph._z.stats.mean2,4),x2,y)

	y += 20;
	ctx.fillText("3rd order average",x1,y);
	ctx.fillText(trunc(graph._z.stats.mean3,4),x2,y);

	y += 20;
	ctx.fillText("4th order average",x1,y);
	ctx.fillText(trunc(graph._z.stats.mean4,4),x2,y);

	y += 30;
	ctx.fillText("Skewness",x1,y)
	ctx.fillText(trunc(graph._z.stats.skewness,4),x2,y)

	y += 20;
	ctx.fillText("Kurtosis",x1,y)
	ctx.fillText(trunc(graph._z.stats.kurtosis,4),x2,y)
	}

ctx.textAlign = "center";

}

//*********************************************************************

function buildMomentsTable(graph)
{
if(graph.ivalue1<0) return;

setTableName("Statistics of "+values[graph.ivalue1]);

var row = 1;

line("Number of observations",graph._z.stats.n);
line("Mean",graph._z.stats.mean1);
line("Standard deviation",Math.sqrt(graph._z.stats.momentc2));
line("Variance",graph._z.stats.momentc2);
line("Minimum",graph._z.stats.min);
line("Maximum",graph._z.stats.max);
line("First decile",graph._z.d1);
line("First quartile",graph._z.q1);
line("Median",graph._z.q2);
line("Third quartile",graph._z.q3);
line("Ninth decile",graph._z.d9);
line("2nb order average",graph._z.stats.mean2);
line("3rd order average",graph._z.stats.mean3);
line("4th order average",graph._z.stats.mean4);
line("Skewness",graph._z.stats.skewness);
line("Kurtosis",graph._z.stats.kurtosis);

	function line(title,value)
	{
	table(row,1,title);
	table(row,2,round(value));
	row++;
	}
}

//*********************************************************************
//
//                HISTO
//
//*********************************************************************


function computeHistoData(graph)
{
if(graph.ivalue1<0) return;

computeMomentsData(graph)

if(!graph.nslot)
	graph.nslot = 10;

graph._z.histo = new Array(graph.nslot);
for(var i=0;i<graph.nslot;i++)
	graph._z.histo[i] = 0;

if(graph.ilabel1>=0)
	{
	computeGraphData1(graph);

	graph._z.subhisto = new Array(graph.nslot);
	for(var i=0;i<graph.nslot;i++)
		graph._z.subhisto[i] = {};
	}

var xslot = (graph._z.xmax - graph._z.xmin)/(graph.nslot-1);
var xmin = graph._z.xmin - xslot/2;

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	var k = Math.floor((vrecords[i][graph.ivalue1]-xmin)/xslot);
	graph._z.histo[k]++;

	if(graph.ilabel1<0) continue;

	var key1 = lrecords[i][graph.ilabel1];
	if(!(key1 in graph._z.subhisto[k]))
		graph._z.subhisto[k][key1] = 1;
	else
		graph._z.subhisto[k][key1]++;
	}

}

//*********************************************************************

function createLabelFromHisto(graph)
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

//*********************************************************************

function moveHistoGraph(ptmove,graph)
{
if(graph.type!=TYPE.HISTO) return false;
if(graph.ivalue1<0) return false;


var x1 = graph.x+20
var x2 = graph.x + graph.w - 20
var y1 = graph.y + graph.h - 60
var y2 = graph.y + 45

var xslot = (graph._z.xmax - graph._z.xmin)/(graph.nslot-1);
var xmin = graph._z.xmin - xslot/2;
var xmax = graph._z.xmax + xslot/2;

var dx = (x2-x1)/graph.nslot;

var total = 0;
var hmax = 0;
for(var i=0;i<graph._z.histo.length;i++)
	{
	total += graph._z.histo[i]
	if(graph._z.histo[i]>hmax)
		hmax = graph._z.histo[i];
	}

if(graph.ilabel1<0)
	{

	for(var i=0;i<graph._z.histo.length;i++)
		{
		if(graph._z.histo[i]==0) continue;

		if(inRect(ptmove,x1+i*dx,y2,dx,graph.h-20))
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

	for(var i=0;i<graph._z.histo.length;i++)
		{
		if(graph._z.histo[i]==0) continue;

		var y = y1;

		for(var k=0;k<graph._keys1.length;k++)
			{
			var key1 = graph._keys1[k];
			if(!(key1 in graph._z.subhisto[i])) continue;
			dy = (y1-y2)*graph._z.subhisto[i][key1]/hmax;

			if(inRect(ptmove,x1+i*dx,y-dy,dx,dy))
				{		
				var xa = xmin + i*(xmax-xmin)/graph._z.histo.length
				var xb = xmin + (i+1)*(xmax-xmin)/graph._z.histo.length
				pct = Math.round(graph._z.subhisto[i][key1]*1000/total)/10
				message = "["+trunc(xa,4)+","+trunc(xb,4)+
					"] \u2022 "+key1+"   :  "+graph._z.subhisto[i][key1]+
					" / "+ total+" ("+pct+"%)"
				return true;
				}
			y -= dy;
			}
		}
	}

return false;
}

//*********************************************************************

function drawHistoIcon(ctx,x,y)
	{	
	ctx.strokeStyle= "#000000"
	ctx.fillStyle = "#000000"
	drawRect(ctx,x+2,y+5,4,20-5)
	drawRect(ctx,x+6,y+8,4,20-8)
	drawRect(ctx,x+10,y+2,4,20-2)
	drawRect(ctx,x+14,y+10,4,20-10)
	}

//*********************************************************************

function drawHistoGraph(ctx,graph)
{

if(graph.ivalue1>=0)
	{

	var x1 = graph.x+20
	var x2 = graph.x + graph.w - 20
	var y1 = graph.y + graph.h - 60
	var y2 = graph.y + graph.hbar + 25;
	
	var dx = (x2-x1)/graph.nslot;

	var xslot = (graph._z.xmax - graph._z.xmin)/(graph.nslot-1);
	var xmin = graph._z.xmin - xslot/2;
	var xmax = graph._z.xmax + xslot/2;

	var hmax = 0;
	for(var i=0;i<graph._z.histo.length;i++)
		if(graph._z.histo[i]>hmax)
			hmax = graph._z.histo[i];

	var area = 0;

	if(graph.ilabel1<0)
		{

		ctx.strokeStyle = "#000000"
		ctx.fillStyle = BLUE;
			
		for(var i=0;i<graph._z.histo.length;i++)
			{
			if(graph._z.histo[i]==0) continue;

			var dy = (y1-y2)*graph._z.histo[i]/hmax;

			ctx.fillRect( x1+i*dx,y1-dy,dx,dy)	
			ctx.strokeRect( x1+i*dx, y1-dy,dx,dy)

			area += dx*dy;
			}

		ctx.strokeRect(x1,y1,x2-x1,0)

		ctx.fillStyle = "#FFFFFF";

		var y = y1+30;
		ctx.strokeRect(x1,y-3,x2-x1,6)

		}
	else
		{
		// with label

		ctx.strokeStyle = "#000000"
	
		for(var i=0;i<graph._z.histo.length;i++)
			{
			if(graph._z.histo[i]==0) continue;

			var y = y1;

			for(var k=0;k<graph._keys1.length;k++)
				{
				var key1 = graph._keys1[k];
				if(!(key1 in graph._z.subhisto[i])) continue
				dy = (y1-y2)*graph._z.subhisto[i][key1]/hmax;

				if((overlabel1>=0)&&(overlabel1==graph.ilabel1)&&(key1==overkey1))
					ctx.fillStyle = graph._hilites1[key1];
				else
					ctx.fillStyle = graph._colors1[key1];
				ctx.fillRect(x1+i*dx,y-dy,dx,dy)
				ctx.strokeRect(x1+i*dx,y-dy,dx,dy)
				
				area += dx*dy;

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

	// draw normal curve
	var scale = area*(xmax-xmin)/(x2-x1);
	ctx.strokeStyle = GREEN;
	ctx.beginPath();
	for(var i=0;i<=100;i++)
		{
		var xx = xmin+i*(xmax-xmin)/100;
		var dd = normal(xx,graph._z.stats.mean1,graph._z.stats.stdev);
		var x = x1+i*(x2-x1)/100;
		var y = y1-dd*scale;
		if(i==0)
			ctx.moveTo(x,y);
		else
			ctx.lineTo(x,y);
		}
	ctx.stroke();
	
	// draw cursor
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#FFFFFF";
	var x = x1+(x2-x1)*graph.nslot/50;
	ctx.fillRect(x-5,y1+20,10,20)
	ctx.strokeRect(x-5,y1+20,10,20)

	ctx.beginPath()
	for(var i=0;i<=50;i+=10)
		{
		x = x1+(x2-x1)*i/50.0;
		ctx.moveTo(x,y1+40)
		ctx.lineTo(x,y1+50)
		}
	ctx.stroke()

	ctx.fillStyle = "#000000"
	ctx.textAlign = "center"
	ctx.fillText(graph.nslot+" classes",graph.x+graph.w/2,graph.y+graph.hbar+15);
	}


	function normal(x,m,s) {
		var a = Math.exp(-(x-m)*(x-m)/(2*s*s));
		var b = s*Math.sqrt(2*Math.PI);
		return a/b;
	}

}

//*********************************************************************

function downHistoGraph(pt,graph)
{
if(graph.ivalue1<0) return -1;

var x1 = graph.x +20
var x2 = graph.x + graph.w - 20;

var x = x1+(x2-x1)*graph.nslot/50;
var y = graph.y + graph.h - 30

if(inRect(pt,x-10,y-15,20,30))
	return DRAG_SLIDER;

if(inRect(pt,graph.x+graph.w-20,graph.y+graph.h-70,20,20))
	{
	valueindex = 1;
	return DRAG_AXIS;
	}

return -1;
}

//*********************************************************************

function dragHistoGraph(graph)
{
if(faction==DRAG_SLIDER)
	{
	var oldnslot = graph.nslot;
	graph.nslot = (ptmove.x-graph.x-20)*50/(graph.w-40);
	graph.nslot = Math.round(graph.nslot);
	if(graph.nslot<2)
		graph.nslot = 2;
	else if(graph.nslot>50)
		graph.nslot = 50;

	if(graph.nslot!=oldnslot)
		computeGraphData(graph)
	}

}

//*********************************************************************
//
//                DISTRIB
//
//*********************************************************************


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

//*********************************************************************

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

//*********************************************************************

function moveDistribGraph(ptmove,graph)
{

if(graph.type!=TYPE.DISTRIB) return false;
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

//*********************************************************************

function drawDistribIcon(ctx,x,y)
	{
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

//*********************************************************************

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

}

//*********************************************************************

function downDistribGraph(pt,graph)
{

if(graph.ivalue1<0) return -1;

if(graph._z.cursor==0)
	{
	if(inRect(pt,graph.x,graph.y+graph.h-20,20,20))
		return DRAG_CURSOR;
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

if(graph._z.cursor==0)
	{
	return -1;
	}
else if(graph._z.cursor>0)
	{
	if(inRect(pt,graph.x+graph.w-20,graph.y+graph.h-30,20,20))
		{
		valueindex = 0;
		return DRAG_AXIS;
		}
	}
else if(graph._z.cursor<0)	
	{
	if(inRect(pt,graph.x+10,graph.y+graph.hbar,20,20))
		{
		valueindex = 1;
		return DRAG_AXIS;
		}
	}

return  -1;

}

//*********************************************************************

function dragDistribGraph(graph)
{
if(faction==DRAG_CURSOR)
	{
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

}

//*********************************************************************
//
//                PROBA
//
//*********************************************************************


function computeProbaData(graph)
{
if(graph.ivalue1<0) return;

graph._z.y = [];

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	graph._z.y.push(vrecords[i][graph.ivalue1]);
	}

graph._z.y.sort( function(a,b) { return a-b });

var n = graph._z.y.length;

// uniform order statistic medians
var m = new Array(n);
for(var i=1;i<=n;i++)
	{
	if(i==1)
		m[i-1] = 1-Math.pow(0.5,1/n);			
	else if(i==n)		
		m[i-1] = Math.pow(0.5,1/n);
	else
		m[i-1] = (i-0.3175)/(n+0.365);
	}

var lcdf;
var lmin;
var lmax;
switch(graph.law)
	{
	case LAW.UNIFORM:	
		lmin = 0;
		lmax = 1;
		lcdf = function(x) { return x; }
		break;

	case LAW.NORMAL:
		lmin = -3;
		lmax = 3;
		lcdf = function(x) { 
			var y = Math.abs(x);
			var d1 = 0.0498673470*y;
			var d2 = 0.0211410061*y*y;
			var d3 = 0.0032776263*y*y*y;
			var d4 = 0.0000380036*y*y*y*y;
			var d5 = 0.0000488906*y*y*y*y*y;
			var d6 = 0.0000053830*y*y*y*y*y*y;
			if(x<0) 
				return 0.5*Math.pow(1+d1+d2+d3+d4+d5+d6,-16);
			else
				return 1-0.5*Math.pow(1+d1+d2+d3+d4+d5+d6,-16);
		}
		break;

	case LAW.LOGNORMAL:
		lmin = 0;		
		lmax = 10;
		lcdf = function(x) {
			var y = Math.log(x);
			var d1 = 0.0498673470*y;
			var d2 = 0.0211410061*y*y;
			var d3 = 0.0032776263*y*y*y;
			var d4 = 0.0000380036*y*y*y*y;
			var d5 = 0.0000488906*y*y*y*y*y;
			var d6 = 0.0000053830*y*y*y*y*y*y;
			return 1-0.5*Math.pow(1+d1+d2+d3+d4+d5+d6,-16);
		}
		break;

	case LAW.EXPONENTIAL:
		lmin = 0;
		lmax = 6;
		lcdf = function(x) {
			return 1-Math.exp(-x);
		}
		break;
	}


graph._z.x = new Array(n);
for(var i=0;i<n;i++)
	graph._z.x[i] = inv(m[i]);


var sx = 0;
var sy = 0;
var sxy = 0;
var sxx = 0;
var syy = 0;
for(var i=0;i<n;i++)
	{
	sx += graph._z.x[i];
	sy += graph._z.y[i];
	sxy += graph._z.x[i]*graph._z.y[i];
	sxx += graph._z.x[i]*graph._z.x[i];
	syy += graph._z.y[i]*graph._z.y[i];
	}

var a = sxy-sx*sy/n;
var b = sxx-sx*sx/n;
var c = syy-sy*sy/n;


graph._z.slope = a/b;
graph._z.intercept = sy/n - sx*graph._z.slope/n;
graph._z.corr = a/Math.sqrt(b*c);


	function inv(x) {
		var min = lmin;		
		var max = lmax;
		for(var i=0;i<20;i++)
			{		
			var med = (min+max)/2;
			var p = lcdf(med);
			if(p<x)
				min = med;
			else
				max = med;
			}
		return med;
	}

}

//*********************************************************************

function drawProbaIcon(ctx,x,y)
	{		
	ctx.fillStyle = "#000000";
	for(var i=2;i<=18;i++)
		ctx.fillRect(x+i,y+20-i,1,1);

	ctx.strokeStyle = "#000000";	
	ctx.beginPath();
	ctx.moveTo(x+2,y+20-3);
	ctx.lineTo(x+3,y+20-6);
	ctx.lineTo(x+4,y+20-8);
	ctx.lineTo(x+17,y+20-12);
	ctx.lineTo(x+18,y+20-14);
	ctx.lineTo(x+19,y+20-16);
	ctx.stroke();
	}

//*********************************************************************

function drawProbaGraph(ctx,graph)
{


if(graph.ivalue1>=0)
	{
	var x1 = graph.x+30;
	var x2 = graph.x+graph.w-20;
	var y1 = graph.y+graph.hbar+60;
	var y2 = graph.y+graph.h-40;
	var dx = x2-x1;
	var dy = y2-y1;

	var n = graph._z.x.length;
	var xdif = graph._z.x[n-1] - graph._z.x[0];
	var xmin = graph._z.x[0] - xdif*0.05;
	var xmax = graph._z.x[n-1] + xdif*0.05;

	var ydif = graph._z.y[n-1] - graph._z.y[0];
	var ymin = graph._z.y[0] - ydif*0.05;
	var ymax = graph._z.y[n-1] +ydif*0.05;

	var x,y,xx,yy;

	// draw regression line
	ctx.save();
	ctx.beginPath()
	ctx.rect(x1,y1,x2-x1,y2-y1);
	ctx.clip()
	ctx.strokeStyle = GREEN;
	xx = xmin;
	yy = xx*graph._z.slope + graph._z.intercept;
	x = x1;
	y = Math.round(y2-(y2-y1)*(yy-ymin)/(ymax-ymin));
	ctx.moveTo(x,y);
	xx = xmax;
	yy = xx*graph._z.slope + graph._z.intercept;
	x = x2;
	y = Math.round(y2-(y2-y1)*(yy-ymin)/(ymax-ymin));
	ctx.lineTo(x,y);
	ctx.stroke();
	ctx.restore();

	// draw points
	ctx.fillStyle = "#000000";
	for(var i=0;i<n;i++)
		{
		x = Math.round(x1 + (x2-x1)*(graph._z.x[i]-xmin)/(xmax-xmin));
		y = Math.round(y2 - (y2-y1)*(graph._z.y[i]-ymin)/(ymax-ymin));
		ctx.fillRect(x-2,y-2,4,4);
		}

	ctx.strokeStyle = "#000000";
	ctx.strokeRect(x1,y1,dx,dy);
	
	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	ctx.fillText("Theoretical",x1+(x2-x1)/2,y2+15);

	var corr = Math.round(graph._z.corr*10000)/10000;
	var intercept = Math.round(graph._z.intercept*10000)/10000;
	var slope = Math.round(graph._z.slope*10000)/10000;
	var t = "Corr="+corr+"  Intercept="+intercept+"  Slope="+slope;
	ctx.fillText(t,x1+(x2-x1)/2,y2+35);
	
	ctx.save();
	ctx.translate(x1-10,y1+(y2-y1)/2);
	ctx.rotate(-Math.PI/2);
	ctx.fillText("Data",0,0);
	ctx.restore();
	}

drawMenu(ctx,graph,MENU.LAW,graph.law,SELECT_LAW,menuindex);
}


//*********************************************************************

function downProbaGraph(pt,graph)
{

var w = 150;
var x = graph.x+graph.w/2-w/2;
var y = graph.y+graph.hbar+5;
if(inRect(pt,x,y,w,20))
	return SELECT_LAW;
else
	return -1;

}

//*********************************************************************

function dragProbaGraph(graph)
{
if(faction==SELECT_LAW)
	{
	selectMenuItem(ptmove,graph,MENU.LAW);
	}
}

//*********************************************************************
//
//                TUKEY
//
//*********************************************************************


function computeTukeyData(graph)
{
if(graph.ivalue1<0) return;

// data
var y = [];
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	y.push(vrecords[i][graph.ivalue1]);
	}
y.sort( function(a,b) { return a-b; });

var n = y.length;


// uniform order statistic medians
var m = new Array(n);
for(var i=1;i<=n;i++)
	{
	if(i==1)
		m[i-1] = 1-Math.pow(0.5,1/n);			
	else if(i==n)		
		m[i-1] = Math.pow(0.5,1/n);
	else
		m[i-1] = (i-0.3175)/(n+0.365);
	}



// theoretical
var x = new Array(n);

// correlations for lambda between -1.1 and 1.1

graph._z.corr = [];
for(var il=-110;il<=110;il++)
	{
	var l = il/100;

	for(var i=0;i<n;i++)
		x[i] = inv(m[i],l);

	var sx = 0;
	var sy = 0;
	var sxy = 0;
	var sxx = 0;
	var syy = 0;
	for(var i=0;i<n;i++)
		{
		sx += x[i];
		sy += y[i];
		sxy += x[i]*y[i];
		sxx += x[i]*x[i];
		syy += y[i]*y[i];
		}

	var a = sxy-sx*sy/n;
	var b = sxx-sx*sx/n;
	var c = syy-sy*sy/n;

	var corr = a/Math.sqrt(b*c);

	graph._z.corr.push(corr);
	}

	function inv(p,lambda) {
		if(lambda==0)
			return Math.log(p/(1-p));
		else
			return (Math.pow(p,lambda)-Math.pow(1-p,lambda))/lambda;
	}
}

//*********************************************************************

function drawTukeyIcon(ctx,x,y)
	{	
	var font = ctx.font;
	ctx.font = "18px helvetica";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	ctx.fillText("T",x+6,y+17);
	ctx.fillText("𝜆",x+14,y+17);
	ctx.font = font;
	}

//*********************************************************************

function drawTukeyGraph(ctx,graph)
{

if(graph.ivalue1>=0)
	{
	var x1 = graph.x+30;
	var x2 = graph.x+graph.w-20;
	var y1 = graph.y+graph.hbar+100;
	var y2 = graph.y+graph.h-20;
	var dx = x2-x1;
	var dy = y2-y1;

	var n = graph._z.corr.length;
	
	var xmin = -1.1;
	var xmax = 1.1;
	var ymin = 0.5;
	var ymax = 1;


	ctx.strokeRect(x1,y1,dx,dy);

	ctx.fillStyle = "#BBBBBB";
	for(var i=1;i<=9;i++)
		ctx.fillRect(x1,Math.round(y1+i*(y2-y1)/10),dx,1);

	x = x1+dx*(-1-xmin)/(xmax-xmin);
	ctx.fillRect(Math.round(x),y1,1,dy);

	x = x1+dx*(0-xmin)/(xmax-xmin);
	ctx.fillRect(Math.round(x),y1,1,dy);

	x = x1+dx*(0.14-xmin)/(xmax-xmin);
	ctx.fillRect(Math.round(x),y1,1,dy);

	x = x1+dx*(0.5-xmin)/(xmax-xmin);
	ctx.fillRect(Math.round(x),y1,1,dy);
	
	x = x1+dx*(1-xmin)/(xmax-xmin);
	ctx.fillRect(Math.round(x),y1,1,dy);

	// draw curve
	ctx.save();

	ctx.beginPath();
	ctx.rect(x1,y1,dx,dy);
	ctx.clip();

	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	for(var i=0;i<n;i++)
		{
		var x = x1+dx*i/n;
		var y = y2-dy*(graph._z.corr[i]-ymin)/(ymax-ymin);
		if(i==0)			
			ctx.moveTo(x,y);
		else
			ctx.lineTo(x,y);	
		}
	ctx.stroke();

	ctx.restore();

	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	ctx.fillText("𝜆",x1+(x2-x1)/2,y2+15);

	x = x1+dx*(-1-xmin)/(xmax-xmin);
	ctx.fillText("-1",x,y2+15);

	x = x1+dx*(1-xmin)/(xmax-xmin);
	ctx.fillText("1",x,y2+15);

	ctx.textAlign = "center";
	vert("Probability plot correlation",x1-10,y1+(y2-y1)/2);
	vert("0.5",x1-10,y2);
	vert("1",x1-10,y1);

	ctx.textAlign = "left";

	x = x1+dx*(-1-xmin)/(xmax-xmin);
	vert("~Cauchy",x,y1-10);

	x = x1+dx*(0-xmin)/(xmax-xmin);
	vert("Logistic",x,y1-10);

	x = x1+dx*(0.14-xmin)/(xmax-xmin);
	vert("~Normal",x,y1-10);

	x = x1+dx*(0.5-xmin)/(xmax-xmin);
	vert("U shaped",x,y1-10);

	x = x1+dx*(1-xmin)/(xmax-xmin);
	vert("Uniform",x,y1-10);

	ctx.textAlign = "center";
	}


	function vert(text,x,y) {
		ctx.save();
		ctx.translate(x,y);
		ctx.rotate(-Math.PI/2);
		ctx.fillText(text,0,0);
		ctx.restore();
	}
}

//*********************************************************************
//
//                SCATTER
//
//*********************************************************************


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
var max1 = -Number.MAX_VALUE;

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

//*********************************************************************

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

//*********************************************************************

function moveScatterGraph(ptmove,graph)
{
if(graph.type!=TYPE.SCATTER) return false;
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

//*********************************************************************

function drawScatterIcon(ctx,x,y)
	{
	ctx.fillStyle = "#000000"
	var xy = [2,4, 5,1, 3,12, 8,5, 10,7, 17,15, 3,5, 2,8, 5,15,
			18,11, 11,17, 12,14, 18,3, 16,2, 12,11, 8,13, 16,7]
	for(var i=0;i<xy.length;i+=2)
		ctx.fillRect(x+xy[i],y+xy[i+1],2,2)
	}

//*********************************************************************

function drawScatterGraph(ctx,graph)
{
var oldfont = ctx.font;

if((graph.ivalue1>=0)&&(graph.ivalue2>=0))
	{

	var display = getGraphDisplay(graph); 

	var i1 = graph.ivalue1;
	var i2 = graph.ivalue2;

	var xmin = i1==0 ? 0 : graph._z.xmin;
	var xmax = i1==0 ? lrecords.length : graph._z.xmax;

	var ymin = i2==0 ? 0 : graph._z.ymin;
	var ymax = i2==0 ? lrecords.length : graph._z.ymax;

	var xleft = graph.x+20;
	var xright = graph.x+graph.w-10;
	var ytop = graph.y+graph.hbar+30;
	var ybottom = graph.y+graph.h-30;

	var xscale = (xright-xleft)/(xmax-xmin)
	var yscale = (ybottom-ytop)/(ymax-ymin)

	// draw regression line
	ctx.strokeStyle = GREEN;
	ctx.lineWidth = 1
	ctx.beginPath()
	var xx = graph._z.min;
	var yy = graph._z.a * xx + graph._z.b;
	x = xleft+(xx-graph._z.xmin)*xscale;
	y = ybottom-(yy-graph._z.ymin)*yscale
	ctx.moveTo(x,y)
	xx = graph._z.max;
	yy = graph._z.a * xx + graph._z.b;
	x = xleft+(xx-graph._z.xmin)*xscale;
	y = ybottom-(yy-graph._z.ymin)*yscale
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

	x = xleft +(0-xmin)*xscale;
	ctx.fillRect(x,graph.y+graph.hbar+5,1,graph.h-graph.hbar-10)
	y = ybottom -(0-ymin)*yscale
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
		x = xleft +(v-xmin)*xscale
		
		v = i2==0 ? ind : vrecords[i][i2];
		y = ybottom - (v-ymin)*yscale

		if(b) ind++;

		if(display<0)
			ctx.fillRect(x-1,y-1,3,3)
		else
			ctx.fillText(lrecords[i][display],x,y+3)
		}

	ind = 0;
	if(overlabel1>=0)
		{
		ctx.lineWidth = 1
		for(var i=0;i<lrecords.length;i++)
			{
			if(!recordMatch(i,graph)) continue
			if(!recordHilite(lrecords[i])) continue

			v = i1==0 ? ind : vrecords[i][i1];	
			x = xleft + (v-xmin)*xscale

			v = i2==0 ? ind : vrecords[i][i2];
			y = ybottom - (v-ymin)*yscale;

			if(b) ind++;

			if(display<0)
				{
				ctx.strokeStyle = "#000000";
				ctx.fillRect(x-3,y-3,7,7)
				}
			else
				{
				ctx.fillStyle = "#000000";
				var l = ctx.measureText(lrecords[i][display]).width;
				ctx.fillRect(x-l/2-5,y-6,l+10,12);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(lrecords[i][display],x,y+3)		
				}
			}
		}

	}

ctx.font = oldfont;

}


//*********************************************************************
//
//               POLAR
//
//*********************************************************************

var rpolar = [8,4,7,3,8,4,8,3,7,2];
function drawPolarIcon(ctx,x,y)
{

ctx.strokeStyle = "#666666";
ctx.beginPath();
ctx.arc(x+10,y+10,7,0,Math.PI*2,false);
ctx.arc(x+10,y+10,3,0,Math.PI*2,false);
ctx.stroke();

ctx.strokeStyle = "#000000";
ctx.beginPath();
for(var i=0;i<rpolar.length;i++)
	{
	var sin = rpolar[i]*Math.sin(Math.PI*2*i/rpolar.length);
	var cos = rpolar[i]*Math.cos(Math.PI*2*i/rpolar.length);
	if(i==0)
		ctx.moveTo(x+10+cos,y+10-sin);
	else
		ctx.lineTo(x+10+cos,y+10-sin);
	}
	sin = rpolar[0]*Math.sin(0);
	cos = rpolar[0]*Math.cos(0);
	ctx.lineTo(x+10+cos,y+10-sin);
	ctx.stroke();
}

//*********************************************************************

function drawPolarGraph(ctx,graph)
{
if((graph.ivalue1>=0)&&(graph.ivalue2>=0))
	{	
	ctx.save();

	var option = getGraphOption(graph);
	var i1 = graph.ivalue1;
	var i2 = graph.ivalue2;
	var display = getGraphDisplay(graph);

	var xleft = graph.x+30;
	var xright = graph.x + graph.w -10;
	var ytop = graph.y + graph.hbar + 45;
	var ybottom = graph.y + graph.h -20;

	var radius = Math.min(xright-xleft,ybottom-ytop)/2;
	var xc = xleft+(xright-xleft)/2;
	var yc = ytop+(ybottom-ytop)/2;

	var rhomax = graph._z.rhomax;
	var theta = graph._z.theta;

	var v1,v2,x,y;

	var modulo = graph.angle==ANGLE.RADIAN ? Math.PI*2 : 360;

	ctx.translate(xc,yc);
	ctx.rotate(graph.origin);

	// draw grid
	ctx.strokeStyle = "#CCCCCC";
	for(var i=1;i<=5;i++)
		{
		ctx.beginPath();
		ctx.arc(0,0,radius*i/5,0,Math.PI*2,false);
		ctx.stroke();
		}
	
	ctx.beginPath();
	for(var i=0;i<12;i++)
		{
		ctx.moveTo(0,0);
		ctx.lineTo(radius*Math.sin(Math.PI*2*i/12),
					radius*Math.cos(Math.PI*2*i/12));
		}
	ctx.stroke();

	// draw origin
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = GRAY;
	ctx.beginPath();
	ctx.arc(0,-radius-10,5,0,Math.PI*2,false);
	ctx.stroke();
	if(action==DRAG_ORIGIN)
		ctx.fill();

	// draw legend
	ctx.fillStyle = "#000000";
	var font = ctx.font;
	ctx.font = "9px helvetica";
	for(var i=1;i<12;i++)		
		{	
		ctx.save();
		ctx.rotate(Math.PI*2*i/12);
		ctx.fillText(legend(i),0,-radius-8);
		ctx.restore();
		}
	ctx.font = font;
	ctx.rotate(-graph.origin);

	ctx.font = "9px helvetica";

	if(option==0)
		{
		// points
		for(var i=0;i<theta.length;i++)
			{
			v1 = vrecords[theta[i]][i1]%modulo;
			v2 = vrecords[theta[i]][i2];

			x = radius*v2/rhomax*Math.sin(v1*Math.PI*2/modulo+graph.origin);
			y = -radius*v2/rhomax*Math.cos(v1*Math.PI*2/modulo+graph.origin);

			if(graph.ilabel1<0)
				ctx.fillStyle = "#000000";
			else
				ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]]
		
			if(display<0)
				ctx.fillRect(x-2,y-2,5,5)
			else
				ctx.fillText(lrecords[theta[i]][display],x,y+3)
			}

		if(overlabel1>=0)
			{
			for(var i=0;i<theta.length;i++)
				{
				if(!recordHilite(lrecords[theta[i]])) continue;

				v1 = vrecords[theta[i]][i1]%modulo;
				v2 = vrecords[theta[i]][i2];

				x = radius*v2/rhomax*Math.sin(v1*Math.PI*2/modulo+graph.origin);
				y = -radius*v2/rhomax*Math.cos(v1*Math.PI*2/modulo+graph.origin);

				ctx.fillStyle = "#000000";
		
				if(display<0)
					ctx.fillRect(x-3,y-3,7,7)
				else
					{
					var t = lrecords[theta[i]][display];
					var l = ctx.measureText(t).width;
					ctx.fillStyle = "#000000";
					ctx.fillRect(x-l/2-4,y-6,l+10,13);
					ctx.fillStyle = "#FFFFFF";
					ctx.fillText(lrecords[theta[i]][display],x,y+3)
					}
				}
			}
		}
	else if((option==1)&&(graph.ilabel1<0))
		{
		// one curve
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#000000";
		ctx.beginPath();		
		var first = true;
		var xfirst,yfirst;
		for(var i=0;i<=theta.length;i++)
			{
			v1 = vrecords[theta[i%theta.length]][i1]%modulo;
			v2 = vrecords[theta[i%theta.length]][i2];

			x = radius*v2/rhomax*Math.sin(v1*Math.PI*2/modulo+graph.origin);
			y = -radius*v2/rhomax*Math.cos(v1*Math.PI*2/modulo+graph.origin);
			
			if(i==0)
				ctx.moveTo(x,y);
			else
				ctx.lineTo(x,y);	
	
			if(first)
				{
				xfirst = x;
				yfirst = y;
				first = false;
				}
			}
		ctx.lineTo(xfirst,yfirst);
		ctx.stroke();
		}
	else
		{
		// one curve per category
		ctx.lineWidth = 2;
		for(var j=0;j<graph._keys1.length;j++)
			{
			var key1 = graph._keys1[j];
			ctx.strokeStyle = graph._colors1[key1];
			ctx.beginPath();
			var first = true;
			var xfirst,yfirst;
			for(var i=0;i<theta.length;i++)
				{
				var key = lrecords[theta[i]][graph.ilabel1];
				if(key!=key1) continue;

				v1 = vrecords[theta[i]][i1]%modulo;
				v2 = vrecords[theta[i]][i2];

				x = radius*v2/rhomax*Math.sin(v1*Math.PI*2/modulo+graph.origin);
				y = -radius*v2/rhomax*Math.cos(v1*Math.PI*2/modulo+graph.origin);
				if(first)
					ctx.moveTo(x,y);
				else
					ctx.lineTo(x,y);

				if(first)
					{
					xfirst = x;
					yfirst = y;
					first = false;
					}		
				}					
			ctx.lineTo(xfirst,yfirst);
			ctx.stroke();
			}

		if((overlabel1>=0)&&(graph.ilabel1==overlabel1))
			{
			ctx.lineWidth = 4;
			ctx.strokeStyle = graph._colors1[key1];
			ctx.beginPath();
			var first = true;
			var xfirst,yfirst;
			for(var i=0;i<theta.length;i++)
				{
				if(!recordHilite(lrecords[theta[i]])) continue;
				v1 = vrecords[theta[i]][i1]%modulo;
				v2 = vrecords[theta[i]][i2];

				x = radius*v2/rhomax*Math.cos(v1*Math.PI*2/modulo+graph.origin);
				y = -radius*v2/rhomax*Math.sin(v1*Math.PI*2/modulo+graph.origin);
				if(first)
					ctx.moveTo(x,y);
				else
					ctx.lineTo(x,y);

				if(first)
					{
					xfirst = x;
					yfirst = y;
					first = false;
					}		
				}					
			ctx.lineTo(xfirst,yfirst);
			ctx.stroke();
			}
		}

	ctx.restore();
	}

drawMenu(ctx,graph,MENU.ANGLE,graph.angle,SELECT_ANGLE,menuindex);


	function legend(i)
	{
	if(graph.angle==ANGLE.DEGREE)
		return ""+(i*360/12);
	else 
		{
		var num = 2*i;
		var den = 12;	
		var com = gcd(num,den);
		num /= com;
		den /= com;
		return ""+((num==1)?"":num)+"\u03c0"+((den==1)?"":"/"+den);
		}	
	}
	
	function gcd(a,b)
	{
	while(a!=b)
		if(a>b)
			a-=b;
		else
			b-=a;
	return a;
	}

}


//*********************************************************************

function computePolarData(graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalue2<0) return;


var i1 = graph.ivalue1;
var i2 = graph.ivalue2;

var rho; 
var rhomax = -Number.MAX_VALUE;
var theta = [];

var modulo = graph.angle==ANGLE.RADIAN ? Math.PI*2 : 360;


for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	theta.push(i);

	rho = vrecords[i][i2];
	if(rho>rhomax) rhomax = rho;
	}

theta.sort( function(a,b) {
	return vrecords[a][i1]%modulo - vrecords[b][i1]%modulo });

graph._z.theta = theta;
graph._z.rhomax = rhomax;

if(graph.ilabel1>=0)
	computeGraphData1(graph)
}

//*********************************************************************

function dragPolarGraph(graph)
{
if(faction==SELECT_ANGLE)
	{
	selectMenuItem(ptmove,graph,MENU.ANGLE);
	}
else if(faction==DRAG_ORIGIN)
	{
	var xleft = graph.x+30;
	var xright = graph.x + graph.w -10;
	var ytop = graph.y + graph.hbar + 45;
	var ybottom = graph.y + graph.h -20;

	var radius = Math.min(xright-xleft,ybottom-ytop)/2;
	var xc = xleft+(xright-xleft)/2;
	var yc = ytop+(ybottom-ytop)/2;

	var incr = Math.PI/12;
	graph.origin = Math.round(Math.atan2(ptmove.x-xc,yc-ptmove.y)/incr)*incr;
	}

}

//*********************************************************************

function downPolarGraph(pt,graph)
{

var w = 150;
var x = graph.x+graph.w/2-w/2;
var y = graph.y+graph.hbar+5;
if(inRect(pt,x,y,w,20))
	return SELECT_ANGLE;

var xleft = graph.x+30;
var xright = graph.x + graph.w -10;
var ytop = graph.y + graph.hbar + 45;
var ybottom = graph.y + graph.h -20;

var radius = Math.min(xright-xleft,ybottom-ytop)/2;
var xc = xleft+(xright-xleft)/2;
var yc = ytop+(ybottom-ytop)/2;


var x = xc+(radius+10)*Math.sin(graph.origin);
var y = yc-(radius+10)*Math.cos(graph.origin);

if(inRect(pt,x-10,y-10,20,20))
	return DRAG_ORIGIN;

return -1;
	
}

//*********************************************************************
//
//                LAG
//
//*********************************************************************


function drawLagIcon(ctx,x,y)
	{
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

//*********************************************************************

function drawLagGraph(ctx,graph)
{

if(graph.ivalue1>=0)
	{
	var option = getGraphOption(graph);

	if(!graph._z.lag)
		graph._z.lag = 1;
	
	var history = [];

	var xleft = graph.x+10;
	var xright = graph.x+graph.h-10;
	var ytop = graph.y+graph.hbar+30;
	var ybottom = graph.y+graph.h-50;

	var i1 = graph.ivalue1 

	var vcurrent,vprevious,value;

	// compute vertical bounds
	var vmin = Number.MAX_VALUE;
	var vmax = -Number.MAX_VALUE;

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		vcurrent = vrecords[i][i1];
		history.push(vcurrent);
		
		if(history.length>graph._z.lag)
			{
			vprevious = history.shift();
			value = option==0 ? vprevious : vcurrent-vprevious;
			if(value>vmax) vmax = value;
			if(value<vmin) vmin = value;
			}
		}

	var yscale = (ybottom-ytop)/(vmax-vmin);
	var xscale = (xright-xleft)/(graph._z.xmax-graph._z.xmin);

	// draw points
	ctx.fillStyle = "#000000";
	var x,y;

	history = [];

	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue

		vcurrent = vrecords[i][i1];
		history.push(vcurrent);

		if(history.length>graph._z.lag)
			{
			vprevious = history.shift();
			value = option==0 ? vprevious : vcurrent-vprevious;
			x = xleft +(vcurrent-graph._z.xmin)*xscale;
			y = ybottom - (value-vmin)*yscale;
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


}

//*********************************************************************

function downLagGraph(pt,graph)
{
if(graph.ivalue1<0) return -1;

xmin = graph.x+10;
xmax = graph.x + graph.w - 130;
ymin = graph.y + graph.hbar + 25;
ymax = graph.y + graph.h -70;

var y = graph.y + graph.h - 30;
var x = xmin+(xmax-xmin)*graph._z.lag/10;

if(inRect(pt,x-5,y-10,10,20))
	return CHANGE_LAG;

return -1;
}

//*********************************************************************

function dragLagGraph(graph)
{
if(faction==CHANGE_LAG)
	{
	var xmin = graph.x+10;
	var xmax = graph.x + graph.w - 130;
	graph._z.lag = Math.round((ptmove.x-xmin)*10/(xmax-xmin));
	if(graph._z.lag<1) graph._z.lag = 1;
	if(graph._z.lag>10) graph._z.lag = 10;
	}

}

//*********************************************************************
//
//                CORR
//
//*********************************************************************


function computeCorrData(graph)
{

if(graph.ivalues.length<2) return;

computeCorrelationMatrix(graph)
}

//*********************************************************************

function computeCorrelationMatrix(graph,indices1,indices2)
{
indices1 = indices1 || graph.ivalues;
indices2 = indices2 || graph.ivalues;

var n1 = indices1.length;
var n2 = indices2.length;

var sum1 = vector(n1);
var sum11 = vector(n1);
var sum2 = vector(n2);
var sum22 = vector(n2);

var count = 0;

var M = matrix(n1,n2);

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	count += 1;
	for(var j=0;j<n1;j++)
		{
		var x1 = vrecords[i][indices1[j]]
		sum1[j] += x1;
		sum11[j] += x1*x1;
		for(var k=0;k<n2;k++)
			{
			var x2 = vrecords[i][indices2[k]];
			M[j][k] += x1*x2;
			}
		}

	for(var k=0;k<n2;k++)
		{
		var x2 = vrecords[i][indices2[k]];
		sum2[k] += x2;
		sum22[k] += x2*x2;
		}
	}

if(count==0) count = 1;

// means and standard deviations
for(var j=0;j<n1;j++)
	{
	sum1[j] = sum1[j]/count
	sum11[j] = Math.sqrt( (sum11[j]-sum1[j]*sum1[j]*count)/count);
	}

for(var k=0;k<n2;k++)
	{	
	sum2[k] = sum2[k]/count;
	sum22[k] = Math.sqrt((sum22[k]-sum2[k]*sum2[k]*count)/count);
	}


// correlation matrix

for(var j=0;j<n1;j++)
	for(var k=0;k<n2;k++)
		M[j][k] = (M[j][k]-count*sum1[j]*sum2[k])/(sum11[j]*sum22[k]*count)


graph._z.avg = sum1;
graph._z.std = sum11;
graph._z.corr = M;
}

//*********************************************************************

function getCorrTable(graph)
{

var t = ""

t += "<html>";
t += "<style>\n";
t += "table	{\n";
t += "font-family:Courier;\n";
t += "font-size:12px;\n";	
t += "}\n";
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

//*********************************************************************

function moveCorrGraph(ptmove,graph)
{

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

//*********************************************************************

function drawCorrIcon(ctx,x,y)
	{
	ctx.strokeStyle = "#000000"
	ctx.fillStyle = "#000000"
	drawRect(ctx,x+4,y+4,2,2)
	drawRect(ctx,x+10,y+3,6,6)
	drawRect(ctx,x+10+3,y+10+3,4,4)	
	drawRect(ctx,x+2,y+10,8,8)
	}

//*********************************************************************

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

}

//*********************************************************************

function buildCorrTable(graph)
{
if(graph.ivalues.length<2) return;

setTableName("Correlations");

for(var i=0;i<graph.ivalues.length;i++)
	table(1,2+i,values[graph.ivalues[i]]);

for(var j=0;j<graph.ivalues.length;j++)
	{
	table(2+j,1,values[graph.ivalues[j]]);
	for(var i=0;i<graph.ivalues.length;i++)
		table(2+j,2+i,Math.round(graph._z.corr[i][j]*100)/100);
	}
}

//*********************************************************************
//
//                AUTOCORR
//
//*********************************************************************


function computeAutocorrData(graph)
{

if(graph.ivalue1<=0) return;
var i1 = graph.ivalue1;

var avg = 0;
for(var i=0;i<vrecords.length;i++)
	avg += vrecords[i][i1];
avg = avg/vrecords.length;

var n = Math.floor(vrecords.length/2);
graph._z.autocov = new Array(n);

for(var h=0;h<n;h++)
	{
	var s = 0;
	for(var i=0;i<vrecords.length-h;i++)
		s += (vrecords[i][i1]-avg)*(vrecords[i+h][i1]-avg);
	graph._z.autocov[h] = s/vrecords.length;
	}

}

//*********************************************************************

function drawAutocorrIcon(ctx,x,y)
	{
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(x+1,y+3);
	ctx.lineTo(x+3,y+2);
	ctx.lineTo(x+5,y+10);	
	ctx.lineTo(x+7,y+9);
	ctx.lineTo(x+9,y+16);
	ctx.lineTo(x+11,y+14);
	ctx.lineTo(x+13,y+17);
	ctx.lineTo(x+15,y+18);
	ctx.lineTo(x+17,y+18);
	ctx.stroke();
	}

//*********************************************************************

function drawAutocorrGraph(ctx,graph)
{

if((graph.ivalue1>=0)&&(graph._z.autocov))
	{

	ctx.fillStyle = "#000000";
	ctx.textAlign = "left"

	var n = graph._z.autocov.length;
	var dx = graph.w-40;
	var xo = graph.x+20;
	var dy = Math.floor((graph.h-graph.hbar-40)/2);
	var yo = graph.y+graph.hbar+20+dy;

	ctx.fillStyle = "#AAAAAA";
	ctx.fillRect(xo,yo,2*dx,1);
	ctx.fillRect(xo,yo-dy,2*dx,1);
	ctx.fillRect(xo,yo+dy,2*dx,1);

	var band = 2/Math.sqrt(vrecords.length);
	ctx.fillRect(xo,yo-Math.round(dy*band),2*dx,1);
	ctx.fillRect(xo,yo+Math.round(dy*band),2*dx,1);

	ctx.fillRect(xo,yo-dy,1,2*dy);
	
	ctx.textAlign = "right";

	ctx.fillText("1",xo-5,yo-dy+5);
	ctx.fillText("0",xo-5,yo+5);
	ctx.fillText("-1",xo-5,yo+dy+5);

	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2;
	ctx.beginPath();
	for(var h=1;h<n;h++)
		{
		var x = xo+dx*h/n;
		var r = graph._z.autocov[h]/graph._z.autocov[0];
		var y = yo-dy*r;
		if(h==0)
			ctx.moveTo(x,y);
		else
			ctx.lineTo(x,y);
		}
	ctx.stroke();
	}

ctx.lineWidth = 1;
ctx.textAlign = "center"

}

//*********************************************************************
//
//                ACP
//
//*********************************************************************


function computeAcpData(graph)
{

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

//*********************************************************************

function drawAcpIcon(ctx,x,y)
	{
	ctx.fillStyle = "#000000"
	ctx.fillRect(x,y+10,20,1)
	ctx.fillRect(x+10,y,1,20)
	ctx.fillRect(x+3,y+7,2,2)
	ctx.fillRect(x+5,y+3,2,2)
	ctx.fillRect(x+12,y+4,2,2)
	ctx.fillRect(x+6,y+13,2,2)
	ctx.fillRect(x+15,y+12,2,2)
	}

//*********************************************************************

function drawAcpGraph(ctx,graph)
{
var font = ctx.font;

if(graph.ivalues.length>=2)
	{
	var option = getGraphOption(graph);

	if(option==0)
		{
		var display = getGraphDisplay(graph);

		var x1 = graph.x+5
		var x2 = graph.x + graph.w -115
		var xc = (x1+x2)/2

		var y1 = graph.y + graph.hbar + 5
		var y2 = graph.y + graph.h -5
		var yc = (y1+y2)/2

		xmin = Number.MAX_VALUE;
		xmax = -Number.MAX_VALUE;
		ymin = Number.MAX_VALUE;
		ymax = -Number.MAX_VALUE;

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

			if(display<0)
				ctx.fillRect(x-1,y-1,3,3)
			else
				ctx.fillText(lrecords[i][display],x,y+3)
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

				if(display<0)
					{
					ctx.fillStyle = "#000000";
					ctx.fillRect(x-3,y-3,7,7)
					}
				else
					{
					var l = ctx.measureText(lrecords[i][display]).width;
					ctx.fillStyle = "#000000";
					ctx.fillRect(x-l/2-5,y-6,l+10,12);		
					ctx.fillStyle = "#FFFFFF";
					ctx.fillText(lrecords[i][display],x,y+3);
					}
				}
			}
		}

	if(option==1)
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

	if(option==2)
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

}

//*********************************************************************

function downAcpGraph(pt,graph)
{
if(typeof(graph._z.xaxis)=="undefined") return -1;

if(inRect(pt,graph._z.xaxis.x-10,graph._z.xaxis.y-10,20,20)) 
	{
	valueindex = 0;
	return DRAG_AXIS;
	}

if(inRect(pt,graph._z.yaxis.x-10,graph._z.yaxis.y-10,20,20))
	{
	valueindex = 1;
	return DRAG_AXIS;
	}

return -1;
}

//*********************************************************************
//
//                CLUSTERING
//
//*********************************************************************


function computeClusteringData(graph)
{

if(!graph.nslot)
	graph.nslot = 3

switch(graph.clustering)
	{
	case CLUST.KMEANS: computeKmeansData(graph); break;	
	case CLUST.KMEDOIDS: computeKmedoidsData(graph); break;
	case CLUST.FUZZY: computeFuzzyData(graph); break;
	}
}

//*********************************************************************

function drawClusteringIcon(ctx,x,y)
	{
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

//*********************************************************************

function drawClusteringGraph(ctx,graph)
{

if(graph.ivalues.length>0)
	if(graph.clustering>=0)
		drawClusters(ctx,graph);

drawMenu(ctx,graph,MENU.CLUST,graph.clustering,SELECT_CLUSTERING,menuindex);

ctx.textAlign = "center"

}

//*********************************************************************

function drawClusters(ctx,graph)
{

	var ytop = graph.y + graph.hbar + 40 ;

	ctx.textAlign = "right";
	ctx.fillStyle = "#000000";
	ctx.fillText("Cluster",graph.x+80,ytop);
	ctx.fillText("Count",graph.x+150,ytop);
	ctx.fillText("Pct", graph.x+220,ytop);
	ctx.fillRect(graph.x+10,ytop+10,220,2)


	var sum = 0;
	for(var k=0;k<graph.nslot;k++)
		sum += graph._z.counts[k];

	var x,y,pct;

	var kfirst = Math.round(graph.yshift/100);
	if(kfirst<0) kfirst = 0;
	if(kfirst>=graph.nslot) kfirst = graph.nslot-1;

	for(var k=kfirst;k<graph.nslot;k++)
		{
		y = ytop + 30 + 20*(k-kfirst);
		if(y>graph.y+graph.h-40) break;

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
		for(var k=kfirst;k<graph.nslot;k++)
			{
			y = ytop  + 17 + 20*(k-kfirst);
			if(y+16>graph.y+graph.h-40) break;

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
	drawRightArrow(ctx,graph.x+250,ytop);

}

//*********************************************************************

function downClusteringGraph(pt,graph)
{

var w = 150;
var x = graph.x+graph.w/2-w/2;
var y = graph.y+graph.hbar+5;

if(inRect(pt,x,y,w,20))
	return SELECT_CLUSTERING;

x = graph.x+20+(graph.w-40)*graph.nslot/50
y = graph.y + graph.h - 40
if(graph.ivalues.length>0)
	if(inRect(pt,x-10,y-15,20,30))
		return DRAG_SLIDER;

if(graph.ivalues.length>0)
	if(inRect(pt,graph.x+245,graph.y+graph.hbar+25,30,30))
		{
		valueindex = 1;
		return DRAG_AXIS;
		}

return -1;
}

//*********************************************************************

function dragClusteringGraph(graph)
{
if(faction==DRAG_SLIDER)
	{
	var oldnslot = graph.nslot;
	graph.nslot = (ptmove.x-graph.x-20)*50/(graph.w-40);
	graph.nslot = Math.round(graph.nslot);
	if(graph.nslot<2)
		graph.nslot = 2;
	else if(graph.nslot>50)
		graph.nslot = 50;

	if(graph.nslot!=oldnslot)
		computeGraphData(graph)
	}

if(faction==SELECT_CLUSTERING)
	{
	selectMenuItem(ptmove,graph,MENU.CLUST);
	}
}

//*********************************************************************

function computeKmeansData(graph)
{
if(graph.ivalues.length<1) return

// count valid record numbers
var nv=0;
for(var i=0;i<lrecords.length;i++)
	if(recordMatch(i,graph))
		nv++;

// if not enough data
if(nv<graph.nslot) return

var cluster = new Array(vrecords.length);
for(var i=0;i<vrecords.length;i++)
	cluster[i] = -1;

var done = {};	
var centers = new Array(graph.nslot)
var counts = new Array(graph.nslot)

var ndim = graph.ivalues.length;

for(var j=0;j<graph.nslot;j++)
	{
	var i;
	while(1)
		{
		i = Math.floor(Math.random()*vrecords.length);
		if(!recordMatch(i,graph)) continue;
		// make sure we do not choose the same center twice
		if(!(i in done)) break;
		}
	done[i] = 1;	

	// coordinates of center j
	centers[j] = new Array(ndim);
	for(var k=0;k<ndim;k++)
		centers[j][k] = vrecords[i][graph.ivalues[k]];

	}


for(var iter=0;iter<50;iter++)
	{
	var nchange = 0;

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue

		var dmin = Number.MAX_VALUE;
		var jmin = -1;

		// look for nearest center
		for(var j=0;j<graph.nslot;j++)
			{
			var d = 0;
			for(var k=0;k<ndim;k++)
				{
				var x = vrecords[i][graph.ivalues[k]]-centers[j][k];
				d += x*x;
				}
			if(d<dmin)
				{
				dmin = d;
				jmin = j;
				}
			}

		if(cluster[i]!=jmin)
			{
			nchange++;
			cluster[i] = jmin;
			}
		}	


	if(nchange==0) break;

	for(var j=0;j<counts.length;j++)
		counts[j] = 0;
	for(var i=0;i<vrecords.length;i++)
		if(recordMatch(i,graph))
			counts[cluster[i]]++;

	// compute new centers
	for(var j=0;j<graph.nslot;j++)
		for(var k=0;k<ndim;k++)
			centers[j][k] = 0;

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue
		var j  = cluster[i];
		for(var k=0;k<ndim;k++)
			centers[j][k] += vrecords[i][graph.ivalues[k]]
		}

	for(var j=0;j<graph.nslot;j++)
		for(var k=0;k<ndim;k++)
			centers[j][k] = centers[j][k]/counts[j]


	if(nchange==0) break;
	}

graph._z.counts = counts;
graph._z.centers = centers;
graph._z.cluster = cluster;

}

//*********************************************************************

function computeKmedoidsData(graph)
{

if(graph.ivalues.length<1) return


// count valid records
var nv = 0;
for(var i=0;i<lrecords.length;i++)
	if(recordMatch(i,graph))
		nv++;

// if not enough data
if(nv<graph.nslot) return

var done = {};	
var medoids = new Array(graph.nslot)
var cluster = new Array(vrecords.length);

for(var j=0;j<graph.nslot;j++)
	{
	var k;
	while(1)
		{
		k = Math.floor(Math.random()*vrecords.length);
		if(!recordMatch(k,graph)) continue;
		// if k not already choosen
		if(!(k in done)) break;
		}
	done[k] = 1;
	medoids[j] = k;
	}

var ndim = graph.ivalues.length;
var cost = Number.MAX_VALUE;

for(var iter=0;iter<50;iter++)
	{

	// assign each record to the nearest medoid
	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;

		var dmin = Number.MAX_VALUE;
		for(var j=0;j<graph.nslot;j++)
			{
			var m = medoids[j];

			var d = 0;
			for(var k=0;k<ndim;k++)
				{
				var kk = graph.ivalues[k];
				d += Math.abs(vrecords[i][kk]-vrecords[m][kk]);	
				}

			if(d<dmin)
				{
				dmin = d;
				cluster[i] = j;
				}
			}
		}	

	var newcost = 0;

	// in each cluster compute new medoid
	for(var j=0;j<graph.nslot;j++)
		{
		var smin = Number.MAX_VALUE;
		var imin = -1;
		for(var i1=0;i1<lrecords.length;i1++)
			{
			var sum = 0;
			if(!recordMatch(i1,graph)) continue;
			if(cluster[i1]!=j) continue;
			for(var i2=0;i2<lrecords.length;i2++)
				{
				if(!recordMatch(i2,graph)) continue;
				if(cluster[i2]!=j) continue;
				for(var k=0;k<ndim;k++)
					{
					var kk = graph.ivalues[k];
					sum += Math.abs(vrecords[i1][kk]-vrecords[i2][kk]);
					}
				}
			if(sum<smin)
				{
				smin = sum;
				imin = i1;
				}
			}
			newcost += smin;
			medoids[j] = imin;
		}

	if(newcost>=cost) break;
	cost = newcost;	
	}

var counts = [];
for(var j=0;j<graph.nslot;j++)
	counts[j] = 0;

for(var i=0;i<vrecords.length;i++)
	if(recordMatch(i,graph))
		counts[cluster[i]]++;

graph._z.counts = counts;
graph._z.cluster = cluster;

}

//*********************************************************************

function computeFuzzyData(graph)
{

if(graph.ivalues.length<1) return;


	var nc = graph.nslot;		// number of clusters
	var centers = new Array(nc);
	for(var j=0;j<nc;j++)
		centers[j] = new Array(nv);

	var nv = graph.ivalues.length;

	var nr = vrecords.length;
	// if not enough records
	if(nr<nc) return;	

	var done = new Array(nr);
	for(var i=0;i<vrecords.length;i++)
		{	
		done[i] = -1;	// dont match
		if(!recordMatch(i,graph)) continue;
		done[i] = 0    // not selected as center
		}


	// random membership values
	var u = new Array(nr);
	for(var i=0;i<nr;i++)
		{	
		if(!recordMatch(i,graph)) continue;
		u[i] = new Array(nc);
		for(var j=0;j<nc;j++)
			u[i][j] = Math.random();
		}

	done = null;

	for(var loop=0;loop<50;loop++)
		{
		// compute new centers
		for(var j=0;j<nc;j++)
			{
			var den = 0;
			for(var i=0;i<nr;i++)
				if(u[i])
					den += u[i][j]*u[i][j];

			zero(centers[j]);
			for(var i=0;i<nr;i++)
				if(u[i])		
					add(vrecords[i],u[i][j]*u[i][j]/den,centers[j]);
			}	


		// compute new memberships
		var change = 0;
		for(var i=0;i<nr;i++)
			{
			if(u[i])
				for(var j=0;j<nc;j++)
					{
					var num = dist2(vrecords[i],centers[j]);
					var newuij = 0;
					for(var k=0;k<nc;k++)
						newuij += num/dist2(vrecords[i],centers[k]);
					newuij = 1/newuij;
					change = Math.abs(u[i][j]-newuij);
					u[i][j] = newuij;
					}
			}

		if(change<1e-4) break;
		}


	// assign each record to the right cluster
	var cluster = new Array(vrecords.length);
	var counts = new Array(nc);
	for(var j=0;j<nc;j++)
		counts[j] = 0;

	for(var i=0;i<vrecords.length;i++)
		if(recordMatch(i,graph))
		{
		var jbest = -1;
		var ubest = 0;
		for(var j=0;j<nc;j++)
			if(u[i][j]>ubest)
				{
				ubest = u[i][j];
				jbest = j;	
				}
		cluster[i] = jbest;
		counts[jbest] ++;
		}


	graph._z.cluster = cluster;
	graph._z.counts = counts;

	u = null;

	// zero center
	function zero(c) {
		for(var k=0;k<nv;k++)
			c[k] = 0;
	}

	// copy record r with with weight to center c
	function add(r,w,c) {	
		for(var k=0;k<nv;k++)
			c[k] += w*r[graph.ivalues[k]];
	}

	// squared distance from record r to center c
	function dist2(r,c) {
		var d = 0;
			for(var k=0;k<nv;k++)
				d += (r[graph.ivalues[k]]-c[k])*(r[graph.ivalues[k]]-c[k]);
		return d;
	}

}

//*********************************************************************
//
//                DENDRO
//
//*********************************************************************


function computeDendroData(graph)
{


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
	var dmax = -Number.MAX_VALUE;
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

//*********************************************************************

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

//*********************************************************************

function moveDendroGraph(ptmove,graph)
{
if(graph.type!=TYPE.DENDRO) return false;

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

//*********************************************************************

function drawDendroIcon(ctx,x,y)
	{
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
	}

//*********************************************************************

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

	ctx.fillStyle = BG;
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

}

//*********************************************************************

function downDendroGraph(pt,graph)
{
if(graph.ivalues.length==0) return -1;
if(graph._z.percent<1) return -1;

var xmin = graph.x+10;
var xmax = graph.x + graph.w - 120;

var y = graph.y + graph.h - 40;
var x = xmin+(xmax-xmin)*graph._z.nc/50;

if(inRect(pt,x-10,y-15,20,30))
	return CHANGE_NCLASS;

if(inRect(pt,graph.x+graph.w-120,graph.y+graph.h-70,20,20))
	{
	valueindex = 1;
	return DRAG_AXIS;
	}

return -1;
}

//*********************************************************************

function dragDendroGraph(graph)
{
if(faction==CHANGE_NCLASS)
	{
	var xmin = graph.x+10;
	var xmax = graph.x + graph.w - 120;
	graph._z.nc = Math.floor((ptmove.x-xmin)*50/(xmax-xmin));
	if(graph._z.nc<3) graph._z.nc = 2;
	if(graph._z.nc>50) graph._z.nc = 50;
	}
}

//*********************************************************************
//
//                RADVIZ
//
//*********************************************************************

function computeRadvizData(graph)
{


if(graph.ivalues.length<2) return;

var min = [];
var max = [];
for(var j=0;j<graph.ivalues.length;j++)
	{
	min.push(Number.MAX_VALUE);
	max.push(-Number.MAX_VALUE);
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

if(graph.ilabel1>=0)
	computeGraphData1(graph);
}

//*********************************************************************

function drawRadvizIcon(ctx,x,y)
	{
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

//*********************************************************************

function drawRadvizGraph(ctx,graph)
{

ctx.save();

if(graph.ivalues.length>=2)
	{
	var display = getGraphDisplay(graph);

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
	ctx.font = "9px helvetica";

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
	ctx.textAlign = "center"
	ctx.font = "9px helvetica";

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
			ctx.fillStyle = "#000000";
		else
			ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]];

		if(display<0)
			ctx.fillRect(x-1,y-2,4,4)
		else
			ctx.fillText(lrecords[i][display],x,y+3)
		}

	graph._z.xref = xref;
	graph._z.yref = yref;

	}

ctx.restore();

}

//*********************************************************************
//
//                TERNARY
//
//*********************************************************************


function computeTernaryData(graph)
{


if(graph.ilabel1>=0)
	computeGraphData1(graph);
}

//*********************************************************************

function moveTernaryGraph(ptmove,graph)
{
if(graph.type!=TYPE.TERNARY) return false;

message = "";

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

//*********************************************************************

function drawTernaryIcon(ctx,x,y)
	{
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

//*********************************************************************

function drawTernaryGraph(ctx,graph)
{


if(graph.ivalues.length>=3) {

	var display = getGraphDisplay(graph);

	ctx.textAlign = "center";
	ctx.font = "9px helvetica";

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

		if(graph.ilabel1<0)
			ctx.fillStyle = "#000000";
		else
			ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]]

		if(display<0)
			ctx.fillRect(x-2,y-2,4,4)
		else
			ctx.fillText(lrecords[i][display],x,y+3)
		}

		if(overlabel1>=0)
		{
		for(var i=0;i<lrecords.length;i++)
			{
			if(!recordMatch(i,graph)) continue
			if( lrecords[i][overlabel1] != overkey1) continue;
			//if(!recordHilite(lrecords[i])) continue


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

			if(display<0)
				{
				ctx.fillStyle = ctx.strokeStyle = "#000000";
				ctx.fillRect(x-3,y-3,7,7)
				}
			else			
				{
				ctx.fillStyle = ctx.strokeStyle = "#000000";
				var l = ctx.measureText(lrecords[i][display]).width;
				ctx.fillRect(x-l/2-5,y-6,l+10,12);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(lrecords[i][display],x,y+3)
				}
			}
		}
	}

ctx.textAlign = "center"


}

//*********************************************************************
//
//                SURVEY
//
//*********************************************************************


function computeSurveyData(graph)
{


	var nv = graph.ivalues.length;
	if(nv==0) return;

	var min = new Array(nv);
	var max = new Array(nv);
	for(var j=0;j<nv;j++)
		{
		min[j] = Number.MAX_VALUE;
		max[j] = -Number.MAX_VALUE;
		}

	var nr = 0;
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		for(var j=0;j<nv;j++)
			{
			var v = vrecords[i][graph.ivalues[j]];
			if(v<min[j]) min[j] = v;
			if(v>max[j]) max[j] = v;
			}
		nr++;
		}

	graph._z.nr = nr;
	graph._z.min = min;
	graph._z.max = max;

	if(graph.ilabel1>=0)
		computeGraphData1(graph)
}

//*********************************************************************

function moveSurveyGraph(ptmove,graph)
{

	var min = graph._z.min;
	var max = graph._z.max;

	var xleft = graph.x+30;
	var xright = graph.x+graph.w-100;

	var nv = graph.ivalues.length;
	if(nv==0) return false;

	var dx = (xright-xleft)/nv;
	if(dx<4) dx = 4;

	var i = Math.floor((ptmove.x-xleft)/dx);
	if(i<0) return false;
	if(i>=nv) return false;

	message = values[graph.ivalues[i]];
	return true;

}

//*********************************************************************

function drawSurveyIcon(ctx,x,y)
{
	var xx = [6,4,5,8,6,3,2,4,5,3,5,6,8,5,4];
	ctx.fillStyle = "#333333";
	for(var i=0;i<xx.length;i++)
		ctx.fillRect(x+10-xx[i],y+3+i,2*xx[i],1);
}

//*********************************************************************

function drawSurveyGraph(ctx,graph)
{

if(graph.ivalues.length>0)
	{
	var min = graph._z.min;
	var max = graph._z.max;

	var xleft = graph.x+30;
	var xright = graph.x+graph.w-100;
	var ytop = graph.y+graph.hbar+10;
	var ybottom = graph.y+graph.h-10;

	var nv = graph.ivalues.length;
	var nr = graph._z.nr;

	var dx = (xright-xleft)/nv;
	if(dx<4) dx = 4;

	var dy = (ybottom-ytop)/nr;
	if(dy<1) dy = 1;


	var k = 0;
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		for(var j=0;j<nv;j++)
			{
			var v =  dx*(vrecords[i][graph.ivalues[j]]-min[j])/(max[j]-min[j]);
			if(graph.ilabel1<0)
				ctx.fillStyle = "#000000";
			else
				ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]]
			var x = Math.round(xleft+j*dx+dx/2-v/2);
			var y = Math.round(ytop+k*dy);	
			ctx.fillRect(x,y,v,dy);
			}
		k++;
		}
	}

}

//*********************************************************************
//
//                ANDREW
//
//*********************************************************************


function computeAndrewData(graph)
{

if(graph.ivalues.length==0) return;

var min = Number.MAX_VALUE;
var max = -Number.MAX_VALUE;

var nv = graph.ivalues.length;
var coef = new Array(nv);

var r2 = Math.sqrt(2);

var nt = 100;
for(var j=1;j<nv;j++)
	{
	coef[j] = new Array(nt);
	for(var k=0;k<nt;k++)
		{
		var t = -Math.PI+Math.PI*2*k/nt;
		if(j%2)
			coef[j][k] = Math.sin(t*(j+1)/2);
		else
			coef[j][k] = Math.cos(t*j/2);
		}
	}

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue

	for(var k=0;k<nt;k++)
		{
		var f = vrecords[i][graph.ivalues[0]]/r2;
		for(var j=1;j<nv;j++)
			f += vrecords[i][graph.ivalues[j]]*coef[j][k];
		if(f<min) min = f;
		if(f>max) max = f;	
		}
	}

	graph._z.min = min;
	graph._z.max = max;
	graph._z.coef = coef;	
	graph._z.nt = nt;

	if(graph.ilabel1>=0)
		computeGraphData1(graph)
}

//*********************************************************************

function drawAndrewIcon(ctx,x,y)
{
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	for(var i=2;i<=18;i++)
		{
		var dy = y+11+Math.cos(i*Math.PI/5)*7;
		if(i==2)
			ctx.moveTo(x+i,dy);
		else
			ctx.lineTo(x+i,dy);
		}
	ctx.stroke();
}

//*********************************************************************

function drawAndrewGraph(ctx,graph)
{
if(graph.ivalues.length>0)
	{
	var min = graph._z.min;
	var max = graph._z.max;

	var nt = graph._z.nt;
	var nv = graph.ivalues.length;

	var xleft = graph.x+30;
	var xright = graph.x+graph.w-100;	
	var dx = (xright-xleft)/nt;

	var ytop = graph.y+graph.hbar+10;
	var ybottom = graph.y+graph.h-10;
	var yscale = (ybottom-ytop)/(max-min);

	var coef = graph._z.coef;
	
	var r2 = Math.sqrt(2);

	ctx.fillStyle = "#CCCCCC";	
	var y = ybottom-(0-min)*yscale;
	ctx.fillRect(xleft,y,xright-xleft,1);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;

		if(graph.ilabel1<0)
			ctx.strokeStyle = "#000000";
		else
			ctx.strokeStyle = graph._colors1[lrecords[i][graph.ilabel1]]

		ctx.beginPath();
		for(var k=0;k<nt;k++)
			{
			var x = xleft+k*dx;

			var f = vrecords[i][graph.ivalues[0]]/r2;
			for(var j=1;j<nv;j++)
				f += coef[j][k]*vrecords[i][graph.ivalues[j]];
			var y = ybottom - (f-min)*yscale;	

			if(k==0)
				ctx.moveTo(x,y);
			else
				ctx.lineTo(x,y);
			}
		ctx.stroke();
		}	
	}

}

//*********************************************************************
//
//                G3D
//
//*********************************************************************


function computeG3dData(graph)
{

if(graph.ivalues.length<3) return;

var r = 10;


var ix = graph.ivalues[0];
var iy = graph.ivalues[1];
var iz = graph.ivalues[2];


var xmin = Number.MAX_VALUE;
var ymin = Number.MAX_VALUE;
var zmin = Number.MAX_VALUE;
var xmax = -Number.MAX_VALUE;
var ymax = -Number.MAX_VALUE;
var zmax = -Number.MAX_VALUE;

var np = vrecords.length;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	var x = vrecords[i][ix];
	if(x<xmin) xmin = x;
	if(x>xmax) xmax = x;
	
	var y = vrecords[i][iy];
	if(y<ymin) ymin = y;
	if(y>ymax) ymax = y;

	var z = vrecords[i][iz];
	if(z<zmin) zmin = z;
	if(z>zmax) zmax = z;

	np++;
	}


var px = new Array(np+3);
var py = new Array(np+3);
var pz = new Array(np+3);

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	var x = vrecords[i][ix];
	px[i] = (x-xmin)/(xmax-xmin)*2*r-r;

	var y = vrecords[i][iy];
	py[i] = (y-ymin)/(ymax-ymin)*2*r-r;

	var z = vrecords[i][iz];
	pz[i] = (z-zmin)/(zmax-zmin)*2*r-r;
	}

// store axes at end of arrays
px[np] = r;
py[np] = 0;
pz[np] = 0;

px[np+1] = 0;
py[np+1] = r;
pz[np+1] = 0;

px[np+2] = 0;
py[np+2] = 0;
pz[np+2] = r;


graph._z.px = px;
graph._z.py = py;
graph._z.pz = pz;

if(graph.ilabel1>=0)
	computeGraphData1(graph)

}

//*********************************************************************

function drawG3dIcon(ctx,x,y)
{
ctx.strokeStyle = "#666666";
ctx.beginPath();
ctx.moveTo(x+8,y+12);
ctx.lineTo(x+18,y+12);
ctx.moveTo(x+8,y+12);
ctx.lineTo(x+8,y+2);
ctx.moveTo(x+8,y+12);
ctx.lineTo(x+2,y+18);
ctx.stroke();

ctx.fillStyle = "#000000";
ctx.fillRect(x+4,y+6,2,2);
ctx.fillRect(x+12,y+4,2,2);
ctx.fillRect(x+14,y+15,2,2);
}

//*********************************************************************

function drawG3dGraph(ctx,graph)
{
ctx.fillStyle = "#000000";
ctx.fillRect(graph.x,graph.y+graph.hbar,graph.w,graph.h-graph.hbar);

if(graph.ivalues.length>=3)
	{
	ctx.save();
	ctx.rect(graph.x,graph.y+graph.hbar,graph.w,graph.h-graph.hbar);
	ctx.clip();

	var np = graph._z.px.length-3;
	var px = graph._z.px;
	var py = graph._z.py;
	var pz = graph._z.pz;

	var w = graph.w;
	var h = graph.h-graph.hbar;

	var m = Math.min(w,h);

	var d = 1400*m/300;
	var r = 10*Math.sqrt(3);
	

	// draw axes
	var x0 = xproj(0,0);
	var y0 = yproj(0,0);
	var x1 = xproj(px[np],pz[np]);
	var y1 = yproj(py[np],pz[np]);
	var x2 = xproj(px[np+1],pz[np+1]);	
	var y2 = yproj(py[np+1],pz[np+1]);
	var x3 = xproj(px[np+2],pz[np+2]);
	var y3 = yproj(py[np+2],pz[np+2]);
	ctx.strokeStyle = "rgb(200,200,200)";
	ctx.beginPath();
	ctx.moveTo(x0,y0);
	ctx.lineTo(x1,y1);
	ctx.moveTo(x0,y0);
	ctx.lineTo(x2,y2);
	ctx.moveTo(x0,y0);
	ctx.lineTo(x3,y3);
	ctx.stroke();

	// draw from back to front
	drawz(-2*r,-0.5*r);
	drawz(-0.5*r,0);
	drawz(0,0.5*r);
	drawz(0.5*r,2*r);

	ctx.restore();
	}


	function xproj(x,z) {
		return -(d*x/(z-100))+w/2+graph.x;
	}

	function yproj(y,z) {
		return (d*y/(z-100))+h/2+graph.y+graph.hbar;
	}

	function darker(c,alpha) {
		if(c.charAt(0)=="#")
			{
			var r = parseInt(c.substring(1,3),16);
			var g = parseInt(c.substring(3,5),16);
			var b = parseInt(c.substring(5,7),16);
			return "rgba("+r+","+g+","+b+","+alpha+")";
			}
		else
			return c.replace("rgb(","rgba(").replace(")",","+alpha+"");
	}

	function drawz(zmin,zmax)
	{	
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;

		if(pz[i]<=zmin) continue;
		if(pz[i]>zmax) continue;

		var x = xproj(px[i],pz[i]);
		var y = yproj(py[i],pz[i]);

		if(graph.ilabel1<0)
			ctx.fillStyle = "rgb(255,255,255)";
		else
			ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]]

		var rad = Math.round((pz[i]/r+1)*3);
		
		if(rad<0)
			{
			console.log("rad<0 i="+i+" pz="+pz[i]);
			}
		else if(pz[i]<0)
			{
			/// in the back	
			ctx.fillStyle = darker(ctx.fillStyle,(1+pz[i]/r)/2);
			ctx.beginPath();
			ctx.arc(x,y,rad,0,Math.PI*2,false);
			ctx.fill();
			}
		else
			{
			// in the front
			ctx.beginPath();
			ctx.arc(x,y,rad,0,Math.PI*2,false);
			ctx.fill();
			ctx.fillStyle = "rgba(255,255,255,0.6)";
			ctx.beginPath();
			ctx.arc(x+rad*0.1,y+rad*0.1,rad*0.8,0,Math.PI*2,false);
			ctx.fill();
			}
		}
	}

}

//*********************************************************************

function rotateG3d(graph,dx,dy)
{
if(!graph._z) return;
if(!graph._z.px) return;

var np = graph._z.px.length;
var px = graph._z.px;
var py = graph._z.py;
var pz = graph._z.pz;

var angle = -dx/200;
var cos = Math.cos(angle);
var sin = Math.sin(angle);
for(var i=0;i<np;i++)		
	{
	var x = (px[i]*cos)- (pz[i]*sin);
	var z = (px[i]*sin)+ (pz[i]*cos);
	px[i] = x;
	pz[i] = z;
	}		

var angle =dy/200;
var cos = Math.cos(angle);
var sin = Math.sin(angle);
for(var i=0;i<np;i++)
	{
	var y = (py[i]*cos)-(pz[i]*sin);
	var z = (py[i]*sin)+(pz[i]*cos);
	py[i] = y;
	pz[i] = z;
	}

}

//*********************************************************************

function downG3dGraph(pt,graph)
{
return ROTATE_VIEW;
}

//*********************************************************************

function dragG3dGraph(graph)
{
if(faction==ROTATE_VIEW)
	{
	rotateG3d(graph,ptmove.x-ptclick.x,ptmove.y-ptclick.y);
	ptclick = ptmove;
	}
}

//*********************************************************************
//
//                DISCRI
//
//*********************************************************************


function drawDiscriIcon(ctx,x,y)
	{	
	ctx.strokeStyle = "#444444";
	ctx.beginPath()
	ctx.moveTo(x+6+4,y+8)
	ctx.arc(x+6,y+8,4,0,Math.PI*2,true)
	ctx.moveTo(x+12+6,y+8)
	ctx.arc(x+12,y+8,6,0,Math.PI*2,true)
	ctx.moveTo(x+10+5,y+14)
	ctx.arc(x+10,y+14,5,0,Math.PI*2,true)
	ctx.stroke()
	}

//*********************************************************************

function computeDiscriData(graph)
{

if(graph.ilabel1<0) return;
if(graph.ivalues.length<2) return


computeGraphData1(graph)


var nv = graph.ivalues.length;


// global variance matrix
var V = compute_global_variance();

// compute inverse of variance
var VINV = powerM(V,-1);

var weight = 0;
var center = vector(nv);

// centers of groups
var gweight = {};
var gcenter = {};
compute_centers();


// intergroup variance
var B = compute_intergroup_variance();


// matrix to process
var W = multMM(VINV,B)


var E = matrix(nv,nv);
var wr = vector(nv)
var wi = vector(nv)
var o = {}
	o.outmsgstr = ""

calcEigSysReal(nv,W,E,wr,wi,o)


var temp;

// sort eigenvalues
for(var j=0;j<nv-1;j++)
	for(var k=j+1;k<nv;k++)
		{
		if(wr[k]>wr[j])
			{
			temp = wr[k]
			wr[k] = wr[j]
			wr[j] = temp
			for(var l=0;l<nv;l++)
				{
				temp = E[l][j]
				E[l][j] = E[l][k]
				E[l][k] = temp
				}
			}
		}


// coefficients of projections
var xcoef = []
var ycoef = []
for(var j=0;j<nv;j++)
	{
	xcoef[j] = E[j][0]
	ycoef[j] = E[j][1]
	}

graph._z.xcoef = xcoef;
graph._z.ycoef = ycoef;
graph._z.avg = center;

//  projections  on the first two factors
var xrow = new Array(lrecords.length);
var yrow = new Array(lrecords.length);
for(var i=0;i<lrecords.length;i++)
	{
	xrow[i] = yrow[i] = 0
	for(var j=0;j<nv;j++)
		{
		var y = vrecords[i][graph.ivalues[j]]-center[j];
		xrow[i] += y*E[j][0]
		yrow[i] += y*E[j][1]
		}
	}

var u = colM(E,0);
var v = colM(E,1);


// projection of centers on the first two factors
var xcenter = {};
var ycenter = {};
for(var key in gcenter)
	{	
	xcenter[key] = 0;
	ycenter[key] = 0;
	for(var j=0;j<nv;j++)
		{
		var y = gcenter[key][j]-center[j];
		xcenter[key] += y*E[j][0];
		ycenter[key] += y*E[j][1];
		}
	}

// correlations of variables with first two factors
var corr = new Array(graph.ivalues.length);
var temp = new Array(vrecords.length);

for(var j=0;j<graph.ivalues.length;j++)
	{
	for(var i=0;i<vrecords.length;i++)
			temp[i] = vrecords[i][graph.ivalues[j]];	
	var xcorr = correlation(temp,xrow);
	var ycorr = correlation(temp,yrow);
	corr[j] = [xcorr,ycorr];
	}

// 
var GV = {};
compute_intragroup_variances();

var ellipse = {};
for(var key in GV)
	ellipse[key] = compute_ellipse(GV[key],u,v);

graph._z.xrow = xrow
graph._z.yrow = yrow
graph._z.xcenter = xcenter;
graph._z.ycenter = ycenter;
graph._z.lambda = wr;
graph._z.corr = corr;
graph._z.ellipse = ellipse;

	// ------------------------------------------------------------------------

	function compute_centers()
	{
	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var key = lrecords[i][graph.ilabel1];
		
		if(!(key in gweight))
			{
			gweight[key] = 0;
			gcenter[key] = vector(nv);
			}

		weight++;
		gweight[key]++;
		for(var j=0;j<nv;j++)
			{
			center[j] += vrecords[i][graph.ivalues[j]];
			gcenter[key][j] += vrecords[i][graph.ivalues[j]];
			}
		}

	for(var j=0;j<nv;j++)
		{
		center[j] = center[j]/weight;
		for(var key in gweight)
			gcenter[key][j] = gcenter[key][j]/gweight[key];
		}
	}

	// ----------------------------------------------------------------
	
	function compute_global_variance()
	{
	var count = 0;
	var sum = vector(nv);
	var V = matrix(nv,nv);

	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue
		var key = lrecords[i][graph.ilabel1];

		count += 1;

		for(var j=0;j<nv;j++)
			{
			var xj = vrecords[i][graph.ivalues[j]] 
			sum[j] += xj

			for(var k=0;k<nv;k++)
				{
				var xk = vrecords[i][graph.ivalues[k]]
				V[j][k] += xj*xk;
				}
			}	
		}

	if(count==0) count = 1;

	for(var j=0;j<nv;j++)
		sum[j] = sum[j]/count;


	for(var j=0;j<nv;j++)
		for(var k=0;k<nv;k++)
			V[j][k] = (V[j][k]-count*sum[j]*sum[k])/count
	
	return V;
	}

	// ----------------------------------------------------------------

	function compute_intergroup_variance()
	{
	var B = matrix(nv,nv);

	for(var key in gcenter)
		for(var j=0;j<nv;j++)
			for(var k=0;k<nv;k++)
				B[j][k] += gcenter[key][j]*gcenter[key][k]*gweight[key];


	for(var j=0;j<nv;j++)
		for(var k=0;k<nv;k++)
			B[j][k] = (B[j][k]-weight*center[j]*center[k])/weight;

	return B;
	}

	// ----------------------------------------------------------------

	function compute_intragroup_variances()
	{
	var count = {};
	var sum = {};

	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue
		var key = lrecords[i][graph.ilabel1];

		if(!(key in count))
			{
			count[key] = 0;
			sum[key] = vector(nv,nv);
			GV[key] = matrix(nv,nv);
			}

		count[key]++;

		for(var j=0;j<nv;j++)
			{
			var xj = vrecords[i][graph.ivalues[j]] 
			sum[key][j] += xj

			for(var k=0;k<nv;k++)
				{
				var xk = vrecords[i][graph.ivalues[k]]
				GV[key][j][k] += xj*xk;
				}
			}	
		}

	for(key in count)
		{
		for(var j=0;j<nv;j++)
			sum[key][j] = sum[key][j]/count[key];

		for(var j=0;j<nv;j++)
			for(var k=0;k<nv;k++)
				GV[key][j][k] = (GV[key][j][k]-count[key]*sum[key][j]*sum[key][k])/count[key];
		}
	}

	// ----------------------------------------------------------------

	function compute_ellipse(V,u,v)
	{	
	// We look for points at Mahalanobis distance 1 to origin :
	// t' V^-1 t = 1
	// The points are on the first plane, therefore they are
	// linear combination of the first two factors:
	// t = xu + yv
	// It comes :
	// equation of ellipse is ax^2+bxy+cy^2=1
	var VINV = powerM(V,-1);
	var a = multVV(u,multMV(VINV,u));
	var b = 2*multVV(u,multMV(VINV,v));
	var c = multVV(v,multMV(VINV,v));

	// variable change to eliminate the b term
	var rotation = Math.atan(b,c-a)/2;
	var sin = Math.sin(rotation);
	var cos = Math.cos(rotation);
	var p = Math.sqrt(a*cos*cos-b*cos*sin+c*sin*sin);
	var q = Math.sqrt(a*sin*sin+b*cos*sin+c*cos*cos);
	var xellipse = new Array(100);
	var yellipse = new Array(100);
	for(var i=0;i<100;i++)
		{
		var x = Math.cos(Math.PI*2*i/100)/p;
		var y = Math.sin(Math.PI*2*i/100)/q;
		xellipse[i] = x*cos+y*sin;
		yellipse[i] = -x*sin+y*cos;
		}
	return {x:xellipse,y:yellipse}
	}

	// ----------------------------------------------------------------

}

//*********************************************************************

function drawDiscriGraph(ctx,graph)
{

var font = ctx.font

if((graph.ilabel1>=0)&&(graph.ivalues.length>=2))
	{
	var option = graph.option%3;

	if(option==0)
		{
		var display = getGraphDisplay(graph);

		// compute bounds
		var xmin = Number.MAX_VALUE;
		var xmax = -Number.MAX_VALUE;
		var ymin = Number.MAX_VALUE;
		var ymax = -Number.MAX_VALUE;
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

		for(var key in graph._z.xcenter)
			{
			draw_ellipse(key,x1,y2,0.5);
			draw_ellipse(key,x1,y2,1);
			draw_ellipse(key,x1,y2,1.5);
			draw_ellipse(key,x1,y2,2);
			}

		for(var i=0;i<lrecords.length;i++)
			{
			if(!recordMatch(i,graph)) continue	

			var key = lrecords[i][graph.ilabel1]
			ctx.fillStyle = graph._colors1[key]

			x = Math.round(x1 + scale*(graph._z.xrow[i]-xmin));
			y = Math.round(y2 - scale*(graph._z.yrow[i]-ymin));
			if(display<0)
				ctx.fillRect(x-1,y-1,3,3)
			else
				ctx.fillText(lrecords[i][display],x,y+3)
			}

		if(overlabel1>=0)
			for(var i=0;i<lrecords.length;i++)
				{
				if(!recordMatch(i,graph)) continue	
				if(!recordHilite(lrecords[i])) continue
			
				var key = lrecords[i][graph.ilabel1]

				x = Math.round(x1 + scale*(graph._z.xrow[i]-xmin));
				y = Math.round(y2 - scale*(graph._z.yrow[i]-ymin));
				if(display<0)
					{
					ctx.fillStyle = "#000000";
					ctx.fillRect(x-3,y-3,7,7)
					}
				else
					{
					ctx.fillStyle = "#000000";
					var l = ctx.measureText(lrecords[i][display]).width;
					ctx.fillRect(x-l/2-5,y-6,l+10,13);
					ctx.fillStyle = "#FFFFFF";
					ctx.fillText(lrecords[i][display],x,y+3)
					}
				}
		}

	if(option==1)
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
			var x = xc + scale*graph._z.corr[i][0];
			var y = yc - scale*graph._z.corr[i][1];
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
			var x = xc + scale*graph._z.corr[i][0];
			var y = yc - scale*graph._z.corr[i][1];
			ctx.fillText(values[graph.ivalues[i]],x,y+3)
			}
		}

	if(option==2)
		{
		var x1 = graph.x+40
		var x2 = graph.x + graph.w -115
		var xc = (x1+x2)/2

		var y1 = graph.y + graph.hbar + 5
		var y2 = graph.y + graph.h -5
		var yc = (y1+y2)/2

		var n = graph._z.eigenvalues.length;
		var dx = (x2-x1)/n;

		ctx.strokeStyle = "#000000"
		ctx.fillStyle = "#008800"
		
		var sum = 0
		for(var i=0;i<n;i++)
			sum += graph._z.eigenvalues[i];

		for(var i=0;i<n;i++)
			{
			var x = x1 + i*dx;
			var y = graph._z.eigenvalues[i]*(y2-y1)/sum;
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

ctx.textAlign = "center";
ctx.font = font

	function draw_ellipse(key,x1,y,ratio)
	{	
	ctx.strokeStyle = graph._colors1[key];
	var xe = x1 + scale*(graph._z.xcenter[key]-xmin)	
	var ye = y2 - scale*(graph._z.ycenter[key]-ymin);
	ctx.beginPath();
	for(var i=0;i<graph._z.ellipse[key].x.length;i++)
		{
		var x = ratio*scale*graph._z.ellipse[key].x[i];
		var y = ratio*scale*graph._z.ellipse[key].y[i];
		if(i==0)
			ctx.moveTo(xe+x,ye-y);
		else
			ctx.lineTo(xe+x,ye-y);
		}
	ctx.closePath();
	ctx.stroke();
	}

}

//*********************************************************************

function downDiscriGraph(pt,graph)
{
if(typeof(graph._z.xaxis)=="undefined") return -1;

if(inRect(pt,graph._z.xaxis.x-10,graph._z.xaxis.y-10,20,20)) 
	{
	valueindex = 0;
	return DRAG_AXIS;
	}

if(inRect(pt,graph._z.yaxis.x-10,graph._z.yaxis.y-10,20,20))
	{
	valueindex = 1;
	return DRAG_AXIS;
	}

return -1;

}

//*********************************************************************
//
//                TEST
//
//*********************************************************************


function computeTestData(graph)
{
switch(graph.test)
	{
	case TEST.FISHER: computeFisherData(graph); break;
	case TEST.BARTLETT : computeBartlettData(graph); break;
	case TEST.LEVENE: computeLeveneData(graph); break;
	case TEST.BROWN: computeLeveneData(graph); break;
	}
}

//*********************************************************************

function drawTestIcon(ctx,x,y)
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
	}

//*********************************************************************

function drawTestGraph(ctx,graph)
{


if((graph.ivalue1>=0)&&(graph.ilabel1>=0))
	switch(graph.test)
		{
		case TEST.FISHER: drawFisherGraph(ctx,graph); break;
		case TEST.BARTLETT: drawBartlettGraph(ctx,graph); break;
		case TEST.LEVENE: drawLeveneGraph(ctx,graph); break;
		case TEST.BROWN: drawLeveneGraph(ctx,graph); break;
		}

drawMenu(ctx,graph,MENU.TEST,graph.test,SELECT_TEST,testindex);

ctx.textAlign = "center"


}

//*********************************************************************

function downTestGraph(pt,graph)
{

var w = 150;
var x = graph.x+graph.w/2-w/2;
var y = graph.y+graph.hbar+5;
if(inRect(pt,x,y,w,20)) 
	return SELECT_TEST;

return  -1;
}

//*********************************************************************

function computeBartlettData(graph)
{
if(graph.ilabel1<0) return;
if(graph.ivalue1<0) return;

var stats = {};
var ng = 0;
var nr = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue

	nr++;
	
	var x = vrecords[i][graph.ivalue1];
	var g = lrecords[i][graph.ilabel1];

	if(!(g in stats))
		{
		stats[g] = {sum:0,sum2:0,n:0};
		ng++;
		}
	
	stats[g].sum += x;
	stats[g].sum2 += x*x;
	stats[g].n ++;
	}

for(var g in stats)
	stats[g].var = stats[g].sum2/stats[g].n - (stats[g].sum)*(stats[g].sum)/stats[g].n/stats[g].n;


var sp = 0;
var sa = 0;
var sb = 0;
for(var g in stats)
	{
	sp += (stats[g].n-1)*stats[g].var/(nr-ng);
	sa += (stats[g].n-1)*Math.log(stats[g].var);
	sb += (1/(stats[g].n-1));
	}

var t = ((nr-ng)*Math.log(sp)-sa)/(1+(1/(3*(ng-1)))*(sb-1/(nr-ng)));

graph._z.stats = stats;
graph._z.t = t;
graph._z.ng = ng;
graph._z.cv = critchi(0.05,ng-1);
}

//*********************************************************************

function computeLeveneData(graph)
{
if(graph.ilabel1<0) return;
if(graph.ivalue1<0) return;

var stats = {};
var ng = 0;
var nr = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	nr++;

	var x = vrecords[i][graph.ivalue1];
	var g = lrecords[i][graph.ilabel1];

	if(!(g in stats))
		stats[g] = {zavg:0,median:0,values:[]};			
	stats[g].values.push(x);
	}

if(graph.test==TEST.BROWN)
	for(var g in stats)	
		{
		// compute median of each group
		ng++;
		stats[g].values.sort( function(a,b) { return a-b} );	
		var i = Math.floor(stats[g].values.length/2);
		if(stats[g].values.length%2==1)
			stats[g].median = stats[g].values[i];
		else
			stats[g].median = (stats[g].values[i-1]+stats[g].values[i])/2;
			
		}
if(graph.test==TEST.LEVENE)
	for(var g in stats)
		{
		// compute mean of each group
		ng++;	
		var s =0;
		for(var i=0;i<stats[g].values.length;i++)
			s += stats[g].values[i];		
		stats[g].median = s/stats[g].values.length;
		}


var zavg = 0;
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	
	var g = lrecords[i][graph.ilabel1];
	var z = Math.abs(vrecords[i][graph.ivalue1]-stats[g].median);
	stats[g].zavg += z;	
	zavg += z;
	}

for(var g in stats)
	stats[g].zavg /= stats[g].values.length;
zavg /= nr;

var sum1 = 0;
for(var g in stats)	
	sum1 += stats[g].values.length*(stats[g].zavg-zavg)*(stats[g].zavg-zavg);

var sum2 = 0;	
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	var g = lrecords[i][graph.ilabel1];
	var z = Math.abs(vrecords[i][graph.ivalue1]-stats[g].median);

	sum2 += (z-stats[g].zavg)*(z-stats[g].zavg);
	}

var w = (nr-ng)*sum1/(ng-1)/sum2;

graph._z.ng = ng;
graph._z.nr = nr;
graph._z.w = w;

}

//*********************************************************************

function computeFisherData(graph)
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

//*********************************************************************

function drawFisherGraph(ctx,graph)
{
	var F = (graph._z.vinter/graph._z.ninter)/(graph._z.vintra/graph._z.nintra)	
	var pvalue = Fspin(F,graph._z.ninter,graph._z.nintra)	

	var max = F;
	var pmax = pvalue;
	while(pmax>0.001)
		{
		max *= 1.1;
		pmax = Fspin(max,graph._z.ninter,graph._z.nintra);
		}

	ctx.fillStyle = "#000000";
	ctx.strokeStyle = "#000000";
	ctx.textAlign = "left"
	ctx.lineWidth = 1

	var y = graph.y+graph.hbar+80;


	ctx.fillText("Number of groups",graph.x+40,y);
	var ng = graph._z.ninter+1;
	ctx.fillText(""+ng,graph.x+240,y);

	y += 20;
	var no = graph._z.nintra+ng;
	ctx.fillText("Number of observations", graph.x+40,y);
	ctx.fillText(""+no, graph.x+240,y);

	y += 20;
	ctx.fillText("Degrees of freedom",graph.x+40,y);
	ctx.fillText(graph._z.ninter+" , "+graph._z.nintra,graph.x+240,y)

	y += 20;	
	var level = 0.05;
	var cv = Finv(0.0001,max,level,graph._z.ninter,graph._z.nintra);
	cv = Math.round(cv*10000)/10000;
	ctx.fillText("Critical value", graph.x+40,y);
	ctx.fillText(""+cv,graph.x+240,y);
	ctx.fillText("(\u03B1="+level+")",graph.x+360,y);
	
	y += 20;
	F = Math.round(F*10000)/10000;
	pvalue = Math.round(pvalue*10000)/10000;
	ctx.fillText("Test statistic F",graph.x+40,y);
	ctx.fillText(""+F,graph.x+240,y);
	ctx.fillText("(p="+pvalue+")",graph.x+360,y);

	y += 30;
	ctx.fillStyle= "#FF0000";
	if(pvalue<0.05)
		{
		ctx.fillText("At least one mean is different from the others",
			graph.x+40,y);
		ctx.fillText(quote(labels[graph.ilabel1])+" has influence on "+
			quote(values[graph.ivalue1]),graph.x+40,y+20);
		}
	else
		{
		ctx.fillText("All the means are equals",
			graph.x+40,y);
		ctx.fillText(quote(labels[graph.ilabel1])+" has no influence on "+
			quote(values[graph.ivalue1]),graph.x+40,y+20);
		}

	y += 20;
	ctx.fillStyle = "#000000";

	// draw fisher curve
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 1;
	ctx.beginPath();

	// max value along x
	
	var dy = 200;
	var dx = graph.w-40;
	var x = graph.x+20;	
	y += 220;

	var dmax = 0;
	for(var i=0;i<=100;i++)
		{
		var d = fisherdensity(max*i/100,graph._z.ninter,graph._z.nintra);
		if(d>dmax) dmax = d;
		}

	for(var i=0;i<=100;i++)
		{
		var d = fisherdensity(max*i/100,graph._z.ninter,graph._z.nintra);
		if(i==0)
			ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
		else
			ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
		}
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+dx,y);
	ctx.stroke();

	ctx.fillStyle = "#000000";
	var j = Math.round(cv*100/max);	

	ctx.beginPath();
	for(var i=j;i<=100;i++)
		{
		var d = fisherdensity(max*i/100,graph._z.ninter,graph._z.nintra);
		if(i==0)
			ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
		else
			ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
		}
	ctx.lineTo(x+dx,y);
	ctx.lineTo(x+dx*j/100,y);
	ctx.fill();

	ctx.textAlign = "center";
	ctx.fillText("F",x+dx*F/max,y+25);	
	ctx.beginPath();
	ctx.moveTo(x+dx*F/max,y+2);
	ctx.lineTo(x+dx*F/max,y+12);
	ctx.stroke();

	
}

//*********************************************************************

function drawBartlettGraph(ctx,graph)
{
	var level = 0.05;
	var dof = graph._z.ng-1;
	var max = Math.max(graph._z.cv,graph._z.t);
	max *= 1.1;
	var pvalue = chi2inv(0.01,max,graph._z.t,dof);
	pvalue = Math.round(pvalue*10000)/10000;

	ctx.fillStyle = "#000000";
	ctx.strokeStyle = "#000000";
	ctx.textAlign = "left"
	ctx.lineWidth = 1

	var y = graph.y+graph.hbar+80;
	var z;

	ctx.fillText("WARNING : this test is sensitive to departure from normality",
		graph.x+40,y);


	y += 30;
	ctx.fillText("Number of groups",graph.x+40,y);
	ctx.fillText(""+graph._z.ng,graph.x+240,y);

	y += 20;	
	ctx.fillText("Degrees of freedom",graph.x+40,y);
	ctx.fillText(""+dof,graph.x+240,y);

	y += 20;
	ctx.fillText("Critical value",graph.x+40,y);
	z = Math.round(graph._z.cv*10000)/10000;
	ctx.fillText(""+z,graph.x+240,y);
	ctx.fillText("(\u03B1="+level+")",graph.x+360,y);

	y += 20;	
	ctx.fillText("Test statistic T",graph.x+40,y);
	z = Math.round(graph._z.t*10000)/10000;
	ctx.fillText(""+z,graph.x+240,y);
	ctx.fillText("(p="+pvalue+")",graph.x+360,y);

	y += 40;
	ctx.fillStyle= "#FF0000";	
	if(isNaN(graph._z.t))
		{
		y += 40;
		}
	else if(graph._z.t>graph._z.cv)
		{
		ctx.fillText("At least one variance is different from the others",
			graph.x+40,y);
		ctx.fillText(quote(labels[graph.ilabel1])+" has influence on "+
			quote(values[graph.ivalue1]),graph.x+40,y+20);
		}
	else	
		{
		ctx.fillText("All the variances are equal",
			graph.x+40,y);
		ctx.fillText(quote(labels[graph.ilabel1])+" has no influence on "+
			quote(values[graph.ivalue1]),graph.x+40,y+20);	
		}

	y += 20;

	// draw chi2 curve
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 1;
	ctx.beginPath();

	var max = Math.max(critchi(0.001,graph._z.ng),graph._z.t);
	max = max*1.01;

	var dy = 200;
	var dx = graph.w-40;

	var x = graph.x+20;	
	y += 220;

	var dmax = 0;
	for(var i=0;i<=100;i++)
		{
		var d = chi2density(max*i/100,graph._z.ng);
		if(d>dmax) dmax = d;
		}

	for(var i=0;i<=100;i++)
		{
		var d = chi2density(max*i/100,graph._z.ng);
		if(i==0)
			ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
		else
			ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
		}
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+dx,y);
	ctx.stroke();

	ctx.fillStyle = "#000000";
	var j = Math.round(graph._z.cv*100/max);
	ctx.beginPath();
	for(var i=j;i<=100;i++)
		{
		var d = chi2density(max*i/100,graph._z.ng);
		if(i==0)
			ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
		else
			ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
		}
	ctx.lineTo(x+dx,y);
	ctx.lineTo(x+dx*j/100,y);
	ctx.fill();

	ctx.textAlign = "center";
	ctx.fillText("T",x+dx*graph._z.t/max,y+25);	
	ctx.beginPath();
	ctx.moveTo(x+dx*graph._z.t/max,y+2);
	ctx.lineTo(x+dx*graph._z.t/max,y+12);
	ctx.stroke();

}

//*********************************************************************

function drawLeveneGraph(ctx,graph)
{
	var level = 0.05;
	var w = graph._z.w;
	var dof1 = graph._z.ng-1;
	var dof2 = graph._z.nr-graph._z.ng;
	var pvalue = Fspin(w,dof1,dof2);

	var max = w;
	var pmax = pvalue;
	while(pmax>0.001)
		{
		max *= 1.1;
		pmax = Fspin(max,dof1,dof2);
		}

	ctx.fillStyle = "#000000";
	ctx.strokeStyle = "#000000";
	ctx.textAlign = "left"
	ctx.lineWidth = 1

	var y = graph.y+graph.hbar+80;


	ctx.fillText("Number of groups",graph.x+40,y);
	ctx.fillText(""+graph._z.ng,graph.x+240,y);

	y += 20;
	ctx.fillText("Number of observations", graph.x+40,y);
	ctx.fillText(""+graph._z.nr, graph.x+240,y);

	y += 20;
	ctx.fillText("Degrees of freedom",graph.x+40,y);
	ctx.fillText(dof1+" , "+dof2,graph.x+240,y)

	y += 20;	
	var level = 0.05;
	var cv = Finv(0.0001,max,level,dof1,dof2);
	cv = Math.round(cv*10000)/10000;
	ctx.fillText("Critical value", graph.x+40,y);
	ctx.fillText(""+cv,graph.x+240,y);
	ctx.fillText("(\u03B1="+level+")",graph.x+360,y);
	
	y += 20;
	w = Math.round(w*10000)/10000;
	pvalue = Math.round(pvalue*10000)/10000;
	ctx.fillText("Test statistic W",graph.x+40,y);
	ctx.fillText(""+w,graph.x+240,y);
	ctx.fillText("(p="+pvalue+")",graph.x+360,y);

	y += 30;
	ctx.fillStyle= "#FF0000";
	if(pvalue<0.05)
		{
		ctx.fillText("At least one variance is different from the others",
			graph.x+40,y);
		ctx.fillText(quote(labels[graph.ilabel1])+" has influence on "+
			quote(values[graph.ivalue1]),graph.x+40,y+20);
		}
	else
		{
		ctx.fillText("All the variances are equals",
			graph.x+40,y);
		ctx.fillText(quote(labels[graph.ilabel1])+" has no influence on "+
			quote(values[graph.ivalue1]),graph.x+40,y+20);
		}

	y += 20;
	ctx.fillStyle = "#000000";

	// draw fisher curve
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 1;
	ctx.beginPath();

	// max value along x
	
	var dy = 200;
	var dx = graph.w-40;
	var x = graph.x+20;	
	y += 220;

	var dmax = 0;
	for(var i=0;i<=100;i++)
		{
		var d = fisherdensity(max*i/100,dof1,dof2);
		if(d>dmax) dmax = d;
		}

	for(var i=0;i<=100;i++)
		{
		var d = fisherdensity(max*i/100,dof1,dof2);
		if(i==0)
			ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
		else
			ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
		}
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+dx,y);
	ctx.stroke();

	ctx.fillStyle = "#000000";
	var j = Math.round(cv*100/max);	

	ctx.beginPath();
	for(var i=j;i<=100;i++)
		{
		var d = fisherdensity(max*i/100,dof1,dof2);
		if(i==0)
			ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
		else
			ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
		}
	ctx.lineTo(x+dx,y);
	ctx.lineTo(x+dx*j/100,y);
	ctx.fill();

	ctx.textAlign = "center";
	ctx.fillText("W",x+dx*w/max,y+25);	
	ctx.beginPath();
	ctx.moveTo(x+dx*w/max,y+2);
	ctx.lineTo(x+dx*w/max,y+12);
	ctx.stroke();

	
}

//*********************************************************************

function dragTestGraph(graph)
{
if(faction==SELECT_TEST)
	{
	selectMenuItem(ptmove,graph,MENU.TEST)
	}
}

//*********************************************************************
//
//                REGRES
//
//*********************************************************************


function computeRegresData(graph)
{

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
var n1 = graph.ivalues.length;
var n2 = nr - n1 -1;

// critical value
var cv = Finv(0.0001,10*r2,0.05,n1,n2);

graph._z.sce = sce;
graph._z.sct = sct;
graph._z.scr = scr;
graph._z.nr = nr;
graph._z.a = A;
graph._z.d = D;
graph._z.cv = cv;
}

//*********************************************************************

function drawRegresIcon(ctx,x,y)
	{
	var font = ctx.font;
	ctx.font = "18px helvetica";
	ctx.fillStyle = "#000000";
	ctx.fillText("R",x+10,y+17);
	ctx.font = font;
	}

//*********************************************************************

function drawRegresGraph(ctx,graph)
{
try	{
if((graph.ivalues.length>0)&&(graph.ivalue1>=0))
	{
	ctx.save();
	ctx.translate(0,-graph.yshift);

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
	ctx.fillText("DoF",graph.x+350,y);

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
	ctx.fillText("Determination coef R\u00B2",graph.x+30,y);
	ctx.textAlign = "right";
	ctx.fillText(trunc(r2,4),graph.x+260,y);

	var sigma = Math.sqrt(graph._z.scr/(graph._z.nr-graph.ivalues.length-1));
	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Error \u03C3",graph.x+30,y);
	ctx.textAlign = "right";
	ctx.fillText(trunc(sigma,4),graph.x+260,y);	

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Critical value",graph.x+30,y);
	ctx.textAlign = "right"
	ctx.fillText(trunc(graph._z.cv,4),graph.x+260,y);
	ctx.fillText("(\u03B1="+0.05+")",graph.x+350,y);

	var n1 = graph.ivalues.length;
	var n2 = graph._z.nr - n1 -1;
	var ftest = (r2/graph.ivalues.length)/((1-r2)/(graph._z.nr-graph.ivalues.length-1));
	var pvalue = Fspin(ftest,n1,n2);

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Test-F ("+n1+","+n2+")",graph.x+30,y);
	ctx.textAlign = "right"
	ctx.fillText(trunc(ftest,4),graph.x+260,y);
	ctx.fillText("(p="+trunc(pvalue,4)+")",graph.x+350,y);

	y += 30;
	ctx.textAlign = "left";
	ctx.fillStyle = "#FF0000";
	if(pvalue<0.05)
		ctx.fillText(quote(values[graph.ivalue1])+" is dependent of attributes",graph.x+30,y);
	else
		ctx.fillText(quote(values[graph.ivalue1])+" is not dependent of attributes",graph.x+30,y);

	ctx.restore();
	}
}
catch(err) { console.log(""+err) }

ctx.textAlign = "center";

}

//*********************************************************************

function buildRegresTable(graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalues.length<1) return;

setTableName("Regression of "+values[graph.ivalue1]);

var row = 1;
var sigma = Math.sqrt(graph._z.scr/(graph._z.nr-graph.ivalues.length-1));

table(row,1,"Attribute");
table(row,2,"Coefficient");
table(row,3,"Std dev.");

row++;
table(row,2,round(graph._z.a[0]));
var std = Math.sqrt(graph._z.d[0]*sigma*sigma);
table(row,3,round(std));

for(var i=0;i<graph.ivalues.length;i++)
	{
	row++;
	table(row,1,values[graph.ivalues[i]]);
	table(row,2,round(graph._z.a[i+1]));
	var std = Math.sqrt(graph._z.d[i+1]*sigma*sigma);
	table(row,3,round(std));
	}

row += 2;
table(row,1,"Source");
table(row,2,"Sum of squares");
table(row,3,"DoF");

row++;
table(row,1,"Regression");
table(row,2,round(graph._z.sce));
table(row,3,graph.ivalues.length);

var scr = graph._z.sct - graph._z.sce;
row++;
table(row,1,"Residuals");
table(row,2,round(scr));
table(row,3,graph._z.nr-graph.ivalues.length-1);

row++;
table(row,1,"Total");
table(row,2,round(graph._z.sct));
table(row,3,graph._z.nr-1);

}


	function round(value)
	{
	return Math.round(value*10000)/10000;
	}

//*********************************************************************

function downRegresGraph(pt,graph)
{
if(graph.ivalues.length==0) return -1;

var y = graph.y + 160 + graph.ivalues.length*20 - graph.yshift;
if(inRect(pt,graph.x+350,y-17,20,20)) 
	{
	valueindex = 1;
	return DRAG_AXIS;
	}

if(inRect(pt,graph.x+350,y+10,20,20)) 	
	{
	valueindex = 2;
	return DRAG_AXIS;
	}

return -1;

}

//*********************************************************************
//
//                BOX
//
//*********************************************************************


function inBoxSlice(pt,graph)
{
if(graph.ilabel1<0) return -1;
if(graph.ivalues.length==0) return -1;

if(!inRect(pt,graph.x,graph.y+graph.hbar,graph.w,graph.h-graph.hbar)) return -1;

var dv = (graph.h-graph.hbar-20)/graph._z.keys.length;
var j = Math.floor((ptmove.y-graph.y-graph.hbar-20)/dv);
if(j>=graph._z.keys.length) j = graph._z.keys.length-1;

return j;

}

//*********************************************************************

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
var max = -Number.MAX_VALUE;

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

}

//*********************************************************************

function moveBoxGraph(ptmove,graph)
{
if(graph.type!=TYPE.BOX) return false;
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

//*********************************************************************

function drawBoxIcon(ctx,x,y)
	{
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

//*********************************************************************

function drawBoxGraph(ctx,graph)
{
if((graph.ilabel1>=0)&&(graph.ivalue1>=0))
	{
	var min = graph._z.min;
	var max = graph._z.max;

	var dv = (graph.h-graph.hbar-25)/graph._z.keys.length;
	if(dv<6) dv = 6;
	var idv = Math.floor(dv);

	ctx.strokeStyle = "#000000";
	ctx.fillStyle = getColor(frac(graph.hue),1,1)
			

	var y = graph.y+graph.hbar+25;

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

}

//*********************************************************************
//
//                PARA
//
//*********************************************************************


function computeParaData(graph)
{

if(graph.ivalues.length<2) return;

var min = [];
var max = [];
for(var j=0;j<graph.ivalues.length;j++)
	{
	min.push(Number.MAX_VALUE);
	max.push(-Number.MAX_VALUE);
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

//*********************************************************************

function drawParaIcon(ctx,x,y)
	{
	ctx.strokeStyle = "#000000";
	ctx.beginPath();

	var xx = [5,3,8,4,6,4];
	ctx.moveTo(x+2,y+xx[0]);
	for(var i=1;i<xx.length;i++)
		ctx.lineTo(x+2+3*i,y+xx[i]);

	xx = [5,6,11,7,10,14];
	ctx.moveTo(x+2,y+xx[0]);
	for(var i=1;i<xx.length;i++)
		ctx.lineTo(x+2+3*i,y+xx[i]);

	xx = [8,10,15,13,14,8];
	ctx.moveTo(x+2,y+xx[0]);
	for(var i=1;i<xx.length;i++)
		ctx.lineTo(x+2+3*i,y+xx[i]);


	xx = [17,13,18,12,17,12];
	ctx.moveTo(x+2,y+xx[0]);
	for(var i=1;i<xx.length;i++)
		ctx.lineTo(x+2+3*i,y+xx[i]);

	ctx.stroke();
	}

//*********************************************************************

function drawParaGraph(ctx,graph)
{
if(graph.ivalues.length>=2)
	{
	var min = graph._z.min;
	var max = graph._z.max;

	var xleft = graph.x +30;
	var xright = graph.x+ graph.w -110;
	var w = xright-xleft;
	var dx = w/(graph.ivalues.length-1);

	var ytop = graph.y + graph.hbar +10;	
	var ybottom = graph.y + graph.h -10;
	var h = ybottom-ytop;
	var dy = h/(graph.ivalues.length-1);

	var option = graph.option %2;

	
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
			var x = option==0 ? xleft+dx*j : xleft+w*(v-min[j])/(max[j]-min[j]);
			var y = option==0 ? ybottom-h*(v-min[j])/(max[j]-min[j]) : ytop +dy*j;
			if(j==0)
				ctx.moveTo(x,y);
			else
				ctx.lineTo(x,y);
			}	
		ctx.stroke();
		}

	if(overlabel1>=0)
		{
		ctx.lineWidth = 3;

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
				var x = option==0 ? xleft+dx*j : xleft+w*(v-min[j])/(max[j]-min[j]);
				var y = option==0 ? ybottom-h*(v-min[j])/(max[j]-min[j]) : ytop +dy*j;
				if(j==0)
					ctx.moveTo(x,y);
				else
					ctx.lineTo(x,y);
				}	
			ctx.stroke();
			}

		ctx.lineWidth = 1;
		}


	}

}


//*********************************************************************
//
//                CANON
//
//*********************************************************************

function drawCanonIcon(ctx,x,y)
{
ctx.strokeStyle = "#000000";
ctx.beginPath();
ctx.moveTo(x+3,y+18);
ctx.lineTo(x+5,y+4);
ctx.moveTo(x+3,y+18);
ctx.lineTo(x+8,y+7);
ctx.moveTo(x+3,y+18);
ctx.lineTo(x+17,y+17);
ctx.moveTo(x+3,y+18);
ctx.lineTo(x+16,y+13);
ctx.stroke();

ctx.fillStyle = "#000000";
ctx.fillRect(x+5,y+4,2,2);
ctx.fillRect(x+8,y+7,2,2);
ctx.fillRect(x+17,y+16,2,2);
ctx.fillRect(x+16,y+12,2,2);
}

//*********************************************************************

function computeCanonData(graph)
{
try {
if(graph.ivalues.length<2) return;
if(graph.jvalues.length<2) return;


var ni = graph.ivalues.length;
var nj = graph.jvalues.length;

computeCorrelationMatrix(graph,graph.ivalues,graph.ivalues);
var A = powerM(copyM(graph._z.corr),-0.5);
var E = powerM(copyM(graph._z.corr),-1);

computeCorrelationMatrix(graph,graph.ivalues,graph.jvalues);
var B = graph._z.corr;

computeCorrelationMatrix(graph,graph.jvalues,graph.jvalues);
var C = powerM(copyM(graph._z.corr),-1);
var F = powerM(copyM(graph._z.corr),-0.5);

computeCorrelationMatrix(graph,graph.jvalues,graph.ivalues);
var D = graph._z.corr;


// first set
var M = multMM(A,multMM(B,multMM(C,multMM(D,A))));
var d = vector(ni);
var e = vector(ni);
tred(M,d,e,ni);
tql2(M,d,e,ni);

graph._z.lambda1 = d;

var c = vector(ni);
for(var i=0;i<ni;i++)
	c[i] = M[i][0];
var a1 = multMV(A,c);

for(var i=0;i<ni;i++)
	c[i] = M[i][1];
var a2 = multMV(A,c);

//   second set 
var M = multMM(F,multMM(D,multMM(E,multMM(B,F))));
d = vector(nj);
e = vector(nj);
tred(M,d,e,nj);
tql2(M,d,e,nj);

graph._z.lambda2 = d;

var f = vector(nj);
for(var i=0;i<nj;i++)
	f[i]= M[i][0];
var b1 = multMV(F,f);

for(var i=0;i<nj;i++)
	f[i] = M[i][1];
var b2 = multMV(F,f);


// release matrices
A = B = C = D = E = F = M = null;

// means and std of the original variables
var sumi = vector(ni);
var sumii = vector(ni);
var sumj = vector(nj);
var sumjj = vector(nj);
var nr = 0;
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	for(var j=0;j<ni;j++)
		{
		var v = vrecords[i][graph.ivalues[j]];
		sumi[j] += v;
		sumii[j] += v*v;
		}
	for(var j=0;j<nj;j++)
		{
		var v = vrecords[i][graph.jvalues[j]];
		sumj[j] += v;
		sumjj[j] += v*v;
		}
	nr++;
	}

for(var j=0;j<ni;j++)
	{
	sumi[j] = sumi[j]/nr;
	sumii[j] = Math.sqrt((sumii[j]-sumi[j]*sumi[j]*nr)/nr);
	}

for(var j=0;j<nj;j++)
	{
	sumj[j] = sumj[j]/nr;
	sumjj[j] = Math.sqrt((sumjj[j]-sumj[j]*sumj[j]*nr)/nr);
	}

// canonical factors
var x,y;
var xfactor1 = new Array(vrecord.length);	// first factor of set 1
var yfactor1 = new Array(vrecord.length);	// second factor of set 1
var xfactor2 = new Array(vrecord.length);	// first factor of set 2
var yfactor2 = new Array(vrecord.length);	// second factor of set 2

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	x = y = 0;
	for(var j=0;j<ni;j++)
		{
		x += (vrecords[i][graph.ivalues[j]]-sumi[j])/sumii[j]*a1[j];
		y += (vrecords[i][graph.ivalues[j]]-sumi[j])/sumii[j]*a2[j];
		}
	xfactor1[i] = x;
	yfactor1[i] = y;
	
	x = y = 0;
	for(var j=0;j<nj;j++)
		{
		x += (vrecords[i][graph.jvalues[j]]-sumj[j])/sumjj[j]*b1[j];		
		y += (vrecords[i][graph.jvalues[j]]-sumj[j])/sumjj[j]*b2[j];
		}
	xfactor2[i] = x;
	yfactor2[i] = y;
	}

graph._z.xfactor1 = xfactor1;
graph._z.yfactor1 = yfactor1;

graph._z.xfactor2 = xfactor2;
graph._z.yfactor2 = yfactor2;

// correlations of original variables with factors

graph._z.xcorri1 = corr(graph.ivalues,xfactor1);
graph._z.ycorri1 = corr(graph.ivalues,yfactor1);
graph._z.xcorri2 = corr(graph.ivalues,xfactor2);
graph._z.ycorri2 = corr(graph.ivalues,yfactor2);

graph._z.xcorrj1 = corr(graph.jvalues,xfactor1);
graph._z.ycorrj1 = corr(graph.jvalues,yfactor1);
graph._z.xcorrj2 = corr(graph.jvalues,xfactor2);
graph._z.ycorrj2 = corr(graph.jvalues,yfactor2);

if(graph.ilabel1>=0)
	computeGraphData1(graph);

} catch(e) { console.log("compute err "+e) }

	function corr(indices,factor)
	{
	var nv = indices.length;
	var sumx = 0;
	var sumxx = 0;
	var sumv = vector(nv);
	var sumvv = vector(nv);
	var sumxv = vector(nv);
	var nr = 0;
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		nr++;		
		sumx += factor[i];
		sumxx += factor[i]*factor[i];
		for(var j=0;j<nv;j++)
			{
			var v = vrecords[i][indices[j]];
			sumv[j] += v;
			sumvv[j] += v*v;
			sumxv[j] += v*factor[i];
			}
		}

	if(nr==0) nr =1;

	for(var j=0;j<nv;j++)
		{
		var den=Math.sqrt((nr*sumxx-sumx*sumx)*(nr*sumvv[j]-sumv[j]*sumv[j]));
		sumxv[j] = (nr*sumxv[j]-sumx*sumv[j])/den;
		}

	return sumxv;
	}

	function cc(a,b)
	{	
	var nr = 0;
	var suma = 0;
	var sumb = 0;
	var sumaa = 0;
	var sumbb = 0;
	var sumab = 0;
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		nr++;
		suma += a[i];
		sumb += b[i];
		sumaa += a[i]*a[i];
		sumbb += b[i]*b[i];
		sumab += a[i]*b[i];
		}
	if(nr==0) nr=1;
	suma = suma/nr;
	sumb = sumb/nr;
	sumaa = Math.sqrt((sumaa-suma*suma*nr)/nr);
	sumbb = Math.sqrt((sumbb-sumb*sumb*nr)/nr);
	sumab = (sumab-nr*suma*sumb)/(sumaa*sumbb*nr);
	return sumab;
	}

}

//*********************************************************************

function drawCanonGraph(ctx,graph)
{
var font = ctx.font;

if((graph.ivalues.length>=2)&&(graph.jvalues.length>=2))
	{
	var xleft = graph.x+10;
	var xright= graph.x+graph.w-100;
	var ytop = graph.y+graph.hbar+10;
	var ybottom = graph.y+graph.h-10;	

	var option = graph.option%5;

	if(option==0)
		drawCanonGraphXY(ctx,graph,graph._z.xfactor1,graph._z.yfactor1);

	if(option==1)
		drawCanonGraphXY(ctx,graph,graph._z.xfactor2,graph._z.yfactor2);
	
	if(option==2)
		drawCanonGraphCircle(ctx,graph,
			graph._z.xcorri1,graph._z.ycorri1,graph.ivalues,
			graph._z.xcorrj1,graph._z.ycorrj1,graph.jvalues);

	if(option==3)
		drawCanonGraphCircle(ctx,graph,
			graph._z.xcorri2,graph._z.ycorri2,graph.ivalues,
			graph._z.xcorrj2,graph._z.ycorrj2,graph.jvalues);
		
	if(option==4)
		drawCanonGraphLambda(ctx,graph,graph._z.lambda1);
	}

ctx.textAlign = "center"
ctx.font = font;


}

//*********************************************************************

function drawCanonGraphXY(ctx,graph,xproj,yproj)
{
if(!xproj) return;

ctx.save();

var display = getGraphDisplay(graph);

var xleft = graph.x+10;
var xright = graph.x+graph.w-110;
var ytop = graph.y+graph.hbar+10;
var ybottom = graph.y+graph.h-10;

var xmin = Number.MAX_VALUE;
var xmax = -Number.MAX_VALUE;
var ymin = Number.MAX_VALUE;
var ymax = -Number.MAX_VALUE;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	if(xproj[i]<xmin) xmin = xproj[i];
	if(xproj[i]>xmax) xmax = xproj[i];

	if(yproj[i]<ymin) ymin = yproj[i];
	if(yproj[i]>ymax) ymax = yproj[i];
	}

var xscale = (xright-xleft)/(xmax-xmin);
var yscale = (ybottom-ytop)/(ymax-ymin);

ctx.textAlign = "center";
ctx.font = "9px helvetica";

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	var x = Math.round(xleft+(xproj[i]-xmin)*xscale);
	var y = Math.round(ybottom-(yproj[i]-ymin)*yscale);	
	
	if(graph.ilabel1<0)
		ctx.fillStyle = "#000000";
	else
		ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]];

	if(display<0)
		ctx.fillRect(x-2,y-2,5,5);
	else
		ctx.fillText(lrecords[i][display],x,y+3)
	}

if(overlabel1>=0)
	{
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		if(!recordHilite(lrecords[i])) continue

		var x = Math.round(xleft+(xproj[i]-xmin)*xscale);
		var y = Math.round(ybottom-(yproj[i]-ymin)*yscale);	
		
		if(display<0)
			{
			ctx.fillStyle = "#000000";
			ctx.fillRect(x-3,y-3,7,7);
			}
		else
			{
			ctx.fillStyle = "#000000";
			var l = ctx.measureText(lrecords[i][display]).width;
			ctx.fillRect(x-l/2-5,y-6,l+10,12);
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText(lrecords[i][display],x,y+3)
			}
		}
	}

ctx.restore();
}

//*********************************************************************

function drawCanonGraphCircle(ctx,graph,xi,yi,indi,xj,yj,indj)
{
var xleft = graph.x+10;
var xright = graph.x+graph.w-110;
var ytop = graph.y + graph.hbar+10;
var ybottom = graph.y + graph.h -10;

var rad = Math.min((xright-xleft)/2,(ybottom-ytop)/2);
var xc = xleft+ (xright-xleft)/2;
var yc = ytop + (ybottom-ytop)/2;

ctx.save();

ctx.strokeStyle = "#888888";
ctx.beginPath();
ctx.arc(xc,yc,rad,0,Math.PI*2,false);
ctx.stroke();

ctx.strokeStyle = "#FF0000";
ctx.beginPath();
for(var i=0;i<xi.length;i++)
	{
	var x = xc + rad*xi[i];
	var y = yc - rad*yi[i];
	ctx.moveTo(xc,yc);
	ctx.lineTo(x,y);
	}
ctx.stroke();

ctx.strokeStyle = "#0000FF";
ctx.beginPath();
for(var i=0;i<xj.length;i++)
	{	
	var x = xc + rad*xj[i];
	var y = yc - rad*yj[i];
	ctx.moveTo(xc,yc);		
	ctx.lineTo(x,y);
	}
ctx.stroke();

ctx.textAlign = "center";
ctx.font = "9px helvetica";
ctx.fillStyle = "#FF0000";
for(var i=0;i<xi.length;i++)
	{
	var x = xc + rad*xi[i];
	var y = yc - rad*yi[i];
	ctx.fillText(values[indi[i]],x,y+3);
	}

ctx.fillStyle = "#0000FF";
for(var i=0;i<xj.length;i++)
	{
	var x = xc+rad*xj[i];
	var y = yc-rad*yj[i];
	ctx.fillText(values[indj[i]],x,y+3);
	}

ctx.restore();
}

//*********************************************************************

function drawCanonGraphLambda(ctx,graph,lambda)
{
if(!lambda) return;


var xleft = graph.x+30;
var xright = graph.x+graph.w-110;
var ytop = graph.y+graph.hbar+10;
var ybottom = graph.y+graph.h-10;

var min = Number.MAX_VALUE;
var max = -Number.MAX_VALUE;

var n = lambda.length;
var dx = (xright-xleft)/n;

ctx.fillStyle = "#008800";
ctx.strokeStyle = "#000000";

for(var i=0;i<n;i++)
	{
	var l = Math.sqrt(lambda[i]);
	var x = xleft+i*dx;
	var dy = (ybottom-ytop)*l;
	ctx.fillRect(x,ybottom-dy,dx-2,dy);
	ctx.strokeRect(x,ybottom-dy,dx-2,dy);
	}

ctx.fillStyle = "#000000";
ctx.textAlign = "right";
for(var i=0;i<=10;i++)
	{
	var t = (i/10)+"";
	var y = ybottom-(ybottom-ytop)*i/10;
	ctx.fillText(t,xleft-5,y+4);
	}

}


//*********************************************************************
//
//                PALETTE
//
//*********************************************************************


function drawPaletteIcon(ctx,x,y)
	{
	for(var k=0;k<25;k++)
		{
		var xx = x+3+(k%5)*3
		var yy = y+3+Math.floor(k/5)*3
		var zz = Math.floor(k*255/24)
		ctx.fillStyle = TINTS[k]
		ctx.fillRect(xx,yy,2,2)
		}
	}

//*********************************************************************

function drawPaletteGraph(ctx,graph)
{
var dx = (graph.w-2)/6;
var dy = (graph.h-graph.hbar-2)/6;

for(var i=0;i<6;i++)
	for(var j=0;j<6;j++)
		{
		var x = graph.x + 2 +i*dx
		var y = graph.y + graph.hbar + 2 + j*dy
		var hue = (6*j+i)/36;
		ctx.fillStyle = getColor(hue,1,1)
		ctx.fillRect(x,y,dx-2,dy-2)
		ctx.strokeStyle = "#000000"
		ctx.strokeRect(x,y,dx-2,dy-2)
		}
}

//*********************************************************************

function movePaletteGraph(pt,graph)
{
message = "";
return true;
}


//*********************************************************************
//
//                TABLE
//
//*********************************************************************

var _table = {};
var _tableName = "";

//*********************************************************************

function initTable()
{
_table =  {};
_tableName = "";
}

//*********************************************************************

function table(lin,col,value)
{
if(isNaN(lin)) { console.log("TABLE ERR LIN="+lin+" "+value) ; return; }
if(isNaN(col)) { console.log("TABLE ERR COL="+col+" "+value) ; return; }
if(lin<=0) { console.log("TABLE ERR LIN="+lin+" "+value) ; return; }
if(col<=0) { console.log("TABLE ERR COL="+col+" "+value) ; return; }
if(lin>1000) return;
if(col>1000) return;

if(!(lin in _table)) _table[lin] = {};
_table[lin][col] = value;
}

//*********************************************************************

function setTableName(name)
{
_tableName = name;
}

//*********************************************************************

function getTableName()
{
return _tableName;
}

//*********************************************************************

function getTableHtml()
{
var maxlin = 0;
var maxcol = 0;
for(var xlin in _table)
	{
	var lin = Number(xlin);	
	if(lin>maxlin) maxlin = lin;
	for(var xcol in _table[lin])
		{	
		var col = Number(xcol);
		if(col>maxcol) maxcol = col;
		}
	}

if(maxlin==0) return null;

var t = "";
t += "<table border='0' cellspacing='0'>";
for(var lin=1;lin<=maxlin;lin++)
	{	
	if(lin in _table)
		{
		t += "<tr>";
		for(var col=1;col<=maxcol;col++)
			if(!(col in _table[lin]))
				t += "<td>&nbsp;</td>";
			else if(typeof(_table[lin][col])=="number")
				t += "<td align='right'>"+_table[lin][col]+"</td>";
			else
				t += "<td >"+_table[lin][col]+"</td>";
		t += "</tr>";
		}
	else
		{
		t += "<tr>";
		for(var col=1;col<=maxcol;col++)
			t += "<td>&nbsp;</td>"
		t += "</tr>";
		}
	}

t += "</table>";

return t;
}

//*********************************************************************
//
//                
//
//*********************************************************************

function closeGraph(index)
{
var graph = graphs[index];
if(graph.timerid)
	clearTimeout(graph.timerid);

graphs.splice(index,1);
}

//*********************************************************************

function frac(x)
{
return x - Math.floor(x)
}

//*********************************************************************

function setAxis1(graph,keys)
{
graph.omit = {}
graph.use1 = {}
for(var i=0;i<keys.length;i++)
	graph.use1[keys[i]] = 1
}

//*********************************************************************

function setAxis2(graph,keys)
{
graph.use2 = {}
for(var i=0;i<keys.length;i++)
	graph.use2[keys[i]] = 1
}

//*********************************************************************

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

//*********************************************************************

function computeGraphData(graph)
{
clearSpecific(graph)
graph.ncontour = 0
graph.contour = null

graph.xshift = 0
graph.yshift = 0

if(graph.type==TYPE.TREE)	
	computeTreeData(graph)
else if(graph.type==TYPE.FAC)	
	computeFacData(graph);
else if(graph.type>=NBTYPE1)
	computePlotData(graph)
else if(graph.ilabel2<0)
	computeGraphData1(graph)
else if(graph.ilabel3<0)
	computeGraphData2(graph)
else
	computeGraphData3(graph)
}

//*********************************************************************

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

//*********************************************************************

function computePlotData(graph)
{
graph._z = {}

graph._z.cursor = 0

graph._z.xmin = Number.MAX_VALUE;
graph._z.xmax = -Number.MAX_VALUE;
graph._z.ymin = Number.MAX_VALUE;
graph._z.ymax = -Number.MAX_VALUE;
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
	GINFO[graph.type].comp(graph);
	} catch(err) { console.log(err) }

}

//*********************************************************************

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

//*********************************************************************

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
if((graph.type!=TYPE.PIE)&&(graph.type!=TYPE.ACP)&&(graph.type!=TYPE.SCATTER))
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
if(graph.type!=TYPE.PIE)
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

//*********************************************************************

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

	if(!(key1 in graph._count))
		graph._count[key1] = 0;

	if(graph.iunit==0)
		graph._count[key1]++;
	else
		graph._count[key1] += vrecords[i][graph.unit];

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
	var t = key.split("\t");
	if(t.length<2) continue;
	var key1 = t[0];
	if(!(key1 in graph.omit))
		graph.total += graph._count[key]
	}
if(graph.total==0)
	graph.total = 1

// compute specific data
GINFO[graph.type].comp(graph);

}

//*********************************************************************

function computeGraphData3(graph)
{
console.log("computeGraphData3");

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

// compute specific data
GINFO[graph.type].comp(graph);

}

//*********************************************************************

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

//*********************************************************************

function vector(n)
{
var vec = new Array(n)
for(var i=0;i<n;i++)
	vec[i] = 0
return vec
}

//*********************************************************************

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

//*********************************************************************

function copyM(M)
{
var n1 = M.length;
var n2 = M[0].length;
var R = matrix(n1,n2);
for(var i=0;i<n1;i++)
	for(var j=0;j<n2;j++)
		R[i][j] = M[i][j];
return R;
}

//*********************************************************************

function diagM(V)
{
var n = V.length;
var M = matrix(n,n);
for(var i=0;i<n;i++)
	M[i][i] = V[i];
return M;
}

//*********************************************************************

function normV(V)
{
var s = 0;
for(var i=0;i<V.length;i++)
	s += V[i]*V[i];
return Math.sqrt(s);
}

//*********************************************************************

function transpM(M)
{
var n1 = M.length;
var n2 = M[0].length;
var R = matrix(n2,n1);
for(var i=0;i<n1;i++)
	for(var j=0;j<n2;j++)
		R[j][i] = M[i][j];
return R;
}

//*********************************************************************

function colM(M,col)
{
var n = M.length;
var V = new Array(n);
for(var i=0;i<n;i++)
	V[i] = M[i][col];
return V;
}

//*********************************************************************

function powerM(M,p)
{
// WARNING : M must be symmetric !!!
var n = M.length;
var d = new Array(n);
var e = new Array(n);
tred(M,d,e,n);
tql2(M,d,e,n);

// M contains eigenvectors
// d contains eigen values

var D = diagM(d);

for(var i=0;i<n;i++)
	D[i][i] = Math.pow(D[i][i],p);

return  multMM(multMM(M,D),transpM(M));
}

//*********************************************************************

function multVV(A,B)
{
var na = A.length;
var nb = B.length;
if(na!=nb) return null;
var r = 0;
for(var i=0;i<na;i++)
	r += A[i]*B[i];
return r;
}

//*********************************************************************

function multMV(M,V)
{
var n1 = M.length;
var n2 = M[0].length;
var n3 = V.length;
if(n2!=n3) return null;

var R = vector(n1);
for(var i=0;i<n1;i++)
	{
	for(var j=0;j<n2;j++)
			R[i] += M[i][j]*V[j];
	}
return R;
}

//*********************************************************************

function multVM(V,M)
{
var n1 = V.length;
var n2 = M.length;
var n3 = M[0].length;
if(n1!=n2) return null;

var R = vector(n3);
for(var i=0;i<n3;i++)
	{
	for(var j=0;j<n1;j++)
		R[i] += V[j]*M[j][i];
	}
return R;
}

//*********************************************************************

function multMM(A,B)
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

//*********************************************************************

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

//*********************************************************************

function normalize(A)
{
var norm = 0
for(var i=0;i<A.length;i++)
	norm += A[i]*A[i]

if(norm==0) norm = 1
for(var i=0;i<A.length;i++)
	A[i] = A[i]/norm
}

//*********************************************************************

function euclidian(A,B)
{
var n = A.length
var d = 0
for(var k=0;k<n;k++)
	d += (A[k]-B[k])*(A[k]-B[k])
return d
}

//*********************************************************************

function topodist(i1,j1,i2,j2)
{
if((i1==i2)&&(j1==j2))
	return 999999
else
	return Math.max(Math.abs(i1-i2),Math.abs(j1-j2))
}

//*********************************************************************

function hypot(x,y)
{
return Math.sqrt(x*x+y*y)
}

//*********************************************************************

function alternateIndex(i,n)
{
var n2 = Math.floor((n+1)/2)
var j = Math.floor(i/2)
return (i%2==0) ? j : (n2+j)
}

//*********************************************************************

function createProjectionValue(graph,index)
{


if(graph.type==TYPE.ACP)
	{
	values.push("PCA_"+values.length)

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

if(graph.type==TYPE.DISCRI)
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

if(graph.type==TYPE.REGRES)
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

//*********************************************************************

function swapLabel(graph,namei,namej)
{
var i = GINFO[graph.type][namei];
var j = GINFO[graph.type][namej];

var temp;
temp  = graph["ilabel"+i];
graph["ilabel"+i] = graph["ilabel"+j];
graph["ilabel"+j] = temp;

temp = graph["_keys"+i];
graph["_keys"+i] = graph["_keys"+j];
graph["_keys"+j] = temp;

temp = graph["use"+i];
graph["use"+i] = graph["use"+j];
graph["use"+j] = temp;

computeGraphData(graph)
}

//*********************************************************************

function swapLabeln(graph)
{
if(labelindex==destlabelindex) return;

var temp = graph.ilabels[labelindex]
graph.ilabels[labelindex] = graph.ilabels[destlabelindex]
graph.ilabels[destlabelindex] = temp

if(graph._keys)
	{
	temp = graph._keys[labelindex]
	graph._keys[labelindex] = graph._keys[destlabelindex]
	graph._keys[destlabelindex] = temp
	}

computeGraphData(graph);
}

//*********************************************************************

function swapValue(graph,namei,namej)
{
var i = GINFO[graph.type][namei];
var j = GINFO[graph.type][namej];

var temp = graph["ivalue"+i];
graph["ivalue"+i] = graph["ivalue"+j];
graph["ivalue"+j] = temp;

computeGraphData(graph);
}

//*********************************************************************

function swapValuei(graph)
{
var temp = graph.ivalues[valueindex]
graph.ivalues[valueindex] = graph.ivalues[destvalueindex]
graph.ivalues[destvalueindex] = temp

computeGraphData(graph);
}

//*********************************************************************

function swapValuej(graph)
{
var temp = graph.jvalues[valueindex];
graph.jvalues[valueindex ] = graph.jvalues[destvalueindex];
graph.jvalues[destvalueindex] = temp;

computeGraphData(graph);
}

//*********************************************************************

function swapValueji(graph)
{
var temp = graph.jvalues[valueindex];
if(destvalueindex<graph.ivalues.length)
	{
	// swap
	graph.jvalues[valueindex] = graph.ivalues[destvalueindex];
	graph.ivalues[destvalueindex ] = temp;
	}
else
	{
	// add
	graph.jvalues.splice(valueindex,1);
	graph.ivalues.push(temp);
	}

computeGraphData(graph);
}

//*********************************************************************

function swapValueij(graph)
{
var temp = graph.ivalues[valueindex];
if(destvalueindex<graph.jvalues.length)
	{
	// swap
	graph.ivalues[valueindex] = graph.jvalues[destvalueindex];
	graph.jvalues[destvalueindex] = temp;
	}
else
	{
	// add
	graph.ivalues.splice(valueindex,1);
	graph.jvalues.push(temp);
	}

computeGraphData(graph);
}

//*********************************************************************

function indexIn(value,table)
{
for(var i=0;i<table.length;i++)
	if(table[i]==value)	
		return i
return -1
}

//*********************************************************************

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

//*********************************************************************

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
	if(graphs[i].ilabels)
		for(var j=0;j<graphs[i].ilabels.length;j++)
			if(graphs[i].ilabels[j]>index)
				graphs[i].ilabels[j] -=1;
	}

if(labels.length==0)
	createDummyLabel();
}

//*********************************************************************

function removeValue(index)
{

for(var i=0;i<vrecords.length;i++)
	vrecords[i].splice(index,1);	

values.splice(index,1);

for(var i=0;i<graphs.length;i++)
	{
	if(graphs[i].ivalue1>index) graphs[i].ivalue1 -=1;
	if(graphs[i].ivalue2>index) graphs[i].ivalue2 -=1;
	if(graphs.ivalues)
		for(var j=0;j<graphs[i].ivalues.length;j++)
			if(graphs[i].ivalues[j]>index)
				graphs[i].ivalues[j] -=1;
	if(graphs.jvalues)
		for(var j=0;j<graphs[i].jvalues.length;j++)
			if(graphs[i].jvalues[j]>index)
				graphs[i].jvalues[j] -=1;
	
	}
}

//*********************************************************************

function createBoolean(graph,sliceindex,option)
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

		if(option==0)
			lrecords[i].push(""+k);
		else
			vrecords[i].push(k);
		}

	if(option==0)		
		labels.push(key1+"-"+key2+"-"+key3);
	else
		values.push(key1+"_"+key2+"_"+key3);
	}
else if((graph.ilabel2>=0)&&(graph.type!=TYPE.FAC))
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
		if(option==0)
			lrecords[i].push(""+k);
		else
			vrecords[i].push(k);
		}

	if(option==0)
		labels.push(key1+"_"+key2);
	else
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
		if(option==0)
			lrecords[i].push(""+k);
		else
			vrecords[i].push(k);
		}

	if(option==0)
		labels.push(key1);
	else
		values.push(key1);
	}

}

//*********************************************************************

function createKgroup(graph)
{

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph))
		lrecords[i].push("")
	else
		{
		var s = ""+(graph._z.cluster[i]+1)
		if(s.length<2) s = "0"+s
		lrecords[i].push(s)
		}
	}

labels.push("CLUST."+(labels.length+1))

}

//*********************************************************************

function createDummyLabel()
{
for(var i=0;i<lrecords.length;i++)
	lrecords[i].push("");

labels.push("DUMMY");
}

//*********************************************************************

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

//*********************************************************************

function selectSlices(graph)
{
if(graph.type==TYPE.FAC)
	selectFacSlices(graph)
else if(graph.type==TYPE.BAR)
	selectBarSlices(graph)

computeGraphData(graph)
}

//*********************************************************************

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

//*********************************************************************

function inGraphBackground(pt,graph)
{
/*
if(graph.type==TYPE.FAC)
	{
	faction = SELECT_SLICES	
	graph.contour = new Array(1000)
	graph.ncontour = 0
	graph.contour[graph.ncontour++] = pt	
	return true
	}	
*/
if(graph.type==TYPE.BAR)
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

//*********************************************************************

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
optionindex = -1;
titleindex = -1
stickerindex = -1
menuindex = -1;

var index = -1;

var movetotop = false;

if(event.ctrlKey)
	if((index=inFullGraph(ptclick))>=0)
		{
		faction = action = SELECT_OPTION;
		graphindex = index;
		draw();
		return;
		}
	else if(inRect(ptclick,mywidth-120,0,100,myheight))
		{
		faction = action = DRAG_SIDEBAR ;
		ptstart = ptclick;	
		return;
		}
	else
		{	
		faction = action = SELECT_TYPE;
		draw();
		return;
		}

if(inDustbinIcon(ptclick))
	{
	faction = action = DRAG_DUSTBIN;
	return;
	}

if(inTableIcon(ptclick))
	{
	faction = action = DRAG_TABLE;
	return
	}

if(inHelpIcon(ptclick))
	{
	faction = action = DRAG_HELP;
	return;
	}

if(inAddIcon(ptclick))
	{
	faction = action = DRAG_ADD;
	return;
	}

if(inCloneIcon(ptclick))
	{
	faction = action = DRAG_CLONE;
	return;
	}

if(inSortIcon(ptclick))
	{	
	faction = action = DRAG_SORT;
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
	faction = action = DRAG_TYPE;
	typeindex = index;
	return
	}

index = inType2(ptclick)
if(index>=0)
	{
	faction = action = DRAG_TYPE;
	typeindex = index;
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
var a;

if(i>=0)
	{
	var graph = graphs[i]

	if(graph.closeable&&inRect(ptclick,graph.x+5,graph.y+4,10,10))
		{
		faction = CLOSE_GRAPH;
		graphindex = i;
		}
	else if((index=inGraphHandle(ptclick,graph))>=0)
		{
		faction = DRAG_TITLE
		graphindex = i
		titleindex = index;
		}
	else if(inRect(ptclick,graph.x+graph.w-10,graph.y+graph.h-10,10,10))
		{
		faction = RESIZE_GRAPH
		graphindex = i
		movetotop = true;
		}
	else if(graph.type==TYPE.PALETTE)
		{
		if(inRect(ptclick,graph.x+2,graph.y+graph.hbar+2,graph.w-4,
			graph.h-graph.hbar-4))
			{
			faction = DRAG_HUE;
			var dx = (graph.w-2)/6;
			var dy = (graph.h-graph.hbar-2)/6;
			sliceindex = Math.floor((ptclick.x-graph.x-2)/dx)
				+6*Math.floor((ptclick.y-graph.y-graph.hbar-2)/dy)
			graphindex = -1;
			}
		else
			{
			faction = DRAG_GRAPH;
			graphindex = i;
			movetotop = true;
			}
		}
	else if(inGraphTopLabel(ptclick,graph))
		{
		faction = DRAG_TOPLABEL;
		graphindex = i
		}
	else if(inGraphLeftLabel(ptclick,graph))
		{
		faction = DRAG_LEFTLABEL;
		graphindex = i
		}
	else if(inGraphBottomLabel(ptclick,graph))
		{
		faction = DRAG_BOTTOMLABEL;
		graphindex = i
		}
	else if(inGraphLabeln(ptclick,graph)&&(destlabelindex<graph.ilabels.length))
		{
		faction = DRAG_LABELN;
		labelindex = destlabelindex
		graphindex = i
		}
	else if(inGraphTopValue(ptclick,graph))
		{
		faction = DRAG_TOPVALUE;
		graphindex = i
		}
	else if(inGraphLeftValue(ptclick,graph))
		{
		faction = DRAG_LEFTVALUE;
		graphindex = i
		}
	else if(inGraphValuei(ptclick,graph,false))
		{
		if(destvalueindex<graph.ivalues.length)
			{
			faction = DRAG_VALUEI;
			valueindex = destvalueindex
			graphindex = i
			}
		}
	else if(inGraphValuej(ptclick,graph,false))
		{	
		if(destvalueindex<graph.jvalues.length)
			{	
			faction = DRAG_VALUEJ;
			valueindex = destvalueindex;
			graphindex = i;
			}
		}
	else if((index=inGraphBin(ptclick,graph))>=0)
		{
		if(index<=card(graph.omit))
			{
			faction = DRAG_BIN;
			graphindex = i
			sliceindex = index
			}
		}
	else if((index=inGraphSticker(ptclick,graph))>=0)
		{
		faction = DRAG_STICKER;
		stickerindex = index
		graphindex = i
		}
	else if((index=inGraphSlice(ptclick,graph))>=0)
		{
		faction = DRAG_SLICE;
		graphindex = i
		sliceindex = index
		}
	else if(inRect(ptclick,graph.x,graph.y,graph.w,graph.hbar))
		{
		// in graph title bar
		faction = DRAG_GRAPH;
		graphindex = i
		movetotop = true;
		}
	else if((a=GINFO[graph.type].down(ptclick,graph))>=0)
		{	
		faction = a;
		graphindex = i;
		}
	else if(inGraphBackground(ptclick,graph))
		{	
		graphindex = i;
		}
	else 
		{
		faction = DRAG_GRAPH
		graphindex = i
		movetotop = true;
		}
	}

} catch(err) { console.log("down error "+err) }




if(faction==0)	
	{
	faction = action = SCROLL_DESKTOP;
	return;
	}

if(movetotop)
	{
	// move selected graph to top
	var gtemp = graphs[graphindex];
	graphs.splice(graphindex,1);
	graphs.push(gtemp);
	graphindex = graphs.length-1
	}

action = faction;
draw()
}

//*********************************************************************

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
	showGraphTable();
	}
else if(action==SHOW_HELP)
	{
	showHelp();
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
	graphs.splice(graphindex,1);
	dock.push(graph)
	}	
else if(action==UNDOCK_GRAPH)
	{
	graph = dock[graphindex]
	dock.splice(graphindex,1);

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
else if(action==SHOW_LABEL)
	{
	showDataTable();
	}
else if(action==SHOW_VALUE)
	{
	showDataTable();
	}
else if(action==SET_TOPLABEL)
	{	
	graph = graphs[graphindex]
	setGraphLabel(graph,"toplabel");
	}
else if(action==SET_LEFTLABEL)
	{	
	graph = graphs[graphindex]
	setGraphLabel(graph,"leftlabel");
	}
else if(action==SET_BOTTOMLABEL)
	{	
	graph = graphs[graphindex]
	setGraphLabel(graph,"bottomlabel");
	}
else if(action==SET_LABELN)
	{		
	graph = graphs[graphindex]
	setGraphLabeln(graph);
	}
else if(action==SET_TOPVALUE)
	{
	graph = graphs[graphindex]
	setGraphValue(graph,"topvalue");
	}
else if(action==SET_LEFTVALUE)
	{
	graph = graphs[graphindex]	
	setGraphValue(graph,"leftvalue");
	}
else if(action==SET_VALUEI)
	{		
	graph = graphs[graphindex]
	setGraphValuei(graph);
	}
else if(action==SET_VALUEJ)
	{
	graph = graphs[graphindex];
	setGraphValuej(graph);
	}
else if(action==DRAG_TYPE)
	{
	if((inLabel(ptmove)<0)&&(inValue(ptmove)<0)&&(inType1(ptmove)<0)&&(inType2(ptmove)<0))
		{
		graph = new Graph(ptmove.x-10,ptmove.y-10,true,[],-1,0,typeindex)
		graphs.push(graph)
		computeGraphData(graph)
		}
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
else if(action==CREATE_SLICE)
	{
	graph = graphs[graphindex]
	var selection = cloneArray(graph.selection)	
	// new graph selection 
	if(graph.type==TYPE.TREE)
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
	else if((graph.ilabel2>=0)&&(graph.type!=TYPE.FAC))
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
		TYPE.PIE)
	newgraph.iunit = graph.iunit
	computeGraphData(newgraph)
	graphs.push(newgraph)	
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
else if((action==DRAG_TOPLABEL)||(action==DRAG_TOPVALUE))
	{
	graph = graphs[graphindex]
	graph.topshift = graph.x + graph.w - ptmove.x -50
	if(graph.topshift < 5) graph.topshift = 5
	}
else if((action==DRAG_LEFTLABEL)||(action==DRAG_LEFTVALUE))
	{
	graph = graphs[graphindex]
	graph.leftshift = ptmove.y - graph.y - graph.hbar -50
	if(graph.leftshift<5) graph.leftshift = 5
	}
else if(action==DRAG_BOTTOMLABEL)
	{
	graph = graphs[graphindex]
	graph.bottomshift = graph.x + graph.w - ptmove.x -50
	if(graph.bottomshift < 5) graph.bottomshift = 5
	}
else if(action==CREATE_PROJECTION)
	{	
	graph = graphs[graphindex];
	createProjectionValue(graph,valueindex)
	draw()
	}
else if(action==REMOVE_TOPLABEL)
	{
	graph = graphs[graphindex];
	removeGraphLabel(graph,"toplabel");
	}
else if(action==REMOVE_LEFTLABEL)
	{
	graph = graphs[graphindex]
	removeGraphLabel(graph,"leftlabel");
	}
else if(action==REMOVE_BOTTOMLABEL)
	{
	graph = graphs[graphindex]	
	removeGraphLabel(graph,"bottomlabel");
	}
else if(action==REMOVE_LABELN)
	{	
	graph = graphs[graphindex]
	removeGraphLabeln(graph);
	}
else if(action==REMOVE_TOPVALUE)
	{
	graph = graphs[graphindex]
	removeGraphValue(graph,"topvalue");
	}
else if(action==REMOVE_LEFTVALUE)
	{
	graph = graphs[graphindex]
	removeGraphValue(graph,"leftvalue")
	}
else if(action==REMOVE_BOTTOMVALUE)
	{
	graph = graphs[graphindex]
	removeGraphValue(graph,"bottomvalue");
	}
else if(action==REMOVE_VALUEI)
	{
	graph = graphs[graphindex]
	graph.ivalues.splice(destvalueindex,1);
	computeGraphData(graph)
	}
else if(action==REMOVE_VALUEJ)
	{
	graph =graphs[graphindex];
	graph.jvalues.splice(destvalueindex,1);
	computeGraphData(graph);
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
else if((action==SWAP_LABEL_TL)||(action==SWAP_LABEL_LT))
	{
	graph = graphs[graphindex]		// origin graph
	swapLabel(graph,"toplabel","leftlabel");
	}
else if((action==SWAP_LABEL_TB)||(action==SWAP_LABEL_BT))
	{
	graph = graphs[graphindex];
	swapLabel(graph,"toplabel","bottomlabel");
	}
else if((action==SWAP_LABEL_LB)||(action==SWAP_LABEL_BL))
	{
	graph = graphs[graphindex];
	swapLabel(graph,"leftlabel","bottomlabel");
	}
else if(action==SWAP_LABELN)
	{
	graph = graphs[graphindex]
	swapLabeln(graph)
	}
else if(action==SWAP_VALUEI)
	{
	graph = graphs[graphindex]
	swapValuei(graph)
	}
else if(action==SWAP_VALUEJ)
	{
	graph = graphs[graphindex];
	swapValuej(graph);
	}
else if(action==SWAP_VALUEIJ)
	{
	graph = graphs[graphindex];
	swapValueij(graph);
	}
else if(action==SWAP_VALUEJI)
	{
	graph = graphs[graphindex];
	swapValueji(graph);	
	}
else if((action==SWAP_VALUE_TL)||(action==SWAP_VALUE_LT))
	{
	graph = graphs[graphindex];
	swapValue(graph,"topvalue","leftvalue");
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
	if(graph.type==TYPE.DISTRIB)
		createLabelFromDistrib(graph);
	else if(graph.type==TYPE.HISTO)
		createLabelFromHisto(graph);
	else if(graph.type==TYPE.DENDRO)
		createLabelFromDendro(graph);
	}
else if(action==CREATE_KGROUP)
	{
	createKgroup(graphs[graphindex])
	}
else if(action==CREATE_LBOOLEAN)
	{
	graph = graphs[graphindex];
	createBoolean(graph,sliceindex,0);
	}
else if(action==CREATE_VBOOLEAN)
	{
	graph = graphs[graphindex];
	createBoolean(graph,sliceindex,1);
	}
else if(action==REMOVE_TITLE)
	{
	removeTitle(graphs[graphindex],titleindex)
	}
else if(action==CHANGE_HUE)
	{
	graph = graphs[graphindex];
	graph.hue = sliceindex/36;
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
	graphindex = -1;
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
	setGraphDisplay(graph,labelindex);
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
else if(action==SELECT_TEST)
	{
	if(menuindex>=0)
		{
		graph = graphs[graphindex];
		graph.test = menuindex;
		computeTestData(graph);
		}	
	}
else if(action==SELECT_LAW)
	{
	if(menuindex>=0)
		{
		graph = graphs[graphindex];
		graph.law = menuindex;
		computeProbaData(graph);
		}
	}
else if(action==SELECT_CLUSTERING)
	{	
	if(menuindex>=0)
		{
		graph = graphs[graphindex];
		graph.clustering = menuindex;
		computeClusteringData(graph);
		}
	}
else if(action==SELECT_HOMO)
	{
	if(menuindex>=0)
		{
		graph = graphs[graphindex];
		graph.homo = menuindex;
		}
	}
else if((action==SELECT_TYPE)&&(typeindex>=0))
	{
	graph = new Graph(ptclick.x,ptclick.y,true,[],-1,0,typeindex)
	graphs.push(graph)
	computeGraphData(graph)
	}
else if((action==SELECT_OPTION)&&(optionindex>=0))
	{
	graph = graphs[graphindex];
	graph.option = optionindex;
	}
else if(action==SELECT_ANGLE)
	{
	if(menuindex>=0)
		{
		graph = graphs[graphindex];
		graph.angle = menuindex;
		computePolarData(graph);
		}
	}
else if(action==PIVOT_DATA)
	{
	pivotData();
	}

// specific action
if(graphindex>=0)
	{
	var graph = graphs[graphindex];
	GINFO[graph.type].up(graph);
	}

faction = 0;
action = 0;
graphindex = -1;
sliceindex = -1;
labelindex = -1;
typeindex = -1;
optionindex = -1;

document.body.style.cursor = "";

draw()
}

//*********************************************************************

function wheel(event)
{
var index = inGraph(ptmove);
if(index>=0)
	{
	var graph = graphs[index];
	graph.yshift -= Math.round(event.wheelDelta/10);
	if(graph.yshift<0) graph.yshift = 0;
	}
else if(ptmove.x>mywidth-100)
	{
	barshift -= Math.round(event.wheelDelta/10);
	if(barshift<0)		
		barshift = 0;
	if(barshift>20*labels.length+20*values.length+140)
		barshift = 20*labels.length+20*values.length+140;	
	}
else
	scrollDesktop(0,Math.round(event.wheelDelta/10));


draw();
}

//*********************************************************************

function pivotData()
{
// remove all graphs
graphs.splice(0,graphs.length);

var newlrecords = [];
var newvrecords = [];

for(var i=0;i<lrecords.length;i++)
	{
	for(var j=1;j<values.length;j++)
		{
		if(vrecords[i][j]==0) continue;

		var lrecord = new Array(labels.length+1);
		for(var k=0;k<labels.length;k++)
			lrecord[k] = lrecords[i][k];
		lrecord[labels.length] = values[j];
		newlrecords.push(lrecord);

		vrecord = [1,vrecords[i][j]];
		newvrecords.push(vrecord);		
		}
	}

lrecords = newlrecords;
vrecords = newvrecords;

labels.push("PIVOT");
values.splice(1,values.length-1);
values.push("COUNT");
}

//*********************************************************************

function showDataTable()
{

initTable();

var nl = labels.length;

for(var j=0;j<labels.length;j++)
	table(1,1+j,labels[j]);

for(var j=0;j<values.length;j++)
	table(1,1+nl+j,values[j]);

for(var i=0;i<lrecords.length;i++)
	{
	for(var j=0;j<labels.length;j++)
		table(2+i,1+j,lrecords[i][j]);
	for(var j=0;j<values.length;j++)
		table(2+i,1+nl+j,vrecords[i][j]);
	}

var t = getTableHtml();
showTable(t,"DATA");
}

//*********************************************************************

function showGraphTable()
{
if(graphindex<0) return;
var graph = graphs[graphindex];

initTable();

// call graph specific function
GINFO[graph.type].table(graph);

var t = getTableHtml();
if(t)
	showTable(t,getTableName());

}

//*********************************************************************

function showTable(t,wname)
{

var h = "";
h += "<!DOCTYPE html>\n";
h += "<html>\n";
h += "<head>\n";
h += "<style>\n";
h += "body	{ margin:0px; }\n";
h += "*	{ font-family: Calibri; font-size: 12px; }\n";
h += "td { min-width: 50px; border-left: 1px solid #AAA;  border-top: 1px solid #AAA;}\n";
h += "table { border-bottom: 1px solid #AAA; border-right: 1px solid #AAA; }\n";
h += "</style>\n";
h += "</head>\n";
h += "<body>\n";
h += t;
t += "</body>";
h += "</html>\n";

if(window.inbrowser)
	{
	var w = window.open("",wname,"status=0");
	var d = w.document;
	d.open()
	d.write(h);
	d.close()
	}
else
	ipc.send("window", {title:wname,source:h});

}

//*********************************************************************

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

//*********************************************************************

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
	t += "}\n";
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
	t += "}\n";
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

//*********************************************************************

function showHelp()
{
if(graphindex<0) return;
var graph = graphs[graphindex];
var name = GINFO[graph.type].name.toLowerCase();

if(window.inbrowser)
	window.open("help/"+name+".html",name,"width=500;status=no;toolbar=no;menubar=no;location=no");
else
	ipc.send("help",name);

}

//*********************************************************************

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
div.style["background-color"] =  BG;
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
		informula = false;
	}

	function help() {
		show_formula_help();
	}
}

//*********************************************************************

function show_formula_help()
{
var t = "";


t += "<html>";
t += "<head>";
t += "<title>Help</title>";
t += "<style>";;
t += "td	{ font-family:Courier; font-size:12px; }";
t += ".h    { background-color:#6C9464; color:#FFFFFF; }";
t += "</style>";
t += "</head>";
t += "<body>";
t += "<table border='0' width='100%'>";

t += "<tr><td colspan='1' class='h'>Special values</td></tr>";

	addLine("$I      :    record number, starting from 1");

	addLine("");

for(var i=0;i<labels.length;i++)
	addLine("$C"+(i+1)+"  :   "+labels[i]);

	addLine("");

for(var i=1;i<values.length;i++)
	addLine("$N"+i+"  :   "+values[i]);


t += "<tr><td colspan='1' class='h'>String functions</td></tr>";;

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

t += "<tr><td colspan='1' class='h'>Numerical functions</td></tr>";

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
	var w = window.open("about:blank","help","width=500;status=no");
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

//*********************************************************************

function add_formula(nom,formula,action)
{
var f = [action==ADD_LABEL?1:2 , nom, formula];
formulas.push(f);

process_formula(f);
draw();
}

//*********************************************************************

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
	labels.push(nom);
	for(var i=0;i<lrecords.length;i++)
		lrecords[i].push(evaluate_label(lrecords[i],vrecords[i],i+1,i+1));
	}
else if(action==2)
	{
	values.push(nom);
	for(var i=0;i<vrecords.length;i++)
		vrecords[i].push(evaluate_value(lrecords[i],vrecords[i],i+1,i+1));
	}

if(nerr>0)
	alert(nerr+" errors when applying the formula");

		function evaluate_label(C,N,$I,$i)
		{	
		var x;
		try  {	eval("x="+formula) ; x = ""+x; } 
		catch(e) { nerr+1; x= "";  }
		return x;
		}

		function evaluate_value(C,N,$I,$i)
		{
		var x;
		try { eval("x="+formula); x = Number(x); if(isNaN(x)) x= 0; }
		catch(err) {  nerr+=1; x = 0; }
		return x;
		}

}

//*********************************************************************

function uniform(a,b)
{
return a + Math.random()*(b-a);
}

//*********************************************************************

function normal(m,s)
{
var u = Math.random();
var v = Math.random();

var n = Math.sqrt(-2*Math.log(u))*Math.cos(Math.PI*2*v);
return n*s+m;
}

//*********************************************************************

function updateStatus()
{
var sindex = -1;		// slice index
var gindex = -1;		// graph index
overlabel1 = -1;
overkey1 = null;
overlabel2 = -1;
overkey2 = null;

message = "";

// check if over dock
gindex = inDock(ptmove)
if(gindex>=0)
	{	
	message = ""
	sep = ""
	var graph = dock[gindex];
	if(graph)
		if(graph.selection)
			for(var i=0;i<graph.selection.length;i+=2)
			{
			message += sep + graph.selection[i+1]
			sep = " \u2022 "			
			}
	return;
	}

var index = inType1(ptmove)
if(index>=0)
	{
	message = GINFO[index].help;
	return
	}

index = inType2(ptmove)
if(index>=0)
	{
	message = GINFO[index].help;
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

if(inDustbinIcon(ptmove))
	{
	message = "Remove ...";
	return;
	}

if(inTableIcon(ptmove))
	{
	message = AHELP[DRAG_TABLE];
	return
	}

if(inHelpIcon(ptmove))
	{
	message = AHELP[DRAG_HELP];
	return;
	}

if(inAddIcon(ptmove))
	{
	message = AHELP[DRAG_ADD];
	return;
	}

if(inCloneIcon(ptmove))
	{
	message = AHELP[DRAG_CLONE];
	return;
	}

if(inSortIcon(ptmove))
	{
	message = AHELP[DRAG_SORT];
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
else if(GINFO[graphs[i].type].move(ptmove,graphs[i]))
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

else if((index=inGraphSlice(ptmove,graphs[i]))>=0)
	{
	var graph = graphs[i];
	if(graph.type==TYPE.PIE)
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
	else if(graph.type==TYPE.THREE)	
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
	else if((graph.ilabel2<0)||(graph.type==TYPE.ARC))
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

		message = key2+" \u2022 "+key1+" : "+value+" / "+total+" "+unit+" ("+pct+"%)"
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

//*********************************************************************

function move(event)
{
ptmove = getxy(event)

if(action==0)
	{
	updateStatus();
	draw();
	return
	}

var  i;


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
else if(faction==DRAG_DUSTBIN)
	{
	labelindex = -1;	
	valueindex = -1;
	var index;
	if((index=inLabel(ptmove))>=0)
		{
		if(labelInUse(index))
			action = DONT_REMOVE;
		else
			{
			labelindex = index;
			action = REMOVE_LABEL;
			AHELP[action] = 'Remove field "'+labels[labelindex]+'"';
			}
		}
	else if((index=inValue(ptmove))>0)
		{
		if(valueInUse(index))
			action = DONT_REMOVE;
		else
			{
			valueindex = index;
			action = REMOVE_VALUE;
			AHELP[action] = 'Remove field "'+values[valueindex]+'"';
			}
		}
	else
		action = DRAG_DUSTBIN;
	}
else if(faction==DRAG_TABLE)
	{
	labelindex = -1;
	valueindex = -1;
	graphindex = -1;
	var index;
	if((index=inLabel(ptmove))>=0)
		{
		labelindex = index;
		action = SHOW_LABEL;
		}		
	else  if((index=inValue(ptmove))>0)
		{
		valueindex = index;
		action = SHOW_VALUE;
		}
	else if((index=inGraph(ptmove))>=0)
		{
		graphindex = index;
		action = SHOW_TABLE;
		}
	else
		action = DRAG_TABLE;
	}
else if(faction==DRAG_HELP)
	{
	graphindex = -1;
	for(var i=0;i<graphs.length;i++)
		if(inRect(ptmove,graphs[i].x,graphs[i].y,graphs[i].w,graphs[i].h))
			graphindex = i;

	action = (graphindex<0) ? DRAG_HELP : SHOW_HELP;
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
			if((graphs[i].type==TYPE.PIE)||(graphs[i].type==TYPE.BAR)||
				(graphs[i].type==TYPE.LINE))
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
	if(inDustbinIcon(ptmove))
		{
		if(labelInUse(labelindex))
			action = DONT_REMOVE;
		else
			{
			action = REMOVE_LABEL;
			AHELP[action] = 'Remove field "'+labels[labelindex]+'"';
			}
		}
	else if(inTableIcon(ptmove))
		{
		action = SHOW_LABEL;
		}
	else if(inSortIcon(ptmove))
		{
		action = SORT_DATA;
		AHELP[action] = 'Sort data by "'+labels[labelindex]+'"';
		}
	else if(inValue(ptmove)>=0)
		{
		action = labelInUse(labelindex) ? DONT_REMOVE:CREATE_VALUE;
		}
	else if(i<0)
		{
		action = DRAG_LABEL;
		}
	else if(inGraphTopLabel(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_TOPLABEL;
		}
	else if(inGraphLeftLabel(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_LEFTLABEL;
		}	
	else if(inGraphBottomLabel(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_BOTTOMLABEL;
		}
	else if(inGraphLabeln(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_LABELN
		}	
	else if(GINFO[graphs[i].type].display)
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
	if(inDustbinIcon(ptmove)&&(valueindex>0))
		{
		if(valueInUse(valueindex))
			action = DONT_REMOVE;
		else
			{
			action = REMOVE_VALUE;
			AHELP[action] = 'Remove field "'+values[valueindex]+'"';
			}
		}
	else if(inTableIcon(ptmove))
		{
		action = SHOW_VALUE;
		}
	else if(inSortIcon(ptmove))
		{
		action = SORT_DATA;
		AHELP[action] = 'Sort data by "'+values[valueindex]+'"';
		}
	else if(inLabel(ptmove)>=0)
		{
		if(valueindex==0)
			action = PIVOT_DATA;;
		}
	else if(i<0)
		action = DRAG_VALUE;
	else if(inGraphTopValue(ptmove,graphs[i]))
		{
		graphindex =  i;
		action = SET_TOPVALUE;
		}
	else if(inGraphLeftValue(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_LEFTVALUE;
		}	
	else if(inGraphValuei(ptmove,graphs[i],true))
		{
		graphindex = i;
		action = SET_VALUEI
		}
	else if(inGraphValuej(ptmove,graphs[i],true))
		{
		graphindex = i;
		action = SET_VALUEJ;
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
else if(faction==DRAG_TOPLABEL)
	{
	var graph = graphs[graphindex]	
	var i = inFullGraph(ptmove);
	if(inRect(ptmove,graph.x,graph.y+graph.hbar,graph.w,30))
		{
		action = DRAG_TOPLABEL;
		}
	else if(i<0)
		{
		action = REMOVE_TOPLABEL;
		}	
	else if(inGraphTopLabel(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = PASTE_LABEL11
		}
	else if(inGraphLeftLabel(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = (graphindex==graphindex2) ? 
			SWAP_LABEL_TL : PASTE_LABEL12;
		}	
	else if(inGraphBottomLabel(ptmove,graphs[i]))
		{	
		graphindex2 = i;
		action = (graphindex==graphindex2) ? 
			SWAP_LABEL_LB : DRAG_TOPLABEL;
		}
	else if(inGraphTitle(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = CREATE_SET
		}
	else
		action = REMOVE_TOPLABEL;
	}
else if(faction==DRAG_LEFTLABEL)
	{
	var graph = graphs[graphindex]
	var i = inFullGraph(ptmove);
	if(inRect(ptmove,graph.x,graph.y,30,graph.h))
		{
		action = DRAG_LEFTLABEL;
		}
	else if(i<0)
		{	
		action = REMOVE_LEFTLABEL;
		}
	else if(inGraphTopLabel(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = (graphindex==graphindex2) ? 		
			SWAP_LABEL_LT : PASTE_LABEL21
		}
	else if(inGraphBottomLabel(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = (graphindex==graphindex2) ? 
			SWAP_LABEL_LB : DRAG_LEFTLABEL;
		}
	else if(inGraphLeftLabel(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = PASTE_LABEL22
		}
	else 
		action = REMOVE_LEFTLABEL;
	}
else if(faction==DRAG_BOTTOMLABEL)
	{
	var graph =graphs[graphindex]
	var i = inFullGraph(ptmove);
	if(i<0)		
		{
		action = REMOVE_BOTTOMLABEL;
		}
	else if(inRect(ptmove,graph.x,graph.y+graph.h-30,graph.w,30))
		{
		action = DRAG_BOTTOMLABEL;
		}
	else if(inGraphTopLabel(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = (graphindex==graphindex2) ? 
			SWAP_LABEL_BT : REMOVE_BOTTOMLABEL;
		}
	else if(inGraphLeftLabel(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = (graphindex==graphindex2) ? 
			SWAP_LABEL_BL: REMOVE_BOTTOMLABEL;
		}
	else
		action = REMOVE_BOTTOMLABEL;
	}
else if(faction==DRAG_LABELN)
	{
	action = REMOVE_LABELN
	var graph = graphs[graphindex]
	if(inGraphLabeln(ptmove,graph))
		if(destlabelindex<graph.ilabels.length)
			action = SWAP_LABELN;
	}
else if(faction==DRAG_TOPVALUE)
	{
	var graph = graphs[graphindex]
	if(inRect(ptmove,graph.x,graph.y+graph.hbar,graph.w,30))
		action = DRAG_TOPVALUE;
	else if(inGraphLeftValue(ptmove,graph))
		action = SWAP_VALUE_TL;
	else
		action = REMOVE_TOPVALUE;
	}
else if(faction==DRAG_LEFTVALUE)
	{
	var graph = graphs[graphindex]
	if(inRect(ptmove,graph.x,graph.y,30,graph.h))
		action = DRAG_LEFTVALUE;
	else if(inGraphTopValue(ptmove,graph))
		action = SWAP_VALUE_LT;
	else
		action = REMOVE_LEFTVALUE;
	}
else if(faction==DRAG_VALUEI)
	{
	var graph = graphs[graphindex]
	if(valueindex<graph.ivalues.length)
		{
		if(inGraphValuei(ptmove,graph,false))
			action = SWAP_VALUEI 
		else if(inGraphValuej(ptmove,graph,true))
			action = SWAP_VALUEIJ;
		else
			action = REMOVE_VALUEI;
		}
	}
else if(faction==DRAG_VALUEJ)
	{
	var graph = graphs[graphindex];
	if(valueindex<graph.jvalues.length)
		{
		if(inGraphValuei(ptmove,graph,true))
			action = SWAP_VALUEJI;
		else if(inGraphValuej(ptmove,graph,false))
			action = SWAP_VALUEJ;
		else
			action = REMOVE_VALUEJ;	
		}
	}
else if(faction==DRAG_AXIS)
	{
	var graph = graphs[graphindex]	
	if((graph.type==TYPE.ACP)||(graph.type==TYPE.DISCRI)||(graph.type==TYPE.REGRES))
		action = (inValue(ptmove) >=0)  ? CREATE_PROJECTION : DRAG_AXIS
	else if((graph.type==TYPE.DISTRIB)||(graph.type==TYPE.HISTO)||(graph.type==TYPE.DENDRO))
		action = (inLabel(ptmove) >=0) ?  CREATE_LABEL : DRAG_AXIS
	else if(graph.type==TYPE.CLUSTERING)
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
        action = CREATE_VBOOLEAN;
	else if(inLabel(ptmove)>=0)
		action = CREATE_LBOOLEAN;
	else if(inFullGraph(ptmove)>=0)
		action = DRAG_SLICE;
	else
		action = CREATE_SLICE;
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
	else if(inGraphTopLabel(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = PASTE_BINLABEL11
		}
	else if(inGraphLeftLabel(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = PASTE_BINLABEL12
		}
	else if(sliceindex==0)
		action = INVERT_BIN;
	else
		action = DRAG_BIN;
	}
else if(faction==DRAG_TITLE)
	{
	var graph = graphs[graphindex]
	if(inRect(ptmove,graph.x,graph.y,graph.w,20*graph.selection.length/2))
		action = DRAG_TITLE
	else if((index=inTitle(ptmove))>=0)
		{
		action = PASTE_TITLE;
		graphindex2 = index
		}
	else
		action = REMOVE_TITLE;
	}
else if(faction==DRAG_HUE)
	{
	action = DRAG_HUE;
	i = inFullGraph(ptmove);
	if(i>=0)
		{
		action = CHANGE_HUE;
		graphindex = i
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
	scrollDesktop(ptmove.x-ptclick.x,ptmove.y-ptclick.y);
	ptclick = ptmove;
	}
else if(faction==SELECT_TYPE)
	{
	if(inRect(ptmove,ptclick.x,ptclick.y,200,14*KNUM))
		typeindex = Math.floor((ptmove.y-ptclick.y)/14);
	else
		typeindex = -1;
	}
else if(faction==SELECT_OPTION)
	{
	var graph = graphs[graphindex];
	var no = GINFO[graph.type].options;
	if(no)
		{
		if(inRect(ptmove,ptclick.x,ptclick.y,200,14*no))
			optionindex = Math.floor((ptmove.y-ptclick.y)/14);
		else
			optionindex = -1;
		}
	}
else if((i=inFullGraph(ptmove))>=0)
	{
	// function specific to the graph
	var graph = graphs[i];
	GINFO[graph.type].drag(graph);
	}

if(action!=0)
	message = AHELP[action];
else
	message = ""

draw()
}

//*********************************************************************

function scrollDesktop(dx,dy)
{
	// move all the graphs
	for(var i=0;i<graphs.length;i++)
		{
		graphs[i].x += dx;
		graphs[i].y += dy;
		}	
}

//*********************************************************************

function drawVLabel(ctx,x,y,title)
{
var w = SLOTH;
var h = SLOTW;

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

//*********************************************************************

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

//*********************************************************************

function drawVValue(ctx,x,y,title)
{
var w = SLOTH;
var h = SLOTW;

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

//*********************************************************************

function drawHValue(ctx,x,y,title)
{
var w = SLOTW;
var h = SLOTH;

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

//*********************************************************************

function drawHLabel(ctx,x,y,title)
{
var w = SLOTW;
var h = SLOTH;

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

//*********************************************************************

function drawRect(ctx,x,y,w,h)
{
ctx.fillRect(x,y,w,1)
ctx.fillRect(x,y+h,w,1)
ctx.fillRect(x,y,1,h)
ctx.fillRect(x+w,y,1,h+1)
}

//*********************************************************************

function drawCorner(ctx,x,y,h)
{
ctx.fillStyle = "#000000"
for(var i=h;i>=1;i--)
	ctx.fillRect(x+h-i,y+h-i,h,1)
}

//*********************************************************************

function drawLine(ctx,x1,y1,x2,y2,n)
{
for(var i=0;i<=n;i++)
	{
	var x = Math.floor(x1+(x2-x1)*i/n+0.5)
	var y = Math.floor(y1+(y2-y1)*i/n+0.5)
	ctx.fillRect(x,y,1,1)
	}
}

//*********************************************************************

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

//*********************************************************************

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

//*********************************************************************

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

//*********************************************************************

function drawDustbinIcon(ctx,x,y)
{
ctx.fillStyle = "#000000";
ctx.fillRect(x+4,y+5,1,13);
ctx.fillRect(x+7,y+7,1,9);
ctx.fillRect(x+10,y+7,1,9);
ctx.fillRect(x+13,y+7,1,9);
ctx.fillRect(x+16,y+5,1,13);
ctx.fillRect(x+3,y+4,15,1);
ctx.fillRect(x+4,y+17,13,1);
ctx.fillRect(x+7,y+3,7,1);
frameIcon(ctx,x,y);
}

//*********************************************************************

function drawTableIcon(ctx,x,y)
{
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(x,y,20,20);
ctx.fillStyle = "#000000"
for(var i=3;i<18;i+=3)
	ctx.fillRect(x+4,y+i,13,1)
for(var i=4;i<19;i+=4)
	ctx.fillRect(x+i,y+3,1,13) 
frameIcon(ctx,x,y);
}

//*********************************************************************

function drawHelpIcon(ctx,x,y)
{
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(x,y,20,20);
ctx.fillStyle = "#000000";
ctx.save();
ctx.font = "bold 22px Times";
ctx.textAlign = "center";
ctx.fillText("!",x+10,y+18);
ctx.restore();
ctx.strokeStyle = "#000000";
frameIcon(ctx,x,y);
}

//*********************************************************************

function drawAddIcon(ctx,x,y)
{
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
frameIcon(ctx,x,y);
}

//*********************************************************************

function drawCloneIcon(ctx,x,y)
{
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(x,y,20,20);
ctx.fillStyle = "#000000";
drawRect(ctx,x+3,y+3,9,9)
drawRect(ctx,x+7,y+7,9,9)
ctx.strokeStyle = "#000000";
frameIcon(ctx,x,y);
}

//*********************************************************************

function drawSortIcon(ctx,x,y)
{
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(x,y,20,20);
ctx.fillStyle = "#000000";
ctx.fillRect(x+3,y+16,2,2);
ctx.fillRect(x+6,y+13,2,5);
ctx.fillRect(x+9,y+10,2,8);
ctx.fillRect(x+12,y+7,2,11);
ctx.fillRect(x+15,y+4,2,14);
ctx.strokeStyle = "#000000";
frameIcon(ctx,x,y);
}

//*********************************************************************

function fillIcon(ctx,x,y)
{
ctx.fillStyle = BLUE;
ctx.fillRect(x,y,20,20);
}

//*********************************************************************

function frameIcon(ctx,x,y)
{
ctx.fillStyle = "#000000";
ctx.fillRect(x,y,20,1);
ctx.fillRect(x,y,1,20);
ctx.fillRect(x+20,y,1,20);
ctx.fillRect(x,y+20,20,1);
}

//*********************************************************************

function dumpArray(title,table)
{
debug("DUMP ARRAY "+title)
for(var i=0;i<table.length;i++)
	debug(i+" >"+table[i]+"< ")
}

//*********************************************************************

function dumpSet(title,set)
{
debug("DUMP SET "+title)
for(var x in set)
	debug("  >"+x+"<  "+set[x])
}

//*********************************************************************

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

//*********************************************************************

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

//*********************************************************************

function drawDock(ctx,w,h)
{
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
frameIcon(ctx,x,y);

x = w-20;
y = h-40;
drawDustbinIcon(ctx,x,y);

x = w-40;
y = h-40;
drawTableIcon(ctx,x,y);

x = w-60;
y = h-40;
drawHelpIcon(ctx,x,y);

x = w-80;
y = h-40;
drawAddIcon(ctx,x,y);

x = w - 100;
y = h - 40;
drawCloneIcon(ctx,x,y);

x = w-120;
y = h-40;
drawSortIcon(ctx,x,y);

// draw dock 
for(var i=0;i<dock.length;i++)
	{
	var graph = dock[i]
	ctx.fillStyle = getColor(graph.hue,1,1)
	ctx.fillRect(20+20*i,y,20,20)
	frameIcon(ctx,20+20*i,y);
	}

}

//*********************************************************************

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

//*********************************************************************

function findY(graph,t)
{
var x = graph._z.xmin + t*(graph._z.xmax-graph._z.xmin)
for(var i=0;i<graph._z.xx.length-1;i++)
	if((x>=graph._z.xx[i])&&(x<graph._z.xx[i+1]))
		return (i+0.0)/graph._z.xx.length
return 1
}

//*********************************************************************

function findX(graph,t)
{
var i = Math.floor(graph._z.xx.length*t)
if(i<0) i = 0
if(i>=graph._z.xx.length) i = graph._z.xx.length-1
return (graph._z.xx[i]-graph._z.xmin)/(graph._z.xmax-graph._z.xmin)
}

//*********************************************************************

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

//*********************************************************************

function recordHilite(record)
{
if(overlabel2<0)
	return record[overlabel1] == overkey1
else
	return (record[overlabel1]==overkey1) && (record[overlabel2]==overkey2)
}

//*********************************************************************

function trunc(s,ndigits)
{
/*
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
*/
var p = 1;
for(var i=0;i<ndigits;i++)
	p*=10;
return ""+(Math.round(s*p)/p);
}

//*********************************************************************

function drawMenu(ctx,graph,menu,selected,action)
{

var x = graph.x+graph.w/2;
var y = graph.y+graph.hbar+5;
var w = 150;

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(x-w/2,y,w,20);

var text = menu[selected]||"";

ctx.fillStyle = "#000000";
ctx.textAlign = "center";
ctx.fillText(text,x,y+14);

ctx.strokeStyle = "#000000";
ctx.strokeRect(x-w/2,y,w,20);

for(var i=0;i<7;i++)
	ctx.fillRect(x+w/2-18+i,y+6+i,14-2*i,1);

if((faction==action)&&(graphs[graphindex]==graph))
	{
	var n = menu.length;
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(x-w/2,y+21,w,20*n);

	ctx.fillStyle = "#000000";
	for(var i=0;i<n;i++)		
		ctx.fillText(menu[i],x,y+20+20*i+14);

	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(x-w/2,y+20);
	ctx.lineTo(x-w/2,y+20+20*n);
	ctx.lineTo(x+w/2,y+20+20*n);
	ctx.lineTo(x+w/2,y+20);
	ctx.stroke();

	if(menuindex>=0)
		{
		ctx.fillStyle = GRAY;
		ctx.fillRect(x-w/2,y+20+20*menuindex,w,20);
		}
	}

}

//*********************************************************************

function visitNode(node,func)
{
if(node.left) visitNode(node.left,func);
if(node.right) visitNode(node.right,func);
func(node);
}

//*********************************************************************

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
ctx.fillStyle = BG;
ctx.fillStyle = "#EFF8E7";
ctx.fillRect(0,0,mywidth,myheight)

// graphs
for(var i=0;i<graphs.length;i++)
	{
	var graph = graphs[i]

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

	ctx.save();
	try { GINFO[graph.type].draw(ctx,graph); } catch(e) { console.log(e) }
	ctx.restore();
	drawGraphOption(ctx,graph);
	drawGraphSlots(ctx,graph);
	drawGraphStickers(ctx,graph)

	// right grow box
	ctx.fillStyle = "#FFFFFF"
	ctx.strokeStyle = "#000000"
	ctx.fillRect(graph.x+graph.w-10,graph.y+graph.h-10,10,10)
	ctx.strokeRect(graph.x+graph.w-10,graph.y+graph.h-10,10,10)

	ctx.restore()

    if((i==graphindex)&&(action in GACTIONS))
        {
        ctx.fillStyle = GRAY
        ctx.fillRect(graph.x,graph.y,graph.w,graph.h);
        }
	}

var y = -barshift;

// labels
ctx.font = "14px helvetica"
ctx.textAlign = "center"


for(var i=0;i<labels.length;i++)
	drawHLabel(ctx,mywidth-SLOTW,y+i*SLOTH,labels[i])
y += labels.length*SLOTH;

y += SLOTH;

// icons
var ni = Math.ceil(NBTYPE3/5)*5
for(var i=0;i<ni;i++)	
	{	
	var x = mywidth-100+20*(i%5);
	ctx.fillStyle = i<NBTYPE1 ? PINK : BLUE;
	ctx.fillRect(x,y,20,20);
	if(i<NBTYPE3)
		{
		GINFO[i].icon(ctx,x,y);
		if(GINFO[i].options)
			drawCorner(ctx,x+20-4,y,4);
		}
	frameIcon(ctx,x,y);
	if((i%5)==4) y += 20
	}
y += SLOTH;

// values
for(var i=0;i<values.length;i++)
	drawHValue(ctx,mywidth-SLOTW,y+i*SLOTH,values[i])
y += values.length*SLOTH;


y += SLOTH;

// sticker
drawSticker(ctx,mywidth-100,y,100,20,-1,"")

// dock
drawDock(ctx,mywidth,myheight)

if(action==REMOVE_LABEL)
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-20,myheight-40,20,20);
	ctx.fillRect(mywidth-100,20*labelindex-barshift,100,20);
	}
else if(action==REMOVE_VALUE)
	{
	var ni = Math.ceil(NBTYPE3/5)
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-20,myheight-40,20,20);
	ctx.fillRect(mywidth-100,
		labels.length*20+20+ni*20+20+20*valueindex-barshift,100,20);
	}

// if dragging a label
if((action==DRAG_LABEL)||(action==SET_TOPLABEL)||(action==SET_LEFTLABEL))
	{
	if(!informula) {
		ctx.strokeStyle = GRAY
		ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
		}
	}

if((action==DRAG_VALUE)||(action==SET_TOPVALUE)||(action==SET_LEFTVALUE))
	{
	if(!informula)
		{
		ctx.strokeStyle = GRAY
		ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
		}
	}

if((action==SET_TOPLABEL)||(action==SET_TOPVALUE)||(action==SWAP_VALUE_LT))
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect( graph.x+graph.w-100-graph.topshift, graph.y+graph.hbar+5,100,20)
	}

if((action==SET_LEFTLABEL)||(action==SET_LEFTVALUE)||(action==SWAP_VALUE_TL))
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+5,graph.y+graph.hbar+graph.leftshift,20,100)
	}

if((action==SET_BOTTOMLABEL)||(action==SWAP_LABEL_LB)||(action==SWAP_LABEL_TB))
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+graph.w-100-graph.bottomshift,graph.y+graph.h-25,100,20)
	}

if(action==SET_LABELN)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+graph.w-105,graph.y+graph.hbar+5+25*destlabelindex,100,20)	
	}

if(action==SET_VALUEI)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY;
	var y = graph.y+graph.hbar+5+25*destvalueindex;
	ctx.fillRect(graph.x+graph.w-105,y,100,20)	;
	}

if(action==SET_VALUEJ)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY;
	var y = graph.y+graph.hbar+5+25*graph.ivalues.length+50+25*destvalueindex;
	ctx.fillRect(graph.x+graph.w-105,y,100,20)	;
	}

if(action==DRAG_AXIS)
	{
	ctx.fillStyle = GRAY
	ctx.fillRect(ptmove.x-10,ptmove.y-10,20,20)
	}

if((action==DRAG_TABLE)||(action==DRAG_DUSTBIN)||(action==DRAG_HELP)||(action==DRAG_ADD)||(action==DRAG_CLONE)||
	(action==EXPORT_CHART)||(action==DRAG_SORT))
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-10,ptmove.y-10,20,20);
	}

if((action==ADD_LABEL)||(action==SHOW_LABEL))
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-100,0-barshift,100,labels.length*20);
	}
if((action==SORT_DATA)&&(labelindex>=0))
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-120,myheight-40,20,20);
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

if(action==CREATE_SLICE)
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

if((action==DRAG_TOPLABEL)||(action==DRAG_TOPVALUE))
	{
	var graph = graphs[graphindex]		
	ctx.fillStyle = GRAY
	ctx.fillRect(ptmove.x-50,graph.y+graph.hbar+5,100,20)
	}
else if((action==REMOVE_TOPLABEL)||(action==REMOVE_TOPVALUE))
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
	}

if((action==DRAG_LEFTLABEL)||(action==DRAG_LEFTVALUE))
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+5,ptmove.y-50,20,100)
	}
else if((action==REMOVE_LEFTLABEL)||(action==REMOVE_LEFTVALUE))
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-10,ptmove.y-10,20,100)
	}
else if(action==DRAG_BOTTOMLABEL)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(ptmove.x-50,graph.y+graph.h-25,100,20)
	}
else if(action==REMOVE_BOTTOMLABEL)
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
	}
else if((action==REMOVE_LABELN)||(action==REMOVE_VALUEI)||(action==REMOVE_VALUEJ))
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
	if(graph.type==TYPE.PIE)
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
	else if(graph.type==TYPE.BAR)
		{
		ctx.fillStyle = GRAY
		ctx.fillRect(graph.x,graph.y+graph.hbar,graph.w,
			graph.h-graph.hbar-20)
		}
	}

if((action==PASTE_LABEL11)||(action==PASTE_LABEL21)||(action==SWAP_LABEL_LT)||
	(action==PASTE_BINLABEL11)||(action==SWAP_LABEL_BT))
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex2]
	ctx.fillRect(graph.x+graph.w-100-graph.topshift,graph.y+graph.hbar+5,100,20)
	}
else if((action==PASTE_LABEL12)||(action==PASTE_LABEL22)||(action==SWAP_LABEL_TL)||(action==PASTE_BINLABEL12)||(action==SWAP_LABEL_BL))
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex2]
	ctx.fillRect(graph.x+5,graph.y+graph.hbar+graph.leftshift,20,100)
	}
else if(action==SWAP_LABELN)
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex]
	ctx.fillRect(graph.x+graph.w-105,graph.y+graph.hbar+5+25*destlabelindex,100,20)
	}
else if((action==SWAP_VALUEI)||(action==SWAP_VALUEJI))
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex]
	var y = graph.y+graph.hbar+5+25*destvalueindex;
	ctx.fillRect(graph.x+graph.w-105,y,100,20)
	}
else if((action==SWAP_VALUEJ)||(action==SWAP_VALUEIJ))
	{
	ctx.fillStyle = GRAY;
	var graph = graphs[graphindex];
	var y = graph.y+graph.hbar+5+25*graph.ivalues.length+50+25*destvalueindex;
	ctx.fillRect(graph.x+graph.w-105,y,100,20);
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
else if((action==CREATE_VALUE)||(action==ADD_VALUE)||(action==CREATE_PROJECTION)||(action==CREATE_VBOOLEAN)||(action==SHOW_VALUE))
	{	
	var ni = Math.ceil(NBTYPE3/5)
	ctx.fillStyle = GRAY
	ctx.fillRect(mywidth-100,labels.length*20+20+ni*20+20-barshift,100,values.length*20)
	}
else if((action==SORT_DATA)&&(valueindex>=0))
	{
	var ni = Math.ceil(NBTYPE3/5)
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-120,myheight-40,20,20);
	ctx.fillRect(mywidth-100,
		labels.length*20+20+ni*20+20+20*valueindex-barshift,100,20);
	}
else if((action==CREATE_LABEL)||(action==CREATE_KGROUP)||(action==CREATE_LBOOLEAN))
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
else if(action==PIVOT_DATA)
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-100,0,100,labels.length*20);
	}

// type menu if needed
if(faction==SELECT_TYPE)
	drawTypeMenu(ctx);

if(faction==SELECT_OPTION)
	drawOptionMenu(ctx);

// message
ctx.fillStyle = "#FFFFFF";
ctx.strokeStyle = "#000000";
ctx.fillRect(0,myheight-20,mywidth,20);

ctx.fillStyle = "#000000";
ctx.fillRect(0,myheight-20,mywidth,1);
//ctx.strokeRect(0,myheight-20,mywidth,20)

// draw version number
ctx.fillStyle = "#CCCCCC";
ctx.textAlign = "left";
ctx.fillText(VERSION,5,myheight-5)

// draw memory usage
var mem= process.memoryUsage();
ctx.strokeStyle = "#CCCCCC";
ctx.strokeRect(40,myheight-15,50,10);
ctx.fillRect(40,myheight-15,50*mem.heapUsed/mem.heapTotal,10);

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

//*********************************************************************

function drawTypeMenu(ctx)
{
var font = ctx.font;
ctx.font = "12px helvetica";

var x = ptclick.x;
var y = ptclick.y;
ctx.textAlign="center";

for(var i=0;i<KNUM;i++)
	{
	ctx.fillStyle = i < NBTYPE1 ? PINK : BLUE;
	ctx.fillRect(x,y+i*14,200,14);
	ctx.fillStyle = "#000000";
	ctx.fillText(GINFO[i].help,x+100,y+i*14+12);
	}

if(typeindex>=0)
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(x,y+typeindex*14,200,14);
	}

ctx.strokeStyle = "#000000";
ctx.strokeRect(x,y,200,14*KNUM);

}

//*********************************************************************

function drawOptionMenu(ctx)
{
if(graphindex<0) return;

var graph = graphs[graphindex];
var no = GINFO[graph.type].options;
if(!no) return;

var font = ctx.font;
ctx.font = "12px helvetica";
ctx.textAlign = "center";

var x = ptclick.x
var y = ptclick.y;
for(var i=0;i<no;i++)
	{
	ctx.fillStyle = "#CCCCCC";
	ctx.fillRect(x,y+i*14,100,14);
	ctx.fillStyle = "#000000";
	ctx.fillText("Option "+(i+1),x+50,y+i*14+12);
	}

if(optionindex>=0)
	{
	ctx.fillStyle = GRAY;	
	ctx.fillRect(x,y+optionindex*14,100,14);
	}

ctx.strokeStyle = "#000000";
ctx.strokeRect(x,y,100,14*no);
}

//*********************************************************************

function drawGraphOption(ctx,graph)
{
var max = GINFO[graph.type].options;
if(!max) return;

for(var i=0;i<max;i++)
	{
	ctx.strokeStyle = (graph.option%max)==i ? "#000000" : GRAY;
	ctx.beginPath();
	ctx.moveTo(graph.x+18+i*5,graph.y+4);
	ctx.lineTo(graph.x+18+i*5,graph.y+12);
	ctx.stroke();
	}
}

//*********************************************************************

function getGraphLabel(graph,name)
{
var k = GINFO[graph.type][name];
if(!k)
	return "";
else if(graph["ilabel"+k]<0)
	return "";
else
	return labels[graph["ilabel"+k]];
}

//*********************************************************************

function getGraphValue(graph,name)
{
var k = GINFO[graph.type][name];
if(!k)
	return "";
else if(graph["ivalue"+k]<0)
	return "";
else
	return values[graph["ivalue"+k]];
}

//*********************************************************************

function drawGraphSlots(ctx,graph)
{
if(GINFO[graph.type].toplabel)
	{
	var title = getGraphLabel(graph,"toplabel");
	drawHLabel(ctx,graph.x+graph.w-SLOTW-graph.topshift,graph.y+graph.hbar+5,title);
	}

if(GINFO[graph.type].leftlabel)
	{
	var title = getGraphLabel(graph,"leftlabel");
	drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.leftshift,title);
	}

if(GINFO[graph.type].bottomlabel)
	{
	var title = getGraphLabel(graph,"bottomlabel");
	drawHLabel(ctx,graph.x+graph.w-SLOTW-graph.bottomshift,graph.y+graph.h-25,title);
	}

if(GINFO[graph.type].ilabels)
	{
	for(var k=0;k<graph.ilabels.length;k++)
		{
		var title = labels[graph.ilabels[k]]
		drawHLabel(ctx,graph.x+graph.w-SLOTW-5,graph.y+graph.hbar+5+25*k,title)
		}
	drawHLabel(ctx,graph.x+graph.w-SLOTW-5,graph.y+graph.hbar+5+25*graph.ilabels.length,"")
	}

if(GINFO[graph.type].topvalue)
	{
	var title = getGraphValue(graph,"topvalue");
	drawHValue(ctx,graph.x+graph.w-SLOTW-graph.topshift,graph.y+graph.hbar+5,title);
	}

if(GINFO[graph.type].leftvalue)
	{
	var title = getGraphValue(graph,"leftvalue");
	drawVValue(ctx,graph.x+5,graph.y+graph.hbar+graph.leftshift,title);
	}

if(GINFO[graph.type].bottomvalue)
	{
	var title = getGraphValue(graph,"bottomvalue");
	drawHValue(ctx,graph.x+graph.w-SLOTW-graph.bottomshift,graph.y+graph.h-25,title);
	}

var dy = SLOTH+5;
if(GINFO[graph.type].ivalues)
	{
	for(var k=0;k<graph.ivalues.length;k++)
		{
		var title = values[graph.ivalues[k]]
		drawHValue(ctx,graph.x+graph.w-SLOTW-5,graph.y+graph.hbar+5+dy*k,title)
		}

	drawHValue(ctx,graph.x+graph.w-SLOTW-5,graph.y+graph.hbar+5+dy*graph.ivalues.length,"");
	}

if(GINFO[graph.type].jvalues)
	{
	var y = graph.y+graph.hbar+5+dy*graph.ivalues.length+dy+dy;
	for(var k=0;k<graph.jvalues.length;k++)
		{
		var title = values[graph.jvalues[k]];
		drawHValue(ctx,graph.x+graph.w-SLOTW-5,y,title);
		y += dy;
		}

	drawHValue(ctx,graph.x+graph.w-SLOTW-5,y,"");
	}

}

//*********************************************************************

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

	for(var i=0;i<graphs.length;i++)
		computeGraphData(graphs[i]);
}

//*********************************************************************

function format(fmt) {
	var args = arguments;
	return fmt.replace(/\{\{\d+\}\}/g,function(x) {
		return args[Number(x.match(/\d+/))]	
	});

}

//*********************************************************************
//
//                COMPUTATION
//
//*********************************************************************


function correlation(a,b)
{
var n = a.length;

var sa = 0;
var sb = 0;
var sab = 0;
var saa = 0;
var sbb = 0;

for(var i=0;i<n;i++)
	{
	sa += a[i];
	sb += b[i];
	sab += a[i]*b[i];
	saa += a[i]*a[i];
	sbb += b[i]*b[i];
	}

var x = sab-sa*sb/n;
var y = saa-sa*sa/n;
var z = sbb-sb*sb/n;

return x/Math.sqrt(y*z);
}

//*********************************************************************

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

//*********************************************************************


var BIGX = 20.0;                  /* max value to represent exp(x) */

function ex(x) {
	return (x < -BIGX) ? 0.0 : Math.exp(x);
}

//*********************************************************************

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

//*********************************************************************

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

//*********************************************************************

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

//*********************************************************************

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

}

//*********************************************************************

function LJspin(q,i,j,b) {
var zz=1;
var z=zz;
var k=i;
while(k<=j) { zz=zz*q*k/(k-b); z=z+zz; k=k+2 }
    return z
}

//*********************************************************************

function Finv(min,max,value,d1,d2)
{
for(var i=0;i<20;i++)
	{
	var med = (min+max)/2;
	var x = Fspin(med,d1,d2);
	if(x>value)
		min = med;
	else
		max = med;
	}

return med;
}

//*********************************************************************

function chi2inv(min,max,value,ddl)
{
for(var i=0;i<30;i++)
	{
	var med = (min+max)/2;
	var x = critchi(med,ddl);
	if(x>value)
		min = med;
	else
		max = med;
	}
return med;
}

//*********************************************************************

function gamma(z)
{
	var  RECIP_E = 0.36787944117144232159552377016147;
    var TWOPI = 6.283185307179586476925286766559;

    var d = 1.0 / (10.0 * z);
    d = 1.0 / ((12 * z) - d);
    d = (d + z) * RECIP_E;
    d = Math.pow(d, z);
    d *= Math.sqrt(TWOPI / z);

    return d;
}

//*********************************************************************

function beta(x,y)
{
return gamma(x)*gamma(y)/gamma(x+y);
}

//*********************************************************************

function chi2density(x,k)
{
var a = Math.pow(x,k/2-1);
var b = Math.exp(-x/2);
var c = Math.pow(2,k/2);
return a*b/c/gamma(k/2);
}

//*********************************************************************

function fisherdensity(x,d1,d2)
{
var a = Math.pow(d1*x,d1/2);
var b = Math.pow(d2,d2/2);
var c = Math.pow(d1*x+d2,(d1+d2)/2);
var d = x*beta(d1/2,d2/2);
return a*b/c/d;
}

//*********************************************************************

function quote(s)
{
return '"'+s+'"';
}

//*********************************************************************

function clone(o)
{
if(o instanceof Array)
	{
	var newo = new Array(o.length);
	for(var i=0;i<o.length;i++)
			newo[i] = clone(o[i]);
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

//*********************************************************************

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
}

//*********************************************************************

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
}

//*********************************************************************

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
}

//*********************************************************************

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
}

//*********************************************************************

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

//*********************************************************************

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

//*********************************************************************

