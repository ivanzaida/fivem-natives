import { PlayerIndex, EEulerRotOrder, Vector3 } from '@ivanzaida/structures'

/**
 * CAM:GET_FINAL_RENDERED_REMOTE_PLAYER_CAM_ROT
 *
 * 0xBF807E7C66B0BF4B

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {EEulerRotOrder} rotOrder
 * @returns {Vector3}  
 */
export function getFinalRenderedRemotePlayerCamRot(player: PlayerIndex, rotOrder: EEulerRotOrder | number = 2): Vector3 {
	const getFinalRenderedRemotePlayerCamRot_result = Citizen.invokeNative<Vector3>('0xBF807E7C66B0BF4B', player, rotOrder);
	return getFinalRenderedRemotePlayerCamRot_result;
}