import { IntRef } from '@ivanzaida/structures'

/**
 * HUD:GET_MENU_LAYOUT_CHANGED_EVENT_DETAILS
 *
 * 0xE869B507D3624306

 * 
 * lastItemMenuId: this is the menuID of the last selected item minus 1000 (lastItem.menuID - 1000)
 * selectedItemMenuId: same as lastItemMenuId except for the currently selected menu item
 * selectedItemUniqueId: this is uniqueID of the currently selected menu item
 * 
 * when the pausemenu is closed:
 * lastItemMenuId = -1
 * selectedItemMenuId = -1
 * selectedItemUniqueId = 0
 * 
 * when the header gains focus:
 * lastItemMenuId updates as normal or 0 if the pausemenu was just opened
 * selectedItemMenuId becomes a unique id for the pausemenu page that focus was taken from (?) or 0 if the pausemenu was just opened
 * selectedItemUniqueId = -1
 * 
 * when focus is moved from the header to a pausemenu page:
 * lastItemMenuId becomes a unique id for the pausemenu page that focus was moved to (?)
 * selectedItemMenuId = -1
 * selectedItemUniqueId updates as normal
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} previousId [Ref]
 * @param {IntRef} nextId [Ref]
 * @param {IntRef} menu [Ref]
 */
export function getMenuLayoutChangedEventDetails(previousId: IntRef /* ptr */, nextId: IntRef /* ptr */, menu: IntRef /* ptr */): void {
	const getMenuLayoutChangedEventDetails_result = Citizen.invokeNative<void>('0xE869B507D3624306', previousId.dataView, nextId.dataView, menu.dataView);
	return getMenuLayoutChangedEventDetails_result;
}