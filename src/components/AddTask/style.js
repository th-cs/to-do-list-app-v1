import { StyleSheet } from "react-native";
import { theme } from "../../styles/global.js";

export const styles = StyleSheet.create({

	modal: {
		flex: 1,
		padding: 30,
		backgroundColor: theme.colors.background
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20
	},
	input: {
		backgroundColor: "#FFFFFF",
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#DDDDDD"
	},
	btnSave: {
		backgroundColor: theme.colors.primary,
		padding: 15,
		borderRadius: 10,
		alignItems: "center"
	},
	txtCancel: {
		color: "#F00000",
		textAlign: "center"
	}
});
