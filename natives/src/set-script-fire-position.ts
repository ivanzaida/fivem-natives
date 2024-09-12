/**
 * PLAYER:SET_SCRIPT_FIRE_POSITION
 *
 * 0x1AE8EF20D4D96E11

 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function setScriptFirePosition(coorsX: number, coorsY: number, coorsZ: number): void {
	const setScriptFirePosition_result = Citizen.invokeNative<void>('0x1AE8EF20D4D96E11', coorsX, coorsY, coorsZ);
	return setScriptFirePosition_result;
}