import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_PARACHUTE_PACK_MODEL_OVERRIDE
 *
 * 0xD8FE716A11BE669A

 * 
 * An override for parachute pack model.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modelNameHash
 */
export function setPlayerParachutePackModelOverride(player: PlayerIndex, modelNameHash: number): void {
	const setPlayerParachutePackModelOverride_result = Citizen.invokeNative<void>('0xD8FE716A11BE669A', player, modelNameHash);
	return setPlayerParachutePackModelOverride_result;
}