import { VehicleIndex, PedIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_EXCLUSIVE_DRIVER
 *
 * 0x630992D07A32281B

 * 
 * index: 0 - 1
 * 
 * Used to be incorrectly named _SET_VEHICLE_EXCLUSIVE_DRIVER_2
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {PedIndex} ped
 * @param {number} driver
 */
export function setVehicleExclusiveDriver(vehicle: VehicleIndex, ped: PedIndex, driver: number = 0): void {
	const setVehicleExclusiveDriver_result = Citizen.invokeNative<void>('0x630992D07A32281B', vehicle, ped, driver);
	return setVehicleExclusiveDriver_result;
}