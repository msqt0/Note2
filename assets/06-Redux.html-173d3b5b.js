import{_ as e,p as a,q as t,a1 as r}from"./framework-7db056f4.js";const i={},d=r('<h1 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h1><p>redux 将所有数据存储到树中，且树是唯一的。</p><h2 id="redux-基本概念" tabindex="-1"><a class="header-anchor" href="#redux-基本概念" aria-hidden="true">#</a> Redux 基本概念</h2><ul><li>store：存储树结构。</li><li>state：维护的数据，一般维护成树的结构。</li><li>reducer：对 state 进行更新的函数，每个 state 绑定一个 reducer。传入两个参数：当前 state 和 action，返回新 state。</li><li>action：一个普通对象，存储 reducer 的传入参数，一般描述对 state 的更新类型。</li><li>dispatch：传入一个参数 action，对整棵 state 树操作一遍。</li></ul><h2 id="react-redux-基本概念" tabindex="-1"><a class="header-anchor" href="#react-redux-基本概念" aria-hidden="true">#</a> React-Redux 基本概念</h2><ul><li>Provider 组件：用来包裹整个项目，其 store 属性用来存储 redux 的 store 对象。</li><li>connect(mapStateToProps, mapDispatchToProps)函数：用来将 store 与组件关联起来。 <ul><li>mapStateToProps：每次 store 中的状态更新后调用一次，用来更新组件中的值。</li><li>mapDispatchToProps：组件创建时调用一次，用来将 store 的 dispatch 函数传入组件。</li></ul></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li>npm i redux react-redux @reduxjs/toolkit</li></ul>',8),s=[d];function l(c,o){return a(),t("div",null,s)}const h=e(i,[["render",l],["__file","06-Redux.html.vue"]]);export{h as default};
