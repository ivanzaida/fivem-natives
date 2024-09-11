import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_CYCLE_VEHICLE_WEAPONS_ONLY
 *
 * 0xAD33AEE7683375F4

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedCycleVehicleWeaponsOnly(ped: PedIndex): void {
	const setPedCycleVehicleWeaponsOnly_result = Citizen.invokeNative<void>('0xAD33AEE7683375F4', ped);
	return setPedCycleVehicleWeaponsOnly_result;
}