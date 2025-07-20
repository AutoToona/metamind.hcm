function showTab(id) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  const selectedTab = document.getElementById(id);
  selectedTab.classList.add('active');
}
