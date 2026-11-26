// Policy Hub directory.
//
// Source: the Policy Hub spreadsheet (S/N, institution, hub name, hub
// director, hub email). Fields that were not in the spreadsheet start empty
// and the pages show an empty state for them until they are filled in:
//
//   proposals:  { 2025: number | null, 2026: number | null }
//   openHouse:  { date: "YYYY-MM-DD" | null, photos: url | null, videos: url | null }
//   projects:   [{ title, description }]
//   events:     [{ title, date: "YYYY-MM-DD", location, description, href }]
//
// `confirmed: false` marks hubs whose host institution is still to be
// confirmed; `institution` then names the location instead.

const hubs = [
  ["1", "unilag", "UNILAG", "University of Lagos", "Fatiu Ahmed", "unilag.policyhub@futurepathways.ng"],
  ["2", "adeleke", "Adeleke", "Adeleke University", "Oladele Stella Oluwaferanmi", "au.policyhub@futurepathways.ng"],
  ["3", "covenant", "Covenant", "Covenant University", "Ojeaga Integrity", "cu.policyhub@futurepathways.ng"],
  ["4", "futa", "FUTA", "Federal University of Technology, Akure", "David Ikuomola", "futa.policyhub@futurepathways.ng"],
  ["5", "uniabuja", "UniAbuja", "University of Abuja", "Joy Omanulun Ibrahim", "uniabuja.policyhub@futurepathways.ng"],
  ["6", "buk", "BUK", "Bayero University Kano", "Sulaiman Sani Hamisu", "buk.policyhub@futurepathways.ng"],
  ["7", "fuoye", "FUOYE", "Federal University Oye-Ekiti", "Bolarinwa Amirat Olawumi", "fuoye.policyhub@futurepathways.ng"],
  ["8", "eksu", "EKSU", "Ekiti State University", "Sunmola Temitope", "eksu.policyhub@futurepathways.ng"],
  ["9", "atu", "ATU", "Abiola Ajimobi Technical University", "Faaizah Adenike Adeleke", "atu.policyhub@futurepathways.ng"],
  ["10", "unizik", "UNIZIK", "Nnamdi Azikiwe University", "Tony-Igwe Onyinyechukwu Esther", "unizik@futurepathways.ng"],
  ["11", "lasutech", "LASUTECH", "Lagos State University of Science and Technology", "Ezekiel A. Ayodele", "lasutech.policyhub@futurepathways.ng"],
  ["12", "ui", "UI", "University of Ibadan", "Ajayi Deborah Opeyemi", "ui.policyhub@futurepathways.ng"],
  ["13", "unilorin", "Unilorin", "University of Ilorin", "Bolajoko Oyindamola Saadat", "unilorin.policyhub@futurepathways.ng"],
  ["14", "lasu", "LASU", "Lagos State University", "Bankole Joseph Mautin", "lasu.policyhub@futurepathways.ng"],
  ["15", "fulafia", "FULAFIA", "Federal University of Lafia", "Salihu Haniat", "fulafia@futurepathways.ng"],
  ["16", "uniosun", "UNIOSUN", "Osun State University", "Adebayo Sekinat Adenike", "uniosun.policyhub@futurepathways.ng"],
  ["17", "lautech", "LAUTECH", "Ladoke Akintola University of Technology", "Abdulrasaq Abdullahi Oladeji", "lautech.policyhub@futurepathways.ng"],
  ["18", "absu", "ABSU", "Abia State University", "Caleb C.A. Okechukwu", "absu.policyhub@futurepathways.ng"],
  ["19", "uniport", "UNIPORT", "University of Port Harcourt", "Ezeji Favour", "uniport.policyhub@futurepathways.ng"],
  ["20", "unijos", "UNIJOS", "University of Jos", "Chiderah Godfrey Blessing", "unijos.policyhub@futurepathways.ng"],
  ["21", "ae-funai", "AE-FUNAI", "Alex Ekwueme Federal University, Ndufu-Alike", "Victor Nwafor", "aefunai.policyhub@futurepathways.ng"],
  ["22", "lead-city", "Lead City", "Lead City University", "Idris Deborah Halima Kara", "leadcity.policyhub@futurepathways.ng"],
  ["23", "uniuyo", "Uniuyo", "University of Uyo", "Enoabasi Eduok", "uniuyo.policyhub@futurepathways.ng"],
  ["24", "unimaid", "UNIMAID", "University of Maiduguri", "Harun Idris", "unimaid.policyhub@futurepathways.ng"],
  ["25", "anchor", "Anchor", "Anchor University Lagos, Ayobo", "Okeke Precious Oluchi", "anchor.policyhub@futurepathways.ng"],
  ["26", "lasucom", "LASUCOM", "Lagos State University College of Medicine", "Umana Edimbuk Divine", "lasucom.policyhub@futurepathways.ng"],
  ["27", "adeseun-ogundoyin", "Adeseun Ogundoyin", "Adeseun Ogundoyin Polytechnic", "Israel", "aop.policyhub@futurepathways.ng"],
  ["28", "fuotuoke", "FUOtuoke", "Federal University Otuoke", "Francis Enoch-excel Charles", "fuotuoke.policyhub@futurepathways.ng"],
  ["29", "afit", "AFIT", "Air Force Institute of Technology"],
  ["30", "oau", "OAU", "Obafemi Awolowo University", "Precious Boluwatife Alli", "oau.policyhub@futurepathways.ng"],
  ["31", "aaua", "AAUA", "Adekunle Ajasin University"],
  ["32", "oyo", "Oyo", "Oyo", null, null, false],
  ["33", "makurdi", "Makurdi", "University of Agriculture, Makurdi"],
  ["34", "bauchi", "Bauchi", "Bauchi", null, null, false],
  ["35", "timit", "TIMIT", "Thomas McGettrick Institute of Technology, Ogoja"],
  ["36", "funaab", "FUNAAB", "Federal University of Agriculture, Abeokuta", "Ibrahim Ogunsetan Olajuwon", null],
  ["37", "ebsu", "EBSU", "Ebonyi State University"],
  ["38", "sazu", "SAZU", "Sa'adu Zungur University"],
  ["39", "fuwukari", "FUWUKARI", "Federal University Wukari", "Oputa Samuel Daberechukwu", "fuwukari.policyhub@futurepathways.ng"],
  ["40", "abu", "ABU", "Ahmadu Bello University", "Yusuf Ahmadu Kodan", "abu.policyhub@futurepathways.ng"],
  ["41", "oou", "OOU", "Olabisi Onabanjo University"],
  ["42", "fugus", "FUGUS", "Federal University Gusau"],
  ["43", "landmark", "Landmark", "Landmark University"],
  ["44", "udus", "UDUS", "Usmanu Danfodiyo University"],
  ["45", "godfrey-okoye", "Godfrey Okoye", "Godfrey Okoye University"],
  ["46", "delsu", "DELSU", "Delta State University"],
  ["47", "paau", "PAAU", "Prince Abubakar Audu University", "Adams Mariam Momoh", "paau.policyhub@futurepathways.ng"],
  ["48", "unical", "UNICAL", "University of Calabar"],
  ["49", "futminna", "FUTMINNA", "Federal University of Technology, Minna"],
  ["50", "fulokoja", "FU Lokoja", "Federal University Lokoja"],
  // S/N 51 in the spreadsheet repeats Adekunle Ajasin University (S/N 31).
  ["52", "taraba", "Taraba", "Taraba State University", "Iweren Blessing Kwagh", null],
  ["53", "benue", "Benue", "Benue", null, null, false],
  ["54", "redeemers", "Redeemer's", "Redeemer's University"],
  ["55", "uniben", "UNIBEN", "University of Benin"],
  ["56", "kwasu", "KWASU", "Kwara State University"],
  ["57", "achievers", "Achievers", "Achievers University"],
  ["58", "unn", "UNN", "University of Nigeria, Nsukka"],
  ["59", "gsu", "GSU", "Gombe State University"],
  ["60", "emmanuel-alayande", "Emmanuel Alayande", "Emmanuel Alayande University of Education"],
  ["61", "umyu", "UMYU", "Umaru Musa Yar'Adua University"],
  ["62", "jabu", "JABU", "Joseph Ayo Babalola University"],
  ["63", "state-university", "State University", "State University", null, null, false],
  ["64", "coou", "COOU", "Chukwuemeka Odumegwu Ojukwu University"],
  ["65", "nij", "NIJ", "Nigerian Institute of Journalism, Yaba"],
  ["66", "babcock", "Babcock", "Babcock University"],
  ["67", "miva", "Miva", "Miva Open University"],
  ["68", "veritas", "VERITAS", "Veritas University Abuja", "Dzarma Samuel Musa", null],
];

