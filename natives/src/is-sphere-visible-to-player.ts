import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:IS_SPHERE_VISIBLE_TO_PLAYER
 *
 * 0x267FC71D3F0D131A

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @returns {boolean}  
 */
export function isSphereVisibleToPlayer(playerId: PlayerIndex, posX: number, posY: number, posZ: number, radius: number): boolean {
	const isSphereVisibleToPlayer_result = Citizen.invokeNative<boolean>('0x267FC71D3F0D131A', playerId, posX, posY, posZ, radius);
	return isSphereVisibleToPlayer_result;
}