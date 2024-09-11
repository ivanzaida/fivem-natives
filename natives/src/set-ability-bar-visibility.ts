/**
 * HUD:SET_ABILITY_BAR_VISIBILITY
 *
 * 0x5B23CA453BC57FC2

 * 
 * ------------------------------------------------------------------
 * @param {boolean} turnOn
 */
export function setAbilityBarVisibility(turnOn: boolean): void {
	const setAbilityBarVisibility_result = Citizen.invokeNative<void>('0x5B23CA453BC57FC2', turnOn);
	return setAbilityBarVisibility_result;
}