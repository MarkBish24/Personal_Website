<template>
  <v-container fluid>
    <h1>Contact Me</h1>

    <form action="mailto:YOUR_EMAIL_ADDRESS" method="POST" enctype="text/plain">
      <label>
        Email:
        <input type="email" name="email" />
      </label>

      <label>
        Subject:
        <input name="subject" />
      </label>

      <label>
        Message:
        <textarea name="body"></textarea>
      </label>

      <button>Submit</button>
    </form>
  </v-container>
</template>

<style scoped>
input,
textarea,
button {
  font: inherit;
  border: 1px solid #767676;
  border-radius: 2px;
  padding: 1px 2px;
}

button {
  background-color: #efefef;
  color: #333;
  padding: 1px 6px;
}

form {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
}

form label {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
}

form button {
  grid-column: 1 / -1;
}
</style>
