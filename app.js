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
    for(var i=0;i<=todolist.length-1;i++){
        const div = document.createElement("div")
        div.id = [i+1]
        const h1 = document.createElement("h1")
        const button = document.createElement("button")
        button.innerHTML = "Usuń"
        button.setAttribute("onclick", `usun(${todolist[i].ID})`)
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
        div.appendChild(Termin)
    }
}
async function dodaj(){
    const Termin = document.getElementById("divtermin").value
    const Nazwa = document.getElementById("divnazwa").value    
    const data = await fetch(`http://localhost:3000/add/${Nazwa}/:czy_wykonane/${Termin}`)
    getData()
}
async function usun(i){
const data = await fetch(`http://localhost:3000/del/${i}`)
await getData()

}