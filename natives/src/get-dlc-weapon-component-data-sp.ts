import { ShopWeaponComponentData } from '@ivanzaida/structures'

/**
 * FILES:GET_DLC_WEAPON_COMPONENT_DATA_SP
 *
 * 0x38A1582CAC3F4E95

 * 
 * Looks up a weapon component in SP based on the supplied dlc index and componentIndex
 * NOTE : (dlcIndex must be inside range: (0 <= dlcIndex < GET_NUM_DLC_WEAPONS()) )
 * NOTE : (componentIndex must be inside range: (0 <= componentIndex < GET_NUM_DLC_WEAPON_COMPONENTS(dlcIndex)) )
 * NOTE : ModType inside scrShopWeaponComponentData returns a hash of the weapon component's attach point name (and not something sensible, like an enum of component types...)
 * 
 * Same as GET_DLC_WEAPON_COMPONENT_DATA but only works for DLC components that are available in SP.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} dlc
 * @param {number} component
 * @param {ShopWeaponComponentData} weaponComponent [Ref]
 * @returns {boolean}  
 */
export function getDlcWeaponComponentDataSp(dlc: number, component: number, weaponComponent: ShopWeaponComponentData /* ptr */): boolean {
	const getDlcWeaponComponentDataSp_result = Citizen.invokeNative<boolean>('0x38A1582CAC3F4E95', dlc, component, weaponComponent.dataView);
	return getDlcWeaponComponentDataSp_result;
}