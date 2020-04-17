import React from "react";
import { getCompatible } from "../../utils/API"
import "./style.css";

const comp = []

function Swipe() {

    async function getComps() {
        console.log("yo")
        
        await getCompatible("Leo", "F").then(data => comp.push(data))
                                 .catch(err => console.log(err))
        console.log(comp[0].data[1].imageLink)

        const data = comp.filter( c => c.data)
        console.log(data)
        console.log(data[0].data)
        for(let d of data[0].data) console.log(`you are compatible with ${d.name} see what they look like here:
        
        ${d.imageLink}`)

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
                    origin.querySelector('.card').classList.add('current');
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