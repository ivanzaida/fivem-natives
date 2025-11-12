import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_PED_IN_ANY_VEHICLE
 *
 * 0x3B0171EE

 * 
 * Gets a value indicating whether the specified ped is in any vehicle.
 * 
 * If 'considerEnteringAsInVehicle' is false, the function will not return true until the ped is sitting in the vehicle and is about to close the door. If it's true, the function returns true the moment the ped starts to get onto the seat (after opening the door). Eg. if false, and the ped is getting into a submersible, the function will not return true until the ped has descended down into the submersible and gotten into the seat, while if it's true, it'll return true the moment the hatch has been opened and the ped is about to descend into the submersible.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped the ped id
 * @returns {boolean}  
 */
export function isPedInAnyVehicle(ped: PedIndex): boolean {
	const isPedInAnyVehicle_result = Citizen.invokeNative<boolean>('0x3B0171EE', ped);
	return isPedInAnyVehicle_result;
}