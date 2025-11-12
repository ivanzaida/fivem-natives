import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DISABLE_PROXIMITY_MIGRATION
 *
 * 0xF35461D41398F92C

 * 
 * Prevents the entity dynamically migrating to nearby players, it can still migrate by other means. You need to call this every frame
 * while you need it disabled
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 */
export function networkDisableProximityMigration(networkId: NetworkIndex): void {
	const networkDisableProximityMigration_result = Citizen.invokeNative<void>('0xF35461D41398F92C', networkId);
	return networkDisableProximityMigration_result;
}