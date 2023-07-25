# Random User Generator

 Uses the `reqres` api available at [reqres official site](https://reqres.in/api/users?page=1)

## Component Architecture

- [`GetUser`](https://github.com/nandhakumarsj/rand-user-gen/readme.md#getuser) Component
- [`User`](https://github.com/nandhakumarsj/rand-user-gen/readme.md#user) Component

### GetUser Component

> States : `users` : type `[{Object, Object}`

`users` state is changed through the convention `setUsers()`

### User Component

> Props : `first_name` , `last_name` , `email` , `avatar`

- `first_name` and `last_name` contains the respective user's names.
- And their respective email address in `email`
- `avatar` contains the source for the profile of user generated through `reqres API`
