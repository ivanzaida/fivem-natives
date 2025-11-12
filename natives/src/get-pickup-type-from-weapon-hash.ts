import { EWeaponType, EPickupType } from '@ivanzaida/structures'

/**
 * OBJECT:GET_PICKUP_TYPE_FROM_WEAPON_HASH
 *
 * 0x9D3736A21578FCE2

 * 
 * Returns the pickup hash for the given weapon hash
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @returns {EPickupType}  
 */
export function getPickupTypeFromWeaponHash(weaponType: EWeaponType | number): EPickupType {
	const getPickupTypeFromWeaponHash_result = Citizen.invokeNative<EPickupType>('0x9D3736A21578FCE2', weaponType);
	return getPickupTypeFromWeaponHash_result;
}