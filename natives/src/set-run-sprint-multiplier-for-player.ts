import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_RUN_SPRINT_MULTIPLIER_FOR_PLAYER
 *
 * 0xA52E1AE3848A506B

 * 
 * Multiplier goes up to 1.49 any value above will be completely overruled by the game and the multiplier will not take effect, this can be edited in memory however.
 * 
 * Just call it one time, it is not required to be called once every tick.
 * 
 * Note: At least the IDA method if you change the max float multiplier from 1.5 it will change it for both this and SWIM above. I say 1.5 as the function blrs if what you input is greater than or equal to 1.5 hence why it's 1.49 max default.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} multiplier
 */
export function setRunSprintMultiplierForPlayer(player: PlayerIndex, multiplier: number): void {
	const setRunSprintMultiplierForPlayer_result = Citizen.invokeNative<void>('0xA52E1AE3848A506B', player, multiplier);
	return setRunSprintMultiplierForPlayer_result;
}