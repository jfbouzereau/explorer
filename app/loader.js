var fs = require("fs");

exports.load = load;
exports.clipboard = clipboard;

// check if console is working

try	{
	console.log("TEST");
	}
catch(e)
	{
	console = {log:function(){}};
	}

var data = [];

//****************************************************************************

function load(filename,callback)
{
console.log("LOADING "+filename);
try	{
	var content = fs.readFileSync(filename);
	}
catch(err)
	{
	console.log(err);
	callback(null);
	}

	if(filename.toLowerCase().indexOf(".dbf")==filename.length-4)
		process_dbase_content(content,callback);
	else if(filename.toLowerCase().indexOf(".sdd")==filename.length-4)
		process_sdd_content(content,callback);
	else if(filename.toLowerCase().indexOf(".ws")==filename.length-3)
		process_mlwin_content(content,callback);
	else
		process_content(content,filename,callback);
}

//****************************************************************************

function clipboard(content,callback)
{
process_content(content,"",callback);
}

//****************************************************************************

function process_content(content,filename,callback)
{
console.log("process_content "+content.length);

if(check(content,'P','K',0x03,0x04))
	process_xlsx_content(content,callback);

else if(check(content,'m','y','s','q','l'))
	process_mysql_content(content,callback);

else if(check(content,'p','o','s','t','g','r','e','s'))	
	process_postgres_content(content,callback);

else if(check(content,'h','t','t','p'))
	process_http_content(content,callback);

else if(check(content,'['))
	process_json_content(content,callback);

else if(check(content,0x1F,0x8B))
	process_gzip_content(content,callback);

else if(check(content,'B','Z','h'))
	process_bzip2_content(content,callback);

else if(check(content,0xFD,'7','z','X','Z',0x00))
	process_xz_content(content,callback);

else if(check(content,'R','D','X','2'))
	process_xdr_content(content,callback);

else if(check(content,'$','F','L','2'))
	process_spss_content(content,callback);

else if(check(content,0x00,0x01,0x00,0x00,
	'S','t','a','n','d','a','r','d',' ','J','e','t',' ','D','B'))
	process_mdb_content(content,callback);

else if(check(content,0x00,0x01,0x00,0x00,
	'S','t','a','n','d','a','r','d',' ','A','C','E',' ','D','B'))
	process_mdb_content(content,callback);

else if(check(content,0x00,0x00,0xFF,0xFF))
	process_jmp_content(content,callback);

else if(check(content,0xC3,0xFF,0xFF,0xFF))
	process_lpj_content(content,callback);

else if(check(content,0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
                      0x0, 0x0, 0x0, 0x0, 0xc2,0xea,0x81,0x60,
                      0xb3,0x14,0x11,0xcf,0xbd,0x92,0x8, 0x0,
                      0x9, 0xc7,0x31,0x8c,0x18,0x1f,0x10,0x11))
	process_sas_content(content,callback);

else if(check(content,'W','O','R','K','S','H','E','E','T',' ',
	'S','T','O','R','E','D',' ','B','Y',' ','M','I','N','I','T','A','B'))
	process_mtw_content(content,callback);

else if((content[0]>=0x69)&&(content[0]<=0x72)&&(content[1]>=0x01)&&(content[1]<=0x02))
	process_stata_content(content,callback);

else if(check(content,'B','i','g','Q','u','e','r','y'))
	process_bigquery(content,callback);

else if(check(content,'m','o','n','g','o','d','b'))
	process_mongodb(content,callback);

else if(check(content,'m','s','s','q','l'))
	process_mssql(content,callback);

else if(check(content,'@','r','e','l','a','t','i','o','n'))
	process_keel(content,callback);

else
	process_tabular_content(content,callback);

}

//****************************************************************************

function check(header)
{

var n = arguments.length-1;

if(typeof(header)=="string")
	{
	var h = new Buffer(n);
	for(var i=0;i<n;i++)
		h = header.charCodeAt(i);	
	header = h;
	}

for(var i=0;i<n;i++)
	{
	var a = arguments[i+1];
	if(typeof(a)=="string") a = a.charCodeAt(0);
	if(a!=header[i]) return false;
	}

return true;
}

//****************************************************************************

function process_xlsx_content(content,callback)
{

console.log("process xlsx content "+content.length);

var zlib = require("zlib");

var offset,header,buffers,temp;
var lname,lextra,lcompress,lucompress;
var signature;
var strings = [];

try	{

	scan("xl/sharedStrings.xml",read_strings);
	scan("xl/worksheets/sheet1.xml",read_sheet);

	check_data_type(callback);
	}
catch(e)
	{
	console.log(e.stack);
	callback(null);
	}

	function scan(name,func)
	{
	header = new Buffer(30);
	temp = new Buffer(1000);
	offset = 0;
	buffer = null;

	while(true)
		{
		header = content.slice(offset,offset+30);
		offset += 30;

		signature = header.readUInt32LE(0);
		if(signature!= 0x04034B50) break;

		lname = header.readUInt16LE(26);
		lextra = header.readUInt16LE(28);
		lcompress = header.readUInt32LE(18);
		lucompress = header.readUInt32LE(22);

		temp = content.slice(offset,offset+lname+lextra);
		offset += lname+lextra;

		fname = temp.toString("utf8",0,lname);

		if(fname==name) {func(); return; }
		else
			offset += lcompress;
		}

	}
	
	function read_strings()
	{
	buffer = content.slice(offset,offset+lcompress);
	offset += lcompress;

	var b = zlib.inflateRawSync(buffer);
	b = b.toString("utf8",0,b.length);

	var result;
	var pattern = new RegExp("<si><t[^>]*>([^<]*)</t></si>","g");
	while((result=pattern.exec(b))!=null)
		strings.push(result[1]);
	}

	function read_sheet()
	{
	var row1 = null;

	buffer = content.slice(offset,offset+lcompress);
	offset += lcompress;

	var b = zlib.inflateRawSync(buffer);
	b = b.toString("utf8",0,b.length);

	var value;
	var pattern = new RegExp("<v>([^<]*)</v>");

	var k = 0;
	while(true)
		{
		var i = b.indexOf("<row",k);
		if(i<0) break;
		var j = b.indexOf("</row",i);
		if(j<0) break;
		var c = b.substring(i,j);	
		var row = [];
		var kk = 0;
		while(true)
			{
			var ii = c.indexOf("<c",kk);
			if(ii<0) break;
			var jj = c.indexOf("</c",ii);
			if(jj<0) break;
			var d = c.substring(ii,jj);
			var m = d.match("<v>([^<]*)</v>");
			value = m ? m[1]:"";
			if(d.indexOf('t="s"')>=0)
				value = strings[parseInt(value)];
			row.push(value);
			kk = jj+4;
			}
		if(row1==null) row1 = row;
		if(row.length==row1.length)
			data.push(row);
		k = j+6;	
		}
	}

}

//****************************************************************************

function process_http_content(content,callback)
{

content = content+"";

var remote = new Buffer(0);

var req = null;

try	{
	var obj = require("url").parse(content);

	if(obj.protocol=="http:")
		req = require("http").request(obj, receive);
	else if(obj.protocol=="https:")
		req = require("https").request(obj,receive);

	if(req)
		{
		req.on("error", function(err) {
			console.log("REQ ERR "+err);
			callback(null);
		});
		req.end();
		}

	}
catch(e)
	{
	console.log(e);
	callback(null);
	}

	function receive(res) {
		res.on("data", function(chunk) {	
			remote = Buffer.concat([remote,chunk]);
		});
		res.on("end", function() {
			process_content(remote,obj.pathname,callback);
		});
	}

}

//****************************************************************************

function process_mysql_content(content,callback)
{
console.log("process mysql "+content.length);

content = content+"";

var mysql = require("mysql");

try	{
	lines = content.split("\n");
	if(lines.length<2)
		lines = content.split("\r");

	var params = {};
	var m;
	for(var i=0;i<lines.length;i++)
		{
		if(m=lines[i].match(/host:(.*)/))
			params.host = m[1];
		if(m=lines[i].match(/user:(.*)/))
			params.user = m[1];
		if(m=lines[i].match(/password:(.*)/))
			params.password = m[1];
		if(m=lines[i].match(/database:(.*)/))
			params.database = m[1];
		if(m=lines[i].match(/query:(.*)/))
			params.query = m[1];
		else 
			params.query += lines[i];
		}

	var cnx = mysql.createConnection(params);
	cnx.query(params.query, function(err,rows,fields) {

		if(err) { cnx.end(); return; }
	
		var record = [];
		for(var i=0;i<fields.length;i++)
			record.push(fields[i].name);
		data.push(record);
		
		for(var i=0;i<rows.length;i++)
			{
			record = [];
			for(var j=0;j<fields.length;j++)
				record.push(rows[i][fields[j].name]);
			data.push(record);
			}

		cnx.end();
		check_data_type(callback);
		});

	}
catch(e)
	{
	console.log(e.stack);
	callback(null);
	}

}

//****************************************************************************

