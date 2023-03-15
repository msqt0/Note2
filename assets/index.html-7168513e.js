import{_ as i,M as a,p as o,q as t,R as e,t as r,N as n,a1 as c}from"./framework-7db056f4.js";const u={},s=c('<h1 id="lua-简介" tabindex="-1"><a class="header-anchor" href="#lua-简介" aria-hidden="true">#</a> Lua 简介</h1><p>Lua 是一种轻量小巧的脚本语言，用标准 C 语言编写并以源代码形式开放， 其设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。</p><p>Lua 是巴西里约热内卢天主教大学（Pontifical Catholic University of Rio de Janeiro）里的一个研究小组，由 Roberto Ierusalimschy、Waldemar Celes 和 Luiz Henrique de Figueiredo 所组成并于 1993 年开发。</p><ul><li><p>轻量级:它用标准 C 语言编写并以源代码形式开放，编译后仅仅一百余 K，可以很方便的嵌入别的程序里。</p></li><li><p>可扩展: Lua 提供了非常易于使用的扩展接口和机制：由宿主语言(通常是 C 或 C++)提供这些功能，Lua 可以使用它们，就像是本来就内置的功能一样。</p></li><li><p>其它特性:</p><ul><li>支持面向过程(procedure-oriented)编程和函数式编程(functional programming)；</li><li>自动内存管理；只提供了一种通用类型的表（table），用它可以实现数组，哈希表，集合，对象；</li><li>语言内置模式匹配；闭包(closure)；函数也可以看做一个值；提供多线程（协同进程，并非操作系统所支持的线程）支持；</li><li>通过闭包和 table 可以很方便地支持面向对象编程所需要的一些关键机制，比如数据抽象，虚函数，继承和重载等。</li></ul></li></ul><p>应用场景:</p><ul><li>游戏开发</li><li>独立应用脚本</li><li>web 应用脚本</li><li>扩展和数据库插件</li><li>安全系统：如入侵检测系统(IDS)</li></ul><blockquote><p>好吧我学 lua 只是为了配置 nvim 😛</p></blockquote>',7),p={href:"http://www.lua.org/",target:"_blank",rel:"noopener noreferrer"};function d(_,h){const l=a("ExternalLinkIcon");return o(),t("div",null,[s,e("p",null,[e("a",p,[r("lua 官网"),n(l)])])])}const m=i(u,[["render",d],["__file","index.html.vue"]]);export{m as default};
