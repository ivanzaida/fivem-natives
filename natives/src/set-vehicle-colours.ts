import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_COLOURS
 *
 * 0xD133EF7430EDCD09

 * 
 * Colours can be found in carcols.dat
 * 
 * colorPrimary & colorSecondary are the paint index for the vehicle.
 * For a list of valid paint indexes, view: https://pastebin.com/pwHci0xK
 * -------------------------------------------------------------------------
 * Note: minimum color index is 0, maximum color index is (numColorIndices - 1)
 * 
 * Full list of vehicle colors by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} colour1
 * @param {number} colour2
 */
export function setVehicleColours(vehicle: VehicleIndex, colour1: number, colour2: number): void {
	const setVehicleColours_result = Citizen.invokeNative<void>('0xD133EF7430EDCD09', vehicle, colour1, colour2);
	return setVehicleColours_result;
}