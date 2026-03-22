// atlas.js — Інтерактивний атлас 64 архетипів SUBIT
// Містить дані про архетипи, функції фільтрації, пошуку та модального вікна

// ======================= ДАНІ =======================
const archetypesData = [
    {number:1, who:"ME", where:"EAST", when:"SPRING", code:"101010", name:"Пробудження героя", description:"Свідомість прокидається в ранковому світлі. Відчуття власної унікальності, покликання. Початок індивідуації, де его ще не стикалося з тінню.", jungian_concept:"Формування ego", task:"Відокремитися від колективних ідентичностей (WE) і наважитися на власний шлях."},
    {number:2, who:"ME", where:"EAST", when:"SUMMER", code:"101011", name:"Герой на вершині", description:"Его досягає розквіту, соціальної реалізації. Може виникати гординя, ототожнення з Персоною.", jungian_concept:"Інфляція ego", task:"Зберегти зв’язок із несвідомим, не піддатися інфляції."},
    {number:3, who:"ME", where:"EAST", when:"AUTUMN", code:"101001", name:"Сутінки героя", description:"Его починає помічати власні межі, витіснені аспекти повертаються. Відчуття втрати напрямку.", jungian_concept:"Криза героя", task:"Інтегрувати тінь, не впадаючи в депресію."},
    {number:4, who:"ME", where:"EAST", when:"WINTER", code:"101000", name:"Спокійний свідок", description:"Его вже не ідентичне герою; воно стає спостерігачем внутрішніх процесів. Тиха мудрість.", jungian_concept:"Его, що співпрацює із Самістю", task:"Дозволити Самісті керувати, не втрачаючи свідомості."},
    {number:5, who:"ME", where:"SOUTH", when:"SPRING", code:"101110", name:"Пристрасть, що народжується", description:"Потужний афект, сексуальна чи творча енергія, що шукає вираження. Его захоплене пристрастю.", jungian_concept:"Лібідо як творча сила", task:"Спрямувати енергію, не дати їй зруйнувати межі."},
    {number:6, who:"ME", where:"SOUTH", when:"SUMMER", code:"101111", name:"Тріумф пристрасті", description:"Его реалізує свою волю в повній силі. Можливе надмірне ототожнення з пристрастю.", jungian_concept:"Героїчне діяння", task:"Не втратити зв’язок із душевною глибиною (анімою/анімусом)."},
    {number:7, who:"ME", where:"SOUTH", when:"AUTUMN", code:"101101", name:"Вигорання", description:"Після піку настає втома, розчарування. Его стикається з власною обмеженістю.", jungian_concept:"Тінь пристрасті", task:"Пережити депресивну фазу як необхідний спуск у несвідоме."},
    {number:8, who:"ME", where:"SOUTH", when:"WINTER", code:"101100", name:"Тихий вогонь", description:"Пристрасть стає внутрішнім теплом, що не потребує зовнішнього вияву. Его зберігає енергію.", jungian_concept:"Інтегрована пристрасть", task:"Зберігати внутрішній вогонь у період зовнішнього спокою."},
    {number:9, who:"ME", where:"WEST", when:"SPRING", code:"100110", name:"Поклик тіні", description:"Его відчуває неспокій, раптові емоції, що суперечать самоідентифікації. Перші симптоми.", jungian_concept:"Тінь починає виходити на поверхню", task:"Не витісняти, а дослідити те, що з’являється."},
    {number:10, who:"ME", where:"WEST", when:"SUMMER", code:"100111", name:"Зустріч із тінню", description:"Его стикається з тим, що заперечувало. Може виникнути криза ідентичності.", jungian_concept:"Конфронтація ego з витісненим", task:"Визнати тінь частиною себе, інтегрувати її без ототожнення."},
    {number:11, who:"ME", where:"WEST", when:"AUTUMN", code:"100101", name:"Збір плодів тіні", description:"Его приймає свої темні аспекти, вони стають джерелом сили.", jungian_concept:"Тінь інтегрується", task:"Використати інтегровану тінь для творчості."},
    {number:12, who:"ME", where:"WEST", when:"WINTER", code:"100100", name:"Мудрість тіні", description:"Его не протистоїть тіні, а співпрацює з нею. Глибока автентичність.", jungian_concept:"Тінь перетворюється на внутрішнього провідника", task:"Передати досвід іншим (перехід до YOU або THEY)."},
    {number:13, who:"ME", where:"NORTH", when:"SPRING", code:"100010", name:"Тягар до центру", description:"Его відчуває, що є щось більше, ніж воно. Сакральний трепет.", jungian_concept:"Перше передчуття Самості", task:"Не ототожнювати це відчуття з власною величчю."},
    {number:14, who:"ME", where:"NORTH", when:"SUMMER", code:"100011", name:"Его на службі Самості", description:"Его спрямовує свої зусилля на реалізацію внутрішнього покликання. Гармонія.", jungian_concept:"Індивідуація на підйомі", task:"Не втратити зв’язок із тінню (WEST) і пристрастю (SOUTH)."},
    {number:15, who:"ME", where:"NORTH", when:"AUTUMN", code:"100001", name:"Символічна смерть его", description:"Его відпускає контроль, довіряючи Самісті. Криза ідентичності, що веде до духовного переродження.", jungian_concept:"Его відпускає контроль", task:"Пережити «ніч душі» як необхідний етап."},
    {number:16, who:"ME", where:"NORTH", when:"WINTER", code:"100000", name:"Самість у центрі", description:"Его більше не є господарем; воно – слухняний інструмент цілісності.", jungian_concept:"Его стало провідником Самості", task:"Бути присутнім у світі, не ототожнюючись із жодною з позицій."},
    {number:17, who:"WE", where:"EAST", when:"SPRING", code:"111010", name:"Народження спільноти", description:"Група формує спільну ідентичність, ритуали, міфи. Індивід знаходить захист.", jungian_concept:"Participatio mystica", task:"Не втратити індивідуальність у процесі злиття."},
    {number:18, who:"WE", where:"EAST", when:"SUMMER", code:"111011", name:"Розквіт колективного героя", description:"Спільнота досягає мети, тріумфує. Може виникати інфляція «ми».", jungian_concept:"Національний чи соціальний підйом", task:"Зберігати критичне мислення, не демонізувати інших (THEY)."},
    {number:19, who:"WE", where:"EAST", when:"AUTUMN", code:"111001", name:"Розчарування в ідеалі", description:"Спільнота стикається з власною тінню (злочини, помилки).", jungian_concept:"Криза колективної ідентичності", task:"Інтегрувати колективну тінь, не впадаючи в провину."},
    {number:20, who:"WE", where:"EAST", when:"WINTER", code:"111000", name:"Тиха спільнота", description:"Група існує без примусу, підтримуючи кожного на його шляху.", jungian_concept:"Зріла спільнота", task:"Зберігати спільноту як простір для індивідуації."},
    {number:21, who:"WE", where:"SOUTH", when:"SPRING", code:"111110", name:"Колективна пристрасть", description:"Спільний афект, свято, революційна енергія.", jungian_concept:"Архетип натовпу", task:"Не дати пристрасті перерости в насильство."},
    {number:22, who:"WE", where:"SOUTH", when:"SUMMER", code:"111111", name:"Тріумф натовпу", description:"Спільнота відчуває всемогутність. Небезпека тоталітаризму.", jungian_concept:"Колективна інфляція", task:"Зберегти індивідуальну свідомість усередині маси."},
    {number:23, who:"WE", where:"SOUTH", when:"AUTUMN", code:"111101", name:"Наслідки пристрасті", description:"Група стикається з руйнуваннями, яких завдала.", jungian_concept:"Колективна тінь виходить назовні", task:"Прийняти відповідальність, не шукати цапа-відбувайла."},
    {number:24, who:"WE", where:"SOUTH", when:"WINTER", code:"111100", name:"Погашений вогонь", description:"Пристрасть трансформувалася в традицію, обряд.", jungian_concept:"Спільнота в стані спокою", task:"Оновити ритуали, щоб вони не стали мертвою формою."},
    {number:25, who:"WE", where:"WEST", when:"SPRING", code:"110110", name:"Колективна тінь пробуджується", description:"Група починає усвідомлювати свої витіснені аспекти. Викриття, люстрація, покаяння.", jungian_concept:"Група починає усвідомлювати тінь", task:"Не впасти в самонищення, але й не заперечувати."},
    {number:26, who:"WE", where:"WEST", when:"SUMMER", code:"110111", name:"Зіткнення з колективною тінню", description:"Конфронтація із злочинами минулого. Гостра криза ідентичності, розпад старих міфів.", jungian_concept:"Конфронтація з колективною тінню", task:"Інтегрувати тінь на рівні спільноти, створити новий міф."},
    {number:27, who:"WE", where:"WEST", when:"AUTUMN", code:"110101", name:"Примирення з минулим", description:"Спільнота приймає свою темну історію як частину себе.", jungian_concept:"Колективна інтеграція", task:"Відпустити провину, зберігаючи пам’ять."},
    {number:28, who:"WE", where:"WEST", when:"WINTER", code:"110100", name:"Мудрість спільноти", description:"Група стає хранителем досвіду, не повторюючи помилок.", jungian_concept:"Зріле колективне несвідоме", task:"Передавати мудрість наступним поколінням."},
    {number:29, who:"WE", where:"NORTH", when:"SPRING", code:"110010", name:"Духовний початок спільноти", description:"Група формується навколо спільного сенсу, цінностей.", jungian_concept:"Релігійна чи філософська спільнота", task:"Уникати сектантської винятковості."},
    {number:30, who:"WE", where:"NORTH", when:"SUMMER", code:"110011", name:"Розквіт духовної спільноти", description:"Інституція, що транслює архетипні істини.", jungian_concept:"Церква, орден, школа", task:"Не замінювати живу душу догмою."},
    {number:31, who:"WE", where:"NORTH", when:"AUTUMN", code:"110001", name:"Криза віри", description:"Спільнота втрачає зв’язок із джерелом, стає формальною.", jungian_concept:"Занепад інституцій", task:"Повернутися до архетипних коренів, оновити символи."},
    {number:32, who:"WE", where:"NORTH", when:"WINTER", code:"110000", name:"Спільнота самітників", description:"Група існує в спокої, підтримуючи внутрішню роботу кожного.", jungian_concept:"Монастир, еко-селище", task:"Бути прикладом цілісності для ширшого світу."},
    {number:33, who:"YOU", where:"EAST", when:"SPRING", code:"011010", name:"Зустріч із душею", description:"Проєкція на іншого, закоханість, творче натхнення.", jungian_concept:"Аніма/анімус з’являються", task:"Не ототожнювати іншого з душевним образом."},
    {number:34, who:"YOU", where:"EAST", when:"SUMMER", code:"011011", name:"Союз із душею", description:"Відносини, де проєкція частково знята, діалог можливий.", jungian_concept:"Свідоме відношення з анімою/анімусом", task:"Інтегрувати якості аніми/анімуса у власну психіку."},
    {number:35, who:"YOU", where:"EAST", when:"AUTUMN", code:"011001", name:"Розчарування в іншому", description:"Виявляється, що інший не відповідає внутрішньому образу.", jungian_concept:"Криза проєкції", task:"Повернути проєкцію, побачити іншого реально."},
    {number:36, who:"YOU", where:"EAST", when:"WINTER", code:"011000", name:"Внутрішній діалог", description:"Людина веде діалог із душею без зовнішніх проєкцій.", jungian_concept:"Аніма/анімус інтегровані", task:"Підтримувати живий контакт із внутрішньою протилежністю."},
    {number:37, who:"YOU", where:"SOUTH", when:"SPRING", code:"011110", name:"Пристрасть до іншого", description:"Сильне потягнення, злиття, втрата меж.", jungian_concept:"Еротична проєкція", task:"Не втратити себе в іншому."},
    {number:38, who:"YOU", where:"SOUTH", when:"SUMMER", code:"011111", name:"Полум’яний союз", description:"Зустріч протилежностей у повноті. Може бути як реальний шлюб, так і внутрішнє єднання.", jungian_concept:"Coniunctio – символічний шлюб", task:"Утримувати єдність, не зливаючись."},
    {number:39, who:"YOU", where:"SOUTH", when:"AUTUMN", code:"011101", name:"Попіл пристрасті", description:"Конфлікти, зрада, охолодження.", jungian_concept:"Вигорання відносин", task:"Пережити втрату, не впадаючи в цинізм."},
    {number:40, who:"YOU", where:"SOUTH", when:"WINTER", code:"011100", name:"Тепло пам’яті", description:"Пристрасть перетворилася на глибоку вдячність і спокій.", jungian_concept:"Інтегрована любов", task:"Зберігати любов як внутрішню силу."},
    {number:41, who:"YOU", where:"WEST", when:"SPRING", code:"010110", name:"Тінь іншого", description:"У іншому бачимо те, що не приймаємо в собі. Конфлікти.", jungian_concept:"Проєкція власної тіні на партнера", task:"Повернути проєкцію, визнати тінь у собі."},
    {number:42, who:"YOU", where:"WEST", when:"SUMMER", code:"010111", name:"Конфронтація з тінню у відносинах", description:"Партнери стикаються з найгіршим один в одному, що відображає їхню власну темряву.", jungian_concept:"Відносини як простір інтеграції тіні", task:"Не звинувачувати, а досліджувати разом."},
    {number:43, who:"YOU", where:"WEST", when:"AUTUMN", code:"010101", name:"Прийняття тіні іншого", description:"Партнери бачать один одного реально, без ідеалізації.", jungian_concept:"Зрілі відносини", task:"Підтримувати зростання одне одного."},
    {number:44, who:"YOU", where:"WEST", when:"WINTER", code:"010100", name:"Таємниця іншого", description:"Глибока близькість, яка не прагне володіти.", jungian_concept:"Відносини, що поважають непізнаване", task:"Дозволити іншому бути окремою таємницею."},
    {number:45, who:"YOU", where:"NORTH", when:"SPRING", code:"010010", name:"Духовний наставник", description:"Людина бачить в іншому носія мудрості, цілісності.", jungian_concept:"Проєкція Самості на іншого", task:"Не залишатися в проєкції, знайти Самість у собі."},
    {number:46, who:"YOU", where:"NORTH", when:"SUMMER", code:"010011", name:"Спільний пошук істини", description:"Партнери разом досліджують глибини, підтримують індивідуацію один одного.", jungian_concept:"Відносини, засновані на спільному духовному шляху", task:"Зберігати автономію, не створюючи залежності."},
    {number:47, who:"YOU", where:"NORTH", when:"AUTUMN", code:"010001", name:"Криза ідеалів", description:"Виявляється, що наставник чи партнер не є втіленням Самості.", jungian_concept:"Розчарування в духовному авторитеті", task:"Пробачити, відпустити, взяти відповідальність за свій шлях."},
    {number:48, who:"YOU", where:"NORTH", when:"WINTER", code:"010000", name:"Внутрішній шлюб", description:"Зовнішній інший більше не потрібен для цілісності; людина перебуває в союзі зі своєю Самістю.", jungian_concept:"Coniunctio oppositorum усередині", task:"Бути присутнім для інших, не втрачаючи центру."},
    {number:49, who:"THEY", where:"EAST", when:"SPRING", code:"001010", name:"Архетип з’являється", description:"Людина відчуває присутність чогось більшого, ніж вона.", jungian_concept:"Поява архетипного образу в снах чи культурі", task:"Не ототожнюватися з архетипом, зберігати его."},
    {number:50, who:"THEY", where:"EAST", when:"SUMMER", code:"001011", name:"Міф, що оживає", description:"Людина живе відповідно до глибокого міфу, відчуває призначення.", jungian_concept:"Активований архетип направляє життя", task:"Не стати одержимим архетипом, зберігати рефлексію."},
    {number:51, who:"THEY", where:"EAST", when:"AUTUMN", code:"001001", name:"Смерть старого міфу", description:"Втрата сенсу, депресія, нігілізм.", jungian_concept:"Архетип відступає", task:"Витримати порожнечу, очікуючи нового символу."},
    {number:52, who:"THEY", where:"EAST", when:"WINTER", code:"001000", name:"Народження нового символу", description:"У темряві з’являється світло, нове бачення.", jungian_concept:"Саморегуляція психіки", task:"Довіритися несвідомому, зафіксувати символ."},
    {number:53, who:"THEY", where:"SOUTH", when:"SPRING", code:"001110", name:"Колективна пристрасть як архетип", description:"Людина відчуває себе частиною стихії, що перевершує її.", jungian_concept:"Архетип війни, революції, еросу", task:"Не ототожнюватися з руйнівною силою."},
    {number:54, who:"THEY", where:"SOUTH", when:"SUMMER", code:"001111", name:"Танок стихій", description:"Екстаз, творчість, але й ризик одержимості.", jungian_concept:"Повне вираження архетипної пристрасті", task:"Спрямувати енергію в символічну форму."},
    {number:55, who:"THEY", where:"SOUTH", when:"AUTUMN", code:"001101", name:"Наслідки архетипного вогню", description:"Після великої пристрасті – спустошення, що вимагає інтеграції.", jungian_concept:"Архетип залишає попіл", task:"Зібрати те, що залишилося, як скарб."},
    {number:56, who:"THEY", where:"SOUTH", when:"WINTER", code:"001100", name:"Священний вогонь у спокої", description:"Людина зберігає внутрішній вогонь, не спалюючи нічого назовні.", jungian_concept:"Архетип пристрасті, інтегрований у тишу", task:"Бути джерелом тепла для інших."},
    {number:57, who:"THEY", where:"WEST", when:"SPRING", code:"000110", name:"Тінь колективного несвідомого", description:"Людина стикається з колективною тінню – насильством, жорстокістю у снах чи зовні.", jungian_concept:"Архетип зла, демонічне", task:"Не витісняти, але й не ототожнюватися."},
    {number:58, who:"THEY", where:"WEST", when:"SUMMER", code:"000111", name:"Одержимість тінню", description:"Людина підпадає під вплив руйнівних архетипів (нацизм, культи).", jungian_concept:"Архетипна одержимість", task:"Знайти світло всередині темряви, відновити ego."},
    {number:59, who:"THEY", where:"WEST", when:"AUTUMN", code:"000101", name:"Інтеграція колективної тіні", description:"Людина визнає існування зла в собі й у світі, не ототожнюючись із ним.", jungian_concept:"Прийняття темряви як частини цілого", task:"Перетворити тінь на мудрість."},
    {number:60, who:"THEY", where:"WEST", when:"WINTER", code:"000100", name:"Мудрість пітьми", description:"Людина черпає силу з глибин, які раніше лякали.", jungian_concept:"Тінь стає провідником до Самості", task:"Допомагати іншим у їхній темряві."},
    {number:61, who:"THEY", where:"NORTH", when:"SPRING", code:"000010", name:"Зародок Самості", description:"Людина відчуває, що є щось, що об’єднує всі протилежності.", jungian_concept:"Самість як внутрішній центр починає усвідомлюватися", task:"Досліджувати символи цілісності (мандала, коло)."},
    {number:62, who:"THEY", where:"NORTH", when:"SUMMER", code:"000011", name:"Життя як мандала", description:"Гармонія, відчуття сенсу, синхронії.", jungian_concept:"Самість активно керує життям", task:"Залишатися відкритим до змін, не закостеніти."},
    {number:63, who:"THEY", where:"NORTH", when:"AUTUMN", code:"000001", name:"Смерть у Самісті", description:"Людина приймає власну кінцевість як частину цілого.", jungian_concept:"Останнє відпускання ego", task:"Передати досвід, завершити незавершене."},
    {number:64, who:"THEY", where:"NORTH", when:"WINTER", code:"000000", name:"Повернення до джерела", description:"Стан, що перевершує індивідуальне життя.", jungian_concept:"Самість як вічний центр", task:"Бути присутнім як чисте буття."}
];

