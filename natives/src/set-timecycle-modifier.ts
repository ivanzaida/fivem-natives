/**
 * GRAPHICS:SET_TIMECYCLE_MODIFIER
 *
 * 0x5C483F4653DC993C

 * A timecyclemodifier is set up by an artists and can contains changes to light colour, fog colour, clip plane distance or post fx. They can be used as a filter. Good ones to try are: death, busted, sniper_ini, sniper, binocular, injured, fast
 * MAKE SURE TO CALL CLEAR_TIMECYCLE_MODIFIER when you're done. If this doesn't happen the game will from that point on use that filter.
 * Loads the specified timecycle modifier. Modifiers are defined separately in another file (e.g. "timecycle_mods_1.xml")
 * Parameters:
 * modifierName - The modifier to load (e.g. "V_FIB_IT3", "scanline_cam", etc.)
 * Full list of timecycle modifiers by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/timecycleModifiers.json
 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName
 */
export function setTimecycleModifier(modifierName: string): void {
	const setTimecycleModifier_result = Citizen.invokeNative<void>('0x5C483F4653DC993C', modifierName);
	return setTimecycleModifier_result;
}