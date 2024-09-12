import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_PATCH_POST_CUTSCENE_HS4F_TUN_ENT
 *
 * 0xA8A5C2C6069112B4

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} playerPed
 */
export function networkPatchPostCutsceneHs4FTunEnt(playerPed: EntityIndex): void {
	const networkPatchPostCutsceneHs4FTunEnt_result = Citizen.invokeNative<void>('0xA8A5C2C6069112B4', playerPed);
	return networkPatchPostCutsceneHs4FTunEnt_result;
}