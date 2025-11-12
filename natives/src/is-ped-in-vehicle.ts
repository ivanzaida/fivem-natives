import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_VEHICLE
 *
 * 0xCECDBB848D53DEB2

 * 
 * Gets a value indicating whether the specified ped is in the specified vehicle.
 * 
 * If 'atGetIn' is false, the function will not return true until the ped is sitting in the vehicle and is about to close the door. If it's true, the function returns true the moment the ped starts to get onto the seat (after opening the door). Eg. if false, and the ped is getting into a submersible, the function will not return true until the ped has descended down into the submersible and gotten into the seat, while if it's true, it'll return true the moment the hatch has been opened and the ped is about to descend into the submersible.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {boolean} considerEnteringAsInVehicle
 * @returns {boolean}  
 */
export function isPedInVehicle(ped: PedIndex, vehicle: VehicleIndex, considerEnteringAsInVehicle: boolean = false): boolean {
	const isPedInVehicle_result = Citizen.invokeNative<boolean>('0xCECDBB848D53DEB2', ped, vehicle, considerEnteringAsInVehicle);
	return isPedInVehicle_result;
}