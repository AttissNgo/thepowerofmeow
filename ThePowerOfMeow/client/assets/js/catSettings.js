
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "eyecolor" : 10,
    "pawscolor" : 10,
    "stripescolor" : 10,
    "eyeshape" : 1,
    "decorationshape" : 1,
    "bellycolor" : 10,
    "jowlscolor" : 10,
    "animation" :  1,
    "lastNum" :  1
    }

$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnaeye').html(defaultDNA.eyeColor);
  $('#dnapaws').html(defaultDNA.pawsColor);
  $('#dnastripes').html(defaultDNA.stripesColor);
  $('#dnaeyeshape').html(defaultDNA.eyesshape);
  $('#dnadecoration').html(defaultDNA.decorationshape);
  $('#dnabelly').html(defaultDNA.bellycolor);
  $('#dnajowls').html(defaultDNA.jowlscolor);
  $('#dnaanimation').html(defaultDNA.animation);

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnaeye').html()
    dna += $('#dnapaws').html()
    dna += $('#dnastripes').html()
    dna += $('#dnaeyeshape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnabelly').html()
    dna += $('#dnajowls').html()
    dna += $('#dnaanimation').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    eyeColor(colors[dna.eyecolor],dna.eyecolor)
    $('#eyecolor').val(dna.eyecolor)
    pawsColor(colors[dna.pawscolor],dna.pawscolor)
    $('#pawscolor').val(dna.pawscolor)
    stripesColor(colors[dna.stripescolor],dna.stripescolor)
    $('#stripescolor').val(dna.stripescolor)
    eyeVariation(dna.eyeshape)
    $('#eyeshape').val(dna.eyeshape)
    decorationVariation(dna.decorationshape)
    $('#decorationshape').val(dna.decorationshape)
    bellyColor(colorsB[dna.bellycolor],dna.bellycolor)
    $('#bellycolor').val(dna.bellycolor)
    jowlsColor(colorsB[dna.jowlscolor],dna.jowlscolor)
    $('#jowlscolor').val(dna.jowlscolor)
    animationVariation(dna.animation)
    $('#animationType').val(dna.animation)
    $("#eyeStyleSlider").hide();
    $("#stripesStyleSlider").hide();
    $("#bellySlider").hide();
    $("#jowlsSlider").hide();
    $("#animationSlider").hide();
}

$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#eyecolor').change(()=>{
    var colorVal = $('#eyecolor').val()
    eyeColor(colors[colorVal],colorVal)
})

$('#pawscolor').change(()=>{
    var colorVal = $('#pawscolor').val()
    pawsColor(colors[colorVal],colorVal)
})

$('#stripescolor').change(()=>{
    var colorVal = $('#stripescolor').val()
    stripesColor(colors[colorVal],colorVal)
})

$('#eyeshape').change(()=>{
    var shape = parseInt($('#eyeshape').val())
    eyeVariation(shape)
})

$('#decorationshape').change(()=>{
    var shape = parseInt($('#decorationshape').val())
    decorationVariation(shape)
})

$('#bellycolor').change(()=>{
    var colorVal = $('#bellycolor').val()
    bellyColor(colorsB[colorVal],colorVal)
})

$('#jowlscolor').change(()=>{
    var colorVal = $('#jowlscolor').val()
    jowlsColor(colorsB[colorVal],colorVal)
})

$('#animationType').change(()=>{
    var shape = parseInt($('#animationType').val())
    animationVariation(shape)
})

$('#ColorsTab').click(()=>{
    $("#headSlider").show()
    $("#eyesSlider").show()
    $("#pawsSlider").show()
    $("#stripesSlider").show()

    $("#eyeStyleSlider").hide();
    $("#stripesStyleSlider").hide();
    $("#bellySlider").hide();
    $("#jowlsSlider").hide();
    $("#animationSlider").hide();
    $('#ColorsTab').attr("disabled", true);
    $('#CattributesTab').attr("disabled", false);
})
$('#CattributesTab').click(()=>{
    $("#headSlider").hide()
    $("#eyesSlider").hide()
    $("#pawsSlider").hide()
    $("#stripesSlider").hide()

    $("#eyeStyleSlider").show();
    $("#stripesStyleSlider").show();
    $("#bellySlider").show();
    $("#jowlsSlider").show();
    $("#animationSlider").show();
    $('#CattributesTab').attr("disabled", true);
    $('#ColorsTab').attr("disabled", false);
})

$('#random').click(()=>{
    var ran_head = Math.floor(Math.random() * 89) + 10;
    headColor(colors[ran_head], ran_head)
    $("#bodycolor").val(ran_head)
    var ran_eye = Math.floor(Math.random() * 89) + 10;
    eyeColor(colors[ran_eye],ran_eye)
    $('#eyecolor').val(ran_eye)
    var ran_paw = Math.floor(Math.random() * 89) + 10;
    pawsColor(colors[ran_paw],ran_paw)
    $('#pawscolor').val(ran_paw)
    var ran_stripe = Math.floor(Math.random() * 89) + 10;
    stripesColor(colors[ran_stripe],ran_stripe)
    $('#stripescolor').val(ran_stripe)
    var ran_eyeshape = Math.floor(Math.random() * 8) + 1;
    eyeVariation(ran_eyeshape)
    $('#eyeshape').val(ran_eyeshape)
    var ran_stripeShape = Math.floor(Math.random() * 8) + 1;
    decorationVariation(ran_stripeShape)
    $('#decorationshape').val(ran_stripeShape)
    var ran_belly = Math.floor(Math.random() * 41) + 10;
    bellyColor(colorsB[ran_belly],ran_belly)
    $('#bellycolor').val(ran_belly)
    var ran_jowls = Math.floor(Math.random() * 41) + 10;
    jowlsColor(colorsB[ran_jowls],ran_jowls)
    $('#jowlscolor').val(ran_jowls)
    var ran_animation = Math.floor(Math.random() * 8) + 1;
    animationVariation(ran_animation)
    $('#animationType').val(ran_animation)
})

$('#reset').click(()=>{
    headColor(colors[defaultDNA.headcolor],defaultDNA.headcolor)
    $("#bodycolor").val(defaultDNA.headcolor)
    eyeColor(colors[defaultDNA.eyecolor],defaultDNA.eyecolor)
    $("#eyecolor").val(defaultDNA.eyecolor)
    pawsColor(colors[defaultDNA.pawscolor],defaultDNA.pawscolor)
    $("#pawscolor").val(defaultDNA.pawscolor)
    stripesColor(colors[defaultDNA.stripescolor],defaultDNA.stripescolor)
    $("#stripescolor").val(defaultDNA.stripescolor)
    eyeVariation(defaultDNA.eyeshape)
    $("#eyeshape").val(defaultDNA.eyeshape)
    decorationVariation(defaultDNA.decorationshape)
    $("#decorationshape").val(defaultDNA.decorationshape)
    bellyColor(colorsB[defaultDNA.bellycolor],defaultDNA.bellycolor)
    $("#bellycolor").val(defaultDNA.bellycolor)
    jowlsColor(colorsB[defaultDNA.jowlscolor],defaultDNA.jowlscolor)
    $("#jowlscolor").val(defaultDNA.jowlscolor)
    animationVariation(defaultDNA.animation)
    $("#animationType").val(defaultDNA.animation)
})
