import{_ as n,p as s,q as e,a1 as a}from"./framework-7db056f4.js";const t={},o=a(`<h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1><h2 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> never</h2><p>永远表示不会到达 💩</p><p>一般用在函数的返回值，错误处理、和死循环常用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Function returning never must not have a reachable end point</span>
<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Inferred return type is never</span>
<span class="token keyword">function</span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Something failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Function returning never must not have a reachable end point</span>
<span class="token keyword">function</span> <span class="token function">infiniteLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码检查" tabindex="-1"><a class="header-anchor" href="#代码检查" aria-hidden="true">#</a> 代码检查</h2><p>在 JavaScript 项目中，我们一般使用 ESLint 来进行代码检查，它通过插件化的特性极大的丰富了适用范围，搭配 typescript-eslint 之后, 也用来检查 TypeScript 代码</p><p>它会纠正程序员写代码的习惯, 空格等号等</p><h2 id="编译选项" tabindex="-1"><a class="header-anchor" href="#编译选项" aria-hidden="true">#</a> 编译选项</h2><table><thead><tr><th>选项</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>allowJs</td><td>boolean</td><td>false</td><td>允许编译 js 文件</td></tr><tr><td>allowSyntheticDefaultImports</td><td>boolean</td><td>false</td><td>允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。</td></tr></tbody></table><h3 id="allowjs" tabindex="-1"><a class="header-anchor" href="#allowjs" aria-hidden="true">#</a> allowJs</h3><p>设置为 true 时，js 文件会被 tsc 编译，否则不会。一般在项目中 js, ts 混合开发时需要设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置为 true 时，编译后的文件包含 foo.js</span>
├── lib
│   ├── foo.js
│   └── index.js
├── src
│   ├── foo.js
│   └── index.ts
├── package.json
└── tsconfig.json

<span class="token comment"># 设置为 false 时，编译后的文件不包含 foo.js</span>
├── lib
│   └── index.js
├── src
│   ├── foo.js
│   └── index.ts
├── package.json
└── tsconfig.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="allowsyntheticdefaultimports" tabindex="-1"><a class="header-anchor" href="#allowsyntheticdefaultimports" aria-hidden="true">#</a> allowSyntheticDefaultImports</h3><blockquote><p>允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。</p></blockquote><p><code>export = foo</code> 是 ts 为了兼容 <code>commonjs</code> 创造的语法，它对应于 <code>commonjs</code> 中的 <code>module.exports = foo</code>。</p><p>在 ts 中，如果要引入一个通过 <code>export = foo</code> 导出的模块，标准的语法是 <code>import foo = require(&#39;foo&#39;)</code>，或者 <code>import * as foo from &#39;foo&#39;</code>。</p><p>但由于历史原因，我们已经习惯了使用 <code>import foo from &#39;foo&#39;</code>。</p><p>这个选项就是为了解决这个问题。当它设置为 true 时，允许使用 <code>import foo from &#39;foo&#39;</code> 来导入一个通过 <code>export = foo</code> 导出的模块。当它设置为 <code>false</code> 时，则不允许，会报错。</p><p>当然，我们一般不会在 ts 文件中使用 <code>export = foo</code> 来导出模块，而是在写（符合 <code>commonjs</code> 规范的）第三方库的声明文件时，才会用到 <code>export = foo</code> 来导出类型。</p><p>比如 React 的声明文件中，就是通过 <code>export = React</code> 来导出类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token operator">=</span> React<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> React<span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">namespace</span> React <span class="token punctuation">{</span>
  <span class="token comment">// 声明 React 的类型</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时若我们通过 import React from &#39;react&#39; 来导入 react 则会报错</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// Module &#39;&quot;typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types/react/index&quot;&#39; can only be default-imported using the &#39;esModuleInterop&#39; flagts(1259)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法就是将 <code>allowSyntheticDefaultImports</code> 设置为 <code>true</code></p>`,25),i=[o];function c(p,l){return s(),e("div",null,i)}const r=n(t,[["render",c],["__file","04-others.html.vue"]]);export{r as default};
