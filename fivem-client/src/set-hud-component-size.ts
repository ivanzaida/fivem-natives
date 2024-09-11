/**
 * CFX:SET_HUD_COMPONENT_SIZE
 *
 * 0X7644A9FA

 * 
 * ------------------------------------------------------------------
 * @param {number} id The hud component id.
 * @param {number} x New size X.
 * @param {number} y New size Y.
 */
export function setHudComponentSize(id: number, x: number, y: number): void {
	const setHudComponentSize_result = Citizen.invokeNative<void>('0X7644A9FA', id, x, y);
	return setHudComponentSize_result;
}