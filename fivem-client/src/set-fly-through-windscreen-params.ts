/**
 * CFX:SET_FLY_THROUGH_WINDSCREEN_PARAMS
 *
 * 0x4D3118ED

 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 * 
 * ------------------------------------------------------------------
 * @param {number} vehMinSpeed Vehicle minimum speed (default 35.0).
 * @param {number} unkMinSpeed Unknown minimum speed (default 40.0).
 * @param {number} unkModifier Unknown modifier (default 17.0).
 * @param {number} minDamage Minimum damage (default 2000.0).
 * @returns {boolean}  A bool indicating if parameters was set successfully.
 */
export function setFlyThroughWindscreenParams(vehMinSpeed: number, unkMinSpeed: number, unkModifier: number, minDamage: number): boolean {
	const setFlyThroughWindscreenParams_result = Citizen.invokeNative<boolean>('0x4D3118ED', vehMinSpeed, unkMinSpeed, unkModifier, minDamage);
	return setFlyThroughWindscreenParams_result;
}