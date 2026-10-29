const [votos, setVotos] = useState(() => obterVotos());

const total = calcularTotalVotos(votos);
const resultado = calcularResultado(votos);

<div className="barra">
    <div
    className="barra-preenchida"
    style={{ width: `${p.percentual}%`}}
    />
</div>

function handleZerar() {
    if (window.confirm('Apagar todos os votos?')) {
        zerarVotos();
        setVotos({});

    }
}