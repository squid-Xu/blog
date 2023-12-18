module.exports = {
    base: "/blog/",
    title: "麻辣鱿鱼徐",
    description: "麻辣鱿鱼徐",
    // 简洁化URL，即我们访问文件时不需要加后缀了，直接 /xxx/xxx即可，不要/xxx/xxx.md
    cleanUrls: true,
    // 大部分主要的主题配置都在里面了
    themeConfig: {
        // 定义右侧菜单导航
        nav: [
            { text: "简介", link: "/guide/" },
            {
                text: "前端",             //导航标签的名字
                items: [                  //这种格式是有下拉菜单的版本
                    { text: "基础", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
                    { text: "Vue", link: "/articles/vue/index" },
                    { text: "React", link: "/articles/react/index" },
                    { text: "小程序", link: "/articles/mini/index" },
                    { text: "Electron", link: "/articles/electron/index" },
                    { text: "Web3D", link: "/articles/web3d/index" },
                    { text: "其他", link: "/articles/other/vitepress/index" },
                ],
            },
            { text: "算法", link: "/leetcode/LEET_CODE题解/47. 全排列 II" },   //这种是没有下拉菜单的版本
            { text: "项目案例", link: "/intent/" },
            {
                text: '总结',
                items: [
                    { text: '2023', link: '/summarize/2023/' },
                    { text: '2024', link: '/summarize/2024/' }
                ]
            },
        ],
        // 定义侧边栏
        sidebar: {
            "/guide/": [
                {
                    text: "快速开始",
                    collapsed: false,  // collapsed设置默认是否收缩，true为默认收缩
                    items: [
                        { text: "安装", link: "/starter/starter-install" },
                        { text: "设置", link: "/starter/starter-configuration" },
                    ],
                },
                {
                    text: "快速卸载",
                    collapsed: true,
                    items: [{ text: "卸载指南", link: "/starter/starter-uninstall" }],
                },
            ],
        },
        // 最右侧的友情链接小图标
        socialLinks: [{ icon: "github", link: "https://github.com/squid-Xu" }],
        // 底部栏定义的内容
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2020-present squid-Xu'
        },
        // 添加搜索框
        search: {
            provider: 'local'
        },
        // 定义文章底部按钮对应的文本标题
        docFooter: {
            prev: "上一篇文章",
            next: "下一篇文章",
        },
        // 编辑链接，具体显示情况见下图
        editLink: {
            pattern: "https://github.com/squid-Xu/blog/edit/main/docs/:path",
            text: "于GitHub中编辑这一段内容",
        },
        lastUpdatedText: "最后更新", // string
    },
    // aside，设定为false将关闭右侧栏，文档内容会填充剩余空白部分
    aside: true,
    // outline设置为deep可以解析2-6层深度的标题嵌套
    outline: "deep",
    // 暂时没发现这个属性有啥用
    outlineBadges: true,
    // 设置所有aside的标题
    outlineTitle: "本页目录",
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: true, // string | boolean
}