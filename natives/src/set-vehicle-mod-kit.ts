import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_MOD_KIT
 *
 * 0xB5AD06DDA85E2E8F

 * 
 * Set modKit to 0 if you plan to call SET_VEHICLE_MOD. That's what the game does. Most body modifications through SET_VEHICLE_MOD will not take effect until this is set to 0.
 * 
 * Full list of vehicle mod kits and mods by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleModKits.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} kit
 */
export function setVehicleModKit(vehicle: VehicleIndex, kit: number): void {
	const setVehicleModKit_result = Citizen.invokeNative<void>('0xB5AD06DDA85E2E8F', vehicle, kit);
	return setVehicleModKit_result;
}