/**
 * Detects if link should navigate to `i18n` path
 * and then navigates there.
 *
 * @param {MouseEvent} e
 */
function i18nClickEvent(e) {
  if (window.location.pathname.startsWith('/i18n')) {
    const target = /** @type {HTMLElement} */ (e.target);
    if (target.tagName === 'A') {
      const i18nHref = target.getAttribute('data-i18n');
      target.setAttribute('href', i18nHref);
    }
  }
}

document.addEventListener('click', i18nClickEvent);
