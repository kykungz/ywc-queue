const branch = window.location.search.split('=')[1]
let prefix = ''
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

// const next = () => {
//   const number = parseInt(document.getElementById('current-queue').value) + 1
//   const text = prefix + number.toString().padStart(2, '0')
//   document.getElementById('current-queue').value = text
//   firebase.database().ref(`ywc-queue/${branch}`).set({
//     current: text,
//     custom: ""
//   })
// }

const modifyQueue = amount => {
  document.getElementById('current-queue').value = (
    parseInt(document.getElementById('current-queue').value) + amount
  )
    .toString()
    .padStart(2, '0')
}

const updateQueue = () => {
  const value = document.getElementById('current-queue').value
  firebase
    .database()
    .ref(`ywc-queue/${branch}`)
    .set({
      current: value,
      custom: ''
    })
}

const publishCustomText = () => {
  console.log('published')
  firebase
    .database()
    .ref(`ywc-queue/${branch}`)
    .update({
      custom: document.getElementById('custom-queue').value
    })
}

document.getElementById('branch').innerText = `WEB ${branch.toUpperCase()}`

firebase
  .database()
  .ref(`ywc-queue/${branch}`)
  .once('value')
  .then(snapshot => {
    document.getElementById(
      'current-queue'
    ).value = snapshot.val().current.padStart(2, '0')
  })

firebase
  .database()
  .ref(`ywc-queue/${branch}`)
  .on('value', snapshot => {
    const val = snapshot.val()
    document.getElementById('on-screen').innerText =
      val.custom === '' ? prefix + val.current : val.custom
  })
