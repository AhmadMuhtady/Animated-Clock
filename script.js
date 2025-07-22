function clock() {
	const now = new Date();
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');

	// SETup FOR CANVAS
	ctx.save(); // save the default State
	ctx.clearRect(0, 0, 500, 500);
	ctx.translate(250, 250); // put the clock in the middle 0,0
	ctx.rotate(-Math.PI / 2); // Rotate Clock 90 Degree

	// SETUP DEFAULT STYLE
	ctx.strokeStyle = '#000000';
	ctx.fillStyle = '#f4f4f4';
	ctx.lineWidth = 5; // width of line
	ctx.lineCap = 'round'; // make the line round at the end

	// Draw Clock face/border
	ctx.save(); // save everything before
	ctx.beginPath();
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#800000'; // between Save & restore
	ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.fill();
	ctx.restore();
	// Draw Minutes lines
	ctx.save(); // save everything before
	ctx.lineWidth = 5;
	for (let i = 0; i < 60; i++) {
		if (i % 5 !== 0) {
			ctx.beginPath();

			ctx.moveTo(117, 0);
			ctx.lineTo(120, 0);
			ctx.stroke();
		}
		ctx.rotate(Math.PI / 30);
	}
	ctx.restore(); // restore default State

	// Draw hours lines
	ctx.save(); // save everything before
	for (let i = 0; i < 12; i++) {
		ctx.beginPath();
		ctx.rotate(Math.PI / 6);
		ctx.moveTo(100, 0);
		ctx.lineTo(120, 0);
		ctx.stroke();
	}
	ctx.restore(); // restore default State

	// Get Current Time
	const hr = now.getHours() % 12;
	const min = now.getMinutes();
	const sec = now.getSeconds();

	console.log(`${hr} : ${min} : ${sec}`);

	// Draw Hours Hand
	ctx.save();
	ctx.rotate(
		(Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
	);
	ctx.strokeStyle = '#800000';
	ctx.lineWidth = 14;
	ctx.beginPath();
	ctx.moveTo(-20, 0);
	ctx.lineTo(80, 0);
	ctx.stroke();
	ctx.restore();

	// Draw minutes Hand
	ctx.save();
	ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
	ctx.strokeStyle = '#800000';
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(-28, 0);
	ctx.lineTo(110, 0);
	ctx.stroke();
	ctx.restore();

	// Draw seconds Hand
	ctx.save();
	ctx.rotate((Math.PI / 30) * sec);
	ctx.strokeStyle = '#ff7f50';
	ctx.fillStyle = '#ff7f50';
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(-30, 0);
	ctx.lineTo(100, 0);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.restore();

	ctx.restore(); // restore default State
	requestAnimationFrame(clock);
}

requestAnimationFrame(clock);
