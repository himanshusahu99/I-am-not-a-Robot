let img1 = `<img data-ns-test = "img1" src="https://upload.wikimedia.org/wikipedia/en/7/7e/SHAKTIMAAN.gif" alt="" class="photo" onclick="find(this)">`;

let img2 = `<img data-ns-test = "img2" src="https://www.pinkvilla.com/imageresize/shaktimanunknownfactsmain_0.jpg?width=752&format=webp&t=pvorg" alt="" class="photo" onclick="find(this)">`;

let img3 = `<img data-ns-test = "img3" src="https://static.langimg.com/thumb/msid-74907545,imgsize-366195,width-700,height-525,resizemode-75/navbharat-times.jpg" alt="" class="photo" onclick="find(this)">`;

let img4 = `<img data-ns-test = "img4" src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/shaktiman-1462557537.jpg" alt="" class="photo" onclick="find(this)">`;

let img5 = `<img data-ns-test = "img5" src="https://english.cdn.zeenews.com/sites/default/files/2020/10/31/896463-mukesh-khanna.jpg" alt="" class="photo" onclick="find(this)">`;

let img6 = `<img data-ns-test = "img6" src="https://english.cdn.zeenews.com/sites/default/files/2020/10/31/896463-mukesh-khanna.jpg" alt="" class="photo" onclick="find(this)">`;

//function will generate random arr;
function random_generate() {
  let randomArr = [];
  let arr = [1, 2, 3, 4, 5];

  while (true) {
    let x = parseInt(Math.random() * 6) + 1;
    if (arr.length == 0) {
      break;
    }
    if (arr.indexOf(x) != -1) {
      randomArr.push(x);
      arr.splice(arr.indexOf(x), 1);
    } else {
      continue;
    }
  }

  //for the repeated img  randomlt generate duplicate img
  let y = parseInt(Math.random() * 5) + 1;
  randomArr.push(y);

  return randomArr;
}

//onload will arrange img acc to random arr;

window.onload = function () {
  let index = document.getElementById("main");
  let randomArr = random_generate();

  for (let i = 0; i < 6; i++) {
    if (randomArr[i] == 1) {
      index.insertAdjacentHTML("afterbegin", img1);
    } else if (randomArr[i] == 2) {
      index.insertAdjacentHTML("afterbegin", img2);
    } else if (randomArr[i] == 3) {
      index.insertAdjacentHTML("afterbegin", img3);
    } else if (randomArr[i] == 4) {
      index.insertAdjacentHTML("afterbegin", img4);
    } else if (randomArr[i] == 5) {
      index.insertAdjacentHTML("afterbegin", img5);
    } else {
      index.insertAdjacentHTML("afterbegin", img6);
    }
  }
};

function btnForResset() {
  let index = document.getElementById("main");
  let randomArr = random_generate();

  for (let i = 0; i < 6; i++) {
    if (randomArr[i] == 1) {
      index.insertAdjacentHTML("afterbegin", img1);
    } else if (randomArr[i] == 2) {
      index.insertAdjacentHTML("afterbegin", img2);
    } else if (randomArr[i] == 3) {
      index.insertAdjacentHTML("afterbegin", img3);
    } else if (randomArr[i] == 4) {
      index.insertAdjacentHTML("afterbegin", img4);
    } else if (randomArr[i] == 5) {
      index.insertAdjacentHTML("afterbegin", img5);
    } else {
      index.insertAdjacentHTML("afterbegin", img6);
    }
  }
}

let res = [];
let indexOfFirstClickedPhoto = 0;
let indexOfSecondClickedPhoto = 0;
let i = 1;
function find(element) {
  let x = element.getAttribute("data-ns-test");
  let mainDiv = document.getElementById("main");
  let parent = element.parentNode;
  let index = Array.prototype.indexOf.call(parent.children, element);
  // console.log(index);
  let resetButton = `<button id="reset" class="btn" onclick="reset()">reset</button>`;
  let verifyButton = `<button id="btn" onclick="verify()">Verify</button>`;

  if (i == 1) {
    res.push(x);
    indexOfFirstClickedPhoto = index;
    mainDiv.insertAdjacentHTML("beforeend", resetButton);
    i++;
  } else if (i == 2 && indexOfFirstClickedPhoto != index) {
    res.push(x);
    indexOfSecondClickedPhoto = index;
    mainDiv.insertAdjacentHTML("beforeend", verifyButton);
    i = 3; // so that button not render more then two times
  }

  console.log(res);
}

function reset() {
  let resetbtn = document.getElementById("reset");

  // res.clear();
  // console.log(i);
  //   resetbtn.parentElement.removeChild(e);
  if (res.length == 2) {
    let v = document.getElementById("btn");
    v.parentElement.removeChild(v);
  }
  res.splice(0, res.length);
  i--;

  alert("Done");
}

function verify() {
  let mainDiv = document.getElementById("main");
  let resetBtn = document.getElementById("reset");
  let v = document.getElementById("btn");
  //   let para1 = `<p id="para" class='msg'>You are a human. Congratulations!</p>`;
  //   let para2 = `<p id="para" class='msg'>We can't verify you as a human. You selected the non-identical tiles.</p>`;
  if (
    res[0] == res[1] &&
    indexOfFirstClickedPhoto != indexOfSecondClickedPhoto
  ) {
    alert("You are a human. Congratulations!");
    //     mainDiv.insertAdjacentHTML("beforeend", para1);
  } else {
    alert(
      "We can't verify you as a human. You selected the non-identical tiles."
    );
    //     mainDiv.insertAdjacentHTML("beforeend", para2);
    // console.log("you are wrong");
  }
  resetBtn.parentElement.removeChild(resetBtn);
  v.parentElement.removeChild(v);
}
