import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_CAN_AUTO_VAULT_ON_ENTITY
 *
 * 0x06A3C9A5604F9F4C

 * 
 * Prevent auto vaulting on a particular entity.
 * 
 * p1 always false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} canAutoVault
 */
export function setCanAutoVaultOnEntity(entity: EntityIndex, canAutoVault: boolean): void {
	const setCanAutoVaultOnEntity_result = Citizen.invokeNative<void>('0x06A3C9A5604F9F4C', entity, canAutoVault);
	return setCanAutoVaultOnEntity_result;
}