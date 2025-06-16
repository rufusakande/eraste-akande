import React, { useEffect, useRef } from 'react';
import { useTranslation } from './AutoTranslate';

export const AutoTranslate = ({ children }) => {
  const { t, language } = useTranslation();
  const containerRef = useRef(null);

  useEffect(() => {
    const translateTextNodes = async (element) => {
      if (!element) return;

      // Parcourir tous les nœuds de texte
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      const textNodes = [];
      let node;
      while (node = walker.nextNode()) {
        // Ignorer les nœuds vides ou contenant uniquement des espaces
        if (node.textContent.trim()) {
          textNodes.push(node);
        }
      }

      // Traduire chaque nœud de texte
      for (const textNode of textNodes) {
        const originalText = textNode.textContent.trim();
        if (originalText && language !== 'fr') {
          try {
            const translatedText = await t(originalText);
            textNode.textContent = translatedText;
          } catch (error) {
            console.warn('Erreur de traduction pour:', originalText, error);
          }
        }
      }
    };

    if (containerRef.current) {
      translateTextNodes(containerRef.current);
    }
  }, [t, language, children]);

  return <div ref={containerRef}>{children}</div>;
};