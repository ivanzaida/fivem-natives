import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ATTACH_VEHICLE_TO_TOW_TRUCK
 *
 * 0xA86C8A254D6B6F40

 * 
 * Attaches a vehicle to a tow truck at a bone with an offset from that bone, use -1 to do an offset against the whole vehicle
 * This does not reposition the vehicles, please try and position the vehicle around 0.5m behind the truck
 * Attaches a vehicle to a tow truck
 * 
 * HookOffset defines where the hook is attached. leave at 0 for default attachment.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} towTruckVehicle
 * @param {VehicleIndex} vehicle
 * @param {number} vehicleBone
 * @param {number} vehicleAttachPointOffsetX
 * @param {number} vehicleAttachPointOffsetY
 * @param {number} vehicleAttachPointOffsetZ
 */
export function attachVehicleToTowTruck(towTruckVehicle: VehicleIndex, vehicle: VehicleIndex, vehicleBone: number, vehicleAttachPointOffsetX: number, vehicleAttachPointOffsetY: number, vehicleAttachPointOffsetZ: number): void {
	const attachVehicleToTowTruck_result = Citizen.invokeNative<void>('0xA86C8A254D6B6F40', towTruckVehicle, vehicle, vehicleBone, vehicleAttachPointOffsetX, vehicleAttachPointOffsetY, vehicleAttachPointOffsetZ);
	return attachVehicleToTowTruck_result;
}