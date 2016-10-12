function Editor(selector) {
    this.$editer = $(selector)
    this.bindEvents_()
}

Editor.prototype.bindEvents_ = function() {
    this.$editer.on('click', 'button', function(e) {
        switch (e.currentTarget.id) {
            case 'bold':
                document.execCommand('bold')
                break
            case 'italic':
                document.execCommand('italic');
                break
            case 'underline':
                document.execCommand('underline');
                break
        }
    })
}