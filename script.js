const screenshots = document.getElementsByClassName("roblox-screenshots");

for (let s of screenshots) {
  s.addEventListener('mouseenter', function() {
    let caption = s.querySelector("h3");
    let description = s.querySelector("p");
    toggleVisible(caption)
    toggleVisible(description)
  })
  s.addEventListener('mouseleave', function() {
    let caption = s.querySelector("h3");
    let description = s.querySelector("p");
    toggleInvisible(caption)
    toggleInvisible(description)
  })
}

function toggleVisible(tag) {
  tag.classList.remove('toggle-invisible');
  tag.classList.add('toggle-visible');
}

function toggleInvisible(tag) {
  tag.classList.remove('toggle-visible')
  tag.classList.add('toggle-invisible')
}