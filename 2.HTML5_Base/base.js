function Editor(selector) {
    this.$editer = $(selector)
    this.bindEvents_()
}

Editor.prototype.bindEvents_ = function() {
    this.$editer.on('click', 'button', function(e) {
        switch (e.currentTarget.id) {

        }
    })
}