function process_postgres_content(content,callback)
{
console.log("process postgress content");

content = content.toString("utf8");

var pg = require("pg");

try	{	
	var lines = content.split("\n");
	if(lines.length<2) lines = lines.split("\r");

	var connection = "";
	var username = "";
	var password = "";
	var hostname = "";
	var database = "";
	var query = "";

	var m;
	for(var i=0;i<lines.length;i++)
		{
		if(m=lines[i].match(/host:(.*)/))
			hostname = m[1];
		if(m=lines[i].match(/user:(.*)/))
			username  = m[1];
		if(m=lines[i].match(/password:(.*)/))
			password = m[1];
		if(m=lines[i].match(/database:(.*)/))
			database = m[1];
		if(m=lines[i].match(/connection:(.*)/))
			connection = m[1];
		if(m=lines[i].match(/query:(.*)/))
			query = m[1];
		}

	if(connection=="")
		var url = "postgres://"+username+":"+password+"@"+hostname+"/"+database;
	else
		var url = "postgres://"+connection;

	var client = new pg.Client(url);
	client.connect( function(err) {
		if(err) {
			console.log("connect err "+err);
			callback(null);
			return;
			}

		client.query(query, function(err,result) {
			if(err) {
				console.log("query err "+err);
				client.end();
				callback(null);
				return;
				}

			data = [];
			var fields = new Array(result.fields.length);
			for(var k=0;k<fields.length;k++)		
				fields[k] = result.fields[k].name;
			data.push(fields);

			for(var i=0;i<result.rows.length;i++)			
				{		
				var row = new Array(fields.length);
				for(var k=0;k<fields.length;k++)
					row[k] = result.rows[i][fields[k]];
				data.push(row);
				}
			client.end();
			check_data_type(callback);	
		});

	});
		
	}
catch(err)
	{
	console.log(err.stack);	
	callback(null);
	}

}

//****************************************************************************

function process_gzip_content(content,callback)
{
console.log("process gzip content");

try {			
	var zlib = require("zlib");
	var uncompressed = zlib.gunzipSync(content);
	process_content(uncompressed,"",callback);
	}
catch(e)
	{
	console.log(e);
	}

}

//****************************************************************************

function process_json_content(content,callback)
{

content = content+"";

try {
	var o = JSON.parse(content);	

	if(!(o instanceof Array)) return;

	// get list of fields

	var nr = o.length;

	var nf = 0;
	var done = {};
	var fields = [];

	for(var i=0;i<nr;i++)
		{	
		var r = o[i];
		if(r==null) continue;
		if(typeof(r)!="object") continue;
		for(var key in r)
			{
			if(!(key in done))
				{
				fields[nf++] = key;
				done[key]=":n";
				}		
			if(typeof(r[key])!="number")
				done[key] = "";
			}
		}

	var line = [];
	for(var k=0;k<nf;k++)
		line.push(fields[k]+done[fields[k]]);
	data.push(line);
		
	for(var i=0;i<nr;i++)
		{		
		var line = [];
		var r = o[i];
		if(r==null) continue;				
		if(typeof(r)!="object") continue;
		for(var k=0;k<nf;k++)
			{
			if(!(fields[k] in r))
				line.push("");
			else 
				line.push(""+r[fields[k]]);		
			}
		data.push(line);
		}

	callback(data);
	}
catch(e)
	{	
	console.log(e);
	}

}

//****************************************************************************

function process_tabular_content(content,callback)
{
console.log("process tabular");

if(is_binary(content))
	{
	callback(null);
	return;
	}

	content = content+"";

	lines = content.split("\n");
	if(lines.length<2)  {
		lines = content.split("\r");	
		if(lines.length<2) { callback(null); return; }
		}

	var sep = guess_field_separator(lines[0]);	
	if(sep==null)  { callback(null); return; }
	
	var nv = lines[0].split(sep).length;

	for(var i=0;i<lines.length;i++)
		{
		var record = lines[i].split(sep);
		if(record.length!=nv) continue;
		for(var j=0;j<nv;j++)
			record[j] = unquote(record[j].replace(",","."));
		data.push(record);
		}

	check_data_type(callback);
}

//****************************************************************************

function process_xdr_content(content,callback)
{

var offset = 19;
var indent = "";
var seq = 0;

var id = 0;
var objs = {};
var attrs = {};

var obj = read_object(content,offset);

var main = null;
for(var x in obj)
	main = obj[x];
if(main==null) 
	{
	console.log("NO MAIN OBJECT");
	callback(null);
	return;
	}


var mainid = get_id(main);

if(!(main instanceof Array) )
	{	
	console.log("MAIN OBJECT NOT AN ARRAY");
	callback(null);
	return;
	}

var mainattr = attrs[mainid];
if((mainattr==null)||(typeof(mainattr)!="object"))
	{
	console.log("NO ATTRIBUTES FOR MAIN OBJECT");
	callback(null);
	return;
	}

var rnames = mainattr["names"];

var rownames = mainattr["row.names"];

var nfield = main.length;

var columns = [];

var nrecord = -1;
for(var j=0;j<nfield;j++)
	{		
	var sub = main[j];
	if(!(sub instanceof Array))
		{		
		console.log("  ITEM NOT AN ARRAY");
		callback(null);
		return;
		}

	var subid = get_id(sub);
	var attr = attrs[subid];

	if(attr&&attr.dim)
		{
		nr = attr.dim[0];
		ncol = attr.dim[1];		
		if(nrecord<0) nrecord = nr;
		if(nrecord!=nr) { console.log("DIFFERENT LENGTH"); callback(null) ; }

		var dimnames = attr.dimnames;

		for(var k=0;k<ncol;k++)
			{
			if(dimnames&&dimnames[1])
				{
				if(rnames)
					var cname = rnames[j]+"."+dimnames[1][k]
				else
					var cname = dimnames[1][k];
				}
			else
				var cname = "COL."+(columns.length);
			columns.push({name:cname,col:j,offset:nr*k});
			}					

		}
	else if(attr&&attr.levels&&!is_factor(subid))
		{
		// ignore
		}
	else
		{
		var nr = sub.length;
		if(nrecord<0) nrecord = nr;
		if(nrecord!=nr) { console.log("DIFFERENT LENGTH"); callback(null) ; }

		if(rnames)
			columns.push({name:rnames[j],col:j,offset:0});
		else
			columns.push({name:"COL."+(columns.length),col:j,offset:0});

		if(is_factor(subid))
			for(var i=0;i<sub.length;i++)	
				sub[i] = attr.levels[sub[i]-1];	
		}

	}


if((rownames==null)||(rownames.length!=nrecord))
	{
	rownames = new Array(nrecord);
	for(var i=0;i<nrecord;i++)
		rownames[i] = "ROW"+(i+1);
	}


var record = [];
record.push("ROW.NAME");
for(var j=0;j<columns.length;j++)
	record.push(columns[j].name);
data.push(record);


for(var i=0;i<nrecord;i++)
	{
	record = [];
	if(!isNaN(Number(rownames[i])))
		record.push("R"+rownames[i]);
	else
		record.push(""+rownames[i]);
	for(var j=0;j<columns.length;j++)
		record.push(main[columns[j].col][columns[j].offset+i]);
	data.push(record);
	}


check_data_type(callback);
return;

	function is_factor(subid)
	{
	if(!attrs[subid]) return false;
	if(!attrs[subid].class) return false;
	if(!(attrs[subid].class instanceof Array)) return false;
	for(var i=0;i<attrs[subid].class.length;i++)
		if(attrs[subid].class[i]=="factor")
			return !!attrs[subid].levels;
	return false;
	}

	function read_string(len)
	{	
	var s = content.toString("utf8",offset,offset+len);
	offset += len;
	return s;
	}

	function read_integer()
	{
	var i = content.readInt32BE(offset);
	offset += 4;
	return i;
	}

	function read_double()
	{
	var d = content.readDoubleBE(offset);
	offset += 8;
	return Math.round(d*1000000)/1000000;
	}

	function read_object()
	{
	indent += "    ";
	var obj = null;
	var attr = null;

	var temp = read_integer();
	var type = temp & 0x0FF;
	var flag = temp & 0x300;

	switch(type)
		{
		case 1:	// symbol
			var symtype = read_integer() & 0xFF;
			obj = read_string(read_integer());
			break;

		case 2: // dotted pair	
			var obj = {};
			while(true)
				{
				var obj1 = read_object();
				var obj2 = read_object();
				obj[obj1] = obj2;
				type = read_integer() & 0x0FF;
				if(type==0xFE) break;
				}			
			break;
	
		case 6: // formula	
			var obj = [];
			if(flag!=0)
				obj._attr = read_object();
			flag = 0;
			while(true)
				{
				var item = read_object();
				var op = read_integer() & 0xFF;
				if(op==0xFE) break;
				}
			break;
	
		case 9: // string
			var len = read_integer();
			obj = read_string(len);
			break;

		/*
		case 10:	// logical vector
			break;
		*/

		case 13: // integer vector
			var n = read_integer();
			obj = new Array(n);
			for(var i=0;i<n;i++)
				obj[i] = read_integer();
			break;

		case 14: // real vector
			var n = read_integer();
			obj = new Array(n);
			for(var i=0;i<n;i++)
				obj[i] = read_double();
			break;

		case 16: //string vector
			var n = read_integer();
			obj = new Array(n);
			for(var i=0;i<n;i++)
				{
				read_integer();
				obj[i] = read_string(read_integer());
				}
			break;

		case 19:
			var n = read_integer();
			obj = new Array(n);
			for(var i=0;i<n;i++)
				obj[i] = read_object();
			break;

		default:
			obj = "*"+type+"*"+flag+"*";
			if(obj=="*255*512*") obj = "levels";
			else if(obj=="*255*768*") obj = "class";
			else obj+=""+(seq++);
			flag = 0;
			break;
		}

		if(flag!=0)
			var attr = read_object();
		id++;
		objs[id] = obj;
		if(attr) attrs[id] = attr;
		indent = indent.substring(4);
		return obj;
	}


	function get_id(obj) 
	{
	for(var x in objs)
		if(objs[x]===obj)
			return x;
	return null;
	}

}

