/**
 * VEHICLE:SET_DISABLE_RETRACTING_WEAPON_BLADES
 *
 * 0x946CF11741899D4C

 * 
 * ------------------------------------------------------------------
 * @param {boolean} disableRetracting
 */
export function setDisableRetractingWeaponBlades(disableRetracting: boolean): void {
	const setDisableRetractingWeaponBlades_result = Citizen.invokeNative<void>('0x946CF11741899D4C', disableRetracting);
	return setDisableRetractingWeaponBlades_result;
}