import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_TOGGLE_MOD_ON
 *
 * 0x1D5A665629D417A7

 * 
 * Note that modSlot has to be one of the toggle mods or the function always returns false
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @returns {boolean}  
 */
export function isToggleModOn(vehicle: VehicleIndex, modSlot: EModType | number): boolean {
	const isToggleModOn_result = Citizen.invokeNative<boolean>('0x1D5A665629D417A7', vehicle, modSlot);
	return isToggleModOn_result;
}