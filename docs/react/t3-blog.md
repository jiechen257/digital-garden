::: info
source code: https://github.com/leojuriolli7/t3-blog

tech stack: Next.js + Prisma + tRPC + Zod + TypeScript + Tailwind CSS
:::

## prisma

### preview features

fullTextSearch：启用全文搜索后，可以通过在数据库列中搜索文本来向应用程序添加搜索功能（mysql 中需配合 fullTextIndex 使用

fullTextIndex：配合 fullTextSearch 使用

jsonProtocol：将基于 JSON 的线路协议设置为用于 Prisma 客户端和查询引擎之间通信的默认协议，以提高 Prisma 的性能

### model

```prisma
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade) // 定义了 "user" 字段，表示与 "User" 模型之间的关联。它指定了 "userId" 字段作为关联键，并引用 "User" 模型的 "id" 字段。还指定了 onDelete: Cascade，表示如果关联的用户记录被删除，相关的帐户记录也会被级联删除

  @@unique([provider, providerAccountId]) // // 定义了一个唯一约束，要求 "provider" 和 "providerAccountId" 字段的组合值必须是唯一的，确保不会有重复的帐户
  @@index([userId])
}
```

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]

  role           String             @default("user")
  bio            String?            @db.VarChar(160)
  likes          Like[]
  votes          PollOption[]
  favorites      FavoritesOnUsers[]
  followers      Follows[]          @relation("following") // 定义了用户与 "Follows" 数据模型之间的关联关系，表示用户的关注和被关注关系。这些关系是双向的，允许用户在 "followers" 和 "following" 方向上建立关系
  following      Follows[]          @relation("follower")
  url            UserLink?
  subscribedTags Tag[]

  notified Notification[] @relation(name: "NotifiedNotification")
  notifier Notification[] @relation(name: "NotifierNotification")

  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  Post      Post[]
  Comment   Comment[]

  @@fulltext([name])
}
```

> 关于 mysql 的 TEXT 类型：
>
> 它用于存储文本数据，通常用于较大的文本字段，如文章、评论或日志;与 CHAR 或 VARCHAR 不同，TEXT 类型不限制文本的长度，允许存储大块的文本数据
>
> TEXT 类型在数据库中以二进制格式存储文本内容，适合存储大段文本，但不适合进行字符串搜索和比较。如果需要进行文本搜索操作，可以考虑使用全文搜索引擎或其他文本搜索技术

## robots.txt

robots.txt 文件是一个用于控制搜索引擎爬虫访问网站的文本文件

它位于网站的根目录，并包含一些规则，告诉搜索引擎爬虫哪些页面或目录可以被爬取，哪些不可以

- User-agent: _：这一行指定了针对所有搜索引擎爬虫的规则。_ 表示通用规则适用于所有爬虫。
- Disallow: /private/：这一行指示搜索引擎爬虫不应该访问网站中的 /private/ 目录。这意味着该目录下的内容将不被搜索引擎索引。
- Disallow: /restricted/：类似地，这一行指示搜索引擎爬虫不应该访问网站中的 /restricted/ 目录。
- Allow: /public/：这一行是一个例外规则，表示搜索引擎爬虫允许访问 /public/ 目录。即使前面有 "Disallow" 规则，"Allow" 规则可以覆盖其限制，以确保特定目录或页面可以被爬取

## package.json

### dompurify

DOMPurify 是一个仅限 DOM 的，超快速的，超级宽容的 XSS 清理器，用于 HTML，MathML 和 SVG

> DOMPurify 可净化 HTML 并防止 XSS 攻击。您可以向 DOMPurify 提供包含脏 HTML 内容的字符串，它将返回一个包含干净 HTML 内容的字符串（除非另有配置）。DOMPurify 会清除所有包含危险 HTML 的内容，从而防止 XSS 攻击和其他龌龊行为。它还非常快。我们使用浏览器提供的技术，并将其转化为 XSS 过滤器。浏览器速度越快，DOMPurify 的速度也就越快。

### marked

markdown 解析器

### metascraper
一个库，使用Open Graph，Microdata，RDFa，Twitter Cards，JSON-LD，HTML等从网站轻松获取统一元数据

### remark
markdown的序列化加解析功能的处理器

