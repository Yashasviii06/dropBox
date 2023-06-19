const button = document.getElementById('btn');
const inpt = document.getElementById('display');
const num = Math.random().toString(16).slice(2,8);
const ran_num = `#${num.padEnd(6,0)}`;



button.addEventListener('click',color_gen);
function color_gen(){
    const num = Math.random().toString(16).slice(2,8);
    const ran_num = `#${num.padEnd(6,0)}`;
    console.log(ran_num);

    inpt.value = ran_num;
    document.body.style.backgroundColor = ran_num;
      
}
 