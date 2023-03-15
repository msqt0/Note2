import{_ as n,p as s,q as a,a1 as e}from"./framework-7db056f4.js";const t={},p=e(`<h1 id="http-handler" tabindex="-1"><a class="header-anchor" href="#http-handler" aria-hidden="true">#</a> http/Handler</h1><h2 id="简单创建-web-应用的两种方法" tabindex="-1"><a class="header-anchor" href="#简单创建-web-应用的两种方法" aria-hidden="true">#</a> 简单创建 web 应用的两种方法</h2><p>函数：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;net/http&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// handleFunc...</span>

	http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// 使用 DefaultServeMux</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法:</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>其实函数 <code>ListenAndServe</code> 就是把 <code>server.ListenAndServe</code> 封装了一下</p></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;net/http&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	server <span class="token operator">:=</span> http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>    <span class="token string">&quot;localhost:8080&quot;</span><span class="token punctuation">,</span>
		Handler<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token comment">// 使用 DefaultServeMux</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// handleFunc...</span>
	server<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-https-对应两种方法" tabindex="-1"><a class="header-anchor" href="#使用-https-对应两种方法" aria-hidden="true">#</a> 使用 Https 对应两种方法</h2><p>同上</p><p>函数:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;net/http&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// handleFunc...</span>

	http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// 使用 DefaultServeMux</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;net/http&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	server <span class="token operator">:=</span> http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>    <span class="token string">&quot;localhost:8080&quot;</span><span class="token punctuation">,</span>
		Handler<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token comment">// 使用 DefaultServeMux</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// handleFunc...</span>
	server<span class="token punctuation">.</span><span class="token function">ListenAndServeTLS</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> keyFile <span class="token builtin">string</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>详细的部分在 https 节</p></blockquote><h2 id="handler-总结" tabindex="-1"><a class="header-anchor" href="#handler-总结" aria-hidden="true">#</a> Handler 总结</h2><ul><li><p>Handler 是一个接口(<code>interface</code>)</p></li><li><p>定义了一个<code>ServeHTTP()</code>方法, 参数:</p><ul><li>HTTPResponseWriter</li><li>指向 Request struct 的指针, 包含请求的信息</li></ul></li></ul><blockquote><p>如果赋值为 nil , 会默认使用<code>DefaultServeMux</code> handler, 是个多路复用器，会帮我们把请求 url 与加入 muxEntry 的 handler 匹配上</p></blockquote><p>因此只要实现了<code>ServerHTTP()</code>方法，就是一个 handler, 我们可以自定义自己的 handler</p><h3 id="多个-handler" tabindex="-1"><a class="header-anchor" href="#多个-handler" aria-hidden="true">#</a> 多个 Handler</h3><p>一般上, 我们的 web 应用有很多不同的 handler ，http 包提供的<code>DefaultServeMux</code>会为我们提供路由到其他 handler 的功能</p><ol><li><p><code>http.Handle(patten string, handler Handler)</code>, 将某个 Handler 附加到 <code>DefaultServeMux</code></p><ul><li><code>http.Handle() </code>函数其实就是调用 <code>DefaultServeMux</code>(*serverMUx) 上的 Handle 方法</li></ul></li><li><p><code>http.HandleFunc(patten string, Func)</code> 行为与<code>Handle</code>类似, 封装了一下，会帮我们把函数转为 <code>handler</code></p><ul><li>参数 Func 与 Handler 的方法<code>ServerHTTP(http.ResponseWriter, *http.Request)</code>定义方式一样</li></ul></li></ol><p>同样 <code>http.HandleFunc</code> 调用 <code>DefaultServeMux</code> 的 <code>HandlerFunc()</code> 方法, 里面直接执行了 <code>Handle()</code></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在执行<code>Handle()</code> 前，进行了强制类型转换 ，把 <code>func(Resp, \\*req) </code>转换为 <code>http.HandlerFunc</code>类型 它实现了<code>Handler</code> 接口,而它的<code>ServerHTTP() </code>方法其实就是调用了自身函数，后面的行为都与之前的一模一样了</p></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">HandleFunc</span><span class="token punctuation">(</span>pattern <span class="token builtin">string</span><span class="token punctuation">,</span> handler <span class="token keyword">func</span><span class="token punctuation">(</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>Request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	DefaultServeMux<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>mux <span class="token operator">*</span>ServeMux<span class="token punctuation">)</span> <span class="token function">HandleFunc</span><span class="token punctuation">(</span>pattern <span class="token builtin">string</span><span class="token punctuation">,</span> handler <span class="token keyword">func</span><span class="token punctuation">(</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>Request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> handler <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;http: nil handler&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	mux<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> <span class="token function">HandlerFunc</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">type</span> HandlerFunc <span class="token keyword">func</span><span class="token punctuation">(</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>Request<span class="token punctuation">)</span>

<span class="token comment">// ServeHTTP calls f(w, r).</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>f HandlerFunc<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">f</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置-handlers" tabindex="-1"><a class="header-anchor" href="#内置-handlers" aria-hidden="true">#</a> 内置 Handlers</h2><p>go 语言还提供了内置的 Handler</p><ul><li>NotFoundHandler <ul><li><code>func NotFoundHandler() Handler</code>, 返回一个 Handler, 它给每个请求都是&quot;404 page not found&quot;</li></ul></li><li>RedirectHandler <ul><li><code>func RedirectHandler(url string, code int) Handler</code> 返回一个 Handler, 把每个请求使用指定的状态码跳转到指定的 url</li><li>code 常见的有 <code>StatusMovePermanently</code>, <code>StatusFound</code>, <code>StatusSeeOther</code> 等</li></ul></li><li>StripPrefix <ul><li><code>func StripPrefix(prefix string, h handler) Handler</code> 返回一个 Handler, 它从请求 url 中去除指定请求，再调用另一个 Handler, 前缀不匹配就返回 404</li></ul></li><li>TimeoutHandler <ul><li><code>func TimeoutHandler(h Handler, dt time.Duration, msg string)</code> 返回一个 Handler, 它用来指定时间内运行传入的 handler, 如果超时，会把消息返回</li></ul></li><li>FileServer <ul><li><code>func FileServer(root FileSystem) Handler</code> 返回一个 Handler, 使用基于 root 的文件系统来响应请求</li><li>实际使用时，我们一般委托给操作系统的文件系统</li></ul></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> FileSystem <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Open</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>File<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用 os.Dir 这样一来，我们只要传入路径名称就可以了</span>
<span class="token keyword">type</span> Dir <span class="token builtin">string</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d Dir<span class="token punctuation">)</span> <span class="token function">Open</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">(</span>File<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),l=[p];function c(o,i){return s(),a("div",null,l)}const d=n(t,[["render",c],["__file","02-handler.html.vue"]]);export{d as default};
