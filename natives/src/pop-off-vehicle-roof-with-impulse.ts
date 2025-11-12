import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:POP_OFF_VEHICLE_ROOF_WITH_IMPULSE
 *
 * 0x362D577C98803D6D

 * 
 * Pops off the "roof" bone in the direction of the specified offset from the vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} vecPosX
 * @param {number} vecPosY
 * @param {number} vecPosZ
 */
export function popOffVehicleRoofWithImpulse(vehicle: VehicleIndex, vecPosX: number, vecPosY: number, vecPosZ: number): void {
	const popOffVehicleRoofWithImpulse_result = Citizen.invokeNative<void>('0x362D577C98803D6D', vehicle, vecPosX, vecPosY, vecPosZ);
	return popOffVehicleRoofWithImpulse_result;
}