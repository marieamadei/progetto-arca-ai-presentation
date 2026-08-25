const policyData = [
  { value: "38.511", label: "Regular Giving", tone: "regular" },
  { value: "28.704", label: "One-Off", note: "escluso Digital", tone: "oneoff" },
  { value: "13.152", label: "Digital One-Off", tone: "digital" },
  { value: "877", label: "Organizzazioni", tone: "org" },
];

const reviewData = [
  { time: "08:45", cadence: "giorni feriali", label: "Salute dei pagamenti" },
  { time: "09:00", cadence: "ogni giorno", label: "Portafoglio One-Off" },
  { time: "09:00", cadence: "ogni lunedì", label: "Quadro Fundraising" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-pair" href="#top" aria-label="Progetto Arca AI, torna all’inizio">
          <span className="arca-lockup">
            <img src="/assets/arca-logo.png" alt="Progetto Arca" />
          </span>
          <span className="brand-separator" aria-hidden="true" />
          <span className="streetbeat-lockup">
            <span className="streetbeat-symbol" aria-hidden="true"><i /><i /></span>
            Streetbeat
          </span>
        </a>
        <nav aria-label="Navigazione della presentazione">
          <a href="#fondazione">Fondazione</a>
          <a href="#luma">Luma</a>
          <a href="#evidenza">Evidenza</a>
          <a href="#demo" className="nav-cta">Demo</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Persona assistita da Progetto Arca" />
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow light">Progetto Arca AI</p>
          <h1>Dati che spiegano.<br /><span>Intelligenza che orienta.</span></h1>
          <p className="hero-copy">
            Con Luma, la collega AI di Progetto Arca, i dati di raccolta fondi diventano
            comprensione, evidenza e prossima decisione.
          </p>
          <p className="hero-identity"><strong>Luma</strong> è la nuova identità dell’assistente AI finora presentato come Jarvis.</p>
          <div className="hero-actions">
            <a className="button primary" href="#idea">Scopri il percorso</a>
            <a className="button ghost" href="https://progettoarca.streetbeat.com/login" target="_blank" rel="noreferrer">
              Apri la demo <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-foot">
          <span>Il primo aiuto, sempre.</span>
          <span className="scroll-cue">Scorri <b aria-hidden="true">↓</b></span>
        </div>
      </section>

      <section className="statement section" id="idea">
        <div className="section-number">01</div>
        <div className="statement-body">
          <p className="eyebrow">La domanda</p>
          <h2>Il punto non è avere più dati.<br />È sapere che cosa merita attenzione adesso.</h2>
          <div className="question-grid">
            <article><span>01</span><h3>Che cosa sta cambiando?</h3><p>Nel periodo, nella raccolta e nelle popolazioni.</p></article>
            <article><span>02</span><h3>Perché sta cambiando?</h3><p>Canali, campagne, coorti e concentrazione del valore.</p></article>
            <article><span>03</span><h3>Che cosa valutare ora?</h3><p>Un approfondimento, una priorità o una Next Best Action.</p></article>
          </div>
        </div>
      </section>

      <section className="foundation section dark" id="fondazione">
        <div className="section-number">02</div>
        <div className="foundation-copy">
          <p className="eyebrow light">La fondazione</p>
          <h2>Una base governata.<br />Quattro policy, nessuna sovrapposizione.</h2>
          <p className="lede light-text">
            Ogni donatore appartiene a un solo perimetro analitico. I totali si riconciliano,
            le regole restano esplicite e ogni evidenza può essere riaperta.
          </p>
        </div>
        <div className="total-card">
          <span className="total-label">Base complessiva</span>
          <strong>81.244</strong>
          <span>donatori e organizzazioni</span>
        </div>
        <div className="policy-grid">
          {policyData.map((policy) => (
            <article className={`policy-card ${policy.tone}`} key={policy.label}>
              <strong>{policy.value}</strong>
              <h3>{policy.label}</h3>
              {policy.note && <p>{policy.note}</p>}
            </article>
          ))}
        </div>
        <p className="data-note light-text">Perimetro dimostrativo riconciliato · dati disponibili al 31 maggio 2026</p>
      </section>

      <section className="system section">
        <div className="section-number">03</div>
        <div className="system-intro">
          <p className="eyebrow">Lo stesso dato, tre profondità</p>
          <h2>Dal quadro al dettaglio.<br />Dal dettaglio alla decisione.</h2>
        </div>
        <div className="system-stack">
          <article className="system-card report-card">
            <div className="system-card-copy"><span>01</span><h3>Report</h3><p>Che cosa sta succedendo e come cambia rispetto al periodo precedente.</p></div>
            <div className="screen-frame"><img src="/assets/report-raccolta.png" alt="Report di raccolta fondi della piattaforma Progetto Arca" /></div>
          </article>
          <article className="system-card pivot-card">
            <div className="system-card-copy"><span>02</span><h3>Pivot</h3><p>Le popolazioni e le righe che permettono di verificare ogni affermazione.</p></div>
            <div className="screen-frame"><img src="/assets/pivot-oneoff.png" alt="Pivot delle donazioni One-Off" /></div>
          </article>
          <article className="system-card luma-card">
            <div className="system-card-copy"><span>03</span><h3>Luma</h3><p>L’interpretazione contestuale, calibrata sul ruolo e collegata alle evidenze.</p></div>
            <div className="screen-frame"><img src="/assets/luma-chat.png" alt="Risposta di Luma con riepilogo di raccolta fondi" /></div>
          </article>
        </div>
      </section>

      <section className="proactive section blue" id="luma">
        <div className="section-number">04</div>
        <div className="proactive-copy">
          <p className="eyebrow light">L’AI lavora prima dell’accesso</p>
          <h2>Luma non aspetta soltanto una domanda.</h2>
          <p className="lede light-text">
            Può osservare ciò che conta per un ruolo, aggiornare il briefing e segnalare
            soltanto i cambiamenti che meritano attenzione.
          </p>
          <div className="review-list">
            {reviewData.map((review) => (
              <div className="review-row" key={review.label}>
                <time>{review.time}</time>
                <div><strong>{review.label}</strong><span>{review.cadence}</span></div>
                <b aria-label="Attivo">Attivo</b>
              </div>
            ))}
          </div>
        </div>
        <div className="proactive-visual">
          <div className="screen-frame elevated"><img src="/assets/luma-home.png" alt="Homepage di Luma con le priorità del giorno" /></div>
          <div className="worked-before"><i aria-hidden="true" /><span>L’agente ha lavorato<br /><strong>prima del tuo arrivo.</strong></span></div>
        </div>
      </section>

      <section className="channels section" id="canali">
        <div className="channels-heading">
          <p className="eyebrow">Dalla piattaforma ai canali di lavoro</p>
          <h2>Luma arriva dove il lavoro sta già accadendo.</h2>
          <p className="lede">
            Si presenta e impara a conoscere il ruolo via email, porta briefing, alert e
            Next Best Action senza aspettare un accesso, e continua il dialogo su WhatsApp.
          </p>
        </div>
        <div className="channel-gallery" aria-label="Luma via email e WhatsApp">
          <article className="channel-card">
            <div className="channel-label"><span>01</span><strong>Email · onboarding</strong></div>
            <div className="phone-frame"><img src="/assets/luma-email-welcome.png" alt="Email di benvenuto inviata da Luma" /></div>
            <h3>Conosce la persona.</h3>
            <p>Ruolo, responsabilità, priorità e preferenze diventano il contesto della collaborazione.</p>
          </article>
          <article className="channel-card featured">
            <div className="channel-label"><span>02</span><strong>Email · alert proattivo</strong></div>
            <div className="phone-frame"><img src="/assets/luma-email-alert.png" alt="Alert proattivo One-Off inviato da Luma via email" /></div>
            <h3>Porta ciò che merita attenzione.</h3>
            <p>Un finding già interpretato, con confronto, perimetro ed evidenze da approfondire.</p>
          </article>
          <article className="channel-card whatsapp">
            <div className="channel-label"><span>03</span><strong>WhatsApp · conversazione</strong></div>
            <div className="phone-frame"><img src="/assets/luma-whatsapp.png" alt="Approfondimento di Luma in una conversazione WhatsApp" /></div>
            <h3>Approfondisce insieme a te.</h3>
            <p>La domanda critica diventa un’analisi ulteriore, accessibile anche lontano dalla scrivania.</p>
          </article>
        </div>
        <div className="channel-path" aria-label="Percorso multicanale di Luma">
          <span>Onboarding</span><b>→</b><span>Alert e NBA</span><b>→</b><span>Dialogo</span><b>→</b><span>Evidenza in piattaforma</span>
        </div>
      </section>

      <section className="case-study section" id="evidenza">
        <div className="section-number">05</div>
        <div className="case-heading">
          <p className="eyebrow">Un caso reale</p>
          <h2>Un calo di €395.307.<br />Una decisione che cambia con l’evidenza.</h2>
          <p className="lede">Gennaio–maggio 2026 rispetto allo stesso periodo 2025.</p>
        </div>
        <div className="case-flow">
          <article className="case-step observed">
            <span className="step-label">Fatto osservato</span>
            <strong>−47,9%</strong>
            <p>Contrazione complessiva delle due policy One-Off individuali.</p>
            <div className="mini-split"><span>One-Off <b>−€356.089</b></span><span>Digital <b>−€39.218</b></span></div>
          </article>
          <div className="flow-arrow" aria-hidden="true">→</div>
          <article className="case-step question">
            <span className="step-label">La domanda umana</span>
            <blockquote>“Il calo è diffuso o concentrato in poche donazioni eccezionali?”</blockquote>
          </article>
          <div className="flow-arrow" aria-hidden="true">→</div>
          <article className="case-step finding">
            <span className="step-label">L’approfondimento di Luma</span>
            <strong>86,9%</strong>
            <p>del calo di Altro/trasversale è spiegato dalla variazione dei contributi sopra €10.000.</p>
            <b className="finding-total">54,8% del calo One-Off complessivo</b>
            <small>Soglia diagnostica ad hoc, esplicitamente dichiarata.</small>
          </article>
        </div>
        <div className="denominator-bridge" aria-label="Doppio denominatore dell’analisi">
          <div>
            <span>Calo One-Off complessivo</span>
            <strong>−€395.307</strong>
            <small>100% del calo osservato</small>
          </div>
          <div>
            <span>Altro / trasversale</span>
            <strong>−€249.302</strong>
            <small>63,1% del calo complessivo</small>
          </div>
          <div className="denominator-focus">
            <span>Contributi sopra €10.000</span>
            <strong>−€216.669</strong>
            <small>86,9% di Altro/trasversale · 54,8% del totale</small>
          </div>
        </div>
        <div className="evidence-strip">
          <div><span>2025</span><strong>7 donazioni</strong><p>5 donatori · €416.669</p></div>
          <div className="evidence-line"><span>−€216.669</span></div>
          <div><span>2026</span><strong>1 donazione</strong><p>€200.000</p></div>
          <div className="decision-box"><span>Decisione</span><strong>Prima stewardship e timing dei grandi contributi.</strong><p>Non attribuire ancora il calo alla performance del canale.</p></div>
        </div>
        <div className="analysis-limit">
          <span>06 · Limite dell’analisi</span>
          <p>
            La concentrazione è calcolata su una numerosità ridotta: 7 donazioni di 5 donatori
            nel 2025 e una donazione nel 2026. Non sappiamo ancora se i grandi donatori 2025
            non presenti nella finestra 2026 siano persi, in ritardo o semplicemente fuori dal
            periodo osservato.
          </p>
        </div>
        <p className="case-footnote">Le donazioni eccezionali risultano associate ad attività di Cultivation One2one.</p>
      </section>

      <section className="opportunity section sand">
        <div className="section-number">06</div>
        <div className="opportunity-photo"><img src="/assets/arca-market.png" alt="Volontaria di Progetto Arca in un Market Solidale" /></div>
        <div className="opportunity-copy">
          <p className="eyebrow">Un esempio operativo</p>
          <h2>Dal segnale alla relazione da qualificare.</h2>
          <div className="hvd-card">
            <span className="hvd-badge">High Value Donor · drill-down</span>
            <div className="hvd-number"><strong>2</strong><span>candidati Digital<br />in Ultima chiamata</span></div>
            <div className="hvd-facts"><span><b>€3.500</b> valore storico osservato</span><span><b>2/2</b> contattabili</span></div>
            <p>Luma qualifica il segnale. Una persona decide se e come attivare la relazione.</p>
            <small>Il valore storico non è una stima del potenziale futuro.</small>
          </div>
          <div className="portfolio-opportunity">
            <span>Lettura C-level</span>
            <p>Le opportunità vanno aggregate sull’intero perimetro: migrazioni RFM verso l’alto, candidati HVD, valore storico associato e potenziale ancora da qualificare.</p>
          </div>
          <p className="human-note"><i aria-hidden="true" /> Nessun contatto autonomo con il donatore.</p>
        </div>
      </section>

      <section className="roles section">
        <div className="section-number">07</div>
        <div className="roles-copy">
          <p className="eyebrow">Una collega digitale, responsabilità diverse</p>
          <h2>La stessa base.<br />Una lettura utile per ogni ruolo.</h2>
        </div>
        <div className="role-grid">
          <article className="role-card lead"><span>Direzione</span><h3>Presidente e Direzione Generale</h3><p>Che cosa cambia nel portafoglio, perché e quale decisione richiede attenzione.</p></article>
          <article className="role-card"><span>Fundraising</span><h3>Direzione Raccolta Fondi</h3><p>Performance, equilibrio fra domini, canali, team e qualità della relazione.</p></article>
          <article className="role-card"><span>Responsabili</span><h3>One-Off · Digital · F2F · Alto Potenziale</h3><p>Popolazioni, campagne, anomalie e opportunità pertinenti al proprio perimetro.</p></article>
          <article className="role-card"><span>Operativo</span><h3>Donor Care</h3><p>Priorità spiegabili, evidenze, contesto e prossimo passo sotto controllo umano.</p></article>
        </div>
      </section>

      <section className="contract section dark">
        <div className="section-number">08</div>
        <div className="contract-heading">
          <p className="eyebrow light">Il contratto dell’AI</p>
          <h2>Ogni risposta resta verificabile.</h2>
        </div>
        <div className="contract-grid">
          <article><span>01</span><h3>Fatto</h3><p>Che cosa è cambiato.</p></article>
          <article><span>02</span><h3>Confronto</h3><p>Periodo, baseline e perimetro.</p></article>
          <article><span>03</span><h3>Cause</h3><p>Contributi, concentrazione e contesto.</p></article>
          <article><span>04</span><h3>Evidenza</h3><p>KPI, popolazione e righe in Pivot.</p></article>
          <article><span>05</span><h3>Decisione</h3><p>Che cosa valutare adesso.</p></article>
          <article><span>06</span><h3>Limite</h3><p>Che cosa non sappiamo ancora.</p></article>
        </div>
        <p className="contract-close">Fatti, interpretazioni e raccomandazioni non vengono confusi.</p>
      </section>

      <section className="demo section" id="demo">
        <div className="section-number">09</div>
        <div className="demo-heading">
          <p className="eyebrow">La demo</p>
          <h2>Vedere la soluzione mentre lavora.</h2>
          <p className="lede">Un percorso breve, costruito sulle stesse evidenze appena raccontate.</p>
        </div>
        <ol className="demo-steps">
          <li><span>01</span><div><strong>Briefing</strong><p>Le due priorità sono già presenti al primo accesso.</p></div></li>
          <li><span>02</span><div><strong>Finding</strong><p>Apriamo la contrazione One-Off e il segnale HVD.</p></div></li>
          <li><span>03</span><div><strong>Evidence</strong><p>I link riaprono dati, filtri e popolazioni in Pivot.</p></div></li>
          <li><span>04</span><div><strong>Conversation</strong><p>Mettiamo alla prova l’interpretazione con una domanda critica.</p></div></li>
          <li><span>05</span><div><strong>Always on</strong><p>Programmiamo un nuovo monitoraggio con linguaggio naturale.</p></div></li>
        </ol>
        <a className="button demo-button" href="https://progettoarca.streetbeat.com/login" target="_blank" rel="noreferrer">
          Entra in Progetto Arca AI <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="closing">
        <div className="closing-image" role="img" aria-label="Attività sul campo di Progetto Arca" />
        <div className="closing-overlay" />
        <div className="closing-content">
          <p className="eyebrow light">Il prossimo passo, insieme</p>
          <h2>Arca non deve cercare il dato.</h2>
          <p>Il dato arriva con una spiegazione, un’evidenza e una prossima decisione.</p>
          <div className="closing-path"><span>Dati governati</span><b>→</b><span>Comprensione</span><b>→</b><span>Decisione</span><b>→</b><span>Azione</span></div>
          <div className="closing-ask"><span>Con Arca</span><strong>Selezionare i primi alert e le prime Next Best Action da rendere operative.</strong></div>
        </div>
      </section>

      <footer>
        <div className="brand-pair footer-brand">
          <span className="arca-lockup"><img src="/assets/arca-logo.png" alt="Progetto Arca" /></span>
          <span className="brand-separator" aria-hidden="true" />
          <span className="streetbeat-lockup"><span className="streetbeat-symbol" aria-hidden="true"><i /><i /></span>Streetbeat</span>
        </div>
        <p>Progetto Arca AI · Presentazione della soluzione · Agosto 2026</p>
      </footer>
    </main>
  );
}
