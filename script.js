const dip = [
     {
          Author : "Ruben Blades",
          Song : "Disappearances",
          Views : 630
     }
]

const music = dip.find(item => {
     return item.Author = 'Ruben Blades'
})
prompt(music)

const IVA = dip.map(item => {
     item.Views *= 1.2
     return item
})
if (true) {
     console.log(dip)
}

const sound = dip.filter(item => {
     item.Song = 'Disappearances'
})
setTimeout(() => {
     alert(sound)
}, 5000);