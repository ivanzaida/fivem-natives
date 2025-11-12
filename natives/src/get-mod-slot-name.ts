import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_MOD_SLOT_NAME
 *
 * 0x04A81F937A270775

 * 
 * Returns the name for the type of vehicle mod(Armour, engine etc)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @returns {string}  
 */
export function getModSlotName(vehicle: VehicleIndex, modSlot: EModType | number): string {
	const getModSlotName_result = Citizen.invokeNative<string>('0x04A81F937A270775', vehicle, modSlot);
	return getModSlotName_result;
}