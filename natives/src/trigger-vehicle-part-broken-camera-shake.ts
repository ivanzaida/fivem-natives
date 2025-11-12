import { EntityIndex } from '@ivanzaida/structures'

/**
 * CAM:TRIGGER_VEHICLE_PART_BROKEN_CAMERA_SHAKE
 *
 * 0xB3F5D7C1E9A4A589

 * 
 * p1: 0..16
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} vehicle
 * @param {number} vehiclePart
 * @param {number} amplitude The amplitude of the shake (1.0 is default, between 0.0 and 1.0 will scale down the shake strength, above 1.0 will increase it)
 */
export function triggerVehiclePartBrokenCameraShake(vehicle: EntityIndex, vehiclePart: number, amplitude: number = 1): void {
	const triggerVehiclePartBrokenCameraShake_result = Citizen.invokeNative<void>('0xB3F5D7C1E9A4A589', vehicle, vehiclePart, amplitude);
	return triggerVehiclePartBrokenCameraShake_result;
}