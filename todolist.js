const list = document.getElementById("list")

//mengetahui target input value user
function onFormSubmit(testing) {
    testing.preventDefault()//biar tidak reload
    const value_input = testing.target.children[0].value // untuk menampilkan input value user
    
    list.appendChild(createListItem(value_input))
}

function deletItem(testing2){
    // membuang elemen semuanya yg div telah dibuat
    const parent =  testing2.target.parentElement
    list.removeChild(parent)
}


// // nambah list value input
function createListItem(value_input) {
     //membuat elemen baru
    const item = document.createElement("div") //parrent
    item.innerHTML = 
    //<div>
    `
        <div class = "list-item-detail">
            <input type="checkbox" />
            <span>${value_input}</span>
        </div>
        <button class='todo' onclick="deletItem(event)">Hapus</button>
    ` 
    //</div>
    //(childern)
    item.setAttribute('class','list-item')
    return item
}

function  range(array){
    let terbesar = Math.max(...array)
    let terkecil = Math.min(...array)
    return terbesar-terkecil
}
let tes = range([1,2,3])
console.log(tes)