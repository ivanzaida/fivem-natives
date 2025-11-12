import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_PARACHUTE_MODEL_OVERRIDE
 *
 * 0xCE1864BA99DCF3C2

 * 
 * An override for parachute model.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modelNameHash
 */
export function setPlayerParachuteModelOverride(player: PlayerIndex, modelNameHash: number): void {
	const setPlayerParachuteModelOverride_result = Citizen.invokeNative<void>('0xCE1864BA99DCF3C2', player, modelNameHash);
	return setPlayerParachuteModelOverride_result;
}