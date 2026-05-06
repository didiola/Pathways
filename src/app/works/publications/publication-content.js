import tpcart from "../../assets/image/tpcart.png";
import youth from "../../assets/image/youth.png";
import aiesec from "../../assets/image/aiesec.png";
import publicationHero from "../../assets/image/fdiphoto.png";

export const publications = [
  {
    slug: "tpc-2026",
    title: "TPC 2026",
    image: tpcart,
    heroImage: publicationHero,
    href: "/works/publications/tpc-2026",
    article: [
      {
        type: "paragraph",
        text: "Last year, something significant happened in Nigeria. Across university campuses in all six geopolitical zones, from the North-West to the South-South, undergraduate students sat down, opened their laptops, and started writing. Not essays for grades, not applications for scholarships abroad, but policy papers for their country.",
      },
      {
        type: "paragraph",
        text: "That is how the 2025 FPDI Policy Challenge began, with belief. The belief that young Nigerians don't just have opinions about governance. They have ideas. Rigorous, evidence-driven, implementable ideas. And they deserve a stage.",
      },
      { type: "heading", text: "The Numbers That Tell the Story" },
      {
        type: "paragraph",
        text: "When the call for submissions went out, 824 people registered their interest. That number alone is a statement, nearly a thousand young Nigerians saying, unprompted, that they wanted to engage with the hard questions of governance and institutional trust.",
      },
      {
        type: "paragraph",
        text: "But interest is easy, commitment is harder. When the submission deadline elapsed, over 100 teams had followed through, researching, writing, and submitting fully developed policy proposals. The gap between 824 and 100 is not a failure. It is reality. And the 100+ who crossed that line did something worth honouring.",
      },
      {
        type: "paragraph",
        text: "From those submissions, a distinguished Selection Committee, comprising policy experts, academics, development practitioners, and governance specialists, evaluated each proposal and selected three finalist teams to advance.",
      },
      { type: "heading", text: "The People Who Held the Standard" },
      {
        type: "paragraph",
        text: "A challenge is only as credible as the people who evaluate it. For the inaugural FPDI Policy Challenge, the steering committee brought weight, range, and genuine expertise to the table.",
      },
      {
        type: "paragraph",
        text: "Ambassador Dapo Oyewole: Chief Judge; Special Senior Adviser to the President on International Cooperation and Secretary General of CoSPAL. Ms. Elizabeth Abubakar: Judge; Global Development Practitioner. Mr. Khalil Nur Khalil: Judge; Economic Adviser, Katsina State Government. Ms. Omowumi Ogunrotimi: Judge; Founder, Gender Mobile Initiative.",
      },
      {
        type: "paragraph",
        text: "Together, they reviewed every submission with the seriousness the participants deserved, not as a ceremonial exercise, but as a genuine investment in the next generation of Nigerian policy thinkers.",
      },
      { type: "heading", text: "Meet the Finalists" },
      {
        type: "paragraph",
        text: "Three teams made it through. What is striking, and worth pausing on, is that all three arrived at the same destination independently. Each team, from different universities, different backgrounds, and different perspectives, chose to write about national unity and social cohesion.",
      },
      {
        type: "paragraph",
        text: "Team One · Adeleke University, Ede, Osun State | Oluokun Oluwadimimu David & Ayeminimowa Isaiah Ilemobayo. Topic: Harmony in Diversity Initiative (HDI): A Grassroots Policy Framework for Strengthening National Unity in Nigeria.",
      },
      {
        type: "paragraph",
        text: "DOUG Team · University of Lagos | Fredrick Goodness Amarachi, Odutola Oyindolapo David & Izima Ugochinyere Lillian. Topic: Collaboration for Cohesion: Laying the Foundation for Sustained National Unity.",
      },
      {
        type: "paragraph",
        text: "Team Trailblazers · University of Lagos | Okpalanedu Chiugo Joy, Oyenpemi Rofiat Oyewumi, Dosunmu Ifeoluwa Flourish & Oluwole-Banjo Motunrayo Chisom. Topic: Strengthening Social Cohesion in Nigeria: The Nigerian Federal Character Principle and Proposed Reforms.",
      },
      {
        type: "paragraph",
        text: "1st Place: ₦2,000,000. 2nd Place: ₦1,000,000. 3rd Place: ₦750,000.",
      },
      {
        type: "paragraph",
        text: "A combined prize pool of approximately $2,500, purely for the quality of thinking. That is the message FPDI sent with this challenge: rigorous ideas have value. Your ideas have value.",
      },
      { type: "heading", text: "Policy Conference For Youth" },
      {
        type: "paragraph",
        text: "The Policy Conference for Youth was the award ceremony, where everything came together. Over 300 attendees gathered to witness the finalist presentations, students, practitioners, academics, and policymakers in the same space, taking seriously what young Nigerians had to say.",
      },
      {
        type: "paragraph",
        text: "The Honourable Minister of Industry, Trade and Investment, Dr. Jumoke Oduwole, MFR, delivered special guest remarks, a signal that the conversation happening in that room was not just aspirational. It was relevant. It was being heard.",
      },
      { type: "heading", text: "What This All Means" },
      {
        type: "paragraph",
        text: "The inaugural FPDI Policy Challenge was not just an event. It was a proof of concept, proof that when you create a credible, respectful space and invite young Nigerians to bring their best thinking, they show up.",
      },
      {
        type: "paragraph",
        text: "The fact that over 800 people registered tells us the appetite is enormous. The fact that 100+ were submitted tells us the commitment is real. The fact that all three finalist teams independently centred their papers on national unity tells us something about what this generation of Nigerians is carrying: the weight of a fractured national conversation, and the quiet determination to help mend it.",
      },
      {
        type: "paragraph",
        text: "The FPDI Policy Challenge 2026 is now open. If 2025 showed us what is possible, 2026 is where we go further.",
      },
      {
        type: "link",
        text: "Ready to be part of it? Register here for the 2026 edition.",
        href: "https://www.policychallenge.com",
      },
    ],
    paragraphs: [
      "Last year, something significant happened in Nigeria. Across university campuses in all six geopolitical zones, undergraduate students started writing policy papers for their country.",
    ],
  },
  {
    slug: "2025-national-youth-amb",
    title: "2025 National Youth Amb.",
    image: youth,
    heroImage: publicationHero,
    href: "/works/publications/2025-national-youth-amb",
    paragraphs: [
      "The 2025 National Youth Ambassadors publication captures key insights from youth delegates and outlines practical recommendations for policy and governance engagement.",
      "It documents participant perspectives, leadership outcomes, and proposed pathways for sustained contribution in national development spaces.",
    ],
  },
  {
    slug: "aiesec-partnership",
    title: "Aiesec Partnership",
    image: aiesec,
    heroImage: publicationHero,
    href: "/works/publications/aiesec-partnership",
    paragraphs: [
      "This publication outlines the FPDI and AIESEC collaboration framework, including shared goals for youth leadership, learning exchange, and project-based community impact.",
      "It presents the strategic intent of the partnership and the structure for joint activities, engagement channels, and expected value for participants.",
    ],
  },
];

export function getPublicationBySlug(slug) {
  return publications.find((publication) => publication.slug === slug);
}
