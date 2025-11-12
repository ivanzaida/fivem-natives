import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DROPS_MONEY_WHEN_BLOWN_UP
 *
 * 0x9E62B9416FD53EBA

 * 
 * Money pickups are created around cars when they explode. Only works when the vehicle model is a car. A single pickup is between 1 and 18 dollars in size. All car models seem to give the same amount of money.
 * 
 * youtu.be/3arlUxzHl5Y
 * i.imgur.com/WrNpYFs.jpg
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} dropsMoney
 */
export function setVehicleDropsMoneyWhenBlownUp(vehicle: VehicleIndex, dropsMoney: boolean): void {
	const setVehicleDropsMoneyWhenBlownUp_result = Citizen.invokeNative<void>('0x9E62B9416FD53EBA', vehicle, dropsMoney);
	return setVehicleDropsMoneyWhenBlownUp_result;
}