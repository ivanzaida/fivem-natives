/**
 * AUDIO:GET_VARIATION_CHOSEN_FOR_SCRIPTED_LINE
 *
 * 0xC0B57599F426855E

 * 
 * Returns the variation chosen for a given scripte speech line.  Returns 0 if it hasn't been chosen yet.
 * Returns -1 if there is no conversation active or if the active conversation doesn't contain this line
 * or if the text label can't be found in the currently loaded text blocks
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textLabel
 * @returns {number}  
 */
export function getVariationChosenForScriptedLine(textLabel: string): number {
	const getVariationChosenForScriptedLine_result = Citizen.invokeNative<number>('0xC0B57599F426855E', textLabel);
	return getVariationChosenForScriptedLine_result;
}