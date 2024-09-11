/**
 * CFX:SET_AIM_COOLDOWN
 *
 * 0XA42A3DBF

 * Adds a cooldown between instances of moving and then aiming.Can be optionally used to hinder 'speedboosting'To turn off, set value to 0
 * 
 * ------------------------------------------------------------------
 * @param {number} value Number of milliseconds between allowed aiming
 */
export function setAimCooldown(value: number): void {
	const setAimCooldown_result = Citizen.invokeNative<void>('0XA42A3DBF', value);
	return setAimCooldown_result;
}