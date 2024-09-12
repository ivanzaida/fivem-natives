import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_GAS_TANK_HEALTH
 *
 * 0XD4EC7858

 * Note This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check
 * @returns {number}  Returns the current health of the helicopter's gas tank.
 */
export function getHeliGasTankHealth(heli: VehicleIndex): number {
	const getHeliGasTankHealth_result = Citizen.invokeNative<number>('0XD4EC7858', heli);
	return getHeliGasTankHealth_result;
}