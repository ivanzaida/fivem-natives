import { VehicleIndex, EScWheelList } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_TYRE_BURST
 *
 * 0x548F6F43A7CB6F45

 * 
 * IsBurstToRim true will return true only when just the rim remains for the tyre
 * 
 * wheelID used for 4 wheelers seem to be (0, 1, 4, 5)
 * completely - is to check if tire completely gone from rim.
 * 
 * '0 = wheel_lf / bike, plane or jet front
 * '1 = wheel_rf
 * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
 * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
 * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
 * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
 * '45 = 6 wheels trailer mid wheel left
 * '47 = 6 wheels trailer mid wheel right
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScWheelList} wheelNumber
 * @param {boolean} isBurstToRim
 * @returns {boolean}  
 */
export function isVehicleTyreBurst(vehicle: VehicleIndex, wheelNumber: EScWheelList | number, isBurstToRim: boolean = false): boolean {
	const isVehicleTyreBurst_result = Citizen.invokeNative<boolean>('0x548F6F43A7CB6F45', vehicle, wheelNumber, isBurstToRim);
	return isVehicleTyreBurst_result;
}