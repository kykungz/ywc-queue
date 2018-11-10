firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.location = './index.html'
  }
})

const branch = window.location.search.split('=')[1]
let prefix = ''
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
    .catch(err => {
      alert(err)
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
