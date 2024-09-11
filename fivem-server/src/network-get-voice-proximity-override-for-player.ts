import { Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:NETWORK_GET_VOICE_PROXIMITY_OVERRIDE_FOR_PLAYER
 *
 * 0XFFEEF513

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @returns {Vector3Ref}  
 */
export function networkGetVoiceProximityOverrideForPlayer(playerSrc: string): Vector3Ref {
	const networkGetVoiceProximityOverrideForPlayer_result = Citizen.invokeNative<Vector3Ref>('0XFFEEF513', playerSrc);
	return networkGetVoiceProximityOverrideForPlayer_result;
}