// ==========================================
// MED SCHOOL SCAFFOLD GHANA - QUESTION BANK
// PRECLINICAL LEVEL 100/200 HIGH-YIELD ENGINE
// ==========================================

const questionBank = [
    {
        id: 1,
        subject: "Anatomy",
        topic: "Upper Limb (FREE PREVIEW)",
        question: "A 22-year-old medical student falls during a soccer match and fractures the medial epicondyle of the humerus. A clinical examination reveals a physical deformity. Which of the following deficits is most likely to be observed?",
        options: {
            A: "Inability to abduct the thumb cleanly",
            B: "Loss of sensation to the medial 1 and a half fingers with a claw hand tendency",
            C: "Complete wrist drop due to paralysis of forearm extensor muscles",
            D: "Total loss of forearm pronation capabilities"
        },
        correct: "B",
        explanation: "High-Yield Pearl: The ulnar nerve passes directly posterior to the medial epicondyle of the humerus. Fractures in this specific region compress or lacerate the nerve, causing sensory loss to the medial 1.5 fingers and motor weakness of intrinsic hand muscles, which leads to 'ulnar clawing'. Radial nerve injury causes wrist drop (C)."
    },
    {
        id: 2,
        subject: "Biochemistry",
        topic: "Carbohydrate Metabolism",
        question: "During an intensive laboratory session, a student analyzes the key regulatory enzymes of glycolysis. Which of the following biochemical enzymes serves as the primary rate-limiting regulatory point for this entire pathway?",
        options: {
            A: "Hexokinase / Glucokinase",
            B: "Pyruvate Kinase",
            C: "Phosphofructokinase-1 (PFK-1)",
            D: "Glucose-6-Phosphatase"
        },
        correct: "C",
        explanation: "High-Yield Pearl: Phosphofructokinase-1 (PFK-1) is the absolute rate-limiting enzyme of glycolysis. It handles the irreversible conversion of Fructose-6-phosphate to Fructose-1,6-bisphosphate. It is heavily down-regulated by high ATP and citrate levels, and up-regulated by high AMP and Fructose-2,6-bisphosphate."
    },
    {
        id: 3,
        subject: "Physiology",
        topic: "Cell Membrane Dynamics",
        question: "A medical researcher treats a nerve cell with a local anesthetic block that selectively prevents the opening of voltage-gated sodium (Na+) channels. Which phase of the neuronal action potential will be directly blocked?",
        options: {
            A: "The resting membrane potential phase",
            B: "The rapid depolarization phase",
            C: "The rapid repolarization phase",
            D: "The transient hyperpolarization phase"
        },
        correct: "B",
        explanation: "High-Yield Pearl: The rapid depolarization phase of an action potential relies heavily on the massive influx of extracellular sodium ions (Na+) through fast voltage-gated sodium channels. Blocking these specific channels stops depolarization completely, which is exactly how local anesthetics stop pain signals."
    },
    {
        id: 4,
        subject: "Anatomy",
        topic: "Thorax & Cardiovascular System",
        question: "A patient presents with an advanced tumor in the posterior mediastinum that completely compresses the azygos vein. Which venous pathway represents the most likely collateral route to return blood to the heart?",
        options: {
            A: "Internal jugular vein system",
            B: "Vertebral venous plexuses and superior/inferior vena cava pathways",
            C: "Subclavian venous system",
            D: "Hepatic portal venous system"
        },
        correct: "B",
        explanation: "High-Yield Pearl: The azygos venous system serves as a critical bridge connecting the inferior vena cava (IVC) and superior vena cava (SVC). If it gets compressed, the vertebral venous plexuses serve as the main collateral bypass network to ensure blood still returns to the right atrium."
    },
    {
        id: 5,
        subject: "Biochemistry",
        topic: "The Citric Acid Cycle (TCA)",
        question: "Malonate is added to a mitochondrial suspension oxidizing pyruvate. It acts as a potent competitive inhibitor of succinate dehydrogenase. Which metabolite will accumulate extensively within the matrix?",
        options: {
            A: "Fumarate",
            B: "Malate",
            C: "Succinate",
            D: "Alpha-ketoglutarate"
        },
        correct: "C",
        explanation: "High-Yield Pearl: Succinate dehydrogenase converts succinate directly into fumarate in the TCA cycle. If this step is competitively blocked by malonate, the pathway stalls right there, causing succinate to pile up in massive quantities."
    },
    {
        id: 6,
        subject: "Physiology",
        topic: "Hematology & Blood",
        question: "A child is brought to the clinic presenting with severe fatigue. Laboratory tests indicate a severe microcytic, hypochromic anemia. A deficiency in which nutrient is the most common cause of this presentation?",
        options: {
            A: "Vitamin B12 (Cobalamin)",
            B: "Folic Acid (Folate)",
            C: "Elemental Iron",
            D: "Vitamin C (Ascorbic Acid)"
        },
        correct: "C",
        explanation: "High-Yield Pearl: Iron deficiency causes microcytic (abnormally small) and hypochromic (abnormally pale) red blood cells because iron is a core component of hemoglobin synthesis. Deficiencies in Vitamin B12 or Folate cause macrocytic (large cell) anemias instead."
    },
    {
        id: 7,
        subject: "Anatomy",
        topic: "Lower Limb & Gait Mechanics",
        question: "An individual suffers a deep laceration to the lateral aspect of the knee joint, damaging the common fibular (peroneal) nerve. Which physical sign will be most prominent during a clinical gait assessment?",
        options: {
            A: "Inability to flex the knee smoothly",
            B: "Persistent foot drop and a high-steppage gait pattern",
            C: "Loss of plantar flexion (inability to stand on tiptoes)",
            D: "Trendelenburg sign due to gluteal weakness"
        },
        correct: "B",
        explanation: "High-Yield Pearl: The common fibular nerve winds directly around the neck of the fibula. Injury here paralyzes the anterior and lateral compartment muscles of the leg, causing an inability to dorsiflex the foot (foot drop). To prevent dragging their toes, the patient uses a high-steppage gait."
    },
    {
        id: 8,
        subject: "Biochemistry",
        topic: "Protein Synthesis & Genetics",
        question: "During a molecular biology review session, a student discusses the mechanism of action of various antibiotics. Which agent acts specifically by binding to the 30S ribosomal subunit to misread mRNA lines?",
        options: {
            A: "Erythromycin",
            B: "Chloramphenicol",
            C: "Tetracycline / Aminoglycosides",
            D: "Penicillin G"
        },
        correct: "C",
        explanation: "High-Yield Pearl: Aminoglycosides (like streptomycin) and Tetracyclines bind directly to the small 30S bacterial ribosomal subunit to inhibit protein synthesis or cause misreading. Erythromycin and chloramphenicol target the large 50S subunit instead."
    },
    {
        id: 9,
        subject: "Physiology",
        topic: "Renal Clearance Mechanics",
        question: "A clinical team wants to accurately measure a patient's Glomerular Filtration Rate (GFR). Which substance is considered the gold standard benchmark because it is freely filtered but neither reabsorbed nor secreted?",
        options: {
            A: "Para-aminohippuric acid (PAH)",
            B: "Inulin",
            C: "Urea",
            D: "Glucose"
        },
        correct: "B",
        explanation: "High-Yield Pearl: Inulin is an exogenous plant carbohydrate that is freely filtered at the glomerulus and completely untouched by the renal tubules (zero reabsorption, zero secretion). This makes its clearance rate perfectly equal to the true GFR. PAH is used to calculate renal plasma flow instead."
    },
    {
        id: 10,
        subject: "Anatomy",
        topic: "Abdomen & Gastrointestinal System",
        question: "During a surgical repair for a bleeding peptic ulcer on the posterior wall of the first part of the duodenum, which major arterial vessel running behind it is most likely at risk of erosion?",
        options: {
            A: "Splenic artery",
            B: "Left gastric artery",
            C: "Gastroduodenal artery",
            D: "Common hepatic artery"
        },
        correct: "C",
        explanation: "High-Yield Pearl: The gastroduodenal artery runs directly posterior to the first part of the duodenum. Ulcers eating through the back wall of the duodenum frequently erode into this massive vessel, causing severe, life-threatening internal bleeding."
    }
];