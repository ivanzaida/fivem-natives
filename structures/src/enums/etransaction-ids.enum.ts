export enum EETransactionIds {
	CashTransactionAtm, // Money deposited/withdrawn by the player - this is relation to VC commands - So deposit or withdraw from BANk Account.
	CashTransactionGamer, // Money received/paid from friends.
	CashTransactionStore, // STORE money always credits the BANK account
	CashTransactionBank, // BANK account transaction
}