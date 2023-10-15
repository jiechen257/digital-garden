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

