/**
 * Detects if link should navigate to `i18n` path
 * and then navigates there.
 *
 * @param {MouseEvent} e
 */
function i18nClickEvent(e) {
  const target = /** @type {HTMLElement} */ (e.target);
  const i18nHref = target.getAttribute('data-i18n');
  if (
    window.location.pathname.startsWith('/i18n') &&
    target.tagName === 'A' &&
    i18nHref
  ) {
    target.setAttribute('href', i18nHref);
  }
}

document.addEventListener('click', i18nClickEvent);
