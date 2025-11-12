/**
 * PLAYER:PLAYER_ATTACH_VIRTUAL_BOUND
 *
 * 0xB56783BB72003C9A

 * 
 * Create and attach collision bound to ped's character cloth
 * 
 * Only 1 match. ob_sofa_michael.
 * 
 * PLAYER::PLAYER_ATTACH_VIRTUAL_BOUND(-804.5928f, 173.1801f, 71.68436f, 0f, 0f, 0.590625f, 1f, 0.7f);1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} capsuleLen
 * @param {number} capsuleRad
 */
export function playerAttachVirtualBound(posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, capsuleLen: number, capsuleRad: number): void {
	const playerAttachVirtualBound_result = Citizen.invokeNative<void>('0xB56783BB72003C9A', posX, posY, posZ, rotX, rotY, rotZ, capsuleLen, capsuleRad);
	return playerAttachVirtualBound_result;
}