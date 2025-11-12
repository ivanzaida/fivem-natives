import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:TOGGLE_VEHICLE_MOD
 *
 * 0xF5501FF9869DAC7C

 * 
 * This can only be used with the toggle mods specified in the enum
 * 
 * Toggles:
 * UNK17 - 17
 * Turbo - 18
 * UNK19 - 19
 * Tire Smoke - 20
 * UNK21 - 21
 * Xenon Headlights - 22
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @param {boolean} toggleOn
 */
export function toggleVehicleMod(vehicle: VehicleIndex, modSlot: EModType | number, toggleOn: boolean): void {
	const toggleVehicleMod_result = Citizen.invokeNative<void>('0xF5501FF9869DAC7C', vehicle, modSlot, toggleOn);
	return toggleVehicleMod_result;
}