/**
 * HUD:TOGGLE_STEALTH_RADAR
 *
 * 0x541F544DCB68FDF2

 * 
 * This switches between the original GTA4 simple blips for chars
 * and perception cone rendering for chars.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} on
 */
export function toggleStealthRadar(on: boolean): void {
	const toggleStealthRadar_result = Citizen.invokeNative<void>('0x541F544DCB68FDF2', on);
	return toggleStealthRadar_result;
}