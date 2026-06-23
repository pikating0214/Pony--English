# Pony 综合语法复习项目说明

## 项目

- 项目名称：Pony 综合语法复习
- 本地仓库：`/Users/miaomiaopeng/Documents/Rise- Teaching/Pony--English`
- GitHub 仓库：`https://github.com/pikating0214/Pony--English`
- 学生链接：`https://pikating0214.github.io/Pony--English/`
- 形式：纯 HTML、CSS 和 JavaScript 静态页面

## 文件结构

```text
Pony--English/
├── index.html
├── README.md
├── netlify.toml
└── word-quest-notes.md
```

`index.html` 是唯一的学生练习页面。旧的七天复习页面、Word Quest 页面、重复语法页面和旧生成脚本均已删除。

## 学习内容

- 来源：老师提供的6张复习题截图
- 总题量：82个单独作答空
- 共8个部分：
  - 疑问词
  - `there be` 句型
  - 祈使句、感叹句和句型辨析
  - 动词形式与时态
  - 生日短文
  - `do` 与 `play` 的形式变化
  - 北京旅行短文
  - Martin 火车故事

## 学生反馈

- 每次只呈现一个空，学生通过选择完成。
- 第一次选错后显示整句中文意思和判断步骤，不直接公布正确答案。
- 错误选项会被排除，学生可以继续尝试。
- 全部82题完成后，根据学生实际错误生成知识点总结。
- 页面提供重新开始功能。

## 隐私与技术

- 不收集学生姓名。
- 不保存或上传成绩。
- 不使用音频、API、外部服务或构建工具。
- 页面适配电脑、iPhone、iPad 和 Android 手机/平板。

## 本地检查

1. 打开 `index.html`。
2. 分别测试正确和错误选择。
3. 测试上一题、下一题和关卡选择。
4. 测试重新开始功能。
5. 检查全部完成后的错题知识点总结。
6. 使用手机宽度检查按钮和文字是否正常显示。

## GitHub 上传说明

- 目标分支：`main`
- GitHub Pages 从仓库根目录的 `index.html` 打开。
- 推送后等待 GitHub Pages 部署完成，再刷新学生链接。
