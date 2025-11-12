import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_IN_GARAGE_AREA
 *
 * 0xFE448E8C2209CA31

 * 
 * garageName example "Michael - Beverly Hills"
 * 
 * Full list of garages by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/garages.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} garageName
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleInGarageArea(garageName: string, vehicle: VehicleIndex): boolean {
	const isVehicleInGarageArea_result = Citizen.invokeNative<boolean>('0xFE448E8C2209CA31', garageName, vehicle);
	return isVehicleInGarageArea_result;
}