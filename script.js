var toggleStatus = false;

const togglePositions = () => {
  toggleStatus = !toggleStatus;
  updateToggleMessage(toggleStatus);
  toggleVisibility(toggleStatus);
};

const updateToggleMessage = (toggleStatus) => {
  positionToggleEl = document.getElementById("positiontoggle");
  if (!positionToggleEl) {
    return;
  }
  !toggleStatus
    ? (positionToggleEl.innerHTML = "See more")
    : (positionToggleEl.innerHTML = "Hide older");
};

const toggleVisibility = (toggleStatus) => {
  olderPositionsEl = document.getElementById("olderpositions");
  if (!olderPositionsEl || !olderPositionsEl.style) {
    return;
  }
  toggleStatus ? olderPositionsEl.style.display = "" : olderPositionsEl.style.display = "none"
};
