import { FloatRef, EEArrowDirection } from '@ivanzaida/structures'

/**
 * HUD:GET_HUD_SCREEN_POSITION_FROM_WORLD_POSITION
 *
 * 0xA495FBDECD4BE208

 * 
 * World to relative screen coords, this world to screen will keep the text on screen. Was named _GET_SCREEN_COORD_FROM_WORLD_COORD, but this conflicts with 0x34E82F05DF2974F5. As that hash actually matches GET_SCREEN_COORD_FROM_WORLD_COORD that one supercedes and this one was renamed to _GET_2D_COORD_FROM_3D_COORD
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} worldPosX
 * @param {number} worldPosY
 * @param {number} worldPosZ
 * @param {FloatRef} screenPosX [Ref]
 * @param {FloatRef} screenPosY [Ref]
 * @returns {EEArrowDirection}  
 */
export function getHudScreenPositionFromWorldPosition(worldPosX: number, worldPosY: number, worldPosZ: number, screenPosX: FloatRef /* ptr */, screenPosY: FloatRef /* ptr */): EEArrowDirection {
	const getHudScreenPositionFromWorldPosition_result = Citizen.invokeNative<EEArrowDirection>('0xA495FBDECD4BE208', worldPosX, worldPosY, worldPosZ, screenPosX.dataView, screenPosY.dataView);
	return getHudScreenPositionFromWorldPosition_result;
}