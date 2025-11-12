import { PedIndex, EWeaponType, EGeneralweaponType } from '@ivanzaida/structures'

/**
 * WEAPON:HAS_PED_BEEN_DAMAGED_BY_WEAPON
 *
 * 0x690AB6F5DB2A3A54

 * 
 * It determines what weapons caused damage:
 * 
 * If you want to define only a specific weapon, second parameter=weapon hash code, third parameter=0
 * If you want to define any melee weapon, second parameter=0, third parameter=1.
 * If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {EGeneralweaponType} generalWeaponType
 * @returns {boolean}  
 */
export function hasPedBeenDamagedByWeapon(ped: PedIndex, typeOfWeapon: EWeaponType | number, generalWeaponType: EGeneralweaponType | number = 0): boolean {
	const hasPedBeenDamagedByWeapon_result = Citizen.invokeNative<boolean>('0x690AB6F5DB2A3A54', ped, typeOfWeapon, generalWeaponType);
	return hasPedBeenDamagedByWeapon_result;
}