let BUILTIN_PRESETS=Array.isArray(globalThis.SS14_FORM_DATA?.presets)?globalThis.SS14_FORM_DATA.presets:[];
const GROUPS = {"basic": {"ru": "Основные формы", "en": "Basic forms"}, "centcom": {"ru": "Центральное Командование", "en": "Central Command"}, "command": {"ru": "Командование", "en": "Command"}, "legal": {"ru": "Юридический департамент", "en": "Legal Department"}, "security": {"ru": "Служба Безопасности", "en": "Security"}, "medical": {"ru": "Медицинский отдел", "en": "Medical"}, "engineering": {"ru": "Инженерный отдел", "en": "Engineering"}, "science": {"ru": "Научно-исследовательский отдел", "en": "Science"}, "cargo": {"ru": "Отдел снабжения", "en": "Cargo"}, "service": {"ru": "Сервисный отдел", "en": "Service"}, "communications": {"ru": "Связь с ЦК", "en": "Central Command communications"}, "custom": {"ru": "Мои шаблоны", "en": "My templates"}};
GROUPS.syndicate={ru:"Синдикат",en:"Syndicate"};
const I18N = {
 ru:{
  newDoc:"Новый",copy:"Копировать",presetsOverline:"БИБЛИОТЕКА",presets:"Шаблоны",
  search:"Поиск по шаблонам…",savePreset:"Сохранить копию",updatePreset:"Обновить свой",
  exportPreset:"Экспорт",importPreset:"Импорт",structureOverline:"КОНСТРУКТОР",structure:"Структура документа",
  headerBlock:"Шапка",textBlock:"Текст",dividerBlock:"Разделитель",reset:"Сбросить",
  preview:"Предпросмотр",raw:"Разметка",selectBlock:"Выберите блок для редактирования.",
  blockName:"Название блока",content:"Содержимое",alignment:"Выравнивание",
  removeBlock:"Удалить блок",quickFields:"Быстрое заполнение",fieldsHint:"Можно вводить прямо на бумаге",
  noFields:"В этом документе пока нет полей.",addField:"＋ Поле",customFieldPrompt:"Название нового поля",
  customPresetName:"Название своего шаблона",save:"Сохранить",cancel:"Отмена",
  imported:"Шаблон импортирован",copied:"Разметка скопирована",saved:"Шаблон сохранён",
  updated:"Шаблон обновлён",builtinUpdate:"Встроенный шаблон нельзя перезаписать — сохраните копию.",
  noCustom:"Сначала загрузите свой шаблон.",confirmReset:"Сбросить все изменения текущего документа?",
  confirmDelete:"Удалить этот пользовательский шаблон?",deletePreset:"Удалить шаблон",
  missing:"Заполните поля: ",ready:"Поля заполнены",custom:"Пользовательский",
  required:"обязательное",nameRu:"Название RU",nameEn:"Название EN",pasteJson:"Вставьте JSON шаблона",
  importTitle:"Импорт шаблона",presetTitle:"Сохранить как свой шаблон",blank:"Новый документ",
  document:"Документ",header:"Шапка",title:"Название",details:"Сведения",text:"Содержание",stamp:"Печати",
  left:"Слева",center:"По центру",right:"Справа",fillFields:"Поля",editableCopy:"Редактируемый текст",
  editTitle:"Изменить название документа",editText:"Изменить текст документа",editWording:"Изменить текст",
  editWordingHint:"Фиолетовые области — это текст самого документа. Синие поля внутри них останутся отдельными заполняемыми значениями.",
  departmentRoute:"Кодификация документа",senderDepartment:"Отправитель",recipientDepartment:"Получатель",
  internalDocument:"Внутренний документ — один код",customCode:"Свой код",chooseDepartment:"Выберите отдел",
  apply:"Применить",departmentCode:"Код документа",noRecipient:"Без получателя",edit:"Изменить",
  finderOverline:"ДОКУМЕНТЫ",finderTitle:"Найти документ",smartSearch:"Что нужно оформить?",
  searchHint:"Например: получить доступ в медбей",findMode:"Поиск",browseMode:"Каталог",
  documentOverline:"ДОКУМЕНТ",fillMode:"Заполнить",manualMode:"Вручную",
  recommended:"Подходящие документы",favorites:"Избранное",recent:"Недавние",popular:"Частые",
  allDocuments:"Все документы",matchedBecause:"Подходит",fieldsCompleted:"полей заполнено",
  mainFields:"Основные данные",documentFields:"Поля документа",
  editDocumentTitle:"Изменить название",editDocumentText:"Изменить текст",
  noSearchResults:"Ничего не найдено. Попробуйте описать ситуацию короче.",
  clearFields:"Очистить",drafts:"Черновики",newSheet:"Новый лист",
  draftsTitle:"Черновики",lastDraft:"Последний автосохранённый",savedDrafts:"Сохранённые",
  noDrafts:"Черновиков пока нет.",openDraft:"Открыть",saveDraft:"Сохранить текущий",
  deleteDraft:"Удалить",draftName:"Название черновика",cleanStarted:"Открыт чистый бланк",
  draftSaved:"Черновик сохранён",draftOpened:"Черновик открыт",autoSaved:"Автосохранение",
  profiles:"Профили",profilesTitle:"Профили персонажей",useProfile:"Заполнить из профиля",newProfile:"Новый профиль",
  profileLabel:"Название профиля",profileName:"ФИО",profileJob:"Должность",profileStation:"Станция",profileDepartment:"Отдел",profileDepartmentCustom:"Свой отдел",assignRole:"Назначить роль",roleHint:"Персонаж заполнит только выбранную роль",
  profileApply:"Заполнить",profileEdit:"Изменить",profileDelete:"Удалить",profileSave:"Сохранить профиль",noProfiles:"Профилей пока нет.",
  profileConflict:"В документе уже есть заполненные поля. Что сделать?",onlyEmpty:"Заполнить только пустые",replaceFilled:"Заменить заполненные",profileApplied:"Профиль применён",profileJobCustom:"Своя должность",profileChooseJob:"Выберите должность",profileExport:"Экспорт",profileImport:"Импорт",profileImportError:"Не удалось прочитать файл профилей",previewScale:"Масштаб",
  clauses:"Формулировки",clausesTitle:"Стандартные формулировки",insertClause:"Вставить",customClause:"Своя формулировка",saveClause:"Сохранить",clauseInserted:"Формулировка добавлена",noClauses:"Сохранённых формулировок нет.",
  suggestCode:"Предложить код",templateCode:"Код шаблона",profileCode:"Код из профиля",personalCode:"Личный документ",clipboardError:"Не удалось скопировать автоматически.",quickChoice:"Быстрый выбор",fitPreview:"По размеру",more:"Ещё",allClauses:"Все формулировки",saveFieldPreset:"Сохранить значение",fieldPresetSaved:"Значение сохранено"
 },
 en:{
  newDoc:"New",copy:"Copy",presetsOverline:"LIBRARY",presets:"Templates",
  search:"Search templates…",savePreset:"Save a copy",updatePreset:"Update mine",
  exportPreset:"Export",importPreset:"Import",structureOverline:"BUILDER",structure:"Document structure",
  headerBlock:"Header",textBlock:"Text",dividerBlock:"Divider",reset:"Reset",
  preview:"Paper preview",raw:"Raw markup",selectBlock:"Select a block to edit it.",
  blockName:"Block name",content:"Content",alignment:"Alignment",
  removeBlock:"Remove block",quickFields:"Quick fill",fieldsHint:"You can type directly on the paper",
  noFields:"This document does not have any fields yet.",addField:"＋ Field",customFieldPrompt:"New field label",
  customPresetName:"Custom preset name",save:"Save",cancel:"Cancel",
  imported:"Template imported",copied:"Markup copied",saved:"Template saved",
  updated:"Template updated",builtinUpdate:"Built-in templates are protected — save a custom copy.",
  noCustom:"Load one of your custom templates first.",confirmReset:"Reset all changes to this document?",
  confirmDelete:"Delete this custom template?",deletePreset:"Delete preset",
  missing:"Fill fields: ",ready:"Fields completed",custom:"Custom",
  required:"required",nameRu:"RU name",nameEn:"EN name",pasteJson:"Paste template JSON",
  importTitle:"Import template",presetTitle:"Save as custom preset",blank:"New document",
  document:"Document",header:"Header",title:"Title",details:"Details",text:"Content",stamp:"Stamp area",
  left:"Left",center:"Centre",right:"Right",fillFields:"Fields",editableCopy:"Editable wording",
  editTitle:"Edit document title",editText:"Edit document wording",editWording:"Edit wording",
  editWordingHint:"Purple regions are the document's wording. Blue fields inside them remain separate fill-in values.",
  departmentRoute:"Document codification",senderDepartment:"Sender",recipientDepartment:"Recipient",
  internalDocument:"Internal document — one code",customCode:"Custom code",chooseDepartment:"Choose department",
  apply:"Apply",departmentCode:"Document code",noRecipient:"No recipient",edit:"Edit",
  finderOverline:"DOCUMENTS",finderTitle:"Find a document",smartSearch:"What do you need?",
  searchHint:"Example: request access to Medical",findMode:"Search",browseMode:"Catalogue",
  documentOverline:"DOCUMENT",fillMode:"Fill in",manualMode:"Manual",
  recommended:"Matching documents",favorites:"Favourites",recent:"Recent",popular:"Common",
  allDocuments:"All documents",matchedBecause:"Match",fieldsCompleted:"fields completed",
  mainFields:"Main details",documentFields:"Document fields",
  editDocumentTitle:"Edit title",editDocumentText:"Edit wording",
  noSearchResults:"Nothing found. Try describing the situation more simply.",
  clearFields:"Clear",drafts:"Drafts",newSheet:"New sheet",
  draftsTitle:"Drafts",lastDraft:"Last autosave",savedDrafts:"Saved",
  noDrafts:"No drafts yet.",openDraft:"Open",saveDraft:"Save current",
  deleteDraft:"Delete",draftName:"Draft name",cleanStarted:"Clean form opened",
  draftSaved:"Draft saved",draftOpened:"Draft opened",autoSaved:"Autosave",
  profiles:"Profiles",profilesTitle:"Character profiles",useProfile:"Fill from profile",newProfile:"New profile",
  profileLabel:"Profile name",profileName:"Full name",profileJob:"Job",profileStation:"Station",profileDepartment:"Department",profileDepartmentCustom:"Custom department",assignRole:"Assign role",roleHint:"The character fills only the selected role",
  profileApply:"Fill",profileEdit:"Edit",profileDelete:"Delete",profileSave:"Save profile",noProfiles:"No profiles yet.",
  profileConflict:"Some document fields already contain text. What should happen?",onlyEmpty:"Fill empty fields only",replaceFilled:"Replace filled fields",profileApplied:"Profile applied",profileJobCustom:"Custom job",profileChooseJob:"Choose a job",profileExport:"Export",profileImport:"Import",profileImportError:"Could not read the profiles file",previewScale:"Scale",
  clauses:"Clauses",clausesTitle:"Standard clauses",insertClause:"Insert",customClause:"Custom clause",saveClause:"Save",clauseInserted:"Clause inserted",noClauses:"No saved clauses.",
  suggestCode:"Suggest code",templateCode:"Template code",profileCode:"Profile code",personalCode:"Personal document",clipboardError:"Automatic copy failed.",quickChoice:"Quick choices",fitPreview:"Fit",more:"More",allClauses:"All clauses",saveFieldPreset:"Save value",fieldPresetSaved:"Value saved"
 }
};
const REQUIRED_KEYS=["station","department_code","shift_time","author_name","author_job"];
const TYPE_LABELS={header:"header",title:"title",details:"details",text:"text",stamp:"stamp",divider:"dividerBlock"};
let DEPARTMENTS=[{"id":"centcom","code":"ЦК","ru":"Центральное командование"},{"id":"command","code":"КОМ","ru":"Командование"},{"id":"security","code":"СБ","ru":"Служба Безопасности"},{"id":"engineering","code":"ИНЖ","ru":"Инженерный отдел"},{"id":"medical","code":"МЕД","ru":"Медицинский отдел"},{"id":"science","code":"НИО","ru":"Научно-исследовательский отдел"},{"id":"cargo","code":"СНБ","ru":"Отдел снабжения"},{"id":"service","code":"СРВ","ru":"Сервисный отдел"},{"id":"legal","code":"ЮР","ru":"Юридический департамент"},{"id":"personal","code":"ПД","ru":"Персональный документ"}];
let JOBS_BY_DEPARTMENT={"КОМ":[{"id":"captain","ru":"Капитан"},{"id":"head_of_personnel","ru":"Глава персонала"},{"id":"head_of_security","ru":"Глава Службы Безопасности"},{"id":"chief_engineer","ru":"Старший инженер"},{"id":"research_director","ru":"Научный руководитель"},{"id":"chief_medical_officer","ru":"Главный врач"},{"id":"quartermaster","ru":"Квартирмейстер"},{"id":"internal_affairs_agent","ru":"Агент внутренних дел"}],"СБ":[{"id":"head_of_security","ru":"Глава Службы Безопасности"},{"id":"warden","ru":"Смотритель"},{"id":"security_officer","ru":"Офицер Службы Безопасности"},{"id":"detective","ru":"Детектив"},{"id":"security_pilot","ru":"Пилот Службы Безопасности"},{"id":"security_cadet","ru":"Кадет Службы Безопасности"}],"МЕД":[{"id":"chief_medical_officer","ru":"Главный врач"},{"id":"chemist","ru":"Химик"},{"id":"medical_doctor","ru":"Врач"},{"id":"paramedic","ru":"Парамедик"},{"id":"psychologist","ru":"Психолог"},{"id":"medical_intern","ru":"Интерн"}],"НИО":[{"id":"research_director","ru":"Научный руководитель"},{"id":"scientist","ru":"Учёный"},{"id":"research_assistant","ru":"Научный ассистент"},{"id":"roboticist","ru":"Робототехник"}],"ИНЖ":[{"id":"chief_engineer","ru":"Старший инженер"},{"id":"atmospheric_technician","ru":"Атмосферный техник"},{"id":"station_engineer","ru":"Инженер"},{"id":"technical_assistant","ru":"Технический ассистент"}],"СНБ":[{"id":"quartermaster","ru":"Квартирмейстер"},{"id":"salvage_specialist","ru":"Утилизатор"},{"id":"cargo_technician","ru":"Грузчик"}],"СРВ":[{"id":"head_of_personnel","ru":"Глава персонала"},{"id":"chef","ru":"Шеф-повар"},{"id":"botanist","ru":"Ботаник"},{"id":"bartender","ru":"Бармен"},{"id":"service_worker","ru":"Сервисный работник"},{"id":"janitor","ru":"Уборщик"},{"id":"librarian","ru":"Библиотекарь"},{"id":"chaplain","ru":"Священник"},{"id":"reporter","ru":"Репортёр"},{"id":"musician","ru":"Музыкант"},{"id":"passenger","ru":"Пассажир"},{"id":"mime","ru":"Мим"},{"id":"clown","ru":"Клоун"}],"ЮР":[{"id":"internal_affairs_agent","ru":"Агент внутренних дел"},{"id":"magistrate","ru":"Магистрат"},{"id":"lawyer","ru":"Адвокат"}],"ЦК":[{"id":"centcom_representative","ru":"Представитель Центрального Командования"},{"id":"centcom_operator","ru":"Оператор Центрального Командования"},{"id":"cbrn_specialist","ru":"Специалист РХБЗЗ"},{"id":"ert_officer","ru":"Офицер ОБР"},{"id":"death_squad_officer","ru":"Офицер Эскадрона смерти"},{"id":"magistrate","ru":"Магистрат"},{"id":"blueshield_officer","ru":"Офицер Синего Щита"},{"id":"nanotrasen_representative","ru":"Представитель NanoTrasen"}]};
let FIELD_PRESETS=[{"id":"threat_level","multi":true,"match":["уровень угрозы","уровни угрозы","код угрозы"],"values":[{"ru":"Зелёный"},{"ru":"Синий"},{"ru":"Жёлтый"},{"ru":"Красный"},{"ru":"Фиолетовый"},{"ru":"Гамма"},{"ru":"Дельта"}]},{"id":"validity","multi":false,"match":["срок действия","действительно до","период действия"],"values":[{"ru":"До конца текущей смены"},{"ru":"До отзыва разрешения"},{"ru":"До прибытия главы отдела"}]},{"id":"yes_no","multi":false,"match":["возможность проведения","возможность","допускается","разрешается"],"values":[{"ru":"Да"},{"ru":"Нет"},{"ru":"По решению уполномоченного лица"}]},{"id":"access","multi":true,"match":["предоставляемые доступы","запрашиваемые доступы","необходимые доступы"],"values":[{"ru":"Командование"},{"ru":"Служба Безопасности"},{"ru":"Медицинский отдел"},{"ru":"Химическая лаборатория"},{"ru":"Инженерный отдел"},{"ru":"Научно-исследовательский отдел"},{"ru":"Отдел снабжения"},{"ru":"Сервисный отдел"},{"ru":"Технические помещения"},{"ru":"Бриг"}]}];

let lang="ru";
let customPresets=readJSON("ss14-custom-presets",[]);
let customTemplates=readJSON("ss14-custom-templates",[]);
let currentPresetId=null;
let current={name:{ru:I18N.ru.blank,en:I18N.en.blank},variants:{ru:[],en:[]},values:{},profileId:null};
let selectedBlockId=null;
let draggedBlockId=null;
let currentTab="preview";
let finderMode="find";
let builderMode="fill";
let activeTypeFilter="";
let favoritePresetIds=readJSON("ss14-favorite-presets",[]);
let savedDrafts=readJSON("ss14-saved-drafts",[]);
let characterProfiles=readJSON("ss14-character-profiles",[]);
let profileFileConnected=false;
let customClauses=readJSON("ss14-custom-clauses",[]);
let customFieldPresets=readJSON("ss14-custom-field-presets",{});
let moreTypesOpen=false;
let previewZoom=Math.max(80,Math.min(150,Number(localStorage.getItem("ss14-preview-zoom")||105)));

const QUICK_ACTIONS=[
 {label:"Получить доступ",query:"получить доступ в помещение"},
 {label:"Устроиться",query:"устроиться на работу"},
 {label:"Пожаловаться",query:"пожаловаться на сотрудника"},
 {label:"Выдать разрешение",query:"выдать разрешение"},
 {label:"Отчитаться",query:"отчёт о работе"},
 {label:"Связаться с ЦК",query:"отправить запрос центральному командованию"}
];
let STANDARD_CLAUSES=[{"id":"general_shift","category":"Общие","ru":"До конца текущей смены.","tags":["general","permit","employment"]},{"id":"general_duties","category":"Общие","ru":"С целью исполнения рабочих обязанностей.","tags":["general","permit","access","equipment"]},{"id":"general_authority","category":"Общие","ru":"Решение может быть пересмотрено уполномоченным лицом.","tags":["general","order","permit"]},{"id":"permit_revoke","category":"Разрешения","ru":"Разрешение может быть отозвано в любой момент уполномоченным лицом.","tags":["permit","access","equipment"]},{"id":"permit_scope","category":"Разрешения","ru":"Разрешение действительно только в пределах, указанных в настоящем документе.","tags":["permit","access"]},{"id":"access_no_extra","category":"Доступ","ru":"Настоящий документ не предоставляет доступ в помещения, не указанные в нём явно.","tags":["access"]},{"id":"equipment_return","category":"Снаряжение","ru":"Получатель обязуется вернуть выданное снаряжение по окончании работ или текущей смены.","tags":["equipment"]},{"id":"equipment_responsibility","category":"Снаряжение","ru":"Получатель несёт ответственность за сохранность выданного снаряжения.","tags":["equipment"]},{"id":"employment_sop","category":"Трудоустройство","ru":"Сотрудник обязуется соблюдать Стандартные Рабочие Процедуры соответствующего отдела.","tags":["employment"]},{"id":"employment_return","category":"Трудоустройство","ru":"При переводе или увольнении сотрудник обязуется сдать выданное отделом снаряжение.","tags":["employment"]},{"id":"investigation_evidence","category":"Расследование","ru":"К документу прилагаются имеющиеся свидетельства и материальные доказательства.","tags":["investigation","complaint","report"]},{"id":"investigation_voluntary","category":"Расследование","ru":"Изложенные сведения даны составителем добровольно и в пределах известной ему информации.","tags":["investigation","complaint"]},{"id":"medical_consent","category":"Медицина","ru":"Пациент был уведомлён о характере процедуры и возможных последствиях.","tags":["medical"]}];

