import { IntRef } from '@ivanzaida/structures'

/**
 * ENTITY:SET_VEHICLE_AS_NO_LONGER_NEEDED
 *
 * 0x68298CA6191CDFDB

 * 
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} vehicle [Ref]
 */
export function setVehicleAsNoLongerNeeded(vehicle: IntRef /* ptr */): void {
	const setVehicleAsNoLongerNeeded_result = Citizen.invokeNative<void>('0x68298CA6191CDFDB', vehicle.dataView);
	return setVehicleAsNoLongerNeeded_result;
}