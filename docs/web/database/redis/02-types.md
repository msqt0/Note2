# 数据类型

Redis 是 一种数据结构 server。在其核心部分，Redis
提供了一集合的本地数据类型来帮助我们解决各种各样的问题，从**缓存**到**队列**再到**事件处理**等等。 下面是关于每种数据类型的描述。

**Core**：

- `Strings`：Redis strings 是最基础的 Redis 数据类型，代表了字节序列。
- `Lists`：Redis lists 是 一组 strings，按照插入的顺序排序。
- `Sets`：Redis sets 是唯一 strings 的无序集合，就像你喜爱的编程语言一样。
- `Hashes`：Redis hashes 为建模为字段值对集合的记录类型。Redis 的 hashes 像 Python 的 字典，Java
  的 HashMaps。
- `Sorted sets`：Redis sorted sets 是按照字符串的相关关联分数保持顺序的 sets
- `Streams`：Redis stream 是一种数据结构，其作用类似于仅附加日志。stream 帮助按事件发生的顺序记录事件，然后联合它们进行处理。
- `Geospatial indexes`：Redis geospatial indexes 对于给定 geospatial 半径或
- `Bitsmaps`：Redis bitmaps 让你对字符串进行位运算。
- `Bitfields`：Redis Bitfields 能够在一个 string 值中有效率地编码多种计数器 counters。
- `HyperLogLog`：Redis HyperLogLog 数据结构对大集合的 基数 cardinality(即元素的数量)进行概率估计。
- `Extensions`：Redis 可以通过自己编写 lua 或使用别人的 modules API 来扩展类型。 🐄🍺

## 教程

以下是实践教程，它使用 Redis CLI 教我们 Redis 核心的数据类型内容。

### Keys

Redis keys 是二进制安全的，这意味着我们可以使用任何二进制序列作为一个 key，从字符串`foo`到一个 JPEG 文件的内容都可以，甚至空的字符串都是合法的 key。

关于 keys 的一些规则：

- 太长的 keys 不是个 good idea 🤓。比如，一个 1024 bytes 的 key
  是一个糟糕的主意：不仅是因为在内存方面它占用太多，而且在数据集查找可能需要几次代价高昂的键比较。即使手头的任务是匹配一个大数值的存在，hash 它 (例如用 SHA1)是一个更好的主意，特别是从内存和带宽来看。
- 太短的 keys 也不常常是个 good idea 💩。如果你可以把键写成`user:1000:followers`，那么将它写成`u1000flw`也没什么意义。前者更加可读并且键对象本事占用空间与值对象使用的空间相比，增加的空间也很少。当然短的 keys 能显著地占用更少的内存，我们的工作就是找到正确的平衡。
- 尝试坚持一种 命名模式
  schema，比如`object-type:id`是个好主意，像`user:1000`。点或者短线经常用来分隔多词字段，比如`comment:4321:repy.to` 或者 `comment:4321:reply-to`。
- 最大的 key 体积是 **512MB**

### Strings

Redis String 类型是能与 Redis key 关联起来最简单的值类型。
因为 Redis keys 是 strings，当你也使用 string 类型作为值时，我们能够 把一个 string map 成另个 string。string 数据类对于很多情况下很有用，像缓存 html 片段(fragments)或页面。

让我们来玩玩一下 string type（以 redis-cli 为例）

```bash
127.0.0.1:6379> set hello nihao
OK
127.0.0.1:6379> get hello
"nihao"
```

可以看到，我们用 **SET** 与 **GET** 命令来设置并取回 string 的值。记得 **SET**
会取代任何已经在该 key
上储存的结果。在键已经存在的情况下，即使该键与非字符串的值相关联，SET 仍然执行赋值。

值能是 任何形式的 strings（包括二进制数据），例如你可以存储一个 jpeg
图片在值里，但是一个值的内存不能超过 `512MB`

**SET** 命令有一些有趣的选项，作为附加参数被提供。比如 我想让**SET**已经存在的 key
失败，或者反过来只有当值存在时才成功。

```bash
127.0.0.1:6379> set 🕊  鸽子
OK
127.0.0.1:6379> get 🕊️
"\xe9\xb8\xbd\xe5\xad\x90"

# 当存在，就失败
127.0.0.1:6379> set 🕊  gz nx
(nil)
127.0.0.1:6379> get 🕊️
"\xe9\xb8\xbd\xe5\xad\x90"

# 当存在，才成功
127.0.0.1:6379> set 🕊  gz xx
OK
127.0.0.1:6379> get 🕊
"gz"
```
