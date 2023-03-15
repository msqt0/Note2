import{_ as n,p as s,q as a,a1 as t}from"./framework-7db056f4.js";const e={},p=t(`<h1 id="关联" tabindex="-1"><a class="header-anchor" href="#关联" aria-hidden="true">#</a> 关联</h1><h2 id="自动创建-更新" tabindex="-1"><a class="header-anchor" href="#自动创建-更新" aria-hidden="true">#</a> 自动创建/更新</h2><p>GORM 将在创建或保存一条记录的时候自动保存关联和它的引用，如果关联有一个主键， GORM 将调用 <code>Update</code> 来更新它， 不然，它将会被创建。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>user <span class="token operator">:=</span> User<span class="token punctuation">{</span>
    Name<span class="token punctuation">:</span>            <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">,</span>
    BillingAddress<span class="token punctuation">:</span>  Address<span class="token punctuation">{</span>Address1<span class="token punctuation">:</span> <span class="token string">&quot;Billing Address - Address 1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    ShippingAddress<span class="token punctuation">:</span> Address<span class="token punctuation">{</span>Address1<span class="token punctuation">:</span> <span class="token string">&quot;Shipping Address - Address 1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    Emails<span class="token punctuation">:</span>          <span class="token punctuation">[</span><span class="token punctuation">]</span>Email<span class="token punctuation">{</span>
        <span class="token punctuation">{</span>Email<span class="token punctuation">:</span> <span class="token string">&quot;jinzhu@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>Email<span class="token punctuation">:</span> <span class="token string">&quot;jinzhu-2@example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    Languages<span class="token punctuation">:</span>       <span class="token punctuation">[</span><span class="token punctuation">]</span>Language<span class="token punctuation">{</span>
        <span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;ZH&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;EN&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
<span class="token comment">//// BEGIN TRANSACTION;</span>
<span class="token comment">//// INSERT INTO &quot;addresses&quot; (address1) VALUES (&quot;Billing Address - Address 1&quot;);</span>
<span class="token comment">//// INSERT INTO &quot;addresses&quot; (address1) VALUES (&quot;Shipping Address - Address 1&quot;);</span>
<span class="token comment">//// INSERT INTO &quot;users&quot; (name,billing_address_id,shipping_address_id) VALUES (&quot;jinzhu&quot;, 1, 2);</span>
<span class="token comment">//// INSERT INTO &quot;emails&quot; (user_id,email) VALUES (111, &quot;jinzhu@example.com&quot;);</span>
<span class="token comment">//// INSERT INTO &quot;emails&quot; (user_id,email) VALUES (111, &quot;jinzhu-2@example.com&quot;);</span>
<span class="token comment">//// INSERT INTO &quot;languages&quot; (&quot;name&quot;) VALUES (&#39;ZH&#39;);</span>
<span class="token comment">//// INSERT INTO user_languages (&quot;user_id&quot;,&quot;language_id&quot;) VALUES (111, 1);</span>
<span class="token comment">//// INSERT INTO &quot;languages&quot; (&quot;name&quot;) VALUES (&#39;EN&#39;);</span>
<span class="token comment">//// INSERT INTO user_languages (&quot;user_id&quot;,&quot;language_id&quot;) VALUES (111, 2);</span>
<span class="token comment">//// COMMIT;</span>
db<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关闭自动更新" tabindex="-1"><a class="header-anchor" href="#关闭自动更新" aria-hidden="true">#</a> 关闭自动更新</h2><p>如果你的关联记录已经存在在数据库中， 你可能会不想去更新它。</p><p>你可以设置 <code>gorm:association_autoupdate</code> 为 <code>false</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 不更新有主键的关联，但会更新引用</span>
db<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:association_autoupdate&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:association_autoupdate&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
或者使用 GORM 的标签， gorm<span class="token punctuation">:</span><span class="token string">&quot;association_autoupdate:false&quot;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  gorm<span class="token punctuation">.</span>Model
  Name       <span class="token builtin">string</span>
  CompanyID  <span class="token builtin">uint</span>
  <span class="token comment">// 不更新有主键的关联，但会更新引用</span>
  Company    Company <span class="token string">\`gorm:&quot;association_autoupdate:false&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关闭自动创建" tabindex="-1"><a class="header-anchor" href="#关闭自动创建" aria-hidden="true">#</a> 关闭自动创建</h2><p>即使你禁用了 AutoUpdating, 仍然会创建没有主键的关联，并保存它的引用。</p><p>你可以通过把 <code>gorm:association_autocreate</code> 设置为 false 来禁用这个行为。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 不创建没有主键的关联，不保存它的引用。</span>
db<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:association_autocreate&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:association_autocreate&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
或者使用 GORM 标签， gorm<span class="token punctuation">:</span><span class="token string">&quot;association_autocreate:false&quot;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  gorm<span class="token punctuation">.</span>Model
  Name       <span class="token builtin">string</span>
  <span class="token comment">// 不创建没有主键的关联，不保存它的引用。</span>
  Company1   Company <span class="token string">\`gorm:&quot;association_autocreate:false&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关闭自动创建-更新" tabindex="-1"><a class="header-anchor" href="#关闭自动创建-更新" aria-hidden="true">#</a> 关闭自动创建/更新</h2><p>禁用 AutoCreate 和 AutoUpdate，你可以一起使用它们两个的设置。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:association_autoupdate&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:association_autocreate&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  gorm<span class="token punctuation">.</span>Model
  Name    <span class="token builtin">string</span>
  Company Company <span class="token string">\`gorm:&quot;association_autoupdate:false;association_autocreate:false&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用 <code>gorm:save_associations</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:save_associations&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:save_associations&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  gorm<span class="token punctuation">.</span>Model
  Name    <span class="token builtin">string</span>
  Company Company <span class="token string">\`gorm:&quot;association_autoupdate:false&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关闭保存引用" tabindex="-1"><a class="header-anchor" href="#关闭保存引用" aria-hidden="true">#</a> 关闭保存引用</h2><p>如果你不想当更新或保存数据的时候保存关联的引用， 你可以使用下面的技巧</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:association_save_reference&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:association_save_reference&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用标签</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  gorm<span class="token punctuation">.</span>Model
  Name       <span class="token builtin">string</span>
  CompanyID  <span class="token builtin">uint</span>
  Company    Company <span class="token string">\`gorm:&quot;association_save_reference:false&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关联模式" tabindex="-1"><a class="header-anchor" href="#关联模式" aria-hidden="true">#</a> 关联模式</h2><p>关联模式包含一些可以轻松处理与关系相关的事情的辅助方法。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 开启关联模式</span>
<span class="token keyword">var</span> user User
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// \`user\` 是源表，必须包含主键</span>
<span class="token comment">// \`Languages\` 是源表关系字段名称。</span>
<span class="token comment">// 只有上面两个条件都能匹配，关联模式才会生效， 检查是否正常：</span>
<span class="token comment">// db.Model(&amp;user).Association(&quot;Languages&quot;).Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找关联" tabindex="-1"><a class="header-anchor" href="#查找关联" aria-hidden="true">#</a> 查找关联</h2><h3 id="查找匹配的关联" tabindex="-1"><a class="header-anchor" href="#查找匹配的关联" aria-hidden="true">#</a> 查找匹配的关联</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>languages<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="增加关联" tabindex="-1"><a class="header-anchor" href="#增加关联" aria-hidden="true">#</a> 增加关联</h3><p>为 many to many， has many 新增关联， 为 has one, belongs to 替换当前关联</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Append</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Language<span class="token punctuation">{</span>languageZH<span class="token punctuation">,</span> languageEN<span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Append</span><span class="token punctuation">(</span>Language<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;DE&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="替换关联" tabindex="-1"><a class="header-anchor" href="#替换关联" aria-hidden="true">#</a> 替换关联</h3><p>用一个新的关联替换当前关联</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Language<span class="token punctuation">{</span>languageZH<span class="token punctuation">,</span> languageEN<span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>Language<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;DE&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> languageEN<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除关联" tabindex="-1"><a class="header-anchor" href="#删除关联" aria-hidden="true">#</a> 删除关联</h3><p>删除源和参数对象之间的关系， 只会删除引用，不会删除他们在数据库中的对象。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Language<span class="token punctuation">{</span>languageZH<span class="token punctuation">,</span> languageEN<span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>languageZH<span class="token punctuation">,</span> languageEN<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清理关联" tabindex="-1"><a class="header-anchor" href="#清理关联" aria-hidden="true">#</a> 清理关联</h3><p>删除源和当前关联之间的引用，不会删除他们的关联</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="统计关联" tabindex="-1"><a class="header-anchor" href="#统计关联" aria-hidden="true">#</a> 统计关联</h3><p>返回当前关联的统计数</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Languages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,43),o=[p];function c(u,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","13-关联.html.vue"]]);export{d as default};
