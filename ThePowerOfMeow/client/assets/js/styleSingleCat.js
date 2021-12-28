function singleHeadColor(dna, id) {
    $('#head'+ id +', #chest'+ id).css('background', '#' + dna)
}

function singleEyeColor(dna, id) {
    $('#eyeLeft'+ id + ', #eyeRight' +id).css('background', '#' + dna)
}

function singlePawsColor(dna, id) {
    $('#leftBackpaw'+ id +
    ', #rightBackpaw'+ id +
    ', #rightPaw'+ id +
    ', #leftPaw'+ id +
    ', #tail'+ id +
    ', #leftear'+ id +
    ', #rightear'+ id).css('background', '#' + dna)
}

function singleStripesColor(dna, id) {
    $('#bodystripes'+ id +
    ', #headstripes'+ id +
    ', #headstripe1'+ id +
    ', #headstripe2'+ id +
    ', #headstripe3'+ id +
    ', #leftstripe1'+ id +
    ', #leftstripe2'+ id +
    ', #leftstripe3'+ id +
    ', #rightstripe1'+ id +
    ', #rightstripe2'+ id +
    ', #rightstripe3'+ id).css('background', '#' + dna)
}

function singleEyeVariation(num, id) {

    switch (num) {
        case 1:
            $('#pupilL'+ id + ', #pupilR' + id).css({"background-color": "#000000"})
            $('#glintxL'+ id + ', #glintxR' + id).css({"opacity": "0%"})
            $('#glint3L'+ id + ', #glint3R' + id).css({"opacity": "15%"})
            $('#eyelidR'+ id + ', #eyelidL' + id).css({"opacity": "0%"})
            $('#eyeLeft'+ id + ', #eyeRight' + id).css({"border-radius": "50% 50% 50% 50%"})
            $('#glintL'+ id).css({"right": "8px"})
            $('#glint2L'+ id).css({"right": "14px"})
            $('#glint3L'+ id).css({"left": "14px"})
            $('#glint2L'+ id + ', #glint2R' + id).css({"opacity": "85%"})
            $('#glintL'+ id + ', #glintR' + id).css({"opacity": "100%"})
            break
        case 2:
            $('#pupilL'+ id + ', #pupilR' + id).css({"background-color": "#ffffff"})
            break
        case 3:
            $('#glintxL'+ id + ', #glintxR' + id).css({"opacity": "95%"})
            $('#glint3L'+ id + ', #glint3R' + id).css({"opacity": "45%"})
            break
        case 4:
            $('#eyelidR'+ id + ', #eyelidL' + id).css({"opacity": "97%"})
            break
        case 5:
            $('#eyeLeft'+ id).css({"border-radius": "50% 50% 50% 30%"})
            $('#eyeRight' + id).css({"border-radius": "50% 50% 30% 50%"})
            break
        case 6:
            $('#glintL'+ id).css({"right": "28px"})
            $('#glint2L'+ id).css({"right": "26px"})
            $('#glint3L'+ id).css({"left": "34px"})
            break
        case 7:
            $('#glint3L'+ id + ', #glint3R' + id).css({"opacity": "0%"})
            $('#glint2L'+ id + ', #glint2R' + id).css({"opacity": "0%"})
            $('#glintL'+ id + ', #glintR' + id).css({"opacity": "10%"})
            break
        default:
            $('#pupilL'+ id + ', #pupilR' + id).css({"background-color": "#000000"})
            $('#glintxL'+ id + ', #glintxR' + id).css({"opacity": "0%"})
            $('#glint3L'+ id + ', #glint3R' + id).css({"opacity": "15%"})
            $('#eyelidR'+ id + ', #eyelidL' + id).css({"opacity": "0%"})
            $('#eyeLeft'+ id + ', #eyeRight' + id).css({"border-radius": "50% 50% 50% 50%"})
            $('#glintL'+ id).css({"right": "8px"})
            $('#glint2L'+ id).css({"right": "14px"})
            $('#glint3L'+ id).css({"left": "14px"})
            $('#glint2L'+ id + ', #glint2R' + id).css({"opacity": "85%"})
            $('#glintL'+ id + ', #glintR' + id).css({"opacity": "100%"})
            break
    }
}

