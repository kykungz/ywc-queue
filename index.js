const timer = {
  content: null,
  programming: null,
  designer: null,
  marketing: null
}

const SECOND = 1000

const changePage = branch => {
  if (firebase.auth().currentUser) {
    window.location = `./admin.html?branch=${branch}`
  }
}

const animate = branch => {
  const textId = `${branch}-queue`
  const cardId = `${branch}-card`
  const alertName = `${branch}-alert`

  document.getElementById(textId).classList.add('tada')
  document.getElementById(cardId).classList.add(alertName)

  clearTimeout(timer[branch])

  timer[branch] = setTimeout(() => {
    document.getElementById(textId).classList.remove('tada')
    document.getElementById(cardId).classList.remove(alertName)
  }, 10 * SECOND)
}

const setText = (branch, snapshot) => {
  const value = snapshot.val()
  let prefix = ""
  switch (branch.toUpperCase()) {
    case 'CONTENT':
      prefix = 'C'
      break
    case 'PROGRAMMING':
      prefix = 'P'
      break
    case 'DESIGNER':
      prefix = 'D'
      break
    case 'MARKETING':
      prefix = 'M'
      break
  }
  if (value.custom !== "") {
    document.getElementById(`${branch}-queue`).innerText = value.custom
  } else {
    document.getElementById(`${branch}-queue`).innerText = prefix + value.current
  }
}

['content', 'programming', 'designer', 'marketing'].forEach(branch => {
  firebase.database().ref(`ywc-queue/${branch}`).on('value', snapshot => {
    setText(branch, snapshot)
    animate(branch)
  })
})
