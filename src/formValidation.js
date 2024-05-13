export default function formValidasion (date, name, post) {
    console.log(date, name, post)
    let dateError = ''
    let nameError = ''
    let postError = ''
   if (date === '') {
     dateError = 'Введите дату'
   }
   if (name === '') {
    nameError = 'Введите название поста'
   }
   if (post ==='') {
    postError = "Вы забыли написать пост"
   }
   if (post.length > 128) {
    postError = 'Длина поста не должна превышать 128 символов'
   }
    return  `${dateError + nameError + postError}`
}