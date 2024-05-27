// heat pump functions

// const btnReadMoreLoads = document.querySelector(".read-more-btn-1");
// const btnReadLessLoads = document.querySelector(".read-less-btn-1");
// const loadsArticle = document.querySelector(".article-loads");


// btnReadMoreLoads.addEventListener("click", (e) => {
//   if (btnReadMoreLoads.innerText === "Read More ...") {
//     loadsArticle.classList.toggle("show-more-1"); //show the text
//     // btnReadMoreLoads.classList.toggle("read-more-btn-1"); //remove the button
//     btnReadMoreLoads.style.display = "none";
//     // btnReadLessLoads.classList.toggle("show-less-1");
//   } 
//   btnReadLessLoads.addEventListener('click', (e) => {
//     loadsArticle.classList.toggle("show-more-1"); //collapse the text
//     btnReadMoreLoads.style.display = "in-line";
//   })

// });


const btnReadMoreLoads = document.querySelector(".btn-read-more-1");
const loadsArticle = document.querySelector(".article-loads");

btnReadMoreLoads.addEventListener("click", (e) => {
  loadsArticle.classList.toggle("show-more-1");
  console.log(`${btnReadMoreLoads.innerText}`)
  if (btnReadMoreLoads.innerText === "... Read More") {
    btnReadMoreLoads.innerText = "Read Less";
  } else {
    btnReadMoreLoads.innerText = "... Read More";
  }
});


const btnReadMoreEquip = document.querySelector(".btn-read-more-2");
const equipArticle = document.querySelector(".article-equipment");
btnReadMoreEquip.addEventListener("click", (e) => {
  equipArticle.classList.toggle("show-more-2");
  if (btnReadMoreEquip.innerText === "... Read More") {
    btnReadMoreEquip.innerText = "Read Less";
  } else {
    btnReadMoreEquip.innerText = "Read More";
  }
});

const btnReadMoreOp = document.querySelector(".btn-read-more-3");
const opArticle = document.querySelector(".article-operation");
btnReadMoreOp.addEventListener("click", (e) => {
  opArticle.classList.toggle("show-more-3");
  if (btnReadMoreOp.innerText === "... Read More") {
    btnReadMoreOp.innerText = "Read Less";
  } else {
    btnReadMoreOp.innerText = "Read More";
  }
});

  const btnReadMoreDesignTakeAway = document.querySelector(".btn-read-more-4");
  const designTakeAwayArticle = document.querySelector(".article-design-takeaway");
  btnReadMoreDesignTakeAway.addEventListener("click", (e) => {
    designTakeAwayArticle.classList.toggle("show-more-4");
    if (btnReadMoreDesignTakeAway.innerText === "... Read More") {
      btnReadMoreDesignTakeAway.innerText = "Read Less";
    } else {
      btnReadMoreDesignTakeAway.innerText = "Read More";
    }
});