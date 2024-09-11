import { EWeaponType, EDamageType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_DAMAGE_TYPE
 *
 * 0x12974BA350E32306

 * enum class eDamageType
 * {
 * 	UNKNOWN = 0,
 * 	NONE = 1,
 * 	MELEE = 2,
 * 	BULLET = 3,
 * 	BULLET_RUBBER = 4,
 * 	EXPLOSIVE = 5,
 * 	FIRE = 6,
 * 	COLLISION = 7,
 * 	FALL = 8,
 * 	DROWN = 9,
 * 	ELECTRIC = 10,
 * 	BARBED_WIRE = 11,
 * 	FIRE_EXTINGUISHER = 12,
 * 	SMOKE = 13,
 * 	WATER_CANNON = 14,
 * 	TRANQUILIZER = 15,
 * };
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @returns {EDamageType}  
 */
export function getWeaponDamageType(weaponType: EWeaponType | number): EDamageType {
	const getWeaponDamageType_result = Citizen.invokeNative<EDamageType>('0x12974BA350E32306', weaponType);
	return getWeaponDamageType_result;
}