import { CameraIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * CAM:POINT_CAM_AT_ENTITY
 *
 * 0xD6B4D02A102485DC

 * 
 * p5 always seems to be 1 i.e TRUE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {EntityIndex} entity
 * @param {number} vecOffsetX
 * @param {number} vecOffsetY
 * @param {number} vecOffsetZ
 * @param {boolean} offsetIsRelative If true, vecOffset is applied relative to the orientation of the entity being pointed at, rather than in worldspace.
 */
export function pointCamAtEntity(camera: CameraIndex, entity: EntityIndex, vecOffsetX: number, vecOffsetY: number, vecOffsetZ: number, offsetIsRelative: boolean = true): void {
	const pointCamAtEntity_result = Citizen.invokeNative<void>('0xD6B4D02A102485DC', camera, entity, vecOffsetX, vecOffsetY, vecOffsetZ, offsetIsRelative);
	return pointCamAtEntity_result;
}