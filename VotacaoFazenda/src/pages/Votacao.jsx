import ParticipanteCard from '../components/ParticipanteCard';
import { listarNaRoca } from '../services/votacaoService';
import { listarForaDaRoca } from '../services/votacaoService';
import { registrarVoid } from '../services/votacaoService';

const [ultimoVoto , setUltimoVoto] = useState(null);
const [votosNaSessao , setVotosNaSessao] = useState(0);

function handleVotar(participante) {
    registrarVoto(participante.id);
}

{naRoca.map((p) =>(
    <ParticipanteCard
    key={p.id}
    participante={p}
    onVotar={handleVotar}
    />
))}