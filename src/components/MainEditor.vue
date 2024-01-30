<template>
    <div class="editor">
        <textarea ref="sqlText" style="width: 100%;height: 100%;align-content: center;"></textarea>
    </div>
</template>

<script>
export default {
    name: 'MainEditor',
    props: {
        msg: String
    },
    data() {
        return {
            editor: null
        }
    },
    methods: {
        /**
         * 提示元数据
         */
        hintMeta(cm) {
            console.log('hintMeta', cm)
        },
        /**
         * 格式化SQL文本
         */
        formatSql(cm) {
            console.log('formatSql', cm)
        },
        /**
         * 提示建表语句
         * @param cm
         * @returns {boolean}
         */
        showTableSql(cm) {
            console.log('showTableSql', cm)
        },
        /**
         * 设置编辑器提示表名及字段功能
         */
        editorHintSettings() {
        },
        /**
         * 展示sql保存记录
         */
        sqlTextSelect() {
        }
    },
    mounted() {
        const _this = this
        this.editor = this.$CodeMirror.fromTextArea(this.$refs.sqlText, {
            mode: {
                name: 'text/x-plsql'
            },
            theme: 'material',
            matchBrackets: true,
            styleActiveLine: true,
            indentWithTabs: true,
            smartIndent: true,
            lineNumbers: true,
            spellcheck: true,
            lineWrapping: true,
            resetSelectionOnContextMenu: true,
            extraKeys: {
                'Ctrl': 'autocomplete',
                'Tab': function (cm) {
                    let spaces = Array(cm.getOption('indentUnit') + 1).join(' ')
                    cm.replaceSelection(spaces)
                },
                'Alt-X': function (cm) {
                    _this.hintMeta(cm)
                },
                'Alt-C': function (cm) {
                    _this.formatSql(cm)
                },
                'Alt-Z': function (cm) {
                    _this.showTableSql(cm)
                }
            },
            hintOptions: { completeSingle: false },
        })
        /**
         * 自动提示
         */
        // 监听编辑器内容变化事件
        this.editor.on('keypress', (cm, change) => {
            if (change.origin !== 'setValue' && change.origin !== 'complete') {
                // 如果是用户手动输入导致的内容变化，则自动弹出提示框
                cm.showHint({
                    hint: this.$CodeMirror.hint.sql,
                    completeSingle: false
                })
            }
        })
    }
}
</script>

<style scoped>
.editor {
    border: 1px solid;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #bbb;
    font-size: 20px;
    margin: 5px;
}
</style>
