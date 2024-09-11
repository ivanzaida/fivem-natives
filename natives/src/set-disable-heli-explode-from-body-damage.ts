import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE
 *
 * 0xEDBC8405B3895CC9

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} disableExplode
 */
export function setDisableHeliExplodeFromBodyDamage(vehicle: VehicleIndex, disableExplode: boolean): void {
	const setDisableHeliExplodeFromBodyDamage_result = Citizen.invokeNative<void>('0xEDBC8405B3895CC9', vehicle, disableExplode);
	return setDisableHeliExplodeFromBodyDamage_result;
}