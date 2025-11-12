import { EPickupType, EWeaponType } from '@ivanzaida/structures'

/**
 * OBJECT:GET_WEAPON_TYPE_FROM_PICKUP_TYPE
 *
 * 0x5A0A30874C8AA5B2

 * 
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} pickupType
 * @returns {EWeaponType}  
 */
export function getWeaponTypeFromPickupType(pickupType: EPickupType | number): EWeaponType {
	const getWeaponTypeFromPickupType_result = Citizen.invokeNative<EWeaponType>('0x5A0A30874C8AA5B2', pickupType);
	return getWeaponTypeFromPickupType_result;
}