import { CameraIndex, PedIndex, EPedBonetag } from '@ivanzaida/structures'

/**
 * CAM:HARD_ATTACH_CAM_TO_PED_BONE
 *
 * 0xF81BE163E469E944

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {PedIndex} ped
 * @param {EPedBonetag} boneTag
 * @param {number} vecRotationOffsetX
 * @param {number} vecRotationOffsetY
 * @param {number} vecRotationOffsetZ
 * @param {number} vecPositionOffsetX
 * @param {number} vecPositionOffsetY
 * @param {number} vecPositionOffsetZ
 * @param {boolean} offsetIsRelative If true, vecOffset is applied relative to the orientation of the attached ped (not the bone), rather than in worldspace.
 */
export function hardAttachCamToPedBone(camera: CameraIndex, ped: PedIndex, boneTag: EPedBonetag | number, vecRotationOffsetX: number, vecRotationOffsetY: number, vecRotationOffsetZ: number, vecPositionOffsetX: number, vecPositionOffsetY: number, vecPositionOffsetZ: number, offsetIsRelative: boolean = true): void {
	const hardAttachCamToPedBone_result = Citizen.invokeNative<void>('0xF81BE163E469E944', camera, ped, boneTag, vecRotationOffsetX, vecRotationOffsetY, vecRotationOffsetZ, vecPositionOffsetX, vecPositionOffsetY, vecPositionOffsetZ, offsetIsRelative);
	return hardAttachCamToPedBone_result;
}