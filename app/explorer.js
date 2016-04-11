var remote = require("electron").remote;
var console = remote.getGlobal("console");
var ipc = require("electron").ipcRenderer;

// check if console if working
try	{
	console.log("TEST");
	}
catch(e)
	{
	console = {log:function(){}};
	}

/***************************************************************************/
// CONSTANTS

var VERSION = "1.101";

/***************************************************************************/


var AHELP = {};

var ANUM = 0;
_action("","");
_action("DRAG_GRAPH","");
_action("RESIZE_GRAPH","Resize graph");
_action("KEEP_GRAPH","");
_action("CLOSE_GRAPH","Close graph");
_action("DRAG_SLICE","Create graph from selection");
_action("CREATE_SLICE","Create graph from selection");
_action("DRAG_LABEL","");
_action("SET_TOPLABEL","Set definition");
_action("SET_LEFTLABEL","Set definition");
_action("SET_BOTTOMLABEL","Set definition");
_action("SET_RIGHTLABEL","Set defintion");
_action("DRAG_TOPLABEL","");
_action("DRAG_LEFTLABEL","")
_action("DRAG_BOTTOMLABEL","");
_action("DRAG_RIGHTLABEL","");
_action("REMOVE_TOPLABEL","Remove definition");
_action("REMOVE_LEFTLABEL","Remove definition");
_action("REMOVE_BOTTOMLABEL","Remove definition");
_action("REMOVE_RIGHTLABEL","Remove definition");
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
_action("SET_VALUESELECTION","Change selection");
_action("CREATE_GRAPH1","Create graph from axis 1");
_action("CREATE_GRAPH2","Create graph from axis 2");
_action("CONVERT_LABEL","Create dummies");
_action("CONVERT_VALUE","Convert to categorical");
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
_action("SWAP_LABEL_TL","Swap definitions");
_action("SWAP_LABEL_LT","Swap definitions");
_action("SWAP_LABEL_TB","Swap definitions");
_action("SWAP_LABEL_BT","Swap definitions");
_action("SWAP_LABEL_LB","Swap definitions");
_action("SWAP_LABEL_BL","Swap definitions");
_action("SWAP_LABEL_TR","Swap definitions");
_action("SWAP_LABEL_LR","Swap definitions");
_action("SWAP_LABEL_BR","Swap definitions");
_action("SWAP_LABEL_RT","Swap definitions");
_action("SWAP_LABEL_RB","Swap definitions");
_action("SWAP_LABEL_RL","Swap definitions");
_action("CREATE_BINSET","Create set");
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
_action("DRAG_PICTURE","Generate picture...");
_action("SHOW_PICTURE","Generate picture of graph");
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
_action("CREATE_VBOOLEAN","Create dummy from selection");
_action("CREATE_LBOOLEAN","Create dummy from selection");
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
_action("ROTATE_VIEW","Rotate 3D view");
_action("SELECT_OPTION","Select graph option");
_action("PIVOT_DATA","Pivot data");
_action("DRAG_ORIGIN","Change circle origin");
_action("CHANGE_ORIENTATION","Change orientation");
_action("SET_ADD","");
_action("SET_REMOVE","");
_action("DRAG_SET","");
_action("SAVE_LABELSET","Save set");
_action("SAVE_VALUESET","Save set");
_action("SELECT_MENUITEM","");
_action("SELECT_TYPE","Select graph type");
_action("REORDER_KEY","Reorder key");
_action("SCROLL_LABELS","");
_action("SCROLL_VALUES","");
_action("RESIZE_LABELS","Resize list");
_action("RESIZE_VALUES","Resize list");
_action("DRAG_RESULT","");
_action("CREATE_RESULT","Create field from result");
_action("PASTE_RESULT_LEFT","Set definition");
_action("PASTE_RESULT_TOP","Set definition");
_action("PASTE_RESULT_I","Add field");
_action("PASTE_RESULT_J","Add field");
_action("DRAG_VALUELIST","");
_action("DRAG_LABELLIST","");
_action("SWAP_CORNERS","Swap axes");
_action("REMOVE_RECORDS","Remove % records");


// actions that gray the graph
var GACTIONS = {}
	GACTIONS[SET_TYPE] = 1;
	GACTIONS[SHOW_TABLE] = 1;
	GACTIONS[SHOW_HELP] = 1;
	GACTIONS[CLONE_GRAPH] = 1;
	GACTIONS[EXPORT_CHART] = 1;
	GACTIONS[CHANGE_DISPLAY] = 1;
	GACTIONS[SHOW_PICTURE] = 1;
	

/***************************************************************************/
//
// POSSIBLE OPTIONS :
//	
// bin : has local bin to temporarily remove categories
// toplabel: has top label	( categorical field )
// leftlabel : has lelf label
// bottomlabel : has bottom label
// rightlabel : has right label
// leftvalue: has left value ( numerical field )
// topvalue: has top value
// bottomvalue: has bottom value
// rightvalue: has right value
// display : can change point representation into text
// ivalues : has list of values ( numerical fields )
// jvalues : has second list of values
// ilabels : has list of labels ( categorical fields)
// options : number of options of representation
// unit : graph accept unit change

var GINFO = {};
var TYPE = {};

var KNUM = 0;
_type("PIE","Pie chart",{toplabel:1,bin:1,options:2,unit:1});
_type("BAR","Bar chart",{toplabel:1,leftlabel:2,bin:1,options:4,unit:1});
_type("TAG","Word cloud",{toplabel:1,unit:1});
_type("SOL","Solidarity",{toplabel:1,leftlabel:2,unit:1});
_type("ARC","Arc diagram",{toplabel:1,leftlabel:2,options:2,unit:1});
_type("CROSS","Contingency table",{toplabel:1,leftlabel:2,options:4,unit:1});
_type("ASSOC","Associations",{toplabel:1,leftlabel:2,unit:1});
_type("FAC","Multiple Correspondence analysis",{ilabels:1,bin:1,options:2,unit:1});
//_type("SOM","Self-organizing map",{toplabel:1,leftlabel:2});
_type("THREE","Graph 3",{toplabel:1,leftlabel:2,bottomlabel:3,unit:1});
_type("TREE","Treemap",{ilabels:1,unit:1});
_type("PACK","Packed circles",{toplabel:1,leftlabel:3,unit:1});
_type("CHI2","Chi square test",{toplabel:1,leftlabel:2,menu:"chi2",unit:1});
_type("HOMO","Homogeneity",{toplabel:1,leftlabel:2,menu:"homo",unit:1});
_type("SET","Dummy constructor",{leftlabel:1});

var NBTYPE1 = KNUM;			// max graph types

_type("MOMENTS","Statistics",{ivalues:1});
_type("HISTO","Histogram",{topvalue:1,leftlabel:1});
_type("LINE","Line graph",{toplabel:1,rightlabel:2,leftvalue:1});
_type("NORM","Normality tests",{topvalue:1,menu:"norm"});
_type("DISTRIB","Distribution curve",{topvalue:1});
_type("PROBA","Q-Q plot",{leftvalue:2,rightlabel:3,menu:"law"});
_type("TUKEY","Tukey lambda PPCC plot",{leftvalue:2});
_type("SCATTER","Scatter plot",{topvalue:1,leftvalue:2,bottomlabel:1,rightlabel:3,options:2,unit:1});
_type("POLAR","Polar plot",{topvalue:1,leftvalue:2,bottomlabel:1,rightlabel:3,options:2,menu:"angle",unit:1});
_type("LAG","Lag plot",{topvalue:1});
_type("CORR","Correlations",{ivalues:1,options:2});
_type("AUTOCORR","Autocorrelation plot",{topvalue:1});
_type("ACP","Principal components",{ivalues:1,bottomlabel:1,rightlabel:3,options:3,unit:1});
_type("CANON","Canonical correlation analysis",{bottomlabel:1,ivalues:1,jvalues:1,rightlabel:3,options:5,unit:1});
_type("CLUSTERING","Clustering",{ivalues:1,menu:"clustering"});
//_type("TYPE_HUEN","Huen diagram");
_type("DENDRO","Dendrogram",{ivalues:1,options:2});
_type("RADVIZ","Radviz",{ivalues:1,leftlabel:1,rightlabel:3,unit:1});
_type("TERNARY","Ternary plot",{ivalues:1,leftlabel:1,rightlabel:3,unit:1});
_type("SURVEY","Survey plot",{ivalues:1,leftlabel:1});
_type("ANDREW","Andrew's curves",{ivalues:1,leftlabel:1});
_type("G3D","3D plot",{ivalues:1,leftlabel:1});

var NBTYPE2 = KNUM; 		//  max plot types

_type("DISCRI","Discriminant analysis",{ivalues:1,bottomlabel:1,rightlabel:3,options:3,unit:1});
_type("TEST","Analysis of variance",{jvalues:1,ilabels:1,menu:"test",options:3});
_type("NONPARAM","Non parametric tests",{ilabels:1,leftvalue:1,menu:"nonparam",options:2});
_type("BOX","Box plot",{ivalues:1,leftlabel:1});
_type("REGRES","Regression",{ivalues:1,leftvalue:1,options:3,menu:"regr"});
_type("PARA","Parallel coordinates",{ivalues:1,leftlabel:1,options:2});
_type("PALETTE","Palette");
_type("WELCOME","Welcome");

var NBTYPE3 = KNUM;			// max total types

/***************************************************************************/

var ZNUM = 0;
var TOOL = {};

_tool("DUSTBIN");
_tool("SHOW");
_tool("PICTURE");
_tool("HELP");
_tool("ADD");
_tool("CLONE");
_tool("SORT");

/***************************************************************************/

var MENUWIDTH = 180;
var MNUM = 0;
var MENU = {};

_menu("TEST","ANOVA","F-test");
_menu("TEST","STUDENT","Student T-test");
_menu("TEST","WELCH","Welch T-test");
_menu("TEST","HOTELLING","Hotelling's T\u00B2 test");
_menu("TEST","-","-");
_menu("TEST","BARTLETT","Bartlett's test");
_menu("TEST","LEVENE","Levene's test");
_menu("TEST","BROWN","Brown-Forsythe test");
_menu("TEST","-","-");
_menu("TEST","BOXM","Box's M test");
_menu("TEST","-","-");
_menu("TEST","LAWLEY","Lawley-Hotelling's trace");
_menu("TEST","PILLAI","Pillai's trace");
//_menu("TEST","ROY","Roy's largest root");
_menu("TEST","WILK","Wilk's lambda");
_menu("TEST","-","-");
_menu("TEST","TWO","Two-way ANOVA");


_menu("CHI2","PEARSON","Pearson's \u03C72 test");
_menu("CHI2","YATES","Yates' \u03C72 test");
_menu("CHI2","G","G-test");
_menu("CHI2","EXACT","Fisher's exact test");

_menu("LAW","NORMAL","Normal");
_menu("LAW","UNIFORM","Uniform");
_menu("LAW","LOGNORMAL","Log-Normal");
_menu("LAW","EXPONENTIAL","Exponential");

_menu("CLUSTERING","KMEANS","K-means");
_menu("CLUSTERING","KMEDOIDS","K-medoids");
_menu("CLUSTERING","FUZZY","FUzzy C-means");

_menu("ANGLE","RADIAN","Radians");
_menu("ANGLE","DEGREE","Degrees");

_menu("HOMO","GINI","Gini impurity");
_menu("HOMO","ENTROPY","Entropy");

_menu("REGR","ONE","Linear");
_menu("REGR","TWO","Second degree");
_menu("REGR","THREE","Third degree");
_menu("REGR","-","-");
_menu("REGR","LARS","Least angle");
_menu("REGR","-","-");
_menu("REGR","LOGIS","Logistic (binary)");
_menu("REGR","LOGIS2","Logistic (count)");
_menu("REGR","-","-");
_menu("REGR","POISSON","Poisson");
_menu("REGR","NEGBIN","Negative binomial");

_menu("NORM","WILK","Shapiro-Wilk");
_menu("NORM","ANDERSON","Anderson-Darling");
_menu("NORM","LILLIE","Lilliefors");
_menu("NORM","-","-");
_menu("NORM","AGOSTINO","Agostino");
_menu("NORM","ANSCOMBE","Anscombe");
_menu("NORM","OMNIBUS","Omnibus");
_menu("NORM","JARQUE","Jarque-Bera");

//_menu("NONPARAM","MANN","Mann-Whitmey");
_menu("NONPARAM","KOLMO","Kolmogorov-Smirnov");
_menu("NONPARAM","KRUSKAL","Kruskal-Wallis");
_menu("NONPARAM","JONCK","Jonckheere");
_menu("NONPARAM","-","-");
_menu("NONPARAM","COCHRAN","Cochran Q");
_menu("NONPARAM","DURBIN","Durbin");
_menu("NONPARAM","FRIEDMAN","Friedman");
_menu("NONPARAM","-","-");
_menu("NONPARAM","MANTEL","Mantel-Haenszel");
_menu("NONPARAM","BRESLOW","Breslow-Day");
_menu("NONPARAM","WOOLF","Woolf");

/***************************************************************************/

var NIL = "\r"
var TAB = "\t";

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

var ORDER = ["descending","ascending"];

var PREC = 1000000;

//***************************************************************************
//***************************************************************************

var myconfig = null;
var mylocale;

var mywindow = null;
var canvas = null;
var hdotted = null;
var vdotted = null;

var mywidth = 0;
var myheight = 0;

var graphs = [];		// all the active graphs
var dock = [];			// all the docked graphs
var formulas = [];		// all the formulas

var lrecords = [];		// records with the labels (textual)
var vrecords = [];		// records with the values (numerical)

var labels = [];
var alabel = 0;			// first visible label
var zlabel = 0;			// last visible label +1
var slabel = false;		// mouse in scrollbar
var hlabel = false;		// mouse in handle

var values = [];
var avalue = 0;			// first visible value
var zvalue = 0;			// last visivle value +1
var svalue = false;		// mouse in scrollbar
var hvalue = false;		// mouse in handle

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
var slicesize = 0;
var labelindex = -1
var testindex = -1;
var destlabelindex = -1
var destvalueindex = -1
var typeindex = -1
var optionindex = -1;
var valueindex = -1
var valueindex2 = -1;
var titleindex = -1
var menuindex = -1;
var resultkey = null;

var selection = null;
var selecthue = 0;

var lastsort = 0;
var lastorder = 0;

var animtimer = null
var newfield = 0;

var randomfiles = [];
var retrying = false;

//***************************************************************************
//***************************************************************************

ipc.on("start",  function (event,filename)
{
	
	var loader = require("./loader");

	loader.load(filename,loaded)

	function loaded(data)
	{
	if((data==null)||(data.length==0))
		{
		console.log("NULL DATA");
		window.close();
		retrying = true;
		ipc.sendSync("reader");
		return;
		}

	ipc.send("title",filename);
	init(data);
	}
});

//***************************************************************************

ipc.on("locale", function(event,locale) {
	mylocale = locale;
});

ipc.on("clipboard", function(event,content)
{
console.log("explorer received clipboard "+content.length);


var loader = require("./loader");
loader.clipboard(content,loaded);

console.log("loader sent");

function loaded(data)
	{
	console.log("loaded");
	if((data==null)||(data.length==0))
		{
		console.log("NULL DATA");
		window.close();
		ipc.sendSync("reader");
		return;
		}

	init(data);
	}
	
});

//***************************************************************************

function init(data)
{

canvas = document.getElementById("canvas");

window.addEventListener("mousedown", down);
window.addEventListener("mousemove", move);
window.addEventListener("mouseup", up);
window.addEventListener("resize", draw);
window.addEventListener("mousewheel", wheel);
window.addEventListener("beforeunload", closing);

var ctx = canvas.getContext("2d");

var himg = new Image();
himg.src = "./hdotted.png";
himg.onload = function(){
	hdotted = ctx.createPattern(himg,"repeat");
	}

var vimg = new Image();
vimg.src = "./vdotted.png";
vimg.onload = function() {
	vdotted = ctx.createPattern(vimg,"repeat");
	}

loadData(data);

/*
if(graphs.length==0)
	{	
	var g = new Graph(20,80,true,[],-1,0,TYPE.WELCOME);
	computeGraphData(g);
	graphs.push(g);
	}
*/

draw();

}

//***************************************************************************

function closing()
{
var fs = require("fs");
for(var i=0;i<randomfiles.length;i++)
	{
	console.log("removing "+randomfiles[i]);
	fs.unlinkSync(randomfiles[i]);	
	}

if(!retrying)
	ipc.sendSync("exit");
}

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
GINFO[KNUM].wheel = pointer("wheel"+rname+"Graph");

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

this.ilabel2 = -1;
this._keys2 = [];

this.ivalue2 = -1;

this.ilabel3 = -1;
this._keys3 = [];

this.ilabels = [];		// list of labels

this.ivalues = [];		// list of values
this.jvalues = [];		// second list of values

this.omit = {};

this.error = null;

this.type = type;

this.option = 0;		// current option
this.options = [];		// options titles

this.origin = 0;		// for TYPE.POLAR

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

// positions of slots
this.topshift = 5;
this.leftshift = 5;
this.bottomshift = 5;
this.rightshift = 5;
this.uppershift = 5;

this.xshift = 0	;	// scrolling
this.yshift = 0	;

this.contour = null;
this.ncontour = 0;

this.stickers = [];

this.iunit = 0;

// axes orientation
this.fromCorner = -1;
this.toCorner = -1;
this.xsign = 1;
this.ysign = 1;

this.placeholder = {};	// labelling the slots
this.limit = {};		// limiting the slots
this.limit.ivalues = 99;
this.limit.jvalues = 99;
this.limit.ilabels = 99;

// if this type has menu
initMenu(this);
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

alabel = 0;
zlabel = Math.min(labels.length,10);

avalue = 0;
zvalue = Math.min(values.length,10);
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
		var m = Math.round(mat[i][j]*PREC)/PREC;
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
h = frac(h);
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
var y = pt.y;

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

function inLabelScrollBar(pt)
{
if(zlabel-alabel>=labels.length) return false;

if(pt.x<mywidth-20) return false;
if(pt.y>(zlabel-alabel)*SLOTH) return false;
return true;
}

//*********************************************************************

function inLabelHandle(pt)
{
if(pt.x<mywidth-60) return false;
if(pt.x>mywidth-40) return false;
if(pt.y<(zlabel-alabel)*SLOTH) return false;
if(pt.y>(zlabel-alabel)*SLOTH+20) return false;
return true;
}

//*********************************************************************

function inValueScrollBar(pt)
{
if(zvalue-avalue>=values.length) return false;

var ni = Math.ceil(NBTYPE3/5)
if(pt.x<mywidth-20) return false;
var y = (zlabel-alabel)*SLOTH+20+20*ni+20;
if(pt.y<y) return false;
if(pt.y>y+(zvalue-avalue)*SLOTH) return false;
return true;
}

//*********************************************************************

function inValueHandle(pt)
{
if(pt.x<mywidth-60) return false;
if(pt.x>mywidth-40) return false;
var ni = Math.ceil(NBTYPE3/5)
var y = (zlabel-alabel)*20+20+ni*20+20+(zvalue-avalue)*20;
if(pt.y<y) return false;
if(pt.y>y+20) return false;
return true;
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
var y = pt.y;

var ni = Math.ceil(NBTYPE3/5)
if(pt.x<mywidth-100) return -1
if(y<(zlabel-alabel)*20+20) return -1
if(y>=(zlabel-alabel)*20+20+20*ni) return -1
var i = Math.floor((pt.x-mywidth+100)/20)
var j = Math.floor((y-(zlabel-alabel)*20-20)/20)
var k = i+5*j
return (k<NBTYPE1) ? k : -1
}

//*********************************************************************

function inType2(pt)
{
var y = pt.y ;

var ni = Math.ceil(NBTYPE3/5)
if(pt.x<mywidth-100) return -1
if(y<(zlabel-alabel)*20+20) return -1
if(y>=(zlabel-alabel)*20+20+ni*20) return -1
var i = Math.floor((pt.x-mywidth+100)/20)
var j = Math.floor((y-(zlabel-alabel)*20-20)/20)
var k = i+5*j

return k<NBTYPE1 ? -1 : k>=NBTYPE3 ? -1 : k;
}

//*********************************************************************

function inToolIcon(pt,name)
{
return inRect(pt,mywidth-20*TOOL[name]-20,myheight-40,20,20);
}

//*********************************************************************

function inLabel(pt)
{
var y = pt.y;
if(pt.x<mywidth-100) return -1;
if(y>=(zlabel-alabel)*SLOTH) return -1;
return Math.floor(y/SLOTH)+alabel;
}

//*********************************************************************

function inValue(pt)
{
var y = pt.y;

var ni = Math.ceil(NBTYPE3/5)
if(pt.x<mywidth-100) return -1
if(y<(zlabel-alabel)*20+20+ni*20+20) return -1;
if(y>=(zlabel-alabel)*20+20+ni*20+20+20*(zvalue-avalue)) return -1;
return Math.floor((y-(zlabel-alabel)*20-20-20*ni-20)/20)+avalue;
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
	if(graphs[i].iunit==index) return true;

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
return inRect(pt,graph.x+graph.bottomshift,graph.y+graph.h-25,100,20)
}

//*********************************************************************

function inGraphRightLabel(pt,graph)
{
if(!GINFO[graph.type].rightlabel) return false;
return inRect(pt,graph.x+graph.w-25,graph.y+graph.h-SLOTW-graph.rightshift,20,100);
}

//*********************************************************************

function inGraphLabeln(pt,graph)
{
if(!GINFO[graph.type].ilabels) return false;

var y = graph.y + graph.hbar + graph.uppershift;

for(var k=0;k<graph.ilabels.length;k++)	
	if(inRect(pt,graph.x+graph.w-105,y+25*k,100,20))
		{
		destlabelindex = k
		return true
		}

if(graph.ilabels.length<graph.limit.ilabels)
	if(inRect(pt,graph.x+graph.w-105,y+25*k,100,20))
		{
		destlabelindex = k;
		return true;
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
return inRect(pt,graph.x+graph.bottomshift,graph.y+graph.h-25,100,20)
}

//*********************************************************************

function inGraphValuei(pt,graph,full)
{
if(!GINFO[graph.type].ivalues) return false;

var y = graph.y + graph.hbar + graph.uppershift;

for(var k=0;k<graph.ivalues.length;k++)	
	if(inRect(pt,graph.x+graph.w-105,y+25*k,100,20))
		{
		destvalueindex = k;
		return true;
		}

if(full)
	if(graph.ivalues.length<graph.limit.ivalues)
		if(inRect(pt,graph.x+graph.w-105,y+25*k,100,20))
			{
			destvalueindex = k;
			return true;
			}
		
return false;
}

//*********************************************************************

function inGraphValuej(pt,graph,full)
{
if(!GINFO[graph.type].jvalues) return false;


var dy = SLOTH+5;

var y = getListOffset(graph);

for(var k=0;k<graph.jvalues.length;k++)	
	if(inRect(pt,graph.x+graph.w-105,y+dy*k,100,20))
		{
		destvalueindex = k;
		return true;
		}

if(full)	
	{
	if(graph.jvalues.length<graph.limit.jvalues)
		{
		if(inRect(pt,graph.x+graph.w-105,y+dy*k,100,20))
			{
			destvalueindex = k;
			return true;
			}
		}
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

function setGraphSelection(graph,newselection)
{

var sl = graph.selection.length;
var dl = newselection.length;

/*
if(sl!=dl)
	{
	graph.selection = clone(newselection);
	}
else if(!same())
	{
	graph.selection = clone(newselection);
	}
else
	{		
	// merge last part
	if(typeof(graph.selection[sl-1])=="string")
		graph.selection[sl-1] = [graph.selection[sl-1],newselection[dl-1]];
	else
		graph.selection[sl-1].push(newselection[dl-1]);
	}
*/

for(var i=0;i<newselection.length;i+=2)
	{
	var found = false;
	for(var j=0;j<graph.selection.length;j+=2)
		{
		if(newselection[i]!=graph.selection[j]) continue;
		graph.selection[j+1] = merge(graph.selection[j+1],newselection[i+1]);
		found = true;
		break;
		}	
	if(!found)
		{		
		graph.selection.push(newselection[i]);
		graph.selection.push(newselection[i+1]);
		}
	}


graph.hbar = graph.selection.length/2*16
if(graph.hbar==0) graph.hbar = 16


	function merge(a,b)
	{	
	var ta = typeof(a)=="string"?0:1;
	var tb = typeof(b)=="string"?0:2;
	switch(ta+tb)
		{
		case 0:
			var x = [a];
			if(b!=a)
				x.push(b);
			break;

		case 1:
			var x = clone(a);
			if(indexOf(b,x)<0)
				x.push(b);
			break;
	
		case 2:
			var x = [a];
			for(var i=0;i<b.length;i++)
				if(indexOf(b[i],x)<0)
					x.push(b[i]);
			break;

		case 3:
			var x = clone(a);		
			for(var i=0;i<b.length;i++)
				if(indexOf(b[i],x)<0)
					x.push(b[i]);
			break;
		}
	return x;
	}
}

//*********************************************************************

function initCorners(graph)
{
if(!graph._z) return;
graph._z.corners = new Array(4);
for(var i=0;i<4;i++)
	graph._z.corners[i] = {x:0,y:0};

}

//*********************************************************************

function setGraphCorner(graph,corner,x,y)
{
graph._z.corners[corner].x = x;
graph._z.corners[corner].y = y;
}

//*********************************************************************

function drawCorner(ctx,graph,x,y,corner)
{

var r = 20;

ctx.fillStyle = GRAY;

ctx.beginPath();		
ctx.moveTo(x,y);
switch(corner)
	{
	case 0:
		ctx.lineTo(x+r,y);
		ctx.arc(x,y,r,0,Math.PI/2,false);
		break;

	case 1:
		ctx.lineTo(x-r,y);
		ctx.arc(x,y,r,Math.PI,Math.PI/2,true);
		break;

	case 2:
		ctx.lineTo(x+r,y);
		ctx.arc(x,y,r,0,-Math.PI/2,true);
		break;

	case 3:
		ctx.lineTo(x-r,y);
		ctx.arc(x,y,r,Math.PI,-Math.PI/2,false);
		break;
	}

ctx.closePath();
ctx.fill();	

}

//*********************************************************************

function createResult(result,func)
{

// if result not allready created
if(!result.vi)
	{
	func();
	result.vi = values.length-1;
	}

if(action==PASTE_RESULT_LEFT)
	{	
	valueindex = result.vi;
	var graph2 = graphs[graphindex2];
	setGraphValue(graph2,"leftvalue");
	}

if(action==PASTE_RESULT_TOP)
	{
	valueindex = result.vi;
	var graph2 = graphs[graphindex2];
	setGraphValue(graph2,"topvalue");
	}
	
if(action==PASTE_RESULT_I)
	{
	valueindex = result.vi;
	graph = graphs[graphindex2]
	setGraphValuei(graph);
	}

if(action==PASTE_RESULT_J)
	{
	valueindex = result.vi;
	graph = graphs[graphindex2]
	setGraphValuej(graph);
	}
}

//*********************************************************************

function initMenu(graph)
{
var menu = GINFO[graph.type].menu;
if(menu)
	graph[menu.toLowerCase()] = 0;
}

//*********************************************************************

function selectMenuItem(pt,graph,menu)
{
var x = graph.x+graph.w/2;
var y = graph.y+graph.hbar+5;
var w = 150;

for(var i=0;i<menu.length;i++)
	if(inRect(pt,x-w/2,y+20+20*i,w,20))
		if(menu[i]!="-")
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

function getGraphMenu(graph)
{
return  window["MENU"][GINFO[graph.type].menu.toUpperCase()];
}

//*********************************************************************

function setGraphDisplay(graph,index)
{
var k = GINFO[graph.type].display;
if(k)
	graph["ilabel"+k] = graph["ilabel"+k] == index ? -1 : index;
		
}

//*********************************************************************

function multiText(ctx,params,x,y)
{
for(var i=0;i<params.length;i+=2)
	{
	ctx.fillStyle = params[i];
	ctx.fillText(params[i+1],x,y);
	var l = ctx.measureText(params[i+1]).width;
	x += l;
	}

}

//*********************************************************************

function dispatch(a,graph)
{
// place values of a in the right place in b

var b = new Array(vrecords.length);
var k = 0;
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	b[i] = a[k++];
	}
return b;
}

//*********************************************************************
//
//                PIE
//
//*********************************************************************

function computePieData(graph)
{
graph.options = ["Normal","Equidistributed"];
}

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

function movePieGraph(pt,graph)
{
var index = inPieSlice(pt,graph);
if(index<0) return false;

var key = graph._keys1[index];
overlabel1 = graph.ilabel1;
overkey1 = key;
var nkey = graph._keys1.length;

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

//*********************************************************************

function downPieGraph(pt,graph)
{
var i = inPieSlice(pt,graph);
if(i<0) return -1;

selection = clone(graph.selection);
if(graph.ilabel1>=0)
	{
	selection.push(graph.ilabel1);
	selection.push(graph._keys1[i]);
	selecthue = graph.hue+alternateIndex(i,graph._keys1.length)*5.0/(6*graph._keys1.length)
	}
else
	selecthue = graph.hue;


sliceindex = i;

slicesize = graph._count[graph._keys1[sliceindex]];

return DRAG_SLICE;


}

//*********************************************************************
//
//                BAR
//
//*********************************************************************


function computeBarData(graph)
{
graph.options = ["Stacked","Percentages","Side by side","Lines"];
}

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
var hmax = graph.h-graph.hbar -50;
var option = getGraphOption(graph);


if(graph.ilabel2<0)
	{
	// one dimension
	var y = graph.y+graph.hbar+30;
	var dy = graph.h;

	var nkey = graph._keys1.length;
	var dx = graph.w/nkey
	for(var i=0;i<graph._keys1.length;i++)
		{
		var x = graph.x+i*dx;
		if(inRect(pt,x,y,dx,dy))
			return i;
		}
	}
else
	{
	// two dimensions

	if(option==0)
		{
		// stacked bars
	
		var nkey = 0;	
		var ymax = 0;
		for(var i=0;i<graph._keys1.length;i++)
			{	
			var key1 = graph._keys1[i];
			var sum = 0;
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

		try { 
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
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
		} catch(err) { console.log(err.stack) }
		}

	if(option==1)
		{
		// percentage graph
	
		var nkey = 0;
		var sum = {};
		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
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
		// side by side
		var nkey = graph._keys1.length;
		var mkey = graph._keys2.length;
		var dx = graph.w/nkey;

		var cmax = 0;
		for(var key in graph._count)
			if(key.indexOf("\t")>=0)
				if(cmax<graph._count[key])
					cmax = graph._count[key];

		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(!(key in graph._count)) continue;

				var x = graph.x+i*graph.w/nkey+j*dx/mkey;

				var dy = graph._count[key]*hmax/cmax;
				var y = graph.y+graph.h-20-dy;
				if(inRect(pt,x,y,dx/mkey,dy))
					return j+graph._keys2.length*i;
				}
			}
		}

	}

return -1
}

//*********************************************************************

function drawBarGraph(ctx,graph)
{

ctx.strokeStyle = "#000000"
var hmax = graph.h-graph.hbar -50;
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

if(graph.ilabel1>=0)
	{
	// draw separators
	ctx.fillStyle = GRAY;
	var dx = graph.w/graph._keys1.length;
	for(var i=1;i<graph._keys1.length;i++)
		{
		var x = graph.x+i*dx;		
		var y = graph.y+graph.hbar+30;
		ctx.fillRect(x,y,1,hmax);
		}
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

	if(option==3)
		{
		ctx.lineWidth = 3;
		ctx.strokeStyle = color;
		ctx.beginPath();
		}
		

	for(var j=0;j<graph._keys1.length;j++)
		{
		var key = graph._keys1[j]
		if(key in graph.omit) continue

		if(option<=2)
			{
			var x = graph.x+ikey*graph.w/nkey
			var dy = (option!=1) ? graph._count[key]*hmax/ymax : hmax;
			var y = graph.y+graph.h-20-dy

			if(hiliteMatch1(graph.ilabel1,key))
				ctx.fillStyle = hilite;
			else
				ctx.fillStyle = color;

			ctx.fillRect(x,y,dx,dy)
			ctx.fillStyle = "#000000"
			ctx.strokeRect(x,y,dx,dy)
			}
		else if(option==3)
			{
			var x = graph.x+ikey*graph.w/nkey
			var dy = graph._count[key]*hmax/ymax;
			var y = graph.y+graph.h-20-dy
			if(j==0)
				ctx.moveTo(x+dx/2,y);
			else
				ctx.lineTo(x+dx/2,y);
			}

		ikey++
		}
	
	if(option==3)
		{
		ctx.stroke();	
		ctx.lineWidth = 1;
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
				if(key in graph._count)
					var dy = graph._count[key]*hmax/ymax;
				else
					continue;

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
		// side by side
		var nkey = graph._keys1.length;
		var mkey = graph._keys2.length;
		var dx = graph.w/nkey;

		var cmax = 0;
		for(var key in graph._count)
			if(key.indexOf("\t")>=0)
				if(cmax<graph._count[key])
					cmax = graph._count[key];

		ctx.strokeStyle = "#000000";

		for(var i=0;i<graph._keys1.length;i++)
			{
			var key1 = graph._keys1[i];
			for(var j=0;j<graph._keys2.length;j++)
				{
				var key2 = graph._keys2[j];
				var key = key1+"\t"+key2;
				if(!(key in graph._count)) continue;

				if(hiliteMatch2(graph.ilabel1,key1,graph.ilabel2,key2))
					ctx.fillStyle = graph._hilites2[graph._keys2[j]]
				else
					ctx.fillStyle = graph._colors2[graph._keys2[j]]

				var x = graph.x+i*graph.w/nkey+j*dx/mkey;

				var dy = graph._count[key]*hmax/cmax;
				var y = graph.y+graph.h-20-dy;
				ctx.fillRect(x,y,dx/mkey,dy);
				ctx.strokeRect(x,y,dx/mkey,dy);				
				}
			}

		}


	if(option==3)
		{
		// lines
		var nkey = graph._keys1.length;
		var dx = graph.w/nkey;

		var cmax = 0;
		for(var key in graph._count)
			if(key.indexOf("\t")>=0)
				if(cmax<graph._count[key])
					cmax = graph._count[key];

		ctx.lineWidth = 3;

		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j];
			ctx.strokeStyle = graph._colors2[graph._keys2[j]];
			ctx.beginPath();
			var first = true;

			for(var i=0;i<graph._keys1.length;i++)
				{
				var key1 = graph._keys1[i];
				var key = key1+"\t"+key2;

				var x = graph.x+i*graph.w/nkey;
				if(key in graph._count)
					var dy = graph._count[key]*hmax/cmax;
				else
					var dy = 0;
				var y = graph.y+graph.h-20-dy;

				if(first)
					ctx.moveTo(x+dx/2,y);
				else
					ctx.lineTo(x+dx/2,y);
				first = false;
				}

			ctx.stroke();
			}
		ctx.lineWidth = 1;
		}
	}

// draw category names
ctx.font = "8px helvetica";
ctx.fillStyle = "#000000";
ctx.textAlign = "center";
var n = graph._keys1.length;
var dx = graph.w/n;
for(var i=0;i<n;i++)
	{
	ctx.fillText(graph._keys1[i],graph.x+i*dx+dx/2,graph.y+35);
	}

drawGraphBin(ctx,graph)

}

//*********************************************************************

function moveBarGraph(pt,graph)
{
var index = inBarSlice(pt,graph);
if(index<0) return false;

if(graph.ilabel2<0)
	{
	// bars

	var key = graph._keys1[index];
	overlabel1 = graph.ilabel1;
	overkey1 = key;

	var value = graph._count[key];
	var pct = value*1000/graph.total;
	pct = Math.floor(pct)/10;

	if(graph.iunit==0)
		var unit = "";
	else
		var unit = values[graph.iunit];

	value = Math.floor(value*1000)/1000.0;
	var total = Math.floor(graph.total*1000)/1000.0;

	message = key+" : "+value +" / "+total+" "+unit+" ("+pct+"%)"		
	return true;
	}
else
	{
	// two dimensions

	var index2 = index%graph._keys2.length
	var index1 = Math.floor(index/graph._keys2.length) 
	var key1 = graph._keys1[index1]
	var key2 = graph._keys2[index2]
	var value = graph._count[key1+"\t"+key2]
	if(isNaN(value)) value = 0;
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

	return true;
	}
}

//*********************************************************************

function downBarGraph(pt,graph)
{

var index = inBarSlice(pt,graph);
if(index<0) return -1;

if(graph.ilabel2<0)
	{
	// bars

	selection = clone(graph.selection);
	selection.push(graph.ilabel1);
	selection.push(graph._keys1[index]);
	selecthue = graph.hue;

	sliceindex = index;

	slicesize = graph._count[graph._keys1[index]];

	return DRAG_SLICE;
	}
else
	{
	// two dimensions
	var index2 = index%graph._keys2.length;
	var index1 = Math.floor(index/graph._keys2.length) ;
	var key1 = graph._keys1[index1];
	var key2 = graph._keys2[index2];

	selection = clone(graph.selection);

	if(graph.ilabel1>=0)
		{
		selection.push(graph.ilabel1);
		selection.push(key1);
		}

	selection.push(graph.ilabel2);
	selection.push(key2);


	sliceindex = index;
	slicesize = graph._count[key1+"\t"+key2] || 0;
	
	return DRAG_SLICE;
	}

}

//*********************************************************************
//
//                LINE
//
//*********************************************************************


function inLineSlice(pt,graph)
{
return -1;
}

//*********************************************************************

function moveLineGraph(pt,graph)
{
if(graph.ilabel1<0) return false;
if(graph.ivalue1<0) return false;


var xleft = graph.x+25;
var xright = graph.x+graph.w-115;
var ytop = graph.y + graph.hbar+30;
var ybottom = graph.y + graph.h-5;
var ylegend = graph.y + graph.hbar + 35;



if(inRect(pt,xleft,ytop,xright-xleft,ybottom-ytop))
	{

	var gmin = graph._z.gmin;
	var gmax = graph._z.gmax;
	var curve = graph._z.curve;

	var n = graph._z.nkeys;
	var dx = (xright-xleft)/n;
	var x = xleft - dx + dx/2;
	var kprev = null;
	for(var i=0;i<curve.length;i++)
		{
		if(curve[i].k!=kprev)
			{
			x += dx;
				if((pt.x>x-dx/2)&&(pt.x<x+dx/2))
				{
				var v = gmin+(pt.y-ybottom)*(gmax-gmin)/(ytop-ybottom);
				v = Math.round(v*100000)/100000;
				message = curve[i].k + "  •  "+v;
				return true;
				}
			kprev = curve[i].k;
			}
		}
	}

else if((graph.ilabel2>=0)&&inRect(pt,xright,ylegend,115,graph.y+graph.h-ylegend))
	{
	var k = Math.floor((pt.y-ylegend)/15);
	if((k>=0)&&(k<graph._z.keys2.length))
		{
		message = graph._z.keys2[k];
		overlabel1 = graph.ilabel2;
		overkey1 = graph._z.keys2[k];
		return true;
		}
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

function computeLineData(graph)
{
graph.placeholder["toplabel"] = "X-AXIS";
graph.placeholder["rightlabel"] = "CURVES";
graph.placeholder["leftvalue"] = "VALUES";


if(graph.ilabel1<0) return;
if(graph.ivalue1<0) return;

var curve = [];
var gmin = Number.MAX_VALUE;
var gmax = Number.MIN_VALUE;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var k = lrecords[i][graph.ilabel1];

	var v = vrecords[i][graph.ivalue1];
	if(v<gmin) gmin = v;
	if(v>gmax) gmax = v;

	if(graph.ilabel2<0)
		curve.push({k:k,v:v});
	else
		curve.push({k:k,v:v,k2:lrecords[i][graph.ilabel2]});
	}

curve.sort( function(a,b) { return a.k.localeCompare(b.k) } )

// count number of keys
var nkeys = 0;
var kprev = null;
for(var i=0;i<curve.length;i++)
	if(curve[i].k!=kprev)
		{
		nkeys ++;
		kprev = curve[i].k;

		}

if(gmin>0) gmin = 0;

graph._z.curve = curve;
graph._z.nkeys = nkeys;
graph._z.gmin = gmin;
graph._z.gmax = gmax;

// count number of curves ( key2 )
if(graph.ilabel2>=0)
	{
	var done = {};	
	for(var i=0;i<curve.length;i++)
		done[curve[i].k2] = 1;
	var keys2 = [];
	for(var key2 in done)
		keys2.push(key2);
	keys2.sort();
	graph._z.keys2 = keys2;
	}

}

//*********************************************************************

function drawLineGraph(ctx,graph)
{
if(graph.ilabel1<0) return;
if(graph.ivalue1<0) return;

var xleft = graph.x+25;
var xright = graph.x+graph.w-115;
var ytop = graph.y + graph.hbar+30;
var ybottom = graph.y + graph.h-5;


var curve = graph._z.curve;
var gmin = graph._z.gmin;
var gmax = graph._z.gmax;
var n = graph._z.nkeys;
if(n==0) n=1;

// draw vertical axes
var dx = (xright-xleft)/n;
var x = xleft - dx + dx/2;
var kprev = null;
ctx.fillStyle = "#EEEEEE";

for(var i=0;i<curve.length;i++)
	{
	if(curve[i].k!=kprev)
		{
		x += dx;
		ctx.fillRect(x,ytop,1,ybottom-ytop);
		kprev = curve[i].k;
		}
	}

if(graph.ilabel2<0)
	{
	// one curve

	ctx.lineWidth = 2;
	ctx.strokeStyle = "#000000";
	drawCurve(null);

	}

if(graph.ilabel2>=0)
	{

	// several curves

	for(var j=0;j<graph._z.keys2.length;j++)
		{
		ctx.lineWidth = 2;
		ctx.strokeStyle = getColor(graph.hue+j/graph._z.keys2.length,1.0,1.0);
		drawCurve(graph._z.keys2[j]);
		}

	if(overlabel1==graph.ilabel2)
		{
		ctx.lineWidth = 3;
		ctx.strokeStyle = "#000000";
		drawCurve(overkey1);
		}

	}


// draw horizontal axis
x = xleft - dx + dx/2;

ctx.lineWidth = 1;
ctx.fillStyle = "#000000";
ctx.font = "8px helvetica";
ctx.textAlign = "center";

var kprev = null;
var xlast = -100000;

for(var i=0;i<curve.length;i++)
	{
	if(curve[i].k!=kprev)
		{
		x += dx;
		var text = curve[i].k;
		var lt = ctx.measureText(text).width;
		if(x-lt/2>xlast)
			{
			ctx.fillText(curve[i].k,x,graph.y+35);
			xlast = x+lt/2;
			}
		kprev = curve[i].k;
		}
	}

// draw legend

if(graph.ilabel2>=0)
	{
	ctx.textAlign = "left";

	var keys2 = graph._z.keys2;
	var x = graph.x+graph.w-100;
	for(var j=0;j<keys2.length;j++)
		{
		var y = graph.y+graph.hbar+35+j*15;
		ctx.fillStyle = getColor(graph.hue+j/keys2.length,1.0,1.0);
		ctx.fillRect(x,y,10,10);
	
		if((overlabel1==graph.ilabel2)&&(overkey1==keys2[j]))
			{
			var l = ctx.measureText(keys2[j]).width;
			ctx.fillStyle = "#000000";
			ctx.fillRect(x+10,y,l+10,10);
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText(keys2[j],x+15,y+8);
			}
		else
			{
			ctx.fillStyle = "#000000";		
			ctx.fillText(keys2[j],x+15,y+8);
			}
		}
	}

	// ------------------------------------------------------------------

	function drawCurve(key)
	{
	var x = xleft-dx+dx/2;

	var kprev = null;
	var first = true;

	ctx.beginPath();

	for(var i=0;i<curve.length;i++)
		{
		if(curve[i].k!=kprev)
			{
			x += dx;
			kprev = curve[i].k;
			}

		if(key!=null)
			if(curve[i].k2!=key) continue;

		var y = ybottom-(curve[i].v-gmin)/(gmax-gmin)*(ybottom-ytop);

		if(first)
			ctx.moveTo(x,y);
		else
			ctx.lineTo(x,y);

		first = false;
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

function computeCrossData(graph)
{
graph.options = ["Areas","Averages","Bubbles","Tints"];

// look for maximum

var imax = -1;
var jmax = -1;
var max = -Number.MAX_VALUE;

var n1 = graph._keys1.length;
var n2 = graph._keys2.length;

var sum1 = vector(n1);
var sum2 = vector(n2);
for(var i=0;i<n1;i++)
	{
	var key1 = graph._keys1[i];
	for(var j=0;j<n2;j++)		
		{
		var key2 = graph._keys2[j];
		var key = key1+"\t"+key2;		
		if(!(key in graph._count)) continue;
		sum1[i] += graph._count[key];
		sum2[j] += graph._count[key];
		}
	}


// sort keys1 according to sum1
var I = iotaV(n1);
I.sort( function(a,b) { return sum1[b]-sum1[a] })
graph._keys1 = sortedBy(graph._keys1,I);

// sort keys2 accorind to sum2
I = iotaV(n2);
I.sort( function(a,b) { return sum2[b]-sum2[a] })
graph._keys2 = sortedBy(graph._keys2,I);
	
	function sortedBy(tab,ind)
	{
	var n = tab.length;
	var newtab = new Array(n);
	for(var i=0;i<n;i++)
		newtab[i] = tab[ind[i]];
	return newtab;
	}

}

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
	var xleft = graph.x+35;
	var xright = graph.x+graph.w-5;	
	var ytop = graph.y+graph.hbar+5+25;
	var ybottom = graph.y+graph.h-5;
	var ikey = 0;
	var dx = (xright-xleft)/graph._keys1.length;
	var dy = (ybottom-ytop)/graph._keys2.length

	var index1 = Math.floor((pt.x-xleft)/dx)
	var index2 = Math.floor((pt.y-ytop)/dy)

	var key = graph._keys1[index1]+"\t"+graph._keys2[index2]

	return index2 + graph._keys2.length*index1;
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

	// draw grid
	var xleft = graph.x+35;
	var xright = graph.x+graph.w-5;	
	var ytop = graph.y+graph.hbar+5+25;
	var ybottom = graph.y+graph.h-5;
	var ikey = 0;

	var n1 = graph.ilabel1 >=0 ? graph._keys1.length : 1;
	var dx = (xright-xleft)/n1;

	var n2 = graph.ilabel2 >= 0 ? graph._keys2.length : 1;
	var dy = (ybottom-ytop)/n2;


	ctx.fillStyle = "#CCCCCC";
	for(var i=0;i<=n1;i++)
		{
		var x = Math.round(xleft +i*dx);
		ctx.fillRect(x,ytop,1,ybottom-ytop);
		}

	for(var j=0;j<=n2;j++)
		{
		var y = Math.round(ytop+  j*dy);
		ctx.fillRect(xleft,y,xright-xleft,1);
		}

if(graph.ilabel2<0)
	{	
	
	// one dimension

	var max = -Number.MAX_VALUE;
	for(var key in graph._count)
		if(!(key in graph.omit))
			if(Math.abs(graph._count[key])>max)
				max = Math.abs(graph._count[key]);
	if(max==0) max = 1;

	var xleft = graph.x+35;
	var xright = graph.x+graph.w-5;

	var dy = graph.h - graph.hbar
	var y = graph.y + graph.hbar+ dy/2
	var dx = (xright-xleft)/graph._keys1.length;
	for(var i=0;i<graph._keys1.length;i++)
		{	
		var key = graph._keys1[i]
		if(key in graph.omit) continue

		var value = Math.abs(graph._count[key]);
		var plus = graph._count[key]>=0;
		var ratio = Math.sqrt(value/max)
		var x = xleft+ dx/2 +i*dx	
		if(option<=2)
			{
			var xx = dx*ratio
			var yy = dy*ratio	

			if(plus)
				{
				if(hiliteMatch1(graph.ilabel1,key))
					ctx.fillStyle = getColor(graph.hue,1,0.5)
				else
					ctx.fillStyle = getColor(graph.hue,1,1)
				}
			else
				{
				if(hiliteMatch1(graph.ilabel1,key))
					ctx.fillStyle = getColor(graph.hue+0.5,1,0.5)
				else
					ctx.fillStyle = getColor(graph.hue+0.5,1,1)
				}
			ctx.fillRect(x-xx/2,y-yy/2,xx,yy)
			}
		else
			{
			if(hiliteMatch1(graph.ilabel1,key))
				ctx.fillStyle = getGray(graph.hue,1,0.5);
			else	
				ctx.fillStyle = getColor(graph.hue,ratio,1);

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



	// draw data
	for(var i=0;i<graph._keys1.length;i++)
		{
		var key1 = graph._keys1[i]
		var x = xleft + dx/2 +i*dx

		for(var j=0;j<graph._keys2.length;j++)
			{
			var key2 = graph._keys2[j]
			var y = ytop+ dy/2 + j*dy;

			var key = key1+"\t"+key2
			if(!(key in graph._count)) continue

			var value = Math.abs(graph._count[key]);
			var plus = graph._count[key]>=0;
			var ratio = Math.sqrt(value/max)

			var xx = dx*ratio
			var yy = dy*ratio
			
			if(plus)
				{
				if(hiliteMatch2(graph.ilabel1,key1,graph.ilabel2,key2))
					ctx.fillStyle = getColor(graph.hue,1,0.5)
				else
					ctx.fillStyle = getColor(graph.hue,1,1)
				}
			else
				{
				if(hiliteMatch2(graph.ilabel1,key1,graph.ilabel2,key2))
					ctx.fillStyle = getColor(graph.hue+0.5,1,0.5)
				else
					ctx.fillStyle = getColor(graph.hue+0.5,1,1)
				}

			if((option==0)||(option==1))
				{
				ctx.fillRect(x-xx/2,y-yy/2,xx-1,yy-1)
				}
			if(option==1)
				{
				// draw average
				ratio = Math.sqrt(sum1[key1]*sum2[key2]/gsum/max)
				xx = dx*ratio;
				yy = dy*ratio;		
				ctx.fillStyle ="#000000";
				drawRect(ctx,x-xx/2,y-yy/2,xx-1,yy-1)
				}
			if(option==2)
				{
				var r = Math.min(dx*ratio,dy*ratio)/2;
				ctx.beginPath();
				ctx.arc(x,y,r,0,Math.PI*2,false);
				ctx.fill();
				}
			if(option==3)
				{
				ctx.fillStyle = getColor(graph.hue,value/max,1);
				ctx.fillRect(x-dx/2+1,y-dy/2+1,dx-1,dy-1);
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

function moveCrossGraph(pt,graph)
{
var i = inCrossSlice(pt,graph);
if(i<0) return false;

if((graph.ilabel1>=0)&&(graph.ilabel2<0))
	{
	overlabel1 = graph.ilabel1;	
	overkey1 = graph._keys1[i];

	selection = [graph.ilabel1,graph._keys1[i]];
	slicesize = graph._count[graph._keys1[i]];
	message = graph._keys1[i]+" : "+slicesize;
	}
else if((graph.ilabel1<0)&&(graph.ilabel2>=0))
	{
	overlabel1 = graph.ilabel2;
	overkey1 = graph._keys2[i];

	selection = [graph.ilabel2,graph._keys2[i]];
	slicesize = graph._count[NIL+TAB+graph._keys2[i]];
	message = graph._keys2[i]+" : "+slicesize;
	}
else
	{	
	var i1 = Math.floor(i/graph._keys2.length);
	var i2 = i%graph._keys2.length;
	selection = [graph.ilabel1,graph._keys1[i1],graph.ilabel2,graph._keys2[i2]];
	var key = graph._keys1[i1]+"\t"+graph._keys2[i2];
	slicesize = graph._count[key] || 0;
	message = graph._keys1[i1]+" • "+graph._keys2[i2]+" : "+ slicesize;
	}

return true;
}

//*********************************************************************

function downCrossGraph(pt,graph)
{

var i = inCrossSlice(pt,graph);
if(i<0) return -1;

if((graph.ilabel1>=0)&&(graph.ilabel2<0))
	{
	selection = [graph.ilabel1,graph._keys1[i]];
	slicesize = graph._count[graph._keys1[i]];
	}
else if((graph.ilabel1<0)&&(graph.ilabel2>=0))
	{
	selection = [graph.ilabel2,graph._keys2[i]];
	slicesize = graph._count[NIL+TAB+graph._keys2[i]];
	}
else
	{	
	var i1 = Math.floor(i/graph._keys2.length);
	var i2 = i%graph._keys2.length;
	var key = graph._keys1[i1]+"\t"+graph._keys2[i2];
	slicesize = graph._count[key] || 0;
	selection = [graph.ilabel1,graph._keys1[i1],graph.ilabel2,graph._keys2[i2]];
	}

selecthue = graph.hue;

sliceindex = i;

return DRAG_SLICE;
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
graph._z.xsign = 1;
graph._z.ysign = 1;

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
	var xleft = graph.x+5;
	var xright = graph.x+graph.w-110;
	var ytop = graph.y+graph.hbar+5;
	var ybottom = graph.y+graph.h-5;
	
	var dx = (xright-xleft)/2;
	var dy = (ybottom-ytop)/2;

	var xc = xleft+dx;
	var yc = ytop+dy;

	var xmax = graph._z.xmax 
	var ymax = graph._z.ymax

	var mindist = 10*10
	var minindex = -1
	var mintype = 0

	var xscale = (dx-5)/xmax;
	var yscale = (dy-5)/ymax;
	var scale = (xscale<yscale) ? xscale : yscale

	var xsign = graph._z.xsign;
	var ysign = graph._z.ysign;

	// look for the closest point

	if(graph._z.xcol)
	for(var i=0;i<graph._z.xcol.length;i++)
		{
		var x = xc + xsign*scale*graph._z.xcol[i]
		var y = yc - ysign*scale*graph._z.ycol[i]
		var dist = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y)
		if(dist<mindist)
			{
			mindist = dist;
			minindex = i;
			mintype = 2;
			}
		}

	if(graph._z.xrow)
	for(var i=0;i<graph._z.xrow.length;i++)
		{		
		var x = xc + xsign*scale*graph._z.xrow[i]
		var y = yc - ysign*scale*graph._z.yrow[i]
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
	
	var nl = graph.ilabels.length;

	if(!x)
		return false;
	else if(nl>2)
		{
		}
	else if(x.type==1)
		{
		message = graph._z.name1[x.index];
		overlabel1 = graph.ilabels[0];
		overkey1 = graph._z.name1[x.index];
		return true
		}
	else if(x.type==2)
		{
		message = graph._z.name2[x.index];
		overlabel1 = graph.ilabels[1];
		overkey1 = graph._z.name2[x.index];
		return true
		}
	}
else if(option==1)
	{
	if(!graph._z.lambda) return false;

	var xleft = graph.x+30;
	var xright = graph.x+graph.w-10;
	var ytop = graph.y+graph.hbar+10;
	var ybottom = graph.y+graph.h-30;

	var lambda = graph._z.lambda;
	var nlambda = lambda.length;

	var suml = 0;	
	for(var i=0;i<nlambda;i++)
		suml += lambda[i];
	var dx = (xright-xleft)/nlambda;

	var k = Math.floor((pt.x-xleft)/dx);
	if(k<0) return false;
	if(k>=nlambda) return false;

	var pct = 100*lambda[k]/suml;
	message = "Factor "+(k+1)+" : "+
		(Math.round(lambda[k]*10000)/10000)+
		"  ( "+(Math.round(pct*100)/100)+"% )";
	return true;
	}

return false;
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

	var xsign = graph._z.xsign;
	var ysign = graph._z.ysign;

	ctx.font = "12px helvetica";
	ctx.textAlign = "center";

	// draw axes
	ctx.fillStyle = GRAY;
	ctx.fillRect(xleft,yc,xright-xleft,1);
	ctx.fillRect(xc,ytop,1,ybottom-ytop);

	if(nl==2)
		{		
		var over = null;

		// draw legend
		ctx.fillStyle = graph._z.colors[0];
		ctx.fillRect(graph.x+graph.w-130,graph.y+graph.hbar+5,20,20);
		ctx.fillStyle = graph._z.colors[1];
		ctx.fillRect(graph.x+graph.w-130,graph.y+graph.hbar+30,20,20);

		ctx.fillStyle = graph._z.colors[0];
		for(var i=0;i<graph._z.xrow.length;i++)
			{
			var x = xc + xsign*scale*graph._z.xrow[i];
			var y = yc - ysign*scale*graph._z.yrow[i];
			ctx.fillText(graph._z.name1[i],x,y+3);
			if((overlabel1==graph.ilabels[0])&&(overkey1==graph._z.name1[i]))
				over = [graph._z.name1[i],x,y];
			}

		ctx.fillStyle = graph._z.colors[1];
		for(var i=0;i<graph._z.xcol.length;i++)
			{
			var x = xc + xsign*scale*graph._z.xcol[i];
			var y = yc - ysign*scale*graph._z.ycol[i];
			ctx.fillText(graph._z.name2[i],x,y+3);
			if((overlabel1==graph.ilabels[1])&&(overkey1==graph._z.name2[i]))
				over = [graph._z.name2[i],x,y];
			}

		if(over)
			{
			var l = ctx.measureText(over[0]).width;
			ctx.fillStyle = "#000000";
			ctx.fillRect(over[1]-l/2-4,over[2]-9,l+8,15);
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText(over[0],over[1],over[2]+3);	
			}
		}

	else
		{
		// multi
		var over = null;
		var i = 0;
		for(var j=0;j<nl;j++)
			{
			ctx.fillStyle = graph._z.colors[j];
			ctx.fillRect(graph.x+graph.w-130,graph.y+graph.hbar+graph.uppershift+25*j,20,20);
			for(var k=0;k<graph._z.name1[j].length;k++)
				{
				var x = xc + xsign*scale*graph._z.xrow[i];
				var y = yc - ysign*scale*graph._z.yrow[i];
				ctx.fillText(graph._z.name1[j][k],x,y+3);
				if((overlabel1==graph.ilabels[j])&&(overkey1==graph._z.name1[j][k]))
					{
					over = [graph._z.name1[j][k],x,y];
					}
				i++;
				}
			}

		if(over)
			{
			var l = ctx.measureText(over[0]).width;
			ctx.fillStyle = "#000000";
			ctx.fillRect(over[1]-l/2-4,over[2]-9,l+8,15);
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText(over[0],over[1],over[2]+3);	
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

	ctx.fillStyle = getColor(graph.hue,1,1);
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

function dragFacGraph(ptmove,graph)
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
	graph._z.xsign = -graph._z.xsign;

if(graph._z.yfrom!=graph._z.yto)
	graph._z.ysign = -graph._z.ysign;

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
catch(e) { console.log(e.stack); }
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
//                NONPARAM
//
//*********************************************************************

function drawNonparamIcon(ctx,x,y)
{
var font = ctx.font;
ctx.font = "18px helvetica";
ctx.fillStyle = "#000000";
ctx.textAlign = "right";
ctx.fillText("N",x+14,y+17);
ctx.textAlign = "left";
ctx.fillText("P",x+9,y+17);
ctx.font = font;
}

//*********************************************************************

function computeNonparamData(graph)
{
if(graph.w<480)
	graph.w = 480;

graph._z = {};
graph.placeholder = {};

switch(graph.nonparam)
	{
	//case NONPARAM.MANN: computeMann(graph); break;
	case NONPARAM.KOLMO: computeKolmo(graph); break;
	case NONPARAM.KRUSKAL: computeKruskal(graph); break;
	case NONPARAM.JONCK: computeJonck(graph); break;
	case NONPARAM.COCHRAN: computeCochran(graph); break;
	case NONPARAM.DURBIN: computeDurbin(graph); break;
	case NONPARAM.FRIEDMAN: computeFriedman(graph); break;
	case NONPARAM.MANTEL: computeMantel(graph); break;
	case NONPARAM.BRESLOW: computeBreslow(graph); break;
	case NONPARAM.WOOLF: computeWoolf(graph); break;
	}

}

//*********************************************************************

function computeMann(graph)
{
if(graph.ilabels.length<1) return;
if(graph.ivalue1<0) return;

var keys = {};
var count = vector(2);
var ng = 0;
var nr = 0;
var temp = [];


for(var i=0;i<vrecords.length;i++)
	{	
	if(!recordMatch(i,graph)) continue;
	nr++;
	var key = lrecords[i][graph.ilabels[0]];
	if(!(key in keys))
		keys[key] = ng++;
	
	if(ng>2) break;

	count[keys[key]]++;
	temp.push({v:vrecords[i][graph.ivalue1],g:keys[key]});
	}

graph._z.ng = ng;
if(ng>2) return;

temp.sort( function(a,b) { return a.v-b.v });

// assign ranks
var n = temp.length;
var rank = 0;
var i=0;
while(i<n)
	{
	var ntie = 0;
	var v = temp[i].v;
	var k = i;
	while((i<n)&&(temp[i].v==v))
		{ ntie++; i++; }
	while(k<i)
		temp[k++].r = rank + (1+ntie)/2;
	rank = rank+ntie;
	}


var g1 = temp[0].g;
var n1 = count[temp[0].g];
var n2 = count[1-temp[0].g];

var r1 = 0;
var r2 = 0;
for(var i=0;i<n;i++)
	if(temp[i].g==g1)
		r1 += temp[i].r;	
	else 
		r2 += temp[i].r;

var u1 = r1 - n1*(n1+1)/2;
var u2 = r2 - n2*(n2+1)/2;


graph._z.r1 = r1;
graph._z.r2 = r2;
graph._z.u1 = u1;
graph._z.u2 = u2;
graph._z.n1 = n1;
graph._z.n2 = n2;
graph._z.n1n2 = n1*n2;
graph._z.r1r1 = u1+u2;
graph._z.mann = Math.min(u1,u2);

var q = 1.96;
var m = n1*n2/2;
var s = Math.sqrt(n1*n2*(n1+n2+1)/12);

graph._z.m = m;
graph._z.s = s;

var z = (graph._z.mann-m)/s;
graph._z.m = m;
graph._z.s = s;
graph._z.z = z;

console.log(graph._z);

}

//*********************************************************************

function computeKolmo(graph)
{

if(graph.ilabels.length<1) return;
if(graph.ivalue1<0) return;

var keys =  {};
var count = vector(2);

var ng = 0;
var ig;

var temp = [];

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	var key = lrecords[i][graph.ilabels[0]];
	
	if(!(key in keys)) 
		keys[key] = ng++;

	if(ng>2) break;

	count[keys[key]]++;
	temp.push({v:vrecords[i][graph.ivalue1],g:keys[key]});	
	}

graph._z.ng = ng;
if(ng<2)
	{
	graph.error = "Less than two categories";
	return;
	}

if(ng>2)
	{
	graph.error = "More than two categories";	
	return;
	}

temp.sort( function(a,b) { return a.v-b.v });

var kolmo = 0;
var glast = -1;
var freq = vector(2);

for(var i=0;i<temp.length;i++)
	{
	if(glast<0)	 glast = temp[i].g;

	freq[temp[i].g]++;
	
	if(glast!=temp[i].g)
		{
		var dif = Math.abs(freq[1]/count[1]-freq[0]/count[0]);
		if(dif>kolmo) 
			{
			kolmo = dif;
			vkolmo = temp[i].v;
			f1kolmo = freq[0]/count[0];
			f2kolmo = freq[1]/count[1];
			}
		}
	glast = temp[i].g;
	}

for(var key in keys)
	if(keys[key]==0)
		graph._z.key1 = key;
	else if(keys[key]==1)
		graph._z.key2 = key;

graph._z.curve = temp;
graph._z.kolmo = kolmo;
graph._z.vkolmo = vkolmo;
graph._z.f1kolmo = f1kolmo;
graph._z.f2kolmo = f2kolmo;
graph._z.level = 0.05;
graph._z.n1 = count[0];
graph._z.n2 = count[1];
graph._z.cv = 1.36*Math.sqrt((count[0]+count[1])/(count[0]*count[1]));

console.log(graph._z);
}

//*********************************************************************

function computeKruskal(graph)
{

if(graph.ilabels.length<1) return;
if(graph.ivalue1<0) return;

var done = {};
var count = [];
var keys = [];
var ng = 0;
var nr = 0;
var temp = [];


for(var i=0;i<vrecords.length;i++)
	{	
	if(!recordMatch(i,graph)) continue;
	nr++;
	var key = lrecords[i][graph.ilabels[0]];
	if(!(key in done))
		{
		count.push(0);
		keys.push(key);
		done[key] = ng++;
		}
	
	count[done[key]]++;
	temp.push({v:vrecords[i][graph.ivalue1],g:done[key]});
	}


temp.sort( function(a,b) { return a.v-b.v });

// assign ranks
var n = temp.length;
var rank = 0;
var i=0;
while(i<n)
	{
	var ntie = 0;
	var v = temp[i].v;
	var k = i;
	while((i<n)&&(temp[i].v==v))
		{ ntie++; i++; }
	while(k<i)
		temp[k++].r = rank + (1+ntie)/2;
	rank = rank+ntie;
	}


var rg = vector(ng);
var rbar = 0;
for(var i=0;i<temp.length;i++)
	{
	rg[temp[i].g] += temp[i].r;
	rbar += temp[i].r;
	}


rbar /= nr;

var num = 0;
for(var j=0;j<ng;j++)
	{
	rg[j] /= count[j];
	num += count[j]*(rg[j]-rbar)*(rg[j]-rbar);
	}

var den = 0;
for(var i=0;i<temp.length;i++)
	den += (temp[i].r - rbar)*(temp[i].r-rbar);


var kruskal = (nr-1)*num/den;

var pvalue = 1-pchisq(kruskal,ng-1);
var cv = qchisq(1-0.05,ng-1);

graph._z.num = num;
graph._z.den = den;
graph._z.rbar = rbar
graph._z.nr = nr;
graph._z.kruskal = kruskal;
graph._z.pvalue = pvalue;
graph._z.cv = cv;
graph._z.count = count;
graph._z.keys = keys;
graph._z.rg = rg;
graph._z.curve = temp;
graph._z.dof =  ng-1;

console.log(graph._z);

}

//*********************************************************************

function computeJonck(graph)
{

if(graph.ilabels.length<1) return;
if(graph.ivalue1<0) return;

var done = {}
var keys = [];
var count = [];
var nr = 0;
var ng = 0;

var scores = {};

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	var key = lrecords[i][graph.ilabels[0]];
	if(!(key  in done))
		{
		keys.push(key);
		count.push(0);
		done[key] = ng++;
		}
	count[done[key]]++;

	var v = vrecords[i][graph.ivalue1];
	if(!(v in scores))
		scores[v] = 1;
	}


// order the scores
var iscores = [];
for(var v in scores)
	iscores.push(v);

iscores.sort(function(a,b) { return a-b;})

scores= {};
for(var i=0;i<iscores.length;i++)
	scores[iscores[i]] = i;


graph._z.ng = ng;
graph._z.keys = keys;
graph._z.count = count;
graph._z.scores= scores;
graph._z.ns = iscores.length;

completeJonck(graph);

}

//*********************************************************************

function completeJonck(graph)
{

var ns = graph._z.ns;
var ng = graph._z.ng;

var scores = graph._z.scores;

var keys = {};
for(var i=0;i<graph._z.keys.length;i++)
	keys[graph._z.keys[i]] = i;

var c = new Array(ng);
for(var j=0;j<ng;j++)
	{
	c[j] = new Buffer(ns);
	c[j].fill(0);
	}

var u = vector(ng);
var t = vector(ns);

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	var key = lrecords[i][graph.ilabels[0]];
	var val = vrecords[i][graph.ivalue1];
	c[keys[key]][scores[val]]++;

	u[keys[key]]++;
	t[scores[val]]++;
	}


var p = 0;
var q = 0;
var n = 0;
for(var j=0;j<ng;j++)
	{
	for(var i=0;i<t.length;i++)		
		{
		if(c[j][i]==0) continue;
		n += c[j][i];
		for(var ii=i+1;ii<t.length;ii++)
			{
			for(var jj=0;jj<j;jj++)	
				q += c[jj][ii];
			for(var jj=j+1;jj<ng;jj++)
				p += c[jj][ii];
			}
		}
	}


// compute variance
var st3 = 0;
var su3 = 0;
var st2 = 0;
var su2 = 0;

for(var i=0;i<ns;i++)
	{
	st3 += t[i]*t[i]*t[i];	
	st2 += t[i]*t[i];	
	}
for(var j=0;j<ng;j++)
	{
	su3 += u[j]*u[j]*u[j];
	su2 += u[j]*u[j];
	}

var vars = (2*(n*n*n-st3-su3)+3*(n*n-st2-su2)+5*n)/18
	+ (st3-3*st2+2*n)*(su3-3*su2+2*n)/(9*n*(n-1)*(n-2))
	+ (st2-n)*(su2-n)/(2*n*(n-1));

var z = (p-q)/Math.sqrt(vars);

graph._z.p = p;
graph._z.q = q;
graph._z.vars = vars;
graph._z.z = z;
graph._z.cv = 1.645;
graph._z.pvalue = 1-pnorm(z);
}

//*********************************************************************

function computeDurbin(graph)
{

graph.placeholder["ilabels0"] = "BLOCKS";
graph.placeholder["ilabels1"] = "TREATMENTS";
graph.placeholder["leftvalue"] = "RATINGS";

if(graph.ilabels.length<2) return;
if(graph.ivalue1<0) return;


var blocks = {};
var treats = {};
var temp = {};

var nb = 0;
var nt = 0;

var done = {};

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var b = lrecords[i][graph.ilabels[0]];
	var t = lrecords[i][graph.ilabels[1]];

	if(!(b in blocks))
		blocks[b] = nb++;		

	if(!(t in treats))
		treats[t] = nt++;

	var key = blocks[b]+"\t"+treats[t];
	if(key in done)		
		{
		graph.error = "More than one rating per experiment";
		return;
		}
	done[key] = 1;
	}


// check balanced incomplete design
var sumb = vector(nb);
var sumt = vector(nt);
var sumtt = matrix(nt,nt);

for(var j=0;j<nb;j++)
	for(var k=0;k<nt;k++)
		{
		var key = j+"\t"+k;
		if(key in done)
			{
			sumb[j]++;
			sumt[k]++;
			}
		for(var l=0;l<nt;l++)
			{		
			if(l==k) continue;
			var key = j+"\t"+l;	
			if(key in done)
				sumtt[k][l]++;
			}
		}

for(var j=1;j<nb;j++)
	if(sumb[j]!=sumb[0])
		{
		graph.error = "Design not balanced in blocks";
		return;
		}

for(var k=1;k<nt;k++)
	if(sumt[k]!=sumt[0])
		{
		graph.error = "Design not balanced in treatments";
		return;
		}

for(var k=0;k<nt;k++)
	for(var l=0;l<nt;l++)
		if(l!=k)
			if(sumtt[k][l]!=sumtt[1][0])
				{
				graph.error = "Design not balanced in pairs of treatments";
				return;
				}

done = null;

var r = matrix(nb,nt,null);

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var b = lrecords[i][graph.ilabels[0]];
	var t = lrecords[i][graph.ilabels[1]];
	var ib = blocks[b];
	var it = treats[t];
	r[ib][it] = vrecords[i][graph.ivalue1];
	}



// transform into ranks

var ind = new Array(nt);

for(var j=0;j<nb;j++)
	{
	for(var k=0;k<nt;k++)
		ind[k] = k;
	
	ind.sort(function(a,b) { return r[j][a] - r[j][b]});

	// assign ranks
	var rank = 0;
	var i=0;
	while(r[j][ind[i]]==null) i++;
	while(i<nt)
		{
		var ntie = 0;
		var v = r[j][ind[i]];
		var k = i;
		while((i<nt)&&(r[j][ind[i]]==v))
			{ ntie++; i++; }
		while(k<i)
			r[j][ind[k++]] = rank + (1+ntie)/2;
		rank = rank+ntie;
		}
	}


var rj = vector(nt);
var a = 0;
for(var k=0;k<nt;k++)
	{
	for(var j=0;j<nb;j++)
		{
		if(r[j][k]==null) continue;
		rj[k] += r[j][k];
		a += r[j][k]*r[j][k];		
		}
	}


var c = nb*sumb[0]*(sumb[0]+1)*(sumb[0]+1)/4;

var t1 = 0;
for(var k=0;k<nt;k++)
	t1 += rj[k]*rj[k];
t1 -= sumt[0]*c;
t1 *= (nt-1)/(a-c);


var num = t1/(nt-1);
var den = (nb*sumb[0]-nb-t1)/(nb*sumb[0]-nb-nt+1);

var t2 = num/den;


graph._z.a = a;
graph._z.c = c;
graph._z.nb = nb;
graph._z.nt = nt;
graph._z.t1 = t1;
graph._z.t2 = t2;
graph._z.dof1 = sumb[0]-1;
graph._z.dof2 = nb*sumb[0]-nb-nt+1;
graph._z.cv = qf(1-0.05,graph._z.dof1,graph._z.dof2);
graph._z.pvalue = 1-pf(graph._z.t2,graph._z.dof1,graph._z.dof2);
graph._z.tperb = sumb[0];
graph._z.bpert = sumt[0];

console.log(graph._z);
}

//*********************************************************************

function computeFriedman(graph)
{

graph.placeholder["ilabels0"] = "BLOCKS";
graph.placeholder["ilabels1"] = "TREATMENTS";
graph.placeholder["leftvalue"] = "RATINGS";

if(graph.ilabels.length<2) return;
if(graph.ivalue1<0) return;

var blocks = {};
var treats = {};
var temp = {};

var nb = 0;
var nt = 0;

var done = {};

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var b = lrecords[i][graph.ilabels[0]];
	var t = lrecords[i][graph.ilabels[1]];

	if(!(b in blocks))
		blocks[b] = nb++;		

	if(!(t in treats))
		treats[t] = nt++;

	var key = blocks[b]+"\t"+treats[t];
	if(key in done)		
		{
		graph.error = "More than one rating per experiment";
		return;
		}
	done[key] = 1;
	}


for(var j=0;j<nb;j++)
	for(var k=0;k<nt;k++)
		{
		var key = j+"\t"+k;
		if(!(key in done))
			{
			graph.error = "Missing data";
			return;
			}
		}

done = null;

var r = matrix(nb,nt);

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var b = lrecords[i][graph.ilabels[0]];
	var t = lrecords[i][graph.ilabels[1]];
	var ib = blocks[b];
	var it = treats[t];
	r[ib][it] = vrecords[i][graph.ivalue1];
	}



var ind = new Array(nt);

for(var j=0;j<nb;j++)
	{
	for(var k=0;k<nt;k++)
		ind[k] = k;

	ind.sort(function(a,b) { return r[j][a] - r[j][b]});

	// assign ranks
	var rank = 0;
	var i=0;
	while(i<nt)
		{
		var ntie = 0;
		var v = r[j][ind[i]];
		var k = i;
		while((i<nt)&&(r[j][ind[i]]==v))
			{ ntie++; i++; }
		while(k<i)
			r[j][ind[k++]] = rank + (1+ntie)/2;
		rank = rank+ntie;
		}
	}



var rj = vector(nt);
var rbar = 0;
for(var k=0;k<nt;k++)
	{
	for(var j=0;j<nb;j++)
		{
		rj[k] += r[j][k];			
		rbar += r[j][k];
		}
	rj[k] /= nb;
	}

rbar /= nt*nb;

var sst = 0;
for(var k=0;k<nt;k++)
	sst += (rj[k]-rbar)*(rj[k]-rbar);
sst *= nb;


var den = nt*(nt+1)/12;

var q = sst/den;

graph._z.sst = sst;
graph._z.q = q;
graph._z.nt = nt;
graph._z.nb = nb;
graph._z.dof = nt-1;
graph._z.cv =  qchisq(1-0.05,nt-1);
graph._z.pvalue = 1-pchisq(q,nt-1);

console.log(graph._z);
}

//*********************************************************************

function computeCochran(graph)
{

graph.placeholder["ilabels0"] = "BLOCKS";
graph.placeholder["ilabels1"] = "TREATMENTS";
graph.placeholder["leftvalue"] = "RATINGS";

if(graph.ilabels.length<2) return;
if(graph.ivalue1<0) return;

var nb = 0;
var nt = 0;
var blocks = {};
var treats = {};

var done = {};

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var b = lrecords[i][graph.ilabels[0]];
	var t = lrecords[i][graph.ilabels[1]];

	if(!(b in blocks))
		blocks[b] = nb++;		

	if(!(t in treats))
		treats[t] = nt++;

	var v = vrecords[i][graph.ivalue1];
	if((v!=0)&&(v!=1))
		{
		graph.error = "Rating not 0 or 1";
		return;
		}

	var key = blocks[b]+"\t"+treats[t];
	if(key in done)		
		{
		graph.error = "More than one rating per experiment";
		return;
		}
	}

done = null;

var sumt = vector(nt);
var sumb = vector(nb);
var sum = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var b = lrecords[i][graph.ilabels[0]];
	var t = lrecords[i][graph.ilabels[1]];
	var ib = blocks[b];
	var it = treats[t];

	var v = vrecords[i][graph.ivalue1];
	sumt[it] += v;
	sumb[ib] += v;
	sum += v;
	}


var num = 0;
for(var j=0;j<nt;j++)
	num += (sumt[j]-sum/nt)*(sumt[j]-sum/nt);

var den = 0;
for(var k=0;k<nb;k++)
	den += sumb[k]*(nt-sumb[k]);

var q = nt*(nt-1)*num/den;

graph._z.nb = nb;
graph._z.nt = nt;
graph._z.sumb = sumb;
graph._z.sumt = sumt;
graph._z.sum = sum;
graph._z.q = q;

graph._z.dof = nt-1;
graph._z.cv =  qchisq(1-0.05,nt-1);
graph._z.pvalue = 1-pchisq(q,nt-1);

console.log(graph._z);

}

//*********************************************************************

function computeMantel(graph)
{

graph.placeholder["ilabels0"] = "BINARY";
graph.placeholder["ilabels1"] = "BINARY";
graph.placeholder["ilabels2"] = "REPEATS";
graph.placeholder["leftvalue"] = "MEASURE";

if(graph.ilabels.length<3) return;
if(graph.ivalue1<0) return;

var l1 = graph.ilabels[0];
var l2 = graph.ilabels[1];
var l3 = graph.ilabels[2];


var nkey1 = 0;
var nkey2 = 0;
var nkey3 = 0;
var keys1 = {};
var keys2 = {};
var keys3 = {};

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;	
	var key1 = lrecords[i][l1];
	var key2 = lrecords[i][l2];
	var key3 = lrecords[i][l3];

	if(!(key1 in keys1))
		{
		keys1[key1] = nkey1++;
		if(nkey1>2) {
			graph.error = "More than 2 categories for "+labels[l1];
			return;
			}
		}
	
	if(!(key2 in keys2))
		{
		keys2[key2] = nkey2++;
		if(key2>2) {
			graph.error = "More than 2 categories for "+labels[l2];
			return;
			}
		}			

	var key3 = lrecords[i][l3];
	if(!(key3 in keys3))
		keys3[key3] = [0,0,0,0];


	var k = keys1[key1]+2*keys2[key2];
	keys3[key3][k] += vrecords[i][graph.ivalue1];		
	}

var num = 0;
var den = 0;

var onum = 0;
var oden = 0;

for(var key3 in keys3)
	{
	var t = keys3[key3];
	var a = t[0];
	var b = t[2];
	var c = t[1];
	var d = t[3];
	var n = a+b+c+d;
	num += a-(a+b)*(a+c)/n;
	den += (a+b)*(a+c)*(b+d)*(c+d)/(n*n*n-n*n);

	onum += a*d/n;
	oden += b*c/n;

	nkey3++;
	}

num = Math.abs(num)-0.5;

var mh = num*num/den;

var or = onum/oden;

graph._z.nkey3 = nkey3;
graph._z.keys3 = keys3;
graph._z.df = 1;
graph._z.mh = mh;
graph._z.cv = qchisq(1-0.05,1);
graph._z.pvalue = 1-pchisq(mh,1);
graph._z.or = or;

}

//*********************************************************************

function computeBreslow(graph)
{

graph.placeholder["ilabels0"] = "BINARY";
graph.placeholder["ilabels1"] = "BINARY";
graph.placeholder["ilabels2"] = "REPEATS";
graph.placeholder["leftvalue"] = "MEASURE";

if(graph.ilabels.length<3) return;
if(graph.ivalue1<0) return;

var l1 = graph.ilabels[0];
var l2 = graph.ilabels[1];
var l3 = graph.ilabels[2];

computeMantel(graph);
if(graph.error) return;

var or = graph._z.or;

var k = graph._z.nkey3;

var x2hbd = 0;
var j = 0;
var suma = 0;
var sumtildea = 0;
var sumvara = 0;

for(var key3 in graph._z.keys3)
	{
	var t = graph._z.keys3[key3];
	var a = t[0];
	var b = t[2];
	var c = t[1];
	var d = t[3];

	var mj = [a+b,c+d];	
	var nj = [a+c,b+d];

	var coef = [ -mj[0]*nj[0]*or, nj[1]-mj[0]+or*(nj[0]+mj[0]),1-or];
	var sols = polyroot(coef);	
	
	var tildeaj = solution(sols,Math.min(mj[0],nj[0]));
	var tildebj = mj[0] - tildeaj;
	var tildecj = nj[0] - tildeaj;
	var tildedj = mj[1] - tildecj;	

	var varaj = 1/tildeaj+1/tildebj+1/tildecj+1/tildedj;
	varaj = 1/varaj;

	x2hbd += (a-tildeaj)*(a-tildeaj)/varaj;

	suma += a;
	sumtildea += tildeaj;	
	sumvara += varaj;
	}

var bias = (suma-sumtildea)*(suma-sumtildea)/sumvara;
var x2hbdt = x2hbd - bias;


graph._z.x2hbd = x2hbd;
graph._z.x2hbdt = x2hbdt;
graph._z.df = k-1;
graph._z.pvalue = 1-pchisq(x2hbdt,k-1);
graph._z.cv = qchisq(1-0.05,k-1);

console.log(graph._z);

	function polyroot(coef)
	{
	var a = coef[2];
	var b = coef[1];
	var c = coef[0];
	var d = b*b-4*a*c;
	if(d>0)
		return [(-b+Math.sqrt(d))/(2*a),(-b-Math.sqrt(d))/(2*a)];	
	else
		return [-b/(2*a)];
	}

	function solution(sols,min)
	{
	for(var i=0;i<sols.length;i++)
		if(sols[i]>0)
			if(sols[i]<min)
				return sols[i];
	return 0;
	}

}

//*********************************************************************

function computeWoolf(graph)
{

graph.placeholder["ilabels0"] = "BINARY";
graph.placeholder["ilabels1"] = "BINARY";
graph.placeholder["ilabels2"] = "REPEATS";
graph.placeholder["leftvalue"] = "MEASURE";

if(graph.ilabels.length<3) return;
if(graph.ivalue1<0) return;

var l1 = graph.ilabels[0];
var l2 = graph.ilabels[1];
var l3 = graph.ilabels[2];


var nkey1 = 0;
var nkey2 = 0;
var nkey3 = 0;
var keys1 = {};
var keys2 = {};
var keys3 = {};

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;	
	var key1 = lrecords[i][l1];
	var key2 = lrecords[i][l2];
	var key3 = lrecords[i][l3];

	if(!(key1 in keys1))
		{
		keys1[key1] = nkey1++;
		if(nkey1>2) {
			graph.error = "More than 2 categories for "+labels[l1];
			return;
			}
		}
	
	if(!(key2 in keys2))
		{
		keys2[key2] = nkey2++;
		if(key2>2) {
			graph.error = "More than 2 categories for "+labels[l2];
			return;
			}
		}			

	var key3 = lrecords[i][l3];
	if(!(key3 in keys3))
		keys3[key3] = [0,0,0,0];


	var k = keys1[key1]+2*keys2[key2];
	keys3[key3][k] += vrecords[i][graph.ivalue1];
	}

var hasnul = false;
var nkey3 = 0;
for(var key3 in keys3)
	{
	var t = keys3[key3];	
	nkey3++;
	if(t[0]==0) { hasnul = true; break; }
	if(t[1]==0) { hasnul = true; break; }
	if(t[2]==0) { hasnul = true; break; }
	if(t[3]==0) { hasnul = true; break; }	
	}

var o = vector(nkey3);
var w = vector(nkey3);
for(var key3 in keys3)
	{
	var t = keys3[key3];
	if(hasnul)
		{
		t[0] += 0.5;
		t[1] += 0.5;
		t[2] += 0.5;
		t[3] += 0.5;
		}
	var or = t[0]*t[3]/(t[1]*t[2]);
	o.push(Math.log(or));
	var ww = 1/t[0]+1/t[1]+1/t[2]+1/t[3];
	w.push(1/ww);
	}


var so = 0;
var sw = 0;
for(var i=0;i<o.length;i++)
	{
	so += w[i]*o[i];
	sw += w[i];
	}

var e = so/sw;

var s = 0;
for(var i=0;i<o.length;i++)
	s += w[i]*(o[i]-e)*(o[i]-e);

graph._z.w = s;
graph._z.df = nkey3-1;
graph._z.pvalue = 1-pchisq(s,nkey3-1);
graph._z.cv = qchisq(1-0.05,nkey3-1);

console.log(graph._z);

}

//*********************************************************************

function drawNonparamGraph(ctx,graph)
{

switch(graph.nonparam)
	{
	//case NONPARAM.MANN: drawMann(ctx,graph); break;
	case NONPARAM.KOLMO: drawKolmo(ctx,graph); break;
	case NONPARAM.KRUSKAL: drawKruskal(ctx,graph); break;
	case NONPARAM.JONCK: drawJonck(ctx,graph); break;
	case NONPARAM.COCHRAN: drawCochran(ctx,graph); break;
	case NONPARAM.FRIEDMAN: drawFriedman(ctx,graph); break;
	case NONPARAM.DURBIN: drawDurbin(ctx,graph); break;
	case NONPARAM.MANTEL: drawMantel(ctx,graph); break;
	case NONPARAM.BRESLOW: drawBreslow(ctx,graph); break;
	case NONPARAM.WOOLF: drawWoolf(ctx,graph); break;
	}
}

//*********************************************************************

function drawMann(ctx,graph)
{
}

//*********************************************************************

function drawKolmo(ctx,graph)
{
if(graph.ilabels.length<1) return;
if(graph.ivalue1<0) return;

var option = getGraphOption(graph);



if(option==0)
	{
	var y = graph.y + graph.hbar + 50;
	var x = graph.x + 50;

	ctx.fillStyle = "#000000";

	ctx.fillText(graph._z.key1,x,y);
	ctx.fillText(graph._z.n1+" observations",x+200,y);

	y += 20;
	ctx.fillText(graph._z.key2,x,y);
	ctx.fillText(graph._z.n2+" observations",x+200,y);

	y += 40;
	ctx.fillText("Critical value C",x,y);
	var z = Math.round(graph._z.cv*10000)/10000;
	ctx.fillText(""+z,x+200,y);
	ctx.fillText("(\u03B1=0.05)",x+300,y);

	y += 20;
	ctx.fillText("Kolmogorov-Smirnov test D",x,y);
	var z = Math.round(graph._z.kolmo*10000)/10000;
	ctx.fillText(""+z,x+200,y);

	y += 40;
	if(graph._z.kolmo<graph._z.cv)
		{
		multiText(ctx,["#000000","D < C : Distributions ",
			"#FF0000","are equal"],x,y);
		}
	else
		{
		multiText(ctx,["#000000","D > C : Distributions ",
			"#FF0000","are not equal"],x,y);
		}
	}

if(option==1)
	{	
	var xleft = graph.x + 30;
	var xright = graph.x + graph.w -10;
	var ytop = graph.y + graph.hbar + 55;
	var ybottom = graph.y + graph.h - 20;
	
	var curve = graph._z.curve;
	var min = curve[0].v;
	var max = curve[curve.length-1].v;

	var n1 = graph._z.n1;
	var n2 = graph._z.n2;

	var xscale = (xright-xleft)/(max-min);

	// draew scale
	var font = ctx.font;
	ctx.font = "10px Helvetica";
	ctx.textAlign = "right";
	ctx.strokeStyle = "#CCCCCC";
	ctx.strokeRect(xleft,ytop,xright-xleft,ybottom-ytop);

	for(var i=1;i<10;i++)
		{
		var y = Math.round(ybottom-(ybottom-ytop)*i/10);		
		ctx.fillStyle = hdotted;
		ctx.fillRect(xleft,y,xright-xleft,1);
		ctx.fillStyle = "#CCCCCC";
		ctx.fillText(""+(i/10),xleft-5,y+5);
		}

	var xa,ya,xb,yb,k;

	// draw kolmo	
	xa = xleft + (graph._z.vkolmo-min)*xscale;
	ya = ybottom - (ybottom-ytop)*graph._z.f1kolmo;
	yb = ybottom - (ybottom-ytop)*graph._z.f2kolmo;

	ctx.textAlign = "center";
	ctx.fillStyle = "#CCCCCC";
	ctx.fillRect(xa,ytop,1,ybottom-ytop);
	var z = Math.round(graph._z.vkolmo*10000)/10000;
	ctx.fillText(""+z,xa,ybottom+12);

	ctx.fillStyle = "#000000";
	ctx.fillRect(xa,Math.min(ya,yb),2,Math.abs(ya-yb));


	// draw curve 1	
	ctx.strokeStyle = "#FF0000";
	xa = xleft;
	ya = ybottom;
	ctx.beginPath();
	ctx.moveTo(xa,ya);
	k = 0;
	for(var i=0;i<curve.length;i++)
		{
		if(curve[i].g!=0) continue;
		xb = xleft + (curve[i].v-min)*xscale;
		k++;
		yb = ybottom-(ybottom-ytop)*k/n1;
		ctx.lineTo(xb,ya);
		ctx.lineTo(xb,yb);
		xa = xb;
		ya = yb;
		}		
	ctx.lineTo(xright,ytop);
	ctx.stroke();
	
	// draw curve 2
	ctx.strokeStyle = "#0000FF";
	k=0;
	xa = xleft;
	ya = ybottom;
	ctx.beginPath();
	ctx.moveTo(xa,ya);
	for(var i=0;i<curve.length;i++)
		{
		if(curve[i].g!=1) continue;
		xb = xleft + (curve[i].v-min)*xscale;
		k++;
		yb = ybottom - (ybottom-ytop)*k/n2;
		ctx.lineTo(xb,ya);
		ctx.lineTo(xb,yb);
		xa = xb;
		ya = yb;
		}
	ctx.lineTo(xright,ytop);
	ctx.stroke();


	ctx.font = font;
	ctx.textAlign = "right";
	ctx.fillStyle = "#FF0000";
	ctx.fillText(graph._z.key1,xright-10,ybottom-30);
	ctx.fillStyle = "#0000FF";
	ctx.fillText(graph._z.key2,xright-10,ybottom-10);
	}
	


}

//*********************************************************************

function drawKruskal(ctx,graph)
{
if(graph.ilabels.length<1) return;
if(graph.ivalue1<0) return;

var option = getGraphOption(graph);

if(option==0)
	{
	var x = graph.x + 50;
	var y = graph.y + graph.hbar + 50;

	var rg = graph._z.rg;
	var count = graph._z.count;
	var keys = graph._z.keys;

	var z;

	ctx.fillStyle = "#000000";

	ctx.textAlign = "right";
	ctx.fillText("Obs.",x+200,y);
	ctx.fillText("Mean rank",x+300,y);
	y += 20;

	for(var i=0;i<keys.length;i++)
		{
		ctx.textAlign = "left";
		var key = keys[i];
		if(key.length>18) key = key.substring(0,18)+"\u2026";
		ctx.fillText(key,x,y);

		ctx.textAlign = "right";		
		ctx.fillText(""+count[i],x+200,y);
	
		z = Math.round(rg[i]*100)/100;
		ctx.fillText(""+z,x+300,y);
		
		y += 20;
		}

	y += 20;

	
	ctx.textAlign = "left";
	ctx.fillText("Mean rank",x,y);
	ctx.textAlign = "right";
	z = Math.round(graph._z.rbar*100)/100;
	ctx.fillText(""+z,x+200,y);

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Degrees of freedom",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+graph._z.dof,x+200,y);

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Critical value C",x,y);
	ctx.textAlign = "right";
	z = Math.round(graph._z.cv*10000)/10000;
	ctx.fillText(""+z,x+200,y);
	ctx.textAlign = "left";
	ctx.fillText("(\u03B1=0.05)",x+300,y);

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Kruskal-Wallis K",x,y);
	ctx.textAlign = "right";
	z = Math.round(graph._z.kruskal*10000)/10000;
	ctx.fillText(""+z,x+200,y);

	ctx.textAlign = "left";
	z = Math.round(graph._z.pvalue*10000)/10000;
	ctx.fillText("(pvalue="+z+")",x+300,y);


	y += 40;

	if(graph._z.kruskal>graph._z.cv)
		multiText(ctx,["#000000","K > C : distributions ",
			"#FF0000","are not equal"],x,y);
	else
		multiText(ctx,["#000000","K < C : distributions ",
			"#FF0000","are equal"],x,y);

	y += 20;

	var max = Math.max(graph._z.cv,graph._z.kruskal)*1.2;	
	drawChi2Curve(ctx,graph,y,graph._z.dof,0,max,graph._z.kruskal,"K",graph._z.cv);
	}

}

//*********************************************************************

function drawJonck(ctx,graph)
{
if(graph.ilabels.length<1) return;
if(graph.ivalue1<0) return;


var option = getGraphOption(graph);

if(option==0)
	{

	var x = graph.x+50;
	var y = graph.y + graph.hbar +50;

	var keys = graph._z.keys;
	var count = graph._z.count;
	var ng = graph._z.ng;

	ctx.fillStyle = "#000000";
	ctx.strokeStyle = "#CCCCCC";

	ctx.textAlign = "left";
	ctx.fillText("Arrange the groups in a priori order:",x,y);	
	y += 30;
	
	for(var i=0;i<keys.length;i++)
		{
		ctx.strokeRect(x,y-14,200,17);
		if(action==REORDER_KEY)
			if(graph._z.oindex==i)
				{
				ctx.fillStyle = "#CCCCCC";
				ctx.fillRect(x,y-14,200,17);
				ctx.fillStyle = "#000000";
				}

		ctx.textAlign = "right";
		ctx.fillText(""+count[i],x+250,y);

		ctx.textAlign = "left";	
		var key = keys[i];
		if(key.length>20) key = key.substring(0,20)+"\u2026";
		ctx.fillText(key,x+10,y)
		y += 20;
		}

	y += 20;
	
	ctx.textAlign = "left";
	ctx.fillStyle = "#000000";
	ctx.fillText("Score S",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+(graph._z.p-graph._z.q),x+200,y);

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Variance",x,y);		
	ctx.textAlign = "right";
	var z = Math.round(graph._z.vars*10000)/10000;
	ctx.fillText(""+z,x+200,y);
	
	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Critical value C",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+graph._z.cv,x+200,y);
	ctx.fillText("(\u03B1=0.05)",x+330,y);
	
	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Test statistic Z",x,y);
	ctx.textAlign = "right";
	z = Math.round(graph._z.z*10000)/10000;
	ctx.fillText(""+z,x+200,y);
	z = Math.round(graph._z.pvalue*10000)/10000;
	ctx.fillText("(pvalue="+z+")",x+330,y);		

	y += 40;
	ctx.textAlign = "left"
	if(graph._z.z>graph._z.cv)
		multiText(ctx,["#000000","Z > C : The medians ",	
			"#FF0000","have an ordering"],x,y);
	else
		multiText(ctx,["#000000","Z < C : The medians ",
			"#FF0000","are equal"],x,y);

	y += 20;
	var max = Math.max(Math.abs(graph._z.z),Math.abs(graph._z.cv))*1.2;	
	if(max<3) max = 3;

	drawNormalCurve(ctx,graph,y,-max,max,graph._z.z,"Z",graph._z.cv);
	}

}

//*********************************************************************

function drawFriedman(ctx,graph)
{

if(graph.ilabels.length<2) return;

if(graph.ivalue1<0) return;

if(graph.error)
	{
	drawGraphError(ctx,graph);
	return;
	}


var option = getGraphOption(graph);

var x = graph.x+50;
var y = graph.y + graph.hbar + 50;

ctx.fillStyle = "#000000";

ctx.textAlign = "left";
ctx.fillText(labels[graph.ilabels[0]],x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.nb,x+220,y);
ctx.textAlign = "left";
ctx.fillText(" blocks",x+220,y);

y+=20;

ctx.fillText(labels[graph.ilabels[1]],x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.nt,x+220,y);
ctx.textAlign = "left";
ctx.fillText(" treatments",x+220,y);


y += 20;

ctx.fillText("Sum of squares",x,y);
var z = Math.round(graph._z.sst*1000)/10000;
ctx.textAlign = "right";
ctx.fillText(""+z,x+220,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Degrees of freedom",x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.dof,x+220,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Critical value C",x,y);
ctx.textAlign = "right";
z = Math.round(graph._z.cv*10000)/10000;
ctx.fillText(""+z,x+220,y);
ctx.fillText("(\u03B1=0.05)",x+350,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Test statistic Q",x,y);
ctx.textAlign = "right";
z = Math.round(graph._z.q*10000)/10000;
ctx.fillText(""+z,x+220,y);
z = Math.round(graph._z.pvalue*10000)/10000;
ctx.fillText("(pvalue="+z+")",x+350,y);

y += 40;

ctx.textAlign = "left";
if(graph._z.q<graph._z.cv)	
	multiText(ctx,["#000000","Q < C : the ratings of treatments ",
		"#FF0000","are equal"],x,y);
else
	multiText(ctx,["#000000","Q > C : the ratings of treatments ",
		"#FF0000","are not equal"],x,y);

y += 20;

var max = Math.max(graph._z.cv,graph._z.q)*1.2;
	
drawChi2Curve(ctx,graph,y,graph._z.dof,0,max,graph._z.q,"Q",graph._z.cv);
}

//*********************************************************************

function drawCochran(ctx,graph)
{
if(graph.ilabels.length<2) return;
if(graph.ivalue1<0) return;


var x = graph.x+50;
var y = graph.y + graph.hbar + 50;

ctx.fillStyle = "#000000";

ctx.textAlign = "left";
ctx.fillText(labels[graph.ilabels[0]],x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.nb,x+220,y);
ctx.textAlign = "left";
ctx.fillText(" blocks",x+220,y);

y += 20;

ctx.fillText(labels[graph.ilabels[1]],x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.nt,x+220,y);
ctx.textAlign = "left";
ctx.fillText(" treatments",x+220,y);

y += 20;

ctx.fillText("Degrees of freedom",x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.dof,x+220,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Critical value C",x,y);
ctx.textAlign = "right";
var z = Math.round(graph._z.cv*10000)/10000;
ctx.fillText(""+z,x+220,y);
ctx.fillText("(\u03B1=0.05)",x+350,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Test statistic Q",x,y);
ctx.textAlign = "right";
z = Math.round(graph._z.q*10000)/10000;
ctx.fillText(""+z,x+220,y);
z = Math.round(graph._z.pvalue*10000)/10000;
ctx.fillText("(pvalue="+z+")",x+350,y);

y += 40;

ctx.textAlign = "left";
if(graph._z.q<graph._z.cv)	
	multiText(ctx,["#000000","Q < C : the ratings of treatments ",
		"#FF0000","are equal"],x,y);
else
	multiText(ctx,["#000000","Q > C : the ratings of treatments ",
		"#FF0000","are not equal"],x,y);

y += 20;

var max = Math.max(graph._z.cv,graph._z.q)*1.2;
	
drawChi2Curve(ctx,graph,y,graph._z.dof,0,max,graph._z.q,"Q",graph._z.cv);
}


//*********************************************************************

function drawDurbin(ctx,graph)
{
if(graph.ilabels.length<2) return;
if(graph.ivalue1<0) return;


var x = graph.x+50;
var y = graph.y + graph.hbar + 50;

ctx.fillStyle = "#000000";

ctx.textAlign = "left";
ctx.fillText(labels[graph.ilabels[0]],x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.nb,x+240,y);
ctx.textAlign = "left";
ctx.fillText(" blocks",x+240,y);

y += 20;

ctx.fillText(labels[graph.ilabels[1]],x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.nt,x+240,y);
ctx.textAlign = "left";
ctx.fillText(" treatments",x+240,y);

y += 20;

ctx.fillText("Number of treatments per block",x,y);
ctx.textAlign = "right";
ctx.fillText(graph._z.tperb+"",x+240,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Nb of times each treatment appears",x,y);
ctx.textAlign = "right";
ctx.fillText(graph._z.bpert+"",x+240,y);

y += 40;

ctx.textAlign = "left";
ctx.fillText("Degrees of freedom",x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.dof1+","+graph._z.dof2,x+240,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Critical value C",x,y);
ctx.textAlign = "right";
var z = Math.round(graph._z.cv*10000)/10000;
ctx.fillText(""+z,x+240,y);
ctx.fillText("(\u03B1=0.05)",x+350,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Test statistic T2",x,y);
ctx.textAlign = "right";
z = Math.round(graph._z.t2*10000)/10000;
ctx.fillText(""+z,x+240,y);
z = Math.round(graph._z.pvalue*10000)/10000;
ctx.fillText("(pvalue="+z+")",x+350,y);

y += 40;

ctx.textAlign = "left";
if(graph._z.t2<graph._z.cv)	
	multiText(ctx,["#000000","T2 < C : the ratings of treatments ",
		"#FF0000","are equal"],x,y);
else
	multiText(ctx,["#000000","T2 > C : the ratings of treatments ",
		"#FF0000","are not equal"],x,y);

y += 20;

var max = Math.max(graph._z.cv,graph._z.t2)*1.2;
	
drawFisherCurve(ctx,graph,y,graph._z.dof1,graph._z.dof2,0,max,
	graph._z.t2,"T2",graph._z.cv);
}

//*********************************************************************

function drawMantel(ctx,graph)
{
if(graph.ilabels.length<3) return;
if(graph.ivalue1<0) return;

var name3 = labels[graph.ilabels[2]];

var x = graph.x+50;
var y = graph.y + graph.hbar + 50;

ctx.fillStyle = "#000000";

ctx.textAlign = "left";
ctx.fillText(name3,x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.nkey3,x+220,y);
ctx.textAlign = "left";
ctx.fillText(" categories",x+220,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Common odds ratio",x,y);
ctx.textAlign = "right";
var z = Math.round(graph._z.or*10000)/10000;
ctx.fillText(""+z,x+220,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Degrees of freedom",x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.df,x+220,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Critical value C",x,y);
ctx.textAlign = "right";
var z = Math.round(graph._z.cv*10000)/10000;
ctx.fillText(""+z,x+220,y);
ctx.fillText("(\u03B1=0.05)",x+350,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Test statistic MH",x,y);
ctx.textAlign = "right";
z = Math.round(graph._z.mh*10000)/10000;
ctx.fillText(""+z,x+220,y);
z = Math.round(graph._z.pvalue*10000)/10000;
ctx.fillText("(pvalue="+z+")",x+350,y);

y += 30;

ctx.textAlign = "left";
if(graph._z.q<graph._z.cv)	
	multiText(ctx,["#000000","MH < C : common odds ratio  ",
		"#FF0000","is equal to 1 "],x,y);
else
	multiText(ctx,["#000000","MH > C : common odds ratio ",
		"#FF0000","is not equal to 1 "],x,y);

y += 20;

var max = Math.max(graph._z.cv,graph._z.mh)*1.2;
drawChi2Curve(ctx,graph,y,graph._z.df,0,max,graph._z.mh,"MH",graph._z.cv);
}


//*********************************************************************

function drawBreslow(ctx,graph)
{
if(graph.ilabels.length<3) return;
if(graph.ivalue1<0) return;

var name3 = labels[graph.ilabels[2]];

var x = graph.x+50;
var y = graph.y + graph.hbar + 50;

ctx.fillStyle = "#000000";

ctx.textAlign = "left";
ctx.fillText(name3,x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.nkey3,x+220,y);
ctx.textAlign = "left";
ctx.fillText(" categories",x+220,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Common odds ratio",x,y);
ctx.textAlign = "right";
var z = Math.round(graph._z.or*10000)/10000;
ctx.fillText(""+z,x+220,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Breslow-Day X-squared",x,y);
var z = Math.round(graph._z.x2hbd*10000)/10000;
ctx.textAlign = "right";
ctx.fillText(""+z,x+220,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Degrees of freedom",x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.df,x+220,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Critical value C",x,y);
ctx.textAlign = "right";
var z = Math.round(graph._z.cv*10000)/10000;
ctx.fillText(""+z,x+220,y);
ctx.fillText("(\u03B1=0.05)",x+350,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Breslow-Day Tarone B",x,y);
ctx.textAlign = "right";
z = Math.round(graph._z.x2hbdt*10000)/10000;
ctx.fillText(""+z,x+220,y);
z = Math.round(graph._z.pvalue*10000)/10000;
ctx.fillText("(pvalue="+z+")",x+350,y);

y += 30;

ctx.textAlign = "left";
if(graph._z.x2hbdt<graph._z.cv)	
	multiText(ctx,["#000000","B < C : odd ratio ",
		"#FF0000","is independent of "+name3],x,y);
else
	multiText(ctx,["#000000","B > C : odd ratio ",
		"#FF0000","is dependent of "+name3],x,y);

y += 20;

var max = Math.max(graph._z.cv,graph._z.x2hbdt)*1.2;
drawChi2Curve(ctx,graph,y,graph._z.df,0,max,graph._z.x2hbdt,"B",graph._z.cv);
}


//*********************************************************************

function drawWoolf(ctx,graph)
{
if(graph.ilabels.length<3) return;
if(graph.ivalue1<0) return;

var name3 = labels[graph.ilabels[2]];

var x = graph.x+50;
var y = graph.y + graph.hbar + 50;

ctx.fillStyle = "#000000";

ctx.textAlign = "left";
ctx.fillText(name3,x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.nkey3,x+220,y);
ctx.textAlign = "left";
ctx.fillText(" categories",x+220,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Degrees of freedom",x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.df,x+220,y);

y += 20;

ctx.textAlign = "left";
ctx.fillText("Critical value C",x,y);
ctx.textAlign = "right";
var z = Math.round(graph._z.cv*10000)/10000;
ctx.fillText(""+z,x+220,y);
ctx.fillText("(\u03B1=0.05)",x+350,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Test statistic W",x,y);
ctx.textAlign = "right";
z = Math.round(graph._z.w*10000)/10000;
ctx.fillText(""+z,x+220,y);
z = Math.round(graph._z.pvalue*10000)/10000;
ctx.fillText("(pvalue="+z+")",x+350,y);

y += 30;

ctx.textAlign = "left";
if(graph._z.w<graph._z.cv)	
	multiText(ctx,["#000000","W < C : odd ratio ",
		"#FF0000","is independent of "+name3],x,y);
else
	multiText(ctx,["#000000","W > C : odd ratio ",
		"#FF0000","is dependent of "+name3],x,y);

y += 20;

var max = Math.max(graph._z.cv,graph._z.w)*1.2;
drawChi2Curve(ctx,graph,y,graph._z.df,0,max,graph._z.w,"W",graph._z.cv);
}


//*********************************************************************

function downNonparamGraph(pt,graph)
{

switch(graph.nonparam)
	{
	case NONPARAM.JONCK:		
		if(graph.ilabels.length<1) return -1;
		if(graph.ivalue1<0) return;
		var x = graph.x+50;
		var y = graph.y + graph.hbar +50+30;
		for(var i=0;i<graph._z.keys.length;i++)
			{
			if(inRect(pt,x,y-14,200,18))
				{
				graph._z.oindex = i;
				graph._z.okey = graph._z.keys[i];
				graph._z.ocount = graph._z.count[i];
				return REORDER_KEY;
				}
			y+=20;
			}
		
		break;
	}

return -1;
}

//*********************************************************************

function dragNonparamGraph(pt,graph)
{

switch(graph.nonparam)
	{
	case NONPARAM.JONCK:
		if(action!=REORDER_KEY) return;
		var x = graph.x+50;
		var y = graph.y + graph.hbar +50+30;
		var ng = graph._z.ng;
		if(inRect(pt,x,y-14,200,20*ng))
			{
			var index = Math.floor((pt.y-(y-14))/20);
			if(index<0) return;
			if(index>=ng) return;
			if(index==graph._z.oindex) return;
			if(index<graph._z.oindex)
				{
				graph._z.keys.splice(index,0,graph._z.okey);
				graph._z.count.splice(index,0,graph._z.ocount);
				graph._z.keys.splice(graph._z.oindex+1,1);
				graph._z.count.splice(graph._z.oindex+1,1);
				}
			else if(index>graph._z.oindex)
				{
				graph._z.keys.splice(graph._z.oindex,1);
				graph._z.count.splice(graph._z.oindex,1);
				graph._z.keys.splice(index,0,graph._z.okey);
				graph._z.count.splice(index,0,graph._z.ocount);
				}
			graph._z.oindex= index;
			}
		break;
	}
}

//*********************************************************************

function upNonparamGraph(graph)
{

if(action==REORDER_KEY)
	{
	completeJonck(graph);
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
		if(graph._z.hilite==newkey.replace(/\t/g," \u2022 "))
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
	selection = clone(graph.selection);	
	var key = "";
	var ksep = ""
	for(var k=0;k<graph.ilabels.length;k++)
		{
		selection.push(graph.ilabels[k]);
		selection.push(graph._keys[k][index[k]]);
		key += ksep + graph._keys[k][index[k]];
		ksep = "\t";
		}

	sliceindex = index;
	slicesize = graph._count[key] || 0;

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
	graph._z.hilite = message;
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
//                PACK
//
//*********************************************************************

function drawPackIcon(ctx,x,y)
{
ctx.strokeStyle = "#000000";

circle(5,7,4);
circle(14,7,5)
circle(10,15,4);
circle(17,15,3);
circle(4,13,2);

	function circle(cx,cy,cr)
	{
	ctx.beginPath();
	ctx.arc(x+cx,y+cy,cr,0,Math.PI*2,false);
	ctx.stroke();
	}
}

//*********************************************************************

function computePackData(graph)
{
graph.placeholder.toplabel = "GROUP";
graph.placeholder.leftlabel = "COLOR";

var circles = [];

var ig = graph["ilabel"+GINFO[graph.type]["toplabel"]];		// group
var ic = graph["ilabel"+GINFO[graph.type]["leftlabel"]];	// color
var iu = graph.iunit;

if((ig<0)&&(ic<0)) return;

if(ig<0)
	{
	// not grouped
	var key = "";
	var count = {};
	var ng = 0;

	for(var i=0;i<lrecords.length;i++)
		{		
		if(!recordMatch(i,graph)) continue;

		if(ic>=0)	
			{
			key = lrecords[i][ic];
			if(!(key in count))
				count[key] = ng++;
			}

		if(vrecords[i][iu]>0)
			circles.push({x:0,y:0,r:Math.sqrt(vrecords[i][iu]),n:key});	
		}

	if(ic>=0)
		{
		graph._z.color = {};
		var kg = 0;
		for(var key in count)
			{		
			var hue = graph.hue+kg/ng;
			graph._z.color[key] = getColor(hue,1,1);
			kg++;
			}
		}

	}
else
	{
	// grouped 
	var count = {};
	var keys = [];

	for(var i=0;i<lrecords.length;i++)
		{		
		if(!recordMatch(i,graph)) continue;	
		var key = lrecords[i][ig];
		if(!(key in count))
			count[key] = vrecords[i][iu];
		else
			count[key] += vrecords[i][iu];
		}

	var ng = 0;
	for(var key in count)
		if(count[key]>0)
			{
			circles.push({x:0,y:0,r:Math.sqrt(count[key]),n:key});	
			ng++;
			}

	if((ic>=0)&&(ic==ig))
		{
		graph._z.color = {};
		var kg = 0;
		for(var key in count)
			{		
			var hue = graph.hue+kg/ng;
			graph._z.color[key] = getColor(hue,1,1);
			kg++;
			}
		}
	}

circles.sort( function(a,b) { return b.r-a.r });

graph._z.circles = circles;

graph._z.xmin = circles[0].x - circles[0].r;
graph._z.xmax = circles[0].x + circles[0].r;
graph._z.ymin = circles[0].y - circles[0].r;
graph._z.ymax = circles[0].y + circles[0].r;

if(circles.length<2) return;

circles[1].x = circles[0].r + circles[1].r;

graph._z.xmax = circles[1].x + circles[1].r;

if(circles.length<3) return;

var p = 2;
find_candidate();

function find_candidate()
	{
	var choices = [];

	var i = p;
		var ci = circles[i];

		// try each previous pair
		for(var j=0;j<p;j++)
			{
			var cj = circles[j];

			for(var k=j+1;k<p;k++)
				{
				var ck = circles[k];

				var d = (ck.x-cj.x)*(ck.x-cj.x)+(ck.y-cj.y)*(ck.y-cj.y);
				d = Math.sqrt(d);
	
				var h = (cj.r+ci.r)*(cj.r+ci.r)+d*d-(ck.r+ci.r)*(ck.r+ci.r);
				h /= 2*d;
				z = Math.sqrt((cj.r+ci.r)*(cj.r+ci.r)-h*h);

				h /= (cj.r+ck.r);
				z /= (cj.r+ck.r);

				var dx = (ck.x-cj.x)*h + (ck.y-cj.y)*z;
				var dy = (ck.y-cj.y)*h - (ck.x-cj.x)*z;

				ci.x = cj.x + dx;
				ci.y = cj.y + dy;

				// verify if solution
				var dij = (cj.x-ci.x)*(cj.x-ci.x)+(cj.y-ci.y)*(cj.y-ci.y);
				if(Math.abs(dij-(ci.r+cj.r)*(ci.r+cj.r))>1e-4) continue;

				var dik = (ck.x-ci.x)*(ck.x-ci.x)+(ck.y-ci.y)*(ck.y-ci.y);
				if(Math.abs(dik-(ci.r+ck.r)*(ci.r+ck.r))>1e-4) continue;

				// check if doesnt intersect other circles
				var ok = true;
				for(var l=0;l<p;l++)
					{
					var cl = circles[l];
					if(l==j) continue;
					if(l==k) continue;	
					var sect = intersect(ci,cl);
					if(sect) { ok = false; break; }
					}
				if(ok)
					choices.push({i:i,x:ci.x,y:ci.y,r:ci.r,n:ci.n,j:j,k:k});
				

				// symmetric circle
				var dx = (ck.x-cj.x)*h - (ck.y-cj.y)*z;
				var dy = (ck.y-cj.y)*h + (ck.x-cj.x)*z;

				ci.x = cj.x + dx;
				ci.y = cj.y + dy;

				// check if doesnt intersect other circles
				var ok = true;
				for(var l=0;l<p;l++)
					{
					var cl = circles[l];
					if(l==j) continue;
					if(l==k) continue;
					var sect = intersect(ci,cl);
					if(sect) { ok = false; break; }
					}
				if(ok)
					choices.push({i:i,x:ci.x,y:ci.y,r:ci.r,n:ci.n,j:j,k:k});
				}
			}

	// keep the one minimizing the area
	var abest = Number.MAX_VALUE;
	var ibest = -1;
	var step = 1;
	for(var i=0;i<choices.length;i+=step)
		{
		var txmin = Math.min(graph._z.xmin,choices[i].x-choices[i].r);
		var txmax = Math.max(graph._z.xmax,choices[i].x+choices[i].r);
		var tymin = Math.min(graph._z.ymin,choices[i].y-choices[i].r);
		var tymax = Math.max(graph._z.ymax,choices[i].y+choices[i].r);
		var area = Math.max(txmax-txmin,tymax-tymin);
		if(area<abest)
			{
			abest = area;
			ibest = i;
			}
		}

	circles[choices[ibest].i] = clone(circles[p]);

	circles[p].x = choices[ibest].x;
	circles[p].y = choices[ibest].y;
	circles[p].r = choices[ibest].r;
	circles[p].n = choices[ibest].n;


	// update bounds
	graph._z.xmin = Math.min(graph._z.xmin,choices[ibest].x-choices[ibest].r);
	graph._z.xmax = Math.max(graph._z.xmax,choices[ibest].x+choices[ibest].r);
	graph._z.ymin = Math.min(graph._z.ymin,choices[ibest].y-choices[ibest].r);
	graph._z.ymax = Math.max(graph._z.ymax,choices[ibest].y+choices[ibest].r);

	p++;
	if(p<circles.length)
		{
		graph.progress = p/circles.length;
		draw();
		graph.timerid = setTimeout(find_candidate,10);
		}
	else
		{
		graph.progress = null;
		graph.timerid = null;
		draw();
		}
	}


	function intersect(ca,cb)
	{
	var d1 = (ca.x-cb.x)*(ca.x-cb.x)+(ca.y-cb.y)*(ca.y-cb.y);
	var d2 = (ca.r+cb.r)*(ca.r+cb.r);
	return d1 < 0.99*d2;
	}

}

//*********************************************************************

function drawPackGraph(ctx,graph)
{
var ig = graph["ilabel"+GINFO[graph.type]["toplabel"]];		// group
var ic = graph["ilabel"+GINFO[graph.type]["leftlabel"]];	// color

if((ig<0)&&(ic<0)) return;

var xleft = graph.x + 30;
var xright = graph.x + graph.w - 10;
var ytop = graph.y + graph.hbar +30;
var ybottom = graph.y + graph.h -10;
var xcenter = (xleft+xright)/2;
var ycenter = (ytop+ybottom)/2;

var c = graph._z.circles;

var xmin = graph._z.xmin;
var xmax = graph._z.xmax;
var ymin = graph._z.ymin;
var ymax = graph._z.ymax;

var scale = (xright-xleft)/(xmax-xmin);
if(scale*(ymax-ymin)>ybottom-ytop)
	scale = (ybottom-ytop)/(ymax-ymin);

var xmid = (xmin+xmax)/2;
var ymid = (ymin+ymax)/2;


ctx.textAlign = "center";

for(var i=0;i<c.length;i++)
	{
	var x = xcenter + (c[i].x - xmid)*scale;
	var y = ycenter -  (c[i].y - ymid)*scale;
	var r = c[i].r*scale;

	if(graph._z.color)
		ctx.fillStyle = graph._z.color[c[i].n];
	else
		ctx.fillStyle = "#CCCCCC";

	ctx.beginPath();
	ctx.arc(x,y,r-1,0,Math.PI*2,false);
	ctx.fill();
	}

}


//*********************************************************************

function movePackGraph(pt,graph)
{
var ig = graph["ilabel"+GINFO[graph.type]["toplabel"]];		// group
var ic = graph["ilabel"+GINFO[graph.type]["leftlabel"]];	// color

if((ig<0)&&(ic<0)) return;

var xleft = graph.x + 30;
var xright = graph.x + graph.w - 10;
var ytop = graph.y + graph.hbar +30;
var ybottom = graph.y + graph.h -10;
var xcenter = (xleft+xright)/2;
var ycenter = (ytop+ybottom)/2;

var c = graph._z.circles;

var xmin = graph._z.xmin;
var xmax = graph._z.xmax;
var ymin = graph._z.ymin;
var ymax = graph._z.ymax;

var scale = (xright-xleft)/(xmax-xmin);
if(scale*(ymax-ymin)>ybottom-ytop)
	scale = (ybottom-ytop)/(ymax-ymin);

var xmid = (xmin+xmax)/2;
var ymid = (ymin+ymax)/2;

message = "";

for(var i=0;i<c.length;i++)
	{
	var x = xcenter + (c[i].x - xmid)*scale;
	var y = ycenter -  (c[i].y - ymid)*scale;
	var r = c[i].r*scale;

	var d = (pt.x-x)*(pt.x-x)+(pt.y-y)*(pt.y-y);
	if(d<r*r)
		{		
		var v = Math.round(c[i].r*c[i].r*10000)/10000;
		if(c[i].n)
			message = c[i].n +"  :  "+v;
		else
			message = ""+v;
		break;
		}
	}

return true;
}

//*********************************************************************
//
//                CHI2
//
//*********************************************************************

function computeChi2Data(graph)
{
if(graph.w<460)
	graph.w = 460;

if(graph.ilabel1<0) return;
if(graph.ilabel2<0) return;

switch(graph.chi2)
	{
	case CHI2.PEARSON: computeChi2Test(graph); break;
	case CHI2.YATES: computeChi2Test(graph); break;
	case CHI2.G: computeChi2Test(graph); break;
	case CHI2.EXACT: computeExactTest(graph); break;
	}

}

//*********************************************************************

function computeChi2Test(graph)
{

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
		var o = (key in graph._count) ? graph._count[key] : 0;
		var e =  sum1[i]*sum2[j]/sum;
		switch(graph.chi2)
			{
			case CHI2.PEARSON:		
				chi2 += (o-e)*(o-e)/e;
				break;

			case CHI2.YATES:
				var f = Math.abs(o-e);
				chi2 += (f-0.5)*(f-0.5)/e;
				break;

			case CHI2.G:
				var f = Math.log(o/e);	
				chi2 += 2*o*f;
				break;
			}
		}
	}


graph._z.level = 0.05;
graph._z.dof = (graph._keys1.length-1)*(graph._keys2.length-1);
graph._z.cv = qchisq(1-graph._z.level,graph._z.dof);
graph._z.chi2 = chi2;
graph._z.pvalue = 1-pchisq(chi2,graph._z.dof);


}

//*********************************************************************

function computeExactTest(graph)
{
if(graph._keys1.length!=2) return;
if(graph._keys2.length!=2) return;

var key,a,b,c,d;

key = graph._keys1[0]+"\t"+graph._keys2[0];
a = graph._count[key];
if(isNaN(a)) return;

key = graph._keys1[0]+"\t"+graph._keys2[1];
b = graph._count[key];
if(isNaN(b)) return;

key = graph._keys1[1]+"\t"+graph._keys2[0];
c = graph._count[key];
if(isNaN(c)) return;

key = graph._keys1[1]+"\t"+graph._keys2[1];
d = graph._count[key];
if(isNaN(d)) return;


// compute pvalue
var p = formula(a,b,c,d);
//console.log(a+" "+b+" "+c+" "+d+" -> "+p);

// compute all others pvalues

var sum = p;

sum += tryall(a,b,c,d,-1,p);
sum += tryall(a,b,c,d,1,p);

graph._z.exact = sum;

	function formula(a,b,c,d)
	{
	var f = logamma(a+b+1)+logamma(c+d+1)+logamma(a+c+1)+logamma(b+d+1)
		-logamma(a+1)-logamma(b+1)-logamma(c+1)-logamma(d+1)
		-logamma(a+b+c+d+1);
	return Math.exp(f);
	}

	function tryall(x,y,z,t,incr,pcutoff)
	{
	var s = 0;
	while(true)			
		{
		x+=incr;
		if(x<0) break;
		y-=incr;
		if(y<0) break;
		z-=incr;
		if(z<0) break;
		t+=incr;
		if(t<0) break;
		var pp = formula(x,y,z,t);	
		//console.log(x+" "+y+" "+z+" "+t+" -> "+pp);
		if(pp<=pcutoff)
			s += pp;
		}
	return s;
	}

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
if(graph.ilabel1<0) return;
if(graph.ilabel2<0) return;

switch(graph.chi2)
	{
	case CHI2.PEARSON: drawChi2(ctx,graph); break;
	case CHI2.YATES: drawChi2(ctx,graph); break;
	case CHI2.G : drawChi2(ctx,graph); break;
	case CHI2.EXACT: drawExact(ctx,graph); break;
	}

}

//*********************************************************************

function drawChi2(ctx,graph)
{

var name1 = getGraphLabel(graph,"toplabel");
var name2 = getGraphLabel(graph,"leftlabel");

	var level = graph._z.level;
	var dof = graph._z.dof;
	var pvalue = graph._z.pvalue;
	var cv = graph._z.cv;

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
	ctx.fillText("Critical value C",graph.x+40,y);
	z = Math.round(cv*10000)/10000;
	ctx.fillText(""+z,graph.x+240,y);
	ctx.fillText("(\u03B1="+level+")",graph.x+360,y);

	y += 20;	
	ctx.fillText("Test statistic T",graph.x+40,y);
	z = Math.round(graph._z.chi2*10000)/10000;
	ctx.fillText(""+z,graph.x+240,y);
	z = Math.round(pvalue*10000)/10000;
	ctx.fillText("(pvalue="+z+")",graph.x+360,y);

	if(!isNaN(graph._z.chi2))
		{
		y += 40;
		ctx.fillStyle= "#FF0000";	
		if(graph._z.chi2>graph._z.cv)
			{
			multiText(ctx,["#000000","T > C : "+name1+" and "+name2+" ",
				"#FF0000","are not independent"],graph.x+40,y);
			}
		else	
			{
			multiText(ctx,["#000000","T < C : "+name1+" and "+name2+" ",
				"#FF0000","are independent"],graph.x+40,y);
			}

		y += 20;

		var max = Math.max(graph._z.chi2,cv)*1.2;
		drawChi2Curve(ctx,graph,y,dof,0,max,graph._z.chi2,"T",cv);
	}


}

//*********************************************************************

function drawExact(ctx,graph)
{

if(!graph._z.exact)
	{
	var x = graph.x+graph.w/2;
	var y = graph.y+graph.h/2;
	ctx.fillStyle = "#000000";
	ctx.textAlign =  "center";
	ctx.fillText("Not a 2x2 table",x,y);
	}

else
	{

	ctx.textAlign = "left";

	ctx.fillStyle = "#000000";

	var y = graph.y+graph.hbar+60;

	var exact = Math.round(graph._z.exact*1000000)/1000000;	
	ctx.fillText("two-tail test",graph.x+40,y);
	ctx.fillText("pvalue="+exact,graph.x+240,y);

	y+=40;

	if(graph._z.exact<0.05)
	multiText(ctx,["#000000","Independence hypothesis is ",
		"#FF0000","rejected"],graph.x+40,y);
	else	
		multiText(ctx,["#000000","Independence hypothesis is ",
		"#FF0000","accepted"],graph.x+40,y);
	}

}

//*********************************************************************

function downChi2Graph(pt,graph)
{
if(graph.ilabel1<0) return -1;
if(graph.ilabel2<0) return -1;

if(typeof(graph.error)=="undefined") graph.error = 5;

return -1;
}


//*********************************************************************
//*********************************************************************
//
//                SET
//
//*********************************************************************

function drawSetIcon(ctx,x,y)
{
ctx.strokeStyle = "#000000";
ctx.fillStyle = "#000000";
drawZero(x,y);
drawZero(x+3,y+3);
drawOne(x+6,y+6);
drawOne(x+9,y+9);
drawZero(x+12,y+12);
drawOne(x+15,y+15);
drawZero(x+18,y+18);

	function drawZero(x,y)
	{
	ctx.fillRect(x,y,3,1);
	ctx.fillRect(x,y,1,4);
	ctx.fillRect(x+2,y,1,4);
	ctx.fillRect(x,y+3,3,1);
	}

	function drawOne(x,y)
	{
	ctx.fillRect(x,y,3,4);
	}
}


//*********************************************************************

function computeSetData(graph)
{

var nr = lrecords.length;
if(!graph._z.set)
	{
	graph._z.set = new Array(nr);
	for(var i=0;i<nr;i++)
	graph._z.set[i] = false;

	graph._z.yes = 0;	
	graph._z.no = 0;
	}

if(graph.ilabel1<0) 
	{
	graph._z.keys = void 0;
	graph._z.setcount = void 0;
	graph._z.allcount = void 0;
	return;
	}

var yescount = {};
var nocount = {};

var yes = 0;
var no = 0;

for(var i=0;i<lrecords.length;i++)
	{
	var key = lrecords[i][graph.ilabel1];
	if(!(key in yescount))
		{
		yescount[key] = 0;
		nocount[key] = 0;
		}
	if(graph._z.set[i])
		{
		yescount[key]++;
		yes++;
		}
	else
		{
		nocount[key]++;
		no++;
		}
	}

// sort keys
var keys = [];
for(var key in yescount)
	keys.push(key);
keys.sort();

graph._z.keys = keys;
graph._z.yescount = yescount;
graph._z.nocount = nocount;
graph._z.yes = yes;
graph._z.no = no;
}

//*********************************************************************

function moveSetGraph(pt,graph)
{
var xno = graph.x+graph.w-120;
var xyes = graph.x+graph.w-30;
var xkey = graph.x+graph.w-150;
var ytop = graph.y+graph.hbar+10;

var width = 26;

graph._z.about = void 0;

if(!graph._z.keys) return false;

if(pt.x<xkey) return false;
if(pt.y<ytop+50-14) return false;
if(pt.y>ytop+50+20*graph._z.keys.length-14) return false;

var bias = Math.round(graph.yshift/12);
var j = Math.floor((pt.y-ytop-50+14)/20)+bias;

if((pt.x>xyes-width)&&(pt.x<xyes+width))
	{
	graph._z.about = {a:SET_ADD,i:j};
	return  true;
	}
else if((pt.x>xno-width)&&(pt.x<xno+width))
	{
	graph._z.about = {a:SET_REMOVE,i:j};
	return true;
	}
return false;

}

//*********************************************************************

function downSetGraph(pt,graph)
{
var xno = graph.x+graph.w-120;
var xyes = graph.x+graph.w-30;
var xkey = graph.x+graph.w-150;
var ytop = graph.y+graph.hbar+10;

var width = 26;

if(inRect(pt,graph.x+graph.w-85,ytop-5,20,20))
	{
	return DRAG_SET;
	}

if(!graph._z.keys) return -1;

if(pt.x<xkey) return -1;
if(pt.y<ytop+50-14) return -1;
if(pt.y>ytop+50+20*graph._z.keys.length-14) return -1;

var bias = Math.round(graph.yshift/12);
var j = Math.floor((pt.y-ytop-50+14)/20)+bias;

if((pt.x>xyes-width)&&(pt.x<xyes+width))
	{
	sliceindex = j;
	return SET_ADD;
	}
else if((pt.x>xno-width)&&(pt.x<xno+width))
	{
	sliceindex = j;
	return SET_REMOVE;
	}
return -1;
}

//*********************************************************************

function upSetGraph(graph)
{

if((action==SET_ADD)||(action==SET_REMOVE))
	{
	for(var i=0;i<lrecords.length;i++)
		{
		var key = lrecords[i][graph.ilabel1];
		if(key==graph._z.keys[sliceindex])
			graph._z.set[i] = action==SET_ADD;
		}


	computeSetData(graph);
	}

if(action==SAVE_LABELSET)
	{	
	if(zlabel==labels.length) zlabel++;
	newfield++;
	var name = "DUMMY."+newfield;
	labels.push(name);
	for(var i=0;i<lrecords.length;i++)
		lrecords[i].push(graph._z.set[i]?"YES":"NO");
	}

if(action==SAVE_VALUESET)
	{
	if(zvalue==values.length) zvalue++;
	newfield++;
	var name = "DUMMY."+newfield;
	values.push(name);
	for(var i=0;i<vrecords.length;i++)
		vrecords[i].push(graph._z.set[i]?1:0);
	}	

}

//*********************************************************************

function drawSetGraph(ctx,graph)
{

var xno = graph.x+graph.w-120;
var xyes = graph.x+graph.w-30;
var xkey = graph.x+graph.w-150;
var xabout = graph.x+graph.w-75;

var ytop = graph.y+graph.hbar+10;
var width = 26;

ctx.textAlign = "center";
ctx.fillStyle = "#000000";
ctx.fillText("YES (1)",xyes,ytop+10);
ctx.fillText("NO (0)",xno,ytop+10);

ctx.fillText(""+graph._z.yes,xyes,ytop+30);
ctx.fillText(""+graph._z.no,xno,ytop+30);

ctx.fillStyle = "#FFFFFF";
drawRightArrow(ctx,graph.x+graph.w-75,ytop+5);

if(graph._z.keys)
	{
	var keys = graph._z.keys;
	var yescount = graph._z.yescount;
	var nocount = graph._z.nocount;

	var bias = Math.round(graph.yshift/12);
	if(bias>=keys.length-1)
		{
		graph.yshift = (keys.length-1)*12;
		bias = keys.length-1;
		}

	ctx.fillStyle = "#000000";
	ctx.strokeStyle = "#CCCCCC";

	for(var i=bias;i<keys.length;i++)
		{
		ctx.textAlign = "right";
		ctx.fillText(keys[i],xkey-5,ytop+50+(i-bias)*20);
		ctx.textAlign = "center";
		draw(yescount[keys[i]],xyes,ytop+50+(i-bias)*20);
		draw(nocount[keys[i]],xno,ytop+50+(i-bias)*20);
		}
	}

if(graph._z.about)
	{
	ctx.fillStyle = GRAY;
	var i = graph._z.about.i;
	if(graph._z.about.a==SET_REMOVE)
		{
		if(yescount[keys[i]]>0)
			ctx.fillText("<--",xabout,ytop+50+(i-bias)*20);
		}
	else if(graph._z.about.a==SET_ADD)
		{	
		if(nocount[keys[i]]>0)
			ctx.fillText("-->",xabout,ytop+50+(i-bias)*20);
		}
	}

if((faction==SET_REMOVE)&&(graphs[graphindex]==graph))
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(xno-width,ytop+50+20*sliceindex-14,2*width,17);
	}
if((faction==SET_ADD)&&(graphs[graphindex]==graph))
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(xyes-width,ytop+50+20*sliceindex-14,2*width,17);
	}

	function draw(n,x,y)	
	{	
	if(!n) 
		ctx.fillText("",x,y);
	else
		ctx.fillText(""+n,x,y);
	ctx.strokeRect(x-width,y-14,2*width,17);
	}
}

//*********************************************************************

function save_set(graph)
{
}

//*********************************************************************
//*********************************************************************
//
//                HOMO
//
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
//
//                MOMENTS
//
//*********************************************************************


function computeMomentsData(graph)
{
if(graph.ivalues.length<1) return;

var nv = graph.ivalues.length;

var m1 = vector(nv);
var m2 = vector(nv);
var m3 = vector(nv);
var m4 = vector(nv);

var min = new Array(nv);
fillV(min,Number.MAX_VALUE);

var max = new Array(nv);
fillV(max,-Number.MAX_VALUE);

var nr = 0;

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	nr++;

	for(var j=0;j<nv;j++)
		{
		var x = vrecords[i][graph.ivalues[j]];
		if(x<min[j]) min[j] = x;
		if(x>max[j]) max[j] = x;
		m1[j] += x;
		m2[j] += x*x;
		m3[j] += x*x*x;
		m4[j] += x*x*x*x;
		}
	}	


var mean1 = new Array(nv);
var mean2 = new Array(nv);
var mean3 = new Array(nv);
var mean4 = new Array(nv);

for(var j=0;j<nv;j++)
	{
	mean1[j] = m1[j]/nr;
	mean2[j] = Math.pow(m2[j]/nr,1./2.);
	mean3[j] = Math.pow(m3[j]/nr,1./3.);
	mean4[j] = Math.pow(m4[j]/nr,1./4.);
	}

graph._z.n = nr;
graph._z.min = min;
graph._z.max = max;
graph._z.mean1 = mean1;
graph._z.mean2 = mean2;
graph._z.mean3 = mean3;
graph._z.mean4 = mean4;

fillV(m2,0);
fillV(m3,0);
fillV(m4,0);

var nr = 0;
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;	
	nr++;
	for(var j=0;j<nv;j++)
		{
		var x = vrecords[i][graph.ivalues[j]]-mean1[j];
		m2[j] += x*x;
		m3[j] += x*x*x;
		m4[j] += x*x*x*x;
		}
	}

for(var j=0;j<nv;j++)
	{
	m2[j] /= nr;
	m3[j] /= nr;
	m4[j] /= nr;
	}

graph._z.momentc2 = m2;
graph._z.momentc3 = m3;
graph._z.momentc4 = m4;

var stdev = new Array(nv);
var skewness = new Array(nv);
var kurtosis = new Array(nv);

for(var j=0;j<nv;j++)
	{
	var s = Math.sqrt(m2[j]);
	stdev[j] = s;
	skewness[j] = m3[j]/(s*s*s);
	kurtosis[j] = m4[j]/(s*s*s*s);
	}

graph._z.stdev = stdev;
graph._z.skewness = skewness;
graph._z.kurtosis = kurtosis;

var d1 = new Array(nv);
var q1 = new Array(nv);
var q2 = new Array(nv);
var q3 = new Array(nv);
var d9 = new Array(nv);

var xx = new Array(nr);

var nr = 0;
for(var j=0;j<nv;j++)
	{	
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		xx[nr++] = vrecords[i][graph.ivalues[j]];
		}		

	xx.sort(function(a,b) { return a-b });

	d1[j] = xx[Math.floor((nr-1)/10)];
	q1[j] = xx[Math.floor((nr-1)/4)];
	q2[j] = xx[Math.floor((nr-1)/2)];
	q3[j] = xx[Math.floor((nr-1)*3/4)];
	d9[j] = xx[Math.floor((nr-1)*9/10)];
	}

graph._z.d1 = d1;
graph._z.q1 = q1;
graph._z.q2 = q2;
graph._z.q3 = q3;
graph._z.d9 = d9;

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
if(graph.ivalues.length<1) return;

ctx.fillStyle = "#000000";
ctx.textAlign = "left"

var x1 = graph.x+10;
var x2 = graph.x+190;
var y = graph.y+40;

y += 30;
ctx.fillText("Nb of observations",x1,y);
y += 20;
ctx.fillText("Average",x1,y);
y += 20;
ctx.fillText("Standard deviation",x1,y)
y += 20;
ctx.fillText("Variance",x1,y)
y += 30;	
ctx.fillText("Minimum",x1,y);
y += 20;
ctx.fillText("First decile",x1,y);
y += 20;
ctx.fillText("First quartile",x1,y);
y += 20;
ctx.fillText("Median",x1,y);
y += 20;
ctx.fillText("Third quartile",x1,y);
y += 20;
ctx.fillText("Ninth decile",x1,y);
y += 20;
ctx.fillText("Maximum",x1,y);
y += 30;
ctx.fillText("2nd order average",x1,y)
y += 20;
ctx.fillText("3rd order average",x1,y);
y += 20;
ctx.fillText("4th order average",x1,y);
y += 30;
ctx.fillText("Skewness",x1,y)
y += 20;
ctx.fillText("Kurtosis",x1,y)

var nv = graph.ivalues.length;

ctx.textAlign = "right";

var jfirst = Math.floor(graph.yshift/50);
if(jfirst>=nv)
	jfirst = nv-1;

for(var j=jfirst;j<nv;j++)
	{
	var x = graph.x+200+100*(j-jfirst);
	y = graph.y+40;
	ctx.fillText(values[graph.ivalues[j]],x,y);
	y += 30;
	ctx.fillText(""+graph._z.n,x,y);
	y += 20;
	ctx.fillText(round(graph._z.mean1[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.stdev[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.momentc2[j]),x,y);
	y += 30;
	ctx.fillText(round(graph._z.min[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.d1[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.q1[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.q2[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.q3[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.d9[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.max[j]),x,y);
	y += 30;
	ctx.fillText(round(graph._z.mean2[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.mean3[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.mean4[j]),x,y);
	y += 30;
	ctx.fillText(round(graph._z.skewness[j]),x,y);
	y += 20;
	ctx.fillText(round(graph._z.kurtosis[j]),x,y);
	}


	function round(x)
	{
		return ""+Math.round(x*PREC)/PREC;
	}

}

//*********************************************************************

function buildMomentsTable(graph)
{
if(graph.ivalues.length<1) return;

var n = graph.ivalues.length;

setTableName("Statistics");

var row = 1;

for(var j=0;j<n;j++)
	table(row,j+2,values[graph.ivalues[j]]);
row++;

line("Nb of observations",graph._z.n);
line("Mean",graph._z.mean1);
line("Standard deviation",graph._z.stdev);
line("Variance",graph._z.momentc2);
row++;
line("Minimum",graph._z.min);
line("First decile",graph._z.d1);
line("First quartile",graph._z.q1);
line("Median",graph._z.q2);
line("Third quartile",graph._z.q3);
line("Ninth decile",graph._z.d9);
line("Maximum",graph._z.max);
row++;
line("2nd order average",graph._z.mean2);
line("3rd order average",graph._z.mean3);
line("4th order average",graph._z.mean4);
row++;
line("Skewness",graph._z.skewness);
line("Kurtosis",graph._z.kurtosis);

	function line(title,a)
	{
	table(row,1,title);
	for(var j=0;j<n;j++)
		{
		var x = (a instanceof Array) ? a[j] : a;
		table(row,2+j,Math.round(x*PREC)/PREC);
		}
	row++;
	}
}


//*********************************************************************
//
//                NORM
//
//*********************************************************************

function drawNormIcon(ctx,x,y)
{
ctx.drawImage(nimg,x,y,20,20);
}

//*********************************************************************

function computeNormData(graph)
{
if(graph.w<460) graph.w = 460;

if(graph.ivalue1<0) return;

switch(graph.norm)
	{
	case NORM.AGOSTINO: computeNormTests(graph); break;
	case NORM.ANSCOMBE: computeNormTests(graph); break;
	case NORM.OMNIBUS: computeNormTests(graph); break;
	case NORM.JARQUE: computeNormTests(graph); break;
	case NORM.WILK: 	computeWilkTest(graph); break;
	case NORM.ANDERSON: computeAndersonTest(graph); break;
	case NORM.LILLIE: computeLillieforsTest(graph); break;
	}

}

//*********************************************************************

function computeNormTests(graph)
{
// mockup list
var temp = graph.ivalues;
graph.ivalues = [graph.ivalue1];
computeMomentsData(graph);
graph.ivalues = temp;

var skewness = graph._z.skewness[0];
var kurtosis = graph._z.kurtosis[0];


var nr = graph._z.n;

var meansk = 0;
var varsk = 6*(nr-2)/((nr+1)*(nr+3));
var skewsk = 0;
var kurtsk = 36*(nr-7)*(nr*nr+2*nr-5)/((nr-2)*(nr+5)*(nr+7)*(nr+9));


var meankt = 3-6/(nr+1);
var varkt = 24*nr*(nr-2)*(nr-3)/((nr+1)*(nr+1)*(nr+3)*(nr+5));
var aa = 6*(nr+3)*(nr+5)/(nr*(nr-2)*(nr-3));
var skewkt = 6*(nr*nr-5*nr+2)/((nr+7)*(nr+9))*Math.sqrt(aa);


var w2 = Math.sqrt(2*kurtsk+4)-1;
var w = Math.sqrt(w2);
var a2 = 2/(w2-1);
var d = 1/Math.sqrt(Math.log(w));


var A = 6+8/skewkt*(2/skewkt+Math.sqrt(1+4/(skewkt*skewkt)));


var zz = skewness/Math.sqrt(a2*varsk);	
var z1 = d*Math.log(zz+Math.sqrt(zz*zz+1));

var zz = 1+(kurtosis-meankt)/Math.sqrt(varkt)*Math.sqrt(2/(A-4));
zz = (1-2/A)/zz;
zz = Math.pow(zz,1./3.);
var z2 = Math.sqrt(9*A/2)*(1-2/(9*A)-zz);	


graph._z.z1 = z1;
graph._z.z1pvalue = 2*(1-pnorm(z1));
graph._z.z1cv = qnorm(1-0.025);

graph._z.z2 = z2;
graph._z.z2pvalue = 2*(1-pnorm(z2));
graph._z.z2cv = qnorm(1-0.025);

graph._z.o = z1*z1+z2*z2;
graph._z.opvalue = 1-pchisq(graph._z.o,2);
graph._z.ocv = qchisq(1-0.05,2);

graph._z.j = nr/6*(skewness*skewness+0.25*(kurtosis-3)*(kurtosis-3));
graph._z.jpvalue = 1-pchisq(graph._z.j,2);
graph._z.jcv = qchisq(1-0.05,2);

console.log(graph._z);

}

//*********************************************************************

function computeWilkTest(graph)
{


var x = [];
var xmean = 0;
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var xx = vrecords[i][graph.ivalue1];
	x.push(xx);
	xmean += xx;
	}


var nr = x.length;
xmean /= nr;


x.sort(function(a,b) { return a-b; })


var a = coefficients(nr);

var n2 = Math.floor(nr/2);
var num = 0;
for(var i=1;i<=n2;i++)
	num += a[i]*(x[nr-i]-x[i-1]);

var den = 0;
for(var i=0;i<nr;i++)
	den += (x[i]-xmean)*(x[i]-xmean);


graph._z.n = nr;
graph._z.w = num*num/den;
graph._z.pvalue = pvalue(graph._z.w,nr);

console.log(graph._z);

	//------------------------------------------------------------------------

	function coefficients(n)
	{
	var c1 = [ 0.,.221157,-.147981,-2.07119, 4.434685, -2.706056 ];
	var c2 = [ 0.,.042981,-.293762,-1.752461,5.682633, -3.582633 ];

	var nn2 = Math.floor(n/2);

	var a = new Array(nn2+1);

	var pw = 1;

	var an = n;
	if(n==3)
		{
		a[1] = 0.70710678;
		}
	else
		{
		var an25 = an+0.25;
		var summ2 = 0;
		for(var i=1;i<=nn2;i++)
			{
			a[i] = qnorm((i-0.375)/an25);
			summ2 += a[i]*a[i];
			}
		summ2 *=2;
		var ssumm2 = Math.sqrt(summ2);	
		var rsn = 1./Math.sqrt(an);

		var a1 = poly(c1,rsn) - a[1] /ssumm2;

		// normalization
		if(n>5)
			{
			var i1 = 3;
			var a2 = -a[2]/ssumm2 + poly(c2,rsn);
			var fac = Math.sqrt((summ2-2*a[1]*a[1]-2*a[2]*a[2])
				/(1-2*(a1*a1)-2*(a2*a2)))
			a[2] = a2;
			}
		else
			{
			var i1 = 2;
			var fac = Math.sqrt((summ2-2*a[1]*a[1])/
				(1-2*a1*a1))
			}
		a[1] = a1;
		for(var i=i1;i<=nn2;i++)
			a[i] /= -fac;
		}
	return a;
	}

	//------------------------------------------------------------------------

	function poly(a,x)
	{
	var n = a.length-1;
	var s = a[n];
	for(var i=n-1;i>=0;i--)
		s  = s*x+a[i];
	return s;
	}

	//------------------------------------------------------------------------
	
	function pvalue(w,n)
	{
	var g = [ -2.273,.459 ];
    var c3 = [ .544,-.39978,.025054,-6.714e-4 ];
    var c4 = [ 1.3822,-.77857,.062767,-.0020322 ];
    var c5 = [ -1.5861,-.31082,-.083751,.0038915 ];
    var c6 = [ -.4803,-.082676,.0030302 ];

	if(n==3)
		{		
		var pi6 = 1.90985931710274;
		var stqr =  1.04719755119660;
		var pv = pi6*(Math.asin(Math.sqrt(w))-stqr);
		if(pv<0) pv = 0;
		return pv;
		}	

	var y = Math.log(1-w);
	var xx = Math.log(n);
	if(n<=11)
		{
		var gamma = poly(g,n);
		if(y>=gamma) return 1e-30;
		y = -Math.log(gamma-y);
		var m = poly(c3,n);
		var s = Math.exp(poly(c4,n));
		}
	else
		{
		var m = poly(c5,xx);
		var s = Math.exp(poly(c6,xx));
		}
	return 1-pnorm((y-m)/s);
	}

}

//*********************************************************************

function computeAndersonTest(graph)
{

var x = [];
var xmean = 0;
var xdev = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var xx = vrecords[i][graph.ivalue1];
	x.push(xx);
	xmean += xx;
	xdev += xx*xx;
	}

var nr = x.length;

xmean = xmean/nr;
xdev = (xdev-nr*xmean*xmean)/(nr-1);
xdev = Math.sqrt(xdev);


x.sort(function(a,b) { return a-b; })


for(var i=0;i<nr;i++)
	x[i] = pnorm((x[i]-xmean)/xdev);


var a  = 0;
for(var i=1;i<=nr;i++)
	a += (2*i-1)*(Math.log(x[i-1])+Math.log(1-x[nr-i]));

a = -nr -a/nr;

var aa = a*(1+0.75/nr+2.25/nr/nr);

if(aa<0.2)
	var pvalue = 1-Math.exp(-13.436+101.14*aa -223.73*aa*aa);
else if(aa<0.34)
	var pvalue = 1-Math.exp(-8.318+42.796*aa-59.938*aa*aa);
else if(aa<0.6)
	var pvalue = Math.exp(0.9177-4.279*aa-1.38*aa*aa);
else if(aa<10)
	var pvalue = Math.exp(1.2937-5.709*aa+0.0186*aa*aa)
else
	var pvalue = 3.7e-24

graph._z.n = nr;
graph._z.a = a;
graph._z.pvalue = pvalue;

console.log(graph._z);

}

//*********************************************************************

function computeLillieforsTest(graph)
{

var x = [];
var xmean = 0;
var xdev = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var xx = vrecords[i][graph.ivalue1];
	x.push(xx);
	xmean += xx;
	xdev += xx*xx;
	}

var nr = x.length;

xmean = xmean/nr;
xdev = (xdev-nr*xmean*xmean)/(nr-1);
xdev = Math.sqrt(xdev);


x.sort(function(a,b) { return a-b; })

for(var i=0;i<nr;i++)
	x[i] = pnorm((x[i]-xmean)/xdev);


var dm = 0;
var dp = 0;
var g;

for(var i=1;i<=nr;i++)
	{
	f = x[i-1]-(i-1)/nr;		
	if(f>dm) dm = f;
	f = i/nr-x[i-1];
	if(f>dp) dp = f;
	}

var d = Math.max(dm,dp);

graph._z.n = nr;
graph._z.d = d;

if(nr<=100)
	{
	var kd = d;
	var nd = nr;
	}
else
	{
	var kd = d*Math.pow(nr/100,0.49);
	var nd = 100;
	}

var pvalue = Math.exp(-7.01256*kd*kd*(nd+2.78019)+
	2.99587*kd*Math.sqrt(nd+2.78019) - 0.122119 + 0.974598/Math.sqrt(nd) +
	1.67997/nd);

if(pvalue > 0.1)
	{
	var kk = (Math.sqrt(nr)-0.01+0.85/Math.sqrt(nr))*d;
	if(kk<=0.302)
		{
		pvalue = 1;
		}
	else if(kk<=0.5) {
		pvalue = 2.76773-19.828315*kk+ 80.709644*kk*kk
			-138.55152*kk*kk*kk +81.218052*kk*kk*kk*kk;
		}
	else if(kk<=0.9)
		{
		pvalue = -4.901232 + 40.662806*kk -97.490286*kk*kk
			+94.029866*kk*kk*kk -32.355711*kk*kk*kk*kk;
		}
	else if(kk<=1.31)
		{
		pvalue = 6.19876 - 19.558097*kk + 23.186922*kk*kk 
			-12.234627*kk*kk*kk + 2.423045*kk*kk*kk*kk;
		}
	else
		pvalue = 0;
		
	}

graph._z.n = nr;
graph._z.d = d;
graph._z.pvalue = pvalue;
graph._z.cv = 0.886/Math.sqrt(nr);

console.log(graph._z);

}

//*********************************************************************

function drawNormGraph(ctx,graph)
{
if(graph.ivalue1<0) return;

var x = graph.x+30;
var y = graph.y+graph.hbar+60;

var nr = graph._z.n;

ctx.fillStyle = "#000000";

if(graph.norm==NORM.AGOSTINO)
	{

	ctx.textAlign = "left";
	ctx.fillText("Nb of observations",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+nr,x+250,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Skewness",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.skewness[0]),x+250,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Statistic test Z",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.z1),x+250,y);
	ctx.fillText("(pvalue="+round(graph._z.z1pvalue)+")",x+380,y);

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Critical value",x,y);
	ctx.textAlign = "right";
	ctx.fillText("+/-"+round(graph._z.z1cv),x+250,y);
	ctx.fillText("(\u03B1=0.05)",x+380,y);

	y += 30;

	ctx.textAlign = "left";
	if(graph._z.z1pvalue>0.05)
		multiText(ctx,["#000000","p-value > 0.05 : Data ",
			"#FF0000","have no skewness"],x,y);
	else
		multiText(ctx,["#000000","p-value < 0.05 : Data ",
			"#FF0000","have a skewness"],x,y);

	y += 30;

	var cv = graph._z.z1cv;
	var max = Math.max(Math.abs(graph._z.z1),cv)*1.2;
	if(max<2.5) max = 2.5;
	drawNormalCurve(ctx,graph,y,-max,max,graph._z.z1,"Z",cv,true);
	}

if(graph.norm==NORM.ANSCOMBE)
	{
	ctx.textAlign = "left";
	ctx.fillText("Nb of observations",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+nr,x+250,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Kurtosis",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.kurtosis[0]),x+250,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Statistic test Z",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.z2),x+250,y);
	ctx.fillText("(pvalue="+round(graph._z.z2pvalue)+")",x+380,y);

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Critical value",x,y);
	ctx.textAlign = "right";
	ctx.fillText("+/-"+round(graph._z.z2cv),x+250,y);
	ctx.fillText("(\u03B1=0.05)",x+380,y);

	y += 30;
	ctx.textAlign = "left";
	if(graph._z.z2pvalue<0.05)
		multiText(ctx,["#000000","p-value < 0.05 : Kurtosis ",
			"#FF0000","is not equal to 3"],x,y);
	else
		multiText(ctx,["#000000","p-value > 0.05 : Kurtosis ",
			"#FF0000","is equal to 3"],x,y);

	y += 30;

	var cv = graph._z.z2cv;
	var max = Math.max(Math.abs(graph._z.z1),cv)*1.2;
	if(max<2.5) max = 2.5;
	drawNormalCurve(ctx,graph,y,-max,max,graph._z.z2,"Z",cv,true);
	}

if(graph.norm==NORM.OMNIBUS)
	{
	ctx.textAlign = "left";
	ctx.fillText("Nb of observations",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+nr,x+250,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Degrees of freedom",x,y);
	ctx.textAlign = "right";
	ctx.fillText("2",x+250,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Statistic test K\u00B2",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.o),x+250,y);
	ctx.fillText("(pvalue="+round(graph._z.opvalue)+")",x+380,y);

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Critical value",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.ocv),x+250,y);
	ctx.fillText("(\u03B1=0.05)",x+380,y);

	y += 30;
	ctx.textAlign = "left";
	if(graph._z.o>graph._z.ocv)
		multiText(ctx,["#000000","K\u00B2 > C  : distribution ",
			"#FF0000","is not normal"],x,y);
	else
		multiText(ctx,["#000000","K\u00B2 < C : distribution ",
			"#FF0000","is normal"],x,y);

	y += 30;

	var cv = graph._z.ocv;
	var max = Math.max(Math.abs(graph._z.o),cv)*1.2;
	drawChi2Curve(ctx,graph,y,2,0,max,graph._z.o,"K\u00B2",cv);
	}

if(graph.norm==NORM.JARQUE)
	{
	ctx.textAlign = "left";
	ctx.fillText("Nb of observations",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+nr,x+250,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Degrees of freedom",x,y);
	ctx.textAlign = "right";
	ctx.fillText("2",x+250,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Statistic test JB",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.j),x+250,y);
	ctx.fillText("(pvalue="+round(graph._z.jpvalue)+")",x+380,y);

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Critical value",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.jcv),x+250,y);
	ctx.fillText("(\u03B1=0.05)",x+380,y);

	y += 30;
	ctx.textAlign = "left";
	if(graph._z.j>graph._z.jcv)
		multiText(ctx,["#000000","JB > C  : distribution ",
			"#FF0000","is not normal"],x,y);
	else
		multiText(ctx,["#000000","JB < C : distribution ",
			"#FF0000","is normal"],x,y);

	y += 30;

	var cv = graph._z.jcv;
	var max = Math.max(Math.abs(graph._z.j),cv)*1.2;
	drawChi2Curve(ctx,graph,y,2,0,max,graph._z.j,"JB",cv);
	}

if(graph.norm==NORM.WILK)
	{
	ctx.textAlign = "left";
	ctx.fillText("Nb of observations",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+nr,x+250,y);

	y += 20;


	ctx.textAlign = "left";
	ctx.fillText("Statistic test W",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.w),x+250,y);
	ctx.fillText("(pvalue="+round(graph._z.pvalue)+")",x+380,y);

	y += 30;
	ctx.textAlign = "left";
	if(graph._z.pvalue<0.05)
		multiText(ctx,["#000000","p-value < 0.05 : distribution ",
			"#FF0000","is not normal"],x,y);
	else
		multiText(ctx,["#000000","p-value > 0.05 : distribution ",
			"#FF0000","is normal"],x,y);

	}

if(graph.norm==NORM.ANDERSON)
	{
	ctx.textAlign = "left";
	ctx.fillText("Nb of observations",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+nr,x+250,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Statistic test A",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.a),x+250,y);
	ctx.fillText("(pvalue="+round(graph._z.pvalue)+")",x+380,y);

	y += 30;
	ctx.textAlign = "left";
	if(graph._z.pvalue<0.05)
		multiText(ctx,["#000000","p-value < 0.05 : distribution ",
			"#FF0000","is not normal"],x,y);
	else
		multiText(ctx,["#000000","p-value > 0.05 : distribution ",
			"#FF0000","is normal"],x,y);
	}


if(graph.norm==NORM.LILLIE)
	{
	ctx.textAlign = "left";
	ctx.fillText("Nb of observations",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+nr,x+250,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Statistic test D",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.d),x+250,y);
	ctx.fillText("(pvalue="+round(graph._z.pvalue)+")",x+380,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Critical value C",x,y);
	ctx.textAlign = "right";
	ctx.fillText(round(graph._z.cv),x+250,y);
	ctx.fillText("(\u03B1=0.05)",x+380,y);

	y += 30;
	ctx.textAlign = "left";
	if(graph._z.pvalue<0.05)
		multiText(ctx,["#000000","p-value < 0.05 : distribution ",
			"#FF0000","is not normal"],x,y);
	else
		multiText(ctx,["#000000","p-value > 0.05 : distribution ",
			"#FF0000","is normal"],x,y);
	}


	function round(x)
	{
		return ""+(Math.round(x*10000)/10000);
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

// fake list of values
var temp = graph.ivalues;
graph.ivalues = [graph.ivalue1];
computeMomentsData(graph);
graph.ivalues = temp;

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
	ctx.lineWidth = 2;
	ctx.beginPath();
	for(var i=0;i<=100;i++)
		{
		var xx = xmin+i*(xmax-xmin)/100;
		var dd = normal(xx,graph._z.mean1,graph._z.stdev);
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
	ctx.lineWidth = 1;
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

function dragHistoGraph(ptmove,graph)
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

function upHistoGraph(graph)
{
if(action!=CREATE_LABEL) return;

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

if(zlabel==labels.length) zlabel++;
newfield++;
name = values[graph.ivalue1]+"_"+newfield;
labels.push(name);
}

//*********************************************************************

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

function dragDistribGraph(ptmove,graph)
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
if(graph.ivalue2<0) return;

graph._z.y = [];

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	graph._z.y.push(vrecords[i][graph.ivalue2]);
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
	var font = ctx.font;
	ctx.font = "bold 12px helvetica";
	
	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	ctx.fillText("Q",x+6,y+11);
	ctx.fillText("Q",x+15,y+18);

	ctx.font = font;
	}

//*********************************************************************

function drawProbaGraph(ctx,graph)
{

if(graph.ivalue2<0) return;

var display = graph.ilabel3;

	var x1 = graph.x+30;
	var x2 = graph.x+graph.w-30;
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
	var font = ctx.font;
	ctx.textAlign = "center";
	ctx.fillStyle = "#000000";
	ctx.font = "9px helvetica";

	for(var i=0;i<n;i++)
		{
		x = Math.round(x1 + (x2-x1)*(graph._z.x[i]-xmin)/(xmax-xmin));
		y = Math.round(y2 - (y2-y1)*(graph._z.y[i]-ymin)/(ymax-ymin));
		if(display>=0)
			ctx.fillText(lrecords[i][display],x,y+3)
		else
			ctx.fillRect(x-2,y-2,4,4);
		}

	ctx.font = font;

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


//*********************************************************************
//
//                TUKEY
//
//*********************************************************************


function computeTukeyData(graph)
{
if(graph.ivalue2<0) return;

// data
var y = [];
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	y.push(vrecords[i][graph.ivalue2]);
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

if(graph.ivalue2>=0)
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
graph.placeholder.topvalue =  "X";
graph.placeholder.leftvalue = "Y";
graph.placeholder.bottomlabel = "COLOR";
graph.placeholder.rightlabel = "LABEL";

if(graph.ivalue1<0) return;
if(graph.ivalue2<0) return;

var sum1 = 0
var sum2 = 0
var sum11 = 0
var sum12 = 0
var count = 0
var min1 = Number.MAX_VALUE;
var max1 = -Number.MAX_VALUE;

var zmin = Number.MAX_VALUE;
var zmax = -Number.MAX_VALUE;

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

	if(graph.iunit)
		{
		var z = vrecords[i][graph.iunit];
		if(z<zmin) zmin = z;
		if(z>zmax) zmax = z;
		}
	}

sum1 = sum1/count;
sum2 = sum2/count;

var v12 = sum12/count-sum1*sum2;
var v11 = sum11/count-sum1*sum1;

graph._z.a = v12/v11
graph._z.b = sum2 - sum1*v12/v11;
graph._z.min = min1;
graph._z.max = max1;

var V = matrix(2,2);
var r = computeScatterVariance(graph,V);
graph._z.center = r;
graph._z.ellipse = computeScatterEllipse(V);

graph._z.zmin = zmin;
graph._z.zmax = zmax;


if(graph.ilabel1>=0)
	{
	var H = matrix(2,2);
	var E = matrix(2,2);

	var r = computeScatterMatrices(graph,H,E);

	graph._z.center = r[0];
	graph._z.centers = r[1];
	
	graph._z.hellipse = computeScatterEllipse(H);
	graph._z.eellipse = computeScatterEllipse(E);

	computeGraphData1(graph)
	}

}

//*********************************************************************

function computeScatterVariance(graph,V)
{
var nv = 2;
var count = 0;
var sum = vector(nv);

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	count += 1;

	var x1 = vrecords[i][graph.ivalue1];
	sum[0] += x1;

	var x2 = vrecords[i][graph.ivalue2];
	sum[1] += x2;

	V[0][0] += x1*x1;
	V[0][1] += x1*x2;
	V[1][0] += x2*x1;
	V[1][1] += x2*x2;
	}

if(count==0) count = 1;

for(var j=0;j<nv;j++)
	sum[j] = sum[j]/count;


for(var j=0;j<nv;j++)
	for(var k=0;k<nv;k++)
		V[j][k] = (V[j][k]-count*sum[j]*sum[k])/count

return sum;
}

//*********************************************************************

function computeScatterMatrices(graph,H,E)
{
var nv = 2;
var gcount = 0;
var gsum = vector(nv);

var sum = {};
var count = {};

var nr = 0;
var ng = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	nr++;
	var key =lrecords[i][graph.ilabel1];
	if(!(key in sum))
		{
		ng++;
		sum[key] = vector(nv);
		count[key] = 0;
		}
	count[key]++;
	sum[key][0] += vrecords[i][graph.ivalue1];
	sum[key][1] += vrecords[i][graph.ivalue2];
	
	gcount++;
	gsum[0] += vrecords[i][graph.ivalue1];
	gsum[1] += vrecords[i][graph.ivalue2];
	}


gsum[0] = gsum[0]/gcount;
gsum[1] = gsum[1]/gcount;

for(var key in sum)
	{
	sum[key][0] = sum[key][0]/count[key];
	sum[key][1] = sum[key][1]/count[key];
	}

for(var key in sum)
	{
	for(var j=0;j<nv;j++)
		for(var k=0;k<nv;k++)
			H[j][k] += count[key]*(sum[key][j]-gsum[j])*(sum[key][k]-gsum[k]);
	}

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var key =lrecords[i][graph.ilabel1];

	var x0 = vrecords[i][graph.ivalue1];
	var x1 = vrecords[i][graph.ivalue2];

	E[0][0] += (x0-sum[key][0])*(x0-sum[key][0]);
	E[0][1] += (x0-sum[key][0])*(x1-sum[key][1]);
	E[1][0] += (x1-sum[key][1])*(x0-sum[key][0]);
	E[1][1] += (x1-sum[key][1])*(x1-sum[key][1]);
	}

for(var j=0;j<2;j++)
	for(var k=0;k<2;k++)
		{
		H[j][k] /= nr;
		E[j][k] /= nr;
		}

return [gsum,sum];
}

//*********************************************************************

function computeScatterEllipse(V)
{

var n = V.length;
var d = new Array(n);
var e = new Array(n);
tred(V,d,e,n);
tql2(V,d,e,n);

var rotation = Math.atan(V[0][1]/V[1][1]);

var sin = Math.sin(rotation);
var cos = Math.cos(rotation);

var xmul = Math.sqrt(5.991*Math.abs(d[0]));
var ymul = Math.sqrt(5.991*Math.abs(d[1]));

var xellipse = new Array(100);
var yellipse = new Array(100);
for(var i=0;i<100;i++)
	{
	var x = Math.cos(Math.PI*2*i/100)*xmul;
	var y = Math.sin(Math.PI*2*i/100)*ymul;
	xellipse[i] = x*cos+y*sin;
	yellipse[i] = -x*sin+y*cos;
	}
return {x:xellipse,y:yellipse}
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

if(graph.ivalue1<0) return;
if(graph.ivalue2<0) return;


var font = ctx.font;

var display = graph.ilabel3;
var option = getGraphOption(graph);

var i1 = graph.ivalue1;
var i2 = graph.ivalue2;

var xmin = i1==0 ? 0 : graph._z.xmin;
var xmax = i1==0 ? lrecords.length : graph._z.xmax;

var ymin = i2==0 ? 0 : graph._z.ymin;
var ymax = i2==0 ? lrecords.length : graph._z.ymax;

var dx = xmax-xmin;
var dy = ymax-ymin;

xmin -= dx/25;
xmax += dx/25;

ymin -= dy/25;
ymax += dy/25;

var xleft = graph.x+30;
var xright = graph.x+graph.w-30;
var ytop = graph.y+graph.hbar+30;
var ybottom = graph.y+graph.h-30;

var xscale = (xright-xleft)/(xmax-xmin)
var yscale = (ybottom-ytop)/(ymax-ymin)

var zmin = graph._z.zmin;
var zmax = graph._z.zmax;

ctx.strokeStyle = "#000000";
ctx.strokeRect(xleft,ytop,xright-xleft,ybottom-ytop);


// draw regression line
if(option==0)
	{
	ctx.strokeStyle = GREEN;
	ctx.lineWidth = 1
	ctx.beginPath()
	var xx = xmin;
	var yy = graph._z.a * xx + graph._z.b;
	x = xleft+(xx-xmin)*xscale;
	y = ybottom-(yy-ymin)*yscale
	ctx.moveTo(x,y)
	xx = xmax;
	yy = graph._z.a * xx + graph._z.b;
	x = xleft+(xx-xmin)*xscale;
	y = ybottom-(yy-ymin)*yscale
	ctx.lineTo(x,y)
	ctx.stroke()
	}


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
ctx.fillStyle =  vdotted;
x = xleft +(0-xmin)*xscale;
ctx.fillRect(x,graph.y+graph.hbar+5,1,graph.h-graph.hbar-10)

ctx.fillStyle = hdotted;
y = ybottom -(0-ymin)*yscale
ctx.fillRect(graph.x+5,y,graph.w-10,1)


if(option==0)
	{
	ctx.save();
	ctx.rect(xleft,ytop,xright-xleft,ybottom-ytop);
	ctx.clip();

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

		if(display>=0)
			ctx.fillText(lrecords[i][display],x,y+3)
		else if(graph.iunit<1)
			ctx.fillRect(x-2,y-2,5,5)
		else
			{
			ctx.globalAlpha = 0.5;
			var z = (vrecords[i][graph.iunit]-zmin)/(zmax-zmin)*20;
			ctx.beginPath();
			ctx.arc(x,y,z,0,Math.PI*2,false);
			ctx.fill();			
			ctx.globalAlpha = 1;
			}
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

			if(display>=0)
				{
				ctx.fillStyle = "#000000";
				var l = ctx.measureText(lrecords[i][display]).width;
				ctx.fillRect(x-l/2-5,y-6,l+10,12);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(lrecords[i][display],x,y+3)		
				}		
			else if(graph.iunit<1)
				{
				ctx.fillStyle = "#000000";
				ctx.fillRect(x-3,y-3,7,7)
				}
			else
				{
				ctx.fillStyle = "#000000";
				var z = (vrecords[i][graph.iunit]-zmin)/(zmax-zmin)*20;
				ctx.beginPath();
				ctx.arc(x,y,z,0,Math.PI*2,false);
				ctx.fill();			
				}
			}
		}


	ctx.restore();

	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	ctx.font = font;
	var t = "SLOPE: "+(Math.round(graph._z.a*PREC)/PREC)+
		"   INTERCEPT: "+(Math.round(graph._z.b*PREC)/PREC);
	ctx.fillText(t,graph.x+graph.w/2,graph.y+graph.h-7);
	ctx.textAlign = "left";
	}

if((option==1)&&(graph.ilabel1<0))
	{
	ctx.save();
	ctx.rect(xleft,ytop,xright-xleft,ybottom-ytop);
	ctx.clip();

	var xcenter = graph._z.center[0];
	var ycenter = graph._z.center[1];

	// draw global variance ellipse
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2;
	ctx.beginPath();


	for(var i=0;i<graph._z.ellipse.x.length;i++)
		{
		x = xleft +(xcenter+graph._z.ellipse.x[i]-xmin)*xscale;
		y = ybottom - (ycenter+graph._z.ellipse.y[i]-ymin)*yscale;
		if(i==0)
			{
			ctx.moveTo(x,y);
			}
		else
			ctx.lineTo(x,y);
		}
	ctx.closePath();
	ctx.stroke();	


	// draw center
	x = xleft+(xcenter-xmin)*xscale;
	y = ybottom - (ycenter-ymin)*yscale;
	ctx.fillStyle = "#000000";
	ctx.fillRect(x-1,y-5,2,10);
	ctx.fillRect(x-5,y-1,10,2);

	ctx.restore();
	}

if((option==1)&&(graph.ilabel1>=0))
	{
	ctx.save();
	ctx.rect(xleft,ytop,xright-xleft,ybottom-ytop);
	ctx.clip();

	var xcenter = graph._z.center[0];
	var ycenter = graph._z.center[1];

	// draw ellipses
	ctx.strokeStyle = "#00CC00";		
	ctx.lineWidth = 2;
	ctx.beginPath();
	for(var i=0;i<graph._z.hellipse.x.length;i++)
		{
		x = xleft +(xcenter+graph._z.hellipse.x[i]-xmin)*xscale;
		y = ybottom - (ycenter+graph._z.hellipse.y[i]-ymin)*yscale;
		if(i==0)
			{
			ctx.moveTo(x,y);
			}
		else
			ctx.lineTo(x,y);
		}
	ctx.closePath();
	ctx.stroke();	

	ctx.strokeStyle = "#FF0000";
	ctx.beginPath();
	for(var i=0;i<graph._z.eellipse.x.length;i++)
		{
		x = xleft+(xcenter+graph._z.eellipse.x[i]-xmin)*xscale;
		y = ybottom - (ycenter+graph._z.eellipse.y[i]-ymin)*yscale;
		if(i==0)
			ctx.moveTo(x,y);
		else
			ctx.lineTo(x,y);
		}
	ctx.closePath();
	ctx.stroke();

	ctx.lineWidth = 1;

	// draw centers
	for(var key in graph._z.centers)
		{
		var x = graph._z.centers[key][0];
		var y = graph._z.centers[key][1];
		x = xleft+(x-xmin)*xscale;
		y = ybottom - (y-ymin)*yscale;
		ctx.fillStyle = "#000000";
		ctx.textAlign = "center";
		ctx.fillText(key,x,y+4);
		}

	// draw center
	x = xleft+(xcenter-xmin)*xscale;
	y = ybottom - (ycenter-ymin)*yscale;
	ctx.fillStyle = "#000000";
	ctx.fillRect(x-1,y-5,2,10);
	ctx.fillRect(x-5,y-1,10,2);

	ctx.restore();
	}


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
	var display = graph.ilabel3;

	var xleft = graph.x+30;
	var xright = graph.x + graph.w -10;
	var ytop = graph.y + graph.hbar + 45;
	var ybottom = graph.y + graph.h -20;

	var radius = Math.min(xright-xleft,ybottom-ytop)/2;
	var xc = xleft+(xright-xleft)/2;
	var yc = ytop+(ybottom-ytop)/2;

	var rhomax = graph._z.rhomax;
	var theta = graph._z.theta;

	var zmin = graph._z.zmin;
	var zmax = graph._z.zmax;

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
	
			if(display>=0)	
				ctx.fillText(lrecords[theta[i]][display],x,y+3)
			else if(graph.iunit<1)
				ctx.fillRect(x-2,y-2,5,5)
			else
				{
				ctx.globalAlpha = 0.5;
				var z = vrecords[i][graph.iunit];
				z = Math.round((z-zmin)/(zmax-zmin)*20);
				ctx.beginPath();
				ctx.arc(x,y,z,0,Math.PI*2,false);
				ctx.fill();
				ctx.gloablAlpha = 1;
				}
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
graph.placeholder.bottomlabel = "COLOR";
graph.placeholder.rightlabel = "LABEL";

if(graph.ivalue1<0) return;
if(graph.ivalue2<0) return;


var i1 = graph.ivalue1;
var i2 = graph.ivalue2;

var rho; 
var rhomax = -Number.MAX_VALUE;
var theta = [];

var modulo = graph.angle==ANGLE.RADIAN ? Math.PI*2 : 360;


var zmin = Number.MAX_VALUE;
var zmax = -Number.MAX_VALUE;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	theta.push(i);

	rho = vrecords[i][i2];
	if(rho>rhomax) rhomax = rho;

	if(graph.iunit>0)
		{
		var z = vrecords[i][graph.iunit];
		if(z<zmin) zmin = z;
		if(z>zmax) zmax = z;
		}
	}

theta.sort( function(a,b) {
	return vrecords[a][i1]%modulo - vrecords[b][i1]%modulo });

graph._z.theta = theta;
graph._z.rhomax = rhomax;

graph._z.zmin = zmin;
graph._z.zmax = zmax;

if(graph.ilabel1>=0)
	computeGraphData1(graph)
}

//*********************************************************************

function dragPolarGraph(ptmove,graph)
{
if(faction==DRAG_ORIGIN)
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
			ctx.fillRect(x-2,y-2,5,5);
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

function dragLagGraph(ptmove,graph)
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

graph._z.cov = computeGlobalVariance(graph);

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

function moveCorrGraph(ptmove,graph)
{

if(graph.ivalues.length<2) return false;
if(!graph._z.cov) return;

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

var n = graph._z.cov.length;
var d = dx/n;

var j = Math.floor((ptmove.x-x1)/d)
var k = Math.floor((ptmove.y-y1)/d)

if(j<0) return;
if(j>=graph.ivalues.length) return;
if(k<0) return;
if(k>=graph.ivalues.length) return;

var option = getGraphOption(graph);
if(option==0)
	{
	var c = graph._z.cov[j][k]/Math.sqrt(graph._z.cov[j][j]*graph._z.cov[k][k]);
	}
else	
	{
	var c = graph._z.cov[j][k];
	}

message = values[graph.ivalues[k]]+" ~ "+values[graph.ivalues[j]]+" : "+
	(Math.round(c*PREC)/PREC);

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
if(graph.ivalues.length<2) return;

var option = getGraphOption(graph);

var x1 = graph.x+10;
var x2 = graph.x + graph.w - 115;
var dx = (x2-x1)
var xc = (x1+x2)/2
var y1 = graph.y + graph.hbar + 5;
var y2 = graph.y + graph.h -5
var yc = (y1+y2)/2;
var dy = (y2-y1);

if(dx<dy)
	{
	dy = dx;
	y1 = yc - dy/2;
	y2 = yc + dy/2;
	}
else
	{
	dx = dy;
	x1 = xc - dx/2;
	x2 = dx + dx/2;
	}

var cov = graph._z.cov;

var nv = cov.length;
var d = dx/nv;


// draw grid

ctx.fillStyle = "#DDDDDD";
for(var j=0;j<=nv;j++)
	{
	ctx.fillRect(x1+j*d,y1+j*d-d,1,y2-y1-j*d+d);
	ctx.fillRect(x1,y1+j*d,j*d+d,1);
	}

ctx.fillStyle = "#000000";

// draw names
ctx.fillStyle = "#000000";
ctx.textAlign = "left";
for(var j=0;j<nv;j++)
	{	
	ctx.save();
	ctx.translate(x1+j*d+d,y1+j*d);
	ctx.rotate(-Math.PI/4);
	ctx.fillText(values[graph.ivalues[j]],5,5);
	ctx.restore();
	}	

if(option==0)
	{
	ctx.textAlign = "center";
	ctx.fillText("Correlations",xc,graph.y+graph.hbar+20);


	for(var j=0;j<nv;j++)
		for(var k=j+1;k<nv;k++)
			{
			var c = cov[j][k]/Math.sqrt(cov[j][j]*cov[k][k]);
			if(c<0)
				{
				ctx.fillStyle = "#FF0000";
				var size = -d*c;
				ctx.fillRect(x1+j*d+d/2-size/2,y1+k*d+d/2-size/2,size,size)
				}
			else
				{
				ctx.fillStyle = "#008800";
				var size = d*c;
				ctx.fillRect(x1+j*d+d/2-size/2,y1+k*d+d/2-size/2,size,size)
				}		
			}

	}
else
	{
	ctx.textAlign = "center";
	ctx.fillText("Covariances",xc,graph.y+graph.hbar+20);


	var max = get_max();

	for(var j=0;j<nv;j++)
		for(var k=j;k<nv;k++)
			{
			var c = cov[j][k];
			if(c<0)
				{
				ctx.fillStyle = "#FF0000";
				var size = -d*c/max;
				ctx.fillRect(x1+j*d+d/2-size/2,y1+k*d+d/2-size/2,size,size)
				}
			else
				{
				ctx.fillStyle = "#008800";
				var size = d*c/max;
				ctx.fillRect(x1+j*d+d/2-size/2,y1+k*d+d/2-size/2,size,size)
				}		
			}
	}


	function get_max()
	{
	var max = 0;
	var nv = graph._z.cov.length;
	for(var j=0;j<nv;j++)
		for(var k=0;k<nv;k++)
			{
			var v = Math.abs(graph._z.cov[j][k]);
			if(v>max) max = v;
			}
	return max;
	}

}

//*********************************************************************

function buildCorrTable(graph)
{
if(graph.ivalues.length<2) return;

setTableName("Covariances - Correlations");

var row = 1;
table(row,1,"Covariances");

for(var i=0;i<graph.ivalues.length;i++)
	table(row,2+i,values[graph.ivalues[i]]);

for(var j=0;j<graph.ivalues.length;j++)
	{
	row++;
	table(row,1,values[graph.ivalues[j]]);
	for(var i=0;i<graph.ivalues.length;i++)
		table(row,2+i,Math.round(graph._z.cov[i][j]*10000)/10000);
	}

row++;
row++;
table(row,1,"Correlations");

for(var i=0;i<graph.ivalues.length;i++)
	table(row,2+i,values[graph.ivalues[i]]);

for(var j=0;j<graph.ivalues.length;j++)
	{
	row++;
	table(row,1,values[graph.ivalues[j]]);
	for(var i=0;i<graph.ivalues.length;i++)
		{
		var c = graph._z.cov[i][j]/Math.sqrt(graph._z.cov[i][i]*graph._z.cov[j][j]);
		table(row,2+i,Math.round(c*10000)/10000);
		}
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
graph.placeholder.bottomlabel = "COLOR";
graph.placeholder.rightlabel = "LABEL";

graph.options = ["Main plane","Correlation circle","Inertias"];

if(graph.ivalues.length<2) return;

computeCorrelationMatrix(graph)

graph._z.results = {};
graph._z.results.horiz = {x:0,y:0};
graph._z.results.vert = {x:0,y:0};



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


graph._z.lambda = d;
graph._z.I = I;

var nr = lrecords.length;
var rows = matrix(nr,n);

var xmin = Number.MAX_VALUE;
var xmax = -Number.MAX_VALUE;
var ymin = Number.MAX_VALUE;
var ymax = -Number.MAX_VALUE;
var zmin = Number.MAX_VALUE;
var zmax = -Number.MAX_VALUE;

// principal components

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	count++;

	for(var j=0;j<n;j++)
		{
		var y = (vrecords[i][graph.ivalues[j]]-graph._z.avg[j])/graph._z.std[j]
		for(var k=0;k<n;k++)
			rows[i][k] += y*I[j][k];
		}

	if(graph.iunit>1)
		{
		var z = vrecords[i][graph.iunit];
		if(z<zmin) zmin = z;
		if(z>zmax) zmax = z;
		}
	}


// projection of variables
var sumxy = matrix(n,n);
var count = 0;
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	count ++;

	for(var j=0;j<n;j++)
		{
		var x = (vrecords[i][graph.ivalues[j]]-graph._z.avg[j])/graph._z.std[j]
		for(var k=0;k<n;k++)
			{
			var y = rows[i][k]/Math.sqrt(graph._z.lambda[k]);
			sumxy[j][k] += x*y;
			}
		}
	}


for(var j=0;j<n;j++)
	for(var k=0;k<n;k++)
		sumxy[j][k] = sumxy[j][k]/count;


for(var i=0;i<rows.length;i++)
	{
	if(rows[i][0]<xmin) xmin = rows[i][0];
	if(rows[i][0]>xmax) xmax = rows[i][0];
	if(rows[i][1]<ymin) ymin = rows[i][1];
	if(rows[i][1]>ymax) ymax = rows[i][1];
	}

var dx = xmax-xmin;
var dy = ymax-ymin;
		
graph._z.xmin = xmin-dx/25;
graph._z.xmax = xmax+dx/25;
graph._z.ymin = ymin-dy/25;
graph._z.ymax = ymax+dy/25;

graph._z.I = I;
graph._z.rows = rows

graph._z.proj = sumxy;

graph._z.zmin = zmin;
graph._z.zmax = zmax;

computeGraphData1(graph);

initCorners(graph);

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
		var display = graph.ilabel3;
		var xsign = graph.xsign;
		var ysign = graph.ysign;


		var x1 = graph.x;
		var x2 = graph.x + graph.w -110;
		var xc = (x1+x2)/2

		var y1 = graph.y + graph.hbar + 5
		var y2 = graph.y + graph.h -30;
		var yc = (y1+y2)/2

		var xmin = graph._z.xmin;
		var xmax = graph._z.xmax;
		var ymin = graph._z.ymin;
		var ymax = graph._z.ymax;
		var zmin = graph._z.zmin;
		var zmax = graph._z.zmax;

		var rows = graph._z.rows;

		var scale = (x2-x1)/(xmax-xmin)
		if((ymax-ymin)*scale>y2-y1)
			scale = (y2-y1)/(ymax-ymin)

		x1 = xc - (xmax-xmin)*scale/2
		x2 = xc + (xmax-xmin)*scale/2
		y1 = yc - (ymax-ymin)*scale/2
		y2 = yc + (ymax-ymin)*scale/2

		setGraphCorner(graph,0,x1,y1);
		setGraphCorner(graph,1,x2,y1);
		setGraphCorner(graph,2,x1,y2);
		setGraphCorner(graph,3,x2,y2);

		ctx.strokeStyle = "#000000"
		ctx.fillStyle = "#000000"

		ctx.strokeRect(x1,y1,x2-x1,y2-y1);

		// origin	
		if(xsign>0)
			var xo = x1+scale*(0-xmin);
		else
			var xo = x2-scale*(0-xmin);

		if(ysign>0)
			var yo = y2-scale*(0-ymin)
		else
			var yo = y1+scale*(0-ymin);

		// draw axes
		ctx.fillStyle = vdotted;
		ctx.fillRect(xo,y1,1,y2-y1)
		ctx.fillStyle = hdotted;
		ctx.fillRect(x1,yo,x2-x1,1)

		// draw arrows
		ctx.fillStyle = BLUE
		ctx.strokeStyle = "#000000"

		drawTopArrow(ctx,xo,y1+5)
		drawRightArrow(ctx,x2-5,yo)

		graph._z.results.vert.x = xo;
		graph._z.results.vert.y = y1;
		graph._z.results.horiz.x = x2;
		graph._z.results.horiz.y = yo;

		// draw points

		ctx.fillStyle = "#000000"
		ctx.textAlign = "center"
		ctx.font = "9px helvetica";

		for(var i=0;i<lrecords.length;i++)
			{		
			if(!recordMatch(i,graph)) continue;

			var x = xo+xsign*scale*(rows[i][0])
			var y = yo-ysign*scale*(rows[i][1])

			if(graph.ilabel1<0)
				ctx.fillStyle = "#000000";
			else
				ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]];

			if(display>=0)
				ctx.fillText(lrecords[i][display],x,y+3)
			else if(graph.iunit<1)
				ctx.fillRect(x-2,y-2,5,5)
			else
				{
				ctx.globalAlpha = 0.5;
				var z = Math.round((vrecords[i][graph.iunit]-zmin)/(zmax-zmin)*20);
				ctx.beginPath();
				ctx.arc(x,y,z,0,Math.PI*2,false);
				ctx.fill();
				ctx.globalAlpha = 1;
				}
			}

		if(overlabel1>=0)
			{
			ctx.fillStyle = "#FF0000"
			ctx.strokeStyle = "#FF0000"
			ctx.lineWidth = 1
			for(var i=0;i<lrecords.length;i++)
				{
				if(typeof(rows[i][0])=="undefined") continue;
				if(!recordHilite(lrecords[i])) continue

				var x = x1+xsign*scale*(rows[i][0]-xmin)
				var y = y2-ysign*scale*(rows[i][1]-ymin)

				if(display>=0)
					{
					var l = ctx.measureText(lrecords[i][display]).width;
					ctx.fillStyle = "#000000";
					ctx.fillRect(x-l/2-5,y-6,l+10,12);		
					ctx.fillStyle = "#FFFFFF";
					ctx.fillText(lrecords[i][display],x,y+3);
					}
				else if(graph.iunit<1)
					{
					ctx.fillStyle = "#000000";
					ctx.fillRect(x-3,y-3,7,7)
					}
		
				}
			}

		if((action==SWAP_CORNERS)&&(graphs[graphindex]==graph))
			{
			ctx.fillStyle = GRAY;
			if(graph.toCorner==0)
				ctx.fillRect(x1,y1,xo-x1,yo-y1);
			else if(graph.toCorner==1)
				ctx.fillRect(xo,y1,x2-xo,yo-y1);
			else if(graph.toCorner==2)
				ctx.fillRect(x1,yo,xo-x1,y2-yo);
			else if(graph.toCorner==3)
				ctx.fillRect(xo,yo,x2-xo,y2-yo);
			}
		else if(graph._z.overcorner==0)
			drawCorner(ctx,graph,x1,y1,0);
		else if(graph._z.overcorner==1)
			drawCorner(ctx,graph,x2,y1,1);
		else if(graph._z.overcorner==2)
			drawCorner(ctx,graph,x1,y2,2);
		else if(graph._z.overcorner==3)
			drawCorner(ctx,graph,x2,y2,3);
		}

	if(option==1)
		{
		// CORRELATION CIRCLE

		var x1 = graph.x+5
		var x2 = graph.x + graph.w -115
		var xc = (x1+x2)/2
		var dx = x2-x1

		var y1 = graph.y + graph.hbar + 5
		var y2 = graph.y + graph.h -5
		var yc = (y1+y2)/2
		var dy = y2-y1

		var proj = graph._z.proj;

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
			var x = xc + scale*proj[i][0];
			var y = yc - scale*proj[i][1];
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
			var x = xc + scale*proj[i][0];
			var y = yc - scale*proj[i][1];
			ctx.fillText(values[graph.ivalues[i]],x,y+3)
			}

		}

	if(option==2)
		{
		// VARIANCES

		var x1 = graph.x+40
		var x2 = graph.x + graph.w -110;
		var xc = (x1+x2)/2

		var y1 = graph.y + graph.hbar + 5
		var y2 = graph.y + graph.h-30;
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

function moveAcpGraph(pt,graph)
{
if(!graph._z) return;

var option = getGraphOption(graph);

if(option==0)
	{
	if(!graph._z.corners) return;

	graph._z.overcorner = -1;

	for(var i=0;i<4;i++)
		{
		var c = graph._z.corners[i];
		if(inRect(pt,c.x-20,c.y-20,40,40))
			{
			graph._z.overcorner = i;
			return;
			}
		}
	}

if(option==2)
	{
	if(!graph._z.lambda) return;

	var x1 = graph.x+40
	var x2 = graph.x + graph.w -110;
	var xc = (x1+x2)/2

	var y1 = graph.y + graph.hbar + 5
	var y2 = graph.y + graph.h -5
	var yc = (y1+y2)/2

	var n = graph._z.lambda.length;
	var dx = (x2-x1)/n;

	var sum = 0
	for(var i=0;i<n;i++)
		sum += graph._z.lambda[i];

	for(var i=0;i<n;i++)
		{
		var x = x1 + i*dx;
		if(inRect(pt,x,y1,dx,y2-y1))
			{
			var val = graph._z.lambda[i];
			var pct = graph._z.lambda[i]*100/sum;
			message = (Math.round(val*PREC)/PREC)+"  ( "+
				(Math.round(pct*PREC)/PREC)+"% )";
			return true;
			}
		}
	}

}

//*********************************************************************

function downAcpGraph(pt,graph)
{
var option = getGraphOption(graph);
if(option!=0) return -1;

if(!graph._z) return -1;
if(!graph._z.corners) return;

for(var i=0;i<4;i++)
	{
	var c = graph._z.corners[i];
	if(inRect(pt,c.x-20,c.y-20,40,40))
		{
		graph.fromCorner = i;
		graph.toCorner = i;
		return SWAP_CORNERS;
		}
	}

var results = graph._z.results;
if(!results) return -1;

if(inRect(pt,results.horiz.x-10,results.horiz.y-10,20,20)) 
	{
	resultkey = "horiz";
	return DRAG_RESULT;
	}

if(inRect(pt,results.vert.x-10,results.vert.y-10,20,20))
	{
	resultkey = "vert";
	return DRAG_RESULT;
	}

return -1;
}

//*********************************************************************

function dragAcpGraph(pt,graph)
{
if(action!=SWAP_CORNERS) return;

var x1 = graph.x;
var x2 = graph.x + graph.w -110;
var xc = (x1+x2)/2

var y1 = graph.y + graph.hbar + 5
var y2 = graph.y + graph.h -30;
var yc = (y1+y2)/2

var xmin = graph._z.xmin;
var xmax = graph._z.xmax;
var ymin = graph._z.ymin;
var ymax = graph._z.ymax;
var zmin = graph._z.zmin;
var zmax = graph._z.zmax;

var scale = (x2-x1)/(xmax-xmin)
if((ymax-ymin)*scale>y2-y1)
	scale = (y2-y1)/(ymax-ymin)

x1 = xc - (xmax-xmin)*scale/2
x2 = xc + (xmax-xmin)*scale/2
y1 = yc - (ymax-ymin)*scale/2
y2 = yc + (ymax-ymin)*scale/2

if(inRect(pt,x1,y1,xc-x1,yc-y1))
	graph.toCorner = 0;
else if(inRect(pt,xc,y1,x2-xc,yc-y1))
	graph.toCorner = 1;
else if(inRect(pt,x1,yc,xc-x1,y2-yc))
	graph.toCorner = 2;
else if(inRect(pt,xc,yc,x2-xc,y2-yc))
	graph.toCorner = 3;

}

//*********************************************************************

function upAcpGraph(graph)
{

if(action==SWAP_CORNERS)
	{
	var x1 = graph.fromCorner%2;
	var x2 = graph.toCorner%2;
	if(x1!=x2) graph.xsign  = -graph.xsign;

	var y1 = graph.fromCorner-x1;
	var y2 = graph.toCorner-x2;
	if(y1!=y2) graph.ysign = -graph.ysign;
	}

if((action==CREATE_RESULT)||
	(action==PASTE_RESULT_LEFT)||
	(action==PASTE_RESULT_TOP)||
	(action==PASTE_RESULT_I)||	
	(action==PASTE_RESULT_J))
		createResult(graph._z.results[resultkey],fcreate);

	function fcreate()
	{
	var n = graph.ivalues.length;
	var I = graph._z.I;
	var x;
	var y;
	valueindex = resultkey=="horiz" ? 0 : 1;

	for(var i=0;i<lrecords.length;i++)
		{
		x = 0
		for(var j=0;j<n;j++)
			{
			y = (vrecords[i][graph.ivalues[j]]-graph._z.avg[j])/graph._z.std[j]
			x += y*I[j][valueindex];
			}
		vrecords[i].push(x)
		}

	if(zvalue==values.length) zvalue++;
	values.push("PCA."+(++newfield));
	}

}

//*********************************************************************

function buildAcpTable(graph)
{
if(graph.ivalues.length<2) return;

var n = graph.ivalues.length;

setTableName("Principal component analysis");

var row = 1;
for(var i=0;i<n;i++)
	table(row,2+i,"PC"+(i+1));

row++;
table(row,1,"Standard deviation");
for(var i=0;i<n;i++)
	table(row,2+i,round(Math.sqrt(graph._z.lambda[i])));
row++;
table(row,1,"Variance");
for(var i=0;i<n;i++)
	table(row,2+i,round(graph._z.lambda[i]));

var sum = 0;
for(var i=0;i<n;i++)
	sum += graph._z.lambda[i];

row++;
table(row,1,"Percentage");
for(var i=0;i<n;i++)
	table(row,2+i,round(graph._z.lambda[i]*100/sum));

var cum = 0;
row++;
table(row,1,"Cumulative pct");
for(var i=0;i<n;i++)
	{
	cum += graph._z.lambda[i]*100/sum;
	table(row,2+i,round(cum));
	}

row++;
row++;
table(row,1,"Rotation");

row++;
for(var k=0;k<n;k++)
	{
	table(row,1,values[graph.ivalues[k]]);
	for(var i=0;i<n;i++)
		table(row,2+i,round(graph._z.I[k][i]));
	row++;
	}

row++;
table(row,1,"Correlations");

row++;
for(var k=0;k<n;k++)
	{
	table(row,1,values[graph.ivalues[k]]);
	for(var i=0;i<n;i++)
		table(row,2+i,round(graph._z.proj[k][i]));
	row++;
	}

row++;
table(row,1,"Coordinates");
row++;

var num = 0;
for(var i=0;i<graph._z.rows.length;i++)
	{
	if(graph._z.rows[i][0]==void 0) continue;
	num++;
	table(row,1,""+num);
	for(var j=0;j<n;j++)
		table(row,2+j,round(graph._z.rows[i][j]));
	row++;
	}


	function round(x) { return Math.round(x*PREC)/PREC; }
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
	case CLUSTERING.KMEANS: computeKmeansData(graph); break;	
	case CLUSTERING.KMEDOIDS: computeKmedoidsData(graph); break;
	case CLUSTERING.FUZZY: computeFuzzyData(graph); break;
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

function dragClusteringGraph(ptmove,graph)
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
		graph.progress = (ng-groups.length)/ng;
		draw();
		graph.timerid = setTimeout(mergeGroups,10);
		}
	else
		{
		graph.progress = null;
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
/*
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
*/
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

function dragDendroGraph(ptmove,graph)
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
graph.placeholder.leftlabel = "COLOR";
graph.placeholder.rightlabel = "LABEL";

if(graph.ivalues.length<2) return;

var min = [];
var max = [];
for(var j=0;j<graph.ivalues.length;j++)
	{
	min.push(Number.MAX_VALUE);
	max.push(-Number.MAX_VALUE);
	}

var zmin = Number.MAX_VALUE;
var zmax = -Number.MAX_VALUE;

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

	if(graph.iunit>=1)
		{
		var z = vrecords[i][graph.iunit];
		if(z<zmin) zmin = z;
		if(z>zmax) zmax = z;
		}
	}

graph._z.min = min;
graph._z.max = max;

graph._z.zmin = zmin;
graph._z.zmax = zmax;

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
	var display = graph.ilabel3;

	var zmin = graph._z.zmin;
	var zmax = graph._z.zmax;

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

		if(display>=0)
			ctx.fillText(lrecords[i][display],x,y+3)
		else if(graph.iunit<1)
			ctx.fillRect(x-1,y-2,4,4)	
		else
			{
			ctx.globalAlpha = 0.5;
			ctx.beginPath();
			var z = vrecords[i][graph.iunit];
			z = Math.round((z-zmin)/(zmax-zmin)*20);
			ctx.arc(x,y,z,0,Math.PI*2,false);
			ctx.fill();
			ctx.globalAlpha = 1;
			}
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
graph.placeholder.leftlabel = "COLOR";
graph.placeholder.rightlabel = "LABEL";

if(graph.ilabel1>=0)
	computeGraphData1(graph);

var zmin = Number.MAX_VALUE;
var zmax = -Number.MAX_VALUE;

if(graph.iunit>0)
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var z = vrecords[i][graph.iunit];
	if(z<zmin) zmin = z;	
	if(z>zmax) zmax = z;
	}

graph._z.zmin = zmin;
graph._z.zmax = zmax;
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

	var display = graph.ilabel3;
	var zmin = graph._z.zmin;
	var zmax = graph._z.zmax;

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

		if(display>=0)
			ctx.fillText(lrecords[i][display],x,y+3)
		else if(graph.iunit<1)
			ctx.fillRect(x-2,y-2,4,4)
		else		
			{
			ctx.globalAlpha = 0.5;
			var z = vrecords[i][graph.iunit];
			z = Math.round((z-zmin)/(zmax-zmin)*20);
			ctx.beginPath();		
			ctx.arc(x,y,z,0,Math.PI*2,false);
			ctx.fill();
			ctx.globalAlpha = 1;
			}
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

			if(display>=0)
				{
				ctx.fillStyle = ctx.strokeStyle = "#000000";
				var l = ctx.measureText(lrecords[i][display]).width;
				ctx.fillRect(x-l/2-5,y-6,l+10,12);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(lrecords[i][display],x,y+3)
				}
			else if(graph.iunit<1)
				{
				ctx.fillStyle = ctx.strokeStyle = "#000000";
				ctx.fillRect(x-3,y-3,7,7)
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

function dragG3dGraph(ptmove,graph)
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

graph.placeholder.bottomlabel = "CLASSES";
graph.placeholder.rightlabel = "LABEL";

graph.options = ["Main plane","Correlation circle","Inertias"];

if(graph.ilabel1<0) return;
if(graph.ivalues.length<2) return

graph._z.results = {};
graph._z.results.horiz = {x:0,y:0};
graph._z.results.vert = {x:0,y:0};

computeGraphData1(graph)

var nv = graph.ivalues.length;

// global center
var weight = 0;
var center = vector(nv);

// centers of groups
var gweight = {};
var gcenter = {};
var ng = compute_centers();
if(ng<2)
	{
	graph.error = "Less than two categories";
	return;
	}

// global variance matrix
var V = computeGlobalVariance(graph);

// compute inverse of variance
var VINV = powerM(V,-1);

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


// coefficients
graph._z.E = E;

// eigenvalues
graph._z.lambda = wr;

graph._z.avg = center;

//  factors
var rows = matrix(lrecords.length,nv);
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	for(var j=0;j<nv;j++)
		{
		var y = vrecords[i][graph.ivalues[j]]-center[j];
		for(var k=0;k<nv;k++)
			rows[i][k] += y*E[j][k];
		}
	}


var u = colM(E,0);
var v = colM(E,1);


// projection of centers on the factors
var pcenters = {};
for(var key in gcenter)
	{	
	pcenters[key] = vector(nv);
	for(var j=0;j<nv;j++)
		{
		var y = gcenter[key][j]-center[j];
		for(var k=0;k<nv;k++)
			pcenters[key][k] += y*E[j][k];
		}
	}

graph._z.pcenters = pcenters;

// correlations of variables with first two factors
var corr = matrix(nv,nv);
var temp = new Array(vrecords.length);

for(var j=0;j<graph.ivalues.length;j++)
	{
	for(var i=0;i<vrecords.length;i++)
		temp[i] = vrecords[i][graph.ivalues[j]];	
	
	for(var k=0;k<nv;k++)
		corr[j][k] = correlation(temp,colM(rows,k));	
	}


var NG = {};
var VG ={};
computeIntraGroupVariances(graph,0,VG,NG,graph.ilabel1,graph.ivalues);

var ellipse = {};
for(var key in VG)
	ellipse[key] = compute_ellipse(VG[key],u,v);

// compute bounds
var xmin = Number.MAX_VALUE;
var xmax = -Number.MAX_VALUE;
var ymin = Number.MAX_VALUE;
var ymax = -Number.MAX_VALUE;
for(var i=0;i<rows.length;i++)
	{
	if(rows[i][0]<xmin) xmin = rows[i][0];
	if(rows[i][0]>xmax) xmax = rows[i][0];
	if(rows[i][1]<ymin) ymin = rows[i][1];
	if(rows[i][1]>ymax) ymax = rows[i][1];
	}	

var dx = xmax-xmin;
var dy = ymax-ymin;

var zmin = Number.MAX_VALUE;
var zmax = -Number.MAX_VALUE;
if(graph.iunit>0)
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var z = vrecords[i][graph.iunit];
	if(z<zmin) zmin = z;
	if(z>zmax) zmax = z;
	}

graph._z.nv = nv;
graph._z.ng = ng;
graph._z.rows = rows;
graph._z.xmin = xmin-dx/25;
graph._z.xmax = xmax+dx/25;
graph._z.ymin = ymin-dy/25;
graph._z.ymax = ymax+dy/25;
graph._z.lambda = wr;
graph._z.corr = corr;
graph._z.ellipse = ellipse;
graph._z.zmin = zmin;
graph._z.zmax = zmax;


	// ------------------------------------------------------------------------

	function compute_centers()
	{
	var ng = 0;
	for(var i=0;i<lrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var key = lrecords[i][graph.ilabel1];
		
		if(!(key in gweight))
			{
			ng++;
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
		
	return ng;
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

function computeGlobalVariance(graph)
{
var nv = graph.ivalues.length;
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

//*********************************************************************

function computeIntraGroupVariances(graph,bias,GV,count,ilabel,ivalues)
{
GV = GV || {};
count = count || {};
var sum = {};

var nv = ivalues.length;

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	var key = lrecords[i][ilabel];

	if(!(key in count))
		{
		count[key] = 0;
		sum[key] = vector(nv,nv);
		GV[key] = matrix(nv,nv);
		}

	count[key]++;

	for(var j=0;j<nv;j++)
		{
		var xj = vrecords[i][ivalues[j]] 
		sum[key][j] += xj

		for(var k=0;k<nv;k++)
			{
			var xk = vrecords[i][ivalues[k]]
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
			GV[key][j][k] = (GV[key][j][k]-count[key]*sum[key][j]*sum[key][k])/(count[key]-bias);
	}

return GV;
}

//*********************************************************************

function drawDiscriGraph(ctx,graph)
{

if(graph.ilabel1<0) return;
if(graph.ivalues.length<2) return;

var option = graph.option%3;

if(option==0)
	{
	var display = graph.ilabel3;

	var xleft = graph.x + 10;
	var xright = graph.x + graph.w -110;
	var ytop = graph.y + graph.hbar +10;
	var ybottom = graph.y + graph.h -30;

	var xmin = graph._z.xmin;
	var xmax = graph._z.xmax;
	var ymin = graph._z.ymin;
	var ymax = graph._z.ymax;

	var zmin = graph._z.zmin;
	var zmax = graph._z.zmax;

	var scale = (xright-xleft)/(xmax-xmin)
	if((ymax-ymin)*scale>ybottom-ytop)
		scale = (ybottom-ytop)/(ymax-ymin)

	var x1 = (xleft+xright)/2-(xmax-xmin)*scale/2
	var x2 = x1 + (xmax-xmin)*scale
	var y2 = (ytop+ybottom)/2+(ymax-ymin)*scale/2
	var y1 = y2 - (ymax-ymin)*scale

	var rows = graph._z.rows;

	ctx.fillStyle = "#000000"
	ctx.textAlign = "center"	
	ctx.font = "9px Helvetica"

	var x;
	var y;

	// draw frame
	ctx.strokeStyle = "#000000";
	ctx.strokeRect(xleft,ytop,xright-xleft,ybottom-ytop);

	// draw axes
	ctx.fillStyle = vdotted;
	x = x1 + scale*(0-xmin)
	ctx.fillRect(x,ytop,1,ybottom-ytop);

	ctx.fillStyle = hdotted;
	y = y2 - scale*(0-ymin)
	ctx.fillRect(xleft,y,xright-xleft,1);

	// draw arrows
	ctx.fillStyle = BLUE
	ctx.strokeStyle = "#000000"

	drawTopArrow(ctx,x,ytop+4)
	drawRightArrow(ctx,xright-4,y)

	graph._z.results.vert.x = x;
	graph._z.results.vert.y = ytop;
	graph._z.results.horiz.x = xright;
	graph._z.results.horiz.y = y;

	for(var key in graph._z.pcenters)
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

		x = Math.round(x1 + scale*(rows[i][0]-xmin));
		y = Math.round(y2 - scale*(rows[i][1]-ymin));

		if(display>=0)
			ctx.fillText(lrecords[i][display],x,y+3)	
		else if(graph.iunit<1)
			ctx.fillRect(x-2,y-2,5,5)
		else
			{
			ctx.globalAlpha = 0.5;
			var z = vrecords[i][graph.iunit];
			z = Math.round((z-zmin)/(zmax-zmin)*20);
			ctx.beginPath();
			ctx.arc(x,y,z,0,Math.PI*2,false);		
			ctx.fill();
			ctx.globalAlpha = 1;
			}
		}

	if(overlabel1>=0)
		for(var i=0;i<lrecords.length;i++)
			{
			if(!recordMatch(i,graph)) continue	
			if(!recordHilite(lrecords[i])) continue
		
			var key = lrecords[i][graph.ilabel1]

			x = Math.round(x1 + scale*(rows[i][0]-xmin));
			y = Math.round(y2 - scale*(rows[i][1]-ymin));

			if(display>=0)
				{
				ctx.fillStyle = "#000000";
				var l = ctx.measureText(lrecords[i][display]).width;
				ctx.fillRect(x-l/2-5,y-6,l+10,13);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(lrecords[i][display],x,y+3)
				}
			else if(graph.iunit<1)
				{
				ctx.fillStyle = "#000000";
				ctx.fillRect(x-3,y-3,7,7)
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

	var corr = graph._z.corr;

	ctx.beginPath()
	ctx.moveTo(xc+scale,yc)
	ctx.arc(xc,yc,scale,0,Math.PI*2,true)
	ctx.stroke()

	// draw arrows
	ctx.strokeStyle = "#CCCCCC";
	ctx.beginPath();
	for(var i=0;i<graph.ivalues.length;i++)
		{
		var x = xc + scale*corr[i][0];
		var y = yc - scale*corr[i][1];
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
		var x = xc + scale*corr[i][0];
		var y = yc - scale*corr[i][1];
		ctx.fillText(values[graph.ivalues[i]],x,y+3)
		}
	}

if(option==2)
	{
	var x1 = graph.x+40
	var x2 = graph.x + graph.w -115
	var xc = (x1+x2)/2

	var y1 = graph.y + graph.hbar + 5
	var y2 = graph.y + graph.h -30;
	var yc = (y1+y2)/2

	var nv = graph._z.nv;
	var ng = graph._z.ng;
	var n = Math.min(nv,ng-1);

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

	function draw_ellipse(key,x1,y,ratio)
	{	
	ctx.strokeStyle = graph._colors1[key];
	var xe = x1 + scale*(graph._z.pcenters[key][0]-xmin)	
	var ye = y2 - scale*(graph._z.pcenters[key][1]-ymin);
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

	ctx.fillStyle = ctx.strokeStyle;
	ctx.fillRect(xe-5,ye-5,11,11);
	}

}

//*********************************************************************

function downDiscriGraph(pt,graph)
{
if(graph.ilabel1<0) return -1;
if(graph.ivalues.length<2) return -1;

var option = getGraphOption(graph);
if(option!=0) return -1;

var results = graph._z.results;

if(inRect(pt,results.horiz.x-10,results.horiz.y-10,20,20)) 
	{
	resultkey = "horiz";
	return DRAG_RESULT;
	}

if(inRect(pt,results.vert.x-10,results.vert.y-10,20,20))
	{
	resultkey = "vert";
	return DRAG_RESULT;
	}

return -1;

}

//*********************************************************************

function moveDiscriGraph(ptmove,graph)
{
var option = getGraphOption(graph);

if(option==0)
	{
	var xleft = graph.x + 5
	var xright = graph.x + graph.w -115
	var ytop = graph.y + graph.hbar + 5
	var ybottom = graph.y + graph.h -5

	var xmin = graph._z.xmin;
	var xmax = graph._z.xmax;
	var ymin = graph._z.ymin;
	var ymax = graph._z.ymax;

	var scale = (xright-xleft)/(xmax-xmin)
	if((ymax-ymin)*scale>ybottom-ytop)
		scale = (ybottom-ytop)/(ymax-ymin)

	var x1 = (xleft+xright)/2-(xmax-xmin)*scale/2
	var x2 = xleft + (xmax-xmin)*scale
	var y2 = (ytop+ybottom)/2+(ymax-ymin)*scale/2
	var y1 = ybottom - (ymax-ymin)*scale

	var dmin = 50*50;
	var kmin = "";

	for(var key in graph._z.xcenter)
		{
		var xe = x1 + scale*(graph._z.xcenter[key]-xmin)	
		var ye = y2 - scale*(graph._z.ycenter[key]-ymin);	
		var d = (xe-ptmove.x)*(xe-ptmove.x)+(ye-ptmove.y)*(ye-ptmove.y);
		if(d<dmin)
			{
			dmin = d;
			kmin = key;
			}
		}

	if(kmin!="")	
		{
		message = kmin;
		return true;
		}
	else
		return false;
	}

if(option==2)
	{
	var x1 = graph.x+40
	var x2 = graph.x + graph.w -115
	var xc = (x1+x2)/2

	var y1 = graph.y + graph.hbar + 5
	var y2 = graph.y + graph.h -30;
	var yc = (y1+y2)/2

	var nv = graph._z.nv;
	var ng = graph._z.ng;
	var n = Math.min(nv,ng-1);

	var dx = (x2-x1)/n;

	var sum = 0
	for(var i=0;i<n;i++)
		sum += graph._z.lambda[i];

	for(var i=0;i<n;i++)
		{
		var x = x1 + i*dx;
		if(inRect(ptmove,x,y1,dx,y2-y1))
			{
			var val = graph._z.lambda[i];
			var pct = graph._z.lambda[i]*100/sum;
			message = (Math.round(val*PREC)/PREC)+"  ( "+
				(Math.round(pct*PREC)/PREC)+"% )";
			return true;
			}
		}
	}

}

//*********************************************************************

function upDiscriGraph(graph)
{
if((action==CREATE_RESULT)||
	(action==PASTE_RESULT_LEFT)||
	(action==PASTE_RESULT_TOP)||	
	(action==PASTE_RESULT_I)||
	(action==PASTE_RESULT_J))
		createResult(graph._z.results[resultkey],fcreate);

	function fcreate()
	{
	valueindex = resultkey=="horiz" ? 0 : 1;

	var n= graph.ivalues.length;
	var x;
	var y;

	for(var i=0;i<lrecords.length;i++)
		{
		x = 0
		for(var j=0;j<n;j++)
			{
			y = vrecords[i][graph.ivalues[j]]-graph._z.avg[j]
			x += y*graph._z.E[j][valueindex];
			}
		vrecords[i].push(x)
		}

	if(zvalue==values.length) zvalue++;
	values.push("DISCRI."+(++newfield));
	}
}

//*********************************************************************

function buildDiscriTable(graph)
{
if(graph.ivalues.length<2) return;

var nv = graph._z.nv;
var ng = graph._z.ng;

var n = Math.min(nv,ng-1);

setTableName("Discriminant analysis");

var row = 1;
for(var i=0;i<n;i++)
	table(row,2+i,"PC"+(i+1));

row++;
table(row,1,"Standard deviation");
for(var i=0;i<n;i++)
	table(row,2+i,round(Math.sqrt(graph._z.lambda[i])));
row++;
table(row,1,"Variance");
for(var i=0;i<n;i++)
	table(row,2+i,round(graph._z.lambda[i]));

var sum = 0;
for(var i=0;i<n;i++)
	sum += graph._z.lambda[i];

row++;
table(row,1,"Percentage");
for(var i=0;i<n;i++)
	table(row,2+i,round(graph._z.lambda[i]*100/sum));

var cum = 0;
row++;
table(row,1,"Cumulative pct");
for(var i=0;i<n;i++)
	{
	cum += graph._z.lambda[i]*100/sum;
	table(row,2+i,round(cum));
	}

row++;
row++;
table(row,1,"Coefficients");

row++;
for(var k=0;k<nv;k++)
	{
	table(row,1,values[graph.ivalues[k]]);
	for(var i=0;i<n;i++)
		table(row,2+i,round(graph._z.E[k][i]));
	row++;
	}

row++;
table(row,1,"Correlations");

row++;
for(var k=0;k<nv;k++)
	{
	table(row,1,values[graph.ivalues[k]]);
	for(var i=0;i<n;i++)
		table(row,2+i,round(graph._z.corr[k][i]));
	row++;
	}

row++;
table(row,1,"Coordinates");
row++;

var num = 0;
for(var i=0;i<graph._z.rows.length;i++)
	{
	if(graph._z.rows[i][0]==void 0) continue;
	num++;
	table(row,1,""+num);
	for(var j=0;j<n;j++)
		table(row,2+j,round(graph._z.rows[i][j]));
	table(row,2+n,lrecords[i][graph.ilabel1]);
	row++;
	}


	function round(x) { return Math.round(x*PREC)/PREC; }
}

//*********************************************************************
//
//                TEST
//
//*********************************************************************


function computeTestData(graph)
{

if(graph.w<460) graph.w = 460;

switch(graph.test)
	{
	case TEST.ANOVA: computeAnovaData(graph); break;
	case TEST.BARTLETT : computeBartlettData(graph); break;
	case TEST.LEVENE: computeLeveneData(graph); break;
	case TEST.BROWN: computeLeveneData(graph); break;
	case TEST.STUDENT: computeStudentData(graph); break;
	case TEST.WELCH: computeWelchData(graph); break;
	case TEST.BOXM: computeBoxmData(graph); break;
	case TEST.HOTELLING: computeHotellingData(graph); break;
	case TEST.F: computeTData(graph); break;
	case TEST.LAWLEY: computeManovaData(graph); break;
	case TEST.PILLAI: computeManovaData(graph); break;
	case TEST.WILK: computeManovaData(graph); break;	
	case TEST.TWO: computeTwoData(graph); break;
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

if((graph.jvalues.length>0)&&(graph.ilabels.length>0))
	switch(graph.test)
		{
		case TEST.ANOVA: drawAnovaGraph(ctx,graph); break;
		case TEST.BARTLETT: drawBartlettGraph(ctx,graph); break;
		case TEST.LEVENE: drawLeveneGraph(ctx,graph); break;
		case TEST.BROWN: drawLeveneGraph(ctx,graph); break;
		case TEST.BOXM: drawBoxmGraph(ctx,graph); break;
		case TEST.WELCH: drawTGraph(ctx,graph,false); break;
		case TEST.STUDENT: drawTGraph(ctx,graph,true); break;
		case TEST.HOTELLING:  drawHotellingGraph(ctx,graph); break;
		case TEST.WILK: drawManovaGraph(ctx,graph); break;
		case TEST.PILLAI: drawManovaGraph(ctx,graph); break;
		case TEST.LAWLEY: drawManovaGraph(ctx,graph); break;
		case TEST.TWO: drawTwoGraph(ctx,graph); break;
		}

}

//*********************************************************************

function computeStudentData(graph)
{
if(graph.jvalues.length>1) graph.jvalues.splice(1,graph.jvalues.length-1);
if(graph.jvalues.length<1) return;
if(graph.ilabels.length<1) return;

var nr = 0;
var ng = 0;
var counts = {};
var means = {};
var variances = {};


for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	nr++;
	
	var key = lrecords[i][graph.ilabels[0]];
	if(!(key in means))
		{
		counts[key] = 0;
		means[key] = 0;
		variances[key] = 0;
		ng++;
		}

	counts[key]++;
	var x = vrecords[i][graph.jvalues[0]];
	means[key] += x;
	variances[key] += x*x;
	}

graph._z.ng = ng;
if(ng!=2) return;

var keys = [];

for(var key in counts)
	{
	keys.push(key);
	means[key] =means[key]/counts[key];
	variances[key] = (variances[key]-counts[key]*means[key]*means[key])/(counts[key]-1);
	}


var den = 0;
den += (counts[keys[0]]-1)*variances[keys[0]];
den += (counts[keys[1]]-1)*variances[keys[1]];
den = Math.sqrt(den/(counts[keys[0]]+counts[keys[1]]-2));
den = den*Math.sqrt(1/counts[keys[0]]+1/counts[keys[1]]);

var num = means[keys[0]]-means[keys[1]];

var t = num/den;
var dof = counts[keys[0]]+counts[keys[1]]-2;

var pvalue = pt(t,dof);
var level = 0.025;
var cv = qt(1-level,dof);

graph._z.t = t;
graph._z.dof = dof;
graph._z.level = level;
graph._z.pvalue = pvalue;
graph._z.cv = cv;
graph._z.no = nr;

}

//*********************************************************************

function computeWelchData(graph)
{
if(graph.jvalues.length>1) graph.jvalues.splice(1,graph.jvalues.length-1);
if(graph.jvalues.length<1) return;
if(graph.ilabels.length<1) return;


var nr = 0;
var ng = 0;
var counts = {};
var means = {};
var variances = {};

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	nr++;
	
	var key = lrecords[i][graph.ilabels[0]];
	if(!(key in means))
		{
		counts[key] = 0;
		means[key] = 0;
		variances[key] = 0;
		ng++;
		}

	counts[key]++;
	var x = vrecords[i][graph.jvalues[0]];
	means[key] += x;
	variances[key] += x*x;
	}

graph._z.ng = ng;
if(ng!=2) return;

var keys = [];

for(var key in counts)
	{
	keys.push(key);

	means[key] =means[key]/counts[key];

	variances[key] = (variances[key]-counts[key]*means[key]*means[key])/(counts[key]-1);

	}

var r0 = variances[keys[0]]/counts[keys[0]];
var r1 = variances[keys[1]]/counts[keys[1]];

var t = (means[keys[0]]-means[keys[1]])/Math.sqrt(r0+r1);

var dof = (r0+r1)*(r0+r1)/(r0*r0/(counts[keys[0]]-1)+r1*r1/(counts[keys[1]]-1));

var pvalue = pt(t,dof);

var level = 0.025;
var cv = qt(1-level,dof);

graph._z.level = level;
graph._z.t = t;
graph._z.dof = dof;
graph._z.pvalue = pvalue;
graph._z.cv = cv;
graph._z.ng = ng;
graph._z.no = nr;
}

//*********************************************************************

function computeBartlettData(graph)
{
graph.limit.jvalues = 1;
graph.limit.ilabels = 1;
if(graph.jvalues.length>1) graph.jvalues.splice(1,graph.jvalues.length-1);
if(graph.jvalues.length<1) return;
if(graph.ilabels.length<1) return;

var stats = {};
var ng = 0;
var nr = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue

	nr++;
	
	var g = lrecords[i][graph.ilabels[0]];
	var x = vrecords[i][graph.jvalues[0]];

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

var dof = ng-1;
var level = 0.05;
var cv = qchisq(1-level,dof);

var max = 2*Math.max(t,cv);

var pvalue = 1-pchisq(t,dof);


graph._z.stats = stats;
graph._z.t = t;
graph._z.dof = dof;
graph._z.ng = ng;
graph._z.cv = qchisq(1-0.05,ng-1);
graph._z.pvalue = pvalue;
graph._z.max = max;
graph._z.level = level;
}

//*********************************************************************

function computeLeveneData(graph)
{
graph.limit.jvalues = 1;
graph.limit.ilabels = 1
if(graph.jvalues.length>1) graph.jvalues.splice(1,graph.jvalues.length-1);
if(graph.jvalues.length<1) return;
if(graph.ilabels.length<1) return;

var stats = {};
var ng = 0;
var nr = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	nr++;

	var g = lrecords[i][graph.ilabels[0]];
	var x = vrecords[i][graph.jvalues[0]];

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
	
	var g = lrecords[i][graph.ilabels[0]];
	var z = Math.abs(vrecords[i][graph.jvalues[0]]-stats[g].median);
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

	var g = lrecords[i][graph.ilabels[0]];
	var z = Math.abs(vrecords[i][graph.jvalues[0]]-stats[g].median);

	sum2 += (z-stats[g].zavg)*(z-stats[g].zavg);
	}

var w = (nr-ng)*sum1/(ng-1)/sum2;

graph._z.ng = ng;
graph._z.nr = nr;
graph._z.w = w;

}

//*********************************************************************

function computeAnovaData(graph)
{
graph.limit.jvalues = 1;
graph.limit.ilabels = 1;
if(graph.ilabels.length>1) graph.ilabels.splice(1,graph.ilabels.length-1);
if(graph.jvalues.length>1) graph.jvalues.splice(1,graph.jvalues.length-1);
if(graph.ilabels.length<1) return;
if(graph.jvalues.length<1) return;

var sums = {}
var counts = {}
var sums2 = {}
var gcount = 0
var gsum = 0
var gsum2 = 0
var ng = 0;
var no = 0;

for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue

	no++;

	var key1 = lrecords[i][graph.ilabels[0]];
	if(!(key1 in sums))
		{
		ng++;
		counts[key1] = sums[key1] = sums2[key1] = 0
		}
	
	var x = vrecords[i][graph.jvalues[0]];

	counts[key1] += 1;
	sums[key1] += x;
	sums2[key1] += x*x;
	gcount += 1
	gsum += x;
	gsum2 += x*x;
	}


// inter-class and intra-class variance
var vinter = 0;
var vintra = 0;
for(var x in sums)
	{
	var dif = sums[x]/counts[x] - gsum/gcount
	vinter += counts[x]*dif*dif
	vintra += sums2[x] - sums[x]*sums[x]/counts[x]
	}

var vtotal = gsum2-gsum*gsum/gcount;

// degrees of freedom
var ninter = -1
var nintra = 0
for(var x in sums)
	{
	ninter += 1
	nintra += counts[x]-1
	}


var F = (vinter/ninter)/(vintra/nintra)	
var pvalue = 1-pf(F,ninter,nintra)	

var max = F;
if(max==0) max = 1;
var pmax = pvalue;
while(pmax>0.001)
	{
	max *= 1.1;
	pmax = 1-pf(max,ninter,nintra);
	}

var level = 0.05;
var cv = qf(1-level,ninter,nintra);

graph._z.gcount = gcount;
graph._z.gsum = gsum;
graph._z.gsum2 = gsum2;
graph._z.counts = counts;
graph._z.sums = sums;
graph._z.sums2 = sums2;
graph._z.vtotal = vtotal;
graph._z.vinter = vinter;
graph._z.vintra = vintra;
graph._z.ninter = graph._z.dof1 = ninter;
graph._z.nintra = graph._z.dof2 = nintra;
graph._z.f = F;
graph._z.pvalue = pvalue;
graph._z.max = max;
graph._z.pmax = pmax;
graph._z.level = level;
graph._z.cv = cv;

graph._z.ng = ninter+1;
graph._z.no = nintra+ninter+1;
}

//*********************************************************************

function computeBoxmData(graph)
{
graph.limit.ilabels = 1;
if(graph.ilabels.length<1) return;
if(graph.ilabels.length>1) graph.ilabels.splice(1,graph.ilabels.length-1);
if(graph.jvalues.length<1) return;

var nv = graph.jvalues.length;

var VG = {};
var NG = {};

computeIntraGroupVariances(graph,1,VG,NG,graph.ilabels[0],graph.jvalues);

var s = 0;
var nr = 0;
var ng = 0;
for(var key in VG)	
	{	
	var det = detM(VG[key]);
	s += (NG[key]-1)*Math.log(detM(VG[key]));
	nr += NG[key];
	ng ++;
	}

for(var key in NG)
	{
	if(NG[key]==1)
		{
		graph.error = "Only one observation in group "+key;
		return;
		}
	}

if(ng<2)
	{
	graph.error = "Less than two categories";
	return;
	}


// pooled covariance
var V = matrix(nv,nv);
for(var i=0;i<nv;i++)
	for(var j=0;j<nv;j++)
		for(var key in VG)
			V[i][j] += (NG[key]-1)*VG[key][i][j]/(nr-ng);

var m = (nr-ng)*Math.log(detM(V))-s;

var c = -1/(nr-ng);
for(var key in VG)
	c += 1/(NG[key]-1);
c *= (2*nv*nv+3*nv-1)/(6*(nv+1)*(ng-1));

c2 = -1/((nr-ng)*(nr-ng));
for(var key in VG)
	c2 += 1/((NG[key]-1)*(NG[key]-1));
c2 *= (nv-1)*(nv+2)/(6*(ng-1));

var df = nv*(nv+1)*(ng-1)/2;

var df2 = Math.round((df+2)/Math.abs(c2-c*c));


if(c2>c*c)
	{
	var aplus = df/(1-c-df/df2);
	var f = m/aplus;
	}
else
	{
	var aminus = df2/(1-c+2/df2);
	var f = df2*m/(df*(aminus-m));
	}

var pvalue = 1-pf(f,df,df2);

var max = f;
if(max==0) max = 1;
var pmax = pvalue;
while(pmax>0.0001)
	{
	max *= 1.1;
	pmax = 1-pf(max,df,df2);
	}

var level = 0.001;
var cv = qf(1-level,df,df2);

graph._z.c = c;
graph._z.c2 = c2;
graph._z.ng = ng;
graph._z.nv = nv;
graph._z.nr = nr;
graph._z.m = m;
graph._z.f = f;
graph._z.df1 = df;
graph._z.df2 = df2;
graph._z.pvalue = pvalue;
graph._z.level = level;
graph._z.crit = cv;
graph._z.max = max;

}

//*********************************************************************

function computeHotellingData(graph)
{
graph.limit.ilabels = 1;
if(graph.ilabels.length>1) graph.ilabels.splice(1,graph.ilabels.length-1);
if(graph.ilabels.length<1) return;
if(graph.jvalues.length<1) return;


var nv = graph.jvalues.length;

var VG = {};
var NG = {};

computeIntraGroupVariances(graph,1,VG,NG,graph.ilabels[0],graph.jvalues);

var nr = 0;
var ng = 0;
var keys= [];
for(var key in VG)	
	{		
	keys.push(key);
	var det = detM(VG[key]);
	nr += NG[key];
	ng ++;
	}

graph._z.ng = ng;
if(ng!=2) return;

// pooled covariance
var V = matrix(nv,nv);
for(var i=0;i<nv;i++)
	for(var j=0;j<nv;j++)
		for(var key in VG)
			V[i][j] += (NG[key]-1)*VG[key][i][j]/(nr-ng);

// invert the pooled covariance matrix
var SINV = powerM(V,-1);

var means = {};
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;	
	var key = lrecords[i][graph.ilabels[0]];
	if(!(key in means)) means[key] = vector(nv);
	
	for(var j=0;j<nv;j++)
		means[key][j] += vrecords[i][graph.jvalues[j]];
	}

for(var key in means)
	for(var j=0;j<nv;j++)
		means[key][j] /= NG[key];

var n1 = NG[keys[0]];
var n2 = NG[keys[1]];
var n = n1+n2-1;

var V = vector(nv);
for(var j=0;j<nv;j++)
	V[j] += means[keys[0]][j]-means[keys[1]][j];

var b = multVV(multVM(V,SINV),V);
var t2 = b*n1*n2/(n1+n2);

graph._z.n1 = n1;
graph._z.n2 = n2;
graph._z.no = n;
graph._z.nv = nv;
graph._z.t2 = t2
graph._z.level = 0.05;

graph._z.ng = 2;
graph._z.no = n1+n2;

if((n1<50)&&(n2<50))
	{
	var f = (n-nv)*t2/nv/(n-1);
	graph._z.f = f;
	graph._z.dof1 = nv;
	graph._z.dof2 = n-nv;

	var pvalue = 1-pf(f,nv,n-nv);
	graph._z.pvalue = pvalue;

	var max = f;
	if(max==0) max = 1;
	var pmax = pvalue;
	while(pmax>0.001)
		{
		max *= 1.1;
		pmax = 1-pf(max,nv,n-nv);
		}
	graph._z.max = max;
	graph._z.cv = qf(1-graph._z.level,nv,n-nv);
	}
else
	{
	graph._z.f = void 0;
	graph._z.dof = nv;
	var cv = qchisq(1-graph._z.level,graph._z.dof);
	graph._z.cv = cv;
	var max = Math.max(t2,cv)*1.2;
	graph._z.max = max;
	var pvalue = 1-pchisq(t2,nv);
	graph._z.pvalue = pvalue;
	}

}

//*********************************************************************

function computeManovaData(graph)
{
graph.limit.ilabels = 1;
if(graph.ilabels.length>1) graph.ilabels.splice(1,graph.ilabels.length-1);
if(graph.ilabels.length<1) return;
if(graph.jvalues.length<2) 
	{
	graph.error = "Less than two variables";
	return;
	}

var nv = graph.jvalues.length;

var H = matrix(nv,nv);
var E = matrix(nv,nv);

var z = computeMatrices(graph,H,E);
var nr = z[0];
var ng = z[1];

// HE^-1
var M = multMM(powerM(E,-1),H);

var E = matrix(nv,nv);
var wr = vector(nv)
var wi = vector(nv)
var o = {}
	o.outmsgstr = ""

calcEigSysReal(nv,M,E,wr,wi,o)
wr.sort( function(a,b) { return b-a })


var wilk = 1;
var pillai = 0;
var lawley = 0;
var roy = 0;
for(var i=0;i<wr.length;i++)
	{
	wilk *= 1/(1+wr[i]);	
	pillai += wr[i]/(1+wr[i]);
	if(wr[i]>roy) roy = wr[i];
	lawley += wr[i];
	}

graph._z.wilk = wilk;
graph._z.pillai = pillai;
graph._z.roy = roy;
graph._z.lawley = lawley;

graph._z.ng = ng;
graph._z.no = nr;
graph._z.level = 0.05;

var max = 0;

// wilks
var ne = nr-ng-1;
var nh = ng-1;
var d = nv;
var j = ng;
var t = Math.sqrt((d*d*nh*nh-4)/(d*d+nh*nh-5));
var g = d*nh/2-1;
var f = nr-1-(j+d)/2;
graph._z.wdof1 = d*nh;
graph._z.wdof2 = f*t-g;
var l1b = Math.pow(graph._z.wilk,1/t);
graph._z.wF = (1-l1b)/l1b*(f*t-g)/(d*nh);
graph._z.wcv = cv(graph._z.wdof1,graph._z.wdof2,0.05,graph._z.wF);
graph._z.wpvalue = 1-pf(graph._z.wF,graph._z.wdof1,graph._z.wdof2);
graph._z.wmax = max;

// lawley
var s = Math.min(nv,ng-1);
var t = (Math.abs(nv-ng+1)-1)/2;
var u = (nr-ng-nv-1)/2;

graph._z.ldof1 = s*(2*t+s+1)
graph._z.ldof2 = 2*(s*u+1);
graph._z.lF = 2*(s*u+1)/(s*s*(2*t+s+1))*graph._z.lawley;
graph._z.lcv = cv(graph._z.ldof1,graph._z.ldof2,0.05,graph._z.lF);
graph._z.lpvalue = 1-pf(graph._z.lF,graph._z.ldof1,graph._z.ldof2);
graph._z.lmax = max;

// pillai
graph._z.pdof1 = s*(2*t+s+1);
graph._z.pdof2 = s*(2*u+s+1);
var ratio = (nr+Math.min(nv,ng-1)-(nv+ng))/Math.max(nv,ng-1);
graph._z.pF = ratio*graph._z.pillai/(s-graph._z.pillai);
graph._z.pcv = cv(graph._z.pdof1,graph._z.pdof2,0.05,graph._z.pF);
graph._z.ppvalue = 1-pf(graph._z.pF,graph._z.pdof1,graph._z.pdof2);
graph._z.pmax = max;

// roy
var r = Math.max(nv,nh);
graph._z.rdof1 = r;
graph._z.rdof2 = nh+ne+r;
graph._z.rF = graph._z.roy*(nh+ne-r)/r;
graph._z.rcv = cv(graph._z.rdof1,graph._z.rdof2,0.05,graph._z.rF);
graph._z.rpvalue = 1-pf(graph._z.rF,graph._z.rdof1,graph._z.rdof2);
graph._z.rmax = max;

	function cv(dof1,dof2,level,f)
	{
	max = f*1.1;
	if(max==0) max = 1;
	pmax = 1;
	while(pmax>0.0001)
		{
		max *= 1.1;
		pmax = 1-pf(max,dof1,dof2);
		}
	return qf(1-level,dof1,dof2);
	}
}

//*********************************************************************

function computeMatrices(graph,H,E)
{
var nv = graph.jvalues.length;

var gcount = 0;
var gsum = vector(nv);

var sum = {};
var count = {};

var nr = 0;
var ng = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	nr++;
	var key =lrecords[i][graph.ilabels[0]];
	if(!(key in sum))
		{
		ng++;
		sum[key] = vector(nv);
		count[key] = 0;
		}
	count[key]++;
	for(var j=0;j<nv;j++)
		sum[key][j] += vrecords[i][graph.jvalues[j]];
	
	gcount++;
	for(var j=0;j<nv;j++)
		gsum[j] += vrecords[i][graph.jvalues[j]];
	}


for(var j=0;j<nv;j++)
	gsum[j] = gsum[j]/gcount;

for(var key in sum)
	for(var j=0;j<nv;j++)
		sum[key][j] = sum[key][j]/count[key];

for(var key in sum)
	for(var j=0;j<nv;j++)
		for(var k=0;k<nv;k++)
			H[j][k] += count[key]*(sum[key][j]-gsum[j])*(sum[key][k]-gsum[k]);

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var key =lrecords[i][graph.ilabels[0]];

	for(var j=0;j<nv;j++)
		{
		var xj = vrecords[i][graph.jvalues[j]];
		for(var k=0;k<nv;k++)
			{
			var xk = vrecords[i][graph.jvalues[k]];
			E[j][k] += (xj-sum[key][j])*(xk-sum[key][k]);
			}
		}
	}

return [nr,ng];
}

//*********************************************************************

function computeTwoData(graph)
{
graph.placeholder.ilabels0 = "ROWS";
graph.placeholder.ilabels1 = "COLUMNS";

graph.limit.ilabels = 2;
graph.limit.jvalues = 1;

if(graph.ilabels.length>2) graph.ilables.splice(2,graph.ilabels.length-2);
if(graph.jvalues.length>1) graph.jvalues.splice(1,graph.jvalues.length-1);

if(graph.ilabels.length<1) return;
if(graph.jvalues.length<1) return;

var ng1 = 0;
var ng2 = 0;

var keys1 = {};
var keys2 = {};


for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	var key1 = lrecords[i][graph.ilabels[0]];
	var key2 = lrecords[i][graph.ilabels[1]];

	if(!(key1 in keys1))
		keys1[key1] = ng1++;

	if(!(key2 in keys2))
		keys2[key2] = ng2++;
	}


if(ng1<2)
	{
	graph.error = "Less than 2 categories in "+labels[graph.ilabels[0]];
	return;
	}

if(ng2<2)
	{
	graph.error = "Less than 2 categories in "+labels[graph.ilabels[1]];
	return;	
	}

var names1 = new Array(ng1);
var names2 = new Array(ng2);

for(var key in keys1)
	names1[keys1[key]] = key;

for(var key in keys2)
	names2[keys2[key]] = key;


var count = 0;
var sum = 0;

var count1 = vector(ng1);
var sum1 = vector(ng1);

var count2 = vector(ng2);
var sum2 = vector(ng2);

var count12 = matrix(ng1,ng2);
var sum12 = matrix(ng1,ng2);
var car12 = matrix(ng1,ng2);

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	var i1 = keys1[lrecords[i][graph.ilabels[0]]];
	var i2 = keys2[lrecords[i][graph.ilabels[1]]];

	var v = vrecords[i][graph.jvalues[0]];

	count ++;
	sum += v;

	count1[i1]++;
	sum1[i1] += v;	

	count2[i2]++;
	sum2[i2] += v;

	count12[i1][i2]++;	
	sum12[i1][i2] += v;
	car12[i1][i2] += v*v;
	}

console.log(count12);

for(var i1=0;i1<ng1;i1++)	
	for(var i2=0;i2<ng2;i2++)
		if(count12[i1][i2]!=count12[0][0])		
			{
			graph.error = "Different sample sizes";
			return;
			}

var m = count12[0][0];

sum /= count;

for(var i1=0;i1<ng1;i1++)
	sum1[i1] /= count1[i1];

for(var i2=0;i2<ng2;i2++)
	sum2[i2] /= count2[i2];


for(var i1=0;i1<ng1;i1++)
	for(var i2=0;i2<ng2;i2++)
		sum12[i1][i2] /= m;


var ssi = 0;
for(var i1=0;i1<ng1;i1++)
	for(var i2=0;i2<ng2;i2++)
		ssi += (sum12[i1][i2]-sum1[i1]-sum2[i2]+sum)*
				(sum12[i1][i2]-sum1[i1]-sum2[i2]+sum);
ssi *= m;

var ssw = 0;
for(var i1=0;i1<ng1;i1++)
	for(var i2=0;i2<ng2;i2++)
		{
		ssw += car12[i1][i2];
		ssw -= sum12[i1][i2]*sum12[i1][i2]*m;
		}

var ssa = 0;
for(var i1=0;i1<ng1;i1++)
	ssa += (sum1[i1]-sum)*(sum1[i1]-sum);
ssa *= m*ng2;

var ssb = 0;
for(var i2=0;i2<ng2;i2++)
	ssb += (sum2[i2]-sum)*(sum2[i2]-sum);
ssb *= m*ng1;

graph._z.m = m;
graph._z.ng1 = ng1;
graph._z.ng2 = ng2;

graph._z.names1 = names1;
graph._z.names2 = names2;

graph._z.table = sum12;

graph._z.ssa = ssa;
graph._z.ssb = ssb;
graph._z.ssi = ssi;
graph._z.ssw = ssw;

graph._z.dfa = ng1-1;
graph._z.dfb = ng2-1;
graph._z.dfi = (ng1-1)*(ng2-1);
graph._z.dfw = count-ng1*ng2;

graph._z.msa = graph._z.ssa/graph._z.dfa;
graph._z.msb = graph._z.ssb/graph._z.dfb;
graph._z.msi = graph._z.ssi/graph._z.dfi;
graph._z.msw = graph._z.ssw/graph._z.dfw;

if(m>1)
	{
	graph._z.fa = graph._z.msa/graph._z.msw;
	graph._z.fb = graph._z.msb/graph._z.msw;
	graph._z.fi = graph._z.msi/graph._z.msw;

	graph._z.cva = qf(1-0.05,graph._z.dfa,graph._z.dfw);
	graph._z.cvb = qf(1-0.05,graph._z.dfb,graph._z.dfw);
	graph._z.cvi = qf(1-0.05,graph._z.dfi,graph._z.dfw);

	graph._z.pvaluea = 1-pf(graph._z.fa,graph._z.dfa,graph._z.dfw);
	graph._z.pvalueb = 1-pf(graph._z.fb,graph._z.dfb,graph._z.dfw);
	graph._z.pvaluei = 1-pf(graph._z.fi,graph._z.dfi,graph._z.dfw);
	}
else
	{
	graph._z.fa = graph._z.msa/graph._z.msi;
	graph._z.fb = graph._z.msb/graph._z.msi;

	graph._z.cva = qf(1-0.05,graph._z.dfa,graph._z.dfi);
	graph._z.cvb = qf(1-0.05,graph._z.dfb,graph._z.dfi);

	graph._z.pvaluea = 1-pf(graph._z.fa,graph._z.dfa,graph._z.dfi);
	graph._z.pvalueb = 1-pf(graph._z.fb,graph._z.dfb,graph._z.dfi);
	}


console.log(graph._z);

}

//*********************************************************************

function drawManovaGraph(ctx,graph)
{

var level = graph._z.level;
var ng = graph._z.ng;
var no = graph._z.no;

if(graph.test==TEST.WILK)
	{
	var dof1 = graph._z.wdof1;
	var dof2 = graph._z.wdof2;
	var max = graph._z.wmax;
	var F = graph._z.wF;
	var cv = graph._z.wcv;
	var pvalue = graph._z.wpvalue;
	}
if(graph.test==TEST.PILLAI)
	{
	var dof1 = graph._z.pdof1;
	var dof2 = graph._z.pdof2;
	var max = graph._z.pmax;
	var F = graph._z.pF;
	var cv = graph._z.pcv;
	var pvalue = graph._z.ppvalue;
	}
if(graph.test==TEST.LAWLEY)
	{
	var dof1 = graph._z.ldof1;
	var dof2 = graph._z.ldof2;
	var max = graph._z.lmax;
	var F = graph._z.lF;
	var cv = graph._z.lcv;
	var pvalue = graph._z.lpvalue;
	}
/*
if(graph.test==TEST.ROY)
	{
	var dof1 = graph._z.rdof1;
	var dof2 = graph._z.rdof2;
	var max = graph._z.rmax;
	var F = graph._z.rF;
	var cv = graph._z.rcv;
	var pvalue = graph._z.rpvalue;
	}
*/

ctx.fillStyle = "#000000";
ctx.strokeStyle = "#000000";
ctx.textAlign = "left"
ctx.lineWidth = 1

var y = graph.y+graph.hbar+80;

ctx.fillText("Number of groups",graph.x+40,y);
ctx.fillText(""+ng,graph.x+240,y);

y += 20;
ctx.fillText("Number of observations", graph.x+40,y);
ctx.fillText(""+no, graph.x+240,y);

if(graph.test==TEST.WILK)
	{
	y += 20;
	ctx.fillText("Wilk's lambda \u039B",graph.x+40,y);
	var z = Math.round(graph._z.wilk*10000)/10000;
	ctx.fillText(""+z,graph.x+240,y);
	}

if(graph.test==TEST.PILLAI)
	{
	y += 20;
	ctx.fillText("Pilla's trace V",graph.x+40,y);
	var z = Math.round(graph._z.pillai*10000)/10000;
	ctx.fillText(""+z,graph.x+240,y);
	}

if(graph.test==TEST.LAWLEY)
	{
	y += 20;
	ctx.fillText("Lawley-Hotelling trace T\u00B2",graph.x+40,y);
	var z = Math.round(graph._z.lawley*10000)/10000;
	ctx.fillText(""+z,graph.x+240,y);
	}

/*
if(graph.test==TEST.ROY)
	{	
	y+=20;
	ctx.fillText("Roy's largest root",graph.x+40,y);
	var z = Math.round(graph._z.roy*10000)/10000;
	ctx.fillText(""+z,graph.x+240,y);
	}
*/

y += 20;
ctx.fillText("Degrees of freedom",graph.x+40,y);
var d1 = Math.round(dof1*100)/100;
var d2 = Math.round(dof2*100)/100;
ctx.fillText(d1+","+d2,graph.x+240,y)

y += 20;	
ctx.fillText("Critical value C", graph.x+40,y);
var z = Math.round(cv*10000)/10000;
ctx.fillText(""+z,graph.x+240,y);
ctx.fillText("(\u03B1="+level+")",graph.x+360,y);

y += 20;
F = Math.round(F*10000)/10000;
pvalue = Math.round(pvalue*10000)/10000;
ctx.fillText("Test statistic F",graph.x+40,y);
ctx.fillText(""+F,graph.x+240,y);
ctx.fillText("(pvalue="+pvalue+")",graph.x+360,y);

y += 30;
ctx.fillStyle= "#FF0000";
if(pvalue<0.05)
	{
	multiText(ctx,["#000000","F > C : the means ",
		"#FF0000","are not equal"],graph.x+40,y);
	}
else
	{
	multiText(ctx,["#000000","F < C : the means ",
		"#FF0000","are equals"],graph.x+40,y);
	}


y += 20;
ctx.fillStyle = "#000000";

drawFisherCurve(ctx,graph,y,dof1,dof2,0,max,F,"F",cv);

}

//*********************************************************************

function drawAnovaGraph(ctx,graph)
{
var F = graph._z.f;
var pvalue = graph._z.pvalue;
var max = graph._z.max;
var pmax = graph._z.pmax;
var level = graph._z.level;
var cv = graph._z.cv;
var ng = graph._z.ng;
var no = graph._z.no;

ctx.fillStyle = "#000000";
ctx.strokeStyle = "#000000";
ctx.textAlign = "left"
ctx.lineWidth = 1

var y = graph.y+graph.hbar+80;


ctx.textAlign = "left";
ctx.fillText("Number of groups",graph.x+40,y);
ctx.textAlign = "right";
ctx.fillText(""+ng,graph.x+240,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Number of observations", graph.x+40,y);
ctx.textAlign = "right";
ctx.fillText(""+no, graph.x+240,y);

y += 40;
ctx.textAlign = "right";
ctx.fillText("SS",graph.x+240,y);
ctx.fillText("DF",graph.x+290,y);
ctx.fillText("MS",graph.x+380,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Treatment",graph.x+40,y);
ctx.textAlign = "right";
var z = Math.round(graph._z.vinter*10000)/10000;
ctx.fillText(""+z,graph.x+240,y);
ctx.fillText(""+graph._z.ninter,graph.x+290,y);
z = Math.round((graph._z.vinter/graph._z.ninter)*10000)/10000;
ctx.fillText(""+z,graph.x+380,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Error",graph.x+40,y);
ctx.textAlign = "right";
z = Math.round(graph._z.vintra*10000)/10000;
ctx.fillText(""+z,graph.x+240,y);
ctx.fillText(""+graph._z.nintra,graph.x+290,y);
z = Math.round((graph._z.vintra/graph._z.nintra)*10000)/10000;
ctx.fillText(""+z,graph.x+380,y);

y += 20;
ctx.textAlign = "left";
ctx.fillText("Total",graph.x+40,y);
ctx.textAlign = "right";
z = Math.round(graph._z.vtotal*10000)/10000;
ctx.fillText(""+z,graph.x+240,y);


y += 40;
ctx.textAlign = "left";
ctx.fillText("Degrees of freedom",graph.x+40,y);
ctx.textAlign = "right";
ctx.fillText(graph._z.dof1+","+graph._z.dof2,graph.x+240,y)

y += 20;	
ctx.textAlign = "left";
cv = Math.round(cv*10000)/10000;
ctx.fillText("Critical value C", graph.x+40,y);
ctx.textAlign = "right";
ctx.fillText(""+cv,graph.x+240,y);
ctx.fillText("(\u03B1="+level+")",graph.x+380,y);

y += 20;
ctx.textAlign = "left";
F = Math.round(F*10000)/10000;
pvalue = Math.round(pvalue*10000)/10000;
ctx.fillText("Test statistic F",graph.x+40,y);
ctx.textAlign = "right";
ctx.fillText(""+F,graph.x+240,y);
ctx.fillText("(pvalue="+pvalue+")",graph.x+380,y);

y += 30;
ctx.textAlign = "left";
ctx.fillStyle= "#FF0000";
if(pvalue<0.05)
	{
	multiText(ctx,["#000000","F > C : the means ",
		"#FF0000","are not equal"],graph.x+40,y);
	}
else
	{
	multiText(ctx,["#000000","F < C : the means ",
		"#FF0000","are equals"],graph.x+40,y);
	}


y += 20;
ctx.fillStyle = "#000000";

drawFisherCurve(ctx,graph,y,graph._z.dof1,graph._z.dof2,0,max,F,"F",cv);

}

//*********************************************************************

function drawTwoGraph(ctx,graph)
{
if(graph.ilabels.length<2) return;
if(graph.jvalues.length<1) return;


var option = getGraphOption(graph);

if(option==0)
	drawTwoResults(ctx,graph);
else 
	drawTwoCurves(ctx,graph);
}

//*********************************************************************

function drawTwoResults(ctx,graph)
{

var x = graph.x+40;
var y = graph.y + graph.hbar + 50;

ctx.fillStyle = "#000000";

ctx.textAlign = "left";
ctx.fillText("Sample size",x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.m,x+200,y);
ctx.textAlign= "left";
if(graph._z.m>1)
	ctx.fillText("(with replication)",x+210,y);
else
	ctx.fillText("(without replication)",x+210,y);

y += 20;
ctx.fillText(labels[graph.ilabels[0]],x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.ng1,x+200,y);
ctx.textAlign = "left";
ctx.fillText("groups",x+210,y);

y += 20;
ctx.fillText(labels[graph.ilabels[1]],x,y);
ctx.textAlign = "right";
ctx.fillText(""+graph._z.ng2,x+200,y);
ctx.textAlign = "left";
ctx.fillText("groups",x+210,y);

y += 40;

ctx.textAlign = "left";
ctx.fillText("Source",x,y);

ctx.textAlign = "right";
ctx.fillText("SS",x+200,y);
ctx.fillText("DF",x+230,y);
ctx.fillText("MS",x+310,y);
ctx.fillText("F",x+380,y);
ctx.fillText("pvalue",x+460,y);
ctx.fillText("Crit. Val.",x+520,y);

ctx.fillRect(x,y+10,520,1);

y += 30;

ctx.textAlign = "left";
ctx.fillText(labels[graph.ilabels[0]],x,y);
ctx.textAlign = "right";
ctx.fillText(""+round(graph._z.ssa),x+200,y);
ctx.fillText(""+graph._z.dfa,x+230,y);
ctx.fillText(""+round(graph._z.msa),x+310,y);
ctx.fillText(""+round(graph._z.fa),x+380,y);
ctx.fillText(""+round(graph._z.pvaluea),x+460,y);
ctx.fillText(""+round(graph._z.cva),x+520,y);
if(graph._z.fa>graph._z.cva)
	{
	ctx.textAlign = "left";
	ctx.fillStyle = "#FF0000";
	ctx.fillText("F > C",x+540,y);
	ctx.fillStyle = "#000000";
	}

y += 20;
ctx.textAlign = "left";
ctx.fillText(labels[graph.ilabels[1]],x,y);
ctx.textAlign = "right";
ctx.fillText(""+round(graph._z.ssb),x+200,y);
ctx.fillText(""+graph._z.dfb,x+230,y);
ctx.fillText(""+round(graph._z.msb),x+310,y);
ctx.fillText(""+round(graph._z.fb),x+380,y);
ctx.fillText(""+round(graph._z.pvalueb),x+460,y);
ctx.fillText(""+round(graph._z.cvb),x+520,y);
if(graph._z.fb>graph._z.cvb)
	{
	ctx.textAlign = "left";
	ctx.fillStyle = "#FF0000";
	ctx.fillText("F > C",x+540,y);
	ctx.fillStyle = "#000000";
	}

y += 20;

if(graph._z.m>1)
	{
	ctx.textAlign = "left";
	ctx.fillText("Interaction",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+round(graph._z.ssi),x+200,y);
	ctx.fillText(""+graph._z.dfi,x+230,y);
	ctx.fillText(""+round(graph._z.msi),x+310,y);
	ctx.fillText(""+round(graph._z.fi),x+380,y);
	ctx.fillText(""+round(graph._z.pvaluei),x+460,y);
	ctx.fillText(""+round(graph._z.cvi),x+520,y);
	if(graph._z.fi>graph._z.cvi)
		{
		ctx.textAlign = "left";
		ctx.fillStyle = "#FF0000";
		ctx.fillText("F > C",x+540,y);
		ctx.fillStyle = "#000000";
		}

	y += 20;
	ctx.textAlign = "left";
	ctx.fillText("Within",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+round(graph._z.ssw),x+200,y);
	ctx.fillText(""+graph._z.dfw,x+230,y);
	ctx.fillText(""+round(graph._z.msw),x+310,y);
	}
else
	{
	ctx.textAlign = "left";
	ctx.fillText("Error",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+round(graph._z.ssi),x+200,y);
	ctx.fillText(""+graph._z.dfi,x+230,y);
	ctx.fillText(""+round(graph._z.msi),x+310,y);
	}

	function round(x) { return Math.round(x*10000)/10000; }
}

//*********************************************************************

function drawTwoCurves(ctx,graph)
{
var option = getGraphOption(graph);

var xleft = graph.x + 30;
var xright = graph.x + graph.w -110;
var ytop = graph.y + graph.hbar +30
var ybottom = graph.y + graph.h -10;

var ng1 = graph._z.ng1;
var ng2 = graph._z.ng2;
var table = graph._z.table;

var min = Number.MAX_VALUE;
var max = -Number.MAX_VALUE;
for(var i1=0;i1<ng1;i1++)	
	for(var i2=0;i2<ng2;i2++)
		{
		if(table[i1][i2]<min) min = table[i1][i2];
		if(table[i1][i2]>max) max = table[i1][i2];
		}

var step = Math.pow(10,Math.floor(Math.log(max-min)/Math.log(10)));

ctx.strokeStyle = "#000000";
ctx.strokeRect(xleft,ytop,xright-xleft,ybottom-ytop);
ctx.textAlign = "center";

ctx.fillStyle = hdotted;
var z = Math.floor(min/step)*step;

for(var k=z;k<max;k+=step)
	{
	if(k<=min) continue;
	var y = ybottom -(ybottom-ytop)*(k-min)/(max-min);
	ctx.fillRect(xleft,y,xright-xleft,1);			
	}


ctx.lineWidth = 2;

if(option==1)
	{
	for(var i1=0;i1<ng1;i1++)		
		{
		ctx.fillStyle = ctx.strokeStyle = getColor(graph.hue+i1*1.0/ng1,1,1);
		ctx.beginPath();
		for(var i2=0;i2<ng2;i2++)
			{
			var x = xleft+(xright-xleft)*i2/(ng2-1);
			var y = ybottom - (ybottom-ytop)*(table[i1][i2]-min)/(max-min);
			if(i2==0)
				ctx.moveTo(x,y);
			else
				ctx.lineTo(x,y);
			}
		ctx.stroke();
		ctx.fillText(graph._z.names1[i1],(xright+graph.x+graph.w)/2,ybottom-20*i1);
		}
	}


if(option==2)
	{
	for(var i2=0;i2<ng2;i2++)
		{
		ctx.fillStyle = ctx.strokeStyle = getColor(graph.hue+i2*1.0/ng2,1,1);
		ctx.beginPath();
		for(var i1=0;i1<ng1;i1++)
			{
			var x = xleft+(xright-xleft)*i1/(ng1-1);
			var y = ybottom - (ybottom-ytop)*(table[i1][i2]-min)/(max-min);
			if(i1==0)			
				ctx.moveTo(x,y);
			else
				ctx.lineTo(x,y);	
			}
		ctx.stroke();
		ctx.fillText(graph._z.names2[i2],(xright+graph.x+graph.w)/2,ybottom-20*i2);
		}	
	}

ctx.lineWidth = 1;

}

//*********************************************************************

function drawBartlettGraph(ctx,graph)
{
var level = graph._z.level;
var dof = graph._z.dof;
var max = graph._z.max;
var pvalue = graph._z.pvalue;
var cv = graph._z.cv;
var t = graph._z.t;

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
ctx.fillText("Critical value C",graph.x+40,y);
z = Math.round(cv*10000)/10000;
ctx.fillText(""+z,graph.x+240,y);
ctx.fillText("(\u03B1="+level+")",graph.x+360,y);

y += 20;	
ctx.fillText("Test statistic T",graph.x+40,y);
z = Math.round(t*10000)/10000;
ctx.fillText(""+z,graph.x+240,y);
z = Math.round(pvalue*10000)/10000;
ctx.fillText("(pvalue="+z+")",graph.x+360,y);

y += 40;
ctx.fillStyle= "#FF0000";	
if(isNaN(t))
	{
	y += 40;
	}
else if(graph._z.t>graph._z.cv)
	{
	multiText(ctx,["#000000","T > C : variances ",
		"#FF0000","are not equals"],graph.x+40,y);
	y += 20;
	}
else	
	{
	multiText(ctx,["#000000","T < C : variances ",
		"#FF0000","are equals"],graph.x+40,y);
	y += 20;
	}

y += 20;

drawChi2Curve(ctx,graph,y,graph._z.dof,0,max,graph._z.t,"T",graph._z.cv);

}

//*********************************************************************

function drawLeveneGraph(ctx,graph)
{
	var level = 0.05;
	var w = graph._z.w;
	var dof1 = graph._z.ng-1;
	var dof2 = graph._z.nr-graph._z.ng;
	var pvalue = 1-pf(w,dof1,dof2);

	var max = w;
	if(max==0) max = 1;
	var pmax = pvalue;
	while(pmax>0.001)
		{
		max *= 1.1;
		pmax = 1-pf(max,dof1,dof2);
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
	ctx.fillText(dof1+","+dof2,graph.x+240,y)

	y += 20;	
	var level = 0.05;
	var cv = qf(1-level,dof1,dof2);
	cv = Math.round(cv*10000)/10000;
	ctx.fillText("Critical value C", graph.x+40,y);
	ctx.fillText(""+cv,graph.x+240,y);
	ctx.fillText("(\u03B1="+level+")",graph.x+360,y);
	
	y += 20;
	w = Math.round(w*10000)/10000;
	pvalue = Math.round(pvalue*10000)/10000;
	ctx.fillText("Test statistic W",graph.x+40,y);
	ctx.fillText(""+w,graph.x+240,y);
	ctx.fillText("(pvalue="+pvalue+")",graph.x+360,y);

	y += 30;
	ctx.fillStyle= "#FF0000";
	if(pvalue<0.05)
		{
		multiText(ctx,["#000000","W > C : variances ",
			"#FF0000","are not equal"],graph.x+40,y);
		y += 20;
		}
	else
		{
		multiText(ctx,["#000000","W < C : variances ",
			"#FF0000","are equal"],graph.x+40,y);
		y += 20;
		}

	y += 20;
	ctx.fillStyle = "#000000";

	// draw fisher curve

drawFisherCurve(ctx,graph,y,dof1,dof2,0,max,w,"W",cv);

}

//*********************************************************************

function drawBoxmGraph(ctx,graph)
{
var x = graph.x+graph.w/2;
var y = graph.y+graph.h/2;

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
ctx.fillText(graph._z.df1+" , "+graph._z.df2,graph.x+240,y)

y += 20;	
var crit = Math.round(graph._z.crit*10000)/10000;
ctx.fillText("Critical value C", graph.x+40,y);
ctx.fillText(""+crit,graph.x+240,y);
ctx.fillText("(\u03B1="+graph._z.level+")",graph.x+360,y);

y += 20;
var f = Math.round(graph._z.f*10000)/10000;
var pvalue = Math.round(graph._z.pvalue*10000)/10000;
ctx.fillText("Test statistic F",graph.x+40,y);
ctx.fillText(""+f,graph.x+240,y);
ctx.fillText("(pvalue="+pvalue+")",graph.x+360,y);

y += 30;
ctx.fillStyle= "#FF0000";
if(pvalue<0.001)
	{
	multiText(ctx,["#000000","F > C : covariances ",
		"#FF0000","are not equal"],graph.x+40,y);
	y += 20;
	}
else
	{
	multiText(ctx,["#000000","F < C : covariances ",
		"#FF0000","are equal"],graph.x+40,y);
	y += 20;
	}


y += 20;
ctx.fillStyle = "#000000";


drawFisherCurve(ctx,graph,y,graph._z.df1,graph._z.df2,0,graph._z.max,graph._z.f,"F",graph._z.crit);


}
	
//*********************************************************************

function drawTGraph(ctx,graph,samevar)
{
if(graph._z.ng<2)
	{
	var x = graph.x+graph.w/2;
	var y = graph.y+graph.h/2;
	ctx.textAlign = "center";
	ctx.fillStyle = "#000000";
	ctx.fillText("Less than 2 categories",x,y);
	return;
	}

if(graph._z.ng>2)
	{
	var x = graph.x+graph.w/2;
	var y = graph.y+graph.h/2;
	ctx.textAlign = "center";
	ctx.fillStyle = "#000000";
	ctx.fillText("More than 2 categories",x,y);
	return;
	}

var t = graph._z.t;
var pvalue = graph._z.pvalue;
var level = graph._z.level*2;
var cv = graph._z.cv;

ctx.fillStyle = "#000000";
ctx.strokeStyle = "#000000";
ctx.textAlign = "left"
ctx.lineWidth = 1

var y = graph.y+graph.hbar+80;

if(samevar)
	ctx.fillText("NOTE: Variances are assumed to be equal",graph.x+40,y);
else
	ctx.fillText("NOTE: Variances are not assumed to be equal",graph.x+40,y);
y+= 20;

ctx.fillText("Number of groups",graph.x+40,y);
var ng = graph._z.ng;
ctx.fillText(""+ng,graph.x+240,y);

y += 20;
var no = graph._z.no;
ctx.fillText("Number of observations", graph.x+40,y);
ctx.fillText(""+no, graph.x+240,y);

y += 20;
ctx.fillText("Degrees of freedom",graph.x+40,y);
var dof = Math.round(graph._z.dof*10000)/10000;
ctx.fillText(""+dof,graph.x+240,y)

y += 20;	
cv = Math.round(cv*10000)/10000;
ctx.fillText("Critical value C", graph.x+40,y);
ctx.fillText("+/-"+cv,graph.x+240,y);
ctx.fillText("(\u03B1="+level+")",graph.x+360,y);

y += 20;
t = Math.round(t*10000)/10000;
if(pvalue<0.5)
	var pv = Math.round(2*pvalue*10000)/10000;
else
	var pv = Math.round(2*(1-pvalue)*10000)/10000;
ctx.fillText("Test statistic T",graph.x+40,y);
ctx.fillText(""+t,graph.x+240,y);
ctx.fillText("(pvalue="+pv+")",graph.x+360,y);

y += 30;
ctx.fillStyle= "#FF0000";
if((pvalue<0.025)||(pvalue>0.975))
	{
	ctx.fillText("The means are different", graph.x+40,y);
	/*
	multiText(ctx,["#000000",labels[graph.ilabel1],
		"#FF0000"," has influence on ",
		"#000000",values[graph.ivalues[0]]],graph.x+40,y+20);
	*/
	y += 20;
	}
else
	{
	ctx.fillText("The means are equals", graph.x+40,y);
	/*
	multiText(ctx,["#000000",labels[graph.ilabel1],
		"#FF0000"," has no influence on ",
		"#000000",values[graph.ivalues[0]]],graph.x+40,y+20);
	*/
	y += 20;
	}

y += 20;
ctx.fillStyle = "#000000";



var max = Math.max(Math.abs(cv),Math.abs(t))*1.2;
var min = -max;

drawTCurve(ctx,graph,y,dof,min,max,t,"T",cv);

}

//*********************************************************************

function drawHotellingGraph(ctx,graph)
{
var ng = graph._z.ng;


ctx.fillStyle = "#000000";
if(ng<2)
	{
	var x = graph.x+graph.w/2;
	var y = graph.y+graph.h/2;
	ctx.textAlign = "center";
	ctx.fillText("Less than two categories",x,y);
	return;
	}
if(ng>2)
	{
	var x = graph.x+graph.w/2;
	var y = graph.y+graph.h/2;
	ctx.textAlign = "center";
	ctx.fillText("More than two categories",x,y);
	return;
	}


var pvalue = graph._z.pvalue;
var max = graph._z.max;
var pmax = graph._z.pmax;
var level = graph._z.level;
var ng = graph._z.ng;
var no = graph._z.no;

ctx.fillStyle = "#000000";
ctx.strokeStyle = "#000000";
ctx.textAlign = "left";
ctx.lineWidth = 1;

var y = graph.y+graph.hbar+80;

ctx.fillText("Nb of observations in group 1",graph.x+40,y);
ctx.fillText(""+graph._z.n1,graph.x+240,y);

y += 20;
ctx.fillText("Nb of observations in group 2", graph.x+40,y);
ctx.fillText(""+graph._z.n2, graph.x+240,y);

y += 20;
ctx.fillText("Number of variables",graph.x+40,y);
ctx.fillText(""+graph._z.nv,graph.x+240,y);

if(graph._z.f)
	{
	y += 20;
	ctx.fillText("T\u00B2",graph.x+40,y);
	var t2 = Math.round(graph._z.t2*10000)/10000;
	ctx.fillText(""+t2,graph.x+240,y);

	y += 20;
	ctx.fillText("Degrees of freedom",graph.x+40,y);
	var df = graph._z.dof1+","+graph._z.dof2;
	ctx.fillText(""+df,graph.x+240,y)
	y += 20;	
	var cv = Math.round(graph._z.cv*10000)/10000;
	ctx.fillText("Critical value C", graph.x+40,y);
	ctx.fillText(""+cv,graph.x+240,y);
	ctx.fillText("(\u03B1="+level+")",graph.x+360,y);

	y += 20;
	var f = Math.round(graph._z.f*10000)/10000;
	pvalue = Math.round(pvalue*10000)/10000;
	ctx.fillText("Test statistic F",graph.x+40,y);
	ctx.fillText(""+f,graph.x+240,y);
	ctx.fillText("(pvalue="+pvalue+")",graph.x+360,y);
	}
else
	{
	y += 20;
	ctx.fillText("Degrees of freedom",graph.x+40,y);
	ctx.fillText(""+graph._z.dof,graph.x+240,y)

	y += 20;	
	var cv = Math.round(graph._z.cv*10000)/10000;
	ctx.fillText("Critical value C", graph.x+40,y);
	ctx.fillText(""+cv,graph.x+240,y);
	ctx.fillText("(\u03B1="+level+")",graph.x+360,y);

	y += 20;
	var t2 = Math.round(graph._z.t2*10000)/10000;
	pvalue = Math.round(pvalue*10000)/10000;
	ctx.fillText("Test statistic T\u00B2",graph.x+40,y);
	ctx.fillText(""+t2,graph.x+240,y);
	ctx.fillText("(pvalue="+pvalue+")",graph.x+360,y);
	}

y += 30;
ctx.fillStyle= "#FF0000";
if(pvalue<0.05)
	{
	ctx.fillText("At least one mean is different from the others",
		graph.x+40,y);
	}
else
	{
	ctx.fillText("All the means are equals",
		graph.x+40,y);
	}


y += 20;

if(graph._z.f)
	drawFisherCurve(ctx,graph,y,graph._z.dof1,graph._z.dof2,0,max,graph._z.f,"F",graph._z.cv);
else
	drawChi2Curve(ctx,graph,y,graph._z.dof,0,max,graph._z.t2,"T\u00B2",graph._z.cv);

}

//*********************************************************************

function buildTestTable(graph)
{
if(graph.ilabels.length<1) return;
if(graph.jvalues.length<1) return;

switch(graph.test)
	{
	case TEST.ANOVA: buildAnovaTable(graph); break;
/*
	case TEST.BARTLETT: drawBartlettGraph(ctx,graph); break;
	case TEST.LEVENE: drawLeveneGraph(ctx,graph); break;
	case TEST.BROWN: drawLeveneGraph(ctx,graph); break;
	case TEST.BOXM: drawBoxmGraph(ctx,graph); break;
	case TEST.WELCH: drawTGraph(ctx,graph,false); break;
	case TEST.STUDENT: drawTGraph(ctx,graph,true); break;
	case TEST.HOTELLING:  drawHotellingGraph(ctx,graph); break;
	case TEST.WILK: drawManovaGraph(ctx,graph); break;
	case TEST.PILLAI: drawManovaGraph(ctx,graph); break;
	case TEST.LAWLEY: drawManovaGraph(ctx,graph); break;
*/
	}

}

//*********************************************************************

function buildAnovaTable(graph)
{

setTableName("ANOVA "+labels[graph.ilabels[0]]+" - "+values[graph.jvalues[0]]);

var row = 1;

table(row,1,"Number of groups");
table(row,2,graph._z.ng);

row++;
table(row,1,"Number of observations");
table(row,2,graph._z.no);

row++;
table(row,2,"SS");
table(row,3,"DF");
table(row,4,"MS");

row++;
table(row,1,"Treatment");
table(row,2,Math.round(graph._z.vinter*10000)/10000);
table(row,3,graph._z.ninter);
table(row,4,Math.round((graph._z.vinter/graph._z.ninter)*10000)/10000);

row++;
table(row,1,"Error");
table(row,2,Math.round(graph._z.vintra*10000)/10000);
table(row,3,graph._z.nintra);
table(row,4,Math.round((graph._z.vintra/graph._z.nintra)*10000)/10000);

row++;
table(row,1,"Total");
table(row,2,Math.round(graph._z.vtotal*10000)/10000);

row++;
row++;
table(row,1,"Degrees of freedom");
table(row,2,graph._z.dof1);
table(row,3,graph._z.dof2);

row++;
table(row,1,"Critical value C");
table(row,2,Math.round(graph._z.cv*10000)/10000);
table(row,3,"(\u03B1="+graph._z.level+")");

row++;
table(row,1,"Test statistic F");
table(row,2,Math.round(graph._z.f*10000)/10000);
table(row,3,"(pvalue="+(Math.round(graph._z.pvalue*10000)/10000)+")");

}

//*********************************************************************

function buildBartlettTable(graph)
{
}

//*********************************************************************

function buildLeveneTable(graph)
{
}

//*********************************************************************

function buildBoxmTable(graph)
{
}

//*********************************************************************
//*********************************************************************
//
//                REGRES
//
//*********************************************************************

function computeRegresData(graph)
{
if(graph.w<460)
	graph.w = 460;

graph.placeholder.leftvalue = "RESPONSE";
graph.placeholder.bottomlabel = "COLOR";
graph.placeholder.rightlabel = "LABEL";


graph._z.results = {};
graph._z.results.fitted = {t:"regression (fitted values)",n:"fi"};
graph._z.results.predict = {t:"predicted values",n:"pr"};
graph._z.results.stud = {t:"studentized residualed",n:"st"};
graph._z.results.cookd = {t:"cook's distances",n:"ck"};
graph._z.results.hat = {t:"leverages (hat values)",n:"lv"};
graph._z.results.resid = {t:"deviance residuals",n:"rs"};
graph._z.results.pearson = {t:"pearson residuals",n:"ps"};
graph._z.results.raw = {t:"raw residuals",n:"rw"};

for(var j=0;j<graph.ivalues.length;j++)
	if(graph.ivalues[j]==graph.ivalue1)
			{ graph.ivalues.splice(j,1) ; }

switch(graph.regr)
	{	
	case REGR.ONE: computeRegresPoly(graph); break;
	case REGR.TWO: computeRegresPoly(graph); break;	
	case REGR.THREE: computeRegresPoly(graph); break;
	case REGR.LOGIS: computeRegresLogistic(graph); break;
	case REGR.LOGIS2: computeRegresLogistic2(graph); break;
	case REGR.POISSON: computeRegresPoisson(graph); break;
	case REGR.NEGBIN: computeRegresNegbin(graph); break;
	case REGR.LARS: computeRegresLars(graph); break;
	}

}

//*********************************************************************

function computeRegresPoly(graph)
{

for(var i=0;i<50;i++)
	graph.placeholder["ivalues"+i] = "TERM";


if(graph.ivalues.length<1) return;
if(graph.ivalue1<0) return;

var nv = graph.ivalues.length;

var list = generateExponents(nv,graph.regr+1);
var n = list.length;

var M = matrix(n,n);

var nr = 0;
var ybar  = 0;

var x1,x2,t1,t2;


for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue

	nr += 1;	
	ybar += vrecords[i][graph.ivalue1];

	for(var k1=0;k1<list.length;k1++)
		{
		var x1 = 1;
		for(var j1=0;j1<list[k1].length;j1++) switch(list[k1][j1])
			{
			case 1: t1 = vrecords[i][graph.ivalues[j1]]; x1 *= t1; break;
			case 2: t1 = vrecords[i][graph.ivalues[j1]]; x1 *= t1*t1; break;
			case 3: t1 = vrecords[i][graph.ivalues[j1]]; x1 *= t1*t1*t1; break;
			}

		for(var k2=0;k2<list.length;k2++)
			{
			var x2 = 1;
			for(var j2=0;j2<list[k2].length;j2++)  switch(list[k2][j2])
				{
				case 1: t2 = vrecords[i][graph.ivalues[j2]]; x2 *= t2; break;
				case 2: t2 = vrecords[i][graph.ivalues[j2]]; x2 *= t2*t2; break;
				case 3: t2 = vrecords[i][graph.ivalues[j2]]; x2 *= t2*t2*t2; break;
				}
	
			M[k1][k2] += x1*x2;	
			}
		}
	}



if(nr==0) nr = 1;
ybar = ybar/nr;

var MINV = invM(M);



// diagonal elements are variances of coefficients
var D = new Array(n);
for(var i=0;i<n;i++)
	D[i] = MINV[i][i];

var B = vector(n);

var x,t;
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue
	for(var k=0;k<list.length;k++)
		{
		var x = 1;
		for(var j=0;j<list[k].length;j++) switch(list[k][j])
			{		
			case 1 : t=vrecords[i][graph.ivalues[j]]; x *= t; break;
			case 2 : t=vrecords[i][graph.ivalues[j]]; x *= t*t; break;
			case 3 : t=vrecords[i][graph.ivalues[j]]; x *= t*t*t; break;
			}
		B[k] += x* vrecords[i][graph.ivalue1];
		}
	}


var A = multMV(MINV,B);


// diagonal of hat matrix
var hat = vector(nr);
var X = vector(n);
var Y = vector(n);
var ir = 0;
for(var i=0;i<vrecords.length;i++)	
	{
	if(!recordMatch(i,graph)) continue;
	for(var k=0;k<list.length;k++)
		{
		X[k] = 1;
		for(var j=0;j<list[k].length;j++) switch(list[k][j])
			{
			case 1 : t=vrecords[i][graph.ivalues[j]]; X[k] *= t; break;
			case 2 : t=vrecords[i][graph.ivalues[j]]; X[k] *= t*t; break;
			case 3 : t=vrecords[i][graph.ivalues[j]]; X[k] *= t*t*t; break;
			}
		}

	for(var k=0;k<n;k++)
		{
		Y[k] = 0;
		for(var kk=0;kk<n;kk++)
			Y[k] += X[kk]*MINV[kk][k];
		}	


	hat[ir] = 0;
		for(var kk=0;kk<n;kk++)
			hat[ir] += X[kk]*Y[kk];
	ir++;
	}

X = null;
Y = null;

// mean square error
var mse = 0;

// explained and total variance
var sce = 0;
var sct = 0;
var scr = 0;

for(var i=0;i<vrecords.length;i++)
	{
	var yc  = 0;
	if(!recordMatch(i,graph)) continue;
	for(var k=0;k<list.length;k++)
		{
		var x = 1;
		for(var j=0;j<list[k].length;j++) switch(list[k][j])
			{
			case 1 : t = vrecords[i][graph.ivalues[j]]; x *= t; break;
			case 2 : t = vrecords[i][graph.ivalues[j]]; x *= t*t; break;
			case 3 : t = vrecords[i][graph.ivalues[j]]; x *= t*t*t; break;
			}
		yc += x*A[k];	
		}			

	var y = vrecords[i][graph.ivalue1];

	mse += (y-yc)*(y-yc);
	sct += (y-ybar)*(y-ybar);
	sce += (yc-ybar)*(yc-ybar);
	scr += (yc-y)*(yc-y);
	}

mse /= nr;

var r2 = sce/sct;
var dof1 = list.length-1;
var dof2 = nr - dof1 -1;

var F = (r2/dof1)/((1-r2)/(dof2));

var max = F;
if(max==0) max = 1;
var pmax = 1;
while(pmax>0.001)
    {
    max *= 1.1;
    pmax = 1-pf(max,dof1,dof2);
    }

var cv = qf(1-0.05,dof1,dof2);

var pvalue = 1-pf(F,dof1,dof2);

var sigma = Math.sqrt(scr/dof2);

var pvalues = new Array(A.length);
for(var i=0;i<A.length;i++)
	{	
	var std = Math.sqrt(D[i]*sigma*sigma);
	var zzz = Math.abs(A[i]/std);
	var p = pt(zzz,dof2);
	pvalues[i] = p > 1 ? 0 : 2*(1-p);
	}


var df = nr - list.length;
var aic = 2*(list.length+1)+nr*Math.log(2*Math.PI*mse)+nr;

graph._z.list = list;
graph._z.sce = sce;
graph._z.sct = sct;
graph._z.scr = scr;
graph._z.nr = nr;
graph._z.A = A;
graph._z.D = D;
graph._z.F = F;
graph._z.cv = cv;
graph._z.dof1 = dof1;
graph._z.dof2 = dof2;
graph._z.max = max;
graph._z.pvalue = pvalue;
graph._z.pvalues = pvalues;
graph._z.sigma = sigma;
graph._z.mse = mse;
graph._z.aic = aic;

graph._z.hatvalues = dispatch(hat,graph);

graph._z.results.predict.f = createFitted;
graph._z.results.fitted.f = createFitted;
graph._z.results.resid.f = createResidual;
graph._z.results.pearson.f = createResidual;
graph._z.results.cookd.f = createCookd;
graph._z.results.hat.f = createHat;

	//-----------------------------------------------------------

	function createCookd(i,graph)
	{
	if(!recordMatch(i,graph)) return void 0;

	var er = vrecords[i][graph.ivalue1] - predict(i,graph);
	var ha = graph._z.hatvalues[i];
	var nr = graph._z.nr;
	var n = graph._z.list.length;
	var mse = graph._z.mse;
		
	var c = er*er*ha*(nr-n)/(nr*n*mse*(1-ha)*(1-ha));
	return Math.round(c*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function createHat(i,graph)
	{
	if(!recordMatch(i,graph)) return void 0;
	return Math.round(graph._z.hatvalues[i]*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function createFitted(i,graph)
	{
	var y = predict(i,graph);
	return Math.round(y*PREC)/PREC;	
	}

	//-----------------------------------------------------------

	function createResidual(i,graph)
	{
	var resid = vrecords[i][graph.ivalue1] - predict(i,graph);
	return Math.round(resid*PREC)/PREC;	
	}

	//-----------------------------------------------------------

	function predict(i,graph)
	{
	var y = 0;	
	var list = graph._z.list;
	for(var k=0;k<list.length;k++)
		{
		var x = 1;
		for(var j=0;j<list[k].length;j++) switch(list[k][j])
			{
			case 1 : t = vrecords[i][graph.ivalues[j]]; x *= t; break;
			case 2 : t = vrecords[i][graph.ivalues[j]]; x *= t*t; break;
			case 3 : t = vrecords[i][graph.ivalues[j]]; x *= t*t*t; break;
			}
		y += x*graph._z.A[k];	
		}		
	return y;
	}

}

//*********************************************************************

// generate all the possible combinations of exponents
function generateExponents(nvariables,ndegrees)
{
var list = [];
var expos = vector(nvariables);
_gen(0,0);
return list.reverse();

    function _gen(sum,index)
    {
    if(index>=nvariables) return;

	// try all possible exponents for index-th variable
    for(var k=0;k<=ndegrees-sum;k++)
        {
        expos[index] = k;
        if(index==nvariables-1)
            list.push(expos.slice());
        else
            _gen(sum+k,index+1);
        }

    expos[index] = 0;
    }
}

//*********************************************************************

function computeRegresLogistic(graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalues.length<1) return;

// check data
var nr = 0;
var count0 = 0;
var count1 = 0;
var countm = 0;
var counto = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	nr++;
	var y = vrecords[i][graph.ivalue1];
	switch(y)
		{
		case -1: countm++; break;		
		case 0: count0++; break;
		case 1: count1++; break;
		default: counto++; break;
		}	
	}

if(counto>0) { graph.error = "Responses not -1/1  or 0/1"; return; }
if(countm*count0*count1>0) { graph.error = "Responses not -1/1 or 0/1"; return;}
if(countm+count0==0) { graph.error = "Responses not -1/1 or 0/1" ; return; }
if(count0+count1==0) { graph.error = "Responses not -1/1 or 0/1" ; return; }

var n = graph.ivalues.length+1;

var coef = vector(n);
fillV(coef,0.1);


// Boehning's methd

var H = covariance(n);
var I = ginv(H);

for(var iter=0;iter<500;iter++)
	{
	var g = gradient(coef);

	var delta = multMV(I,g);
	var nrm = norm(delta);
	if(nrm < 1e-7) break;
	
	for(var j=0;j<n;j++)
		coef[j]  += delta[j];
	}


// compute standard dev
var C = matrix(n,n);
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var s = sigma(i,coef,1);
	var a = s*(1-s);
	for(var j=0;j<n;j++)
		{
		var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
		for(var k=0;k<n;k++)
			{
			var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
			C[j][k] += a*xj*xk;	
			}
		}
	}

I = ginv(C);

var stddev = new Array(n);
var zvalues = new Array(n);
var pvalues = new Array(n);
for(var j=0;j<n;j++)
	{
	stddev[j] = Math.sqrt(I[j][j]);
	zvalues[j] = coef[j]/stddev[j];
	pvalues[j] = 2-2*pnorm(Math.abs(zvalues[j]))
	}

// compute deviance

var deviance = 0;
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var y = vrecords[i][graph.ivalue1];
	var s = sigma(i,coef,1);
	if(y==1)
		deviance += Math.log(s);
	else
		{
		deviance += Math.log(1-s);
		}
	}
deviance *= -2;

var level = 0.05;
var df = nr-coef.length;
var pvalue = 1-pchisq(deviance,df);
var cv = qchisq(1-level,df);


graph._z.nr = nr;
graph._z.coef = coef;
graph._z.stddev = stddev;
graph._z.zvalues = zvalues;
graph._z.pvalues = pvalues;
graph._z.deviance = deviance;
graph._z.level = level;
graph._z.df = df;
graph._z.pvalue = pvalue;
graph._z.cv = cv;

graph._z.hatvalues = dispatch(hatvalues(n),graph);

graph._z.results.fitted.f = createFitted;
graph._z.results.predict.f = createPredict;
graph._z.results.resid.f = createResidual;
graph._z.results.pearson.f = createPearson;
graph._z.results.hat.f = createHat;
graph._z.results.cookd.f =  createCook;

graph._z.aic = aic(coef);

	//-----------------------------------------------------------

	function aic(coef)
	{
	var a = 0;
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var s = sigma(i,coef,1);
		var y = vrecords[i][graph.ivalue1];
		if(y!=0) a += y*Math.log(s);
		if(y!=1) a += (1-y)*Math.log(1-s);
		}
	return -2*a +2*coef.length;
	}

	//-----------------------------------------------------------

	function createFitted(i,graph)	
	{
	var s = sigma(i,graph._z.coef,1);
	return Math.round(s*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function createPredict(i,graph)
	{
	var n = coef.length;
	var s = 0;
	for(var j=0;j<n;j++)
		{
		var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
		s += coef[j]*xj;
		}
	return Math.round(s*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function createResidual(i,graph)
	{
	var s = sigma(i,graph._z.coef,1);
	var y = vrecords[i][graph.ivalue1];
	var d1 = y==0 ? 0 : y*Math.log(s);
	var d2 = y==1 ? 0 : (1-y)*Math.log(1-s);
	var d = Math.sqrt(-2*(d1+d2));
	if(y!=1) d = -d;
	return Math.round(d*PREC)/PREC;	
	}

	//-----------------------------------------------------------

	function createPearson(i,graph)
	{
	var s = sigma(i,graph._z.coef,1);
	var y = vrecords[i][graph.ivalue1];
	var r = (y-s)/Math.sqrt(s*(1-s));
	return Math.round(r*PREC)/PREC;	
	}

	//-----------------------------------------------------------

	function createCook(i,graph)
	{
	if(!recordMatch(i,graph)) return void 0;

	var pe = createPearson(i,graph);
	var ha = graph._z.hatvalues[i];
	var cook = pe*pe*ha/((1-ha)*(1-ha));
	cook /= graph._z.coef.length;
	return Math.round(cook*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function createHat(i,graph)
	{
	if(!recordMatch(i,graph)) return void 0;
	var ha = graph._z.hatvalues[i];	
	return Math.round(ha*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function norm(g)
	{
	var n = g.length;
	var s =0;
	for(var j=0;j<n;j++)
		s += g[j]*g[j];
	return Math.sqrt(s);
	}

	//-----------------------------------------------------------

	function gradient(coef)
	{
	var n = coef.length;
	var g = vector(n);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var yi = (vrecords[i][graph.ivalue1] == 1 ) ? 1 : -1;
		var si = sigma(i,coef,yi);
		for(var j=0;j<n;j++)
			{
			var x = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			g[j] += (1-si)*yi*x;
			}
		}
	return g;
	}

	//-----------------------------------------------------------

	function sigma(i,coef,y)
	{
	var n = coef.length;
	var s = 0;
	for(var j=0;j<n;j++)
		{
		var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
		s += coef[j]*xj;
		}
	s *= y;
	var t = 1/(1+Math.exp(-s));
	return t;
	}

	//-----------------------------------------------------------

	function covariance(n)
	{
	var H = matrix(n,n);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		for(var j=0;j<n;j++)
			{
			var xj = j==0? 1 :vrecords[i][graph.ivalues[j-1]];
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				H[j][k] += xj*xk/4;
				}
			}
		}
	return H;
	}

	//-----------------------------------------------------------

	function hatvalues(n)
	{
	var M = matrix(n,n);

	for(var i=0;i<vrecords.length;i++)		
		{
		if(!recordMatch(i,graph)) continue;
		var l = sigma(i,coef,1);
		for(var j=0;j<n;j++)
			{	
			var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				M[j][k] += l*(1-l)*xj*xk;
				}
			}
		}

	var I = invM(M);

	var hat = vector(vrecords.length);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var s = 0;
		for(var j=0;j<n;j++)
			{
			var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			var s = 0;
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				s += I[j][k]*xk;
				}
			hat[i] += xj*s;
			}
		}
	
	for(var i=0;i<vrecords.length;i++)
		{
		var l = sigma(i,coef,1);
		hat[i] *= l*(1-l);
		}

	return hat;
	}

	//--------------------------------------------------------------

}

//*********************************************************************

function computeRegresLogistic2(graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalues.length<1) return;

var i1 = graph.ivalue1;
var i0 = graph.ivalue1+1;
if(i0>=values.length) 
	{
	graph.error = "No variable for counting failures";
	return;
	}

// check data
var nr = 0;
var nnr = 0;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	nnr++;
	var n1 = vrecords[i][i1];
	var n0 = vrecords[i][i0];	
	if(n1<0) { graph.error = "Negative count of successes"; return; }
	if(n0<0) { graph.error = "Negative count of failures"; return; }
	nr += n1+n0;
	}


var n = graph.ivalues.length+1;

var coef = vector(n);
fillV(coef,0.1);


// Boehning's methd

var H = covariance(n);
var I = ginv(H);

for(var iter=0;iter<500;iter++)
	{
	var g = gradient(coef);

	var delta = multMV(I,g);
	var nrm = norm(delta);
	if(nrm < 1e-6) break;
	
	for(var j=0;j<n;j++)
		coef[j]  += delta[j];
	}

console.log("Nb of iterations : "+iter);

// compute standard dev
var C = matrix(n,n);
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var n1 = vrecords[i][i1];
	var n0 = vrecords[i][i0];
	var n10 = n1+n0;
	var s = sigma(i,coef,1);
	var a = s*(1-s);
	for(var j=0;j<n;j++)
		{
		var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
		for(var k=0;k<n;k++)
			{
			var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
			C[j][k] += a*xj*xk*(n0+n1);
			}
		}
	}

I = ginv(C);

var stddev = new Array(n);
var zvalues = new Array(n);
var pvalues = new Array(n);
for(var j=0;j<n;j++)
	{
	stddev[j] = Math.sqrt(I[j][j]);
	zvalues[j] = coef[j]/stddev[j];
	pvalues[j] = 2-2*pnorm(Math.abs(zvalues[j]))
	}

// compute deviance and residuals

var deviance = 0;
var nnr = 0;
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;		
	var n1 = vrecords[i][i1];
	var n0 = vrecords[i][i0];
	var nt = n0+n1;
	var s = sigma(i,coef,1);	

	var s1 = n1==0 ? 0 : n1*Math.log(n1/(s*nt));
	var s0 = n0==0 ? 0 : n0*Math.log(n0/(nt-s*nt));
	
	deviance += s1;
	deviance += s0;
	nnr ++;
	}
deviance *= 2;

var level = 0.05;
var df = nnr-coef.length;
var pvalue = 1-pchisq(deviance,df);
var cv = qchisq(1-level,df);


graph._z.nr = nnr;
graph._z.coef = coef;
graph._z.stddev = stddev;
graph._z.zvalues = zvalues;
graph._z.pvalues = pvalues;
graph._z.deviance = deviance;
graph._z.level = level;
graph._z.df = df;
graph._z.pvalue = pvalue;
graph._z.cv = cv;

graph._z.hatvalues = dispatch(hatvalues(n),graph);

graph._z.results.resid.f = createResidual;
graph._z.results.fitted.f = createFitted;
graph._z.results.predict.f = createPredict;
graph._z.results.pearson.f = createPearson;
graph._z.results.hat.f = createHat;
graph._z.results.cookd.f = createCook;

graph._z.aic = aic(coef);

console.log("aic="+graph._z.aic);

	//-----------------------------------------------------------

	function aic(coef)
	{
	var a = 0;
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var s = sigma(i,coef,1);
		var n1 = vrecords[i][graph.ivalue1];
		var n0 = vrecords[i][graph.ivalue1+1];		
		var nt = n0+n1;
		a += logamma(nt+1) - logamma(n1+1) - logamma(n0+1);
		if(n1!=0)
			a += n1*Math.log(s);
		if(n0!=0)
			a += n0*Math.log(1-s);
		}
	return -2*a +2*coef.length;
	}

	//-----------------------------------------------------------

	function norm(g)
	{
	var n = g.length;
	var s =0;
	for(var j=0;j<n;j++)
		s += g[j]*g[j];
	return Math.sqrt(s);
	}

	//-----------------------------------------------------------

	function gradient(coef)
	{
	var n = coef.length;
	var g = vector(n);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var n1 = vrecords[i][i1];
		var n0 = vrecords[i][i0];
		var si = sigma(i,coef,1);
		for(var j=0;j<n;j++)
			{
			var x = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			g[j] += (1-si)*(n1)*x;
			}
		var si = sigma(i,coef,-1);
		for(var j=0;j<n;j++)
		for(var j=0;j<n;j++)
			{
			var x = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			g[j] += (1-si)*(-n0)*x;
			}
		}
	return g;
	}

	//-----------------------------------------------------------

	function sigma(i,coef,y)
	{
	var n = coef.length;
	var s = 0;
	for(var j=0;j<n;j++)
		{
		var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
		s += coef[j]*xj;
		}
	s *= y;
	var t = 1/(1+Math.exp(-s));
	return t;
	}

	//-----------------------------------------------------------

	function covariance(n)
	{
	var H = matrix(n,n);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var n1 = vrecords[i][i1];
		var n0 = vrecords[i][i0];
		for(var j=0;j<n;j++)
			{
			var xj = j==0? 1 :vrecords[i][graph.ivalues[j-1]];
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				H[j][k] += xj*xk/4*(n0+n1);
				}
			}
		}
	return H;
	}

	//-----------------------------------------------------------

	function createResidual(i)
	{
	var n1 = vrecords[i][i1];
	var n0 = vrecords[i][i0];
	var nt = n1+n0;
	
	var s = sigma(i,coef,1);	
	var s1 = n1==0 ? 0 : n1*Math.log(n1/(s*nt));
	var s0 = n0==0 ? 0 : n0*Math.log(n0/(nt-s*nt));

	var resid = Math.sqrt(2*(s1+s0));
	if(s0>0) resid = -resid;
	return Math.round(resid*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function createPredict(i)
	{
	var n = coef.length;
	var s = 0;
	for(var j=0;j<n;j++)
		{
		var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
		s += coef[j]*xj;
		}
	return Math.round(s*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function createFitted(i,graph)
	{
	var f = sigma(i,graph._z.coef,1);
	return Math.round(f*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function createPearson(i,graph)
	{
	var y = vrecords[i][graph.ivalue1];
	var s = sigma(i,graph._z.coef,1);
	var n = vrecords[i][graph.ivalue1]+vrecords[i][graph.ivalue1+1];	
	var r = (y-s*n)/Math.sqrt(n*s*(1-s));
	return Math.round(r*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function createHat(i,graph)
	{
	if(!recordMatch(i,graph)) return void 0;
	return Math.round(graph._z.hatvalues[i]*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function createCook(i,graph)
	{
	if(!recordMatch(i,graph)) return 0;

	var pe = createPearson(i,graph);
	var ha = graph._z.hatvalues[i];
	var cook = pe*pe*ha/((1-ha)*(1-ha));
	cook /= graph._z.coef.length;
	return Math.round(cook*PREC)/PREC;
	}

	//-----------------------------------------------------------

	function hatvalues(n)
	{
	var M = matrix(n,n);

	for(var i=0;i<vrecords.length;i++)		
		{
		if(!recordMatch(i,graph)) continue;
		var l = sigma(i,coef,1);
		var nt = vrecords[i][graph.ivalue1]+vrecords[i][graph.ivalue1+1];
		l = nt*l*(1-l);	
		for(var j=0;j<n;j++)
			{	
			var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				M[j][k] += l*xj*xk;
				}
			}
		}

	var I = invM(M);

	var hat = vector(vrecords.length);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var s = 0;
		for(var j=0;j<n;j++)
			{
			var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			var s = 0;
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				s += I[j][k]*xk;
				}
			hat[i] += xj*s;
			}
		}
	
	for(var i=0;i<vrecords.length;i++)
		{
		var l = sigma(i,coef,1);
		var nt = vrecords[i][graph.ivalue1]+vrecords[i][graph.ivalue1+1];
		l = nt*l*(1-l);	
		hat[i] *= l;
		}

	return hat;
	}

	//--------------------------------------------------------------

}

//*********************************************************************

function computeRegresPoisson(graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalues.length<1) return;

// check data
var nr = 0;
for(var i=0;i<vrecords.length;i++)
	{	
	if(!recordMatch(i,graph)) continue;
	nr++;
	var y = vrecords[i][graph.ivalue1];
	if(y<0) { graph.error = "Negative response value(s)"; return; }
	if(y!=Math.floor(y)) { graph.error = "Non integer response value(s)"; return; }
	}

//
var n = 1 + graph.ivalues.length;

var coef = vector(n);
fillV(coef,0.1);


for(var iter=0;iter<50;iter++)
	{
	var g = gradient(coef);
	
	var C = covariances(coef);

	var I = ginv(C);

	var b = multMV(I,g);
	var nrm = norm(b);
	if(nrm < 1e-8) break;

	for(var j=0;j<n;j++)
		coef[j] += b[j];
	}


graph._z.niter = iter;

var stddev = new Array(n);
var zvalues = new Array(n);
var pvalues = new Array(n);

for(var j=0;j<n;j++)
	{	
	stddev[j] = Math.sqrt(I[j][j]);
	zvalues[j] = coef[j]/stddev[j];
	pvalues[j] = 2-2*pnorm(Math.abs(zvalues[j]))
	}	

	
// compute deviance and dispersion

var s1 = 0;
var s2 = 0;
var phi = 0;
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	var y = vrecords[i][graph.ivalue1];
	var l = lambda(i,coef);		
	if(y!=0)
		s1 += y*Math.log(y/l);
	s2 += y-l	;
	phi += (y-l)*(y-l)/l;
	}
var deviance = 2*(s1-s2);
phi = phi/(vrecords.length-n+1);

var level = 0.05;
var df = nr-coef.length;
var pvalue = 1-pchisq(deviance,df);
var cv = qchisq(1-level,df);

graph._z.nr = nr;
graph._z.coef = coef;
graph._z.stddev = stddev;
graph._z.zvalues = zvalues;
graph._z.pvalues = pvalues;
graph._z.deviance = deviance;
graph._z.df = df;

graph._z.phi = phi;

graph._z.hatvalues = dispatch(hatvalues(n),graph);

graph._z.level = level;
graph._z.pvalue = pvalue;
graph._z.cv = cv;

graph._z.aic = aic(coef);

graph._z.results.fitted.f = createFitted;
graph._z.results.resid.f = createResidual;
graph._z.results.predict.f = createPredict;
graph._z.results.hat.f = createHat;
graph._z.results.pearson.f = createPearson;
graph._z.results.cookd.f = createCook;

console.log(graph._z);

	//--------------------------------------------------------------

	function aic(coef)
	{
	var a = 0;
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var l = lambda(i,coef);
		var y = vrecords[i][graph.ivalue1];
		a += y*Math.log(l) - l;
		var t = 0;
		for(var j=1;j<=y;j++)
			a -= Math.log(j);
		}
	return -2*a+2*coef.length;
	}

	//--------------------------------------------------------------

	function createPearson(i,graph)
	{
	var y = vrecords[i][graph.ivalue1];
	var l = lambda(i,graph._z.coef);
	var r = (y-l)/Math.sqrt(l);
	return Math.round(r*PREC)/PREC;
	}

	//--------------------------------------------------------------


	function createHat(i,graph)
	{
	if(!recordMatch(i,graph)) return void 0;
	return Math.round(graph._z.hatvalues[i]*PREC)/PREC;
	}

	//--------------------------------------------------------------

	function createPredict(i,graph)
	{
	var n = graph._z.coef.length;
	var s = graph._z.coef[0];
	for(var j=1;j<n;j++)
		s += graph._z.coef[j]*vrecords[i][graph.ivalues[j-1]];
	return Math.round(s*PREC)/PREC;
	}

	//--------------------------------------------------------------

	function createFitted(i,graph)
	{
	var l = lambda(i,graph._z.coef);		
	return Math.round(l*PREC)/PREC;
	}

	//--------------------------------------------------------------

	function createResidual(i,graph)
	{
	var y = vrecords[i][graph.ivalue1];
	var l = lambda(i,graph._z.coef);		
	var s1 = y==0 ? 0 : y*Math.log(y/l);
	var s2 = y-l	;
	var resid = Math.round(Math.sqrt(2*(s1-s2))*PREC)/PREC;
	return s2>0 ? resid : -resid;
	}

	//--------------------------------------------------------------

	function createCook(i,graph)
	{
	if(!recordMatch(i,graph)) return void 0;

	var pe = createPearson(i,graph);
	var ha = graph._z.hatvalues[i];
	var n = graph._z.coef.length;
	var r = ha/((1-ha)*(1-ha))*pe*pe/n;
	return Math.round(r*PREC)/PREC;
	}

	//--------------------------------------------------------------

	function gradient(coef)
	{	
	var n = coef.length;
	var g = vector(n);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var y = vrecords[i][graph.ivalue1];

		var l = lambda(i,coef)
		g[0] += (y-l);
		for(var j=1;j<n;j++)
			g[j] += vrecords[i][graph.ivalues[j-1]]*(y-l);
		}
	return g;
	}

	//--------------------------------------------------------------

	function norm(g)
	{
	var s = 0;
	for(var i=0;i<g.length;i++)
		s += g[i]*g[i];
	return Math.sqrt(s);
	}

	//--------------------------------------------------------------

	function lambda(i,coef)
	{
	var n = coef.length;
	var s = coef[0];
	for(var j=1;j<n;j++)
		s += coef[j]*vrecords[i][graph.ivalues[j-1]];
	return Math.exp(s);
	}

	//--------------------------------------------------------------

	function covariances(coef)
	{	
	var n = coef.length;
	var C = matrix(n,n);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var li = lambda(i,coef);
		for(var j=0;j<n;j++)
			{		
			var vj= j==0 ? 1 :vrecords[i][graph.ivalues[j-1]];
			for(var k=0;k<n;k++)
				{
				var vk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				C[j][k] += vj*vk*li;
				}
			}	
		}

	return C;
	}

	//--------------------------------------------------------------

	function hatvalues(n)
	{
	var M = matrix(n,n);

	for(var i=0;i<vrecords.length;i++)		
		{
		if(!recordMatch(i,graph)) continue;
		var l = lambda(i,coef);
		for(var j=0;j<n;j++)
			{	
			var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				M[j][k] += l*xj*xk;
				}
			}
		}

	var I = invM(M);

	var hat = vector(vrecords.length);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var s = 0;
		for(var j=0;j<n;j++)
			{
			var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			var s = 0;
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				s += I[j][k]*xk;
				}
			hat[i] += xj*s;
			}
		}
	
	for(var i=0;i<vrecords.length;i++)
		hat[i] *= lambda(i,coef);

	return hat;
	}

	//--------------------------------------------------------------

}

//*********************************************************************

function computeRegresNegbin(graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalues.length<1) return;

// check data
var nr = 0;
for(var i=0;i<vrecords.length;i++)
	{	
	if(!recordMatch(i,graph)) continue;
	nr++;
	var y = vrecords[i][graph.ivalue1];
	if(y<0) { graph.error = "Negative response value(s)"; return; }
	if(y!=Math.floor(y)) { graph.error = "Non integer response value(s)"; return; }
	}

//
var n = 1 + graph.ivalues.length;

var ka = 0;

var beta = vector(n);
//fillV(beta,0.1);

var H = matrix(n,n);
var g = vector(n);

// STEP 1 , estimate starting beta value

for(var iter=0;iter<50;iter++)
	{
	gradienta(g,beta,ka);
	hessiana(H,beta,ka);
	var I = powerM(H,-1);
	var delta = multMV(I,g);
	var nrm = norm(delta);
	if(nrm<1e-8) break;
	for(var j=0;j<beta.length;j++)
		beta[j] -= delta[j];	
	}


var betastart = copyV(beta);

// STEP 2 , estimate starting ka value


fillV(beta,0);
beta[0] = 1;

for(var iter=0;iter<50;iter++)
	{
	var g = gradientb(beta,ka);	
	var h = hessianb(beta,ka);
	var delta = g/h;
	var nrm = Math.abs(delta);
	if(nrm<1e-8) break;	
	ka -= delta;
	}



// STEP 3 , estimate both paramters


var H = matrix(n+1,n+1);
var g = vector(n+1);
var h = vector(n);

beta = copyV(betastart);

for(var iter=0;iter<50;iter++)
	{
	gradienta(g,beta,ka);
	g[n] = gradientb(beta,ka);

	hessiana(H,beta,ka);
	H[n][n] = hessianb(beta,ka);
	hessianc(h,beta,ka);
	for(var j=0;j<n;j++)
		H[j][n] = H[n][j] = h[j];

	var I = powerM(H,-1);
	var delta = multMV(I,g);
	var nrm = norm(delta);
	if(nrm<1e-8) break;

	for(var j=0;j<n;j++)
		beta[j] -= delta[j];
	ka -= delta[n];
	}

var alpha = Math.exp(ka);

var stddev = new Array(n+1);
var zvalues = new Array(n);
var pvalues = new Array(n);


for(var j=0;j<n;j++)
	{
	stddev[j] = Math.sqrt(Math.abs(I[j][j]));
	zvalues[j] = beta[j]/stddev[j];
	pvalues[j] = 2-2*pnorm(Math.abs(zvalues[j]))
	}


// compute deviance

var deviance = dev(beta,ka);

var level = 0.05;
var df = nr-beta.length;
var pvalue = 1-pchisq(deviance,df);
var cv = qchisq(1-level,df);


graph._z.nr = nr;
graph._z.coef = beta;
graph._z.beta = beta;
graph._z.ka = ka;
graph._z.stddev = stddev;
graph._z.zvalues = zvalues;
graph._z.pvalues = pvalues;
graph._z.deviance = deviance;

graph._z.level = level;
graph._z.df = df;
graph._z.pvalue = pvalue;
graph._z.cv = cv;

graph._z.hatvalues = dispatch(hatvalues(beta,ka),graph);

graph._z.aic = aic(beta,ka);

graph._z.results.fitted.f = createFitted;
graph._z.results.predict.f = createPredict;
graph._z.results.resid.f = createResid;
graph._z.results.pearson.f = createPearson;
graph._z.results.hat.f = createHat;
graph._z.results.cookd.f = createCook;


	//--------------------------------------------------------------

	function createHat(i,graph)
	{
	if(!recordMatch(i,graph)) return void 0;
	var h = graph._z.hatvalues[i];
	return Math.round(h*PREC)/PREC;
	}

	//--------------------------------------------------------------

	function createPredict(i,graph)
	{
	var n = graph._z.beta.length;
	var s = graph._z.beta[0];
	for(var j=1;j<n;j++)
		s += graph._z.beta[j]* vrecords[i][graph.ivalues[j-1]];
	return Math.round(s*PREC)/PREC;
	}

	//--------------------------------------------------------------

	function createFitted(i,graph)
	{
	var f = mu(i,graph._z.beta)
	return Math.round(f*PREC)/PREC;
	}

	//--------------------------------------------------------------

	function createResid(i,graph)	
	{
	var e = Math.exp(graph._z.ka);
	var y = vrecords[i][graph.ivalue1];
	var m = mu(i,graph._z.beta);
	s = 0;
	s -= y*Math.log(m) - (e+y)*Math.log(m+e);
	s += (y==0?0:y*Math.log(y)) - (e+y)*Math.log(y+e);
	s = Math.sqrt(2*s);
	if(y<m) s = -s;
	return Math.round(s*PREC)/PREC;
	}

	//--------------------------------------------------------------

	function createPearson(i,graph)
	{
	var y = vrecords[i][graph.ivalue1];
	var m = mu(i,graph._z.beta);
	var a = Math.exp(graph._z.ka);
	var r = (y-m)/Math.sqrt(m+m*m/a);
	return Math.round(r*PREC)/PREC;
	}

	//--------------------------------------------------------------

	function createCook(i,graph)
	{
	if(!recordMatch(i,graph)) return void 0;

	var pe = createPearson(i,graph);
	var ha = graph._z.hatvalues[i];
	var n = graph._z.beta.length;
	var r = ha/((1-ha)*(1-ha))*pe*pe/n;
	return Math.round(r*PREC)/PREC;
	}

	//--------------------------------------------------------------

	function dev(beta,ka)
	{
	var s =0;
	var e = Math.exp(ka);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var y = vrecords[i][graph.ivalue1];
		var m = mu(i,beta,ka);
		s -= y*Math.log(m) - (e+y)*Math.log(m+e);
		s += (y==0?0:y*Math.log(y)) - (e+y)*Math.log(y+e);
		}	
	return 2*s;
	}

	//--------------------------------------------------------------

	function gradienta(g,beta,ka)
	{
	var n = beta.length;
	for(var j=0;j<n;j++)
			g[j] = 0;

	var e = Math.exp(ka);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var y = vrecords[i][graph.ivalue1];	
		var m = mu(i,beta,ka);		
		var c = e*(y-m)/(m+e);
		g[0] += c;
		for(var j=1;j<n;j++)
			g[j] += c*vrecords[i][graph.ivalues[j-1]];		
		}
	return g;
	}

	//--------------------------------------------------------------

	function mu(i,beta)
	{
	var n = beta.length;
	var s = beta[0];
	for(var j=1;j<n;j++)
		s += beta[j]* vrecords[i][graph.ivalues[j-1]];
	return Math.exp(s);
	}

	//--------------------------------------------------------------

	function hessiana(H,beta,ka)
	{
	var n = beta.length;
	for(var j=0;j<n;j++)
		for(var k=0;k<n;k++)
			H[j][k] = 0;

	var e = Math.exp(ka);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var y = vrecords[i][graph.ivalue1];	
		var m = mu(i,beta,ka);		
		var c = e*m*(e+y)/((m+e)*(m+e));

		for(var j=0;j<n;j++)
			{
			var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];	
				H[j][k] -= xj*xk*c;			
				}
			}
		}
	}

	//--------------------------------------------------------------

	function gradientb(beta,ka)
	{
	var g = 0;	
	var e = Math.exp(ka);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var m = mu(i,beta,ka);		
		var y = vrecords[i][graph.ivalue1];
		var t = 0;
		for(var j=0;j<y;j++)
			t += 1/(e+j);
		g += e*(t+1+ka-(e+y)/(e+m)-Math.log(e+m));	
		}
	return g;
	}

	//--------------------------------------------------------------

	function hessianb(beta,ka)
	{
	var h = 0;
	var e = Math.exp(ka);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;		
		var m = mu(i,beta,ka);		
		var y = vrecords[i][graph.ivalue1];
		var t = 0;
		var tt = 0;
		for(var j=0;j<y;j++)
			{
			t += 1/(e+j);
			tt += 1/((e+j)*(e+j));
			}
		h += e*(t+1+ka-(e+y)/(e+m)-Math.log(e+m)-e*tt+1-e*(m-y)/((m+e)*(m+e))-e/(m+e));
		}
	return h;
	}

	//--------------------------------------------------------------

	function hessianc(h,beta,ka)
	{
	var n = beta.length;
	for(var j=0;j<n;j++)
		h[j] = 0;
		
	var e = Math.exp(ka);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var y = vrecords[i][graph.ivalue1];
		var m = mu(i,beta,ka);
		var c = e*m*(y-m)/((m+e)*(m+e));
		h[0] += c;
		for(var j=1;j<n;j++)
			h[j] += c*vrecords[i][graph.ivalues[j-1]];
		}
	}

	//--------------------------------------------------------------

	function norm(g)
	{
	var s = 0;
	for(var i=0;i<g.length;i++)
		s += g[i]*g[i];
	return Math.sqrt(s);
	}

	//--------------------------------------------------------------

	function hatvalues(beta,ka)
	{
	// TODO
	var M = matrix(n,n);

	var a = Math.exp(ka);

	for(var i=0;i<vrecords.length;i++)		
		{
		if(!recordMatch(i,graph)) continue;
		var m = mu(i,beta);
		m = m/(1+m/a);
		for(var j=0;j<n;j++)
			{	
			var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				M[j][k] += m*xj*xk;
				}
			}
		}

	var I = powerM(M,-1);

	var hat = vector(vrecords.length);

	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var s = 0;
		for(var j=0;j<n;j++)
			{
			var xj = j==0 ? 1 : vrecords[i][graph.ivalues[j-1]];
			var s = 0;
			for(var k=0;k<n;k++)
				{
				var xk = k==0 ? 1 : vrecords[i][graph.ivalues[k-1]];
				s += I[j][k]*xk;
				}
			hat[i] += xj*s;
			}
		}
	
	for(var i=0;i<vrecords.length;i++)
		{
		var m = mu(i,beta);		
		m = m/(1+m/a);
		hat[i] *= m;
		}

	return hat;
	}

	//--------------------------------------------------------------

	function aic(beta,ka)
	{
	var s = 0;
	var th = Math.exp(ka);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;	
		var m = mu(i,beta);
		var y = vrecords[i][graph.ivalue1];
		s += logamma(th+y)
		s -= logamma(th);
		s -= logamma(y+1);
		s += th*Math.log(th);
		s += y*(Math.log(m+(y==0?1:0)));
		s -= (th+y)*Math.log(th+m);
		}	
	return -2*s+2*(beta.length+1);
	}

	//--------------------------------------------------------------

}

//*********************************************************************

function computeRegresLars(graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalues.length<1) return;

var nr = 0;

var n = graph.ivalues.length;

var ymean = 0;
var xmean = vector(n);
var xstd = vector(n);
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;	
	nr++;
	for(var j=0;j<n;j++)
		{
		var xj = vrecords[i][graph.ivalues[j]];
		xmean[j] += xj;	
		xstd[j] += xj*xj;
		}
	var y = vrecords[i][graph.ivalue1];
	ymean += y;
	}

if(nr==0) nr=1;

ymean /= nr;
for(var j=0;j<n;j++)
	{
	xmean[j] /= nr;
	xstd[j] = Math.sqrt(xstd[j]/nr- xmean[j]*xmean[j]);
	}

var betas = [];
var actions = [];
var weights = [];
var residuals = [];

var mu = vector(nr);
var beta = vector(n);

var aset = [];

var sign = vector(n);
fillV(sign,1);

residuals.push(resid(mu));

for(var iter=0;iter<999;iter++)
	{	

	var c = correlations(mu,n);

	for(var j=0;j<n;j++)
		sign[j] = c[j]>=0 ? 1 : -1;

	var cmax = maxabs(aset,c);
	actions.push(indexset(aset,c,cmax));

	var H = submatrix(aset,sign);
	
	var I = powerM(H,-1);

	var aa = norm(I);

	var w = weight(I,aa);

	var u = produ(w,aset,nr,sign);

	// verif u
	//verifu(u,aset,sign);

	var a = proda(u,n);

	var g = aset.length==n ? cmax/aa : mingamma(c,cmax,a,aa,aset);

	for(var i=0;i<mu.length;i++)
		mu[i] += g*u[i];

	residuals.push(resid(mu));

	updatebeta(beta,w,aset,sign,xmean,xstd,g);

	weights.push(w);
	betas.push(clone(beta));

	if(aset.length==n) break;
	}


graph._z.weights = weights;
graph._z.betas = betas;
graph._z.residuals = residuals;
graph._z.actions = actions;

//console.log(graph._z);

	function verifbeta(beta,mu)
	{
	var n = beta.length;
	var nr = mu.length;
	var nu = vector(nr);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		for(var j=0;j<n;j++)
			{
			var xj = (vrecords[i][graph.ivalues[j]]-xmean[j])/xstd[j];
			nu[i] += xj*beta[j];
			}
		}
	}

	function updatebeta(b,w,aset,sign,xmean,xstd,g)
	{
	var n = b.length;
	for(var jj=0;jj<aset.length;jj++)
		{
		var j = aset[jj];
		b[j] += g*w[jj]*sign[j]/xstd[j];
		}
				
	}


	function verifu(u,aset,sign)
	{	
	var n = aset.length;	
	var v = vector(n);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		for(var jj=0;jj<n;jj++)
			{
			var j = aset[jj];
			var xj = sign[j]*(vrecords[i][graph.ivalues[j]]-xmean[j])/xstd[j];
			v[jj] += u[i]*xj;
			}
		}

	var s = 0;
	for(var i=0;i<u.length;i++)
		s += u[i]*u[i];
	}

	function mingamma(c,cmax,a,aa,aset)
	{
	var b = Number.MAX_VALUE;
	var n = c.length;
	for(var j=0;j<n;j++)
		{	
		if(indexOf(j,aset)>=0) continue;
		//if(c[j]>0)
			{
			var bb = (cmax-c[j])/(aa-a[j]);
			if(bb>0) if(bb<b) b = bb;
			}
		//else
			{
			var bb = (cmax+c[j])/(aa+a[j]);
			if(bb>0) if(bb<b) b = bb;
			}
		}
	return b;
	}

	function norm(I)
	{
	var n = I.length;
	var s = 0;
	for(var j=0;j<n;j++)
		for(var k=0;k<n;k++)
			s += I[j][k];
	return 1/Math.sqrt(s);
	}

	function proda(u,n)
	{
	var a = vector(n);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		for(var j=0;j<n;j++)
			{
			var xj = (vrecords[i][graph.ivalues[j]]-xmean[j])/xstd[j];
			a[j] += xj*u[i];
			}
		}
	return a;
	}

	function produ(w,aset,nr,sign)
	{
	var n = aset.length;
	var u = vector(nr);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		for(var jj=0;jj<n;jj++)
			{
			var j = aset[jj];
			var xj = sign[j]*(vrecords[i][graph.ivalues[j]]-xmean[j])/xstd[j];
			u[i] += xj*w[jj];
			}
		}
	return u;
	}

	function weight(I,aa)
	{
	var n = aset.length;
	var w = vector(n);

	for(var j=0;j<n;j++)
		for(var k=0;k<n;k++)
			w[j] += I[j][k];

	for(var j=0;j<n;j++)
		w[j] *= aa;

	return w;
	}

	
	function correlations(mu,n)
	{
	var c = vector(n);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		var y = vrecords[i][graph.ivalue1]-ymean;
		for(var j=0;j<n;j++)
			{
			var xj = (vrecords[i][graph.ivalues[j]]-xmean[j])/xstd[j];
			c[j] += xj*(y-mu[i]);	
			}
		}	
	return c;
	}

	function resid(mu)
	{
	var residuals = 0;
	for(var i=0;i<vrecords.length;i++)
		{	
		if(!recordMatch(i,graph)) continue;
		var y = vrecords[i][graph.ivalue1]-ymean;
		residuals += (y-mu[i])*(y-mu[i]);
		}
	return residuals;
	}

	function maxabs(aset,c)
	{
	var n = c.length;
	cmax = 0;
	for(var j=0;j<n;j++)
		{
		if(indexOf(j,aset)>=0) continue;
		if(Math.abs(c[j])>cmax)
			cmax = Math.abs(c[j]);
		}
	return cmax;
	}

	function indexset(aset,c,cmax)
	{
	var n = c.length;
	var k = -1;
	for(var j=0;j<n;j++)
		{
		if(indexOf(j,aset)>=0) continue;
		if(Math.abs(c[j])==cmax)
			{
			aset.push(j);
			k = j;
			}
		}
	return k;
	}

	function submatrix(aset,sign)
	{
	var n = aset.length;
	var M = matrix(n,n);
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		for(var jj=0;jj<n;jj++)
			{
			var j = aset[jj];
			var xj = sign[j]*(vrecords[i][graph.ivalues[j]]-xmean[j])/xstd[j];
			for(var kk=0;kk<n;kk++)
				{
				var k = aset[kk];
				var xk = sign[k]*(vrecords[i][graph.ivalues[k]]-xmean[k])/xstd[k];
				M[jj][kk] += xj*xk;
				}
			}
		}
	return M;
	}

}

//*********************************************************************

function drawRegresIcon(ctx,x,y)
	{
	ctx.textAlign = "center";
	var font = ctx.font;
	ctx.font = "18px helvetica";
	ctx.fillStyle = "#000000";
	ctx.fillText("R",x+10,y+17);
	ctx.font = font;
	}

//*********************************************************************

function drawRegresGraph(ctx,graph)
{

graph._z.results.fitted.x = 0;
graph._z.results.resid.x = 0;
graph._z.results.predict.x = 0;
graph._z.results.stud.x = 0;
graph._z.results.cookd.x = 0;
graph._z.results.hat.x = 0;

switch(graph.regr)
	{	
	case REGR.ONE: drawRegresPoly(ctx,graph); break;
	case REGR.TWO: drawRegresPoly(ctx,graph); break;	
	case REGR.THREE: drawRegresPoly(ctx,graph); break;
	case REGR.POISSON: drawRegresPoisson(ctx,graph); break;
	case REGR.LOGIS : drawRegresPoisson(ctx,graph); break;	
	case REGR.LOGIS2: drawRegresPoisson(ctx,graph); break;
	case REGR.NEGBIN: drawRegresPoisson(ctx,graph); break;
	case REGR.LARS: drawRegresLars(ctx,graph); break;
	}
}

//*********************************************************************

function drawRegresPoly(ctx,graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalues.length<1) return;

var option = getGraphOption(graph);

var list = graph._z.list;
var A = graph._z.A;
var D = graph._z.D;
var F = graph._z.F;
var cv = graph._z.cv;
var pvalue = graph._z.pvalue;
var dof1 = graph._z.dof1;
var dof2 = graph._z.dof2;
var max = graph._z.max;
var pvalues = graph._z.pvalues;

var sigma = Math.sqrt(graph._z.scr/dof2);

ctx.fillStyle = "#000000";
ctx.strokeStyle = "#000000";
ctx.textAlign = "left"
ctx.lineWidth = 1

var y = graph.y+60;

	if(option==0)
		{		
		ctx.textAlign = "left";
		ctx.fillText("Observations",graph.x+30,y);
		ctx.textAlign = "right";
		ctx.fillText(""+graph._z.nr,graph.x+240,y);

		y += 20;
		ctx.textAlign = "left";
		ctx.fillText("Deviance",graph.x+30,y);
		ctx.textAlign = "right";
		var z = Math.round(graph._z.scr*PREC)/PREC;
		ctx.fillText(""+z,graph.x+240,y);
	
		if(graph._z.aic)
			{
			y += 20;
			ctx.textAlign = "left";
			ctx.fillText("AIC",graph.x+30,y);
			ctx.textAlign = "right";
			var z = Math.round(graph._z.aic*PREC)/PREC;
			ctx.fillText(""+z,graph.x+240,y);
			}
	
		y += 20;
		ctx.textAlign = "left";
		ctx.fillText("Determ. coef. R\u00B2",graph.x+30,y);
		ctx.textAlign = "right";
		var r2 = graph._z.sce/graph._z.sct;
		var z = Math.round(r2*10000)/10000;
		ctx.fillText(""+z,graph.x+240,y);

		var sigma = Math.sqrt(graph._z.scr/(graph._z.nr-graph.ivalues.length-1));
		y += 20;
		ctx.textAlign = "left";
		ctx.fillText("Error \u03C3",graph.x+30,y);
		ctx.textAlign = "right";	
		var z = Math.round(sigma*10000)/10000;
		ctx.fillText(""+z,graph.x+240,y);	

		y += 20;
		ctx.textAlign = "left";
		ctx.fillText("Degrees of freedom",graph.x+30,y);
		ctx.textAlign = "right";
		ctx.fillText(dof1+","+dof2,graph.x+240,y);

		y += 20;
		ctx.textAlign = "left";
		ctx.fillText("Critical value C",graph.x+30,y);
		ctx.textAlign = "right"
		var z = Math.round(cv*10000)/10000;
		ctx.fillText(""+z,graph.x+240,y);
		ctx.fillText("(\u03B1="+0.05+")",graph.x+350,y);


		y += 20;
		ctx.textAlign = "left";
		ctx.fillText("Test statistic F",graph.x+30,y);
		ctx.textAlign = "right"
		var z = Math.round(F*10000)/10000;	
		ctx.fillText(""+z,graph.x+240,y);
		z = Math.round(pvalue*10000)/10000;
		ctx.fillText("(pvalue="+z+")",graph.x+350,y);

		y += 30;
		ctx.textAlign = "left";
		ctx.fillStyle = "#FF0000";
		if(pvalue<0.05)	
			multiText(ctx,["#000000","F > C : the model ",
				"#FF0000" ," does not fit"],graph.x+30,y);
		else
			multiText(ctx,["#000000","F < C : the model ",
				"#FF0000" ," fits"],graph.x+30,y);

		y += 30;
		max = Math.min(max,Math.max(F,cv)*1.2);
		drawFisherCurve(ctx,graph,y,dof1,dof2,0,max,F,"F",cv);

		}

	if(option==1)
		{
		// COEFFICIENTS

		ctx.translate(0,-graph.yshift);

		ctx.textAlign = "left";
		ctx.fillText("Term",graph.x+30,y);

		var dx = graph.ivalues.length*25+100;
		ctx.textAlign = "right";
		ctx.fillText("Coef.",graph.x+dx+30,y);

		ctx.fillText("Std dev",graph.x+dx+120,y);

		ctx.fillText("T",graph.x+dx+200,y);
		ctx.fillText("p-value",graph.x+dx+280,y);

		ctx.fillRect(graph.x+30,y+10,dx+280,2)

		y += 30;

		var t;
		for(var k=0;k<list.length;k++)
			{
			for(var j=0;j<list[k].length;j++) 
				{
				switch(list[k][j])
					{
					case 0 : t = ""; break;
					case 1 : t = "x"+(j+1); break;
					case 2 : t = "x"+(j+1)+"\u00B2"; break;
					case 3 : t = "x"+(j+1)+"\u00B3"; break;
					}
				ctx.textAlign = "left";
				ctx.fillText(t,graph.x+30+j*25,y);
				}
			ctx.textAlign = "right";
			var a = Math.round(A[k]*PREC)/PREC;
			ctx.fillText(""+a,graph.x+30+dx,y);

			var std = Math.sqrt(D[k]*sigma*sigma);
			z = Math.round(std*PREC)/PREC;	
			ctx.fillText(""+z,graph.x+dx+120,y);

			var z = Math.round(A[k]/std*PREC)/PREC;
			ctx.fillText(""+z,graph.x+dx+200,y);
		
			z = Math.round(pvalues[k]*PREC)/PREC;
			ctx.fillText(""+z,graph.x+dx+280,y);

			y += 20;
			}
		ctx.translate(0,graph.yshift);

		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(graph.x+graph.w-130,graph.y+graph.hbar+1,129,
			30+graph.ivalues.length*25);

		ctx.fillStyle = "#000000";
		ctx.textAlign = "right";
		for(var j=0;j<graph.ivalues.length;j++)
			ctx.fillText("x"+(j+1),graph.x+graph.w-110,graph.y+graph.hbar+19+j*25);
		}

	if(option==2)
		{			
		var xmed = graph.x+graph.w/2;
		for(var key in graph._z.results)
			{
			var arrow = graph._z.results[key];
			if(!arrow.f) continue;		
			y += 30;
			link(arrow.t,xmed,y,key);		
			}
		}

	function link(title,x,y,key)
	{
	ctx.textAlign = "left";
	ctx.fillStyle = "#000000";
	ctx.fillText(title,x-90,y);
	ctx.fillStyle = BLUE;
	drawRightArrow(ctx,x+90,y-5);
	
	graph._z.results[key].x = x+90-graph.x;
	graph._z.results[key].y = y-5-graph.y;

	if(graph._z.overresult==key)
		{
		ctx.fillStyle = GRAY;
		ctx.beginPath();
		ctx.arc(x+88,y-5,10,0,Math.PI*2,false);
		ctx.fill();
		}

	ctx.fillStyle = "#000000";
	}

}

//*********************************************************************

function drawRegresPoisson(ctx,graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalues.length<1) return;

var option = getGraphOption(graph);

ctx.fillStyle = "#000000";
ctx.strokeStyle = "#000000";
ctx.textAlign = "left"
ctx.lineWidth = 1

var nr = graph._z.nr;
var coef = graph._z.coef;
var pvalue = graph._z.pvalue;
var cv = graph._z.cv;
var df = graph._z.df;
var level = graph._z.level;
var deviance = graph._z.deviance;
var stddev = graph._z.stddev;
var zvalues = graph._z.zvalues;
var pvalues = graph._z.pvalues;

if(!coef) return;

if(option==0)

	{
	var x = graph.x+40;
	var y = graph.y+60;

	if(graph.regr==REGR.LOGIS2)
		{
		ctx.textAlign = "left";
		ctx.fillText("WARNING : ",x,y);
		y += 20;
		ctx.fillText("\""+values[graph.ivalue1]+"\" used as success count , "+
			"\""+values[graph.ivalue1+1]+"\" used as failure count",x,y);
		
		y += 30;
		}


	ctx.textAlign = "left";
	ctx.fillText("Number of observations",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+nr,x+230,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Number of parameters",x,y);
	ctx.textAlign = "right";
	ctx.fillText(""+coef.length,x+230,y);

	if(graph._z.aic)
		{
		y += 30;
		ctx.textAlign = "left";
		ctx.fillText("AIC",x,y);
		ctx.textAlign = "right";
		var z = Math.round(graph._z.aic*PREC)/PREC;
		ctx.fillText(""+z,x+230,y);
		}

	y += 30;

	ctx.textAlign = "left";
	ctx.fillText("Residual deviance D",x,y);
	ctx.textAlign = "right";
	var z = Math.round(deviance*PREC)/PREC;
	ctx.fillText(z+"",x+230,y);
	z = Math.round(pvalue*PREC)/PREC;
	ctx.fillText("(pvalue="+z+")",x+370,y);
	ctx.textAlign = "left";
	ctx.fillText("(df="+df+")",x+400,y);

	y += 20;

	ctx.textAlign = "left";
	ctx.fillText("Critical value C",x,y);
	var z = Math.round(cv*PREC)/PREC;
	ctx.textAlign = "right";
	ctx.fillText(z+"",x+230,y);
	ctx.fillText("(\u03B1="+level+")",x+370,y);

	y += 40;

	ctx.textAlign = "left";
	if(deviance<cv)	
		multiText(ctx,["#000000","D < C : the model ","#FF0000","fits"],x,y);
	else
		multiText(ctx,["#000000","D > C : the model ","#FF0000","does not fit"],x,y);

	y += 40;

	var max = Math.max(Math.abs(deviance),Math.abs(cv))*1.2;
	drawChi2Curve(ctx,graph,y,df,0,max,deviance,"D",cv);
	}

if(option==1)
	{
	var x = graph.x+40;
	var y = graph.y+graph.hbar + 60;

	ctx.textAlign = "left";
	ctx.fillText("Coefficients",x,y);
	ctx.textAlign = "right";
	ctx.fillText("Estimate",x+230,y);
	ctx.fillText("Std Err",x+310,y);
	ctx.fillText("Z value",x+390,y);
	ctx.fillText("p-value",x+470,y);

	ctx.fillRect(x,y+10,470,1);
	y += 30;

	for(var j=0;j<coef.length;j++)
		{
		ctx.textAlign = "left";
		if(j!=0)
			ctx.fillText(values[graph.ivalues[j-1]],x,y);
		ctx.textAlign = "right";
		var z = Math.round(coef[j]*PREC)/PREC;
		ctx.fillText(z+"",x+230,y);
		var z = Math.round(stddev[j]*PREC)/PREC;
		ctx.fillText(z+"",x+310,y);
		var z = Math.round(zvalues[j]*PREC)/PREC;
		ctx.fillText(z+"",x+390,y);
		var z = Math.round(pvalues[j]*PREC)/PREC;
		ctx.fillText(z+"",x+470,y);
		y += 20;
		}

	y += 20;

	if(graph.regr==REGR.NEGBIN)
		{
		ctx.textAlign = "left";
		ctx.fillText("theta",x,y);
		ctx.textAlign = "right";
		var theta = Math.exp(graph._z.ka);	
		var z = Math.round(theta*PREC)/PREC;
		ctx.fillText(""+z,x+230,y);
		}
	}

if(option==2)
	{
	var y = graph.y+60;
	var xmed = graph.x+graph.w/2;
	for(var key in graph._z.results)
		{
		var arrow = graph._z.results[key];
		if(!arrow.f) continue;		
		y += 30;
		link(arrow.t,xmed,y,key);		
		}
	}

	function link(title,x,y,key)
	{
	ctx.textAlign = "left";
	ctx.fillStyle = "#000000";
	ctx.fillText(title,x-90,y);
	ctx.fillStyle = BLUE;
	drawRightArrow(ctx,x+90,y-5);
	
	graph._z.results[key].x = x+90-graph.x;
	graph._z.results[key].y = y-5-graph.y;

	if(graph._z.overresult==key)
		{
		ctx.fillStyle = GRAY;
		ctx.beginPath();
		ctx.arc(x+88,y-5,10,0,Math.PI*2,false);
		ctx.fill();
		}

	ctx.fillStyle = "#000000";
	}

}

//*********************************************************************

function drawRegresLars(ctx,graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalues.length<1) return;

var xleft = graph.x+40;
var xright = graph.x+graph.w-150;
var ytop = graph.y+graph.hbar+50;
var ybottom = graph.y+graph.h-20;

var option = getGraphOption(graph);

var n = graph.ivalues.length;

var betas = graph._z.betas;
var asets = graph._z.asets;
var residuals = graph._z.residuals;
var actions = graph._z.actions;

if(option==0)
	{
	// summary

	var x = xleft;
	var y = ytop-graph.yshift;

	ctx.fillStyle = "#000000";
	
	ctx.textAlign = "left";
	ctx.fillText("Step",x,y);

	ctx.textAlign = "right";

	ctx.fillText("Df",x+60,y);
	ctx.fillText("Adding",x+130,y);
	ctx.fillText("RSS",x+230,y);
	ctx.fillText("R2",x+300,y);
	
	ctx.fillRect(x,y+10,300,1);

	y += 30;

	ctx.textAlign = "left";
	ctx.fillText("0",x,y);
	
	ctx.textAlign = "right";
	ctx.fillText("1",x+60,y);
	ctx.fillText(""+trunc(residuals[0]),x+230,y);

	y += 20;
	for(var iter=0;iter<n;iter++)
		{
		ctx.textAlign = "left";
		ctx.fillText(""+(iter+1),x,y);

		ctx.fillText(values[graph.ivalues[actions[iter]]],x+80,y);

		ctx.textAlign = "right";
		ctx.fillText(""+(iter+2),x+60,y);
		ctx.fillText(""+trunc(residuals[iter+1]),x+230,y);
		var r2 = 1-residuals[iter+1]/residuals[0];
		ctx.fillText(""+round(r2),x+300,y);
		
		y += 20;
		}

	}

if(option==1)
	{
	// coefficients
	
	var nb = betas.length;

	var x = xleft;
	var y = ytop-graph.yshift;

	ctx.fillStyle = "#000000";

	ctx.textAlign = "left";
	ctx.fillText("Term",x,y);
	ctx.textAlign = "right";
	ctx.fillText("Coefficient",x+300,y);

	ctx.fillRect(x,y+10,300,1);

	y += 30;

	for(var j=0;j<n;j++)
		{
		ctx.textAlign = "left";
		ctx.fillText(values[graph.ivalues[j]],x,y);
		ctx.textAlign = "right";
		ctx.fillText(""+round(betas[nb-1][j]),x+300,y);
		
		y += 20;
		}

	}

if(option==2)
	{
	// curves

	var nb = betas.length;

	var xmax = absbeta(nb-1);

	var bmax = 0;
	for(var i=0;i<betas.length;i++)
		for(var j=0;j<n;j++)
			if(Math.abs(betas[i][j])>bmax) bmax = Math.abs(betas[i][j]);	
	bmax*=1.2;
	var bmin = -bmax;
	var bscale = (ybottom-ytop)/(bmax-bmin);

	ctx.strokeStyle = "#00000";
	ctx.strokeRect(xleft,ytop,xright-xleft,ybottom-ytop);

	// vertical lines
	ctx.font = "10px helvetica";
	ctx.textAlign = "center";
	ctx.fillStyle = "#CCCCCC";
	for(var i=0;i<betas.length;i++)
		{
		var x = absbeta(i);
		x = xleft+x*(xright-xleft)/xmax;
		ctx.fillRect(x,ytop,1,ybottom-ytop);
		ctx.fillText(""+(i+1),x,ytop-3);
		}

	// curves	
	ctx.save();
	ctx.lineWidth = 2;
	ctx.textAlign = "left";
	for(var j=0;j<n;j++)
		{
		var hue = graph.hue+alternateIndex(j,n)*5/(6*n);
		ctx.strokeStyle = getColor(hue,1,0.7);
		ctx.fillStyle = getColor(hue,1,0.7);
		ctx.beginPath();
		var x = xleft;
		var y = ybottom-(0-bmin)*bscale;
		ctx.moveTo(x,y);
		for(var i=0;i<betas.length;i++)
			{
			var x = absbeta(i);
			var x = xleft+x*(xright-xleft)/xmax;
			var y = ybottom-(betas[i][j]-bmin)*bscale;
			ctx.lineTo(x,y);
			}
		ctx.stroke();
		ctx.fillText(values[graph.ivalues[j]],xright+2,y+4);
		}	
	ctx.lineWidth = 1;

	ctx.fillStyle = "#CCCCCC";
	ctx.textAlign = "center";

	ctx.fillText("\u03A3|\u03B2|",(xright+xleft)/2,ybottom+11);

	ctx.translate(xleft-5,(ybottom+ytop)/2);
	ctx.rotate(-Math.PI/2);
	ctx.fillText("Coefficients",0,0);

	ctx.restore();
	}

	function absbeta(index)
	{
	var s = 0;
	for(var j=0;j<n;j++)
		s += Math.abs(betas[index][j]);
	return s;
	}

	function trunc(x) {
		return Math.round(x);
	}

	function round(x) {		
		return Math.round(x*10000)/10000;
	}

}

//*********************************************************************

function buildRegresTable(graph)
{
if(graph.ivalue1<0) return;
if(graph.ivalues.length<1) return;

switch(graph.regr)
	{	
	case REGR.ONE: buildPolyTable(graph); break;
	case REGR.TWO: buildPolyTable(graph); break;	
	case REGR.THREE: buildPolyTable(graph); break;
	case REGR.POISSON: buildPoissonTable(graph); break;
	case REGR.LOGIS : buildPoissonTable(graph); break;	
	case REGR.NEGBIN: buildPoissonTable(graph); break;
	case REGR.LARS: buildLarsTable(graph); break;
	}

}

//*********************************************************************

function buildPolyTable(graph)
{

setTableName("Regression of "+values[graph.ivalue1]);

var row = 1;
var sigma = Math.sqrt(graph._z.scr/(graph._z.nr-graph.ivalues.length-1));

table(row,1,"Term");
table(row,2,"Coefficient");
table(row,3,"Std dev.");

var list = graph._z.list;
var A = graph._z.a;
var D = graph._z.d;

for(var k=0;k<list.length;k++)
	{
	row++;
	var t = [];
	for(var j=0;j<list[k].length;j++) switch(list[k][j])
		{
		case 1: t.push("x"+(j+1)); break;
		case 2: t.push("x"+(j+1)+"\u00B2"); break;
		case 3: t.push("x"+(j+1)+"\u00B3"); break;
		}
	table(row,1,t.join("."));
	table(row,2,Math.round(A[k]*10000)/10000);
	var std = Math.sqrt(D[k]*sigma*sigma);
	table(row,3,Math.round(std*10000)/10000);
	}


row += 2;
table(row,1,"Source");
table(row,2,"Sum of squares");
table(row,3,"DoF");

row++;
table(row,1,"Regression");
table(row,2,Math.round(graph._z.sce*10000)/10000);
table(row,3,graph._z.dof1);

var scr = graph._z.sct - graph._z.sce;
row++;
table(row,1,"Residuals");
table(row,2,Math.round(scr*10000)/10000);
table(row,3,graph._z.dof2);

row++;
table(row,1,"Total");
table(row,2,Math.round(graph._z.sct*10000)/10000);
table(row,3,graph._z.nr-1);

row++;
table(row,1,"Global results");

row++;
table(row,1,"Observations");
table(row,2,graph._z.nr);

row++;
var r2 = graph._z.sce/graph._z.sct;
table(row,1,"Determ. coef. R\u00B2");
table(row,2,Math.round(r2*10000)/10000);

row++;
table(row,1,"Error \u03C3");
table(row,2,Math.round(sigma*10000)/10000);

row++;
table(row,1,"Critical value");
table(row,2,Math.round(graph._z.cv*10000)/10000);
table(row,3,"(\u03B1="+0.05+")");

row++;
table(row,1,"Degrees of freedom");
table(row,2,graph._z.dof1+","+graph._z.dof2);

row++;
table(row,1,"Test statistic F");
table(row,2,Math.round(graph._z.f*10000)/10000);
table(row,3,"(pvalue="+Math.round(graph._z.pvalue*10000)/10000+")");

}

//*********************************************************************

function buildPoissonTable(graph)
{
var nr = graph._z.nr;
var coef = graph._z.coef;
var pvalue = graph._z.pvalue;
var cv = graph._z.cv;
var df = graph._z.df;
var level = graph._z.level;
var deviance = graph._z.deviance;
var stddev = graph._z.stddev;
var zvalues = graph._z.zvalues;
var pvalues = graph._z.pvalues;

setTableName("Regression of "+values[graph.ivalue1]);

var row = 1;
table(row,1,"Nb of observations");
table(row,2,nr);

row++;
table(row,1,"Nb of parameters");
table(row,2,coef.length);

row++;
table(row,1,"Degrees of freedom");
table(row,2,df);

row++;
table(row,1,"Residual deviance");
table(row,2,round(deviance));
table(row,3,"(pvalue="+round(pvalue)+")");

row++;
table(row,1,"Critical value");
table(row,2,round(cv));
table(row,3,"(\u03B1="+level+")");

row+=2;

table(row,1,"Coefficients");
table(row,2,"Estimate");
table(row,3,"Std err");
table(row,4,"Z value");
table(row,5,"p-value");


for(var j=0;j<coef.length;j++)
	{
	row++;
	if(j!=0)
	table(row,1,values[graph.ivalues[j-1]]);
	table(row,2,round(coef[j]));
	table(row,3,round(stddev[j]));
	table(row,4,round(zvalues[j]));
	table(row,5,round(pvalues[j]));
	}


if(graph.regr==REGR.NEGBIN)
	{
	row++;
	table(row,1,"Theta");
	var theta = Math.exp(graph._z.ka);	
	table(row,2,round(theta));
	}

	function round(x)
	{
		return Math.round(x*PREC)/PREC;
	}

}

//*********************************************************************

function buildLarsTable(graph)
{
setTableName("Regression of "+values[graph.ivalue1]);

var n = graph.ivalues.length;

var betas = graph._z.betas;
var asets = graph._z.asets;
var residuals = graph._z.residuals;
var actions = graph._z.actions;

var row = 1;
table(row,1,"Step");
table(row,2,"Df");
table(row,3,"Adding");
table(row,4,"RSS");
table(row,5,"R2");

row++;
table(row,1,0);
table(row,2,1);
table(row,4,trunc(residuals[0]));

for(var iter=0;iter<n;iter++)
	{
	row++;
	table(row,1,iter+1);
	table(row,2,iter+2);
	table(row,3,values[graph.ivalues[actions[iter]]]);
	table(row,4,trunc(residuals[iter+1]));
	table(row,5,round(1-residuals[iter+1]/residuals[0]));
	}


row+=2;
	
var nb = betas.length;

table(row,1,"Term");
table(row,2,"Coefficient");

row++;
for(var j=0;j<n;j++)
	{
	table(row,1,values[graph.ivalues[j]]);
	table(row,2,round(betas[nb-1][j]));
	row++;
	}

	function trunc(x)
	{
		return Math.round(x);
	}

	function round(x)
	{
		return Math.round(x*PREC)/PREC;
	}

}

//*********************************************************************

function downRegresGraph(pt,graph)
{
if(graph.ivalues.length==0) return -1;
if(graph.ivalue1<0) return -1;


if(!graph._z) return -1;
if(!graph._z.results) return -1;

for(var key in graph._z.results)
	{
	if(!graph._z.results[key].x) continue;
	var x = graph._z.results[key].x;
	var y = graph._z.results[key].y;
	if(inRect(pt,graph.x+x-12,graph.y+y-12,24,24))
		{	
		resultkey = key;
		return DRAG_RESULT;
		}
	}

return -1;

}

//*********************************************************************

function moveRegresGraph(pt,graph)
{
if(graph.ivalues.length==0) return -1;
if(graph.ivalue1<0) return -1;

if(!graph._z) return -1;
if(!graph._z.results) return -1;

graph._z.overresult = null;

for(var key in graph._z.results)
	{
	if(!graph._z.results[key].x) continue;
	var x = graph._z.results[key].x;
	var y = graph._z.results[key].y;
	if(inRect(pt,graph.x+x-12,graph.y+y-12,24,24))
		graph._z.overresult = key;
	}

}

//*********************************************************************

function upRegresGraph(graph)
{


if((action==CREATE_RESULT)||
	(action==PASTE_RESULT_LEFT)||
	(action==PASTE_RESULT_TOP)||
	(action==PASTE_RESULT_I)||
	(action==PASTE_RESULT_J))	
		createResult(graph._z.results[resultkey],fcreate);

	function fcreate()
	{
	var f = graph._z.results[resultkey].f;
	for(var i=0;i<vrecords.length;i++)
		vrecords[i].push(f(i,graph));

	if(zvalue==values.length) zvalue++;
	var name = values[graph.ivalue1];
	name += "."+graph._z.results[resultkey].n;
	values.push(name);
	}

}

//*********************************************************************
//
//                BOX
//
//*********************************************************************

function computeBoxData(graph)
{
if(graph.ilabel1<0) return;
if(graph.ivalues.length<1) return;

var nv = graph.ivalues.length;

var pops = {};
var keys = [];
for(var i=0;i<lrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue

	var key1 = lrecords[i][graph.ilabel1]	;	
	if(!(key1 in pops))
		{
		keys.push(key1);
		pops[key1] = new Array(nv);
		for(var j=0;j<nv;j++)
			pops[key1][j] = [];
		}

	for(var j=0;j<nv;j++)
		pops[key1][j].push(vrecords[i][graph.ivalues[j]]);
	}

keys.sort();

boxes = {};
var min = vector(nv);
var max = vector(nv);
min.fill(Number.MAX_VALUE);
max.fill(-Number.MAX_VALUE);

for(var i=0;i<keys.length;i++)
	{
	boxes[keys[i]] = new Array(nv);
	for(var j=0;j<nv;j++)
		{
		var pop = pops[keys[i]][j];
		pop.sort(function(a,b) { return a-b })
		var n = pop.length;
		var i0 = Math.floor((n-1)/10);
		var i1 = Math.floor((n-1)/4);
		var i2 = Math.floor((n-1)/2);
		var i3 = Math.floor((n-1)*3/4);
		var i4 = Math.floor((n-1)*9/10);
		boxes[keys[i]][j] = [pop[i0],pop[i1],pop[i2],pop[i3],pop[i4]];
		if(pop[i0]<min[j]) min[j] = pop[i0];
		if(pop[i4]>max[j]) max[j] = pop[i4];
		}
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
if(graph.ivalues.length<1) return false;

var nv = graph.ivalues.length;

var min = graph._z.min;
var max = graph._z.max;

var xleft = graph.x+30;
var xright = graph.x + graph.w - 110;
var ytop = graph.y + graph.hbar + 15;
var ybottom  = graph.y + graph.h -15;

var dx = (xright-xleft)/nv;
if(dx<50) dx = 50;
dx = Math.floor(dx);

var dy = (ybottom-ytop)/graph._z.keys.length;
if(dy<10) dy = 10;
dy = Math.floor(dy);

var iv = Math.floor((ptmove.x-xleft)/dx);
if(iv<0) return false;
if(iv>=nv) return false;

var ik = Math.floor((ptmove.y-ytop)/dy);
if(ik<0) return false;
if(ik>=graph._z.keys.length) return false;

var x = (ptmove.x-xleft-iv*dx-10)/(dx-20);
if(x<0) return false;
if(x>1) return false;
var x = min[iv]+(max[iv]-min[iv])*x;

overlabel1 = graph.ilabel1
overkey1 = graph._z.keys[ik];
message = values[graph.ivalues[iv]]+" "+graph._z.keys[ik]+" : "+(Math.round(x*10000)/10000);

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
if(graph.ilabel1<0) return;
if(graph.ivalues.length<1) return;

var nv = graph.ivalues.length;

var min = graph._z.min;
var max = graph._z.max;

var xleft = graph.x+30;
var xright = graph.x + graph.w - 110;
var ytop = graph.y + graph.hbar + 15;
var ybottom  = graph.y + graph.h -15;

var dx = (xright-xleft)/nv;
if(dx<50) dx = 50;
dx = Math.floor(dx);
var ddx = dx-20;

var dy = (ybottom-ytop)/graph._z.keys.length;
if(dy<10) dy = 10;
dy = Math.floor(dy);


// draw field names

ctx.fillStyle = "#CCCCCC";
for(var j=0;j<=nv;j++)
	ctx.fillRect(xleft+dx*j,ytop,1,ybottom-ytop);

var font = ctx.font;
ctx.font = "8px helvetica";
ctx.textAlign = "center";
ctx.fillStyle = "#000000";
for(var j=0;j<nv;j++)
	{
	ctx.fillText(values[graph.ivalues[j]],xleft+dx*j+dx/2,ytop-5);
	ctx.fillText(values[graph.ivalues[j]],xleft+dx*j+dx/2,ybottom+10);
	}
	

// draw keys
ctx.fillStyle = "#000000";

var y = ytop+dy/2;
for(var i=0;i<graph._z.keys.length;i++)
	{	
	ctx.save();
	ctx.translate(xleft-15,y);
	ctx.rotate(-Math.PI/2);
	ctx.fillText(graph._z.keys[i],0,0);
	ctx.restore();
	y += dy;
	}

// draw boxes		
ctx.strokeStyle = "#000000";
ctx.fillStyle = getColor(graph.hue,1,1)

for(var j=0;j<nv;j++)
	{
	var y = ytop+dy/2;

	var x = xleft + dx*j;
	
	for(var i=0;i<graph._z.keys.length;i++)
		{
		var key = graph._z.keys[i];
		var box = graph._z.boxes[key][j];

		var x0 = Math.floor(x+10+ddx*(box[0]-min[j])/(max[j]-min[j]));
		var x1 = Math.floor(x+10+ddx*(box[1]-min[j])/(max[j]-min[j]));
		var x2 = Math.floor(x+10+ddx*(box[2]-min[j])/(max[j]-min[j]));
		var x3 = Math.floor(x+10+ddx*(box[3]-min[j])/(max[j]-min[j]));
		var x4 = Math.floor(x+10+ddx*(box[4]-min[j])/(max[j]-min[j]));

		if(hiliteMatch1(graph.ilabel1,key))
			ctx.fillStyle = graph._hilites1[graph._z.keys[0]];
		else
			ctx.fillStyle = graph._colors1[graph._z.keys[0]];

		ctx.strokeRect(x0,Math.floor(y-dy/3),0,2*dy/3);
		ctx.strokeRect(x0,Math.floor(y),x1-x0,0);

		ctx.fillRect(x1,Math.floor(y-dy/3),x2-x1,2*dy/3);
		ctx.strokeRect(x1,Math.floor(y-dy/3),x2-x1,2*dy/3);

		ctx.fillRect(x2,Math.floor(y-dy/3),x3-x2,2*dy/3);
		ctx.strokeRect(x2,Math.floor(y-dy/3),x3-x2,2*dy/3);

		ctx.strokeRect(x3,Math.floor(y),x4-x3,0);
		ctx.strokeRect(x4,Math.floor(y-dy/3),0,2*dy/3);
		y += dy;
		}
	}

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
graph.placeholder.bottomlabel = "COLOR";
graph.placeholder.rightlabel = "LABEL";

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

var zmin = Number.MAX_VALUE;
var zmax = -Number.MAX_VALUE;

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

	if(graph.iunit>0)
		{
		var z = vrecords[i][graph.iunit];
		if(z<zmin) zmin = z;
		if(z>zmax) zmax = z;
		}
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

var xmin = Number.MAX_VALUE;
var xmax = -Number.MAX_VALUE;
var ymin = Number.MAX_VALUE;
var ymax = -Number.MAX_VALUE;

for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;
	if(xfactor1[i]<xmin) xmin = xfactor1[i];
	if(xfactor1[i]>xmax) xmax = xfactor1[i];
	if(xfactor2[i]<xmin) xmin = xfactor2[i];
	if(xfactor2[i]>xmax) xmax = xfactor2[i];

	if(yfactor1[i]<ymin) ymin = yfactor1[i];
	if(yfactor1[i]>ymax) ymax = yfactor1[i];
	if(yfactor2[i]<ymin) ymin = yfactor2[i];
	if(yfactor2[i]>ymax) ymax = yfactor2[i];
	}

var dx = xmax-xmin;
var dy = ymax-ymin;

graph._z.xmin = xmin-dx/25;
graph._z.xmax = xmax+dx/25;
graph._z.ymin = ymin-dy/25;
graph._z.ymax = ymax+dy/25;
graph._z.zmin = zmin;
graph._z.zmax = zmax;


if(graph.ilabel1>=0)
	computeGraphData1(graph);

initCorners(graph);

	//---------------------------------------------------------------------

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

	//---------------------------------------------------------------------

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

	//---------------------------------------------------------------------

}

//*********************************************************************

function drawCanonGraph(ctx,graph)
{
var font = ctx.font;

if((graph.ivalues.length>=2)&&(graph.jvalues.length>=2))
	{
	var option = getGraphOption(graph);

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

var display = graph.ilabel3;

var xleft = graph.x+30;
var xright = graph.x+graph.w-110;
var ytop = graph.y+graph.hbar+10;
var ybottom = graph.y+graph.h-30;

var xmin = graph._z.xmin;
var xmax = graph._z.xmax;
var ymin = graph._z.ymin;
var ymax = graph._z.ymax;
var zmin = graph._z.zmin;
var zmax = graph._z.zmax;

var xscale = (xright-xleft)/(xmax-xmin);
var yscale = (ybottom-ytop)/(ymax-ymin);

ctx.strokeStyle = "#000000";
ctx.strokeRect(xleft,ytop,xright-xleft,ybottom-ytop);

// origin
if(graph.xsign>0)
	var xo = xleft+xscale*(0-xmin);
else
	var xo = xright-xscale*(0-xmin);

if(graph.ysign>0)
	var yo = ybottom-yscale*(0-ymin);
else
	var yo = ytop+yscale*(0-ymin);

setGraphCorner(graph,0,xleft,ytop);
setGraphCorner(graph,1,xright,ytop);
setGraphCorner(graph,2,xleft,ybottom);
setGraphCorner(graph,3,xright,ybottom);

ctx.textAlign = "center";
ctx.font = "9px helvetica";

// draw axes
ctx.fillStyle = hdotted;
ctx.fillRect(xleft,yo,xright-xleft,1);
ctx.fillStyle = vdotted;
ctx.fillRect(xo,ytop,1,ybottom-ytop);

// draw points
for(var i=0;i<vrecords.length;i++)
	{
	if(!recordMatch(i,graph)) continue;

	var x = xo+graph.xsign*xscale*xproj[i];
	var y = yo+graph.ysign*yscale*yproj[i];
	
	if(graph.ilabel1<0)
		ctx.fillStyle = "#000000";
	else
		ctx.fillStyle = graph._colors1[lrecords[i][graph.ilabel1]];

	if(display>=0)
		ctx.fillText(lrecords[i][display],x,y+3)
	else if(graph.iunit<1)
		ctx.fillRect(x-2,y-2,5,5);
	else
		{
		ctx.globalAlpha = 0.5;
		var z = vrecords[i][graph.iunit];
		z = Math.round((z-zmin)/(zmax-zmin)*20);
		ctx.beginPath();
		ctx.arc(x,y,z,0,Math.PI*2,false);
		ctx.fill();
		ctx.globalAlpha = 1;
		}
	}

if(overlabel1>=0)
	{
	for(var i=0;i<vrecords.length;i++)
		{
		if(!recordMatch(i,graph)) continue;
		if(!recordHilite(lrecords[i])) continue

		var x = xo+graph.xsign*xscale*xproj[i];
		var y = yo+graph.ysign*yscale*yproj[i];
		
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

if((action==SWAP_CORNERS)&&(graphs[graphindex]==graph))
	{
	ctx.fillStyle = GRAY;
	if(graph.toCorner==0)
		ctx.fillRect(xleft,ytop,xo-xleft,yo-ytop);
	else if(graph.toCorner==1)
		ctx.fillRect(xo,ytop,xright-xo,yo-ytop);
	else if(graph.toCorner==2)
		ctx.fillRect(xleft,yo,xo-xleft,ybottom-yo);
	else if(graph.toCorner==3)
		ctx.fillRect(xo,yo,xright-xo,ybottom-yo);
	}
else if(graph._z.overcorner==0)
	drawCorner(ctx,graph,xleft,ytop,0);
else if(graph._z.overcorner==1)
	drawCorner(ctx,graph,xright,ytop,1);
else if(graph._z.overcorner==2)
	drawCorner(ctx,graph,xleft,ybottom,2);
else if(graph._z.overcorner==3)
	drawCorner(ctx,graph,xright,ybottom,3);

ctx.restore();
}

//*********************************************************************

function drawCanonGraphCircle(ctx,graph,xi,yi,indi,xj,yj,indj)
{
var xleft = graph.x+10;
var xright = graph.x+graph.w-110;
var ytop = graph.y + graph.hbar+10;
var ybottom = graph.y + graph.h -30;

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
var ybottom = graph.y+graph.h-30;

var min = Number.MAX_VALUE;
var max = -Number.MAX_VALUE;

var n = 0;
var sum = 0;
for(var i=0;i<lambda.length;i++)	
	if(lambda[i]>1e-10)
		{
		n = i+1;
		sum += Math.sqrt(lambda[i]);
		}

var dx = (xright-xleft)/n;

ctx.fillStyle = "#008800";
ctx.strokeStyle = "#000000";

for(var i=0;i<n;i++)
	{
	var l = Math.sqrt(lambda[i]);
	var x = xleft+i*dx;
	var dy = (ybottom-ytop)*(l/sum);
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

function moveCanonGraph(pt,graph)
{
var option = getGraphOption(graph);

if(option<2)
	{
	if(!graph._z) return;
	if(!graph._z.corners) return;

	graph._z.overcorner = -1;

	for(var i=0;i<4;i++)
		{
		var c = graph._z.corners[i];
		if(inRect(pt,c.x-20,c.y-20,40,40))
			{
			graph._z.overcorner = i;
			return;
			}
		}
	}

if(option==4)
	{
	var xleft = graph.x+30;
	var xright = graph.x+graph.w-110;
	var ytop = graph.y+graph.hbar+10;
	var ybottom = graph.y+graph.h-30;

	var lambda = graph._z.lambda1;

	var n = 0;
	var sum = 0;
	for(var i=0;i<lambda.length;i++)
		if(lambda[i]>1e-10)	
			{
			n = i+1;
			sum += Math.sqrt(lambda[i]);
			}

	var dx = (xright-xleft)/n;

	for(var i=0;i<n;i++)
		{
		var l = Math.sqrt(lambda[i]);
		var pct = l*100/sum;
		var x = xleft+i*dx;
		if(inRect(pt,x,ytop,dx,ybottom-ytop))
			{
			message = (Math.round(l*PREC)/PREC)+"  ( "+
				(Math.round(pct*PREC)/PREC)+"% )";
			return true;
			}
		}
	}
}

//*********************************************************************

function downCanonGraph(pt,graph)
{
var option = getGraphOption(graph);
if(option>1) return -1;

for(var i=0;i<4;i++)
	{
	var c = graph._z.corners[i];
	if(inRect(pt,c.x-20,c.y-20,40,40))
		{
		graph.fromCorner = i;
		graph.toCorner = i;
		return SWAP_CORNERS;
		}
	}
}

//*********************************************************************

function dragCanonGraph(pt,graph)
{
if(action!=SWAP_CORNERS) return;

var xleft = graph.x+30;
var xright = graph.x+graph.w-110;
var ytop = graph.y+graph.hbar+10;
var ybottom = graph.y+graph.h-30;

var xmin = graph._z.xmin;
var xmax = graph._z.xmax;
var ymin = graph._z.ymin;
var ymax = graph._z.ymax;
var zmin = graph._z.zmin;
var zmax = graph._z.zmax;

var xscale = (xright-xleft)/(xmax-xmin);
var yscale = (ybottom-ytop)/(ymax-ymin);

// origin
if(graph.xsign>0)
	var xo = xleft+xscale*(0-xmin);
else
	var xo = xright-xscale*(0-xmin);

if(graph.ysign>0)
	var yo = ybottom-yscale*(0-ymin);
else
	var yo = ytop+yscale*(0-ymin);


if(inRect(pt,xleft,ytop,xo-xleft,yo-ytop))
	graph.toCorner = 0;
else if(inRect(pt,xo,ytop,xright-xo,yo-ytop))
	graph.toCorner = 1;
else if(inRect(pt,xleft,yo,xo-xleft,ybottom-yo))
	graph.toCorner = 2;
else if(inRect(pt,xo,yo,xright-xo,ybottom-yo))
	graph.toCorner = 3;

}

//*********************************************************************

function upCanonGraph(graph)
{

if(action==SWAP_CORNERS)
	{
	var x1 = graph.fromCorner%2;
	var x2 = graph.toCorner%2;
	if(x1!=x2) graph.xsign  = -graph.xsign;

	var y1 = graph.fromCorner-x1;
	var y2 = graph.toCorner-x2;
	if(y1!=y2) graph.ysign = -graph.ysign;
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
//                WELCOME
//
//*********************************************************************

function drawWelcomeIcon(ctx,x,y)
{

ctx.fillStyle = "#000000";

thinr(2,8,16,10);
thinr(12,10,4,8);
thinr(4,10,3,3);
thinr(7,10,3,3);
thinr(4,13,3,3);
thinr(7,13,3,3);
thind(1,8,8,-8);
thind(19,8,-8,-8);

	function thinr(x1,y1,w,h)
	{
	thinh(x1,y1,w);
	thinh(x1,y1+h,w+1);
	thinv(x1,y1,h);
	thinv(x1+w,y1,h);
	}

	function thinh(x1,y1,w)
	{
	ctx.fillRect(x+x1,y+y1,w,1);
	}

	function thinv(x1,y1,h)
	{
	ctx.fillRect(x+x1,y+y1,1,h);
	}

	function thind(x1,y1,dx,dy)
	{
	var sx = dx > 0 ? 1 : -1;
	var sy = dy > 0 ? 1 : -1;
	var d =  dx > 0 ? dx : -dx;
	for(var i=0;i<=d;i++)
		ctx.fillRect(x+x1+i*sx,y+y1+i*sy,1,1);
	}

}

//*********************************************************************

function computeWelcomeData(graph)
{
if(graph.w<640) graph.w = 640;
if(graph.h<450) graph.h = 450;

var panels = [];

var w = 40;
var h = 8;

var p = panel("Chi-square tests","CHI2","CHI2",10,10,200,200);
hLabel(p,p.x+p.w-w-5,p.y+5);
vLabel(p,p.x+5,p.y+5);
panels.push(p);

var p = panel("Normality tests","NORM","NORM",220,10,200,200);
hValue(p,p.x+p.w-w-5,p.y+5);
panels.push(p);

var p = panel("Analysis of variance","TEST","TEST",430,10,200,410);
hValue(p,p.x+p.w-w-5,p.y+5);
hValue(p,p.x+p.w-w-5,p.y+h+10);
hValue(p,p.x+p.w-w-5,p.y+h+h+15);
vLabel(p,p.x+5,p.y+5);
vLabel(p,p.x+20,p.y+5);
panels.push(p);

var p = panel("Non parametric tests","NONPARAM","NONPARAM",10,220,200,200);
vValue(p,p.x+5,p.y+5);
hLabel(p,p.x+p.w-w-5,p.y+5);
hLabel(p,p.x+p.w-w-5,p.y+h+10);
hLabel(p,p.x+p.w-w-5,p.y+h+h+15);
panels.push(p);

var p = panel("Regressions","REGRES","REGR",220,220,200,200);
vValue(p,p.x+5,p.y+5);
hValue(p,p.x+p.w-w-5,p.y+5);
hValue(p,p.x+p.w-w-5,p.y+h+10);
hValue(p,p.x+p.w-w-5,p.y+h+h+15);
panels.push(p);

graph._z.panels = panels;
graph._z.overpanel = -1;

	
	function panel(title,type,menu,x,y,w,h)
	{
	return {title:title,type:type,menu:menu,x:x,y:y,w:w,h:h,hl:[],vl:[],hv:[],vv:[]};
	}

	function hLabel(p,x,y) { p.hl.push({x:x,y:y}); }
	function vLabel(p,x,y) { p.vl.push({x:x,y:y}); }
	function hValue(p,x,y) { p.hv.push({x:x,y:y}); }
	function vValue(p,x,y) { p.vv.push({x:x,y:y}); }
	
}

//*********************************************************************

function drawWelcomeGraph(ctx,graph)
{

var xo = graph.x;
var yo = graph.y + graph.hbar;

var font = ctx.font;

var panels = graph._z.panels;


for(var i=0;i<panels.length;i++)
	{

	var p = panels[i];
	
	if(graph._z.overpanel==i)
		ctx.fillStyle = "#CCCCCC";
	else
		ctx.fillStyle = "#EEEEEE";

	ctx.fillRect(xo+p.x,yo+p.y,p.w,p.h);
	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	ctx.font = "bold 20px Times";
	ctx.fillStyle = "#666666";
	ctx.fillText(p.title,xo+p.x+p.w/2,yo+p.y+65);

	ctx.font = "10px helvetica";
	var m = MENU[p.menu];
	var yy = p.y+65;
	for(var j=0;j<MENU[p.menu].length;j++)
		{			
		if(MENU[p.menu][j]=="-") continue;
		yy+=15;
		ctx.fillText(MENU[p.menu][j],xo+p.x+p.w/2,yo+yy);
		}

	ctx.font = font;

	for(var j=0;j<p.hl.length;j++)
		hLabel(p.hl[j].x,p.hl[j].y);

	for(var j=0;j<p.vl.length;j++)
		vLabel(p.vl[j].x,p.vl[j].y);

	for(var j=0;j<p.hv.length;j++)
		hValue(p.hv[j].x,p.hv[j].y);
	
	for(var j=0;j<p.vv.length;j++)
		vValue(p.vv[j].x,p.vv[j].y);
	}


	function vValue(x,y)
	{
	var w = 8;
	var h = 40;
	ctx.fillStyle = BLUE
	ctx.strokeStyle = "#000000"
	pathValue(ctx,xo+x,yo+y,w,h,w/5)
	ctx.fill()
	ctx.stroke()
	}

	function hValue(x,y)
	{
	var w = 40;
	var h = 8;
	ctx.fillStyle = BLUE
	ctx.strokeStyle = "#000000"
	pathValue(ctx,xo+x,yo+y,w,h,h/5)
	ctx.fill()
	ctx.stroke()
	}

	function vLabel(x,y)
	{
	var w = 8;
	var h = 40;
	ctx.fillStyle = PINK;
	ctx.strokeStyle = "#000000";
	ctx.beginPath()
	ctx.moveTo(xo+x,yo+y)
	ctx.lineTo(xo+x+w,yo+y)
	ctx.lineTo(xo+x+w,yo+y+h-w/3)
	ctx.lineTo(xo+x+w-w/3,yo+y+h)
	ctx.lineTo(xo+x+w/3,yo+y+h)
	ctx.lineTo(xo+x,yo+y+h-w/3)
	ctx.lineTo(xo+x,yo+y)
	ctx.fill()
	ctx.stroke()
	}


	function hLabel(x,y)
	{
	var w = 40;
	var h = 8;
	ctx.fillStyle = PINK;
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(xo+x,yo+y+h/3)
	ctx.lineTo(xo+x+h/3,yo+y)
	ctx.lineTo(xo+x+w,yo+y)
	ctx.lineTo(xo+x+w,yo+y+h)
	ctx.lineTo(xo+x+h/3,yo+y+h)
	ctx.lineTo(xo+x,yo+y+2*h/3)
	ctx.lineTo(xo+x,yo+y+h/3)
	ctx.fill()
	ctx.stroke()
	}
}

//*********************************************************************

function moveWelcomeGraph(pt,graph)
{
var xo = graph.x;
var yo = graph.y + graph.hbar;

for(var i=0;i<graph._z.panels.length;i++)
	{
	var p = graph._z.panels[i];
	if(inRect(pt,xo+p.x,yo+p.y,p.w,p.h))
		{
		graph._z.overpanel = i;
		message = p.title;
		document.body.style.cursor = "pointer";
		return true;
		}
	}

document.body.style.cursor = "default";
graph._z.overpanel = -1;
return false;
}

//*********************************************************************

function upWelcomeGraph(graph)
{
if(graph._z.overpanel<0) return;

var panel = graph._z.panels[graph._z.overpanel];

graph.type = TYPE[panel.type];
graph.option = 0;
initMenu(graph);

computeGraphData(graph);

}

//*********************************************************************
//
//                TABLE
//
//*********************************************************************

var _table = {};
var _tableName = "";
var _tableoverflow = false;

//*********************************************************************

function initTable()
{
_table =  {};
_tableName = "";
_tableoverflow = false;
}

//*********************************************************************

function table(lin,col,value)
{
if(isNaN(lin)) { console.log("TABLE ERR LIN="+lin+" "+value) ; return; }
if(isNaN(col)) { console.log("TABLE ERR COL="+col+" "+value) ; return; }
if(lin<=0) { console.log("TABLE ERR LIN="+lin+" "+value) ; return; }
if(col<=0) { console.log("TABLE ERR COL="+col+" "+value) ; return; }
if(lin>10000) { _tableoverflow = true; return ; }
if(col>500) return;

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
t += "<table border='0' cellspacing='0'>\n";
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
		t += "</tr>\n";
		}
	else
		{
		t += "<tr>";
		for(var col=1;col<=maxcol;col++)
			t += "<td>&nbsp;</td>"
		t += "</tr>\n";
		}
	}

if(_tableoverflow)
	{
	t += "<tr>"
	t += "<td colspan='"+maxcol+"'>More data not displayed...</td>";
	t += "<tr>";
	}

t += "</table>\n";

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
if(graph.type==TYPE.SET) return;

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

graph.error = null;
graph.progress = null;
graph.options = [];

graph.placeholder = {};

graph.limit.ivalues = 99;
graph.limit.jvalues = 99;
graph.limit.ilabels = 99;

if(graph.timerid)
	{
	clearTimeout(graph.timerid);
	graph.timerid = null;
	}
}

//*********************************************************************

function computeGraphData(graph)
{
try	{

clearSpecific(graph)
graph.ncontour = 0;
graph.contour = null;

graph.xshift = 0;
graph.yshift = 0;

if(graph.type>=NBTYPE1)
	computePlotData(graph)
else if(graph.ilabel2<0)
	computeGraphData1(graph)
else if(graph.ilabel3<0)
	computeGraphData2(graph)
else
	computeGraphData3(graph)

	GINFO[graph.type].comp(graph);

} catch(err) { console.log(err.stack);  }

}

//*********************************************************************

function recordMatch(irec,graph)
{
for(var i=0;i<graph.selection.length;i+=2)
	{
	var j = graph.selection[i];
	if(j<0)
		{
		// one value
		if((!!vrecords[irec][-j])!=graph.selection[i+1]) return false;
		}
	else if(typeof(graph.selection[i+1])=="string")	
		{
		// one key
		if(lrecords[irec][j]!=graph.selection[i+1]) return false;
		}
	else
		{
		// list of keys
		if(indexOf(lrecords[irec][j],graph.selection[i+1])<0) return false;
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
graph.total = 0;

for(var i=0;i<lrecords.length;i++)
	{
	// check if data match graph selection
	if(!recordMatch(i,graph)) continue

	// key
	key = (graph.ilabel1<0) ? NIL : lrecords[i][graph.ilabel1]			

	if(!(key in graph._count))
		{
		graph._count[key] = 0
		graph._keys1.push(key)
		}

	var weight = graph.iunit==0 ? 1 : vrecords[i][graph.iunit];
	graph._count[key] += weight;
	graph.total += weight;
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

for(var i=0;i<lrecords.length;i++)
	{
	// check if data match graph selection
	if(!recordMatch(i,graph)) continue

	// keys
	key1 = (graph.ilabel1<0) ? NIL : lrecords[i][graph.ilabel1]			
	key2 = (graph.ilabel2<0) ? NIL : lrecords[i][graph.ilabel2]
	
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

}

//*********************************************************************

function computeGraphData3(graph)
{

graph._count = {}

graph._keys1 = []
graph._keys2 = []
graph._keys3 = []

var seen1 = {}
var seen2 = {}
var seen3 = {}

for(var i=0;i<lrecords.length;i++)
	{
	// check if data match graph selection
	if(!recordMatch(i,graph)) continue

	// keys
	key1 = (graph.ilabel1<0) ? NIL : lrecords[i][graph.ilabel1]			
	key2 = (graph.ilabel2<0) ? NIL : lrecords[i][graph.ilabel2]
	key3 = (graph.ilabel3<0) ? NIL : lrecords[i][graph.ilabel3]	

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

function iotaV(n)
{
var V = new Array(n);
for(var i=0;i<n;i++)
	V[i] = i;
return V;
}

//*********************************************************************

function sumV(V)
{
var n = V.length;
var s = 0;
for(i=0;i<n;i++)
	s += V[i];
return s;
}

//*********************************************************************

function copyV(A)
{
var n = A.length;
var B = new Array(n);
for(var i=0;i<n;i++)
	B[i] = A[i];
return B;
}

//*********************************************************************

function fillV(V,x)
{
for(var i=0;i<V.length;i++)
	V[i] = x;
}

//*********************************************************************

function addVV(A,B)
{
var n = A.length;
if(B.length!=n) return null;
var R = new Array(n);
for(var i=0;i<n;i++)
	R[i] = A[i]+B[i];
return R;
}

//*********************************************************************

function multVV(A,B)
{
var na = A.length;
var nb = B.length;
if(na!=nb) return null;
var s = 0;
for(var i=0;i<na;i++)
	s += A[i]*B[i];
return s;
}

//*********************************************************************

function prodVV(A,B)
{
var n = A.length;
if(B.length!=n) return null;
var R = matrix(n,n);
for(var i=0;i<n;i++)
	for(var j=0;j<n;j++)
		R[i][j] = A[i]*B[j];
return R;
}

//*********************************************************************

function matrix(n1,n2,value)
{
if(arguments.length==2) value = 0;

var mat = new Array(n1)
for(var i=0;i<n1;i++)
	{
	mat[i] = new Array(n2)
	for(var j=0;j<n2;j++)
		mat[i][j] = value;
	}
return mat
}

//*********************************************************************

function fillM(M,x)
{
var n = M.length;
for(var i=0;i<n;i++)
	fillV(M[i],x);
}

//*********************************************************************

function setM(M)
{
var k = 0;
var n1 = M.length;
var n2 = M[0].length;

for(var i=0;i<n1;i++)
	for(var j=0;j<n2;j++)
		M[i][j] = arguments[++k];
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

function identityM(n)
{
var M = matrix(n,n);
for(var i=0;i<n;i++)
	M[i][i] = 1;
return M;
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

function detM(M)
{
// WARNING: M must be symmetric
var A = copyM(M);

var n = M.length;
var d = new Array(n);
var e = new Array(n);
tred(A,d,e,n);
tql2(A,d,e,n);

var p = 1;
for(var i=0;i<n;i++)
	p = p*d[i];
return p;
}

//*********************************************************************

function transposeM(M)
{
console.log("TRANSPOSING");
var n1 = M.length;
var n2 = M[0].length;
var R = matrix(n2,n1);
for(var i=0;i<n2;i++)
	for(var j=0;j<n1;j++)
		R[i][j] = M[j][i];
console.log("TRANSPOSED");
return R;
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

function multM(M,a,R)
{
var n1 = M.length;
var n2 = M[0].length;
R = R || matrix(n1,n2);
for(var i=0;i<n1;i++)
	for(var j=0;j<n2;j++)
		R[i][j] = M[i][j]*a;
return R;
}

//*********************************************************************

function addMM(A,B,R)
{
if(B.length!=A.length) return null;
if(B[0].length!=A[0].length) return null;
var n1 = A.length;
var n2 = A[0].length;
R = R || matrix(n1,n2);
for(var i=0;i<n1;i++)
	for(var j=0;j<n2;j++)
		R[i][j] = A[i][j] + B[i][j];
return R;
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


if(graph.type==TYPE.DISCRI)
	{	
	if(zvalue==values.length) zvalue++;
	values.push("DISCRI."+(++newfield));

	var n= graph.ivalues.length;
	var x;
	var y;

	for(var i=0;i<lrecords.length;i++)
		{
		x = 0
		for(var j=0;j<n;j++)
			{
			y = vrecords[i][graph.ivalues[j]]-graph._z.avg[j]
			x += y*graph._z.E[j][index];
			}
		vrecords[i].push(x)
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

function indexOf(value,table)
{
for(var i=0;i<table.length;i++)
	if(table[i]==value)	
		return i
return -1
}

//*********************************************************************

function convertLabel(index)
{
var keys = {};

for(var i=0;i<lrecords.length;i++)
	{
	var key = lrecords[i][index];
	if(!(key in keys))
		keys[key] = 1;
	}

var skeys = [];
for(var x in keys)
	skeys.push(x)

skeys.sort()

for(var k=0;k<skeys.length;k++)
	{
	var x = skeys[k];
	if(zvalue==values.length) zvalue++;
	values.push(x);
	for(var i=0;i<lrecords.length;i++)
		{	
		var key = lrecords[i][index];
		vrecords[i].push(key==x?1:0)
		}
	}

}

//*********************************************************************

function convertValue(index)
{
for(var i=0;i<vrecords.length;i++)
	lrecords[i].push(""+vrecords[i][index]);	

if(zlabel==labels.length) zlabel++;
labels.push(values[index]);

removeValue(index);

}

//*********************************************************************

function removeLabel(index)
{
for(var i=0;i<lrecords.length;i++)
	lrecords[i].splice(index,1);

labels.splice(index,1);
if(zlabel>labels.length)
	zlabel = labels.length;

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
if(zvalue>values.length)
	zvalue = values.length;

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

function removeRecords()
{

if(graphindex<0) return;
if(sliceindex==-1) return;

var graph = graphs[graphindex];

var newlrecords = [];
var newvrecords = [];

for(var i=0;i<lrecords.length;i++)
	{
	if(mustKeep(i))
		{	
		newlrecords.push(lrecords[i]);
		newvrecords.push(vrecords[i]);
		}
	}

console.log("labels "+lrecords.length+" -> "+newlrecords.length);
console.log("values "+vrecords.length+" -> "+newvrecords.length);

// do nothing if no records would remain
if(newlrecords.length<1) return;

lrecords = newlrecords;
vrecords = newvrecords;

for(var i=0;i<graphs.length;i++)
	computeGraphData(graphs[i]);


	//-----------------------------------------------------------------

	function mustKeep(rindex) {
		// not included in this graph
		if(!recordMatch(rindex,graph)) return true;

		if(typeof(sliceindex)=="number")
			{
			if(graph.ilabel2<0) 
				{
				// one dimension
				var l = lrecords[rindex][graph.ilabel1];
				var k = graph._keys1[sliceindex];
				return l!=k;
				}
			else
				{
				// two dimensions
				var index2 = sliceindex%graph._keys2.length
				var index1 = Math.floor(sliceindex/graph._keys2.length) 
				var k1 = graph._keys1[index1]
				var k2 = graph._keys2[index2]
				var l1 = lrecords[rindex][graph.ilabel1];
				var l2 = lrecords[rindex][graph.ilabel2];
				if(graph.ilabel1>=0) if(k1!=l1) return true;
				if(k2!=l2) return true;
				return false;
				}
			}

		if(sliceindex instanceof Array)
			{
			for(var i=0;i<graph.ilabels.length;i++)
				{
				var l = lrecords[rindex][graph.ilabels[i]];
				var k = graph._keys[i][sliceindex[i]];
				if(l!=k) return true;
				}
			return false;
			}	
			
		return true;
	}

}

//*********************************************************************

function createBoolean(option)
{ 
/*
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
		{
		if(zlabel==labels.length) zlabel++;
		labels.push(key1+"-"+key2+"-"+key3);
		}
	else	
		{
		if(zvalue==values.length) zvalue++;
		values.push(key1+"_"+key2+"_"+key3);		
		}
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
		{		
		if(zlabel==labels.length) zlabel++;
		labels.push(key1+"_"+key2);
		}
	else
		{
		if(zvalue==values.length) zvalue++;
		values.push(key1+"_"+key2);
		}
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
		{	
		if(zlabel==labels.length) zlabel++;
		labels.push(key1);
		}
	else
		{		
		if(zvalue==values.length) zvalue++;
		values.push(key1);
		}
	}
*/


// create mockup graph

var graph = {selection:selection}

for(var i=0;i<vrecords.length;i++)
	{
	var ok = recordMatch(i,graph);
	if(option==0)
		lrecords[i].push( ok ? "YES":"NO");
	else
		vrecords[i].push( ok ? 1 : 0);
	}

if(option==0)
	{
	if(zlabel==labels.length) zlabel++;
	labels.push("DUMMY."+(++newfield));	
	}	
else
	{
	if(zvalue==values.length) zvalue++;
	values.push("DUMMY."+(++newfield));
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

if(zlabel==labels.length) zlabel++;
labels.push("CLUST."+(labels.length+1))

}

//*********************************************************************

function createDummyLabel()
{
for(var i=0;i<lrecords.length;i++)
	lrecords[i].push("R"+(i+1));

if(zlabel==labels.length) zlabel++;
labels.push("ROW.NAMES");
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
var rightclick = false;
if (event.which) rightclick = (event.which == 3);
else if (event.button) rightclick = (event.button == 2);

ptclick = getxy(event)

faction = 0
action = 0
graphindex = -1
graphindex2 = -1
labelindex = -1
valueindex = -1
valueindex2 = -1;
sliceindex = -1
slicesize = 0;
typeindex = -1
optionindex = -1;
titleindex = -1
stickerindex = -1
menuindex = -1;
resultkey = null;

var index = -1;

var movetotop = false;

if(event.ctrlKey||rightclick)
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

if(inLabelScrollBar(ptclick))
	{
	faction = action = SCROLL_LABELS;
	return;
	}

if(inLabelHandle(ptclick))	
	{
	faction = action = RESIZE_LABELS;
	document.body.style.cursor = "row-resize";
	return;
	}

if(inValueScrollBar(ptclick))
	{
	faction = action = SCROLL_VALUES;
	return;
	}

if(inValueHandle(ptclick))
	{
	faction = action = RESIZE_VALUES;
	document.body.style.cursor = "row-resize";
	return;
	}

if(inToolIcon(ptclick,"DUSTBIN"))
	{
	faction = action = DRAG_DUSTBIN;
	return;
	}

if(inToolIcon(ptclick,"SHOW"))
	{
	faction = action = DRAG_TABLE;
	return
	}

if(inToolIcon(ptclick,"PICTURE"))
	{
	faction = action = DRAG_PICTURE;
	return;
	}

if(inToolIcon(ptclick,"HELP"))
	{
	faction = action = DRAG_HELP;
	return;
	}

if(inToolIcon(ptclick,"ADD"))
	{
	faction = action = DRAG_ADD;
	return;
	}

if(inToolIcon(ptclick,"CLONE"))
	{
	faction = action = DRAG_CLONE;
	return;
	}

if(inToolIcon(ptclick,"SORT"))
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
	faction = action = DRAG_VALUE;
	valueindex = index;
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
	else if(inRect(ptclick,graph.x+18,graph.y,14,20))
		{
		faction = SELECT_OPTION;
		ptclick.x = graph.x+20;
		ptclick.y = graph.y+16;
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
	else if(inGraphRightLabel(ptclick,graph))
		{
		faction = DRAG_RIGHTLABEL;
		graphindex = i;
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
	else if(inGraphValuei(ptclick,graph,true))
		{
		if(destvalueindex<graph.ivalues.length)
			{
			faction = DRAG_VALUEI;
			valueindex = destvalueindex
			graphindex = i
			}
		else
			{
			faction = DRAG_VALUELIST;
			graphindex = i;
			}
		}
	else if(inGraphValuej(ptclick,graph,true))
		{	
		if(destvalueindex<graph.jvalues.length)
			{	
			faction = DRAG_VALUEJ;
			valueindex = destvalueindex;
			graphindex = i;
			}
		else
			{
			faction = DRAG_VALUELIST;
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
	else if(inRect(ptclick,graph.x,graph.y,graph.w,graph.hbar))
		{
		// in graph title bar
		faction = DRAG_GRAPH;
		graphindex = i
		movetotop = true;
		}
	else if(GINFO[graph.type].menu&&inRect(ptclick,graph.x+graph.w/2-MENUWIDTH/2,graph.y+graph.hbar+5,MENUWIDTH,20))
		{
		faction = action = SELECT_MENUITEM; 
		graphindex = i;
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

} catch(err) { console.log(err.stack);  }




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

if(action==SHOW_TABLE)
	{
	showGraphTable();
	}
else if(action==SHOW_PICTURE)
	{
	showGraphPicture();
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
else if(action==REMOVE_RECORDS)
	{	
	removeRecords();
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
else if(action==SET_RIGHTLABEL)
	{	
	graph = graphs[graphindex];
	setGraphLabel(graph,"rightlabel");
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
		graph.placeholder = {};
		initMenu(graph);
		}
	computeGraphData(graph);
	}
else if(action==SET_VALUESELECTION)
	{
	graph = graphs[graphindex2];
	graph.selection.push(-valueindex);
	graph.selection.push(true);
	graph.hbar = (graph.selection.length/2)*16;
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
	var newgraph = new Graph(ptmove.x-150,ptmove.y-20,true,
		clone(selection),-1,selecthue, TYPE.PIE)
	newgraph.iunit = graph.iunit
	computeGraphData(newgraph);
	graphs.push(newgraph);	
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
	setGraphSelection(graphs[graphindex2],selection);
	computeGraphData(graphs[graphindex2]);
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
	graph.bottomshift = ptmove.x - graph.x  -50
	if(graph.bottomshift < 5) graph.bottomshift = 5
	}
else if(action==DRAG_RIGHTLABEL)
	{
	graph = graphs[graphindex];
	graph.rightshift = graph.y + graph.h - ptmove.y - 50;
	if(graph.rightshift<5) graph.rightshift = 5;
	}
else if(action==DRAG_VALUELIST)
	{
	graph = graphs[graphindex];
	graph.uppershift += ptmove.y - ptclick.y;
	if(graph.uppershift<5) graph.uppershift = 5;
	}
/*
else if(action==CREATE_PROJECTION)
	{	
	graph = graphs[graphindex];
	createProjectionValue(graph,valueindex)
	draw()
	}
*/
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
else if(action==REMOVE_RIGHTLABEL)
	{
	graph = graphs[graphindex];
	removeGraphLabel(graph,"rightlabel");
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
	graph.ivalues.splice(valueindex,1);
	computeGraphData(graph)
	}
else if(action==REMOVE_VALUEJ)
	{
	graph =graphs[graphindex];
	graph.jvalues.splice(valueindex,1);
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
		clone(oldgraph.selection),
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
else if((action==SWAP_LABEL_LR)||(action==SWAP_LABEL_RL))
	{
	graph = graphs[graphindex];
	swapLabel(graph,"leftlabel","rightlabel");
	}
else if((action==SWAP_LABEL_TR)||(action==SWAP_LABEL_RT))
	{
	graph = graphs[graphindex];
	swapLabel(graph,"toplabel","rightlabel");
	}
else if((action==SWAP_LABEL_BR)||(action==SWAP_LABEL_RB))
	{
	graph = graphs[graphindex];
	swapLabel(graph,"bottomlabel","rightlabel");
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
	var newgraph = new Graph(ptmove.x-280,ptmove.y-10,true,
		clone(oldgraph.selection),
		oldgraph.ilabel1,0,typeindex)
	newgraph.iunit = oldgraph.iunit
	graphs.push(newgraph)
	computeGraphData(newgraph)
	}
else if(action==CREATE_GRAPH2)
	{
	var oldgraph = graphs[graphindex]
	var newgraph = new Graph(ptmove.x-280,ptmove.y-10,true,
		clone(oldgraph.selection),
		oldgraph.ilabel2,0,typeindex)
	newgraph.iunit = oldgraph.iunit
	graphs.push(newgraph)
	computeGraphData(newgraph)
	}
else if(action==CONVERT_LABEL)
	{
	convertLabel(labelindex)
	}
else if(action==CONVERT_VALUE)
	{
	convertValue(valueindex);
	}
else if(action==CREATE_LABEL)
	{
	var graph = graphs[graphindex];
	if(graph.type==TYPE.DISTRIB)
		createLabelFromDistrib(graph);
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
	createBoolean(0);
	}
else if(action==CREATE_VBOOLEAN)
	{
	graph = graphs[graphindex];
	createBoolean(1);
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
else if(action==PIVOT_DATA)
	{
	pivotData();
	}
else if(action==SELECT_MENUITEM)
	{
	if(menuindex>=0)
		{
		graph = graphs[graphindex];
		var menu = GINFO[graph.type].menu.toLowerCase();	
		graph[menu] = menuindex;
		computeGraphData(graph);
		}
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
	graph.yshift += Math.round(event.wheelDelta/10);
	if(graph.yshift<0) graph.yshift = 0;
	}
else if((inLabel(ptmove)>=0)&&(zlabel-alabel<labels.length))
	{
	var delta = Math.round(event.wheelDelta/100);		
	alabel -= delta;
	zlabel -= delta;
	if(alabel<0) 
		{
		alabel = 0;
		zlabel = 10;
		}
	else if(zlabel >= labels.length)
		{
		zlabel = labels.length;
		alabel = zlabel - 10;
		}
	}
else if((inValue(ptmove)>=0)&&(zvalue-avalue<values.length))
	{
	var delta = Math.round(event.wheelDelta/100);
	avalue -= delta;
	zvalue -= delta;
	if(avalue<0)
		{
		avalue = 0;
		zvalue = 10;
		}
	else if(zvalue>=values.length)
		{
		zvalue = values.length;
		avalue = zvalue -10;
		}
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

if(zlabel==labels.length) zlabel++;
labels.push("PIVOT");

values.splice(1,values.length-1);
values.push("COUNT");
if(zvalue>values.length) zvalue = values.length;
}

//*********************************************************************

function showDataTable()
{

initTable();

var nl = labels.length;

for(var j=0;j<labels.length;j++)
	table(1,1+j,labels[j]);

for(var j=1;j<values.length;j++)
	table(1,nl+j,values[j]);

for(var i=0;i<lrecords.length;i++)
	{
	for(var j=0;j<labels.length;j++)
		table(2+i,1+j,lrecords[i][j]);
	for(var j=1;j<values.length;j++)
		table(2+i,nl+j,vrecords[i][j]);
	}

var t = getTableHtml();
showTable(t,"DATA");
}

//*********************************************************************

function showGraphPicture()
{
if(graphindex<0) return;
var graph = graphs[graphindex];

// setup temp canvas to draw the graph

var canvas = document.createElement("canvas");
canvas.setAttribute("width",graph.w);
canvas.setAttribute("height",graph.h);

var savex = graph.x;
var savey = graph.y;

graph.x = graph.y = 0;

var ctx = canvas.getContext("2d");

// default settings
ctx.lineWidth = 1
ctx.lineJoin = "round"
ctx.font = "14px helvetica"
ctx.textAlign = "center"

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0,0,graph.w,graph.h);

ctx.save();
try { GINFO[graph.type].draw(ctx,graph); }
catch(err) { console.log(err) }

ctx.restore();
drawGraphSlots(ctx,graph);

graph.x = savex;
graph.y = savey;

var data = canvas.toDataURL();

if(window.inbrowser)
	{
	var w = window.open(data,"explorer","status=0");
	}
else
	{		
	var i = data.indexOf(",");
	if(i<0) return;
	var buffer = new Buffer(data.substring(i+1),"base64");

	var filename = (Math.random()+"").replace(/../,"")+".png";
	filename = require("path").join(require("os").tmpdir(),filename);
	randomfiles.push(filename);

	var fs = require("fs");		
	fs.writeFileSync(filename,buffer);

	var source = '<img src="file://'+filename+'">';
	ipc.send("window", {title:"Explorer",source:source});
	}

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
h += "body	{ margin:0px; cursor: default;}\n";
h += "*	{ font-family: Calibri; font-size: 12px; }\n";
h += "td { min-width: 50px; border-left: 1px solid #AAA;  border-top: 1px solid #AAA;}\n";
h += "table { display:none; border-bottom: 1px solid #AAA; border-right: 1px solid #AAA; }\n";
h += "</style>\n";
h += "</head>\n";
h += "<body onload='init()'>\n";
h += "<script>\n";
h += init.toString();
h += "\n";
h += keydown.toString();
h += "\n";
h += "</script>\n";
h += "<div>Loading ...</div>\n";
h += t;
t += "</body>";
h += "</html>\n";

function init() {
	document.querySelector('div').style.display = 'none';
	document.querySelector('table').style.display = 'table';
	document.body.addEventListener('keydown',keydown,false);
}

function keydown(event) {
	// control-C  copies content to the clipboard
	if(event.keyCode!=67) return;
	if(!(event.ctrlKey||event.metaKey)) return;

	var text = '';
	var trs = document.querySelectorAll('tr');
	for(var i=0;i<trs.length;i++)
	   {
	   var tds = trs[i].querySelectorAll('td');
	   for(var j=0;j<tds.length;j++)
		  {
		  if(j!=0) text += '\t';
		  text += tds[j].innerText; 
		  }
	   text += '\n';
	   }
	var clipboard = require('clipboard')
	clipboard.writeText(text);
}


if(window.inbrowser)
	{
	var w = window.open("",wname,"status=0");
	var d = w.document;
	d.open()
	d.write(h);
	d.close()
	}
else
	{		
	var filename = (Math.random()+"").replace(/../,"")+".html";
	filename = require("path").join(require("os").tmpdir(),filename);
	randomfiles.push(filename);

	var fs = require("fs");		
	fs.writeFileSync(filename,h,"utf8");
	var w = window.open("file://"+filename);
	}

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
	{
	var options = "width=500;status=no;toolbar=no;menubar=no;location=no";
	var whelp = window.open("help/"+mylocale+"/"+name+".html",name,options);
	whelp.onload = function() { 		
		var h = whelp.document.querySelectorAll(".header");
		if(h.length==0)
			{
			whelp.close();
			mylocale = "en";
			whelp = window.open("help/en/"+name+".html",name,options);
			}
		}
	}
else
	ipc.send("help",name);

}

//*********************************************************************

function show_formula_dialog(action)
{

var text = ""
text += "<table width='100%' cellspacing='10'>"
text += "<tr><td width='70'>Name :</td><td><input style='font-family:courier;font-size:14px;' type='text' id='finom' placeholder='Enter name of new field'/></td><td width='15'>&nbsp;</td></tr>" 
text += "<tr><td width='70'>Formula :</td><td><input style='font-family:courier;font-size:14px;' type='text' id='fiform' /></td><td width='15'><button style='font-size:12px;' id='fihelp'>?</button></td></tr>"
text += "</table>"
text += "<table width='100%' cellspacing='10'>"
text += "<tr><td width='50%' align='center'><button style='font-size:12px;' id='ficancel'>Cancel</button>"
text += "<td width='50%' align='center'><button style='font-size:12px;' id='fiok'>&nbsp; OK &nbsp;</button></td></tr>"
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

document.getElementById("finom").focus();

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
	if(zlabel==labels.length) zlabel++;
	labels.push(nom);
	for(var i=0;i<lrecords.length;i++)
		lrecords[i].push(evaluate_label(lrecords[i],vrecords[i],i+1,i+1));
	}
else if(action==2)
	{	
	if(zvalue==values.length) zvalue++;
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

if(slabel = inLabelScrollBar(ptmove))
	message = "Scroll field list";

if(hlabel = inLabelHandle(ptmove))
	message = "Resize field list";

if(svalue = inValueScrollBar(ptmove))
	message = "Scroll field list";

if(hvalue = inValueHandle(ptmove))
	message = "Resize field list";


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
	if(message=="")
		message = labels[index];
	return;
	}

index = inValue(ptmove);
if(index>=0)
	{
	if(message=="")
		message = values[index];
	return;	
	}

if(inToolIcon(ptmove,"DUSTBIN"))
	{
	message = "Remove ...";
	return;
	}

if(inToolIcon(ptmove,"SHOW"))
	{
	message = AHELP[DRAG_TABLE];
	return;
	}

if(inToolIcon(ptmove,"PICTURE"))
	{
	message = AHELP[DRAG_PICTURE];
	return;
	}

if(inToolIcon(ptmove,"HELP"))
	{
	message = AHELP[DRAG_HELP];
	return;
	}

if(inToolIcon(ptmove,"ADD"))
	{
	message = AHELP[DRAG_ADD];
	return;
	}

if(inToolIcon(ptmove,"CLONE"))
	{
	message = AHELP[DRAG_CLONE];
	return;
	}

if(inToolIcon(ptmove,"SORT"))
	{
	message = AHELP[DRAG_SORT];
	return;
	}


var i = inFullGraph(ptmove);

if(i<0)
	{
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
	if(graph.type==TYPE.THREE)	
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
		/*
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
		*/
		}
	else
		{
		// two dimensions
		var index2 = index%graph._keys2.length
		var index1 = Math.floor(index/graph._keys2.length) 
		var key1 = graph._keys1[index1]
		var key2 = graph._keys2[index2]
		var value = graph._count[key1+"\t"+key2]
		if(isNaN(value)) value = 0;
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


if(faction==SCROLL_LABELS)
	{
	var d = (ptmove.y-ptclick.y)/((zlabel-alabel)*SLOTH)*labels.length;
	d = Math.round(d);
	if(d!=0)
		{	
		var dif = zlabel-alabel;
		alabel += d;		
		zlabel += d;
		if(alabel<0) { alabel = 0; zlabel = alabel + dif; }
		if(zlabel>labels.length) { zlabel = labels.length; alabel = zlabel-dif }
		ptclick = ptmove;
		draw();
		}
	}
else if(faction==SCROLL_VALUES)
	{
	var d = (ptmove.y-ptclick.y)/((zvalue-avalue)*SLOTH)*values.length;
	d = Math.round(d);
	if(d!=0)
		{
		var dif = zvalue-avalue;
		avalue += d;		
		zvalue += d;
		if(avalue<0) { avalue = 0; zvalue = avalue + dif; }
		if(zvalue>values.length) { zvalue = values.length; avalue = zvalue-dif }
		ptclick = ptmove;
		draw();
		}
	}
else if(faction==RESIZE_LABELS)
	{
	var d = (ptmove.y-ptclick.y)/20;
	var sign = d > 0 ? 1 : d < 0 ? -1 : 0;
	d = Math.floor(Math.abs(d))*sign;
	if(d!=0)
		{
		zlabel += d;
		if(zlabel<=alabel) zlabel = alabel+1;
		if(zlabel>labels.length) 
			{	
			zlabel = labels.length;
			if(alabel>0) alabel--;
			}
		ptclick = ptmove;	
		draw();
		}
	}
else if(faction==RESIZE_VALUES)
	{
	var d = (ptmove.y-ptclick.y)/20;	
	var sign = d > 0 ? 1 : d < 0 ? -1 : 0;
	d = Math.floor(Math.abs(d))*sign;
	if(d!=0)
		{
		zvalue += d;
		if(zvalue<=avalue) zvalue = avalue+1;
		if(zvalue>values.length)
			{
			zvalue = values.length;
			if(avalue>0) avalue--;
			}
		ptclick = ptmove;
		draw();
		}
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
	valueindex = valueindex2 = -1;
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
			AHELP[action] = "Remove field '"+values[valueindex]+"'";
			}
		}
	else
		action = DRAG_DUSTBIN;
	}
else if(faction==DRAG_TABLE)
	{
	graphindex = -1;
	var index;
	if((index=inLabel(ptmove))>=0)
		{
		action = SHOW_LABEL;
		}		
	else  if((index=inValue(ptmove))>=0)
		{
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
else if(faction==DRAG_PICTURE)
	{
	graphindex  = inGraph(ptmove);
	if(graphindex>=0)
		action = SHOW_PICTURE;
	else
		action = DRAG_PICTURE;
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
		var o = index==lastsort ? ORDER[1-lastorder] : "ascending";
		AHELP[action] = 'Sort data by "'+labels[index]+'" in '+o+" order";
		}
	index = inValue(ptmove);
	if(index>0)
		{
		action = SORT_DATA;
		valueindex = index;
		var o = index==-lastsort ? ORDER[1-lastorder] : "ascending";
		AHELP[action] = 'Sort data by "'+values[index]+'" in '+o+" order";
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
	if(inToolIcon(ptmove,"DUSTBIN"))
		{
		if(labelInUse(labelindex))
			action = DONT_REMOVE;
		else
			{
			action = REMOVE_LABEL;
			AHELP[action] = 'Remove field "'+labels[labelindex]+'"';
			}
		}
	else if(inToolIcon(ptmove,"SHOW"))
		{
		action = SHOW_LABEL;
		}
	else if(inToolIcon(ptmove,"SORT"))
		{
		action = SORT_DATA;
		var o = labelindex == lastsort ? ORDER[1-lastorder] : "ascending";
		AHELP[action] = 'Sort data by "'+labels[labelindex]+'" in '+o+' order';
		}
	else if(inValue(ptmove)>=0)
		{
		action = CONVERT_LABEL;
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
	else if(inGraphRightLabel(ptmove,graphs[i]))
		{
		graphindex = i;
		action = SET_RIGHTLABEL;
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
	var j;
	if(inToolIcon(ptmove,"DUSTBIN"))
		{
		if(valueInUse(valueindex))
			action = DONT_REMOVE;
		else
			{
			action = REMOVE_VALUE;
			AHELP[action] = 'Remove field "'+values[valueindex]+'"';
			}
		}
	else if(inToolIcon(ptmove,"SHOW"))
		{
		action = SHOW_VALUE;
		}
	else if(inToolIcon(ptmove,"SORT"))
		{
		action = SORT_DATA;
		var o = valueindex==-lastsort ? ORDER[1-lastorder] : "ascending";
		AHELP[action] = 'Sort data by "'+values[valueindex]+'" in '+o+' order';
		}
	else if(inLabel(ptmove)>=0)
		{
		if(valueindex==0)
			action = PIVOT_DATA;
		else
			action = CONVERT_VALUE;
		}
	else if(i<0)
		action = DRAG_VALUE;
	else if(inGraphTitle(ptmove,graphs[i]))
		{
		graphindex2 = i;
		action = SET_VALUESELECTION;
		}
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
	else
		{
		if(GINFO[graphs[i].type].unit)
			{
			graphindex = i;
			action = SET_GRAPH_UNIT;
			}
		else 
			action = DRAG_VALUE;
		}
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
	if(i!=graphindex)
		action = REMOVE_TOPLABEL;
	else if(inRect(ptmove,graph.x,graph.y+graph.hbar,graph.w,30))
		action = DRAG_TOPLABEL;
	else if(inGraphLeftLabel(ptmove,graph))
		action = SWAP_LABEL_TL;
	else if(inGraphBottomLabel(ptmove,graph))
		action = SWAP_LABEL_TB;
	else if(inGraphRightLabel(ptmove,graph))
		action = SWAP_LABEL_TR;
	else
		action = REMOVE_TOPLABEL;
	}
else if(faction==DRAG_LEFTLABEL)
	{
	var graph = graphs[graphindex]
	var i = inFullGraph(ptmove);
	if(i!=graphindex)
		action = REMOVE_LEFTLABEL;
	else if(inRect(ptmove,graph.x,graph.y,30,graph.h))
		action = DRAG_LEFTLABEL;
	else if(inGraphTopLabel(ptmove,graph))
		action = SWAP_LABEL_LT;
	else if(inGraphBottomLabel(ptmove,graph))
		action = SWAP_LABEL_LB;
	else if(inGraphRightLabel(ptmove,graph))
		action = SWAP_LABEL_LR;
	else 
		action = REMOVE_LEFTLABEL;
	}
else if(faction==DRAG_BOTTOMLABEL)
	{
	var graph =graphs[graphindex]
	var i = inFullGraph(ptmove);
	if(i!=graphindex)
		action = REMOVE_BOTTOMLABEL;
	else if(inRect(ptmove,graph.x,graph.y+graph.h-30,graph.w,30))
		action = DRAG_BOTTOMLABEL;
	else if(inGraphTopLabel(ptmove,graph))
		action = SWAP_LABEL_BT;
	else if(inGraphLeftLabel(ptmove,graph))
		action = SWAP_LABEL_BL;
	else if(inGraphRightLabel(ptmove,graph))
		action = SWAP_LABEL_BR;
	else
		action = REMOVE_BOTTOMLABEL;
	}
else if(faction==DRAG_RIGHTLABEL)
	{
	var graph = graphs[graphindex];
	var i = inFullGraph(ptmove);
	if(i!=graphindex)
		action = REMOVE_RIGHTLABEL;
	else if(inRect(ptmove,graph.x+graph.w-30,graph.y+graph.hbar,30,graph.h))
		action = DRAG_RIGHTLABEL;
	else if(inGraphTopLabel(ptmove,graph))
		action = SWAP_LABEL_RT;
	else if(inGraphLeftLabel(ptmove,graph))
		action = SWAP_LABEL_RL;
	else if(inGraphBottomLabel(ptmove,graph))
		action = SWAP_LABEL_RB;
	else
		action = REMOVE_RIGHTLABEL;
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
else if(faction==DRAG_RESULT)
	{
	var i = inFullGraph(ptmove);
	if(inValue(ptmove)>=0)
		action = CREATE_RESULT;
	else if(i<0)
		action = DRAG_RESULT;
	else if(inGraphLeftValue(ptmove,graphs[i]))
		{
		action = PASTE_RESULT_LEFT;
		graphindex2 = i;
		}
	else if(inGraphTopValue(ptmove,graphs[i]))
		{
		action = PASTE_RESULT_TOP;
		graphindex2 = i;
		}
	else if(inGraphValuei(ptmove,graphs[i],true))
		{
		graphindex2 = i;
		action = PASTE_RESULT_I;
		}
	else if(inGraphValuej(ptmove,graphs[i],true))
		{
		graphindex2 = i;
		action = PASTE_RESULT_J;
		}
	else
		action = DRAG_RESULT;
	}
else if(faction==DRAG_SET)
	{
	if(inLabel(ptmove)>=0)
		action = SAVE_LABELSET;
	else if(inValue(ptmove)>=0)
		action = SAVE_VALUESET;
	else
		action = DRAG_SET;
	}
else if((faction==DRAG_SLICE)&&(slicesize>0))
	{
	var graph = graphs[graphindex]

	if(inToolIcon(ptmove,"DUSTBIN"))
		{
		action = REMOVE_RECORDS;
		AHELP[action] = "Remove % records".replace(/%/,""+slicesize);
		}
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
	if(action==SELECT_MENUITEM)
		selectMenuItem(ptmove,graph,getGraphMenu(graph));
	else
		GINFO[graph.type].drag(ptmove,graph);
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

function drawVLabel(ctx,x,y,title,alt)
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

if(title)
	ctx.fillText(title,h/2,-5)
else if(alt)
	{
	var font = ctx.font;
	ctx.font = "italic "+font;
	ctx.fillStyle = "#CCCCCC";
	ctx.fillText(alt,h/2,-5);
	ctx.font = font;
	}

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

function drawVValue(ctx,x,y,title,alt)
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

ctx.fillStyle = "#000000";
ctx.save();
ctx.translate(x+w,y+h);
ctx.rotate(-Math.PI/2);

if(title)
	ctx.fillText(title,h/2,-5)
else if(alt)
	{
	var font = ctx.font;
	ctx.font = "italic "+font;
	ctx.fillStyle = "#CCCCCC";	
	ctx.fillText(alt,h/2,-5);
	ctx.font = font;
	}

ctx.restore()

ctx.restore();
}

//*********************************************************************

function drawHValue(ctx,x,y,title,alt)
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

if(title)
	{
	ctx.fillStyle = "#000000"
	ctx.fillText(title,x+w/2,y+h-5)
	}
else if(alt)
	{
	var font = ctx.font;
	ctx.font = "italic "+font;
	ctx.fillStyle = "#CCCCCC";
	ctx.fillText(alt,x+w/2,y+h-5)
	ctx.font = font;
	}

ctx.restore();
}

//*********************************************************************

function drawHLabel(ctx,x,y,title,alt)
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

if(title)
	{
	ctx.fillStyle = "#000000"
	ctx.fillText(title,x+w/2,y+h-5)
	}
else if(alt)
	{
	var font = ctx.font;
	ctx.font = "italic "+font;
	ctx.fillStyle = "#CCCCCC";
	ctx.fillText(alt,x+w/2,y+h-5);
	ctx.font = font;
	}

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

function drawMarker(ctx,x,y,h)
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
ctx.moveTo(x-6,y-6)
ctx.lineTo(x+6,y)
ctx.lineTo(x-6,y+6)
ctx.lineTo(x-6,y-6)
ctx.fill()
ctx.stroke()
}

//*********************************************************************

function drawDustbinIcon(ctx,x,y)
{
ctx.fillStyle = "#FFFFFF";
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
frameIcon(ctx,x,y);
}

//*********************************************************************

function drawTableIcon(ctx,x,y)
{
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(x,y,20,20);
ctx.fillStyle = "#000000"
for(var i=3;i<18;i+=3)
	ctx.fillRect(x+4,y+i+1,13,1)
for(var i=4;i<19;i+=4)
	ctx.fillRect(x+i,y+3+1,1,13) 
frameIcon(ctx,x,y);
}

//*********************************************************************

function drawPictureIcon(ctx,x,y)
{
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(x,y,20,20);
ctx.fillStyle = "#000000";
drawRect(ctx,x+2,y+2,16,16);

ctx.beginPath();
ctx.moveTo(x+2,y+18);
ctx.lineTo(x+15,y+8);
ctx.lineTo(x+18,y+12);
ctx.lineTo(x+18,y+18);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(x+7,y+7,2.5,0,2*Math.PI,false);
ctx.fill();

ctx.fillStyle = "#FFFFFF";
ctx.beginPath();
ctx.moveTo(x+3,y+10);
ctx.lineTo(x+12,y+15);
ctx.lineTo(x+13,y+10);
ctx.closePath();
ctx.fill();

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

x = w;

x -= 20;
y = h-40;
drawDustbinIcon(ctx,x,y);

x -= 20;
y = h-40;
drawTableIcon(ctx,x,y);

x -= 20;;
y = h-40;
drawPictureIcon(ctx,x,y);

x -= 20;
y = h-40;
drawHelpIcon(ctx,x,y);

x -= 20;
y = h-40;
drawAddIcon(ctx,x,y);

x -= 20;
y = h - 40;
drawCloneIcon(ctx,x,y);

x -= 20;
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
catch(e) { 
	console.log(e.stack);  }

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
var p = 1;
for(var i=0;i<ndigits;i++)
	p*=10;
return ""+(Math.round(s*p)/p);
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

var ni = Math.ceil(NBTYPE3/5);

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
	ctx.strokeStyle = "#000000";
	ctx.strokeRect(graph.x,graph.y,graph.w,graph.h);

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
		if(k>=0)
			ctx.fillText(graph.selection[j+1],graph.x+graph.w/2,graph.y+hh)
		else
			ctx.fillText(values[-k],graph.x+graph.w/2,graph.y+hh);
		// draw arrow
		ctx.beginPath()
		ctx.moveTo(graph.x+graph.w-20,graph.y+hh-10)
		ctx.lineTo(graph.x+graph.w-10,graph.y+hh-5)
		ctx.lineTo(graph.x+graph.w-20,graph.y+hh)
		ctx.lineTo(graph.x+graph.w-20,graph.y+hh-10)
		ctx.stroke()
		hh += 16;
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

	if(graph.progress)
		drawGraphProgress(ctx,graph)
	else if(graph.error)
		drawGraphError(ctx,graph)
	else
		{
		ctx.save();	
		ctx.textAlign = "left";
		try { GINFO[graph.type].draw(ctx,graph); }
		 catch(e) { console.log(e.stack) ; }
		ctx.restore();
		}
	drawGraphMenu(ctx,graph);
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

var y = 0;

// labels
ctx.font = "14px helvetica"
ctx.textAlign = "center"

for(var i=alabel;i<zlabel;i++)
	drawHLabel(ctx,mywidth-SLOTW,y+(i-alabel)*SLOTH,labels[i]);

if(slabel)
	drawScrollBar(y,alabel,zlabel,labels.length);

y += (zlabel-alabel)*SLOTH;

if(hlabel)
	drawHandle(y);

y += SLOTH;

// icons
for(var i=0;i<ni*5;i++)	
	{	
	var x = mywidth-100+20*(i%5);
	ctx.fillStyle = i<NBTYPE1 ? PINK : BLUE;
	ctx.fillRect(x,y,20,20);
	if(i<NBTYPE3)
		{
		GINFO[i].icon(ctx,x,y);
		if(GINFO[i].options)
			drawMarker(ctx,x+20-4,y,4);
		}
	frameIcon(ctx,x,y);
	if((i%5)==4) y += 20
	}
y += SLOTH;

// values

for(var i=avalue;i<zvalue;i++)
	drawHValue(ctx,mywidth-SLOTW,y+(i-avalue)*SLOTH,values[i])

if(svalue)
	drawScrollBar(y,avalue,zvalue,values.length);

y += (zvalue-avalue)*SLOTH;

if(hvalue)
	drawHandle(y);

y += SLOTH;

// sticker
drawSticker(ctx,mywidth-100,y,100,20,-1,"")

// dock
drawDock(ctx,mywidth,myheight)

if(action==REMOVE_LABEL)
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-20,myheight-40,20,20);
	ctx.fillRect(mywidth-100,20*(labelindex-alabel),100,20);
	}
else if(action==REMOVE_VALUE)
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-20,myheight-40,20,20);
	ctx.fillRect(mywidth-100,
		(zlabel-alabel)*20+20+ni*20+20+20*(valueindex-avalue),100,20);
	}
else if(action==REMOVE_RECORDS)
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-20,myheight-40,20,20);
	}

// if dragging a label
if(faction==DRAG_LABEL)
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-100,(labelindex-alabel)*SLOTH,100,20);
	if(!informula) {
		ctx.strokeStyle = GRAY
		ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20)
		}
	}

if(action==DRAG_SET)
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-10,ptmove.y-10,20,20)
	}

if(action==DRAG_VALUE)
	{
	ctx.fillStyle = GRAY;
	var y = (zlabel-alabel)*20+20+ni*20+20+(valueindex-avalue)*20;
	ctx.fillRect(mywidth-100,y,100,20);
	if((!informula)&&(inValue(ptmove)<0))
		{
		ctx.strokeStyle = GRAY
		ctx.strokeRect(ptmove.x-50,ptmove.y-10,100,20);
		}	
	}

if((action==SET_TOPLABEL)||(action==SET_TOPVALUE)||(action==SWAP_VALUE_LT))
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect( graph.x+graph.w-100-graph.topshift, graph.y+graph.hbar+5,100,20)
	}

if(action==PASTE_RESULT_TOP)
	{
	var graph = graphs[graphindex2];
	ctx.fillStyle = GRAY
	ctx.fillRect( graph.x+graph.w-100-graph.topshift, graph.y+graph.hbar+5,100,20)
	}

if((action==SET_LEFTLABEL)||(action==SET_LEFTVALUE)||(action==SWAP_VALUE_TL))
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+5,graph.y+graph.hbar+graph.leftshift,20,100)
	}

if(action==PASTE_RESULT_LEFT)
	{
	var graph = graphs[graphindex2];
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+5,graph.y+graph.hbar+graph.leftshift,20,100)
	}

if((action==SET_BOTTOMLABEL)||(action==SWAP_LABEL_LB)||(action==SWAP_LABEL_TB)||(action==SWAP_LABEL_RB))
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+graph.bottomshift,graph.y+graph.h-25,100,20)
	}

if((action==SET_RIGHTLABEL)||(action==SWAP_LABEL_LR)||(action==SWAP_LABEL_TR)||(action==SWAP_LABEL_BR))
	{
	var graph = graphs[graphindex];
	ctx.fillStyle = GRAY;
	ctx.fillRect(graph.x+graph.w-25,graph.y+graph.h-SLOTW-graph.rightshift,20,100);
	}
if(action==SET_LABELN)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY
	ctx.fillRect(graph.x+graph.w-105,graph.y+graph.hbar+graph.uppershift+25*destlabelindex,100,20)	
	}

if(action==SET_VALUEI)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY;
	var y = graph.y+graph.hbar+graph.uppershift+25*destvalueindex;
	ctx.fillRect(graph.x+graph.w-105,y,100,20)	;
	}

if(action==PASTE_RESULT_I)
	{
	var graph = graphs[graphindex2];
	ctx.fillStyle = GRAY;
	var y = graph.y+graph.hbar+graph.uppershift+25*destvalueindex;
	ctx.fillRect(graph.x+graph.w-105,y,100,20)	;
	}

if(action==SET_VALUEJ)
	{
	var graph = graphs[graphindex]
	ctx.fillStyle = GRAY;
	var y = getListOffset(graph)+(SLOTH+5)*destvalueindex;
	ctx.fillRect(graph.x+graph.w-105,y,100,20)	;
	}

if(action==PASTE_RESULT_J)
	{
	var graph = graphs[graphindex2];
	ctx.fillStyle = GRAY;
	var y = getListOffset(graph)+(SLOTH+5)*destvalueindex;
	ctx.fillRect(graph.x+graph.w-105,y,100,20)	;
	}

if((action==DRAG_AXIS)||(action==DRAG_RESULT))
	{
	ctx.fillStyle = GRAY
	ctx.fillRect(ptmove.x-10,ptmove.y-10,20,20)
	}

if((action==DRAG_TABLE)||
	(action==DRAG_DUSTBIN)||
	(action==DRAG_HELP)||
	(action==DRAG_ADD)||
	(action==DRAG_CLONE)||
	(action==EXPORT_CHART)||
	(action==DRAG_SORT)||
	(action==DRAG_PICTURE))
	{
	ctx.strokeStyle = GRAY
	ctx.strokeRect(ptmove.x-10,ptmove.y-10,20,20);
	}

if((action==ADD_LABEL)||(action==SHOW_LABEL))
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-100,0,100,(zlabel-alabel)*20);
	}
if((action==SORT_DATA)&&(labelindex>=0))
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-120,myheight-40,20,20);
	ctx.fillRect(mywidth-100,(labelindex-alabel)*20,100,20);
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
	ctx.fillRect(graph.x,graph.y+graph.hbar,graph.w,graph.h-graph.hbar)
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
	(action==CREATE_BINSET)||(action==SET_VALUESELECTION))
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
else if((action==REMOVE_LEFTLABEL)||(action==REMOVE_LEFTVALUE)||(action==REMOVE_RIGHTLABEL))
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
else if(action==DRAG_RIGHTLABEL)
	{
	var graph = graphs[graphindex];
	ctx.fillStyle = GRAY;
	ctx.fillRect(graph.x+graph.w-25,ptmove.y-50,20,100);
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
else if(action==DRAG_VALUELIST)
	{
	var graph = graphs[graphindex];
	ctx.fillStyle = GRAY;
	ctx.fillRect(graph.x+graph.w-105,ptmove.y,100,20);
	}
else if(action==DRAG_LABELLIST)
	{	
	var graph = graphs[graphindex];
	ctx.fillStyle = GRAY;
	ctx.fillRect(graph.x+graph.w-105,ptmove.y,100,20);
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

 if((action==SWAP_LABEL_LT)||(action==SWAP_LABEL_BT)||(action==SWAP_LABEL_RT))
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex];
	ctx.fillRect(graph.x+graph.w-100-graph.topshift,graph.y+graph.hbar+5,100,20)
	}
else
if((action==SWAP_LABEL_TL)||(action==SWAP_LABEL_BL)||(action==SWAP_LABEL_RL))
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex];
	ctx.fillRect(graph.x+5,graph.y+graph.hbar+graph.leftshift,20,100)
	}
else if(action==SWAP_LABELN)
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex]
	ctx.fillRect(graph.x+graph.w-105,graph.y+graph.hbar+graph.uppershift+25*destlabelindex,100,20)
	}
else if((action==SWAP_VALUEI)||(action==SWAP_VALUEJI))
	{
	ctx.fillStyle = GRAY
	var graph = graphs[graphindex]
	var y = graph.y+graph.hbar+graph.uppershift+25*destvalueindex;
	ctx.fillRect(graph.x+graph.w-105,y,100,20)
	}
else if((action==SWAP_VALUEJ)||(action==SWAP_VALUEIJ))
	{
	ctx.fillStyle = GRAY;
	var graph = graphs[graphindex];
	var y =  getListOffset(graph) + (SLOTH+5)*destvalueindex;
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
	ctx.fillRect(mywidth-100+i*20,(zlabel-alabel)*20+20+j*20,20,20)
	}
else if((action==CONVERT_LABEL)||(action==ADD_VALUE)||(action==CREATE_PROJECTION)||(action==CREATE_VBOOLEAN)||(action==SHOW_VALUE)||(action==SAVE_VALUESET)||(action==CREATE_RESULT))
	{	
	ctx.fillStyle = GRAY
	ctx.fillRect(mywidth-100,(zlabel-alabel)*20+20+ni*20+20,100,
		(zvalue-avalue)*20);
	}
else if((action==SORT_DATA)&&(valueindex>=0))
	{
	ctx.fillStyle = GRAY;
	ctx.fillRect(mywidth-120,myheight-40,20,20);
	ctx.fillRect(mywidth-100,
		(zlabel-alabel)*20+20+ni*20+20+20*(valueindex-avalue),100,20);
	}
else if((action==CREATE_LABEL)||(action==CREATE_KGROUP)||(action==CREATE_LBOOLEAN)||(action==CONVERT_VALUE)||(action==SAVE_LABELSET))
	{
	ctx.fillStyle = GRAY
	ctx.fillRect(mywidth-100,0,100,(zlabel-alabel)*20)
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
	ctx.fillRect(mywidth-100,0,100,(zlabel-alabel)*20);
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
if(typeof(process)!="undefined")
	{
	var mem= process.memoryUsage();
	ctx.strokeStyle = "#CCCCCC";
	ctx.strokeRect(40,myheight-15,50,10);
	ctx.fillRect(40,myheight-15,50*mem.heapUsed/mem.heapTotal,10);
	}

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
	console.log(e.stack); 
	}


	function drawHandle(y)
	{
	ctx.fillStyle = "rgba(0,0,0,0.3)";
	ctx.beginPath();
	ctx.moveTo(mywidth-30,y);
	ctx.arc(mywidth-50,y,20,0,Math.PI,false);
	ctx.closePath();
	ctx.fill();
	}

	function drawScrollBar(y,a,z,l)
	{	
	var h = (z-a)*SLOTH;

	ctx.fillStyle = "rgba(0,0,0,0.1)";
	ctx.fillRect(mywidth-20,y,20,h);

	var y1 = h*a/l+y;
	var y2 = h*z/l+y;
	ctx.fillStyle = "rgba(0,0,0,0.3)";
	ctx.fillRect(mywidth-20,y1,20,y2-y1);

	ctx.strokeStyle = "rgba(0,0,0,0.3)";
	ctx.strokeRect(mywidth-20,y,20,h);
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

var font = ctx.font;
ctx.font = "12px helvetica";
ctx.textAlign = "center";

var x = ptclick.x
var y = ptclick.y;

if(graph.options.length>0)
	{
	var no = graph.options.length;
	for(var i=0;i<no;i++)
		{
		ctx.fillStyle = "#DDDDDD";
		ctx.fillRect(x,y+i*14,100,14);
		ctx.fillStyle = "#000000";
		ctx.fillText(graph.options[i],x+50,y+i*14+12);
		}
	}
else if(GINFO[graph.type].options)
	{
	var no = GINFO[graph.type].options;
	for(var i=0;i<no;i++)
		{
		ctx.fillStyle = "#DDDDDD";
		ctx.fillRect(x,y+i*14,100,14);
		ctx.fillStyle = "#000000";
		ctx.fillText("Option "+(i+1),x+50,y+i*14+12);
		}
	}
else
	return;

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
var hasoption = GINFO[graph.type].options || graph.options;
if(!hasoption) return;

ctx.fillStyle = "#666666";
ctx.fillRect(graph.x+20,graph.y+3,10,2);
ctx.fillRect(graph.x+20,graph.y+7,10,2);
ctx.fillRect(graph.x+20,graph.y+11,10,2);

}

//*********************************************************************

function drawGraphError(ctx,graph)
{
var xc = graph.x+graph.w/2;
var yc = graph.y+graph.h/2;

ctx.textAlign = "center";
ctx.fillStyle = "#000000";
ctx.fillText(graph.error,xc,yc);
}

//*********************************************************************

function drawGraphMenu(ctx,graph)
{
if(!GINFO[graph.type].menu) return;

var menu = getGraphMenu(graph);
var selected = graph[GINFO[graph.type].menu];

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

if((faction==SELECT_MENUITEM)&&(graphs[graphindex]==graph))
	{
	var n = menu.length;
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(x-w/2,y+21,w,20*n);

	ctx.fillStyle = "#000000";
	for(var i=0;i<n;i++)		
		if(menu[i]=="-")
			ctx.fillRect(x-w/2+10,y+28+20*i,w-20,2);
		else		
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

function getGraphPlaceholder(graph,name)
{
return graph.placeholder[name] || "";
}

//*********************************************************************

function drawGraphProgress(ctx,graph)
{
var w = graph.w - 40;
var x = graph.x+graph.w/2;
var y = graph.y + graph.hbar + (graph.h-graph.hbar)/2;
var h = 20;

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(x-w/2,y-h/2,w,h);

ctx.fillStyle = BG;
ctx.fillRect(x-w/2,y-h/2,w*graph.progress,h);

ctx.strokeStyle = "#000000";
ctx.strokeRect(x-w/2,y-h/2,w,h);
}

//*********************************************************************

function drawGraphSlots(ctx,graph)
{
if(GINFO[graph.type].toplabel)
	{
	var title = getGraphLabel(graph,"toplabel");
	var alt = graph.placeholder["toplabel"];
	drawHLabel(ctx,graph.x+graph.w-SLOTW-graph.topshift,graph.y+graph.hbar+5,title,alt);
	}

if(GINFO[graph.type].leftlabel)
	{
	var title = getGraphLabel(graph,"leftlabel");
	var alt = graph.placeholder["leftlabel"];
	drawVLabel(ctx,graph.x+5,graph.y+graph.hbar+graph.leftshift,title,alt);
	}

if(GINFO[graph.type].bottomlabel)
	{
	var title = getGraphLabel(graph,"bottomlabel");
	var alt = graph.placeholder["bottomlabel"];
	drawHLabel(ctx,graph.x+graph.bottomshift,graph.y+graph.h-25,title,alt);
	}

if(GINFO[graph.type].rightlabel)
	{
	var title = getGraphLabel(graph,"rightlabel");
	var alt = graph.placeholder["rightlabel"];
	drawVLabel(ctx,graph.x+graph.w-SLOTH-5,graph.y+graph.h-SLOTW-graph.rightshift,title,alt);
	}

if(GINFO[graph.type].ilabels)
	{
	var y = graph.y + graph.hbar + graph.uppershift;
	for(var k=0;k<graph.ilabels.length;k++)
		{
		var title = labels[graph.ilabels[k]]
		var alt = graph.placeholder["ilabels"+k];
		drawHLabel(ctx,graph.x+graph.w-SLOTW-5,y+25*k,title,alt);
		}
	if(graph.ilabels.length<graph.limit.ilabels)
		{
		var alt = graph.placeholder["ilabels"+k];
		drawHLabel(ctx,graph.x+graph.w-SLOTW-5,y+25*graph.ilabels.length,"",alt);
		}
	}

if(GINFO[graph.type].topvalue)
	{
	var title = getGraphValue(graph,"topvalue");
	var alt = graph.placeholder["topvalue"];
	drawHValue(ctx,graph.x+graph.w-SLOTW-graph.topshift,graph.y+graph.hbar+5,title,alt);
	}

if(GINFO[graph.type].leftvalue)
	{
	var title = getGraphValue(graph,"leftvalue");
	var alt = graph.placeholder["leftvalue"];
	drawVValue(ctx,graph.x+5,graph.y+graph.hbar+graph.leftshift,title,alt);
	}

if(GINFO[graph.type].bottomvalue)
	{
	var title = getGraphValue(graph,"bottomvalue");
	var alt = graph.placeholder["bottomvalue"];
	drawHValue(ctx,graph.x+graph.bottomshift,graph.y+graph.h-25,title,alt);
	}

var dy = SLOTH+5;
if(GINFO[graph.type].ivalues)
	{
	var y = graph.y + graph.hbar + graph.uppershift;
	for(var k=0;k<graph.ivalues.length;k++)
		{
		var title = values[graph.ivalues[k]]		
		var alt = graph.placeholder["ivalues"+k];
		drawHValue(ctx,graph.x+graph.w-SLOTW-5,y+dy*k,title,alt);
		}
	if(graph.ivalues.length<graph.limit.ivalues)
		{
		var alt = graph.placeholder["ivalues"+k];
		drawHValue(ctx,graph.x+graph.w-SLOTW-5,y+dy*graph.ivalues.length,"",alt);
		}
	}

if(GINFO[graph.type].jvalues)
	{
	var y =  getListOffset(graph);
	for(var k=0;k<graph.jvalues.length;k++)
		{
		var title = values[graph.jvalues[k]];
		var alt = graph.placeholder["jvalues"+k];
		drawHValue(ctx,graph.x+graph.w-SLOTW-5,y,title,alt);
		y += dy;
		}
	if(graph.jvalues.length<graph.limit.jvalues)
		{
		var alt = graph.placeholder["jvalues"+k];
		drawHValue(ctx,graph.x+graph.w-SLOTW-5,y,"",alt);
		}
	}

}

//*********************************************************************

function getListOffset(graph)
{
var offset = 0;

if(GINFO[graph.type].ilabels)
	{
	offset += graph.ilabels.length;
	if(graph.ilabels.length<graph.limit.ilabels)
		offset++;
	}

if(GINFO[graph.type].ivalues)
	{
	offset += graph.ivalues.length;
	if(graph.ivalues.length<graph.limit.ivalues)
		offset++;
	}

offset *= (SLOTH+5);
offset += graph.y + graph.hbar + graph.uppershift + (SLOTH+5);

return offset;
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
		var newsort = labelindex;
		}

	if(valueindex>0)
		{
		indices.sort(compareValues);
		var newsort = -valueindex;	
		}
	
	var neworder = (lastsort==newsort) ? 1-lastorder : 1;

	// new records
	var newlrecords = new Array(n);
	var newvrecords = new Array(n);


	if(neworder==1)
		{
		for(var i=0;i<n;i++)
			{
			newlrecords[n-1-i] = lrecords[indices[i]];
			newvrecords[n-1-i] = vrecords[indices[i]];
			}		
		}
	else
		{
		for(var i=0;i<n;i++)
			{
			newlrecords[i] = lrecords[indices[i]];
			newvrecords[i] = vrecords[indices[i]];
			}
		}


	lrecords = newlrecords;
	vrecords = newvrecords;

	lastorder = neworder;
	lastsort = newsort;

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
//*********************************************************************
//			C U R V E S 
//*********************************************************************
//*********************************************************************


function drawNormalCurve(ctx,graph,y,min,max,t,letter,cv,both)
{
var dy = 200;
var dx = graph.w-40;
var x = graph.x+20;	
y += 220;

ctx.strokeStyle = "#000000";
ctx.strokeRect(x,y-dy,dx,dy);

ctx.lineWidth = 1;

// max value 
var dmax = 0;
for(var i=0;i<=100;i++)
	{
	var d = dnorm(min+(max-min)*i/100);
	if(d>dmax) dmax = d;
	}

ctx.fillStyle = hdotted;
for(var bar=0.1;bar<=dmax;bar+=0.1)
	ctx.fillRect(x,y-bar*dy/dmax,dx,1);

ctx.save();
ctx.fillStyle = "#CCCCCC";
ctx.font = "8px helvetica";
ctx.textAlign = "right";
for(var bar=0.1;bar<dmax;bar+=0.1)
	ctx.fillText(""+(Math.round(bar*10)/10),x-4,y-bar*dy/dmax+4);
ctx.restore();

ctx.textAlign = "center";

ctx.strokeStyle = "#000000";
ctx.beginPath();
for(var i=0;i<=100;i++)
	{
	var d = dnorm(min+(max-min)*i/100);
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

// fill CV area
ctx.fillStyle = "#000000";
var j = Math.round((cv-min)*100/(max-min));

ctx.beginPath();
for(var i=j;i<=100;i++)
	{
	var d = dnorm(min+(max-min)*i/100);
	if(i==0)
		ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
	else
		ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
	}
ctx.lineTo(x+dx,y);
ctx.lineTo(x+dx*j/100,y);
ctx.fill();


if(both)
	{
	var j = Math.round((-cv-min)*100/(max-min));
	if(j<0) j = 0;

	ctx.beginPath();
	for(var i=0;i<=j;i++)
		{
		var d = dnorm(min+(max-min)*i/100);
		if(i==0)
			ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
		else
			ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
		}
	ctx.lineTo(x+dx*j/100,y);
	ctx.lineTo(x,y);
	ctx.fill();
	}

ctx.textAlign = "center";

var xx = x+dx*(t-min)/(max-min);
ctx.fillText(letter,xx,y+24);	
ctx.beginPath();
ctx.moveTo(xx,y+2);
ctx.lineTo(xx,y+12);
ctx.stroke();

var xx = x+dx*(cv-min)/(max-min);
ctx.fillText("C",xx,y+24);
ctx.beginPath();
ctx.moveTo(xx,y+2);
ctx.lineTo(xx,y+12);
ctx.stroke();

if(both)
	{
	var xx = x+dx*(-cv-min)/(max-min);
	ctx.fillText("C",xx,y+24);
	ctx.beginPath();
	ctx.moveTo(xx,y+2);
	ctx.lineTo(xx,y+12);
	ctx.stroke();
	}

}

//*********************************************************************

function drawTCurve(ctx,graph,y,dof,min,max,t,letter,cv)
{

var dy = 200;
var dx = graph.w-40;
var x = graph.x+20;	
y += 220;

ctx.strokeStyle = "#000000";
ctx.strokeRect(x,y-dy,dx,dy);

var dmax = 0
for(var i=0;i<=100;i++)
	{
	var d = dt(min+(max-min)*i/100,dof);
	if(d>dmax) dmax = d;
	}

ctx.save();
ctx.fillStyle = "#CCCCCC";
ctx.strokeStyle = "#CCCCCC";
ctx.textAlign = "center";
ctx.fillText("T("+dof+")",x+dx/2,y-dy-5);
ctx.font = "8px helvetica";
ctx.textAlign = "right";

for(var bar=0.1;bar<dmax;bar+=0.1)
	ctx.fillText(""+(Math.round(bar*10)/10),x-4,y-bar*dy/dmax+4);

ctx.fillStyle = hdotted;
for(var bar=0.1;bar<dmax;bar+=0.1)
	ctx.fillRect(x,y-bar*dy/dmax,dx,1);

ctx.restore();

ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.beginPath();
for(var i=0;i<=100;i++)
	{
	var d = dt(min+(max-min)*i/100,dof);
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
var j = Math.round((cv-min)*100/(max-min));

ctx.beginPath();
for(var i=j;i<=100;i++)
	{	
	var d = dt(min+(max-min)*i/100,dof);
	if(i==j)
		ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
	else
		ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
	}
ctx.lineTo(x+dx,y);
ctx.lineTo(x+dx*j/100,y);
ctx.closePath();
ctx.fill();


ctx.beginPath();
for(var i=0;i<=100-j;i++)
	{	
	var d = dt(min+(max-min)*i/100,dof);
	if(i==0)
		ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
	else
		ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
	}
ctx.lineTo(x+dx*(100-j)/100,y);
ctx.lineTo(x,y);
ctx.closePath();
ctx.fill();


ctx.textAlign = "center";

var ratio = (t-min)/(max-min);
ctx.fillText("T",x+dx*ratio,y+25);	
ctx.beginPath();
ctx.moveTo(x+dx*ratio,y+2);
ctx.lineTo(x+dx*ratio,y+12);
ctx.stroke();

var ratio = (cv-min)/(max-min);
ctx.fillText("C",x+dx*ratio,y+25);
ctx.beginPath();
ctx.moveTo(x+dx*ratio,y+2);
ctx.lineTo(x+dx*ratio,y+12);
ctx.stroke();

ratio = (-cv-min)/(max-min);
ctx.fillText("C",x+dx*ratio,y+25);
ctx.beginPath();
ctx.moveTo(x+dx*ratio,y+2);
ctx.lineTo(x+dx*ratio,y+12);
ctx.stroke();

}

//*********************************************************************

function drawChi2Curve(ctx,graph,y,dof,min,max,t,letter,cv)
{

ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;


var dy = 200;
var dx = graph.w-40;

var x = graph.x+20;	
y += 220;

var dmax = 0;
for(var i=1;i<=100;i++)
	{
	var d = dchisq(max*i/100,dof);
	if(d>dmax) dmax = d;
	}

ctx.fillStyle = "#000000";
ctx.strokeRect(x,y-dy,dx,dy);

ctx.fillStyle = hdotted;
var barstep = dmax< 1? 0.1 : dmax < 5 ? 0.2 : 0.5;
for(var bar=0.1;bar<dmax;bar+=barstep)
	ctx.fillRect(x,y-bar*dy/dmax,dx,1);

ctx.save();
ctx.font = "8px helvetica";
ctx.textAlign = "right";
ctx.fillStyle = "#CCCCCC";
for(var bar=0.1;bar<dmax;bar+=barstep)
	ctx.fillText(""+(Math.round(bar*10)/10),x-4,y-bar*dy/dmax+4);
ctx.restore();

ctx.fillStyle = "#CCCCCC";
ctx.textAlign = "center";
ctx.fillText("\u03C72("+dof+")",x+dx/2,y-dy-5);

ctx.strokeStyle = "#000000";
ctx.beginPath();
for(var i=1;i<=100;i++)
	{
	var d = dchisq(max*i/100,dof);
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
	var d = dchisq(max*i/100,dof);
	if(i==0)
		ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
	else
		ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
	}
ctx.lineTo(x+dx,y);
ctx.lineTo(x+dx*j/100,y);
ctx.fill();

ctx.fillText(letter,x+dx*t/max,y+25);	
ctx.beginPath();
ctx.moveTo(x+dx*t/max,y+2);
ctx.lineTo(x+dx*t/max,y+12);
ctx.stroke();

ctx.fillText("C",x+dx*cv/max,y+25);
ctx.beginPath();
ctx.moveTo(x+dx*cv/max,y+2);
ctx.lineTo(x+dx*cv/max,y+12);
ctx.stroke();
}

//*********************************************************************

function drawFisherCurve(ctx,graph,y,dof1,dof2,min,max,f,letter,cv)
{
var dy = 200;
var dx = graph.w-55;
var x = graph.x+20;	
y += 220;

ctx.strokeStyle = "#000000";
ctx.strokeRect(x,y-dy,dx,dy);

ctx.lineWidth = 1;

// max value along x
var dmax = 0;
for(var i=0;i<=100;i++)
	{
	var d = df(max*i/100,dof1,dof2);
	if(d>dmax) dmax = d;
	}

var bstep = 0.1;
if(dmax<0.2) bstep = 0.05;
ctx.fillStyle = hdotted;
for(var bar=bstep;bar<=dmax;bar+=bstep)
	ctx.fillRect(x,y-bar*dy/dmax,dx,1);

ctx.save();
ctx.font = "8px helvetica";
ctx.textAlign = "right";
ctx.fillStyle = "#CCCCCC";
for(var bar=bstep;bar<dmax;bar+=bstep)
	ctx.fillText(""+(Math.round(bar*20)/20),x-4,y-bar*dy/dmax+4);
ctx.restore();


ctx.fillStyle = "#CCCCCC";
ctx.textAlign = "center";
var d1 = Math.round(dof1*100)/100;
var d2 = Math.round(dof2*100)/100;
ctx.fillText("F("+d1+","+d2+")",x+dx/2,y-dy-5);

ctx.strokeStyle = "#000000";
ctx.beginPath();
for(var i=0;i<=100;i++)
	{
	var d = df(max*i/100,dof1,dof2);
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
	var d = df(max*i/100,dof1,dof2);
	if(i==0)
		ctx.moveTo(x+dx*i/100,y-d*dy/dmax);
	else
		ctx.lineTo(x+dx*i/100,y-d*dy/dmax);
	}
ctx.lineTo(x+dx,y);
ctx.lineTo(x+dx*j/100,y);
ctx.fill();

ctx.textAlign = "center";

ctx.fillText(letter,x+dx*f/max,y+24);	
ctx.beginPath();
ctx.moveTo(x+dx*f/max,y+2);
ctx.lineTo(x+dx*f/max,y+12);
ctx.stroke();

ctx.fillText("C",x+dx*cv/max,y+24);
ctx.beginPath();
ctx.moveTo(x+dx*cv/max,y+2);
ctx.lineTo(x+dx*cv/max,y+12);
ctx.stroke();

}

//*********************************************************************
//*********************************************************************
//			D I S T R I B U T I O N S 
//*********************************************************************
//*********************************************************************

function gamma(z)
{
    return Math.exp(logamma(z));
}

//*********************************************************************

pgamma = [ 676.5203681218851,   -1259.1392167224028,  771.32342877765313,
         -176.61502916214059,     12.507343278686905, -0.13857109526572012,
            9.9843695780195716e-6, 1.5056327351493116e-7];
function logamma(z)
{
z = z-1;
var x = 0.99999999999980993;
for(var i=0;i<pgamma.length;i++)
	x += pgamma[i]/(z+i+1);

t = z+pgamma.length-0.5;
return Math.log(Math.PI*2)*0.5+ (z+0.5)*Math.log(t)-t+Math.log(x);
}

//*********************************************************************

function beta(x,y)
{
return Math.exp(logamma(x)+logamma(y)-logamma(x+y));
}

//*********************************************************************
//		STUDENT DISTRIBUTION

function dt(t,dof)
{
var a = logamma((dof+1)/2)
    -(dof+1)*Math.log(1+t*t/dof)/2
    -Math.log(Math.PI*dof)/2-logamma(dof/2);

return Math.exp(a);
}

//*********************************************************************

function qt(t,dof)
{
if(dof==1)	
	{
	var min = -5000;
	var max = 5000;
	}
else
	{
	var min = -100;
	var max = 100;
	}

while(true)	
	{
	var med = (min+max)/2;
	var p = pt(med,dof);
	if(p<t)
		min = med;
	else
		max = med;
	if(Math.abs(max-min)<1e-5) break;
	}
return med;
}

//*********************************************************************

function pt(t,dof)
{
// Simpson's rule
var n = Math.round(t)*2;
if(n<500) n = 500;
var b = t;
var a = -100;
var s = 0;
for(var i=0;i<=n;i++)
    {
    var x = a+(b-a)*i/n;
    if(i==0)
        s += dt(x,dof);
    else if(i==n)
        s += dt(x,dof);
    else if((i%2)==0)
        s += 2*dt(x,dof);
    else
        s += 4*dt(x,dof);
    }
return s*(b-a)/3/n;
}

//*********************************************************************
//		NORMAL DISTRIBUTION

function dnorm(x) {
    return Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);
}

//*********************************************************************

function pnorm(x) {
    if(x<0)
        return 1 - pnorm(-x);

var b0 = 0.2316419;
var b1 = 0.319381530;
var b2 = -0.356563782;
var b3 = 1.781477937;
var b4 = -1.821255978;
var b5 = 1.330274429

var t = 1/(1+b0*x);

return 1-dnorm(x)*( b1*t+b2*t*t+b3*t*t*t+b4*t*t*t*t+b5*t*t*t*t*t);
}

//*********************************************************************

function qnorm(x)
{
var min = -10;
var max = 10;
while(true)
	{
	var med = (min+max)/2; 
	var p = pnorm(med);
	if(p<x)
		min = med;
	else
		max = med;
	if(Math.abs(max-min)<1e-7) break;
	}
return med;
}

//*********************************************************************
//		FISHER DISTRIBUTION

function df(x,d1,d2)
{
var a = d1*Math.log(d1*x)/2+d2*Math.log(d2)/2-(d1+d2)*Math.log(d1*x+d2)/2;
var b = Math.exp(a);
var c = beta(d1/2,d2/2);
return b/(x*c);
}

//*********************************************************************

//function Finv(min,max,value,d1,d2)
function qf(value,d1,d2)
{
var min = 0;
var max = d1+d2 < 2 ? 5000 : 1000;
while(true)
    {
    var med = (min+max)/2;
    var x = pf(med,d1,d2);
    if(x<value)
        min = med;
    else
        max = med;
	if(Math.abs(max-min)<1e-6) break;
    }

return med;
}

//*********************************************************************

function pf(f,df1,df2)  {

	var LJspin = function(q, i, j, b) {
		var zz = 1;
		var z = zz;
		var k = i;
		while (k <= j) {
			zz = zz * q * k / (k - b);
			z = z + zz;
			k = k + 2
		}
		return z
	};

	var pj2 = Math.PI / 2;
	var x = df2 / (df1 * f + df2);
	if ((df1 % 2) == 0) {
		return 1- LJspin(1 - x, df2, df1 + df2 - 4, df2 - 2) * Math.pow(x, df2 / 2)
	}
	if ((df2 % 2) == 0) {
		return LJspin(x, df1, df1 + df2 - 4, df1 - 2) * Math.pow(1 - x, df1 / 2)
	}
	var tan = Math.atan(Math.sqrt(df1 * f / df2));
	var a = tan / pj2;
	var sat = Math.sin(tan);
	var cot = Math.cos(tan);
	if (df2 > 1) {
		a = a + sat * cot * LJspin(cot * cot, 2, df2 - 3, -1) / pj2
	}
	if (df1 == 1) {
		return a
	}
	var c = 4 * LJspin(sat * sat, df2 + 1, df1 + df2 - 4, df2 - 2) * sat * Math.pow(cot, df2) / Math.PI;
	if (df2 == 1) {
		return  a - c / 2
	}
	var k = 2;
	while (k <= (df2 - 1) / 2) {
		c = c * k / (k - .5);
		k = k + 1
	}
        return  a - c;
}

//*********************************************************************
//		CHI SQUARE DISTRIBUTION

function dchisq(x,k)
{
var a = (k/2-1)*Math.log(x);
var b = -x/2;
var c = k/2*Math.log(2);
var d = logamma(k/2);
return Math.exp(a+b-c-d);
}

//*********************************************************************

function qchisq(x,df) {
var min = 0;
var max = 5000;
while(true)	
	{
	var med = (min+max)/2;
	var p = pchisq(med,df);
	if(p<x)
		min = med;
	else
		max = med;
	if(Math.abs(max-min)<1e-6) break;
	}
return med;
}

//*********************************************************************

function pchisq(x,df) {
    var a, y, s;
    var e, c, z;
    var even;                     /* True if df is an even number */

    var LOG_SQRT_PI = 0.5723649429247000870717135; /* log(sqrt(pi)) */
    var I_SQRT_PI = 0.5641895835477562869480795;   /* 1 / sqrt(pi) */
	var BIGX = 20;

    if (x <= 0.0 || df < 1) {
        return 0;
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
            return 1-s;
        } else {
            e = (even ? 1.0 : (I_SQRT_PI / Math.sqrt(a)));
            c = 0.0;
            while (z <= x) {
                e = e * (a / z);
                c = c + e;
                z += 1.0;
            }
            return 1-(c * y + s);
        }
    } else {
        return 1- s;
    }


	function ex(x) { return x < -20 ? 0 : Math.exp(x) }
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

function invM(x)
{
var m = x.length;
var n = x[0].length;

var Ai,Aj,Ii,Ij;

var A = clone(x);
var I = identityM(m);

var i,j,k,x;
for(j=0;j<n;++j) {
	var i0 = -1;
	var v0 = -1;
	for(i=j;i!==m;++i) {k=Math.abs(A[i][j]); if(k>v0) { i0 = i; v0 = k; } }
	Aj = A[i0]; A[i0] = A[j]; A[j] = Aj;
	Ij = I[i0]; I[i0] = I[j]; I[j] = Ij;
	x = Aj[j];
	for(k=j;k!==n;++k)    Aj[k] /= x;
	for(k=n-1;k!==-1;--k) Ij[k] /= x;
	for(i=m-1;i!==-1;--i) {
		if(i!==j) {
			Ai = A[i];
			Ii = I[i];
			x = Ai[j];
			for(k=j+1;k!==n;++k)  Ai[k] -= Aj[k]*x;
			for(k=n-1;k>0;--k) { Ii[k] -= Ij[k]*x; --k; Ii[k] -= Ij[k]*x; }
			if(k===0) Ii[0] -= Ij[0]*x;
			}
		}
	}

return I;
	
}

//*********************************************************************

// generalized inverse

function ginv(A)
{

var ATA = multMM(transpM(A),A);
var n1 = ATA.length;
var d1 = vector(n1);
var e1 = vector(n1);
tred(ATA,d1,e1,n1);
tql2(ATA,d1,e1,n1);


var AAT = multMM(A,transpM(A));
var n2 = AAT.length;
var d2 = vector(n2);
var e2 = vector(n2);
tred(AAT,d2,e2,n2);
tql2(AAT,d2,e2,n2);


var D = matrix(n1,n2);
var p = Math.min(n1,n2);
for(var i=0;i<p;i++)
	if(d1[i]>0)
		D[i][i] = 1/ Math.sqrt(d1[i]);

return multMM(AAT,multMM(D,transpM(ATA)));
}

//*********************************************************************

var lastMillis = 0;

function chrono(text)
{
var millis = Date.now();
if(text)
	console.log(text+" "+(millis-lastMillis)+" ms");
lastMillis = millis;
}

//*********************************************************************

var nimg = new Image();
nimg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAACSNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuMS4yIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIvPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4s45Y3AAACIUlEQVR4nKyVX0hTcRTHL+xFvBWspB56TdKHng2FgS/hkxCx1LWSqDCvI8hZpNuSmJgxC3wRbVCECncOc4kZQT7eBeJmWtTmQ96EWnrnHMv9k21fb7+Hwbj350bt4byc8zmf3zk/fvBjGIZBWQMob/y3IBaLwel8DoOhDYNDDjooSRIWFz/gMFkykUCjTkdW1Wg0GH46Qoc7bt1EZSWL31vbVOk0z+Oq8RoErxeiKCKTzdKFDefryckzMx5VYS6Xg/luN6RwpKCuKotGI2i60AT2CIu2K+2qws0fInp67ilqqsLVFT8e2vrRor8E7YlTCO9EFI1ulwsvXr4qTTg1MQGed2PWzZO1XdOvFY2W3j58+fqtNKHNasXKpzVEwhK0x46iufliQWN87w+4zi6k0/vFhel0Crc7OrEXTxDYaGhBRQWL7xtivnl5aQl2+4Dq3SoSn9dWYbHY8vC7t/Nk7SHHs3zOOT6GWc9cacLx0VG8mZvPw8l4HDXVZ1BTew7JVIrkzd1mbIibxYVZ+WHeMZnkt7VTADuePCZTeuSD9uUr4TgTMplMcaHft4zePqsCDP36iarjWjToGuEVBNgHBlVlRLgeDGJycgqhUAhdHAdB+KgK2x/1kynr6uqxsPCeLrQ+uE9AlmXRfv0GFYzu7qL2bDWqTp7G1naYLvT7fLis16O11SiDEhX8G4FAAMHg+qEMtfCvwZT7CzgAAAD//wMAnjM6meysAo4AAAAASUVORK5CYII=";

