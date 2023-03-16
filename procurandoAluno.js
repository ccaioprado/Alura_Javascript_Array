const alunos = ['João','Juliana','Ana','Caio']
const medias = [10,8,7.5,9]

const listaAlunosEMedias = [alunos,medias]

function exibeNomeENota(aluno){
    // O metodo includes diz se o parâmetro passado está presente na lista
    if(listaAM[0].includes(aluno)){
        
        // const medias = listaAlunosEMedias[1]
        // const alunos = listaAlunosEMedias[0]

        // Isso é o mesmo das consts criadas acima
        const [alunos,medias] = listaAlunosEMedias
        
        //O metodo indexOf diz qual o indice do valor passado por parâmetro
        const indice = alunos.indexOf(aluno)

        const mediaDoAluno = medias[indice]

        console.log(mediaDoAluno)

        console.log(`${aluno} tem a média ${mediaDoAluno}`)
    }
    else{
        console.log("Aluno não cadastrado")
    }
}

exibeNomeENota("João")