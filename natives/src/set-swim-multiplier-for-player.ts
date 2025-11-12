import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_SWIM_MULTIPLIER_FOR_PLAYER
 *
 * 0x289497A4BA9049E0

 * 
 * Swim speed multiplier.
 * Multiplier goes up to 1.49
 * 
 * Just call it one time, it is not required to be called once every tick. - Note copied from below native.
 * 
 * Note: At least the IDA method if you change the max float multiplier from 1.5 it will change it for both this and RUN_SPRINT below. I say 1.5 as the function blrs if what you input is greater than or equal to 1.5 hence why it's 1.49 max default.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} multiplier
 */
export function setSwimMultiplierForPlayer(player: PlayerIndex, multiplier: number): void {
	const setSwimMultiplierForPlayer_result = Citizen.invokeNative<void>('0x289497A4BA9049E0', player, multiplier);
	return setSwimMultiplierForPlayer_result;
}