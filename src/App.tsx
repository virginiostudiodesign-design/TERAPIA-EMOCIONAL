
import { useState } from 'react'
import { supabase } from './supabase'

function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [medo, setMedo] = useState('')

  async function salvarAnamnese() {

    const { error } = await supabase
      .from('anamnese')
      .insert([
        {
          nome,
          idade,
          medo
        }
      ])

    if (error) {
      alert('Erro ao salvar')
      console.log(error)
    } else {
      alert('Anamnese salva com sucesso')
    }
  }

  return (
    <div style={{ padding: 40 }}>

      <h1>Painel Emocional</h1>

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Maior medo"
        value={medo}
        onChange={(e) => setMedo(e.target.value)}
      />

      <br /><br />

      <button onClick={salvarAnamnese}>
        Salvar
      </button>

    </div>
  )
}

export default App
