import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ATTACH_VEHICLE_ON_TO_TRAILER
 *
 * 0x9E132DB7E05C6EAB

 * 
 * This is the proper way of attaching vehicles to the car carrier, it's what Rockstar uses. Video Demo: https://www.youtube.com/watch?v=2lVEIzf7bgo
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {VehicleIndex} trailer
 * @param {number} firstEntityOffsetX
 * @param {number} firstEntityOffsetY
 * @param {number} firstEntityOffsetZ
 * @param {number} secondEntityOffsetX
 * @param {number} secondEntityOffsetY
 * @param {number} secondEntityOffsetZ
 * @param {number} vecRotationX
 * @param {number} vecRotationY
 * @param {number} vecRotationZ
 * @param {number} physicalStrength
 */
export function attachVehicleOnToTrailer(vehicle: VehicleIndex, trailer: VehicleIndex, firstEntityOffsetX: number, firstEntityOffsetY: number, firstEntityOffsetZ: number, secondEntityOffsetX: number, secondEntityOffsetY: number, secondEntityOffsetZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, physicalStrength: number): void {
	const attachVehicleOnToTrailer_result = Citizen.invokeNative<void>('0x9E132DB7E05C6EAB', vehicle, trailer, firstEntityOffsetX, firstEntityOffsetY, firstEntityOffsetZ, secondEntityOffsetX, secondEntityOffsetY, secondEntityOffsetZ, vecRotationX, vecRotationY, vecRotationZ, physicalStrength);
	return attachVehicleOnToTrailer_result;
}