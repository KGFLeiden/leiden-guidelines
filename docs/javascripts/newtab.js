document.addEventListener("DOMContentLoaded", () => {
  for (const link of Array.from(document.querySelectorAll(".md-typeset a[href^=http]")))
    link.target = "_blank"
})
