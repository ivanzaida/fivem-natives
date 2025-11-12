import { PedIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_BE_TARGETTED_BY_PLAYER
 *
 * 0xF861636AF1D2D3D2

 * 
 * Sets if a ped can be targetted by a specific player (network game only)
 * PARAMS
 * PedIndex - Can be the local player index or the ped index of a local owned ped.
 * PlayerIndex   - Any other player index.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PlayerIndex} player
 * @param {boolean} allowTargetted
 */
export function setPedCanBeTargettedByPlayer(ped: PedIndex, player: PlayerIndex, allowTargetted: boolean): void {
	const setPedCanBeTargettedByPlayer_result = Citizen.invokeNative<void>('0xF861636AF1D2D3D2', ped, player, allowTargetted);
	return setPedCanBeTargettedByPlayer_result;
}