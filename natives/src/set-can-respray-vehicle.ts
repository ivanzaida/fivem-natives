import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CAN_RESPRAY_VEHICLE
 *
 * 0x8F0EA4C49C452445

 * 
 * Hardcoded to not work in multiplayer.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canChangeColourFlag
 */
export function setCanResprayVehicle(vehicle: VehicleIndex, canChangeColourFlag: boolean): void {
	const setCanResprayVehicle_result = Citizen.invokeNative<void>('0x8F0EA4C49C452445', vehicle, canChangeColourFlag);
	return setCanResprayVehicle_result;
}