// Card accent colours, taken from the home page programme tiles.
const tones = [
  "bg-[#cfe7d6] text-[#627768]",
  "bg-[#ffc20a] text-[#8a6a00]",
  "bg-[#87d8f3] text-black",
  "bg-[#fff3d6] text-[#a67714]",
];

export const policyHubs = hubs.map(
  ([sn, slug, code, institution, director = null, email = null, confirmed = true], index) => ({
    sn: Number(sn),
    slug,
    code,
    hubName: `Policy Hub – ${code}`,
    institution,
    confirmed,
    director,
    email,
    tone: tones[index % tones.length],
    proposals: { 2025: null, 2026: null },
    openHouse: { date: null, photos: null, videos: null },
    projects: [],
    events: [],
  })
);

export const FPDI_EMAIL = "info@futurepathways.ng";

export function getHub(slug) {
  return policyHubs.find((hub) => hub.slug === slug);
}

export function getAdjacentHubs(slug) {
  const index = policyHubs.findIndex((hub) => hub.slug === slug);
  return {
    previous: index > 0 ? policyHubs[index - 1] : null,
    next: index < policyHubs.length - 1 ? policyHubs[index + 1] : null,
  };
}

export function displayName(hub) {
  return hub.confirmed ? hub.institution : `${hub.institution} (institution to be confirmed)`;
}
