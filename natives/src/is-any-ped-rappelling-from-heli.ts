import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_ANY_PED_RAPPELLING_FROM_HELI
 *
 * 0x7B94DA9EDB63B904

 * 
 * Sets whether a wing should be broken off or not
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isAnyPedRappellingFromHeli(vehicle: VehicleIndex): boolean {
	const isAnyPedRappellingFromHeli_result = Citizen.invokeNative<boolean>('0x7B94DA9EDB63B904', vehicle);
	return isAnyPedRappellingFromHeli_result;
}