//****************************************************************************

function process_stata_content(content,callback)
{
data = [];

// check format
if(content[0]==105)
	{
	lhead = 32;
	lname = 9;
	lformat = 12;
	llabel = 9;
	llist = 32;
	lxsize = 2;
	lcat = 12;
	}
if(content[0]==108)
	{
	lhead = 81;
	lname = 9;
	lformat = 12;
	llabel = 9;
	llist = 81;
	lxsize = 2;
	lcat = 12;
	}
if(content[0]==113)
	{
	lhead = 81;
	lname = 33;
	lformat = 12;
	llabel = 33;
	llist = 81;
	lxsize = 4;
	lcat = 36;
	}
if(content[0]==114)
	{
	lhead = 81;
	lname = 33;
	lformat = 49;
	llabel = 33;
	llist = 81;
	lxsize = 4;
	lcat = 36;
	}

// check byte order
if(content[1]==0x01)
	{
	var read_int16 = function() { var r = content.readInt16BE(offset); offset+= 2; return r }
	var read_int32 = function() { var r = content.readInt32BE(offset); offset+= 4; return r }
	var read_dbl = function() { var r = content.readDoubleBE(offset); offset+=8; return r }
	var read_flt = function() { var r = content.readFloatBE(offset); offset+=4; return r }
	}
else 
	{	
	var read_int16 = function() { var r = content.readInt16LE(offset); offset+=2; return r }
	var read_int32 = function() { var r = content.readInt32LE(offset); offset+=4; return r }
	var read_dbl = function() { var r = content.readDoubleLE(offset); offset+=8; return r }
	var read_flt = function() { var r = content.readFloatLE(offset); offset+=4; return r }
	}


var offset = 4;

var nv = read_int16();	// number of variables
var nr = read_int32();	// number of records

var head = read_string(lhead);
var stamp = read_string(18);

var vtypes = new Array(nv);
var vnames = new Array(nv);
var vsorts = new Array(nv+1);
var vformats = new Array(nv);
var vlabels = new Array(nv);
var vlists = new Array(nv);

for(var j=0;j<nv;j++)	
	vtypes[j] = read_byte();

for(var j=0;j<nv;j++)
	vnames[j] = read_string(lname);
data.push(vnames);

for(var j=0;j<nv+1;j++)
	vsorts[j] = read_int16();

for(var j=0;j<nv;j++)
	vformats[j] = read_string(lformat);

for(var j=0;j<nv;j++)
	vlabels[j] = read_string(llabel);

for(var j=0;j<nv;j++)
	vlists[j] = read_string(llist);

// expansion fields
while(true)
	{
	offset+=1;
	var xsize = lxsize==2 ? read_int16() : read_int32();
	if(xsize==0) break;
	offset += xsize;
	}

if(content[0]<=108)
	read_rows_108();
else
	read_rows_113();

while(offset<content.length)
	{
	var size = read_int32();

	// name of categorical variable
	var name = read_string(lcat);

	// look in list of variables
	var index = vlabels.indexOf(name);
	if(index<0) index = vnames.indexOf(name);

	// number of categories	
	var ncat = read_int32();
	offset += 4;

	// offset of each category name from beginning of string
	var shift = new Array(ncat);	
	for(var i=0;i<ncat;i++)
		shift[i] = read_int32();

	// list of codes
	var code = new Array(ncat);
	for(var i=0;i<ncat;i++)
		code[i] = read_int32();

	var set = {};

	// associate codes and category names
	for(var i=0;i<ncat;i++)
		{
		var l = content.indexOf(0,offset+shift[i]);
		set[code[i]] = content.toString("utf8",offset+shift[i],l);
		}	


	// replace numerical data by category name
	if(index>=0)
		{
		for(var i=1;i<data.length;i++)
			{		
			var row = data[i];
			if(row[index] in set)	
				row[index] = set[row[index]];
			}
		}

	offset += size-4-4-4*ncat-4*ncat;
	}


check_data_type(callback);

	function read_rows_113()
	{
	for(var i=0;i<nr;i++)
		{
		var row = new Array(nv);
		for(var j=0;j<nv;j++)
			{
			switch(vtypes[j])	
				{
				case 255: row[j] = Math.round(read_double()*10000)/10000; break;
				case 254: row[j] = Math.round(read_float()*10000)/10000; break;		
				case 253: row[j] = read_int32(); break;
				case 252: row[j] = read_int16(); break;
				case 251: row[j] = read_byte(); break;
				default: row[j] = read_string(vtypes[j]); break;
				}
			}
		data.push(row);
		}
	}

	function read_rows_108()
	{
	for(var i=0;i<nr;i++)
		{
		var row = new Array(nv);
		for(var j=0;j<nv;j++)
			{
			switch(vtypes[j])
				{	
				case 98:  row[j] = read_byte(); break;
				case 102: row[j] = Math.round(read_float()*10000)/10000; break;
				case 105: row[j] = read_int16(); break;
				default : row[j] = read_string(vtypes[j]-127); break;
				}
			}
		data.push(row);
		}
	}

	//---------------------------------------------------------------------

	function read_string(n)
	{
	var l = n;
	for(var i=0;i<n;i++)
		if(content[offset+i]==0)
			{ l= i; break; }
	var s = content.toString("utf8",offset,offset+l);
	offset += n;
	return s;	
	}

	//---------------------------------------------------------------------

	function read_double()
	{
	var r = read_dbl();
	return r>1e30 ? 0 :r;
	}

	//---------------------------------------------------------------------

	function read_float()
	{
	var r = read_flt();
	return r>1e30 ? 0 : r;
	}

	//---------------------------------------------------------------------

	function read_byte()
	{
	return content[offset++];
	}
}

//****************************************************************************

function process_spss_content(content,callback)
{

if(content[64]!=0)
	{
	var read_int32 = function() { var r = content.readInt32LE(offset); offset+=4; return r; }
	var read_int16 = function() { var r = content.readInt16LE(offset); offset+=2; return r; }
	var read_double = function() { var r = content.readDoubleLE(offset); offset+=8; return Math.round(r*10000)/10000; }
	}
else
	{
	var read_int32 = function() { var r = content.readInt32BE(offset); offset+=4; return r; }
	var read_int16 = function() { var r = content.readInt16BE(offset); offset+=2; return r; }
	var read_double = function() { var r = content.readDoubleBE(offset); offset+=8; return Math.round(r*10000)/10000; }
	}

offset = 68;

var nsize = read_int32();
var compression = read_int32();
var weight = read_int32();
var ncases = read_int32();
var bias = read_double();
var date = read_string(9);
var time = read_string(8);
var filelabel = read_string(64);
var padding = read_string(3);

console.log(nsize,compression,weight,ncases,bias,date,time,filelabel);

var variables = [];

while(true)
	{
	if(offset>=content.length) break;

	var rectype = read_int32();

	if(rectype==2)
		{
		// VARIABLE RECORD
		var type = read_int32();
		var haslabel = read_int32();
		var nmissing = read_int32();
		var print = read_int32();
		var write = read_int32();
		var name = read_string(8).trim();
		if(haslabel==1)
			{
			var labellen = read_int32();
			var n = Math.floor((labellen+3)/4)*4;
			var label = read_string(n).substring(0,labellen);
			}	
		if(nmissing>0)
			{
			for(var i=0;i<nmissing;i++)
				read_double();
			}
		if(type>=0)
			variables.push({name:name,type:type});
		}
	else if(rectype==3)
		{
		// VALUE LABEL RECORD
		var labelcount = read_int32();
		for(var i=0;i<labelcount;i++)
			{
			var value = read_string(8);
			var labellen = read_byte();
			var n = Math.floor((labellen+1+7)/8)*8;
			var label = read_string(n);
			}
		}
	else if(rectype==4)
		{
		// VALUE LABEL VARIABLE 
		var varcount = read_int32();
		for(var i=0;i<varcount;i++)		
			read_int32();	
		}
	else if(rectype==6)		
		{
		// DOCUMENT RECORD
		var nline = read_int32();
		for(var i=0;i<nline;i++)
			read_string(80);
		}
	else if(rectype==7)
		{
		var subtype = read_int32();
		var size = read_int32();
		var count = read_int32();	
		offset += count*size;
		}
	else if(rectype==999)	
		{
		var filler = read_int32();		
		break;
		}
	}

data = [];

var row = [];
for(var j=0;j<variables.length;j++)
	row.push(variables[j].name);
data.push(row);


if(compression==0)
	read_uncompressed_records();
else
	read_compressed_records();

check_data_type(callback);

		
	//---------------------------------------------------------------------
	
	function read_byte()
	{
	return content[offset++];
	}

	//---------------------------------------------------------------------

	function read_string(n)
	{
	var r = content.toString("utf8",offset,offset+n);
	offset += n;
	return r;
	}

	//---------------------------------------------------------------------

	function process_uncompressed_records()
	{
	var nv = variables.length;
	var row = new Array(nv);
	while(offset<content.length)
		{
		for(var j=0;j<nv;j++)
			{
			if(variables[j].type==0)
				row[j] = read_double();
			else
				{
				var n = Math.floor((variables[j].type+7)/8)*8;
				row[j] = read_string(n).trim();
				}
			}
		data.push(row);
		row = new Array(nv);
		}
	}

	//---------------------------------------------------------------------

	function read_compressed_records()
	{		
	var nv = variables.length;
	var row = new Array(nv);
	var b = new Array(8);
	var j = 0; // variable index
	var l = 0; // length of string
	while(offset<content.length)
		{
		for(var k=0;k<8;k++)
			b[k] = read_byte();
		for(var k=0;k<8;k++)
			{
			if((b[k]>0)&&(b[k]<=251))
				{
				// COMPRESSED
				row[j++] = b[k]-bias;
				if(j==nv) {	data.push(row); j = 0; row = new Array(nv); }
				}
			else if(b[k]==253)
				{
				// UNCOMPRESSED
				if(variables[j].type==0)
					{
					row[j++] = read_double();
					if(j==nv) { data.push(row); j = 0 ; row = new Array(nv); }	
					}
				else 
					{
					row[j] = (l==0?"":row[j])+read_string(8);
					l += 8;
					if(l>=variables[j].type)
						{
						row[j] = row[j].trim();
						l = 0;
						j++;
						if(j==nv) { data.push(row); j=0; row = new Array(nv); }
						}
					}	
				}
			else if(b[k]==254)
				{
				// SPACES
				row[j] = (l==0?"":row[j])+"        ";
				l+=8;
				if(l>=variables[j].type)			
					{			
					row[j] = row[j].trim();
					l = 0;
					j++;
					if(j==nv) { data.push(row); j=0;  row = new Array(nv); }
					}
				}
			else if(b[k]==255)
				{
				// MISSING
				if(variables[j].type==0)
					row[j++] = 0;
				else
					row[j++] = "";
				if(j==nv) { data.push(row); j = 0; row = new Array(nv) }
				}
			else if(b[k]==252)
				break;
			}
		}

	}

}

