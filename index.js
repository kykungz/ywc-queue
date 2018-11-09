const timer = {
  content: null,
  programming: null,
  designer: null,
  marketing: null
}

const changePage = branch => {
  window.location = `./admin.html?branch=${branch}`
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
  }, 10 * 1000)
}

const setText = (branch, snapshot) => {
  let prefix = ""
  switch (branch.toUpperCase()) {
    case 'CONTENT':
      prefix = 'CT'
      break
    case 'PROGRAMMING':
      prefix = 'PG'
      break
    case 'DESIGNER':
      prefix = 'DS'
      break
    case 'MARKETING':
      prefix = 'MK'
      break
  }
  if (snapshot.val().custom !== "") {
    document.getElementById(`${branch}-queue`).innerText = snapshot.val().custom
  } else {
    document.getElementById(`${branch}-queue`).innerText = prefix + snapshot.val().current
  }
}

// Content
firebase
  .database()
  .ref('ywc-queue/content')
  .on('value', snapshot => {
    const branch = 'content'
    setText(branch, snapshot)
    animate('content')
  })

// Programming
firebase
  .database()
  .ref('ywc-queue/programming')
  .on('value', snapshot => {
    const branch = 'programming'
    setText(branch, snapshot)
    animate(branch)
  })

// Designer
firebase
  .database()
  .ref('ywc-queue/designer')
  .on('value', snapshot => {
    const branch = 'designer'
    setText(branch, snapshot)
    animate(branch)
  })

// Marketing
firebase
  .database()
  .ref('ywc-queue/marketing')
  .on('value', snapshot => {
    const branch = 'marketing'
    setText(branch, snapshot)
    animate(branch)
  })
