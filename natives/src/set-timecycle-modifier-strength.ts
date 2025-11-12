/**
 * GRAPHICS:SET_TIMECYCLE_MODIFIER_STRENGTH
 *
 * 0x886C31F5E888F079

 * 
 * Set the strength at which a timecycle modifier set via SET_TIMECYCLE_MODIFIER is applied. values goes from 0.0 (no effect) to 1.0 (full on)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} strength
 */
export function setTimecycleModifierStrength(strength: number): void {
	const setTimecycleModifierStrength_result = Citizen.invokeNative<void>('0x886C31F5E888F079', strength);
	return setTimecycleModifierStrength_result;
}