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



  $(document).ready(function(){
                if (Modernizr.draganddrop){
                    console.log("this boswer suppert drag")
                }
                else{
                    console.log("this broswer can not support drag")
                }
                function handleDragstart(e){
                    this.style.opacity = '0.2'
                }
                function handleDragOver(e){
                    if(e.preventDefault){
                        e.preventDefault()
                    }
                    e.dataTransfer.dropEffect = 'move'
                    return false
                }
                function handerDragEnter(e){
                    this.classList.add('over')
                }
                function handleDragLeave(e){
                    this.classList.remove('over')
                }
                function handleDrag(e){
                   console.log('drag',this)
                }
                 function handleDrop(e){
                    if(e.stopPropagation){
                        e.stopPropagation()
                    }
                    console.log(this)
                    return false
                }
                function handleDragEnd(e){
                    console.log(this)
                    $('.box').each(function(){
                        $(this).classList.remove('over')
                    })
                }
                $('.box').each(function(){
                  //  $(this)[0].addEventListener('dragstart',handleDragstart,false)
                  $(this).bind('dragstart',handleDragstart)
                   $(this).bind('dragenter',handerDragEnter)
                    $(this).bind('dragover',handleDragOver)
                     $(this).bind('dragleave',handleDragLeave)
            })
})