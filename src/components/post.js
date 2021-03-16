

const commentBox = React.createRef()

useEffect(() => {
  const color = colorMode === "default" ? "light" : colorMode
  const script = document.createElement("script")
  script.async = true
  script.src = "https://utteranc.es/client.js"
  script.setAttribute("repo", "davidjaimes/comments")
  script.setAttribute("issue-term", "title")
  script.setAttribute("id", "utterances")
  script.setAttribute("theme", `github-${color}`)
  script.setAttribute("crossorigin", "anonymous")
  const node = commentBox.current
  if (commentBox && node) {
    while (node.firstChild) node.removeChild(node.lastChild)
    node.appendChild(script, script)
  } else console.log(`Error adding utterances comments.`)
}, [colorMode])