const SEARCH_ALIASES={
 "работа":"трудоустройство должность перевод сотрудник",
 "устроиться":"трудоустройство работа должность",
 "доступ":"допуск помещение дверь получить доступ",
 "оружие":"ношение оружия пистолет автомат винтовка дробовик дубинка",
 "бита":"снаряжение оружие спортивный инвентарь",
 "пожаловаться":"жалоба нарушение правонарушение",
 "жалоба":"пожаловаться нарушение",
 "строить":"строительство строительные работы инженер",
 "ремонт":"строительные работы техническое состояние инженер",
 "лечить":"здоровье медицинский препарат вмешательство",
 "здоровье":"медицинское заключение лечение",
 "умер":"смерть тело утилизация",
 "труп":"тело смерть утилизация",
 "эвак":"эвакуационный шаттл эвакуация",
 "зарплата":"заработная плата деньги",
 "повысить":"повышение должность",
 "уволиться":"увольнение заявление",
 "уволить":"приказ увольнение",
 "свадьба":"брак свидетельство",
 "развод":"расторжение брака",
 "обыск":"разрешение на обыск",
 "эксперимент":"опыт исследование научный отчёт"
};


function departmentByAny(value){
 const normalized=String(value||"").trim().toUpperCase();
 return DEPARTMENTS.find(item=>[item.id,item.code,item.codeEn].map(x=>String(x||"").toUpperCase()).includes(normalized))||null;
}
function departmentCode(item,targetLang=lang){return targetLang==="en"?(item.codeEn||item.code):item.code}
function translateDepartmentRoute(route,targetLang=lang){
 return String(route||"").split("-").map(part=>{
  const value=part.trim();
  const item=departmentByAny(value);
  if(item)return departmentCode(item,targetLang);
  if(/^(КОД|CODE)$/i.test(value))return targetLang==="en"?"CODE":"КОД";
  return value;
 }).filter(Boolean).join("-");
}
function departmentName(value,targetLang=lang){const item=departmentByAny(value);return item?item[targetLang]:String(value||"")}
function jobEntries(department){const item=departmentByAny(department);return JOBS_BY_DEPARTMENT[item?.code||department]||[]}
function jobEntryByAny(department,value){const target=String(value||"");return jobEntries(department).find(item=>item.id===target||item.ru===target||item.en===target)||null}
function profileDepartmentLabel(profile,targetLang=lang){
 if(!profile)return "";
 return profile.departmentCustom||departmentName(profile.department,targetLang)||profile.department||"";
}
function profileJobLabel(profile,targetLang=lang){
 if(!profile)return "";
 if(profile.jobCustom)return profile.jobCustom;
 const entry=jobEntryByAny(profile.department,profile.jobId||profile.job);
 return entry?entry[targetLang]:(profile.job||"");
}
function clauseText(item,targetLang=lang){return item?(targetLang==="en"?(item.en||item.ru||item.text):(item.ru||item.text||item.en)):""}
function clauseCategory(item,targetLang=lang){return targetLang==="en"?(item.categoryEn||item.category):(item.category||item.categoryEn)}
function typeLabel(value,targetLang=lang){
 const map={"Заявление":"Application","Разрешение":"Permit","Отчёт":"Report","Приказ":"Order","Жалоба":"Complaint","Свидетельство":"Certificate","Запрос":"Request","Заказ":"Order","Решение":"Decision","Заключение":"Conclusion","Обращение":"Appeal","Уведомление":"Notice","Предложение":"Offer","Нота":"Note","Документ":"Document","Форма":"Form"};
 return targetLang==="en"?(map[value]||value):value;
}
async function loadExternalData(){
 const load=async(path)=>{const response=await fetch(path,{cache:"no-store"});if(!response.ok)throw new Error(path);return response.json()};
 const formsSource=Array.isArray(globalThis.SS14_FORM_DATA?.presets)?globalThis.SS14_FORM_DATA:load("./data/forms.json");
 const results=await Promise.allSettled([
  Promise.resolve(formsSource),
  load("./data/departments.json"),
  load("./data/jobs.json"),
  load("./data/clauses.json"),
  load("./data/field-presets.json")
 ]);
 const [forms,departments,jobs,clauses,presets]=results.map(item=>item.status==="fulfilled"?item.value:null);
 if(Array.isArray(forms?.presets))BUILTIN_PRESETS=forms.presets;
 if(Array.isArray(departments?.departments))DEPARTMENTS=departments.departments;
 if(jobs&&typeof jobs.jobs==="object")JOBS_BY_DEPARTMENT=jobs.jobs;
 if(Array.isArray(clauses?.clauses))STANDARD_CLAUSES=clauses.clauses;
 if(Array.isArray(presets?.presets))FIELD_PRESETS=presets.presets;
 customClauses=readJSON("ss14-custom-clauses",customClauses);
 customFieldPresets=readJSON("ss14-custom-field-presets",customFieldPresets);
 customTemplates=readJSON("ss14-custom-templates",customTemplates);
 if(typeof customBlockPresets!=="undefined")customBlockPresets=readJSON("ss14-custom-block-presets",customBlockPresets);
 if(!BUILTIN_PRESETS.length)console.warn("Не удалось загрузить каталог форм");
 return BUILTIN_PRESETS.length>0;
}
async function persistUserContent(){
 localStorage.setItem("ss14-custom-clauses",JSON.stringify(customClauses));
 localStorage.setItem("ss14-custom-field-presets",JSON.stringify(customFieldPresets));
 localStorage.setItem("ss14-custom-templates",JSON.stringify(customTemplates));
 return true;
}
function readJSON(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function clone(v){return JSON.parse(JSON.stringify(v))}
function uid(prefix="id"){const value=typeof crypto!=="undefined"&&crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10);return prefix+"-"+value}
function t(key){return I18N[lang][key]||key}
function esc(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
function draftSnapshot(nameOverride="",idOverride=""){
 return {
  id:idOverride||uid("draft"),
  name:nameOverride||current.name?.ru||t("document"),
  savedAt:new Date().toISOString(),
  current:clone(current),
  currentPresetId
 };
}
function cleanPresetState(id=BUILTIN_PRESETS[0]?.id){
 const p=getPreset(id)||BUILTIN_PRESETS[0];
 if(!p)return {name:{ru:I18N.ru.blank,en:I18N.en.blank},variants:{ru:[],en:[]},values:{},profileId:null};
 return {
  name:clone(p.name),
  variants:clone(p.variants),
  values:{},
  profileId:null
 };
}
function loadInitial(){
 if(!BUILTIN_PRESETS.length)return;
 currentPresetId=BUILTIN_PRESETS[0].id;
 current=cleanPresetState(currentPresetId);
 selectedBlockId=current.variants[lang]?.[0]?.id||null;
}
function documentHasUserChanges(){
 if(Object.values(current.values||{}).some(value=>String(value||"").trim()))return true;
 if(current.profileId)return true;
 const preset=getPreset(currentPresetId);
 if(!preset)return blocks().some(block=>String(block.content||"").trim());
 return JSON.stringify(current.variants)!==JSON.stringify(preset.variants);
}
function preserveCurrentIfNeeded(){
 if(documentHasUserChanges())saveState();
}
function allPresets(){return [...customTemplates,...customPresets,...BUILTIN_PRESETS]}
function getPreset(id){return allPresets().find(p=>p.id===id)}
function variantPrimaryId(p){return p?.variantGroupPrimary||p?.id}
function variantGroupId(p){return p?.variantGroup||""}
function variantSiblings(p=currentPreset()){
 const group=variantGroupId(p);if(!group)return [];
 return allPresets().filter(item=>item.variantGroup===group).sort((a,b)=>(a.variantOrder||0)-(b.variantOrder||0));
}
function visiblePresets(){
 const ids=new Set(allPresets().map(p=>variantGroupId(p)?variantPrimaryId(p):p.id));
 return allPresets().filter(p=>!variantGroupId(p)||ids.has(p.id));
}
function presetIsActive(p){
 const active=getPreset(currentPresetId);
 return currentPresetId===p?.id||(variantGroupId(active)&&variantPrimaryId(active)===p?.id);
}
function blocks(){return current.variants[lang]||(current.variants[lang]=[])}
function showToast(message){const el=document.getElementById("toast");el.textContent=message;el.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove("show"),1500)}

