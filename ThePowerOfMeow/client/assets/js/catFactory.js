
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyeColor(color,code) {
    $('.cat__eye_left, .cat__eye_right').css('background', '#' + color)  //This changes the color of the cat
    $('#eyecode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeye').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function pawsColor(color,code) {
    $('.cat__backpaw, .cat__frontpaw, .cat__tail, .cat__ear_left, .cat__ear_right').css('background', '#' + color)  //This changes the color of the cat
    $('#pawscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnapaws').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function stripesColor(color,code) {
    $('.cat__body_stripes, .cat__head_stripes').css('background', '#' + color)  //This changes the color of the cat
    $('#stripescode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnastripes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function bellyColor(color,code) {
    $('.cat__belly').css('background', '#' + color)  //This changes the color of the cat
    $('#bellycode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabelly').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function jowlsColor(color,code) {
    $('.cat__jowls_left, .cat__jowls_right').css('background', '#' + color)  //This changes the color of the cat
    $('#jowlscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnajowls').html(code) //This updates the body color part of the DNA that is displayed below the cat
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnaeyeshape').html(num) //update slider display
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic') //sets slider badge to 'basic'
            break
        case 2:
            normalEyes()//to initialize
            $('#eyeName').html('Ghostboi')
            eyesType2()
            break
        case 3:
            normalEyes()//to initialize
            $('#eyeName').html('Mr. Sparkles')
            eyesType3()
            break
        case 4:
            normalEyes()//to initialize
            $('#eyeName').html('Grumpy')
            eyesType4()
            break
        case 5:
            normalEyes()//to initialize
            $('#eyeName').html('Sadeyes')
            eyesType5()
            break
        case 6:
            normalEyes()//to initialize
            $('#eyeName').html('Wonky')
            eyesType6()
            break
        case 7:
            normalEyes()//to initialize
            $('#eyeName').html('Dark Lord')
            eyesType7()
            break
        default:
            normalEyes()
            $('#eyeName').html('Basic') //sets slider badge to 'basic'
            break
    }
}

function decorationVariation(num) {

    $('#dnadecoration').html(num)

    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
        case 2:
            normaldecoration()
            $('#decorationName').html('fleur de lys')
            decorationType2()
            break
        case 3:
            normaldecoration()
            $('#decorationName').html('long stripes')
            decorationType3()
            break
        case 4:
            normaldecoration()
            $('#decorationName').html('no stripes')
            decorationType4()
            break
        case 5:
            normaldecoration()
            $('#decorationName').html('dark stripes')
            decorationType5()
            break
        case 6:
            normaldecoration()
            $('#decorationName').html('head only')
            decorationType6()
            break
        case 7:
            normaldecoration()
            $('#decorationName').html('body only')
            decorationType7()
            break
        default:
            normaldecoration()
            break
    }
}

function animationVariation(num) {

    $('#dnaanimation').html(num)

    switch (num) {
        case 1:
            $('#animationName').html('No animation')
            noAnimation()
            break
        case 2:
            $('#animationName').html('Head shake')
            noAnimation()
            animationType2()
            break
        case 3:
            $('#animationName').html('Tail wag')
            noAnimation()
            animationType3()
            break
        case 4:
            $('#animationName').html('Sniffles')
            noAnimation()
            animationType4()
            break
        case 5:
            $('#animationName').html('Paws')
            noAnimation()
            animationType5()
            break
        case 6:
            $('#animationName').html('Bristles')
            noAnimation()
            animationType6()
            break
        case 7:
            $('#animationName').html('Hypnotique')
            noAnimation()
            animationType7()
            break
        default:
            noAnimation()
            break
    }
}

function normalEyes() {
    $('.cat__pupil_left, .cat__pupil_right').css({"background-color": "#000000"})
    $('.cat__glintExtra_left, .cat__glintExtra_right').css({"opacity": "0%"})
    $('.cat__glint3_left, .cat__glint3_right').css({"opacity": "15%"})
    $('.cat__eyelid_right, .cat__eyelid_left').css({"opacity": "0%"})
    $('.cat__eye_right, .cat__eye_left').css({"border-radius": "50% 50% 50% 50%"})
    $('.cat__glint_left').css({"right": "8px"})
    $('.cat__glint2_left').css({"right": "14px"})
    $('.cat__glint3_left').css({"left": "14px"})
    $('.cat__glint2_left, .cat__glint2_right').css({"opacity": "85%"})
    $('.cat__glint_left, .cat__glint_right').css({"opacity": "100%"})
}
function eyesType2() {
    $('.cat__pupil_left, .cat__pupil_right').css({"background-color": "#ffffff"})
}
function eyesType3() {
    $('.cat__glintExtra_left, .cat__glintExtra_right').css({"opacity": "95%"})
    $('.cat__glint3_left, .cat__glint3_right').css({"opacity": "45%"})
}
function eyesType4() {
    $('.cat__eyelid_right, .cat__eyelid_left').css({"opacity": "97%"})
}
function eyesType5() {
    $('.cat__eye_left').css({"border-radius": "50% 50% 50% 30%"})
    $('.cat__eye_right').css({"border-radius": "50% 50% 30% 50%"})
}
function eyesType6() {
    $('.cat__glint_left').css({"right": "28px"})
    $('.cat__glint2_left').css({"right": "26px"})
    $('.cat__glint3_left').css({"left": "34px"})
}
function eyesType7() {
    $('.cat__glint3_left, .cat__glint3_right').css({"opacity": "0%"})
    $('.cat__glint2_left, .cat__glint2_right').css({"opacity": "0%"})
    $('.cat__glint_left, .cat__glint_right').css({"opacity": "10%"})
}



function normaldecoration() {
    $('.cat__head_stripes').css({"opacity": "25%"})
    $('.cat__head_stripe1').css({"height" : "44px"})
    $('.cat__body_stripes').css({"opacity": "25%"})
    $('.cat__head_stripe2').css({"transform": "rotate(0deg)", "left": "41%", "height" : "33px"})
    $('.cat__head_stripe3').css({"transform": "rotate(0deg)", "left": "56%", "height" : "33px"})
    $('.cat__right_stripe1').css({"width": "43px"})
    $('.cat__right_stripe2').css({"width": "34px"})
    $('.cat__right_stripe3').css({"width": "30px"})
    $('.cat__left_stripe1').css({"width": "43px"})
    $('.cat__left_stripe2').css({"width": "34px"})
    $('.cat__left_stripe3').css({"width": "30px"})
}
function decorationType2() {

    $('.cat__head_stripes').css({"opacity": "55%"})
    $('.cat__body_stripes').css({"opacity": "50%"})
    $('.cat__head_stripe2').css({"transform": "rotate(25deg)", "left": "39%"})
    $('.cat__head_stripe3').css({"transform": "rotate(-25deg)", "left": "58%"})
}
function decorationType3() {
    $('.cat__head_stripes').css({"opacity": "45%"})
    $('.cat__head_stripe1').css({"height" : "64px"})
    $('.cat__head_stripe2').css({"height" : "53px"})
    $('.cat__head_stripe3').css({"height" : "53px"})
    $('.cat__body_stripes').css({"opacity": "40%"})
    $('.cat__left_stripe1').css({"width": "63px"})
    $('.cat__left_stripe2').css({"width": "54px"})
    $('.cat__left_stripe3').css({"width": "40px"})
    $('.cat__right_stripe1').css({"width": "63px"})
    $('.cat__right_stripe2').css({"width": "54px"})
    $('.cat__right_stripe3').css({"width": "40px"})
}
function decorationType4() {
    $('.cat__head_stripes').css({"opacity": "1%"})
    $('.cat__body_stripes').css({"opacity": "1%"})
}
function decorationType5() {
    $('.cat__head_stripes').css({"opacity": "91%"})
    $('.cat__body_stripes').css({"opacity": "91%"})
}
function decorationType6() {
    $('.cat__head_stripes').css({"opacity": "45%"})
    $('.cat__body_stripes').css({"opacity": "1%"})
}
function decorationType7() {
    $('.cat__head_stripes').css({"opacity": "1%"})
    $('.cat__body_stripes').css({"opacity": "45%"})
}

function noAnimation() {
    $('#head').removeClass('movingHead');
    $('#tail').removeClass('movingTail');
    $('#nose').removeClass('movingNose');
    $('#rightPaw').removeClass('movingPaw1');
    $('#leftPaw').removeClass('movingPaw2');
    $('#whiskL').removeClass('movingWhisker');
    $('#whiskR').removeClass('movingWhisker');
    $('#jowlL').removeClass('movingWhiskerB');
    $('#jowlR').removeClass('movingWhiskerB');
    $('#pupilL').removeClass('hypnotique');
    $('#pupilR').removeClass('hypnotique');
}
function animationType2() {
    $('#head').addClass('movingHead');
}
function animationType3() {
    $('#tail').addClass('movingTail');
}
function animationType4() {
    $('#nose').addClass('movingNose');
}
function animationType5() {
    $('#rightPaw').addClass('movingPaw1');
    $('#leftPaw').addClass('movingPaw2');
}
function animationType6() {
    $('#whiskL').addClass('movingWhisker');
    $('#whiskR').addClass('movingWhisker');
    $('#jowlL').addClass('movingWhiskerB');
    $('#jowlR').addClass('movingWhiskerB');
}
function animationType7() {
    $('#pupilL').addClass('hypnotique');
    $('#pupilR').addClass('hypnotique');
}

// eye following cursor
const closer = 5;
const further = -5;

document.addEventListener('mousemove', (e) => {
    let positionX = e.pageX;
    let positionY = e.pageY;

    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let moveX = (positionX - width / 2) / (width / 2) * closer;
    let moveY = (positionY - height / 2) / (height / 2) * closer;

    document.querySelector('.cat__eye_left').style.transform = 'translate(' + moveX + 'px,' + moveY + 'px)';
    document.querySelector('.cat__eye_right').style.transform = 'translate(' + moveX + 'px,' + moveY + 'px)';

    let cursor = document.querySelector('.cursor');
    cursor.setAttribute('style', 'top:' + positionY + 'px; left:' + positionX + 'px');
}, false);
