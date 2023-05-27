# Get Start

外部的程序使用 tcp socket 和 redis 的特殊协议与 redis 进行通讯。

Redis 提供了简单的命令行程序用来把命令发送到 redis，这个程序叫做 `redis-cli`

有两种使用方式：

- `redis-cli` + args：程序名后加指令/选项运行。
- `redis-cli`：直接执行 `redis-cli` 以后进入互动模式，直接输入指令/选项来运行。

```bash
$ redis-cli ping
PONG


$ redis-cli
redis-cli 6.2.12
To get help about Redis commands type:
      "help @<group>" to get a list of commands in <group>
      "help <command>" for help on <command>
      "help <tab>" to get a list of possible help topics
      "quit" to exit

To set redis-cli preferences:
      ":set hints" enable online hints
      ":set nohints" disable online hints
Set your preferences in ~/.redisclirc
```

```bash
/data # redis-cli
127.0.0.1:6379> help
redis-cli 6.2.12
To get help about Redis commands type:
      "help @<group>" to get a list of commands in <group>
      "help <command>" for help on <command>
      "help <tab>" to get a list of possible help topics
      "quit" to exit

To set redis-cli preferences:
      ":set hints" enable online hints
      ":set nohints" disable online hints
Set your preferences in ~/.redisclirc
```

```bash
$ redis-cli
redis 127.0.0.1:6379> set mykey somevalue
OK
redis 127.0.0.1:6379> get mykey
"somevalue"
```

## Redis 安全

默认情况下，Redis 绑定到所有接口并且根本没有身份验证。如果你在受控的环境下使用
Redis，比如与外部的互联网环境分隔开，并且与攻击者分隔开，这很好。

但是，如果未加固的 Redis 暴露在互联网上，这是一个很大的安全问题。
如果你不是 100%确定拟定环境是足够安全的，请检查以下步骤来让 Redis
更安全，按顺序降低安全性：

1. 确认 Redis 使用来给外部连接监听的端口有防火墙保护，以至于它不可能被外面的世界连接到。

2. 使用一个设置了 **bind** 指令的配置文件，以保证 Redis 只监听你正在使用的网络接口。例如，如果你只是从同一台计算机上访问 Redis 的本地接口，那么只有环回接口（127.0.0.1），以此类推。

3. 使用**要求通行证(requirepass)**选项为了添加一个额外的安全层，这样 clients 需要使用 **AUTH**指令认证。

4. 如果您的环境需要加密，请使用 spiped 或其他 SSL 隧道软件来加密 Redis 服务器和 Redis 客户端之间的流量。

请注意，Redis 实例如果没有任何安全措施就暴露到互联网是非常容易被剥削(exploit)，因此确保你理解以上内容并至少应用一个防火层。防火墙到位后，尝试使用**redis-cli**从外部主机来证明自己无法访问到这个实例。

## Client 上使用 Redis

当然，只使用 Redis 的命令行工具来达成我们的目标是远远不够的。为了应用 Redis
到我们的应用，需要使用对应语言提供的 client 库

[ 各种语言对 Redis 的 clients 列表 ](https://redis.io/clients)

## Redis 持久化

如果 我们使用默认配置运行
Redis，它会自发地时不时自动保存数据集(例如，如果你对数据有 100
次修改，那么至少 5min
后你才能看到持久层的变化)，因此如果你想要你的数据库保持到持久层，并且在重启后能加载，请确保你每一次手动输入`SAVE`指令来生成一份快照 snapshot。或者，确保使用 `shutdown` 指令来关闭数据库：

```bash
$ redis-cli shutdown
```

这种方式，Redis 将会确保退出前把数据保存在硬盘上。

> 详细的内容，我没本事展开了，请自己到官网看吧 💩
