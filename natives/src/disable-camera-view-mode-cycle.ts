import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:DISABLE_CAMERA_VIEW_MODE_CYCLE
 *
 * 0x98D2FC8206AB54E0

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function disableCameraViewModeCycle(player: PlayerIndex): void {
	const disableCameraViewModeCycle_result = Citizen.invokeNative<void>('0x98D2FC8206AB54E0', player);
	return disableCameraViewModeCycle_result;
}