function singleDecorationVariation(num, id) {

    switch (num) {
        case 1:
            $('#headstripes' + id).css({"opacity": "25%"})
            $('#headstripe1' + id).css({"height" : "44px"})
            $('#bodystripes' + id).css({"opacity": "25%"})
            $('#headstripe2' + id).css({"transform": "rotate(0deg)", "left": "41%", "height" : "33px"})
            $('#headstripe3' + id).css({"transform": "rotate(0deg)", "left": "56%", "height" : "33px"})
            $('#rightstripe1' + id).css({"width": "43px"})
            $('#rightstripe2' + id).css({"width": "34px"})
            $('#rightstripe3' + id).css({"width": "30px"})
            $('#leftstripe1' + id).css({"width": "43px"})
            $('#leftstripe2' + id).css({"width": "34px"})
            $('#leftstripe3' + id).css({"width": "30px"})
            break
        case 2:
            $('#headstripes' + id).css({"opacity": "55%"})
            $('#bodystripes' + id).css({"opacity": "50%"})
            $('#headstripe2' + id).css({"transform": "rotate(25deg)", "left": "39%"})
            $('#headstripe3' + id).css({"transform": "rotate(-25deg)", "left": "58%"})
            break
        case 3:
            $('#headstripes' + id).css({"opacity": "45%"})
            $('#headstripe1' + id).css({"height" : "64px"})
            $('#headstripe2' + id).css({"height" : "53px"})
            $('#headstripe3' + id).css({"height" : "53px"})
            $('#bodystripes' + id).css({"opacity": "40%"})
            $('#leftstripe1' + id).css({"width": "63px"})
            $('#leftstripe2' + id).css({"width": "54px"})
            $('#leftstripe3' + id).css({"width": "40px"})
            $('#rightstripe1' + id).css({"width": "63px"})
            $('#rightstripe2' + id).css({"width": "54px"})
            $('#rightstripe3' + id).css({"width": "40px"})
            break
        case 4:
            $('#headstripes' + id).css({"opacity": "1%"})
            $('#headstripe1' + id).css({"opacity": "1%"})
            $('#headstripe2' + id).css({"opacity": "1%"})
            $('#headstripe3' + id).css({"opacity": "1%"})
            $('#bodystripes' + id).css({"opacity": "1%"})
            $('#leftstripe1' + id).css({"opacity": "1%"})
            $('#leftstripe2' + id).css({"opacity": "1%"})
            $('#leftstripe3' + id).css({"opacity": "1%"})
            $('#rightstripe1' + id).css({"opacity": "1%"})
            $('#rightstripe2' + id).css({"opacity": "1%"})
            $('#rightstripe3' + id).css({"opacity": "1%"})
            break
        case 5:
            $('#headstripes' + id).css({"opacity": "91%"})
            $('#headstripe1' + id).css({"opacity": "91%"})
            $('#headstripe2' + id).css({"opacity": "91%"})
            $('#headstripe3' + id).css({"opacity": "91%"})
            $('#bodystripes' + id).css({"opacity": "91%"})
            $('#leftstripe1' + id).css({"opacity": "91%"})
            $('#leftstripe2' + id).css({"opacity": "91%"})
            $('#leftstripe3' + id).css({"opacity": "91%"})
            $('#rightstripe1' + id).css({"opacity": "91%"})
            $('#rightstripe2' + id).css({"opacity": "91%"})
            $('#rightstripe3' + id).css({"opacity": "91%"})
            break
        case 6:
            $('#headstripes' + id).css({"opacity": "45%"})
            $('#headstripe1' + id).css({"opacity": "45%"})
            $('#headstripe2' + id).css({"opacity": "45%"})
            $('#headstripe3' + id).css({"opacity": "45%"})
            $('#bodystripes' + id).css({"opacity": "1%"})
            $('#leftstripe1' + id).css({"opacity": "1%"})
            $('#leftstripe2' + id).css({"opacity": "1%"})
            $('#leftstripe3' + id).css({"opacity": "1%"})
            $('#rightstripe1' + id).css({"opacity": "1%"})
            $('#rightstripe2' + id).css({"opacity": "1%"})
            $('#rightstripe3' + id).css({"opacity": "1%"})
            break
        case 7:
            $('#headstripes' + id).css({"opacity": "1%"})
            $('#headstripe1' + id).css({"opacity": "1%"})
            $('#headstripe2' + id).css({"opacity": "1%"})
            $('#headstripe3' + id).css({"opacity": "1%"})
            $('#bodystripes' + id).css({"opacity": "45%"})
            $('#leftstripe1' + id).css({"opacity": "45%"})
            $('#leftstripe2' + id).css({"opacity": "45%"})
            $('#leftstripe3' + id).css({"opacity": "45%"})
            $('#rightstripe1' + id).css({"opacity": "45%"})
            $('#rightstripe2' + id).css({"opacity": "45%"})
            $('#rightstripe3' + id).css({"opacity": "45%"})
            break
        default:
            $('#headstripes' + id).css({"opacity": "25%"})
            $('#headstripe1' + id).css({"height" : "44px"})
            $('#bodystripes' + id).css({"opacity": "25%"})
            $('#headstripe2' + id).css({"transform": "rotate(0deg)", "left": "41%", "height" : "33px"})
            $('#headstripe3' + id).css({"transform": "rotate(0deg)", "left": "56%", "height" : "33px"})
            $('#rightstripe1' + id).css({"width": "43px"})
            $('#rightstripe2' + id).css({"width": "34px"})
            $('#rightstripe3' + id).css({"width": "30px"})
            $('#leftstripe1' + id).css({"width": "43px"})
            $('#leftstripe2' + id).css({"width": "34px"})
            $('#leftstripe3' + id).css({"width": "30px"})
            break
    }
}

