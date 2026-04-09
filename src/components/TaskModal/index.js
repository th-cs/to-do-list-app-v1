import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import style from "./style.js";
import {useEffect, useState} from "react";

export default function TaskModal({ visibile, onClose, onSave, taskToEdit }) {
	const [form, setForm] = useState({
		title: "",
		description: "",
		startDate: "",
		endDate: "",
		priority: "Média"
	});

	useEffect(() => {
		if (taskToEdit) setForm(taskToEdit);
		else setForm({
			title: "",
			description: "",
			startDate: "",
			endDate: "",
			priority: "Média"
		});
	}, [taskToEdit, visibile]);
}
