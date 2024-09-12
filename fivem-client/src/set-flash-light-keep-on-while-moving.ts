/**
 * CFX:SET_FLASH_LIGHT_KEEP_ON_WHILE_MOVING
 *
 * 0x7635B349

 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state On/Off
 */
export function setFlashLightKeepOnWhileMoving(state: boolean): void {
	const setFlashLightKeepOnWhileMoving_result = Citizen.invokeNative<void>('0x7635B349', state);
	return setFlashLightKeepOnWhileMoving_result;
}