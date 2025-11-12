/**
 * HUD:HUD_FORCE_WEAPON_WHEEL
 *
 * 0x92D8C10950A06B6D

 * 
 * Forces the weapon wheel to show/hide.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOrOff
 */
export function hudForceWeaponWheel(onOrOff: boolean): void {
	const hudForceWeaponWheel_result = Citizen.invokeNative<void>('0x92D8C10950A06B6D', onOrOff);
	return hudForceWeaponWheel_result;
}