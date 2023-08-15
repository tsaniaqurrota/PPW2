function tampil() {
    var nama = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    
    document.getElementById("thanks").innerHTML="<b>Thank for your response. Your data recorded as :</b>"
    document.getElementById("myname").innerHTML="Hello, my name is " + "<b>" + nama + "</b>"
    document.getElementById("contactme").innerHTML="Please contact me through : " + "<b>" + email + "</b>"
    document.getElementById("saysomething").innerHTML="I want to say about : " + "<br>" + "<b>" + message + "</b>"


}

function calculate() {
    var hari = 365;
    var botolplastik = parseInt(document.getElementById("botolplastik").value)
    var sedotan = parseInt(document.getElementById("sedotan").value)
    var rokok = parseInt(document.getElementById("rokok").value)
    var newItemElements = document.querySelectorAll("#itemList input");

    var newItemTotal = 0;
    for (var i = 0; i < newItemElements.length; i++) {
        var newItemValue = parseInt(newItemElements[i].value);
                newItemTotal += newItemValue;

        // if (!isNaN(newItemValue)) {
        //     newItemTotal += newItemValue;
        // }
    }

    var hasil = (botolplastik+sedotan+rokok+newItemTotal)*hari;
    document.getElementById("hasil").innerHTML="Jumlah sampah plastik per tahunnya " + "<b>" + hasil + "</b>"


}

function addItem() {
    var form = document.getElementById('additem');
    form.style.display = 'block';
}

function saveNewItem() {
    var input = document.getElementById('additem1');
    var item = input.value;
    console.log('Item yang disimpan: ' + item);
    displayItem(item);
}

function displayItem(item) {
    var itemList = document.getElementById('itemList');
    
    var newItem = document.createElement('div');
    newItem.style.display = 'flex';
    newItem.style.alignItems = 'center';
    newItem.style.marginBottom = '10px';
    
    var label = document.createElement('label');
    label.textContent = item;
    label.style.marginRight = '50px';
    label.setAttribute('for', item.toLowerCase().replace(/\s/g, ''));
    newItem.appendChild(label);
    
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', item.toLowerCase().replace(/\s/g, ''));
    newItem.appendChild(input);
    
    itemList.appendChild(newItem);

}




  

    
    
    
