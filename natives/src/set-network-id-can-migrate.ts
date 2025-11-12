import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_ID_CAN_MIGRATE
 *
 * 0x8FC511FC963C67E5

 * 
 * Whether or not another player is allowed to take control of the entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} canMigrate
 */
export function setNetworkIdCanMigrate(networkId: NetworkIndex, canMigrate: boolean): void {
	const setNetworkIdCanMigrate_result = Citizen.invokeNative<void>('0x8FC511FC963C67E5', networkId, canMigrate);
	return setNetworkIdCanMigrate_result;
}