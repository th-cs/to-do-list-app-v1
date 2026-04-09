import { StyleSheet } from "react-native";
import { theme } from "../../styles/global";

export const styles = StyleSheet.create({

	card: {
		backgroundColor: "#FFFFFF",
		padding: 15,
		borderRadius: 15,
		marginBottom: 10,
		flexDirection: "row",
		borderLeftWidth: 6,
		elevation: 2
	},
	title: {
		fontSize: 17,
		fontWeight: "bold",
		color: theme.colors.textMain
	},
	description: {
		fontSize: 14,
		fontWeight: "bold",
		color: theme.colors.textSub
	},
	badge: {
		fontSize: 11,
		fontWeight: "bold",
		marginTop: 5
	},
	date: {
		fontSize: 10,
		color: "#94A3B8",
		marginTop: 5
	},
	action: {
		flexDirection: "row",
		gap: 15,
		alignItems: "center",
		marginLeft: 10
	},
	icons: {
		fontSize: 22
	}

});
