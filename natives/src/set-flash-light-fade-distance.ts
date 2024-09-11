/**
 * WEAPON:SET_FLASH_LIGHT_FADE_DISTANCE
 *
 * 0xDB47943DB2DB40C5

 * 
 * ------------------------------------------------------------------
 * @param {number} distance
 * @returns {boolean}  
 */
export function setFlashLightFadeDistance(distance: number): boolean {
	const setFlashLightFadeDistance_result = Citizen.invokeNative<boolean>('0xDB47943DB2DB40C5', distance);
	return setFlashLightFadeDistance_result;
}