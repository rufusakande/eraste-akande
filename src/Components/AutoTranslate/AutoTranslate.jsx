import React, { useState, useEffect, createContext, useContext } from 'react';

// Context pour la traduction
const TranslationContext = createContext();

// Hook pour utiliser la traduction
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};

// Cache des traductions pour éviter les appels répétés
const translationCache = new Map();

// Fonction de traduction avec API gratuite
const translateText = async (text, sourceLang = 'fr', targetLang = 'en') => {
  const cacheKey = `${text}-${sourceLang}-${targetLang}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }

  try {
    // Utilisation de l'API MyMemory (gratuite, 1000 requêtes/jour)
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`
    );
    const data = await response.json();
    
    if (data.responseStatus === 200) {
      const translation = data.responseData.translation;
      translationCache.set(cacheKey, translation);
      return translation;
    }
  } catch (error) {
    console.warn('Erreur de traduction:', error);
  }
  
  return text; // Retourne le texte original en cas d'erreur
};

// Provider de traduction
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Anglais par défaut
  const [translations, setTranslations] = useState(new Map());
  const [isLoading, setIsLoading] = useState(false);

  // Détection de la langue du navigateur (optionnel)
  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    const savedLang = localStorage.getItem('preferred-language');
    
    // Si pas de langue sauvegardée, utiliser anglais par défaut
    const defaultLang = savedLang || 'en';
    setLanguage(defaultLang);
  }, []);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('preferred-language', newLang);
  };

  const t = async (text) => {
    if (language === 'fr') {
      return text; // Texte original en français
    }

    const cacheKey = `${text}-${language}`;
    
    if (translations.has(cacheKey)) {
      return translations.get(cacheKey);
    }

    setIsLoading(true);
    const translated = await translateText(text, 'fr', language);
    
    setTranslations(prev => new Map(prev).set(cacheKey, translated));
    setIsLoading(false);
    
    return translated;
  };

  return (
    <TranslationContext.Provider value={{ 
      t, 
      language, 
      changeLanguage, 
      isLoading 
    }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Composant de texte traduit
export const TranslatedText = ({ children, tag: Tag = 'span' }) => {
  const { t } = useTranslation();
  const [translatedText, setTranslatedText] = useState(children);

  useEffect(() => {
    const translateAsync = async () => {
      const result = await t(children);
      setTranslatedText(result);
    };
    translateAsync();
  }, [children, t]);

  return <Tag>{translatedText}</Tag>;
};

// Sélecteur de langue
export const LanguageSelector = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <div style={{ 
      position: 'fixed', 
      top: '20px', 
      right: '20px', 
      zIndex: 1000,
      background: 'white',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <select 
        value={language} 
        onChange={(e) => changeLanguage(e.target.value)}
        style={{
          padding: '5px 10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px'
        }}
      >
        <option value="en">🇺🇸 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="es">🇪🇸 Español</option>
        <option value="de">🇩🇪 Deutsch</option>
      </select>
    </div>
  );
};