var $jscomp={scope:{},findInternal:function(a,h,f){a instanceof String&&(a=String(a));for(var e=a.length,g=0;g<e;g++){var n=a[g];if(h.call(f,n,g,a))return{i:g,v:n}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,h,f){if(f.get||f.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[h]=f.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,h,f,e){if(h){f=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var g=a[e];g in f||(f[g]={});f=f[g]}a=a[a.length-1];e=f[a];h=h(e);h!=e&&null!=h&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:h})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,f){return $jscomp.findInternal(this,a,f).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","./grid.base"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var h=a.jgrid,f=h.jqID,e=a.fn.jqGrid,g=function(){var d=a.makeArray(arguments);d[0]="subGrid"+d[0].charAt(0).toUpperCase()+d[0].substring(1);d.unshift("");d.unshift("");d.unshift(this.p);return h.feedback.apply(this,d)},n=function(d,h){return this.each(function(){if(this.grid&&null!=d&&!0===this.p.subGrid){var c=a(this).jqGrid("getInd",d,!0);
a(c).find(">td."+h).trigger("click")}})};h.extend({setSubGrid:function(){return this.each(function(){var d=this.p,e=d.subGridModel[0];d.subGridOptions=a.extend({expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,selectOnCollapse:!1,reloadOnExpand:!0},d.subGridOptions||{});d.colNames.unshift("");d.colModel.unshift({name:"subgrid",width:h.cell_width?d.subGridWidth+d.cellLayout:d.subGridWidth,labelClasses:"jqgh_subgrid",sortable:!1,resizable:!1,hidedlg:!0,search:!1,fixed:!0,frozen:!0});if(e)for(e.align=
a.extend([],e.align||[]),d=0;d<e.name.length;d++)e.align[d]=e.align[d]||"left"})},addSubGridCell:function(d,f,c,b){var k=this[0],g=k.p.subGridOptions;c=a.isFunction(g.hasSubgrid)?g.hasSubgrid.call(k,{rowid:c,iRow:f,iCol:d,data:b}):!0;return null==k.p?"":"<td role='gridcell' class='"+e.getGuiStyles.call(this,"subgrid.tdStart",c?"ui-sgcollapsed sgcollapsed":"")+"' "+k.formatCol(d,f)+">"+(c?"<div class='"+e.getGuiStyles.call(this,"subgrid.buttonDiv","sgbutton-div")+"'><a role='button' class='"+e.getGuiStyles.call(this,
"subgrid.button","sgbutton")+"'><span class='"+h.mergeCssClasses(g.commonIconClass,g.plusicon)+"'></span></a></div>":"&nbsp;")+"</td>"},addSubGrid:function(d,n){return this.each(function(){var c=this,b=c.p,k=b.subGridModel[0],q=function(a,b){return e.getGuiStyles.call(c,"subgrid."+a,b||"")},B=q("thSubgrid","ui-th-subgrid ui-th-column ui-th-"+b.direction),A=q("rowSubTable","ui-subtblcell"),C=q("row","ui-subgrid ui-row-"+b.direction),D=q("tdWithIcon","subgrid-cell"),E=q("tdData","subgrid-data"),t=function(b,
d,c){c=k.align[c];d=a("<td"+(c?" style='text-align:"+c+";'":"")+"></td>").html(d);b.append(d)},x=function(c,d){var e=b.xmlReader.subgrid;a(e.root+" "+e.row,c).each(function(){var b,c,h=a("<tr class='"+A+"'></tr>");if(!0===e.repeatitems)a(e.cell,this).each(function(b){t(h,a(this).text()||"&#160;",b)});else if(b=k.mapping||k.name)for(c=0;c<b.length;c++)t(h,a(b[c],this).text()||"&#160;",c);d.append(h)})},y=function(c,d){var e,u,l,f,m,g=b.jsonReader.subgrid,r=h.getAccessor(c,g.root);if(null!=r)for(u=
0;u<r.length;u++){m=r[u];e=a("<tr class='"+A+"'></tr>");if(!0===g.repeatitems)for(g.cell&&(m=m[g.cell]),l=0;l<m.length;l++)t(e,m[l]||"&#160;",l);else if(f=k.mapping||k.name,f.length)for(l=0;l<f.length;l++)t(e,m[f[l]]||"&#160;",l);d.append(e)}},v=function(d,e,h){var m,l;m=q("legacyTable","ui-jqgrid-legacy-subgrid"+(!0===b.altRows&&a(c).jqGrid("isBootstrapGuiStyle")?" table-striped":""));var g=a("<table"+(m?" style='width:1px' role='presentation' class='"+m+"'":"")+"><thead></thead><tbody></tbody></table>"),
r=a("<tr></tr>");c.grid.endReq.call(c);for(l=0;l<k.name.length;l++)m=a("<th class='"+B+"'></th>").html(k.name[l]).width(k.width[l]),r.append(m);r.appendTo(g[0].tHead);h(d,a(g[0].tBodies[0]));a("#"+f(b.id+"_"+e)).append(g);return!1},F=function(d){var e=a(d).attr("id"),g={nd_:(new Date).getTime()},f,l;g[b.prmNames.subgridid]=e;if(!k)return!1;if(k.params)for(l=0;l<k.params.length;l++)f=b.iColByName[k.params[l]],void 0!==f&&(g[b.colModel[f].name]=a(d.cells[f]).text().replace(/\&#160\;/ig,""));if(!c.grid.hDiv.loading)switch(c.grid.beginReq.call(c),
b.subgridtype||(b.subgridtype=b.datatype),a.isFunction(b.subgridtype)?b.subgridtype.call(c,g):b.subgridtype=b.subgridtype.toLowerCase(),b.subgridtype){case "xml":case "json":a.ajax(a.extend({type:b.mtype,url:a.isFunction(b.subGridUrl)?b.subGridUrl.call(c,g):b.subGridUrl,dataType:b.subgridtype,context:e,data:h.serializeFeedback.call(c,b.serializeSubGridData,"jqGridSerializeSubGridData",g),success:function(a){v(a,this,"xml"===b.subgridtype?x:y)},error:function(d,e,g){var f=void 0===b.loadSubgridError?
b.loadError:b.loadSubgridError;c.grid.endReq.call(c);a.isFunction(f)&&f.call(c,d,e,g);b.subGridOptions.noEmptySubgridOnError||v(null,this,"xml"===b.subgridtype?x:y)}},h.ajaxOptions,b.ajaxSubgridOptions||{}))}return!1},G=function(){var f=a(this).parent("tr")[0],m=f.nextSibling,k=f.id,n=b.id+"_"+k,l=function(a){return h.mergeCssClasses(b.subGridOptions.commonIconClass,b.subGridOptions[a])},p=1;a.each(b.colModel,function(){!0!==this.hidden&&"rn"!==this.name&&"cb"!==this.name||p++});if(a(this).hasClass("sgcollapsed")){if(!0===
b.subGridOptions.reloadOnExpand||!1===b.subGridOptions.reloadOnExpand&&!a(m).hasClass("ui-subgrid")){m=1<=d?"<td colspan='"+d+"'>&#160;</td>":"";if(!g.call(c,"beforeExpand",n,k))return;a(f).after("<tr role='row' class='"+C+"'>"+m+"<td class='"+D+"'><span class='"+l("openicon")+"'></span></td><td colspan='"+parseInt(b.colNames.length-p,10)+"' class='"+E+"'><div id='"+n+"' class='tablediv'></div></td></tr>");a(c).triggerHandler("jqGridSubGridRowExpanded",[n,k]);a.isFunction(b.subGridRowExpanded)?b.subGridRowExpanded.call(c,
n,k):F(f)}else a(m).show();a(this).html("<div class='"+e.getGuiStyles.call(c,"subgrid.buttonDiv","sgbutton-div")+"'><a role='button' class='"+e.getGuiStyles.call(c,"subgrid.button","sgbutton")+"'><span class='"+l("minusicon")+"'></span></a></div>").removeClass("sgcollapsed").addClass("sgexpanded");b.subGridOptions.selectOnExpand&&a(c).jqGrid("setSelection",k)}else if(a(this).hasClass("sgexpanded")){if(!g.call(c,"beforeCollapse",n,k))return;!0===b.subGridOptions.reloadOnExpand?a(m).remove(".ui-subgrid"):
a(m).hasClass("ui-subgrid")&&a(m).hide();a(this).html("<div class='"+e.getGuiStyles.call(c,"subgrid.buttonDiv","sgbutton-div")+"'><a role='button' class='"+e.getGuiStyles.call(c,"subgrid.button","sgbutton")+"'><span class='"+l("plusicon")+"'></span></a></div>").removeClass("sgexpanded").addClass("sgcollapsed");b.subGridOptions.selectOnCollapse&&a(c).jqGrid("setSelection",k)}return!1},z,p,w=1;if(c.grid){z=c.rows.length;void 0!==n&&0<n&&(w=n,z=n+1);for(;w<z;)p=c.rows[w],a(p).hasClass("jqgrow")&&(p=
a(p.cells[d]),p.hasClass("ui-sgcollapsed")&&(b.scroll&&p.off("click"),p.on("click",G))),w++;!0===b.subGridOptions.expandOnLoad&&a(c.rows).filter(".jqgrow").each(function(b,d){a(d.cells[0]).click()});c.subGridXml=function(a,b){return v(a,b,x)};c.subGridJson=function(a,b){return v(a,b,y)}}})},expandSubGridRow:function(a){return n.call(this,a,"sgcollapsed")},collapseSubGridRow:function(a){return n.call(this,a,"sgexpanded")},toggleSubGridRow:function(a){return n.call(this,a,"ui-sgcollapsed")}})});
//# sourceMappingURL=grid.subgrid.map