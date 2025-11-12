import { PlayerIndex, ERespawnQueryFlags } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_START_RESPAWN_SEARCH_IN_ANGLED_AREA_FOR_PLAYER
 *
 * 0x243CFDECC076762E

 * 
 * p8, p9, p10 is another coordinate, or zero, often related to `GET_BLIP_COORDS in the decompiled scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} angledAreaPos1X
 * @param {number} angledAreaPos1Y
 * @param {number} angledAreaPos1Z
 * @param {number} angledAreaPos2X
 * @param {number} angledAreaPos2Y
 * @param {number} angledAreaPos2Z
 * @param {number} angledAreaWidth
 * @param {number} faceTowardsPosX
 * @param {number} faceTowardsPosY
 * @param {number} faceTowardsPosZ
 * @param {ERespawnQueryFlags} flags
 * @returns {boolean}  
 */
export function networkStartRespawnSearchInAngledAreaForPlayer(player: PlayerIndex, angledAreaPos1X: number, angledAreaPos1Y: number, angledAreaPos1Z: number, angledAreaPos2X: number, angledAreaPos2Y: number, angledAreaPos2Z: number, angledAreaWidth: number, faceTowardsPosX: number, faceTowardsPosY: number, faceTowardsPosZ: number, flags: ERespawnQueryFlags | number = 0): boolean {
	const networkStartRespawnSearchInAngledAreaForPlayer_result = Citizen.invokeNative<boolean>('0x243CFDECC076762E', player, angledAreaPos1X, angledAreaPos1Y, angledAreaPos1Z, angledAreaPos2X, angledAreaPos2Y, angledAreaPos2Z, angledAreaWidth, faceTowardsPosX, faceTowardsPosY, faceTowardsPosZ, flags);
	return networkStartRespawnSearchInAngledAreaForPlayer_result;
}