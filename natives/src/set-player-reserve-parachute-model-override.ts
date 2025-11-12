import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE
 *
 * 0x953124DAB474F504

 * 
 * An override for reserve parachute model.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modelNameHash
 */
export function setPlayerReserveParachuteModelOverride(player: PlayerIndex, modelNameHash: number): void {
	const setPlayerReserveParachuteModelOverride_result = Citizen.invokeNative<void>('0x953124DAB474F504', player, modelNameHash);
	return setPlayerReserveParachuteModelOverride_result;
}