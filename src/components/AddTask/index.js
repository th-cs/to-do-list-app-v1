import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style.js";

export default function AddTask({ visible, onSave, onClose }){
	const [task, setTask] = useState({
		title: "",
		description: "",
		priority: "",
		startDate: "",
		endDate: ""
	});

	const handleSave = () => {
		onSave(task);
		setTask({
			title: "",
			description: "",
			priority: "",
			startDate: "",
			endDate: ""
		});
	}

	return(
		<Modal
			visible={visible}
			animationType="slide">
			<View style={styles.modal}>
				<Text style={styles.title}>
					Nova tarefa
				</Text>
				<TextInput
					style={styles.input}
					placeholder="Título da tarefa"
					onChangeText={t => setTask({
						...task, title: t
					})} />
				<TextInput
					style={styles.input}
					placeholder="Descrição da tarefa"
					onChangeText={t => setTask({
						...task, description: t
					})} />
				<TextInput
					style={styles.input}
					placeholder="Data de início: DD/MM"
					onChangeText={t => setTask({
						...task, startDate: t
					})} />
				<TextInput
					style={styles.input}
					placeholder="Data de conclusão: DD/MM"
					onChangeText={t => setTask({
						...task, endDate: t
					})} />
				<TextInput
					style={styles.priority}
					placeholder="Prioridade: Alta/Média/Baixa"
					onChangeText={t => setTask({
						...task, priority: t
					})} />

				<TouchableOpacity
					style={styles.btnSave}
					onPress={handleSave}>
					<Text>
						Salvar tarefa
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={onClose}>
					<Text style={styles.txtCancel}>
						Cancelar
					</Text>
				</TouchableOpacity>
0
			</View>
		</Modal>
	);
}
