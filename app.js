var todolist;
async function getData(){
    const data = await fetch("http://localhost:3000/select")
    todolist = await data.json()
    console.log(todolist)
    todo()
}
getData()
function todo(){
    document.getElementById("body").innerHTML = ""
    console.log("działa")
    for(i=0;i<=todolist.length-1;i++){
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const button = document.createElement("button")
        button.innerHTML = "Usuń"
        div.appendChild(button)
        h1.innerHTML = todolist[i].Nazwa
        div.appendChild(h1)
        document.getElementById("body").appendChild(div)
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        div.appendChild(checkbox)
        if(todolist[i].czy_wykonane == 1){
            checkbox.checked = true
        }
        const Termin = document.createElement("p")
        Termin.innerHTML = `Pozostałe dni: ${todolist[i].Termin}`
    }
}
async function dodaj(){
    const Termin = document.getElementById("divtermin").value
    const Nazwa = document.getElementById("divnazwa").value    
    const data = await fetch(`http://localhost:3000/add/${Nazwa}/:czy_wykonane/${Termin}`)
    getData()
}