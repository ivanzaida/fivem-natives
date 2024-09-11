import { ObjectIndex } from '@ivanzaida/structures'

/**
 * WEAPON:REQUEST_WEAPON_HIGH_DETAIL_MODEL
 *
 * 0x8E453F6C5ABDD9DC

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 */
export function requestWeaponHighDetailModel(object: ObjectIndex): void {
	const requestWeaponHighDetailModel_result = Citizen.invokeNative<void>('0x8E453F6C5ABDD9DC', object);
	return requestWeaponHighDetailModel_result;
}