function switchPresetVariant(id){
 const p=getPreset(id),active=currentPreset();if(!p)return;
 const sameGroup=variantGroupId(p)&&variantGroupId(active)===variantGroupId(p);
 const values=sameGroup?clone(current.values||{}):{};
 preserveCurrentIfNeeded();
 current=clone({name:p.name,variants:p.variants,values,profileId:current.profileId||null});
 currentPresetId=id;
 selectedBlockId=current.variants[lang]?.[0]?.id||current.variants.ru?.[0]?.id||null;
 recordHistory();
 renderAll();
}
function resetCurrent(){
 if(!confirm(t("confirmReset")))return;
 if(currentPresetId&&getPreset(currentPresetId))loadPreset(currentPresetId);
 else newDocument();
}
function switchLang(next){
 if(next===lang)return;
 const previous=lang;
 const profile=activeProfile();
 const oldProfileJob=profileJobLabel(profile,previous);
 const newProfileJob=profileJobLabel(profile,next);
 if(current.values.department_code)current.values.department_code=translateDepartmentRoute(current.values.department_code,next);
 if(profile&&current.values.author_job===oldProfileJob)current.values.author_job=newProfileJob;
 lang=next;document.documentElement.lang=lang;
 selectedBlockId=blocks()[0]?.id||null;
 document.querySelectorAll(".lang-switch button").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
 saveState();renderAll();
}
function resolveTokens(text,values=current.values){
 return resolveChoiceTokens(text,values).replace(/\{\{field:([^|}]+)\|([^|}]*)\|([^}]*)\}\}/g,(_,key,label,fallback)=>{
   const value=values[key];
   return value!==undefined&&String(value).trim()!==""?String(value):fallback;
 });
}
function splitChoiceParts(body){
 const parts=[];let start=0,depth=0;
 for(let i=0;i<body.length;i++){
  if(body.startsWith("{{",i)){depth++;i++;continue}
  if(body.startsWith("}}",i)&&depth>0){depth--;i++;continue}
  if(body[i]==="|"&&depth===0){parts.push(body.slice(start,i));start=i+1}
 }
 parts.push(body.slice(start));
 return parts;
}
function replaceChoiceTokens(text,replacer){
 const source=String(text||"");let out="",pos=0;
 while(pos<source.length){
  const start=source.indexOf("{{choice:",pos);
  if(start<0){out+=source.slice(pos);break}
  out+=source.slice(pos,start);
  let depth=0,end=-1;
  for(let i=start;i<source.length;i++){
   if(source.startsWith("{{",i)){depth++;i++;continue}
   if(source.startsWith("}}",i)){depth--;i++;if(depth===0){end=i+1;break}}
  }
  if(end<0){out+=source.slice(start);break}
  const token=source.slice(start,end+1),body=token.slice("{{choice:".length,-2);
  const [key,...options]=splitChoiceParts(body);
  out+=key&&options.length?replacer(key.trim(),options.map(option=>option.trim())):token;
  pos=end+1;
 }
 return out;
}
function choiceValueKey(key){return `choice_${key}`}
function selectedChoiceIndex(key,options,values=current.values){
 const index=Number(values[choiceValueKey(key)]??0);
 return Number.isInteger(index)&&index>=0&&index<options.length?index:0;
}
function resolveChoiceTokens(text,values=current.values){
 return replaceChoiceTokens(text,(key,options)=>options[selectedChoiceIndex(key,options,values)]||"");
}
const MARKUP_FRAME_WIDTH=45;
const SS14_FONT_NORMAL='12px "Noto Sans","Liberation Sans",Arial,sans-serif';
const SS14_FONT_BOLD='bold 12px "Noto Sans","Liberation Sans",Arial,sans-serif';
const SS14_FONT_ITALIC='italic 12px "Noto Sans","Liberation Sans",Arial,sans-serif';
const SS14_FONT_BOLD_ITALIC='bold italic 12px "Noto Sans","Liberation Sans",Arial,sans-serif';
const SS14_FONT_HEAD_3='bold 14px "Noto Sans","Liberation Sans",Arial,sans-serif';
const SS14_FONT_HEAD_2='bold 17px "Noto Sans","Liberation Sans",Arial,sans-serif';
const SS14_FONT_HEAD_1='bold 24px "Noto Sans","Liberation Sans",Arial,sans-serif';
let markupMeasureContext=null;
function measureContext(){
 if(markupMeasureContext)return markupMeasureContext;
 if(typeof document==="undefined")return null;
 const canvas=document.createElement("canvas");
 markupMeasureContext=canvas.getContext("2d");
 return markupMeasureContext;
}
function visibleMarkupText(line){
 return String(line||"")
  .replace(/\{\{field:[^|}]+\|[^|}]*\|([^}]*)\}\}/g,"$1")
  .replace(/\[[^\]]+\]/g,"");
}
function visibleMarkupLength(line){return [...visibleMarkupText(line)].length}
function markupFontFor(tags){
 for(let i=tags.length-1;i>=0;i--){
  if(tags[i]==="head=1")return SS14_FONT_HEAD_1;
  if(tags[i]==="head=2")return SS14_FONT_HEAD_2;
  if(tags[i]==="head=3")return SS14_FONT_HEAD_3;
 }
 const bold=tags.includes("bold")||tags.includes("bolditalic");
 const italic=tags.includes("italic")||tags.includes("bolditalic");
 if(bold&&italic)return SS14_FONT_BOLD_ITALIC;
 if(bold)return SS14_FONT_BOLD;
 if(italic)return SS14_FONT_ITALIC;
 return SS14_FONT_NORMAL;
}
function measurePlainText(text,font=SS14_FONT_NORMAL){
 const ctx=measureContext();
 if(!ctx)return [...String(text||"")].length;
 ctx.font=font;
 return ctx.measureText(String(text||"")).width;
}
function measureMarkupText(line){
 const ctx=measureContext();
 if(!ctx)return visibleMarkupLength(line);
 const source=String(line||"").replace(/\{\{field:[^|}]+\|[^|}]*\|([^}]*)\}\}/g,"$1");
 const tags=[];let width=0,index=0;
 const rx=/\[(\/)?([a-z]+)(?:=([^\]]+))?\]/gi;let match;
 while((match=rx.exec(source))){
  const chunk=source.slice(index,match.index);
  if(chunk){ctx.font=markupFontFor(tags);width+=ctx.measureText(chunk).width}
  const closing=!!match[1],name=match[2].toLowerCase(),value=String(match[3]||"").toLowerCase();
  if(closing){
   if(name==="head"){const i=tags.map(tag=>tag.startsWith("head=")).lastIndexOf(true);if(i>=0)tags.splice(i,1)}
   else{const i=tags.lastIndexOf(name);if(i>=0)tags.splice(i,1)}
  }else if(name==="head")tags.push(`head=${value||"3"}`);
  else if(["bold","italic","bolditalic"].includes(name))tags.push(name);
  index=rx.lastIndex;
 }
 const tail=source.slice(index);
 if(tail){ctx.font=markupFontFor(tags);width+=ctx.measureText(tail).width}
 return width;
}
function centeredByPixels(content,frameWidthPx){
 const trimmed=String(content||"").trim();
 if(!trimmed||/^=+$/.test(trimmed))return trimmed;
 const contentWidth=measureMarkupText(trimmed);
 const spaceWidth=Math.max(.1,measurePlainText(" "));
 const pad=Math.max(0,Math.round((frameWidthPx-contentWidth)/2/spaceWidth));
 return " ".repeat(pad)+trimmed;
}
function centeredByColumns(content,width=MARKUP_FRAME_WIDTH){
 const trimmed=String(content||"").trim();
 if(!trimmed||/^=+$/.test(trimmed))return trimmed;
 const visibleWidth=visibleMarkupLength(trimmed);
 const pad=Math.max(0,Math.floor((width-visibleWidth)/2));
 return " ".repeat(pad)+trimmed;
}
function centerMarkupLine(line,width=MARKUP_FRAME_WIDTH){
 const trimmed=String(line||"").trim();
 if(!trimmed||/^=+$/.test(trimmed))return trimmed;
 return centeredByColumns(trimmed,width);
}
function centerFrameContent(text){
 const lines=String(text||"").replace(/\r\n?/g,"\n").split("\n");
 const width=lines.map(line=>line.trim()).find(line=>/^=+$/.test(line))?.length||MARKUP_FRAME_WIDTH;
 return lines.map(line=>centerMarkupLine(line,width)).join("\n").trimEnd();
}
function centerHeaderLine(line,width=MARKUP_FRAME_WIDTH){
 const source=String(line||"").trimEnd();
 const logoMatch=/^(.*?\[\/color\])(\s*)(.*)$/.exec(source);
 if(!logoMatch)return source;
 const [,logo,,restRaw]=logoMatch,rest=restRaw.trim();
 if(!rest)return logo;
 const frameWidthPx=measurePlainText("=".repeat(width));
 const logoWidth=measureMarkupText(logo);
 const restWidth=measureMarkupText(rest);
 const spaceWidth=Math.max(.1,measurePlainText(" "));
 const areaStartPx=Math.min(frameWidthPx,logoWidth+spaceWidth);
 const targetStartPx=areaStartPx+Math.max(0,(frameWidthPx-areaStartPx-restWidth)/2);
 const pad=Math.max(1,Math.round((targetStartPx-logoWidth)/spaceWidth));
 return logo+" ".repeat(pad)+rest;
}
function centerHeaderContent(text){
 const lines=String(text||"").replace(/\r\n?/g,"\n").split("\n");
 if(lines.some(line=>line.includes("#1d7a1d"))&&lines.some(line=>line.includes("#b8972d")))return text;
 if(!lines.some(line=>line.includes("Бланк документа"))||!lines.some(line=>line.includes("NanoTrasen")))return text;
 return lines.map(line=>centerHeaderLine(line)).join("\n").trimEnd();
}
function normalizeBlockContent(block){
 if(!block||typeof block.content!=="string")return block?.content;
 if(block.type==="title"||block.type==="stamp")return centerFrameContent(block.content);
 if(block.type==="header")return centerHeaderContent(block.content);
 return block.content;
}
function compileDocument(){
 return blocks().map(b=>resolveTokens(normalizeBlockContent(b))).join("\n");
}
function getFields(){
 const map=new Map();
 const rx=/\{\{field:([^|}]+)\|([^|}]*)\|([^}]*)\}\}/g;
 blocks().forEach(b=>{let m;const content=resolveChoiceTokens(b.content);while((m=rx.exec(content)))if(!map.has(m[1]))map.set(m[1],{key:m[1],label:m[2],fallback:m[3]})});
 return [...map.values()];
}
function getField(key){return getFields().find(f=>f.key===key)}
function fieldDisplayValue(field){
 const value=current.values[field.key];
 return value!==undefined&&String(value).trim()!==""?String(value):String(field.fallback||"");
}
function departmentCodeValue(){
 const f=getField("department_code");
 const raw=String(current.values.department_code||f?.fallback||(lang==="en"?"CODE-CODE":"КОД-КОД")).trim();
 return translateDepartmentRoute(raw,lang)||(lang==="en"?"CODE-CODE":"КОД-КОД");
}
function isRequired(field){return REQUIRED_KEYS.includes(field.key)}
function setPaperFieldState(el,value){
 if(!el?.classList?.contains("paper-field")||el.classList.contains("code-picker-field"))return;
 const filled=String(value||"").trim()!=="";
 el.classList.toggle("filled",filled);
 el.classList.toggle("placeholder",!filled);
}
let activePaperFieldKey="";
function setActivePaperField(el){
 document.querySelectorAll(".paper-field.is-editing").forEach(item=>item.classList.remove("is-editing"));
 activePaperFieldKey=el?.dataset?.fieldKey||"";
 if(el)el.classList.add("is-editing");
}
function clearActivePaperField(){
 activePaperFieldKey="";
 document.querySelectorAll(".paper-field.is-editing").forEach(item=>item.classList.remove("is-editing"));
}
function updateField(key,value){
 current.values[key]=value;
 saveState();

 document.querySelectorAll(
   `[data-quick-key="${CSS.escape(key)}"],`+
   `[data-fill-key="${CSS.escape(key)}"],`+
   `.paper-field[data-field-key="${CSS.escape(key)}"]`
 ).forEach(el=>{
   if(el.classList?.contains("paper-field"))setPaperFieldState(el,value);
   if(el===document.activeElement)return;
   if(el.matches('[contenteditable="true"]')){ if(el.textContent!==value)el.textContent=value; }
   else if("value" in el && el.value!==value)el.value=value;
 });

 document.getElementById("raw").textContent=compileDocument();
}
function tokenToSentinels(text){
 const fields=[];
 const choices=[];
 const source=replaceChoiceTokens(String(text),(key,options)=>{
  const n=choices.length,index=selectedChoiceIndex(key,options);
  choices.push({key,options,index});
  return `@@CHOICE_START_${n}@@${options[index]||""}@@CHOICE_END_${n}@@`;
 });
 const replaced=source.replace(/\{\{field:([^|}]+)\|([^|}]*)\|([^}]*)\}\}/g,(token,key,label,fallback,offset)=>{
  const n=fields.length;fields.push({key,label,fallback,placeholder:inlineFieldPlaceholder(source,offset,key,label,fallback)});return `@@FIELD_${n}@@`;
 });
 return {replaced,fields,choices};
}
function compactFieldLabel(key,label,fallback=""){
 const raw=String(label||fallback||"").trim();
 const lower=raw.toLocaleLowerCase("ru");
 if(key==="station")return "станция";
 if(key==="department_code")return "код";
 if(key==="shift_time")return "время";
 if(/(?:^|_)name_\d$|_name$|^author_name$|^applicant_name$|^subject_name$/.test(key))return /объект|помещ|отдел|наименование/.test(lower)?"ФИО / объект":"ФИО";
 if(/(?:^|_)job_\d$|_job$|^author_job$|^applicant_job$|^subject_job$/.test(key))return "должность";
 if(/department/.test(key))return "отдел";
 if(/duration|deadline|validity|term|time|date/.test(key))return /мест/.test(lower)?"место и время":"срок";
 if(/reason|purpose|goal|cause/.test(key)||/причин|цель|основан/.test(lower))return /основан/.test(lower)?"основание":"причина";
 if(/evidence|proof|witness|violation|article/.test(key)||/доказ|улик|свидетел|наруш|стать/.test(lower))return /свидетел/.test(lower)?"свидетели":/стать|наруш/.test(lower)?"статьи":"доказательства";
 if(/count|quantity|number/.test(key)||/количеств|числ/.test(lower))return "число";
 if(/text|content|description|details|summary|notes|reporting/.test(key)||/опис|содерж|подроб|текст|замеч|отчит/.test(lower))return "описание";
 if(/task|criteria|result|outcome/.test(key)||/задач|критери|результ|решен/.test(lower))return /критери/.test(lower)?"критерии":/решен/.test(lower)?"решение":"результат";
 if(/access/.test(key)||/доступ/.test(lower))return "доступы";
 if(/equipment|item|product|supply/.test(key)||/снаряж|оборуд|предмет|товар|продукт/.test(lower))return "перечень";
 if(/shuttle|class/.test(key)||/шаттл|класс/.test(lower))return /класс/.test(lower)?"класс":"шаттл";
 if(/код|номер/.test(lower))return "код";
 if(/капитан|глава|старший/.test(lower))return "адресат";
 if(/должност/.test(lower))return "должность";
 if(/отдел/.test(lower))return "отдел";
 if(/фио/.test(lower))return "ФИО";
 return raw.length>26?"значение":raw;
}
function inlineFieldPlaceholder(source,offset,key,label,fallback){
 const before=source.slice(0,offset);
 const line=before.slice(before.lastIndexOf("\n")+1).replace(/\[[^\]]+\]/g,"").trim();
 if(key==="station")return "";
 if(/[:：]\s*$/.test(line))return "";
 return compactFieldLabel(key,label,fallback);
}
function renderInlineMarkup(value){
 let s=esc(value);
 s=s.replace(/\r\n?/g,"\n");
 s=s.replace(/\[color=([^\]]+)\]([\s\S]*?)\[\/color\]/gi,(match,color,content)=>{
  const safe=String(color||"").replace(/&quot;|["'`;<>]/g,"").trim();
  return safe?`<span style="color:${safe}">${content}</span>`:content;
 })
 .replace(/\[bolditalic\]([\s\S]*?)\[\/bolditalic\]/gi,"<strong><em>$1</em></strong>")
 .replace(/\[bold\]([\s\S]*?)\[\/bold\]/gi,"<strong>$1</strong>")
 .replace(/\[italic\]([\s\S]*?)\[\/italic\]/gi,"<em>$1</em>")
 .replace(/\[mono\]([\s\S]*?)\[\/mono\]/gi,"<code>$1</code>")
 .replace(/\[head=1\]([\s\S]*?)\[\/head\]/gi,"<strong>$1</strong>")
 .replace(/\[head=2\]([\s\S]*?)\[\/head\]/gi,"<strong>$1</strong>")
 .replace(/\[head=3\]([\s\S]*?)\[\/head\]/gi,"<strong>$1</strong>")
 .replace(/\[\/(?:italic|color|bold|mono|head)\]/gi,"")
 .replace(/\n/g,"<br>");
 return s;
}
function renderMarkup(text){
 const {replaced,fields,choices}=tokenToSentinels(text);
 let s=esc(replaced);
 s=s.replace(/\[color=([^\]]+)\]([\s\S]*?)\[\/color\]/gi,'<span style="color:$1">$2</span>')
 .replace(/\[bolditalic\]([\s\S]*?)\[\/bolditalic\]/gi,"<strong><em>$1</em></strong>")
 .replace(/\[bold\]([\s\S]*?)\[\/bold\]/gi,"<strong>$1</strong>")
 .replace(/\[italic\]([\s\S]*?)\[\/italic\]/gi,"<em>$1</em>")
 .replace(/\[mono\]([\s\S]*?)\[\/mono\]/gi,"<code>$1</code>")
 .replace(/\[head=1\]([\s\S]*?)\[\/head\]/gi,"<h1>$1</h1>")
 .replace(/\[head=2\]([\s\S]*?)\[\/head\]/gi,"<h2>$1</h2>")
 .replace(/\[head=3\]([\s\S]*?)\[\/head\]/gi,"<h3>$1</h3>")
 .replace(/\[\/(?:italic|color|bold|mono|head)\]/gi,"");
 fields.forEach((f,i)=>{
   const val=current.values[f.key]??"";
   const required=isRequired(f);
   let input;
   if(f.key==="department_code"){
     const code=departmentCodeValue();
     input=`<button type="button" class="paper-field code-picker-field filled" data-field-key="department_code" data-department-picker title="${esc(t("departmentRoute"))}">${esc(code)}</button>`;
   }else{
     const filled=val!==undefined&&String(val).trim()!=="";
     const shown=String(filled?val:f.fallback||"");
     input=`<span role="textbox" contenteditable="true" spellcheck="false" class="paper-field ${filled?"filled":"placeholder"} ${activePaperFieldKey===f.key?"is-editing":""} ${required&&!shown.trim()?"missing":""}" data-field-key="${esc(f.key)}" data-placeholder="${esc(f.placeholder||f.label)}" title="${esc(f.label)}">${renderInlineMarkup(shown)}</span>`;
   }
   s=s.replace(`@@FIELD_${i}@@`,input);
 });
 choices.forEach((choice,i)=>{
   const data=encodeURIComponent(JSON.stringify(choice.options));
   s=s.replace(`@@CHOICE_START_${i}@@`,`<span role="button" tabindex="0" class="paper-choice" data-choice-key="${esc(choice.key)}" data-choice-options="${esc(data)}" title="Сменить вариант">`);
   s=s.replace(`@@CHOICE_END_${i}@@`,"</span>");
 });
 return s;
}
function renderPreviewOnly(){
 const paper=document.getElementById("paper");
 paper.innerHTML=blocks().map(b=>{
   const editable=b.type==="title"||b.type==="text";
   const badge=editable?`<button type="button" class="copy-edit-badge" data-edit-copy="${esc(b.id)}">✎</button>`:"";
   return `<section class="paper-section ${esc(b.type)} ${editable?"editable-copy":""}" data-block-id="${esc(b.id)}">${badge}${renderMarkup(normalizeBlockContent(b))}</section>`;
 }).join("");

 const inputs=[...paper.querySelectorAll('[contenteditable="true"].paper-field')];
 inputs.forEach((input,index)=>{
   const key=input.dataset.fieldKey;
   const commit=()=>{
     const value=(input.textContent||"").replace(/\u00a0/g," ").trim();
     updateField(key,value);
     setPaperFieldState(input,value);
     input.classList.toggle("missing",isRequired(getField(key)||{})&&!value);
   };
   input.addEventListener("input",()=>{
     const value=(input.textContent||"").replace(/\u00a0/g," ");
     updateField(key,value);
     setPaperFieldState(input,value);
   });
   input.addEventListener("blur",event=>{
     commit();
     if(document.hasFocus()&&!event.relatedTarget?.closest?.(".paper-field"))clearActivePaperField();
   });
   input.addEventListener("focus",()=>{
     setActivePaperField(input);
     const range=document.createRange(),selection=getSelection();
     range.selectNodeContents(input);selection.removeAllRanges();selection.addRange(range);
   });
   input.addEventListener("keydown",event=>{
     if(event.key!=="Enter"||event.shiftKey)return;
     event.preventDefault();commit();
     const next=inputs[index+1];
     if(next)next.focus();else input.blur();
   });
 });

 paper.querySelectorAll("[data-department-picker]").forEach(btn=>{
   btn.onclick=event=>{
     event.stopPropagation();
     openDepartmentPicker();
   };
 });

 paper.querySelectorAll("[data-choice-key]").forEach(choice=>{
   const activate=event=>{
     event.preventDefault();
     event.stopPropagation();
     let options=[];
     try{options=JSON.parse(decodeURIComponent(choice.dataset.choiceOptions||"%5B%5D"))}catch{}
     if(options.length<2)return;
     const key=choiceValueKey(choice.dataset.choiceKey);
     const currentIndex=selectedChoiceIndex(choice.dataset.choiceKey,options);
     current.values[key]=String((currentIndex+1)%options.length);
     saveState();
     renderAll();
   };
   choice.addEventListener("click",activate);
   choice.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "||event.code==="Space")activate(event)});
 });

 paper.querySelectorAll(".editable-copy").forEach(section=>{
   section.onclick=event=>{
     if(event.target.closest(".paper-field,.paper-choice"))return;
     editCopyBlock(section.dataset.blockId);
   };
 });

 document.getElementById("raw").textContent=compileDocument();
}
function renderI18n(){
 document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
}
function normalizeSearch(value){
 return String(value||"").toLocaleLowerCase("ru").replace(/ё/g,"е").replace(/[^a-zа-я0-9]+/g," ").replace(/\s+/g," ").trim();
}
function expandedQuery(query){
 const base=normalizeSearch(query),tokens=base.split(" ").filter(Boolean);
 const extra=[];
 tokens.forEach(token=>{if(SEARCH_ALIASES[token])extra.push(SEARCH_ALIASES[token])});
 return normalizeSearch([base,...extra].join(" "));
}
function presetText(p){
 const content=(p.variants?.[lang]||p.variants?.ru||[]).map(b=>b.content).join(" ");
 const description=lang==="en"?(p.descriptionEn||""):(p.descriptionRu||"");
 return normalizeSearch([p.name?.[lang],description,p.searchRu,p.keywordsRu,content,GROUPS[p.group]?.[lang]].join(" "));
}
function presetKind(p){
 if(p.docType)return p.docType;
 const name=p.name?.ru||"";
 return ["Заявление","Разрешение","Отчёт","Приказ","Жалоба","Свидетельство","Запрос","Заказ","Решение","Заключение","Обращение"].find(x=>name.startsWith(x))||"Документ";
}
function searchScore(p,query){
 if(activeTypeFilter&&presetKind(p)!==activeTypeFilter)return -1;
 const q=expandedQuery(query);if(!q)return 1;
 const title=normalizeSearch(p.name?.[lang]||p.name?.ru||"");
 const desc=normalizeSearch(lang==="en"?(p.descriptionEn||""):(p.descriptionRu||""));
 const keywords=normalizeSearch(p.keywordsRu||"");
 const hay=presetText(p);let score=0;
 if(title===q)score+=500;if(title.includes(q))score+=180;if(desc.includes(q))score+=80;if(keywords.includes(q))score+=100;
 const tokens=q.split(" ").filter(x=>x.length>1);
 tokens.forEach(token=>{if(title.includes(token))score+=42;if(keywords.includes(token))score+=28;if(desc.includes(token))score+=18;if(hay.includes(token))score+=5});
 if(tokens.length&&tokens.every(token=>hay.includes(token)))score+=75;
 return score;
}
function toggleFavorite(id,event){
 event?.stopPropagation();
 favoritePresetIds=favoritePresetIds.includes(id)?favoritePresetIds.filter(x=>x!==id):[id,...favoritePresetIds];
 localStorage.setItem("ss14-favorite-presets",JSON.stringify(favoritePresetIds));
 renderPresets();
}
function rawPresetName(p){return p?.name?.[lang]||p?.name?.ru||"Document"}
function displayPresetName(p){return String(rawPresetName(p)).replace(/^\s*\(!\)\s*/,"")}
function formReference(p){
 const id=variantPrimaryId(p);
 if(p?.syndicateForm||p?.group==="syndicate")return `SYN-${String((p.id?.match(/\d+/)||["0"])[0]).padStart(3,"0")}`;
 if(p?.builtin===false)return "USR";
 return `NT-${String((id?.match(/\d+/)||["0"])[0]).padStart(3,"0")}`;
}
function customFormBadge(p){
 if(p?.syndicateForm||p?.group==="syndicate")return `<span class="custom-form-badge syndicate-form-badge" title="Шуточная форма Синдиката, не документ NanoTrasen">не NT</span>`;
 return p?.customAuthorForm?`<span class="custom-form-badge" title="Авторская форма, не из wiki">авторская</span>`:"";
}
function resultCard(p,reason=""){
 const favourite=favoritePresetIds.includes(p.id);
 const description=(lang==="en"?(p.descriptionEn||""):(p.descriptionRu||"")).replace(/—/g,"--");
 return `<article class="result-card group-${esc(p.group||"custom")} ${presetIsActive(p)?"active":""}" data-preset="${esc(p.id)}" tabindex="0">
  <div class="archive-ref">${lang==="en"?"FORM":"ФОРМА"} ${esc(formReference(p))}</div>
  <button class="fav-btn ${favourite?"on":""}" data-favorite="${esc(p.id)}">${favourite?"★":"☆"}</button>
  <div class="result-title">${customFormBadge(p)}${esc(displayPresetName(p))}</div>
  ${description?`<div class="result-desc">${esc(description)}</div>`:""}
  <div class="result-meta"><span>${esc(typeLabel(presetKind(p),lang))}</span><span>${esc(GROUPS[p.group]?.[lang]||"ARCHIVE")}</span></div>
 </article>`;
}
function bindPresetCards(root){
 root.querySelectorAll("[data-preset]").forEach(card=>{
  card.onclick=e=>{if(e.target.closest("[data-favorite]"))return;loadPreset(card.dataset.preset)};
  card.onkeydown=e=>{if(e.key==="Enter")loadPreset(card.dataset.preset)};
 });
 root.querySelectorAll("[data-favorite]").forEach(btn=>btn.onclick=e=>toggleFavorite(btn.dataset.favorite,e));
}
function renderActionChips(){
 const root=document.getElementById("actionChips");
 const primary=["","Заявление","Разрешение","Отчёт"];
 const secondary=["Приказ","Жалоба","Запрос","Свидетельство","Заказ","Решение","Заключение","Обращение"];
 const label=value=>value?typeLabel(value,lang):(lang==="en"?"All":"Все");
 root.innerHTML=`<div class="filter-primary">${primary.map(kind=>`<button class="action-chip ${activeTypeFilter===kind?"active":""}" data-kind="${esc(kind)}">${esc(label(kind))}</button>`).join("")}<button class="action-chip ${secondary.includes(activeTypeFilter)?"active":""}" data-more-types>${esc(t("more"))}</button></div>${moreTypesOpen?`<div class="filter-more">${secondary.map(kind=>`<button class="action-chip ${activeTypeFilter===kind?"active":""}" data-kind="${esc(kind)}">${esc(label(kind))}</button>`).join("")}</div>`:""}`;
 root.querySelectorAll("[data-kind]").forEach(btn=>btn.onclick=()=>{activeTypeFilter=btn.dataset.kind;renderActionChips();renderPresets()});
 root.querySelector("[data-more-types]").onclick=()=>{moreTypesOpen=!moreTypesOpen;renderActionChips()};
}
function renderCatalog(list,query){
 const groups={};
 visiblePresets().forEach(p=>{
  if(activeTypeFilter&&presetKind(p)!==activeTypeFilter)return;
  if(query&&searchScore(p,query)<=0)return;
  const g=p.builtin===false?"custom":p.group;
  (groups[g]||(groups[g]=[])).push(p);
 });
 const order=["custom","syndicate","basic","centcom","command","legal","security","medical","engineering","science","cargo","service","communications"];
 list.innerHTML=order.filter(g=>groups[g]?.length).map(g=>`<div class="smart-section">
  <div class="smart-section-head"><strong>${esc(GROUPS[g]?.ru||g)}</strong><span>${groups[g].length}</span></div>
  ${groups[g].map(p=>`<div class="catalog-row group-${esc(p.group||g||"custom")} ${presetIsActive(p)?"active":""}" data-preset="${esc(p.id)}"><span class="catalog-index">${esc(formReference(p))}</span><span class="catalog-name">${customFormBadge(p)}${esc(displayPresetName(p))}</span><button class="fav-btn ${favoritePresetIds.includes(p.id)?"on":""}" data-favorite="${esc(p.id)}">${favoritePresetIds.includes(p.id)?"★":"☆"}</button></div>`).join("")}
 </div>`).join("")||`<div class="no-results">${esc(t("noSearchResults"))}</div>`;
 bindPresetCards(list);
}
function renderPresets(){
 const input=document.getElementById("presetSearch");
 const query=input.value.trim();
 const list=document.getElementById("presetList");
 document.getElementById("clearSearch").style.visibility=query?"visible":"hidden";
 if(finderMode==="browse"){renderCatalog(list,query);return}
 if(!query&&!activeTypeFilter){renderFindHome(list);return}
 const ranked=visiblePresets().map(p=>({p,score:searchScore(p,query)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||(a.p.name?.[lang]||a.p.name.ru).localeCompare(b.p.name?.[lang]||b.p.name.ru,lang==="ru"?"ru":"en")).slice(0,14);
 list.innerHTML=ranked.length?`<div class="smart-section"><div class="smart-section-head"><strong>${t("recommended")}</strong><span>${ranked.length}</span></div>${ranked.map(({p})=>resultCard(p,t("matchedBecause"))).join("")}</div>`:`<div class="no-results">${esc(t("noSearchResults"))}</div>`;
 bindPresetCards(list);
}

function blockLabel(b){return lang==="ru"?(b.labelRu||t(TYPE_LABELS[b.type])):(b.labelEn||t(TYPE_LABELS[b.type]))}

function currentPreset(){
 return getPreset(currentPresetId);
}
function fieldNeedsTextarea(field){
 return /(содержание|описание|причина|перечень|работ|мероприят|результат|обращени|нарушени|заключени|оборудован|снаряжен|доступ|состояни|детал|свидетел|подозреваем|потерпевш|присутствующ|участник|эксперт|content|details|reason|result|list|witness|suspect|victim|present_people|participant|expert)/i.test(field.label+" "+field.key);
}
function fieldGroup(field){
 return REQUIRED_KEYS.includes(field.key)?"main":"document";
}
function isParticipantField(field){return /(?:author|applicant|subject|person)_?(?:name|job)|recipient|responsible|giver|receiver/i.test(field.key)}
function fieldPresetFor(field){
 const text=normalizeSearch(field.label+" "+field.key);
 if(/причин.*доступ|reason.*access/.test(text))return null;
 let preset=FIELD_PRESETS.find(item=>(item.match||[]).some(match=>text.includes(normalizeSearch(match))));
 return preset||null;
}
function inlineOptionsForField(field){
 const fallback=String(field.fallback||"").trim();
 if(!fallback.includes("/")||/https?:\/\//i.test(fallback))return [];
 const parts=fallback.split(/\s+\/\s+/).map(item=>item.trim()).filter(Boolean);
 if(parts.length<2||parts.some(item=>item.length>56))return [];
 return [...new Set(parts)].map(value=>({ru:value,en:value,inline:true}));
}
function fieldAllowsMultipleChoices(field,preset=null){
 if(preset?.multi===true)return true;
 const text=normalizeSearch(`${field.key} ${field.label}`);
 return /(список|перечень|доступы|снаряжение|оборудование|предметы|улики|свидетели|подозреваемые|потерпевшие|присутствующие|эксперты|methods|items|access|equipment|witnesses|suspects|victims|list)/.test(text);
}
function presetValuesForField(field){
 const preset=fieldPresetFor(field);
 let values=preset?.values||[];
 const inline=inlineOptionsForField(field);
 const custom=(customFieldPresets[field.key]||[]).map(value=>({ru:value,en:value,custom:true}));
 return {preset,values:[...values,...inline,...custom],multi:fieldAllowsMultipleChoices(field,preset)};
}
function clauseTagsForCurrent(){
 const preset=currentPreset();const text=normalizeSearch(`${preset?.name?.ru||""} ${preset?.docType||""}`);const tags=["general"];
 if(/разреш|доступ/.test(text))tags.push("permit","access");
 if(/снаряж|оруж/.test(text))tags.push("equipment");
 if(/трудоустр|увольн|повыш/.test(text))tags.push("employment");
 if(/жалоб|расслед|правонаруш|обыск|суд/.test(text))tags.push("investigation","complaint");
 if(/медицин|здоров|эвтаназ|смерт|тела/.test(text))tags.push("medical");
 if(/отч[её]т/.test(text))tags.push("report");
 return [...new Set(tags)];
}
function suggestedClauses(limit=5){const tags=clauseTagsForCurrent();return STANDARD_CLAUSES.filter(item=>(item.tags||["general"]).some(tag=>tags.includes(tag))).slice(0,limit)}
function phraseHotbarHtml(){
 const items=suggestedClauses(5);
 return `<div class="phrase-hotbar-label">${esc(t("clauses"))}</div><div class="phrase-hotbar-items">${items.map(item=>`<button data-hot-clause="${esc(item.id)}">＋ ${esc(clauseText(item,lang))}</button>`).join("")}<button class="phrase-more" data-all-clauses>${esc(t("allClauses"))}</button></div>`;
}
function bindPhraseHotbar(root,insert){
 root.querySelectorAll("[data-hot-clause]").forEach(button=>button.onclick=()=>{const item=STANDARD_CLAUSES.find(entry=>entry.id===button.dataset.hotClause);if(item)insert(clauseText(item,lang))});
 const all=root.querySelector("[data-all-clauses]");if(all)all.onclick=()=>openClausesModal(insert);
}
function availableDocumentRoles(){
 const fields=getFields(),byKey=Object.fromEntries(fields.map(f=>[f.key,f]));
 const roles=[];
 const add=(id,label,nameKey,jobKey,departmentKey="")=>{if(byKey[nameKey]||byKey[jobKey])roles.push({id,label,nameKey:byKey[nameKey]?nameKey:"",jobKey:byKey[jobKey]?jobKey:"",departmentKey:departmentKey&&byKey[departmentKey]?departmentKey:""})};
 add("author","Составитель","author_name","author_job");
 add("applicant","Заявитель","applicant_name","applicant_job");
 add("subject",(/подозрев|арест|обыск/.test(normalizeSearch(current.name?.ru||""))?"Подозреваемый":"Участник"),"subject_name","subject_job");
 for(let i=1;i<=4;i++){const n=`person_name_${i}`,j=`person_job_${i}`;if(byKey[n]||byKey[j])add(`person${i}`,byKey[n]?.label||`Участник ${i}`,n,j)}
 [["recipient","Получатель"],["responsible","Ответственное лицо"],["giver","Передающая сторона"],["receiver","Получающая сторона"]].forEach(([key,label])=>{if(byKey[key])roles.push({id:key,label,nameKey:key,jobKey:"",departmentKey:""})});
 return roles;
}
function profileRoleMap(profile,role){const out={};if(role.nameKey)out[role.nameKey]=profile.fullName||"";if(role.jobKey)out[role.jobKey]=profileJobLabel(profile,lang);if(role.departmentKey)out[role.departmentKey]=profileDepartmentLabel(profile,lang);return out}
function applyProfileToRole(profile,role,mode="empty"){
 const values=profileRoleMap(profile,role);Object.entries(values).forEach(([key,value])=>{if(value&&(mode==="replace"||!String(current.values[key]||"").trim()))current.values[key]=value});
 if(role.id==="author")current.profileId=profile.id;saveState();closeModal();renderAll();showToast(`${profile.label||profile.fullName}: ${role.label}`)
}
function chooseRoleForProfile(profile){
 const roles=availableDocumentRoles();
 if(roles.length===1){applyProfileToRole(profile,roles[0],"replace");return}
 modal(`<h3>${esc(profile.label||profile.fullName)}</h3><div class="profile-conflict">${esc(t("roleHint"))}</div><div class="role-picker-list">${roles.map(role=>`<div class="role-picker-item"><div><strong>${esc(role.label)}</strong><small>${esc([role.nameKey,role.jobKey].filter(Boolean).join(" + "))}</small></div><button data-role-id="${esc(role.id)}">${esc(t("profileApply"))}</button></div>`).join("")}</div><div class="modal-actions"><button id="roleCancel">${esc(t("cancel"))}</button></div>`);
 document.getElementById("roleCancel").onclick=openProfilesModal;document.querySelectorAll("[data-role-id]").forEach(button=>button.onclick=()=>applyProfileToRole(profile,roles.find(role=>role.id===button.dataset.roleId),"replace"));
}
function roleToolbarHtml(){const roles=availableDocumentRoles();if(!characterProfiles.length||!roles.length)return "";const active=activeProfile()||characterProfiles[0];return `<div class="role-toolbar"><div class="role-toolbar-head"><strong>${esc(t("assignRole"))}</strong><small>${esc(active?.label||active?.fullName||"")}</small></div><div class="role-buttons">${roles.map((role,index)=>`<button class="${index===0?"primary-role":""}" data-quick-role="${esc(role.id)}">${esc(role.label)}</button>`).join("")}<button data-open-role-profiles>…</button></div></div>`}
function renderBlocks(){
 const list=document.getElementById("blockList");
 list.innerHTML=blocks().length?blocks().map((b,i)=>`
  <div class="block-card ${selectedBlockId===b.id?"selected":""}" draggable="true" data-block="${esc(b.id)}">
   <button class="drag">☰</button><span class="block-index">${String(i+1).padStart(2,"0")}</span>
   <div class="block-copy"><strong>${esc(blockLabel(b))}</strong></div>
   <button class="x-btn" data-remove="${esc(b.id)}">×</button>
  </div>`).join(""):`<div class="empty">${t("selectBlock")}</div>`;
 list.querySelectorAll(".block-card").forEach(card=>{
  card.onclick=e=>{if(e.target.closest("[data-remove]"))return;selectedBlockId=card.dataset.block;renderBlocks();renderEditor()};
  card.ondragstart=()=>draggedBlockId=card.dataset.block;
  card.ondragover=e=>e.preventDefault();
  card.ondrop=()=>{const a=blocks().findIndex(x=>x.id===draggedBlockId),z=blocks().findIndex(x=>x.id===card.dataset.block);if(a<0||z<0)return;const [m]=blocks().splice(a,1);blocks().splice(z,0,m);saveState();renderAll()};
 });
 list.querySelectorAll("[data-remove]").forEach(b=>b.onclick=e=>{e.stopPropagation();removeBlock(b.dataset.remove)});
}
function insertTag(open,close){
 const ta=document.getElementById("blockContent");if(!ta)return;
 const b=blocks().find(x=>x.id===selectedBlockId);if(!b)return;
 const a=ta.selectionStart,z=ta.selectionEnd,p=b.content.slice(a,z)||"text";
 b.content=b.content.slice(0,a)+open+p+close+b.content.slice(z);saveState();renderEditor();renderPreviewOnly();
 requestAnimationFrame(()=>{const n=document.getElementById("blockContent");n.focus();n.setSelectionRange(a+open.length,a+open.length+p.length)});
}
function insertField(){
 const label=prompt(t("customFieldPrompt"));if(!label)return;
 const key="custom_"+slugClient(label)+"_"+Math.floor(Math.random()*9999);
 const ta=document.getElementById("blockContent"),b=blocks().find(x=>x.id===selectedBlockId);
 if(!ta||!b)return;
 const a=ta.selectionStart,z=ta.selectionEnd;
 const token=`{{field:${key}|${label.replaceAll("|","/")}|(${label.replaceAll("|","/")})}}`;
 b.content=b.content.slice(0,a)+token+b.content.slice(z);
 saveState();renderEditor();renderPreviewOnly();
}
function slugClient(s){return s.toLowerCase().normalize("NFKD").replace(/[^\w]+/g,"_").replace(/^_|_$/g,"").slice(0,25)||"field"}
function renderFields(){
 const root=document.getElementById("fieldList");if(!root)return;
 const fields=getFields();
 root.innerHTML=fields.length?fields.map(f=>{
  if(f.key==="department_code")return `<div class="dept-summary"><div><strong>${esc(t("departmentCode"))}: ${esc(departmentCodeValue())}</strong><small>${esc(t("departmentRoute"))}</small></div><button type="button" data-open-department>${esc(t("edit"))}</button></div>`;
  return `<div class="field-row"><label><span>${esc(f.label)}</span>${isRequired(f)?`<span>${t("required")}</span>`:""}</label><input data-quick-key="${esc(f.key)}" value="${esc(current.values[f.key]||"")}" placeholder="${esc(f.fallback||f.label)}"></div>`;
 }).join(""):`<div class="empty empty-compact">${t("noFields")}</div>`;
 root.querySelectorAll("[data-quick-key]").forEach(i=>i.oninput=e=>updateField(e.target.dataset.quickKey,e.target.value));
 root.querySelectorAll("[data-open-department]").forEach(b=>b.onclick=openDepartmentPicker);
}
function removeBlock(id){
 const i=blocks().findIndex(x=>x.id===id);blocks().splice(i,1);if(selectedBlockId===id)selectedBlockId=blocks()[Math.max(0,i-1)]?.id||null;saveState();renderAll();
}
function renderAll(){renderI18n();renderActionChips();renderPresets();renderFillWorkspace();renderBlocks();renderEditor();renderPreviewOnly();setTab(currentTab);setBuilderMode(builderMode);applyPreviewZoom(previewZoom)}
function setTab(tab){
 currentTab=tab;document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
 document.getElementById("paperStage").hidden=tab!=="preview";document.getElementById("rawBox").hidden=tab!=="raw";
}
function applyPreviewZoom(value){
 previewZoom=Math.max(80,Math.min(150,Math.round(value/5)*5));localStorage.setItem("ss14-preview-zoom",String(previewZoom));
 const paper=document.getElementById("paper");if(paper)paper.style.zoom=String(previewZoom/100);
 const label=document.getElementById("zoomValue");if(label)label.textContent=previewZoom+"%";
}
function fitPreview(){
 const canvas=document.querySelector(".preview-canvas"),paper=document.getElementById("paper"),egg=document.getElementById("eggCharacter");if(!canvas||!paper)return;
 paper.style.zoom="1";const reserve=egg&&getComputedStyle(egg).display!=="none"?170:40;const byWidth=(canvas.clientWidth-reserve-50)/paper.offsetWidth,byHeight=(canvas.clientHeight-45)/paper.offsetHeight;applyPreviewZoom(Math.min(1.2,byWidth,byHeight)*100);
}
async function copyMarkup(){
 const text=compileDocument();let copied=false;
 try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);copied=true}}catch{}
 if(!copied){const area=document.createElement("textarea");area.value=text;area.setAttribute("readonly","");area.style.position="fixed";area.style.opacity="0";document.body.appendChild(area);area.select();try{copied=document.execCommand("copy")}catch{}area.remove()}
 if(copied)showToast(t("copied"));else alert(t("clipboardError"));
}
function modal(html,wide=false){document.getElementById("modalRoot").innerHTML=`<div class="modal-backdrop"><div class="modal ${wide?"modal-wide":""}">${html}</div></div>`;document.querySelector(".modal-backdrop").onclick=e=>{if(e.target===e.currentTarget)closeModal()}}
function closeModal(){document.getElementById("modalRoot").innerHTML=""}
function departmentOptions(selected,allowEmpty=false){
 const selectedItem=departmentByAny(selected);
 const empty=allowEmpty?`<option value="">${esc(t("noRecipient"))}</option>`:"";
 const items=DEPARTMENTS.map(item=>`<option value="${item.code}" ${selectedItem?.code===item.code?"selected":""}>${departmentCode(item,lang)} — ${esc(item[lang])}</option>`).join("");
 return empty+items+`<option value="__custom__" ${selected==="__custom__"?"selected":""}>${esc(t("customCode"))}</option>`;
}
function parseDepartmentCode(code){
 const parts=String(code||"").split("-").map(x=>x.trim()).filter(Boolean);
 return {from:parts[0]||"ПД",to:parts[1]||""};
}
function openDepartmentPicker(){
 const parsed=parseDepartmentCode(departmentCodeValue());
 const fromItem=departmentByAny(parsed.from),toItem=departmentByAny(parsed.to);
 const templateCode=translateDepartmentRoute(String(getField("department_code")?.fallback||"").trim(),lang);
 const profile=activeProfile();
 const profileSender=departmentByAny(profile?.department);
 const toCode=toItem?departmentCode(toItem,lang):parsed.to;
 const profileSuggestion=profileSender?`${departmentCode(profileSender,lang)}${toCode?"-"+toCode:""}`:"";
 const personal=departmentByAny("ПД");
 const personalSuggestion=`${departmentCode(personal,lang)}${toCode?"-"+toCode:""}`;
 const suggestions=[templateCode&&!/КОД|CODE/i.test(templateCode)?{label:t("templateCode"),code:templateCode}:null,profileSuggestion?{label:t("profileCode"),code:profileSuggestion}:null,{label:t("personalCode"),code:personalSuggestion}].filter(Boolean);
 modal(`<h3>${esc(t("departmentRoute"))}</h3><div class="copy-editor-note">${lang==="ru"?"Первый код — отправитель, второй — получатель. Ничего не заменяется автоматически.":"The first code is the sender and the second is the recipient. Nothing is applied automatically."}</div>${suggestions.length?`<div class="code-suggestions">${suggestions.map(item=>`<button data-code-suggestion="${esc(item.code)}">${esc(item.label)}: ${esc(item.code)}</button>`).join("")}</div>`:""}<div class="dept-grid"><div><label>${esc(t("senderDepartment"))}</label><select id="deptFrom">${departmentOptions(fromItem?.code||"__custom__")}</select><input class="custom-code-input" id="deptFromCustom" value="${esc(fromItem?"":parsed.from)}" ${fromItem?"hidden":""}></div><div class="dept-arrow">→</div><div><label>${esc(t("recipientDepartment"))}</label><select id="deptTo">${departmentOptions(toItem?.code||(parsed.to?"__custom__":""),true)}</select><input class="custom-code-input" id="deptToCustom" value="${esc(toItem?"":parsed.to)}" ${toItem||!parsed.to?"hidden":""}></div></div><label>${esc(t("departmentCode"))}</label><input id="deptPreview" value="${esc(departmentCodeValue())}" readonly><div class="modal-actions"><button id="modalCancel">${esc(t("cancel"))}</button><button class="primary-btn" id="deptApply">${esc(t("apply"))}</button></div>`);
 const from=document.getElementById("deptFrom"),to=document.getElementById("deptTo"),fc=document.getElementById("deptFromCustom"),tc=document.getElementById("deptToCustom"),preview=document.getElementById("deptPreview");
 const clean=value=>String(value||"").toUpperCase().replace(/[^A-ZА-ЯЁ0-9]/g,"").slice(0,8);
 const visible=(select,custom)=>{if(select.value==="__custom__")return clean(custom.value);const item=departmentByAny(select.value);return item?departmentCode(item,lang):select.value};
 const refresh=()=>{fc.hidden=from.value!=="__custom__";tc.hidden=to.value!=="__custom__";const a=visible(from,fc)||(lang==="en"?"CODE":"КОД"),b=visible(to,tc);preview.value=b?`${a}-${b}`:a};
 [from,to,fc,tc].forEach(el=>el.addEventListener("input",refresh));refresh();
 document.querySelectorAll("[data-code-suggestion]").forEach(button=>button.onclick=()=>{updateField("department_code",button.dataset.codeSuggestion);closeModal();renderAll()});
 document.getElementById("modalCancel").onclick=closeModal;document.getElementById("deptApply").onclick=()=>{const a=visible(from,fc),b=visible(to,tc);if(!a)return;updateField("department_code",b?`${a}-${b}`:a);closeModal();renderAll()};
}
function titleLineInfo(content){
 const lines=String(content).split("\n");
 let index=lines.findIndex(line=>line.trim()&&!/^=+$/.test(line.trim()));
 if(index<0)index=0;
 const raw=lines[index]||"";
 const leading=(raw.match(/^\s*/)||[""])[0];
 const bold=/\[bold\]([\s\S]*?)\[\/bold\]/i.exec(raw);
 const head=/\[head=\d\]([\s\S]*?)\[\/head\]/i.exec(raw);
 const value=(bold?.[1]||head?.[1]||raw.trim()).replace(/\[[^\]]+\]/g,"").trim();
 return {lines,index,raw,leading,value,bold:!!bold,head:head?head[0].match(/\[head=\d\]/i)?.[0]:null};
}
function copyEditorToolbarHtml(){
 const buttons=[
  ["B","[bold]","[/bold]","Жирный"],["I","[italic]","[/italic]","Курсив"],["BI","[bolditalic]","[/bolditalic]","Жирный курсив"],["M","[mono]","[/mono]","Моноширинный"],
  ["H1","[head=1]","[/head]","Большой заголовок"],["H2","[head=2]","[/head]","Средний заголовок"],["H3","[head=3]","[/head]","Малый заголовок"]
 ];
 return `<div class="copy-formatbar">${buttons.map(x=>`<button type="button" title="${x[3]}" data-copy-open="${esc(x[1])}" data-copy-close="${esc(x[2])}">${x[0]}</button>`).join("")}<button type="button" data-copy-color>Цвет</button><button type="button" data-copy-phrases>Формулировки</button></div>`;
}
function wrapTextareaSelection(textarea,open,close){
 const start=textarea.selectionStart,end=textarea.selectionEnd,selected=textarea.value.slice(start,end);
 textarea.value=textarea.value.slice(0,start)+open+selected+close+textarea.value.slice(end);
 textarea.focus();textarea.setSelectionRange(start+open.length,start+open.length+selected.length);
}
function bindCopyEditorToolbar(textarea,block){
 document.querySelectorAll("[data-copy-open]").forEach(button=>button.onclick=()=>wrapTextareaSelection(textarea,button.dataset.copyOpen,button.dataset.copyClose));
 document.querySelector("[data-copy-color]")?.addEventListener("click",()=>{
  const color=prompt("Цвет текста: HEX или название","#b8972d");if(color)wrapTextareaSelection(textarea,`[color=${color.trim()}]`,`[/color]`);
 });
 document.querySelector("[data-copy-phrases]")?.addEventListener("click",()=>{
  const draft=textarea.value,start=textarea.selectionStart,end=textarea.selectionEnd;
  openClausesModal(text=>{
   const prefix=draft.slice(0,start),suffix=draft.slice(end),separator=prefix.trim()?"\n\n":"";
   const value=prefix+separator+text+suffix,caret=(prefix+separator+text).length;
   openCopyTextEditor(block,value,caret);
  });
 });
}
function openCopyTextEditor(block,value=block.content,caret=null){
 modal(`<h3>${esc(t("editText"))}</h3>${copyEditorToolbarHtml()}<textarea class="copy-editor-text" id="copyText" spellcheck="false">${esc(value)}</textarea><div class="modal-actions"><button id="modalCancel">${esc(t("cancel"))}</button><button class="primary-btn" id="copySave">${esc(t("save"))}</button></div>`,true);
 const copyText=document.getElementById("copyText");
 bindCopyEditorToolbar(copyText,block);
 document.getElementById("modalCancel").onclick=closeModal;
 document.getElementById("copySave").onclick=()=>{block.content=copyText.value;saveState();closeModal();renderAll()};
 if(Number.isInteger(caret))requestAnimationFrame(()=>{copyText.focus();copyText.setSelectionRange(caret,caret)});
}
function editCopyBlock(id){
 const b=blocks().find(x=>x.id===id);if(!b)return;
 selectedBlockId=id;renderBlocks();
 if(b.type==="title"){
  const info=titleLineInfo(b.content);
  modal(`<h3>${esc(t("editTitle"))}</h3><div class="copy-editor-note">${esc(t("editWordingHint"))}</div><label>${esc(t("title"))}</label><input class="copy-editor-title" id="copyTitle" value="${esc(info.value)}"><div class="modal-actions"><button id="modalCancel">${esc(t("cancel"))}</button><button class="primary-btn" id="copySave">${esc(t("save"))}</button></div>`);
  document.getElementById("modalCancel").onclick=closeModal;
  document.getElementById("copySave").onclick=()=>{const value=document.getElementById("copyTitle").value.trim();let line=value;if(info.bold)line="[bold]"+value+"[/bold]";else if(info.head)line=info.head+value+"[/head]";info.lines[info.index]=line;b.content=info.lines.map(item=>/^=+$/.test(item.trim())?item.trim():item.trim()).join("\n").trimEnd();saveState();closeModal();renderAll()};
 }else{
  openCopyTextEditor(b);
 }
}



