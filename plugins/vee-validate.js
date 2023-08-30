import { defineRule } from 'vee-validate'

export default defineNuxtPlugin(nuxtApp => {
  const regex = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    name: /^[a-z0-9_-]{3,16}$/,
    phone: /(?:\+|\d)[\d\-\(\) ]{9,}\d/g,
    password: {
      full: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      number: /(?=.*[0-9])/,
      sign: /(?=.*[!@#$%^&*])/,
      small: /(?=.*[a-z])/,
      high: /(?=.*[A-Z])/,
      length: /[0-9a-zA-Z!@#$%^&*]{6,}/
    }
  }
  
  defineRule('required', value => {
    if (!value || !value.length) {
      return 'Это поле обязательное'
    }
    return true
  })
  
  defineRule('email', value => {
    if (!regex.email.test(value)) {
      return 'Поле должно содержать валидный email'
    }
    return true
  })

  defineRule('name', value => {
    if (!regex.name.test(value)) {
      return 'Поле должно содержать валидное имя'
    }
    return true
  })

  defineRule('password', value => {

    // if(!regex.password.number.test(value)) {
    //   return 'Пароль не содержит хотя бы одно число'
    // } else if (!regex.password.sign.test(value)) {
    //   return 'Пароль не содержит хотя бы один спецсимвол'
    // } else if (!regex.password.small.test(value)) {
    //   return 'Пароль не содержит букву в нижнем регистре'
    // } else if (!regex.password.high.test(value)) {
    //   return 'Пароль не содержит букву в верхнем регистре'
    // } else if (!regex.password.length.test(value)) {
    //   return 'Пароль состоит менее, чем из 6 символов'
    // } else {
    //   return true
    // }

    return true
  })
})
