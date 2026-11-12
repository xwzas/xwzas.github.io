# 沉下去的黄昏 · 简约静态站

三个页面，全部文件平铺在仓库根目录，不建任何子文件夹。

## 文件清单

| 文件 | 作用 | 要不要改 |
|---|---|---|
| `index.html` | 首页：头像、关于我、作品卡片、友链 | 基本不用 |
| `联系.html` | 联系页 | 不用 |
| `留言.html` | 留言板（已填好你的 giscus 参数） | 不用 |
| `style.css` | 全部样式与动画 | 想换配色只改这里 |
| `site.js` | 头像、简介、社交、作品、友链、联系方式的数据 | **常改这个** |
| `marked.min.js` | 离线 Markdown 渲染库（预留，当前三页没用到） | 不用 |
| `avatar.svg` | 占位头像 | 换成你自己的图 |
| `favicon.svg` | 浏览器标签图标 | 可换 |

## 上传

把这 8 个文件全部传到仓库**根目录**，不要放进子文件夹。

然后到仓库 **Settings → Pages**：
- Source 选 **Deploy from a branch**
- Branch 选 `main`，目录选 `/ (root)`
- 保存

不用 Actions，不用 Jekyll，不用装任何东西。等约 1 分钟打开 `https://xwzas.github.io/`。

## 网址

| 输入 | 打开的是 |
|---|---|
| `xxx.com/` | 首页 |
| `xxx.com/联系.html` | 联系页 |
| `xxx.com/联系` | Pages 会自动补上 `.html`，同上 |
| `xxx.com/留言.html` / `xxx.com/留言` | 留言页 |

导航链接用的是 `联系.html` 这种写法，点过去地址栏就显示 `xxx.com/联系.html`，没有多余的结尾斜杠。

## 常改的地方（都在 site.js）

**换头像**：把 `avatar: 'avatar.svg'` 改成你的图片名，图片同样传根目录。

**改简介**：`about` 里一段一个字符串，`<b>` 可以加粗。

**改社交图标**：`socials` 里每项 `{ name, url, ico }`，`ico` 可选 `github` / `bili` / `douyin` / `kuaishou` / `xhs` / `link`。

**加友链**：`links` 里加一行 `{ name, desc, url }`。

**改作品卡片的仓库**：`works` 里的 `url` 现在指向 `https://github.com/xwzas/app`。

**填邮箱**：`contact` 第一项 `val` 填上邮箱地址，联系页就会多出一行，并带复制按钮。留空则不显示。

## 配色

打开 `style.css`，最上面 `:root` 里：

- `--blue` 主色，现在是 `#4A90D9`
- `--blue-soft` 主色浅一档，hover 时用
- `--dur` 淡入动画时长，想更快改小，比如 `.45s`

深色模式跟随系统，颜色在 `@media (prefers-color-scheme: dark)` 那段里改。

系统开了「减少动态效果」时，所有淡入动画自动关闭。

## 注意

- 留言板要仓库开着 **Discussions**：Settings → General → Features → 勾上 Discussions。另外 giscus 应用要已装到 `xwzas/xwzas.github.io` 这个仓库，这一步你已经配好了。
- 文件名保持中文原名 `联系.html`、`留言.html` 上传，别改名，不然 `site.js` 里的跳转要跟着改。
- `marked.min.js` 是留着的，以后想加文章功能时直接用，现在三个页面没加载它。
