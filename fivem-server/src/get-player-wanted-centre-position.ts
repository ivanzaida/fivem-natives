import { PlayerIndex, Vector3 } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_WANTED_CENTRE_POSITION
 *
 * 0x821F2D2C

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {Vector3}  
 */
export function getPlayerWantedCentrePosition(player: PlayerIndex): Vector3 {
	const getPlayerWantedCentrePosition_result = Citizen.invokeNative<Vector3>('0x821F2D2C', player);
	return getPlayerWantedCentrePosition_result;
}