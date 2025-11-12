import { PlayerIndex, ERespawnQueryFlags } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_START_RESPAWN_SEARCH_FOR_PLAYER
 *
 * 0x4249B4032FDD750E

 * 
 * one or both of RESPAWN_QUERY_FLAG_MAY_SPAWN_IN_INTERIOR and RESPAWN_QUERY_FLAG_MAY_SPAWN_IN_EXTERIOR should always be specified!
 * 
 * One of the first things it does is get the players ped.
 * Then it calls a function that is used in some tasks and ped based functions.
 * p5, p6, p7 is another coordinate (or zero), often related to `GET_BLIP_COORDS, in the decompiled scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} searchPosX
 * @param {number} searchPosY
 * @param {number} searchPosZ
 * @param {number} searchRadius
 * @param {number} faceTowardsPosX
 * @param {number} faceTowardsPosY
 * @param {number} faceTowardsPosZ
 * @param {ERespawnQueryFlags} flags Optional flags
 * @returns {boolean}  
 */
export function networkStartRespawnSearchForPlayer(player: PlayerIndex, searchPosX: number, searchPosY: number, searchPosZ: number, searchRadius: number, faceTowardsPosX: number, faceTowardsPosY: number, faceTowardsPosZ: number, flags: ERespawnQueryFlags | number = 0): boolean {
	const networkStartRespawnSearchForPlayer_result = Citizen.invokeNative<boolean>('0x4249B4032FDD750E', player, searchPosX, searchPosY, searchPosZ, searchRadius, faceTowardsPosX, faceTowardsPosY, faceTowardsPosZ, flags);
	return networkStartRespawnSearchForPlayer_result;
}