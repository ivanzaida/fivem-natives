import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_COLOURS
 *
 * 0x57F24253

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
 * @param {number} colorPrimary
 * @param {number} colorSecondary
 */
export function setVehicleColours(vehicle: VehicleIndex, colorPrimary: number, colorSecondary: number): void {
	const setVehicleColours_result = Citizen.invokeNative<void>('0x57F24253', vehicle, colorPrimary, colorSecondary);
	return setVehicleColours_result;
}