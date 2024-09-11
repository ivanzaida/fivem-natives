import { VehicleIndex, NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_EXPLODE_HELI
 *
 * 0xB5BD605FB63CDBE6

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} addExplosion
 * @param {boolean} keepDamageEntity
 * @param {NetworkIndex} networkId
 */
export function networkExplodeHeli(vehicle: VehicleIndex, addExplosion: boolean = true, keepDamageEntity: boolean = false, networkId: NetworkIndex = null!): void {
	const networkExplodeHeli_result = Citizen.invokeNative<void>('0xB5BD605FB63CDBE6', vehicle, addExplosion, keepDamageEntity, networkId);
	return networkExplodeHeli_result;
}