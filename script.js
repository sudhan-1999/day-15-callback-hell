
let para = document.createElement("p");
para.className = "demo";
document.body.append(para);

setTimeout(() => {
    document.querySelector(".demo").innerHTML = "10";
    setTimeout(() => {
        document.querySelector(".demo").innerHTML = "9";
        setTimeout(() => {
            document.querySelector(".demo").innerHTML = "8";
            setTimeout(() => {
                document.querySelector(".demo").innerHTML = "7";
                setTimeout(() => {
                    document.querySelector(".demo").innerHTML = "6";
                    setTimeout(() => {
                        document.querySelector(".demo").innerHTML = "5";
                        setTimeout(() => {
                            document.querySelector(".demo").innerHTML = "4";
                            setTimeout(() => {
                                document.querySelector(".demo").innerHTML = "3";
                                setTimeout(() => {
                                    document.querySelector(".demo").innerHTML = "2";
                                    setTimeout(() => {
                                        document.querySelector(".demo").innerHTML = "1";
                                        setTimeout(() => {
                                            document.querySelector(".demo").innerHTML = "Happy Independence Day";
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
