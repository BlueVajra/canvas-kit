(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{3252:function(module,exports){module.exports=function(hljs){var IDENTIFIER="[a-zA-Z-_][^\\n{]+\\{",PROPERTY={className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{className:"keyword",begin:/\(optional\)/}]}};return{aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{begin:"^facet "+IDENTIFIER,end:"}",keywords:"facet",contains:[PROPERTY,hljs.HASH_COMMENT_MODE]},{begin:"^\\s*instance of "+IDENTIFIER,end:"}",keywords:"name count channels instance-data instance-state instance of",illegal:/\S/,contains:["self",PROPERTY,hljs.HASH_COMMENT_MODE]},{begin:"^"+IDENTIFIER,end:"}",contains:[PROPERTY,hljs.HASH_COMMENT_MODE]},hljs.HASH_COMMENT_MODE]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_roboconf.a381ae8194f874e2b668.bundle.js.map