import React from "react";
import { getCompatible } from "../../utils/API"
import "./style.css";

const dk = "DEBUG KEY"

// const comp = ["https://static01.nyt.com/images/2016/09/09/arts/09DEVITO/09DEVITO-articleLarge.jpg?quality=75&auto=webp&disable=upscale", "https://thenypost.files.wordpress.com/2019/05/danny-devito.jpg?quality=80&strip=all", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBbpTA8PAXFaVlrI2sy8kYQY1LGDLGyXxgthhuiNMxEdzkvSmT&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE0kgImJUPeKJN8swoyloaGVx_5nvJ2spN4x1dUJbyzqvuEB7e&usqp=CAU"]

var comp
var it = 0

function Swipe() {

    async function getComps() {

        const symbol = sessionStorage.getItem("symbol")
        const prefrences = sessionStorage.getItem("prefrences")

        console.log(`sym: ${symbol} prefrences:${prefrences}`)
        await getCompatible(symbol, prefrences).then(data => comp = data.data)
                                 .catch(err => console.log(err))
        console.log(comp[0])
        
        // console.log(comp[0].data[1].imageLink)
        // const data = comp.filter( c => c.data)
        // console.log(data)
        // console.log(data[0].data)
        // // console.log(comp)
        // for(let d of data[0].data) console.log(`you are compatible with ${d.name} see what they look like here:
        // // ${d.imageLink}`)
        antonio()
    }

    getComps()

    return (
        <div class="cardcontainer list"
            style={{
                textAlign: "center",
            }}
        >
            <ul class="cardlist">
                <li class="card current">#1</li>
                <li class="card">#2</li>
                <li class="card">#3</li>
                <li class="card">#4</li>
                <li class="card">#5</li>
                <li class="card">#6</li>
            </ul>
            <button class="but-nope">X</button>
            <button class="but-yay">✔</button>
        </div>
    )
}

function antonio() {
    if(it === comp.length) it = 0  
    let card = document.querySelector(".card")
    // for(let c of card) c.style.backgroundImage = `url('${comp[it]}')`
    console.log(dk + " jdfls")
    console.log(card)
    card.style.backgroundImage = `url('${comp[it].imageLink}')`
    it++

    // alert(`${it}`)
}


(function () {
    var animating = false;

    function animatecard(ev) {
        if (animating === false) {
            var t = ev.target;

            if (t.className === 'but-nope') {
                t.parentNode.classList.add('nope');
                animating = true;
                fireCustomEvent('nopecard', {
                    origin: t,
                    container: t.parentNode,
                    card: t.parentNode.querySelector('.card')
                });
            }

            if (t.className === 'but-yay') {
                t.parentNode.classList.add('yes');
                // antonio()
                animating = true;
                fireCustomEvent('yepcard', {
                    origin: t,
                    container: t.parentNode,
                    card: t.parentNode.querySelector('.card')
                });
            }

            if (t.classList.contains('current')) {
                fireCustomEvent('cardchosen', {
                    container: getContainer(t),
                    card: t
                });
            }
        }
    }

    function fireCustomEvent(name, payload) {
        var newevent = new CustomEvent(name, {
            detail: payload
        });

        document.body.dispatchEvent(newevent);
    }

    function getContainer(elm) {
        var origin = elm.parentNode;

        if (!origin.classList.contains('cardcontainer')) {
            origin = origin.parentNode;
        }

        return origin;
    }

    function animationdone(ev) {
        animating = false;
        var origin = getContainer(ev.target);
        
        if (ev.animationName === 'yay') {
            origin.classList.remove('yes');
        }

        if (ev.animationName === 'nope') {
            origin.classList.remove('nope');
        }

        if (origin.classList.contains('list')) {
            if (ev.animationName === 'nope' || ev.animationName === 'yay') {
                origin.querySelector('.current').remove();

                if (!origin.querySelector('.card')) {
                    fireCustomEvent('deckempty', {
                        origin: origin.querySelector('button'),
                        container: origin,
                        card: null
                    });
                } else {
                    antonio()
                    origin.querySelector('.card').
                    classList.add('current');
                }
            }
        }
    }

    document.body.addEventListener('animationend', animationdone);
    document.body.addEventListener('webkitAnimationEnd', animationdone);
    document.body.addEventListener('click', animatecard);
    window.addEventListener('DOMContentLoaded', function () {
        document.body.classList.add('tinderesque');
    });
})();

export default Swipe;