async function loadProfilesFromFile(){
 characterProfiles=readJSON("ss14-character-profiles",characterProfiles);
 profileFileConnected=false;
 return true;
}
async function persistProfiles(){
 localStorage.setItem("ss14-character-profiles",JSON.stringify(characterProfiles));
 profileFileConnected=false;
 return true;
}
function exportProfiles(){
 const blob=new Blob([JSON.stringify({format:"ss14-character-profiles",version:1,profiles:characterProfiles},null,2)],{type:"application/json"});
 const link=document.createElement("a");
 link.href=URL.createObjectURL(blob);
 link.download="characters.json";
 link.click();
 setTimeout(()=>URL.revokeObjectURL(link.href),500);
}
function importProfiles(){
 const input=document.createElement("input");
 input.type="file";
 input.accept=".json,application/json";
 input.onchange=async()=>{
  try{
   const payload=JSON.parse(await input.files[0].text());
   const profiles=Array.isArray(payload)?payload:payload.profiles;
   if(!Array.isArray(profiles))throw new Error("bad profiles");
   characterProfiles=profiles.filter(item=>item&&typeof item==="object");
   await persistProfiles();
   openProfilesModal();
  }catch{
   alert(t("profileImportError"));
  }
 };
 input.click();
}
function activeProfile(){return characterProfiles.find(profile=>profile.id===current.profileId)||null}
function profileMap(profile){return {author_name:profile.fullName||"",author_job:profileJobLabel(profile,lang)}}
function applyProfileValues(profile,mode="empty"){
 const values=profileMap(profile);
 Object.entries(values).forEach(([key,value])=>{if(value&&(mode==="replace"||!String(current.values[key]||"").trim()))current.values[key]=value});
 current.profileId=profile.id;saveState();closeModal();renderAll();showToast(t("profileApplied"));
}
function chooseProfile(profile){
 if(availableDocumentRoles().length>1){chooseRoleForProfile(profile);return}
 const map=profileMap(profile),conflicts=Object.keys(map).filter(key=>map[key]&&String(current.values[key]||"").trim()&&current.values[key]!==map[key]);
 if(!conflicts.length){applyProfileValues(profile,"empty");return}
 modal(`<h3>${esc(profile.label||profile.fullName)}</h3><div class="profile-conflict">${esc(t("profileConflict"))}</div><div class="modal-actions"><button id="profileCancel">${esc(t("cancel"))}</button><button id="profileEmpty">${esc(t("onlyEmpty"))}</button><button class="primary-btn" id="profileReplace">${esc(t("replaceFilled"))}</button></div>`);
 document.getElementById("profileCancel").onclick=closeModal;
 document.getElementById("profileEmpty").onclick=()=>applyProfileValues(profile,"empty");
 document.getElementById("profileReplace").onclick=()=>applyProfileValues(profile,"replace");
}
async function saveProfileForm(id=null){
 const existing=characterProfiles.find(profile=>profile.id===id);
 const departmentSelect=document.getElementById("profileDepartment");
 const department=departmentSelect.value==="__custom__"?"":departmentSelect.value;
 const departmentCustom=departmentSelect.value==="__custom__"?document.getElementById("profileDepartmentCustom").value.trim():"";
 const jobSelect=document.getElementById("profileJob");
 const custom=jobSelect.value==="__custom__"?document.getElementById("profileJobCustom").value.trim():"";
 const profile={id:existing?.id||uid("profile"),label:document.getElementById("profileLabel").value.trim(),fullName:document.getElementById("profileFullName").value.trim(),department,departmentCustom,jobId:jobSelect.value==="__custom__"?"":jobSelect.value,jobCustom:custom};
 if(!profile.label)profile.label=profile.fullName||t("newProfile");
 if(existing)Object.assign(existing,profile);else characterProfiles.unshift(profile);
 await persistProfiles();openProfilesModal();
}
function profileJobOptions(department,currentValue=""){
 const list=jobEntries(department);
 const current=jobEntryByAny(department,currentValue);
 return `<option value="">${esc(t("profileChooseJob"))}</option>${list.map(job=>`<option value="${esc(job.id)}" ${current?.id===job.id?"selected":""}>${esc(job[lang]||job.ru)}</option>`).join("")}<option value="__custom__" ${currentValue&&!current?"selected":""}>${esc(t("profileJobCustom"))}</option>`;
}
function editProfileForm(id=null){
 const profile=characterProfiles.find(item=>item.id===id)||{};
 const legacyJob=profile.jobCustom||profile.jobId||profile.job||"";
 modal(`<h3>${esc(id?t("profileEdit"):t("newProfile"))}</h3><div class="profile-grid">
  <div class="full"><label>${esc(t("profileLabel"))}</label><input id="profileLabel" value="${esc(profile.label||"")}"></div>
  <div class="full"><label>${esc(t("profileName"))}</label><input id="profileFullName" value="${esc(profile.fullName||"")}"></div>
  <div class="full"><label>${esc(t("profileDepartment"))}</label><select id="profileDepartment"><option value="">—</option>${DEPARTMENTS.filter(d=>d.code!=="ПД").map(d=>`<option value="${d.code}" ${departmentByAny(profile.department)?.code===d.code?"selected":""}>${departmentCode(d,lang)} — ${esc(d[lang])}</option>`).join("")}<option value="__custom__" ${profile.departmentCustom||(!departmentByAny(profile.department)&&profile.department)?"selected":""}>${esc(t("profileDepartmentCustom"))}</option></select><input id="profileDepartmentCustom" class="profile-department-custom" value="${esc(profile.departmentCustom||(!departmentByAny(profile.department)?profile.department||"":""))}" placeholder="${esc(t("profileDepartmentCustom"))}"></div>
  <div class="full"><label>${esc(t("profileJob"))}</label><select id="profileJob">${profileJobOptions(profile.department||"",legacyJob)}</select><input id="profileJobCustom" class="profile-job-custom" value="${esc(profile.jobCustom||(!jobEntryByAny(profile.department,legacyJob)?legacyJob:"") )}" placeholder="${esc(t("profileJobCustom"))}"></div>
 </div><div class="modal-actions"><button id="profileFormCancel">${esc(t("cancel"))}</button><button class="primary-btn" id="profileFormSave">${esc(t("profileSave"))}</button></div>`);
 const department=document.getElementById("profileDepartment"),departmentCustom=document.getElementById("profileDepartmentCustom"),job=document.getElementById("profileJob"),custom=document.getElementById("profileJobCustom");
 const updateCustom=()=>{custom.hidden=job.value!=="__custom__";departmentCustom.hidden=department.value!=="__custom__"};
 const updateJobs=()=>{job.innerHTML=profileJobOptions(department.value==="__custom__"?"":department.value,"");updateCustom()};
 department.onchange=()=>{updateJobs();if(!departmentCustom.hidden)departmentCustom.focus()};job.onchange=()=>{updateCustom();if(!custom.hidden)custom.focus()};updateCustom();
 document.getElementById("profileFormCancel").onclick=openProfilesModal;document.getElementById("profileFormSave").onclick=()=>saveProfileForm(id);
}
async function deleteProfile(id){characterProfiles=characterProfiles.filter(profile=>profile.id!==id);if(current.profileId===id)current.profileId=null;await persistProfiles();openProfilesModal()}
function openProfilesModal(){
 modal(`<div class="profile-modal-head">
  <div><span>NT / PERSONNEL</span><h3>${esc(t("profilesTitle"))}</h3></div>
  <div class="profile-head-actions"><button id="profileImport">${esc(t("profileImport"))}</button><button id="profileExport">${esc(t("profileExport"))}</button><button id="newProfileBtn">＋ ${esc(t("newProfile"))}</button></div>
 </div>
 <div class="profile-list">${characterProfiles.length?characterProfiles.map(profile=>`<div class="profile-row"><div class="profile-file"><strong>${esc(profile.label||profile.fullName)}</strong><small>${esc([profile.fullName,profileDepartmentLabel(profile,lang),profileJobLabel(profile,lang)].filter(Boolean).join(" · "))}</small></div><div class="profile-actions"><button data-apply-profile="${esc(profile.id)}">${esc(t("profileApply"))}</button><button data-edit-profile="${esc(profile.id)}">${esc(t("profileEdit"))}</button><button class="delete" data-delete-profile="${esc(profile.id)}">×</button></div></div>`).join(""):`<div class="list-empty">${esc(t("noProfiles"))}</div>`}</div>
 <div class="modal-actions"><button id="profileClose">${esc(t("cancel"))}</button></div>`,true);
 document.getElementById("newProfileBtn").onclick=()=>editProfileForm();
 document.getElementById("profileImport").onclick=importProfiles;
 document.getElementById("profileExport").onclick=exportProfiles;
 document.getElementById("profileClose").onclick=closeModal;
 document.querySelectorAll("[data-apply-profile]").forEach(button=>button.onclick=()=>chooseProfile(characterProfiles.find(profile=>profile.id===button.dataset.applyProfile)));
 document.querySelectorAll("[data-edit-profile]").forEach(button=>button.onclick=()=>editProfileForm(button.dataset.editProfile));
 document.querySelectorAll("[data-delete-profile]").forEach(button=>button.onclick=()=>deleteProfile(button.dataset.deleteProfile));
}
function insertClauseText(text){
 let block=blocks().find(item=>item.type==="text");
 if(!block){block={id:uid("text"),type:"text",labelRu:"Содержание документа",labelEn:"Document content",content:""};const stampIndex=blocks().findIndex(item=>item.type==="stamp");if(stampIndex>=0)blocks().splice(stampIndex,0,block);else blocks().push(block)}
 block.content=(block.content.trim()?block.content.trim()+"\n\n":"")+text.trim();saveState();closeModal();renderAll();showToast(t("clauseInserted"));
}
function saveCustomClause(){const text=document.getElementById("customClauseText").value.trim();if(!text)return;customClauses.unshift({id:uid("clause"),text});persistUserContent();openClausesModal()}
function deleteCustomClause(id){customClauses=customClauses.filter(item=>item.id!==id);persistUserContent();openClausesModal()}
function openClausesModal(onInsert=null){
 const categories=[...new Set(STANDARD_CLAUSES.map(item=>clauseCategory(item,lang)))];
 modal(`<div class="clause-modal-head"><div><span>NT / PHRASEOLOGY</span><h3>${esc(t("clausesTitle"))}</h3></div></div><div class="clause-list">${categories.map(category=>`<div class="clause-category">${esc(category)}</div>${STANDARD_CLAUSES.filter(item=>clauseCategory(item,lang)===category).map(item=>`<div class="clause-row" data-clause-id="${esc(item.id)}"><div class="clause-copy"><strong>${esc(clauseText(item,lang))}</strong></div><div class="clause-actions"><button>${esc(t("insertClause"))}</button></div></div>`).join("")}`).join("")}${customClauses.length?`<div class="clause-category">${esc(t("customClause"))}</div>${customClauses.map(item=>`<div class="clause-row"><div class="clause-copy"><strong>${esc(item.text)}</strong></div><div class="clause-actions"><button data-custom-clause="${esc(item.id)}">${esc(t("insertClause"))}</button><button class="delete" data-delete-clause="${esc(item.id)}">×</button></div></div>`).join("")}`:""}</div><div class="custom-clause-form"><input id="customClauseText" placeholder="${esc(t("customClause"))}"><button id="saveCustomClause">${esc(t("saveClause"))}</button></div><div class="modal-actions"><button id="clauseClose">${esc(t("cancel"))}</button></div>`,true);
 const applyClause=text=>{if(typeof onInsert==="function"){onInsert(text)}else insertClauseText(text)};
 document.querySelectorAll("[data-clause-id]").forEach(row=>row.onclick=()=>{const item=STANDARD_CLAUSES.find(entry=>entry.id===row.dataset.clauseId);if(item)applyClause(clauseText(item,lang))});
 document.querySelectorAll("[data-custom-clause]").forEach(button=>button.onclick=event=>{event.stopPropagation();const item=customClauses.find(entry=>entry.id===button.dataset.customClause);if(item)applyClause(item.text)});
 document.querySelectorAll("[data-delete-clause]").forEach(button=>button.onclick=event=>{event.stopPropagation();deleteCustomClause(button.dataset.deleteClause)});
 document.getElementById("saveCustomClause").onclick=saveCustomClause;document.getElementById("clauseClose").onclick=closeModal;
}
function updateDraftIndicator(){
 const indicator=document.getElementById("draftIndicator");
 if(!indicator)return;
 const hasDraft=!!readJSON("ss14-last-draft",null)||savedDrafts.length>0;
 indicator.classList.toggle("on",hasDraft);
}
function formatDraftDate(value){
 try{return new Date(value).toLocaleString(lang==="ru"?"ru-RU":"en-GB",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}
 catch{return ""}
}
function openDraft(draft){
 if(!draft?.current?.variants)return;
 current=clone(draft.current);
 currentPresetId=draft.currentPresetId||null;
 selectedBlockId=current.variants[lang]?.[0]?.id||null;
 builderMode="fill";
 closeModal();
 renderAll();
 showToast(t("draftOpened"));
}
function deleteNamedDraft(id){
 savedDrafts=savedDrafts.filter(d=>d.id!==id);
 localStorage.setItem("ss14-saved-drafts",JSON.stringify(savedDrafts));
 openDraftsModal();
 updateDraftIndicator();
}
function saveNamedDraft(){
 const suggested=current.name?.ru||t("document");
 const name=prompt(t("draftName"),suggested);
 if(!name)return;
 const draft=draftSnapshot(name.trim()||suggested);
 savedDrafts=[draft,...savedDrafts].slice(0,30);
 localStorage.setItem("ss14-saved-drafts",JSON.stringify(savedDrafts));
 updateDraftIndicator();
 showToast(t("draftSaved"));
 openDraftsModal();
}
function draftRow(draft,last=false){
 return `<div class="draft-row">
  <div class="draft-file">
   <span class="draft-tab">${last?t("autoSaved"):"NT/DRAFT"}</span>
   <strong>${esc(draft.name||draft.current?.name?.ru||t("document"))}</strong>
   <small>${esc(formatDraftDate(draft.savedAt))}</small>
  </div>
  <div class="draft-actions">
   <button data-open-draft="${esc(draft.id||"last")}">${esc(t("openDraft"))}</button>
   ${last?"":`<button class="draft-delete" data-delete-draft="${esc(draft.id)}">×</button>`}
  </div>
 </div>`;
}
function openDraftsModal(){
 const last=readJSON("ss14-last-draft",null);
 const hasAny=last||savedDrafts.length;
 modal(`<div class="draft-modal-head"><div><span>NT / RECORDS</span><h3>${esc(t("draftsTitle"))}</h3></div><button id="saveCurrentDraft">${esc(t("saveDraft"))}</button></div>
  <div class="draft-list">
   ${last?`<div class="draft-section-label">${esc(t("lastDraft"))}</div>${draftRow({...last,id:"last"},true)}`:""}
   ${savedDrafts.length?`<div class="draft-section-label">${esc(t("savedDrafts"))}</div>${savedDrafts.map(d=>draftRow(d)).join("")}`:""}
   ${hasAny?"":`<div class="draft-empty">${esc(t("noDrafts"))}</div>`}
  </div>
  <div class="modal-actions"><button id="modalCancel">${esc(t("cancel"))}</button></div>`,true);

 document.getElementById("modalCancel").onclick=closeModal;
 document.getElementById("saveCurrentDraft").onclick=saveNamedDraft;

 document.querySelectorAll("[data-open-draft]").forEach(button=>{
  button.onclick=()=>{
   const id=button.dataset.openDraft;
   const draft=id==="last"?readJSON("ss14-last-draft",null):savedDrafts.find(d=>d.id===id);
   openDraft(draft);
  };
 });
 document.querySelectorAll("[data-delete-draft]").forEach(button=>{
  button.onclick=()=>deleteNamedDraft(button.dataset.deleteDraft);
 });
}
async function saveTemplate(){
 modal(`<h3>${t("presetTitle")}</h3><label>${t("nameRu")}</label><input id="presetNameRu" value="${esc(current.name.ru||"")}"><label>${t("nameEn")}</label><input id="presetNameEn" value="${esc(current.name.en||"")}"><div class="modal-actions"><button id="modalCancel">${t("cancel")}</button><button class="primary-btn" id="modalSave">${t("save")}</button></div>`);
 document.getElementById("modalCancel").onclick=closeModal;
 document.getElementById("modalSave").onclick=async()=>{
  const p={id:uid("custom"),group:"custom",builtin:false,name:{ru:document.getElementById("presetNameRu").value||I18N.ru.blank,en:document.getElementById("presetNameEn").value||I18N.en.blank},variants:clone(current.variants)};
  customTemplates.unshift(p);currentPresetId=p.id;current.name=clone(p.name);
  await persistUserContent();closeModal();renderAll();showToast(t("saved"));
 };
}
function saveAsPreset(){
 modal(`<h3>${t("presetTitle")}</h3><label>${t("nameRu")}</label><input id="presetNameRu" value="${esc(current.name.ru||"")}"><label>${t("nameEn")}</label><input id="presetNameEn" value="${esc(current.name.en||"")}"><div class="modal-actions"><button id="modalCancel">${t("cancel")}</button><button class="primary-btn" id="modalSave">${t("save")}</button></div>`);
 document.getElementById("modalCancel").onclick=closeModal;
 document.getElementById("modalSave").onclick=()=>{
  const p={id:uid("custom"),group:"custom",builtin:false,name:{ru:document.getElementById("presetNameRu").value||I18N.ru.blank,en:document.getElementById("presetNameEn").value||I18N.en.blank},variants:clone(current.variants)};
  customPresets.unshift(p);currentPresetId=p.id;current.name=clone(p.name);saveState();closeModal();renderAll();showToast(t("saved"));
 };
}
function updateCustom(){
 const p=customTemplates.find(x=>x.id===currentPresetId)||customPresets.find(x=>x.id===currentPresetId);
 if(!p){showToast(t("builtinUpdate"));return}
 p.name=clone(current.name);p.variants=clone(current.variants);
 if(customTemplates.includes(p))persistUserContent();else saveState();
 renderPresets();showToast(t("updated"));
}
function exportPreset(){
 const payload={format:"ss14-paperwork-preset",version:2,preset:{id:uid("imported"),group:"custom",builtin:false,name:current.name,variants:current.variants}};
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=(current.name.en||"ss14-preset").replace(/[^\w-]+/g,"_")+".json";a.click();URL.revokeObjectURL(a.href);
}
function importPreset(){
 modal(`<h3>${t("importTitle")}</h3><label>${t("pasteJson")}</label><textarea id="importJson"></textarea><div class="modal-actions"><button id="modalCancel">${t("cancel")}</button><button class="primary-btn" id="modalImport">${t("importPreset")}</button></div>`);
 document.getElementById("modalCancel").onclick=closeModal;
 document.getElementById("modalImport").onclick=()=>{try{const data=JSON.parse(document.getElementById("importJson").value);const p=data.preset||data;if(!p.variants)throw 0;p.id=uid("custom");p.builtin=false;p.group="custom";customPresets.unshift(p);saveState();closeModal();loadPreset(p.id);showToast(t("imported"))}catch{alert("Invalid preset JSON")}};
}


/* ================================================================
   Functional safety layer — Russian-only, drafts, protected forms,
   block presets, field formatting and plain-text import.
   ================================================================ */
lang="ru";
let customBlockPresets=readJSON("ss14-custom-block-presets",[]);
let draftSyncTimer=null;
let serverAutosave=null;
let switchingDocument=false;
let pendingStateSave=null;
let pendingStateSaveTimer=null;
let pendingHistorySnapshot=null;
let pendingHistoryTimer=null;

function currentRussianName(){return current.name?.ru||"Без названия"}
function isCustomCurrent(){return !!(customTemplates.find(x=>x.id===currentPresetId)||customPresets.find(x=>x.id===currentPresetId))}
function currentSignature(){return JSON.stringify({id:currentPresetId,variants:current.variants,values:current.values,profileId:current.profileId})}

persistUserContent=async function(){
 localStorage.setItem("ss14-custom-clauses",JSON.stringify(customClauses));
 localStorage.setItem("ss14-custom-field-presets",JSON.stringify(customFieldPresets));
 localStorage.setItem("ss14-custom-templates",JSON.stringify(customTemplates));
 localStorage.setItem("ss14-custom-block-presets",JSON.stringify(customBlockPresets));
 return true;
};

function queueDraftFileSync(){return true}
async function syncDraftsToFile(){return true}
async function loadDraftsFromFile(){
 savedDrafts=readJSON("ss14-saved-drafts",savedDrafts);
 updateDraftIndicator();
 return true;
}

function writeStateSave(payload=pendingStateSave){
 if(!payload)return;
 localStorage.setItem("ss14-last-draft",payload.draft);
 localStorage.setItem("ss14-custom-presets",payload.customPresets);
 updateDraftIndicator();queueDraftFileSync();
}
function flushStateSave(){
 if(pendingStateSaveTimer)clearTimeout(pendingStateSaveTimer);
 pendingStateSaveTimer=null;
 writeStateSave();
 pendingStateSave=null;
}
function scheduleHistorySave(snapshot){
 if(!snapshot||typeof recordHistory!=="function")return;
 pendingHistorySnapshot=snapshot;
 if(pendingHistoryTimer)clearTimeout(pendingHistoryTimer);
 pendingHistoryTimer=setTimeout(()=>{
  const next=pendingHistorySnapshot;
  pendingHistorySnapshot=null;pendingHistoryTimer=null;
  if(next)recordHistory(next);
 },260);
}
saveState=function(options={}){
 const snapshot=draftSnapshot("","autosave");
 pendingStateSave={draft:JSON.stringify(snapshot),customPresets:JSON.stringify(customPresets)};
 if(options.immediate){
  flushStateSave();
 }else{
  if(pendingStateSaveTimer)clearTimeout(pendingStateSaveTimer);
  pendingStateSaveTimer=setTimeout(flushStateSave,180);
 }
 const historyMode=options.history||"debounced";
 if(historyMode==="none")return;
 const historyValue=typeof historySnapshot==="function"?historySnapshot():null;
 if(options.immediate||historyMode==="now"){
  if(typeof recordHistory==="function")recordHistory(historyValue);
 }else scheduleHistorySave(historyValue);
};

function confirmDocumentSwitch(){
 if(!documentHasUserChanges())return true;
 return confirm("В текущем документе есть изменения. Они сохранены в автосохранении. Перейти к другому документу?");
}
loadPreset=function(id,rerender=true,skipWarning=false){
 if(id===currentPresetId)return;
 const p=getPreset(id);if(!p)return;
 if(!skipWarning&&!switchingDocument&&!confirmDocumentSwitch())return;
 preserveCurrentIfNeeded();
 current=clone({name:p.name,variants:p.variants,values:{},profileId:null});
 currentPresetId=id;selectedBlockId=current.variants.ru?.[0]?.id||null;
 if(rerender)renderAll();
};
newDocument=function(){
 if(!switchingDocument&&!confirmDocumentSwitch())return;
 if(!BUILTIN_PRESETS.length){showToast("Каталог форм не загружен");return}
 preserveCurrentIfNeeded();switchingDocument=true;
 currentPresetId=BUILTIN_PRESETS[0].id;current=cleanPresetState(currentPresetId);selectedBlockId=current.variants.ru[0]?.id||null;builderMode="fill";
 switchingDocument=false;renderAll();showToast("Создан чистый документ");
};

renderFindHome=function(list){
 const favourites=favoritePresetIds.map(getPreset).filter(Boolean);
 const popularNames=["Заявление на получение доступа","Заявление о трудоустройстве","Обращение","Разрешение на использование снаряжения","Отчёт о работе сотрудника","Жалоба на правонарушение"];
 const popular=popularNames.map(name=>allPresets().find(p=>p.name?.ru===name)).filter(Boolean);
 const section=(title,items,empty)=>`<div class="smart-section"><div class="smart-section-head"><strong>${esc(title)}</strong><span>${items.length||""}</span></div>${items.length?items.map(p=>resultCard(p)).join(""):`<div class="home-empty">${esc(empty)}</div>`}</div>`;
 list.innerHTML=section("ИЗБРАННОЕ",favourites,"Отмечайте нужные формы звёздочкой")+section("ЧАСТО ИСПОЛЬЗУЮТ",popular,"");
 bindPresetCards(list);
};

function formatBarHtml(key){
 const buttons=[
  ["B","[bold]","[/bold]","Жирный"],["I","[italic]","[/italic]","Курсив"],["BI","[bolditalic]","[/bolditalic]","Жирный курсив"],["M","[mono]","[/mono]","Моноширинный"],
  ["H1","[head=1]","[/head]","Большой заголовок"],["H2","[head=2]","[/head]","Средний заголовок"],["H3","[head=3]","[/head]","Малый заголовок"]
 ];
 return `<div class="field-formatbar">${buttons.map(x=>`<button type="button" title="${x[3]}" data-field-format="${esc(key)}" data-open="${esc(x[1])}" data-close="${esc(x[2])}">${x[0]}</button>`).join("")}<button type="button" class="format-wide" data-field-color="${esc(key)}">Цвет</button></div>`;
}
function wrapFieldSelection(key,open,close){
 const ta=document.querySelector(`#fillFields textarea[data-fill-key="${CSS.escape(key)}"]`);if(!ta)return;
 const a=ta.selectionStart,z=ta.selectionEnd,selected=ta.value.slice(a,z)||"текст";
 const next=ta.value.slice(0,a)+open+selected+close+ta.value.slice(z);ta.value=next;updateField(key,next);renderPreviewOnly();
 requestAnimationFrame(()=>{ta.focus();ta.setSelectionRange(a+open.length,a+open.length+selected.length)});
}
function openFieldColor(key){
 const palette=["#1b487e","#b8972d","#1d7a1d","#b8493e","purple","teal","gray","white"];
 modal(`<h3>Цвет текста</h3><div class="color-palette">${palette.map(c=>`<button style="border-color:${c};color:${c}" data-pick-color="${esc(c)}">■ ${esc(c)}</button>`).join("")}</div><label>Свой цвет</label><input id="customTextColor" placeholder="#ffffff или название"><div class="modal-actions"><button id="modalCancel">Отмена</button><button class="primary-btn" id="applyCustomColor">Применить</button></div>`);
 document.getElementById("modalCancel").onclick=closeModal;
 document.querySelectorAll("[data-pick-color]").forEach(b=>b.onclick=()=>{const c=b.dataset.pickColor;closeModal();wrapFieldSelection(key,`[color=${c}]`,`[/color]`)});
 document.getElementById("applyCustomColor").onclick=()=>{const c=document.getElementById("customTextColor").value.trim();if(!c)return;closeModal();wrapFieldSelection(key,`[color=${c}]`,`[/color]`)};
}
function openFieldPhrases(key){
 const all=[...suggestedClauses(),...customClauses.map(x=>({...x,ru:x.text,category:"Пользовательские"}))];
 modal(`<h3>Вставить формулировку</h3><div class="clause-list">${all.map((item,i)=>`<button class="clause-row" data-field-clause="${i}"><strong>${esc(item.ru||item.text||"")}</strong></button>`).join("")}</div><div class="modal-actions"><button id="modalCancel">Отмена</button></div>`,true);
 document.getElementById("modalCancel").onclick=closeModal;
 document.querySelectorAll("[data-field-clause]").forEach(b=>b.onclick=()=>{const text=all[Number(b.dataset.fieldClause)]?.ru||all[Number(b.dataset.fieldClause)]?.text||"";closeModal();const ta=document.querySelector(`#fillFields textarea[data-fill-key="${CSS.escape(key)}"]`);if(!ta)return;const a=ta.selectionStart,z=ta.selectionEnd,prefix=ta.value&&a>0&&!/\s$/.test(ta.value.slice(0,a))?" ":"";const next=ta.value.slice(0,a)+prefix+text+ta.value.slice(z);ta.value=next;updateField(key,next);renderPreviewOnly();ta.focus()});
}


async function duplicateCurrentTemplate(){
 const name=prompt("Название копии",currentRussianName()+" -- копия");if(!name)return;
 const p={id:uid("custom"),group:"custom",builtin:false,name:{ru:name.trim()||"Пользовательский документ"},variants:{ru:clone(blocks())},descriptionRu:""};
 customTemplates.unshift(p);currentPresetId=p.id;current.name=clone(p.name);current.variants=clone(p.variants);selectedBlockId=current.variants.ru[0]?.id||null;await persistUserContent();renderAll();showToast("Копия сохранена");
}
async function renameCurrentTemplate(){
 const p=customTemplates.find(x=>x.id===currentPresetId)||customPresets.find(x=>x.id===currentPresetId);if(!p)return;
 const name=prompt("Новое название",currentRussianName());if(!name)return;p.name={ru:name.trim()};current.name=clone(p.name);if(customTemplates.includes(p))await persistUserContent();else saveState();renderAll();
}
async function deleteCurrentTemplate(){
 const p=customTemplates.find(x=>x.id===currentPresetId)||customPresets.find(x=>x.id===currentPresetId);if(!p)return;
 if(!confirm(`Удалить пользовательский шаблон «${currentRussianName()}»?`))return;
 customTemplates=customTemplates.filter(x=>x.id!==p.id);customPresets=customPresets.filter(x=>x.id!==p.id);favoritePresetIds=favoritePresetIds.filter(x=>x!==p.id);await persistUserContent();switchingDocument=true;loadPreset(BUILTIN_PRESETS[0].id,true,true);switchingDocument=false;showToast("Шаблон удалён");
}

setBuilderMode=function(mode){
 builderMode=mode;document.querySelectorAll("[data-builder-mode]").forEach(b=>b.classList.toggle("active",b.dataset.builderMode===mode));document.getElementById("fillWorkspace").hidden=mode!=="fill";document.getElementById("manualWorkspace").hidden=mode!=="manual";const footer=document.querySelector(".sidebar-footer");if(footer)footer.hidden=mode!=="manual";
};

addBlock=function(type,presetBlock=null){
 const defs={
  header:["Шапка NanoTrasen",STANDARD_NT_HEADER],
  title:["Название документа","=============================================\n[head=2]НАЗВАНИЕ ДОКУМЕНТА[/head]\n============================================="],
  details:["Сведения о составителе","Время от начала смены и дата: {{field:shift_time|Время и дата|}}\nСоставитель документа: {{field:author_name|ФИО составителя|}}\nДолжность составителя: {{field:author_job|Должность составителя|}}"],
  text:["Текстовый блок","Новый текст"],divider:["Разделитель","============================================="],stamp:["Место для печатей","=============================================\n[italic]Место для печатей[/italic]"],spacer:["Пустая строка","\n"]
 };
 const source=presetBlock?clone(presetBlock):null,[label,content]=defs[type]||defs.text;const b=source||{id:uid(type),type,labelRu:label,content};b.id=uid(b.type||type);delete b.labelEn;blocks().push(b);selectedBlockId=b.id;saveState();renderAll();
};
function duplicateSelectedBlock(){const b=blocks().find(x=>x.id===selectedBlockId);if(!b)return;const copy=clone(b);copy.id=uid(copy.type||"block");copy.labelRu=(copy.labelRu||"Блок")+" — копия";const i=blocks().findIndex(x=>x.id===b.id);blocks().splice(i+1,0,copy);selectedBlockId=copy.id;saveState();renderAll()}
async function saveSelectedBlockPreset(){const b=blocks().find(x=>x.id===selectedBlockId);if(!b)return;const name=prompt("Название пресета блока",b.labelRu||"Блок");if(!name)return;customBlockPresets.unshift({id:uid("block"),name:name.trim(),block:{type:b.type,labelRu:name.trim(),content:b.content}});await persistUserContent();showToast("Блок сохранён в библиотеку")}
function openBlockLibrary(){
 const builtin=[["header","Шапка","Логотип, объект и код"],["title","Название","Заголовок документа"],["details","Сведения","Дата, заявитель, должность"],["text","Текст","Свободный текстовый блок"],["divider","Разделитель","Горизонтальная линия"],["stamp","Печати","Место для печатей"],["spacer","Отступ","Пустая строка"]];
 modal(`<h3>Библиотека блоков</h3><div class="block-library">${builtin.map(x=>`<button data-add-library="${x[0]}"><strong>${x[1]}</strong><small>${x[2]}</small></button>`).join("")}${customBlockPresets.map(x=>`<button data-custom-block="${esc(x.id)}"><strong>${esc(x.name)}</strong><small>Пользовательский пресет</small></button>`).join("")}</div><div class="modal-actions"><button id="modalCancel">Закрыть</button></div>`);
 document.getElementById("modalCancel").onclick=closeModal;document.querySelectorAll("[data-add-library]").forEach(b=>b.onclick=()=>{closeModal();addBlock(b.dataset.addLibrary)});document.querySelectorAll("[data-custom-block]").forEach(b=>b.onclick=()=>{const p=customBlockPresets.find(x=>x.id===b.dataset.customBlock);if(p){closeModal();addBlock(p.block.type,p.block)}});
}

renderEditor=function(){
 const root=document.getElementById("editor"),b=blocks().find(x=>x.id===selectedBlockId);if(!b){root.innerHTML='<div class="empty">Выберите блок для редактирования</div>';return}
 root.innerHTML=`<label>Название блока</label><input id="blockName" value="${esc(b.labelRu||"")}"><div class="toolbar"><button data-tag="[bold]|[/bold]"><b>B</b></button><button data-tag="[italic]|[/italic]"><i>I</i></button><button data-tag="[bolditalic]|[/bolditalic]"><b><i>BI</i></b></button><button data-tag="[mono]|[/mono]">Mono</button><button data-tag="[head=1]|[/head]">H1</button><button data-tag="[head=2]|[/head]">H2</button><button data-tag="[head=3]|[/head]">H3</button><button data-tag="[color=#b8972d]|[/color]">Цвет</button><button id="insertField">＋ Поле</button><button id="manualPhrases">Формулировки</button></div><label>Содержимое</label><textarea id="blockContent" spellcheck="false">${esc(b.content)}</textarea><div class="editor-actions"><button id="duplicateBlock">Дублировать</button><button id="saveBlockPreset">Сохранить блок</button><button class="danger" id="removeBlock">Удалить</button></div><div class="quick-fields"><div class="quick-head"><strong>Быстрые поля</strong><span>Значения подставляются во все блоки</span></div><div class="field-list" id="fieldList"></div></div>`;
 document.getElementById("blockName").oninput=e=>{b.labelRu=e.target.value;saveState();renderBlocks()};const ta=document.getElementById("blockContent");ta.oninput=e=>{b.content=e.target.value;saveState();renderBlocks();renderPreviewOnly();renderFields()};document.querySelectorAll("[data-tag]").forEach(btn=>btn.onclick=()=>{const [a,z]=btn.dataset.tag.split("|");insertTag(a,z)});document.getElementById("insertField").onclick=insertField;document.getElementById("manualPhrases").onclick=openClausesModal;document.getElementById("duplicateBlock").onclick=duplicateSelectedBlock;document.getElementById("saveBlockPreset").onclick=saveSelectedBlockPreset;document.getElementById("removeBlock").onclick=()=>removeBlock(b.id);renderFields();
};

saveTemplate=async function(){
 const name=prompt("Название пользовательского шаблона",currentRussianName()+" — копия");if(!name)return;
 const p={id:uid("custom"),group:"custom",builtin:false,name:{ru:name.trim()||"Пользовательский документ"},variants:{ru:clone(blocks())},descriptionRu:""};customTemplates.unshift(p);currentPresetId=p.id;current.name=clone(p.name);await persistUserContent();renderAll();showToast("Шаблон сохранён");
};
updateCustom=async function(){
 const p=customTemplates.find(x=>x.id===currentPresetId)||customPresets.find(x=>x.id===currentPresetId);if(!p){showToast("Сначала создайте пользовательскую копию");return}p.name={ru:currentRussianName()};p.variants={ru:clone(blocks())};if(customTemplates.includes(p))await persistUserContent();else saveState();renderPresets();showToast("Шаблон обновлён");
};
exportPreset=function(){const payload={format:"ss14-paperwork-preset",version:3,preset:{id:uid("imported"),group:"custom",builtin:false,name:{ru:currentRussianName()},variants:{ru:blocks()}}};const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=currentRussianName().replace(/[^a-zа-я0-9_-]+/gi,"_")+".json";a.click();URL.revokeObjectURL(a.href)};

function fieldifyImported(text,values){
 const defs=[[/^(Время от начала смены и дата)\s*:\s*(.*)$/im,"shift_time","Время и дата"],[/^(Составитель документа)\s*:\s*(.*)$/im,"author_name","ФИО составителя"],[/^(Должность составителя)\s*:\s*(.*)$/im,"author_job","Должность составителя"]];
 let out=text;defs.forEach(([rx,key,label])=>{const m=out.match(rx);if(m){values[key]=(m[2]||"").trim();out=out.replace(rx,`${m[1]}: {{field:${key}|${label}|}}`)}});return out;
}
function parseImportedDocument(raw){
 const text=String(raw||"").replace(/\r\n?/g,"\n").trim();const values={};if(!text)return {blocks:[],values};
 const lines=text.split("\n"),dividers=[];lines.forEach((line,i)=>{if(/^\s*={8,}\s*$/.test(line))dividers.push(i)});let result=[];
 if(dividers.length>=2){const first=dividers[0],second=dividers[1];const before=lines.slice(0,first).join("\n").trim();const title=lines.slice(first,second+1).join("\n").trim();let rest=lines.slice(second+1).join("\n").trim();if(before)result.push({id:uid("header"),type:"header",labelRu:"Импортированная шапка",content:fieldifyImported(before,values)});if(title)result.push({id:uid("title"),type:"title",labelRu:"Название документа",content:title});if(rest){const last=rest.lastIndexOf("=============================================");if(last>0&&/печати/i.test(rest.slice(last))){const body=rest.slice(0,last).trim(),stamp=rest.slice(last).trim();if(body)result.push({id:uid("text"),type:"text",labelRu:"Содержание документа",content:fieldifyImported(body,values)});result.push({id:uid("stamp"),type:"stamp",labelRu:"Место для печатей",content:stamp})}else result.push({id:uid("text"),type:"text",labelRu:"Содержание документа",content:fieldifyImported(rest,values)})}
 }else result=[{id:uid("text"),type:"text",labelRu:"Импортированный документ",content:fieldifyImported(text,values)}];return {blocks:result,values};
}
function openTextImport(){
 modal(`<h3>Импорт документа из SS14</h3><div class="copy-editor-note">Вставьте готовую разметку. Редактор распознает основные разделы и обязательные поля, а всё нераспознанное сохранит без изменений.</div><textarea class="import-plain-text" id="importPlainText" placeholder="Вставьте документ сюда…"></textarea><div class="modal-actions"><button id="modalCancel">Отмена</button><button class="primary-btn" id="applyTextImport">Импортировать</button></div>`);
 document.getElementById("modalCancel").onclick=closeModal;document.getElementById("applyTextImport").onclick=async()=>{const raw=document.getElementById("importPlainText").value;if(!raw.trim())return;const parsed=parseImportedDocument(raw),name=prompt("Название документа","Импортированный документ")||"Импортированный документ";const p={id:uid("custom"),group:"custom",builtin:false,name:{ru:name},variants:{ru:parsed.blocks},descriptionRu:""};customTemplates.unshift(p);currentPresetId=p.id;current={name:clone(p.name),variants:clone(p.variants),values:parsed.values,profileId:null};selectedBlockId=parsed.blocks[0]?.id||null;builderMode="manual";await persistUserContent();closeModal();renderAll();showToast("Документ импортирован")};
}

saveNamedDraft=function(){const suggested=currentRussianName(),name=prompt("Название черновика",suggested);if(!name)return;const draft=draftSnapshot(name.trim()||suggested);savedDrafts=[draft,...savedDrafts].slice(0,50);localStorage.setItem("ss14-saved-drafts",JSON.stringify(savedDrafts));queueDraftFileSync();updateDraftIndicator();showToast("Черновик сохранён");openDraftsModal()};
deleteNamedDraft=function(id){savedDrafts=savedDrafts.filter(d=>d.id!==id);localStorage.setItem("ss14-saved-drafts",JSON.stringify(savedDrafts));queueDraftFileSync();openDraftsModal();updateDraftIndicator()};


// Theme selection: archive is the default; minimal removes secondary visual detail.
let visualTheme=document.documentElement.dataset.theme||"archive";
function applyVisualTheme(theme){
 visualTheme=["archive","minimal","retro"].includes(theme)?theme:"archive";
 const root=document.documentElement;
 root.classList.add("theme-switching");
 root.dataset.theme=visualTheme;
 localStorage.setItem("ss14-visual-theme",visualTheme);
 const select=document.getElementById("themeSelect");if(select)select.value=visualTheme;
 requestAnimationFrame(()=>requestAnimationFrame(()=>root.classList.remove("theme-switching")));
}
applyVisualTheme(visualTheme);
function revealApp(){document.documentElement.classList.remove("app-booting","theme-switching")}
let keySoundsEnabled=localStorage.getItem("ss14-key-sounds")==="on";
function applyKeySoundToggle(){
 const button=document.getElementById("keySoundToggle");if(!button)return;
 button.setAttribute("aria-pressed",keySoundsEnabled?"true":"false");
 button.classList.toggle("active",keySoundsEnabled);
 button.title=keySoundsEnabled?"Звуки клавиатуры включены":"Звуки клавиатуры выключены";
 button.setAttribute("aria-label",button.title);
}

// Application-level undo/redo. Snapshots cover fields, blocks, selected document and editor mode.
const historyLimit=60;
let historyEntries=[],historyIndex=-1,historyRestoring=false;
function historySnapshot(){return {current:clone(current),currentPresetId,selectedBlockId,builderMode,currentTab}}
function historyKey(snapshot){return JSON.stringify(snapshot)}
function recordHistory(snapshot=historySnapshot()){
 if(historyRestoring||!current)return;
 const key=historyKey(snapshot);
 if(historyIndex>=0&&historyEntries[historyIndex]?.key===key){updateHistoryButtons();return}
 historyEntries=historyEntries.slice(0,historyIndex+1);
 historyEntries.push({key,snapshot});
 if(historyEntries.length>historyLimit)historyEntries.shift();
 historyIndex=historyEntries.length-1;updateHistoryButtons();
}
function resetHistory(){historyEntries=[];historyIndex=-1;recordHistory()}
function restoreHistory(index){
 if(index<0||index>=historyEntries.length)return;
 historyRestoring=true;
 const snapshot=clone(historyEntries[index].snapshot);
 current=snapshot.current;currentPresetId=snapshot.currentPresetId;selectedBlockId=snapshot.selectedBlockId;
 builderMode=snapshot.builderMode||"fill";currentTab=snapshot.currentTab||"preview";historyIndex=index;
 localStorage.setItem("ss14-last-draft",JSON.stringify(draftSnapshot("","autosave")));
 renderAll();updateDraftIndicator();historyRestoring=false;updateHistoryButtons();
}
function undoChange(){if(historyIndex>0)restoreHistory(historyIndex-1)}
function redoChange(){if(historyIndex<historyEntries.length-1)restoreHistory(historyIndex+1)}
function updateHistoryButtons(){
 const undo=document.getElementById("undoBtn"),redo=document.getElementById("redoBtn");
 if(undo)undo.disabled=historyIndex<=0;if(redo)redo.disabled=historyIndex<0||historyIndex>=historyEntries.length-1;
}

// Remove all remaining language controls and English-only labels from the live UI.
document.querySelectorAll(".lang-switch").forEach(x=>x.remove());

// Russian-only: language switch intentionally removed.
document.getElementById("presetSearch").oninput=()=>{finderMode="find";document.querySelectorAll("[data-finder-mode]").forEach(b=>b.classList.toggle("active",b.dataset.finderMode==="find"));renderPresets()};
document.getElementById("clearSearch").onclick=()=>{document.getElementById("presetSearch").value="";activeTypeFilter="";renderActionChips();renderPresets()};
document.querySelectorAll("[data-finder-mode]").forEach(btn=>btn.onclick=()=>{finderMode=btn.dataset.finderMode;document.querySelectorAll("[data-finder-mode]").forEach(b=>b.classList.toggle("active",b===btn));renderPresets()});
document.querySelectorAll("[data-builder-mode]").forEach(btn=>btn.onclick=()=>setBuilderMode(btn.dataset.builderMode));
document.getElementById("themeSelect").onchange=event=>applyVisualTheme(event.target.value);
document.getElementById("keySoundToggle").onclick=()=>{keySoundsEnabled=!keySoundsEnabled;localStorage.setItem("ss14-key-sounds",keySoundsEnabled?"on":"off");applyKeySoundToggle()};
document.getElementById("repoLinkBtn").onclick=()=>window.open("https://github.com/ss14-ps/ss14-paperwork-studio","_blank");
applyKeySoundToggle();
document.getElementById("builderProfilesBtn").onclick=openProfilesModal;
document.getElementById("draftsBtn").onclick=openDraftsModal;
document.getElementById("newBtn").onclick=newDocument;
document.getElementById("importTextBtn").onclick=openTextImport;
document.getElementById("copyBtn").onclick=copyMarkup;
document.getElementById("copyRawBtn").onclick=copyMarkup;
document.getElementById("zoomOut").onclick=()=>applyPreviewZoom(previewZoom-10);
document.getElementById("zoomIn").onclick=()=>applyPreviewZoom(previewZoom+10);
document.getElementById("zoomFit").onclick=fitPreview;
document.getElementById("zoomValue").onclick=()=>applyPreviewZoom(105);
const eggMeow=new Audio("assets/meow.mp3");eggMeow.preload="auto";eggMeow.volume=.68;
document.getElementById("eggCharacter").onclick=()=>{const egg=document.getElementById("eggCharacter");egg.classList.remove("jump");void egg.offsetWidth;egg.classList.add("jump");try{eggMeow.pause();eggMeow.currentTime=0;eggMeow.play().catch(()=>{})}catch{}};
let lastKeyClick=0,keyClickIndex=0;
const keyClickSounds=Array.from({length:5},()=>{const audio=new Audio("assets/key.mp3");audio.preload="auto";audio.volume=.34;return audio});
function keySoundTarget(target){
 return target&&(["INPUT","TEXTAREA"].includes(target.tagName)||target.isContentEditable)&&target.tagName!=="SELECT";
}
function shouldPlayKeySound(event){
 if(!keySoundsEnabled||event.ctrlKey||event.metaKey||event.altKey||event.repeat)return false;
 if(!keySoundTarget(event.target))return false;
 return event.key.length===1||["Backspace","Delete","Enter","Tab"," "].includes(event.key);
}
function playRetroKeyClick(event){
 if(!shouldPlayKeySound(event))return;
 const now=performance.now();if(now-lastKeyClick<18)return;lastKeyClick=now;
 try{
  const audio=keyClickSounds[keyClickIndex++%keyClickSounds.length];
  audio.pause();audio.currentTime=0;
  const baseVolume=event.key==="Enter"?.38:.28;
  audio.volume=baseVolume+Math.random()*.12;
  audio.playbackRate=.55+Math.random()*.95;
  audio.play().catch(()=>{});
 }catch{}
}
document.getElementById("resetBtn").onclick=resetCurrent;
document.getElementById("addHeader").onclick=()=>addBlock("header");
document.getElementById("addText").onclick=()=>addBlock("text");
document.getElementById("addDivider").onclick=()=>addBlock("divider");
document.getElementById("blockLibraryBtn").onclick=openBlockLibrary;
document.getElementById("savePresetBtn").onclick=saveTemplate;
document.getElementById("updatePresetBtn").onclick=updateCustom;
document.getElementById("exportBtn").onclick=exportPreset;
document.getElementById("importBtn").onclick=importPreset;
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>setTab(b.dataset.tab));
document.addEventListener("keydown",event=>{
 playRetroKeyClick(event);
 const target=event.target,typing=/INPUT|TEXTAREA|SELECT/.test(target.tagName)||target.isContentEditable;
 if(event.key==="/"&&!typing){event.preventDefault();document.getElementById("presetSearch").focus()}
 if((event.ctrlKey||event.metaKey)&&event.key==="Enter"){event.preventDefault();copyMarkup()}
 if(!typing&&(event.ctrlKey||event.metaKey)&&!event.shiftKey&&(event.key.toLowerCase()==="z"||event.code==="KeyZ")){event.preventDefault();undoChange()}
 if(!typing&&(event.ctrlKey||event.metaKey)&&((event.key.toLowerCase()==="y"||event.code==="KeyY")||(event.shiftKey&&(event.key.toLowerCase()==="z"||event.code==="KeyZ")))){event.preventDefault();redoChange()}
 if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==="s"){event.preventDefault();saveNamedDraft()}
});
window.addEventListener("beforeunload",flushStateSave);
loadInitial();

