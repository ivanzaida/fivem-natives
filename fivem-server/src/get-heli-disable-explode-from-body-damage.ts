import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_DISABLE_EXPLODE_FROM_BODY_DAMAGE
 *
 * 0x82AFC0A3

 * This is a getter for [SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE](#_0xEDBC8405B3895CC9)
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check
 * @returns {boolean}  Returns `true` if the helicopter is set to be protected from exploding due to minor body damage, `false` otherwise.
 */
export function getHeliDisableExplodeFromBodyDamage(heli: VehicleIndex): boolean {
	const getHeliDisableExplodeFromBodyDamage_result = Citizen.invokeNative<boolean>('0x82AFC0A3', heli);
	return getHeliDisableExplodeFromBodyDamage_result;
}