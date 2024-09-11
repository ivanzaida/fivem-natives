export enum EStorePurchaseLocation {
	SplUnknown,
	SplScui,
	SplIngame, // Pause menu 'Store' tab
	SplStore, // All insufficient fund alerts
	SplPhone, // Contact requests
	SplAmbient, // Most ambient script systems
	SplOnlineTab, // Pause menu 'Online' tab
	SplStoreGun, // Direct access from shop
	SplStoreCloth, // Direct access from shop
	SplStoreHair, // Direct access from shop
	SplStoreCarmod, // Direct access from shop
	SplStoreTattoo, // Direct access from shop
	SplStorePersonalMod, // Direct access from shop
	SplStarterPack, // Pause menu 'Online' tab starter pack option
	SplLandingMp, // A landing page ol-menu button
	SplLandingSpUpsell, // The single player upsell page
	SplPriorityFeed, // The priority feed
	SplWhatsNew, // the whats new feed
	SplMembershipIngame, // The membership button in-game from the online tab
	SplPausePlaySp, // The play single player button from the MP pause menu when SP is not owned
	SplCharacterSelectionWheel, // The character selection whell when SP is not owned
}