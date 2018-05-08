
var vocab,word;
var maximum_length=30;
var inp;

var emoticon_list=["థ౪థ)","(￣ヘ￣)","(╯︿╰)","(╥﹏╥)","(♡‿♡)","(╯_╰)","(￣▽￣)/","(*^ｖ^*)","❤","( ͡° ͜ʖ ͡°)","(^u^)","♪(^∇^*)","(⊙ˍ⊙)","(๑•̀ㅂ•́)و✧","(-_-)zzz","(╯‿╰)","(⌒‿⌒)","＼(￣▽￣)／","(*˘︶˘*).｡.:*♡"," (-_-)","(⌒_⌒;)","＼(^o^)／","(°_°)","(๑ơ ₃ ơ)♥","♥"," (°-°)","(*•̀ᴗ•́*)و ̑̑","(︶︹︺)","(／。＼)","(＞﹏＜)","(^_^)v","(⁍̴̀‿⁍̴́)","(╯°□°)╯︵ ┻━┻","(๑•̀ㅂ•́)و✧","(╥_╥)","(=_=)","(ˆ ڡ ˆ)","(ꐦ°᷄д°᷅)","(ノ*°▽°*)"," (*´﹃｀*)","└(￣ ￣└)(┘￣ ￣)┘","⊙ω⊙ ","︻┻┳══━一","(,,꒪꒫꒪,,)","( ‵▽′)ψ","(-_-;)","( ´•̥×•̥` )","♡ ","((d[-_-]b))","(￣y_￣)","(^_-)","(XωX)","( ﾟдﾟ)","(^○^)","(･ω<)☆"," (*￣︿￣)","(> ﹏ <)","ᕙ(•̀_•́)ᕗ","(ง •̀_•́)ง","♥","｡:.ﾟ♥.:｡","♥","(￣┰￣*)"," *★,°*:.☆(￣▽￣)/$:*.°★* 。"];


//  const model = new KerasJS.Model({
//   filepath: 'mymodel.bin',
//   gpu: true
// })  
  




var data = {}

data['name'] = $('#name').val()



$.ajax({
    type: 'POST',
    url: /your/url/,
    data: data,
    dataType: 'json',
    success: function(data) { 
    error: function(xhr, type) {
    }
});


function preload(){
vocab=loadJSON('vocabulary.json');//successfully! 
//model=tf.loadModel('model.json');
//console.log(11234);
}

function setup() {
  var cvs = createCanvas(windowWidth, windowHeight);
  cvs.parent('p5Canvas');
  cvs.id('myCanvas');
  inp = createInput('');
  inp.position(width*0.2,height*0.8);
  inp.size(width*0.6,height*0.05);
  button = createButton('Emoticon!');
  button.position(inp.x+inp.width/2,inp.y+inp.sheight+30);
  button.mousePressed(encode);
  console.log(11234);
 

}


function draw() {
  background(30);
}



function encode(){
	var examp=[[0,0,0,0,0,0,0,0,0,0,0,0,0]];
    console.log('translating');
    var sentence=inp.value().toLowerCase();//text
    //this is a simplified version ignoring all the symbols
    sentence = sentence.replace(/[^a-zA-Z0-9 ]/g,'');
    console.log(sentence);
    sentence_array=sentence.split(' ');
    console.log(sentence_array);
	//[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//30 wrods maximum
    
    
    for (i=0; i<min(maximum_length,sentence_array.length);i++){
    	console.log(sentence_array[i]);
     if (vocab.hasOwnProperty(sentence_array[i])){
     	sentences.push(sentence);
        examp[0][i]=vocab[sentence_array[i]];
     }
    }
    console.log(examp);
    loadandrun(examp);
    //const example1 = tf.tensor(examp);
    //example1.print();
   //	predicting(example1);//output is a list/array containing 64 numbers in different order
    console.log(outputData);


}



async function loadandrun(data) {
  //load model
  console.log('trying to load');
  await model.ready();
  console.log("loaded!");
  inputData= new Float32Array(data);
  outputData = await model.predict(inputData);

}





let predicting = (example) => {
      //make prediction
      const prediction = tfmodel.predict(example);
      //print the tensor holding our class predictions
      prediction.print();
      var p = prediction.dataSync();
      console.log(p);
      //get the index of the largest number in that tensor: argMax()
      //bring that from tensorflow to plain js: dataSync()
      //get the first (and only) element in that array: [0]
     
    }


    
 //loadandrun();


//current issue: the model cannot be loaded and therefore the tfmodel.predict cannot run