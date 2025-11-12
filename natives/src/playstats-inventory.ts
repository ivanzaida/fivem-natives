import { Inventory } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_INVENTORY
 *
 * 0x68F94159C38F25F8

 * 
 * Triggers after a snack or armor item type are added to the inventory, removed from the inventory, or consumed outwith the inventory (vending machines, bars etc.). Would trigger each time the item type changes, or after X seconds from the change (set by tunable) that allows for the case where the player hits "buy", "drop" or "use" repeatedly.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {Inventory} data [Ref]
 */
export function playstatsInventory(data: Inventory /* ptr */): void {
	const playstatsInventory_result = Citizen.invokeNative<void>('0x68F94159C38F25F8', data.dataView);
	return playstatsInventory_result;
}