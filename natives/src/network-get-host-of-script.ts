import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_HOST_OF_SCRIPT
 *
 * 0xF1A4B8228C5E44B7

 * 
 * scriptName examples:
 * "freemode", "AM_CR_SecurityVan", ...
 * 
 * Most of the time, these values are used:
 * instance_id = -1
 * position_hash = 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scriptName
 * @param {number} instanceId
 * @param {number} positionHash
 * @returns {PlayerIndex}  
 */
export function networkGetHostOfScript(scriptName: string, instanceId: number = 1, positionHash: number = 0): PlayerIndex {
	const networkGetHostOfScript_result = Citizen.invokeNative<PlayerIndex>('0xF1A4B8228C5E44B7', scriptName, instanceId, positionHash);
	return networkGetHostOfScript_result;
}