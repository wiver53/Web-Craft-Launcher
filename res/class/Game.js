class Game {
    constructor() {
        this.config = {
            window_width: 1280,
            window_height: 720
        };
        this.window = undefined;
        this.timer = {
            checkWindowClose: undefined
        }
    }

    updateConfig() {
        const config = localStorageManager.getItem('config');
        this.config = {
            ...this.config,
            ...config
        };
    }

    launchAnimation() {
        $('#game-start > .title').text($t('index.game_starting'));
        $('#game-start').attr('disabled', 'disabled');

        setTimeout(() => {
            $('#game-start > .title').text($t('index.game_started'));
            $('#game-start').removeAttr('disabled');
            $('#game-start').addClass('game-started');
            this.launch();

            setTimeout(() => {
                $('#game-start.game-started > .title').text($t('index.game_stop'));
            }, 3000);
        }, 1000);
    }

    launch() {
        this.updateConfig();

        // 当前浏览器窗口相对于屏幕的位置
        const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

        // 当前浏览器窗口的尺寸
        const windowWidth = window.outerWidth || document.documentElement.clientWidth;
        const windowHeight = window.outerHeight || document.documentElement.clientHeight;

        // 计算新窗口的位置
        const left = dualScreenLeft + (windowWidth - this.config.window_width) / 2;
        const top = dualScreenTop + (windowHeight - this.config.window_height) / 2;

        this.window = window.open('https://www.mc.js.cool/mc/1.8/', '_blank', `popup=true,width=${this.config.window_width},height=${this.config.window_height},top=${top},left=${left}`);

        // 处理新窗口未打开的情况
        if (this.window === null) {
            alert($t('index.game_window_open_failed'));
            return this.stop();
        }

        // 监听新窗口关闭事件
        this.timer.checkWindowClose = setInterval(() => {
            if (this.window.closed) {
                clearInterval(this.timer.checkWindowClose);
                this.stop();
            }
        }, 500);
    }

    stop() {
        if (this.window === undefined) return;
        this.window.close();
        this.window = undefined;
        $('#game-start > .title').text($t('index.game_stopping'));
        $('#game-start').attr('disabled', 'disabled');
        $('#game-start').removeClass('game-started');

        setTimeout(() => {
            $('#game-start > .title').text($t('index.game_start'));
            $('#game-start').removeAttr('disabled');
        }, 1000);
    }
}