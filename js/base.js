function Editor(selector) {
    console.log(selector)
    this.$editer = $(selector)
    console.log(this.$editer.html())

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