const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo:
          'https://randomuser.me/api/portraits/women/54.jpg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse veniam nemo unde asperiores nihil adipisci, hic dicta totam deserunt illum iste recusandae non voluptate, provident quo eos fugit veritatis eveniet sequi. Harum expedita est nobis ratione qui vitae porro unde cupiditate. Cupiditate suscipit distinctio nam voluptatibus consectetur blanditiis architecto?',
      },
      {
        name: 'June Cha',
        position: 'Software Engineer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse veniam nemo unde asperiores nihil adipisci, hic dicta totam deserunt illum iste recusandae non voluptate, provident quo eos fugit veritatis eveniet sequi. Harum expedita est nobis ratione qui vitae porro unde cupiditate. Cupiditate suscipit distinctio nam voluptatibus consectetur blanditiis architecto?',
      },
      {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse veniam nemo unde asperiores nihil adipisci, hic dicta totam deserunt illum iste recusandae non voluptate, provident quo eos fugit veritatis eveniet sequi. Harum expedita est nobis ratione qui vitae porro unde cupiditate. Cupiditate suscipit distinctio nam voluptatibus consectetur blanditiis architecto?',
      },
      {
        name: 'Renee Sims',
        position: 'Receptionist',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse veniam nemo unde asperiores nihil adipisci, hic dicta totam deserunt illum iste recusandae non voluptate, provident quo eos fugit veritatis eveniet sequi. Harum expedita est nobis ratione qui vitae porro unde cupiditate. Cupiditate suscipit distinctio nam voluptatibus consectetur blanditiis architecto?',
      },
      {
        name: 'Jonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse veniam nemo unde asperiores nihil adipisci, hic dicta totam deserunt illum iste recusandae non voluptate, provident quo eos fugit veritatis eveniet sequi. Harum expedita est nobis ratione qui vitae porro unde cupiditate. Cupiditate suscipit distinctio nam voluptatibus consectetur blanditiis architecto?',
      },
      {
        name: 'Sasha Ho',
        position: 'Accountant',
        photo:
          'https://randomuser.me/api/portraits/women/70.jpg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse veniam nemo unde asperiores nihil adipisci, hic dicta totam deserunt illum iste recusandae non voluptate, provident quo eos fugit veritatis eveniet sequi. Harum expedita est nobis ratione qui vitae porro unde cupiditate. Cupiditate suscipit distinctio nam voluptatibus consectetur blanditiis architecto?',
      },
      {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse veniam nemo unde asperiores nihil adipisci, hic dicta totam deserunt illum iste recusandae non voluptate, provident quo eos fugit veritatis eveniet sequi. Harum expedita est nobis ratione qui vitae porro unde cupiditate. Cupiditate suscipit distinctio nam voluptatibus consectetur blanditiis architecto?',
      },
]

let i = 1

setInterval(updateTestimonial, 8000)

function updateTestimonial(){
    const {name, position, photo, text} = testimonials[i]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    i++

    if(i > testimonials.length - 1){
        i = 0
    }
}


