
import { GoogleGenAI } from "@google/genai";
import { Course, UserProfile } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeOnboardingProfile = async (answers: any): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyse ces réponses de questionnaire d'onboarding pour une plateforme de formation numérique responsable :
      ${JSON.stringify(answers)}
      
      Donne-moi uniquement un titre de "Persona" professionnel et inspirant (ex: Architecte Cloud Souverain, Développeur Green-Tech, Stratège Data Ethique) suivi d'une phrase de description de son profil.`
    });
    return response.text || "Apprenant Engagé";
  } catch (error) {
    return "Apprenant Numérique Responsable";
  }
};

export const getOrientationAdvice = async (userPrompt: string, availableCourses: Course[]) => {
  try {
    const courseContext = JSON.stringify(availableCourses.map(c => ({
      id: c.id,
      title: c.title,
      skills: c.skills.join(', '),
      carbon: c.ecoScore.carbonFootprint + "kg CO2",
      sovScore: c.sovereignty.sovereigntyScore + "/100",
      jurisdiction: c.sovereignty.legalJurisdiction
    })));

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Tu es l'expert en orientation de "EcoOrient". Ton rôle est de conseiller des parcours d'apprentissage en équilibrant aspirations professionnelles, impact carbone et souveraineté numérique.

      CONTEXTE DES FORMATIONS :
      ${courseContext}

      DEMANDE UTILISATEUR :
      "${userPrompt}"

      DIRECTIVES :
      1. Analyse les compétences mentionnées.
      2. Recommande la formation la plus pertinente techniquement.
      3. Justifie ton choix en comparant explicitement le Score de Souveraineté et l'Empreinte Carbone.
      4. Si l'utilisateur demande une techno polluante, propose une alternative.
      5. Réponds de manière structurée et professionnelle.`,
    });

    return response.text || "Erreur de génération de conseil.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "L'expert IA est momentanément indisponible.";
  }
};
