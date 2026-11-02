const posts = [
  { id: 1, texto: 'Bom dia' },
  { id: 2, texto: 'Boa tarde' },
  { id: 3, texto: 'Boa noite' }
]

const idDelete = 2;

const postAtualizados = posts.filter(ids => ids.id !== idDelete)

console.log(postAtualizados)