import{_ as n,p as s,q as a,a1 as t}from"./framework-7db056f4.js";const e={},p=t(`<h1 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h1><h2 id="文件类型" tabindex="-1"><a class="header-anchor" href="#文件类型" aria-hidden="true">#</a> 文件类型</h2><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> properties</h3><p>同以前的 properties 用法</p><h3 id="yaml" tabindex="-1"><a class="header-anchor" href="#yaml" aria-hidden="true">#</a> yaml</h3><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h4><p>YAML 是 &quot;YAML Ain&#39;t Markup Language&quot;（YAML 不是一种标记语言）的递归缩写。在开发的这种语言时，YAML 的意思其实是：&quot;Yet Another Markup Language&quot;（仍是一种标记语言）。</p><p>非常适合用来做<code>以数据为中心</code>的配置文件</p><h4 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h4><ul><li><p>key: value；kv 之间有空格</p></li><li><p>大小写敏感</p></li><li><p>使用缩进表示层级关系</p></li><li><p>缩进不允许使用 tab，只允许空格</p></li><li><p>缩进的空格数不重要，只要相同层级的元素左对齐即可</p></li><li><p><code>#</code>表示注释</p></li><li><p>字符串无需加引号，如果要加，<code>&#39;&#39;</code>与<code>&quot;&quot;</code>表示字符串内容：</p><ul><li><code>&#39;&#39;</code><mark>会被转义</mark></li><li><code>&quot;&quot;</code><mark>不会被转义</mark></li></ul></li></ul><h4 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h4><ul><li>字面量：单个的，不可再分的值(date, boolean, string, number, null)</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">key</span><span class="token punctuation">:</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>对象：键值对的集合。map、hash、set、object</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 行内写法：</span>
<span class="token key atrule">k</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>k1<span class="token punctuation">:</span>v1<span class="token punctuation">,</span>k2<span class="token punctuation">:</span>v2<span class="token punctuation">,</span>k3<span class="token punctuation">:</span>v3<span class="token punctuation">}</span>
<span class="token comment">#或</span>
<span class="token key atrule">k</span><span class="token punctuation">:</span>
  <span class="token key atrule">k1</span><span class="token punctuation">:</span> v1
  <span class="token key atrule">k2</span><span class="token punctuation">:</span> v2
  <span class="token key atrule">k3</span><span class="token punctuation">:</span> v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数组：一组按次序排列的值。array、list、queue</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#行内写法：</span>
<span class="token key atrule">k</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>v1<span class="token punctuation">,</span>v2<span class="token punctuation">,</span>v3<span class="token punctuation">]</span>
<span class="token comment">#或者</span>
<span class="token key atrule">k</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> v1
 <span class="token punctuation">-</span> v2
 <span class="token punctuation">-</span> v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Boolean</span> boss<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Pet</span> pet<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> interests<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> animal<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> score<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> salarys<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Pet</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> allPets<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Double</span> weight<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># yaml 表示以上对象</span>
<span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">userName</span><span class="token punctuation">:</span> zhangsan
  <span class="token key atrule">boss</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">birth</span><span class="token punctuation">:</span> 2019/12/12 20<span class="token punctuation">:</span><span class="token datetime number">12:33</span>
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span>
  <span class="token key atrule">pet</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
    <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">23.4</span>
  <span class="token key atrule">interests</span><span class="token punctuation">:</span> 【篮球，游泳】
  <span class="token key atrule">animal</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> jerry
    <span class="token punctuation">-</span> mario
  <span class="token key atrule">score</span><span class="token punctuation">:</span>
    <span class="token key atrule">english</span><span class="token punctuation">:</span>
      <span class="token key atrule">first</span><span class="token punctuation">:</span> <span class="token number">30</span>
      <span class="token key atrule">second</span><span class="token punctuation">:</span> <span class="token number">40</span>
      <span class="token key atrule">third</span><span class="token punctuation">:</span> <span class="token number">50</span>
    <span class="token key atrule">math</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">131</span><span class="token punctuation">,</span><span class="token number">140</span><span class="token punctuation">,</span><span class="token number">148</span><span class="token punctuation">]</span>
    <span class="token key atrule">chinese</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">first</span><span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span><span class="token key atrule">second</span><span class="token punctuation">:</span> <span class="token number">136</span><span class="token punctuation">}</span>
  <span class="token key atrule">salarys</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">3999</span><span class="token punctuation">,</span><span class="token number">4999.98</span><span class="token punctuation">,</span><span class="token number">5999.99</span><span class="token punctuation">]</span>
  <span class="token key atrule">allPets</span><span class="token punctuation">:</span>
    <span class="token key atrule">sick</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> tom<span class="token punctuation">}</span>
      <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> jerry<span class="token punctuation">,</span><span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">47</span><span class="token punctuation">}</span>
    <span class="token key atrule">health</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> mario<span class="token punctuation">,</span><span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">47</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置提示" tabindex="-1"><a class="header-anchor" href="#配置提示" aria-hidden="true">#</a> 配置提示</h2><p>自定义的类和配置文件绑定一般没有提示。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-configuration-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>


 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-configuration-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>excludes</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),l=[p];function c(o,i){return s(),a("div",null,l)}const k=n(e,[["render",c],["__file","01-配置文件.html.vue"]]);export{k as default};