/* v1.10 catalog and participant system */

const STANDARD_NT_HEADER="[color=#1b487e]███░███░░░░██░░░░[/color]\n[color=#1b487e]░██░████░░░██░░░░[/color]      [head=3]Бланк документа[/head]\n[color=#1b487e]░░█░██░██░░██░█░░[/color]               [head=3]NanoTrasen[/head]\n[color=#1b487e]░░░░██░░██░██░██░[/color] [bold]{{field:station|станция|Station XX-000}} {{field:department_code|код|КОД-КОД}}[/bold]\n[color=#1b487e]░░░░██░░░████░███[/color]";
function repairTruncatedNtHeaders(){
 const normalizeHeader=text=>String(text||"").replace(/\[color=#1b487e\]░░░░██░░██░██░██░\[\/color\] \[bold\]Объект NT: \{\{field:station\|([^|}]*)\|([^}]*)\}\}\[\/bold\]\n\[color=#1b487e\]░░░░██░░░████░███\[\/color\] \[bold\]Кодификация: \{\{field:department_code\|([^|}]*)\|([^}]*)\}\}\[\/bold\]/g,(_,stationLabel,stationFallback,codeLabel,codeFallback)=>`[color=#1b487e]░░░░██░░██░██░██░[/color] [bold]{{field:station|станция|${stationFallback}}} {{field:department_code|код|${codeFallback}}}[/bold]\n[color=#1b487e]░░░░██░░░████░███[/color]`);
 const repairBlocks=list=>{
   if(!Array.isArray(list))return false;let changed=false;
   for(const block of list){
     if(!block)continue;
     if(block.type!=="header")continue;
     const text=String(block.content||"");
     const normalized=normalizeHeader(text);
     if(normalized!==text){block.content=normalized;changed=true;}
     const currentText=String(block.content||"");
     const isBlueNt=currentText.includes("#1b487e")&&currentText.includes("Бланк документа");
     const truncated=isBlueNt&&(!currentText.includes("NanoTrasen")||currentText.split(/\n/).length<5);
     if(truncated){block.content=STANDARD_NT_HEADER;changed=true;}
     const centered=centerHeaderContent(block.content);
     if(centered!==block.content){block.content=centered;changed=true;}
   }
   return changed;
 };
 let changed=false;
 const collections=[BUILTIN_PRESETS,customTemplates,customPresets];
 for(const collection of collections){
   for(const preset of collection||[]){
     for(const variant of Object.values(preset?.variants||{}))changed=repairBlocks(variant)||changed;
   }
 }
 for(const variant of Object.values(current?.variants||{}))changed=repairBlocks(variant)||changed;
 if(changed)saveState();
 return changed;
}
const SS14_BUILD_VERSION="1.12";

function renderBuildBadge(){
 const brand=[...document.querySelectorAll('body *')].find(el=>el.children.length===0&&el.textContent.trim()==='АРХИВ NT');
 if(brand&&!brand.querySelector?.('.build-badge')&&!document.querySelector('.build-badge'))brand.insertAdjacentHTML('beforeend',`<span class="build-badge">v${SS14_BUILD_VERSION} · ${visiblePresets().filter(p=>p.builtin!==false).length} форм</span>`);
}

function roleFieldExists(key){return getFields().some(field=>field.key===key)}
function roleLabelFromField(key,fallback){return getFields().find(field=>field.key===key)?.label||fallback}
function escapeRegExp(value){return String(value).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}
function stripMarkupLabel(value){
 return String(value||"")
  .replace(/\{\{field:[^}]+\}\}/g,"")
  .replace(/\[[^\]]+\]/g,"")
  .replace(/^[\s:;,.—-]+|[\s:;,.—-]+$/g,"")
  .replace(/\s+/g," ")
  .trim();
}
function fieldContextLabel(key){
 const token=new RegExp(`\\{\\{field:${escapeRegExp(key)}\\|[^}]+\\}\\}`);
 for(const block of blocks()){
  const content=String(block.content||""),match=token.exec(content);if(!match)continue;
  const before=content.slice(0,match.index),lines=before.split(/\n/);
  const candidates=[];
  const sameLine=lines[lines.length-1]||"";
  if(/[:：]\s*(?:\[[^\]]+\]\s*)*$/.test(sameLine))candidates.push(sameLine);
  for(let i=lines.length-2;i>=Math.max(0,lines.length-4);i--){
   const line=lines[i]||"";
   if(!stripMarkupLabel(line))continue;
   if(/[:：]\s*(?:\[[^\]]+\]\s*)*$/.test(line))candidates.push(line);
   break;
  }
  for(const candidate of candidates){
   const parts=candidate.split(/[:：]/),label=stripMarkupLabel(parts.length>1?parts.slice(0,-1).join(":"):candidate);
   if(label&&!/^(я|и|в|на|по|от|для)$/i.test(label))return label;
  }
 }
 return "";
}
function conciseRoleLabel(label,key,fallback){
 const raw=stripMarkupLabel(label)||stripMarkupLabel(fallback)||"";
 const lower=normalizeSearch(raw);
 if(!raw||/^(фио|должность|имя|значение|описание|перечень)$/i.test(raw))return fallback;
 if(/составител/.test(lower))return "Составитель";
 if(/заявител/.test(lower))return "Заявитель";
 if(/допрошенн/.test(lower))return "Допрошенные лица";
 if(/присутствующ/.test(lower))return "Присутствующие";
 if(/свидетел/.test(lower)&&key==="subject_name")return "Свидетель";
 if(/допрашиваем/.test(lower))return "Допрашиваемое лицо";
 if(/проверяем.*(лицо|сотрудник)|основн.*проверяем/.test(lower))return "Проверяемое лицо";
 if(/проверяем.*отдел|ответственн.*лицо/.test(lower))return "Проверяемый отдел / лицо";
 if(/приговор/.test(lower))return "Осуждённый";
 if(/арест|заключенн|под страж/.test(lower))return "Арестуемый";
 if(/обыск|объект.*обыск/.test(lower))return "Объект обыска";
 if(/назначить сотрудник|временно исполня/.test(lower))return "Назначаемый";
 if(/уволить сотрудник/.test(lower))return "Увольняемый";
 if(/лишить сотрудник|разрешаю сотруднику|сотрудник/.test(lower))return "Сотрудник";
 if(/пациент/.test(lower))return "Пациент";
 if(/брак/.test(lower))return "Супруг";
 if(/подозреваем/.test(lower))return "Подозреваемые";
 if(/потерпевш/.test(lower))return "Потерпевшие";
 if(/эксперт/.test(lower))return "Эксперты";
 if(/получател/.test(lower))return "Получатель";
 if(/передающ/.test(lower))return "Передающая сторона";
 if(/получающ/.test(lower))return "Получающая сторона";
 if(/ответственн/.test(lower))return "Ответственный";
 return raw.length>32?fallback:raw;
}
function roleLabelFor(key,fallback){
 return conciseRoleLabel(fieldContextLabel(key)||roleLabelFromField(key,fallback),key,fallback);
}
function pairedRoleLabel(nameKey,jobKey,fallback){
 return roleLabelFor(nameKey,roleLabelFor(jobKey,fallback));
}
function subjectRoleFallback(title){
 if(/обыск/.test(title))return "Объект обыска";
 if(/арест/.test(title))return "Арестуемый";
 if(/назначен|врио|цели станции/.test(title))return "Ответственный";
 if(/свидетел/.test(title))return "Свидетель";
 if(/допрос/.test(title))return "Допрашиваемое лицо";
 if(/приговор/.test(title))return "Осуждённый";
 if(/жалоб|расслед|наруш/.test(title))return "Проверяемое лицо";
 return "Участник";
}
function personRoleFallback(key,index,title){
 if(/брак|супруг/.test(title))return /person_name_[34]/.test(key)?"Новый супруг":"Супруг";
 if(/устранени.*наруш/.test(title))return "Нарушитель";
 if(/^обращение$/.test(title))return "Адресат";
 if(/увольн/.test(title))return "Увольняемый";
 if(/лишени.*доступ/.test(title))return "Сотрудник";
 if(/передвижени|квалификац|снаряжен|трудоустр|повышен|зарплат/.test(title))return "Сотрудник";
 if(/поощрен|наград/.test(title))return "Награждаемый";
 if(/внутреннем расслед/.test(title))return "Заявитель";
 if(/приговор/.test(title))return "Осуждённый";
 if(/обвинител/.test(title))return "Обвиняемый";
 if(/судеб|правонаруш/.test(title))return "Фигурант дела";
 if(/арест|удо|заключенн/.test(title))return "Арестуемый";
 if(/обыск/.test(title))return "Объект обыска";
 if(/оруж/.test(title))return "Владелец оружия";
 if(/препарат|медицинск/.test(title))return "Пациент";
 if(/тела/.test(title))return "Тело";
 if(/строительств/.test(title))return "Исполнитель";
 return `Участник ${index}`;
}
availableDocumentRoles=function(){
 const fields=getFields(),byKey=Object.fromEntries(fields.map(f=>[f.key,f])),roles=[];
 const addPair=(id,label,nameKey,jobKey,departmentKey="")=>{if(byKey[nameKey]||byKey[jobKey])roles.push({id,label,mode:"pair",nameKey:byKey[nameKey]?nameKey:"",jobKey:byKey[jobKey]?jobKey:"",departmentKey:departmentKey&&byKey[departmentKey]?departmentKey:""})};
 const addList=(id,label,key)=>{if(byKey[key])roles.push({id,label,mode:"append",listKey:key})};
 addPair("author",pairedRoleLabel("author_name","author_job","Составитель"),"author_name","author_job","author_department");
 addPair("applicant",pairedRoleLabel("applicant_name","applicant_job","Заявитель"),"applicant_name","applicant_job","applicant_department");
 const title=normalizeSearch(current.name?.ru||"");
 addPair("subject",pairedRoleLabel("subject_name","subject_job",subjectRoleFallback(title)),"subject_name","subject_job","subject_department");
 for(let i=1;i<=6;i++){const n=`person_name_${i}`,j=`person_job_${i}`;if(byKey[n])addPair(`person${i}`,pairedRoleLabel(n,j,personRoleFallback(n,i,title)),n,j)}
 addList("suspects",roleLabelFor("suspects","Подозреваемые"),"suspects");
 addList("victims",roleLabelFor("victims","Потерпевшие"),"victims");
 addList("witnesses",roleLabelFor("witnesses","Свидетели"),"witnesses");
 addList("experts",roleLabelFor("experts","Эксперты"),"experts");
 addList("present_people",roleLabelFor("present_people","Присутствующие"),"present_people");
 [["recipient","Получатель"],["responsible","Ответственное лицо"],["giver","Передающая сторона"],["receiver","Получающая сторона"]].forEach(([key,label])=>{if(byKey[key])roles.push({id:key,label:roleLabelFor(key,label),mode:"single",nameKey:key})});
 return roles;
};

