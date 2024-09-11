import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_SCRIPT_ROCKET_BOOST_RECHARGE_TIME
 *
 * 0x3088D7B1F0BD8975

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} rechargeTime
 */
export function setScriptRocketBoostRechargeTime(vehicle: VehicleIndex, rechargeTime: number): void {
	const setScriptRocketBoostRechargeTime_result = Citizen.invokeNative<void>('0x3088D7B1F0BD8975', vehicle, rechargeTime);
	return setScriptRocketBoostRechargeTime_result;
}