// ======================= ДОПОМІЖНІ ФУНКЦІЇ =======================
/**
 * Визначає алхімічну фазу на основі коду архетипу
 * @param {string} code - шестибітовий код (наприклад "101010")
 * @returns {string} назва фази
 */
function getPhaseFromCode(code) {
    if (!code) return "";
    const whoBits = code.substring(0,2);
    const whereBits = code.substring(2,4);
    const whenBits = code.substring(4,6);
    // Повна відповідність CITRINITAS (ME × EAST × SPRING)
    if (whoBits === "10" && whereBits === "10" && whenBits === "10") return "CITRINITAS";
    // RUBEDO (WE × SOUTH × SUMMER)
    if (whoBits === "11" && whereBits === "11" && whenBits === "11") return "RUBEDO";
    // NIGREDO (YOU × WEST × AUTUMN)
    if (whoBits === "01" && whereBits === "01" && whenBits === "01") return "NIGREDO";
    // ALBEDO (THEY × NORTH × WINTER)
    if (whoBits === "00" && whereBits === "00" && whenBits === "00") return "ALBEDO";
    // Узагальнена фаза за суб’єктом
    if (whoBits === "10") return "CITRINITAS (ME)";
    if (whoBits === "11") return "RUBEDO (WE)";
    if (whoBits === "01") return "NIGREDO (YOU)";
    return "ALBEDO (THEY)";
}

