const navButton = document.querySelector('.nav-button i');
const sidebar = document.querySelector('.sidebar');
const mainGrid = document.getElementById('main-grid');
const sidebarElements = document.querySelectorAll('.sidebar *');

navButton.addEventListener('click', toggleExpanded);

function toggleExpanded() {
	sidebar.classList.toggle('expanded');
	mainGrid.classList.toggle('expanded');

	sidebarElements.forEach((ele) => {
		ele.classList.toggle('expanded')
	});
}