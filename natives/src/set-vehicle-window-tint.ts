import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_WINDOW_TINT
 *
 * 0xFE620ED8E0A3C209

 * 
 * enum WindowTints
 * {
 *  WINDOWTINT_NONE,
 *   WINDOWTINT_PURE_BLACK,
 *     WINDOWTINT_DARKSMOKE,
 *  WINDOWTINT_LIGHTSMOKE,
 *     WINDOWTINT_STOCK,
 *  WINDOWTINT_LIMO,
 *   WINDOWTINT_GREEN
 * };
 * Full list of all vehicle window tints by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} color
 */
export function setVehicleWindowTint(vehicle: VehicleIndex, color: number): void {
	const setVehicleWindowTint_result = Citizen.invokeNative<void>('0xFE620ED8E0A3C209', vehicle, color);
	return setVehicleWindowTint_result;
}