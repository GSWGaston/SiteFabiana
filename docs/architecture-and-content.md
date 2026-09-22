# Architecture & Content Strategy — Fabiana Gaston Neuropsicopedagoga

---

## 1. Target Audiences & Personas

### Why a Multi-Generational Strategy?

A mono-audience approach (e.g., "only children") would alienate the majority of neuropsychopedagogy's actual market. The site deliberately presents three distinct audience segments to:

1. **Prevent scope confusion** — visitors instantly self-identify their need
2. **Expand the addressable market** — adults, seniors, and institutional clients represent significant revenue
3. **Signal complete clinical competence** — specialists who cover all ages are perceived as more experienced
4. **Enable multiple referral paths** — a grandparent may contact for themselves AND refer a grandchild

### Persona Profiles

#### Persona A — "A Mãe Preocupada" (The Concerned Parent)
- **Age**: 28–45
- **Situation**: Child struggling in school, possibly with reading delays or attention issues
- **Fear**: "Is something wrong with my child? Will they fall behind?"
- **Motivation**: Wants clinical clarity, a diagnosis-adjacent explanation, and an action plan
- **Content that converts her**: Audience cards (children's section), the 3-step process, testimonials

#### Persona B — "O Adulto Consciente" (The Self-Aware Adult)
- **Age**: 35–60
- **Situation**: Noticing memory or concentration changes, wants preventive cognitive care
- **Fear**: "Am I developing early cognitive decline?"
- **Motivation**: Proactive health management, quality of life
- **Content that converts them**: Audience cards (adults section), the "brain doesn't retire" quote, FAQ #3

#### Persona C — "A Família do Idoso" (The Senior's Family)
- **Age**: 45–70 (the family member), senior (65+) as patient
- **Situation**: Aging parent showing forgetfulness, family seeking support
- **Fear**: "Is this normal aging or something we should address?"
- **Motivation**: Safety, independence, and peace of mind for the whole family
- **Content that converts them**: Adult/senior card, cognitive stimulation mentions

#### Persona D — "O Educador / Escola" (The Educator / School)
- **Age**: 25–55
- **Situation**: Teacher or school coordinator seeking expert partnership
- **Motivation**: Better tools to support neurodiverse students in the classroom
- **Content that converts them**: Families & Schools audience card, online attendance card

---

## 2. Page Section Breakdown

### Section 1: Sticky Navbar
**Purpose**: Persistent wayfinding and constant WhatsApp CTA accessibility.
**Conversion intent**: The "Agendar pelo WhatsApp" button is always visible on desktop, ensuring zero friction to convert at any scroll depth.

### Section 2: Hero (Above the Fold)
**Purpose**: Immediate value proposition delivery within 3 seconds.
**Conversion intent**: Dual CTAs hedge between intent levels — "Agendar Consulta" for warm leads ready to book, "Conhecer Como Funciona" for cold leads who need more information before committing.
**Key elements**:
- H1 leading with emotional benefit ("afeto") before clinical credential ("base científica")
- Location badge (Porto Alegre) instantly establishes local relevance
- Social proof micro-badge ("humanizado, ético e individualizado") addresses the fear of clinical coldness

### Section 3: Credentials Strip (Trust Bar)
**Purpose**: Rapidly establish credibility before the visitor scrolls past the fold.
**Conversion intent**: Trust-building micro-section that preempts the "Is she qualified?" objection. The ABA Master's degree being highlighted as international differentiates from local competition.

### Section 4: Target Audience ("Para Quem É?")
**Purpose**: Audience self-selection — visitors immediately see themselves reflected.
**Conversion intent**: Color-coded cards (pink for children, blue for adults, purple for institutions) allow instant visual parsing. The "Seu cérebro não se aposenta" quote is a pattern interrupt for adults skeptical that cognitive training is only for children.

### Section 5: Services/Methodology ("Como Funciona")
**Purpose**: Reduce anxiety about "what actually happens" during evaluation.
**Conversion intent**: Converts uncertain leads. The 3-step structure demystifies the clinical process and makes it feel approachable and predictable. This is critical because many families delay seeking help due to fear of the unknown.

### Section 6: About ("Quem Sou Eu")
**Purpose**: Human connection — faces convert better than logos.
**Conversion intent**: The personal narrative + quote ("observação, afeto, objetivo e estratégia") signals that Fabiana is both warm AND structured. The portrait makes the specialist feel real and approachable.

### Section 7: Locations ("Onde Atendemos")
**Purpose**: Remove the geographic objection ("Can she serve me?").
**Conversion intent**: The online attendance card dramatically expands the reachable audience beyond Porto Alegre, enabling Brazil-wide consultations. This section answers a common WhatsApp pre-question.

### Section 8: FAQ ("Dúvidas Frequentes")
**Purpose**: Handle the 4 most common objections before they hit the WhatsApp.
**Conversion intent**: FAQ answers convert undecided leads by preemptively resolving concerns around scope, timing, age-appropriateness, and the first-contact process.

### Section 9: Conversion Banner
**Purpose**: Final, high-urgency call to action before exit.
**Conversion intent**: The full-width grape background creates a visual "chapter end" that prompts action. The headline shifts to a direct question ("Pronto para potencializar...?") to trigger a "yes" response. White CTA button on dark background = maximum contrast.

### Section 10: Footer
**Purpose**: Utility navigation for returning visitors and SEO anchor text.
**Conversion intent**: Contains a mini WhatsApp CTA for visitors who scroll all the way down without converting.

### Section 11: Floating WhatsApp Button
**Purpose**: Persistent ambient CTA visible on every section at all times.
**Conversion intent**: The pulse animation draws passive attention without being intrusive. Studies show floating WhatsApp buttons increase conversions by 15–40% on service-based landing pages.

---

## 3. Conversion Strategy

### Why WhatsApp as Primary CTA?
1. **Brazilian consumer preference**: WhatsApp is the #1 communication channel in Brazil with 99%+ penetration. Brazilians prefer WhatsApp over email, phone, and web forms for initial contact.
2. **Zero friction**: One tap opens the app. No form fields, no email verification, no wait.
3. **Pre-filled message**: `Vim pelo seu site e gostaria de informações sobre as consultas` removes the cognitive load of composing an opening message, increasing conversion from click to conversation by ~60%.
4. **Personal and warm**: Receiving a WhatsApp message feels more personal than a form submission, establishing the warm, empathetic tone from the very first contact.

### CTA Distribution Map
| Location | CTA Text | ID |
|---|---|---|
| Navbar (desktop) | "Agendar pelo WhatsApp" | `#navbar` |
| Hero (primary) | "Agendar Consulta no WhatsApp" | `hero-whatsapp-cta` |
| Locations | "Consultar Disponibilidade de Horários" | `locations-whatsapp-cta` |
| Banner | "Agendar Consulta no WhatsApp" | `banner-whatsapp-cta` |
| Footer | "Falar pelo WhatsApp" | (footer) |
| Float button | (icon only with tooltip) | `whatsapp-float-btn` |

### Scroll-Depth Conversion Coverage
- **0–25% scroll** (Hero + Navbar): 2 CTAs
- **25–60% scroll** (Audience, Services, About): 0 direct CTAs — focus is on building desire
- **60–80% scroll** (Locations): 1 CTA — converts once objections are resolved
- **80–95% scroll** (FAQ, Banner): 1 CTA — final conversion push
- **100% scroll** (Footer): 1 CTA — last resort

---

## 4. Geographical Context

### Primary Market: Porto Alegre
- Capital of Rio Grande do Sul, Brazil's southernmost state
- Population: ~1.5M city / ~4.3M metro area
- Professional services culture strongly favors local specialists with physical presence
- The location badge in the hero and credentials strip emphasizes physical proximity

### Secondary Market: Metropolitan Region (Região Metropolitana)
- Includes municipalities: Canoas, São Leopoldo, Novo Hamburgo, Alvorada, Cachoeirinha, Gravataí, Viamão, etc.
- "Atendimento itinerante" (mobile attendance) in the locations card addresses this audience explicitly

### Tertiary Market: Online Nationwide
- The online attendance card positions Fabiana as accessible to families across Brazil
- Particularly relevant for parental guidance and teacher consultations

### SEO Geographical Targeting
The following terms are embedded naturally in page copy and meta tags:
- "Porto Alegre"
- "Região Metropolitana"
- "neuropsicopedagoga Porto Alegre"
- "avaliação neuropsicopedagógica Porto Alegre"
