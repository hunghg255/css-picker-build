/**
 * Tranform normal css to style react css
 * @example ```border-top -> borderTop```
 * @param keyCss
 * @param value content of css
 */
export const genReactCss = (css: string, value: string): { [x: string]: string } => {
  const isMatch: RegExpMatchArray = css.match(/-./)!;
  const reactCss: string = isMatch
    ? css.replace(isMatch[0], css[isMatch.index! + 1].toLocaleUpperCase())
    : css
  return { [reactCss]: value };
}
