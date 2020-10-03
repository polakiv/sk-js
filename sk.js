const puppeteer = require('puppeteer');
const port = process.env.PORT || 3000;
(async () => {
	
	let k = 1;
	while (k <= 1000) {
		
		
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto('https://bigdatamicrodata.pp.ua/begin.php');
		await page.screenshot({path: 'example.png'});
		
		const browser2 = await puppeteer.launch();
		const page2 = await browser2.newPage();
		await page2.goto('https://k.bigdatamicrodata.pp.ua/begin1.php');
		await page2.screenshot({path: 'example2.png'});
		
		
		await page.waitFor(3500000);
	//	await page2.waitFor(3500);
		await browser.close();
		await browser2.close();
		//console.log();
		 
		
		k++;
	}  
	
})();



