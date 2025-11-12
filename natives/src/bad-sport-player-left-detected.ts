import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:BAD_SPORT_PLAYER_LEFT_DETECTED
 *
 * 0xC9B8B8CBF4083E0F

 * 
 * Sends telemetry event to Rinforming that a remote player (who is not anymore in the game) was a bad sport quitter
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {number} extraInfo1
 * @param {number} extraInfo2
 * @returns {boolean}  
 */
export function badSportPlayerLeftDetected(gamerHandle: GamerHandle /* ptr */, extraInfo1: number, extraInfo2: number): boolean {
	const badSportPlayerLeftDetected_result = Citizen.invokeNative<boolean>('0xC9B8B8CBF4083E0F', gamerHandle.dataView, extraInfo1, extraInfo2);
	return badSportPlayerLeftDetected_result;
}