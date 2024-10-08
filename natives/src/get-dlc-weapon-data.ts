import { ShopWeaponData } from '@ivanzaida/structures'

/**
 * FILES:GET_DLC_WEAPON_DATA
 *
 * 0xDF94727C5BBB298F

 * dlcWeaponIndex takes a number from 0 - GET_NUM_DLC_WEAPONS() - 1.
 * struct DlcWeaponData
 * {
 * int emptyCheck; //use DLC1::IS_CONTENT_ITEM_LOCKED on this
 * int padding1;
 * int weaponHash;
 * int padding2;
 * int unk;
 * int padding3;
 * int weaponCost;
 * int padding4;
 * int ammoCost;
 * int padding5;
 * int ammoType;
 * int padding6;
 * int defaultClipSize;
 * int padding7;
 * char nameLabel[64];
 * char descLabel[64];
 * char desc2Label[64]; // usually "the" + name
 * char upperCaseNameLabel[64];
 * };
 * 
 * ------------------------------------------------------------------
 * @param {number} dlc
 * @param {ShopWeaponData} weapon [Ref]
 * @returns {boolean}  
 */
export function getDlcWeaponData(dlc: number, weapon: ShopWeaponData /* ptr */): boolean {
	const getDlcWeaponData_result = Citizen.invokeNative<boolean>('0xDF94727C5BBB298F', dlc, weapon.dataView);
	return getDlcWeaponData_result;
}