profileRoleMap=function(profile,role){
 if(role.mode==="append")return {};
 const out={};if(role.nameKey)out[role.nameKey]=profile.fullName||"";if(role.jobKey)out[role.jobKey]=profileJobLabel(profile,lang);if(role.departmentKey)out[role.departmentKey]=profileDepartmentLabel(profile,lang);return out;
};
applyProfileToRole=function(profile,role,mode="replace"){
 if(!profile||!role)return;
 if(role.mode==="append"){
   const line=[profile.fullName,profileJobLabel(profile,lang)].filter(Boolean).join(" -- ");
   const old=String(current.values[role.listKey]||"").trim();
   current.values[role.listKey]=old?old+"\n"+line:line;
 }else{
   const values=profileRoleMap(profile,role);Object.entries(values).forEach(([key,value])=>{if(value&&(mode==="replace"||!String(current.values[key]||"").trim()))current.values[key]=value});
 }
 if(role.id==="author")current.profileId=profile.id;saveState();closeModal();renderAll();showToast(`${profile.label||profile.fullName} → ${role.label}`);
};
function roleCurrentValue(role){
 if(role.mode==="append"){const v=String(current.values[role.listKey]||"").trim();return v?v.split(/\n+/)[0]+(v.includes("\n")?" …":""):"Не указан"}
 const name=String(current.values[role.nameKey]||"").trim(),job=String(current.values[role.jobKey]||"").trim();return [name,job].filter(Boolean).join(" · ")||"Не указан";
}
function focusRoleField(role){const key=role.mode==="append"?role.listKey:(role.nameKey||role.jobKey);const el=document.querySelector(`[data-fill-key="${CSS.escape(key||"")}"]`);if(el){el.scrollIntoView({behavior:"smooth",block:"center"});el.focus()}}
function clearDocumentRole(role){if(role.mode==="append")current.values[role.listKey]="";else[role.nameKey,role.jobKey,role.departmentKey].filter(Boolean).forEach(key=>current.values[key]="");saveState();renderAll()}
function openRoleProfilePicker(roleId){
 const role=availableDocumentRoles().find(item=>item.id===roleId);if(!role)return;
 const active=activeProfile()||characterProfiles[0];
 modal(`<h3>Выбрать: ${esc(role.label)}</h3><div class="role-picker-note">Персонаж будет назначен только на роль «${esc(role.label)}». Остальные участники документа не изменятся.</div><input class="role-catalog-search" id="roleCatalogSearch" placeholder="Найти персонажа по имени, должности или отделу"><div class="role-picker-list" id="roleCatalogList">${characterProfiles.length?characterProfiles.map(profile=>`<div class="role-picker-item ${active&&profile.id===active.id?'active-character':''}" data-role-card="${esc(profile.id)}"><div><strong>${esc(profile.label||profile.fullName)}</strong><small>${esc([profile.fullName,profileJobLabel(profile,lang),profileDepartmentLabel(profile,lang)].filter(Boolean).join(" · "))}</small></div><button data-role-profile="${esc(profile.id)}">Назначить</button></div>`).join(""):`<div class="list-empty">Персонажей пока нет</div>`}</div><div class="modal-actions"><button id="roleManual">Ввести вручную</button><button id="roleProfiles">Каталог персонажей</button><button id="roleCancel">Отмена</button></div>`);
 const choose=id=>applyProfileToRole(characterProfiles.find(p=>p.id===id),role,"replace");
 document.querySelectorAll('[data-role-profile]').forEach(button=>button.onclick=e=>{e.stopPropagation();choose(button.dataset.roleProfile)});
 document.querySelectorAll('[data-role-card]').forEach(card=>card.onclick=()=>choose(card.dataset.roleCard));
 const search=document.getElementById('roleCatalogSearch');if(search)search.oninput=()=>{const q=normalizeSearch(search.value);document.querySelectorAll('[data-role-card]').forEach(card=>{const p=characterProfiles.find(x=>x.id===card.dataset.roleCard);const hay=normalizeSearch([p?.label,p?.fullName,profileJobLabel(p||{},lang),profileDepartmentLabel(p||{},lang)].join(' '));card.style.display=!q||hay.includes(q)?'grid':'none'})};
 document.getElementById('roleManual').onclick=()=>{closeModal();setTimeout(()=>focusRoleField(role),0)};document.getElementById('roleProfiles').onclick=openProfilesModal;document.getElementById('roleCancel').onclick=closeModal;
}
function participantChipValue(role){
 if(role.mode==="append"){
   const lines=String(current.values[role.listKey]||"").split(/\n+/).map(x=>x.trim()).filter(Boolean);
   if(!lines.length)return "Не указаны";
   const first=lines[0].split(/\s+--\s+|\s+—\s+/)[0];return lines.length>1?`${first}, +${lines.length-1}`:first;
 }
 const name=String(current.values[role.nameKey]||"").trim(),job=String(current.values[role.jobKey]||"").trim();
 return name||job||"Не указан";
}
roleToolbarHtml=function(){
 const roles=availableDocumentRoles();if(!roles.length)return "";const active=activeProfile()||characterProfiles[0];
 return `<section class="participants-panel"><div class="participants-panel-head"><strong>Участники</strong><span>${active?`Активный персонаж: ${esc(active.label||active.fullName)}`:"Откройте роль, чтобы выбрать персонажа"}</span></div><div class="participants-list">${roles.map(role=>{const value=participantChipValue(role),empty=/^Не указан/.test(value);return `<div class="participant-chip ${empty?'empty':''}" data-select-role="${esc(role.id)}" title="Выбрать: ${esc(role.label)}"><span class="participant-chip-role">${esc(role.label)}:</span><span class="participant-chip-value">${esc(value)}</span>${!empty?`<button class="participant-chip-clear" data-clear-role="${esc(role.id)}" title="Очистить">×</button>`:""}</div>`}).join("")}<button class="participant-add" data-open-participants title="Управление участниками">+</button></div></section>`;
};
function openParticipantsOverview(){
 const roles=availableDocumentRoles();
 modal(`<h3>Участники документа</h3><div class="role-picker-note">Выберите роль, затем персонажа. Для свидетелей, подозреваемых и других списков можно добавлять несколько человек.</div><div class="role-picker-list">${roles.map(role=>`<div class="role-picker-item" data-overview-role="${esc(role.id)}"><div><strong>${esc(role.label)}</strong><small>${esc(participantChipValue(role))}</small></div><button>Открыть</button></div>`).join("")}</div><div class="modal-actions"><button id="participantsClose">Закрыть</button></div>`);
 document.querySelectorAll('[data-overview-role]').forEach(x=>x.onclick=()=>openRoleProfilePicker(x.dataset.overviewRole));document.getElementById('participantsClose').onclick=closeModal;
}
function bindParticipantPanel(){
 document.querySelectorAll('[data-select-role]').forEach(node=>node.onclick=e=>{if(e.target.closest('[data-clear-role]'))return;openRoleProfilePicker(node.dataset.selectRole)});
 document.querySelectorAll('[data-clear-role]').forEach(button=>button.onclick=e=>{e.stopPropagation();clearDocumentRole(availableDocumentRoles().find(role=>role.id===button.dataset.clearRole))});
 const add=document.querySelector('[data-open-participants]');if(add)add.onclick=openParticipantsOverview;
}
function updateParticipantPanelState(){
 const panel=document.querySelector(".participants-panel");if(!panel)return;
 const roles=availableDocumentRoles();
 panel.querySelectorAll("[data-select-role]").forEach(chip=>{
  const role=roles.find(item=>item.id===chip.dataset.selectRole);if(!role)return;
  const value=participantChipValue(role),empty=/^Не указан/.test(value);
  chip.classList.toggle("empty",empty);
  const valueNode=chip.querySelector(".participant-chip-value");if(valueNode)valueNode.textContent=value;
  let clear=chip.querySelector("[data-clear-role]");
  if(empty&&clear)clear.remove();
  if(!empty&&!clear)chip.insertAdjacentHTML("beforeend",`<button class="participant-chip-clear" data-clear-role="${esc(role.id)}" title="Очистить">×</button>`);
 });
 bindParticipantPanel();
}

