const content = document.getElementById("content");

setTimeout(() => {
  content.innerText = "10";
  setTimeout(() => {
    content.innerText = "9";
    setTimeout(() => {
      content.innerText = "8";
      setTimeout(() => {
        content.innerText = "7";
        setTimeout(() => {
         content.innerText = "6";
          setTimeout(() => {
            content.innerText = "5";
            setTimeout(() => {
              content.innerText = "4";
              setTimeout(() => {
                content.innerText = "3";
                setTimeout(() => {
                  content.innerText = "2";
                  setTimeout(() => {
                    content.innerText = "1";
                    setTimeout(() => {
                      content.innerText =
                        "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);