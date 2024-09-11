/**
 * HUD:GET_MINIMAP_FOW_COORDINATE_IS_REVEALED
 *
 * 0x9A761B33F5EF75C5

 * 
 * ------------------------------------------------------------------
 * @param {number} worldPosX
 * @param {number} worldPosY
 * @param {number} worldPosZ
 * @returns {boolean}  
 */
export function getMinimapFowCoordinateIsRevealed(worldPosX: number, worldPosY: number, worldPosZ: number): boolean {
	const getMinimapFowCoordinateIsRevealed_result = Citizen.invokeNative<boolean>('0x9A761B33F5EF75C5', worldPosX, worldPosY, worldPosZ);
	return getMinimapFowCoordinateIsRevealed_result;
}