saveProfileForm=async function(id=null){
 const existing=characterProfiles.find(profile=>profile.id===id),departmentText=document.getElementById('profileDepartmentText').value.trim(),jobText=document.getElementById('profileJobText').value.trim();
 const dep=departmentByAny(departmentText),job=dep?jobEntryByAny(dep.code,jobText):null;
 const profile={id:existing?.id||uid('profile'),label:document.getElementById('profileLabel').value.trim(),fullName:document.getElementById('profileFullName').value.trim(),department:dep?.code||"",departmentCustom:dep?"":departmentText,jobId:job?.id||"",jobCustom:job?"":jobText};
 if(!profile.label)profile.label=profile.fullName||t('newProfile');if(existing)Object.assign(existing,profile);else characterProfiles.unshift(profile);await persistProfiles();openProfilesModal();
};
editProfileForm=function(id=null){
 const profile=characterProfiles.find(item=>item.id===id)||{},departmentValue=profileDepartmentLabel(profile,lang),jobValue=profileJobLabel(profile,lang);
 const depOptions=DEPARTMENTS.filter(d=>d.code!=="ПД").map(d=>`<option value="${esc(d[lang]||d.ru)}"></option>`).join("");
 const allJobs=[...new Map(Object.values(JOBS_BY_DEPARTMENT).flat().map(job=>[job.ru,job])).values()].map(job=>`<option value="${esc(job[lang]||job.ru)}"></option>`).join("");
 modal(`<h3>${esc(id?t('profileEdit'):t('newProfile'))}</h3><div class="profile-grid"><div class="full"><label>${esc(t('profileLabel'))}</label><input id="profileLabel" value="${esc(profile.label||"")}"></div><div class="full"><label>${esc(t('profileName'))}</label><input id="profileFullName" value="${esc(profile.fullName||"")}"></div><div class="full"><label>Отдел</label><input id="profileDepartmentText" list="departmentSuggestions" value="${esc(departmentValue)}" placeholder="Выберите или введите свой отдел"><datalist id="departmentSuggestions">${depOptions}</datalist><div class="profile-freeform-note">Можно написать любое название — список служит только подсказкой.</div></div><div class="full"><label>Должность</label><input id="profileJobText" list="jobSuggestions" value="${esc(jobValue)}" placeholder="Выберите или введите свою должность"><datalist id="jobSuggestions">${allJobs}</datalist><div class="profile-freeform-note">Произвольные профессии сохраняются без ограничений.</div></div></div><div class="modal-actions"><button id="profileFormCancel">${esc(t('cancel'))}</button><button class="primary-btn" id="profileFormSave">${esc(t('profileSave'))}</button></div>`);
 document.getElementById('profileFormCancel').onclick=openProfilesModal;document.getElementById('profileFormSave').onclick=()=>saveProfileForm(id);
};

