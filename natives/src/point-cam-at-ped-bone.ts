import { CameraIndex, PedIndex, EPedBonetag } from '@ivanzaida/structures'

/**
 * CAM:POINT_CAM_AT_PED_BONE
 *
 * 0xA327B87671869834

 * 
 * Parameters p0-p5 seems correct. The bool p6 is unknown, but through every X360 script it's always 1. Please correct p0-p5 if any prove to be wrong.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {PedIndex} ped
 * @param {EPedBonetag} boneTag
 * @param {number} vecOffsetX
 * @param {number} vecOffsetY
 * @param {number} vecOffsetZ
 * @param {boolean} offsetIsRelative If true, vecOffset is applied relative to the orientation of the ped being pointed at (not the bone), rather than in worldspace.
 */
export function pointCamAtPedBone(camera: CameraIndex, ped: PedIndex, boneTag: EPedBonetag | number, vecOffsetX: number, vecOffsetY: number, vecOffsetZ: number, offsetIsRelative: boolean = true): void {
	const pointCamAtPedBone_result = Citizen.invokeNative<void>('0xA327B87671869834', camera, ped, boneTag, vecOffsetX, vecOffsetY, vecOffsetZ, offsetIsRelative);
	return pointCamAtPedBone_result;
}