var firebaseConfig = {
  apiKey: "AIzaSyCkwWjZq0zQp2t4R-W0nXqdLJDWOtPn2wc",
  authDomain: "siegel-hair.firebaseapp.com",
  databaseURL: "https://siegel-hair.firebaseio.com",
  projectId: "siegel-hair",
  storageBucket: "siegel-hair.appspot.com",
  messagingSenderId: "219633055518",
  appId: "1:219633055518:web:145d5fb59853ab982e7b0f",
  measurementId: "G-SWTFCTQN1S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

const colors = [
  "#e96572",
  "#e97a7a",
  "#ea8f79",
  "#f19873",
  "#fbb578",
  "#f6cd90",
  "#feea98",
  "#eceaa7",
  "#e0ecb8",
  "#bedda4",
];

// const data = [
//   { c: 8, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 9, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 6, v: 4, f: 4, h: 4 },
//   { c: 5, v: 3, f: 2, h: 9 },
//   { c: 5, v: 7, f: 8, h: 3 },
//   { c: 1, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 3, v: 4, f: 4, h: 4 },
//   { c: 4, v: 3, f: 2, h: 9 },
//   { c: 5, v: 7, f: 8, h: 3 },
//   { c: 8, v: 6, f: 3, h: 5 },
//   { c: 8, v: 8, f: 10, h: 6 },
//   { c: 7, v: 4, f: 4, h: 4 },
//   { c: 3, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 9, v: 6, f: 3, h: 5 },
//   { c: 10, v: 8, f: 10, h: 6 },
//   { c: 5, v: 4, f: 4, h: 4 },
//   { c: 1, v: 3, f: 2, h: 9 },
//   { c: 8, v: 7, f: 8, h: 3 },
//   { c: 6, v: 6, f: 3, h: 5 },
//   { c: 4, v: 8, f: 10, h: 6 },
//   { c: 8, v: 4, f: 4, h: 4 },
//   { c: 1, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 4, v: 6, f: 3, h: 5 },
//   { c: 5, v: 8, f: 10, h: 6 },
//   { c: 10, v: 4, f: 4, h: 4 },
//   { c: 6, v: 3, f: 2, h: 9 },
//   { c: 10, v: 7, f: 8, h: 3 },
//   { c: 8, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 8, v: 4, f: 4, h: 4 },
//   { c: 7, v: 3, f: 2, h: 9 },
//   { c: 7, v: 7, f: 8, h: 3 },
//   { c: 7, v: 6, f: 3, h: 5 },
//   { c: 3, v: 8, f: 10, h: 6 },
//   { c: 10, v: 4, f: 4, h: 4 },
//   { c: 5, v: 3, f: 2, h: 9 },
//   { c: 8, v: 7, f: 8, h: 3 },
//   { c: 7, v: 6, f: 3, h: 5 },
//   { c: 1, v: 8, f: 10, h: 6 },
//   { c: 10, v: 4, f: 4, h: 4 },
//   { c: 4, v: 3, f: 2, h: 9 },
//   { c: 3, v: 7, f: 8, h: 3 },
//   { c: 1, v: 6, f: 3, h: 5 },
//   { c: 6, v: 8, f: 10, h: 6 },
//   { c: 5, v: 4, f: 4, h: 4 },
//   { c: 5, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 3, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 1, v: 4, f: 4, h: 4 },
//   { c: 5, v: 3, f: 2, h: 9 },
//   { c: 6, v: 7, f: 8, h: 3 },
//   { c: 8, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 5, v: 4, f: 4, h: 4 },
//   { c: 8, v: 3, f: 2, h: 9 },
//   { c: 8, v: 7, f: 8, h: 3 },
//   { c: 1, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 6, v: 4, f: 4, h: 4 },
//   { c: 8, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 9, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 6, v: 4, f: 4, h: 4 },
//   { c: 8, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 9, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 6, v: 4, f: 4, h: 4 },
//   { c: 8, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 9, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 6, v: 4, f: 4, h: 4 },
//   { c: 8, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 9, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 6, v: 4, f: 4, h: 4 },
//   { c: 8, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 9, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 6, v: 4, f: 4, h: 4 },
//   { c: 8, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 9, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 6, v: 4, f: 4, h: 4 },
//   { c: 8, v: 3, f: 2, h: 9 },
//   { c: 4, v: 7, f: 8, h: 3 },
//   { c: 9, v: 6, f: 3, h: 5 },
//   { c: 2, v: 8, f: 10, h: 6 },
//   { c: 6, v: 4, f: 4, h: 4 },
// ];
// console.log(db);
(async () => {
  // FETCH DATA
  document.getElementById("overlay").classList.add("overlay-open");
  // const res = await fetch("https://bella-hair-backend.herokuapp.com/data");
  // const data = await res.json();
  const data = await db
    .ref("/")
    .once("value")
    .then((snapshot) => snapshot.val());
  document.getElementById("overlay").classList.remove("overlay-open");
  document.querySelector(".loading").classList.add("hidden");
  // console.log(data);
  // GET AVERAGES
  let avgV = 0;
  let avgH = 0;
  let avgF = 0;
  let avgC = 0;
  data.forEach(({ c, v, f, h }) => {
    avgV += v;
    avgH += h;
    avgC += c;
    avgF += f;
  });
  avgV = Math.floor(avgV / 100);
  avgH = Math.floor(avgH / 100);
  avgC = Math.floor(avgC / 100);
  avgF = Math.floor(avgF / 100);

  gsap.registerPlugin(MorphSVGPlugin);
  var mouth = gsap.timeline({ paused: true });
  var leftEye = gsap.timeline({ paused: true });
  var rightEye = gsap.timeline({ paused: true });
  mouth.to("#mouth--sad", { morphSVG: "#mouth--happy", duration: 1 });
  leftEye.to("#left-eye--sad", {
    morphSVG: "#left-eye--happy",
    duration: 1,
  });
  rightEye.to("#right-eye--sad", {
    morphSVG: "#right-eye--happy",
    duration: 1,
  });

  let { c, f, v, h } = data[0];
  let state = {
    title: "DAY 1",
    t: 0,
    c,
    f,
    v,
    h,
  };

  // BAR CHART
  const updateBar = (c, f, v, h, t) => {
    const cBar = document.querySelector("#cBar");
    const fBar = document.querySelector("#fBar");
    const vBar = document.querySelector("#vBar");
    const hBar = document.querySelector("#hBar");
    const tBar = document.querySelector("#tBar");
    cBar.style.width = c * 30;
    vBar.style.width = v * 30;
    fBar.style.width = f * 30;
    hBar.style.width = h * 30;
    tBar.style.width = (t + 1) * 3;
    document.querySelector("#vVal").innerHTML = v;
    document.querySelector("#fVal").innerHTML = f;
    document.querySelector("#cVal").innerHTML = c;
    document.querySelector("#hVal").innerHTML = h;
    document.querySelector("#tVal").innerHTML = t + 1;
  };

  const update = () => {
    const { c, f, v, h, title, t } = state;
    const volume = v.toString();
    gsap.to("#circle", {
      attr: { r: (volume + 25) / 6 + 190 },
    });
    gsap.to("#cFilter", {
      attr: { baseFrequency: c / 100 },
    });
    gsap.to("#fFilter", {
      attr: { scale: f * 15 },
    });
    const happiness = h / 10 - 0.1;
    mouth.tweenTo(happiness);
    leftEye.tweenTo(happiness);
    rightEye.tweenTo(happiness);
    document.body.style.background = colors[h - 1];
    document.getElementById("timeline-title").innerHTML = title;
    updateBar(c, f, v, h, t);
    updateSliders(c, f, v, h, t);
  };

  $("#cSlider").slider({ min: 1, max: 10 });
  $("#cSlider").on("slide", (e, ui) => {
    state.c = ui.value;
    state.title = "Messin' around :)";
    update();
  });
  $("#hSlider").slider({ min: 1, max: 10 });
  $("#hSlider").on("slide", (e, ui) => {
    state.h = ui.value;
    state.title = "Messin' around :)";
    update();
  });
  $("#fSlider").slider({ min: 1, max: 10 });
  $("#fSlider").on("slide", (e, ui) => {
    state.f = ui.value;
    state.title = "Messin' around :)";
    update();
  });
  $("#vSlider").slider({ min: 1, max: 10 });
  $("#vSlider").on("slide", (e, ui) => {
    state.v = ui.value;
    state.title = "Messin' around :)";
    update();
  });
  $("#tSlider").slider({ min: 0, max: 99 });
  $("#tSlider").on("slide", (e, ui) => {
    state.t = ui.value;
    state.title = `DAY ${ui.value}`;
    updateTime();
  });

  const updateSliders = (c, f, v, h, t) => {
    $("#vSlider").slider("value", v);
    $("#fSlider").slider("value", f);
    $("#cSlider").slider("value", c);
    $("#hSlider").slider("value", h);
    $("#tSlider").slider("value", t);
  };

  // AVERAGE
  const setAverage = () => {
    state.c = avgC;
    state.f = avgF;
    state.h = avgH;
    state.v = avgV;
    state.title = "Average";
    update();
  };
  document.querySelector("#average").addEventListener("click", setAverage);

  const updateTime = () => {
    const { c, v, f, h } = data[state.t];
    state = {
      t: state.t,
      title: `DAY ${state.t + 1}`,
      c,
      v,
      f,
      h,
    };
    update();
  };

  const random = () => {
    const random = Math.floor(Math.random() * 100);
    const { c, v, f, h } = data[random];
    state = {
      t: random,
      title: `DAY ${random + 1}`,
      c,
      v,
      f,
      h,
    };
    update();
  };
  document.querySelector("#random").addEventListener("click", random);

  //ARROWS
  const step = (type) => {
    if (type === "NEXT") {
      if (state.t < data.length - 1) {
        state.t++;
      }
    }
    if (type === "PREV") {
      if (state.t > 0) {
        state.t--;
      }
    }
    updateTime();
  };
  document
    .querySelector("#right")
    .addEventListener("click", () => step("NEXT"));
  document.querySelector("#left").addEventListener("click", () => step("PREV"));

  openOverlay = () => {
    document.querySelector("#overlay").classList.add("overlay-open");
  };

  closeOverlay = () => {
    document.querySelector("#overlay").classList.remove("overlay-open");
  };

  //STATS
  const closeStats = () => {
    closeOverlay();
    document
      .querySelector("#close-stats")
      .removeEventListener("click", closeStats);
    document.querySelector("#overlay").removeEventListener("click", closeStats);
    document.querySelector("#stats-modal").classList.remove("open");
  };
  const openStats = () => {
    document.querySelector("#stats-modal").classList.add("open");
    document
      .querySelector("#close-stats")
      .addEventListener("click", closeStats);
    document.querySelector("#overlay").addEventListener("click", closeStats);
    openOverlay();
  };
  document.querySelector("#stats").addEventListener("click", openStats);

  //INFO
  const closeInfo = () => {
    closeOverlay();
    document
      .querySelector("#close-info")
      .removeEventListener("click", closeInfo);
    document.querySelector("#overlay").removeEventListener("click", closeInfo);
    document.querySelector("#info-modal").classList.remove("open");
  };
  const openInfo = () => {
    document.querySelector("#info-modal").classList.add("open");
    document.querySelector("#close-info").addEventListener("click", closeInfo);
    document.querySelector("#overlay").addEventListener("click", closeInfo);
    openOverlay();
  };
  document.querySelector("#info").addEventListener("click", openInfo);

  //PLOTS
  const vCount = {
    v1: 0,
    v2: 0,
    v3: 0,
    v4: 0,
    v5: 0,
    v6: 0,
    v7: 0,
    v8: 0,
    v9: 0,
    v10: 0,
  };
  const fCount = {
    f1: 0,
    f2: 0,
    f3: 0,
    f4: 0,
    f5: 0,
    f6: 0,
    f7: 0,
    f8: 0,
    f9: 0,
    f10: 0,
  };
  const cCount = {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0,
    c10: 0,
  };
  const hCount = {
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    h7: 0,
    h8: 0,
    h9: 0,
    h10: 0,
  };
  data.forEach(({ v, c, h, f }, i) => {
    cCount[`c${c}`]++;
    vCount[`v${v}`]++;
    hCount[`h${h}`]++;
    fCount[`f${f}`]++;
    const vPoint = document.createElement("div");
    vPoint.classList.add("point");
    vPoint.style.left = `${i + 5}%`;
    vPoint.style.bottom = `${v * 10 + 5}%`;
    document.getElementById("vScatter").appendChild(vPoint);
    const hPoint = document.createElement("div");
    hPoint.classList.add("point");
    hPoint.style.left = `${i + 5}%`;
    hPoint.style.bottom = `${h * 10 + 5}%`;
    document.getElementById("hScatter").appendChild(hPoint);
    const cPoint = document.createElement("div");
    cPoint.classList.add("point");
    cPoint.style.left = `${i + 5}%`;
    cPoint.style.bottom = `${c * 10 + 5}%`;
    document.getElementById("cScatter").appendChild(cPoint);
    const fPoint = document.createElement("div");
    fPoint.classList.add("point");
    fPoint.style.left = `${i + 5}%`;
    fPoint.style.bottom = `${f * 10 + 5}%`;
    document.getElementById("fScatter").appendChild(fPoint);
  });

  const maxC = Math.max(...Object.values(cCount));
  Object.keys(cCount).forEach((key, i) => {
    const val = cCount[key];
    const bar = document.createElement("div");
    bar.classList.add("val");
    bar.style.left = `${i * 10 + 10}%`;
    bar.style.height = `${(val / maxC) * 100}%`;
    document.getElementById("cBar-plot").appendChild(bar);
  });
  const maxV = Math.max(...Object.values(vCount));
  Object.keys(vCount).forEach((key, i) => {
    const val = vCount[key];
    const bar = document.createElement("div");
    bar.classList.add("val");
    bar.style.left = `${i * 10 + 10}%`;
    bar.style.height = `${(val / maxV) * 100}%`;
    document.getElementById("vBar-plot").appendChild(bar);
  });
  const maxF = Math.max(...Object.values(fCount));
  Object.keys(fCount).forEach((key, i) => {
    const val = fCount[key];
    const bar = document.createElement("div");
    bar.classList.add("val");
    bar.style.left = `${i * 10 + 10}%`;
    bar.style.height = `${(val / maxF) * 100}%`;
    document.getElementById("fBar-plot").appendChild(bar);
  });
  const maxH = Math.max(...Object.values(hCount));
  Object.keys(hCount).forEach((key, i) => {
    const val = hCount[key];
    const bar = document.createElement("div");
    bar.classList.add("val");
    bar.style.left = `${i * 10 + 10}%`;
    bar.style.height = `${(val / maxH) * 100}%`;
    document.getElementById("hBar-plot").appendChild(bar);
  });

  document.addEventListener("keydown", ({ key }) => {
    if (key === "ArrowLeft") step("PREV");
    if (key === "ArrowRight") step("NEXT");
  });

  update();
})();
