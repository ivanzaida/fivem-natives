import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_NUM_VEHICLE_MODS
 *
 * 0x5B59C12A02157D00

 * 
 * Returns how many possible mods a vehicle has for a given mod type
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @returns {number}  
 */
export function getNumVehicleMods(vehicle: VehicleIndex, modSlot: EModType | number): number {
	const getNumVehicleMods_result = Citizen.invokeNative<number>('0x5B59C12A02157D00', vehicle, modSlot);
	return getNumVehicleMods_result;
}