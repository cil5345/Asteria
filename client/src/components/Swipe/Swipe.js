import React, { useState } from "react";
import { getCompatible, addInteraction } from "../../utils/API"
import "./style.css";

var comp
var it = 0
var fishID

function Swipe() {

    const [ compatbiles, setCompatbiles ] = useState([{}])

    // const [ id, setID ] = useState(0)

    async function getComps() {

        const symbol = sessionStorage.getItem("symbol")
        const prefrence = sessionStorage.getItem("prefrence")

        await getCompatible(symbol, prefrence).then(data => comp = data.data)
                                 .catch(err => console.log(err))
        
        loadCompatibleImage()
    }

    getComps()

    return (
        <div className="cardcontainer list"
            style={{
                textAlign: "center",
            }}
        >
            <div>
                <p id="compatible-name-p">{}</p>
            </div>
            <ul className="cardlist" style={{margin: 0}}>
                <li className="card current"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
                <li className="card"></li>
            </ul>
            <button className="but-nope">X</button>
            <button className="but-yay">✔</button>
        </div>
    )
}

function loadCompatibleImage() {
    if(it === comp.length) it = 0

    let card = document.querySelector(".card")
    let nameDiv = document.getElementById("compatible-name-p")
    nameDiv.textContent = comp[it].name
    
    card.style.backgroundImage = `url('${comp[it].imageLink}')`
    // card.textContent = `${comp[it].symbol} ${comp[it].gender} ID:${comp[it].fb_ID}`
    fishID = comp[it].fb_ID
    it++
}


(function () {
    var animating = false;

    function animatecard(ev) {
        if (animating === false) {
            var t = ev.target;

            if (t.className === 'but-nope') {
                t.parentNode.classList.add('nope');
                addInteraction(sessionStorage.getItem("fb_ID"), fishID, false)
                animating = true;
                fireCustomEvent('nopecard', {
                    origin: t,
                    container: t.parentNode,
                    card: t.parentNode.querySelector('.card')
                });
            }

            if (t.className === 'but-yay') {
                t.parentNode.classList.add('yes');
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
                addInteraction(sessionStorage.getItem("fb_ID"), fishID, true)
                animating = true;
                fireCustomEvent('yepcard', {
                    origin: t,
                    container: t.parentNode,
                    card: t.parentNode.querySelector('.card')
                });
            }
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
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
                    loadCompatibleImage()
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