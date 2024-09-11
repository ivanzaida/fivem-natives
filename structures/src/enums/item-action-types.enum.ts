export enum EItemActionTypes {
	NetShopActionInvalid = 3133133477,
	NetShopActionAllot = 1408068829, // Action used when we transfer cash from bank account to wallet.
	NetShopActionRecoup = 2675897736, // Action used when we transfer cash from wallet to bank account.
	NetShopActionEarn = 1445302971, // Action used when we earn cash in-game.
	NetShopActionSpend = 537254313, // Action used when we spend cash in-game.
	NetShopActionPurch = 4265114219, // Action used when we purchase GTA dolars.
	NetShopActionGive = 1376311413, // Action used when we give cash to another player.
	NetShopActionUse = 3561322356, // Action used when we use a certain ineventory item - not sure this will be used at all.
	NetShopActionDeleteChar = 2867939620, // Action used when a character is deleted.
	NetShopActionAcquire = 996896804, // Action used to buy an item at cost 0.
	NetShopActionBuyVehicle = 3397855738, // Action used to buy a vehicle and mods at cost 0.
	NetShopActionBuyItem = 478352891, // Action used to buy a beard, or makeup (really anything that you can only have X out of N different items in the category).
	NetShopActionBuyProperty = 1372920054, // Action used to buy a propterty.
	NetShopActionSellVehicle = 2978375937, // Action used to sell a vehicle.
	NetShopActionBuyVehicleMods = 2346205363, // Action used to buy vehicle mods only.
	NetShopActionCreatePlayerAppearance = 81737122, // Create initial player appearance character.
	NetShopActionSpendLimitedService = 848807939, // Spend on limited service.
	NetShopActionEarnLimitedService = 3189578008, // Spend on limited service.
	NetShopActionBuyWarehouse = 235173372, // Buy a warehouse to store contraband
	NetShopActionBuyContrabandMission = 3276061961, // deducts money for the purchasing of the mission
	NetShopActionAddContraband = 2108234284, // used to change the quantity of contraband in a given warehouse.
	NetShopActionRemoveContraband = 3506213579, // used to change the quantity of contraband in a given warehouse.
	NetShopActionResetBusinessProgress = 784736704, // resets the progress of a business (allows you to change interior and clear supply and product quantities).
	NetShopActionUpdateBusinessGoods = 3408598557, // Updates the supply and product quantities appropriately.
	NetShopActionUpdateWarehouseVehicle = 3578322643, // Updates the vehicles associated with warehouses, where applicable.
	NetShopActionBonus = 4244255149, // Sends anticheat information back to server.
	NetShopActionBuyCasinoChips = 4168223258, // Action to buy casino chips
	NetShopActionSellCasinoChips = 4272818661, // Action to sell casino chips
	NetShopActionUpdateStorageData = 1668906031, // transaction that stores any INT value in the inventory
	NetShopActionBuyUnlock = 2533476052, // Support being able to purchase the new unlock items with both GTA$ and tokens.
}