var logo = document.getElementById('ywc-logo')

var mc = new Hammer.Manager(logo)

mc.add(new Hammer.Press({ time: 2000 }))

mc.on('press', function(ev) {
  const password = prompt('Enter password')
  firebase
    .auth()
    .signInWithEmailAndPassword('jackykongpon@gmail.com', password)
    .then(() => {
      alert('Welcome Admin!')
    })
    .catch(() => {
      alert('Incorrect Password')
    })
})
