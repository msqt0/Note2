import{_ as t,p as e,q as a,a1 as r}from"./framework-7db056f4.js";const o={},i=r('<h1 id="系统架构演变" tabindex="-1"><a class="header-anchor" href="#系统架构演变" aria-hidden="true">#</a> 系统架构演变</h1><h2 id="单体架构-monolithic-software" tabindex="-1"><a class="header-anchor" href="#单体架构-monolithic-software" aria-hidden="true">#</a> 单体架构 (monolithic software)</h2><p>1968 年的软件危机产生了软件工程，并且催生了面向对象的高级语言，例如 1972 的 C 语言，同时产生了我们的单体式的技术架构，单体架构的特点是所有代码逻辑都耦合在一个项目中。</p><p>整个软件就是单一的整体，所有的业务都在同一份代码上</p><blockquote><p>就是我写的 💩 代码</p></blockquote><table><thead><tr><th>图片</th></tr></thead><tbody><tr><td><img src="https://user-images.githubusercontent.com/94043894/219559050-ef4cb716-e59c-423a-b735-c50bb220ef48.png" alt="image"></td></tr></tbody></table><p><b>缺点</b></p><ol><li>业务功能的耦合度太高，难以管理维护</li><li>难以为单独功能做开发和测试，只能整体开发和测试，导致必须采用瀑布式开发模型。</li></ol><p>总之，单体架构的大型软件，不仅开发速度慢，而且会形成难以维护和升级的复杂代码，成为程序员的沉重负担。</p><h2 id="垂直架构" tabindex="-1"><a class="header-anchor" href="#垂直架构" aria-hidden="true">#</a> 垂直架构</h2><p>在 1980s 时代，大型应用和超大型应用开始兴起，特别是操作系统和数据库的出现和广泛应用，数百万行代码量的系统较为普遍。随着业务的发展、单体架构越来越臃肿，系统代码量日益膨胀，在同一系统上协作的开发人员越来越多。基于单体架构的协作效率越来越低，系统故障率越来越高。将一个大型应用拆分成多个相互独立的小型应用成为解决单体应用的一种方案，这就是垂直架构（也成为“竖井式架构”）。垂直架构根据业务属性将一个大的单体应用拆分成多个模块或子系统，子系统之间没有直接关联。</p><p>垂直架构相较于单体架构而言，进行了部分解耦，但是不够彻底，在各个子系统相互依赖的代码和模块中，存在重复代码拷贝和模块功能重复开发的情况。</p><table><thead><tr><th>图片</th></tr></thead><tbody><tr><td><img src="https://user-images.githubusercontent.com/94043894/219559467-3e739621-ba8f-406a-be2a-453e45a5245d.png" alt="image"></td></tr></tbody></table><blockquote><p>垂直架构按功能进行 MVC 划分和按职能进行前后端分离模式，通过分层来规范职责和定义边界。</p></blockquote><h2 id="面向服务的架构-soa" tabindex="-1"><a class="header-anchor" href="#面向服务的架构-soa" aria-hidden="true">#</a> 面向服务的架构（SOA）</h2><p>为了解决上面这些问题，很早就有人提出来，必须打破代码的耦合，拆分单体架构，将软件拆分成一个个独立的功能单元。</p><p>大概在 20 多年前，随着互联网的出现，功能单元可以用远程&quot;服务&quot;的形式提供，就诞生出了&quot;面向服务架构&quot;（service-oriented architecture，简称 SOA）。</p><p>所谓服务（service），就是在后台不间断运行、提供某种功能的一个程序。最常见的服务就是 Web 服务，通过 80 端口向外界提供网页访问。</p><p>&quot;面向服务架构&quot;就是把一个大型的单体程序，拆分成一个个独立服务，也就是较小的程序。每个服务都是一个独立的功能单元，承担不同的功能，服务之间通过通信协议连在一起。</p><table><thead><tr><th>图片</th></tr></thead><tbody><tr><td><img src="https://user-images.githubusercontent.com/94043894/219563569-cff634ec-365b-4b15-96cd-16c9bf3e6306.png" alt="image"></td></tr></tbody></table><p>优点:</p><ol><li>每种服务功能单一，相当于一个小型软件，便于开发和测试。</li><li>各个服务独立运行，简化了架构，提高了可靠性。</li><li>鼓励和支持代码重用，同一个服务可以用于多种目的。</li><li>不同服务可以单独开发和部署，便于升级。</li><li>扩展性好，可以容易地加机器、加功能，承受高负载。</li><li>不容易出现单点故障。即使一个服务失败了，不会影响到其他服务。</li></ol><p>跟单体架构不一样，面向服务架构是语言不敏感的，不同服务可以使用不同的语言和工具开发，可能需要部署在不同的系统和环境。</p><p>这意味着，面向服务架构默认运行在不同服务器上，每台服务器提供一种服务，多台服务器共同组成一个完整的网络应用。</p><h2 id="微服务" tabindex="-1"><a class="header-anchor" href="#微服务" aria-hidden="true">#</a> 微服务</h2><p>2014 年，<code>Docker</code> 出现了，彻底改变了软件开发的面貌。它让程序运行在容器中，每个容器可以分别设定运行环境，并且只占用很少的系统资源。</p><table><thead><tr><th>图片</th></tr></thead><tbody><tr><td><img src="https://user-images.githubusercontent.com/94043894/219573327-0855b846-9fd6-4868-985d-5e8c371d5a2f.png" alt="image"></td></tr></tbody></table><p>简单说，<b>微服务就是采用容器技术的面向服务架构</b>。它依然使用&quot;服务&quot;作为功能单元，但是变成了轻量级实现，不需要新增服务器，只需要新建容器（一个进程），所以才叫做&quot;微服务&quot;。</p><p><b>一个微服务就是一个独立的进程</b>。 这个进程可以运行在本机，也可以运行在别的服务器，或者在云端（比如云服务和云函数 FaaS）。</p><p>它的特点与面向服务架构是一样的，但因为更轻量级，所以功能的解耦和服务化可以做得更彻底。而且，它可以标准化，同样的容器不管在哪里运行，结果都是一样的，所以市场上有很多 SaaS 产品，提供标准化的微服务。</p><p>正是由于微服务这些突出的优点，这几年才会变得如此流行。它和容器技术、云服务一起，一定会在未来的软件开发中，扮演越来越重要的角色。</p>',31),d=[i];function h(c,l){return e(),a("div",null,d)}const s=t(o,[["render",h],["__file","01-架构.html.vue"]]);export{s as default};
