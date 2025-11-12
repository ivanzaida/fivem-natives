/**
 * GRAPHICS:SET_EXTRA_TCMODIFIER
 *
 * 0x23DAA15014BC100F

 * 
 * Full list of timecycle modifiers by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/timecycleModifiers.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName
 */
export function setExtraTcmodifier(modifierName: string): void {
	const setExtraTcmodifier_result = Citizen.invokeNative<void>('0x23DAA15014BC100F', modifierName);
	return setExtraTcmodifier_result;
}