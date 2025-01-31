export const COOL_COLORS = ["var(--background)", "#006cd1", "#0060bc", "#0054a7", "#004992", "#003c7a", "#002f61"];

export const WARM_COLORS = ["var(--background)", "#e2bf8d", "#daae70", "#d29e52", "#cb8c34", "#b67e2f", "#a2702a"];

export const placeholders = [
  "move to nyc?",
  "break up with my boyfriend?",
  "buy this new jacket?",
  "center the universe?",
  "quit my job?",
  "go to grad school?",
];

export const questions = [
  {
    number: 1,
    title: "Intuition",
    text: "When you sit quietly with this question, can you trust your gut and internal compass?",
  },
  {
    number: 2,
    title: "Resources",
    text: "Do you have the time and money to give this question the attention it deserves?",
  },
  {
    number: 3,
    title: "Skills",
    text: "Do you have the skills and knowledge to navigate this question?",
  },
  {
    number: 4,
    title: "Support",
    text: "When you talk to those who matter most – your friends, family, and community – do you feel supported and understood?",
  },
  {
    number: 5,
    title: "Emotions",
    text: "Do you feel emotionally prepared to face whatever truths and challenges may emerge when answering this question?",
  },
  {
    number: 6,
    title: "Impact",
    text: "Will your decision impact the people around you, the environment, or the future?",
  },
];

