import { CameraIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * CAM:ATTACH_CAM_TO_VEHICLE_BONE
 *
 * 0x52013BF2765685F4

 * 
 * This native works with vehicles only. Bone indexes are usually given by this native GET_ENTITY_BONE_INDEX_BY_NAME.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {EntityIndex} vehicle
 * @param {number} vehicleBone
 * @param {boolean} hardAttachment
 * @param {number} vecRotationOffsetX
 * @param {number} vecRotationOffsetY
 * @param {number} vecRotationOffsetZ
 * @param {number} vecPositionOffsetX
 * @param {number} vecPositionOffsetY
 * @param {number} vecPositionOffsetZ
 * @param {boolean} offsetIsRelative
 */
export function attachCamToVehicleBone(camera: CameraIndex, vehicle: EntityIndex, vehicleBone: number, hardAttachment: boolean, vecRotationOffsetX: number, vecRotationOffsetY: number, vecRotationOffsetZ: number, vecPositionOffsetX: number, vecPositionOffsetY: number, vecPositionOffsetZ: number, offsetIsRelative: boolean): void {
	const attachCamToVehicleBone_result = Citizen.invokeNative<void>('0x52013BF2765685F4', camera, vehicle, vehicleBone, hardAttachment, vecRotationOffsetX, vecRotationOffsetY, vecRotationOffsetZ, vecPositionOffsetX, vecPositionOffsetY, vecPositionOffsetZ, offsetIsRelative);
	return attachCamToVehicleBone_result;
}