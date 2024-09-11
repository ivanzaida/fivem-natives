import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_FINAL_RENDERED_REMOTE_PLAYER_CAM_FOV
 *
 * 0x6A709291E23386B1

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getFinalRenderedRemotePlayerCamFov(player: PlayerIndex): number {
	const getFinalRenderedRemotePlayerCamFov_result = Citizen.invokeNative<number>('0x6A709291E23386B1', player);
	return getFinalRenderedRemotePlayerCamFov_result;
}