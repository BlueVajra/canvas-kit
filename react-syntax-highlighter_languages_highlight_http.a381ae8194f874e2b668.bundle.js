(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{3187:function(module,exports){module.exports=function(hljs){var VERSION="HTTP/[0-9\\.]+";return{aliases:["https"],illegal:"\\S",contains:[{begin:"^"+VERSION,end:"$",contains:[{className:"number",begin:"\\b\\d{3}\\b"}]},{begin:"^[A-Z]+ (.*?) "+VERSION+"$",returnBegin:!0,end:"$",contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{begin:VERSION},{className:"keyword",begin:"[A-Z]+"}]},{className:"attribute",begin:"^\\w",end:": ",excludeEnd:!0,illegal:"\\n|\\s|=",starts:{end:"$",relevance:0}},{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_http.a381ae8194f874e2b668.bundle.js.map