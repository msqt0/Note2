import{_ as n,p as a,q as s,a1 as e}from"./framework-7db056f4.js";const o={},i=e(`<h1 id="go-modules" tabindex="-1"><a class="header-anchor" href="#go-modules" aria-hidden="true">#</a> Go Modules</h1><h2 id="什么是-go-modules" tabindex="-1"><a class="header-anchor" href="#什么是-go-modules" aria-hidden="true">#</a> 什么是 Go Modules?</h2><p>Go modules 是 Go 语言的依赖解决方案，发布于 Go1.11，成长于 Go1.12，丰富于 Go1.13，正式于 Go1.14 推荐在生产上使用。</p><p>Go moudles 目前集成在 Go 的工具链中，只要安装了 Go，自然而然也就可以使用 Go moudles 了，而 Go modules 的出现也解决了在 Go1.11 前的几个常见争议问题：</p><ol><li>Go 语言长久以来的依赖管理问题。</li><li>“淘汰”现有的 GOPATH 的使用模式。</li><li>统一社区中的其它的依赖管理工具（提供迁移功能）。</li></ol><h2 id="gopath-的工作模式" tabindex="-1"><a class="header-anchor" href="#gopath-的工作模式" aria-hidden="true">#</a> GOPATH 的工作模式</h2><p>Go Modules 的目的之一就是淘汰 GOPATH,那么 GOPATH 是个什么?</p><p>为什么在 Go1.11 前就使用 GOPATH，而 Go1.11 后就开始逐步建议使用 Go modules，不再推荐 GOPATH 的模式了呢？</p><h3 id="what-is-gopath" tabindex="-1"><a class="header-anchor" href="#what-is-gopath" aria-hidden="true">#</a> what is GOPATH?</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">env</span>

// <span class="token punctuation">..</span>.
<span class="token assign-left variable">GOPATH</span><span class="token operator">=</span><span class="token string">&quot;/path/to/go&quot;</span>
// <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们输入 go env 命令行后可以查看到 GOPATH 变量的结果，我们进入到该目录下进行查看，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go
├── bin
├── pkg
└── src
    ├── github.com
    ├── golang.org
    ├── google.golang.org
    ├── gopkg.in
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GOPATH 目录下一共包含了三个子目录，分别是：</p><ul><li>bin：存储所编译生成的二进制文件。</li><li>pkg：存储预编译的目标文件，以加快程序的后续编译速度。</li><li>src：存储所有.go 文件或源代码。在编写 Go 应用程序，程序包和库时，一般会以$GOPATH/src/github.com/foo/bar 的路径进行存放</li></ul><p>因此在使用 GOPATH 模式下，我们需要将应用代码存放在固定的<code>$GOPATH/src</code>目录下，并且如果执行<code>go get</code> 来拉取外部依赖会自动下载并安装到<code>$GOPATH</code> 目录下</p><h3 id="gopath-模式的弊端" tabindex="-1"><a class="header-anchor" href="#gopath-模式的弊端" aria-hidden="true">#</a> GOPATH 模式的弊端</h3><p>在 GOPATH 的 <code>$GOPATH/src</code> 下进行 <code>.go</code> 文件或源代码的存储，我们可以称其为 GOPATH 的模式，这个模式拥有一些弊端</p><ol><li><p><b>无版本控制概概念</b>在执行 go get 的时候，你无法传达任何的版本信息的期望，也就是说你也无法知道自己当前更新的是哪一个版本，也无法通过指定来拉取自己所期望的具体版本。</p></li><li><p><b>无法同步一致三方版本号</b>在运行 Go 应用程序的时候，你无法保证其它人与你所期望依赖的第三方库是相同的版本，也就是说在项目依赖库的管理上，你无法保证所有人的依赖版本都一致。</p></li><li><p>无法指定当前项目引用的第三方版本号. 你没办法处理 v1、v2、v3 等等不同版本的引用问题，因为 GOPATH 模式下的导入路径都是一样的，都是 github.com/foo/bar</p></li></ol><h2 id="go-moudles-模式" tabindex="-1"><a class="header-anchor" href="#go-moudles-模式" aria-hidden="true">#</a> GO Moudles 模式</h2><p>我们接下来用 Go Modules 的方式创建一个项目, 建议为了与 GOPATH 分开,不要将项目创建在 GOPATH/src 下</p><h3 id="go-mod-命令" tabindex="-1"><a class="header-anchor" href="#go-mod-命令" aria-hidden="true">#</a> go mod 命令</h3><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td>go mod init</td><td>生成 go.mod 文件</td></tr><tr><td>go mod download</td><td>下载 go.mod 文件中指明的所有依赖</td></tr><tr><td>go mod tidy</td><td>整理现有依赖</td></tr><tr><td>go mod graph</td><td>查看现有的依赖结构</td></tr><tr><td>go mod edit</td><td>编辑 go.mod 文件</td></tr><tr><td>go mod vendor</td><td>校验一个模块是否被篡改过</td></tr><tr><td>go mod why</td><td>查看为什么需要依赖某模块</td></tr></tbody></table><h3 id="go-mod-环境变量" tabindex="-1"><a class="header-anchor" href="#go-mod-环境变量" aria-hidden="true">#</a> go mod 环境变量</h3><p>通过<code>go env</code> 命令查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span>
<span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span><span class="token string">&quot;auto&quot;</span>
<span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span><span class="token string">&quot;https://proxy.golang.org,direct&quot;</span>
<span class="token assign-left variable">GONOPROXY</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token assign-left variable">GOSUMDB</span><span class="token operator">=</span><span class="token string">&quot;sum.golang.org&quot;</span>
<span class="token assign-left variable">GONOSUMDB</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token assign-left variable">GOPRIVATE</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go111module" tabindex="-1"><a class="header-anchor" href="#go111module" aria-hidden="true">#</a> GO111MODULE</h4><p>Go 语言提供了 GO111MODULE 这个环境变量来作为 Go modules 的开关，其允许设置以下参数：</p><ul><li>auto: 只要项目包含了 go.mod 文件的话启用 Go modules, 在 Go1.11 至 Go1.14 仍然是默认值</li><li>on: 启用 Go modules，推荐设置，将会是未来版本的默认值</li><li>off: 禁用 Go modules，不推荐设置</li></ul><p>可以设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ go env -w GO111MODULE=on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="goproxy" tabindex="-1"><a class="header-anchor" href="#goproxy" aria-hidden="true">#</a> GOPROXY</h4><p>这个环境变量主要是用于设置 Go 模块代理（Go module proxy）,其作用是用于使 Go 在后续拉取模块版本时直接通过镜像站点来快速拉取。</p><p>GOPROXY 的默认值是：https://proxy.golang.org,direct</p><p>proxy.golang.org 国内访问不了,需要设置国内的代理.</p><ul><li>阿里云 https://mirrors.aliyun.com/goproxy/</li><li>七牛云 https://goproxy.cn,direct</li></ul><p>如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GOPROXY 的值是一个以英文逗号 “,” 分割的 Go 模块代理列表，允许设置多个模块代理，假设你不想使用，也可以将其设置为 “off” ，这将会禁止 Go 在后续操作中使用任何 Go 模块代理。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,https://mirrors.aliyun.com/goproxy/,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际上 “direct” 是一个特殊指示符，用于指示 Go 回源到模块版本的源地址去抓取（比如 GitHub 等），场景如下：当值列表中上一个 Go 模块代理返回 404 或 410 错误时，Go 自动尝试列表中的下一个，遇见 “direct” 时回源，也就是回到源地址去抓取，而遇见 EOF 时终止并抛出类似 “invalid version: unknown revision...” 的错误。</p><h4 id="gosumdb" tabindex="-1"><a class="header-anchor" href="#gosumdb" aria-hidden="true">#</a> GOSUMDB</h4><p>它的值是一个 Go checksum database，用于在拉取模块版本时（无论是从源站拉取还是通过 Go module proxy 拉取）保证拉取到的模块版本数据未经过篡改，若发现不一致，也就是可能存在篡改，将会立即中止。</p><p>GOSUMDB 的默认值为：sum.golang.org，在国内也是无法访问的，但是 GOSUMDB 可以被 Go 模块代理所代理（详见：Proxying a Checksum Database）。</p><p>因此我们可以通过设置 GOPROXY 来解决，而先前我们所设置的模块代理 goproxy.cn 就能支持代理 sum.golang.org，所以这一个问题在设置 GOPROXY 后，你可以不需要过度关心。</p><p>另外若对 GOSUMDB 的值有自定义需求，其支持如下格式：</p><ul><li>格式 1：<code>&lt;SUMDB_NAME&gt;+&lt;PUBLIC_KEY&gt;</code></li><li>格式 2：<code>&lt;SUMDB_NAME&gt;+&lt;PUBLIC_KEY&gt; &lt;SUMDB_URL&gt;</code></li></ul><p>也可以将其设置为“off”，也就是禁止 Go 在后续操作中校验模块版本。</p><h4 id="gonoproxy-gonosumdb-goprivate" tabindex="-1"><a class="header-anchor" href="#gonoproxy-gonosumdb-goprivate" aria-hidden="true">#</a> GONOPROXY/GONOSUMDB/GOPRIVATE</h4><p>这三个环境变量都是用在当前项目依赖了私有模块，例如像是你公司的私有 git 仓库，又或是 github 中的私有库，都是属于私有模块，都是要进行设置的，否则会拉取失败。</p><p>更细致来讲，就是依赖了由 GOPROXY 指定的 Go 模块代理或由 GOSUMDB 指定 Go checksum database 都无法访问到的模块时的场景。</p><p>而一般建议直接设置 <b>GOPRIVATE</b>，它的值将作为 <b>GONOPROXY</b> 和 <b>GONOSUMDB</b> 的默认值，所以建议的最佳姿势是直接使用 GOPRIVATE。</p><p>并且它们的值都是一个以英文逗号 “,” 分割的模块路径前缀，也就是可以设置多个，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPRIVATE</span><span class="token operator">=</span><span class="token string">&quot;git.example.com,github.com/eddycjy/mquote&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置后，前缀为 git.xxx.com 和 github.com/eddycjy/mquote 的模块都会被认为是私有模块。</p><p>如果不想每次都重新设置，我们也可以利用通配符，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPRIVATE</span><span class="token operator">=</span><span class="token string">&quot;*.example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样子设置的话，所有模块路径为 example.com 的子域名（例如：git.example.com）都将不经过 Go module proxy 和 Go checksum database，需要注意的是不包括 example.com 本身。</p><h3 id="使用-go-modules-初始化项目" tabindex="-1"><a class="header-anchor" href="#使用-go-modules-初始化项目" aria-hidden="true">#</a> 使用 Go Modules 初始化项目</h3><h4 id="开启-go-modules" tabindex="-1"><a class="header-anchor" href="#开启-go-modules" aria-hidden="true">#</a> 开启 Go Modules</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/aceld/modules_test
$ <span class="token builtin class-name">cd</span> <span class="token environment constant">$HOME</span>/aceld/modules_test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 Go modules 初始化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go mod init github.com/aceld/modules_test
go: creating new go.mod: module github.com/aceld/modules_test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行 go mod init 命令时，我们指定了模块导入路径为 <code>github.com/aceld/modules_test</code>。接下来我们在该项目根目录下创建 main.go 文件，如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;github.com/aceld/zinx/znet&quot;</span>
    <span class="token string">&quot;github.com/aceld/zinx/ziface&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//ping test 自定义路由</span>
<span class="token keyword">type</span> PingRouter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    znet<span class="token punctuation">.</span>BaseRouter
<span class="token punctuation">}</span>

<span class="token comment">//Ping Handle</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>PingRouter<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>request ziface<span class="token punctuation">.</span>IRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//先读取客户端的数据</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;recv from client : msgId=&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">GetMsgID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token string">&quot;, data=&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">GetData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">//再回写ping...ping...ping</span>
    err <span class="token operator">:=</span> request<span class="token punctuation">.</span><span class="token function">GetConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SendBuffMsg</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;ping...ping...ping&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1 创建一个server句柄</span>
    s <span class="token operator">:=</span> znet<span class="token punctuation">.</span><span class="token function">NewServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//2 配置路由</span>
    s<span class="token punctuation">.</span><span class="token function">AddRouter</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>PingRouter<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//3 开启服务</span>
    s<span class="token punctuation">.</span><span class="token function">Serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK, 我们先不要关注代码本身,我们看当前的 main.go 也就是我们的 <code>aceld/modules_test</code> 项目,是依赖一个叫<code> github.com/aceld/zinx</code> 库的. znet 和 ziface 只是 zinx 的两个模块.</p><p>接下来我们在<code>$HOME/aceld/modules_test</code>,本项目的根目录执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get github.com/aceld/zinx/znet

go: downloading github.com/aceld/zinx v0.0.0-20200221135252-8a8954e75100
go: found github.com/aceld/zinx/znet <span class="token keyword">in</span> github.com/aceld/zinx v0.0.0-20200221135252-8a8954e75100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们会看到 我们的 <code>go.mod</code> 被修改,同时多了一个 <code>go.sum</code> 文件.</p><h4 id="查看-go-mod-文件" tabindex="-1"><a class="header-anchor" href="#查看-go-mod-文件" aria-hidden="true">#</a> 查看 go.mod 文件</h4><blockquote><p><code>aceld/modules_test/go.mod</code></p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>module github<span class="token punctuation">.</span>com<span class="token operator">/</span>aceld<span class="token operator">/</span>modules_test

<span class="token keyword">go</span> <span class="token number">1.14</span>

require github<span class="token punctuation">.</span>com<span class="token operator">/</span>aceld<span class="token operator">/</span>zinx v0<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span><span class="token number">20200221135252</span><span class="token operator">-</span>8a8954e75100 <span class="token comment">// indirect</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来简单看一下这里面的关键字</p><p><code>module</code>: 用于定义当前项目的模块路径</p><p><code>go</code>:标识当前 Go 版本.即初始化版本</p><p><code>require</code>: 当前项目依赖的一个特定的必须版本</p><p>// indirect: 示该模块为间接依赖，也就是在当前应用程序中的 import 语句中，并没有发现这个模块的明确引用，有可能是你先手动 go get 拉取下来的，也有可能是你所依赖的模块所依赖的.我们的代码很明显是依赖的&quot;<code>github.com/aceld/zinx/znet</code>&quot;和&quot;<code>github.com/aceld/zinx/ziface</code>&quot;,所以就间接的依赖了 <code>github.com/aceld/zinx</code></p><h4 id="查看-go-sum-文件" tabindex="-1"><a class="header-anchor" href="#查看-go-sum-文件" aria-hidden="true">#</a> 查看 go.sum 文件</h4><p>在第一次拉取模块依赖后，会发现多出了一个 <code>go.sum</code> 文件，其详细罗列了当前项目直接或间接依赖的所有模块版本，并写明了那些模块版本的 SHA-256 哈希值以备 Go 在今后的操作中保证项目所依赖的那些模块版本不会被篡改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>github.com/aceld/zinx v0.0.0-20200221135252-8a8954e75100 h1:Ez5iM6cKGMtqvIJ8nvR9h74Ln8FvFDgfb7bJIbrKv54<span class="token operator">=</span>
github.com/aceld/zinx v0.0.0-20200221135252-8a8954e75100/go.mod h1:bMiERrPdR8FzpBOo86nhWWmeHJ1cCaqVvWKCGcDVJ5M<span class="token operator">=</span>
github.com/golang/protobuf v1.3.3/go.mod h1:vzj43D7+SQXF/4pzW/hwtAqwc6iTitCiVSaWz5lYuqw<span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到一个模块路径可能有如下两种：</p><p>h1:hash 情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>github.com/aceld/zinx v0.0.0-20200221135252-8a8954e75100 h1:Ez5iM6cKGMtqvIJ8nvR9h74Ln8FvFDgfb7bJIbrKv54<span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>go.mod hash 情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>github.com/aceld/zinx v0.0.0-20200221135252-8a8954e75100/go.mod h1:bMiERrPdR8FzpBOo86nhWWmeHJ1cCaqVvWKCGcDVJ5M<span class="token operator">=</span>
github.com/golang/protobuf v1.3.3/go.mod h1:vzj43D7+SQXF/4pzW/hwtAqwc6iTitCiVSaWz5lYuqw<span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>h1 hash 是 Go modules 将目标模块版本的 zip 文件开包后，针对所有包内文件依次进行 hash，然后再把它们的 hash 结果按照固定格式和算法组成总的 hash 值。</p><p>而 h1 hash 和 go.mod hash 两者，要不就是同时存在，要不就是只存在 go.mod hash。那什么情况下会不存在 h1 hash 呢，就是当 Go 认为肯定用不到某个模块版本的时候就会省略它的 h1 hash，就会出现不存在 h1 hash，只存在 go.mod hash 的情况。</p><h4 id="修改模块的版本依赖关系" tabindex="-1"><a class="header-anchor" href="#修改模块的版本依赖关系" aria-hidden="true">#</a> 修改模块的版本依赖关系</h4><p>为了作尝试,假定我们现在都 zinx 版本作了升级, 由 zinx <code>v0.0.0-20200221135252-8a8954e75100</code> 升级到 zinx <code>v0.0.0-20200306023939-bc416543ae24</code> (注意 zinx 是一个没有打版本 tag 打第三方库,如果有的版本号是有 tag 的,那么可以直接对应 v 后面的版本号即可)</p><p>那么,我们是怎么知道 zinx 做了升级呢, 我们又是如何知道的最新的 zinx 版本号是多少呢?</p><p>先回到<code>$HOME/aceld/modules_test</code>,本项目的根目录执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get github.com/aceld/zinx/znet
go: downloading github.com/aceld/zinx v0.0.0-20200306023939-bc416543ae24
go: found github.com/aceld/zinx/znet <span class="token keyword">in</span> github.com/aceld/zinx v0.0.0-20200306023939-bc416543ae24
go: github.com/aceld/zinx upgrade <span class="token operator">=</span><span class="token operator">&gt;</span> v0.0.0-20200306023939-bc416543ae24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们,下载了最新的 zinx, 版本是 <code>v0.0.0-20200306023939-bc416543ae24</code></p><p>然后,看一下 go.mod</p><p>我们会看到,当我们执行 go get 的时候, 会自动的将本地将当前项目的 require 更新了.变成了最新的依赖.</p><p>好了, 现在我们就要做另外一件事,就是,我们想用一个旧版本的 zinx. 来修改当前 zinx 模块的依赖版本号.</p><p>目前我们在<code>$GOPATH/pkg/mod/github.com/aceld</code>下,已经有了两个版本的 zinx 库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/go/pkg/mod/github.com/aceld$ <span class="token function">ls</span>
zinx@v0.0.0-20200221135252-8a8954e75100
zinx@v0.0.0-20200306023939-bc416543ae24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前,我们<code>/aceld/modules_test</code> 依赖的是<code>zinx@v0.0.0-20200306023939-bc416543ae24</code> 这个是最新版, 我们要改成之前的版本<code>zinx@v0.0.0-20200306023939-bc416543ae24</code>.</p><p>回到/aceld/modules_test 项目目录下,执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go mod edit <span class="token parameter variable">-replace</span><span class="token operator">=</span>zinx@v0.0.0-20200306023939-bc416543ae24<span class="token operator">=</span>zinx@v0.0.0-20200221135252-8a8954e75100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们打开 go.mod 查看一下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>module github<span class="token punctuation">.</span>com<span class="token operator">/</span>aceld<span class="token operator">/</span>modules_test

<span class="token keyword">go</span> <span class="token number">1.14</span>

require github<span class="token punctuation">.</span>com<span class="token operator">/</span>aceld<span class="token operator">/</span>zinx v0<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span><span class="token number">20200306023939</span><span class="token operator">-</span>bc416543ae24 <span class="token comment">// indirect</span>

replace zinx v0<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span><span class="token number">20200306023939</span><span class="token operator">-</span>bc416543ae24 <span class="token operator">=</span><span class="token operator">&gt;</span> zinx v0<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span><span class="token number">20200221135252</span><span class="token operator">-</span>8a8954e75100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里出现了 replace 关键字.用于将一个模块版本替换为另外一个模块版本。</p><h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令" aria-hidden="true">#</a> 常用指令</h2><p>废话好多，直接上指令吧</p><ul><li><code>go get example.org/pkg</code> 下载三方包 <ul><li><code>@update</code> 默认</li><li><code>@none</code> 删除依赖</li><li><code>@v1.1.2</code> tag 版本，语义版本</li><li><code>@23dfdd5</code> 特定的 commit</li><li><code>@branch</code> 分支最新 commit</li></ul></li><li><code>go mod</code> 包管理 <ul><li><code>init</code> 初始化，创建<code>go.mod</code></li><li><code>download</code> 下载模块到本地缓存</li><li><code>tidy</code> 添加需要的模块依赖，删除不需要的模块依赖</li></ul></li></ul>`,108),t=[i];function l(d,c){return a(),s("div",null,t)}const r=n(o,[["render",l],["__file","02-module.html.vue"]]);export{r as default};
