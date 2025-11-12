import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_IN_CAR_MOD_SHOP
 *
 * 0x20DA3970E29472BE

 * 
 * If set to TRUE, it seems to suppress door noises and doesn't allow the horn to be continuous.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} inCarModShop
 */
export function setVehicleInCarModShop(vehicle: VehicleIndex, inCarModShop: boolean): void {
	const setVehicleInCarModShop_result = Citizen.invokeNative<void>('0x20DA3970E29472BE', vehicle, inCarModShop);
	return setVehicleInCarModShop_result;
}