/**
 * HUD:SET_MINIMAP_FOW_REVEAL_COORDINATE
 *
 * 0x6515FC329EEDD53D

 * 
 * Up to eight coordinates may be revealed per frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} worldPOSX
 * @param {number} worldPOSY
 * @param {number} worldPOSZ
 */
export function setMinimapFowRevealCoordinate(worldPOSX: number, worldPOSY: number, worldPOSZ: number): void {
	const setMinimapFowRevealCoordinate_result = Citizen.invokeNative<void>('0x6515FC329EEDD53D', worldPOSX, worldPOSY, worldPOSZ);
	return setMinimapFowRevealCoordinate_result;
}