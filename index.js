let services = []
const washBtnEl = document.getElementById("wash-btn");
const mowBtnEl = document.getElementById("mow-btn");
const pullBtnEl = document.getElementById("pull-btn");
const itemListsEl = document.getElementById("items-list")
const totalRowEl = document.getElementById("total-row")
const invoiceEl = document.querySelector("#invoice-container")

render()

washBtnEl.addEventListener('click', function(){
    const service = 'Wash Car'
    const price = 10
    addDataToServices(service, price)
})

mowBtnEl.addEventListener('click', function(){
    const service = 'Mow Lawn'
    const price = 20
    addDataToServices(service, price)
})

pullBtnEl.addEventListener('click', function(){
    const service = 'Pull Weeds'
    const price = 30
    addDataToServices(service, price)
})

invoiceEl.addEventListener("click", function(){
    services = []
    render()
})

function addDataToServices(service, price){
    //some is a great function for checking the existence of things in arrays:
    const found = services.some(el => el.service === service);
    if(!found){
        services.push({
            service: service,
            price: price
        })
        render()
    }
}

function render(){
    let items = ''
    let total = 0
    let totalRow = ''

    for (let i = 0; i < services.length; i++){
        total += services[i].price
        items += `<li>
            <p>
                ${services[i].service}
                <button type="button" onclick="remove('${services[i].service}')">remove</button>
            </p>
            <p>${services[i].price}</p>
        </li>
        `
    }
    if(total){
        totalRow = `
            <span>We accept cash, credit card or PayPal</span>
            <span id="total">$${total}</span>
        `
    } else {
        totalRow = `
            <span></span>
            <span id="total">$${total}</span>
        `
    }
    itemListsEl.innerHTML = items
    totalRowEl.innerHTML = totalRow
}

function remove(service) {
    services = services.filter(function(s) {
        return s.service !== service
    })
    render()
}