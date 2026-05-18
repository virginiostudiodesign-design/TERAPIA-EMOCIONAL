```tsx
import { useState } from 'react'
import { supabase } from './supabase'

function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [telefone, setTelefone] = useState('')
  const [queixa, setQueixa] = useState('')
  const [medo, setMedo] = useState('')
  const [traumas, setTraumas] = useState('')
  const [pai, setPai] = useState('')
  const [mae, setMae] = useState('')
  const [irmaos, setIrmaos] = useState('')
  const [escola, setEscola] = useState('')
  const [bullying, setBullying] = useState('')
  const [decepcao, setDecepcao] = useState('')
  const [observacoes, setObservacoes] = useState('')

  async function salvarAnamnese() {

    const { error } = await supabase
      .from('anamnese')
      .insert([
        {
          nome,
          idade,
          telefone,
          queixa,
          medo,
          traumas,
          pai,
          mae,
          irmaos,
          escola,
          bullying,
          decepcao,
          observacoes
        }
      ])

    if (error) {
      console.log(error)
      alert('Erro ao salvar')
    } else {
      alert('Anamnese salva com sucesso!')
    }
  }

  return (
    <div style={{
      padding: '40px',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: 'Arial'
    }}>

      <h1>Anamnese Terapêutica Adolescente</h1>

      <br />

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={input}
      />

      <input
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        style={input}
      />

      <input
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        style={input}
      />

      <textarea
        placeholder="Queixa principal"
        value={queixa}
        onChange={(e) => setQueixa(e.target.value)}
        style={textarea}
      />

      <textarea
        placeholder="Maiores medos"
        value={medo}
        onChange={(e) => setMedo(e.target.value)}
        style={textarea}
      />

      <textarea
        placeholder="Traumas vividos"
        value={traumas}
        onChange={(e) => setTraumas(e.target.value)}
        style={textarea}
      />

      <textarea
        placeholder="Relação com o pai"
        value={pai}
        onChange={(e) => setPai(e.target.value)}
        style={textarea}
      />

      <textarea
        placeholder="Relação com a mãe"
        value={mae}
        onChange={(e) => setMae(e.target.value)}
        style={textarea}
      />

      <textarea
        placeholder="Relação com irmãos"
        value={irmaos}
        onChange={(e) => setIrmaos(e.target.value)}
        style={textarea}
      />

      <textarea
        placeholder="Como é na escola"
        value={escola}
        onChange={(e) => setEscola(e.target.value)}
        style={textarea}
      />

      <textarea
        placeholder="Bullying sofrido"
        value={bullying}
        onChange={(e) => setBullying(e.target.value)}
        style={textarea}
      />

      <textarea
        placeholder="Decepção amorosa"
        value={decepcao}
        onChange={(e) => setDecepcao(e.target.value)}
        style={textarea}
      />

      <textarea
        placeholder="Observações terapêuticas"
        value={observacoes}
        onChange={(e) => setObservacoes(e.target.value)}
        style={textarea}
      />

      <button
        onClick={salvarAnamnese}
        style={botao}
      >
        Salvar Anamnese
      </button>

    </div>
  )
}

const input = {
  width: '100%',
  padding: '15px',
  marginBottom: '20px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  fontSize: '16px'
}

const textarea = {
  width: '100%',
  minHeight: '120px',
  padding: '15px',
  marginBottom: '20px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  fontSize: '16px'
}

const botao = {
  width: '100%',
  padding: '18px',
  backgroundColor: '#7c3aed',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  fontSize: '18px',
  cursor: 'pointer'
}
export default App