//****************************************************************************

function process_dbase_content(content,callback)
{
var offset = 0;
var filetype = read_byte();
offset += 3;	// skip date
var nr = read_int32();
var pos = read_int16();
var rlen = read_int16();

offset+= 16;

var tflag = read_byte();
var codepage = read_byte();
offset +=2;

console.log("code page "+codepage);

var fields = [];
while(true)
	{
	if(content[offset]==0x0D) break;
	var f =  {};
	f.name = read_string(11);
	f.type = read_string(1);
	f.disp = read_int32();
	f.len = read_byte();
	f.dec = read_byte();
	f.dflag = read_byte();
	f.dnext = read_int32();
	f.dstep = read_byte();
	offset += 8;
	fields.push(f);	
	}

offset +=1;

// if FoxPro
if((filetype>=0x30)&&(filetype<=0x032))
	offset += 263;

data = [];
var row = new Array(fields.length);
for(var i=0;i<fields.length;i++)
	row[i] = fields[i].name;
data.push(row);

while(true)
	{
	if(offset>=content.length) break;
	if(content[offset]==0x1A) break;

	var del = read_string(1);
	if(del=='*')
		{
		offset += rlen-1;
		continue;
		}
	
	var row = new Array(fields.length);
	for(var i=0;i<fields.length;i++)
		switch(fields[i].type)
		{
		case 'C':
			row[i] = read_string(fields[i].len).trim();
			break;

		case 'N':
			row[i] = Number(read_string(fields[i].len));
			break;
		
		case 'L':
			row[i] = read_string(fields[i].len).toUpperCase();			
			break;

		case 'D':
			row[i] = read_string(fields[i].len);
			break;

		case 'M':
			row[i] = "";
			offset += fields[i].len;
			break;

		case 'F':
			row[i] = Number(read_string(fields[i].len));
			break;

		case 'I':
			row[i] = read_int32();
			break;

		default:
			row[i] = "";
			offset += fields[i].len;
			break;
		}
	data.push(row);
	}

check_data_type(callback);

	function read_byte()
	{
	return content[offset++];
	}

	function read_int16()
	{
	var r = content.readInt16LE(offset);
	offset += 2;	
	return r;
	}

	function read_int32()
	{
	var r = content.readInt32LE(offset);	
	offset += 4;
	return r;
	}

	function read_string(n)
	{
	var l = n;
	for(var i=0;i<n;i++)
		if(content[offset+i]==0)
			{ l = i; break; }
	if(cptable[codepage])
		{
		var r = "";
		for(var i=0;i<l;i++)
			r += cptable[codepage].dec[content[offset+i]];
		}
	else
		var r = content.toString("utf8",offset,offset+l);
	offset += n;
	return r;
	}
}

//****************************************************************************

