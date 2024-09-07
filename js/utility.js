function getSeatNumber(){
    const seatNumberString = "ABCDEFGHIJ";
    const seatNumberArray = seatNumberString.split('');
    
    const seatNumber = [];
    for(let i = 0; i<10; i++){
        for(let j =1; j<=4; j++){
            seatNumber.push(seatNumberArray[i]+j)


        }
    }
    return seatNumber;
}

function addBackgroundColorToSelectedSeat(seatId){
    const seatBackground = document.getElementById(seatId);
    seatBackground.classList.add('bg-[#1DD100]');
}

function getSelectedSeatInSeatArea(seatId){
    const seatArea = document.getElementById('seat')
    const seat = document.createElement('p');
    seat.innerText = seatId;
    seatArea.append(seat);

}
function getSelectedSeatClassInSeatArea(){
    const classArea = document.getElementById('class')
    const classTag = document.createElement('p');
    classTag.innerText = 'Economy';
    classArea.append(classTag);

}
function getSelectedSeatPriceInSeatArea(){
    const priceArea = document.getElementById('price')
    const priceTag = document.createElement('p');
    priceTag.innerText = '550';
    priceArea.append(priceTag);

}
function getDiscount(discount){
    const priceArea = document.getElementById('total-price')
    const priceTag = document.createElement('p');
    priceTag.innerText = discount;
    priceArea.append(priceTag);

}
function getDiscountText(){
    const priceArea = document.getElementById('total-text')
    const priceTag = document.createElement('p');
    priceTag.innerText = 'Discount';
    priceArea.append(priceTag);

}
function toRemoveCuponSection(cuponAreaID){
    const cuponArea = document.getElementById(cuponAreaID);
    cuponArea.classList.add('hidden');
}
function toGetGrandTaka(TotalPrice,discount){
    const grandtaka = TotalPrice - discount;
    return grandtaka;
}
function getTotalPriceInPriceArea(AreaOfprice,totalPrice){
    const areaOfPriceDiv = document.getElementById(AreaOfprice);
    areaOfPriceDiv.innerText = totalPrice;

}
function getInnerText(left){
    const leftSeat = document.getElementById(left);
    const seatText = leftSeat.innerText;
    const leftSeatNumber = parseInt(seatText);
    return leftSeatNumber;
}
function setInnerText(text,value){
    const currentSeatText = document.getElementById(text);
    console.log(text,value);
    currentSeatText.innerText = value-1;

}
function setGranInnerText(text,value){
    const currentSeatText = document.getElementById(text);
    console.log(text,value);
    currentSeatText.innerText = value;

}
function toCalculateSeatPrice(price,count){
    console.log(price,count);
    let priceOfSeat = price*count;
    return priceOfSeat;
}
function toCheckUniqueSeatId(){
    for (const element of object) {
        
    }
}
function counter(countValue){
    const countvalue = countValue + 1;
    return countvalue;

}
function toStoreCounterAndTotal(counting,totalprc){
        return [counting,totalprc];
}