export const responses = {
  YYYYYY: {
    bias: "Optimism Bias",
    description: "Your certainty glows like a false sun",
    strategy:
      "List five specific ways your plan could fail, then ask someone to add five more",
  },
  YYYYYN: {
    bias: "Impact Bias",
    description: "Future emotions cast longer shadows than their reality",
    strategy:
      "Write down how you feel about a similar past event that seemed momentous",
  },
  YYYYNY: {
    bias: "Empathy Gap",
    description:
      "Future emotions speak a language your present self cannot translate",
    strategy:
      "Interview three people who have already made this choice about how they felt before, during, and after",
  },
  YYYNYY: {
    bias: "Present Bias",
    description: "Today's pleasure drowns tomorrow's voice",
    strategy:
      "Write a letter from your future self describing the consequences",
  },
  YYNYYY: {
    bias: "Dunning-Kruger Effect",
    description:
      "Your self-perception isn’t always a good signal of your skills",
    strategy:
      "Write down three past successes where you initially doubted your abilities",
  },
  YNYYYY: {
    bias: "Mental Accounting",
    description: "Money changes color in different pockets",
    strategy:
      "Remove all labels and categories, write down only the raw numbers, then decide",
  },
  NYYYYY: {
    bias: "Affective Forecasting",
    description: "Future emotions cast longer shadows than their reality",
    strategy:
      "Compare what happens when you make your decision using only numbers and facts",
  },
  YYYYNN: {
    bias: "Projection Bias",
    description: "Today's self casts shadows on tomorrow's desires",
    strategy:
      "Write a diary entry dated one year from now, describing how your needs have changed",
  },
  YYYNNY: {
    bias: "Anchoring Bias",
    description: "First thoughts drop heavy anchors",
    strategy:
      "Start your thinking from the opposite extreme, then work backward",
  },
  YYNNYY: {
    bias: "Planning Fallacy",
    description: "Time stretches like elastic in your mind",
    strategy:
      "Double your time estimate, then double it again. Now add a buffer day",
  },
  YNNYYY: {
    bias: "Choice-supportive Bias",
    description: "Memory serves your chosen path",
    strategy:
      "List only the flaws in your preferred option, only the benefits in others",
  },
  NNYYYY: {
    bias: "Sunk Cost Fallacy",
    description: "Past investments whisper 'continue'",
    strategy:
      "If you were starting fresh today, would you make the same choice?",
  },
  YYYNYN: {
    bias: "Decision Fatigue",
    description: "Choices drain your mental reservoir",
    strategy: "Make important decisions before noon, or after a complete rest",
  },
  YYNYNY: {
    bias: "Analysis Paralysis",
    description: "Information becomes its own maze",
    strategy: "Set a timer for 30 minutes - when it rings, you must decide",
  },
  YYNYYN: {
    bias: "IKEA Effect",
    description: "Creation blinds us to flaws",
    strategy: "Have someone evaluate your work without knowing you made it",
  },
  YNYYNY: {
    bias: "Outcome Bias",
    description: "Results mask the quality of decisions",
    strategy: "Write down your decision process before knowing the outcome",
  },
  YNYYYN: {
    bias: "Availability Cascade",
    description: "Recent memories shout louder than distant wisdom",
    strategy: "Research three historical examples before deciding",
  },
  NYYYNY: {
    bias: "Time-Saving Bias",
    description: "Speed's promise often lies",
    strategy: "Calculate exact time saved, then halve it",
  },
  NYYYYN: {
    bias: "Ambiguity Effect",
    description: "Uncertainty wears risk's mask",
    strategy: "List unknowns as opportunities rather than threats",
  },
  NYNYYY: {
    bias: "Availability Heuristic",
    description: "Memory's spotlight blinds peripheral vision",
    strategy: "Seek three examples that don't come to mind immediately",
  },
  NYYNYY: {
    bias: "Status Quo Bias",
    description: "Change whispers while comfort shouts",
    strategy: "Make one small change daily for a week before deciding",
  },
  YNYNYY: {
    bias: "Confirmation Bias",
    description: "Evidence bends to belief's gravity",
    strategy: "Spend 30 minutes arguing against your preferred choice",
  },
  YYNYNN: {
    bias: "Choice Bracketing",
    description: "Decisions echo beyond their borders",
    strategy: "Draw a mind map connecting this choice to five other life areas",
  },

  YYNNNY: {
    bias: "Attribute Substitution",
    description: "Simple answers seduce complex questions",
    strategy: "Break your decision into five smaller decisions",
  },
  YNYYNN: {
    bias: "Restraint Bias",
    description: "Tomorrow's self wears today's promises",
    strategy: "Create three specific obstacles to test your resolve today",
  },
  YNYNNY: {
    bias: "Present-Bias",
    description: "Immediate rewards blind future eyes",
    strategy: "Write the story of this decision's impact one year from now",
  },
  YNYNYN: {
    bias: "Pattern Recognition Bias",
    description: "Meaning emerges from random noise",
    strategy: "Roll dice to randomize your approach three times",
  },
  YNNYYN: {
    bias: "Decision Avoidance",
    description: "Postponement poses as wisdom",
    strategy: "Set three deadlines - soft, firm, and final",
  },
  YNNYNY: {
    bias: "Hyperbolic Discounting",
    description: "Future rewards fade like distant stars",
    strategy: "Calculate the compound effect over five years",
  },
  NYYYNN: {
    bias: "Probability Neglect",
    description: "Possibility overshadows probability",
    strategy: "Convert all chances to frequencies (1 in X)",
  },
  NYYNYN: {
    bias: "Self-Control Bias",
    description: "Willpower borrows from tomorrow",
    strategy: "Create three specific obstacles to test your resolve now",
  },
  NYNYNY: {
    bias: "Optimism Bias",
    description: "Hope paints futures too bright",
    strategy: "Write the worst-case scenario in detail",
  },
  NYNYYN: {
    bias: "Loss Aversion",
    description: "Fear of loss outweighs potential gain",
    strategy: "Calculate the cost of not changing",
  },
  NNYYYN: {
    bias: "Illusion of Control",
    description: "Influence masquerades as control",
    strategy: "List everything outside your control in this situation",
  },
  NNYYNY: {
    bias: "Cognitive Inertia",
    description: "Old thoughts carve deep rivers",
    strategy: "Argue the opposite case for 10 minutes",
  },
  NNNYYY: {
    bias: "Negativity Bias",
    description: "Dark thoughts cast longer shadows",
    strategy: "List three positive outcomes for every negative one",
  },
  YYYNNN: {
    bias: "Overconfidence Effect",
    description: "Certainty wears wisdom's mask",
    strategy: "Ask three experts to criticize your plan",
  },
  YYNNYN: {
    bias: "Framing Effect",
    description: "Context shapes content",
    strategy: "Reframe your decision in three different contexts",
  },
  YNNNYY: {
    bias: "Anchoring Bias",
    description: "First thoughts become reference points",
    strategy: "Start from zero and rebuild your thinking",
  },
  NYYNNY: {
    bias: "Information Bias",
    description: "Data drowns decision",
    strategy: "Make a choice with current information, then sleep on it",
  },
  NYNNYY: {
    bias: "False Consensus Effect",
    description: "Your view seems universal",
    strategy: "Survey five people with different backgrounds",
  },
  NNYNYY: {
    bias: "Base Rate Fallacy",
    description: "Stories overshadow statistics",
    strategy: "Research the basic probability first",
  },
  YYNNNN: {
    bias: "Analysis Paralysis",
    description: "Thinking replaces doing",
    strategy: "Set a timer for 5 minutes - decide when it rings",
  },
  YNYNNN: {
    bias: "Egocentric Bias",
    description: "Self-perspective creates its own horizon",
    strategy: "Write your decision from three other viewpoints",
  },
  YNNYNN: {
    bias: "Conservatism Bias",
    description: "Old beliefs resist new evidence",
    strategy: "Pretend you just arrived from another planet",
  },
  YNNNNY: {
    bias: "Contrast Effect",
    description: "Comparison distorts judgment",
    strategy: "Evaluate each option in isolation, then wait a day",
  },
  YNNNYN: {
    bias: "Decision Fatigue",
    description: "Choices drain mental energy",
    strategy: "Make important decisions before noon",
  },
  NYNYNN: {
    bias: "Ambiguity Aversion",
    description: "Uncertainty breeds inaction",
    strategy: "Embrace one unknown element deliberately",
  },
  NYNNNY: {
    bias: "Pro-Innovation Bias",
    description: "New isn't always better",
    strategy: "List three advantages of the old way",
  },
  NYYNNN: {
    bias: "Unit Bias",
    description: "Completion compels continuation",
    strategy: "Leave one task intentionally unfinished",
  },
  NNYYNN: {
    bias: "Status Quo Bias",
    description: "Comfort masks opportunity",
    strategy: "Change one small habit before deciding",
  },
  NNYNNY: {
    bias: "Hindsight Bias",
    description: "Past clarity is an illusion",
    strategy: "Write your current uncertainty before proceeding",
  },
  NNNNYY: {
    bias: "Outcome Bias",
    description: "Results mask process",
    strategy: "Evaluate your decision method before knowing outcomes",
  },
  NNYNYN: {
    bias: "Mere Exposure Effect",
    description: "Familiarity breeds preference",
    strategy: "Try the unfamiliar option for one day",
  },
  NNNYNY: {
    bias: "Complexity Bias",
    description: "Simple solutions hide in complicated thoughts",
    strategy: "Explain your decision to a child",
  },
  NYNNYN: {
    bias: "Default Effect",
    description: "Preset options become invisible choices",
    strategy: "Create three new options from scratch",
  },
  NNNYYN: {
    bias: "Survivorship Bias",
    description: "Success stories hide failed attempts",
    strategy: "Research three similar failures",
  },
  YNNNNN: {
    bias: "Ambiguity Aversion",
    description: "Unknown paths breed fear",
    strategy: "Take one small step into uncertainty",
  },
  NYNNNN: {
    bias: "Loss Aversion",
    description: "Potential loss outweighs possible gain",
    strategy: "Calculate the cost of maintaining the status quo",
  },
  NNYNNN: {
    bias: "Catastrophizing Bias",
    description: "Imagination amplifies disaster",
    strategy: "Write the most boring possible outcome",
  },
  NNNYNN: {
    bias: "Ostrich Effect",
    description: "Avoiding information feels like protection",
    strategy: "Read one piece of challenging information",
  },
  NNNNYN: {
    bias: "Recency Bias",
    description: "Latest events shine brightest",
    strategy: "Research similar situations from five years ago",
  },
  NNNNNY: {
    bias: "Pessimism Bias",
    description: "Dark futures eclipse bright possibilities",
    strategy: "List three unexpected positive outcomes",
  },
  NNNNNN: {
    bias: "Zero-Risk Bias",
    description: "Perfect safety is a mirage",
    strategy: "Welcome one small uncertainty into your plan",
  },
};