function process_sas_content(content,callback)
{
var PAGE_META = 0;
var PAGE_DATA = 1<<8;
var PAGE_MIX1 = 1<<9;
var PAGE_MIX2 = 1<<9|1<<7;
var PAGE_AMD = 1<<10;
var PAGE_METC = 1<<14;
var PAGE_COMP = 1<<14|1<<13|1<<12;
var PAGE_MIX = [PAGE_MIX1,PAGE_MIX2];
var PAGE_MIX_DATA = [PAGE_MIX1,PAGE_MIX2,PAGE_DATA];
var PAGE_META_MIX_AMD = [PAGE_META,PAGE_MIX1,PAGE_MIX2,PAGE_AMD];
var PAGE_ANY_COMP = [PAGE_METC,PAGE_COMP];
var PAGE_ANY =[PAGE_META,PAGE_MIX1,PAGE_MIX2,PAGE_AMD,PAGE_DATA,PAGE_METC,PAGE_COMP];

// Subheader 'signatures'
SUBH_ROWSIZE = new Buffer([0xF7,0xF7,0xF7,0xF7]);
SUBH_COLSIZE = new Buffer([0xF6,0xF6,0xF6,0xF6]);
SUBH_COLTEXT = new Buffer([0xFD,0xFF,0xFF,0xFF]);
SUBH_COLATTR = new Buffer([0xFC,0xFF,0xFF,0xFF]);
SUBH_COLNAME = new Buffer([0xFF,0xFF,0xFF,0xFF]);
SUBH_COLLABS = new Buffer([0xFE,0xFB,0xFF,0xFF]);
SUBH_COLLIST = new Buffer([0xFE,0xFF,0xFF,0xFF]);
SUBH_SUBHCNT = new Buffer([0x00,0xFC,0xFF,0xFF]);

var offset = 32;
var align1 = read_byte()==0x33 ? 4: 0;
var u64 = align1==4;

offset = 35;
var align2 = read_byte()==0x33 ? 4: 0;

offset = 37;
var endian = read_byte();

offset = 39;
var winunix = read_string(1);

offset = 196+align2;
var headerlen = read_int32();
var pagesize = read_int32();
var pagecount = read_int32();

offset = 216+align1+align2;
var release = read_string(8);
var sashost = read_string(8);

offset = 240+align1+align2;
var osversion = read_string(16);
var osmaker = read_string(16);
var osname = read_string(16);

offset = headerlen;

var pages = [];
for(var ipage=0;ipage<pagecount;ipage++)	
	{
	pages[ipage] = {};
	pages[ipage].page = ipage;
	pages[ipage].data = content.slice(offset,offset+pagesize);
	offset += pagesize;	
	pages[ipage].type = pages[ipage].data.readUInt16LE(u64 ? 32:16);
	pages[ipage].blck_count = pages[ipage].data.readUInt16LE(u64 ? 34:18);
	pages[ipage].subh_count = pages[ipage].data.readUInt16LE(u64 ? 36:20);
	}


var subhs = [];
for(var ipage=0;ipage<pagecount;ipage++)
	subhs = subhs.concat(read_subheaders(pages[ipage],u64));


// rowsize subheader
var rowsize = get_subhs(subhs,SUBH_ROWSIZE);
if(rowsize.length!=1) { callback(null); return; }

rowsize = rowsize[0];
var row_length = rowsize.raw.readUInt32LE( u64 ? 40 : 20);
var row_count = rowsize.raw.readUInt32LE( u64 ? 48 : 24);
var col_count_p1 = rowsize.raw.readUInt32LE( u64 ? 72 : 36);
var col_count_p2 = rowsize.raw.readUInt32LE( u64 ? 80 : 40);
var row_count_fp = rowsize.raw.readUInt32LE( u64 ? 120 : 60);

// colsize subheader
var colsize = get_subhs(subhs,SUBH_COLSIZE);
if(colsize.length!=1) { callback(null); return; }
colsize = colsize[0];

var col_count_6 = colsize.raw.readUInt32LE( u64 ? 8 : 4);
var col_count =  col_count_6;

var col_text = get_subhs(subhs, SUBH_COLTEXT);

var col_attr = get_subhs(subhs, SUBH_COLATTR);
col_attr = read_column_attributes(col_attr,u64);

var col_name = get_subhs(subhs, SUBH_COLNAME);
col_name = read_column_names(col_name,col_text,u64);

var col_labs = get_subhs(subhs,SUBH_COLLABS);
col_labs = read_column_labels_formats(col_labs, col_text, u64);

var col_info = [];
for(var i=0;i<col_name.length;i++)
	col_info[i] = merge(col_name[i],col_labs[i],col_attr[i]);

data = [];

var row = new Array(col_info.length);
for(var i=0;i<col_info.length;i++)
	row[i] = col_info[i].name;
data.push(row);

// check pages for known types
for(var i=0;i<pages.length;i++)
	{
	if(PAGE_ANY.indexOf(pages[i].type)<0)
		{
		console.log("PAGE "+i+" UNKNOW TYPE "+pages[i].type);
		callback(null);
		return;
		}
	
	if(PAGE_ANY_COMP.indexOf(pages[i].type)>=0)
		{
		console.log("PAGE "+i+" CONTAINS COMPRESSED DATA");
		callback(null);
		return;
		}
	}


var bytes = new Array(8);

for(var ipage=0;ipage<pages.length;ipage++)
	{
	var page = pages[ipage];
	if(PAGE_MIX_DATA.indexOf(page.type)<0)
		{
		console.log("Ignoring page "+i+" type "+page.type);
		continue;
		}	
	
	var base = (u64 ? 32:16)+8;	
	if(PAGE_MIX.indexOf(page.type)>=0)
		{
		var row_count_p = row_count_fp;
		// skip subheader pointer
		base += page.subh_count *(u64?24:12);
		base += base%8;		
		}
	else
		{
		var row_count_p = page.data.readUInt16LE( u64 ? 34: 18);	
		}
	base = Math.floor((base+7)/8)*8 + base % 8;
	if(row_count_p > row_count)
		row_count_p = row_count;
	for(var irow=0;irow<row_count_p;irow++)
		{
		var row = new Array(col_info.length);
		for(var icol=0;icol<col_info.length;icol++)
			{
			var col = col_info[icol];
			var off = base + col.offset;		
			var col_len = col.length;
			var value = "";
			if(col_len>0)
				{			
				if(col.type=="numeric")
					{
					for(var j=0;j<8-col_len;j++)
						bytes[j] = 0;
					for(var j=0;j<col_len;j++)
						bytes[j+8-col_len] = page.data[off+j];
					var value = (new Buffer(bytes)).readDoubleLE(0);	
					value = Math.round(value*10000)/10000;
					}
				else
					{
					var value = page.data.toString("utf8",off,off+col_len).trim();
					}
				}
			row[icol] = value;
			}
		data.push(row);
		base += row_length;
		}
	}

check_data_type(callback);


	//---------------------------------------------------------------------------

	function read_subheaders(page,u64)
	{
	var subhs = [];
	var subhtotal = -1;
	if(PAGE_META_MIX_AMD.indexOf(page.type)<0)
		return subhs;
	var oshp = u64 ? 40:24; // offset to subheader pointers
	var lshp = u64 ? 24:12; // length of subheader pointers
	var lshf = u64 ? 8:4;   // length of first subheader field
	for(var i=1;i<=page.subh_count;i++)
		{
		subhtotal += 1;
		var base = oshp + (i-1)*lshp;
		subhs[subhtotal] = {};
		subhs[subhtotal].page = page.page;		
		if(lshf==4)
			{
			subhs[subhtotal].offset = page.data.readInt32LE(base);
			subhs[subhtotal].length = page.data.readInt32LE(base+4);
			}
		else
			{
			subhs[subhtotal].offset = page.data.readInt32LE(base);
			subhs[subhtotal].length = page.data.readInt32LE(base+8);
			}
		if(subhs[subhtotal].length>0)
			{
			subhs[subhtotal].raw = page.data.slice(
				subhs[subhtotal].offset,
				subhs[subhtotal].offset+subhs[subhtotal].length);
			subhs[subhtotal].signature = subhs[subhtotal].raw.slice(0,4);
			}
		}
	return subhs;
	}

	//---------------------------------------------------------------------------

	function get_subhs(subhs,signature)
	{
	var selection = [];
	for(var i=0;i<subhs.length;i++)
		{
		if(subhs[i].signature)
			if(subhs[i].signature.equals(signature))
				selection.push(subhs[i]);
		}
	return selection;
	}


	//---------------------------------------------------------------------------

	function read_column_attributes(col_attr,u64)
	{
	var info = [];
	var info_ct = -1;
	var lcav = u64 ? 16 : 12;
	for(var k=0;k<col_attr.length;k++)
		{
		var subh = col_attr[k];
		var cmax = (subh.length - (u64 ? 28:20))/lcav;
		for(var i=1;i<=cmax;i++)		
			{
			info_ct++;
			info[info_ct] = {};
			var base = lcav+(i-1)*lcav;
			info[info_ct].offset = subh.raw.readUInt32LE(base);
			base += (u64 ? 8 : 4);
			info[info_ct].length = subh.raw.readUInt32LE(base);
			base += 6;
			info[info_ct].btype = subh.raw[base];
			info[info_ct].type = info[info_ct].btype==1 ? "numeric" : "character";
			}
		}
	return info;
	}

	//---------------------------------------------------------------------------

	function read_column_names(col_name, col_text, u64)
	{
	var names = [];
	var name_count = -1;
	var offp = u64 ? 8 : 4;
	for(var k=0;k<col_name.length;k++)
		{
		var subh = col_name[k];
		var cmax = (subh.length- (u64 ? 28:20))/8;
		for(var i=1;i<=cmax;i++)
			{
			name_count++;
			names[name_count] = {};
			var base = (u64 ? 16 :12) + (i-1)*8;
			var hdr = subh.raw.readUInt16LE(base);
			var off = subh.raw.readUInt16LE(base+2);
			var len = subh.raw.readUInt16LE(base+4);
			names[name_count].name = col_text[hdr].raw.toString("utf8",off+offp,off+offp+len);
			}
		}
	return names;
	}

	//---------------------------------------------------------------------------

	function read_column_labels_formats(col_labs,col_text,u64)	
	{
	if(col_labs.length==0) return null;
	var offp = u64 ? 8 : 4;
	var labs = [];
	for(var i=0;i<col_labs.length;i++)
		{		
		var subh = col_labs[i];
		labs[i] = {};
		var base = u64 ? 46 : 34;
		var hdr = subh.raw.readUInt16LE(base);
		var off = subh.raw.readUInt16LE(base+2);
		var len = subh.raw.readUInt16LE(base+4);
		if(len>0)
			labs[i].format = col_text[hdr].raw.toString("utf8",off+offp,off+offp+len);
		labs[i].fhdr = hdr;
		labs[i].foff = off;
		labs[i].flen = len;
		
		base = u64 ? 52: 40;
		var hdr = subh.raw.readUInt16LE(base);
		var off = subh.raw.readUInt16LE(base+2);
		var len = subh.raw.readUInt16LE(base+4);
		if(len>0)
			labs[i].label = col_text[hdr].raw.toString("utf8",off+offp,off+offp+len);	
		labs[i].lhdr = hdr;
		labs[i].loff = off;
		labs[i].llen = len;
		}
	return labs;
	}

	//---------------------------------------------------------------------------

	function merge(name,labs,attr)	
	{
	var obj = {};
	for(var key in name)
		obj[key] = name[key];
	for(var key in labs)
		obj[key] = labs[key];
	for(var key in attr)
		obj[key] = attr[key];
	return obj;
	}

	//---------------------------------------------------------------------------

	function read_int16()
	{
	var r = content.readInt16LE(offset);
	offset+=2;
	return r;
	}

	function read_int32()
	{
	var r = content.readInt32LE(offset);
	offset+=4;	
	return r;
	}

	function read_string(n)
	{
	var r = content.toString("utf8",offset,offset+n);
	offset += n;
	return r;
	}
	
	function read_byte()
	{
	return content[offset++];
	}

}

//****************************************************************************

function process_mtw_content(content,callback)
{
console.log("process mtw content");

offset = 0x50;

var vnames = [];
var rows = [];

while(true)
	{	
	var what = read_int();
	var vind = read_int();
	var vnum = read_int();
	var vsiz = read_int();
	if(what!=3) break;
	var vnam = read_string(8);
	vnames.push(vnam);
	if(vsiz==0)
		{
		var nr = vnum;
		if(rows.length==0) create_rows(nr);
		for(var i=0;i<nr;i++)
			rows[i].push(read_float());
		}
	else if(vsiz<0)
		{
		var vlen = Math.floor((-vsiz+3)/4)*4;
		var nr = vnum/vlen*4;
		if(rows.length==0) create_rows(nr);
		for(var i=0;i<nr;i++)
			rows[i].push(read_string(vlen).trim());
		}
	}

	data.push(vnames);
	for(var i=0;i<rows.length;i++)
		data.push(rows[i]);
	
	check_data_type(callback);

	function create_rows(nr)	{
		rows = new Array(nr);
		for(var i=0;i<nr;i++)		
			rows[i] = [];
	}

	function read_int() {
		var r = content.readInt32LE(offset);
		offset+=4;
		return r;
	}

	function read_string(n) {
		var r = content.toString("utf8",offset,offset+n);
		offset+= n;
		return r;
	}

	function read_float()
	{
		var r = content.readFloatLE(offset);
		offset+=4;
		return Math.round(r*100000)/100000;
	}

}

//****************************************************************************

function process_sdd_content(content,callback)
{
content = (content+"").replace(/\r/g,"").split("\n");
var offset = 0;

var indent = "";

var main = read_object();

var pdata = main[".Data"];

var nf = pdata.length;

// check that all fields have the same number of values
var nr = 0;
for(var j=0;j<nf;j++)
	{
	if(pdata[j][".Data"]) 
		var n = pdata[j][".Data"].length;
	else if(pdata[j].length)
		var n = pdata[j].length;
	else
		var n = 0;

	if(nr==0)
		nr = n;	
	else if(nr!=n)
		{
		console.log("FIELDS WITH DIFFERENT LENGTHS");
		callback(null);
		return;
		}
	}


// check if field is factor
for(var j=0;j<nf;j++)
	{
	if(!pdata[j][".Data"]) continue;
	if(!pdata[j].class) continue;
	if(!(pdata[j].class instanceof Array)) continue;	
	if(pdata[j].class.indexOf("factor")<0) continue;
	var label = pdata[j][".Label"];
	if(!label) continue;
	if(!(label instanceof Array)) continue;	
	for(var i=0;i<nr;i++)
		{
		var k = parseInt(pdata[j][".Data"][i]);
		pdata[j][".Data"][i] = label[k-1];
		}
	}

data = [];

var row = [];
for(var i=0;i<nf;i++)	
	row.push(pdata[i].name);
data.push(row);

for(var i=0;i<nr;i++)
	{
	var row = [];
	for(var j=0;j<nf;j++)
		if(pdata[j][".Data"])
			row.push(pdata[j][".Data"][i]);
		else 
			row.push(pdata[j][i]);
	data.push(row);
	}

check_data_type(callback);


	function read_object()
	{	
		var name = content[offset++];
		var type = content[offset++];
		var size = parseInt(content[offset++]);
		//indent += "   ";
		switch(type)
			{
			case "character":
			case "name":
				var obj = [];	
				for(var i=0;i<size;i++)
					obj.push(content[offset++]);
				break;

			case "integer":
			case "numeric":
				var obj = [];
				for(var i=0;i<size;i++)
					obj.push(parseFloat(content[offset++]));
				break;

			case "structure":
				var obj = {};
				for(var i=0;i<size;i++)
					{					
					var o = read_object();
					obj[o.name] = o;
					}	
				break;

			case "list":
				var obj = [];
				for(var i=0;i<size;i++)
					obj.push(read_object());
				break;

			case "single":
				var obj = [];
				for(var i=0;i<size;i++)
					obj.push(content[offset++]);
				break;

			default:	
				console.log("UNKNWON TYPE "+type);
			}
		if(obj)
			obj.name = name;
		//indent = indent.substring(0,indent.length-3);
		return obj;
	}
}

