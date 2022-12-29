function dayNightMode(){
                var mybody = document.body;
                mybody.classList.toggle('mode2')
}

function couponCode(){
    document.getElementsByClassName('messageSender__coupon')[0].style.display = 'block';
    document.getElementById('main').style.opacity='0.5'
}

const closeCoupon = () => {
    document.getElementsByClassName('messageSender__coupon')[0].style.display = 'none';
    document.getElementById('main').style.opacity='1'
}