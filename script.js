$( document ).ready(function() {   var com = com || {}; 
   com.fc = com.fc || {}; 
   com.fc.JavaScriptDistLib = {
getProperty: function (a,b){try{var c=$('[obj-name= "'+a+'"]'),d=null;switch(b){case"width":d=c.width();break;case"height":d=c.height();break;case"x":d=Math.round(parseFloat(c.css("transform").split(",")[4]));break;case"y":d=Math.round(parseFloat(c.css("transform").split(",")[5]));break;case"Alpha":d=c.css("opacity");break;case"Background color":d=c.css("background-color");break;case"Horizontal scroll":d=c.css("overflow-x");break;case"Vertical scroll":d=c.css("overflow-y")}return d}catch(a){throw a}},
setProperty: function (a,b,c){try{var d=$('[obj-name= "'+a+'"]');switch(b){case"width":d.css("width",c+"px");break;case"height":d.css("height",c+"px");break;case"x":var e=Math.round(parseFloat(d.css("transform").split(",")[5]));d.css("transform","translate("+c+"px,"+e+"px)");break;case"y":var f=Math.round(parseFloat(d.css("transform").split(",")[4]));d.css("transform","translate("+f+"px,"+c+"px)");break;case"Alpha":d.css("opacity",c/100);break;case"Background color":d.css("background-color",c);break;case"Horizontal scroll":var g=d.css("overflow-x","hidden");c&&(g=d.css("overflow-x","scroll"));break;case"Vertical scroll":var g=d.css("overflow-y","hidden");c&&(g=d.css("overflow-y","scroll"))}}catch(a){throw a}},
removeGesture: function (a,b){try{var c=$('[obj-name= "'+a+'"]');switch(b){case"CLICK":return c.unbind("click")}}catch(a){throw a}},
_handleException: function (a,b){console.error("Exception: ",a,b)},
distMode: "preview",
Image: {
  createImageFromUrl: function (a,b){b(a)},
  setProperty: function (a,b,c){try{var d='[obj-name="'+a+'"]',e=$(d);switch(console.log(c),b){case"Image":e.find("img").attr("src",c);break;case"width":case"height":case"Alpha":case"Background color":case"x":case"y":com.fc.JavaScriptDistLib.setProperty(a,b,c);break;case"Scaling":switch(c){case"stretch":$(d+" img").css("width","inherit"),$(d+" img").css("height","inherit"),$(d+" img").attr("scale-type","stretch");break;case"fit":$(d+" img").css("width","inherit"),$(d+" img").css("height","initial"),$(d+" img").attr("scale-type","fit");break;case"crop":$(d+" img").css("width","initial"),$(d+" img").css("height","initial"),$(d+" img").attr("scale-type","crop")}}}catch(a){throw new com.fc.JavaScriptDistLib.Image.ImageException(a)}},
  getProperty: function (a,b){try{var c,d='[obj-name= "'+a+'"]',e=$(d);switch(b){case"Image":c=e.attr("src");break;case"width":case"height":case"x":case"y":case"Alpha":case"Background color":c=com.fc.JavaScriptDistLib.getProperty(a,b);break;case"Scaling":c=e.attr("scale-type")}return c}catch(a){throw new com.fc.JavaScriptDistLib.Image.ImageException(a)}},
  ImageException: function (a,b){this.name="ImageException",this.snappMessage=a,this.message=b||a,this.stack=(new Error).stack},
  }
,
Label: {
  getProperty: function (a,b){try{var c,d='[obj-name= "'+a+'"]';$(d);switch(b){case"width":case"height":case"x":case"y":c=com.fc.JavaScriptDistLib.getProperty(a,b);break;case"Text":c=$(d+" .label").html();break;case"Font size":c=$(d+" .label").css("font-size");break;case"Alpha":c=100*$(d+" .label").css("opacity");break;case"Text Alignment":c=$(d+" .label").css("text-align");break;case"Vertical Alignment":c=$(d+" .label").css("vertical-align");break;case"Font style":c=$(d+" .label").css("font-style");break;case"Font family":c=$(d+" .label").css("font-family");break;case"Background color":c=$(d+" .label").css("background-color");break;case"Text color":c=$(d+" .label").css("color");break;case"Max lines":c=$(d+" .label").css("-webkit-line-clamp")}return c}catch(a){throw a}},
  setProperty: function (a,b,c){try{var d='[obj-name= "'+a+'"]';$(d);switch(b){case"width":case"height":case"x":case"y":com.fc.JavaScriptDistLib.setProperty(a,b,c);break;case"Text":$(d+" .label").html(c);break;case"Font size":$(d+" .label").css("font-size",c+"px");break;case"Alpha":$(d+" .label").css("opacity",c/100);break;case"Text Alignment":$(d+" .label").css("text-align",c.toLowerCase());break;case"Vertical Alignment":$(d+" .label").css("vertical-align",c.toLowerCase());break;case"Font style":$(d+" .label").css("font-style",c.toLowerCase());break;case"Font family":$(d+" .label").css("font-family",c.toLowerCase());break;case"Background color":$(d+" .label").css("background-color",c);break;case"Text color":$(d+" .label").css("color",c);break;case"Max lines":var e=$(d).css("line-height").replace("px",""),f=e*val;$(d+" div.label").css({overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":val.toString(),"-webkit-box-orient":"vertical","max-height":f+"px"})}}catch(a){throw a}},
  }
,
Button: {
  setProperty: function (a,b,c){try{var d='[obj-name="'+a+'"]';$(d);switch(b){case"width":case"height":case"x":case"y":com.fc.JavaScriptDistLib.setProperty(a,b,c);break;case"Alpha":$(d+" button").css("opacity",c/100);break;case"Background color":$(d+" button").css("background-color",c);break;case"Text":$(d+" button").html(c);break;case"Font size":$(d+" button").css("font-size",c+"px");break;case"Text Alignment":$(d+" button").css("text-align",c.toLowerCase());break;case"Vertical Alignment":$(d+" button").css("vertical-align",c.toLowerCase());break;case"Font style":$(d+" button").css("font-style",c.toLowerCase());break;case"Font family":$(d+" button").css("font-family",c);break;case"Text color":$(d+" button").css("color",c)}}catch(a){throw new ImageException(a)}},
  getProperty: function (a,b){try{var c,d='[obj-name= "'+a+'"]';$(d);switch(b){case"width":case"height":case"x":case"y":c=com.fc.JavaScriptDistLib.getProperty(a,b);break;case"Text":c=$(d+" button").html(),console.log(c);break;case"Font size":c=$(d+" button").css("font-size");break;case"Alpha":c=100*$(d+" button").css("opacity");break;case"Text Alignment":c=$(d+" button").css("text-align");break;case"Vertical Alignment":c=$(d+" button").css("vertical-align");break;case"Font style":c=$(d+" button").css("font-style");break;case"Font family":c=$(d+" button").css("font-family");break;case"Background color":c=$(d+" button").css("background-color");break;case"Text color":c=$(d+" button").css("color")}return c}catch(a){throw a}},
  }
,
GraphContainer: {
  setProperty: function (a,b,c){try{var d,e='[obj-name="'+a+'"]';$(e);switch($(e).find(".c3").each(function(){d=$(this).data("c3-chart")}),b){case"width":case"height":case"x":case"y":com.fc.JavaScriptDistLib.setProperty(a,b,c);break;case"Type":d.transform(c);break;case"BG Color":$(e).find("#fcLine").css("background-color",c);break;case"Legends":var f="visible";c||(f="hidden"),d3.select(e).selectAll("g.c3-legend-item").style("visibility",f);break;case"Grid":var f="visible";c||(f="hidden"),d3.select(e).selectAll("g.c3-grid").style("visibility",f);break;case"X Axis Color":d3.select(e).selectAll("g.c3-axis-x").selectAll("path").style("stroke",c);break;case"Y Axis Color":d3.select(e).selectAll("g.c3-axis-y").selectAll("path").style("stroke",c);break;case"X Axis Text Color":d3.select(e).selectAll("g.c3-axis-x").selectAll("text").selectAll("tspan").style("fill",c);break;case"Y Axis Text Color":d3.select(e).selectAll("g.c3-axis-y").selectAll("text").selectAll("tspan").style("fill",c);break;case"X Axis Line Width":d3.select(e).selectAll("g.c3-axis-x").selectAll("path").style("stroke-width",c);break;case"Y Axis Line Width":d3.select(e).selectAll("g.c3-axis-y").selectAll("path").style("stroke-width",c);break;case"Legend Text":d3.select(e).selectAll("text.c3-axis-x-label").style("stroke",c),d3.select(e).selectAll("text.c3-axis-y-label").style("stroke",c),d3.select(e).selectAll("g.c3-legend-item").selectAll("text").style("stroke",val);break;case"Fill Alpha":d3.select(e).selectAll(".c3-area ").style("opacity",c/100),d3.select(e).selectAll("g.c3-chart-bars ").selectAll("path").style("opacity",c/100);break;case"Line Width":d3.select(e).selectAll("g.c3-chart-lines").selectAll("path").style("stroke-width",c);break;case"Line Circle Color":d3.select(e).selectAll("circle").style("stroke",c),d3.select(e).selectAll("circle").style("fill",c);break;case"Circle Radius":d3.select(e).selectAll("circle").attr("r",c);break;case"X Axis Text":d.axis.labels({x:c});break;case"Y Axis Text":d.axis.labels({y:c});break;case"Fill Color":d3.select(e).selectAll(".c3-area ").style("fill",c);break;case"Bar Color":d3.select(e).selectAll("g.c3-chart-bar").selectAll("path").style("fill",c);break;case"Draw Line Values":var f="visible";c||(f="hidden"),d3.select(e).selectAll("g.c3-chart-text").selectAll("text").style("visibility",f);break;case"Axis Font Size":d3.select(e).selectAll("g.c3-axis-x").selectAll("text").selectAll("tspan").style("font-size",c),d3.select(e).selectAll("g.c3-axis-y").selectAll("text").selectAll("tspan").style("font-size",c),d3.select(e).selectAll("text.c3-text").style("font-size",c);break;case"Line Filled":c?d.transform("area"):d.transform("line");break;case"Smooth Line":c?d.transform("area-spline"):d.transform("area")}}catch(a){throw new GraphException(a)}},
  getProperty: function (a,b){try{var c,d,e='[obj-name= "'+a+'"]';$(e);switch($(e).find(".c3").each(function(){d=$(this).data("c3-chart")}),b){case"width":case"height":case"x":case"y":c=com.fc.JavaScriptDistLib.getProperty(a,b);break;case"Type":c=d.type;break;case"BG Color":c=$(e).find("#fcLine").css("background-color");break;case"Legends":c=d3.select(e).selectAll("g.c3-legend-item").style("visibility");break;case"Grid":c=d3.select(e).selectAll("g.c3-grid").style("visibility");break;case"X Axis Color":c=d3.select(e).selectAll("g.c3-axis-x").selectAll("path").style("stroke");break;case"Y Axis Color":c=d3.select(e).selectAll("g.c3-axis-y").selectAll("path").style("stroke");break;case"X Axis Text Color":c=d3.select(e).selectAll("g.c3-axis-x").selectAll("text").selectAll("tspan").style("fill");break;case"Y Axis Text Color":c=d3.select(e).selectAll("g.c3-axis-y").selectAll("text").selectAll("tspan").style("fill");break;case"X Axis Line Width":c=d3.select(e).selectAll("g.c3-axis-x").selectAll("path").style("stroke-width");break;case"Y Axis Line Width":c=d3.select(e).selectAll("g.c3-axis-y").selectAll("path").style("stroke-width");break;case"Legend Text":c=d3.select(e).selectAll("text.c3-axis-x-label").style("stroke");break;case"Fill Alpha":c=100*d3.select(e).selectAll(".c3-area ").style("opacity");break;case"Line Width":c=d3.select(e).selectAll("g.c3-axis-x").selectAll("path").style("stroke-width");break;case"Line Circle Color":c=d3.select(e).selectAll("circle").style("stroke");break;case"Circle Radius":c=d3.select(e).selectAll("circle").attr("r");break;case"X Axis Text":c=d3.select(e).selectAll("g.c3-axis-x").selectAll("text").html();break;case"Y Axis Text":c=d3.select(e).selectAll("g.c3-axis-y").selectAll("text").html();break;case"Fill Color":c=d3.select(e).selectAll(".c3-area ").style("fill");break;case"Bar Color":c=d3.select(e).selectAll("g.c3-chart-bar").selectAll("path").style("fill");break;case"Draw Line Values":c=d3.select(e).selectAll("g.c3-chart-text").style("opacity");break;case"Axis Font Size":c=d3.select(e).selectAll("g.c3-axis-x").selectAll("text").selectAll("tspan").style("font-size")}return c}catch(a){throw new GraphException(a)}},
  createChartWithList: function (a,b,c,d){var f,g='[obj-name= "'+a+'"]';$(g);$(g).find(".c3").each(function(){f=$(this).data("c3-chart")});var h=[],i=[];if(h.push("x"),null!=c){var j=!1;if(null!=b)for(var k=0;k<b.length;k++)h.push(b[k]);else j=!0;i.push(d);for(var l=0;l<c.length;l++)i.push(c[l]),j&&h.push(l);var m={};m.columns=[],m.columns.push(h),m.columns.push(i),m.unload=!0;var n=f.load(m);return n}throw new GraphException(e)},
  addChartTransition: function (a,b,c){var d,e='[obj-name= "'+a+'"]';$(e);$(e).find(".c3").each(function(){d=$(this).data("c3-chart")});for(var f=[d.data()[0].id],g=[d.data()[0].id],h=0;h<d.data()[0].values.length;h++)g.push(0);for(var h=0;h<d.data()[0].values.length;h++)f.push(d.data()[0].values[h].value);var i=d.load({columns:[g]}),j=setTimeout(function(){d.load({columns:[f]})},b);return[i,j]},
  addValuesToChart: function (a,b,c){var d,e='[obj-name= "'+a+'"]';$(e);$(e).find(".c3").each(function(){d=$(this).data("c3-chart")});var f={x:parseInt(b),index:d.data()[0].values.length+1,id:d.data()[0].id,value:c},g=d.data()[0].values;g.push(f);for(var h=["x"],i=[d.data()[0].id],j=0;j<g.length;j++)h.push(g[j].x),i.push(g[j].value);return d.load({columns:[h,i]})},
  GraphException: function (a,b){this.name="GraphException",this.snappMessage=a,this.message=b||a,this.stack=(new Error).stack},
  }
,
Location: {
  locationCreate: function (a,b){var c={lat:a,lng:b};return c},
  locationGetLatitude: function (a){return a.lat},
  locationGetLongitude: function (a){return a.lng},
  }
,
Connio: {
  connioBaseURL: "https://api.connio.com",
  connioApp: "_app_796713082971687907",
  connioKEY: "_key_796713086353217836",
  connioSecret: "2b05db40845242c09899346fca8da8ff",
  connioMQTTHost: "mqtt.connio.com",
  connioMQTTPort: 8001,
  connioMQTTCientID: "_api_822826112907525233",
  connioMQTTUsername: "_key_822826112904411459",
  connioMQTTPassword: "cddd9bed10324fcea3ccef36e37924fa",
  connioMQTTTopic: "connio/apps/_app_796713082971687907/devices/#",
  connioMQTTClient: {
    _getHost: function (){return a},
    _setHost: function (){throw new Error(p(n.UNSUPPORTED_OPERATION))},
    _getPort: function (){return b},
    _setPort: function (){throw new Error(p(n.UNSUPPORTED_OPERATION))},
    _getPath: function (){return c},
    _setPath: function (){throw new Error(p(n.UNSUPPORTED_OPERATION))},
    _getURI: function (){return e},
    _setURI: function (){throw new Error(p(n.UNSUPPORTED_OPERATION))},
    _getClientId: function (){return k.clientId},
    _setClientId: function (){throw new Error(p(n.UNSUPPORTED_OPERATION))},
    _getOnConnectionLost: function (){return k.onConnectionLost},
    _setOnConnectionLost: function (a){if("function"!=typeof a)throw new Error(p(n.INVALID_TYPE,[typeof a,"onConnectionLost"]));k.onConnectionLost=a},
    _getOnMessageDelivered: function (){return k.onMessageDelivered},
    _setOnMessageDelivered: function (a){if("function"!=typeof a)throw new Error(p(n.INVALID_TYPE,[typeof a,"onMessageDelivered"]));k.onMessageDelivered=a},
    _getOnMessageArrived: function (){return k.onMessageArrived},
    _setOnMessageArrived: function (a){if("function"!=typeof a)throw new Error(p(n.INVALID_TYPE,[typeof a,"onMessageArrived"]));k.onMessageArrived=a},
    _getTrace: function (){return k.traceFunction},
    _setTrace: function (a){if("function"!=typeof a)throw new Error(p(n.INVALID_TYPE,[typeof a,"onTrace"]));k.traceFunction=a},
    connect: function (a){if(a=a||{},l(a,{timeout:"number",userName:"string",password:"string",willMessage:"object",keepAliveInterval:"number",cleanSession:"boolean",useSSL:"boolean",invocationContext:"object",onSuccess:"function",onFailure:"function",hosts:"object",ports:"object",mqttVersion:"number",mqttVersionExplicit:"boolean",uris:"object"}),void 0===a.keepAliveInterval&&(a.keepAliveInterval=60),a.mqttVersion>4||a.mqttVersion<3)throw new Error(p(n.INVALID_ARGUMENT,[a.mqttVersion,"connectOptions.mqttVersion"]));if(void 0===a.mqttVersion?(a.mqttVersionExplicit=!1,a.mqttVersion=4):a.mqttVersionExplicit=!0,void 0!==a.password&&void 0===a.userName)throw new Error(p(n.INVALID_ARGUMENT,[a.password,"connectOptions.password"]));if(a.willMessage){if(!(a.willMessage instanceof x))throw new Error(p(n.INVALID_TYPE,[a.willMessage,"connectOptions.willMessage"]));if(a.willMessage.stringPayload,"undefined"==typeof a.willMessage.destinationName)throw new Error(p(n.INVALID_TYPE,[typeof a.willMessage.destinationName,"connectOptions.willMessage.destinationName"]))}if("undefined"==typeof a.cleanSession&&(a.cleanSession=!0),a.hosts){if(!(a.hosts instanceof Array))throw new Error(p(n.INVALID_ARGUMENT,[a.hosts,"connectOptions.hosts"]));if(a.hosts.length<1)throw new Error(p(n.INVALID_ARGUMENT,[a.hosts,"connectOptions.hosts"]));for(var b=!1,d=0;d<a.hosts.length;d++){if("string"!=typeof a.hosts[d])throw new Error(p(n.INVALID_TYPE,[typeof a.hosts[d],"connectOptions.hosts["+d+"]"]));if(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(a.hosts[d])){if(0==d)b=!0;else if(!b)throw new Error(p(n.INVALID_ARGUMENT,[a.hosts[d],"connectOptions.hosts["+d+"]"]))}else if(b)throw new Error(p(n.INVALID_ARGUMENT,[a.hosts[d],"connectOptions.hosts["+d+"]"]))}if(b)a.uris=a.hosts;else{if(!a.ports)throw new Error(p(n.INVALID_ARGUMENT,[a.ports,"connectOptions.ports"]));if(!(a.ports instanceof Array))throw new Error(p(n.INVALID_ARGUMENT,[a.ports,"connectOptions.ports"]));if(a.hosts.length!=a.ports.length)throw new Error(p(n.INVALID_ARGUMENT,[a.ports,"connectOptions.ports"]));a.uris=[];for(var d=0;d<a.hosts.length;d++){if("number"!=typeof a.ports[d]||a.ports[d]<0)throw new Error(p(n.INVALID_TYPE,[typeof a.ports[d],"connectOptions.ports["+d+"]"]));var f=a.hosts[d],g=a.ports[d],h=f.indexOf(":")!=-1;e="ws://"+(h?"["+f+"]":f)+":"+g+c,a.uris.push(e)}}}k.connect(a)},
    subscribe: function (a,b){if("string"!=typeof a)throw new Error("Invalid argument:"+a);if(b=b||{},l(b,{qos:"number",invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),b.timeout&&!b.onFailure)throw new Error("subscribeOptions.timeout specified with no onFailure callback.");if("undefined"!=typeof b.qos&&0!==b.qos&&1!==b.qos&&2!==b.qos)throw new Error(p(n.INVALID_ARGUMENT,[b.qos,"subscribeOptions.qos"]));k.subscribe(a,b)},
    unsubscribe: function (a,b){if("string"!=typeof a)throw new Error("Invalid argument:"+a);if(b=b||{},l(b,{invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),b.timeout&&!b.onFailure)throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");k.unsubscribe(a,b)},
    send: function (a,b,c,d){var e;if(0==arguments.length)throw new Error("Invalid argument.length");if(1==arguments.length){if(!(a instanceof x)&&"string"!=typeof a)throw new Error("Invalid argument:"+typeof a);if(e=a,"undefined"==typeof e.destinationName)throw new Error(p(n.INVALID_ARGUMENT,[e.destinationName,"Message.destinationName"]));k.send(e)}else e=new x(b),e.destinationName=a,arguments.length>=3&&(e.qos=c),arguments.length>=4&&(e.retained=d),k.send(e)},
    disconnect: function (){k.disconnect()},
    getTraceLog: function (){return k.getTraceLog()},
    startTrace: function (){k.startTrace()},
    stopTrace: function (){k.stopTrace()},
    isConnected: function (){return k.connected},
    }
,
  connioMQTTMessageRecvCallback: null,
  configure: function (){if(null==this.connioBaseURL){var a=this,b=Creator.currentProject.serviceModel.getServiceObject("Connio"),c=b.attributes.attrs;this.connioBaseURL=c.api.url,this.connioApp=c.api.app,this.connioKEY=c.api.key,this.connioSecret=c.api.secret,this.connioMQTTHost=c.mqtt.host,this.connioMQTTPort=Number(c.mqtt.port),this.connioMQTTCientID=c.mqtt.clientId,this.connioMQTTUsername=c.mqtt.username,this.connioMQTTPassword=c.mqtt.password,this.connioMQTTTopic="connio/apps/"+this.connioApp+"/devices/#";try{if(""==this.connioBaseURL||""==this.connioKEY||""==this.connioSecret){var d=new a.ConnioNetworkException(msg,"Please go to File -> Connio Properties and set credentials.");com.fc.JavaScriptDistLib.handleException(d)}if(""!=this.connioMQTTHost&&""!=this.connioMQTTPort&&""!=this.connioMQTTCientID&&""!=this.connioMQTTUsername&&""!=this.connioMQTTPassword&&""!=this.connioApp)this.connioMQTTClient=new Paho.MQTT.Client(this.connioMQTTHost,this.connioMQTTPort,this.connioMQTTCientID),this.connioMQTTClient.onConnectionLost=function(b){a.handleMQTTConnectionLost(b)},this.connioMQTTClient.onMessageArrived=function(b){a.handleMQTTMessage(b)};else{var d=new a.ConnioNetworkException(msg,"Please go to File -> Connio Properties and set credentials.");com.fc.JavaScriptDistLib.handleException(d)}}catch(a){console.log("Some of the properties are missing. Go to File->Connio Properties")}}},
  connioConfigure: function (a,b,c){this.configure(),this.connioKEY=a,this.connioSecret=b,this.connioMQTTMessageRecvCallback=c,this.connio_mqtt_connect()},
  connioGetDeviceProfiles: function (a){var b=this;this.configure();var c=this.connioBaseURL+"/v2/deviceprofiles";$.ajax({url:c,type:"GET",headers:{Authorization:"Basic "+btoa(this.connioKEY+":"+this.connioSecret)},success:function(b){a(b)},error:function(a,c,d){var e=new b.ConnioNetworkException(d,"Could not get the profiles. Could be network error");com.fc.JavaScriptDistLib.handleException(e)}})},
  connioGetDevices: function (a,b){var c=this;this.configure();var d=this.connioBaseURL+"/v2/devices?profile="+a;$.ajax({url:d,type:"GET",headers:{Authorization:"Basic "+btoa(this.connioKEY+":"+this.connioSecret)},success:function(a){b(a)},error:function(a,b,d){var e=new c.ConnioNetworkException(d,"Could not get the devices.");com.fc.JavaScriptDistLib.handleException(e)}})},
  connioGetProperties: function (a,b){var c=this;this.configure();var d=this.connioBaseURL+"/v2/deviceprofiles/"+a+"/properties";$.ajax({url:d,type:"GET",headers:{Authorization:"Basic "+btoa(this.connioKEY+":"+this.connioSecret)},success:function(a){b(a)},error:function(a,b,d){var e=new c.ConnioNetworkException(d,"Could not get the properties.");com.fc.JavaScriptDistLib.handleException(e)}})},
  connioReadData: function (a,b,c){var d=this;this.configure();var e=this.connioBaseURL+"/v2/data/devices/"+a;$.ajax({url:e,type:"GET",headers:{Authorization:"Basic "+btoa(this.connioKEY+":"+this.connioSecret)},success:function(a){b(a)},error:function(a,b,e){c(e);var f=new d.ConnioNetworkException(e,"Could not read data.");com.fc.JavaScriptDistLib.handleException(f)}})},
  connionGetValue: function (a,b,c){this.configure();var d=a.properties;if(void 0!=d&&d.length>0)for(var e=0;e<d.length;e++){var f=d[e],g=f.descriptors.qname;if(g.indexOf(c)!=-1){var h=f.value[b];if(void 0!=h)return h}}return""},
  connioGetDeviceName: function (a,b){this.configure();var c=a.results;try{for(var d=0;d<c.length;d++){var e=c[d];if(e.id==b)return e.name}}catch(a){}return""},
  connioGetDeviceLocation: function (a,b){this.configure();var c=a.results;try{for(var d=0;d<c.length;d++){var e=c[d];if(e.id==b||e.name==b){var f={lat:e.location.geo.lat,lng:e.location.geo.lon};return f}}}catch(a){}return""},
  connioWriteData: function (a,b,c,d,e){var f=this;this.configure();var g=this.connioBaseURL+"/v2/data/devices/"+a+"/properties/"+c,h={};h.dps=[];var i={};i.t=(new Date).toISOString(),i.v=b,h.dps.push(i),$.ajax({url:g,type:"POST",headers:{Authorization:"Basic "+btoa(this.connioKEY+":"+this.connioSecret),"Content-Type":"application/json",Accept:"application/json"},dataType:"json",data:JSON.stringify(h),success:function(a){d(a)},error:function(a,b,c){e(c);var d=new f.ConnioNetworkException(c,"Could not write data.");com.fc.JavaScriptDistLib.handleException(d)}})},
  connioExecuteMethod: function (a,b,c,d,e){this.configure()},
  connioReadHistorical: function (a,b,c,d,e,f,g,h){var i=this;this.configure();var j=this.connioBaseURL+"/v2/data/devices/"+a+"/properties/"+b+"?";if(null!=e){var k=(e?"-":"")+"source.time";j+="sort="+k}else j+="sort=-source.time";null!=f&&(j+="&limit="+f),null!=c&&null!=d&&(j+="&q=source.time:("+c.toISOString()+"+TO+"+d.toISOString()+")"),$.ajax({url:j,type:"GET",headers:{Authorization:"Basic "+btoa(this.connioKEY+":"+this.connioSecret)},success:function(a){for(var b=parseJSONDataForPath(a,"$.results[:].t"),c=parseJSONDataForPath(a,"$.results[:].v"),d=[],e=0;e<b.length;e++)d.push(moment(b[e]).format("MMM-DD hh:mm A"));g(d,c)},error:function(a,b,c){h(c);var d=new i.ConnioNetworkException(c,"Could not read historical.");com.fc.JavaScriptDistLib.handleException(d)}})},
  connio_mqtt_connect: function (){console.log("Connecting to Connio MQTT...");var a=this;try{this.connioMQTTClient.connect({onSuccess:function(){console.log("Connected to Connio MQTT..."),a.subscribeToTopic()},userName:this.connioMQTTUsername,password:this.connioMQTTPassword,keepAliveInterval:25,timeout:60,useSSL:!0})}catch(a){console.log("Connio MQTT connection already exists. Coming out...")}},
  subscribeToTopic: function (){console.log("Subscribing to topic...");var a=this,b={qos:0,invocationContext:{foo:!0},onSuccess:function(b){a.handleMQTTSubscribeSuccess(b)},onFailure:function(b){a.handleMQTTSubscribeFailed(b);var c=new a.ConnioNetworkException(msg,"Could not subscribe to topic");com.fc.JavaScriptDistLib.handleException(c)},timeout:10};this.connioMQTTClient.subscribe(this.connioMQTTTopic,b)},
  handleMQTTConnectionLost: function (a){console.log("Connection Lost: "+a.errorMessage)},
  handleMQTTSubscribeSuccess: function (a){console.log("Subscribe success")},
  handleMQTTSubscribeFailed: function (a){console.log("Subscribe failed")},
  handleMQTTMessage: function (a){if(null!=this.connioMQTTMessageRecvCallback){var b=a.destinationName.split("/");this.connioMQTTMessageRecvCallback(b[4],b[6],a.payloadString)}},
  ConnioConfigException: function (a,b){this.name="ConnioConfigException",this.snappMessage=a,this.message=b||a,this.stack=(new Error).stack},
  ConnioNetworkException: function (a,b){this.name="ConnioNetworkException",this.snappMessage=a,this.message=b||a,this.stack=(new Error).stack},
  ConnioMQTTException: function (a,b){this.name="ConnioMQTTException",this.snappMessage=a,this.message=b||a,this.stack=(new Error).stack},
  }
,
TimeLibrary: {
  createTime: function (a){var b=a.match(/^(\d{2}):(\d{2})(\s)(\w{2})(\s)(\d{2})\/(\d{2})\/(\d{4})$/);if(null===b)return null;var c=+b[6],d=+b[7],e=+b[8],f=b[4],g=+b[1],h=+b[2];if(0==f.toString().toLowerCase().localeCompare("pm"))g+=12;else if(0!=f.toString().toLowerCase().localeCompare("am"))return f;return new Date(e,d-1,c,g,h)},
  createTimeNow: function (){return new Date},
  createTimeFromTimestamp: function (a){return new Date(toNumber(a))},
  textFromTime: function (a,b){var c=new Date(a);switch(b){case"DATE_TIME_12":var d=c.getHours(),e=c.getMinutes(),f=c.getMonth()+1,g=c.getDate(),h=c.getFullYear(),i="AM";return d>12&&(d-=12,i="PM"),1==e.toString().length&&(e="0"+e),d+":"+e+" "+i+" "+g+"/"+f+"/"+h;case"DATE_TIME_12_US":var d=c.getHours(),e=c.getMinutes(),f=c.getMonth()+1,g=c.getDate(),h=c.getFullYear(),i="AM";return d>12&&(d-=12,i="PM"),1==e.toString().length&&(e="0"+e),d+":"+e+" "+i+" "+f+"/"+g+"/"+h;case"DATE_TIME_24":var d=c.getHours(),e=c.getMinutes(),f=c.getMonth()+1,g=c.getDate(),h=c.getFullYear();return 1==e.toString().length&&(e="0"+e),d+":"+e+" "+g+"/"+f+"/"+h;case"DATE_TIME_24_US":var d=c.getHours(),e=c.getMinutes(),f=c.getMonth()+1,g=c.getDate(),h=c.getFullYear();return 1==e.toString().length&&(e="0"+e),d+":"+e+" "+f+"/"+g+"/"+h;case"TIME_12":var d=c.getHours(),e=c.getMinutes(),i="AM";return d>12&&(d-=12,i="PM"),d+":"+e+" "+i;case"TIME_24":var d=c.getHours(),e=c.getMinutes();return d+":"+e;case"DATE":var f=c.getMonth()+1,g=c.getDate(),h=c.getFullYear();return g+"/"+f+"/"+h;case"DATE_US":var f=c.getMonth()+1,g=c.getDate(),h=c.getFullYear();return f+"/"+g+"/"+h;default:return""}},
  elapsedComponent: function (a,b){return Math.floor(a/b)},
  elapsedComponentsFromTime: function (a,b){var c=new Date(a.getTime()),d=new Date(0),e=c.getUTCFullYear()-d.getUTCFullYear(),f=c.getUTCMonth()-d.getUTCMonth(),g=c.getUTCDate()-d.getUTCDate(),h=c.getUTCHours()-d.getUTCHours(),i=c.getUTCMinutes()-d.getUTCMinutes(),j=c.getUTCSeconds()-d.getUTCSeconds();switch(b){case"S":return[j];case"SM":return[i,j];case"SMH":return[h,i,j];case"SMHD":return[g,h,i,j];case"SMHDM":return[f,g,h,i,j];case"SMHDMY":return[e,f,g,h,i,j];default:return[]}},
  componentsFromTime: function (a,b){var c=new Date(a);switch(b){case"S":return[c.getSeconds()];case"SM":return[c.getMinutes(),c.getSeconds()];case"SMH":return[c.getHours(),c.getMinutes(),c.getSeconds()];case"SMHD":return[c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds()];case"SMHDM":return[c.getMonth()+1,c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds()];case"SMHDMY":return[c.getFullYear(),c.getMonth()+1,c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds()];default:return[]}},
  numberDayOfWeekFromDate: function (a){var b=new Date(a);return 0==b.getDay()?7:b.getDay()},
  stringDayOfWeekFromDate: function (a){var b=new Date(a),c=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");return c[b.getDay()]},
  createTimeInterval: function (a,b,c,d,e,f){return[a,b,c,d,e,f]},
  addIntervalFromTime: function (a,b){if(b.constructor!==Array||6!=b.length)return new Date(a);var c=new Date(a);return c.setSeconds(c.getSeconds()+toNumber(b[0])),c.setMinutes(c.getMinutes()+toNumber(b[1])),c.setHours(c.getHours()+toNumber(b[2])),c.setDate(c.getDate()+toNumber(b[3])),c.setMonth(c.getMonth()+toNumber(b[4])),c.setFullYear(c.getFullYear()+toNumber(b[5])),c},
  subtractIntervalFromTime: function (a,b){if(b.constructor!==Array||6!=b.length)return a;var c=new Date(a);return c.setSeconds(c.getSeconds()-toNumber(b[0])),c.setMinutes(c.getMinutes()-toNumber(b[1])),c.setHours(c.getHours()-toNumber(b[2])),c.setDate(c.getDate()-toNumber(b[3])),c.setMonth(c.getMonth()-toNumber(b[4])),c.setFullYear(c.getFullYear()-toNumber(b[5])),c},
  TimeLibException: function (a,b){this.name="TimeLibException",this.snappMessage=a,this.message=b||a,this.stack=(new Error).stack},
  }
,
Dictionary: {
  removeAllKeys: function (a){for(var b in a)delete a[b]},
  getKeys: function (a){var b=[];for(var c in a)b.push(c);return b},
  }
,
Gauge: {
  setProperty: function (a,b,c){try{var d,e='[obj-name="'+a+'"]';$(e);switch($(e).find(".c3").each(function(){d=$(this).data("c3-chart")}),b){case"width":case"height":case"x":case"y":com.fc.JavaScriptDistLib.setProperty(a,b,c);break;case"Alpha":d3.selectAll(e).style("opacity",c/100);break;case"Background color":$(e+" svg").css("background-color",c);break;case"Current Value":d.load({columns:[["data",c]]});break;case"Maximum Value":d.internal.config.gauge_max=c;var f=d.data(),g=f[0].values[0].value;d.load({columns:[["data",g]]});break;case"Minimum Value":d.internal.config.gauge_min=c;var f=d.data(),g=f[0].values[0].value;d.load({columns:[["data",g]]});break;case"track color":d3.selectAll(e+" path.c3-chart-arcs-background").style("fill",c);break;case"pointer color":d3.selectAll(e).select("path.c3-arc-data").style("fill",c);break;case"track width":d.internal.config.gauge_width=c;var f=d.data(),g=f[0].values[0].value;d.load({columns:[["data",g]]})}}catch(a){throw new com.fc.JavaScriptDistLib.Gauge.GaugeException(a)}},
  getProperty: function (a,b){try{var c,d='[obj-name= "'+a+'"]';$(d);$(d).find(".c3").each(function(){c=$(this).data("c3-chart")});var e;switch(b){case"width":case"height":case"x":case"y":e=com.fc.JavaScriptDistLib.getProperty(a,b);break;case"Alpha":e=100*$(d).css("opacity");break;case"Background color":e=$(d).find("#fcGauge").css("background-color");break;case"Current Value":e=c.data()[0].values[0].value;break;case"Maximum Value":e=c.internal.config.gauge_max;break;case"Minimum Value":e=c.internal.config.gauge_min;break;case"track color":e=d3.selectAll(d+" path.c3-chart-arcs-background").style("fill");break;case"pointer color":e=d3.selectAll(d).select("path.c3-arc-data").style("fill");break;case"track width":e=c.internal.config.gauge_width}return e}catch(a){throw new com.fc.JavaScriptDistLib.Gauge.GaugeException(a)}},
  GaugeException: function (a,b){this.name="GaugeException",this.snappMessage=a,this.message=b||a,this.stack=(new Error).stack},
  }
,
MapContainer: {
  setProperty: function (a,b,c){},
  getProperty: function (a,b){},
  mapViewSetZoom: function (a){return map.setZoom(a)},
  createLocationFromText: function (a,b,c){console.log("createLocationFromText "+a);var d=a.split(",");if(2==d.length){console.log(d);var e=d[0],f=d[1],g={lat:e,lng:f};b(g)}else c("Invalid Location")},
  createMarkerWithImage: function (a,b,c){var d={};return d.image=a,d.label=b,d.clickCallBack=c,d.id=markers.length,d},
  setLocationForMarker: function (a,b){console.log(b),a.location=b},
  addMarkerToMap: function (a){var b=new google.maps.LatLng(a.location.lat,a.location.lng),c=new google.maps.Marker({position:b,title:a.label,icon:a.image,map:map});return markers.push(c),google.maps.event.addListener(c,"click",function(){var b=a.clickCallBack;b(a)}),c},
  setMarkerLabel: function (a,b){var c=markers[b.id];return c.setTitle(a)},
  setMarkerImage: function (a,b){var c=markers[b.id];return c.setIcon(a)},
  removeMarker: function (a){var b=markers[a.id];return markers.splice(a.id,1),b.setMap(null)},
  mapViewSetLocation: function (a,b){var c=new google.maps.LatLng(a.lat,a.lng),d=new google.maps.Marker({position:c,map:map});markers.push(d)},
  toggleMapUserInteraction: function (a){var b={draggable:!1,scrollwheel:!1,panControl:!1,zoom:map.getZoom()};if(a)var b={draggable:!0,scrollwheel:!0,panControl:!0,zoom:map.getZoom()};var c=map.setOptions(b);return c},
  MapException: function (a,b){this.name="MapException",this.snappMessage=a,this.message=b||a,this.stack=(new Error).stack},
  }
,
handleException: function (a,b){console.error("Exception: ",a,b)},
}



var lightstate;


// Block#: 58
function on_toggleLightsButton_click( ) {
  try {
      // Block#: 59
  com.fc.JavaScriptDistLib.Label.setProperty("moreinfoLabel", "Text", '....');// Block#: 61
  com.fc.JavaScriptDistLib.Label.setProperty("infoLabel", "Text", 'Sending    HTTP  Request');// Block#: 63
  sendHTTPRequest(createHTTPRequest('http://107.143.96.69:5005/demo.php?type=lights', 'GET'),
   function(data){
    // Block#: 66
    com.fc.JavaScriptDistLib.Label.setProperty("infoLabel", "Text", 'Success');// Block#: 68
    lightstate = (parseJSONDataForPath(data,'$.state')
    );
    // Block#: 72
    com.fc.JavaScriptDistLib.Label.setProperty("lightStatusLabel", "Text", lightstate);
  },
   function(error){
    // Block#: 74
    com.fc.JavaScriptDistLib.Label.setProperty("infoLabel", "Text", 'Error');// Block#: 76
    com.fc.JavaScriptDistLib.Label.setProperty("infoLabel", "Text", convertToText(error));
  });
  } catch (e) { com.fc.JavaScriptDistLib.handleException(e); }};
$('[obj-name="toggleLightsButton"]').on( 'click',  on_toggleLightsButton_click );
// Block#: 79
function on_refreshButton_click( ) {
  try {
      // Block#: 80
  com.fc.JavaScriptDistLib.Label.setProperty("moreinfoLabel", "Text", 'Getting fresh IMAGE');// Block#: 82
  com.fc.JavaScriptDistLib.Image.createImageFromUrl('http://107.143.96.69:5005/images/fishtank.png',
    function(image){
    // Block#: 84
    com.fc.JavaScriptDistLib.Image.setProperty("fishtankImage", "Image", image);// Block#: 86
    com.fc.JavaScriptDistLib.Label.setProperty("moreinfoLabel", "Text", 'Got it');
  });
  } catch (e) { com.fc.JavaScriptDistLib.handleException(e); }};
$('[obj-name="refreshButton"]').on( 'click',  on_refreshButton_click );

$('[obj-name="MainScreen"]').show();


// Generated by snapp 

});