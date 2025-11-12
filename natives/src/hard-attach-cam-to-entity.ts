import { CameraIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * CAM:HARD_ATTACH_CAM_TO_ENTITY
 *
 * 0x0D5706D462271DC4

 * 
 * Example from am_mp_drone script:
 * 
 * CAM::HARD_ATTACH_CAM_TO_ENTITY(Local_190.f_169, NETWORK::NET_TO_OBJ(Local_190.f_159), 0f, 0f, 180f, Var0, 1);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {EntityIndex} entity
 * @param {number} vecRotationOffsetX
 * @param {number} vecRotationOffsetY
 * @param {number} vecRotationOffsetZ
 * @param {number} vecPositionOffsetX
 * @param {number} vecPositionOffsetY
 * @param {number} vecPositionOffsetZ
 * @param {boolean} offsetIsRelative If true, vecOffset is applied relative to the orientation of the attached entity, rather than in worldspace.
 */
export function hardAttachCamToEntity(camera: CameraIndex, entity: EntityIndex, vecRotationOffsetX: number, vecRotationOffsetY: number, vecRotationOffsetZ: number, vecPositionOffsetX: number, vecPositionOffsetY: number, vecPositionOffsetZ: number, offsetIsRelative: boolean = true): void {
	const hardAttachCamToEntity_result = Citizen.invokeNative<void>('0x0D5706D462271DC4', camera, entity, vecRotationOffsetX, vecRotationOffsetY, vecRotationOffsetZ, vecPositionOffsetX, vecPositionOffsetY, vecPositionOffsetZ, offsetIsRelative);
	return hardAttachCamToEntity_result;
}