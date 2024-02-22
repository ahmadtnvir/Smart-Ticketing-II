const allBtn = document.getElementsByClassName('seatBtn');
let count = 0;
let decreaseSeat = 8;


for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        if (count > 4) {
            alert('You can not select more then 4 seats!')
            return
        }
        setInnerText('initial-booked', count);


        decreaseSeat = decreaseSeat - 1;
        if (decreaseSeat < 0) {
            alert("No Seat Available");
            return
        }
        setInnerText('seats-left', decreaseSeat);


        e.target.setAttribute('disabled', false);
        e.target.parentNode.classList.add('bg-[#1DD100]');
        e.target.parentNode.classList.add('rounded-xl');



        const selectedContainer = document.getElementById('selected-container');
        const targetElementInnerText = e.target.innerText;


        const li = document.createElement('li')
        li.classList.add('flex');
        li.classList.add('gap-32');
        li.classList.add('justify-around');
        li.classList.add('items-center');

        const p1 = document.createElement('p');
        p1.innerText = targetElementInnerText;
        const p2 = document.createElement('p');
        p2.innerText = "Economy";
        const p3 = document.createElement('p');
        p3.innerText = '550';

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);

        selectedContainer.appendChild(li);

        getPrice('updated-price');
        getPrice('updated-total-price');

        const applyBtn = document.getElementById('applyBtn');
        applyBtn.removeAttribute('disabled', false);
    })
}

function couponCodeApply() {
    const couponInputField = document.getElementById('coupon-inputfield');
    const couponInputFieldValue = couponInputField.value;
    const totalCost = document.getElementById('updated-price').innerText;
    const convertedTotalCost = parseInt(totalCost);
    const new15Disc = convertedTotalCost * 0.15;
    const new15DiscTotalPrice = convertedTotalCost - new15Disc;
    const couple20Disc = convertedTotalCost * 0.2;
    const couple20DiscTotalPrice = convertedTotalCost - couple20Disc;

    couponInputField.value = '';
    const applyBtn = document.getElementById('applyBtn');
    applyBtn.setAttribute('disabled', false);


    if (couponInputFieldValue === 'NEW15') {
        setInnerText('updated-total-price', new15DiscTotalPrice);
        addClassItem('coupon-inputfield')
    } else if (couponInputFieldValue === 'Couple 20') {
        setInnerText('updated-total-price', couple20DiscTotalPrice);
        addClassItem('coupon-inputfield')
    } else if (couponInputFieldValue !== 'NEW15' || 'Couple 20') {
        alert('Input Proper Coupon Code');
    }
    else {
        setInnerText('updated-total-price', convertedTotalCost);

    }
    
}


// !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function addBackgroundColor(elementId) {
    document.getElementById(elementId).classList.add('bg-green-500')
}

function convertStrToNum(elementId) {
    const getElementId = document.getElementById(elementId);
    const getElementIdText = getElementId.innerText;
    const convertToNum = parseInt(getElementIdText);
    const integerNum = Math.round(convertToNum);
    return integerNum;
}

function getPrice(elementId) {
    const getElementId = document.getElementById(elementId);
    const getPriceInNumber = convertStrToNum(elementId);
    getElementId.innerText = getPriceInNumber + 550;
}



function addClassItem(elementId) {
    const getElementId = document.getElementById(elementId);
    const addClassList = getElementId.parentNode.classList.add('hidden')
    return addClassList;
}