//****************************************************************************

function process_bzip2_content(content,callback)
{
console.log("process bzip2 "+content.length);

var unbzip2 = require("unbzip2")();
var uncompressed = new Buffer(0);

unbzip2.on("error", function(err) {
	console.log("UNBZIP2 ERR "+err);
	callback(null);
	});

unbzip2.on("data", function(chunk) {
	uncompressed = Buffer.concat([uncompressed,chunk]);
	});

unbzip2.on("end", function() {
	process_content(uncompressed,"",callback);
	});

unbzip2.write(content);
unbzip2.end();

}

//****************************************************************************

function process_xz_content(content,callback)
{
console.log("process xz "+content.length);


try	{
	var lzmajs = require("lzma-purejs");
	var uncompressed = lzmajs.decompressFile(content);
	process_content(uncompressed,"",callback);
	}
catch(e)
	{
	console.log("XZ ERROR "+e);
	callback(null);
	}
}

//****************************************************************************

function process_mlwin_content(content,callback)
{
console.log("process mlwin "+content.length);

var offset = 9;

var ncell = read_int();	// total number of cells
var nf = read_int();	// number of fields

var off = new Array(nf);
for(var j=0;j<nf;j++)
	off[j] = read_int();

var len = new Array(nf);
for(var j=0;j<nf;j++)
	len[j] = read_int();

var nv = 0;
for(var j=0;j<nf;j++)
	if(len[j]==0) { nv = j; break; }

var nr = len[0];

var version = content.readInt32LE(content.length-8);

if(version==4)
	{

	var nam = new Array(nf);
	for(var j=0;j<nf;j++)
		{
		nam[j] = read_str(8).trim();
		offset+=1;
		}

	data = [];
	var row = [];
	for(var j=0;j<nv;j++)
		row.push(nam[j]);

	data.push(row);

	var base = offset+4*nf+900;
	for(var i=0;i<nr;i++)
		{
		var row = [];
		for(var j=0;j<nv;j++)
			{
			if(len[j]==0) continue;
			var v = Math.round(content.readFloatLE(base+nr*4*j+i*4)*10000)/10000;
			row.push(v);
			}
		data.push(row);
		}
	}

if(version==6)
	{

	var offset = ncell*4+174483+141332;

	var ncat = read_int();
	console.log("ncat = "+ncat);

	var cat = {};
	for(var i=0;i<ncat;i++)
		{
		var ifield = read_int();
		var ivalue = read_int();
		var ilen = read_int();
		var istring = read_str(ilen);
		offset++;
		var iindex = read_int();	
		if(!(ifield in cat)) cat[ifield] = {};
		cat[ifield][ivalue] = istring;
		}

	console.log(cat);

	offset += 55928;

	var vnames = new Array(nv);
	for(var j=0;j<nv;j++)
		{
		var ilen = read_int();
		vnames[j] = read_str(ilen);
		offset++;
		}

	data = [];		
	data.push(vnames);
	
	var base = 0x6411;
	
	for(var i=0;i<nr;i++)		
		{
		var row = [];
		for(var j=0;j<nv;j++)
			{
			if(len[j]==0) continue;
			var v = Math.round(content.readFloatLE(base+nr*4*j+i*4)*10000)/10000;
			if(j in cat)
				v = cat[j][v];
			row.push(v);
			}
		data.push(row);
		}	

	}
	

check_data_type(callback);
return


	function read_int()
	{
	var r = content.readUInt32LE(offset);
	offset += 4;
	return r;	
	}
	
	function read_str(n)
	{
	var r = content.toString("utf8",offset,offset+n);
	offset += n;
	return r;
	}


}

//****************************************************************************

