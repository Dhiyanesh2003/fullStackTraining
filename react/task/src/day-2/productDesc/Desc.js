import React from "react";

import Counts from "./Counts";

const Desc = () => {
	return (
		<div>
			<div class="right">
				<h1 className="h1">Milk</h1>
				<h2>At Rs. 50 per litre</h2>
				<br />
				<Counts />
				<br />
				<h3>Description</h3>
				<p>
					Milk is a white liquid food produced by the mammary glands
					of mammals. It is the primary source of nutrition for young
					mammals (including breastfed human infants) before they are
					able to digest solid food.[1] Immune factors and
					immune-modulating components in milk contribute to milk
					immunity. Early-lactation milk, which is called colostrum,
					contains antibodies that strengthen the immune system, and
					thus reduces the risk of many diseases. Milk contains many
					nutrients, including protein and lactose.
				</p>
				<i class="fa-regular fa-stopwatch"></i>
				<br />
				<button className="button" style={{marginRight: "10px"}}>Add to Cart</button>
				<button className="button">Buy Now</button>
			</div>
		</div>
	);
};

export default Desc;
