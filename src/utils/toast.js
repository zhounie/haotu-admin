

export const show = toast => alert(toast)

export const success = title => show(title)

export const error = err => show(err)

export default {success, error}