function process_mdb_content(content,callback)
{
console.log("process mdb content");

var version = read_int32(0x14);

var fmt = {};

switch(version)
	{
	case 0:				// JET3
		callback(null);	// NOT SUPPORTED YET
		return;

	case 1:				// JET4
	case 2:				// ACCESS 2007
	case 0x103:			// ACCESS 2010
		fmt.pg_size = 4096;

		fmt.table_def_len = 8;
		fmt.table_row_count = 16;
		fmt.table_type = 40;
		fmt.table_var_count = 43;
		fmt.table_col_count = 45;
		fmt.table_idx_count = 47;
		fmt.table_ridx_count = 51;
		fmt.table_row_map = 55;
		fmt.table_free_map = 59;
		fmt.table_size = 63;

		fmt.col_type= 0;
		fmt.col_id = 5;
		fmt.col_num = 9;
		fmt.col_flags = 15;
		fmt.col_offset = 21;
		fmt.col_len = 23;
		fmt.col_size = 25;

		fmt.data_owner = 4;
		fmt.data_rcount = 12; 
		fmt.data_size = 14;
		break;
	}



var tables = [];

var npages = content.length/fmt.pg_size;

var catalog = load_table(2);

var usertables = [];

for(var i=0;i<catalog.records.length;i++)
	{	
	if(catalog.records[i][3]==1)
		if(catalog.records[i][7]==0)
			if(catalog.records[i][2].substring(0,4)!="MSys")
					usertables.push(catalog.records[i]);
	}

if(usertables.length>1)
	display_table_menu();
else
	select_table(usertables[0][0]);
	

	// -------------------------------------------------------------------------

	function display_table_menu()
	{
	var htable = document.createElement("table");

	for(var i=0;i<usertables.length;i++)
		{
		var tr = document.createElement("tr");
		tr.style.border = "0px";

		var td = document.createElement("td");
		td.innerText = usertables[i][2];
		td.style.border = "0px";
		td.style.padding = "20px";
		td.style.textAlign = "center";
		td.style.fontSize = "32px";
		td.style.fontFamily = "Helvetica";
		td.style.backgroundColor = "#CCCCCC";
		td.setAttribute("id","td"+i);
		td.addEventListener("click", select_menu_item,false);

		tr.appendChild(td);
		htable.appendChild(tr);
		}

	htable.style.border = "0px";
	//htable.style.left = "0px";
	//htable.style.top = "0px";
	htable.style.width = "100%";
	htable.setAttribute("id","table");
	window.document.body.appendChild(htable);
	window.document.body.style.cursor = "pointer";
	}

	// -------------------------------------------------------------------------

	function select_menu_item(e)
	{
	var id = Number(e.target.getAttribute("id").replace("td",""));
	if(isNaN(id)) return;
	window.document.getElementById("table").remove();
	window.document.body.style.cursor = "default";
	select_table(usertables[id][0]);
	}

	// -------------------------------------------------------------------------

	function select_table(ipage)
	{	
	var table = load_table(ipage);
	data = [];
	var fields = [];
	for(var i=0;i<table.columns.length;i++)
		fields.push(table.columns[i].name);
	data.push(fields);

	for(var i=0;i<table.records.length;i++)
		data.push(table.records[i]);
	check_data_type(callback);
	}

	// -------------------------------------------------------------------------

	function load_table(ipage)
	{
	var offset = ipage*fmt.pg_size;
	var type = read_int16(offset);

	var table = read_table(offset);

	offset += fmt.table_size;

	offset += table.ridx_count*12;

	//console.log("  COLUMNS "+table.col_count);
	var columns = new Array(table.col_count);
	for(var icol=0;icol<table.col_count;icol++)
		{
		columns[icol] = read_column(offset);
		offset += fmt.col_size;
		}

	for(var icol=0;icol<table.col_count;icol++)
		{	
		var lname = read_int16(offset);
		var name = "";
		offset += 2;
		for(var i=0;i<lname;i+=2)
			name += String.fromCharCode(content[offset+i]);
		columns[icol].name = name;	
		offset += lname;
		}

	columns.sort(function(a,b) { return a.id-b.id });	

	table.columns = columns;

	// look for data pages for this table
	var pages = [];
	for(var kpage=0;kpage<npages;kpage++)
		{
		var offset = kpage*fmt.pg_size;
		var sign = read_int16(offset);
		if(sign!=0x101) continue;
		var owner = read_int16(offset+fmt.data_owner);
		if(owner!=ipage) continue;
		pages.push(kpage);
		}

	table.pages = pages;

	var records = [];
	for(var jpage=0;jpage<pages.length;jpage++)
		{
		offset = fmt.pg_size*pages[jpage];

		var type = read_int16(offset);
		var rcount = read_int16(offset+fmt.data_rcount);
		var end = fmt.pg_size;
		for(var i=0;i<rcount;i++)
			{
			start = read_int16(offset+fmt.data_size+i*2);
			flags = start&0xC000;
			start = start&0x0FFF;
			//dump_record(offset+start,offset+end);
			if(end>start)
			if(flags==0)
				{
				var record = read_record(offset+start,offset+end,columns);
				records.push(record);
				}
			end = start;
			}
		}

	table.records = records;

	return table;
	}


	// -------------------------------------------------------------------------


	function dump_object(o)
	{
	var s = "{ ";
	var sep = "";
	for(var x in o)
		{
		s += sep+x+":"+o[x];
		sep = " , ";
		}
	s += " }";
	console.log(s);
	}


	// -------------------------------------------------------------------------

	function read_record(start,end,columns)
	{
	var kf = 0;	// fixed fields
	var vf = 0;	// variable fields
	var nf = read_int16(start);		

	var mapsize = Math.floor((nf+7)/8);
	var record = new Array(nf);
	for(var i=0;i<columns.length;i++)
		{
		if(columns[i].flags&1)
			{
			var a = 2+columns[i].offset;	
			var b = a+ columns[i].len;
			}
		else
			{
			vf++;
			var a = read_int16(end	-mapsize -2 -2*vf);
			var b = read_int16(end-mapsize-4-2*vf);
			}
		//console.log("   FIELD AT "+a+" "+b);
		record[i] = void 0;
		if(b>a)
		switch(columns[i].type)
			{
			case 1: record[i] = content[start+a]; break;
			case 2: record[i] = content[start+a]; break;
			case 3: record[i] = read_int16(start+a); break;
			case 4: record[i] = read_int32(start+a) & 0x0FFFFFFF; break;
			case 5: record[i] = read_int32(start+a)/10000.0; break;
			case 6: record[i] = read_float(start+a); break;
			case 7: record[i] = read_double(start+a); break;
			case 8: record[i] = read_double(start+a); break;
			case 9: record[i] = content.slice(start+a,start+b); break;
			case 10: record[i] = read_string(start+a,b-a); break;
			}
		}
	return record;
	}
	

	// -------------------------------------------------------------------------

	function dump_record(start,end,memory)
	{
	memory = memory || content;

	var s = "";
	var t = "";
	for(var i=0;i<end-start;i++)
		{
		var x = memory[start+i].toString(16).toUpperCase();
		if(x.length==1) x= "0"+x;		
		t += (memory[start+i]<32) ? "." : memory[start+i]>127 ? "." : String.fromCharCode(memory[start+i]);
		s += x + " ";
		if((i%16)==15)
			{
			console.log(s+"  "+t);
			s = "";
			t = "";
			}
		}
	if(s!="")
		{
		while(s.length<48) s += " ";
		console.log(s+"  "+t);
		}
	}


	// -------------------------------------------------------------------------

	function decode_map(map)
	{
	var pages = [];
	var bits = [0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80];
	var n = map.length;
	var k = 0;		
	for(var i=5;i<n;i++)
		{
		for(j=0;j<bits.length;j++)	
			{
			if((map[i]&bits[j])!=0)
				pages.push(k);
			k++;
			}
		}
	return pages;
	}


	// -------------------------------------------------------------------------

	function read_row(ptr)
	{	
	console.log("READ ROW "+ptr.toString(16));
	var page = (ptr>>8)&0x00FFFFFF;		
	var row = ptr&0x0FF;	
	var offset = page*fmt.pg_size ;
	dump_record(offset,offset+128);
	var start = read_int16(offset+ fmt.data_size+2*row)&0x0FFF;
	var end = (row==0) ? fmt.pg_size : read_int16(offset+fmt.data_size+2*row+2)&0x0FFF;
	console.log("  bytes at "+start.toString(16)+" - "+end.toString(16));
	return content.slice(offset+start,offset+end);
	}


	// -------------------------------------------------------------------------

	function read_table(offset)
	{
	var table = {};	
	table.len = read_int32(offset+fmt.table_den_len);
	table.type = content[offset+fmt.table_type];
	table.row_count = read_int32(offset+fmt.table_row_count);
	table.var_count = read_int16(offset+fmt.table_var_count);
	table.col_count = read_int16(offset+fmt.table_col_count);
	table.idx_count = read_int32(offset+fmt.table_idx_count);
	table.ridx_count = read_int32(offset+fmt.table_ridx_count);	
	table.row_map = read_int32(offset+fmt.table_row_map);
	table.free_map = read_int32(offset+fmt.table_free_map);
	return table;
	}


	// -------------------------------------------------------------------------

	function read_column(offset)
	{
	var column = {};	
	column.type = content[offset];
	column.id = read_int16(offset+fmt.col_id);
	column.num = read_int16(offset+fmt.col_num);
	column.flags = read_int16(offset+fmt.col_flags);
	column.offset = read_int16(offset+fmt.col_offset);
	column.len = read_int16(offset+fmt.col_len);
	return column;
	}


	// -------------------------------------------------------------------------

	function read_int16(offset)
	{
	return content.readInt16LE(offset);
	}

	function read_int32(offset)
	{
	return content.readInt32LE(offset);
	}

	function read_float(offset)
	{
	return content.readFloatLE(offset);
	}

	function read_double(offset)
	{
	return content.readDoubleLE(offset);
	}

	function read_string(offset,len)
	{
	var s = "";
	if((content[offset]==0xFF)&&(content[offset+1]==0xFE))
		for(var i=2;i<len;i++)
			s += String.fromCharCode(content[offset+i]);
	else
		for(var i=0;i<len;i+=2)
			s += String.fromCharCode(content[offset+i]);
	return s;
	}

	// -------------------------------------------------------------------------

}

//****************************************************************************

function process_jmp_content(content,callback)
{
var nr = read_int32(8);
var nv = read_int16(12);

// skip header
var offset = 28;
while(1)
	{
	var code = read_int16(offset);
	offset += 2;
	if(code==-1) break;
	var len = read_int32(offset);
	offset += 4;
	offset += len	;
	}

var gloups = read_int32(offset);
offset += 4;

var nfield = read_int32(offset);
offset += 4;

offset += 12 + nfield*4;

var fields = new Array(nfield);

for(var j=0;j<nfield;j++)
	{
	fields[j] = {};
	fields[j].addr = read_int32(offset);
	offset += 4;

	fields[j].name = read_string(fields[j].addr);

	var off = fields[j].name.length <32 ? 32 : fields[j].name.length+1;
	fields[j].code = read_int8(fields[j].addr+off);
	fields[j].size = read_int16(fields[j].addr+off+4);

	var values = new Array(nr);

	if(fields[j].code==1)
		{
		var addr = fields[j].addr+off+54;
		for(var i=0;i<nr;i++)
			values[i] = read_double(addr+fields[j].size*i);
		}

	if(fields[j].code==2)
		{
		var addr = fields[j].addr+off+46;
		for(var i=0;i<nr;i++)
			values[i] = read_string(addr+fields[j].size*i);
		}
	fields[j].values = values;
	}


data = [];
var row = new Array(nfield);
for(var j=0;j<nfield;j++)
	row[j] = fields[j].name;
data.push(row);

for(var i=0;i<nr;i++)
	{
	var row = new Array(nfield);
	var ok = false;
	for(var j=0;j<nfield;j++)
		{	
		row[j] = fields[j].values[i];
		if(typeof row[j]=="string")
			{
			if(row[j].length>0) ok = true;
			}
		else
			{
			if(!isNaN(row[j])) ok = true;
			}
		}

	if(ok)
		data.push(row);
	}

check_data_type(callback);


	function read_int8(offset)
	{
	return content[offset];
	}

	function read_int16(offset)
	{
	return content.readInt16BE(offset);
	}

	function read_int32(offset)
	{
	return content.readInt32BE(offset);
	}

	function read_double(offset)
	{
	return content.readDoubleBE(offset);
	}

	function read_string(offset)
	{
	var n = content[offset];
	return content.toString("utf8",offset+1,offset+n+1);
	}

}

//****************************************************************************

function process_lpj_content(content,callback)
{

var verif = content.readInt32LE(8);
var nrecord = content.readInt32LE(16)-1;
var b1 = new Buffer(4);
b1.writeInt32LE(nrecord);
var b2 = content.slice(4,8);

var offset = find(b1,20,verif);
if(offset<0) offset = find(b2,28,verif)+8;

if(offset<0) { callback(null); return; }

var nr = content.readInt32LE(offset);

// bitmap of records
var mapsize  = content.readInt32LE(offset-8);
var mapwords = Math.floor((mapsize+59)/60);
var mapbytes = mapwords*8;

var nfield  = content.readInt32LE(offset+4);

offset += 0xA5;

data = [];

// name of fields
var fields = new Array(nfield);
for(var j=0;j<nfield;j++)
	{
	fields[j] = content.toString("utf8",offset,offset+8).trim();	
	offset += 8;
	}
data.push(fields);

offset += mapbytes +4;

var end = offset+nrecord*nfield*8;

// correct address off one if needed
if(Math.abs(content.length-end)<10)
	offset = content.length - nrecord*nfield*8;

for(var i=0;i<nr;i++)
	{
	var row = [];
	for(var j=0;j<nfield;j++)	
		{
		row[j] = Math.round(content.readDoubleLE(offset)*1000000)/1000000;
		offset += 8;
		}
	data.push(row);
	}

check_data_type(callback);

	function find(b,shift,verif)
	{
	var offset = 20;
	while(true)
		{
		start = offset+4;
		offset = content.indexOf(b,start);
		if(offset<0) return -1000;
		var check = content.readInt32LE(offset+shift);
		if(check==verif) return offset;
		}
	}

	function f32(x) 
	{
	var s = x.toString(16).toUpperCase();
	while(s.length<8) s = "0"+s;
	return s;
	}

	function dump(start,end)
	{
	var s = "";
	for(var i=0;i<end-start;i++)
		{
		var t = content[start+i].toString(16).toUpperCase();
		if(t.length<2) t = "0"+t;
		s += t+" ";
		if((i%16)==15) 
			{
			console.log(s);
			s = "";
			}
		}
	}

}

