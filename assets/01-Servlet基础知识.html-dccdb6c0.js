import{_ as a,p as s,q as n,a1 as t}from"./framework-7db056f4.js";const e={},l=t(`<h1 id="servlet" tabindex="-1"><a class="header-anchor" href="#servlet" aria-hidden="true">#</a> Servlet</h1><h2 id="servlet类的映射" tabindex="-1"><a class="header-anchor" href="#servlet类的映射" aria-hidden="true">#</a> Servlet类的映射</h2><p>映射一个类的方法有两个</p><ol><li>写注解, 让tomcat知道应该调用那个类</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/webxxx&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>编辑web.xml, 把映射信息写入</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlns.jcp.org/xml/ns/javaee<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>com.servlet.HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="servlet-的生命周期" tabindex="-1"><a class="header-anchor" href="#servlet-的生命周期" aria-hidden="true">#</a> Servlet 的生命周期</h2><ol><li><code>init()</code> 创建servlet 实例对象时执行, 只会执行一次</li><li><code>service()</code> 当有请求访问servlet 时执行, 可执行多次</li><li><code>destroy()</code> servlet 实例对象删除后执行, 执行一次</li></ol><h2 id="servlet-生命周期" tabindex="-1"><a class="header-anchor" href="#servlet-生命周期" aria-hidden="true">#</a> Servlet 生命周期</h2><ol><li>Web Client 向 Servlet 容器(tomcat) 发出 Http 请求</li><li>Servlet 接受 Web Client 的请求</li><li>Servlet 容器创建一个 HttpServletRequest 对象 , 将 Web Client 请求的信息封装到这个对象中</li><li>Servlet 容器创建一个HttpServletResponse 对象</li><li>Servlet 容器调用HttpServlet对象 service方法， 把 Request 和 Response 作为参数，传给HttpServlet</li><li>HttpServlet 调用 HttpServletRequest 对象的有关方法， 获取Http请求信息</li><li>HttpServlet 调用 HttpServletResponse 对象的有关方法，生成响应数据</li><li>Servlet 容器 把HttpServlet 的响应结果传给Web Client</li></ol>`,11),p=[l];function o(c,i){return s(),n("div",null,p)}const r=a(e,[["render",o],["__file","01-Servlet基础知识.html.vue"]]);export{r as default};
