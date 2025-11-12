import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_MOD_GEN9_EXCLUSIVE
 *
 * 0xAF82FE1B3E949337

 * 
 * Returns TRUE if the specified vehicle mod is only available on Gen9 platforms.
 * The data for this exists in titleupdate\<branch>\common\data\gen9_exclusive_assets_vehicles.meta
 * 
 * Returns true for any mod part listed in GEN9_EXCLUSIVE_ASSETS_VEHICLES_FILE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @param {number} mod
 * @returns {boolean}  
 */
export function isVehicleModGen9Exclusive(vehicle: VehicleIndex, modSlot: EModType | number, mod: number): boolean {
	const isVehicleModGen9Exclusive_result = Citizen.invokeNative<boolean>('0xAF82FE1B3E949337', vehicle, modSlot, mod);
	return isVehicleModGen9Exclusive_result;
}