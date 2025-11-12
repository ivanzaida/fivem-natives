import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ATTACH_VEHICLE_TO_CARGOBOB
 *
 * 0x47B74B49AC74FAF4

 * 
 * Attaches a vehicle to a cargobob at a bone with an offset from that bone, use -1 to do an offset against the whole vehicle
 * This does not reposition the vehicles, please try and position the vehicle around 0.5m under the cargobob
 * Attaches a vehicle to a tow truck
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {VehicleIndex} vehicle
 * @param {number} vehicleBone
 * @param {number} vehicleAttachPointOffsetX
 * @param {number} vehicleAttachPointOffsetY
 * @param {number} vehicleAttachPointOffsetZ
 */
export function attachVehicleToCargobob(cargobob: VehicleIndex, vehicle: VehicleIndex, vehicleBone: number, vehicleAttachPointOffsetX: number, vehicleAttachPointOffsetY: number, vehicleAttachPointOffsetZ: number): void {
	const attachVehicleToCargobob_result = Citizen.invokeNative<void>('0x47B74B49AC74FAF4', cargobob, vehicle, vehicleBone, vehicleAttachPointOffsetX, vehicleAttachPointOffsetY, vehicleAttachPointOffsetZ);
	return attachVehicleToCargobob_result;
}