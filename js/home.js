let counts = 0;
let temp = 0;
const discountArray = [];

const seatIdArray = [];


function clickToSelectSeat(seatId) {

    const seat = getSeatNumber();
    
    
     
    const uniqueSeatId = seatIdArray.includes(seatId)
    
    if (uniqueSeatId == false && counts <= 3) {
        seatIdArray.push(seatId);
        const length = seatIdArray.length;
        const uniqueSeat = seatIdArray[length - 1];

        addBackgroundColorToSelectedSeat(uniqueSeat);
        getSelectedSeatInSeatArea(uniqueSeat);
        getSelectedSeatClassInSeatArea(uniqueSeat);
        getSelectedSeatPriceInSeatArea(uniqueSeat);
        const leftSeatNum = getInnerText('left-seat')
        setInnerText('left-seat', leftSeatNum)
       

        counts  = counter(counts)
        
        const seatPrice = getInnerText('price');
        const total = toCalculateSeatPrice(seatPrice, counts)
        getTotalPriceInPriceArea('total-price',total)
        getTotalPriceInPriceArea('grand-total-price',total)



        // function cuponPriceEventHandler(event){
        //     const inputText = event.target.value;
        //     console.log(inputText);
           
        
            
        
        // if(inputText == 'NEW15'){
        //     const cuponButton = document.getElementById('cupon-button')
        //     cuponButton.removeAttribute('disabled')
        //     cuponButton.addEventListener('click',function(){
        //         const discount = total*.15
        //          discountArray.push(discount);
        //          console.log(discountArray[discountArray.length-1]);

        //         // const totalDiscount = discountArray[discountArray.length-1]
        //         // console.log(totalDiscount)
        //     })
        
        
        // }
        // else{
        //     cuponButton.setAttribute('disabled',true)
        // }
        
        //  }
         
        
         

}




}
function cuponPriceEventHandler(event){
    const inputText = event.target.value;
    console.log(inputText);
    
if(inputText == 'NEW15'){
    const cuponButton = document.getElementById('cupon-button')
    const TotalPrice = getInnerText('total-price');
    cuponButton.removeAttribute('disabled')
    cuponButton.addEventListener('click',function(){
        const discount = TotalPrice*.15
        getDiscount(discount);
        getDiscountText();
        toRemoveCuponSection('cupon-div')
        const grandTaka = toGetGrandTaka(TotalPrice,discount);
        setGranInnerText('grand-total-price',grandTaka)
        
         

        // const totalDiscount = discountArray[discountArray.length-1]
        // console.log(totalDiscount)
    })


}
else{
    cuponButton.setAttribute('disabled',true)
}

 }



document.getElementById('cupun-input').addEventListener('keyup',cuponPriceEventHandler);



// function cuponPriceEventHandler(event){
//     const inputText = event.target.value;
//     console.log(inputText);
   

    
// const cuponButton = document.getElementById('cupon-button')
// if(inputText == 'NEW15'){
//     cuponButton.removeAttribute('disabled')
    
//     const discountPrice = total*.15;
//     console.log(discountPrice);
//     getDiscount(discountPrice)

// }
// else{
//     cuponButton.setAttribute('disabled',true)
// }

//  }

//  document.getElementById('cupun-input').addEventListener('keyup',cuponPriceEventHandler);
document.getElementById('passenger-phone').addEventListener('keyup',function(event){
    const phone = event.target.value;
    const TotalPrice = getInnerText('total-price');
    const nextButton = document.getElementById('next-button');
    console.log(TotalPrice);

    if(phone.length == 11 && TotalPrice>0 ){
        
        nextButton.removeAttribute('disabled')
    }
    else{
        nextButton.setAttribute('disabled',true);
    }
})