/**
 * Відображає модальне вікно з детальною інформацією про архетип
 * @param {Object} archetype - об'єкт архетипу
 */
function showModal(archetype) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const coordFull = `${archetype.who} × ${archetype.where} × ${archetype.when}`;
    const phaseFull = getPhaseFromCode(archetype.code);
    
    modalBody.innerHTML = `
        <span class="modal-close">&times;</span>
        <div class="modal-title">${archetype.number}. ${archetype.name}</div>
        <div class="modal-sub">${coordFull} &nbsp;|&nbsp; ${archetype.code} &nbsp;|&nbsp; ${phaseFull}</div>
        <div class="modal-section">
            <h4>📖 Опис</h4>
            <p>${archetype.description}</p>
        </div>
        <div class="modal-section">
            <h4>🧠 Юнгівський концепт</h4>
            <p>${archetype.jungian_concept}</p>
        </div>
        <div class="modal-section">
            <h4>🎯 Завдання індивідуації</h4>
            <p>${archetype.task}</p>
        </div>
    `;
    modal.classList.add('active');
    
    const closeSpan = modalBody.querySelector('.modal-close');
    closeSpan.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });
}

// ======================= ГОЛОВНА ФУНКЦІЯ РЕНДЕРИНГУ =======================
let currentFilter = "all";
let searchTerm = "";

