import { Vector3 } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_WANTED_CENTRE_POSITION
 *
 * 0x821F2D2C

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The target player
 * @returns {Vector3}  
 */
export function getPlayerWantedCentrePosition(playerSrc: string): Vector3 {
	const getPlayerWantedCentrePosition_result = Citizen.invokeNative<Vector3>('0x821F2D2C', playerSrc);
	return getPlayerWantedCentrePosition_result;
}