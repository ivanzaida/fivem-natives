import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_TYRES_CAN_BURST
 *
 * 0x439C904840715871

 * 
 * Allows you to toggle bulletproof tires.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canBurstTyresFlag
 */
export function setVehicleTyresCanBurst(vehicle: VehicleIndex, canBurstTyresFlag: boolean): void {
	const setVehicleTyresCanBurst_result = Citizen.invokeNative<void>('0x439C904840715871', vehicle, canBurstTyresFlag);
	return setVehicleTyresCanBurst_result;
}