//****************************************************************************

function process_bigquery(content, callback) {

console.log("process bigquery  content "+content.length);

var burl1 = "https://www.googleapis.com/bigquery/v2/projects/%s/queries";
var burl2 = "https://www.googleapis.com/bigquery/v2/projects/%s/queries/%s?timeoutMs=%d";
var scope = "https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/cloud-platform";

content = content+"";

try {	
	var GAPI = require("gapitoken");
	var util = require("util");
	var request = require("request");

	var lines = content.split("\n");
	if(lines.length<2)
		lines = content.split("\r");

	var params = { timeout:10000 };
	var m;
	for(var i=0;i<lines.length;i++)
		{
		if(m=lines[i].match(/client_secret:(.*)/))
			params.client_secret = m[1];
		else if(m=lines[i].match(/timeout:(.*)/))
			params.timeout = Number(m[1]);
		else if(m=lines[i].match(/query:(.*)/))
			params.query = m[1];
		else 
			params.query += lines[i];
		}

		var json = JSON.parse(fs.readFileSync(params.client_secret));
		}
catch(err) {
		console.log(err);
		return callback(null);
		}
		
var gapi = new GAPI( {
	scope:scope,
	iss : json.client_email,
	key : json.private_key
	},
	 function() { gapi.getToken(ontoken) }
	);


	function ontoken(err,token) {

		console.log("token "+token);
		if(err) {
			console.log("TOKEN ERR "+err);
			callback(null);
			return;
			}

		// submit query
		request( {
			url:util.format(burl1,json.project_id),
			method:"POST",
			headers: { Authorization:"Bearer "+token },
			json:{ query:params.query, timeoutMs:params.timeout }
			},
			onreply);	
		};


	function onreply(err,r,d) {
		if(err) {
			console.log("REPLY ERR "+err);
			callback(null);
			return;
			}
	
		// if result is already available
		if(d.jobComplete)
			{
			ondata(d);
			return;
			}
	
		// retrieve result
		request( {
			url:util.format(burl2,d.jobReference.projectId,d.jobReference.jobId,params.timeout),
			method:"GET",
			headers: {
				Authorization:"Bearer "+token
				}
			},
			onreply);	
	}


	function ondata(d) {
		data = [];

		var record = [];
		var fields = d.schema.fields;
		for(var j=0;j<fields.length;j++)
			if((fields[j].type==="INTEGER")||(fields[j].type==="FLOAT"))
				record.push(fields[j].name+":n");
			else
				record.push(fields[j].name);
		data.push(record);

		var rows = d.rows;
		for(var i=0;i<rows.length;i++)
			{
			record = new Array(fields.length);
			var f = rows[i].f;
			for(var j=0;j<f.length;j++)
				if((fields[j].type==="INTEGER")||(fields[j].type==="FLOAT"))
					record[j] = Number(f[j].v);
				else
					record[j] = f[j].v;
			data.push(record);
			}

		callback(data);
		}
}

//****************************************************************************

function process_mongodb(content, callback) {


console.log("process mongodb "+content.length);

content = content+"";

lines = content.split("\n");
if(lines.length<2)
	lines = content.split("\r");

// default parameters
var params = {host:"localhost:27017",database:"test",collection:"test",query:{}};

var m;
for(var i=0;i<lines.length;i++)
	{
	if(m=lines[i].match(/host:(.*)/))
		params.host = m[1];
	if(m=lines[i].match(/user:(.*)/))
		params.user = m[1];
	if(m=lines[i].match(/password:(.*)/))
		params.password = m[1];
	if(m=lines[i].match(/database:(.*)/))
		params.database = m[1];
	if(m=lines[i].match(/collection:(.*)/))
		params.collection = m[1];
	if(m=lines[i].match(/query:(.*)/))
		{
		try { eval("params.query = "+m[1]); } catch(err) { console.log(err) }
		}
	}



var url = "mongodb://"+params.host+"/"+params.database;

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(url, function(err,db) {

	if(err) { console.log(err.stack); callback(null); return; }

	var collection = db.collection(params.collection);
	
	collection.find(params.query).toArray(function(err,docs) {

		if(err) { console.log(err.stack) ; callback(null) ; return ; }

		db.close();

		var fields = []
		for(var x in docs[0])
			fields.push(x);

		data = [];
		data.push(fields);

		for(var i=0;i<docs.length;i++)
			{
			var record = [];
			var ok = true;
			for(var j=0;j<fields.length;j++)
				if(fields[j] in docs[i])
					record.push(docs[i][fields[j]]);
				else
					{ ok = false; break; }
			if(ok)
				data.push(record);
			}
		
		check_data_type(callback);	

		});


	});


}

//****************************************************************************

function process_mssql(content, callback) {

console.log("process mssql "+content.length);

content = content+"";

lines = content.split("\n");
if(lines.length<2)
	lines = content.split("\r");

// default parameters
var config = {server:"localhost",userName:"test",password:"test"};
var query = null;

var m;
for(var i=0;i<lines.length;i++)
	{
	if(m=lines[i].match(/host:(.*)/))
		config.server = m[1];
	if(m=lines[i].match(/usern?a?m?e?:(.*)/))
		config.userName = m[1];
	if(m=lines[i].match(/password:(.*)/))
		config.password = m[1];
	if(m=lines[i].match(/query:(.*)/))
		query = m[1];
	}


var Connection = require("tedious").Connection;
var Request = require("tedious").Request;


data = null;
var fields = null;

var cnx = new Connection(config);
cnx.on("connect", function(err) {
	if(err) 
		{
		console.log(err.stack);
		callback(null);
		return;
		}

	var rq = new Request(query, function(err, count) {		
		if(err) {
			console.log(err.stack);
			callback(null);
			return;
			}
		cnx.close();
		check_data_type(callback);	
		});

	rq.on("row", function(cols) {
		if(!fields)
			{
			fields = [];
			for(var i=0;i<cols.length;i++)
				fields.push(cols[i].metadata.colName);
			data = [];
			data.push(fields);
			}	

		var record = [];		
		for (var i=0;i<cols.length;i++)
			record.push(cols[i].value);

		data.push(record);
		});

	cnx.execSql(rq);

	});


}

//****************************************************************************

function process_keel(content, callback) 
{

console.log("process keel "+content.length);

lines = (""+content).replace(/\r/g,"").split("\n");

data = [];
fields = [];
indata = false;

for(var i=0;i<lines.length;i++)
	{
	if(indata)
		{
		var record = lines[i].replace(/ /g,"").split(",");
		if(record.length==fields.length)	
			data.push(record);
		}
	else if(lines[i].substring(0,9)=="@relation")
		{
		}
	else if(lines[i].substring(0,10)=="@attribute")
		{
		lines[i] = lines[i].replace(/[^a-zA-Z0-9@]/g," ");	
		console.log(lines[i]);
		var words = lines[i].replace(/ +/g," ").split(" ");
		fields.push(words[1]);
		}
	else if(lines[i].substring(0,5)=="@data")
		{
		data.push(fields);
		indata = true;
		}
	}

check_data_type(callback);

}

//****************************************************************************

function guess_field_separator(line) {
	if(line.split("\t").length>2) return "\t";
	if(line.split(";").length>2) return ";";
	if(line.split("!").length>2) return "!";
	if(line.split("|").length>2) return "|";
	if(line.split(",").length>2) return ",";

	if(line.split("\t").length>1) return "\t";
	if(line.split(";").length>1) return ";";
	if(line.split("!").length>1) return "!";
	if(line.split("|").length>1) return "|";
	if(line.split(",").length>1) return ",";

	return null;
}

//****************************************************************************

function check_data_type(callback)
{
if(data.length<2)
	{
	callback(null);
	return;
	}

var nv = data[0].length;
var isnum = new Array(nv);
for(var j=0;j<nv;j++)
	isnum[j] = true;

for(var i=1;i<data.length;i++)
	{
	for(var j=0;j<nv;j++)
		if(isnum[j])
			if(isNaN(Number(data[i][j])))
				isnum[j] = false;
	}

for(var j=0;j<nv;j++)
	{
	var m = unquote(data[0][j]).replace(":n","").replace("/n","");
	data[0][j] = isnum[j] ? m+":n" : m;
	}

callback(data);
}

//****************************************************************************

function unquote(s)
{
if(s==void 0) s= "";
var m = s.match(/^"(.*)"$/);
return m==null ? s : m[1];
}

//****************************************************************************

function is_binary(content) {
if(!Buffer.isBuffer(content)) return false;

var n = content.length;
var z = 0;
for(var i=0;i<n;i++)
	if(content[i]==0)
		z+=1;

return z>20;
}

//****************************************************************************

function mylog(msg) {
	fs.appendFileSync("mylog.log",msg+"\n");
}

//****************************************************************************

// CODEPAGES
cptable = {};


// International MSDOS
cptable[2] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();

// MSDOS

cptable[1] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();

// Windows ANSI
cptable[3] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();


cptable[15] = cptable[2];
