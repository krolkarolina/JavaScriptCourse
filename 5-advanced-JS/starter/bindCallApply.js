var karka = {
  name: 'Karka',
  age: 28,
  job: 'js coder',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentleman! I\`m ' + this.name + ', I\`m a ' + this.job + ' and I\`m ' + this.age + ' years old.');  
    } else if ( style === 'friendly') {
      console.log('Hey! What\`s up? I\`m ' + this.name + ', I\`m a ' + this.job + ' and I\`m ' + this.age + ' years old. Have a nice ' + timeOfDay + '!');
    }
  }
}

var mati = {
  name: 'Mati',
  age: 32,
  job: 'RoR coder'
}

karka.presentation('formal', 'morning');
karka.presentation.call(mati, 'friendly', 'afternoon');