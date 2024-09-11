export enum ECatalogItemFlags {
	CatalogItemFlagWalletOnly = 1, // Use only the WALLET in the transaction.
	CatalogItemFlagBankOnly, // Use only the BANK in the transaction.
	CatalogItemFlagBankThenWallet = 4, // Use the BANK then after that the WALLET in the transaction.
	CatalogItemFlagWalletThenBank = 8, // Use the WALLET then after that the BANK in the transaction.
	CatalogItemFlagEvcOnly = 16, // Using Earned Virtual Cash only
	CatalogItemFlagToken = 32, // Using tokens in the transaction.
}