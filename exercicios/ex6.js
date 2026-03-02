const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Carlos', ativo: false },
    { nome: 'Bruna', ativo: true },
];

const novoUsuarios = usuarios.map((usuario) => {
    return `${usuario.nome} - ${usuario.ativo ? 'Ativo' : 'Inativo'}`;
});

console.log(novoUsuarios);
