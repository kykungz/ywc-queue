const branch = window.location.search.split('=')[1].toUpperCase()

const next = () => {
  let prefix = ""
  switch (branch) {
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
  const number = parseInt(document.getElementById('current-queue').value) + 1
  const text = prefix + number.toString().padStart(2, '0')
  document.getElementById('current-queue').value = text
  firebase.database().ref(`ywc-queue/${branch.toLowerCase()}`).set({
    current: text,
    custom: ""
  })
}

const publishCustomText = () => {
  console.log('published')
  firebase.database().ref(`ywc-queue/${branch.toLowerCase()}`).update({
    custom: document.getElementById('custom-queue').value
  })
}

document.getElementById('branch').innerText = `WEB ${branch}`
