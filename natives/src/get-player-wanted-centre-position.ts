import { PlayerIndex, Vector3 } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_WANTED_CENTRE_POSITION
 *
 * 0x8924DF54D314FD78

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {Vector3}  
 */
export function getPlayerWantedCentrePosition(player: PlayerIndex): Vector3 {
	const getPlayerWantedCentrePosition_result = Citizen.invokeNative<Vector3>('0x8924DF54D314FD78', player);
	return getPlayerWantedCentrePosition_result;
}