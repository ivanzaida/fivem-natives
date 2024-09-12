import { CameraIndex, PedIndex, EPedBonetag } from '@ivanzaida/structures'

/**
 * CAM:ATTACH_CAM_TO_PED_BONE
 *
 * 0x19DB71A72065EFB0

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {PedIndex} ped
 * @param {EPedBonetag} boneTag
 * @param {number} vecOffsetX
 * @param {number} vecOffsetY
 * @param {number} vecOffsetZ
 * @param {boolean} offsetIsRelative If true, vecOffset is applied relative to the orientation of the attached ped (not the bone), rather than in worldspace.
 */
export function attachCamToPedBone(camera: CameraIndex, ped: PedIndex, boneTag: EPedBonetag | number, vecOffsetX: number, vecOffsetY: number, vecOffsetZ: number, offsetIsRelative: boolean = true): void {
	const attachCamToPedBone_result = Citizen.invokeNative<void>('0x19DB71A72065EFB0', camera, ped, boneTag, vecOffsetX, vecOffsetY, vecOffsetZ, offsetIsRelative);
	return attachCamToPedBone_result;
}