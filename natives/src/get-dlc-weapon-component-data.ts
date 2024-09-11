import { ShopWeaponComponentData } from '@ivanzaida/structures'

/**
 * FILES:GET_DLC_WEAPON_COMPONENT_DATA
 *
 * 0x737024F2814ABDDD

 * Looks up a weapon component based on the supplied dlc index and componentIndex
 * NOTE : (dlcIndex must be inside range: (0 <= dlcIndex < GET_NUM_DLC_WEAPONS()) )
 * NOTE : (componentIndex must be inside range: (0 <= componentIndex < GET_NUM_DLC_WEAPON_COMPONENTS(dlcIndex)) )
 * NOTE : ModType inside scrShopWeaponComponentData returns a hash of the weapon component's attach point name (and not something sensible, like an enum of component types...)
 * p0 seems to be the weapon index
 * p1 seems to be the weapon component index
 * struct DlcComponentData{
 * int attachBone;
 * int padding1;
 * int bActiveByDefault;
 * int padding2;
 * int unk;
 * int padding3;
 * int componentHash;
 * int padding4;
 * int unk2;
 * int padding5;
 * int componentCost;
 * int padding6;
 * char nameLabel[64];
 * char descLabel[64];
 * };
 * 
 * ------------------------------------------------------------------
 * @param {number} dlc
 * @param {number} component
 * @param {ShopWeaponComponentData} weaponComponent [Ref]
 * @returns {boolean}  
 */
export function getDlcWeaponComponentData(dlc: number, component: number, weaponComponent: ShopWeaponComponentData /* ptr */): boolean {
	const getDlcWeaponComponentData_result = Citizen.invokeNative<boolean>('0x737024F2814ABDDD', dlc, component, weaponComponent.dataView);
	return getDlcWeaponComponentData_result;
}