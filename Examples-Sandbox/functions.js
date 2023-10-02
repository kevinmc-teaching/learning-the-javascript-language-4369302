

let speech = "I am hunting rabbit."

console.log(typeof speech)

function fuddify(speech) {
  if (typeof speech !== "string") {
    console.error("Nice twy, wabbit!")
    return
  }

  speech = speech.replace(/R/g, "W")
  speech = speech.replace(/r/g, "w")

  console.log(speech)
}

fuddify()
