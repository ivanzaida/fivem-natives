import { CameraIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * CAM:ATTACH_CAM_TO_ENTITY
 *
 * 0x03F10D56CCA2C055

 * 
 * Last param determines if its relative to the Entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {EntityIndex} entity
 * @param {number} vecOffsetX
 * @param {number} vecOffsetY
 * @param {number} vecOffsetZ
 * @param {boolean} offsetIsRelative If true, vecOffset is applied relative to the orientation of the attached entity, rather than in worldspace.
 */
export function attachCamToEntity(camera: CameraIndex, entity: EntityIndex, vecOffsetX: number, vecOffsetY: number, vecOffsetZ: number, offsetIsRelative: boolean = true): void {
	const attachCamToEntity_result = Citizen.invokeNative<void>('0x03F10D56CCA2C055', camera, entity, vecOffsetX, vecOffsetY, vecOffsetZ, offsetIsRelative);
	return attachCamToEntity_result;
}