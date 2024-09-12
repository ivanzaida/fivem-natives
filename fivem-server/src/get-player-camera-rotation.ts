import { Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_CAMERA_ROTATION
 *
 * 0x433C765D

 * Gets the current camera rotation for a specified player. This native is used server side when using OneSync.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle.
 * @returns {Vector3Ref}  The player's camera rotation. Values are in radians.
 */
export function getPlayerCameraRotation(playerSrc: string): Vector3Ref {
	const getPlayerCameraRotation_result = Citizen.invokeNative<Vector3Ref>('0x433C765D', playerSrc);
	return getPlayerCameraRotation_result;
}