// AutoTranslate.js - Système de traduction automatique
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';

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

// Dictionnaire de traductions statiques (plus rapide et fiable)
const translations = {
  'fr-en': {
    
    "Iyanou Eraste AKANDE": "Iyanou Eraste AKANDE",

  }
};

// Provider de traduction
export const TranslationProvider = ({ children }) => {
  // Langue par défaut : anglais (selon votre demande)
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Récupérer la langue sauvegardée ou utiliser anglais par défaut
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    setLanguage(savedLang);
  }, []);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('preferred-language', newLang);
    // Recharger la page pour appliquer les traductions
    window.location.reload();
  };

  const t = (text) => {
    if (language === 'fr') {
      return text; // Texte original en français
    }

    const langTranslations = translations[`fr-${language}`];
    return langTranslations?.[text] || text;
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

// Composant AutoTranslate - traduit automatiquement tous les textes
export const AutoTranslate = ({ children }) => {
  const { t, language } = useTranslation();
  const containerRef = useRef(null);
  const [isTranslated, setIsTranslated] = useState(false);

  useEffect(() => {
    const translateTextNodes = (element) => {
      if (!element || language === 'fr' || isTranslated) return;

      // Parcourir tous les nœuds de texte
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            // Ignorer les scripts, styles et nœuds vides
            const parent = node.parentElement;
            if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) {
              return NodeFilter.FILTER_REJECT;
            }
            return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        },
        false
      );

      const textNodes = [];
      let node;
      while (node = walker.nextNode()) {
        textNodes.push(node);
      }

      // Traduire chaque nœud de texte
      textNodes.forEach(textNode => {
        const originalText = textNode.textContent.trim();
        if (originalText) {
          const translatedText = t(originalText);
          if (translatedText !== originalText) {
            textNode.textContent = translatedText;
          }
        }
      });

      // Traduire les attributs (title, alt, placeholder, aria-label)
      const elements = element.querySelectorAll('*');
      elements.forEach(el => {
        ['title', 'alt', 'placeholder', 'aria-label'].forEach(attr => {
          const value = el.getAttribute(attr);
          if (value && value.trim()) {
            const translatedValue = t(value.trim());
            if (translatedValue !== value) {
              el.setAttribute(attr, translatedValue);
            }
          }
        });
      });

      setIsTranslated(true);
    };

    if (containerRef.current) {
      // Attendre que le DOM soit complètement rendu
      const timer = setTimeout(() => {
        translateTextNodes(containerRef.current);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [t, language, children, isTranslated]);

  // Réinitialiser la traduction quand les children changent
  useEffect(() => {
    setIsTranslated(false);
  }, [children]);

  return <div ref={containerRef}>{children}</div>;
};

// Sélecteur de langue amélioré
export const LanguageSelector = () => {
  const { language, changeLanguage } = useTranslation();

  const languages = [
    { code: 'en', label: '🇺🇸 English', name: 'English' },
    { code: 'fr', label: '🇫🇷 Français', name: 'Français' },
    { code: 'es', label: '🇪🇸 Español', name: 'Español' },
    { code: 'de', label: '🇩🇪 Deutsch', name: 'Deutsch' }
  ];

  return (
    <div style={{ 
      position: 'fixed', 
      top: '20px', 
      right: '20px', 
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '8px 12px',
      borderRadius: '8px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
      backdropFilter: 'blur(10px)'
    }}>
      <select 
        value={language} 
        onChange={(e) => changeLanguage(e.target.value)}
        style={{
          padding: '6px 10px',
          border: '1px solid #ddd',
          borderRadius: '6px',
          fontSize: '14px',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          outline: 'none'
        }}
        title="Changer de langue"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Script pour extraire automatiquement les textes
export const extractTextsForTranslation = () => {
  const texts = new Set();
  
  // Extraire tous les textes visibles
  document.querySelectorAll('*').forEach(el => {
    // Texte direct des éléments (sans les enfants)
    const directText = Array.from(el.childNodes)
      .filter(node => node.nodeType === 3) // Text nodes only
      .map(node => node.textContent.trim())
      .join(' ')
      .trim();
    
    if (directText && directText.length > 1 && directText.length < 200) {
      texts.add(directText);
    }
    
    // Attributs à traduire
    ['title', 'alt', 'placeholder', 'aria-label'].forEach(attr => {
      const val = el.getAttribute(attr);
      if (val && val.trim() && val.trim().length > 1) {
        texts.add(val.trim());
      }
    });
  });
  
  // Filtrer les textes non pertinents
  const filteredTexts = [...texts].filter(text => {
    return !text.match(/^[\d\s\-_.,;:()[\]{}'"]*$/) && // Pas que de la ponctuation/chiffres
           !text.match(/^[A-Z_][A-Z0-9_]*$/) && // Pas des constantes
           !text.includes('http') && // Pas des URLs
           text.length >= 2;
  });
  
  // Générer le code JavaScript
  const jsObject = filteredTexts.sort().reduce((obj, text) => {
    obj[text] = `[TRADUIRE] ${text}`;
    return obj;
  }, {});
  
  console.log('=== TEXTES À TRADUIRE ===');
  console.log('Copiez ce code dans votre fichier de traductions :');
  console.log(JSON.stringify(jsObject, null, 2));
  
  return jsObject;
};

console.log("Texte traduit : ",extractTextsForTranslation())

// Composant utilitaire pour texte traduit (optionnel)
export const TranslatedText = ({ children, tag: Tag = 'span' }) => {
  const { t } = useTranslation();
  const translatedText = t(children);
  return <Tag>{translatedText}</Tag>;
};