function singleBellyColor(dna, id) {
    $('#belly' + id).css('background', '#' + dna)
}

function singleJowlsColor(dna, id) {
    $('#jowlL' + id + ', #jowlR' + id).css('background', '#' + dna)
}

function singleAnimationVariation(dna, id) {

    switch (dna) {
        case 1:
            $('#head' + id).removeClass('movingHead')
            $('#tail' + id).removeClass('movingTail')
            $('#nose' + id).removeClass('movingNose')
            $('#rightPaw' + id).removeClass('movingPaw1')
            $('#leftPaw' + id).removeClass('movingPaw2')
            $('#whiskL' + id).removeClass('movingWhisker')
            $('#whiskR' + id).removeClass('movingWhisker')
            $('#jowlL' + id).removeClass('movingWhiskerB')
            $('#jowlR' + id).removeClass('movingWhiskerB')
            $('#pupilL' + id).removeClass('hypnotique')
            $('#pupilR' + id).removeClass('hypnotique')
            break
        case 2:
            $('#head' + id).addClass('movingHead')
            break
        case 3:
            $('#tail' + id).addClass('movingTail')
            break
        case 4:
            $('#nose' + id).addClass('movingNose')
            break
        case 5:
            $('#rightPaw' + id).addClass('movingPaw1')
            $('#leftPaw' + id).addClass('movingPaw2')
            break
        case 6:
            $('#whiskL' + id).addClass('movingWhisker')
            $('#whiskR' + id).addClass('movingWhisker')
            $('#jowlL' + id).addClass('movingWhiskerB')
            $('#jowlR' + id).addClass('movingWhiskerB')
            break
        case 7:
            $('#pupilL' + id).addClass('hypnotique')
            $('#pupilR' + id).addClass('hypnotique')
            break
        default:
            $('#head' + id).removeClass('movingHead')
            $('#tail' + id).removeClass('movingTail')
            $('#nose' + id).removeClass('movingNose')
            $('#rightPaw' + id).removeClass('movingPaw1')
            $('#leftPaw' + id).removeClass('movingPaw2')
            $('#whiskL' + id).removeClass('movingWhisker')
            $('#whiskR' + id).removeClass('movingWhisker')
            $('#jowlL' + id).removeClass('movingWhiskerB')
            $('#jowlR' + id).removeClass('movingWhiskerB')
            $('#pupilL' + id).removeClass('hypnotique')
            $('#pupilR' + id).removeClass('hypnotique')
            break
    }
}
