function resizeIFrameToFitContent(iFrame) {
	console.log(iFrame)

	var dashboardContainer = document.getElementById("dashboardContainer");

	iFrame.width = dashboardContainer.offsetWidth;
	iFrame.height = dashboardContainer.offsetHeight;
	console.log(dashboardContainer.offsetHeight)
	console.log(dashboardContainer.offsetWidth)
}

window.addEventListener(
	'load',
	function(e) {
		var iFrame = document.querySelector('iframe')
		
		resizeIFrameToFitContent(iFrame)
	}
)