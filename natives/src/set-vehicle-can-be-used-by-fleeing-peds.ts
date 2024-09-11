import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAN_BE_USED_BY_FLEEING_PEDS
 *
 * 0xD0794C48F637F16C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canBeUsed
 */
export function setVehicleCanBeUsedByFleeingPeds(vehicle: VehicleIndex, canBeUsed: boolean): void {
	const setVehicleCanBeUsedByFleeingPeds_result = Citizen.invokeNative<void>('0xD0794C48F637F16C', vehicle, canBeUsed);
	return setVehicleCanBeUsedByFleeingPeds_result;
}