/**
 * HUD:SET_ALLOW_ABILITY_BAR
 *
 * 0x46787A693F6EFA94

 * 
 * ------------------------------------------------------------------
 * @param {boolean} turnOn
 */
export function setAllowAbilityBar(turnOn: boolean): void {
	const setAllowAbilityBar_result = Citizen.invokeNative<void>('0x46787A693F6EFA94', turnOn);
	return setAllowAbilityBar_result;
}