function ParticipanteCard({participante, onVotar}) {
    const{nome, foto, naRoca} = participante;

    return
}
export default ParticipantCard

<article className={naRoca ? 'card card-roca' : 'card'}>
    {naRoca && <span className="selo-roca">Na roça</span>}
    <img src={foto} alt={nome} className="card-foto"/>

{onVotar && (
    <button type="button" onclick={()=> onVotar(participante)}>
        Votar para eliminar
    </button>
)}