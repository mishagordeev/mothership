function loadData(section) {
    firebase.database().ref(section).get().then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val()
            let root = document.getElementById('root')
            root.innerHTML = ""

            showCaption(root, data.name)
            showSelectors(root, data.selectors)

            let contentView = document.createElement('div')
            contentView.id = "content_view"
            root.appendChild(contentView)

            document.addEventListener('click', function(e) {
                if (e.target && Array.from(data.selectors, element => element.id).includes(e.target.id) && !e.target.classList.contains('selected')) {
                    data.selectors.forEach(item => {
                        if (item.id == e.target.id) {
                            showContent(data.content, item)
                        }
                    })
                }
            });
            
            showContent(data.content, data.selectors[0])
            showFooter()
        }
    })
}

function showCaption(root, name) {
    let view = document.createElement('h1')
    view.innerHTML = name
    root.appendChild(view)
}

function showSelectors(root, selectors) {
    let view = document.createElement('div')
    view.classList.add('categories')
    view.id = 'categories'
    selectors.forEach(selector => {
        let element = document.createElement('span')
        element.innerHTML = selector.name
        element.id = selector.id
        view.appendChild(element)
    })
    root.appendChild(view)
    document.getElementById(selectors[0].id).classList.add('selected')
}

function showContent(content, selector) {
    let contentView = document.getElementById('content_view')
    contentView.innerHTML = ""

    selector.categories.forEach(category => {
        let categoriesView = document.createElement('h2')
        categoriesView.innerHTML = category
        contentView.appendChild(categoriesView)

        content.forEach(item => {
            if (item[selector.id] == category) {
                
                let block = document.createElement("div")
                block.classList.add('block')

                let caption = document.createElement("h3")
                caption.innerHTML = `${item.name}`

                let sub = document.createElement("p")
                sub.innerHTML = `${item.authors}`

                let other = document.createElement("p")
                let link = document.createElement("span")
                link.innerHTML = `<a target='_blank' href="${item.src}">${item.file}</a>  ${item.size}`
                other.appendChild(link)
                let date = document.createElement("span")
                date.style.cssText = "float: right;"
                date.innerHTML = `${item.date}`
                other.appendChild(date)

                block.appendChild(caption)
                block.appendChild(sub)
                block.appendChild(other)

                contentView.appendChild(block)
            }

            document.getElementById('categories').querySelectorAll('span').forEach(element => {
                element.classList.remove('selected')
            })

            document.getElementById(selector.id).classList.add('selected')
        })
    })
}