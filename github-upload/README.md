# 施工通知自动生成器

手机和电脑都可以使用的施工通知 PDF 生成页面。

## 功能

- 输入施工日期、施工项目、物件信息后自动排版
- 自动生成 A4 施工通知书
- 支持手机打开和横向滑动预览
- 点击「保存 PDF」后，通过浏览器打印功能保存为 PDF
- 纯 HTML 文件，无需安装服务器或数据库

## 使用方法

1. 打开 `index.html`
2. 填写物件信息、施工日期、施工项目、施工会社和联系人
3. 检查右侧或下方的 A4 预览
4. 点击「保存 PDF」
5. 在浏览器打印窗口选择「保存为 PDF」

## 放到 GitHub Pages

1. 把本项目上传到 GitHub 仓库
2. 打开仓库的 `Settings`
3. 进入 `Pages`
4. Source 选择 `Deploy from a branch`
5. Branch 选择 `main`，目录选择 `/root`
6. 保存后等待 GitHub 生成访问链接

## 文件说明

- `index.html`：正式入口页面，GitHub Pages 会打开这个文件
- `outputs/施工通知自动生成器.html`：备份输出文件
- `.nojekyll`：让 GitHub Pages 直接发布静态文件

