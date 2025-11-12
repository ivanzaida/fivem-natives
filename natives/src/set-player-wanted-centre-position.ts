import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_WANTED_CENTRE_POSITION
 *
 * 0xEFE2B06D5134CD46

 * 
 * # Predominant call signatures
 * PLAYER::SET_PLAYER_WANTED_CENTRE_POSITION(PLAYER::PLAYER_ID(), ENTITY::GET_ENTITY_COORDS(PLAYER::PLAYER_PED_ID(), 1));
 * 
 * # Parameter value ranges
 * P0: PLAYER::PLAYER_ID()
 * P1: ENTITY::GET_ENTITY_COORDS(PLAYER::PLAYER_PED_ID(), 1)
 * P2: Not set by any call
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function setPlayerWantedCentrePosition(player: PlayerIndex, coorsX: number, coorsY: number, coorsZ: number): void {
	const setPlayerWantedCentrePosition_result = Citizen.invokeNative<void>('0xEFE2B06D5134CD46', player, coorsX, coorsY, coorsZ);
	return setPlayerWantedCentrePosition_result;
}