function completionInfo(fields=getFields()){
 const required=fields.filter(isRequired);
 const missing=required.filter(field=>!String(current.values[field.key]||"").trim());
 const filledRequired=required.length-missing.length;
 const filledAll=fields.filter(field=>String(current.values[field.key]||"").trim()).length;
 const percent=required.length?Math.round(filledRequired/required.length*100):100;
 return {required,missing,filledRequired,filledAll,total:fields.length,percent,ready:missing.length===0};
}
function currentFormNumber(){
 const preset=currentPreset();
 if(preset?.builtin===false)return "USR";
 const id=variantPrimaryId(preset)||currentPresetId;
 return String((id?.match(/\d+/)||["0"])[0]).padStart(3,"0");
}
function currentGroupLabel(preset=currentPreset()){
 return GROUPS[preset?.group]?.ru||"Пользовательский архив";
}
function documentDescription(preset=currentPreset()){
 return String(preset?.descriptionRu||"").replace(/—/g,"--");
}
function statusHtml(info){
 return "";
}
function variantSelectHtml(preset=currentPreset()){
 const variants=variantSiblings(preset);
 if(variants.length<2)return "";
 return `<label class="variant-control"><span>Версия</span><select id="variantSelect">${variants.map(item=>`<option value="${esc(item.id)}" ${item.id===currentPresetId?"selected":""}>${esc(item.variantLabel||displayPresetName(item))}</option>`).join("")}</select></label>`;
}
renderFillControl=function(field){
 if(field.key==="department_code"){
  const value=departmentCodeValue();
  return `<div class="fill-control required filled" data-control-key="${esc(field.key)}"><label><span class="field-done-dot"></span>${esc(field.label)}</label><button class="fill-code-button" data-open-department>${esc(value)}</button></div>`;
 }
 const value=current.values[field.key]||"",placeholder=field.fallback||field.label,{values,multi}=presetValuesForField(field);
 const required=isRequired(field),filled=String(value).trim()!=="";
 const textarea=fieldNeedsTextarea(field);
 const marker=required?`<span class="${filled?'field-done-dot':'field-required-dot'}"></span>`:"";
 const requiredText="";
 const input=textarea?`${formatBarHtml(field.key)}<textarea data-fill-key="${esc(field.key)}" placeholder="${esc(placeholder)}">${esc(value)}</textarea>`:`<input data-fill-key="${esc(field.key)}" value="${esc(value)}" placeholder="${esc(placeholder)}">`;
 const selected=String(value).split(/[,;\n]+/).map(item=>item.trim());
 const choices=values.length?`<div class="smart-options">${values.map(option=>{const label=option[lang]||option.ru||option.en||String(option);return `<button type="button" class="smart-option ${selected.includes(label)?"on":""}" data-smart-key="${esc(field.key)}" data-smart-value="${esc(label)}" data-smart-multi="${multi===true}">${esc(label)}</button>`}).join("")}<button type="button" class="smart-option smart-save" title="Сохранить значение как пресет" data-save-field-preset="${esc(field.key)}">＋</button></div>`:"";
 const classes=["fill-control",required?"required":"",required&&!filled?"missing":"",required&&filled?"filled":"",isParticipantField(field)?"participant-field":""].filter(Boolean).join(" ");
 return `<div class="${classes}" data-control-key="${esc(field.key)}"><label>${marker}<span>${esc(field.label)}</span>${requiredText}</label>${input}${choices}</div>`;
};
renderFillWorkspace=function(){
 const preset=currentPreset(),name=displayPresetName(preset),custom=isCustomCurrent(),fields=getFields(),info=completionInfo(fields);
 const builderName=document.getElementById("builderDocumentName");if(builderName)builderName.textContent=name;
 const brief=document.getElementById("documentBrief"),kind=typeLabel(presetKind(preset||{}),lang),description=documentDescription(preset);
 brief.innerHTML=`<div class="dossier-card">
  <div class="dossier-top">
   <div>
    <div class="dossier-kicker"><span>${esc(formReference(preset))}</span><span>${esc(departmentCodeValue())}</span><span>${esc(kind)}</span><span>${esc(currentGroupLabel(preset))}</span></div>
    <h3 class="dossier-title">${customFormBadge(preset)}${esc(name)}</h3>
    ${description?`<div class="dossier-summary">${esc(description)}</div>`:""}
   </div>
   <div class="dossier-actions">${variantSelectHtml(preset)}<button data-duplicate-template>Сохранить копию</button>${custom?`<button data-update-template>Обновить</button><button data-rename-template>Переименовать</button><button class="danger" data-delete-template>Удалить</button>`:""}</div>
  </div>
  ${statusHtml(info)}
 </div>`;
 const main=fields.filter(field=>fieldGroup(field)==="main"),specific=fields.filter(field=>fieldGroup(field)==="document");
 const section=(title,items,profileButton=false,sectionClass="")=>items.length?`<div class="fill-section-title ${sectionClass}"><strong>${esc(title)}</strong>${profileButton?`<button id="profilesQuick">Персонажи</button>`:""}</div>${items.map(renderFillControl).join("")}`:"";
 document.getElementById("fillFields").innerHTML=roleToolbarHtml()+section("ОСНОВНЫЕ СВЕДЕНИЯ",main,true,"section-main")+section("ПОЛЯ ДОКУМЕНТА",specific,false,"section-document");
 const profileButton=document.getElementById("profilesQuick");if(profileButton)profileButton.onclick=openProfilesModal;
 document.querySelectorAll("[data-quick-role]").forEach(button=>button.onclick=()=>{const profile=activeProfile()||characterProfiles[0],role=availableDocumentRoles().find(item=>item.id===button.dataset.quickRole);if(profile&&role)applyProfileToRole(profile,role,"replace")});
 const openRoleProfiles=document.querySelector("[data-open-role-profiles]");if(openRoleProfiles)openRoleProfiles.onclick=openProfilesModal;
 const controls=[...document.querySelectorAll("#fillFields [data-fill-key]")];
 controls.forEach((control,index)=>{control.oninput=e=>{updateField(e.target.dataset.fillKey,e.target.value);renderPreviewOnly()};if(control.tagName==="INPUT")control.onkeydown=e=>{if(e.key!=="Enter")return;e.preventDefault();const next=e.shiftKey?controls[index-1]:controls[index+1];if(next)next.focus();else control.blur()}});
 document.querySelectorAll("#fillFields [data-open-department]").forEach(el=>el.onclick=openDepartmentPicker);
 document.querySelectorAll("#fillFields [data-smart-value]").forEach(button=>button.onclick=()=>{const key=button.dataset.smartKey,value=button.dataset.smartValue,multi=button.dataset.smartMulti==="true";if(multi){const existing=String(current.values[key]||"").split(/[,;\n]+/).map(x=>x.trim()).filter(Boolean);current.values[key]=(existing.includes(value)?existing.filter(x=>x!==value):[...existing,value]).join(", ")}else current.values[key]=value;saveState();renderFillWorkspace();renderPreviewOnly()});
 document.querySelectorAll("#fillFields [data-save-field-preset]").forEach(button=>button.onclick=async()=>{const key=button.dataset.saveFieldPreset,value=String(current.values[key]||"").trim();if(!value)return;const values=customFieldPresets[key]||[];if(!values.includes(value))customFieldPresets[key]=[...values,value];await persistUserContent();renderFillWorkspace();showToast("Пресет сохранён")});
 document.querySelectorAll("[data-field-format]").forEach(b=>b.onclick=()=>wrapFieldSelection(b.dataset.fieldFormat,b.dataset.open,b.dataset.close));
 document.querySelectorAll("[data-field-color]").forEach(b=>b.onclick=()=>openFieldColor(b.dataset.fieldColor));
 const titleBlock=blocks().find(b=>b.type==="title"),textBlock=blocks().find(b=>b.type==="text");
 document.getElementById("wordingActions").innerHTML=`${titleBlock?`<button data-edit-title="${esc(titleBlock.id)}">✎ Изменить название в бланке</button>`:""}${textBlock?`<button data-edit-text="${esc(textBlock.id)}">✎ Изменить основной текст</button>`:""}`;
 document.querySelectorAll("[data-edit-title],[data-edit-text]").forEach(button=>button.onclick=()=>editCopyBlock(button.dataset.editTitle||button.dataset.editText));
 const hotbar=document.getElementById("phraseHotbar");hotbar.innerHTML=phraseHotbarHtml();bindPhraseHotbar(hotbar,insertClauseText);
 document.querySelector("[data-duplicate-template]")?.addEventListener("click",duplicateCurrentTemplate);
 document.getElementById("variantSelect")?.addEventListener("change",event=>switchPresetVariant(event.target.value));
 document.querySelector("[data-update-template]")?.addEventListener("click",updateCustom);
 document.querySelector("[data-rename-template]")?.addEventListener("click",renameCurrentTemplate);
 document.querySelector("[data-delete-template]")?.addEventListener("click",deleteCurrentTemplate);
};
function updateHierarchyState(key){
 const info=completionInfo();
 const missingRoot=document.querySelector("[data-missing-list]");
 if(missingRoot){
  const missing=info.missing.slice(0,4),rest=info.missing.length-missing.length;
  missingRoot.innerHTML=missing.map(field=>`<span>${esc(field.label)}</span>`).join("")+(rest>0?`<span>+${rest}</span>`:"");
  missingRoot.hidden=info.ready;
 }
 const field=getField(key),control=document.querySelector(`[data-control-key="${CSS.escape(key||"")}"]`);
 if(field&&control&&isRequired(field)){
  const filled=String(current.values[key]||"").trim()!=="";
  control.classList.toggle("missing",!filled);control.classList.toggle("filled",filled);
  const marker=control.querySelector(".field-required-dot,.field-done-dot");
  if(marker)marker.className=filled?"field-done-dot":"field-required-dot";
  const text=control.querySelector(".field-required-text");if(text)text.textContent=filled?"заполнено":"обязательно";
 }
 updateParticipantPanelState();
}
const baseUpdateField=updateField;
updateField=function(key,value){baseUpdateField(key,value);updateHierarchyState(key)};

const previousRenderAll=renderAll;
renderAll=function(){previousRenderAll();bindParticipantPanel();renderBuildBadge()};
setTimeout(()=>{renderBuildBadge();bindParticipantPanel()},0);

Promise.all([loadProfilesFromFile(),loadExternalData(),loadDraftsFromFile()]).then(()=>{
 if(!currentPresetId&&BUILTIN_PRESETS.length)loadInitial();
 localStorage.setItem("ss14-character-profiles",JSON.stringify(characterProfiles));
 const untouched=!Object.values(current.values||{}).some(value=>String(value||"").trim());
 if(untouched&&currentPresetId){
  const preset=getPreset(currentPresetId);
  if(preset)current=clone({name:preset.name,variants:preset.variants,values:{},profileId:null});
 }
 repairTruncatedNtHeaders();renderAll();updateDraftIndicator();resetHistory();revealApp();
}).catch(error=>{console.error(error);renderAll();updateDraftIndicator();resetHistory();revealApp()});
