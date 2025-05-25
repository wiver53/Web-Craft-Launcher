const lang_zho_Hans = {
    lang: {
        code_iso_639_3: "zho-Hans",
        code_ietf: "zh-Hans",
        title: "简体中文"
    },
    ui: {
        confirm: "确定",
        cancel: "取消",
        ok: "好",
        yes: "是",
        no: "否",
        save: "保存",
        save_as: "另存为",
        staging: "暂存",
        close: "关闭",
        off: "关闭",
        on: "开启",
        disable: "禁用",
        enable: "启用",
        enable_all: "全部启用",
        edit: "编辑",
        send: "发送",
        reset: "重置",
        clear: "清空",
        delete: "删除",
        undo: "撤销",
        input: "输入",
        output: "输出",
        import: "导入",
        export: "导出",
        re_export: "重新导出",
        more_info: "了解详情",
        add: "添加",
        remove: "移除",
        move_up: "上移",
        move_down: "下移",
        move_left: "左移",
        move_right: "右移",
        audition: "试听",
        download: "下载",
        search: "搜索",
        empty: "（空）",
        missingno: {
            no_author: "未署名",
            no_name: "未命名"
        }
    },
    nav: {
        index: {
            title: "启动",
            description: "启动 Minecraft 1.8"
        },
        download: {
            title: "下载",
            description: "下载 Minecraft 1.8"
        },
        settings: {
            title: "设置",
            description: "配置启动器选项"
        },
        more: {
            title: "更多",
            description: "获取更多信息"
        }
    },
    header: {
        title: "Man! Craft Launcher",
        description: "一款网页版Minecraft 启动器"
    },
    index: {
        game_start: "启动游戏",
        game_starting: "正在启动...",
        game_started: "游戏已启动",
        game_stop: "结束游戏",
        game_stopping: "正在结束游戏...",
        description: "只需一步，立即开始",
        game_window_open_failed: "游戏窗口打开失败，请检查浏览器设置"
    },
    download: {
        description_1: "您不需要下载任何内容，当你打开网页时，我们就已经正在下载了",
        description_2: "友商还在为下载慢发愁,查看下方进度条可查看下载进度",
        description_3: "                         下载完成 
              100%       "
    },
    settings: {
        description: "事实上，我们已经为您准备好了最佳设置，您改动这些设置是毫无意义的！",
        game_window_size: "游戏窗口尺寸",
        game_javascript: "游戏 JavaScript",
        language: "启动器语言 / Launcher Language",
        process_priority: {
            title: "进程优先级",
            option: {
                auto: "浏览器智能控制",
                auto1: "浏览器自己控制",
                auto2: "浏览器看情况控制",
                auto3: "浏览器可以搞定一切"
            }
        },
        launcher_visibility: {
            title: "启动器可见性",
            option: {
                auto: "始终可见",
                auto1: "永远可见",
                auto2: "游戏启动后仍保持不变",
                auto3: "就算你把显示器砸了启动器也还在那里"
            }
        },
        game_memory: {
            title: "游戏内存",
            option: {
                auto: "自动配置",
                auto1: "弹性配置",
                auto2: "优雅配置",
                auto3: "智能配置"
            }
        },
        game_skin: {
            title: "游戏皮肤",
            option: {
                steve: "进入游戏后选择",
                steve2: "就算删除你都得进游戏后才能选择"
            }
        }
    },
    more: {
        about: {
            title: "关于 Net Craft Launcher",
            description_1: "本启动器出于玩笑而创作，仅供娱乐，内容纯属虚构。"
        },
        open_source: {
            title: "开源组件"
        },
        art_source: {
            title: "美术资源"
        },
        friendship_link: {
            title: "友情链接"
        }
    },
    footer: {
        description: "本启动器只是一个玩笑，它也许并不能为您提供所需要的服务"
    }
};

echoLiveSystem.registry.setLanguageRegistryValue(lang_zho_Hans);