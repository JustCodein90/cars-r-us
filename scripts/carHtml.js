import { Paint } from "./paint.js";
import { Interior } from "./interiors.js";
import { Technologies } from "./tech.js";
import { Wheel } from "./wheels.js";



export const CarHTML = () => {
    return `
    <h1>Cars 'R  Us</h1>

    <article class="choices">
        <section class="">           
            ${Paint()}
        </section>
        <section class="">           
            ${Interior()}
        </section>
        <section class="">           
            ${Technologies()}
        </section>
        <section class="">           
            ${Wheel()}
        </section>
    </article>

    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h2>
        
    </article>
        `
}



