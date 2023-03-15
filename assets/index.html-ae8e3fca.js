import{_,M as o,p as f,q as g,R as l,t as n,N as s,V as a,a1 as i}from"./framework-7db056f4.js";const y={},x=l("h1",{id:"关于算法题的一些基础笔记",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#关于算法题的一些基础笔记","aria-hidden":"true"},"#"),n(" 关于算法题的一些基础笔记")],-1),z=l("h2",{id:"时间复杂度",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#时间复杂度","aria-hidden":"true"},"#"),n(" 时间复杂度")],-1),k=l("p",null,[n("  在计算机科学中，算法的"),l("mark",null,"时间复杂度"),n("（Time complexity）是一个函数，它定性描述该算法的运行时间。这是一个代表算法输入值的字符串的长度的函数。时间复杂度常用大 O 符号表述，不包括这个函数的低阶项和首项系数。")],-1),b=l("p",null,"  使用这种方式时，时间复杂度可被称为是渐近的，亦即考察输入值大小趋近无穷时的情况",-1),O={class:"katex"},v={class:"katex-mathml"},q=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8141079999999999em;"></span><span class="strut bottom" style="height:0.897438em;vertical-align:-0.08333em;"></span><span class="base textstyle uncramped"><span class="mord mathrm">5</span><span class="mord"><span class="mord mathit">n</span><span class="vlist"><span style="top:-0.363em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">3</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mbin">+</span><span class="mord mathrm">3</span><span class="mord mathit">n</span></span></span>',1),w={class:"katex"},C={class:"katex-mathml"},T=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8141079999999999em;"></span><span class="strut bottom" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathit">n</span><span class="vlist"><span style="top:-0.363em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">3</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mclose">)</span></span></span>',1),N=l("div",{class:"custom-container tip"},[l("p",{class:"custom-container-title"},"TIP"),l("p",null,[n("为了计算时间复杂度，我们通常会估计算法的"),l("strong",null,"操作单元数量"),n("，每个单元执行的时间都是相同的。因此，总运行时间和算法的操作单元数量最多相差一个常量系数。")])],-1),B=l("h2",{id:"空间复杂度",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#空间复杂度","aria-hidden":"true"},"#"),n(" 空间复杂度")],-1),V=l("p",null,"  既然时间复杂度不是用来计算程序具体耗时的，那么我也应该明白，空间复杂度也不是用来计算程序实际占用的空间的。",-1),A=l("p",null,"  空间复杂度是对一个算法在运行过程中临时占用存储空间大小的一个量度，同样反映的是一个趋势，我们用 S(n) 来定义。",-1),P={class:"katex"},j={class:"katex-mathml"},D=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathrm">1</span><span class="mclose">)</span></span></span>',1),F={class:"katex"},L={class:"katex-mathml"},M=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathit">n</span><span class="mclose">)</span></span></span>',1),I={class:"katex"},S={class:"katex-mathml"},E=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8141079999999999em;"></span><span class="strut bottom" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathit">n</span><span class="vlist"><span style="top:-0.363em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">2</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mclose">)</span></span></span>',1),K=i('<h2 id="范围知识" tabindex="-1"><a class="header-anchor" href="#范围知识" aria-hidden="true">#</a> 范围知识</h2><ol><li>c++ 1s 内可做 1e7 次计算</li><li>int 范围 <ul><li>signed[int] -2147483648~+2147483648 （2e9）</li><li>unsigned[int] 0~4294967295 (4e9)</li><li>Long [int] -2147483648~+2147483648</li><li>Long Long int -9223372036854775808~9223372036854775807 (9e18)</li><li>Unsigned long long 18 446 744 073 709 551 615 (18e18)</li></ul></li><li>内存范围 <ul><li>64MB 的 内存大概可以开 <code>64 * 2 ^ 20 / 4 = 1.6 * 10^7 个 int</code></li></ul></li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>编译器的优化中，只开变量不使用，不会占用内存</p></div><h2 id="问题算法优先度" tabindex="-1"><a class="header-anchor" href="#问题算法优先度" aria-hidden="true">#</a> 问题算法优先度</h2><p>最大最小问题 ： 二分 &gt; dfs(暴力）&gt; dp &gt; 贪心</p><h2 id="yxc-的-分享" tabindex="-1"><a class="header-anchor" href="#yxc-的-分享" aria-hidden="true">#</a> yxc 的 分享</h2><p>一般 ACM 或者笔试题的时间限制是 1 秒或 2 秒。 在这种情况下，C++代码中的操作次数控制在 107∼108107∼108 为最佳。</p><p>下面给出在不同数据范围下，代码的时间复杂度和算法该如何选择：</p>',8),Q=l("li",null,[l("p",null,"n≤30, 指数级别, dfs+剪枝，状态压缩 dp")],-1),R={class:"katex"},U={class:"katex-mathml"},W=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8141079999999999em;"></span><span class="strut bottom" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathit">n</span><span class="vlist"><span style="top:-0.363em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">3</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mclose">)</span></span></span>',1),G={class:"katex"},H={class:"katex-mathml"},J=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8141079999999999em;"></span><span class="strut bottom" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathit">n</span><span class="vlist"><span style="top:-0.363em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">2</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mclose">)</span></span></span>',1),X={class:"katex"},Y={class:"katex-mathml"},Z=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8141079999999999em;"></span><span class="strut bottom" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathit">n</span><span class="vlist"><span style="top:-0.363em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">2</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mord mathit" style="margin-right:0.01968em;">l</span><span class="mord mathit">o</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mord mathit">n</span><span class="mclose">)</span></span></span>',1),$={class:"katex"},ss={class:"katex-mathml"},as=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8002800000000001em;"></span><span class="strut bottom" style="height:1.05028em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathit">n</span><span class="sqrt mord"><span class="sqrt-sign" style="top:0.03971999999999998em;"><span class="style-wrap reset-textstyle textstyle uncramped">√</span></span><span class="vlist"><span style="top:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:1em;">​</span></span><span class="mord textstyle cramped"><span class="mord mathit">n</span></span></span><span style="top:-0.72028em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:1em;">​</span></span><span class="reset-textstyle textstyle uncramped sqrt-line"></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:1em;">​</span></span>​</span></span></span><span class="mclose">)</span></span></span>',1),ns={class:"katex"},ls={class:"katex-mathml"},ts=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathit">n</span><span class="mord mathit" style="margin-right:0.01968em;">l</span><span class="mord mathit">o</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mord mathit">n</span><span class="mclose">)</span></span></span>',1),es={class:"katex"},ps={class:"katex-mathml"},is=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathit">n</span><span class="mclose">)</span></span></span>',1),us={class:"katex"},ms={class:"katex-mathml"},cs=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathit">n</span><span class="mord mathit" style="margin-right:0.01968em;">l</span><span class="mord mathit">o</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mord mathit">n</span><span class="mclose">)</span></span></span>',1),ds={class:"katex"},os={class:"katex-mathml"},rs=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathit">n</span><span class="mord mathit" style="margin-right:0.01968em;">l</span><span class="mord mathit">o</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mord mathit">n</span><span class="mclose">)</span></span></span>',1),hs={class:"katex"},_s={class:"katex-mathml"},fs=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathit">n</span><span class="mclose">)</span></span></span>',1),gs={class:"katex"},ys={class:"katex-mathml"},xs=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8002800000000001em;"></span><span class="strut bottom" style="height:1.05028em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="sqrt mord"><span class="sqrt-sign" style="top:0.03971999999999998em;"><span class="style-wrap reset-textstyle textstyle uncramped">√</span></span><span class="vlist"><span style="top:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:1em;">​</span></span><span class="mord textstyle cramped"><span class="mord mathit">n</span></span></span><span style="top:-0.72028em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:1em;">​</span></span><span class="reset-textstyle textstyle uncramped sqrt-line"></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:1em;">​</span></span>​</span></span></span><span class="mclose">)</span></span></span>',1),zs={class:"katex"},ks={class:"katex-mathml"},bs=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathit" style="margin-right:0.01968em;">l</span><span class="mord mathit">o</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mord mathit">n</span><span class="mclose">)</span></span></span>',1),Os={class:"katex"},vs={class:"katex-mathml"},qs=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8141079999999999em;"></span><span class="strut bottom" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mopen">(</span><span class="mord mathit" style="margin-right:0.01968em;">l</span><span class="mord mathit">o</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mord mathit">n</span><span class="mclose"><span class="mclose">)</span><span class="vlist"><span style="top:-0.363em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">2</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mclose">)</span></span></span>',1),ws={class:"katex"},Cs={class:"katex-mathml"},Ts=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathit" style="margin-right:0.01968em;">l</span><span class="mord mathit">o</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mord mathit" style="margin-right:0.03148em;">k</span><span class="mbin">∗</span><span class="mord mathit" style="margin-right:0.01968em;">l</span><span class="mord mathit">o</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mord mathit" style="margin-right:0.01968em;">l</span><span class="mord mathit">o</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mord mathit" style="margin-right:0.03148em;">k</span><span class="mclose">)</span></span></span>',1),Ns=l("blockquote",null,[l("p",null,[n("作者：yxc"),l("br"),n(" 链接：https://www.acwing.com/blog/content/32/"),l("br"),n(" 来源：AcWing"),l("br"),n(" 著题作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])],-1);function Bs(Vs,As){const d=o("mn"),t=o("mi"),r=o("msup"),e=o("mo"),p=o("mrow"),u=o("annotation"),m=o("semantics"),c=o("math"),h=o("msqrt");return f(),g("div",null,[x,z,k,b,l("p",null,[n("  例如，如果一个算法对于任何大小为 n （必须比 n0 大）的输入，它至多需要 "),l("span",O,[l("span",v,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(d,null,{default:a(()=>[n("5")]),_:1}),s(r,null,{default:a(()=>[s(t,null,{default:a(()=>[n("n")]),_:1}),s(d,null,{default:a(()=>[n("3")]),_:1})]),_:1}),s(e,null,{default:a(()=>[n("+")]),_:1}),s(d,null,{default:a(()=>[n("3")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("5n^3 + 3n")]),_:1})]),_:1})]),_:1})]),q]),n(" 的时间运行完毕，那么它的渐近时间复杂度是 "),l("span",w,[l("span",C,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(r,null,{default:a(()=>[s(t,null,{default:a(()=>[n("n")]),_:1}),s(d,null,{default:a(()=>[n("3")]),_:1})]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(n^3)")]),_:1})]),_:1})]),_:1})]),T]),n("。")]),N,B,V,A,l("p",null,[n("  空间复杂度比较常用的有："),l("span",P,[l("span",j,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(d,null,{default:a(()=>[n("1")]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(1)")]),_:1})]),_:1})]),_:1})]),D]),n("、"),l("span",F,[l("span",L,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(n)")]),_:1})]),_:1})]),_:1})]),M]),n("、"),l("span",I,[l("span",S,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(r,null,{default:a(()=>[s(t,null,{default:a(()=>[n("n")]),_:1}),s(d,null,{default:a(()=>[n("2")]),_:1})]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(n^2)")]),_:1})]),_:1})]),_:1})]),E])]),K,l("ol",null,[Q,l("li",null,[l("p",null,[n("n≤100 => "),l("span",R,[l("span",U,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(r,null,{default:a(()=>[s(t,null,{default:a(()=>[n("n")]),_:1}),s(d,null,{default:a(()=>[n("3")]),_:1})]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(n^3)")]),_:1})]),_:1})]),_:1})]),W]),n("，floyd，dp，高斯消元")])]),l("li",null,[l("p",null,[n("n≤1000 => "),l("span",G,[l("span",H,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(r,null,{default:a(()=>[s(t,null,{default:a(()=>[n("n")]),_:1}),s(d,null,{default:a(()=>[n("2")]),_:1})]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(n^2)")]),_:1})]),_:1})]),_:1})]),J]),n("，"),l("span",X,[l("span",Y,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(r,null,{default:a(()=>[s(t,null,{default:a(()=>[n("n")]),_:1}),s(d,null,{default:a(()=>[n("2")]),_:1})]),_:1}),s(t,null,{default:a(()=>[n("l")]),_:1}),s(t,null,{default:a(()=>[n("o")]),_:1}),s(t,null,{default:a(()=>[n("g")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(n^2logn)")]),_:1})]),_:1})]),_:1})]),Z]),n("，dp，二分，朴素版 Dijkstra、朴素版 Prim、Bellman-Ford")])]),l("li",null,[l("p",null,[n("n≤10000 => "),l("span",$,[l("span",ss,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(h,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("n")]),_:1})]),_:1})]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(n \\sqrt{n})")]),_:1})]),_:1})]),_:1})]),as]),n("，块状链表 2 分块、莫队")])]),l("li",null,[l("p",null,[n("n≤100000 => "),l("span",ns,[l("span",ls,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(t,null,{default:a(()=>[n("l")]),_:1}),s(t,null,{default:a(()=>[n("o")]),_:1}),s(t,null,{default:a(()=>[n("g")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(nlogn)")]),_:1})]),_:1})]),_:1})]),ts]),n(" => 各种 sort，线段树、树状数组、set/map、heap、拓扑排序、dijkstra+heap、prim+heap、Kruskal、spfa、求凸包、求半平面交、二分、CDQ 分治、整体二分、后缀数组、树链剖分、动态树")])]),l("li",null,[l("p",null,[n("n≤1000000n≤1000000 => "),l("span",es,[l("span",ps,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(n)")]),_:1})]),_:1})]),_:1})]),is]),n(", 以及常数较小的 "),l("span",us,[l("span",ms,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(t,null,{default:a(()=>[n("l")]),_:1}),s(t,null,{default:a(()=>[n("o")]),_:1}),s(t,null,{default:a(()=>[n("g")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(nlogn)")]),_:1})]),_:1})]),_:1})]),cs]),n(" 算法 => 单调队列、 hash、双指针扫描、并查集，kmp、AC 自动机，常数比较小的 "),l("span",ds,[l("span",os,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(t,null,{default:a(()=>[n("l")]),_:1}),s(t,null,{default:a(()=>[n("o")]),_:1}),s(t,null,{default:a(()=>[n("g")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(nlogn)")]),_:1})]),_:1})]),_:1})]),rs]),n(" 的做法：sort、树状数组、heap、dijkstra、spfa")])]),l("li",null,[l("p",null,[n("n≤10000000 => "),l("span",hs,[l("span",_s,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(n)")]),_:1})]),_:1})]),_:1})]),fs]),n("，双指针扫描、kmp、AC 自动机、线性筛素数")])]),l("li",null,[l("p",null,[n("n≤10^9 => "),l("span",gs,[l("span",ys,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(h,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("n")]),_:1})]),_:1})]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(\\sqrt{n})")]),_:1})]),_:1})]),_:1})]),xs]),n("，判断质数")])]),l("li",null,[l("p",null,[n("n≤10^18 => "),l("span",zs,[l("span",ks,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(t,null,{default:a(()=>[n("l")]),_:1}),s(t,null,{default:a(()=>[n("o")]),_:1}),s(t,null,{default:a(()=>[n("g")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(logn)")]),_:1})]),_:1})]),_:1})]),bs]),n("，最大公约数，快速幂，数位 DP")])]),l("li",null,[l("p",null,[n("n≤10^1000 => "),l("span",Os,[l("span",vs,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(t,null,{default:a(()=>[n("l")]),_:1}),s(t,null,{default:a(()=>[n("o")]),_:1}),s(t,null,{default:a(()=>[n("g")]),_:1}),s(t,null,{default:a(()=>[n("n")]),_:1}),s(r,null,{default:a(()=>[s(e,null,{default:a(()=>[n(")")]),_:1}),s(d,null,{default:a(()=>[n("2")]),_:1})]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O((logn)^2)")]),_:1})]),_:1})]),_:1})]),qs]),n("，高精度加减乘除")])]),l("li",null,[l("p",null,[n("n≤10^100000 => "),l("span",ws,[l("span",Cs,[s(c,null,{default:a(()=>[s(m,null,{default:a(()=>[s(p,null,{default:a(()=>[s(t,null,{default:a(()=>[n("O")]),_:1}),s(e,null,{default:a(()=>[n("(")]),_:1}),s(t,null,{default:a(()=>[n("l")]),_:1}),s(t,null,{default:a(()=>[n("o")]),_:1}),s(t,null,{default:a(()=>[n("g")]),_:1}),s(t,null,{default:a(()=>[n("k")]),_:1}),s(e,null,{default:a(()=>[n("∗")]),_:1}),s(t,null,{default:a(()=>[n("l")]),_:1}),s(t,null,{default:a(()=>[n("o")]),_:1}),s(t,null,{default:a(()=>[n("g")]),_:1}),s(t,null,{default:a(()=>[n("l")]),_:1}),s(t,null,{default:a(()=>[n("o")]),_:1}),s(t,null,{default:a(()=>[n("g")]),_:1}),s(t,null,{default:a(()=>[n("k")]),_:1}),s(e,null,{default:a(()=>[n(")")]),_:1})]),_:1}),s(u,{encoding:"application/x-tex"},{default:a(()=>[n("O(logk * loglogk)")]),_:1})]),_:1})]),_:1})]),Ts]),n("，k 表示位数，k 表示位数，高精度加减、FFT/NTT")])])]),Ns])}const js=_(y,[["render",Bs],["__file","index.html.vue"]]);export{js as default};