function renderGrid() {
    const grid = document.getElementById('archetypeGrid');
    const filtered = archetypesData.filter(arch => {
        const matchesFilter = currentFilter === "all" || arch.who === currentFilter;
        const matchesSearch = searchTerm === "" || 
            arch.name.toLowerCase().includes(searchTerm) ||
            arch.description.toLowerCase().includes(searchTerm) ||
            arch.jungian_concept.toLowerCase().includes(searchTerm) ||
            arch.code.includes(searchTerm) ||
            `${arch.who} × ${arch.where} × ${arch.when}`.toLowerCase().includes(searchTerm);
        return matchesFilter && matchesSearch;
    });
    
    document.getElementById('stats').innerText = `${filtered.length} архетипів`;
    
    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:2rem;">Нічого не знайдено. Спробуйте інший запит.</div>`;
        return;
    }
    
    grid.innerHTML = filtered.map(arch => {
        const coordStr = `${arch.who} × ${arch.where} × ${arch.when}`;
        const phaseLabel = getPhaseFromCode(arch.code);
        return `
            <div class="card" data-id="${arch.number}">
                <div class="card-header">
                    <span class="archetype-name">${arch.number}. ${arch.name}</span>
                    <span class="archetype-code">${arch.code}</span>
                </div>
                <div class="card-body">
                    <div class="coords">${coordStr}</div>
                    <div class="desc-preview">${arch.description.substring(0, 100)}${arch.description.length>100?'…':''}</div>
                    <div class="phase-badge">${phaseLabel}</div>
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            const archetype = archetypesData.find(a => a.number === id);
            if (archetype) showModal(archetype);
        });
    });
}

// ======================= ІНІЦІАЛІЗАЦІЯ =======================
function init() {
    renderGrid();
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            renderGrid();
        });
    }
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderGrid();
        });
    });
}

// Запуск після завантаження DOM
document.addEventListener('DOMContentLoaded', init);
